import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { consultationDedupeKey, createConsultationDeliveryStore } from "../lib/consultation-dedup.mjs"
import {
  consultationRequestDedupeHash,
  createConsultationRequestStateStore,
} from "../lib/consultation-request-state.mjs"
import { finalizeConsultationQuestionnaire } from "../lib/consultation-questionnaire-lifecycle.mjs"
import { finalizeConsultationRegistration } from "../lib/consultation-registration-lifecycle.mjs"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const route = read("../app/api/consultation/route.ts")
const contact = read("../components/pages/contact-page.tsx")
const email = read("../lib/consultation-email.ts")
const questionnaireRoute = read("../app/api/consultation-questionnaire/route.ts")
const registrationLifecycle = read("../lib/consultation-registration-lifecycle.mjs")

function createMemoryRedisCommand() {
  const values = new Map()

  return async ([operation, key, value, ...options]) => {
    if (operation === "GET") return values.get(key) || null
    if (operation === "DEL") return values.delete(key) ? 1 : 0
    if (operation === "SET") {
      if (options.includes("NX") && values.has(key)) return null
      values.set(key, value)
      return "OK"
    }
    throw new Error(`Unsupported Redis operation: ${operation}`)
  }
}

test("repeated normalized consultation data reuses one delivery during the in-memory dedupe window", () => {
  const store = createConsultationDeliveryStore(1_000)
  const key = consultationDedupeKey([" HELLO@CEREMONyverse.com ", "CeremonyVerse  Internal QA", "Destination wedding planning", " March 2027 "])
  const first = store.set(key, {
    requestId: "request-1",
    questionnaireUrl: "/consultation-questionnaire/?request=request-1&type=destination",
    questionnaireSent: true,
  }, 100)

  assert.equal(store.get(key, 500), first)
  assert.equal(store.size(), 1)
  assert.equal(store.get(key, 1_101), undefined)
})

test("durable request state reuses a completed questionnaire without creating a new request", async () => {
  const store = createConsultationRequestStateStore({ command: createMemoryRedisCommand(), ttlSeconds: 60 })
  const dedupeHash = consultationRequestDedupeHash("same browser submission")
  const first = await store.claim(dedupeHash, {
    requestId: "request-1",
    questionnaireUrl: "/consultation-questionnaire/?request=request-1&type=destination",
  })

  assert.equal(first.created, true)
  await store.markQuestionnaireSent(first.state)
  const completed = await store.markQuestionnaireCompleted("request-1")
  assert.equal(completed.transitioned, true)

  const repeat = await store.claim(dedupeHash, {
    requestId: "request-2",
    questionnaireUrl: "/consultation-questionnaire/?request=request-2&type=destination",
  })
  assert.equal(repeat.created, false)
  assert.equal(repeat.state.requestId, "request-1")
  assert.equal(repeat.state.status, "questionnaire_completed")
})

test("registration lifecycle sends the initial lead and questionnaire exactly once", async () => {
  const calls = { lead: 0, questionnaire: 0, sent: 0, forgotten: 0 }
  const stateStore = {
    async claim(_, initialState) {
      return { created: true, state: { ...initialState, status: "created" } }
    },
    async markQuestionnaireSent() {
      calls.sent += 1
    },
    async forget() {
      calls.forgotten += 1
    },
  }

  const result = await finalizeConsultationRegistration({
    stateStore,
    dedupeHash: "hash",
    initialState: { requestId: "request-1", questionnaireUrl: "/questionnaire?request=request-1" },
    deliverLead: async () => {
      calls.lead += 1
      return true
    },
    sendQuestionnaire: async () => {
      calls.questionnaire += 1
      return true
    },
  })

  assert.equal(result.success, true)
  assert.equal(result.deduplicated, false)
  assert.deepEqual(calls, { lead: 1, questionnaire: 1, sent: 1, forgotten: 0 })
})

test("registration lifecycle reuses an incomplete request without re-delivering the lead", async () => {
  const calls = { lead: 0, questionnaire: 0, sent: 0 }
  const stateStore = {
    async claim() {
      return { created: false, state: { requestId: "request-1", questionnaireUrl: "/questionnaire?request=request-1", status: "questionnaire_sent" } }
    },
    async markQuestionnaireSent() {
      calls.sent += 1
    },
    async forget() {},
  }

  const result = await finalizeConsultationRegistration({
    stateStore,
    dedupeHash: "hash",
    initialState: { requestId: "request-2", questionnaireUrl: "/questionnaire?request=request-2" },
    deliverLead: async () => {
      calls.lead += 1
      return true
    },
    sendQuestionnaire: async () => {
      calls.questionnaire += 1
      return true
    },
  })

  assert.equal(result.success, true)
  assert.equal(result.deduplicated, true)
  assert.equal(result.questionnaireCompleted, false)
  assert.deepEqual(calls, { lead: 0, questionnaire: 0, sent: 0 })
})

test("registration lifecycle reuses a completed request without another invitation", async () => {
  let invitationCount = 0
  const stateStore = {
    async claim() {
      return { created: false, state: { requestId: "request-1", questionnaireUrl: "/questionnaire?request=request-1", status: "questionnaire_completed" } }
    },
    async markQuestionnaireSent() {},
    async forget() {},
  }

  const result = await finalizeConsultationRegistration({
    stateStore,
    dedupeHash: "hash",
    initialState: { requestId: "request-2", questionnaireUrl: "/questionnaire?request=request-2" },
    deliverLead: async () => true,
    sendQuestionnaire: async () => {
      invitationCount += 1
      return true
    },
  })

  assert.equal(result.questionnaireCompleted, true)
  assert.equal(invitationCount, 0)
})

test("questionnaire lifecycle leaves incomplete state retryable when delivery fails", async () => {
  let markedCompleted = 0
  const stateStore = {
    async getByRequest() {
      return { status: "questionnaire_sent" }
    },
    async markQuestionnaireCompleted() {
      markedCompleted += 1
    },
  }

  const result = await finalizeConsultationQuestionnaire({
    requestId: "request-1",
    stateStore,
    deliver: async () => false,
  })

  assert.deepEqual(result, { alreadyCompleted: false, delivered: false, tracked: true })
  assert.equal(markedCompleted, 0)
})

test("questionnaire lifecycle marks completion after delivery and suppresses post-completion retries", async () => {
  let status = "questionnaire_sent"
  let deliveries = 0
  const stateStore = {
    async getByRequest() {
      return { status }
    },
    async markQuestionnaireCompleted() {
      status = "questionnaire_completed"
    },
  }

  const first = await finalizeConsultationQuestionnaire({
    requestId: "request-1",
    stateStore,
    deliver: async () => {
      deliveries += 1
      return true
    },
  })
  const repeat = await finalizeConsultationQuestionnaire({
    requestId: "request-1",
    stateStore,
    deliver: async () => {
      deliveries += 1
      return true
    },
  })

  assert.deepEqual(first, { alreadyCompleted: false, delivered: true, tracked: true })
  assert.deepEqual(repeat, { alreadyCompleted: true, delivered: false, tracked: true })
  assert.equal(deliveries, 1)
})

test("consultation registration and completion routes are wired to durable idempotent delivery", () => {
  assert.match(route, /finalizeConsultationRegistration/)
  assert.match(route, /consultationRequestDedupeHash\(dedupeKey\)/)
  assert.match(registrationLifecycle, /deduplicated: true/)
  assert.match(route, /emailIdempotencyKey\("consultation-questionnaire", lead\)/)
  assert.match(email, /Idempotency-Key/)
  assert.match(contact, /ceremonyverseConsultationSubmissionId/)
  assert.match(contact, /submissionId,/)
  assert.match(questionnaireRoute, /finalizeConsultationQuestionnaire/)
  assert.match(questionnaireRoute, /consultation-questionnaire-completed-\$\{questionnaire\.requestId\}/)
  assert.match(questionnaireRoute, /alreadyCompleted: true/)
})

test("customer copy explains that an already completed questionnaire should not be repeated", () => {
  assert.match(route, /If you have already completed a questionnaire for this request, you do not need to complete it again/)
  assert.match(contact, /already completed this request[\s\S]*ignore any duplicate reminder/)
})
