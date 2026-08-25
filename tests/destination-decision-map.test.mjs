import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const map = read("../app/destination-decision-map/page.tsx")
const guides = read("../app/free-guides/page.tsx")

test("the Destination Decision Map is discoverable from the free guide library", () => {
  assert.match(guides, /Destination Decision Map/)
  assert.match(guides, /\/destination-decision-map\//)
})

test("the Destination Decision Map keeps an immediate, no-email-gate planning value proposition", () => {
  assert.match(map, /Free · private · no email gate/)
  assert.match(map, /Guest reality/)
  assert.match(map, /Celebration rhythm/)
  assert.match(map, /Ownership and evidence/)
  assert.match(map, /It organizes questions\. It does not promise availability, savings, travel booking, resort access, or provider outcomes\./)
})

test("the Destination Decision Map preserves practical next paths and consultation attribution", () => {
  assert.match(map, /\/destinations\//)
  assert.match(map, /\/planning-tools\/budget\//)
  assert.match(map, /\/contact\/\?service=mexico&from=destination-decision-map/)
})
