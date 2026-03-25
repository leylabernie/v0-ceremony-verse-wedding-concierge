"use client"

type PageType =
  | "home"
  | "services"
  | "journey"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"
  | "bridal"
  | "groom"
  | "blog"
  | "bridesmaids"
  | "groomsmen"
  | "family"
  | "jewelry"
  | "ceremonial"
  | "gifts"
  | "welcomebags"
  | "pets"

interface HomePageProps {
  onNavigate?: (page: PageType) => void
}


const testimonials = [
  {
    names: "Kaval & April",
    quote:
      "We had no idea where to start. CeremonyVerse took us from completely lost to fully dressed — every single person in our wedding party. The live video sessions made it feel like we were right there in the market.",
    detail: "Full wedding party — 14 outfits sourced",
  },
  {
    names: "Karan & Sonal",
    quote:
      "I was terrified of getting scammed ordering from India online. Having someone physically inspect the outfits before they shipped gave us so much peace of mind. The lehenga was even more beautiful in person.",
    detail: "Bridal lehenga + groom sherwani",
  },
  {
    names: "Charlie & Viola",
    quote:
      "As a non-South Asian groom, I had no frame of reference for any of this. The team walked me through every decision patiently and the sherwani fit perfectly. Our families were blown away.",
    detail: "Intercultural wedding — full family coordination",
  },
  {
    names: "Dhan & Christina",
    quote:
      "Coordinating bridesmaid outfits for 8 girls across three states felt impossible. CeremonyVerse handled every measurement, every follow-up, and every delivery. Flawless.",
    detail: "8 bridesmaid outfits + bridal look",
  },
  {
    names: "Shincy",
    quote:
      "I was planning my wedding from the US while my family was in Kerala. CeremonyVerse bridged that gap completely — they sourced outfits my mom would have chosen herself, and she approves of everything.",
    detail: "Full bridal + family package",
  },
  {
    names: "Swati",
    quote:
      "The pricing transparency alone was worth everything. I knew exactly what I was paying for at every stage. No surprises, no markups, no stress. I'd recommend CeremonyVerse to every NRI bride.",
    detail: "Bridal lehenga + 6 family outfits",
  },
]

const pricingTiers = [
  {
    name: "Style Guide & Vendor List",
    price: "From $149",
    desc: "For the self-directed bride who just needs a curated starting point.",
    features: [
      "Personalized outfit style guide",
      "Curated list of 3–5 vetted artisan workshops",
      "Budget guidance and style notes",
      "One 30-min consultation call",
    ],
    cta: "Get Started",
  },
  {
    name: "Guided Sourcing",
    price: "From $599",
    desc: "Live sourcing sessions so you can see and approve every piece before it ships.",
    features: [
      "Everything in Style Guide tier",
      "2–4 live video shopping sessions",
      "Fabric & embroidery quality checks",
      "Color accuracy confirmation",
      "Pre-shipping inspection",
    ],
    cta: "Book Consultation",
    featured: true,
  },
  {
    name: "Full Bridal Concierge",
    price: "From $1,499",
    desc: "We handle everything — from first inspiration to your door.",
    features: [
      "Everything in Guided Sourcing tier",
      "Full wedding party coordination",
      "Custom design sourcing",
      "Measurement management for all members",
      "End-to-end shipping & delivery support",
      "Dedicated sourcing manager",
    ],
    cta: "Apply Now",
  },
]

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="">
      {/* HERO */}
      <section className="pb-20 px-6 text-center">
        <p className="tracking-[0.15em] text-xs md:text-sm font-medium text-[#8a6f63] mb-6 uppercase">
          Indian Wedding Outfits, Sourced from India
        </p>

        <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold leading-[1.1] tracking-[-0.01em] mb-6 text-[#1f1f1f]">
          Your family, dressed
          <br />
          for every ceremony.
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl font-medium leading-relaxed text-[#5a4a42]">
          We help US-based families find authentic Indian wedding outfits — sourced directly from India, with live video shopping, quality checks, and delivered to your door.
        </p>

        <p className="mt-4 max-w-xl mx-auto text-base md:text-lg font-normal leading-relaxed text-[#6a5c55]">
          From the bride's lehenga to the whole family — every outfit, every ceremony, taken care of.
        </p>

        {/* Social proof bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-[#8a6f63]">
          <span className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-[#1f1f1f]">100+</span>
            US families served
          </span>
          <span className="w-px h-6 bg-[#e6dfd5] hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-[#1f1f1f]">15–20</span>
            trusted artisan workshops
          </span>
          <span className="w-px h-6 bg-[#e6dfd5] hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-[#1f1f1f]">99%</span>
            first-time fit rate
          </span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate?.("contact")}
            className="inline-flex items-center justify-center bg-[#c7b28a] text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Book Free Consultation
          </button>

          <button
            type="button"
            onClick={() => onNavigate?.("journey")}
            className="inline-flex items-center justify-center border border-[#1f1f1f] text-[#1f1f1f] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1f1f1f] hover:text-white transition"
          >
            How It Works
          </button>
        </div>

        <p className="mt-4 text-xs text-[#8a6f63]">
          Top vendors book 6–12 months in advance — start early.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 pb-4">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-lehenga.jpg"
            alt="Red and gold bridal lehenga with intricate zardozi embroidery, sourced from India for US families"
            width={1440}
            height={480}
            style={{ width: "100%", height: "auto", maxHeight: "520px", objectFit: "cover", display: "block" }}
          />
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-16 px-6 bg-[#f9f6f3]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="tracking-[0.15em] text-xs font-medium text-[#8a6f63] mb-4 uppercase">
            Why CeremonyVerse Exists
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-6">
            Built from a real family need
          </h2>
          <p className="text-lg md:text-xl font-medium text-[#5a4a42] mb-6">
            I didn't start CeremonyVerse as a business. I started it because of my own family.
          </p>
          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            Between multiple family weddings and helping friends navigate the chaos of Indian bridal shopping from the US, I saw the same story repeat itself: families spending thousands, getting burned by scammers, or just giving up and settling for whatever an American boutique had in stock.
          </p>
          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            I knew there was a better way. I built direct relationships with 15–20 trusted artisan workshops across India. I learned how to do live video verification, how to handle international shipping, how to coordinate sizing for 10+ family members across multiple states.
          </p>
          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed font-medium">
            CeremonyVerse is that knowledge, turned into a service. — <em>Bhamini, Founder</em>
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          {[
            {
              title: "Message Us",
              desc: "Reach out via WhatsApp or our booking form. Tell us about your events, party size, and budget range.",
            },
            {
              title: "Share Inspiration",
              desc: "Send us your Pinterest boards, Instagram saves, or references. We'll match styles to verified designers in India.",
            },
            {
              title: "Live Video Shopping",
              desc: "Join a live video session to see outfits, fabrics, and embroidery in real time — before committing to anything.",
            },
            {
              title: "Delivered to You",
              desc: "Your outfits are quality-checked, carefully packaged, and shipped directly to your door in the US.",
            },
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-xs tracking-widest text-[#c7b28a] font-medium mb-3 uppercase">
                Step {i + 1}
              </p>
              <p className="font-semibold text-[#1f1f1f] mb-2">
                {step.title}
              </p>
              <p className="text-sm text-[#6a5c55]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onNavigate?.("journey")}
          className="mt-8 inline-flex items-center justify-center border border-[#1f1f1f] text-[#1f1f1f] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1f1f1f] hover:text-white transition"
        >
          See Full Process →
        </button>
      </section>

      {/* WHAT WE SOURCE — compact teaser, links to Services page */}
      <section className="py-16 px-6 bg-[#f9f6f3]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#8a6f63" }}>Everything Covered</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-4">We Source It All</h2>
          <p className="text-[#6a5c55] mb-10 max-w-xl mx-auto">
            From the bride's lehenga to the groom's sherwani, bridesmaid coordination, family outfits, jewelry, ceremonial items, gifts, welcome bags — and yes, even pet outfits.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Bridal Lehengas", "Groom Sherwanis", "Bridesmaid Outfits", "Groomsmen Attire",
              "Family Outfits", "Jewelry & Accessories", "Ceremonial Items", "Wedding Gifts",
              "Welcome Bags", "Pet Outfits 🐾"
            ].map((label) => (
              <span key={label} className="px-4 py-2 bg-white border border-[#e6dfd5] rounded-full text-sm text-[#2f2f2f] font-medium">
                {label}
              </span>
            ))}
          </div>
          <button
            onClick={() => onNavigate?.("services")}
            className="btn-primary"
          >
            See All Services
          </button>
        </div>
      </section>

      {/* TRUST SIGNALS STRIP */}
      <section className="py-12 px-6" style={{ background: "#fff", borderTop: "1px solid #e6dfd5", borderBottom: "1px solid #e6dfd5" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "#8a6f63" }}>
            Why Families Trust CeremonyVerse
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🎥", stat: "Live Video", sub: "See before you buy" },
              { icon: "✅", stat: "Quality Checked", sub: "Inspected before shipping" },
              { icon: "🇮🇳", stat: "Direct from India", sub: "No middlemen, no markups" },
              { icon: "🤝", stat: "100+ Families", sub: "Served across the US" },
            ].map((t, i) => (
              <div key={i}>
                <div style={{ fontSize: "1.75rem", marginBottom: "6px" }}>{t.icon}</div>
                <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "#1f1f1f", marginBottom: "2px" }}>{t.stat}</p>
                <p style={{ fontSize: "0.75rem", color: "#8a6f63" }}>{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="tracking-[0.15em] text-xs font-medium text-[#8a6f63] mb-4 uppercase text-center">
            Transparent Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-4 text-center">
            Choose Your Level of Support
          </h2>
          <p className="text-center text-[#6a5c55] mb-8 max-w-xl mx-auto">
            Every tier includes direct access to our vetted sourcing network in India. No hidden markups — just our sourcing fee, clearly itemized.
          </p>

          {/* FREE TIER HIGHLIGHT */}
          <div className="max-w-2xl mx-auto mb-10 rounded-2xl border border-[#c7b28a] bg-[#faf8f4] p-6 text-center">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#c7b28a] mb-2">Always Free</span>
            <h3 className="text-xl font-semibold text-[#1f1f1f] mb-2">Free Consultation — No Commitment</h3>
            <p className="text-sm text-[#6a5c55] mb-4">
              Not sure where to start? Book a free 30-minute call. We'll review your vision, timeline, and budget — and recommend exactly what level of support you need.
            </p>
            <button
              type="button"
              onClick={() => onNavigate?.("contact")}
              className="inline-flex items-center justify-center bg-[#c7b28a] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Book Free Consultation →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.featured
                    ? "bg-[#1f1f1f] text-white border-2 border-[#c7b28a] relative"
                    : "bg-white border border-[#e6dfd5]"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c7b28a] text-white text-xs font-medium px-4 py-1 rounded-full tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                <p className={`text-sm font-medium tracking-wide mb-1 ${tier.featured ? "text-[#c7b28a]" : "text-[#8a6f63]"}`}>
                  {tier.name}
                </p>
                <p className={`text-3xl font-semibold mb-3 ${tier.featured ? "text-white" : "text-[#1f1f1f]"}`}>
                  {tier.price}
                </p>
                <p className={`text-sm mb-6 leading-relaxed ${tier.featured ? "text-white/70" : "text-[#6a5c55]"}`}>
                  {tier.desc}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className={`text-sm flex items-start gap-2 ${tier.featured ? "text-white/80" : "text-[#6a5c55]"}`}>
                      <span className="text-[#c7b28a] mt-0.5">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onNavigate?.("contact")}
                  className={`w-full py-3 rounded-full text-sm font-medium transition ${
                    tier.featured
                      ? "bg-[#c7b28a] text-white hover:opacity-90"
                      : "border border-[#1f1f1f] text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#8a6f63] mt-6">
            All tiers include itemized quotes showing outfit cost, sourcing fee, shipping, and customs. Most clients save 30–50% vs. US boutiques.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-[#f9f6f3]">
        <div className="max-w-6xl mx-auto">
          <p className="tracking-[0.15em] text-xs font-medium text-[#8a6f63] mb-4 uppercase text-center">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-12 text-center">
            Families Who Trusted Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 flex flex-col shadow-sm">
                <p className="text-[#c7b28a] text-2xl mb-4 leading-none">"</p>
                <p className="text-[#5a4a42] text-base leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-[#e6dfd5] pt-4">
                  <p className="font-semibold text-[#1f1f1f]">{t.names}</p>
                  <p className="text-xs text-[#8a6f63] mt-1">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM SOCIAL STRIP */}
      <section className="py-16 px-6" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--cv-accent)" }}>
            Follow the Journey
          </p>
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#1f1f1f" }}>
            @ceremonyverse on Instagram
          </h2>
          <p className="text-[#6a5c55] mb-6 text-sm">
            Behind-the-scenes sourcing, real client outfits, and wedding inspiration direct from India.
          </p>
          <a
            href="https://www.instagram.com/ceremonyverse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition"
            style={{ background: "#1f1f1f", color: "#fff" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @ceremonyverse
          </a>
          <p className="text-xs text-[#8a6f63] mt-4">
            ⭐ Tag us on your wedding day for a feature
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-4">
            Ready to start sourcing?
          </h2>
          <p className="text-[#6a5c55] mb-2">
            Book a free 30-minute consultation. We'll review your vision, timeline, and budget — no commitment required.
          </p>
          <p className="text-sm text-[#8a6f63] mb-8">
            Top vendors book 6–12 months in advance. If your wedding is within the year, don't wait.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate?.("contact")}
              className="inline-flex items-center justify-center bg-[#c7b28a] text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Book Free Consultation
            </button>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I'm%20interested%20in%20wedding%20sourcing%20services%20from%20CeremonyVerse."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#25D366] text-[#25D366] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#25D366] hover:text-white transition gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
