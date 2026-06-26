import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/pricing",
  title: "CeremonyVerse Pricing — Transparent Sourcing Fees for Indian Wedding Outfits",
  description:
    "Transparent pricing for Indian wedding outfit sourcing from India. Style Guide $149, Guided Sourcing $599, Full Bridal Concierge $1,499. No hidden markups — itemized quotes.",
  keywords: "CeremonyVerse pricing, Indian wedding sourcing cost, NRI bridal concierge fee, how much does CeremonyVerse cost",
});

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Pricing & Service Tiers",
  description:
    "Three transparent service tiers for sourcing Indian wedding outfits from India: Style Guide ($149), Guided Sourcing ($599), and Full Bridal Concierge ($1,499).",
  url: "/pricing/",
  offers: [
    { name: "Style Guide & Vendor List", price: 149, description: "Curated vendor style guide for Indian wedding outfits." },
    { name: "Guided Sourcing", price: 599, description: "Live video shopping sessions with India vendors." },
    { name: "Full Bridal Concierge", price: 1499, description: "End-to-end bridal outfit sourcing and coordination." },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Pricing", url: "/pricing/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How much does CeremonyVerse cost?",
    answer: "CeremonyVerse offers three transparent service tiers: Style Guide & Vendor List at $149, Guided Sourcing at $599, and Full Bridal Concierge at $1,499. These are our sourcing fees — the outfit cost, shipping, and customs duties are itemized separately in your quote. Most clients save 30–50% vs. US Indian boutiques even after paying our fee.",
  },
  {
    question: "Is there a hidden markup on the outfits?",
    answer: "No. Our sourcing fee is 15–20% of the outfit cost, clearly itemized. You see the full breakdown: outfit cost from the artisan, our sourcing fee, international shipping, and US customs duties (12–27%). No surprises at delivery.",
  },
  {
    question: "What's the payment schedule?",
    answer: "Milestone-based protection: 25% deposit to reserve, 35% after fabric approval on live video, 30% after final inspection before shipping, and 10% upon delivery. You never pay for the next stage until you've approved the previous one.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes. For orders over $3,000, we offer extended payment plans across 4–6 months aligned with your wedding timeline. We accept credit cards, bank transfers, and most major payment methods.",
  },
  {
    question: "What's the difference between the three tiers?",
    answer: "Style Guide ($149) is for self-directed brides who just need a curated starting point. Guided Sourcing ($599) includes 2–4 live video shopping sessions so you can see and approve every piece before it ships. Full Bridal Concierge ($1,499) is end-to-end — we handle the entire wedding party coordination, custom design sourcing, measurement management, and shipping logistics.",
  },
  {
    question: "How much can I save by sourcing from India vs. US boutiques?",
    answer: "Most clients save 30–50% vs. US Indian boutiques. A custom bridal lehenga sourced from India and delivered to the USA typically costs $800–$3,500 total (including our fee, shipping, and customs), vs. $2,500–$8,000 at a US boutique for the same quality.",
  },
]);

export default function PricingPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

      {/* HERO */}
      <section className="py-20 px-6 text-center" style={{ background: "#2f2f2f", color: "#f8f6f2" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#a69260" }}>
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            No hidden markups. Just our sourcing fee, clearly itemized.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#d4c8b8" }}>
            Every quote shows the outfit cost from the artisan, our sourcing fee, international
            shipping, and US customs duties (12–27%) — separately, in writing, before you commit.
            Most clients save 30–50% vs. US Indian boutiques.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Tier 1 — Always Free */}
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8 flex flex-col">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Always Free</p>
              <h2 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Free Consultation</h2>
              <p className="text-sm text-[#4d403a] mb-6">No commitment required.</p>
              <div className="text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>$0</div>
              <ul className="space-y-3 text-sm text-[#4d403a] flex-1">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> 30-minute video consultation</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Review your wedding vision, timeline, budget</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Recommendation on the right tier for you</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Honest assessment of what's achievable</li>
              </ul>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border"
                style={{ borderColor: "var(--cv-accent)", color: "#1f1f1f" }}
              >
                Book Free Consultation
              </a>
            </div>

            {/* Tier 2 — Style Guide */}
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8 flex flex-col">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Self-Directed Bride</p>
              <h2 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Style Guide &amp; Vendor List</h2>
              <p className="text-sm text-[#4d403a] mb-6">For brides who want a curated starting point.</p>
              <div className="text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>From $149</div>
              <ul className="space-y-3 text-sm text-[#4d403a] flex-1">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Personalized outfit style guide</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Curated list of 3–5 vetted artisan workshops</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Budget guidance and style notes</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> One 30-min consultation call</li>
                <li className="flex gap-2 text-[#6f6a63]">✗ Live video shopping sessions</li>
                <li className="flex gap-2 text-[#6f6a63]">✗ Pre-shipping inspection</li>
              </ul>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border"
                style={{ borderColor: "var(--cv-accent)", color: "#1f1f1f" }}
              >
                Get Started
              </a>
            </div>

            {/* Tier 3 — Guided Sourcing (most popular) */}
            <div className="bg-white border-2 rounded-2xl p-8 flex flex-col relative" style={{ borderColor: "var(--cv-accent)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "var(--cv-accent)" }}>
                MOST POPULAR
              </div>
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Most Brides</p>
              <h2 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Guided Sourcing</h2>
              <p className="text-sm text-[#4d403a] mb-6">Live video shopping so you see and approve every piece.</p>
              <div className="text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>From $599</div>
              <ul className="space-y-3 text-sm text-[#4d403a] flex-1">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Everything in Style Guide tier</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> 2–4 live video shopping sessions</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Fabric sourcing &amp; color matching</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Color accuracy confirmation</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Pre-shipping inspection</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Custom stitching to your measurements</li>
              </ul>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium"
                style={{ background: "var(--cv-accent)", color: "#fff" }}
              >
                Book Consultation
              </a>
            </div>
          </div>

          {/* Tier 4 — Full Bridal Concierge */}
          <div className="mt-6 bg-white border border-[#e6dfd5] rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Full Wedding Party</p>
                <h2 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Full Bridal Concierge</h2>
                <p className="text-sm text-[#4d403a] mb-3">
                  We handle everything — from first inspiration to your door. For brides coordinating
                  the full wedding party (bride + groom + bridesmaids + groomsmen + family + jewelry +
                  ceremonial items).
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-[#4d403a]">
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Everything in Guided Sourcing tier</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Full wedding party coordination</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Custom design sourcing</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Measurement management for all members</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> End-to-end shipping &amp; delivery support</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Dedicated sourcing manager</li>
                </ul>
              </div>
              <div className="md:text-right">
                <div className="text-4xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>From $1,499</div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium"
                  style={{ background: "#1f1f1f", color: "#fff" }}
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#6f6a63] text-center mt-8 max-w-2xl mx-auto">
            All tiers include itemized quotes showing outfit cost, sourcing fee, shipping, and
            customs — fully transparent, no surprises. The free 30-minute consultation is always
            available to help you choose.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED IN A QUOTE */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            What's in Your Quote
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Every line item, in writing, before you commit
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#e6dfd5] rounded-xl overflow-hidden">
              <thead style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
                <tr>
                  <th className="p-4 text-left">Line item</th>
                  <th className="p-4 text-left">What it covers</th>
                  <th className="p-4 text-left">Typical range</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Outfit cost</td>
                  <td className="p-4 text-[#4d403a]">Paid directly to the artisan workshop in India</td>
                  <td className="p-4">$700–$3,500 for a bridal lehenga</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Sourcing fee</td>
                  <td className="p-4 text-[#4d403a]">CeremonyVerse fee (15–20% of outfit cost)</td>
                  <td className="p-4">$105–$700</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">International shipping</td>
                  <td className="p-4 text-[#4d403a]">DHL or FedEx from India to your US address, fully insured</td>
                  <td className="p-4">$80–$200</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">US customs duties</td>
                  <td className="p-4 text-[#4d403a]">Import duties (12–27% of declared value) — paid to US Customs, not us</td>
                  <td className="p-4">$100–$600</td>
                </tr>
                <tr className="border-t border-[#e6dfd5] font-semibold">
                  <td className="p-4">Total delivered</td>
                  <td className="p-4 text-[#4d403a]">Everything above, no hidden fees</td>
                  <td className="p-4" style={{ color: "var(--cv-accent)" }}>$1,000–$4,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6f6a63] text-center mt-4">
            Compare to $2,500–$8,000+ for the same lehenga at a US Indian boutique — most clients
            save 30–50% even after paying our sourcing fee.
          </p>
        </div>
      </section>

      {/* PAYMENT SCHEDULE */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Payment Protection
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Milestone-based payments — never pay for the next stage until you approve the previous
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6 text-center">
              <div className="text-3xl font-semibold mb-2" style={{ color: "var(--cv-accent)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>25%</div>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: "#1f1f1f" }}>Deposit</p>
              <p className="text-xs text-[#4d403a]">To reserve your order and start production</p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6 text-center">
              <div className="text-3xl font-semibold mb-2" style={{ color: "var(--cv-accent)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>35%</div>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: "#1f1f1f" }}>After fabric approval</p>
              <p className="text-xs text-[#4d403a]">After you approve fabric on live video</p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6 text-center">
              <div className="text-3xl font-semibold mb-2" style={{ color: "var(--cv-accent)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>30%</div>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: "#1f1f1f" }}>After final inspection</p>
              <p className="text-xs text-[#4d403a]">After pre-shipping quality inspection photos</p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-6 text-center">
              <div className="text-3xl font-semibold mb-2" style={{ color: "var(--cv-accent)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>10%</div>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: "#1f1f1f" }}>On delivery</p>
              <p className="text-xs text-[#4d403a]">When your outfits arrive at your US door</p>
            </div>
          </div>

          <div className="mt-8 bg-[#faf8f5] border border-[#e6dfd5] rounded-2xl p-6 text-center">
            <p className="text-sm text-[#4d403a] leading-relaxed">
              <strong style={{ color: "#1f1f1f" }}>Payment plans available</strong> for orders over
              $3,000 — extended across 4–6 months aligned with your wedding timeline. We accept
              credit cards, bank transfers, and most major payment methods.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Pricing FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Questions about cost and payment
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How much does CeremonyVerse cost?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                CeremonyVerse offers three transparent service tiers: Style Guide &amp; Vendor List
                at $149, Guided Sourcing at $599, and Full Bridal Concierge at $1,499. These are our
                sourcing fees — the outfit cost, shipping, and customs duties are itemized separately
                in your quote. Most clients save 30–50% vs. US Indian boutiques even after paying our
                fee.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Is there a hidden markup on the outfits?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                No. Our sourcing fee is 15–20% of the outfit cost, clearly itemized. You see the full
                breakdown: outfit cost from the artisan, our sourcing fee, international shipping, and
                US customs duties (12–27%). No surprises at delivery.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>What&apos;s the payment schedule?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Milestone-based protection: 25% deposit to reserve, 35% after fabric approval on live
                video, 30% after final inspection before shipping, and 10% upon delivery. You never
                pay for the next stage until you&apos;ve approved the previous one.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Do you offer payment plans?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Yes. For orders over $3,000, we offer extended payment plans across 4–6 months aligned
                with your wedding timeline. We accept credit cards, bank transfers, and most major
                payment methods.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How much can I save by sourcing from India vs. US boutiques?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Most clients save 30–50% vs. US Indian boutiques. A custom bridal lehenga sourced
                from India and delivered to the USA typically costs $800–$3,500 total (including our
                fee, shipping, and customs), vs. $2,500–$8,000 at a US boutique for the same quality.
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
      <section className="py-20 px-6 text-center" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Not sure which tier is right for you?
          </h2>
          <p className="text-[#d4c8b8] mb-8 leading-relaxed">
            Book a free 30-minute consultation. We&apos;ll review your vision, timeline, and budget —
            and recommend the tier that fits your needs. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#a69260", color: "#fff" }}
            >
              Book Free Consultation
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#a69260", color: "#f8f6f2" }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
