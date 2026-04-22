import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileStickyCTA from "@/components/mobile-sticky-cta";
import Script from "next/script";

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
    canonical: "https://ceremonyverse.com",
  },
  openGraph: {
    title: "Authentic Indian Wedding Shopping for NRI Families | CeremonyVerse",
    description: "Bridal lehengas, sherwanis, jewelry, gifts & welcome bags — sourced directly from India, approved live on video before shipping, delivered to your door in the USA, Canada, UK, Australia & NZ. The trusted Indian wedding shopping concierge for NRI families worldwide.",
    type: "website",
    url: "https://ceremonyverse.com",
    images: [
      {
        url: "https://ceremonyverse.com/images/hero-lehenga.jpg",
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
    images: ["https://ceremonyverse.com/images/hero-lehenga.jpg"],
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
        "description": "CeremonyVerse is an Indian wedding shopping concierge serving NRI and South Asian families in the USA, Canada, UK, Australia, and New Zealand. We source everything for your Indian wedding from India — outfits, jewelry, ceremonial items, gifts, welcome bags, and more — with live video shopping, quality checks, and international delivery.",
        "url": "https://ceremonyverse.com",
        "image": "https://ceremonyverse.com/images/hero-lehenga.jpg",
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does CeremonyVerse do?",
            "acceptedAnswer": { "@type": "Answer", "text": "CeremonyVerse is a US-based Indian wedding shopping concierge. We source everything for your Indian wedding directly from India — bridal lehengas, sherwanis, bridesmaid outfits, groomsmen attire, family outfits, jewelry, ceremonial items, wedding gifts, welcome bags, sweets, and more. We offer live video shopping, quality checks, and international delivery." }
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
            "name": "Do you ship Indian wedding items internationally?",
            "acceptedAnswer": { "@type": "Answer", "text": "CeremonyVerse serves families in the USA, Canada, UK, Australia, and New Zealand. We have worked with clients across North America, the UK, and the Asia-Pacific region. All items are quality-checked in India before being shipped to your international address." }
          }
        ]
      }
    ]
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ceremonyverse.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ceremonyverse.com/#services" },
      { "@type": "ListItem", "position": 3, "name": "Book Consultation", "item": "https://ceremonyverse.com/#contact" }
    ]
  };

  return (
    <html lang="en">
      <head>
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
        <meta property="og:url" content="https://ceremonyverse.com" />
        <meta property="og:image" content="https://ceremonyverse.com/images/hero-lehenga.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Red and gold bridal lehenga sourced from India for NRI brides in USA — CeremonyVerse Indian wedding shopping concierge" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ceremonyverse" />
        <meta name="twitter:title" content="Authentic Indian Wedding Shopping for NRI Families | CeremonyVerse" />
        <meta name="twitter:description" content="Bridal lehengas, sherwanis, jewelry, gifts & welcome bags — sourced from India, approved live on video, delivered to your door worldwide." />
        <meta name="twitter:image" content="https://ceremonyverse.com/images/hero-lehenga.jpg" />
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
        <Script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
