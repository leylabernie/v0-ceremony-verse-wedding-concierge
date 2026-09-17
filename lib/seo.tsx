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

export const SITE_URL = "https://www.ceremonyverse.com"
export const SITE_NAME = "CeremonyVerse"
export const SITE_EMAIL = "hello@ceremonyverse.com"
export const SITE_PHONE = "+12153419990"
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/proof/family-destination-baarat.webp`
// Raster logo for structured data. Google does not support SVG URLs for
// Organization/LocalBusiness logo properties, so schema blocks reference
// this 512x512 PNG (rendered from app/icon.svg - same brand mark). The
// favicon/browser icons remain SVG and are unchanged.
export const BRAND_LOGO_URL = `${SITE_URL}/assets/brand/ceremonyverse-logo-512.png`

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
    "https://www.instagram.com/glamourindianwear4u/",
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
  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${opts.image.startsWith("/") ? "" : "/"}${opts.image}`
    : DEFAULT_OG_IMAGE
  const ogType = opts.ogType ?? (opts.publishedTime ? "article" : "website")

  return {
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical,
      ...(opts.alternates?.languages ? { languages: opts.alternates.languages } : {}),
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
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
      description: opts.description,
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
  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : DEFAULT_OG_IMAGE

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
  category?: string
  offers?: { name: string; price: number; description?: string }[]
  areaServed?: string | string[]
}): object {
  const url = opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url,
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
      "https://www.instagram.com/glamourindianwear4u/",
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
      "https://www.instagram.com/glamourindianwear4u/",
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
