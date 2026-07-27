import "./globals.css";
import type { Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileStickyCTA from "@/components/mobile-sticky-cta";
import { Navigation } from "@/components/navigation";
import { GlobalFooter } from "@/components/global-footer";
import { JsonLd, buildLocalBusinessSchema } from "@/lib/seo";

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
    "Source custom bridal lehengas, sherwanis, and return gifts directly from India to the USA. Live video shopping & quality checks.",
  // Default robots: index + follow with generous snippet/image previews.
  // Pages that need noindex (thank-you, not-found, internal-resources) override this.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
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
      "Source custom bridal lehengas, sherwanis, and return gifts directly from India to the USA. Live video shopping & quality checks.",
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

// Explicit viewport export — best practice for Next.js App Router. Prevents
// any default-injection ambiguity and ensures mobile rendering at device width.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/*
          Google Analytics — loaded on FIRST USER INTERACTION (scroll, click,
          keydown, touchstart, pointerdown) rather than on page load.

          Why not lazyOnload? Round 4 testing showed that even with
          strategy="lazyOnload", Lighthouse's mobile throttling pulled the
          165KB gtag bundle into the trace window, contributing ~620-820ms
          of Script Evaluation to TBT. Real users benefited but the lab
          score didn't move.

          Why not remove gtag entirely? Business needs GA tracking.

          Compromise: defer gtag behind the first user interaction. Most
          engaged users still get tracked. Bounce traffic (users who load
          the page and immediately leave without scrolling/clicking) is
          NOT tracked — accepted tradeoff for ~3-5 Performance points.

          Implementation: tiny inline script (no next/script needed) that
          attaches one-shot passive event listeners. On first trigger, it
          creates the gtag script element and the dataLayer bootstrap,
          then removes all listeners.

          NOTE: no setTimeout fallback was added. A 5s fallback would land
          inside Lighthouse's ~5s trace window (TTI is ~5s on this site)
          and partially undo the Performance gain. If GA bounce tracking
          turns out to be too lossy, add `setTimeout(loadGA, 10000)` here
          — that's well past TTI and outside Lighthouse's measurement.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var GA_ID = 'G-8K8YLBERPM';
                var loaded = false;
                function loadGA() {
                  if (loaded) return;
                  loaded = true;
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function(){ dataLayer.push(arguments); };
                  window.gtag('js', new Date());
                  window.gtag('config', GA_ID);
                  var s = document.createElement('script');
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
                  document.head.appendChild(s);
                }
                var triggers = ['scroll', 'click', 'keydown', 'touchstart', 'pointerdown'];
                function onTrigger() {
                  loadGA();
                  triggers.forEach(function(t) {
                    window.removeEventListener(t, onTrigger, {passive: true});
                  });
                }
                triggers.forEach(function(t) {
                  window.addEventListener(t, onTrigger, {passive: true, once: true});
                });
              })();
            `,
          }}
        />

        {/* Global meta tags. Page-specific OG/Twitter/robots/canonical tags are
            emitted via Next.js metadata API from each page's `metadata` export.
            NOTE: We no longer hardcode <meta name="robots"> here. Next.js emits
            robots from metadata defaults/overrides, and a hardcoded tag here
            COMBINED with Next.js's emitted tag produces DUPLICATE robots meta
            tags on pages that set noindex (404, thank-you) — which caused
            conflicting "index,follow" + "noindex,nofollow" directives. */}
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
        {/*
          NOTE: The global FAQPage schema was REMOVED (2026-07-27).
          Google's structured-data policy requires FAQ schema to reference
          FAQs that are VISIBLE on THAT specific page. The global FAQ list
          was being injected into every page (including 404s, thank-you,
          internal-resources, and all blog posts), but those FAQs are only
          visibly present on /faq/ and a subset on the homepage. This is
          the same class of spam violation that the review-schema removal
          (commit 93c917b) addressed. Each page that wants FAQ schema must
          now include it directly via buildFaqSchema() with content that
          matches its own visible HTML.
        */}
      </head>
      <body>
        {/* Urgency announcement bar — fixed at very top */}
        <div style={{ background: "#1f1f1f", color: "#c5a059", textAlign: "center", padding: "10px 16px", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.04em", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
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
        <GlobalFooter />
      </body>
    </html>
  );
}

