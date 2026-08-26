import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { createConsultationRequestStateStore } from "../lib/consultation-request-state.mjs"
import { nurtureMessageFor } from "../lib/consultation-nurture"

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8")
const questionnaire = read("../components/pages/consultation-questionnaire-page.tsx")
const questionnaireRoute = read("../app/api/consultation-questionnaire/route.ts")
const completionRoute = read("../app/api/consultation-completed/route.ts")
const preferenceRoute = read("../app/api/nurture-preferences/route.ts")
const cronRoute = read("../app/api/cron/consultation-nurture/route.ts")
const nurture = read("../lib/consultation-nurture.ts")
const vercel = read("../vercel.json")

function createMemoryRedisCommand() {
  const values = new Map<string, string>()
  const sorted = new Map<string, Map<string, number>>()

  return async ([operation, key, ...args]: [string, string, ...unknown[]]) => {
    if (operation === "GET") return values.get(key) || null
    if (operation === "DEL") return values.delete(key) ? 1 : 0
    if (operation === "SET") {
      const [value, ...options] = args as [string, ...string[]]
      if (options.includes("NX") && values.has(key)) return null
      values.set(key, value)
      return "OK"
    }
    if (operation === "ZADD") {
      const [score, member] = args as [number, string]
      const entries = sorted.get(key) || new Map<string, number>()
      entries.set(member, Number(score))
      sorted.set(key, entries)
      return 1
    }
    if (operation === "ZREM") {
      const [member] = args as [string]
      return sorted.get(key)?.delete(member) ? 1 : 0
    }
    if (operation === "ZRANGEBYSCORE") {
      const [, max, , , limit] = args as [string, number, string, number, number]
      return [...(sorted.get(key)?.entries() || [])]
        .filter(([, score]) => score <= Number(max))
        .sort(([, left], [, right]) => left - right)
        .slice(0, Number(limit))
        .map(([member]) => member)
    }
    throw new Error(`Unsupported Redis operation: ${operation}`)
  }
}

test("only an opted-in completed consultation enters the nurture queue", async () => {
  const store = createConsultationRequestStateStore({ command: createMemoryRedisCommand(), ttlSeconds: 60 })
  const requestId = "11111111-1111-4111-8111-111111111111"
  const claimed = await store.claim("lead-hash", {
    requestId,
    questionnaireUrl: "/consultation-questionnaire/?request=" + requestId,
    email: "couple@example.com",
    firstName: "Asha",
  })

  await store.markQuestionnaireSent(claimed.state)
  await store.markQuestionnaireCompleted(requestId, { nurtureConsent: true })
  const completed = await store.markConsultationCompleted(requestId, {
    nurtureNote: "Confirm indoor weather backup in writing.",
  })

  assert.equal(completed.transitioned, true)
  assert.equal(completed.nurtureEligible, true)
  const due = await store.claimDueNurture({ now: Date.now() + 1 })
  assert.equal(due.length, 1)
  assert.equal(due[0].requestId, requestId)
  assert.equal(due[0].nurtureNote, "Confirm indoor weather backup in writing.")
})

test("a completed consultation without separate consent does not enter nurture", async () => {
  const store = createConsultationRequestStateStore({ command: createMemoryRedisCommand(), ttlSeconds: 60 })
  const requestId = "22222222-2222-4222-8222-222222222222"
  const claimed = await store.claim("no-consent-hash", {
    requestId,
    questionnaireUrl: "/consultation-questionnaire/?request=" + requestId,
    email: "couple@example.com",
  })

  await store.markQuestionnaireSent(claimed.state)
  await store.markQuestionnaireCompleted(requestId, { nurtureConsent: false })
  const completed = await store.markConsultationCompleted(requestId)

  assert.equal(completed.nurtureEligible, false)
  assert.deepEqual(await store.claimDueNurture({ now: Date.now() + 1 }), [])
})

test("nurture copy preserves separate paid-service scope and an opt-out route", () => {
  const first = nurtureMessageFor({
    requestId: "33333333-3333-4333-8333-333333333333",
    firstName: "Riya",
    nurtureStep: 0,
    nurtureNote: "Ask for room-block pickup terms.",
  })
  const third = nurtureMessageFor({ requestId: "33333333-3333-4333-8333-333333333333", nurtureStep: 2 })

  assert.match(first?.text || "", /Ask for room-block pickup terms\./)
  assert.match(first?.html || "", /Stop these follow-ups|ask to stop planning follow-ups/)
  assert.match(third?.text || "", /does not promise savings, bookings, or venue outcomes/)
})

test("the website keeps nurture consent optional and only starts follow-up after explicit completion", () => {
  assert.match(questionnaire, /nurtureConsent: boolean/)
  assert.match(questionnaire, /This is optional, and I can ask to stop at any time\./)
  assert.match(questionnaireRoute, /nurtureConsent: z\.boolean\(\)\.optional\(\)\.default\(false\)/)
  assert.match(questionnaireRoute, /completionData: \{ nurtureConsent: parsed\.data\.nurtureConsent \}/)
  assert.match(completionRoute, /validConsultationCompletionToken/)
  assert.match(completionRoute, /markConsultationCompleted/)
  assert.match(completionRoute, /Complete the pre-call questionnaire before recording the consultation\./)
  assert.match(preferenceRoute, /validNurtureOptOutToken/)
  assert.match(preferenceRoute, /withdrawNurture/)
})

test("the nurture runner is secured, idempotent-aware, and scheduled daily", () => {
  assert.match(cronRoute, /CRON_SECRET/)
  assert.match(cronRoute, /claimDueNurture/)
  assert.match(cronRoute, /advanceNurture/)
  assert.match(cronRoute, /releaseNurtureLock/)
  assert.match(nurture, /consultation-nurture-\$\{state\.requestId\}-\$\{Number\(state\.nurtureStep \|\| 0\)\}/)
  assert.match(vercel, /\/api\/cron\/consultation-nurture/)
  assert.match(vercel, /10 14 \* \* \*/)
})
