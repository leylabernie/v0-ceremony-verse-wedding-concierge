import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")

test("both Caribbean destinations remain reachable from the home and destination pages", () => {
  for (const path of ["../components/pages/home-page.tsx", "../app/destinations/page.tsx"]) {
    const source = read(path)
    for (const destination of ["jamaica", "punta-cana"]) {
      assert.match(source, new RegExp(`href: "/destinations/${destination}-indian-wedding/"`), path)
    }
  }
})

test("general service descriptions include all three owner-confirmed destinations", () => {
  for (const path of [
    "../app/layout.tsx", "../app/faq/page.tsx", "../app/about/page.tsx",
    "../app/how-it-works/page.tsx", "../app/contact/page.tsx", "../app/vendors/page.tsx",
    "../components/global-footer.tsx", "../lib/seo.tsx",
  ]) {
    assert.match(read(path), /Mexico, Jamaica, (?:and|or) Punta Cana/, path)
  }
})

test("destination service schemas include Jamaica without treating Punta Cana as a country", () => {
  for (const path of ["../app/contact/page.tsx", "../app/how-it-works/page.tsx", "../app/destinations/page.tsx", "../app/destination-wedding-feasibility-plan/page.tsx"]) {
    assert.match(read(path), /areaServed: \[[^\]]*"Mexico"[^\]]*"Jamaica"[^\]]*"Punta Cana, Dominican Republic"/, path)
  }
  const seo = read("../lib/seo.tsx")
  assert.match(seo, /"Indian destination weddings in Jamaica"/)
  assert.match(seo, /"@type": \["United States", "Canada", "Mexico", "Jamaica", "Dominican Republic"\]\.includes\(name\)/)
})

test("the inquiry and comparison flows accept Jamaica without inventing Jamaica package rates", () => {
  const questionnaire = read("../components/pages/consultation-questionnaire-page.tsx")
  assert.match(questionnaire, /placeholder="Mexico, Jamaica, Punta Cana, resort ideas, or not decided"/)
  const comparison = read("../app/planning-tools/resort-comparison/resort-comparison-client.tsx")
  for (const destination of ["Mexico", "Jamaica", "Punta Cana"]) {
    assert.ok(comparison.includes(`<option value="${destination}">${destination}</option>`))
  }
  assert.match(read("../app/planning-tools/budget/resort-rate-selector.tsx"), /For Jamaica or an unlisted resort, use your written quote/)
})

test("Jamaica service coverage does not become a fabricated destination wedding portfolio", () => {
  const experience = read("../app/real-weddings/page.tsx")
  assert.match(experience, /Three family weddings in Mexico/)
  assert.match(experience, /Jamaica and Punta Cana are part of current service coverage, but not part of the three/)
})
