import assert from "node:assert/strict"
import { readFileSync, existsSync } from "node:fs"
import test from "node:test"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { createRequire } from "node:module"
const load = createRequire(import.meta.url)
const { default: PlanningHub, metadata } = load("../app/destination-wedding-planning/page")
import { SchedulePage } from "../components/pages/schedule-page"
import { FeasibilityBriefPreview } from "../components/feasibility-brief-preview"
import { GOOGLE_CALENDAR_EMBED_URL, GOOGLE_CALENDAR_BOOKING_URL } from "../lib/consultation-booking"
const sitemap: typeof import("../app/sitemap").default = load("../app/sitemap").default

const source = (file: string) => readFileSync(new URL(`../${file}`, import.meta.url), "utf8")

test("unified planning hub covers all five destinations and is discoverable", () => {
  const html = renderToStaticMarkup(React.createElement(PlanningHub))
  for (const slug of ["cancun", "riviera-maya", "los-cabos", "jamaica", "punta-cana"]) {
    assert.match(html, new RegExp(`href="/destinations/${slug}-indian-wedding/?"`))
    assert.ok(existsSync(new URL(`../app/destinations/${slug}-indian-wedding/page.tsx`, import.meta.url)))
  }
  assert.match(source("components/navigation.tsx"), /label: "Planning Services", href: "\/destination-wedding-planning\/"/)
  assert.ok(sitemap().some(entry => entry.url === "https://www.ceremonyverse.com/destination-wedding-planning/"))
  assert.ok(metadata.alternates?.canonical)
  assert.match(html, /OutsideAgents\.com/)
  assert.match(html, /not claims of completed client weddings/)
})

test("schedule embeds the supplied Google appointment calendar by default with contact fallbacks", () => {
  const html = renderToStaticMarkup(React.createElement(SchedulePage, { calendarEmbedUrl: "" }))
  assert.ok(html.includes(`src="${GOOGLE_CALENDAR_EMBED_URL}"`))
  assert.ok(html.includes(`href="${GOOGLE_CALENDAR_BOOKING_URL}"`))
  assert.match(html, /title="Schedule a free 30-minute consultation with Mini"/)
  for (const fallback of ["tel:+12153419990", "mailto:bhamini@ceremonyverse.com", "https://wa.me/12153419990"]) assert.ok(html.includes(fallback))
})

test("brief preview displays deliverables and credit terms without fabricating checkout", () => {
  const previous = process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL
  try {
    delete process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL
    const html = renderToStaticMarkup(React.createElement(FeasibilityBriefPreview))
    for (const phrase of ["event-budget comparison", "red-flag checklist", "Room-block exposure", "30-day planning credit", "non-refundable once work begins"]) assert.ok(html.includes(phrase))
    assert.doesNotMatch(html, /Book &amp; Pay/)
    process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL = "https://buy.stripe.com/test_fixture"
    const configured = renderToStaticMarkup(React.createElement(FeasibilityBriefPreview))
    assert.match(configured, /href="https:\/\/buy.stripe.com\/test_fixture"/)
    assert.match(configured, /Book &amp; Pay \$300/)
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL
    else process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL = previous
  }
})

test("passive contact launchers stay in document flow instead of obscuring page content", () => {
  assert.match(source("components/MinisAssistantWidget.tsx"), /\.minis-fab \{\s*position: relative;/)
  assert.doesNotMatch(source("components/whatsapp-button.tsx"), /className="[^"]*fixed/)
  assert.match(source("app/pricing/page.tsx"), /id="founding-families"/)
  assert.match(source("app/layout.tsx"), /href="\/pricing\/#founding-families"/)
})
