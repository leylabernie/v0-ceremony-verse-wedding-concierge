import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileStickyCTA from "@/components/mobile-sticky-cta";
import Script from "next/script";

export const metadata = {
  title: "Indian Wedding Shopping from India | Outfits, Jewelry, Gifts & More Delivered to USA | CeremonyVerse",
  description: "CeremonyVerse is a US-based Indian wedding shopping concierge. We source everything for your Indian wedding directly from India — bridal lehengas, sherwanis, bridesmaid outfits, groomsmen attire, jewelry, ceremonial items, wedding gifts, welcome bags, and more. Live video shopping, quality checks, and delivery to your US door. Serving NRI and South Asian families across the United States.",
  keywords: "Indian wedding shopping USA, Indian wedding concierge, source Indian wedding outfits from India, bridal lehenga from India delivered USA, buy sherwani from India, NRI wedding shopping, Indian wedding gifts USA, Indian wedding welcome bags, ceremonial items from India, Indian bridal concierge USA, live video shopping India, South Asian wedding planner USA, Indian wedding outfits delivered to USA, bridesmaid lehenga from India, groomsmen kurta USA, Indian jewelry sourcing USA, NRI bride lehenga, Indian wedding sweets USA",
  openGraph: {
    title: "Everything for Your Indian Wedding, Sourced from India | CeremonyVerse",
    description: "Bridal lehengas, sherwanis, jewelry, gifts, welcome bags, ceremonial items and more — sourced directly from India with live video shopping and delivered to your US door. CeremonyVerse is America's Indian wedding shopping concierge.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "CeremonyVerse",
        "description": "CeremonyVerse is a US-based Indian wedding shopping concierge. We source everything for your Indian wedding from India — outfits, jewelry, ceremonial items, gifts, welcome bags, and more — with live video shopping, quality checks, and delivery to your US door.",
        "url": "https://v0-ceremony-verse-wedding-concierge.vercel.app",
        "telephone": "+12153419990",
        "email": "hello@ceremonyverse.com",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "PA",
          "addressCountry": "US"
        },
        "areaServed": "US",
        "priceRange": "$$",
        "sameAs": [
          "https://www.instagram.com/ceremonyverse",
          "https://www.pinterest.com/ceremonyverse"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Wedding Sourcing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Style Guide & Vendor List", "description": "Curated vendor style guide for Indian wedding outfits", "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "149" } } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Guided Sourcing", "description": "Live video shopping sessions with India vendors for bridal outfits", "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "599" } } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Bridal Concierge", "description": "End-to-end bridal outfit sourcing and coordination for your wedding", "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "1499" } } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does CeremonyVerse source outfits from India?",
            "acceptedAnswer": { "@type": "Answer", "text": "We connect you directly with vetted vendors in India via live video shopping sessions. You browse in real time, ask questions, and we handle quality checks, negotiation, and shipping to the US." }
          },
          {
            "@type": "Question",
            "name": "How far in advance should I start the sourcing process?",
            "acceptedAnswer": { "@type": "Answer", "text": "We recommend starting 6–12 months before your wedding date, as top vendors book out quickly and custom outfits require production time." }
          },
          {
            "@type": "Question",
            "name": "What is the pricing for CeremonyVerse services?",
            "acceptedAnswer": { "@type": "Answer", "text": "Services start at $149 for a Style Guide & Vendor List, $599 for Guided Sourcing, and $1,499 for Full Bridal Concierge packages. A free consultation is always available with no commitment required." }
          },
          {
            "@type": "Question",
            "name": "Do you ship to all US states?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, we serve clients across the United States. All outfits are quality-checked in India before being shipped directly to your US address." }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {/* Urgency announcement bar — fixed at very top */}
        <div style={{ background: "#1f1f1f", color: "#c7b28a", textAlign: "center", padding: "10px 16px", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.04em", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
          * Top India vendors are booking fast for 2026–2027 weddings &nbsp;·&nbsp; Start sourcing 6–12 months out &nbsp;·&nbsp;
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20start%20sourcing%20for%20my%20wedding." target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" }}>Book a free consult →</a>
        </div>
        {/* Spacer so body content starts below fixed urgency bar + nav (40px + 96px = 136px) */}
        <div style={{ height: "136px" }} />
        {children}

        {/* SINGLE WhatsApp Button (global) */}
        <WhatsAppButton />
        {/* Mobile sticky CTA bar */}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
