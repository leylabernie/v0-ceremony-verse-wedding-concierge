import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import {
  buildMetadata,
  buildServiceSchema,
  buildBreadcrumb,
  buildFaqSchema,
  JsonLd,
} from "@/lib/seo";

/**
 * "Money" Landing Page — targets brides actively looking to spend thousands
 * of dollars on a bridal lehenga sourced from India but terrified of the
 * logistics. Content brief supplied for this page; do not paraphrase the
 * structural copy (H1, section H2s, challenge titles, etc.).
 */
export const metadata = buildMetadata({
  path: "/how-to-buy-bridal-lehenga-from-india-to-usa/",
  title:
    "How to Buy a Bridal Lehenga from India to USA: The Ultimate NRI Guide",
  description:
    "A practical NRI guide to buying a bridal lehenga from India to the USA, reviewing vendors, documenting measurements, and planning for shipping and customs.",
  keywords:
    "how to buy bridal lehenga from India to USA, NRI bridal lehenga guide, source bridal lehenga India USA, Indian bridal wear customs duties, bridal lehenga shipping from India, NRI wedding concierge",
});

const serviceSchema = buildServiceSchema({
  name: "Bridal Lehenga Sourcing Concierge — India to USA",
  description:
    "Bridal lehenga sourcing guidance for NRI families, with documented vendor options, measurements, written approvals, eligible live review, and U.S. delivery coordination.",
  url: "/how-to-buy-bridal-lehenga-from-india-to-usa/",
  category: "Indian Wedding Sourcing — Bridal Lehenga India to USA",
  offers: [
    {
      name: "Guided Sourcing",
      price: 799,
      description:
        "Live shopping and order coordination for selected bridal outfits, subject to item and vendor availability.",
    },
    {
      name: "Full Bridal Concierge",
      price: 2499,
      description:
        "One organized sourcing process for the bride, groom, and wedding party of up to eight people.",
    },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  {
    name: "How to Buy a Bridal Lehenga from India to USA",
    url: "/how-to-buy-bridal-lehenga-from-india-to-usa/",
  },
]);

const faqSchema = buildFaqSchema([
  {
    question:
      "How do I compare an India-sourced bridal lehenga with a US boutique quote?",
    answer:
      "There is no universal savings percentage. Compare the approved vendor price, CeremonyVerse service tier, shipping, customs estimate, alteration allowance, timeline, and return terms with a written US boutique quote.",
  },
  {
    question:
      "How do I avoid sizing errors when buying a bridal lehenga from India remotely?",
    answer:
      "Use the measurement chart required by the selected vendor and have a qualified local tailor help when appropriate. CeremonyVerse can coordinate a documented measurement review within eligible tiers, but remote made-to-measure clothing can still require local alteration.",
  },
  {
    question:
      "How do I verify the quality of a bridal lehenga before it leaves India?",
    answer:
      "Ask for current item evidence and record the approved fabric, color, handwork, measurements, and finish in writing. Eligible tiers may include live review or another pre-shipping check when the vendor and item allow it, but no remote process proves every material claim or eliminates handmade-item and fit risk.",
  },
  {
    question:
      "Will my bridal lehenga get stuck in US customs or face surprise import taxes?",
    answer:
      "Commercial textile shipments may be assessed US duties based on HTS classification, fiber content, construction, declared value, and current tariff rules. Use accurate shipment details, obtain a route- and service-specific carrier estimate, preserve a meaningful fitting and alteration buffer, and confirm who tracks customs requests. Any landed-cost figure is an estimate; the government and carrier assessments control.",
  },
  {
    question: "Why use a personal wedding concierge instead of buying directly online?",
    answer:
      "A concierge can organize vendor options, item references, measurements, approvals, outside costs, shipping terms, and next actions in one record. CeremonyVerse states its scope and the independent provider responsibilities in writing before paid work begins; no universal savings, quality, fit, or delivery outcome is promised.",
  },
]);

export default function HowToBuyBridalLehengaIndiaToUsaPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

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
            NRI Bridal Lehenga Sourcing Guide · India → USA
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            How to Buy a Bridal Lehenga from India to the USA: The Ultimate NRI
            Guide
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#e8dfd2" }}
          >
            Learn how to compare and source a custom bridal lehenga,
            sherwani, and return gifts from India using documented vendor
            options, measurements, written approvals, and delivery planning.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Schedule Free Consultation
            </a>
            <a
              href="#challenges"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              See the 3 Biggest Risks (and Fixes)
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "#4d403a" }}
          >
            Planning a South Asian wedding in the United States often means
            facing limited selections and retail prices that include importing,
            inventory, and storefront overhead at local bridal
            boutiques. India sourcing may expand the available options, but it
            also introduces vendor, handmade-item, sizing, customs, and shipping
            risks that must be reviewed before purchase.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#4d403a" }}
          >
            This guide explains how to compare bridal wear, bridesmaid outfits,
            and wedding favors from India using complete written information.
          </p>
        </div>
      </section>

      {/* THE TRUE COST */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-3 text-center"
            style={{ color: "var(--cv-accent)" }}
          >
            The Real Economics
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6 text-center"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            The True Cost of Sourcing Indian Bridal Wear Abroad
          </h2>
          <p
            className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            When you buy an Indian bridal outfit in cities like New York,
            Chicago, or San Francisco, you are paying for the store&apos;s
            physical rent, import markups, and inventory overhead. By sourcing
            from vendors in retail hubs such as Delhi,
            Mumbai, or Hyderabad, compare every landed-cost component,
            including:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Custom Bridal Lehengas & Sarees",
                body: "Compare available fabric, handwork, customization, vendor lead time, shipping, and duty before approving a made-to-measure order.",
              },
              {
                title: "Handcrafted Groom Sherwanis & Indo-Westerns",
                body: "Review sherwanis, bandhgalas, and Indo-Western suits with documented fabric, embroidery, color, measurements, and vendor terms.",
              },
              {
                title: "Coordinated Bridesmaid & Groomsmen Outfits",
                body: "Coordinate bridesmaid lehengas and groomsmen sherwanis in one documented production brief. Handmade color and dye-lot variation should still be expected.",
              },
              {
                title: "Bulk Wedding Return Gifts and Favors",
                body: "Compare available gifts using exact materials, dimensions, quantity, food or labeling requirements, production terms, shipping, customs, and remedy information.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#e6dfd5] rounded-2xl p-8"
              >
                <h3
                  className="font-semibold text-xl mb-3"
                  style={{ color: "var(--cv-accent)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#4d403a" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 CHALLENGES */}
      <section
        id="challenges"
        className="py-20 px-6"
        style={{ background: "#faf8f5" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-3 text-center"
            style={{ color: "var(--cv-accent)" }}
          >
            What Can Go Wrong — And How We Fix It
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12 text-center"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            3 Major Challenges NRIs Face (And How to Fix Them)
          </h2>

          {/* Challenge 1 */}
          <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex items-center gap-4 mb-5">
              <span
                className="flex items-center justify-center w-12 h-12 rounded-full text-xl font-semibold flex-shrink-0"
                style={{ background: "#7a6841", color: "#fff" }}
              >
                1
              </span>
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{
                  color: "#1f1f1f",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Remote Measurement and Custom Fitting Errors
              </h3>
            </div>
            <div className="md:pl-16">
              <p className="mb-4">
                <span
                  className="font-semibold"
                  style={{ color: "#8a4a3a" }}
                >
                  The Risk:{" "}
                </span>
                <span style={{ color: "#4d403a" }}>
                  Miscommunicating a single inch on a blouse or sherwani jacket
                  can ruin the outfit. Standard bust-waist-hip measurements are
                  not enough — use the selected tailor&apos;s complete measurement chart and document every requested
                  point, which may include high waist, blouse back length, shoulder
                  width, armhole depth, and skirt length.
                </span>
              </p>
              <p>
                <span
                  className="font-semibold"
                  style={{ color: "var(--cv-accent)" }}
                >
                  The Fix:{" "}
                </span>
                <span style={{ color: "#4d403a" }}>
                  Use the measurement chart required by the selected vendor and
                  have a qualified local tailor help when appropriate. A
                  documented review can reduce communication errors, but remote
                  made-to-measure clothing can still require local alteration.
                </span>
              </p>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex items-center gap-4 mb-5">
              <span
                className="flex items-center justify-center w-12 h-12 rounded-full text-xl font-semibold flex-shrink-0"
                style={{ background: "#7a6841", color: "#fff" }}
              >
                2
              </span>
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{
                  color: "#1f1f1f",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Quality Discrepancies and Fabric Scams
              </h3>
            </div>
            <div className="md:pl-16">
              <p className="mb-4">
                <span
                  className="font-semibold"
                  style={{ color: "#8a4a3a" }}
                >
                  The Risk:{" "}
                </span>
                <span style={{ color: "#4d403a" }}>
                  A catalog or social image may not show the delivered item&apos;s
                  fiber, handwork, weight, construction, or screen-color
                  variation. Cross-border returns and remedies can also be
                  limited, costly, or subject to short deadlines.
                </span>
              </p>
              <p>
                <span
                  className="font-semibold"
                  style={{ color: "var(--cv-accent)" }}
                >
                  The Fix:{" "}
                </span>
                <span style={{ color: "#4d403a" }}>
                  Ask which current photos, video, measurements, and packing
                  evidence the vendor can provide before shipping. Compare the
                  visible details with the written approval record, and confirm
                  payment milestones, dispute options, and available remedies
                  before paying. Video cannot prove fabric composition, exact
                  weight, screen color, workmanship, or fit, and no escrow
                  arrangement should be assumed unless the signed payment terms
                  expressly provide one.
                </span>
              </p>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-5">
              <span
                className="flex items-center justify-center w-12 h-12 rounded-full text-xl font-semibold flex-shrink-0"
                style={{ background: "#7a6841", color: "#fff" }}
              >
                3
              </span>
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{
                  color: "#1f1f1f",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                US Customs Duties and International Shipping Delays
              </h3>
            </div>
            <div className="md:pl-16">
              <p className="mb-4">
                <span
                  className="font-semibold"
                  style={{ color: "#8a4a3a" }}
                >
                  The Risk:{" "}
                </span>
                <span style={{ color: "#4d403a" }}>
                  Outfits getting stuck in US customs or facing surprise import
                  taxes right before the wedding week. Commercial textile duties
                  vary by HTS classification, fiber content, construction,
                  declared value, and current tariff rules.
                </span>
              </p>
              <p>
                <span
                  className="font-semibold"
                  style={{ color: "var(--cv-accent)" }}
                >
                  The Fix:{" "}
                </span>
                <span style={{ color: "#4d403a" }}>
                  Use accurate fiber, construction, origin, value, and shipment
                  details. Obtain a shipment-specific carrier estimate and leave
                  enough time for production, carrier movement, customs, a local
                  fitting, alterations, and a backup. Ask for shipping, insurance,
                  estimated import charges, and carrier fees to be separated in
                  writing; the final government and carrier assessments control.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE A CONCIERGE */}
      <section className="py-20 px-6" style={{ background: "#2f2f2f", color: "#f8f6f2" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-3 text-center"
            style={{ color: "#7a6841" }}
          >
            The CeremonyVerse Difference
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6 text-center"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "#f8f6f2",
            }}
          >
            Why Choose a Personal Wedding Concierge?
          </h2>
          <p
            className="text-center text-base md:text-lg leading-relaxed mb-14 max-w-3xl mx-auto"
            style={{ color: "#e8dfd2" }}
          >
            If you want added support while shopping directly in India without
            the stress of managing time zones, language barriers, and shipping
            logistics, a dedicated concierge service like CeremonyVerse bridges
            the gap. The selected CeremonyVerse tier may provide:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="rounded-2xl p-8"
              style={{ background: "#3a3a3a", border: "1px solid #4a4a4a" }}
            >
              <h3
                className="font-semibold text-xl mb-3"
                style={{ color: "#7a6841" }}
              >
                Curation
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#e8dfd2" }}
              >
                Researching options around the approved budget and item brief.
                Our strongest stated working relationships are in Surat and
                Delhi; other vendors are considered when their selected items,
                evidence, capacity, and terms can be responsibly reviewed.
              </p>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ background: "#3a3a3a", border: "1px solid #4a4a4a" }}
            >
              <h3
                className="font-semibold text-xl mb-3"
                style={{ color: "#7a6841" }}
              >
                Transparency
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#e8dfd2" }}
              >
                A written breakdown of the represented product price,
                customization, CeremonyVerse service fee, shipping estimate,
                customs estimate, alteration allowance, and vendor terms before
                purchase.
              </p>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ background: "#3a3a3a", border: "1px solid #4a4a4a" }}
            >
              <h3
                className="font-semibold text-xl mb-3"
                style={{ color: "#7a6841" }}
              >
                Peace of Mind
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#e8dfd2" }}
              >
                Available pre-shipping review, carrier and tracking support, and
                the applicable alteration or remedy terms stated in the signed
                scope. Coverage depends on the selected item, vendor, and tier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Ready to source your bridal lehenga from India — without the
            stress?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "#4d403a" }}
          >
            Book a free 30-minute consultation with CeremonyVerse. We&apos;ll
            review your wedding timeline, budget, and design references — and
            tell you honestly what&apos;s achievable sourcing from India to your
            US door.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Schedule Free Consultation
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hello%20CeremonyVerse!%20I%20want%20to%20talk%20about%20sourcing%20my%20bridal%20lehenga%20from%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#1f1f1f" }}
            >
              WhatsApp CeremonyVerse
            </a>
          </div>

          {/* Related links */}
          <div className="mt-16 pt-10 border-t border-[#e6dfd5]">
            <p
              className="text-xs tracking-widest uppercase font-medium mb-4"
              style={{ color: "var(--cv-accent)" }}
            >
              Keep Reading
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="/buy-bridal-lehenga-from-india-usa/"
                className="text-[#1f1f1f] hover:text-[#7a6841] transition-colors"
              >
                Buy a Bridal Lehenga from India — Delivered to USA
              </Link>
              <span style={{ color: "#c4b8a8" }}>·</span>
              <Link
                href="/blog/how-much-does-bridal-lehenga-cost-india-2026/"
                className="text-[#1f1f1f] hover:text-[#7a6841] transition-colors"
              >
                How Much Does a Bridal Lehenga Cost in 2026?
              </Link>
              <span style={{ color: "#c4b8a8" }}>·</span>
              <Link
                href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/"
                className="text-[#1f1f1f] hover:text-[#7a6841] transition-colors"
              >
                US Customs Duties on Indian Wedding Outfits
              </Link>
              <span style={{ color: "#c4b8a8" }}>·</span>
              <Link
                href="/avoid-indian-wedding-shopping-scams/"
                className="text-[#1f1f1f] hover:text-[#7a6841] transition-colors"
              >
                Avoid Indian Wedding Shopping Scams
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
