import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import test from "node:test"
import {
  buildMetadata,
  formatSerpDescription,
  formatSerpTitle,
  resolveContextualImage,
} from "../lib/seo"
import { GET as getImageSitemap } from "../app/sitemap-images.xml/route"
import nextConfig from "../next.config.mjs"

const rootDir = join(import.meta.dirname, "..")

test("GA4 cross-domain linker connects ceremonyverse.com and ceremonyversetravel.com without altering layout structure", () => {
  const layout = readFileSync(join(rootDir, "app/layout.tsx"), "utf8")
  assert.match(layout, /domains:\s*\['ceremonyverse\.com',\s*'www\.ceremonyverse\.com',\s*'ceremonyversetravel\.com'\]/)
  assert.match(layout, /accept_incoming:\s*true/)
  assert.match(layout, /travel_portal_click/)
  assert.match(layout, /whatsapp_click/)
  assert.match(layout, /phone_click/)
})

test("formatSerpTitle eliminates truncation (>60 chars) and double-branding across short, medium, and long titles", () => {
  const shortMeta = buildMetadata({
    path: "/pricing/",
    title: "Indian Destination Wedding Packages & Pricing",
    description: "Compare flat-fee planning and sourcing packages.",
  })
  // 45 chars > 44 limit for suffix, so it outputs crisp 45-char absolute title instead of 61-char truncated title
  assert.deepEqual(shortMeta.title, { absolute: "Indian Destination Wedding Packages & Pricing" })

  const branded = formatSerpTitle("Privacy Notice — CeremonyVerse", "/privacy/")
  // Stripped duplicate brand suffix -> "Privacy Notice" (14 + 16 = 30 <= 60) -> uses template once
  assert.equal(branded, "Privacy Notice")

  const longOverride = buildMetadata({
    path: "/south-asian-destination-wedding-planning-new-york/",
    title: "South Asian Destination Wedding Planning for NRI Families in New York",
    description: "Plan from New York with one family-facing coordinator.",
  })
  const renderedTitle = typeof longOverride.title === "string"
    ? `${longOverride.title} | CeremonyVerse`
    : (longOverride.title as { absolute: string }).absolute
  assert.ok(renderedTitle.length <= 60, `Expected <= 60 chars, got ${renderedTitle.length}: ${renderedTitle}`)
})

test("formatSerpDescription enforces <= 158 chars with clean sentence or clause endings", () => {
  const longDesc =
    "Answer five questions about your South Asian destination wedding, honeymoon, or group trip — guest count, budget, priorities, destination, and timeline — to see the right starting route."
  const formatted = formatSerpDescription(longDesc, "/planning-tools/strategy-matcher/")
  assert.ok(formatted.length <= 158, `Expected <= 158 chars, got ${formatted.length}`)
  assert.match(formatted, /\.$/)
})

test("resolveContextualImage maps category routes to verified existing files in public/images", () => {
  const samplePaths = [
    "/kanchipuram-silk-sarees-usa/",
    "/banarasi-silk-sarees-usa/",
    "/buy-sherwani-from-india-usa/",
    "/groomsmen-outfit-coordination-new-jersey/",
    "/bridesmaid-and-family-outfits-from-india/",
    "/blog/how-to-choose-indian-wedding-jewelry-usa/",
    "/guest-logistics-gift-checklist/",
    "/blog/shipping-indian-wedding-outfits-usa-customs-duties/",
    "/haldi-outfits-usa/",
    "/resorts/moon-palace-cancun-indian-wedding/",
  ]
  for (const p of samplePaths) {
    const url = resolveContextualImage(p)
    const rel = url.replace("https://www.ceremonyverse.com/", "public/")
    assert.ok(existsSync(join(rootDir, rel)), `Missing image asset on disk for ${p}: ${rel}`)
  }
})

test("all entries in sitemap-images.xml exist on disk and render valid XML", async () => {
  const resp = await getImageSitemap()
  assert.equal(resp.status, 200)
  const xml = await resp.text()
  assert.match(xml, /<image:title>/)
  const pageUrls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g), (m) => m[1])
  const imageUrls = Array.from(xml.matchAll(/<image:loc>(.*?)<\/image:loc>/g), (m) => m[1])
  assert.ok(pageUrls.length >= 25, `Expected >= 25 page entries, got ${pageUrls.length}`)
  for (const u of pageUrls) {
    assert.ok(u.endsWith("/"), `Image sitemap page URL must retain trailing slash: ${u}`)
  }
  for (const imgUrl of imageUrls) {
    const rel = imgUrl.replace("https://www.ceremonyverse.com/", "public/")
    assert.ok(existsSync(join(rootDir, rel)), `Missing image file on disk: ${rel}`)
  }
})

test("next.config.mjs internal redirects avoid two-hop non-slash destinations", async () => {
  const redirects = await nextConfig.redirects()
  for (const rule of redirects) {
    if (
      rule.destination.startsWith("/") &&
      !rule.destination.includes(":path*") &&
      !rule.destination.endsWith(".xml")
    ) {
      assert.ok(
        rule.destination.endsWith("/"),
        `Redirect from ${rule.source} -> ${rule.destination} lacks trailing slash and causes 2-hop redirect`,
      )
    }
  }
})
