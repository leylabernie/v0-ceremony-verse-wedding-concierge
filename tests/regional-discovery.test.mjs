import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const comparisonArticle = read("../app/blog/mexico-or-punta-cana-indian-destination-wedding/page.tsx")
const sitemap = read("../app/sitemap.ts")
const destinationsHub = read("../app/destinations/page.tsx")
const gujaratiMexicoLanding = read("../app/gujarati-destination-wedding-mexico/page.tsx")
const jamaicaLayout = read("../app/destinations/jamaica-indian-wedding/layout.tsx")

test("the indexed Mexico comparison article gives Los Cabos a descriptive contextual discovery path", () => {
  assert.match(comparisonArticle, /href="\/destinations\/los-cabos-indian-wedding\/"/)
  assert.match(comparisonArticle, />Los Cabos<\/Link>/)
  assert.match(comparisonArticle, /modifiedTime: lastModified/)
  assert.match(comparisonArticle, /dateModified: lastModified/)
  assert.match(comparisonArticle, /Updated August 21, 2026/)
})

test("the sitemap marks only the materially updated comparison article with its update timestamp", () => {
  assert.match(
    sitemap,
    /path: "\/blog\/mexico-or-punta-cana-indian-destination-wedding\/", changeFrequency: "monthly", priority: 0\.8, lastModified: new Date\("2026-08-21T10:37:00-04:00"\)/,
  )
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

test("the Jamaica research page remains no-indexed until planning availability is verified", () => {
  assert.match(jamaicaLayout, /robots: \{ index: false, follow: true \}/)
  assert.match(jamaicaLayout, /availability is not currently verified/)
})
