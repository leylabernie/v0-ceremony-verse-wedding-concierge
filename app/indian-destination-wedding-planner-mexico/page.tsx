import Image from "next/image"
import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/indian-destination-wedding-planner-mexico/",
  title: "Indian Destination Wedding Planner Mexico — Cancun & Riviera Maya | CeremonyVerse",
  description: "I coordinated my own son's 4-day Indian wedding in Mexico. Vetted vendors — planner, DJ, photographers, decorator, beauty — plus outfit sourcing from Surat & Delhi. Cancun & Riviera Maya. Interfaith ceremonies welcome.",
  keywords: "Indian destination wedding planner Mexico, Cancun Indian wedding, Riviera Maya Indian wedding, Mexico Indian wedding coordinator, NRI Mexico wedding, interfaith wedding Mexico, Hindu Christian wedding Mexico",
});

const serviceSchema = buildServiceSchema({
  name: "Indian Destination Wedding Planner Mexico — Cancun & Riviera Maya",
  description: "Vetted vendor network and full multi-day coordination for Indian destination weddings in Cancun and Riviera Maya, Mexico. Outfit sourcing from Surat and Delhi as an add-on. Interfaith ceremonies welcome.",
  url: "/indian-destination-wedding-planner-mexico/",
  areaServed: "Mexico — Cancun, Riviera Maya",
  offers: [
    { name: "Mexico Vendor Network Access", price: 499, description: "Vetted planner, DJ, photographers, decorator, and beauty contacts." },
    { name: "Mexico Day-Of Coordination", price: 1500, description: "Single-event on-site coordination in Mexico." },
    { name: "Mexico 4-Day Full Coordination", price: 4500, description: "Full multi-day event coordination, like a 4-day Indian wedding." },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Mexico Destination Wedding Planner", url: "/indian-destination-wedding-planner-mexico/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Do you plan Indian destination weddings in Mexico?",
    answer: "Yes. I coordinated my own son's 4-day Indian wedding in Mexico at the Hard Rock Cafe, and another son's 4-day interfaith wedding that pivoted to New Jersey after COVID. The vendors I used — planner, DJ, photographers, decorator, beauty — are the vendors I now connect you with. We focus on Cancun and Riviera Maya, where our vetted network is based.",
  },
  {
    question: "What does an Indian destination wedding in Mexico cost?",
    answer: "Coordination fees start at $499 for vendor network access (you get the contacts and take it from there), $1,500 for day-of coordination, and $4,500+ for full 4-day coordination like my son's wedding. Outfit sourcing from Surat and Delhi is separate — most brides save 40-60% vs. US boutiques. Custom pricing for interfaith weddings, non-standard duration, or large guest counts.",
  },
  {
    question: "Can you coordinate an interfaith Hindu and Christian wedding in Mexico?",
    answer: "Yes. I coordinated my own son's 4-day interfaith wedding — Hindu ceremony (we are Hindu) and Christian ceremony (his wife is South Indian Christian). I have relationships with both Hindu priests and Christian churches in the Cancun and Riviera Maya area. Interfaith ceremonies are one of our specialties.",
  },
  {
    question: "Can you source our Indian wedding outfits for our Mexico wedding too?",
    answer: "Yes — this is one of our most popular combinations. We source your outfits from Surat and Delhi via live video shopping, and coordinate your Mexico event with our vetted vendors. One team, one point of contact, full coverage. Outfits can be shipped to your US address or directly to your Mexico resort.",
  },
]);

export default function MexicoDestinationPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <SeoNav />

      {/* HERO */}
      <section className="relative py-24 px-6" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#7a6841" }}>
            Indian Destination Weddings in Mexico
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            I coordinated my own son&apos;s 4-day Indian wedding in Mexico.
            <br />
            <span style={{ color: "#7a6841" }}>Now I coordinate yours.</span>
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto" style={{ color: "#d4c8b8" }}>
            Vetted vendors from my own son&apos;s wedding — planner, DJ, photographers, decorator, beauty.
            Outfit sourcing from Surat &amp; Delhi as an add-on. Cancun &amp; Riviera Maya. Interfaith ceremonies welcome.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#7a6841] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
              Book Free Consultation
            </a>
            <a href="/indian-wedding-coordination-mexico" className="bg-white border-2 border-[#7a6841] text-[#1f1f1f] px-8 py-4 rounded-lg font-bold text-lg">
              Read My Son&apos;s Wedding Story
            </a>
          </div>
        </div>
      </section>

      {/* WHY US — REAL EXPERIENCE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Why Trust Me With Your Mexico Wedding
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            I&apos;m not a wedding planner who read a book about Indian weddings.
            <br />
            I&apos;m a mother who&apos;s done this — twice.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1f1f1f" }}>Son #1 — 4-Day Interfaith Wedding</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Originally planned for Mexico, pivoted to New Jersey after COVID. Hindu ceremony (we are Hindu) and
                Christian ceremony (his wife is South Indian Christian). I found the venue, caterer, decorators,
                makeup, hair, mehndi, priest, and church — and coordinated every detail across 4 days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌴</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1f1f1f" }}>Son #2 — 4-Day Mexico Wedding</h3>
              <p className="text-[#4d403a] leading-relaxed">
                At the Hard Rock Cafe in Mexico. Also a 4-day event. By then I had learned everything from the
                New Jersey pivot, and the Mexico coordination was smoother for it. These are the vendors I now
                connect you with — tested at my own son&apos;s wedding.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/indian-wedding-coordination-mexico"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#1f1f1f", color: "#fff" }}
            >
              Read the Full Story with Photos →
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATION LOGISTICS HUB */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--cv-accent)" }}>
              Insider Destination Hub
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              What I learned planning Indian weddings in Mexico
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌴</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1f1f1f" }}>Cancun vs. Riviera Maya</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Both work for Indian weddings, but they&apos;re different. Cancun has more resort options and direct
                flights from more US cities. Riviera Maya has more boutique venues and a quieter feel. I&apos;ll help
                you pick based on guest count, budget, and vibe.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🕯️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1f1f1f" }}>Decor &amp; Mandaps</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Resorts charge a fortune for Indian decor. I use an independent decorator for mehndi and haldi (saves
                budget), and a wedding-seasoned pro for the main ceremony mandap. Smart allocation, not cheap-out.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1f1f1f" }}>DJ &amp; Entertainment</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Don&apos;t settle for the resort&apos;s generic DJ. My DJ killed it at my son&apos;s sangeet — Bollywood,
                bhangra, fusion, and Western. He reads the room and keeps the dance floor full. Big difference.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1f1f1f" }}>Photography Strategy</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Two photographers — one professional for the main wedding day, one newer (and more affordable) for
                mehndi, haldi, sangeet. Smart allocation. You get full coverage across 4 days without paying
                wedding-day rates for every event.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1f1f1f" }}>Beauty — Indian + HD</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Two options. Indian parlor for traditional looks (some brides prefer this for the Hindu ceremony).
                American HD makeup artist in Mexico — best in Mexico, holds up in heat, photographs beautifully.
                Most brides want HD for the main day.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1f1f1f" }}>Welcome Bags &amp; Favors</h3>
              <p className="text-[#4d403a] leading-relaxed">
                For my son&apos;s wedding, I sourced custom canvas welcome bags from China and jhumka party favors
                for garba night. Same for your wedding — sourced direct, no resort markup. The small details make
                a destination wedding feel personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTFIT SOURCING UPSELL */}
      <section className="py-20 px-6" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "#7a6841" }}>
                Outfit Sourcing Add-On
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Skip the US boutique markup.
                <br />
                <span style={{ color: "#7a6841" }}>Source direct from Surat &amp; Delhi.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#d4c8b8" }}>
                Most brides planning a Mexico wedding also need Indian outfits — bride, groom, full bridal party,
                family across 4 days. Sourcing from US boutiques means 2x markup on every piece. I source direct
                from the same places US boutiques do, through my family&apos;s connections in Surat and Delhi.
                Live video shopping, family inspection, direct delivery to your US door or your Mexico resort.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3" style={{ color: "#d4c8b8" }}>
                  <span className="text-[#7a6841] font-bold">✓</span> Sangeet/mehndi outfits from $150–$300 landed (vs. $400–$700 at US boutiques)
                </li>
                <li className="flex items-center gap-3" style={{ color: "#d4c8b8" }}>
                  <span className="text-[#7a6841] font-bold">✓</span> Premium bridal lehengas from $1,500–$3,000 landed (vs. $2,500–$5,000 at boutiques)
                </li>
                <li className="flex items-center gap-3" style={{ color: "#d4c8b8" }}>
                  <span className="text-[#7a6841] font-bold">✓</span> Coordinated bridesmaid lehengas in any color, custom-made within budget
                </li>
                <li className="flex items-center gap-3" style={{ color: "#d4c8b8" }}>
                  <span className="text-[#7a6841] font-bold">✓</span> Live video shopping — see and pick every piece before it ships
                </li>
              </ul>
              <a
                href="/services"
                className="inline-block bg-[#7a6841] text-white px-8 py-4 rounded-lg font-bold transition-transform hover:scale-105"
              >
                Explore Outfit Sourcing
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-800 rounded-3xl overflow-hidden relative border border-gray-700">
                <Image
                  src="/images/son-weddings/son-wedding-01.webp"
                  alt="Bhamini's son's wedding — full bridal party in coordinated Indian wedding attire"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-[#1f1f1f] p-6 rounded-2xl shadow-2xl max-w-xs">
                <p className="font-bold text-sm">
                  &quot;I coordinated my own son&apos;s 4-day wedding in Mexico. The vendors I used are the vendors I now
                  connect you with.&quot;
                </p>
                <p className="mt-2 text-xs text-[#6f6a63]">— Bhamini, Founder of CeremonyVerse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Mexico Coordination Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Three tiers — pick the level of support you need
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>DIY with My Vendors</p>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Vendor Network Access</h3>
              <div className="text-3xl font-semibold mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>$499</div>
              <p className="text-sm text-[#4d403a] mb-4">Vetted contacts for planner, DJ, photographers, decorator, and beauty. You take it from there.</p>
              <a href="/contact" className="text-sm font-medium" style={{ color: "var(--cv-accent)" }}>Get Vendor List →</a>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Single Event</p>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Day-Of Coordination</h3>
              <div className="text-3xl font-semibold mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>$1,500</div>
              <p className="text-sm text-[#4d403a] mb-4">On-site coordination for one event. Vendor liaison, timeline, day-of issue resolution.</p>
              <a href="/contact" className="text-sm font-medium" style={{ color: "var(--cv-accent)" }}>Book Consultation →</a>
            </div>
            <div className="bg-white border-2 rounded-2xl p-8 relative" style={{ borderColor: "var(--cv-accent)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "var(--cv-accent)" }}>
                FULL SERVICE
              </div>
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Multi-Day Event</p>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>4-Day Full Coordination</h3>
              <div className="text-3xl font-semibold mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>From $4,500</div>
              <p className="text-sm text-[#4d403a] mb-4">Full multi-day event like my son&apos;s wedding. Venue, caterer, decorator, makeup, hair, mehndi, priest, church, on-site coordination.</p>
              <a href="/contact" className="text-sm font-medium" style={{ color: "var(--cv-accent)" }}>Book Consultation →</a>
            </div>
          </div>

          <p className="text-center text-sm text-[#6f6a63] mt-8">
            Custom pricing for interfaith weddings, non-standard duration, or guest counts above 200.{" "}
            <Link href="/pricing" className="underline" style={{ color: "var(--cv-accent)" }}>See full pricing details</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Mexico Destination Wedding FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Questions about Indian weddings in Mexico
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Do you plan Indian destination weddings in Mexico?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Yes. I coordinated my own son&apos;s 4-day Indian wedding in Mexico at the Hard Rock Cafe, and another
                son&apos;s 4-day interfaith wedding that pivoted to New Jersey after COVID. The vendors I used — planner,
                DJ, photographers, decorator, beauty — are the vendors I now connect you with. We focus on Cancun and
                Riviera Maya, where our vetted network is based.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>What does an Indian destination wedding in Mexico cost?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Coordination fees start at $499 for vendor network access (you get the contacts and take it from
                there), $1,500 for day-of coordination, and $4,500+ for full 4-day coordination like my son&apos;s
                wedding. Outfit sourcing from Surat and Delhi is separate — most brides save 40-60% vs. US boutiques.
                Custom pricing for interfaith weddings, non-standard duration, or large guest counts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Can you coordinate an interfaith Hindu and Christian wedding in Mexico?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Yes. I coordinated my own son&apos;s 4-day interfaith wedding — Hindu ceremony (we are Hindu) and
                Christian ceremony (his wife is South Indian Christian). I have relationships with both Hindu priests
                and Christian churches in the Cancun and Riviera Maya area. Interfaith ceremonies are one of our
                specialties.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Can you source our Indian wedding outfits for our Mexico wedding too?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Yes — this is one of our most popular combinations. We source your outfits from Surat and Delhi via
                live video shopping, and coordinate your Mexico event with our vetted vendors. One team, one point of
                contact, full coverage. Outfits can be shipped to your US address or directly to your Mexico resort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Ready to plan your Mexico wedding?
          </h2>
          <p className="text-[#d4c8b8] mb-8 leading-relaxed text-lg">
            Book a free 30-minute consultation. Tell me your vision, your dates, and your budget. I&apos;ll tell you
            honestly what I can do — vendor access, day-of coordination, full 4-day coordination, or all of the
            above plus outfit sourcing from India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Free Consultation
            </a>
            <a
              href="/indian-wedding-coordination-mexico"
              className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              Read My Son&apos;s Wedding Story
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
