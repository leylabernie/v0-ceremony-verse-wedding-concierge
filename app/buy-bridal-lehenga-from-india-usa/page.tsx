import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/buy-bridal-lehenga-from-india-usa/",
  title: "Buy Bridal Lehenga from India — Delivered to USA",
  description: "Source your dream bridal lehenga directly from India. Live video shopping, custom measurements, quality checks, and delivery to your US door. Save 30–50% vs US boutiques.",
  keywords: "buy bridal lehenga from India USA, custom bridal lehenga NRI, bridal lehenga delivered to USA, Indian bridal lehenga online USA, NRI bride lehenga, affordable bridal lehenga India",
});

const serviceSchema = buildServiceSchema({
  name: "Bridal Lehenga Sourcing & Concierge",
  description: "Custom bridal lehenga sourcing directly from India for NRI brides in the USA. Includes live video shopping, quality checks, custom stitching, and door-to-door delivery.",
  url: "/buy-bridal-lehenga-from-india-usa/",
  offers: [
    { name: "Style Guide & Vendor List", price: 149, description: "Curated vendor style guide for your bridal lehenga." },
    { name: "Guided Sourcing", price: 599, description: "Live video shopping sessions with India vendors for your bridal lehenga." },
    { name: "Full Bridal Concierge", price: 1499, description: "End-to-end bridal lehenga sourcing and coordination." },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Buy Bridal Lehenga from India", url: "/buy-bridal-lehenga-from-india-usa/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How much does a bridal lehenga from India cost delivered to the USA?",
    answer: "A custom bridal lehenga sourced from India and delivered to the USA typically costs $800–$3,500 including the outfit, live video shopping, custom stitching, shipping, and US customs duties (12–27%). The same lehenga at a US Indian boutique runs $2,500–$8,000. CeremonyVerse saves NRI brides 30–50% on average.",
  },
  {
    question: "How do I know the bridal lehenga I see online is the one I'll actually receive?",
    answer: "CeremonyVerse does live video shopping sessions where you see the exact lehenga in real time — fabric draped, embroidery up close, color in natural light. That specific piece is then reserved with your name and order number. We also do a final pre-shipping inspection and document the order with reference photos and your written approval before production begins.",
  },
  {
    question: "How long does it take to buy a bridal lehenga from India and have it delivered to the USA?",
    answer: "From the day you place your order to delivery at your US door, plan for 14–20 weeks for a custom bridal lehenga: 2–3 weeks for design consultation and fabric sourcing, 6–12 weeks for production (longer for heavy zardozi or gota patti work), 1 week for quality inspection, and 2–3 weeks for international shipping and US customs clearance. We recommend starting 6–12 months before your wedding date.",
  },
  {
    question: "Do I have to pay US customs duties on a bridal lehenga ordered from India?",
    answer: "Yes. As of August 2025, the US de minimis exemption for shipped goods has been eliminated, so bridal lehengas shipped from India to your US address are subject to full commercial import duties of 12–27% of the declared value. CeremonyVerse itemizes these duties in your quote upfront so there are no surprises. If you carry the lehenga back personally from a trip to India, the $800 personal exemption applies.",
  },
  {
    question: "How do you handle sizing when I can't do in-person fittings?",
    answer: "We collect 15+ precise body measurements using a detailed guide that goes beyond basic bust-waist-hip — including high waist, blouse back length, shoulder width, armhole depth, and skirt length. Every piece is custom-stitched to your exact silhouette with strategic ease allowances for final alterations. Our 100% fit guarantee covers alteration costs up to $150 per garment if adjustments are needed after delivery.",
  },
  {
    question: "Can I coordinate my bridal lehenga with bridesmaid and family outfits from India?",
    answer: "Yes. Coordinating the full wedding party is one of our specialties. We've sourced bridal lehengas alongside 14 bridesmaid lehengas, 14 groomsmen sherwanis, full family outfits, jewelry, and ceremonial items — all color-matched, custom-stitched, and shipped together to your US address. See our 4-day Gujarati and South Indian Christian wedding case study for a real example.",
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
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#d4c8b8" }}>
            Skip the $3,000 India flight and the 200% US boutique markup. Source your dream bridal
            lehenga directly from skilled designers in India — with live video shopping, custom
            stitching to your exact measurements, quality checks, and insured delivery to all 50
            states. NRI brides save 30–50% on average.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book a Free Consultation
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              See How It Works
            </a>
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
            US Indian boutiques carry limited collections at 2–3× India prices due to import markups,
            rent, and inventory carrying costs. India direct gives you the full universe of
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
                <li>• Access to 50+ artisan workshops across Surat, Kolkata, Delhi, Jaipur</li>
                <li>• Real 2026 prices: $800–$3,500 for a custom bridal lehenga</li>
                <li>• You pay the artisan price + transparent 15–20% sourcing fee</li>
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
                  Every finished lehenga is inspected in India — embroidery integrity, color match to
                  your approved sample, stitching quality, and measurements. We send you photos and
                  video before anything ships.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: "var(--cv-accent)" }}>6</div>
              <div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: "#1f1f1f" }}>Insured delivery to your US door</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  We handle all shipping documentation, customs declarations, and full insurance.
                  Standard shipping takes 2–3 weeks; expedited 7–10 days is available. We've never
                  had an unresolved shipping issue.
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
                  <th className="p-4 text-left">Tier</th>
                  <th className="p-4 text-left">Outfit cost (India)</th>
                  <th className="p-4 text-left">Sourcing fee</th>
                  <th className="p-4 text-left">Shipping + customs</th>
                  <th className="p-4 text-left">Total delivered</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4">Light embroidery (resham, sequin)</td>
                  <td className="p-4">$700–$1,200</td>
                  <td className="p-4">15–20%</td>
                  <td className="p-4">$180–$320</td>
                  <td className="p-4 font-semibold">$1,000–$1,800</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4">Medium embroidery (gota patti, aari)</td>
                  <td className="p-4">$1,200–$2,200</td>
                  <td className="p-4">15–20%</td>
                  <td className="p-4">$280–$480</td>
                  <td className="p-4 font-semibold">$1,700–$3,200</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4">Heavy embroidery (zardozi, dabka)</td>
                  <td className="p-4">$2,200–$3,500</td>
                  <td className="p-4">15–20%</td>
                  <td className="p-4">$380–$620</td>
                  <td className="p-4 font-semibold">$3,000–$4,800</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4">Couture recreation (Sabyasachi-style)</td>
                  <td className="p-4">$3,500–$6,000</td>
                  <td className="p-4">15–20%</td>
                  <td className="p-4">$550–$900</td>
                  <td className="p-4 font-semibold">$4,700–$8,200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#4d403a] text-center">
            US customs duties (12–27%) and DHL/FedEx international shipping are itemized in your
            quote upfront — no surprise fees at delivery. <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "var(--cv-accent)", textDecoration: "underline" }}>Read our full 2026 price breakdown →</Link>
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
                You approve the exact item on live video — actual fabric draped, embroidery up close,
                color in natural light. That specific piece is reserved with your order number. If
                anything changes before shipping, we halt it immediately.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-3" style={{ color: "#1f1f1f" }}>Fake vendors, stolen images, no accountability</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                We work only with vetted artisan partners we know personally — no random Instagram
                sellers. We have US presence and accountability. You see everything live before
                committing.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-3" style={{ color: "#1f1f1f" }}>Sizing disaster: blouse misfitted</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                We collect 15+ precise measurements and build in strategic ease allowances. Every
                piece is custom-stitched. Our 100% fit guarantee covers alteration costs up to $150
                per garment after delivery.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6">
              <h3 className="font-semibold mb-3" style={{ color: "#1f1f1f" }}>Logistics: customs, delays, damage</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                We handle all shipping documentation, advise on customs duties upfront (typically
                12–27%), and fully insure every shipment. We have never had an unresolved shipping
                issue in 4+ years.
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
                A custom bridal lehenga sourced from India and delivered to the USA typically costs
                $800–$3,500 including the outfit, live video shopping, custom stitching, shipping,
                and US customs duties (12–27%). The same lehenga at a US Indian boutique runs
                $2,500–$8,000. CeremonyVerse saves NRI brides 30–50% on average.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How do I know the bridal lehenga I see online is the one I&apos;ll actually receive?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                CeremonyVerse does live video shopping sessions where you see the exact lehenga in
                real time — fabric draped, embroidery up close, color in natural light. That specific
                piece is then reserved with your name and order number. We also do a final pre-shipping
                inspection and document the order with reference photos and your written approval
                before production begins.
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
                Yes. As of August 2025, the US de minimis exemption for shipped goods has been
                eliminated, so bridal lehengas shipped from India to your US address are subject to
                full commercial import duties of 12–27% of the declared value. CeremonyVerse itemizes
                these duties in your quote upfront so there are no surprises. If you carry the lehenga
                back personally from a trip to India, the $800 personal exemption applies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How do you handle sizing when I can&apos;t do in-person fittings?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                We collect 15+ precise body measurements using a detailed guide that goes beyond basic
                bust-waist-hip — including high waist, blouse back length, shoulder width, armhole
                depth, and skirt length. Every piece is custom-stitched to your exact silhouette with
                strategic ease allowances for final alterations. Our 100% fit guarantee covers
                alteration costs up to $150 per garment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Can I coordinate my bridal lehenga with bridesmaid and family outfits from India?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Yes. Coordinating the full wedding party is one of our specialties. We&apos;ve sourced
                bridal lehengas alongside 14 bridesmaid lehengas, 14 groomsmen sherwanis, full family
                outfits, jewelry, and ceremonial items — all color-matched, custom-stitched, and
                shipped together to your US address.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/faq" className="text-sm font-medium" style={{ color: "var(--cv-accent)" }}>
              See all FAQ →
            </Link>
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
          <p className="text-[#d4c8b8] mb-2 leading-relaxed">
            Tell us about your wedding date, ceremonies, and vision. We&apos;ll recommend the right
            sourcing tier for you and show you real lehengas from our India partners.
          </p>
          <p className="text-sm mb-8" style={{ color: "#7a6841" }}>
            Top India vendors book 6–12 months in advance — if your wedding is within the year, reach
            out now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20talk%20about%20sourcing%20my%20bridal%20lehenga%20from%20India."
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
