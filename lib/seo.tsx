/**
 * SEO helpers for CeremonyVerse.
 *
 * Two main exports:
 *  - `buildMetadata(opts)` — returns a Next.js `Metadata` object with the
 *    correct per-page canonical, OpenGraph URL, Twitter card, etc.
 *  - `<JsonLd>` React component — renders a real `<script type="application/ld+json">`
 *    tag SERVER-SIDE so Google and AI engines can read it without JS execution.
 *    (This replaces `next/script`'s `<Script>` component which only injects
 *    structured data after hydration, invisible to the primary crawler pass.)
 */

import type { Metadata } from "next";
import React from "react";
import { mexicoPackages } from "@/lib/mexico-packages";

export const SITE_URL = "https://www.ceremonyverse.com";
export const SITE_NAME = "CeremonyVerse";
export const SITE_EMAIL = "hello@ceremonyverse.com";
export const SITE_PHONE = "+12153419990";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/proof/family-destination-baarat.webp`;

type SchemaArea = {
  "@type": "Country" | "Place";
  name: string;
};

const defaultSourcingAreas: SchemaArea[] = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "Canada" },
];

function buildAreaServed(areaServed?: string | string[]): SchemaArea[] {
  const areaNames = areaServed
    ? Array.isArray(areaServed)
      ? areaServed
      : [areaServed]
    : defaultSourcingAreas.map((area) => area.name);

  return areaNames.map((name) => ({
    "@type": ["United States", "Canada", "Mexico", "Dominican Republic"].includes(name)
      ? "Country"
      : "Place",
    name,
  }));
}

interface BuildMetadataOpts {
  /** Path beginning with `/` — e.g. `/blog/how-to-buy-bridal-lehenga-from-india-usa/`. Trailing slash optional. */
  path: string;
  title: string;
  description: string;
  /** Optional OG image (absolute URL or path). Falls back to the destination-wedding brand image. */
  image?: string;
  /** Article/blog post metadata. When present, OG type becomes "article". */
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  /**
   * Legacy input retained while page modules are migrated. Search engines do
   * not use the meta-keywords tag, so buildMetadata intentionally ignores it.
   */
  keywords?: string | string[];
  /** Optional alternate language hrefs. */
  alternates?: { languages?: Record<string, string> };
  /** Optional noindex. Defaults to allowing indexing. */
  noIndex?: boolean;
  /** Optional type override (defaults to "website" or "article" if publishedTime). */
  ogType?: "website" | "article" | "profile";
}

/**
 * Build a per-page Metadata object that always canonicals to itself.
 * This is the FIX for the bug where every page canonicalled to the homepage.
 */
export function buildMetadata(opts: BuildMetadataOpts): Metadata {
  const normalizedPath = opts.path === "/" ? "/" : opts.path.replace(/\/$/, "") + "/";
  const canonical = `${SITE_URL}${normalizedPath}`;
  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${opts.image.startsWith("/") ? "" : "/"}${opts.image}`
    : DEFAULT_OG_IMAGE;

  const ogType = opts.ogType ?? (opts.publishedTime ? "article" : "website");

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
  };
}

/**
 * Render JSON-LD structured data SERVER-SIDE.
 *
 * Usage:
 *   <JsonLd id="faq-schema" data={faqSchema} />
 *
 * This intentionally uses a plain <script> tag (NOT next/script) so the
 * structured data is in the initial HTML response — visible to Google's
 * primary crawler and to AI engines (Perplexity, ChatGPT Search, Google AI
 * Overviews) that read raw HTML.
 */
export function JsonLd({
  id,
  data,
}: {
  id: string;
  data: object | object[];
}): React.JSX.Element {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Build a BreadcrumbList schema from a list of crumbs.
 * Always starts with Home.
 *
 * Usage:
 *   const crumbs = buildBreadcrumb([
 *     { name: "Blog", url: "/blog/" },
 *     { name: "How to Buy a Bridal Lehenga", url: "/blog/how-to-buy-bridal-lehenga-from-india-usa/" },
 *   ]);
 */
export function buildBreadcrumb(
  crumbs: { name: string; url: string }[]
): object {
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
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.name,
        item: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url}`,
      })),
    ],
  };
}

/**
 * Build a BlogPosting schema.
 */
export function buildBlogPosting(opts: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  keywords?: string[];
}): object {
  const url = opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`;
  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : DEFAULT_OG_IMAGE;
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
  };
}

/**
 * Build a Service schema for commercial landing pages.
 */
export function buildServiceSchema(opts: {
  name: string;
  description: string;
  url: string;
  category?: string;
  offers?: { name: string; price: number; description?: string }[];
  areaServed?: string | string[];
}): object {
  const url = opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`;
  const areaServed = buildAreaServed(opts.areaServed);
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
    areaServed,
    serviceType: opts.category ?? "Indian Wedding Sourcing",
    ...(opts.offers && opts.offers.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: opts.name,
            itemListElement: opts.offers.map((o) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: o.name,
                description: o.description ?? "",
              },
              price: String(o.price),
              priceCurrency: "USD",
            })),
          },
        }
      : {}),
  };
}

/**
 * Build an FAQPage schema from Q&A pairs.
 */
export function buildFaqSchema(faqs: { question: string; answer: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/**
 * Build a HowTo schema from steps.
 */
export function buildHowToSchema(opts: {
  name: string;
  description: string;
  url: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}): object {
  const url = opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/**
 * The global LocalBusiness schema — used in layout.tsx.
 *
 * NOTE: aggregateRating and review fields were intentionally REMOVED on
 * 2026-07-26. They were declaring a 5.0/27-review rating that did not
 * correspond to visible reviews on the page, which violates Google's
 * structured data spam policy and risks a manual action suppressing
 * the entire site's rankings. Review schema should only be added after
 * a review is independently verifiable and the same review is visible
 * on the page where the markup appears.
 */
export function buildLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#business`,
    name: SITE_NAME,
    description:
      "CeremonyVerse offers Indian wedding shopping for families across the United States and Canada plus Gujarati and Hindu destination-wedding planning across Mexico and Punta Cana.",
    url: SITE_URL,
    image: `${SITE_URL}/images/proof/family-destination-baarat.webp`,
    logo: `${SITE_URL}/icon.svg`,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "PA",
      addressLocality: "Philadelphia",
    },
    areaServed: buildAreaServed(["United States", "Canada", "Mexico", "Dominican Republic"]),
    priceRange: "$$",
    sameAs: [
      "https://wa.me/12153419990",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wedding Shopping and Destination Planning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Guided Sourcing",
            description:
              "Live video shopping sessions with families in Surat and Delhi for bridal outfits",
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
              "End-to-end outfit sourcing and coordination for bride, groom, and party up to 8",
          },
          price: "2499",
          priceCurrency: "USD",
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
      ],
    },
  };
}

/**
 * Global FAQ schema — used in layout.tsx so it appears on every page for AI citation.
 * Keep this short; the FAQ page has its own complete FAQ schema.
 */
export function buildGlobalFaqSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does CeremonyVerse do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CeremonyVerse offers India wedding shopping for families throughout the United States and Canada plus destination-wedding planning support for Gujarati and Hindu families across Mexico and Punta Cana. Starting fees are published for three planning packages; the final written proposal defines the selected planning, on-site, family-support, guest, and optional India-sourcing services.",
        },
      },
      {
        "@type": "Question",
        name: "How does CeremonyVerse source Indian wedding outfits for the USA and Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CeremonyVerse works with sourcing partners primarily in Surat and Delhi. Guided tiers can include live video review, written selection approval, measurement support, order follow-up, pre-shipping review, and U.S. or Canada shipping-document and tracking coordination.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy a bridal lehenga from India and have it delivered to the USA or Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. CeremonyVerse helps U.S. and Canadian families source bridal lehengas through working relationships in Surat and Delhi. Eligible tiers can include live video review, written item approval, measurement coordination, pre-shipping review, and shipping-document and tracking support. Carrier service, customs clearance, duties, taxes, brokerage, and final delivery remain subject to the applicable providers and signed terms.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to source Indian wedding outfits from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CeremonyVerse India sourcing services start at $799 for Guided Sourcing and $2,499 for Full Bridal Concierge. Destination-planning packages start at $4,000 for Event Coordination & Management, $5,500 for Partial Planning & Coordination, and $8,000 for Full Planning & Design. The first 30-minute consultation is free and requires no payment or contract.",
        },
      },
      {
        "@type": "Question",
        name: "Do you source designer-label items like Manish Malhotra or Sabyasachi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. CeremonyVerse does not sell unauthorized replicas or counterfeit labels. Reference images can be used to understand a preferred silhouette, color, or overall aesthetic, then CeremonyVerse helps locate original options within the client's budget.",
        },
      },
      {
        "@type": "Question",
        name: "Do you source pure silk Kanchipuram and Banaras sarees direct from weavers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CeremonyVerse can seek Kanchipuram and Banarasi saree options when the requested textile, certification, vendor, and timeline can be responsibly verified. Available documentation and any limitations are explained before purchase.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I contact CeremonyVerse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starting 6-12 months before the wedding usually leaves more time for vendor estimates, approvals, production, shipping, customs, local fittings, and backup options. The workable timeline still depends on the selected items, vendors, destination, and event date.",
        },
      },
      {
        "@type": "Question",
        name: "Do you coordinate Indian wedding item delivery throughout the USA and Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CeremonyVerse can coordinate delivery across all 50 U.S. states, Washington, D.C., and every Canadian province and territory, subject to the selected carrier's current service for the exact address. Availability, cost, tracking, customs processing, taxes, duties, brokerage, and timing depend on the shipment and destination and are confirmed in the applicable quote.",
        },
      },
    ],
  };
}

/**
 * Organization schema — site-wide entity for Google Knowledge Graph and AI
 * engines. Complements the LocalBusiness schema (which describes the physical
 * service) by declaring the brand entity and contact points.
 *
 * NOTE: `sameAs` is intentionally limited to profiles the business actually
 * maintains. Do NOT list social URLs that don't resolve — Google treats a
 * broken sameAs as a weak/incorrect entity signal.
 */
export function buildOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/images/proof/family-destination-baarat.webp`,
    description:
      "CeremonyVerse is a U.S.-based Indian wedding shopping concierge serving families across the United States and Canada, with destination-wedding support for Gujarati and Hindu celebrations across Mexico and Punta Cana.",
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
    ],
  };
}

/**
 * WebSite schema — declares the site entity and its publisher.
 *
 * NOTE: We intentionally do NOT include a SearchAction / sitelinks-searchbox.
 * Google deprecated the sitelinks searchbox rich result in late 2024, and the
 * site has no working internal search endpoint to back the declaration.
 * Declaring a non-functional SearchAction is a misrepresentation with no upside.
 */
export function buildWebSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Indian wedding shopping for families across the United States and Canada plus Gujarati and Hindu destination-wedding planning across Mexico and Punta Cana.",
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
    inLanguage: "en-US",
  };
}
