import Image from "next/image"
import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/indian-wedding-coordination-mexico/",
  title: "Indian Wedding Coordination in Mexico — Cancun & Riviera Maya | CeremonyVerse",
  description: "I coordinated my own son's 4-day Indian wedding in Mexico. Vetted vendors — planner, DJ, photographers, decorator, beauty — plus full multi-day coordination in Cancun and Riviera Maya. Interfaith ceremonies welcome.",
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
]);

export default function MexicoCoordinationPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

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
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#d4c8b8" }}>
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

      {/* PHOTO GALLERY — SON 1 NJ WEDDING */}
      <section className="py-16 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Real Photos — Son&apos;s 4-Day Hindu &amp; Christian Wedding in New Jersey
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Hindu ceremony, Christian ceremony, and everything in between
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            These are real photos from my son&apos;s wedding — the same coordination I now offer your family.
            Four days. Hindu and Christian ceremonies. Coordinated outfits for bride, groom, full bridal party,
            and family across all events.
          </p>

          {/* Featured large photo — high-quality portraits */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/son-weddings/son-wedding-nj-bride-groom.webp"
                alt="Bhamini's son's wedding — bride in red and gold lehenga with groom in white sherwani and turban, floral garlands, Hindu ceremony"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/son-weddings/son-wedding-nj-family.webp"
                alt="Family portrait from the wedding — man in white sherwani with turban, woman in pink and green saree, child in matching attire"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Grid of more photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/son-weddings/son-wedding-02.webp", alt: "Hindu ceremony — bride in red lehenga with groom in sherwani" },
              { src: "/images/son-weddings/son-wedding-03.webp", alt: "Christian ceremony in church — bride in white gown" },
              { src: "/images/son-weddings/son-wedding-05.webp", alt: "Hindu wedding ceremony rituals" },
              { src: "/images/son-weddings/son-wedding-06.webp", alt: "Bridal party in coordinated Indian wedding attire" },
              { src: "/images/son-weddings/son-wedding-07.webp", alt: "Couple in traditional Hindu wedding attire outdoors" },
              { src: "/images/son-weddings/son-wedding-08.webp", alt: "Christian ceremony — bride in white gown" },
              { src: "/images/son-weddings/son-wedding-09.webp", alt: "Bridal party combining Hindu and Christian ceremony elements" },
              { src: "/images/son-weddings/son-wedding-10.webp", alt: "Couple portraits — bride in white gown with Hindu hair accessory" },
              { src: "/images/son-weddings/son-wedding-11.webp", alt: "Bride in red and gold lehenga with bridesmaids in navy blue" },
              { src: "/images/son-weddings/son-wedding-12.webp", alt: "Bridal party — pink Indian attire and bride in white gown" },
              { src: "/images/son-weddings/son-wedding-13.webp", alt: "Full bridal party in coordinated Indian wedding attire" },
              { src: "/images/son-weddings/son-wedding-14.webp", alt: "Bridesmaids in traditional Indian attire with bride in white gown" },
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

          {/* Real Mexico wedding photo */}
          <div className="mt-8 relative aspect-[3/2] rounded-2xl overflow-hidden">
            <Image
              src="/images/son-weddings/son-wedding-mexico-baarat.webp"
              alt="Bhamini's son's Mexico wedding at the Hard Rock Cafe — baarat procession with groom in white sherwani and turban, family in coordinated Indian wedding attire, palm trees and resort setting in Cancun"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-[#6f6a63] text-center mt-3 italic">
            Real photo from my son&apos;s 4-day Mexico wedding at the Hard Rock Cafe — baarat procession outdoors
            with the resort&apos;s palm trees in the background.
          </p>
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
          <p className="text-center text-[#d4c8b8] mb-12 max-w-2xl mx-auto">
            I&apos;m not going to share specific vendor names publicly — these are my personal relationships, and
            that&apos;s the value I bring. But here&apos;s exactly what each vendor does and why I use them.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Mexico Planner</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Professional, boots on the ground in Cancun and Riviera Maya. This is the person who makes sure
                your venue permits are in order, your vendors show up on time, and your guests have what they need.
                Not a resort wedding-package salesperson — an independent planner who works for you, not the resort.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>DJ</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Professional, wedding-seasoned. Killed it at my son&apos;s sangeet. Bollywood, bhangra, fusion, and
                Western sets — this is not the generic resort DJ who doesn&apos;t know the difference between garba
                and bhangra. He reads the room and keeps the dance floor full.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Photographer #1 — Main Day</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Professional, wedding-seasoned. Use this photographer for the main wedding day — ceremony, portraits,
                reception. They know Indian weddings, they know the light in Cancun and Riviera Maya, and they
                deliver on time.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Photographer #2 — Mehndi/Haldi/Sangeet</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Newer, family and portrait-focused. Use this photographer for mehndi, haldi, sangeet — the smaller
                events where you don&apos;t need the wedding-day-level coverage. Saves budget for the main day.
                Smart allocation.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Decorator — Mehndi &amp; Haldi</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Newer, does birthdays, showers, and engagements. Use for mehndi and haldi decor — bright, colorful,
                festive, and affordable. Saves your main decor budget for the wedding ceremony mandap and reception
                florals, which is where you want to spend.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Beauty — Indian Parlor + American HD</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Two options. Indian parlor for traditional looks — some brides prefer this for the Hindu ceremony.
                American HD makeup artist based in Mexico — best in Mexico, and honestly, most brides want this for
                the main day because HD makeup holds up in the heat and photographs beautifully. I&apos;ll help you
                decide which to use for which event.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-3" style={{ color: "#c5a059" }}>Bonus: Welcome Bags &amp; Party Favors</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              For my son&apos;s wedding, I sourced custom canvas welcome bags from China and jhumka party favors for
              the garba night. I can do the same for your wedding — welcome bags, favors, and small details that
              make a destination wedding feel personal. Sourced direct, no resort markup.
            </p>
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Let&apos;s talk about your Mexico wedding
          </h2>
          <p className="text-[#d4c8b8] mb-8 leading-relaxed">
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
