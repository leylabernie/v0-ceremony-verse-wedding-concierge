import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileStickyCTA from "@/components/mobile-sticky-cta";
import Script from "next/script";

export const metadata = {
  title: "Indian Wedding Shopping from India | Outfits, Jewelry, Gifts & More Delivered to USA | CeremonyVerse",
  description: "CeremonyVerse is a US-based Indian wedding shopping concierge. We source everything for your Indian wedding directly from India — bridal lehengas, sherwanis, bridesmaid outfits, groomsmen attire, jewelry, ceremonial items, wedding gifts, welcome bags, and more. Live video shopping, quality checks, and delivery to your US door. Serving NRI and South Asian families across the United States.",
  keywords: "Indian wedding shopping USA, Indian wedding concierge USA, source Indian wedding items from India, Indian wedding outfits delivered to USA, bridal lehenga from India USA, buy bridal lehenga online USA, NRI bridal lehenga, custom bridal lehenga from India, bridal lehenga delivered to USA, buy sherwani from India USA, custom sherwani from India, NRI groom sherwani, sherwani delivered to USA, Indian groom outfit USA, bridesmaid outfits from India, bridesmaid lehenga from India USA, coordinate bridesmaid outfits Indian wedding, groomsmen kurta from India, Indian family outfits wedding USA, Indian wedding jewelry USA, kundan jewelry from India USA, Indian wedding gifts USA, potli bags wedding gifts, Indian wedding welcome bags USA, Indian ceremonial items USA, wedding puja items from India, Indian wedding sweets USA, NRI wedding shopping, NRI bride USA, South Asian wedding USA, live video shopping India, Indian wedding outfit quality check, affordable bridal lehenga India USA, intercultural Indian wedding USA, non-Indian groom Indian wedding outfit, how to buy lehenga from India, where to buy Indian wedding outfits in USA, best Indian wedding concierge USA, Indian wedding personal shopper USA, CeremonyVerse",
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
            "acceptedAnswer": { "@type": "Answer", "text": "CeremonyVerse is a US-based Indian wedding shopping concierge. We source everything for your Indian wedding directly from India — bridal lehengas, sherwanis, bridesmaid outfits, groomsmen attire, family outfits, jewelry, ceremonial items, wedding gifts, welcome bags, sweets, and more. We offer live video shopping, quality checks, and delivery to your US door." }
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ceremonyverse" />
        <meta name="twitter:title" content="Everything for Your Indian Wedding, Sourced from India | CeremonyVerse" />
        <meta name="twitter:description" content="Bridal lehengas, sherwanis, jewelry, gifts, welcome bags & more — sourced from India, delivered to your US door. America's Indian wedding shopping concierge." />
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
