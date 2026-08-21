import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")

const landingPage = read("../app/gujarati-destination-wedding-mexico/page.tsx")
const sitemap = read("../app/sitemap.ts")
const llms = read("../public/llms.txt")
const seoHelpers = read("../lib/seo.tsx")
const footer = read("../components/global-footer.tsx")

test("the Gujarati Mexico landing page retains its focused metadata and answer-engine markup", () => {
  assert.match(landingPage, /title: "Gujarati Weddings in Mexico"/)
  assert.match(landingPage, /Plan a Gujarati wedding in Mexico with Mini/)
  assert.match(landingPage, /buildFaqSchema\(faqItems\)/)
  assert.match(landingPage, /buildHowToSchema\(/)
  assert.match(landingPage, /buildServiceSchema\(/)
})

test("the page keeps a concise snippet and a verified Instagram entity reference", () => {
  assert.match(
    landingPage,
    /Plan a Gujarati wedding in Mexico with Mini\. Clarify family decisions, resort questions, guest needs, and provider handoffs\./,
  )
  assert.match(seoHelpers, /https:\/\/www\.instagram\.com\/ceremonyverse\//)
  assert.match(footer, /Follow @ceremonyverse on Instagram/)
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
