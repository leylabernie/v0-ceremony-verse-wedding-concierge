import Image from "next/image"
import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, buildHowToSchema, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/indian-wedding-coordination-mexico/",
  title: "Indian Wedding Coordination Mexico — My Son's Real Wedding",
  description: "I coordinated my own son's 4-day Indian wedding in Mexico. Vetted vendors for Cancun & Riviera Maya — planner, DJ, photographers, decorator, beauty.",
  keywords: "Indian wedding coordination Mexico, Cancun Indian wedding planner, Riviera Maya Indian wedding, Mexico destination wedding Indian, interfaith wedding Mexico, Hindu Christian wedding Mexico",
});

const serviceSchema = buildServiceSchema({
  name: "Mexico Indian Wedding Coordination — Cancun & Riviera Maya",
  description: "Vetted vendor network and full multi-day coordination for Indian weddings in Cancun and Riviera Maya, Mexico. Planner, DJ, photographers, decorator, and beauty from my own son's wedding. Interfaith ceremonies welcome.",
  url: "/indian-wedding-coordination-mexico/",
  areaServed: "Mexico — Cancun, Riviera Maya",
  offers: [
    { name: "Mexico Vendor Network Access", price: 499, description: "Vetted planner, DJ, photographers, decorator, and beauty contacts for Cancun and Riviera Maya." },
    { name: "Mexico Day-Of Coordination", price: 1500, description: "Single-event on-site coordination in Mexico." },
    { name: "Mexico 4-Day Full Coordination", price: 4500, description: "Full multi-day event coordination, like a 4-day Indian wedding in Cancun or Riviera Maya." },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Mexico Wedding Coordination", url: "/indian-wedding-coordination-mexico/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Can you coordinate an interfaith Hindu and Christian wedding in Mexico?",
    answer: "Yes. I coordinated my own son's 4-day interfaith wedding — Hindu ceremony (we are Hindu) and Christian ceremony (his wife is South Indian Christian). I have relationships with both Hindu priests and Christian churches in the Cancun and Riviera Maya area. Interfaith ceremonies are one of our specialties.",
  },
  {
    question: "What areas in Mexico do you coordinate weddings in?",
    answer: "Cancun and Riviera Maya. This is where my son's wedding was held, where my vendor network is based, and where the majority of Indian destination weddings in Mexico happen. If you're considering Los Cabos or Puerto Vallarta, we can discuss — but our vetted network is Cancun and Riviera Maya.",
  },
  {
    question: "Can you also source our outfits from India for our Mexico wedding?",
    answer: "Yes — this is a popular combination. We source your outfits from Surat and Delhi via live video shopping, and coordinate your Mexico event with our vetted vendors. One team, one point of contact. Many brides want both, and it's seamless when handled together.",
  },
  {
    question: "How is this different from a resort wedding package?",
    answer: "Resort packages bundle venue, catering, and decor into one price — but they lock you into the resort's vendors and charge a premium for Indian-specific needs (mandap, Indian catering, sangeet setup, haldi/mehndi spaces). We work with independent vetted vendors, so you choose exactly what you want for each event. You also get our family's outfit sourcing at direct pricing, which resorts don't offer.",
  },
  {
    question: "Do you handle the venue and caterer too, or just the vendors?",
    answer: "For full 4-day coordination, we handle everything — venue sourcing, caterer, decorator, makeup, hair, mehndi, priest, church, welcome bags, and on-site coordination throughout. For vendor network access only, you get the contacts and take it from there. Day-of coordination is single-event on-site. See pricing for the full breakdown.",
  },
  {
    question: "What does a typical 4-day Indian wedding in Mexico actually look like?",
    answer: "Day 1 is mehndi and haldi (afternoon arrival, evening ceremonies with bright decor). Day 2 is the sangeet and garba night — the big party with our professional DJ. Day 3 is the wedding ceremony under a mandap (Hindu) and/or a church ceremony (Christian), followed by the evening reception. Day 4 is a farewell brunch and departure. Each event has its own venue space, its own decorator style, and its own vibe. We coordinate all of it — the timeline, vendor logistics, and day-of management so you don't have to.",
  },
  {
    question: "How far in advance should we book Mexico coordination?",
    answer: "For Mexico coordination, 9-12 months before your wedding date. Top resorts in Cancun and Riviera Maya book 12-18 months out for weekend dates, especially November through April. If you're also sourcing outfits from India, factor in 8-12 weeks for custom stitching. The earlier you start, the more options you have. Contact us even if your timeline is shorter — we will tell you honestly what is achievable.",
  },
]);

const howToSchema = buildHowToSchema({
  name: "How to Plan an Indian Destination Wedding in Mexico",
  description: "Step-by-step process for coordinating an Indian wedding in Cancun or Riviera Maya, Mexico — from vendor vetting to on-site event coordination.",
  url: "/indian-wedding-coordination-mexico/",
  totalTime: "PT30M",
  steps: [
    { name: "Book a Free Consultation", text: "Tell us about your wedding vision, guest count, preferred dates, and budget. We will discuss which coordination tier fits your needs — vendor network access, day-of coordination, or full 4-day coordination." },
    { name: "Receive Vetted Vendor Contacts", text: "Get our curated list of vetted Mexico wedding vendors — planner, DJ, photographers, decorator, makeup and hair, mehndi artist, and priest or church contacts. Every vendor was used at our own family wedding in Cancun." },
    { name: "Coordinate Venue and Catering", text: "For full coordination, we help you source and book the venue, caterer, and decor. We handle the Indian-specific requirements — mandap setup, Indian catering options, sangeet and haldi/mehndi spaces." },
    { name: "Add Outfit Sourcing from India (Optional)", text: "Many couples combine Mexico coordination with our India outfit sourcing. Live video shopping for bridal lehenga, sherwani, bridal party, and family outfits — all delivered to your US address before the wedding." },
    { name: "On-Site Coordination in Mexico", text: "For day-of or full coordination, we are on-site in Cancun or Riviera Maya managing timelines, vendor logistics, ceremony setup, and guest experience throughout your events." },
  ],
});

export default function MexicoCoordinationPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />

      <SeoNav />

      {/* HERO */}
      <section className="relative py-24 px-6" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#7a6841" }}>
            Mexico Wedding Coordination — Cancun &amp; Riviera Maya
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            I coordinated my own son&apos;s 4-day Indian wedding in Mexico.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#e8dfd2" }}>
            The vendors I used — planner, DJ, photographers, decorator, beauty — are the vendors I now connect you
            with. Interfaith ceremonies welcome. Outfits sourced from India as an add-on.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#7a6841] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
            >
              Book Free Consultation
            </a>
            <a
              href="#pricing"
              className="bg-transparent border-2 border-[#7a6841] text-[#f8f6f2] px-8 py-4 rounded-lg font-bold text-lg"
            >
              See Coordination Pricing
            </a>
          </div>
        </div>
      </section>

      {/* THE STORY — SON 1: NJ INTERFAITH WEDDING */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--cv-accent)" }}>
            Son&apos;s Wedding — The COVID Pivot Story
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            How I learned to coordinate a 4-day interfaith wedding
          </h2>

          <div className="prose prose-lg max-w-none text-[#4d403a] leading-relaxed space-y-5">
            <p>
              My son was originally going to get married in Mexico. He used ShaadiDestination to arrange that —
              booked the venue, made the deposits, sent the save-the-dates. Then COVID hit. Mexico closed. The
              wedding had to be canceled.
            </p>
            <p>
              He decided he still wanted to marry on the same dates. So we did it in New Jersey instead — and I
              coordinated the whole thing myself. We are Hindu, and his wife is South Indian Christian, so we
              pulled together a 4-day event that honored both traditions. I found the venue. I found the caterer.
              I found the decorators. I found the makeup, hair, and mehndi artists. I found the priest for the Hindu
              ceremony and the church for the Christian ceremony.
            </p>
            <p>
              It was the hardest thing I&apos;ve ever done — and it taught me everything I now use to help other
              families. The vendors I used, the timeline I built, the mistakes I avoided the second time around
              (my other son&apos;s wedding in Mexico at the Hard Rock Cafe, also a 4-day event) — all of that is
              what I bring to your wedding.
            </p>
            <p>
              I&apos;m not a resort wedding-package salesperson. I&apos;m a mother who&apos;s done this twice —
              once in New Jersey and once in Mexico — and now helps other families do it without the stress I went
              through.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY — REPLACED WITH SERVICE IMAGES (no personal photos) */}
      <section className="py-16 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            What We Coordinate
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Hindu ceremony, Christian ceremony, and everything in between
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            Four days. Hindu and Christian ceremonies. Coordinated outfits for bride, groom, full bridal party,
            and family across all events. Live video shopping for outfits, family inspection before shipping,
            and on-site coordination in Mexico.
          </p>

          {/* Featured large photos — couple portraits */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/sourcing/couple-portrait.webp"
                alt="Indian wedding couple in red lehenga and cream sherwani at sunset — the kind of coordinated look we source and deliver"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/sourcing/couple-mandap.webp"
                alt="Indian wedding couple under decorated mandap with floral garlands — ceremony coordination"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Grid of product/outfit photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/sourcing/bride-traditional.webp", alt: "Bride in embroidered traditional outfit with floral decor" },
              { src: "/images/sourcing/bridesmaid-green.webp", alt: "Coordinated green bridesmaid outfit — matching palette for wedding party" },
              { src: "/images/sourcing/groomsmen-lavender.webp", alt: "Groomsmen in matching lavender outfits with pink turbans" },
              { src: "/images/sourcing/bridal-jewelry.webp", alt: "Bridal jewelry set — choker, earrings, maang tikka with pearls and gemstones" },
              { src: "/images/sourcing/kanchipuram-saree.webp", alt: "Pure silk Kanchipuram saree in red and gold with brass lamps" },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SON 2 — MEXICO HARD ROCK WEDDING */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--cv-accent)" }}>
            My Other Son&apos;s Wedding — Mexico at Hard Rock Cafe
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The Mexico wedding I coordinated after the New Jersey pivot
          </h2>

          <div className="prose prose-lg max-w-none text-[#4d403a] leading-relaxed space-y-5">
            <p>
              My other son got married in Mexico at the Hard Rock Cafe — also a 4-day event. By then I had
              learned everything from coordinating the New Jersey wedding, and the Mexico coordination was
              smoother for it. I knew which vendors to trust, which timelines actually work, which details
              you can&apos;t afford to drop.
            </p>
            <p>
              The vendors I used for the Mexico wedding — the planner, the DJ, the photographers, the decorator,
              the beauty team — are the vendors I now connect you with. They&apos;re not names from a directory.
              They&apos;re people I trusted with my own son&apos;s wedding, and they delivered.
            </p>
          </div>

          {/* Sourcing shop photo */}
          <div className="mt-8 relative aspect-[3/2] rounded-2xl overflow-hidden">
            <Image
              src="/images/sourcing/lehenga-shop.webp"
              alt="Real lehenga shop in India — person displaying a red bridal skirt with gold embroidery, the kind of direct sourcing we do"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          <p className="text-base text-[#4d403a] text-center mt-3 italic">
            Every detail coordinated — outfits, ceremonial items, decor, welcome bags, and on-site logistics
            across all four days.
          </p>
        </div>
      </section>

      {/* NEPHEW'S MEXICO WEDDING — text only, no personal photos */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--cv-accent)" }}>
            Another Family Mexico Wedding — My Nephew&apos;s
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            More recent Mexico wedding experience
          </h2>
          <div className="text-[#4d403a] leading-relaxed space-y-4 max-w-3xl">
            <p>
              My nephew also got married in Mexico — a 3-day Hindu wedding with 120 guests. More recent
              experience means I&apos;ve stayed current with Mexico venue logistics, vendor availability, and what
              works for Indian ceremonies in Cancun and Riviera Maya. Every family wedding sharpens the
              process I now offer you.
            </p>
            <p>
              For his wedding, we coordinated a Thursday mehndi and haldi, a Friday sangeet with garba, and
              a Saturday wedding ceremony followed by a reception. The decorator I recommended handled the
              mehndi and haldi florals — bright marigolds and tissue pom-poms — while the main ceremony got
              a full mandap with tropical white orchids and red roses. The DJ kept the sangeet going until
              2 AM with a mix of garba, Bollywood classics, and chart toppers that had both families dancing.
            </p>
            <p>
              Three family Mexico weddings — son #1&apos;s New Jersey COVID pivot, son #2&apos;s Hard Rock Cafe
              wedding, and my nephew&apos;s 3-day Hindu celebration. Same vetted vendors, same tested process.
              The difference between my first wedding and my third was night and day — and that&apos;s the
              experience curve you benefit from. Your wedding could be next.
            </p>
          </div>
        </div>
      </section>

      {/* SAMPLE 4-DAY TIMELINE */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            What Your 4 Days Actually Look Like
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Sample 4-Day Indian Wedding Timeline in Mexico
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-3xl mx-auto">
            Based on my own three family Mexico weddings, here is what a typical 4-day Indian destination
            wedding in Cancun or Riviera Maya looks like. Your actual schedule will be customized to your
            traditions and guest count.
          </p>

          <div className="space-y-6">
            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-base font-semibold" style={{ color: "var(--cv-accent)" }}>Day 1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Mehndi &amp; Haldi</h3>
                  <p className="text-sm text-[#4d403a]">Afternoon arrival + evening ceremonies</p>
                </div>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                Guests arrive at the resort. Afternoon welcome bags are distributed to rooms. Evening mehndi
                for the bride and close family — our vetted mehndi artist handles intricate bridal designs
                while a second artist covers the bridal party and guests. Haldi ceremony follows with bright
                yellow and marigold decor. The budget-friendly decorator handles this event — bright, festive,
                and affordable so you save the decor budget for the main ceremony. Light snacks and drinks.
                Most couples wear simple outfits: the bride in a yellow salwar set, groom in a white kurta.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-base font-semibold" style={{ color: "var(--cv-accent)" }}>Day 2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Sangeet &amp; Garba Night</h3>
                  <p className="text-sm text-[#4d403a]">The party night — this is where the DJ earns his fee</p>
                </div>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                This is the event everyone remembers. Our vetted DJ — the same one who killed it at my son&apos;s
                sangeet — handles the music: garba to open, Bollywood classics in the middle, and fusion
                or Western hits to close. The dance floor should be full from 8 PM to 2 AM. Bride wears a
                lighter lehenga or sharara set — this is the outfit that photographs well in motion. Groom
                wears an Indo-Western suit or silk kurta set. Jhumka party favors on the tables. If you&apos;re
                combining Hindu and Christian traditions, this is also a good night for a rehearsal dinner
                with the Christian side of the family.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-base font-semibold" style={{ color: "var(--cv-accent)" }}>Day 3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Wedding Ceremony &amp; Reception</h3>
                  <p className="text-sm text-[#4d403a]">The main event — mandap, vows, and celebration</p>
                </div>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                The big day. Morning starts with bridal makeup — our American HD makeup artist handles the
                main look (holds up in Mexico heat and photographs beautifully). The Hindu ceremony takes
                place under a mandap built by our professional decorator with tropical flowers. The priest
                we connect you with travels to your resort and performs the full ceremony. For interfaith
                couples, the Christian ceremony follows — either at the resort chapel or a nearby church we
                have a relationship with. Evening reception with full catering, first dance, speeches, and
                the DJ again. Bride wears the bridal lehenga you sourced through our India service. Groom
                wears the sherwani. This is the day your photographer delivers the images you&apos;ll frame.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e6dfd5]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f0e6dd" }}>
                  <span className="text-base font-semibold" style={{ color: "var(--cv-accent)" }}>Day 4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "#1f1f1f" }}>Farewell Brunch &amp; Departure</h3>
                  <p className="text-sm text-[#4d403a]">Relaxed send-off with both families</p>
                </div>
              </div>
              <p className="text-[#4d403a] leading-relaxed">
                A relaxed farewell brunch for guests before departures. Some families add a small puja or
                vidai ceremony in the morning. This is also when group photos from the entire wedding get
                shared and the photographer delivers same-day sneak peeks. For interfaith families, this
                is often the most relaxed moment of the entire weekend — both families eating breakfast
                together after 4 days of coordinated events. We handle the final vendor wrap-up, tip
                coordination, and any last-minute logistics so you can just enjoy the morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VENDOR NETWORK DETAIL */}
      <section className="py-20 px-6" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "#7a6841" }}>
            The Vetted Vendor Network
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Every vendor tested at my own son&apos;s wedding
          </h2>
          <p className="text-center text-[#e8dfd2] mb-12 max-w-2xl mx-auto">
            I&apos;m not going to share specific vendor names publicly — these are my personal relationships, and
            that&apos;s the value I bring. But here&apos;s exactly what each vendor does and why I use them.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Mexico Planner</h3>
              <p className="text-base text-white/90 leading-relaxed">
                Professional, boots on the ground in Cancun and Riviera Maya. This is the person who makes sure
                your venue permits are in order, your vendors show up on time, and your guests have what they need.
                Not a resort wedding-package salesperson — an independent planner who works for you, not the resort.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>DJ</h3>
              <p className="text-base text-white/90 leading-relaxed">
                Professional, wedding-seasoned. Killed it at my son&apos;s sangeet. Bollywood, bhangra, fusion, and
                Western sets — this is not the generic resort DJ who doesn&apos;t know the difference between garba
                and bhangra. He reads the room and keeps the dance floor full.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Photographer #1 — Main Day</h3>
              <p className="text-base text-white/90 leading-relaxed">
                Professional, wedding-seasoned. Use this photographer for the main wedding day — ceremony, portraits,
                reception. They know Indian weddings, they know the light in Cancun and Riviera Maya, and they
                deliver on time.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Photographer #2 — Mehndi/Haldi/Sangeet</h3>
              <p className="text-base text-white/90 leading-relaxed">
                Newer, family and portrait-focused. Use this photographer for mehndi, haldi, sangeet — the smaller
                events where you don&apos;t need the wedding-day-level coverage. Saves budget for the main day.
                Smart allocation.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Decorator — Mehndi &amp; Haldi</h3>
              <p className="text-base text-white/90 leading-relaxed">
                Newer, does birthdays, showers, and engagements. Use for mehndi and haldi decor — bright, colorful,
                festive, and affordable. Saves your main decor budget for the wedding ceremony mandap and reception
                florals, which is where you want to spend.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Beauty — Indian Parlor + American HD</h3>
              <p className="text-base text-white/90 leading-relaxed">
                Two options. Indian parlor for traditional looks — some brides prefer this for the Hindu ceremony.
                American HD makeup artist based in Mexico — best in Mexico, and honestly, most brides want this for
                the main day because HD makeup holds up in the heat and photographs beautifully. I&apos;ll help you
                decide which to use for which event.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-3" style={{ color: "#c5a059" }}>Bonus: Welcome Bags &amp; Party Favors</h3>
            <p className="text-base text-white/90 leading-relaxed">
              For my son&apos;s wedding, I sourced custom canvas welcome bags from China and jhumka party favors for
              the garba night. I can do the same for your wedding — welcome bags, favors, and small details that
              make a destination wedding feel personal. Sourced direct, no resort markup.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Mistakes We Help You Avoid
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            What goes wrong at Indian destination weddings in Mexico
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            I&apos;ve made these mistakes myself or seen them happen at other weddings. Here&apos;s what our coordination
            prevents — so you don&apos;t have to learn the hard way.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#1f1f1f" }}>Booking a resort that hasn&apos;t hosted Indian weddings before</h3>
              <p className="text-[#4d403a] leading-relaxed">
                The #1 mistake. A resort that has never done a 4-day Indian wedding won&apos;t understand why you
                need a mandap, why the sangeet needs its own space, or why Indian catering requires a
                different kitchen setup. We help you pick resorts that have done it before — and can connect
                you with the right planner who has those venue relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#1f1f1f" }}>Using the resort&apos;s DJ instead of a wedding-seasoned professional</h3>
              <p className="text-[#4d403a] leading-relaxed">
                The resort DJ doesn&apos;t know the difference between garba and bhangra, can&apos;t mix Bollywood with
                Western transitions, and won&apos;t read the room the way a professional wedding DJ does. At my
                son&apos;s sangeet, our DJ had 150 people on the dance floor — including relatives who &quot;don&apos;t
                dance.&quot; That&apos;s the difference.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#1f1f1f" }}>Paying resort markup on every vendor</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Resort wedding packages bundle vendors — and charge 30-50% more than independent vendors.
                Our vendor network is independent, vetted at my own son&apos;s wedding, and priced directly.
                You choose what you want for each event without the resort markup.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#e6dfd5]">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#1f1f1f" }}>Not coordinating outfit delivery timelines with the wedding date</h3>
              <p className="text-[#4d403a] leading-relaxed">
                We see brides who order outfits from India at the last minute and get stressed about delivery.
                When you combine our Mexico coordination with outfit sourcing, we manage both timelines
                together — your lehenga arrives weeks before your flight to Mexico, with time for pressing
                and any final adjustments. One team, one timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section id="pricing" className="py-20 px-6">
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

          <p className="text-center text-base text-[#4d403a] mt-4 mb-2">
            Read the full story of how I sourced every outfit for my son&apos;s 4-day Mexico wedding{" "}
            <Link href="/blog/how-i-sourced-my-sons-mexico-wedding-outfits-from-surat/" className="underline" style={{ color: "var(--cv-accent)" }}>
              from Surat and Delhi →
            </Link>
          </p>
          <p className="text-center text-base text-[#4d403a] mt-2">
            Custom pricing for interfaith weddings, non-standard duration, or guest counts above 200.{" "}
            <Link href="/pricing" className="underline" style={{ color: "var(--cv-accent)" }}>See full pricing details</Link>.
          </p>
          <p className="text-center text-base text-[#4d403a] mt-4">
            Planning to source your Indian wedding outfits too?{" "}
            <Link href="/services" className="underline" style={{ color: "var(--cv-accent)" }}>
              See our outfit sourcing services from Surat &amp; Delhi
            </Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Mexico Coordination FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Questions about Mexico coordination
          </h2>

          <div className="space-y-6">
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
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>What areas in Mexico do you coordinate weddings in?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Cancun and Riviera Maya. This is where my son&apos;s wedding was held, where my vendor network is
                based, and where the majority of Indian destination weddings in Mexico happen. If you&apos;re
                considering Los Cabos or Puerto Vallarta, we can discuss — but our vetted network is Cancun and
                Riviera Maya.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Can you also source our outfits from India for our Mexico wedding?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Yes — this is a popular combination. We source your outfits from Surat and Delhi via live video
                shopping, and coordinate your Mexico event with our vetted vendors. One team, one point of contact.
                Many brides want both, and it&apos;s seamless when handled together.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How is this different from a resort wedding package?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Resort packages bundle venue, catering, and decor into one price — but they lock you into the
                resort&apos;s vendors and charge a premium for Indian-specific needs (mandap, Indian catering, sangeet
                setup, haldi/mehndi spaces). We work with independent vetted vendors, so you choose exactly what you
                want for each event. You also get our family&apos;s outfit sourcing at direct pricing, which resorts
                don&apos;t offer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>Do you handle the venue and caterer too, or just the vendors?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                For full 4-day coordination, we handle everything — venue sourcing, caterer, decorator, makeup,
                hair, mehndi, priest, church, welcome bags, and on-site coordination throughout. For vendor network
                access only, you get the contacts and take it from there. Day-of coordination is single-event
                on-site. See pricing for the full breakdown.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>What does a typical 4-day Indian wedding in Mexico actually look like?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                Day 1 is mehndi and haldi (afternoon arrival, evening ceremonies with bright decor). Day 2 is the
                sangeet and garba night — the big party with our professional DJ. Day 3 is the wedding ceremony
                under a mandap (Hindu) and/or a church ceremony (Christian), followed by the evening reception.
                Day 4 is a farewell brunch and departure. Each event has its own venue space, its own decorator
                style, and its own vibe. We coordinate all of it — the timeline, vendor logistics, and
                day-of management so you don&apos;t have to.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1f1f1f" }}>How far in advance should we book?</h3>
              <p className="text-[#4d403a] leading-relaxed">
                For Mexico coordination, 9-12 months before your wedding date. Top resorts in Cancun and Riviera
                Maya book 12-18 months out for weekend dates, especially November through April. If you&apos;re also
                sourcing outfits from India, factor in 8-12 weeks for custom stitching. The earlier you start,
                the more options you have. That said — contact us even if your timeline is shorter. We&apos;ll tell
                you honestly what&apos;s achievable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Let&apos;s talk about your Mexico wedding
          </h2>
          <p className="text-[#e8dfd2] mb-8 leading-relaxed">
            Book a free 30-minute consultation. Tell me your vision, your dates, and your budget. I&apos;ll tell
            you honestly what I can do — vendor access, day-of coordination, full 4-day coordination, or all of
            the above plus outfit sourcing from India.
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
              href="/pricing"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              See Full Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
