import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")

const hiddenFeesArticle = read("../app/blog/hidden-resort-fees-4-day-indian-wedding-cancun/page.tsx")
const cateringArticle = read("../app/blog/indian-wedding-catering-mexico-all-inclusive-resorts/page.tsx")
const vendorsPage = read("../app/vendors/page.tsx")
const blogIndex = read("../app/blog/page.tsx")
const faqPage = read("../app/faq/page.tsx")
const sitemap = read("../app/sitemap.ts")
const footer = read("../components/global-footer.tsx")

test("the hidden-resort-fees article publishes the Cancún multi-day fee question with schema and honest sourcing", () => {
  assert.match(hiddenFeesArticle, /const path = "\/blog\/hidden-resort-fees-4-day-indian-wedding-cancun\/"/)
  assert.match(hiddenFeesArticle, /Hidden Resort Fees for a 4-Day Indian Wedding in Cancún/)
  assert.match(hiddenFeesArticle, /buildFaqSchema/)
  assert.match(hiddenFeesArticle, /buildBlogPosting/)
  assert.match(hiddenFeesArticle, /private-event minimums/i)
  assert.match(hiddenFeesArticle, /outside-vendor fee/i)
  assert.match(hiddenFeesArticle, /day pass/i)
  assert.match(hiddenFeesArticle, /current written proposal controls/)
  assert.match(hiddenFeesArticle, /Source note:/)
  assert.match(hiddenFeesArticle, /Updated September 8, 2026/)
})

test("the hidden-resort-fees article connects to existing cost, budget, and proposal resources", () => {
  assert.match(hiddenFeesArticle, /href="\/indian-destination-wedding-cost\/"/)
  assert.match(hiddenFeesArticle, /href="\/planning-tools\/budget\/"/)
  assert.match(hiddenFeesArticle, /href="\/before-signing-indian-wedding-resort-proposal\/"/)
  assert.match(hiddenFeesArticle, /href="\/indian-wedding-room-block-mexico\/"/)
  assert.match(hiddenFeesArticle, /href="\/destination-wedding-feasibility-plan\/"/)
  assert.match(hiddenFeesArticle, /href="\/blog\/indian-wedding-catering-mexico-all-inclusive-resorts\/"/)
})

test("the catering article answers the outside-chef question with the three documented paths and cultural requirements", () => {
  assert.match(cateringArticle, /const path = "\/blog\/indian-wedding-catering-mexico-all-inclusive-resorts\/"/)
  assert.match(cateringArticle, /Indian Wedding Catering at Mexico All-Inclusive Resorts/)
  assert.match(cateringArticle, /Path 1/)
  assert.match(cateringArticle, /Path 2/)
  assert.match(cateringArticle, /Path 3/)
  assert.match(cateringArticle, /Jain/i)
  assert.match(cateringArticle, /satvik/i)
  assert.match(cateringArticle, /prasad/i)
  assert.match(cateringArticle, /dedicated cookware/i)
  assert.match(cateringArticle, /written approval|approved in writing/)
  assert.match(cateringArticle, /family-facing coordinator/)
  assert.match(cateringArticle, /Source note:/)
})

test("the catering article cross-links the hidden-fees article and the Mexico planning guide", () => {
  assert.match(cateringArticle, /href="\/blog\/hidden-resort-fees-4-day-indian-wedding-cancun\/"/)
  assert.match(cateringArticle, /href="\/blog\/how-to-plan-gujarati-hindu-destination-wedding-mexico\/"/)
  assert.match(cateringArticle, /href="\/how-it-works\/"/)
})

test("the vendor roster page states the 2026/2027 expansion, requests portfolio and destination pricing, and keeps the no-fee promise", () => {
  assert.match(vendorsPage, /path: "\/vendors\/"/)
  assert.match(vendorsPage, /2026 and 2027/)
  assert.match(vendorsPage, /South Asian wedding portfolio/)
  assert.match(vendorsPage, /destination pricing sheet/i)
  assert.match(vendorsPage, /never charges vendors/i)
  assert.match(vendorsPage, /no pay-to-play/i)
  assert.match(vendorsPage, /only when a family/i)
  assert.match(vendorsPage, /Cross-promotion and referrals/i)
  assert.match(vendorsPage, /mailto:hello@ceremonyverse.com/)
  assert.match(vendorsPage, /buildFaqSchema/)
  assert.doesNotMatch(vendorsPage, /noIndex: true/)
})

test("the blog index lists both new articles with September 2026 dates", () => {
  assert.match(blogIndex, /slug: "hidden-resort-fees-4-day-indian-wedding-cancun"/)
  assert.match(blogIndex, /slug: "indian-wedding-catering-mexico-all-inclusive-resorts"/)
  assert.match(blogIndex, /date: "September 2026"/)
})

test("the FAQ page carries the two new AEO questions about resort fees and catering rules", () => {
  assert.match(faqPage, /What hidden fees come with a multi-day Indian wedding at a Cancún resort\?/)
  assert.match(faqPage, /Can Mexico all-inclusive resorts cook Gujarati and Hindu wedding food, or allow outside caterers\?/)
})

test("the sitemap registers the three new routes with accurate modification dates", () => {
  assert.match(
    sitemap,
    /path: "\/vendors\/", changeFrequency: "monthly", priority: 0\.6, lastModified: new Date\("2026-09-08T12:00:00-04:00"\)/,
  )
  assert.match(
    sitemap,
    /path: "\/blog\/hidden-resort-fees-4-day-indian-wedding-cancun\/", changeFrequency: "monthly", priority: 0\.8, lastModified: new Date\("2026-09-08T12:00:00-04:00"\)/,
  )
  assert.match(
    sitemap,
    /path: "\/blog\/indian-wedding-catering-mexico-all-inclusive-resorts\/", changeFrequency: "monthly", priority: 0\.8, lastModified: new Date\("2026-09-08T12:00:00-04:00"\)/,
  )
})

test("the global footer links the vendor page so the roster route is not orphaned", () => {
  assert.match(footer, /label: "For Wedding Vendors", href: "\/vendors\/"/)
})
