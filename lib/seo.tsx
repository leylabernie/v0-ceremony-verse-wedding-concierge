/**
 * SEO helpers for CeremonyVerse.
 *
 * Metadata and JSON-LD are rendered server-side so search engines and AI
 * discovery systems receive the same destination-first entity definition.
 */

import type { Metadata } from "next"
import React from "react"
import { mexicoPackages } from "@/lib/mexico-packages"
import { destinationFeasibilityPlan } from "@/lib/destination-feasibility-plan"

// Base URL is env-driven so preview/staging deployments can override it;
// production falls back to the canonical www domain. Trailing slash stripped
// so URL joins never double up.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ceremonyverse.com"
).replace(/\/$/, "")
export const SITE_NAME = "CeremonyVerse"
export const SITE_EMAIL = "bhamini@ceremonyverse.com"
export const SITE_PHONE = "+12153419990"
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/proof/family-destination-baarat.webp`
// Raster logo for structured data. Google does not support SVG URLs for
// Organization/LocalBusiness logo properties, so schema blocks reference
// this 512x512 PNG (rendered from app/icon.svg - same brand mark). The
// favicon/browser icons remain SVG and are unchanged.
export const BRAND_LOGO_URL = `${SITE_URL}/assets/brand/ceremonyverse-logo-512.png`

const BRAND_SUFFIX = ` | ${SITE_NAME}`
const MAX_SERP_TITLE_LENGTH = 60
const MAX_SERP_DESCRIPTION_LENGTH = 158

const SERP_TITLE_OVERRIDES: Record<string, string> = {
  "/": "Gujarati & Hindu Destination Weddings — Mexico & Caribbean",
  "/avoid-indian-wedding-shopping-scams/": "Avoid Indian Wedding Shopping Scams — NRI Buyer Guide",
  "/blog/author/mini/": "Articles by Mini Patel — Founder",
  "/blog/custom-sherwani-sizing-guide-india-usa/": "Custom Sherwani Sizing Guide — India to USA Fit Checklist",
  "/blog/how-to-buy-bridal-lehenga-from-india-usa/": "How to Buy a Bridal Lehenga from India to USA (Guide)",
  "/blog/indian-wedding-outfit-checklist-every-ceremony/": "Indian Wedding Outfit Checklist: Every Ceremony Guide",
  "/blog/indian-wedding-outfit-scams-nri-brides/": "10 Remote Indian Wedding Outfit Risks & Buyer Checklist",
  "/blog/nri-wedding-planning-timeline/": "NRI Wedding Outfit Timeline: 12-Month Ordering Checklist",
  "/blog/shipping-indian-wedding-outfits-usa-customs-duties/": "Shipping Indian Wedding Outfits to USA: Customs & Duties",
  "/blog/south-asian-destination-wedding-guide/": "South Asian Destination Wedding Room Blocks Guide",
  "/destination-decision-map/": "Destination Wedding Decision Map — Mexico & Caribbean",
  "/guest-logistics-gift-checklist/": "Indian Wedding Guest Logistics & Gift Checklist",
  "/gujarati-destination-wedding-planning-toronto/": "Gujarati Destination Wedding Planning — Toronto & GTA",
  "/groomsmen-outfit-coordination-new-jersey/": "Groomsmen Outfit Coordination from India — New Jersey",
  "/how-to-buy-bridal-lehenga-from-india-to-usa/": "How to Buy a Bridal Lehenga from India to USA & Canada",
  "/indian-wedding-guest-outfits-usa/": "Indian Wedding Guest Outfits — Sourced from India to USA",
  "/kanchipuram-silk-sarees-usa/": "Buy Kanchipuram Silk Sarees from India — USA Delivery",
  "/mehndi-outfits-usa/": "Mehndi Ceremony Outfits — Sourced from India to USA",
  "/nri-gujarati-wedding-planning-guide/": "NRI Gujarati Wedding Planning Guide — Mexico & Caribbean",
  "/nri-gujarati-wedding-timeline-12-months/": "NRI Gujarati Wedding Timeline — 12-Month Checklist",
  "/planning-tools/resort-comparison/": "Destination Wedding Resort Proposal Comparison Tool",
  "/real-weddings/": "Three Family Weddings in Mexico — Honest Lessons Learned",
  "/resorts/": "Indian Destination Wedding Resort Profiles & Packages",
  "/sangeet-outfits-usa/": "Sangeet Ceremony Outfits — Sourced from India to USA",
  "/services/bridal-lehengas/": "Bridal Lehenga Sourcing Service — Custom from India",
  "/south-asian-destination-wedding-planning-new-york/": "South Asian Destination Wedding Planning — New York",
}

const SERP_DESCRIPTION_OVERRIDES: Record<string, string> = {
  "/": "Plan a multi-day Gujarati or Hindu destination wedding in Mexico, Jamaica, or Punta Cana with clear proposal comparisons, budgets, and family coordination.",
  "/about/": "Learn how CeremonyVerse combines firsthand family destination-wedding experience in Mexico with transparent fee-only planning and India wardrobe coordination.",
  "/blog/author/mini/": "Destination-wedding and India-sourcing guides written by Mini Patel, founder of CeremonyVerse — grounded in three family weddings in Mexico.",
  "/blog/hidden-resort-fees-4-day-indian-wedding-cancun/": "Private-event minimums, outside-vendor fees, production charges, day passes, and taxes that a 4-day Indian wedding in Cancún adds beyond the base room rate.",
  "/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/": "Evaluate seller claims, Silk Mark documentation, fiber and zari representations, landed costs, and delivery terms when sourcing Kanchipuram sarees from India.",
  "/blog/how-to-take-lehenga-measurements-at-home/": "Step-by-step at-home lehenga and blouse measurement guide for NRI brides ordering custom Indian wedding outfits remotely from India to the USA or Canada.",
  "/blog/indian-wedding-catering-mexico-all-inclusive-resorts/": "How Mexico all-inclusive resort kitchens handle Gujarati, Jain, and Hindu wedding menus, outside-chef policies, tastings, and per-event catering fees.",
  "/blog/south-asian-destination-wedding-guide/": "How to structure multi-day room blocks at all-inclusive resorts in Mexico and the Caribbean for Gujarati and Hindu weddings, concessions, and event venues.",
  "/buy-bridal-lehenga-from-india-usa/": "Research a bridal lehenga from India with live video review, guided measurements, written approvals, and tracked delivery across the USA and Canada.",
  "/buy-indian-wedding-outfits-from-india/": "Coordinate Indian wedding outfits from India with vendor research, live video review, guided measurements, written approvals, and US/Canada delivery.",
  "/contact/": "Request a free 30-minute consultation for Gujarati or Hindu destination-wedding planning in Mexico, Jamaica, or Punta Cana — plus optional India sourcing.",
  "/costs/": "Real cost breakdowns, resort room-block minimums, outside-vendor fees, and India outfit customs rules for South Asian destination weddings in Mexico.",
  "/destination-decision-map/": "Use a free three-part planning map to clarify guest needs, multi-day celebration priorities, and your next destination decision across Mexico and Punta Cana.",
  "/destination-wedding-feasibility-plan/": "Turn your guest count, events, working budget, and resort quotes into a written destination-wedding action plan for Mexico, Jamaica, or Punta Cana.",
  "/destinations/": "Compare Cancún, Riviera Maya, Los Cabos, Jamaica, and Punta Cana for a multi-day Gujarati or Hindu destination wedding, room blocks, and Indian catering.",
  "/nri-gujarati-wedding-legal-requirements-mexico/": "Civil vs. religious Hindu wedding rules in Mexico: paperwork, witnesses, apostilles, timelines, and why most NRI couples sign legally at home first.",
  "/planning-tools/baraat-event-planner/": "Free multi-day Baraat, Haldi, Mehndi, Garba/Sangeet, Mandap ceremony, and reception logistics planner for Gujarati and Hindu destination weddings.",
  "/planning-tools/budget/": "Estimate your Indian destination-wedding budget using real published resort package rates and per-guest costs across Mexico, Jamaica, and Punta Cana.",
  "/planning-tools/guest-logistics/": "Calculate guest room nights, family-paid VIP suites, airport transfers, and welcome-bag costs for an Indian destination wedding in Mexico or the Caribbean.",
  "/planning-tools/room-block-matrix/": "Turn your guest count, elder-accessibility needs, and single-vs-family mix into a room-block breakdown with lobby-level suites and King vs. Double counts.",
  "/real-weddings/": "First-person accounts and honest lessons from three multi-day family Indian destination weddings in Mexico across Cancún, Costa Mujeres, and Riviera Maya.",
  "/resorts/": "Independent resort profiles for Gujarati and Hindu destination weddings in Cancún, Riviera Maya, Los Cabos, and Punta Cana — packages, kitchens, and venues.",
  "/resorts/lopesan-costa-bavaro-indian-wedding/": "Plan an Indian wedding at Lopesan Costa Bávaro in Punta Cana with published package tiers, multi-event venues, outside-catering rules, and room-block tips.",
  "/resorts/moon-palace-cancun-indian-wedding/": "Plan an Indian wedding at Moon Palace Cancún with published package rates, in-house Indian kitchen details, room-block concessions, and Mandap venues.",
}

export function resolveContextualImage(normalizedPath: string, explicitImage?: string): string {
  if (explicitImage) {
    return explicitImage.startsWith("http")
      ? explicitImage
      : `${SITE_URL}${explicitImage.startsWith("/") ? "" : "/"}${explicitImage}`
  }

  const p = normalizedPath.toLowerCase()
  if (p.includes("kanchipuram")) return `${SITE_URL}/images/sourcing/kanchipuram-saree.webp`
  if (p.includes("banarasi")) return `${SITE_URL}/images/kanchipuram-gold-tissue.jpg`
  if (p.includes("groomsmen")) return `${SITE_URL}/images/sourcing/groomsmen-lavender.webp`
  if (p.includes("sherwani") || p.includes("baraat-outfits")) return `${SITE_URL}/images/groom-hero.webp`
  if (p.includes("bridesmaid")) return `${SITE_URL}/images/services-bridesmaids.webp`
  if (p.includes("jewelry")) return `${SITE_URL}/images/services-jewelry-real.webp`
  if (p.includes("return-gifts") || p.includes("guest-logistics") || p.includes("welcome")) {
    return `${SITE_URL}/images/services-welcomebags.webp`
  }
  if (p.includes("shipping") || p.includes("customs") || p.includes("tariff") || p.includes("scam") || p.includes("measurement") || p.includes("ordering")) {
    return `${SITE_URL}/images/live-video-shopping-india.webp`
  }
  if (p.includes("lehenga") || p.includes("bridal") || p.includes("haldi") || p.includes("mehndi") || p.includes("sangeet") || p.includes("reception-outfits") || p.includes("outfits") || p.includes("shopping")) {
    return `${SITE_URL}/images/hero-lehenga.webp`
  }
  if (p.includes("/resorts/") || p.includes("/destinations/") || p.includes("/guides/") || p.includes("room-block") || p.includes("feasibility") || p.includes("proposal")) {
    return `${SITE_URL}/images/proof/family-wedding-mandap-couple.webp`
  }
  return DEFAULT_OG_IMAGE
}

export function formatSerpTitle(rawTitle: string, normalizedPath?: string): Metadata["title"] {
  const override = normalizedPath ? SERP_TITLE_OVERRIDES[normalizedPath] : undefined
  const cleaned = (override ?? rawTitle)
    .replace(/\s*[|—–-]\s*CeremonyVerse\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim()

  if (!cleaned) return SITE_NAME

  if (cleaned.length + BRAND_SUFFIX.length <= MAX_SERP_TITLE_LENGTH) {
    return cleaned
  }

  if (cleaned.length <= MAX_SERP_TITLE_LENGTH) {
    return { absolute: cleaned }
  }

  for (const sep of [" — ", " – ", " | ", ": "]) {
    const idx = cleaned.indexOf(sep)
    if (idx >= 28 && idx <= MAX_SERP_TITLE_LENGTH) {
      return { absolute: cleaned.slice(0, idx).trim() }
    }
  }

  const cut = cleaned.slice(0, MAX_SERP_TITLE_LENGTH + 1)
  const lastSpace = cut.lastIndexOf(" ")
  const trimmed = (lastSpace >= 30 ? cut.slice(0, lastSpace) : cleaned.slice(0, MAX_SERP_TITLE_LENGTH))
    .replace(/[,;:\-—–|&]+$/, "")
    .trim()
  return { absolute: trimmed }
}

export function formatSerpDescription(rawDesc: string, normalizedPath?: string): string {
  const source = (normalizedPath && SERP_DESCRIPTION_OVERRIDES[normalizedPath])
    ? SERP_DESCRIPTION_OVERRIDES[normalizedPath]
    : rawDesc
  const cleaned = source.replace(/\s+/g, " ").trim()
  if (cleaned.length <= MAX_SERP_DESCRIPTION_LENGTH) {
    return cleaned
  }

  const window = cleaned.slice(0, MAX_SERP_DESCRIPTION_LENGTH - 1)
  const sentenceEnd = Math.max(window.lastIndexOf(". "), window.lastIndexOf("; "))
  if (sentenceEnd >= 105) {
    return window.slice(0, sentenceEnd + 1).trim()
  }

  const clauseEnd = Math.max(window.lastIndexOf(", "), window.lastIndexOf(" — "), window.lastIndexOf(" – "))
  if (clauseEnd >= 115) {
    return `${window.slice(0, clauseEnd).trim()}.`
  }

  const lastSpace = window.lastIndexOf(" ")
  let base = (lastSpace >= 100 ? window.slice(0, lastSpace) : window)
    .replace(/[,;:\-—–|&]+$/, "")
    .trim()
  base = base
    .replace(/\b(and|or|with|for|to|in|of|by|from|at|on|into|across|including|between|through|without|beyond|the|a|an|is|are|vs\.?|when|that|which)\s*$/i, "")
    .replace(/[,;:\-—–|&]+$/, "")
    .trim()
  return base.endsWith(".") ? base : `${base}.`
}

// ───────────────────────────────────────────────────────────────────────────
// AUTHOR ENTITY — Mini (Bhamini)
// ───────────────────────────────────────────────────────────────────────────
// Google's Helpful Content System and E-E-A-T guidance explicitly weight
// *demonstrable human authorship with transparent expertise*. Every blog
// post on this site is authored by Mini in a first-person voice, and the
// authorship is asserted in (a) JSON-LD as a Person, (b) OG article:author,
// and (c) a visible byline linking to the founder page below.
//
// The same Person is referenced from Organization.founder so search engines
// can connect Mini's article authorship to her role at CeremonyVerse.
export const AUTHOR_NAME = "Mini"
export const AUTHOR_FULL_NAME = "Bhamini \"Mini\" Patel"
export const AUTHOR_PAGE_PATH = "/about/mini/"
export const AUTHOR_PAGE_URL = `${SITE_URL}${AUTHOR_PAGE_PATH}`
export const AUTHOR_BIO_URL = `${SITE_URL}/about/mini/`

// Topics Mini personally writes about, grounded in the live site's own
// service pages and the family-wedding background disclosed on /about/.
// Keep aligned with the founder page's visible "knowsAbout" list.
export const AUTHOR_KNOWS_ABOUT: string[] = [
  "Gujarati destination weddings",
  "Hindu destination weddings",
  "Indian destination weddings in Mexico",
  "Indian destination weddings in Jamaica",
  "Indian destination weddings in Punta Cana",
  "Indian wedding outfit sourcing from India",
  "Bridal lehenga remote sourcing for NRI brides",
  "US customs duties on Indian wedding textiles",
  "Resort proposal comparison for Indian weddings",
  "Multi-day Indian wedding ceremony logistics",
]

// Full schema.org Person object. Used as the default `author` on every
// BlogPosting schema and referenced from Organization.founder. The sameAs
// links are the founder's verifiable public profiles — Google uses these
// to confirm identity across the web.
export const AUTHOR_PERSON = {
  "@type": "Person",
  "@id": `${SITE_URL}/about/mini/#person`,
  name: AUTHOR_FULL_NAME,
  alternateName: [AUTHOR_NAME, "Mini Patel"],
  givenName: "Bhamini",
  familyName: "Patel",
  jobTitle: "Founder and Destination Wedding Concierge",
  description:
    "Bhamini (Mini) is the founder of CeremonyVerse. She writes about Gujarati and Hindu destination weddings in Mexico, Jamaica, and Punta Cana, and about remote India wedding-outfit sourcing for NRI families across the United States and Canada.",
  url: AUTHOR_PAGE_URL,
  image: `${SITE_URL}/images/proof/family-destination-baarat.webp`,
  email: SITE_EMAIL,
  worksFor: { "@id": `${SITE_URL}#organization` },
  knowsAbout: AUTHOR_KNOWS_ABOUT,
  sameAs: [
    "https://www.instagram.com/ceremonyverseweddings/",
    "https://wa.me/12153419990",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "PA",
    addressLocality: "Philadelphia",
  },
}

// Standalone Person schema for use on the founder page itself (so the page
// is its own canonical AboutPage/ProfilePage entity).
export function buildPersonSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: AUTHOR_PERSON,
  }
}

function buildLogoImageObject(): object {
  return {
    "@type": "ImageObject",
    "@id": `${SITE_URL}#logo`,
    url: BRAND_LOGO_URL,
    contentUrl: BRAND_LOGO_URL,
    width: 512,
    height: 512,
    caption: "CeremonyVerse logo",
  }
}

// Founder entity, per the CeremonyVerse GEO/AEO blueprint: legal name
// "Bhamini", publicly displayed as "Mini". The site copy (home + about
// pages) already identifies "Mini" as founder; this makes the same fact
// machine-readable. Uses the same @id as AUTHOR_PERSON so article
// authorship and organization founder resolve to one entity.
//
// NOTE: Kept as a separate export for backward compatibility — older call
// sites import FOUNDER_ENTITY directly. AUTHOR_PERSON is the canonical
// reference and the two must stay in sync.
export const FOUNDER_ENTITY: Record<string, unknown> = AUTHOR_PERSON

// Topics the organization can credibly speak about, drawn from the live
// site's own service pages and guides. Used for the Organization knowsAbout
// property so answer engines can map entity expertise to page clusters.
export const ORGANIZATION_KNOWS_ABOUT: string[] = [
  "Gujarati destination weddings",
  "Hindu destination weddings",
  "Indian destination weddings in Mexico",
  "Indian destination weddings in Jamaica",
  "Indian destination weddings in Punta Cana",
  "Wedding room blocks and resort proposal comparison",
  "Multi-day wedding event logistics",
  "India wedding-outfit sourcing",
  "Landed-cost planning for shipments from India to the United States and Canada",
]

type SchemaArea = {
  "@type": "Country" | "Place"
  name: string
}

const defaultSourcingAreas: SchemaArea[] = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "Canada" },
]

function buildAreaServed(areaServed?: string | string[]): SchemaArea[] {
  const areaNames = areaServed
    ? Array.isArray(areaServed)
      ? areaServed
      : [areaServed]
    : defaultSourcingAreas.map((area) => area.name)

  return areaNames.map((name) => ({
    "@type": ["United States", "Canada", "Mexico", "Jamaica", "Dominican Republic"].includes(name)
      ? "Country"
      : "Place",
    name,
  }))
}

interface BuildMetadataOpts {
  path: string
  title: string
  description: string
  image?: string
  publishedTime?: string
  modifiedTime?: string
  authorName?: string
  keywords?: string | string[]
  alternates?: { languages?: Record<string, string> }
  noIndex?: boolean
  ogType?: "website" | "article" | "profile"
}

export function buildMetadata(opts: BuildMetadataOpts): Metadata {
  const normalizedPath = opts.path === "/" ? "/" : opts.path.replace(/\/$/, "") + "/"
  const canonical = `${SITE_URL}${normalizedPath}`
  const image = resolveContextualImage(normalizedPath, opts.image)
  const serpTitle = formatSerpTitle(opts.title, normalizedPath)
  const serpDescription = formatSerpDescription(opts.description, normalizedPath)
  const ogType = opts.ogType ?? (opts.publishedTime ? "article" : "website")

  return {
    title: serpTitle,
    description: serpDescription,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: {
      canonical,
      ...(opts.alternates?.languages ? { languages: opts.alternates.languages } : {}),
    },
    openGraph: {
      title: opts.title,
      description: serpDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type: ogType,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: opts.title,
        },
      ],
      ...(ogType === "article" && opts.publishedTime
        ? {
            publishedTime: opts.publishedTime,
            modifiedTime: opts.modifiedTime ?? opts.publishedTime,
            authors: [AUTHOR_PAGE_URL],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: serpDescription,
      images: [image],
    },
    ...(opts.noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}

export function JsonLd({ id, data }: { id: string; data: object | object[] }): React.JSX.Element {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

export function buildBreadcrumb(crumbs: { name: string; url: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: crumb.url.startsWith("http") ? crumb.url : `${SITE_URL}${crumb.url}`,
      })),
    ],
  }
}

export function buildBlogPosting(opts: {
  headline: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  authorName?: string
  keywords?: string[]
}): object {
  const url = opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`
  const urlPath = url.replace(SITE_URL, "") || "/"
  const image = resolveContextualImage(urlPath, opts.image)

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    url,
    image,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    // E-E-A-T: authorship is asserted as a real Person (Mini), not as the
    // organization. The Person entity is shared with Organization.founder
    // so Google can connect article authorship to her role at CeremonyVerse.
    author: AUTHOR_PERSON,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: buildLogoImageObject(),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(opts.keywords ? { keywords: opts.keywords.join(", ") } : {}),
  }
}

export function buildServiceSchema(opts: {
  name: string
  description: string
  url: string
  image?: string
  category?: string
  offers?: { name: string; price: number; description?: string }[]
  areaServed?: string | string[]
}): object {
  const url = opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`
  const urlPath = url.replace(SITE_URL, "") || "/"
  const image = resolveContextualImage(urlPath, opts.image)
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url,
    image,
    // Pure @id reference to the global ProfessionalService node (#business)
    // emitted by the root layout — avoids declaring a second, conflicting
    // node with the same @id.
    provider: { "@id": `${SITE_URL}#business` },
    areaServed: buildAreaServed(opts.areaServed),
    serviceType: opts.category ?? "Wedding Services",
    ...(opts.offers?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: opts.name,
            itemListElement: opts.offers.map((offer) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: offer.name,
                description: offer.description ?? "",
              },
              price: String(offer.price),
              priceCurrency: "USD",
            })),
          },
        }
      : {}),
  }
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function buildHowToSchema(opts: {
  name: string
  description: string
  url: string
  steps: { name: string; text: string }[]
  totalTime?: string
}): object {
  const url = opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

// Global business entity, injected into the landing page <head> via the root
// layout. @type is ProfessionalService — a schema.org subtype of LocalBusiness
// — so it receives full LocalBusiness rich-result treatment while accurately
// describing a planning consultancy. The @id (`#business`) is the canonical
// node that buildServiceSchema() references as `provider`.
export function buildLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#business`,
    name: "CeremonyVerse Destination Wedding Planning",
    alternateName: SITE_NAME,
    description:
      "CeremonyVerse is a destination-wedding planning concierge founded by Mini Patel, specializing in NRI Gujarati and Hindu destination weddings across Mexico, Jamaica, and Punta Cana for South Asian families across the United States and Canada, with optional India wedding-outfit sourcing.",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: buildLogoImageObject(),
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    founder: FOUNDER_ENTITY,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "PA",
      addressLocality: "Newtown Township",
    },
    areaServed: buildAreaServed([
      "United States",
      "Canada",
      "Mexico",
      "Jamaica",
      "Punta Cana, Dominican Republic",
    ]),
    knowsAbout: ORGANIZATION_KNOWS_ABOUT,
    priceRange: "$300 feasibility plan; planning services from $4,000 USD",
    sameAs: [
      "https://wa.me/12153419990",
      "https://www.instagram.com/ceremonyverseweddings/",
      // Booking portal — apex-canonical. Declaring it in sameAs tells crawlers
      // and AI scrapers that both domains are one business identity.
      "https://ceremonyversetravel.com",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Destination Planning and India Outfit Sourcing Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: `${SITE_URL}${destinationFeasibilityPlan.href}`,
          price: String(destinationFeasibilityPlan.price),
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: destinationFeasibilityPlan.name,
            description: destinationFeasibilityPlan.description,
          },
        },
        ...mexicoPackages
          .filter((service) => service.numericPrice !== undefined)
          .map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
            },
            price: String(service.numericPrice),
            priceCurrency: "USD",
          })),
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Guided Sourcing",
            description:
              "Remote India wedding-outfit sourcing with eligible live review, measurements, approvals, and delivery coordination.",
          },
          price: "799",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Bridal Concierge",
            description:
              "End-to-end outfit sourcing and coordination for the couple and wedding party up to eight people.",
          },
          price: "2499",
          priceCurrency: "USD",
        },
      ],
    },
  }
}

// Retained for page-level use only. It is not injected globally.
export function buildGlobalFaqSchema(): object {
  return buildFaqSchema([
    {
      question: "What does CeremonyVerse do?",
      answer:
        "CeremonyVerse provides Gujarati and Hindu destination-wedding planning across Mexico, Jamaica, and Punta Cana for U.S. and Canadian families, with optional paid India wedding-outfit sourcing.",
    },
    {
      question: "Is the first consultation free?",
      answer:
        "Yes. The first 30-minute consultation is free and requires no payment or contract. Any $300 feasibility plan, planning package, or sourcing service is presented separately in writing.",
    },
    {
      question: "How much does India wedding-outfit sourcing cost?",
      answer:
        "Published India sourcing service fees are $799 for Guided Sourcing and $2,499 for Full Bridal Concierge. Products, shipping, customs, taxes, brokerage, and alterations are separate unless expressly included in signed terms.",
    },
    {
      question: "Who handles rooms, flights, and airport transfers?",
      answer:
        "The applicable resort or qualified travel and transfer provider controls its own contracts, bookings, payments, availability, and service terms. CeremonyVerse organizes only the responsibilities included in its signed planning scope.",
    },
  ])
}

export function buildOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: buildLogoImageObject(),
    image: DEFAULT_OG_IMAGE,
    description:
      "CeremonyVerse is a U.S.-based Gujarati and Hindu destination-wedding planning service focused on Mexico, Jamaica, and Punta Cana, with optional India wedding-outfit sourcing for families across the United States and Canada.",
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    founder: FOUNDER_ENTITY,
    knowsAbout: ORGANIZATION_KNOWS_ABOUT,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_PHONE,
        email: SITE_EMAIL,
        contactType: "customer service",
        areaServed: ["United States", "Canada"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "PA",
      addressLocality: "Newtown Township",
    },
    sameAs: [
      "https://wa.me/12153419990",
      "https://www.instagram.com/ceremonyverseweddings/",
      // Booking portal — apex-canonical, same business identity as the main site.
      "https://ceremonyversetravel.com",
    ],
  }
}

export function buildWebSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Gujarati and Hindu destination-wedding planning across Mexico, Jamaica, and Punta Cana, with optional India wedding-outfit sourcing for families across the United States and Canada.",
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
    inLanguage: "en-US",
  }
}
