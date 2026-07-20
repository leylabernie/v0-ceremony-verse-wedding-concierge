import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/pricing",
  title: "CeremonyVerse Pricing — Sourcing & Coordination",
  description:
    "Transparent pricing: Indian wedding outfit sourcing from $249, Mexico wedding coordination from $499. No hidden markups. See full breakdown.",
  keywords: "CeremonyVerse pricing, Indian wedding sourcing cost, Mexico wedding coordination pricing, NRI bridal concierge fee, Surat lehenga sourcing cost",
});

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Pricing & Service Tiers",
  description:
    "Transparent service tiers for Indian wedding outfit sourcing from Surat and Delhi, and Mexico wedding coordination in Cancun and Riviera Maya. Sourcing from $249, Mexico coordination from $499.",
  url: "/pricing/",
  offers: [
    { name: "Style Guide & Vendor List", price: 249, description: "Curated starting point for self-directed brides." },
    { name: "Guided Sourcing", price: 799, description: "Live video shopping sessions with families in Surat and Delhi." },
    { name: "Full Bridal Concierge", price: 2499, description: "End-to-end outfit sourcing and coordination for bride, groom, and party up to 8." },
    { name: "Mexico Vendor Network Access", price: 499, description: "Vetted planner, DJ, photographers, decorator, and beauty contacts for Cancun and Riviera Maya." },
    { name: "Mexico Day-Of Coordination", price: 1500, description: "Single-event on-site coordination in Mexico." },
    { name: "Mexico 4-Day Full Coordination", price: 4500, description: "Full multi-day event coordination, like a 4-day Indian wedding in Cancun or Riviera Maya." },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Pricing", url: "/pricing/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How much does CeremonyVerse cost?",
    answer: "CeremonyVerse offers two service lines. For outfit sourcing from Surat and Delhi: Style Guide & Vendor List at $249, Guided Sourcing at $799, and Full Bridal Concierge at $2,499. For Mexico wedding coordination in Cancun and Riviera Maya: Vendor Network Access at $499, Day-Of Coordination at $1,500, and 4-Day Full Coordination starting at $4,500. These are our service fees — outfit costs, shipping, and customs are itemized separately in your quote.",
  },
  {
    question: "Is there a hidden markup on the outfits?",
    answer: "No. Our service fee is flat and clearly itemized. You see the full breakdown: outfit cost, our service fee, international shipping, and US customs duties (12–27%). No surprises at delivery. We don't take a percentage of the outfit cost — the fee you pay is the fee we quoted.",
  },
  {
    question: "Do you source designer-label items like Manish Malhotra or Sabyasachi?",
    answer: "No. We don't source designer-label pieces, and we don't sell replicas or knockoffs. What we DO source is authentic Indian handwork — zardozi, aari, gota patti, resham, mirror work — from the same places US Indian boutiques source from, through my family's connections in Surat and Delhi. You get real handwork at direct pricing, without the boutique markup or the designer-label price. If you specifically want a designer-label piece, we'll tell you to buy it direct from their store.",
  },
  {
    question: "Are the outfits ready-made or custom?",
    answer: "Both options are available. For ready pieces, we offer live video shopping — you see items on video, pick what you want, and my family inspects before shipping. These are semi-stitched and your local tailor handles final fit. For custom pieces, I work with a local boutique who can recreate a reference image at about 85% similarity for less than half the designer's cost. The boutique has made bridesmaid lehengas in any color and style for many brides, within their budget.",
  },
  {
    question: "How much can I save by sourcing from India vs. US boutiques?",
    answer: "Most clients save 40–60%. Sangeet and mehndi outfits run $150–$300 landed vs. $400–$700 at US boutiques. Mid-bridal lehengas run $700–$1,500 landed vs. $1,200–$2,500 at boutiques. Premium bridal lehengas with heavy zardozi and real silk run $1,500–$3,000 landed vs. $2,500–$5,000 at boutiques. You often get heavier handwork or better fabric at the same price point, because you skip the boutique markup.",
  },
  {
    question: "What's the payment schedule?",
    answer: "Milestone-based protection: 25% deposit to reserve, 35% after fabric approval on live video, 30% after final inspection before shipping, and 10% upon delivery. You never pay for the next stage until you've approved the previous one. For Mexico coordination, the schedule is similar with milestones tied to vendor booking, event timeline, and on-site completion.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes. For orders over $3,000, we offer extended payment plans across 4–6 months aligned with your wedding timeline. We accept credit cards, bank transfers, and most major payment methods.",
  },
  {
    question: "What's the difference between the three sourcing tiers?",
    answer: "Style Guide ($249) is for self-directed brides who just need a curated starting point. Guided Sourcing ($799) includes 2–4 live video shopping sessions so you can see and pick pieces before they ship. Full Bridal Concierge ($2,499) is end-to-end — we handle the entire wedding party coordination (bride + groom + party up to 8), measurements, and shipping logistics. For parties larger than 8, custom pricing applies.",
  },
  {
    question: "What does Mexico coordination include?",
    answer: "Three tiers. Vendor Network Access ($499) gives you our vetted contacts for a Mexico planner, DJ, two photographers, decorator, and beauty — you take it from there. Day-Of Coordination ($1,500) is single-event on-site coordination. 4-Day Full Coordination ($4,500+) is a full multi-day event like my son's wedding — venue, caterer, decorator, makeup, hair, mehndi, priest, church, and on-site coordination throughout. Custom pricing for interfaith or non-standard duration.",
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
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#7a6841" }}>
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Two services. Flat fees. No hidden markups.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#d4c8b8" }}>
            Outfit sourcing from Surat and Delhi — direct from the same places US boutiques source from.
            Mexico wedding coordination in Cancun and Riviera Maya — vetted vendors from my own son&apos;s wedding.
            Every quote is itemized in writing before you commit.
          </p>
        </div>
      </section>

      {/* SAVINGS CALLOUT */}
      <section className="py-16 px-6" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            What You Actually Save
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Honest savings — real numbers, no inflation
          </h2>
          <p className="text-center text-[#4d403a] mb-10 max-w-2xl mx-auto">
            We don&apos;t cite $8,000 designer prices to make savings look bigger. Here&apos;s what US Indian boutiques
            actually charge, and what the same handwork costs when you source direct.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#e6dfd5] rounded-xl overflow-hidden">
              <thead style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
                <tr>
                  <th className="p-4 text-left">Outfit type</th>
                  <th className="p-4 text-left">Handwork level</th>
                  <th className="p-4 text-left">US Indian boutique</th>
                  <th className="p-4 text-left">Direct from us (landed)</th>
                  <th className="p-4 text-left">Savings</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Sangeet / mehndi / haldi</td>
                  <td className="p-4 text-[#4d403a]">Light resham or machine work</td>
                  <td className="p-4">$400–$700</td>
                  <td className="p-4" style={{ color: "var(--cv-accent)" }}>$150–$300</td>
                  <td className="p-4 font-semibold">~50–60%</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Engagement / lighter bridal</td>
                  <td className="p-4 text-[#4d403a]">Light zardozi or aari, good fabric</td>
                  <td className="p-4">$1,200–$2,500</td>
                  <td className="p-4" style={{ color: "var(--cv-accent)" }}>$700–$1,500</td>
                  <td className="p-4 font-semibold">~40–50%</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Premium bridal lehenga</td>
                  <td className="p-4 text-[#4d403a]">Heavy zardozi, real silk, full handwork</td>
                  <td className="p-4">$2,500–$5,000</td>
                  <td className="p-4" style={{ color: "var(--cv-accent)" }}>$1,500–$3,000</td>
                  <td className="p-4 font-semibold">~40%</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Groom sherwani with handwork</td>
                  <td className="p-4 text-[#4d403a]">Zardozi or resham detailing</td>
                  <td className="p-4">$1,000–$2,500</td>
                  <td className="p-4" style={{ color: "var(--cv-accent)" }}>$500–$1,200</td>
                  <td className="p-4 font-semibold">~50%</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Pure silk Kanchipuram saree</td>
                  <td className="p-4 text-[#4d403a]">Hallmark-certified, real zari — I go myself to the weavers</td>
                  <td className="p-4">~56,000 rupees in Vadodara boutique</td>
                  <td className="p-4" style={{ color: "var(--cv-accent)" }}>~20,000 rupees direct from weaver</td>
                  <td className="p-4 font-semibold">~65%</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Custom recreation (designer-inspired)</td>
                  <td className="p-4 text-[#4d403a]">Custom piece, ~85% similar to reference</td>
                  <td className="p-4">$3,000–$8,000+ designer label</td>
                  <td className="p-4" style={{ color: "var(--cv-accent)" }}>$1,500–$3,500 custom</td>
                  <td className="p-4 font-semibold">~50%+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6f6a63] text-center mt-4 max-w-2xl mx-auto">
            &quot;Landed&quot; means delivered to your US door — outfit cost, our service fee, shipping, and customs all included.
            Brides often tell us the piece they receive is even better than what they saw at a boutique, because at the same
            price point, you can afford heavier handwork or better fabric when you skip the markup.
          </p>
        </div>
      </section>

      {/* SOURCING TIERS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Outfit Sourcing from Surat &amp; Delhi
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Three tiers — pick the level of support you need
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            My family has been in Surat&apos;s fabric trade for generations. Through them, I source from the same places
            US Indian boutiques source from. You shop via live video, my family inspects before shipping, and you skip
            the boutique markup.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Tier 1 — Always Free */}
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8 flex flex-col">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Always Free</p>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Free Consultation</h3>
              <p className="text-sm text-[#4d403a] mb-6">No commitment required.</p>
              <div className="text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>$0</div>
              <ul className="space-y-3 text-sm text-[#4d403a] flex-1">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> 30-minute video consultation</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Review your wedding vision, timeline, budget</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Honest assessment of what&apos;s achievable</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Recommendation on the right tier for you</li>
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
              <h3 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Style Guide &amp; Vendor List</h3>
              <p className="text-sm text-[#4d403a] mb-6">For brides who want a curated starting point.</p>
              <div className="text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>From $249</div>
              <ul className="space-y-3 text-sm text-[#4d403a] flex-1">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Personalized outfit style guide</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Curated list of options from Surat &amp; Delhi</li>
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
              <h3 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Guided Sourcing</h3>
              <p className="text-sm text-[#4d403a] mb-6">Live video shopping so you see and pick every piece.</p>
              <div className="text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>From $799</div>
              <ul className="space-y-3 text-sm text-[#4d403a] flex-1">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Everything in Style Guide tier</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> 2–4 live video shopping sessions</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Fabric &amp; color matching to your shade</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Color accuracy confirmation</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Family inspection before shipping</li>
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
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Full Bridal Concierge</h3>
                <p className="text-sm text-[#4d403a] mb-3">
                  We handle everything — from first inspiration to your door. For brides coordinating the full
                  wedding party (bride + groom + party up to 8 + family + jewelry + ceremonial items).
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-[#4d403a]">
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Everything in Guided Sourcing tier</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Full wedding party coordination (up to 8)</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Custom recreation via local boutique</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Measurement management for all members</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> End-to-end shipping &amp; delivery support</li>
                  <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Dedicated sourcing manager</li>
                </ul>
                <p className="text-xs text-[#6f6a63] mt-3">
                  For parties larger than 8 or full wedding party (15+), custom pricing applies — typically $3,999+. <Link href="/contact" className="underline" style={{ color: "var(--cv-accent)" }}>Request a custom quote</Link>.
                </p>
              </div>
              <div className="md:text-right">
                <div className="text-4xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>From $2,499</div>
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
        </div>
      </section>

      {/* MEXICO COORDINATION TIERS */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Mexico Wedding Coordination — Cancun &amp; Riviera Maya
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Vetted vendors from my own son&apos;s wedding
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            I coordinated my own son&apos;s 4-day Indian wedding in Mexico. The vendors I used — planner, DJ, photographers,
            decorator, beauty — are the vendors I now connect you with. No guesswork, no resort-package markup.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Mexico Tier 1 — Vendor Network Access */}
            <div className="bg-[#faf8f5] border border-[#e6dfd5] rounded-2xl p-8 flex flex-col">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>DIY with My Vendors</p>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Vendor Network Access</h3>
              <p className="text-sm text-[#4d403a] mb-6">Vetted contacts — you take it from there.</p>
              <div className="text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>$499</div>
              <ul className="space-y-3 text-sm text-[#4d403a] flex-1">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Mexico planner contact (boots on ground)</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> DJ contact (professional, wedding-seasoned)</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Two photographer contacts (main + budget for mehndi/haldi)</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Decorator contact</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Beauty contacts (Indian parlor + American HD makeup in Mexico)</li>
                <li className="flex gap-2 text-[#6f6a63]">✗ On-site coordination</li>
              </ul>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border"
                style={{ borderColor: "var(--cv-accent)", color: "#1f1f1f" }}
              >
                Get Vendor List
              </a>
            </div>

            {/* Mexico Tier 2 — Day-Of Coordination */}
            <div className="bg-[#faf8f5] border border-[#e6dfd5] rounded-2xl p-8 flex flex-col">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Single Event</p>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Day-Of Coordination</h3>
              <p className="text-sm text-[#4d403a] mb-6">One event, on-site coordination.</p>
              <div className="text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>$1,500</div>
              <ul className="space-y-3 text-sm text-[#4d403a] flex-1">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Everything in Vendor Network Access</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> On-site coordination for one event</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Vendor liaison day-of</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Timeline management</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Day-of issue resolution</li>
                <li className="flex gap-2 text-[#6f6a63]">✗ Multi-day coordination</li>
              </ul>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border"
                style={{ borderColor: "var(--cv-accent)", color: "#1f1f1f" }}
              >
                Book Consultation
              </a>
            </div>

            {/* Mexico Tier 3 — 4-Day Full Coordination */}
            <div className="bg-[#faf8f5] border-2 rounded-2xl p-8 flex flex-col relative" style={{ borderColor: "var(--cv-accent)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "var(--cv-accent)" }}>
                FULL SERVICE
              </div>
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Multi-Day Event</p>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>4-Day Full Coordination</h3>
              <p className="text-sm text-[#4d403a] mb-6">Full event, like my son&apos;s wedding.</p>
              <div className="text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>From $4,500</div>
              <ul className="space-y-3 text-sm text-[#4d403a] flex-1">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Everything in Day-Of Coordination</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Full multi-day on-site coordination</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Venue sourcing &amp; negotiation</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Caterer, priest, church coordination</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Makeup, hair, mehndi artist coordination</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Welcome bag &amp; favor sourcing</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Interfaith ceremony coordination</li>
              </ul>
              <p className="text-xs text-[#6f6a63] mt-3">
                Custom pricing for interfaith weddings, non-standard duration, or guest counts above 200. <Link href="/contact" className="underline" style={{ color: "var(--cv-accent)" }}>Request a custom quote</Link>.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium"
                style={{ background: "var(--cv-accent)", color: "#fff" }}
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM QUOTE CTA */}
      <section className="py-16 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Need something outside these tiers?
          </h2>
          <p className="text-[#4d403a] mb-8 leading-relaxed">
            Interfaith weddings, non-standard duration, parties larger than 15, multiple-event coordination,
            or anything else — we custom-quote. Tell us your vision and budget, and we&apos;ll tell you honestly
            what we can do.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
            style={{ background: "#1f1f1f", color: "#fff" }}
          >
            Request a Custom Quote
          </a>
        </div>
      </section>

      {/* WHAT'S INCLUDED IN A QUOTE */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            What&apos;s in Your Sourcing Quote
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
                  <td className="p-4 text-[#4d403a]">The piece itself — paid to the source in India</td>
                  <td className="p-4">$150–$3,500 depending on handwork &amp; fabric</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">Service fee</td>
                  <td className="p-4 text-[#4d403a]">CeremonyVerse flat fee — tier-based, not a percentage</td>
                  <td className="p-4">$249–$2,499 (tier-dependent)</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">International shipping</td>
                  <td className="p-4 text-[#4d403a]">DHL or FedEx from India to your US address, fully insured</td>
                  <td className="p-4">$80–$200</td>
                </tr>
                <tr className="border-t border-[#e6dfd5]">
                  <td className="p-4 font-semibold">US customs duties</td>
                  <td className="p-4 text-[#4d403a]">Import duties (12–27% of declared value) — paid to US Customs, not us</td>
                  <td className="p-4">$30–$600</td>
                </tr>
                <tr className="border-t border-[#e6dfd5] font-semibold">
                  <td className="p-4">Total delivered</td>
                  <td className="p-4 text-[#4d403a]">Everything above, no hidden fees</td>
                  <td className="p-4" style={{ color: "var(--cv-accent)" }}>$300–$4,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6f6a63] text-center mt-4">
            Compare to $400–$5,000+ for the same handwork at a US Indian boutique. Most clients save 40–60%
            even after paying our service fee.
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
              <p className="text-xs text-[#4d403a]">After family inspection photos before shipping</p>
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
                CeremonyVerse offers two service lines. For outfit sourcing from Surat and Delhi: Style Guide &amp;
                Vendor List at $249, Guided Sourcing at $799, and Full Bridal Concierge at $2,499. For Mexico wedding
                coordination in Cancun and Riviera Maya: Vendor Network Access at $499, Day-Of Coordination at $1,500,
                and 4-Day Full Coordination starting at $4,500. These are our service fees — outfit costs, shipping,
                and customs are itemized separately in your quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Is there a hidden markup on the outfits?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                No. Our service fee is flat and clearly itemized. You see the full breakdown: outfit cost, our service
                fee, international shipping, and US customs duties (12–27%). No surprises at delivery. We don&apos;t take
                a percentage of the outfit cost — the fee you pay is the fee we quoted.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Do you source designer-label items like Manish Malhotra or Sabyasachi?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                No. We don&apos;t source designer-label pieces, and we don&apos;t sell replicas or knockoffs. What we DO source
                is authentic Indian handwork — zardozi, aari, gota patti, resham, mirror work — from the same places US
                Indian boutiques source from, through my family&apos;s connections in Surat and Delhi. You get real handwork
                at direct pricing, without the boutique markup or the designer-label price. If you specifically want a
                designer-label piece, we&apos;ll tell you to buy it direct from their store.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Are the outfits ready-made or custom?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Both options are available. For ready pieces, we offer live video shopping — you see items on video,
                pick what you want, and my family inspects before shipping. These are semi-stitched and your local
                tailor handles final fit. For custom pieces, I work with a local boutique who can recreate a reference
                image at about 85% similarity for less than half the designer&apos;s cost. The boutique has made bridesmaid
                lehengas in any color and style for many brides, within their budget.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How much can I save by sourcing from India vs. US boutiques?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Most clients save 40–60%. Sangeet and mehndi outfits run $150–$300 landed vs. $400–$700 at US boutiques.
                Mid-bridal lehengas run $700–$1,500 landed vs. $1,200–$2,500 at boutiques. Premium bridal lehengas with
                heavy zardozi and real silk run $1,500–$3,000 landed vs. $2,500–$5,000 at boutiques. You often get
                heavier handwork or better fabric at the same price point, because you skip the boutique markup.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>What&apos;s the payment schedule?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Milestone-based protection: 25% deposit to reserve, 35% after fabric approval on live video, 30% after
                final inspection before shipping, and 10% upon delivery. You never pay for the next stage until
                you&apos;ve approved the previous one. For Mexico coordination, the schedule is similar with milestones
                tied to vendor booking, event timeline, and on-site completion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>What does Mexico coordination include?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Three tiers. Vendor Network Access ($499) gives you our vetted contacts for a Mexico planner, DJ, two
                photographers, decorator, and beauty — you take it from there. Day-Of Coordination ($1,500) is
                single-event on-site coordination. 4-Day Full Coordination ($4,500+) is a full multi-day event like my
                son&apos;s wedding — venue, caterer, decorator, makeup, hair, mehndi, priest, church, and on-site
                coordination throughout. Custom pricing for interfaith or non-standard duration.
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
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Free Consultation
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
    </div>
  );
}
