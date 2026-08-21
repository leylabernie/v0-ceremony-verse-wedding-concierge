import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const page = read("../app/how-it-works/page.tsx")
const sitemap = read("../app/sitemap.ts")

test("the how-it-works page preserves the canonical route, consultation path, and fictional-scenario disclosure", () => {
  assert.match(page, /path: "\/how-it-works\/"/)
  assert.match(page, /const consultationHref = "\/contact\/\?service=mexico&from=how-it-works"/)
  assert.match(page, /Fictional planning view/)
  assert.match(page, /not a client project, a provider quote, or a promise of availability/)
})

test("the how-it-works page keeps the founder-confirmed Gujarati ceremony sequence and role boundaries", () => {
  assert.match(page, /Vidhi[\s\S]*Garba\/Sangeet with Mehendi[\s\S]*Baraat[\s\S]*Pheras with Vidai[\s\S]*Reception/)
  assert.match(page, /Families and officiants retain ceremony authority/)
  assert.match(page, /Independent resorts and local providers remain responsible for the services they quote and contract/)
  assert.match(page, /It is not a public marketing destination/)
})

test("the sitemap records the material how-it-works page update", () => {
  assert.match(
    sitemap,
    /path: "\/how-it-works\/", changeFrequency: "monthly", priority: 0\.8, lastModified: new Date\("2026-08-21T17:00:00-04:00"\)/,
  )
})
