import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8")

const activeSources = [
  "../app/page.tsx",
  "../app/layout.tsx",
  "../app/destinations/page.tsx",
  "../app/contact/page.tsx",
  "../app/faq/page.tsx",
  "../app/services/page.tsx",
  "../app/sitemap.ts",
  "../components/pages/home-page.tsx",
  "../components/global-footer.tsx",
  "../components/mobile-sticky-cta.tsx",
  "../components/whatsapp-button.tsx",
  "../lib/seo.tsx",
  "../public/llms.txt",
].map(read).join("\n")

const nextConfig = read("../next.config.mjs")
const resortComparison = read("../app/planning-tools/resort-comparison/resort-comparison-client.tsx")
const budgetSelector = read("../app/planning-tools/budget/resort-rate-selector.tsx")

test("active public positioning is Mexico-only", () => {
  assert.doesNotMatch(activeSources, /Punta Cana|Jamaica/i)
  assert.match(activeSources, /destination-wedding planning in Mexico/i)
})

test("retired destination URLs preserve link value through permanent redirects", () => {
  assert.match(nextConfig, /source: '\/destinations\/punta-cana-indian-wedding'.*permanent: true/)
  assert.match(nextConfig, /source: '\/destinations\/jamaica-indian-wedding'.*permanent: true/)
  assert.match(nextConfig, /source: '\/resorts\/lopesan-costa-bavaro-indian-wedding'.*permanent: true/)
  assert.match(nextConfig, /source: '\/blog\/mexico-or-punta-cana-indian-destination-wedding'.*permanent: true/)
})

test("interactive planning tools do not offer Punta Cana", () => {
  assert.doesNotMatch(resortComparison, /Punta Cana/i)
  assert.doesNotMatch(budgetSelector, /Punta Cana/i)
})
