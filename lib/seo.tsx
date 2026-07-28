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

export const SITE_URL = "https://www.ceremonyverse.com";
export const SITE_NAME = "CeremonyVerse";
export const SITE_EMAIL = "bhamini@ceremonyverse.com";
export const SITE_PHONE = "+12153419990";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-lehenga.webp`;

interface BuildMetadataOpts {
  /** Path beginning with `/` — e.g. `/blog/how-to-buy-bridal-lehenga-from-india-usa/`. Trailing slash optional. */
  path: string;
  title: string;
  description: string;
  /** Optional OG image (absolute URL or path). Falls back to hero-lehenga.jpg. */
  image?: string;
  /** Article/blog post metadata. When present, OG type becomes "article". */
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  /** Optional keywords string or array. */
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
    keywords: opts.keywords,
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
      site: "@ceremonyverse",
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
  areaServed?: string;
}): object {
  const url = opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: SITE_PHONE,
      email: SITE_EMAIL,
      priceRange: "$$",
      areaServed: opts.areaServed ?? "US",
    },
    areaServed: opts.areaServed ?? "US",
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
 * the entire site's rankings. Reviews now live as visible HTML on the
 * homepage and /real-weddings/ page; we can re-add review schema ONLY
 * after those visible reviews are the same ones marked up here.
 */
export function buildLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#business`,
    name: SITE_NAME,
    description:
      "We outfit entire wedding parties from India — every garment made to measure, every colour cut from a single dye lot, delivered to every door. Serving NRI families in all 50 states.",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-lehenga.webp`,
    logo: `${SITE_URL}/icon.svg`,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "PA",
      addressLocality: "Philadelphia",
    },
    areaServed: "US",
    priceRange: "$$",
    sameAs: [
      "https://wa.me/12153419990",
      "https://www.trustpilot.com/review/ceremonyverse.com",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Indian Wedding Outfit Sourcing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Style Guide & Vendor List",
            description:
              "Curated starting point for self-directed brides sourcing Indian wedding outfits from Surat and Delhi",
          },
          price: "249",
          priceCurrency: "USD",
        },
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
        // Mexico coordination offers removed from the GLOBAL LocalBusiness
        // schema (Task 6). layout.tsx injects this on every page, so it is
        // sitewide metadata. The dedicated Mexico pages keep their own copy.
      ],
    },
  };
}

/**
 * Visible testimonials data — used by both the homepage and the
 * /real-weddings/ page. These are the SAME reviews that previously
 * lived only in JSON-LD schema; making them visible HTML satisfies
 * Google's structured data policy that review schema must point to
 * visible reviews on the page.
 *
 * Returning an array (not schema) keeps presentation in the component
 * layer. Schema consumers should NOT consume this — the visible HTML
 * is what Google crawls for the review-content match.
 */
export const VISIBLE_TESTIMONIALS = [
  {
    couple: "Kaval & April",
    ceremony: "4-day Gujarati + South Indian Christian wedding",
    body: "We had no idea where to start with a 4-day Gujarati and South Indian Christian wedding. CeremonyVerse dressed everyone — including a special trip to Kanchipuram for pure silk sarees. Bridal lehenga, reception lehenga, 14 bridesmaids, 14 groomsmen, full family, ceremonial items, return gifts, sweets, welcome bags, and even our dog. Extraordinary service.",
  },
  {
    couple: "Karan & Sonal",
    ceremony: "4-day Gujarati destination wedding, Mexico",
    body: "Planning a 4-day Gujarati destination wedding in Mexico with coordinated outfits for the bride, groom, full bridal party, and entire family for each day felt impossible. CeremonyVerse handled every single detail — including our two dogs, ceremonial items, return gifts, sweets, and welcome bags. Flawless from start to finish.",
  },
  {
    couple: "Charly & Viola",
    ceremony: "South Indian Christian wedding",
    body: "We are both South Indian Christians and wanted outfits that truly reflected our heritage. CeremonyVerse sourced the bridesmaids outfits and Charly's outfit beautifully — every decision made with care. Our families were blown away.",
  },
  {
    couple: "Druma & Parin",
    ceremony: "Gujarati wedding, Kanchipuram sourcing",
    body: "For our Gujarati wedding, Bhamini travelled to Kanchipuram specifically to source pure silk sarees — the real thing, not a compromise. She also had our matching outfits custom made by a local boutique to our exact vision. The attention to detail was extraordinary.",
  },
] as const;

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
          text: "CeremonyVerse offers two services. First, Indian wedding outfit sourcing from Surat and Delhi — live video shopping, family inspection before shipping, and clear itemised pricing. Second, Mexico wedding coordination in Cancun and Riviera Maya — vetted vendors from my own son's 4-day wedding, including planner, DJ, photographers, decorator, and beauty. Many brides want both: outfits sourced from India and a Mexico wedding coordinated by the same team.",
        },
      },
      {
        "@type": "Question",
        name: "How does CeremonyVerse source Indian wedding outfits from India to the USA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "My family has been in Surat's fabric trade for generations. Through those connections, I source from the same places US Indian boutiques source from. You shop via live video sessions, see and pick the actual pieces, my family inspects before shipping, and we handle all shipping and customs to deliver to your US door.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy a bridal lehenga from India and have it delivered to the USA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. CeremonyVerse specializes in sourcing bridal lehengas direct from Surat and Delhi for NRI brides in the USA. We offer live video shopping so you can see the actual fabric and embroidery before purchasing, and we handle all shipping and customs to deliver to your US door.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to source Indian wedding outfits from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CeremonyVerse sourcing services start at $249 for a Style Guide & Vendor List, $799 for Guided Sourcing with live video sessions, and $2,499 for Full Bridal Concierge. Mexico coordination starts at $499 for Vendor Network Access, $1,500 for Day-Of Coordination, and $4,500+ for 4-Day Full Coordination. A free 30-minute consultation is always available. Most clients save 40-60% compared to US Indian boutiques.",
        },
      },
      {
        "@type": "Question",
        name: "Do you source designer-label items like Manish Malhotra or Sabyasachi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We don't source designer-label pieces, and we don't sell replicas or knockoffs. What we DO source is authentic Indian handwork — zardozi, aari, gota patti, resham, mirror work — from the same places US Indian boutiques source from, through my family's connections in Surat and Delhi. If you want a designer-inspired look, my local boutique can recreate a reference image at about 85% similarity for less than half the designer's cost.",
        },
      },
      {
        "@type": "Question",
        name: "Do you source pure silk Kanchipuram and Banaras sarees direct from weavers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I go myself to Kanchipuram and Banaras — not someone I send, me personally. Pure silk, hallmark-certified, real zari. I also source art silk and semi-silk gift sarees for return gifts and family. The weavers told me their sarees take a year to reach Gujarat through the distribution chain. I bought a pure silk Kanchipuram direct from the weaver for 20,000 rupees; the same saree (not even as nice) was 56,000 rupees in a posh Vadodara boutique. That's the markup I cut out — for sarees the same way I do for lehengas.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I contact CeremonyVerse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend starting 6-12 months before your wedding date. Top families who do this work book quickly and custom outfits require production time. If your wedding is sooner, contact us and we will tell you honestly what is achievable.",
        },
      },
      {
        "@type": "Question",
        name: "Do you ship Indian wedding items to all US states?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, CeremonyVerse serves families across all US states. We have worked with clients in New Jersey, New York, Pennsylvania, Illinois, Georgia, Texas, California, and many more. All items are quality-checked in India before being shipped to your US address.",
        },
      },
    ],
  };
}
