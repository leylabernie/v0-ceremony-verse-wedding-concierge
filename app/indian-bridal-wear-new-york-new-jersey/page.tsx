import Link from "next/link";
import {
  buildMetadata,
  buildServiceSchema,
  buildBreadcrumb,
  buildFaqSchema,
  JsonLd,
} from "@/lib/seo";

/**
 * Phase 3 — Local Metropolitan Hub Strategy.
 * Target hub: New York & New Jersey Metro (Tri-State).
 *
 * Targets brides searching for bridal wear specifically (not generic
 * wedding shopping — that's covered by /indian-wedding-shopping-new-york/
 * and /indian-wedding-shopping-new-jersey/).
 *
 * Target keywords:
 *   - indian bridal wear new jersey
 *   - indian wedding shops edison nj
 *   - lehenga shops in nyc
 */
export const metadata = buildMetadata({
  path: "/indian-bridal-wear-new-york-new-jersey/",
  title:
    "Indian Bridal Wear & Lehenga Sourcing — NY & NJ",
  description:
    "Source bridal lehengas, sherwanis, and return gifts from India to NY & NJ with live video shopping and Tri-State delivery.",
  keywords:
    "indian bridal wear new jersey, indian wedding shops edison nj, lehenga shops in nyc, indian bridal boutique new jersey, custom bridal lehenga NY NJ, sherwani shops new york",
});

const serviceSchema = buildServiceSchema({
  name: "Indian Bridal Wear Sourcing for NY & NJ Metro — Tri-State Concierge",
  description:
    "CeremonyVerse sources custom bridal lehengas, sherwanis, bridesmaid outfits, and bulk return gifts directly from India for Tri-State couples in New York and New Jersey. Includes live video shopping with India artisans, Masterji measurement calls, JFK/Newark customs clearance, and door-to-door delivery across the NY & NJ metro area.",
  url: "/indian-bridal-wear-new-york-new-jersey/",
  category: "Indian Bridal Wear Sourcing — New York & New Jersey Metro",
  areaServed: "NY-NJ-PA Metro Area, United States",
  offers: [
    {
      name: "Style Guide & Vendor List",
      price: 149,
      description: "Curated bridal wear style guide for your NY/NJ wedding.",
    },
    {
      name: "Guided Sourcing",
      price: 599,
      description:
        "Live video shopping sessions with India vendors for your bridal lehenga or sherwani.",
    },
    {
      name: "Full Bridal Concierge",
      price: 1499,
      description:
        "End-to-end bridal wear sourcing for the entire NY/NJ wedding party.",
    },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  {
    name: "Indian Bridal Wear NY & NJ",
    url: "/indian-bridal-wear-new-york-new-jersey/",
  },
]);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CeremonyVerse — NY & NJ Bridal Wear Concierge",
  description:
    "Indian bridal wear sourcing concierge serving New York and New Jersey metro couples. Custom bridal lehengas, sherwanis, and bulk return gifts shipped directly from India to your Tri-State door.",
  url: "https://www.ceremonyverse.com/indian-bridal-wear-new-york-new-jersey/",
  telephone: "+1-215-341-9990",
  email: "bhamini@ceremonyverse.com",
  areaServed: [
    { "@type": "State", name: "New York" },
    { "@type": "State", name: "New Jersey" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "NY-NJ Metro",
  },
  priceRange: "$$",
};

const faqSchema = buildFaqSchema([
  {
    question:
      "How much can I save on a bridal lehenga sourcing from India vs. buying at a boutique in Edison or Jackson Heights?",
    answer:
      "Tri-State couples typically save 30% to 50% by sourcing directly from India instead of buying at NY or NJ Indian boutiques. A custom bridal lehenga that costs $2,500-$8,000 at a US boutique costs $800-$3,500 sourced directly from India — even after live video shopping, custom stitching, insured air freight, JFK or Newark customs clearance, and door-to-door delivery to your NY or NJ address.",
  },
  {
    question:
      "Can you deliver bridal wear to my home in NYC, Long Island, Westchester, Edison, Jersey City, or Parsippany?",
    answer:
      "Yes. CeremonyVerse handles customs clearance at JFK or Newark and delivers securely to your doorstep anywhere in the Tri-State area — including Manhattan, Queens, Brooklyn, Long Island, Westchester, Edison, Iselin, Jersey City, Parsippany, Princeton, and across all of New York and New Jersey.",
  },
  {
    question:
      "How do I find a lehenga shop in NYC if I want to see options in person?",
    answer:
      "Jackson Heights in Queens and Oak Tree Road in Iselin, NJ have several Indian boutiques, but their in-stock selection is typically limited to 15-40 bridal lehengas per store at 200% markups. With CeremonyVerse, you skip the limited inventory and access 50+ artisan workshops across India via live video shopping — seeing 5-10x more options in a single session than you would walking into 5 NY boutiques in a day.",
  },
]);

export default function IndianBridalWearNYNJPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-localbusiness" data={localBusinessSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* HERO */}
      <section
        className="py-20 text-center px-6"
        style={{ background: "#2f2f2f", color: "#f8f6f2" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-4"
            style={{ color: "#7a6841" }}
          >
            Indian Bridal Wear Concierge · NY & NJ Metro
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            Indian Bridal Wear &amp; Lehenga Sourcing for NY &amp; NJ Couples
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#e8dfd2" }}
          >
            Skip the Jackson Heights crowds.
            Source custom bridal lehengas, sherwanis, and bulk return gifts
            directly from India&apos;s premier artisan hubs — with live video
            shopping and door-to-door delivery across the Tri-State.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Your CeremonyVerse Consultation Now
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I'm%20a%20NY%20or%20NJ%20bride%20looking%20for%20a%20bridal%20lehenga%20from%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              WhatsApp Bhamini
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE PLACEHOLDER */}
      {/*
        TODO: Drop an image at /public/images/indian-bridal-wear-boutique-nj.jpg
        Alt text: "Indian bride in NJ wearing a custom red bridal lehenga sourced directly from India by CeremonyVerse"
        Recommended size: 1600x900 (will be used as a full-width section image)
      */}

      {/* INTRO */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "#4d403a" }}
          >
            Planning a South Asian wedding in the New York or New Jersey area
            often leads families straight to the crowded boutiques of Edison,
            Iselin, or Jackson Heights. While these physical shops offer
            convenience, they also come with heavy price inflation to cover
            expensive East Coast storefront rents and steep importer markups.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#4d403a" }}
          >
            CeremonyVerse offers a seamless, modern alternative for Tri-State
            brides and grooms. Skip the limited store inventories and high
            boutique retail markups by sourcing your custom bridal lehengas,
            sherwanis, and bulk return gifts directly from India&apos;s
            premier artisan hubs.
          </p>
        </div>
      </section>

      {/* WHY NY & NJ COUPLES CHOOSE US */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-3 text-center"
            style={{ color: "var(--cv-accent)" }}
          >
            The Tri-State Advantage
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12 text-center"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Why NY &amp; NJ Couples Choose Our Digital Concierge
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-8"
              style={{ borderTop: "4px solid #7a6841" }}
            >
              <h3
                className="font-semibold text-xl mb-3"
                style={{ color: "var(--cv-accent)" }}
              >
                Direct-from-India Pricing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                Save up to 30% to 50% compared to local brick-and-mortar
                storefronts in New Jersey and New York City. A $3,500 bridal
                lehenga at an Edison boutique costs $1,400–$1,800 sourced
                directly from the artisan — even with shipping and customs
                included.
              </p>
            </div>
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-8"
              style={{ borderTop: "4px solid #7a6841" }}
            >
              <h3
                className="font-semibold text-xl mb-3"
                style={{ color: "var(--cv-accent)" }}
              >
                Infinite Design Selection
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                Don&apos;t limit yourself to what a local shop has on a rack.
                Access fresh collections directly from designers in Delhi,
                Mumbai, and Hyderabad via live video calls — seeing 50+ artisan
                workshops in a single session instead of walking 5 NY
                boutiques in a day.
              </p>
            </div>
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-8"
              style={{ borderTop: "4px solid #7a6841" }}
            >
              <h3
                className="font-semibold text-xl mb-3"
                style={{ color: "var(--cv-accent)" }}
              >
                Stress-Free Tri-State Delivery
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                We handle all international air freight, US Customs clearance
                at JFK or Newark, and deliver your perfectly fitted wedding
                outfits directly to your doorstep — whether you&apos;re in
                Manhattan, Edison, Jersey City, or anywhere across NY &amp; NJ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section
        className="py-20 px-6"
        style={{ background: "#faf8f5" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-center"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Local Boutique Reality vs. India Direct
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-6"
              style={{ borderLeft: "4px solid #8a4a3a" }}
            >
              <h3
                className="font-semibold mb-3"
                style={{ color: "#8a4a3a" }}
              >
                Tri-State Boutique Reality
              </h3>
              <ul
                className="space-y-2 text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                <li>• Edison &amp; Iselin: $2,500–$8,000+ for a bridal lehenga</li>
                <li>• Jackson Heights: limited in-stock selection (15–40 pieces)</li>
                <li>• Heavy sales pressure to buy what&apos;s on the rack today</li>
                <li>• 200%+ markups for commercial rent + importer margins</li>
                <li>• Few options for coordinating bridesmaids or family</li>
              </ul>
            </div>
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-6"
              style={{ borderLeft: "4px solid #7a6841" }}
            >
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--cv-accent)" }}
              >
                India Direct with CeremonyVerse
              </h3>
              <ul
                className="space-y-2 text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                <li>• $800–$3,500 for a custom bridal lehenga — real 2026 prices</li>
                <li>• 50+ artisan workshops across Delhi, Mumbai, Jaipur, Surat</li>
                <li>• Live video shopping — zero pressure, full transparency</li>
                <li>• Pay artisan price + transparent 15–20% sourcing fee</li>
                <li>• Coordinate bride + bridesmaids + family + gifts in one order</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#2f2f2f", color: "#f8f6f2" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "#f8f6f2",
            }}
          >
            Ready to source your bridal wear from India — without leaving NY or NJ?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "#e8dfd2" }}
          >
            Book a free 30-minute consultation with CeremonyVerse. We&apos;ll
            review your wedding timeline, budget, and design references — and
            show you how Tri-State couples are saving 30–50% by sourcing
            directly from India with live video shopping.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Your CeremonyVerse Consultation Now
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I'm%20a%20NY/NJ%20bride%20looking%20to%20source%20a%20bridal%20lehenga%20from%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              WhatsApp Bhamini Directly
            </a>
          </div>

          {/* Related links */}
          <div className="mt-16 pt-10" style={{ borderTop: "1px solid #4a4a4a" }}>
            <p
              className="text-xs tracking-widest uppercase font-medium mb-4"
              style={{ color: "#7a6841" }}
            >
              More for Tri-State Couples
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="/indian-wedding-shopping-new-york/"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                New York Indian Wedding Shopping
              </Link>
              <span style={{ color: "#6a6a6a" }}>·</span>
              <Link
                href="/indian-wedding-shopping-new-jersey/"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                New Jersey Indian Wedding Shopping
              </Link>
              <span style={{ color: "#6a6a6a" }}>·</span>
              <Link
                href="/blog/nri-bride-lehenga-sourcing-new-jersey-story/"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                NRI Bride Story: Lehenga Sourcing to NJ
              </Link>
              <span style={{ color: "#6a6a6a" }}>·</span>
              <Link
                href="/how-to-buy-bridal-lehenga-from-india-to-usa/"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                How to Buy a Bridal Lehenga from India
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
