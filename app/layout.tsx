import "./globals.css";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileStickyCTA from "@/components/mobile-sticky-cta";
import { Navigation } from "@/components/navigation";
import Script from "next/script";
import { JsonLd, buildLocalBusinessSchema, buildGlobalFaqSchema } from "@/lib/seo";

// Build-time font loading via next/font — eliminates the render-blocking
// Google Fonts @import that was in globals.css. Fonts are downloaded at
// build time and self-hosted by Vercel; no runtime network roundtrip.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Root metadata: title/description are defaults; individual pages override.
// NOTE: We intentionally do NOT set `alternates.canonical` here. Setting it
// at the layout level caused every page on the site to canonical to the
// homepage, collapsing 40+ keyword-targeted pages into one URL. Each page
// now sets its own canonical via `buildMetadata()` from @/lib/seo.
export const metadata = {
  metadataBase: new URL("https://www.ceremonyverse.com"),
  title: {
    default:
      "Indian Wedding Shopping Concierge for NRI Brides | CeremonyVerse",
    template: "%s | CeremonyVerse",
  },
  description:
    "Skip the boutique markups. Source custom bridal lehengas, sherwanis, and return gifts directly from India to the USA. Live video shopping & quality checks.",
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
    "custom bridal lehenga India to USA",
    "return gifts from India to USA",
    "live video shopping India wedding",
    "CeremonyVerse",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title:
      "Indian Wedding Shopping Concierge for NRI Brides | CeremonyVerse",
    description:
      "Skip the boutique markups. Source custom bridal lehengas, sherwanis, and return gifts directly from India to the USA. Live video shopping & quality checks.",
    type: "website",
    siteName: "CeremonyVerse",
    locale: "en_US",
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.webp",
        width: 1200,
        height: 630,
        alt: "Real NRI bride wearing a custom red bridal lehenga sourced directly from India to the USA by CeremonyVerse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ceremonyverse",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const globalFaqSchema = buildGlobalFaqSchema();

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* Google Analytics — deferred via strategy=afterInteractive so it
            never blocks first paint. The two preconnect <link> tags below
            speed up the GA fetch when it does happen, but they are
            non-blocking hints only. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

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

        {/* Global meta tags. Page-specific OG/Twitter tags are emitted via
            Next.js metadata API from each page's `metadata` export. */}
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
        <meta property="og:image" content="https://www.ceremonyverse.com/images/hero-lehenga.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Real NRI bride wearing a custom red bridal lehenga sourced directly from India to the USA by CeremonyVerse" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ceremonyverse" />
        <meta name="twitter:image" content="https://www.ceremonyverse.com/images/hero-lehenga.webp" />
        <meta name="p:domain_verify" content="639b7c7ea9066797d34d3d8042e36bc0" />

        {/*
          Structured data — rendered as plain <script type="application/ld+json">
          tags so they appear in the initial HTML response (visible to Google's
          primary crawler and to AI engines that read raw HTML, not just the
          post-hydration DOM). Previously these used <Script> from next/script
          which only injected them client-side after hydration.
        */}
        <JsonLd id="schema-localbusiness" data={localBusinessSchema} />
        <JsonLd id="schema-faq-global" data={globalFaqSchema} />
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

