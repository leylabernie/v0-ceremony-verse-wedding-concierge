import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileStickyCTA from "@/components/mobile-sticky-cta";
import Script from "next/script";

export const metadata = {
  title: "Indian Wedding Outfit Sourcing from India | Bridal Concierge for US Families | CeremonyVerse",
  description: "CeremonyVerse helps US-based South Asian families source authentic bridal lehengas, sherwanis, bridesmaid outfits, and jewelry directly from India — with live video shopping, quality checks, and delivery to your door. No flights. No scams.",
  keywords: "Indian wedding outfit sourcing USA, bridal lehenga from India, buy sherwani USA, Indian bridal concierge, NRI wedding shopping, Indian wedding outfits delivered USA, live video shopping India, South Asian bridal lehenga",
  openGraph: {
    title: "Indian Wedding Outfit Sourcing from India | CeremonyVerse",
    description: "Authentic Indian bridal lehengas, sherwanis, and family outfits sourced directly from India — with live video shopping and delivery to the US.",
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
        "description": "US-based South Asian wedding outfit sourcing concierge. We source bridal lehengas, sherwanis, bridesmaid outfits, and jewelry directly from India via live video shopping.",
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
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Guided Video Shopping", "description": "Live video shopping sessions with India vendors for bridal outfits", "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "499" } } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Bridal Concierge", "description": "End-to-end bridal outfit sourcing and coordination for your wedding", "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "1200" } } }
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
            "acceptedAnswer": { "@type": "Answer", "text": "Services start at $149 for a Style Guide & Vendor List, $499 for Guided Video Shopping, and $1,200 for Full Bridal Concierge packages." }
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
          ✦ Top India vendors are booking fast for 2026–2027 weddings &nbsp;·&nbsp; Start sourcing 6–12 months out &nbsp;·&nbsp;
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
