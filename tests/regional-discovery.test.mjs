import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const nextConfig = read("../next.config.mjs")
const sitemap = read("../app/sitemap.ts")
const destinationsHub = read("../app/destinations/page.tsx")
const gujaratiMexicoLanding = read("../app/gujarati-destination-wedding-mexico/page.tsx")

test("retired non-Mexico discovery URLs redirect permanently", () => {
  assert.match(nextConfig, /source: '\/destinations\/punta-cana-indian-wedding', destination: '\/destinations\/', permanent: true/)
  assert.match(nextConfig, /source: '\/destinations\/jamaica-indian-wedding', destination: '\/destinations\/', permanent: true/)
  assert.match(nextConfig, /source: '\/blog\/mexico-or-punta-cana-indian-destination-wedding'.*permanent: true/)
})

test("the sitemap contains only the active Mexico destination guides", () => {
  assert.doesNotMatch(sitemap, /punta-cana|jamaica/)
  assert.match(sitemap, /path: "\/destinations\/cancun-indian-wedding\/", changeFrequency: "monthly", priority: 0\.9/)
  assert.match(sitemap, /path: "\/destinations\/riviera-maya-indian-wedding\/", changeFrequency: "monthly", priority: 0\.9/)
  assert.match(sitemap, /path: "\/destinations\/los-cabos-indian-wedding\/", changeFrequency: "monthly", priority: 0\.9/)
})

test("the Mexico discovery path links the destination hub and Gujarati landing to regional comparison guides", () => {
  assert.match(destinationsHub, /\["Gujarati wedding in Mexico", "\/gujarati-destination-wedding-mexico\//)
  assert.match(gujaratiMexicoLanding, /Gujarati Destination Wedding Planning in Mexico/)
  assert.match(gujaratiMexicoLanding, /\/destinations\/cancun-indian-wedding\//)
  assert.match(gujaratiMexicoLanding, /\/destinations\/riviera-maya-indian-wedding\//)
  assert.match(gujaratiMexicoLanding, /\/destinations\/los-cabos-indian-wedding\//)
})
