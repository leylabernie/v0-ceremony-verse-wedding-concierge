import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")

const contactPage = read("../components/pages/contact-page.tsx")
const questionnairePage = read("../components/pages/consultation-questionnaire-page.tsx")

const section = (source, start, end) => {
  const startIndex = source.indexOf(start)
  const endIndex = source.indexOf(end, startIndex)

  assert.notEqual(startIndex, -1, `Could not find ${start}`)
  assert.notEqual(endIndex, -1, `Could not find ${end}`)

  return source.slice(startIndex, endIndex)
}

test("contact-form fallbacks prefill only a short consultation summary", () => {
  const fallback = section(contactPage, "const fallbackText", "const schedulingMessage")

  assert.match(fallback, /Service: \$\{serviceInterest \|\| "Not provided"\}/)
  assert.match(fallback, /Wedding timeframe: \$\{formData\.eventTimeframe \|\| "Not provided"\}/)
  assert.match(fallback, /I will keep private details and documents out of this message\./)
  assert.doesNotMatch(fallback, /formData\.name/)
  assert.doesNotMatch(fallback, /formData\.email/)
  assert.doesNotMatch(fallback, /formData\.guestCount/)
  assert.doesNotMatch(fallback, /formData\.budget/)
})

test("questionnaire fallbacks limit the prefilled context and direct users to a safer handoff", () => {
  const fallback = section(questionnairePage, "const emailFallbackUrl", "const schedulingMessage")

  assert.match(fallback, /Request ID: \$\{formData\.requestId \|\| "Not provided"\}/)
  assert.match(fallback, /Consultation focus: \$\{formData\.serviceFocus \|\| "Not provided"\}/)
  assert.match(fallback, /Wedding timeframe: \$\{compact\(formData\.weddingTimeframe\)\}/)
  assert.match(fallback, /Please let me know the safest way to share any additional planning context\./)
  assert.doesNotMatch(fallback, /formData\.name/)
  assert.doesNotMatch(fallback, /formData\.email/)
  assert.doesNotMatch(fallback, /formData\.relationship/)
  assert.doesNotMatch(fallback, /formData\.topPriorities/)
  assert.doesNotMatch(fallback, /formData\.sourcing/)
})

test("both fallback experiences explicitly prevent sensitive-data sharing", () => {
  assert.match(contactPage, /Send a Short WhatsApp Request/)
  assert.match(contactPage, /Email a Short Request/)
  assert.match(contactPage, /Please do not add payment details, identity documents, or private files\./)
  assert.match(questionnairePage, /The fallback email contains only a short summary\./)
  assert.match(questionnairePage, /Please do not add payment information, identity documents, or private files\./)
})
