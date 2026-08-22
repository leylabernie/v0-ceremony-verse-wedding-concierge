import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const homepage = read("../components/pages/home-page.tsx")
const pricing = read("../app/pricing/page.tsx")

test("the homepage exposes a four-party written-scope responsibility map", () => {
  assert.match(homepage, /Who does what, in one clear view/)
  assert.match(homepage, /Your family & officiant/)
  assert.match(homepage, /Mini & CeremonyVerse/)
  assert.match(homepage, /Independent local providers/)
  assert.match(homepage, /Resorts & qualified providers/)
})

test("the homepage creates a truthful proof framework without hardcoded customer quotations", () => {
  assert.match(homepage, /Client proof, shared carefully/)
  assert.match(homepage, /Testimonials and case studies will be earned, not invented/)
  assert.match(homepage, /documented approval/)
  assert.match(homepage, /Read independent public reviews on Trustpilot/)
  assert.doesNotMatch(homepage, /April Joseph|Kaval Patel|They really made the process|Customer care that was tailored/)
})

test("the pricing page offers a concise decision guide without removing written-scope boundaries", () => {
  assert.match(pricing, /Choose your next conversation/)
  assert.match(pricing, /Start with the free consultation/)
  assert.match(pricing, /Use the \$300 feasibility plan/)
  assert.match(pricing, /They do not replace a wedding-specific written scope/)
})
