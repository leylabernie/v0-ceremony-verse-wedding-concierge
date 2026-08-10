import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/buy-bridal-lehenga-from-india-usa/",
  title: "Buy Bridal Lehenga from India — Delivered to USA",
  description: "Source a bridal lehenga from India with live video review, guided measurements, pre-shipping checks, and US delivery coordination.",
  keywords: "buy bridal lehenga from India USA, custom bridal lehenga NRI, bridal lehenga delivered to USA, Indian bridal lehenga online USA, NRI bride lehenga, affordable bridal lehenga India",
});

const serviceSchema = buildServiceSchema({
  name: "Bridal Lehenga Sourcing & Concierge",
  description: "Custom bridal lehenga sourcing directly from India for NRI brides in the USA. Includes live video shopping, quality checks, custom stitching, and door-to-door delivery.",
  url: "/buy-bridal-lehenga-from-india-usa/",
  offers: [
    { name: "Style Guide & Vendor List", price: 249, description: "Curated vendor style guide for your bridal lehenga." },
    { name: "Guided Sourcing", price: 799, description: "Live video shopping sessions with India vendors for your bridal lehenga." },
    { name: "Full Bridal Concierge", price: 2499, description: "End-to-end bridal lehenga sourcing and coordination." },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Buy Bridal Lehenga from India", url: "/buy-bridal-lehenga-from-india-usa/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How much does a bridal lehenga from India cost delivered to the USA?",
    answer: "Cost depends on fabric, handwork, customization, vendor, shipping, and any assessed duty. CeremonyVerse separately itemizes the outfit, flat service tier, shipping, and customs estimate so you can compare the landed quote with US boutique options.",
  },
  {
    question: "How do I know the bridal lehenga I see online is the one I'll actually receive?",
    answer: "When the vendor and item allow live review, CeremonyVerse coordinates a video view of the available piece and documents the selected item, measurements, price, and written approval. Custom work and pre-shipping review follow the limits stated in the selected service scope; screen color and handmade details can vary.",
  },
  {
    question: "How long does it take to buy a bridal lehenga from India and have it delivered to the USA?",
    answer: "From the day you place your order to delivery at your US door, plan for 14–20 weeks for a custom bridal lehenga: 2–3 weeks for design consultation and fabric sourcing, 6–12 weeks for production (longer for heavy zardozi or gota patti work), 1 week for quality inspection, and 2–3 weeks for international shipping and US customs clearance. We recommend starting 6–12 months before your wedding date.",
  },
  {
    question: "Do I have to pay US customs duties on a bridal lehenga ordered from India?",
    answer: "A commercial textile shipment may be assessed US duties. The amount depends on the garment's HTS classification, fiber content, construction, declared value, and current tariff rules. CeremonyVerse provides an estimate in the quote, prepares shipping documentation, and itemizes the amount actually assessed without adding a markup.",
  },
  {
    question: "How do you handle sizing when I can't do in-person fittings?",
    answer: "We collect 15+ precise body measurements using a detailed guide that goes beyond basic bust-waist-hip — including high waist, blouse back length, shoulder width, armhole depth, and skirt length. Eligible made-to-measure garments include Fit Assurance with up to $150 toward local alterations after delivery, subject to service terms.",
  },
  {
    question: "Can I coordinate my bridal lehenga with bridesmaid and family outfits from India?",
    answer: "Yes, when the selected service tier and written scope include those people and items. Full Bridal Concierge covers the couple and wedding party up to eight people; larger groups require a separate private scope. CeremonyVerse can organize the shared palette, measurements, approvals, order details, and delivery responsibilities identified in that scope.",
  },
]);

export default function BridalLehengaPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

      {/* HERO */}
      <section className="py-20 text-center px-6" style={{ background: "#2f2f2f", color: "#f8f6f2" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#7a6841" }}>
            Bridal Lehenga Sourcing · India → USA
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Buy a Bridal Lehenga from India — Delivered to Your US Door
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#e8dfd2" }}>
            Research and source a bridal lehenga from India without making the shopping trip yourself.
            Eligible tiers include live video review, guided measurements, documented approvals,
            pre-shipping checks, and US delivery coordination.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/how-it-works/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* WHY BUY FROM INDIA */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            The Case for India
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Why buying your bridal lehenga from India beats US boutiques
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto leading-relaxed">
            US Indian boutiques build importing, rent, and inventory costs into their prices.
            India-direct sourcing gives you a broader range of
            designers, fabrics, and embroidery styles — at the actual artisan price — with the right
            partner to verify quality before you pay.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>US boutique reality</h3>
              <ul className="space-y-2 text-[#4d403a] text-sm leading-relaxed">
                <li>• Limited in-stock selection — typically 15–40 bridal lehengas per store</li>
                <li>• Prices start at $2,500 and run to $8,000+ for zardozi-heavy work</li>
                <li>• You pay for the boutique's rent, inventory, and import duties</li>
                <li>• Customization is rare and adds 50–100% to the price</li>
                <li>• Heavy sales pressure to buy what's in stock today</li>
                <li>• Few options for coordinating bridesmaids or family outfits</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "var(--cv-accent)" }}>India direct with CeremonyVerse</h3>
              <ul className="space-y-2 text-[#4d403a] text-sm leading-relaxed">
                <li>• Strongest stated working relationships in Surat and Delhi</li>
                <li>• Real 2026 prices: $800–$3,500 for a custom bridal lehenga</li>
                <li>• Choose a transparent flat-fee CeremonyVerse sourcing tier</li>
                <li>• Custom embroidery, color, dupatta drape, and silhouette included</li>
                <li>• Live video shopping — zero pressure, full transparency</li>
                <li>• Coordinate bride + 14 bridesmaids + family + jewelry in one order</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Bridal Lehenga Styles
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Every bridal lehenga style, sourced from its region of expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-2" style={{ color: "#1f1f1f" }}>Zardozi bridal lehengas</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Hand-embroidered metallic bullion thread work — the heritage of Lucknow and Delhi.
                Heavy, opulent, traditional. $1,500–$3,500 custom.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-2" style={{ color: "#1f1f1f" }}>Gota Patti lehengas</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Rajasthan's signature appliqué of gold and silver ribbon. Lighter than zardozi, ideal
                for daytime ceremonies. $900–$2,200 custom from Jaipur.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-2" style={{ color: "#1f1f1f" }}>Sequin & mirror work</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Modern shimmer for Sangeet and reception lehengas. Surat and Mumbai specialists.
                $700–$1,800 custom.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-2" style={{ color: "#1f1f1f" }}>Resham thread embroidery</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Fine silk thread work in floral and paisley motifs — elegant, lightweight, perfect for
                summer weddings. $800–$1,800 from Kolkata.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-2" style={{ color: "#1f1f1f" }}>Banarasi silk lehengas</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Woven gold and silver brocade from Varanasi weavers — heritage textile, heirloom
                quality. $1,200–$2,800 custom.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-2" style={{ color: "#1f1f1f" }}>Designer recreation</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Bring us Sabyasachi, Manish Malhotra, or Anita Dongre references and our designer and
                tailor in India will recreate the silhouette to your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            How we source your bridal lehenga from India — step by step
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: "var(--cv-accent)" }}>1</div>
              <div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: "#1f1f1f" }}>Free consultation (30 min, no commitment)</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  We review your wedding date, ceremonies, color preferences, budget, and inspiration
                  references. We recommend exactly which lehenga styles make sense for each event and
                  what level of sourcing support fits your needs.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: "var(--cv-accent)" }}>2</div>
              <div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: "#1f1f1f" }}>Style discovery &amp; fabric shortlist</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  Send us your Pinterest board, Instagram saves, or designer references. Our designer
                  in India prepares a personalized style guide with 3–5 fabric and embroidery options
                  matched to your vision and budget.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: "var(--cv-accent)" }}>3</div>
              <div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: "#1f1f1f" }}>Live video shopping from India</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  Join a live video session with our India team. See the actual fabrics draped, the
                  embroidery up close, the color in natural light. The exact piece you approve is
                  reserved with your name and order number — no bait-and-switch.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: "var(--cv-accent)" }}>4</div>
              <div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: "#1f1f1f" }}>Custom stitching to your measurements</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  We collect 15+ precise body measurements using our detailed guide. Every lehenga is
                  custom-stitched to your exact silhouette with strategic ease allowances for final
                  alterations. Production takes 6–12 weeks depending on embroidery complexity.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: "var(--cv-accent)" }}>5</div>
              <div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: "#1f1f1f" }}>Quality inspection before shipping</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  When included in the selected scope, available pre-shipping review can cover visible
                  embroidery, stitching, color against the approved reference, and recorded measurements.
                  The review method and its limits are documented before ordering.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: "var(--cv-accent)" }}>6</div>
              <div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: "#1f1f1f" }}>Insured delivery to your US door</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  The written quote identifies the carrier, available insurance, shipping documents,
                  customs responsibilities, estimated timing, and the party responsible for claims.
                  Carrier and customs dates are estimates, not guarantees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Transparent Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            What a bridal lehenga from India actually costs (2026)
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-[#e6dfd5] rounded-xl overflow-hidden">
              <thead style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
                <tr>
                  <th className="p-4 text-left">Cost component</th>
                  <th className="p-4 text-left">What affects it</th>
                  <th className="p-4 text-left">How it is quoted</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Outfit</td>
                  <td className="p-4">Fabric, handwork, customization, quantity, and vendor</td>
                  <td className="p-4">Actual approved vendor price</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">CeremonyVerse service</td>
                  <td className="p-4">Research, live shopping, order management, and party size</td>
                  <td className="p-4">$249, $799, $2,499, or a written custom scope</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Shipping</td>
                  <td className="p-4">Weight, dimensions, value, destination, and carrier service</td>
                  <td className="p-4">Carrier estimate for the approved shipment</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Customs</td>
                  <td className="p-4">Classification, fiber, construction, origin, and declared value</td>
                  <td className="p-4">Estimate only; US customs or the carrier makes the assessment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#4d403a] text-center">
            Estimated customs costs and DHL/FedEx international shipping are itemized in your quote.
            Actual assessed duties depend on classification, fiber content, value, and current tariff rules. <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "var(--cv-accent)", textDecoration: "underline" }}>Read our full 2026 price breakdown →</Link>
          </p>
        </div>
      </section>

      {/* RISK REVERSAL */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Risk Reversal
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            What can go wrong — and how we prevent it
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-3" style={{ color: "#1f1f1f" }}>Instagram vs. reality: fabric looks different</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                When live review is available, the item, fabric, embroidery, color reference, price,
                and next approval step are documented. Custom work and screen color require separate
                expectations because handmade details and displays can vary.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-3" style={{ color: "#1f1f1f" }}>Fake vendors, stolen images, no accountability</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                CeremonyVerse documents the seller, item, price, payment terms, and available review
                before an approved order. Vendor selection and verification limits are explained in
                the written scope instead of relying on a social-media profile alone.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-3" style={{ color: "#1f1f1f" }}>Sizing disaster: blouse misfitted</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                We coordinate the measurement process specified for the selected item. Eligible
                made-to-measure garments can include Fit Assurance with up to $150 toward local
                alterations after delivery, subject to the written service terms.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-3" style={{ color: "#1f1f1f" }}>Logistics: customs, delays, damage</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                We handle shipping documentation, estimate customs costs based on the garment&apos;s
                classification, fiber content, and value, and insure shipments. Assessed duties are
                itemized and passed through transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Common Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            NRI brides ask us these questions most
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How much does a bridal lehenga from India cost delivered to the USA?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Cost depends on fabric, handwork, customization, vendor, shipping, and any assessed
                duty. We separately itemize the outfit, flat service tier, shipping, and customs
                estimate so you can compare the landed quote with US boutique pricing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How do I know the bridal lehenga I see online is the one I&apos;ll actually receive?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                When the vendor and item allow live review, CeremonyVerse coordinates a video view of
                the available piece and documents the selected item, measurements, price, and written
                approval. Custom work and pre-shipping review follow the limits stated in the selected
                service scope; screen color and handmade details can vary.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How long does it take to buy a bridal lehenga from India and have it delivered to the USA?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                From the day you place your order to delivery at your US door, plan for 14–20 weeks
                for a custom bridal lehenga: 2–3 weeks for design consultation and fabric sourcing,
                6–12 weeks for production, 1 week for quality inspection, and 2–3 weeks for
                international shipping and US customs clearance. We recommend starting 6–12 months
                before your wedding date.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Do I have to pay US customs duties on a bridal lehenga ordered from India?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                A commercial textile shipment may be assessed US duties. The amount depends on the
                garment&apos;s HTS classification, fiber content, construction, declared value, and current
                tariff rules. We provide an estimate in the quote and itemize the amount actually assessed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How do you handle sizing when I can&apos;t do in-person fittings?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                We collect 15+ precise body measurements using a detailed guide that goes beyond basic
                bust-waist-hip — including high waist, blouse back length, shoulder width, armhole
                depth, and skirt length. The tailor uses the approved measurements and item specifications;
                remote ordering cannot guarantee perfect fit. Eligible made-to-measure garments
                include Fit Assurance with up to $150 toward local alterations, subject to service terms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Can I coordinate my bridal lehenga with bridesmaid and family outfits from India?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Yes, when the selected service tier and written scope include those people and items.
                Full Bridal Concierge covers the couple and wedding party up to eight people; larger
                groups require a separate private scope with responsibilities and costs confirmed first.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/faq/" className="text-sm font-medium" style={{ color: "var(--cv-accent)" }}>
              See all FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* Related outfit & ceremony pages */}
      <section className="py-16 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "#7a6841" }}>
            Complete Your Wedding Wardrobe
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#1f1f1f" }}>
            Source every outfit from one trusted concierge
          </h2>
          <p className="text-base mb-8" style={{ color: "#4d403a" }}>
            From the bride&apos;s lehenga to the groom&apos;s sherwani to family outfits and sarees — coordinate
            every look through a single India sourcing partner and save on combined shipping.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/buy-sherwani-from-india-usa/" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid #e6dfd5", color: "#4d403a", textDecoration: "none" }}>Groom Sherwanis</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid #e6dfd5", color: "#4d403a", textDecoration: "none" }}>Bridesmaid &amp; Family Outfits</Link>
            <Link href="/banarasi-silk-sarees-usa/" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid #e6dfd5", color: "#4d403a", textDecoration: "none" }}>Banarasi Silk Sarees</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid #e6dfd5", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Silk Sarees</Link>
            <Link href="/mehndi-outfits-usa/" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid #e6dfd5", color: "#4d403a", textDecoration: "none" }}>Mehndi Outfits</Link>
            <Link href="/sangeet-outfits-usa/" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid #e6dfd5", color: "#4d403a", textDecoration: "none" }}>Sangeet Outfits</Link>
            <Link href="/reception-outfits-usa/" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid #e6dfd5", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/how-it-works/" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid #e6dfd5", color: "#4d403a", textDecoration: "none" }}>How It Works</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#7a6841" }}>
            Start Your Bridal Lehenga Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Book a free 30-minute consultation
          </h2>
          <p className="text-[#e8dfd2] mb-2 leading-relaxed">
            Tell us about your wedding date, ceremonies, and vision. We&apos;ll recommend the right
            sourcing tier for you and show you real lehengas from our India partners.
          </p>
          <p className="text-sm mb-8" style={{ color: "#7a6841" }}>
            Custom bridal orders need production, inspection, and shipping time — if your wedding is within the year, reach
            out now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hello%20CeremonyVerse!%20I%20want%20to%20talk%20about%20sourcing%20my%20bridal%20lehenga%20from%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#25D366", color: "#25D366" }}
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
