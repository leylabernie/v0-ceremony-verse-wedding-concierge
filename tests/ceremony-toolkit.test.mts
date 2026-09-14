import assert from "node:assert/strict"
import test from "node:test"
import { NextRequest } from "next/server"
import { POST } from "../app/api/ceremony-toolkit/route"
import { buildTimeline, symbolicSegments, timelineText, VENUES, BUDGETS } from "../lib/ceremony-toolkit"

const valid = { names: "Test Couple", email: "couple@example.test", weddingDate: "2027-02-28", venue: VENUES[1], budget: BUDGETS[1], kind: "symbolic", startTime: "16:00", duration: 90, guests: 100, privacyConsent: true, planningConsent: false, website: "" }
function request(body: object = valid, origin = "https://www.ceremonyverse.com") {
  return new NextRequest("https://www.ceremonyverse.com/api/ceremony-toolkit/", { method: "POST", headers: { origin, "content-type": "application/json", "x-vercel-forwarded-for": "198.51.100.1" }, body: JSON.stringify(body) })
}
function services(run: (context: { store: Map<string,string>; emails: Record<string,unknown>[]; failEmail: boolean; failStorage: boolean }) => Promise<void>) {
  return async () => {
    const originalFetch = globalThis.fetch
    const variables = ["UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN", "RESEND_API_KEY", "CEREMONYVERSE_LEAD_FROM_EMAIL"]
    const previous = variables.map(v => process.env[v])
    variables.forEach((v,i) => { process.env[v] = i === 0 ? "https://redis.toolkit.test" : "test-value" })
    const context = { store: new Map<string,string>(), emails: [] as Record<string,unknown>[], failEmail: false, failStorage: false }
    globalThis.fetch = async (input, init) => {
      if (String(input) === "https://api.resend.com/emails") {
        if (context.failEmail) return Response.json({}, { status: 503 })
        context.emails.push(JSON.parse(String(init?.body)))
        return Response.json({ id: "test-email" })
      }
      assert.equal(String(input), "https://redis.toolkit.test")
      if (context.failStorage) return Response.json({}, { status: 503 })
      const [operation, key, value, ...args] = JSON.parse(String(init?.body))
      if (operation === "GET") return Response.json({ result: context.store.get(key) || null })
      if (operation === "SET") {
        if (args.includes("NX") && context.store.has(key)) return Response.json({ result: null })
        context.store.set(key, value); return Response.json({ result: "OK" })
      }
      if (operation === "EVAL" && key.includes("INCR")) {
        const counterKey = args[0]; const count = Number(context.store.get(counterKey) || 0) + 1
        context.store.set(counterKey, String(count)); return Response.json({ result: count })
      }
      if (operation === "EVAL") {
        const [lockKey, token] = args
        if (context.store.get(lockKey) === token) context.store.delete(lockKey)
        return Response.json({ result: 1 })
      }
      throw new Error("Unexpected Redis operation")
    }
    try { await run(context) } finally {
      globalThis.fetch = originalFetch
      variables.forEach((v,i) => { if (previous[i] === undefined) delete process.env[v]; else process.env[v] = previous[i] })
    }
  }
}

test("symbolic segments total 12 minutes and local timelines handle midnight", () => {
  assert.equal(symbolicSegments.reduce((n, s) => n + s.minutes, 0), 12)
  const rows = buildTimeline({ kind: "symbolic", startTime: "23:55", duration: 90, guests: 180 })
  assert.equal(rows.find(r => r.title === "Ceremony closes")?.time, "12:07 AM (next day)")
  assert.equal(rows.find(r => r.title === "Guest arrival & seating")?.time, "11:10 PM")
  assert.match(buildTimeline({ kind: "hindu", startTime: "00:30", duration: 90, guests: 100 })[0].time, /previous day/)
  assert.throws(() => buildTimeline({ kind: "hindu", startTime: "24:99", duration: 90, guests: 0 }))
  assert.match(timelineText({ kind: "hindu", startTime: "16:00", duration: 60, guests: 80 }, { names: "A & B", weddingDate: "", venue: "Not decided" }), /5:00 PM — Ceremony closes/)
})

test("invalid origin, date, privacy consent and bot requests never deliver", services(async context => {
  assert.equal((await POST(request(valid, "https://attacker.test"))).status, 403)
  for (const bad of [{ ...valid, weddingDate: "2027-02-30" }, { ...valid, privacyConsent: false }, { ...valid, website: "spam" }, { ...valid, guests: 1001 }, { ...valid, startTime: "25:00" }]) assert.equal((await POST(request(bad))).status, 400)
  assert.equal(context.emails.length, 0); assert.equal(context.store.size, 0)
}))

test("successful resource capture stores consent and emails only the owner; repeat is deduplicated", services(async context => {
  const first = await POST(request())
  assert.equal(first.status, 200); assert.equal((await first.json()).repeated, false)
  assert.equal(context.emails.length, 1)
  assert.deepEqual(context.emails[0].to, ["hello@ceremonyverse.com"])
  assert.match(String(context.emails[0].text), /NO — fulfil the resource request only/)
  assert.match(String(context.emails[0].text), /not a consultation request/)
  const stored = [...context.store.entries()].find(([key]) => key.includes(":lead:"))
  assert.ok(stored)
  const record = JSON.parse(stored[1]); assert.equal(record.planningConsent, false); assert.ok(record.receivedAt); assert.ok(record.privacyConsentText)
  assert.equal((await (await POST(request())).json()).repeated, true)
  assert.equal(context.emails.length, 1)
  assert.equal([...context.store.keys()].some(k => k.includes(":consultation:")), false)
}))

test("delivery outages remain retryable and consent changes create distinct records", services(async context => {
  context.failEmail = true
  assert.equal((await POST(request())).status, 503)
  context.failEmail = false
  assert.equal((await POST(request())).status, 200)
  assert.equal((await POST(request({ ...valid, planningConsent: true }))).status, 200)
  assert.equal(context.emails.length, 2)
  assert.match(String(context.emails[1].text), /Planning follow-up permission: YES/)
}))

test("storage outage cannot report success or send mail", services(async context => {
  context.failStorage = true
  assert.equal((await POST(request())).status, 503)
  assert.equal(context.emails.length, 0)
}))

test("durable rate limit prevents an eleventh distinct request from the same source", services(async context => {
  for (let i=0;i<10;i++) assert.equal((await POST(request({ ...valid, email: `couple${i}@example.test` }))).status, 200)
  assert.equal((await POST(request({ ...valid, email: "blocked@example.test" }))).status, 429)
  assert.equal(context.emails.length, 10)
}))
