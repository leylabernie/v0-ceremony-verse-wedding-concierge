/**
 * SEO helpers for CeremonyVerse.
 *
 * Metadata and JSON-LD are rendered server-side so search engines and AI
 * discovery systems receive the same destination-first entity definition.
 */

import type { Metadata } from "next"
import React from "react"
import { mexicoPackages } from "@/lib/mexico-packages"

export const SITE_URL = "https://www.ceremonyverse.com"
export const SITE_NAME = "CeremonyVerse"
export const SITE_EMAIL = "hello@ceremonyverse.com"
export const SITE_PHONE = "+12153419990"
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/proof/family-destination-baarat.webp`

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
    "@type": ["United States", "Canada", "Mexico", "Dominican Republic"].includes(name)
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
            authors: opts.authorName ? [opts.authorName] : [SITE_NAME],
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
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
    author: {
      "@type": "Organization",
      name: opts.authorName ?? SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
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
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#business`,
      name: SITE_NAME,
      url: SITE_URL,
    },
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

export function buildLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#business`,
    name: SITE_NAME,
    description:
      "CeremonyVerse provides Gujarati and Hindu destination-wedding planning in Mexico, with optional India wedding-outfit sourcing for families across the United States and Canada.",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: `${SITE_URL}/icon.svg`,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "PA",
      addressLocality: "Philadelphia",
    },
    areaServed: buildAreaServed([
      "United States",
      "Canada",
      "Mexico",
    ]),
    priceRange: "$$",
    sameAs: [
      "https://wa.me/12153419990",
      "https://www.instagram.com/ceremonyverse/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Destination Planning and India Outfit Sourcing Services",
      itemListElement: [
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
        "CeremonyVerse provides Gujarati and Hindu destination-wedding planning in Mexico for U.S. and Canadian families, with optional paid India wedding-outfit sourcing.",
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
    logo: `${SITE_URL}/icon.svg`,
    image: DEFAULT_OG_IMAGE,
    description:
      "CeremonyVerse is a U.S.-based Gujarati and Hindu destination-wedding planning service focused on Mexico, with optional India wedding-outfit sourcing for families across the United States and Canada.",
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
      addressLocality: "Philadelphia",
    },
    sameAs: [
      "https://wa.me/12153419990",
      "https://www.instagram.com/ceremonyverse/",
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
      "Gujarati and Hindu destination-wedding planning in Mexico, with optional India wedding-outfit sourcing for families across the United States and Canada.",
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
    inLanguage: "en-US",
  }
}
