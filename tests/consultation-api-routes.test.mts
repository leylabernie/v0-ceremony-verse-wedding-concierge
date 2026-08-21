import assert from "node:assert/strict"
import test from "node:test"
import { NextRequest } from "next/server"
import { POST as submitConsultation } from "../app/api/consultation/route"
import { POST as submitQuestionnaire } from "../app/api/consultation-questionnaire/route"

const originalFetch = globalThis.fetch

type MockContext = {
  redis: Map<string, string>
  successfulEmails: Array<Record<string, unknown>>
  failResend: boolean
}

function withMockedServices(run: (context: MockContext) => Promise<void>) {
  return async () => {
    const context: MockContext = { redis: new Map(), successfulEmails: [], failResend: false }
    const previousEnv = {
      upstashUrl: process.env.UPSTASH_REDIS_REST_URL,
      upstashToken: process.env.UPSTASH_REDIS_REST_TOKEN,
      resendKey: process.env.RESEND_API_KEY,
      from: process.env.CEREMONYVERSE_LEAD_FROM_EMAIL,
    }

    process.env.UPSTASH_REDIS_REST_URL = "https://redis.internal.test"
    process.env.UPSTASH_REDIS_REST_TOKEN = "internal-test-token"
    process.env.RESEND_API_KEY = "internal-test-key"
    process.env.CEREMONYVERSE_LEAD_FROM_EMAIL = "CeremonyVerse <qa@ceremonyverse.test>"

    globalThis.fetch = async (input, init) => {
      const url = typeof input === "string" ? input : input.toString()

      if (url === "https://redis.internal.test") {
        const [operation, key, value, ...options] = JSON.parse(String(init?.body)) as string[]
        if (operation === "GET") return Response.json({ result: context.redis.get(key) || null })
        if (operation === "DEL") return Response.json({ result: context.redis.delete(key) ? 1 : 0 })
        if (operation === "SET") {
          if (options.includes("NX") && context.redis.has(key)) return Response.json({ result: null })
          context.redis.set(key, value)
          return Response.json({ result: "OK" })
        }
        return Response.json({ error: "Unsupported command" }, { status: 400 })
      }

      if (url === "https://api.resend.com/emails") {
        if (context.failResend) return Response.json({ message: "delivery unavailable" }, { status: 503 })
        context.successfulEmails.push(JSON.parse(String(init?.body)) as Record<string, unknown>)
        return Response.json({ id: `email-${context.successfulEmails.length}` }, { status: 200 })
      }

      throw new Error(`Unexpected external request: ${url}`)
    }

    try {
      await run(context)
    } finally {
      globalThis.fetch = originalFetch
      process.env.UPSTASH_REDIS_REST_URL = previousEnv.upstashUrl
      process.env.UPSTASH_REDIS_REST_TOKEN = previousEnv.upstashToken
      process.env.RESEND_API_KEY = previousEnv.resendKey
      process.env.CEREMONYVERSE_LEAD_FROM_EMAIL = previousEnv.from
    }
  }
}

function postJson(path: string, body: Record<string, unknown>, ip: string) {
  return new NextRequest(`https://www.ceremonyverse.com${path}`, {
    method: "POST",
    headers: {
      origin: "https://www.ceremonyverse.com",
      "content-type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  })
}

function leadBody(submissionId: string) {
  return {
    serviceInterest: "Destination wedding planning",
    name: "CeremonyVerse Internal QA",
    email: "internal-qa@ceremonyverse.test",
    eventTimeframe: "October 2027",
    privacyConsent: true,
    website: "",
    submissionId,
  }
}

function questionnaireBody(requestId: string) {
  return {
    requestId,
    serviceFocus: "Destination wedding planning",
    name: "CeremonyVerse Internal QA",
    email: "internal-qa@ceremonyverse.test",
    relationship: "Bride",
    weddingTimeframe: "October 2027",
    dateFlexibility: "Month is fixed; dates are flexible",
    weekdayAvailability: "Maybe — depends on pricing and travel",
    planningSupportStatus: "",
    topPriorities: "A clear family planning path",
    privacyConsent: true,
    website: "",
  }
}

test("consultation API creates one request and reuses it before questionnaire completion", withMockedServices(async (context) => {
  const submissionId = "3c508e25-70db-4d95-9a47-565e118ce293"
  const first = await submitConsultation(postJson("/api/consultation", leadBody(submissionId), "198.51.100.1"))
  const firstPayload = await first.json()
  assert.equal(first.status, 200)
  assert.equal(firstPayload.success, true)
  assert.equal(firstPayload.deduplicated, false)
  assert.equal(context.successfulEmails.length, 2)

  const repeat = await submitConsultation(postJson("/api/consultation", leadBody(submissionId), "198.51.100.2"))
  const repeatPayload = await repeat.json()
  assert.equal(repeat.status, 200)
  assert.equal(repeatPayload.deduplicated, true)
  assert.equal(repeatPayload.requestId, firstPayload.requestId)
  assert.equal(repeatPayload.questionnaireCompleted, false)
  assert.equal(context.successfulEmails.length, 2)
}))

test("questionnaire API keeps failed delivery retryable then suppresses post-completion repeats", withMockedServices(async (context) => {
  const submissionId = "704eedda-16f2-4292-8b85-5af5e30f2bea"
  const lead = await submitConsultation(postJson("/api/consultation", leadBody(submissionId), "198.51.100.3"))
  const leadPayload = await lead.json()
  assert.equal(context.successfulEmails.length, 2)

  context.failResend = true
  const failed = await submitQuestionnaire(postJson("/api/consultation-questionnaire", questionnaireBody(leadPayload.requestId), "198.51.100.4"))
  assert.equal(failed.status, 503)

  context.failResend = false
  const completed = await submitQuestionnaire(postJson("/api/consultation-questionnaire", questionnaireBody(leadPayload.requestId), "198.51.100.5"))
  const completedPayload = await completed.json()
  assert.equal(completed.status, 200)
  assert.equal(completedPayload.questionnaireCompleted, true)
  assert.equal(context.successfulEmails.length, 3)

  const repeatQuestionnaire = await submitQuestionnaire(postJson("/api/consultation-questionnaire", questionnaireBody(leadPayload.requestId), "198.51.100.6"))
  const repeatQuestionnairePayload = await repeatQuestionnaire.json()
  assert.equal(repeatQuestionnaire.status, 200)
  assert.equal(repeatQuestionnairePayload.alreadyCompleted, true)
  assert.equal(context.successfulEmails.length, 3)

  const repeatLead = await submitConsultation(postJson("/api/consultation", leadBody(submissionId), "198.51.100.7"))
  const repeatLeadPayload = await repeatLead.json()
  assert.equal(repeatLead.status, 200)
  assert.equal(repeatLeadPayload.deduplicated, true)
  assert.equal(repeatLeadPayload.questionnaireCompleted, true)
  assert.equal(context.successfulEmails.length, 3)
}))
