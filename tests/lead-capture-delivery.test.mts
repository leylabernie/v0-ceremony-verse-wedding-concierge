import assert from "node:assert/strict"
import test from "node:test"
import { NextRequest } from "next/server"
import { POST } from "../app/api/lead-capture/route"
import { buildCalculatorResultsEmail } from "../lib/emails/calculator-results"

const lead = { name: "Test Person", email: "qa@example.com", source: "calculator", calculatorType: "budget-planner", results: { total: 13200, contingency: 1200 } }

async function withMail(deliver: (payload: any) => boolean, run: (emails: any[]) => Promise<void>) {
  const originalFetch = globalThis.fetch
  const keys = ["RESEND_API_KEY", "CEREMONYVERSE_LEAD_FROM_EMAIL", "LEAD_SHEET_WEBHOOK_URL", "FOLLOW_UP_WEBHOOK_URL", "ESCALATION_WEBHOOK_URL"]
  const originalEnv = Object.fromEntries(keys.map(key => [key, process.env[key]]))
  for (const key of keys) delete process.env[key]
  process.env.RESEND_API_KEY = "local-test-key"
  process.env.CEREMONYVERSE_LEAD_FROM_EMAIL = "qa@ceremonyverse.com"
  const emails: any[] = []
  globalThis.fetch = async (url, options) => {
    assert.equal(String(url), "https://api.resend.com/emails")
    const payload = JSON.parse(String(options?.body))
    emails.push(payload)
    return new Response("{}", { status: deliver(payload) ? 200 : 503 })
  }
  try { await run(emails) } finally {
    globalThis.fetch = originalFetch
    for (const key of keys) {
      if (originalEnv[key] === undefined) delete process.env[key]
      else process.env[key] = originalEnv[key]
    }
  }
}

const request = (body: unknown, origin = "https://www.ceremonyverse.com") => new NextRequest("https://www.ceremonyverse.com/api/lead-capture/", {
  method: "POST", headers: { origin, "Content-Type": "application/json" }, body: JSON.stringify(body),
})

test("calculator succeeds only after the worksheet and business request are accepted", async () => {
  await withMail(() => true, async emails => {
    const response = await POST(request(lead))
    assert.equal(response.status, 200)
    assert.equal((await response.json()).delivery.confirmationEmail, true)
    assert.equal(emails.length, 2)
    const customer = emails.find(email => email.to.includes(lead.email))
    assert.match(customer.text, /13200/)
    assert.match(customer.text, /1200/)
    assert.match(customer.text, /Is this the complete cost\?/)
    assert.match(customer.text, /before-signing-indian-wedding-resort-proposal/)
  })
})

test("total delivery failure stays retryable and never reports success", async () => {
  await withMail(() => false, async () => {
    const response = await POST(request(lead))
    assert.equal(response.status, 503)
    assert.equal((await response.json()).success, false)
  })
})

test("a business-only delivery does not promise a customer worksheet email", async () => {
  await withMail(email => email.to.includes("hello@ceremonyverse.com"), async () => {
    const response = await POST(request(lead))
    assert.equal(response.status, 503)
    const result = await response.json()
    assert.equal(result.delivery.business, true)
    assert.equal(result.delivery.confirmationEmail, false)
    assert.equal(result.success, false)
  })
})

test("chat success requires a business handoff without pretending to email a worksheet", async () => {
  await withMail(() => true, async emails => {
    const response = await POST(request({ ...lead, source: "chat" }))
    assert.equal(response.status, 200)
    assert.equal(emails.length, 1)
    assert.deepEqual(emails[0].to, ["hello@ceremonyverse.com"])
  })
})

test("cross-origin requests do not send mail", async () => {
  await withMail(() => true, async emails => {
    const response = await POST(request(lead, "https://unrelated.example"))
    assert.equal(response.status, 403)
    assert.equal(emails.length, 0)
  })
})

test("worksheet HTML escapes user-controlled names and results", () => {
  const email = buildCalculatorResultsEmail({ name: "<script>alert(1)</script>", calculatorType: "budget", results: { note: "<img src=x onerror=alert(1)>" } })
  assert.doesNotMatch(email.html, /<script>|<img/)
  assert.match(email.html, /&lt;img/)
  assert.match(email.text, /<img src=x/)
})

test("identical retries preserve provider payloads and request identifiers", async () => {
  await withMail(() => true, async emails => {
    const first = await POST(request(lead))
    const second = await POST(request(lead))
    assert.equal((await first.json()).requestId, (await second.json()).requestId)
    assert.deepEqual(emails.slice(0, 2), emails.slice(2, 4))
  })
})
