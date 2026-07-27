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
 * logistics. Content brief supplied by founder; do not paraphrase the
 * structural copy (H1, section H2s, challenge titles, etc.).
 */
export const metadata = buildMetadata({
  path: "/how-to-buy-bridal-lehenga-from-india-to-usa/",
  title:
    "How to Buy a Bridal Lehenga from India to USA: The Ultimate NRI Guide",
  description:
    "The complete NRI guide to buying a bridal lehenga from India to the USA. Save 30–50% vs US boutiques, avoid sizing scams, and clear US customs without surprises.",
  keywords:
    "how to buy bridal lehenga from India to USA, NRI bridal lehenga guide, source bridal lehenga India USA, Indian bridal wear customs duties, bridal lehenga shipping from India, NRI wedding concierge",
});

const serviceSchema = buildServiceSchema({
  name: "Bridal Lehenga Sourcing Concierge — India to USA",
  description:
    "End-to-end concierge service for NRI brides sourcing custom bridal lehengas, sherwanis, bridesmaid outfits, and wedding return gifts directly from India to the USA. Includes live video shopping, master tailor measurement verification, HD quality inspection, and customs-cleared door-to-door delivery.",
  url: "/how-to-buy-bridal-lehenga-from-india-to-usa/",
  category: "Indian Wedding Sourcing — Bridal Lehenga India to USA",
  offers: [
    {
      name: "Style Guide & Vendor List",
      price: 149,
      description:
        "Curated vendor style guide for your bridal lehenga sourced from India.",
    },
    {
      name: "Guided Sourcing",
      price: 599,
      description:
        "Live video shopping sessions with India vendors and master tailors for your bridal lehenga.",
    },
    {
      name: "Full Bridal Concierge",
      price: 1499,
      description:
        "End-to-end bridal lehenga sourcing, quality checks, customs clearance, and delivery to your US door.",
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
      "How much can I save by buying a bridal lehenga from India instead of a US boutique?",
    answer:
      "NRI brides typically save 30% to 50% by sourcing directly from artisans and designers in retail hubs like Delhi, Mumbai, or Hyderabad. US boutiques add physical rent, import markups, and inventory overhead on top of the artisan price. A custom bridal lehenga that runs $2,500–$8,000+ at a US Indian boutique costs $800–$3,500 sourced directly from India including live video shopping, custom stitching, shipping, and US customs duties.",
  },
  {
    question:
      "How do I avoid sizing errors when buying a bridal lehenga from India remotely?",
    answer:
      "Always use a professional measurement chart with 15+ points — not just bust-waist-hip. If you work with a concierge service like CeremonyVerse, we hop on a live video call with a master tailor present to visually verify how you take each measurement. This single step eliminates the miscommunication of even a single inch that can ruin a blouse or sherwani jacket.",
  },
  {
    question:
      "How do I verify the quality of a bridal lehenga before it leaves India?",
    answer:
      "Require high-definition video inspection before the outfit leaves India. Do not release final payments until you have seen the fabric weight, stitching borders, and color accuracy in natural lighting. What looks like heavy zari embroidery on an Instagram photo can arrive as cheap plastic sequins. CeremonyVerse performs a rigorous physical quality check and sizing audit on every garment before it is securely boxed and shipped.",
  },
  {
    question:
      "Will my bridal lehenga get stuck in US customs or face surprise import taxes?",
    answer:
      "As of August 2025, the US de minimis exemption for shipped goods has been eliminated, so bridal lehengas shipped from India to your US address are subject to full commercial import duties of 12–27% of the declared value. The fix is to classify your shipments accurately under textile codes, factor in at least 14 days of buffer time for shipping, and ensure your logistics partner handles custom clearance tracking. CeremonyVerse itemizes these duties upfront so there are no surprises right before your wedding week.",
  },
  {
    question: "Why use a personal wedding concierge instead of buying directly online?",
    answer:
      "A dedicated concierge service like CeremonyVerse bridges the gap between the cost savings of shopping directly in India and the stress of managing time zones, language barriers, and shipping logistics on your own. We act as your boots on the ground in India — hand-selecting outfits from trusted weavers and designers based on your budget, providing itemized breakdowns of fabric costs, tailoring fees, and actual shipping rates with no hidden fees, and performing rigorous physical quality checks and sizing audits before secure boxing and shipping.",
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
            Source a custom bridal lehenga,
            sherwani, and return gifts directly from India — with live video
            shopping, master-tailor verified measurements, HD quality checks,
            and customs-cleared delivery to your US door.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book a Free Consultation
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
            facing limited selections and 200% markups at local bridal
            boutiques. Sourcing your dream wedding outfits directly from India
            is the smartest way to save money and get authentic designs, but
            navigating remote sizing, customs duties, and shipping logistics
            can be overwhelming.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#4d403a" }}
          >
            This comprehensive guide breaks down exactly how to buy your bridal
            wear, bridesmaid outfits, and wedding favors from India safely and
            affordably.
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
            directly from artisans and designers in retail hubs like Delhi,
            Mumbai, or Hyderabad, you can save 30% to 50% on premium ensembles,
            including:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Custom Bridal Lehengas & Sarees",
                body: "Hand-stitched to your exact measurements by master artisans in Surat, Kolkata, Jaipur, and Delhi — including zardozi, gota patti, resham, and Banarasi silk work. Real 2026 prices: $800–$3,500 vs $2,500–$8,000+ at US boutiques.",
              },
              {
                title: "Handcrafted Groom Sherwanis & Indo-Westerns",
                body: "Custom sherwanis, bandhgalas, and Indo-Western suits from Delhi and Hyderabad tailors — coordinated fabric, embroidery, and color matching with the bride. Save 40–50% vs US Indian menswear retailers.",
              },
              {
                title: "Coordinated Bridesmaid & Groomsmen Outfits",
                body: "Bulk-order 4 to 20+ coordinated bridesmaid lehengas and groomsmen sherwanis in a single production run. Identical dye lot, unified shipping, and 30–50% savings per outfit vs US retail.",
              },
              {
                title: "Bulk Wedding Return Gifts and Favors",
                body: "Sourced directly from Indian artisans — brass diyas, hand-painted potli bags, handloom stoles, and packaged sweets. Skip the import middlemen and pay actual artisan prices for 50 to 500 guest favors.",
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
                  not enough — Indian bridal tailoring requires 15+ precise
                  points including high waist, blouse back length, shoulder
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
                  Always use a professional measurement chart. If you work with
                  an Indian concierge service, ensure they hop on a live video
                  call with a master tailor present to visually verify how you
                  take your measurements. This eliminates the miscommunication
                  that turns a dream lehenga into a fitting disaster.
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
                  What looks like heavy zari embroidery on an Instagram photo
                  can arrive as cheap plastic sequins. Fabric weight, color
                  accuracy, and stitching quality are nearly impossible to
                  verify from a filtered photo alone — and once a garment
                  leaves India, returns are effectively impossible.
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
                  Require high-definition video inspection before the outfit
                  leaves India. Do not release final payments until you have
                  seen the fabric weight, stitching borders, and color accuracy
                  in natural lighting. A reputable concierge will hold payment
                  in escrow until you approve the final pre-shipping inspection
                  video.
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
                  taxes right before the wedding week. As of August 2025, the US
                  de minimis exemption for shipped goods has been eliminated —
                  every commercial textile shipment is now subject to full
                  import duties of 12–27% of declared value.
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
                  Classify your shipments accurately under textile codes.
                  Factor in at least 14 days of buffer time for shipping, and
                  ensure your logistics partner handles custom clearance
                  tracking. Demand an itemized duty estimate before production
                  begins — never accept a flat &quot;shipping included&quot;
                  quote that hides the real customs cost.
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
            If you want the cost savings of shopping directly in India without
            the stress of managing time zones, language barriers, and shipping
            logistics, a dedicated concierge service like CeremonyVerse bridges
            the gap. We act as your boots on the ground in India, providing:
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
                Hand-selecting outfits from trusted Indian weavers and
                designers based on your budget. We maintain a vetted network of
                50+ artisan workshops across Surat, Kolkata, Delhi, Jaipur, and
                Kanchipuram — so you see only pieces worth your time.
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
                Itemized breakdowns of fabric costs, tailoring fees, and actual
                shipping rates — no hidden fees. You see exactly
                what the artisan charges, what shipping costs, and what US
                customs duties will be — before you commit a single dollar.
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
                Rigorous physical quality checks and sizing audits before your
                items are securely boxed and shipped directly to your doorstep
                in the US. If anything does not match the approved sample, we
                send it back to the artisan — at our cost, not yours.
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
              Book Your Free Consultation
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20talk%20about%20sourcing%20my%20bridal%20lehenga%20from%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#1f1f1f" }}
            >
              WhatsApp Bhamini Directly
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
