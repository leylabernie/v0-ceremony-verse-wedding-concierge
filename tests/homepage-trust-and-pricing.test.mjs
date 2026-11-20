import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const homepage = read("../components/pages/home-page.tsx")
const pricing = read("../app/pricing/page.tsx")

test('homepage labels the three documented weddings and states the on-site scope', () => {
  assert.match(homepage,/family weddings, not client projects/)
  for(const venue of ['Hard Rock Hotel Cancún','Generations Riviera Maya','Royalton']) assert.ok(homepage.includes(venue))
  assert.match(homepage,/contracted local team runs the events/)
  assert.doesNotMatch(homepage,/trustpilot.com|25%/)
})
test("the pricing page offers a concise decision guide without removing written-scope boundaries", () => {
  assert.ok(pricing.indexOf("{tiers.map") < pricing.indexOf("{planningDecisionRoutes.map"))
  assert.match(pricing, /Choose your next conversation/)
  assert.match(pricing, /Start with the free consultation/)
  assert.match(pricing, /Use the \$300 feasibility plan/)
  assert.match(pricing, /They do not replace a wedding-specific written scope/)
})
