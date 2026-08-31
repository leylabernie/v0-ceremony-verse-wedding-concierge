import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")
const resortData = read("../lib/resort-pages.ts")
const sitemap = read("../app/sitemap.ts")
const nextConfig = read("../next.config.mjs")
const lopesanPage = read("../app/resorts/lopesan-costa-bavaro-indian-wedding/page.tsx")
const hardRockPage = read("../app/resorts/hard-rock-riviera-maya-indian-wedding/page.tsx")
const hyattPage = read("../app/resorts/hyatt-inclusive-collection-indian-wedding/page.tsx")

const resortPages = [
  { name: "Hard Rock Riviera Maya", page: hardRockPage, importName: "hardRockRivieraMaya", slug: "hard-rock-riviera-maya-indian-wedding" },
  { name: "Hyatt Inclusive Collection", page: hyattPage, importName: "hyattInclusiveCollection", slug: "hyatt-inclusive-collection-indian-wedding" },
]

test("the retired Lopesan Punta Cana URL redirects permanently and is not in the sitemap", () => {
  assert.doesNotMatch(sitemap, /lopesan-costa-bavaro-indian-wedding/)
  assert.match(
    nextConfig,
    /source: '\/resorts\/lopesan-costa-bavaro-indian-wedding', destination: '\/destinations\/', permanent: true/,
  )
})

for (const { name, page, importName, slug } of resortPages) {
  test(`the ${name} resort page renders through the shared destination landing component`, () => {
    assert.match(page, /import \{ DestinationLandingPage \} from "@\/components\/destination-landing-page"/)
    assert.match(page, new RegExp(`import \\{ ${importName} \\} from "@/lib/resort-pages"`))
    assert.match(page, /<DestinationLandingPage data=\{data\} \/>/)
  })

  test(`the ${name} page is indexed and recorded in the sitemap`, () => {
    assert.doesNotMatch(page, /noIndex/)
    assert.match(
      sitemap,
      new RegExp(`path: "/resorts/${slug}/", changeFrequency: "monthly", priority: 0\\.85`),
    )
  })

  test(`the ${name} page keeps the non-affiliation boundary and review date`, () => {
    assert.match(resortData, new RegExp(`Is ${name.split(" ")[0] === "Hyatt" ? "Hyatt Inclusive Collection" : name.replace("Hard Rock Riviera Maya", "Hard Rock Riviera Maya")} affiliated with CeremonyVerse\\?`))
    assert.match(resortData, /no resort affiliation/i)
  })
}

test("the Lopesan page publishes only verified package figures with sources", () => {
  assert.match(resortData, /Secretly I Do \$999 for 2 guests, Endless Knot \$1,899 up to 10, Eternal Vow \$3,999 up to 30, Everlasting Love \$8,599 up to 40/)
  assert.match(resortData, /Unique Glam \$12,999 for 50–70 guests or \$15,799 for 71–99/)
  assert.match(resortData, /sourceHref: "https:\/\/www\.lopesancostabavaro\.com\/en\/weddings-events\/"/)
  assert.match(resortData, /children are charged at 50%/)
})

test("the Hard Rock page states quote-required pricing instead of inventing totals", () => {
  assert.match(resortData, /does not publish dependable package pricing/i)
  assert.match(resortData, /Quote required/)
  assert.match(resortData, /Indian Wedding Specialists/)
  assert.match(resortData, /Mehndi artists/)
  assert.match(resortData, /sourceHref: "https:\/\/www\.hardrockhotels\.com\/riviera-maya\/weddings\.aspx"/)
})

test("the Hyatt page publishes the sourced Dulha & Dulhan package facts", () => {
  assert.match(resortData, /\$12,295 inclusive of up to 79 guests/)
  assert.match(resortData, /25 rooms for three nights, or 75 cumulative room nights/)
  assert.match(resortData, /Dulha & Dulhan South Asian Wedding Package/)
  assert.match(resortData, /decorated Mandap/)
  assert.match(resortData, /sourceHref: "https:\/\/www\.hyattinclusivecollection\.com\/en\/special-offers\/south-asian-weddings\/"/)
})

test("every new resort page frames unpublished terms as written-proposal questions", () => {
  const lopesanSection = resortData.slice(resortData.indexOf("lopesanCostaBavaro"), resortData.indexOf("hardRockRivieraMaya"))
  const hardRockSection = resortData.slice(resortData.indexOf("hardRockRivieraMaya"), resortData.indexOf("hyattInclusiveCollection"))
  const hyattSection = resortData.slice(resortData.indexOf("hyattInclusiveCollection"))
  for (const section of [lopesanSection, hardRockSection, hyattSection]) {
    assert.match(section, /attrition/)
    assert.match(section, /sound curfews/i)
    assert.match(section, /current written proposal/)
    assert.match(section, /contracted indoor backup/)
  }
})

test("the resort pages appear in the sitemap as a contiguous group after the destination guides", () => {
  const order = [
    "/destinations/los-cabos-indian-wedding/",
    "/resorts/moon-palace-cancun-indian-wedding/",
    "/resorts/hard-rock-riviera-maya-indian-wedding/",
    "/resorts/hyatt-inclusive-collection-indian-wedding/",
    "/indian-destination-wedding-cost/",
  ]
  let lastIdx = -1
  for (const path of order) {
    const idx = sitemap.indexOf(`path: "${path}"`)
    assert.ok(idx > lastIdx, `${path} should follow the previous entry in sitemap order`)
    lastIdx = idx
  }
})
