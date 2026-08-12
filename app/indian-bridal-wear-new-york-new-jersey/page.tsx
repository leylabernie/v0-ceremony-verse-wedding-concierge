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
  title: "Indian Bridal Wear & Lehenga Shopping — NY & NJ",
  description:
    "Compare NY and NJ bridal shopping with India sourcing for custom lehengas, including live review, measurement coordination, and itemized delivery costs.",
  keywords:
    "indian bridal wear new jersey, indian wedding shops edison nj, lehenga shops in nyc, indian bridal boutique new jersey, custom bridal lehenga NY NJ, sherwani shops new york",
});

const serviceSchema = buildServiceSchema({
  name: "Indian Bridal Wear Sourcing for NY & NJ Metro — Tri-State Concierge",
  description:
    "CeremonyVerse coordinates custom bridal lehenga sourcing from India for New York and New Jersey couples, with eligible live review, measurement support, written approvals, and delivery coordination.",
  url: "/indian-bridal-wear-new-york-new-jersey/",
  category: "Indian Bridal Wear Sourcing — New York & New Jersey Metro",
  areaServed: "NY-NJ-PA Metro Area, United States",
  offers: [
    {
      name: "Guided Sourcing",
      price: 799,
      description:
        "Live video shopping sessions with India vendors for your bridal lehenga or sherwani.",
    },
    {
      name: "Full Bridal Concierge",
      price: 2499,
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

const faqSchema = buildFaqSchema([
  {
    question:
      "How do I compare an India-sourced bridal lehenga with a boutique quote in Edison or Jackson Heights?",
    answer:
      "Compare the exact garment, handwork, customization, service scope, shipping, customs estimate, alteration allowance, timeline, and remedy terms. CeremonyVerse provides an itemized landed estimate without promising a universal savings percentage.",
  },
  {
    question:
      "Can you coordinate bridal-wear delivery to New York or New Jersey?",
    answer:
      "Yes. CeremonyVerse coordinates shipment documents and tracking for delivery to New York or New Jersey. The carrier and U.S. Customs control final clearance timing and any duty assessment.",
  },
  {
    question:
      "How do I find a lehenga shop in NYC if I want to see options in person?",
    answer:
      "Jackson Heights in Queens and Oak Tree Road in Iselin, NJ have Indian boutiques where you can shop in person. CeremonyVerse is a remote India-sourcing option with eligible live review, written approvals, the payment schedule stated in the signed proposal, applicable fit support, and delivery coordination subject to the selected tier, vendor, carrier, and address.",
  },
]);

export default function IndianBridalWearNYNJPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
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
            Compare remote India sourcing with Edison and Jackson Heights options.
            Review local bridal-shopping options alongside remote India
            sourcing for a custom lehenga, with eligible live video review,
            documented approvals, and delivery coordination across the Tri-State.
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
              href="https://wa.me/12153419990?text=Hello%20CeremonyVerse!%20I'm%20a%20NY%20or%20NJ%20bride%20looking%20for%20a%20bridal%20lehenga%20from%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              WhatsApp CeremonyVerse
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
            often leads families to boutiques in Edison, Iselin, or Jackson
            Heights. Those local stores offer the advantage of seeing garments
            in person, while remote India sourcing may provide additional custom
            options. The right choice depends on the complete written cost,
            timeline, alteration terms, and level of support.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#4d403a" }}
          >
            CeremonyVerse offers a remote alternative for Tri-State brides who
            want to compare custom lehenga options from India. Our bridal-focused
            process covers style references, live review when available,
            measurements, written approvals, any pre-shipping review included in
            the selected scope, and delivery coordination.
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
                Itemized Landed Estimate
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                Review the actual product, flat CeremonyVerse tier, shipping,
                customs estimate, alteration allowance, timeline, and terms.
                Compare that complete scope with written local boutique quotes.
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
                Broader Remote Search
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                Review curated options from CeremonyVerse&apos;s strongest stated
                working relationships in Surat and Delhi, with other vendors
                considered when the item, capacity, documentation, and terms can
                be responsibly reviewed.
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
                Tri-State Delivery Coordination
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                We coordinate packing requirements, shipment documents, carrier
                handoff, and tracking for delivery to New York or New Jersey.
                Carrier and customs decisions remain outside CeremonyVerse&apos;s
                control and are explained before purchase.
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
                <li>• You can see and try available garments in person</li>
                <li>• Selection, pricing, alterations, and delivery terms vary by store</li>
                <li>• Custom-order timelines should be confirmed in writing</li>
                <li>• Compare the complete quote, not only the garment price</li>
                <li>• Ask how group measurements and approvals will be managed</li>
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
                <li>• Itemized product, service, shipping, and customs estimates</li>
                <li>• Strongest stated working relationships in Surat and Delhi</li>
                <li>• Eligible live review plus documented approvals</li>
                <li>• Choose from transparent flat-fee sourcing tiers</li>
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
            Request a consultation with CeremonyVerse. We&apos;ll
            review your wedding timeline, budget, and design references — and
            explain the available India-sourcing options, costs, and trade-offs
            before you decide whether remote shopping is right for you.
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
              href="https://wa.me/12153419990?text=Hello%20CeremonyVerse!%20I'm%20a%20NY/NJ%20bride%20looking%20to%20source%20a%20bridal%20lehenga%20from%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              WhatsApp CeremonyVerse
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
