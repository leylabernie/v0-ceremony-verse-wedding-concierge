/**
 * CeremonyVerse — Shared JSON-LD Schema Builders
 * 
 * Reusable functions for generating structured data (Schema.org) 
 * for every page type on the site. Each function returns a plain 
 * object that can be serialized with JSON.stringify() and injected 
 * via a <Script type="application/ld+json"> tag.
 */

const BASE_URL = "https://www.ceremonyverse.com";

// ─── BreadcrumbList ───────────────────────────────────────────
export interface BreadcrumbItem {
  name: string;
  path: string; // relative path like "/services/bridal-lehengas"
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

// ─── FAQPage ──────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export function buildFAQSchema(faqs: FAQItem[]) {
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
  };
}

// ─── Service ──────────────────────────────────────────────────
export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  priceFrom?: string;
  priceCurrency?: string;
  image?: string;
  areaServed?: string[];
}

export function buildServiceSchema(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${BASE_URL}${input.path}`,
    provider: {
      "@type": "LocalBusiness",
      name: "CeremonyVerse",
      url: BASE_URL,
    },
    ...(input.image && { image: `${BASE_URL}${input.image}` }),
    ...(input.priceFrom && {
      offers: {
        "@type": "Offer",
        price: input.priceFrom,
        priceCurrency: input.priceCurrency || "USD",
      },
    }),
    ...(input.areaServed && {
      areaServed: input.areaServed.map((name) => ({
        "@type": "Country",
        name,
      })),
    }),
    serviceType: "Indian Wedding Shopping Concierge",
  };
}

// ─── BlogPosting ──────────────────────────────────────────────
export interface BlogPostingInput {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  keywords?: string[];
}

export function buildBlogPostingSchema(input: BlogPostingInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: `${BASE_URL}${input.path}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName || "Bhamini",
      jobTitle: "Founder & Sourcing Expert",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "CeremonyVerse",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo-nav.png`,
      },
    },
    ...(input.image && {
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}${input.image}`,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${input.path}`,
    },
    ...(input.keywords && { keywords: input.keywords.join(", ") }),
  };
}

// ─── WebSite (sitewide, add to root layout) ──────────────────
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CeremonyVerse",
    url: BASE_URL,
    description:
      "The premier Indian wedding shopping concierge for NRI families. Source authentic bridal lehengas, sherwanis, and jewelry directly from India with live video approval and door-to-door delivery.",
    publisher: {
      "@type": "Organization",
      name: "CeremonyVerse",
    },
  };
}

// ─── Organization (sitewide, add to root layout) ─────────────
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CeremonyVerse",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo-nav.png`,
    description:
      "US-based Indian wedding shopping concierge for NRI families. We source authentic bridal lehengas, sherwanis, jewelry, ceremonial items, gifts, and welcome bags directly from India.",
    founder: {
      "@type": "Person",
      name: "Bhamini",
      jobTitle: "Founder & Sourcing Expert",
    },
    sameAs: [
      "https://www.instagram.com/ceremonyverse",
      "https://www.pinterest.com/ceremonyverse",
      "https://www.tiktok.com/@ceremonyverse",
      "https://www.facebook.com/profile.php?id=61585573921802",
      "https://wa.me/12153419990",
      "https://www.trustpilot.com/review/ceremonyverse.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-215-341-9990",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

// ─── HowTo (for /how-it-works) ───────────────────────────────
export interface HowToStep {
  name: string;
  text: string;
  position: number;
}

export function buildHowToSchema(steps: HowToStep[], name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s) => ({
      "@type": "HowToStep",
      position: s.position,
      name: s.name,
      text: s.text,
    })),
    totalTime: "P6M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "149-1499",
    },
  };
}

// ─── Product (for outfit landing pages) ──────────────────────
export interface ProductSchemaInput {
  name: string;
  description: string;
  path: string;
  image?: string;
  priceFrom?: string;
  priceCurrency?: string;
  availability?: string;
}

export function buildProductSchema(input: ProductSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    url: `${BASE_URL}${input.path}`,
    brand: {
      "@type": "Brand",
      name: "CeremonyVerse",
    },
    ...(input.image && { image: `${BASE_URL}${input.image}` }),
    offers: {
      "@type": "Offer",
      ...(input.priceFrom && { price: input.priceFrom }),
      priceCurrency: input.priceCurrency || "USD",
      availability: input.availability || "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "CeremonyVerse",
      },
    },
  };
}

// ─── Review / AggregateRating ────────────────────────────────
export function buildAggregateRatingSchema(rating: number, count: number, bestRating = 5) {
  return {
    "@type": "AggregateRating",
    ratingValue: String(rating),
    bestRating: String(bestRating),
    worstRating: "1",
    ratingCount: String(count),
    reviewCount: String(count),
  };
}

// ─── VideoObject (for video rich snippets) ───────────────────
export interface VideoObjectSchemaInput {
  name: string;
  description: string;
  path: string;
  uploadDate: string;
  duration?: string;
  thumbnailUrl?: string;
  contentUrl?: string;
}

export function buildVideoObjectSchema(input: VideoObjectSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: input.name,
    description: input.description,
    url: `${BASE_URL}${input.path}`,
    uploadDate: input.uploadDate,
    ...(input.duration && { duration: input.duration }),
    thumbnailUrl: input.thumbnailUrl || `${BASE_URL}/images/hero-lehenga.jpg`,
    contentUrl: input.contentUrl || `${BASE_URL}/hero-video.mp4`,
    publisher: {
      "@type": "Organization",
      name: "CeremonyVerse",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo-nav.png`,
      },
    },
  };
}

// ─── Blog (for blog index page) ───────────────────────────────
export interface BlogSchemaInput {
  name: string;
  description: string;
  path: string;
  posts: { title: string; path: string; datePublished: string }[];
}

export function buildBlogSchema(input: BlogSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: input.name,
    description: input.description,
    url: `${BASE_URL}${input.path}`,
    publisher: {
      "@type": "Organization",
      name: "CeremonyVerse",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo-nav.png`,
      },
    },
    blogPost: input.posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${BASE_URL}${post.path}`,
      datePublished: post.datePublished,
    })),
  };
}

// ─── Helper: Combine multiple schemas into @graph ────────────
export function combineSchemas(...schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}

// ─── Helper: JSON-LD Script component string ─────────────────
// Usage in page.tsx: 
//   <Script id="page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemaObj) }} />
export function jsonLd(schema: object): string {
  return JSON.stringify(schema);
}
