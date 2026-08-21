import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { consultationDedupeKey, createConsultationDeliveryStore } from "../lib/consultation-dedup.mjs"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const route = read("../app/api/consultation/route.ts")
const contact = read("../components/pages/contact-page.tsx")
const email = read("../lib/consultation-email.ts")

test("repeated normalized consultation data reuses one delivery during the dedupe window", () => {
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

test("consultation registration is wired to deterministic idempotent email delivery", () => {
  assert.match(route, /const existingDelivery = consultationDeliveryStore\.get\(dedupeKey\)/)
  assert.match(route, /deduplicated: true/)
  assert.match(route, /emailIdempotencyKey\("consultation-questionnaire", lead\)/)
  assert.match(email, /Idempotency-Key/)
  assert.match(contact, /ceremonyverseConsultationSubmissionId/)
  assert.match(contact, /submissionId,/)
})

test("customer copy explains that an already completed questionnaire should not be repeated", () => {
  assert.match(route, /If you have already completed a questionnaire for this request, you do not need to complete it again/)
  assert.match(contact, /already completed this request[\s\S]*ignore any duplicate reminder/)
})
