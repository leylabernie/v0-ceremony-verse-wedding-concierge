import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import StickyCTABar from "@/components/sticky-cta-bar";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { SocialProofNotification } from "@/components/social-proof-notification";
import Script from "next/script";
import { buildOrganizationSchema, buildVideoObjectSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "Indian Wedding Shopping Concierge for NRI Families | CeremonyVerse",
  description: "CeremonyVerse is the premier Indian wedding shopping concierge for NRI families. We source authentic bridal lehengas, sherwanis, and jewelry directly from India with live video approval and door-to-door delivery to the USA, UK, Canada, and Australia.",
  keywords: "Indian wedding shopping USA, NRI bridal lehenga, buy bridal lehenga from India, Indian wedding concierge, custom sherwani online, NRI wedding shopping guide, Sabyasachi style lehenga, Indian wedding outfits US delivery, live video shopping India, South Asian wedding concierge",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "https://www.ceremonyverse.com",
    languages: {
      "en-US": "https://www.ceremonyverse.com",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com",
    },
  },
  openGraph: {
    title: "Authentic Indian Wedding Shopping for NRI Families | CeremonyVerse",
    description: "Bridal lehengas, sherwanis, jewelry, gifts & welcome bags — sourced directly from India, approved live on video before shipping, delivered to your door in the USA, Canada, UK, Australia & NZ. The trusted Indian wedding shopping concierge for NRI families worldwide.",
    type: "website",
    url: "https://www.ceremonyverse.com",
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "Red and gold bridal lehenga sourced from India for NRI brides in USA — CeremonyVerse Indian wedding shopping concierge",
      },
    ],
    siteName: "CeremonyVerse",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ceremonyverse",
    title: "Authentic Indian Wedding Shopping for NRI Families | CeremonyVerse",
    description: "Bridal lehengas, sherwanis, jewelry, gifts & welcome bags — sourced from India, approved live on video, delivered to your door worldwide.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness schema — global on every page (correct per Google guidelines)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CeremonyVerse",
    "description": "CeremonyVerse is an Indian wedding shopping concierge serving NRI and South Asian families in the USA, Canada, UK, Australia, and New Zealand. We source everything for your Indian wedding from India — outfits, jewelry, ceremonial items, gifts, welcome bags, and more — with live video shopping, quality checks, and international delivery.",
    "url": "https://www.ceremonyverse.com",
    "image": "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
    "telephone": "+12153419990",
    "email": "bhamini@ceremonyverse.com",
    "areaServed": [{"@type": "Country", "name": "USA"}, {"@type": "Country", "name": "UK"}, {"@type": "Country", "name": "Canada"}, {"@type": "Country", "name": "Australia"}],
    "priceRange": "$$",
    "knowsAbout": ["NRI Wedding Shopping", "Indian Bridal Fashion", "US Customs & Tariffs", "Gujarati Wedding Traditions", "South Indian Christian Weddings", "Punjabi Sikh Weddings", "Bengali Wedding Traditions"],
    "founder": {
      "@type": "Person",
      "name": "Bhamini",
      "jobTitle": "Founder & Sourcing Expert"
    },
    "sameAs": [
      "https://www.instagram.com/ceremonyverse",
      "https://www.pinterest.com/ceremonyverse",
      "https://www.tiktok.com/@ceremonyverse",
      "https://www.facebook.com/profile.php?id=61585573921802",
      "https://wa.me/12153419990",
      "https://www.trustpilot.com/review/ceremonyverse.com"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "12",
      "reviewCount": "12"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Sourcing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Style Guide & Vendor List", "description": "Curated vendor style guide for Indian wedding outfits", "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "149" } } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Guided Sourcing", "description": "Live video shopping sessions with India vendors for bridal outfits", "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "599" } } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Bridal Concierge", "description": "End-to-end bridal outfit sourcing and coordination for your wedding", "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "1499" } } }
      ]
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Source Indian Wedding Outfits from India to the USA",
    "description": "Step-by-step process for NRI families to source authentic Indian wedding outfits from India using CeremonyVerse's concierge service.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Book a Free Consultation",
        "text": "Schedule a free 30-minute consultation to discuss your wedding vision, timeline, outfit needs, and budget. We listen and advise — no pressure."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Live Video Shopping from India",
        "text": "Join a live video call where we walk you through options from our vetted artisan partners in India. See actual fabrics, embroidery, and colors in real time. The exact piece you approve is reserved for you."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Custom Measurements and Production",
        "text": "We collect 15+ precise measurements and manage custom stitching with strategic ease allowances. Production typically takes 6-12 weeks for bridal pieces."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Quality Inspection and Shipping",
        "text": "Every item is inspected in India before shipping. We handle all customs documentation, insure every shipment, and deliver to your US door. You pay milestone-based: 25% deposit, 35% after approval, 30% after inspection, 10% on delivery."
      }
    ],
    "totalTime": "P6M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "149-1499"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CeremonyVerse",
    "url": "https://www.ceremonyverse.com",
    "description": "The premier Indian wedding shopping concierge for NRI families. Source authentic bridal lehengas, sherwanis, and jewelry directly from India with live video approval and door-to-door delivery.",
    "publisher": {
      "@type": "Organization",
      "name": "CeremonyVerse",
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.ceremonyverse.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
  const organizationSchema = buildOrganizationSchema();
  const videoSchema = buildVideoObjectSchema({
    name: "How CeremonyVerse Sources Indian Wedding Outfits from India",
    description: "See how CeremonyVerse connects NRI families with India's best artisan workshops through live video shopping, custom measurements, quality inspections, and international delivery.",
    path: "/",
    uploadDate: "2026-01-15T00:00:00+05:30",
    duration: "PT2M",
  });

  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance — critical third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8K8YLBERPM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8K8YLBERPM', {
              send_page_view: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
        {/* Only meta tags NOT already handled by Next.js metadata API */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="CeremonyVerse" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="category" content="Indian Wedding Shopping, Bridal Concierge, Wedding Services" />
        <meta name="classification" content="Business" />
        <meta name="p:domain_verify" content="639b7c7ea9066797d34d3d8042e36bc0" />
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="OiNuMrzHTUF6J3sTSpPGLRptCHEEBDiEknyTj-WuVRk" />
        {/* Removed duplicate og: and twitter: meta tags — Next.js metadata API generates these automatically from the `metadata` export above. Having both caused duplicate OG tags on subpages. */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema) }}
        />
        <Script
          id="video-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(videoSchema) }}
        />
      </head>
      <body>
        {/* Urgency announcement bar — fixed at very top */}
        <div style={{ background: "#1f1f1f", color: "#c7b28a", textAlign: "center", padding: "10px 16px", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.04em", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
          * Top India vendors are booking fast for 2026–2027 weddings &nbsp;·&nbsp; <a href="/quiz" style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" }}>Take our Style Quiz</a> &nbsp;·&nbsp;
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20start%20sourcing%20for%20my%20wedding." target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" }}>Book a free consult →</a>
        </div>
        {/* Spacer so body content starts below fixed urgency bar + nav (40px + 96px = 136px) */}
        <div style={{ height: "136px" }} />
        {children}

        {/* SINGLE WhatsApp Button (global) */}
        <WhatsAppButton />
        {/* Sticky CTA bar (mobile + desktop) */}
        <StickyCTABar />
        {/* Exit intent popup (desktop only) */}
        <ExitIntentPopup />
        {/* Social proof notifications */}
        <SocialProofNotification />
      </body>
    </html>
  );
}
