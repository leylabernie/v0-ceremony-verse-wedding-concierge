import assert from "node:assert/strict"
import { readdirSync, readFileSync } from "node:fs"
import path from "node:path"
import test from "node:test"
import zlib from "node:zlib"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import robotsMod from "../app/robots"
import sitemapMod from "../app/sitemap"
import FaqPageMod from "../app/faq/page"
import PricingPageMod from "../app/pricing/page"
import FeasibilityPlanPageMod from "../app/destination-wedding-feasibility-plan/page"

const robots = (robotsMod as { default?: typeof robotsMod }).default ?? robotsMod
const sitemap = (sitemapMod as { default?: typeof sitemapMod }).default ?? sitemapMod
const FaqPage = (FaqPageMod as { default?: typeof FaqPageMod }).default ?? FaqPageMod
const PricingPage = (PricingPageMod as { default?: typeof PricingPageMod }).default ?? PricingPageMod
const DestinationWeddingFeasibilityPlanPage =
  (FeasibilityPlanPageMod as { default?: typeof FeasibilityPlanPageMod }).default ??
  FeasibilityPlanPageMod
import {
  BLOG_FEASIBILITY_CREDIT_STATEMENT,
  BlogFeasibilityInvitation,
} from "../components/blog-feasibility-invitation"
import { EditorialGuide } from "../components/editorial-guide"
import { GlobalFooter } from "../components/global-footer"
import { ContactPage } from "../components/pages/contact-page"
import { SchedulePage } from "../components/pages/schedule-page"
import {
  buildWarmLeadFeasibilityMessage,
  GOOGLE_CALENDAR_BOOKING_URL,
  resolveConsultationBooking,
  WARM_LEAD_FEASIBILITY_TEMPLATE,
} from "../lib/consultation-booking"
import { getFeasibilityPlanCta } from "../lib/destination-feasibility-plan"
import {
  buildLocalBusinessSchema,
  buildMetadata,
  canonicalUrl,
  SITE_EMAIL,
  SITE_URL,
} from "../lib/seo"

test("$300 feasibility CTA falls back to /pricing/ when no Stripe URL is configured (unset, empty, or whitespace)", () => {
  const previous = process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL
  try {
    delete process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL
    for (const candidate of [undefined, "", "   ", "\n\t "]) {
      const cta = getFeasibilityPlanCta(candidate)
      assert.equal(cta.configured, false)
      assert.equal(cta.href, "/pricing/")
      assert.equal(cta.external, false)
      assert.equal(cta.label, "Review $300 Feasibility Plan & Pricing")
    }

    const contactHtml = renderToStaticMarkup(React.createElement(ContactPage))
    assert.match(contactHtml, /href="\/pricing\/"/)
    assert.match(contactHtml, /Review \$300 Feasibility Plan &amp; Pricing/)
    assert.match(contactHtml, /Venmo/i)
    assert.doesNotMatch(contactHtml, /checkout\.stripe/i)
    assert.doesNotMatch(contactHtml, /venmo\.com/i)

    const feasibilityPageHtml = renderToStaticMarkup(
      React.createElement(DestinationWeddingFeasibilityPlanPage),
    )
    assert.match(feasibilityPageHtml, /href="\/pricing\/"/)
    assert.match(feasibilityPageHtml, /Review \$300 Feasibility Plan &amp; Pricing/)
    assert.match(feasibilityPageHtml, /Venmo/i)
    assert.doesNotMatch(feasibilityPageHtml, /checkout\.stripe/i)
    assert.doesNotMatch(feasibilityPageHtml, /venmo\.com/i)

    const blogInviteHtml = renderToStaticMarkup(
      React.createElement(BlogFeasibilityInvitation),
    )
    assert.match(blogInviteHtml, /href="\/pricing\/"/)
    assert.match(blogInviteHtml, /Review \$300 Feasibility Plan &amp; Pricing/)
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL
    else process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL = previous
  }
})

test("$300 feasibility CTA overrides /pricing/ when a Stripe URL is configured via env or prop", () => {
  const previous = process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL
  const fixtureUrl = "https://checkout.stripe.test/c/pay/cs_test_feasibility_fixture"
  try {
    process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL = `  ${fixtureUrl}  `
    const configuredCta = getFeasibilityPlanCta()
    assert.equal(configuredCta.configured, true)
    assert.equal(configuredCta.href, fixtureUrl)
    assert.equal(configuredCta.external, true)
    assert.equal(configuredCta.label, "Book the $300 Feasibility & Action Plan")

    const relativeOverride = getFeasibilityPlanCta("/pricing/?plan=feasibility")
    assert.equal(relativeOverride.configured, true)
    assert.equal(relativeOverride.href, "/pricing/?plan=feasibility")
    assert.equal(relativeOverride.external, false)

    const contactHtml = renderToStaticMarkup(React.createElement(ContactPage))
    assert.ok(contactHtml.includes(`href="${fixtureUrl}"`))
    assert.match(contactHtml, /Book the \$300 Feasibility &amp; Action Plan/)

    const feasibilityPageHtml = renderToStaticMarkup(
      React.createElement(DestinationWeddingFeasibilityPlanPage),
    )
    assert.ok(feasibilityPageHtml.includes(`href="${fixtureUrl}"`))
    assert.match(feasibilityPageHtml, /Book the \$300 Feasibility &amp; Action Plan/)

    const blogInviteHtml = renderToStaticMarkup(
      React.createElement(BlogFeasibilityInvitation),
    )
    assert.ok(blogInviteHtml.includes(`href="${fixtureUrl}"`))
    assert.match(blogInviteHtml, /Book the \$300 Feasibility &amp; Action Plan/)
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL
    else process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL = previous
  }
})

test("Google Calendar works without registration when no embed is configured, and Cal.com/Calendly renders inline iframe + direct link", () => {
  const envKeys = [
    "NEXT_PUBLIC_CAL_COM_URL",
    "NEXT_PUBLIC_CALENDLY_URL",
    "NEXT_PUBLIC_CONSULTATION_BOOKING_URL",
  ] as const
  const previous = Object.fromEntries(envKeys.map((k) => [k, process.env[k]]))

  try {
    for (const k of envKeys) delete process.env[k]

    const directResolution = resolveConsultationBooking()
    assert.equal(directResolution.mode, "direct")
    assert.equal(directResolution.embedUrl, null)
    assert.equal(directResolution.directUrl, GOOGLE_CALENDAR_BOOKING_URL)
    assert.ok(WARM_LEAD_FEASIBILITY_TEMPLATE.includes(GOOGLE_CALENDAR_BOOKING_URL))
    assert.equal(
      buildWarmLeadFeasibilityMessage("Priya Patel"),
      `Hi Priya — Mini from CeremonyVerse here. I just opened a few spots this week for our $300 Feasibility & Action Plan (60 minutes tearing apart up to two resort quotes, hidden fees, and your guest budget—and 100% credited toward planning if you work with us within 30 days). You can grab a free 30-minute intro slot directly on my calendar here: ${GOOGLE_CALENDAR_BOOKING_URL}`,
    )

    const contactDirectHtml = renderToStaticMarkup(React.createElement(ContactPage))
    assert.ok(contactDirectHtml.includes(`href="${GOOGLE_CALENDAR_BOOKING_URL}"`))
    assert.match(contactDirectHtml, /No registration is needed/i)
    assert.doesNotMatch(contactDirectHtml, /<iframe/i)

    const scheduleDirectHtml = renderToStaticMarkup(React.createElement(SchedulePage))
    assert.ok(scheduleDirectHtml.includes(`href="${GOOGLE_CALENDAR_BOOKING_URL}"`))
    assert.match(scheduleDirectHtml, /<iframe src="https:\/\/calendar\.google\.com\/calendar\/appointments\/schedules\//i)

    const calFixture = "https://cal.com/ceremonyverse-fixture/30min"
    process.env.NEXT_PUBLIC_CAL_COM_URL = calFixture
    const calResolution = resolveConsultationBooking()
    assert.equal(calResolution.mode, "embed")
    assert.equal(calResolution.provider, "cal.com")
    assert.equal(calResolution.embedUrl, calFixture)

    const contactCalHtml = renderToStaticMarkup(React.createElement(ContactPage))
    assert.ok(contactCalHtml.includes(`<iframe src="${calFixture}"`))
    assert.ok(contactCalHtml.includes(`href="${calFixture}"`))
    assert.ok(contactCalHtml.includes(`href="${GOOGLE_CALENDAR_BOOKING_URL}"`))

    delete process.env.NEXT_PUBLIC_CAL_COM_URL
    const calendlyFixture = "https://calendly.com/ceremonyverse-fixture/30min"
    process.env.NEXT_PUBLIC_CALENDLY_URL = calendlyFixture
    const scheduleCalendlyHtml = renderToStaticMarkup(React.createElement(SchedulePage))
    assert.ok(scheduleCalendlyHtml.includes(`<iframe src="${calendlyFixture}"`))
    assert.ok(scheduleCalendlyHtml.includes(`href="${calendlyFixture}"`))
    assert.ok(scheduleCalendlyHtml.includes(`href="${GOOGLE_CALENDAR_BOOKING_URL}"`))
  } finally {
    for (const k of envKeys) {
      if (previous[k] === undefined) delete process.env[k]
      else process.env[k] = previous[k]
    }
  }
})

function collectBlogPages(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true })
  const results: string[] = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...collectBlogPages(full))
    } else if (entry.isFile() && entry.name === "page.tsx") {
      results.push(full)
    }
  }
  return results.sort()
}

test("each blog post renders exactly one $300 invitation after its second H2 (including loop-rendered H2 posts), excluding index and author pages", async () => {
  const blogRoot = path.join(process.cwd(), "app", "blog")
  const pages = collectBlogPages(blogRoot)
  assert.ok(pages.length >= 31)

  const escapedCredit = BLOG_FEASIBILITY_CREDIT_STATEMENT.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  )

  for (const fullPath of pages) {
    const relPath = path.relative(process.cwd(), fullPath).replace(/\\/g, "/")
    const mod = await import(path.resolve(fullPath))
    const Component = mod.default?.default ?? mod.default
    const html = renderToStaticMarkup(React.createElement(Component))

    const inviteMatches = [...html.matchAll(/data-feasibility-invitation="true"/g)]
    const creditMatches = [...html.matchAll(new RegExp(escapedCredit, "g"))]

    if (relPath === "app/blog/page.tsx" || relPath === "app/blog/author/mini/page.tsx") {
      assert.equal(inviteMatches.length, 0, `${relPath} must not render the blog post $300 invitation`)
      assert.equal(creditMatches.length, 0, `${relPath} must not render the blog post credit statement`)
      continue
    }

    assert.equal(inviteMatches.length, 1, `${relPath} must render exactly 1 $300 invitation`)
    assert.equal(creditMatches.length, 1, `${relPath} must state the 30-day $300 credit terms once`)

    const h2Matches = [...html.matchAll(/<h2\b[\s\S]*?<\/h2>/g)]
    assert.ok(h2Matches.length >= 2, `${relPath} must have at least 2 H2 headings`)
    const secondH2End = h2Matches[1].index! + h2Matches[1][0].length
    const thirdH2Start = h2Matches[2] ? h2Matches[2].index! : html.length
    const inviteIndex = inviteMatches[0].index!
    assert.ok(
      inviteIndex >= secondH2End && inviteIndex < thirdH2Start,
      `${relPath} must render the $300 invitation after the 2nd H2 and before the 3rd H2`,
    )
  }
})

test("EditorialGuide handles blog posts with fewer than two headings (0 or 1 heading) or missing optional fields", () => {
  // 0 headings and all optional fields omitted
  const zeroHeadingHtml = renderToStaticMarkup(
    React.createElement(EditorialGuide, {
      data: {
        title: "Short Planning Note",
        description: "Minimal blog post without optional fields.",
        path: "/blog/short-planning-note/",
        published: "2026-09-13T12:00:00Z",
      },
    }),
  )
  assert.equal([...zeroHeadingHtml.matchAll(/<h2\b/g)].length, 0)
  assert.equal([...zeroHeadingHtml.matchAll(/data-feasibility-invitation="true"/g)].length, 1)
  assert.match(zeroHeadingHtml, new RegExp(BLOG_FEASIBILITY_CREDIT_STATEMENT.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
  assert.doesNotMatch(zeroHeadingHtml, /Invalid Date/)
  assert.doesNotMatch(zeroHeadingHtml, /"@type":"FAQPage"/)

  // 1 heading with missing optional fields (section.id, section.paragraphs, section.links, modified, intro, faqs, sources)
  const singleHeadingHtml = renderToStaticMarkup(
    React.createElement(EditorialGuide, {
      data: {
        title: "Single-Section Wedding Brief",
        description: "One-heading post with optional fields omitted.",
        path: "/blog/single-section-brief/",
        published: "2026-09-13T12:00:00Z",
        sections: [{ title: "Only Section Heading" }],
      },
    }),
  )
  const singleH2Matches = [...singleHeadingHtml.matchAll(/<h2\b[\s\S]*?<\/h2>/g)]
  assert.equal(singleH2Matches.length, 1)
  const singleInviteMatches = [...singleHeadingHtml.matchAll(/data-feasibility-invitation="true"/g)]
  assert.equal(singleInviteMatches.length, 1)
  assert.ok(
    singleInviteMatches[0].index! > singleH2Matches[0].index!,
    "Single-heading post must still render the $300 invitation once after its content",
  )

  // 1 section + FAQs (2 headings total: section H2 + FAQ H2) -> invitation appears after the 2nd H2
  const sectionPlusFaqHtml = renderToStaticMarkup(
    React.createElement(EditorialGuide, {
      data: {
        title: "Section Plus FAQ Guide",
        description: "Two headings formed by one section and FAQs.",
        path: "/blog/section-plus-faq/",
        published: "2026-09-13T12:00:00Z",
        sections: [{ title: "First Heading", paragraphs: ["First paragraph."] }],
        faqs: [{ question: "Is the first call free?", answer: "Yes, the 30-minute consultation is free." }],
      },
    }),
  )
  const twoH2Matches = [...sectionPlusFaqHtml.matchAll(/<h2\b[\s\S]*?<\/h2>/g)]
  assert.equal(twoH2Matches.length, 2)
  const twoInviteMatches = [...sectionPlusFaqHtml.matchAll(/data-feasibility-invitation="true"/g)]
  assert.equal(twoInviteMatches.length, 1)
  assert.ok(
    twoInviteMatches[0].index! >= twoH2Matches[1].index! + twoH2Matches[1][0].length,
    "Two-heading post must render the $300 invitation after the 2nd H2",
  )
})

function decodeAscii85(input: Buffer): Buffer {
  let str = input.toString("latin1").trim()
  if (str.endsWith("~>")) str = str.slice(0, -2)
  const out: number[] = []
  let tuple = 0
  let count = 0
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i)
    if (ch <= 32) continue
    if (ch === 122) {
      // 'z'
      out.push(0, 0, 0, 0)
      continue
    }
    tuple = tuple * 85 + (ch - 33)
    count++
    if (count === 5) {
      out.push(
        (tuple >>> 24) & 0xff,
        (tuple >>> 16) & 0xff,
        (tuple >>> 8) & 0xff,
        tuple & 0xff,
      )
      tuple = 0
      count = 0
    }
  }
  if (count > 0) {
    for (let i = count; i < 5; i++) tuple = tuple * 85 + 84
    for (let i = 0; i < count - 1; i++) {
      out.push((tuple >>> (24 - i * 8)) & 0xff)
    }
  }
  return Buffer.from(out)
}

test("public pages, metadata, downloadable materials, and footer use bhamini@ceremonyverse.com and keep Independent reviews Trustpilot link", () => {
  assert.equal(SITE_EMAIL, "bhamini@ceremonyverse.com")

  const footerHtml = renderToStaticMarkup(React.createElement(GlobalFooter))
  assert.match(footerHtml, /bhamini@ceremonyverse\.com/)
  assert.match(footerHtml, /https:\/\/www\.trustpilot\.com\/review\/ceremonyverse\.com/)
  assert.match(footerHtml, />Independent reviews</)
  assert.doesNotMatch(footerHtml, /Verified Reviews/i)
  assert.doesNotMatch(footerHtml, /partyslate/i)

  const checklistTxt = readFileSync(
    path.join(process.cwd(), "public/downloads/ceremonyverse-guest-logistics-gift-checklist.txt"),
    "utf8",
  )
  assert.match(checklistTxt, /bhamini@ceremonyverse\.com/)
  assert.doesNotMatch(checklistTxt, /hello@ceremonyverse\.com/)

  const pdfGenerator = readFileSync(
    path.join(process.cwd(), "scripts/build-ceremony-toolkit.py"),
    "utf8",
  )
  assert.match(pdfGenerator, /bhamini@ceremonyverse\.com/)
  assert.doesNotMatch(pdfGenerator, /hello@ceremonyverse\.com/)

  const pdfBytes = readFileSync(
    path.join(process.cwd(), "public/downloads/ceremonyverse-ceremony-toolkit.pdf"),
  )
  const pdfRaw = pdfBytes.toString("latin1")
  const streamRegex = /stream[\r\n]+([\s\S]*?)[\r\n]*endstream/g
  const decodedStreams: string[] = []
  let match: RegExpExecArray | null
  while ((match = streamRegex.exec(pdfRaw)) !== null) {
    const rawStream = Buffer.from(match[1].trim(), "latin1")
    const a85 = rawStream.subarray(-2).toString("latin1") === "~>"
      ? decodeAscii85(rawStream)
      : rawStream
    try {
      decodedStreams.push(zlib.inflateSync(a85).toString("latin1"))
    } catch {
      // Non-Flate stream
    }
  }
  const allPdfText = decodedStreams.join("\n")
  assert.match(allPdfText, /bhamini@ceremonyverse\.com/)
  assert.doesNotMatch(allPdfText, /hello@ceremonyverse\.com/)
})

test("canonical www URLs, robots, sitemap, global service offers, and FAQ markup on /faq/ and /pricing/ are valid", () => {
  assert.equal(SITE_URL, "https://www.ceremonyverse.com")
  assert.equal(canonicalUrl("/pricing"), "https://www.ceremonyverse.com/pricing/")
  const meta = buildMetadata({
    path: "/contact/",
    title: "Contact CeremonyVerse",
    description: "Free 30-minute consultation.",
  })
  assert.equal(meta.alternates?.canonical, "https://www.ceremonyverse.com/contact/")

  const robotsOutput = robots()
  assert.equal(robotsOutput.host, "https://www.ceremonyverse.com")
  assert.ok(
    Array.isArray(robotsOutput.sitemap) &&
      robotsOutput.sitemap.includes("https://www.ceremonyverse.com/sitemap.xml"),
  )

  const sitemapEntries = sitemap()
  assert.ok(sitemapEntries.length >= 100)
  for (const entry of sitemapEntries) {
    assert.match(entry.url, /^https:\/\/www\.ceremonyverse\.com\/(?:.*\/)?$/)
  }

  const businessSchema = buildLocalBusinessSchema() as {
    email: string
    hasOfferCatalog: { itemListElement: Array<{ price?: string; itemOffered?: { name?: string } }> }
  }
  assert.equal(businessSchema.email, "bhamini@ceremonyverse.com")
  const offers = businessSchema.hasOfferCatalog.itemListElement
  assert.ok(offers.length >= 6)
  assert.ok(offers.some((o) => o.price === "300"))
  assert.ok(offers.some((o) => o.price === "4000"))
  assert.ok(offers.some((o) => o.price === "5500"))
  assert.ok(offers.some((o) => o.price === "8000"))
  assert.ok(offers.some((o) => o.price === "799"))
  assert.ok(offers.some((o) => o.price === "2499"))

  const faqHtml = renderToStaticMarkup(React.createElement(FaqPage))
  assert.match(faqHtml, /"@type":"FAQPage"/)
  assert.match(faqHtml, /When is the \$300 fee credited\?/)

  const pricingHtml = renderToStaticMarkup(React.createElement(PricingPage))
  assert.match(pricingHtml, /"@type":"FAQPage"/)
  assert.match(pricingHtml, /Clear answers before you pay/)
  assert.match(pricingHtml, /Does CeremonyVerse charge a percentage of the outfit price\?/)
})
