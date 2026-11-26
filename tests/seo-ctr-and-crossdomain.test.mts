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
import sitemapMod from "../app/sitemap"
import { venuePlanningGuides } from "../lib/venue-planning-guides"
import nextConfigMod from "../next.config.mjs"

const nextConfig = (nextConfigMod as { default?: typeof nextConfigMod }).default ?? nextConfigMod
const sitemap = (sitemapMod as { default?: typeof sitemapMod }).default ?? sitemapMod

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

test("next.config.mjs internal redirects avoid two-hop non-slash destinations and resolve in 1 hop to live routes", async () => {
  const redirects = await nextConfig.redirects()
  const redirectSources = new Set<string>()
  for (const rule of redirects) {
    if (!rule.has) {
      redirectSources.add(rule.source)
    }
  }

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
      const destNoSlash = rule.destination.replace(/\/$/, "")
      assert.ok(
        !redirectSources.has(rule.destination) && !redirectSources.has(destNoSlash),
        `Redirect chain detected: ${rule.source} -> ${rule.destination} redirects again`,
      )
      const pageFile =
        rule.destination === "/"
          ? join(rootDir, "app/page.tsx")
          : join(rootDir, "app", destNoSlash.slice(1), "page.tsx")
      const isDynamicGuide = venuePlanningGuides.some(
        (g) => `/guides/${g.slug}/` === rule.destination,
      )
      assert.ok(
        existsSync(pageFile) || isDynamicGuide,
        `Redirect target ${rule.destination} (from ${rule.source}) does not exist on disk`,
      )
    }
  }

  const entries = sitemap()
  const seen = new Set<string>()
  for (const entry of entries) {
    assert.ok(!seen.has(entry.url), `Duplicate sitemap URL: ${entry.url}`)
    seen.add(entry.url)
    const rel = entry.url.replace("https://www.ceremonyverse.com", "")
    assert.ok(
      !redirectSources.has(rel) && !redirectSources.has(rel.replace(/\/$/, "")),
      `Sitemap URL ${entry.url} is a redirecting path`,
    )
  }

  const llms = readFileSync(join(rootDir, "public/llms.txt"), "utf8")
  const llmsUrls = Array.from(
    llms.matchAll(/https:\/\/www\.ceremonyverse\.com(\/[a-z0-9\-\/\.]+)/g),
    (m) => m[1],
  )
  for (const rel of llmsUrls) {
    assert.ok(
      !redirectSources.has(rel) && !redirectSources.has(rel.replace(/\/$/, "")),
      `public/llms.txt contains redirecting URL: ${rel}`,
    )
  }
})
