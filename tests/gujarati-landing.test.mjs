import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")

const landingPage = read("../app/gujarati-destination-wedding-mexico/page.tsx")
const sitemap = read("../app/sitemap.ts")
const llms = read("../public/llms.txt")
const seoHelpers = read("../lib/seo.tsx")
const footer = read("../components/global-footer.tsx")
const planningArticle = read("../app/blog/how-to-plan-gujarati-hindu-destination-wedding-mexico/page.tsx")
const outfitsPage = read("../app/gujarati-wedding-outfits-usa/page.tsx")

test("the Gujarati Mexico landing page retains its focused metadata and answer-engine markup", () => {
  assert.match(landingPage, /title: "Gujarati Destination Wedding Planning in Mexico"/)
  assert.match(landingPage, /Plan a Gujarati destination wedding in Mexico with Mini/)
  assert.match(landingPage, /buildFaqSchema\(faqItems\)/)
  assert.match(landingPage, /buildHowToSchema\(/)
  assert.match(landingPage, /buildServiceSchema\(/)
})

test("the page keeps a concise snippet and drops the inactive Instagram entity reference", () => {
  assert.match(
    landingPage,
    /Plan a Gujarati destination wedding in Mexico with Mini: clarify family decisions, resort questions, guest needs, and written provider handoffs\./,
  )
  // GEO/AEO blueprint entity cleanup: the Instagram profile is not
  // maintained, so it must NOT appear in schema sameAs or the footer.
  // An inactive account in sameAs weakens entity trust with answer engines.
  assert.doesNotMatch(seoHelpers, /https:\/\/www\.instagram\.com\/ceremonyverse\//)
  assert.doesNotMatch(footer, /Follow @ceremonyverse on Instagram/)
})

test("the Gujarati event flow stays aligned with the founder-confirmed sequence", () => {
  const sequence = ["Vidhi", "Garba / Sangeet", "With Mehendi", "Baraat", "Pheras", "With Vidai", "Reception"]

  let previousIndex = -1
  for (const term of sequence) {
    const currentIndex = landingPage.indexOf(term)
    assert.ok(currentIndex > previousIndex, `${term} should appear in the confirmed event-flow order`)
    previousIndex = currentIndex
  }
})

test("the new page is discoverable from the sitemap and the AI-readable service index", () => {
  const expectedUrl = "https://www.ceremonyverse.com/gujarati-destination-wedding-mexico/"

  assert.match(sitemap, /path: "\/gujarati-destination-wedding-mexico\/"/)
  assert.match(llms, new RegExp(expectedUrl.replaceAll("/", "\\/")))
})


test("the materially updated source article has an accurate sitemap timestamp", () => {
  assert.match(
    sitemap,
    /path: "\/blog\/how-to-plan-gujarati-hindu-destination-wedding-mexico\/", changeFrequency: "monthly", priority: 0\.8, lastModified: new Date\("2026-08-21T10:16:00-04:00"\)/,
  )
  assert.match(sitemap, /path: "\/gujarati-destination-wedding-mexico\/", changeFrequency: "monthly", priority: 0\.95/)
})

test("indexed Gujarati resources provide contextual inbound paths to the landing page", () => {
  const target = /href="\/gujarati-destination-wedding-mexico\/"/

  assert.match(planningArticle, target)
  assert.match(planningArticle, /Gujarati wedding in Mexico planning guide/)
  assert.match(planningArticle, /modifiedTime: lastModified/)
  assert.match(planningArticle, /dateModified: lastModified/)
  assert.match(planningArticle, /Updated August 21, 2026/)
  assert.match(outfitsPage, target)
  assert.match(outfitsPage, /Planning a destination celebration in Mexico\?/)
})
