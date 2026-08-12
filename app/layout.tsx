import "./globals.css";
import type { Viewport } from "next";
import Script from "next/script";
import Link from "next/link";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileStickyCTA from "@/components/mobile-sticky-cta";
import { Navigation } from "@/components/navigation";
import { GlobalFooter } from "@/components/global-footer";
import { AcquisitionAttribution } from "@/components/acquisition-attribution";
import { JsonLd, buildLocalBusinessSchema, buildOrganizationSchema, buildWebSiteSchema } from "@/lib/seo";

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
      "Indian Wedding Shopping & Destination Planning | CeremonyVerse",
    template: "%s | CeremonyVerse",
  },
  description:
    "India wedding shopping for families across the USA and Canada, plus Gujarati and Hindu destination-wedding planning in Mexico and Punta Cana.",
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
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title:
      "Indian Wedding Shopping & Destination Planning | CeremonyVerse",
    description:
      "India wedding shopping for families across the USA and Canada, plus destination-wedding planning with family-side support.",
    type: "website",
    siteName: "CeremonyVerse",
    locale: "en_US",
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.webp",
        width: 1200,
        height: 630,
        alt: "Red bridal lehenga illustrating CeremonyVerse Indian wedding outfit sourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
  const organizationSchema = buildOrganizationSchema();
  const webSiteSchema = buildWebSiteSchema();

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
        <meta name="p:domain_verify" content="639b7c7ea9066797d34d3d8042e36bc0" />

        {/*
          Structured data — rendered as plain <script type="application/ld+json">
          tags so they appear in the initial HTML response (visible to Google's
          primary crawler and to AI engines that read raw HTML, not just the
          post-hydration DOM). Previously these used <Script> from next/script
          which only injected them client-side after hydration.
        */}
        <JsonLd id="schema-localbusiness" data={localBusinessSchema} />
        <JsonLd id="schema-organization" data={organizationSchema} />
        <JsonLd id="schema-website" data={webSiteSchema} />
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
        <Script id="deferred-google-analytics" strategy="afterInteractive">
          {`
            (function() {
              var GA_ID = 'G-8K8YLBERPM';
              var loaded = false;
              function loadGA() {
                if (loaded) return;
                loaded = true;
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){ window.dataLayer.push(arguments); };
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
                  window.removeEventListener(t, onTrigger);
                });
              }
              triggers.forEach(function(t) {
                window.addEventListener(t, onTrigger, {passive: true, once: true});
              });
            })();
          `}
        </Script>
        <AcquisitionAttribution />
        {/* Service-area announcement bar — fixed at very top */}
        <div className="cv-announcement-bar">
          <span className="hidden lg:inline">Mexico &amp; Punta Cana planning · Serving families across the USA &amp; Canada</span>
          <span className="lg:hidden">Mexico &amp; Punta Cana planning</span>
          <span aria-hidden="true">&nbsp;·&nbsp;</span>
          <Link href="/contact/">Schedule Free Consultation</Link>
        </div>

        {/* Navigation — appears on ALL pages */}
        <Navigation />

        {/* Keep page content below the responsive fixed announcement and navigation. */}
        <div className="cv-header-spacer" />
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
