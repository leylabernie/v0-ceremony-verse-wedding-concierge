import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileStickyCTA from "@/components/mobile-sticky-cta";
import { Navigation } from "@/components/navigation";
import Script from "next/script";

export const metadata = {
  title: "How to Buy Indian Wedding Outfits from India (USA Delivery) | CeremonyVerse",
  description: "Skip the $3,000 India flight. We source bridal lehengas, sherwanis & family outfits directly from India — live video approval, custom stitching, delivery to all 50 states. Free consult.",
  keywords: [
    "how to buy lehenga from India online without getting scammed",
    "Indian wedding outfit checklist for NRI families USA",
    "how much does a bridal lehenga cost in India including shipping to USA",
    "how to take lehenga measurements at home for Indian wedding",
    "NRI wedding shopping from India timeline when to order",
    "buy sherwani from India USA",
    "bridesmaid lehengas from India",
    "ship Indian wedding outfits to USA customs duties",
    "Indian wedding shopping USA",
    "NRI Indian wedding shopping",
    "CeremonyVerse",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "https://www.ceremonyverse.com",
  },
  openGraph: {
    title: "How to Buy Indian Wedding Outfits from India (USA Delivery) | CeremonyVerse",
    description: "Skip the $3,000 India flight. We source bridal lehengas, sherwanis & family outfits directly from India — live video approval, custom stitching, delivery to all 50 states. Free consult.",
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
    title: "How to Buy Indian Wedding Outfits from India (USA Delivery) | CeremonyVerse",
    description: "Skip the $3,000 India flight. Live video approval, custom stitching, delivery to all 50 states.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
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
        "url": "https://www.ceremonyverse.com",
        "image": "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        "telephone": "+12153419990",
        "email": "bhamini@ceremonyverse.com",
        "areaServed": "US",
        "priceRange": "$$",
        "sameAs": [
          "https://www.instagram.com/ceremonyverse",
          "https://www.pinterest.com/ceremonyverse",
          "https://www.tiktok.com/@ceremonyverse",
          "https://wa.me/12153419990",
          "https://www.trustpilot.com/review/ceremonyverse.com"
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
            "name": "What does CeremonyVerse do?",
            "acceptedAnswer": { "@type": "Answer", "text": "CeremonyVerse is a US-based Indian wedding shopping concierge. We source everything for your Indian wedding directly from India — bridal lehengas, sherwanis, bridesmaid outfits, groomsmen attire, family outfits, jewelry, ceremonial puja items, return gifts, welcome bags, sweets, and more. We offer live video shopping, quality checks, and delivery to your US door." }
          },
          {
            "@type": "Question",
            "name": "How does CeremonyVerse source Indian wedding items from India to the USA?",
            "acceptedAnswer": { "@type": "Answer", "text": "We connect you with our vetted network of artisan workshops across India via live video shopping sessions. You see items in real time, approve fabrics and quality, and we handle measurements, production, inspection, and international shipping to your US address." }
          },
          {
            "@type": "Question",
            "name": "Can I buy a bridal lehenga from India and have it delivered to the USA?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. CeremonyVerse specializes in sourcing custom bridal lehengas directly from India for NRI brides in the USA. We offer live video shopping so you can see the actual fabric and embroidery before purchasing, and we handle all shipping and customs to deliver to your US door." }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to source Indian wedding outfits from India?",
            "acceptedAnswer": { "@type": "Answer", "text": "CeremonyVerse services start at $149 for a Style Guide & Vendor List, $599 for Guided Sourcing with live video sessions, and $1,499 for Full Bridal Concierge. A free 30-minute consultation is always available. Most clients save 30-50% compared to US Indian boutiques." }
          },
          {
            "@type": "Question",
            "name": "Do you only source outfits or other Indian wedding items too?",
            "acceptedAnswer": { "@type": "Answer", "text": "We source everything for Indian weddings — bridal lehengas, sherwanis, bridesmaid outfits, groomsmen attire, family outfits, jewelry, ceremonial puja items, return gifts, welcome bags, sweets, and even pet outfits. We are a complete Indian wedding shopping concierge." }
          },
          {
            "@type": "Question",
            "name": "How far in advance should I contact CeremonyVerse?",
            "acceptedAnswer": { "@type": "Answer", "text": "We recommend starting 6-12 months before your wedding date. Top artisan workshops book quickly and custom outfits require production time. If your wedding is sooner, contact us and we will tell you honestly what is achievable." }
          },
          {
            "@type": "Question",
            "name": "Do you serve intercultural couples who are new to Indian weddings?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. CeremonyVerse has extensive experience with intercultural weddings. We guide non-South Asian partners through every step — explaining ceremonies, dress codes, and what each family member typically wears. We have helped many couples where one partner had never worn Indian clothes before." }
          },
          {
            "@type": "Question",
            "name": "Do you ship Indian wedding items to all US states?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, CeremonyVerse serves families across all US states. We have worked with clients in New Jersey, New York, Pennsylvania, Illinois, Georgia, Texas, California, and many more. All items are quality-checked in India before being shipped to your US address." }
          }
        ]
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ceremonyverse.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ceremonyverse.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Book Consultation", "item": "https://www.ceremonyverse.com/contact" }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
            gtag('config', 'G-8K8YLBERPM');
          `}
        </Script>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="CeremonyVerse" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="category" content="Indian Wedding Shopping, Bridal Concierge, Wedding Services" />
        <meta name="classification" content="Business" />
        <meta property="og:site_name" content="CeremonyVerse" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.ceremonyverse.com" />
        <meta property="og:image" content="https://www.ceremonyverse.com/images/hero-lehenga.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Red and gold bridal lehenga sourced from India for NRI brides in USA — CeremonyVerse Indian wedding shopping concierge" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ceremonyverse" />
        <meta name="twitter:title" content="How to Buy Indian Wedding Outfits from India (USA Delivery) | CeremonyVerse" />
        <meta name="twitter:description" content="Skip the $3,000 India flight. Live video approval, custom stitching, delivery to all 50 states." />
        <meta name="twitter:image" content="https://www.ceremonyverse.com/images/hero-lehenga.jpg" />
        <meta name="p:domain_verify" content="639b7c7ea9066797d34d3d8042e36bc0" />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {/* Urgency announcement bar — fixed at very top */}
        <div style={{ background: "#1f1f1f", color: "#a69260", textAlign: "center", padding: "10px 16px", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.04em", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
          * Top India vendors are booking fast for 2026–2027 weddings &nbsp;·&nbsp; Start sourcing 6–12 months out &nbsp;·&nbsp;
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20start%20sourcing%20for%20my%20wedding." target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" }}>Book a free consult →</a>
        </div>

        {/* Navigation — appears on ALL pages */}
        <Navigation />

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
