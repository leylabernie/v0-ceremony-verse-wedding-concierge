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
      "Gujarati & Hindu Destination Wedding Planning | CeremonyVerse",
    template: "%s | CeremonyVerse",
  },
  description:
    "Gujarati and Hindu destination-wedding planning across Mexico and Punta Cana, with family coordination, guest logistics, and optional India wedding sourcing for families across the USA and Canada.",
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
      "Gujarati & Hindu Destination Wedding Planning | CeremonyVerse",
    description:
      "Destination-wedding planning across Mexico and Punta Cana, with family-side coordination, guest logistics, and optional India sourcing.",
    type: "website",
    siteName: "CeremonyVerse",
    locale: "en_US",
    images: [
      {
        url: "https://www.ceremonyverse.com/images/proof/family-destination-baarat.webp",
        width: 1200,
        height: 630,
        alt: "Baraat celebration at a family destination wedding in Mexico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ceremonyverse.com/images/proof/family-destination-baarat.webp"],
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
        <meta name="category" content="Gujarati and Hindu Destination Wedding Planning, India Wedding Sourcing" />
        <meta name="classification" content="Business" />
        <meta name="p:domain_verify" content="639b7c7ea9066797d34d3d8042e36bc0" />
        <link rel="llms" href="/llms.txt" />

        {/*
          Structured data — rendered as plain <script type="application/ld+json">
          tags so they appear in the initial HTML response (visible to Google's
          primary crawler and to AI engines that read raw HTML, not just the
          post-hydration DOM).
        */}
        <JsonLd id="schema-localbusiness" data={localBusinessSchema} />
        <JsonLd id="schema-organization" data={organizationSchema} />
        <JsonLd id="schema-website" data={webSiteSchema} />
      </head>
      <body>
        <Script id="deferred-google-analytics" strategy="afterInteractive">
          {`
            (function() {
              var GA_ID = 'G-8K8YLBERPM';
              var loaded = false;

              // Initialize the queue before the visitor's first interaction so
              // the first CTA/form event is not lost while the external GA file
              // is still deferred for performance.
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
              window.gtag('js', new Date());
              window.gtag('config', GA_ID);

              function loadGA() {
                if (loaded) return;
                loaded = true;
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
          <Link href="/contact/?service=mexico&from=announcement-bar">Schedule Free Consultation</Link>
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
