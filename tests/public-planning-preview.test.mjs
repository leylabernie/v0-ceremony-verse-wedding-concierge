import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const preview = read("../app/planning-preview/page.tsx")
const contact = read("../components/pages/contact-page.tsx")

test("public planning preview remains a fictional, no-index registrant resource", () => {
  assert.match(preview, /path: "\/planning-preview\/"/)
  assert.match(preview, /noIndex: true/)
  assert.match(preview, /Fictional example/)
  assert.match(preview, /not a client project, resort proposal, provider quote, or booking offer/)
  assert.match(preview, /Garba\/Sangeet with Mehendi/)
  assert.doesNotMatch(preview.toLowerCase(), /loverly/)
})

test("registration confirmation offers the preview without changing the questionnaire flow", () => {
  assert.match(contact, /href="\/planning-preview\/"/)
  assert.match(contact, /consultation_planning_preview_opened/)
  assert.match(contact, /Complete My Questionnaire/)
})
