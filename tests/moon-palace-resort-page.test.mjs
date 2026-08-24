import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const resortPage = read("../app/resorts/moon-palace-cancun-indian-wedding/page.tsx")
const resortData = read("../lib/resort-pages.ts")
const sitemap = read("../app/sitemap.ts")
const landingComponent = read("../components/destination-landing-page.tsx")

test("the Moon Palace resort page renders through the shared destination landing component", () => {
  assert.match(resortPage, /import \{ DestinationLandingPage \} from "@\/components\/destination-landing-page"/)
  assert.match(resortPage, /import \{ moonPalaceCancun \} from "@\/lib\/resort-pages"/)
  assert.match(resortPage, /<DestinationLandingPage data=\{data\} \/>/)
})

test("the Moon Palace page is indexed and recorded in the sitemap after the destination guides", () => {
  assert.doesNotMatch(resortPage, /noIndex/)
  assert.match(
    sitemap,
    /path: "\/resorts\/moon-palace-cancun-indian-wedding\/", changeFrequency: "monthly", priority: 0\.85/,
  )
  const destinationsIdx = sitemap.indexOf('path: "/destinations/punta-cana-indian-wedding/"')
  const resortIdx = sitemap.indexOf('path: "/resorts/moon-palace-cancun-indian-wedding/"')
  assert.ok(destinationsIdx > 0, "punta cana destination entry exists")
  assert.ok(resortIdx > destinationsIdx, "resort entry follows the destination guides")
})

test("every published figure on the Moon Palace page cites a public source", () => {
  assert.match(resortData, /sourceHref: "https:\/\/www\.moonpalacecancun\.com\/weddings"/)
  assert.match(resortData, /sourceHref: "https:\/\/weddings\.thepalacecompany\.com\/blog\/weddings-mexico"/)
  assert.match(resortData, /sourceHref: "https:\/\/www\.hyattinclusivecollection\.com\/en\/special-offers\/south-asian-weddings\/"/)
  assert.match(resortData, /sourcesReviewedOn: "August 24, 2026"/)
})

test("the Moon Palace page keeps the non-affiliation and current-quote boundaries", () => {
  assert.match(resortData, /Is Moon Palace Cancún affiliated with CeremonyVerse\?/)
  assert.match(resortData, /no resort affiliation/i)
  assert.match(resortData, /Current quote only/)
  assert.match(resortData, /must be confirmed in a current (written )?proposal/)
})

test("the resort page frames unpublished terms as written-proposal questions instead of facts", () => {
  assert.match(resortData, /attrition/)
  assert.match(resortData, /sound curfews/i)
  assert.match(resortData, /Baraat route/i)
  assert.match(resortData, /fire or flameless Havan rules/i)
  assert.match(resortData, /contracted indoor backup/)
})

test("the shared landing component defaults keep existing destination pages unchanged", () => {
  assert.match(landingComponent, /data\.sourcesReviewedOn \?\? "August 12, 2026"/)
  assert.match(landingComponent, /data\.comparisonSection\?\.heading \?\? `Which \$\{data\.shortName\} resorts can families compare\?`/)
})
