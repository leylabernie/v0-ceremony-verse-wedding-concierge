import assert from "node:assert/strict"
import fs from "node:fs"
import test from "node:test"

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const routes = [
  "app/blog/how-to-buy-sherwani-from-india-usa/page.tsx",
  "app/blog/cost-of-sourcing-indian-wedding-outfits-from-india/page.tsx",
  "app/blog/indian-wedding-jewelry-customs-shipping-usa/page.tsx",
  "app/blog/indian-wedding-shopping-timeline-checklist/page.tsx",
]

test("the four sourcing articles have metadata, Article schema, FAQ schema, and breadcrumbs", () => {
  for (const route of routes) {
    const source = read(route)
    assert.match(source, /buildMetadata/)
    assert.match(source, /buildBlogPosting/)
    assert.match(source, /buildBreadcrumb/)
    assert.match(source, /FAQPage/)
  }
})

test("the sourcing cluster is discoverable from the blog index, sitemap, and AI-readable guide", () => {
  const combined = [read("app/blog/page.tsx"), read("app/sitemap.ts"), read("public/llms.txt")].join("\n")
  for (const slug of [
    "indian-wedding-shopping-timeline-checklist",
    "cost-of-sourcing-indian-wedding-outfits-from-india",
    "indian-wedding-jewelry-customs-shipping-usa",
    "how-to-buy-sherwani-from-india-usa",
  ]) assert.match(combined, new RegExp(slug))
})

test("the jewelry guide does not misclassify ordinary jewelry as a monetary instrument", () => {
  const source = read("app/blog/indian-wedding-jewelry-customs-shipping-usa/page.tsx")
  assert.match(source, /Ordinary wedding jewelry is not automatically included/)
  assert.match(source, /customs broker/)
  assert.match(source, /help\.cbp\.gov/)
  assert.match(source, /fincen\.gov/)
})

test("the supplied content does not expand promoted ceremony positioning", () => {
  const combined = routes.map(read).join("\n").toLowerCase()
  assert.doesNotMatch(combined, /sikh|punjabi|muslim/)
})
