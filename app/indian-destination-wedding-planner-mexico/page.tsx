import Image from "next/image"
import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, buildHowToSchema, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/indian-destination-wedding-planner-mexico/",
  title: "Indian Destination Wedding Planner in Mexico — Stress-Free",
  description: "Plan your Indian destination wedding in Mexico with vetted vendors from a real 4-day wedding. Cancun & Riviera Maya. Book your free consultation today.",
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
  {
    question: "How far in advance should we start planning our Indian wedding in Mexico?",
    answer: "Ideally 9-12 months before your wedding date. Top resorts in Cancun and Riviera Maya book out 12-18 months in advance for weekend dates, especially during peak season (November through April). If your wedding is sooner, contact us — we will tell you honestly what is achievable. Indian outfits need 8-12 weeks for custom stitching, so factor that in as well.",
  },
  {
    question: "Do Mexican resorts accommodate Hindu ceremonies, mandaps, and Indian food?",
    answer: "Yes, most large all-inclusive resorts in Cancun and Riviera Maya have experience with Indian weddings. They allow external decorators for mandaps, can arrange Indian vegetarian and non-vegetarian catering menus, and provide space for multi-day events like mehndi, sangeet, and the main ceremony. The key is picking a resort that has done it before — that is part of what our vendor network helps with.",
  },
  {
    question: "What legal requirements do we need for a wedding in Mexico?",
    answer: "For a legally binding ceremony in Mexico, you need valid passports, tourist cards, birth certificates (apostilled and translated), a pre-nuptial medical certificate from a Mexican clinic, and four witnesses. Many couples do a legal ceremony at their local courthouse in the US and a symbolic ceremony in Mexico — this simplifies paperwork significantly. We can connect you with a wedding planner who handles the legal logistics.",
  },
]);

const howToSchema = buildHowToSchema({
  name: "How to Plan an Indian Destination Wedding in Mexico",
  description: "Step-by-step guide to planning your Indian destination wedding in Cancun or Riviera Maya — from choosing a resort to on-site coordination.",
  url: "/indian-destination-wedding-planner-mexico/",
  totalTime: "PT30M",
  steps: [
    { name: "Choose Your Resort and Dates", text: "Pick a resort in Cancun or Riviera Maya that has experience hosting Indian weddings. We recommend venues that allow external decorators for mandaps and can accommodate multi-day events like mehndi, sangeet, and the main ceremony." },
    { name: "Book a Free Consultation with CeremonyVerse", text: "Tell us your wedding vision, guest count, dates, and budget. We will recommend the right coordination tier — vendor network access, day-of, or full 4-day coordination — and connect you with our vetted Mexico vendors." },
    { name: "Source Outfits from India (Optional Add-On)", text: "Combine your Mexico wedding planning with our India outfit sourcing service. Live video shopping for bridal lehenga, sherwani, bridal party, and family outfits — custom stitched and delivered to your US address before the wedding." },
    { name: "Coordinate Vendors and Logistics", text: "We help you book and coordinate all vendors — planner, DJ, photographers, decorator, makeup, hair, mehndi artist, priest or church, and caterer. For full coordination, we manage the entire timeline and vendor logistics." },
    { name: "On-Site Event Coordination", text: "For day-of or full coordination, we are on-site in Mexico managing vendor setup, ceremony flow, guest experience, and troubleshooting throughout your wedding events." },
  ],
});

export default function MexicoDestinationPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />

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
          <p className="mt-6 text-xl max-w-3xl mx-auto" style={{ color: "#e8dfd2" }}>
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
            Real Experience — Not a Textbook
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Why Plan an Indian Destination Wedding in Mexico?
          </h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto" style={{ color: "#4d403a" }}>
            I&apos;m not a wedding planner who read a book about Indian weddings. I&apos;m a mother who&apos;s done this — twice for my own sons, plus my nephew&apos;s Mexico wedding. Three family Mexico weddings and counting.
          </p>

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
              Vendor Selection &amp; Coordination
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              How We Coordinate Your Indian Destination Wedding in Mexico
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

      {/* TOP WEDDING RESORTS IN MEXICO */}
      <section className="py-20 px-6" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "#7a6841" }}>
            Venue Guidance
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Top Wedding Resorts in Mexico for Indian Ceremonies
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: "#e8dfd2" }}>
            Not every resort can handle a 4-day Indian wedding with mandap, Indian catering, and 200+ guests. Here is what I tell every couple about choosing the right venue.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#f8f6f2" }}>Cancun — More Flights, More Resort Options</h3>
              <p className="leading-relaxed" style={{ color: "#e8dfd2" }}>
                Cancun has the most direct flights from US cities, which matters when you are flying in 150-200 guests. Large all-inclusive resorts like the Hard Rock, Moon Palace, and Fairmont Mayakoba have experience with Indian weddings — they understand multi-day event schedules, external decorator access for mandaps, and Indian catering requirements. The tradeoff is a busier, more commercial feel.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#f8f6f2" }}>Riviera Maya — Boutique Venues, Quieter Beaches</h3>
              <p className="leading-relaxed" style={{ color: "#e8dfd2" }}>
                Thirty minutes south of the Cancun airport, Riviera Maya offers boutique resorts and private villa rentals with a more intimate atmosphere. Venues like Xcaret, Excellence Playa Mujeres, and Grand Velas Riviera Maya are popular with Indian couples who want a resort that feels exclusive. Guest count typically works best under 150.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl border border-[#7a6841] max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#7a6841" }}>What to Ask Any Resort Before Booking</h3>
            <ul className="space-y-2 text-base" style={{ color: "#e8dfd2" }}>
              <li>Have you hosted Indian weddings before? Can you share examples?</li>
              <li>Do you allow external decorators to build a mandap?</li>
              <li>Can the kitchen prepare Indian vegetarian and non-vegetarian menus?</li>
              <li>How many events can we spread across our stay? (You need 3-4 event spaces for mehndi, sangeet, ceremony, reception)</li>
              <li>Is there a mandatory guest room minimum or food &amp; beverage minimum?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Mistakes That Cost Thousands
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Common mistakes when planning an Indian destination wedding in Mexico
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            I&apos;ve made some of these myself or seen them at other Indian destination weddings.
            Here&apos;s what our coordination prevents.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#1f1f1f" }}>Booking a resort that hasn&apos;t done Indian weddings</h3>
              <p className="text-[#4d403a] leading-relaxed">
                The resort doesn&apos;t understand mandap requirements, can&apos;t handle Indian catering, and
                doesn&apos;t have experience with multi-day event schedules. You end up explaining basic
                Indian wedding logistics to a resort coordinator who has never seen one. We only
                recommend resorts that have hosted Indian weddings before — or we connect you with
                our planner who has those venue relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#1f1f1f" }}>Using the resort&apos;s DJ instead of a professional</h3>
              <p className="text-[#4d403a] leading-relaxed">
                The resort DJ plays generic hotel music. Our DJ — the same one who performed at my
                son&apos;s sangeet — knows garba from bhangra, mixes Bollywood with Western transitions,
                and reads the room. At my son&apos;s wedding, he had 150 people dancing including relatives
                who never dance. That&apos;s not a generic resort experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#1f1f1f" }}>Paying resort vendor markup on everything</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Resort wedding packages bundle vendors and charge 30-50% more than independent vendors.
                Our vetted network is independent — tested at my own son&apos;s wedding — and priced directly.
                You choose what you want for each event without the resort&apos;s percentage on top.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#1f1f1f" }}>Not starting early enough for outfit sourcing</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Custom bridal lehengas from India need 8-12 weeks for stitching. If you&apos;re also planning
                a Mexico wedding, you need both timelines to converge — outfits arrive before your flight.
                When we handle both coordination and sourcing, we manage one unified timeline so nothing
                falls through the cracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANNING TIMELINE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            From Booking to Big Day
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Planning Timeline: Your Indian Wedding in Mexico
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: "#4d403a" }}>
            Based on my own three family Mexico weddings, here is a realistic timeline for planning an Indian destination wedding in Cancun or Riviera Maya.
          </p>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-xl font-semibold" style={{ color: "var(--cv-accent)" }}>12-9</span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Months Before: Book Resort &amp; Core Vendors</h3>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                Lock in your resort date — peak season (November-April) fills 12-18 months out. Book your coordinator (us), start outfit sourcing for the bride and groom, and block hotel room rates for your guests. Send save-the-dates so guests can book flights early.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-xl font-semibold" style={{ color: "var(--cv-accent)" }}>9-6</span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Months Before: Outfits, Decor &amp; Entertainment</h3>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                Finalize bride and groom outfits (8-12 weeks for custom stitching). Coordinate bridesmaid and family outfit sourcing. Book decorator for mandap design, DJ for sangeet, photographers, and beauty artists. Begin outfit sourcing for the full bridal party and family.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-xl font-semibold" style={{ color: "var(--cv-accent)" }}>6-3</span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Months Before: Catering, Logistics &amp; Guest Travel</h3>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                Finalize catering menu with the resort. Arrange guest transportation from airport to resort. Confirm room block numbers. Receive and inspect all outfits from India. Plan welcome bags and favors. Confirm ceremony details with your priest or officiant.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-xl font-semibold" style={{ color: "var(--cv-accent)" }}>1 mo</span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Before: Final Confirmations &amp; Rehearsal</h3>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                Final vendor confirmations, detailed day-of timelines for each event, and a full rehearsal. Ship outfits to your US address or directly to the Mexico resort. This is where day-of or full coordination kicks in — we handle the rest so you can enjoy your wedding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE EVENT SCHEDULE */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            A Realistic Day-by-Day
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            What Your Indian Destination Wedding in Mexico Actually Looks Like
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-3xl mx-auto">
            Based on my own three family Mexico weddings, here is a realistic day-by-day breakdown.
            Every wedding is different — this is a starting framework we customize for your traditions.
          </p>

          <div className="space-y-6">
            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-base font-semibold" style={{ color: "var(--cv-accent)" }}>Day 1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Guest Arrival, Mehndi &amp; Haldi</h3>
                  <p className="text-sm text-[#4d403a]">Afternoon check-in + evening intimate ceremonies</p>
                </div>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                Guests fly in from across the US (and often India). We coordinate airport transfers to the
                resort so no one gets lost. Welcome bags are in rooms — for my son's wedding, I sourced custom
                canvas bags with Indian snacks, sunscreen, and a personalized itinerary. Evening mehndi for the
                bride and close family, followed by haldi with bright yellow decor from our budget-friendly
                decorator. The bride typically wears a simple yellow salwar set or lehenga — this is the relaxed
                start before the big events. Budget: moderate — save your decor spend for the main ceremony.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-base font-semibold" style={{ color: "var(--cv-accent)" }}>Day 2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Sangeet &amp; Garba Night</h3>
                  <p className="text-sm text-[#4d403a]">The party everyone remembers — 6+ hours of dancing</p>
                </div>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                This is where our vetted DJ makes the difference. At my son's sangeet, he opened with garba,
                transitioned to Bollywood classics that both families knew, and closed with fusion and Western
                hits. The dance floor was full from 8 PM to 2 AM — including relatives who never dance. The
                bride wears a lighter lehenga or sharara set (the one she can actually dance in). The groom
                wears an Indo-Western suit or silk kurta. We coordinate jhumka party favors on the tables and
                make sure the resort has the right bar setup. For interfaith couples, this is often also the
                rehearsal dinner with the Christian side of the family.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-base font-semibold" style={{ color: "var(--cv-accent)" }}>Day 3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Wedding Ceremony &amp; Reception</h3>
                  <p className="text-sm text-[#4d403a]">The main event — mandap, vows, first dance, celebration</p>
                </div>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                Morning starts with bridal makeup — our American HD makeup artist handles the main look, which
                holds up in Mexico's heat and humidity and photographs beautifully. The Hindu ceremony takes place
                under a professionally built mandap with tropical flowers by our wedding-seasoned decorator.
                Our vetted priest travels to your resort and performs the full ceremony. For interfaith couples,
                the Christian ceremony follows at the resort chapel or a nearby church. Evening reception with
                full catering, first dance, toasts, and the DJ returns. This is the day the main photographer
                delivers the images you will frame for the rest of your life. The bride wears her bridal lehenga
                (sourced through our India service if you're combining both), and the groom wears his sherwani.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-base font-semibold" style={{ color: "var(--cv-accent)" }}>Day 4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Farewell Brunch &amp; Departure</h3>
                  <p className="text-sm text-[#4d403a]">Relaxed send-off, group photos, and vendor wrap-up</p>
                </div>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                A relaxed farewell brunch for guests before flights home. Some families add a small puja or
                vidai ceremony in the morning. Group photos from the entire wedding get shared — the photographer
                delivers same-day sneak peeks so guests leave with memories already on their phones. For
                interfaith families, this is often the most relaxed moment: both families eating breakfast together
                after 4 days of coordinated events. We handle final vendor wrap-up, tip coordination, and any
                last-minute logistics so you can enjoy the morning with your new spouse.
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
                Indian Wedding Outfits for Your Mexico Destination Wedding
                <br />
                <span style={{ color: "#7a6841" }}>Source Direct from Surat &amp; Delhi.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#e8dfd2" }}>
                Most brides planning a Mexico wedding also need Indian outfits — bride, groom, full bridal party,
                family across 4 days. Sourcing from US boutiques means 2x markup on every piece. I source direct
                from the same places US boutiques do, through my family&apos;s connections in Surat and Delhi.
                Live video shopping, family inspection, direct delivery to your US door or your Mexico resort.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3" style={{ color: "#e8dfd2" }}>
                  <span className="text-[#7a6841] font-bold">✓</span> Sangeet/mehndi outfits from $150–$300 landed (vs. $400–$700 at US boutiques)
                </li>
                <li className="flex items-center gap-3" style={{ color: "#e8dfd2" }}>
                  <span className="text-[#7a6841] font-bold">✓</span> Premium bridal lehengas from $1,500–$3,000 landed (vs. $2,500–$5,000 at boutiques)
                </li>
                <li className="flex items-center gap-3" style={{ color: "#e8dfd2" }}>
                  <span className="text-[#7a6841] font-bold">✓</span> Coordinated bridesmaid lehengas in any color, custom-made within budget
                </li>
                <li className="flex items-center gap-3" style={{ color: "#e8dfd2" }}>
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
                  src="/images/sourcing/couple-mandap.webp"
                  alt="Indian wedding couple under decorated mandap with floral garlands — the kind of ceremony we coordinate for Mexico destination weddings"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-[#1f1f1f] p-6 rounded-2xl shadow-2xl max-w-xs">
                <p className="font-bold text-base">
                  &quot;I coordinated my own son&apos;s 4-day wedding in Mexico. The vendors I used are the vendors I now
                  connect you with.&quot;
                </p>
                <p className="mt-2 text-xs text-[#4d403a]">— Bhamini, Founder of CeremonyVerse</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* OVERALL COST CONTEXT */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
            <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
              Budget Reality Check
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              What an Indian destination wedding in Mexico actually costs
            </h2>
            <p className="text-[#4d403a] mb-6 leading-relaxed">
              Beyond our coordination fees, here are realistic ranges for the total wedding budget based
              on what our clients and my own family weddings have actually spent. These are not resort
              package prices — these are what real couples pay when they use independent vetted vendors
              instead of resort bundles.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#e6dfd5] rounded-xl overflow-hidden">
                <thead style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
                  <tr>
                    <th className="p-4 text-left">Budget item</th>
                    <th className="p-4 text-left">Typical range</th>
                    <th className="p-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t border-[#e6dfd5]">
                    <td className="p-4 font-semibold">Resort (room block + F&amp;B minimum)</td>
                    <td className="p-4">5,000-40,000</td>
                    <td className="p-4 text-[#4d403a]">Varies hugely by guest count and season</td>
                  </tr>
                  <tr className="border-t border-[#e6dfd5]">
                    <td className="p-4 font-semibold">Coordination (our fee)</td>
                    <td className="p-4" style={{ color: "var(--cv-accent)" }}>99-4,500</td>
                    <td className="p-4 text-[#4d403a]">Vendor access to full 4-day coordination</td>
                  </tr>
                  <tr className="border-t border-[#e6dfd5]">
                    <td className="p-4 font-semibold">All outfits from India (bride + groom + party)</td>
                    <td className="p-4">,000-8,000</td>
                    <td className="p-4 text-[#4d403a]">40-60% less than US boutiques</td>
                  </tr>
                  <tr className="border-t border-[#e6dfd5]">
                    <td className="p-4 font-semibold">Decorator (mandap + all event decor)</td>
                    <td className="p-4">,000-8,000</td>
                    <td className="p-4 text-[#4d403a]">Independent vendor, not resort markup</td>
                  </tr>
                  <tr className="border-t border-[#e6dfd5]">
                    <td className="p-4 font-semibold">DJ + Photography</td>
                    <td className="p-4">,000-6,000</td>
                    <td className="p-4 text-[#4d403a]">Professional, Indian wedding experienced</td>
                  </tr>
                  <tr className="border-t border-[#e6dfd5]">
                    <td className="p-4 font-semibold">Beauty, mehndi, priest, misc</td>
                    <td className="p-4">,500-3,000</td>
                    <td className="p-4 text-[#4d403a]">Varies by services selected</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#4d403a] text-center mt-4">
              Total realistic range for 100-200 guests: 0,000-70,000. Less than most resort packages
              for the same scope — and with independent vendors you choose, not resort defaults.
            </p>
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
            Indian Wedding Packages in Mexico
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>DIY with My Vendors</p>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Vendor Network Access</h3>
              <div className="text-3xl font-semibold mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>$499</div>
              <p className="text-base text-[#4d403a] mb-4">Vetted contacts for planner, DJ, photographers, decorator, and beauty. You take it from there.</p>
              <a href="/contact" className="text-base font-medium" style={{ color: "var(--cv-accent)" }}>Get Vendor List →</a>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Single Event</p>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Day-Of Coordination</h3>
              <div className="text-3xl font-semibold mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>$1,500</div>
              <p className="text-base text-[#4d403a] mb-4">On-site coordination for one event. Vendor liaison, timeline, day-of issue resolution.</p>
              <a href="/contact" className="text-base font-medium" style={{ color: "var(--cv-accent)" }}>Book Consultation →</a>
            </div>
            <div className="bg-white border-2 rounded-2xl p-8 relative" style={{ borderColor: "var(--cv-accent)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "var(--cv-accent)" }}>
                FULL SERVICE
              </div>
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Multi-Day Event</p>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>4-Day Full Coordination</h3>
              <div className="text-3xl font-semibold mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>From $4,500</div>
              <p className="text-base text-[#4d403a] mb-4">Full multi-day event like my son&apos;s wedding. Venue, caterer, decorator, makeup, hair, mehndi, priest, church, on-site coordination.</p>
              <a href="/contact" className="text-base font-medium" style={{ color: "var(--cv-accent)" }}>Book Consultation →</a>
            </div>
          </div>

          <p className="text-center text-base text-[#4d403a] mt-8">
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
            Frequently Asked Questions About Indian Destination Weddings in Mexico
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
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How far in advance should we start planning our Indian wedding in Mexico?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Ideally 9-12 months before your wedding date. Top resorts in Cancun and Riviera Maya book out 12-18
                months in advance for weekend dates, especially during peak season (November through April). If your
                wedding is sooner, contact us — we will tell you honestly what is achievable. Indian outfits need
                8-12 weeks for custom stitching, so factor that in as well.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Do Mexican resorts accommodate Hindu ceremonies, mandaps, and Indian food?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Yes, most large all-inclusive resorts in Cancun and Riviera Maya have experience with Indian weddings.
                They allow external decorators for mandaps, can arrange Indian vegetarian and non-vegetarian catering
                menus, and provide space for multi-day events like mehndi, sangeet, and the main ceremony. The key is
                picking a resort that has done it before — that is part of what our vendor network helps with.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>What legal requirements do we need for a wedding in Mexico?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                For a legally binding ceremony in Mexico, you need valid passports, tourist cards, birth certificates
                (apostilled and translated), a pre-nuptial medical certificate from a Mexican clinic, and four
                witnesses. Many couples do a legal ceremony at their local courthouse in the US and a symbolic
                ceremony in Mexico — this simplifies paperwork significantly. We can connect you with a wedding
                planner who handles the legal logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#7a6841" }}>
            Your Mexico Wedding Deserves Better Than a Resort Package
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            I&apos;ve coordinated three family Indian weddings in Mexico.
            <br />
            <span style={{ color: "#7a6841" }}>Let me coordinate yours.</span>
          </h2>
          <p className="text-[#e8dfd2] mb-8 leading-relaxed text-lg">
            Book a free 30-minute consultation. Tell me your wedding dates, guest count, and budget.
            I&apos;ll tell you honestly what&apos;s achievable, which resorts work for Indian weddings, and
            which coordination tier fits your needs. If you also need outfits, we can discuss
            sourcing from India as part of the same conversation. One team, one timeline.
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
