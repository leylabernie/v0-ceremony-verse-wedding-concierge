"use client"

import React from "react"

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
    initials: "KA",
    photo: "",
    color: "#c7b28a",
    location: "Philadelphia, PA",
    quote:
      "We had no idea where to start with a 4-day Gujarati and South Indian Christian wedding. CeremonyVerse dressed everyone — including a special trip to Kanchipuram for pure silk sarees. Bridal lehenga, reception lehenga, 14 bridesmaids, 14 groomsmen, full family, ceremonial items, return gifts, sweets, welcome bags, and even our dog. Extraordinary service.",
    detail: "4-day Gujarati & South Indian Christian wedding · Kanchipuram silk sarees · 14 bridesmaids & groomsmen · bridal + reception lehenga · family · pet · gifts · welcome bags",
  },
  {
    names: "Karan & Sonal",
    initials: "KS",
    photo: "/images/testimonial-karan-sonal.jpg",
    color: "#b09872",
    location: "Destination Wedding, Mexico",
    quote:
      "Planning a 4-day Gujarati destination wedding in Mexico with coordinated outfits for the bride, groom, full bridal party, and entire family for each day felt impossible. CeremonyVerse handled every single detail — including our two dogs, ceremonial items, return gifts, sweets, and welcome bags. Flawless from start to finish.",
    detail: "4-day Gujarati destination wedding, Mexico · full bridal party + family outfits per day · 2 dogs · ceremonial items · gifts · welcome bags",
  },
  {
    names: "Charly & Viola",
    initials: "CV",
    photo: "/images/testimonial-charlie-viola.jpg",
    color: "#8a7060",
    location: "Philadelphia, PA",
    quote:
      "We are both South Indian Christians and wanted outfits that truly reflected our heritage. CeremonyVerse sourced the bridesmaids outfits and Charly's outfit beautifully — every decision made with care. Our families were blown away.",
    detail: "South Indian Christian wedding · Philadelphia · bridesmaids outfits + groom outfit",
  },
  {
    names: "Dhan & Christina",
    initials: "DC",
    photo: "/images/testimonial-dhan-christina.jpg",
    color: "#c7b28a",
    location: "USA",
    quote:
      "As South Indian Christians, we wanted outfits that honored our heritage beautifully. CeremonyVerse understood exactly what we needed — everything arrived on time, fit perfectly, and looked even better in person than on the video call.",
    detail: "South Indian Christian wedding · bride & groom outfits",
  },
  {
    names: "Shincy",
    initials: "SH",
    photo: "/images/testimonial-shincy.jpg",
    color: "#b09872",
    location: "USA",
    quote:
      "As a South Indian Christian bride, I was having my wedding in India but couldn't find the right outfit from abroad. CeremonyVerse sourced my bridal outfit from Delhi for me — handling everything remotely so I didn't have to stress while planning from the US.",
    detail: "South Indian Christian bride · outfit sourced from Delhi · wedding in India",
  },
  {
    names: "Swati",
    initials: "SW",
    photo: "/images/testimonial-swati.jpg",
    color: "#8a7060",
    location: "USA",
    quote:
      "As a Gujarati girl I had multiple weddings to attend and needed coordinated guest outfits for each one. CeremonyVerse made it easy — great suggestions, perfect fits, no stress. I looked stunning at every event.",
    detail: "Gujarati wedding guest · multiple outfits",
  },
  {
    names: "Shilpa",
    initials: "SP",
    photo: "",
    color: "#c7b28a",
    location: "USA",
    quote:
      "I went to India for my own shopping but knew coordinating 12 bridesmaid outfits remotely would be a nightmare. CeremonyVerse handled all 12 — every measurement, every fitting, every delivery. I didn't have to worry about a single one.",
    detail: "12 bridesmaid outfits sourced while bride shopped in India",
  },
  {
    names: "Druma & Parin",
    initials: "DP",
    photo: "/images/testimonial-druma-parin.jpg",
    color: "#b09872",
    location: "USA",
    quote:
      "For our Gujarati wedding, Bhamini travelled to Kanchipuram specifically to source pure silk sarees — the real thing, not a compromise. She also had our matching outfits custom made by a local boutique to our exact vision. The attention to detail was extraordinary.",
    detail: "Gujarati wedding · Pure Kanchipuram silk sarees + custom matching outfits",
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
      "Fabric sourcing & color matching to your shade",
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div style={{ borderBottom: "1px solid #e6dfd5" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-sm md:text-base" style={{ color: "#1f1f1f" }}>{question}</span>
        <span className="shrink-0 text-lg transition-transform" style={{ color: "#c7b28a", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </button>
      {open && (
        <p className="text-sm leading-relaxed pb-5" style={{ color: "#6a5c55" }}>{answer}</p>
      )}
    </div>
  )
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="">
      {/* HERO — full width image + overlay text */}
      <section style={{ position: "relative", overflow: "hidden", background: "#1a1008" }}>
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-lehenga.jpg"
          alt="Red and gold bridal lehenga with intricate zardozi embroidery sourced from India for NRI bride in USA by CeremonyVerse Indian wedding shopping concierge"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            opacity: 0.72, display: "block",
          }}
        />
        {/* Gradient overlay — left side darker for text readability */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(26,16,8,0.78) 0%, rgba(26,16,8,0.55) 45%, rgba(26,16,8,0.15) 100%)",
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "100px 32px 80px" }}>
          <div style={{ maxWidth: "640px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "20px", fontWeight: 500 }}>
              Risk-Free Indian Wedding Shopping from the US
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 600, lineHeight: 1.12,
              color: "#fff", marginBottom: "24px", letterSpacing: "-0.01em",
            }}>
              The safest way to shop for your Indian wedding from the US — without scams, sizing disasters, or endless vendor chasing.
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: "36px", maxWidth: "520px" }}>
              Authentic bridal lehengas, sherwanis, jewelry, and more — sourced directly from India, verified live on video before shipping, and delivered to your US door. You see exactly what you’re buying. No surprises. No scams. No regrets.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px" }}>
              <button
                type="button"
                onClick={() => onNavigate?.("contact")}
                style={{ background: "#c7b28a", color: "#fff", padding: "13px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, border: "none", cursor: "pointer" }}
              >
                Book Free Consultation
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.("journey")}
                style={{ background: "transparent", color: "#fff", padding: "13px 24px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, border: "1px solid rgba(255,255,255,0.4)", cursor: "pointer" }}
              >
                How It Works
              </button>
              <a
                href="/wedding-outfit-checklist.pdf"
                download="CeremonyVerse-Indian-Wedding-Outfit-Checklist.pdf"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent", color: "rgba(255,255,255,0.6)", padding: "13px 20px", borderRadius: "999px", fontSize: "13px", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Free Checklist
              </a>
            </div>

            {/* Real differentiators */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                "Live video approved before shipping",
                "Custom stitched to your measurements",
                "Vetted artisan partners — no Instagram sellers",
                "US delivery to all 50 states",
              ].map((tag) => (
                <span key={tag} style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", padding: "6px 14px", borderRadius: "999px", border: "1px solid rgba(199,178,138,0.4)", background: "rgba(199,178,138,0.08)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p style={{ position: "relative", zIndex: 2, textAlign: "center", fontSize: "11px", color: "rgba(255,255,255,0.35)", paddingBottom: "18px" }}>
          Top vendors book 6–12 months in advance — start early
        </p>
      </section>

      {/* PAIN POINTS STRIP */}
      <section className="py-14 px-6" style={{ background: "#1f1f1f" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>
            The 5 Biggest Risks When Buying Indian Wedding Outfits from India
          </p>
          <p className="text-center text-[#6a5c55] mb-8 max-w-2xl mx-auto text-sm">
            NRIs aren't afraid of spending money. They're afraid of making expensive, irreversible mistakes. Here's what can go wrong — and how we prevent it.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
                        {[
              {
                problem: "Instagram vs. Reality: Fabric looks completely different",
                solution: "You approve the exact item on live video — actual fabric draped, embroidery up close, color in natural light. That specific piece is reserved with your order number. If anything changes before shipping, we halt it immediately.",
                icon: "🎥",
              },
              {
                problem: "Fake vendors, stolen images, no accountability",
                solution: "We work only with vetted artisan partners we know personally — skilled craftspeople, designers, and fabric specialists. No random Instagram sellers. You see everything live before committing. We have US presence and accountability.",
                icon: "🛡️",
              },
              {
                problem: "Sizing disasters: Blouses misfitted, family chaos",
                solution: "We collect 15+ precise measurements and build in strategic ease allowances. Every piece is custom-stitched to your exact silhouette. We offer a 100% fit guarantee with alteration cost coverage up to $150 per garment.",
                icon: "📏",
              },
              {
                problem: "Logistics anxiety: Customs duties, delays, damage risk",
                solution: "We handle all shipping documentation, advise on customs duties upfront (typically 12-27%), and fully insure every shipment. We have never had an unresolved shipping issue.",
                icon: "📦",
              },
              {
                problem: "Time + cognitive overload: WhatsApp chaos, vendor chasing",
                solution: "We manage all communication, timelines, and vendor coordination. You get milestone-based updates and payment protection (25% deposit, 35% after approval, 30% after inspection, 10% on delivery).",
                icon: "⏱️",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(199,178,138,0.2)" }}>
                <div className="text-2xl mb-4">{item.icon}</div>
                <p className="font-['Cormorant_Garamond'] text-lg font-semibold italic mb-3 leading-snug" style={{ color: "#c7b28a" }}>
                  {item.problem}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
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
            I didn't start CeremonyVerse as a business. I started it because of my own family — and because this is your wedding. You shouldn't have to settle.
          </p>
          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            Between multiple family weddings and helping friends navigate the chaos of Indian bridal shopping from the US, I saw the same story repeat itself: NRI families spending thousands, getting burned by scammers, receiving items that looked nothing like the photos, or just giving up and settling for whatever an American boutique had in stock.
          </p>
          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            I knew there was a better way. I built direct relationships across India — a skilled outfit specialist who sources ready and semi-custom pieces, a local designer and tailor who custom-stitches to your exact measurements, a fabric expert who sources and dyes fabrics to your chosen shade, and a dedicated bridal jewelry supplier. I learned how to do live video verification, how to handle international shipping, how to coordinate sizing for entire families across multiple states.
          </p>
          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed font-medium">
            CeremonyVerse is that knowledge, turned into a service. — <em>Bhamini, Founder</em>
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-14">
          <div>
            <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--cv-accent)" }}>Live From India</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1f1f1f] mb-5">
              You see every item before you buy — live, from India.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#6a5c55" }}>
              This is a real video call with our team in India, showing you actual outfits spread out in front of you. You see the fabric, the embroidery, the weight, the color in natural light — and that exact piece gets reserved with your name. No surprises when it arrives.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e6dfd5" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/live-video-shopping-india.jpg"
              alt="Real bridal lehenga workshop in India — CeremonyVerse live video shopping experience for NRI brides in USA"
              style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-10 text-center">
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
              desc: "Send us your Pinterest boards, Instagram saves, or references. We work with our designer and tailor in India to match or recreate your vision exactly.",
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
            From ready-made outfits to fully custom pieces stitched to your measurements — bridal lehengas, sherwanis, bridesmaid coordination, family outfits, jewelry sourced directly from our supplier, ceremonial items, gifts, welcome bags, and even pet outfits.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Bridal Lehengas", "Groom Sherwanis", "Kanchipuram Silk Sarees", "Bridesmaid Outfits",
              "Groomsmen Attire", "Family Outfits", "Jewelry & Accessories", "Ceremonial Items",
              "Wedding Gifts", "Welcome Bags", "Custom Boutique Outfits", "Pet Outfits 🐾"
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
              { icon: "🎥", stat: "Live Video Approval", sub: "You see every item before it ships" },
              { icon: "✅", stat: "Quality Checked", sub: "Inspected in India before shipping" },
              { icon: "🛡️", stat: "Vetted Partners Only", sub: "No random Instagram sellers" },
              { icon: "📦", stat: "US Delivery", sub: "All 50 states, door to door" },
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
      <section className="py-16 px-6">
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
            All tiers include itemized quotes showing outfit cost, sourcing fee, shipping, and customs — fully transparent, no surprises.
          </p>
        </div>
      </section>

      {/* TRUST ENGINE — How We Verify & Prevent Failures */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="tracking-[0.15em] text-xs font-medium text-[#8a6f63] mb-4 uppercase text-center">
            Our Verification System
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-4 text-center">
            How We Prevent Failures
          </h2>
          <p className="text-center text-[#6a5c55] mb-12 max-w-2xl mx-auto">
            NRIs aren't afraid of spending money. They're afraid of making expensive, irreversible mistakes. Here's exactly how we prevent every risk.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vendor Verification */}
            <div className="rounded-2xl p-8 bg-[#f9f6f3] border border-[#e6dfd5]">
              <h3 className="text-xl font-semibold text-[#1f1f1f] mb-4">How We Verify Vendors</h3>
              <ul className="space-y-3 text-[#6a5c55] text-sm">
                <li className="flex gap-3">
                  <span className="text-[#c7b28a] font-bold">✓</span>
                  <span><strong>Personal Relationships:</strong> Direct relationships with skilled craftspeople, designers, and suppliers across India — not random Instagram sellers.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c7b28a] font-bold">✓</span>
                  <span><strong>Live Video Verification:</strong> You see the exact item — actual fabric draped, embroidery up close, color in natural light — before committing to anything.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c7b28a] font-bold">✓</span>
                  <span><strong>Order Documentation:</strong> Every order is documented with reference photos and your written approval before production begins.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c7b28a] font-bold">✓</span>
                  <span><strong>Pre-Shipping Inspection:</strong> Final quality check in India before anything ships to the US.</span>
                </li>
              </ul>
            </div>

            {/* Risk Prevention */}
            <div className="rounded-2xl p-8 bg-[#f9f6f3] border border-[#e6dfd5]">
              <h3 className="text-xl font-semibold text-[#1f1f1f] mb-4">What Can Go Wrong (& How We Prevent It)</h3>
              <ul className="space-y-3 text-[#6a5c55] text-sm">
                <li className="flex gap-3">
                  <span className="text-[#c7b28a] font-bold">🚫</span>
                  <span><strong>Fabric mismatch:</strong> You approve the exact bolt on video. That specific piece is reserved with your order number.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c7b28a] font-bold">🚫</span>
                  <span><strong>Sizing disasters:</strong> 15+ precise measurements + custom stitching + 100% fit guarantee with alteration coverage up to $150/garment.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c7b28a] font-bold">🚫</span>
                  <span><strong>Shipping damage:</strong> Full insurance on all shipments. We've never had an unresolved shipping issue.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c7b28a] font-bold">🚫</span>
                  <span><strong>Payment risk:</strong> Milestone-based protection: 25% deposit, 35% after approval, 30% after inspection, 10% on delivery.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Real Client Results */}
          <div className="mt-12 rounded-2xl p-10 bg-[#1f1f1f] text-white">
            <h3 className="text-2xl font-semibold mb-6">Real Client Results</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-[#c7b28a] text-2xl font-bold mb-2">14+14</p>
                <p className="text-white/70">Bridesmaids & Groomsmen coordinated across multiple states</p>
              </div>
              <div>
                <p className="text-[#c7b28a] text-2xl font-bold mb-2">4-Day Weddings</p>
                <p className="text-white/70">Destination weddings (Mexico, India) with full party coordination</p>
              </div>
              <div>
                <p className="text-[#c7b28a] text-2xl font-bold mb-2">30-50%</p>
                <p className="text-white/70">Typical savings vs. US Indian boutiques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 px-6 bg-[#f9f6f3]">
        <div className="max-w-6xl mx-auto">
          <p className="tracking-[0.15em] text-xs font-medium text-[#8a6f63] mb-4 uppercase text-center">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-4 text-center">
            NRI Families Who Trusted Us
          </h2>
          <p className="text-center text-[#6a5c55] mb-12 max-w-xl mx-auto">
            Real stories from NRI families across the US — from Philadelphia to Houston to destination weddings in Mexico.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 flex flex-col shadow-sm">
                <p className="text-[#c7b28a] text-2xl mb-4 leading-none">"</p>
                <p className="text-[#5a4a42] text-base leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-[#e6dfd5] pt-4 flex items-center gap-3">
                  {t.photo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={t.photo}
                      alt={t.names}
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                      style={{ border: "2px solid var(--cv-border)" }}
                    />
                  ) : (
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-[#1f1f1f] text-sm">{t.names}</p>
                    <p className="text-xs text-[#8a6f63]">{t.location} &nbsp;·&nbsp; {t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.trustpilot.com/review/ceremonyverse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition hover:opacity-70"
              style={{ color: "var(--cv-accent)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Read our reviews on Trustpilot →
            </a>
          </div>
        </div>
      </section>

      {/* INTERCULTURAL COUPLES SECTION */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "var(--cv-accent)" }}>
                South Indian, Gujarati, or from any background — we know Indian weddings.
              </p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold mb-5" style={{ color: "#1f1f1f" }}>
                South Indian, Gujarati, or any tradition — we know your wedding.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#6a5c55" }}>
                Whether you're a South Indian Christian family, a Gujarati family, or a non-South Asian partner navigating an Indian wedding for the first time — we understand your traditions, your ceremonies, and exactly what you need. Our clients include South Indian Christian families, Gujarati families, and couples from all backgrounds.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6a5c55" }}>
                We explain everything — the ceremonies, the dress codes, what each family member typically wears, and how to coordinate looks that honor both cultures. No assumptions, no jargon, no judgment.
              </p>
              <div className="space-y-3">
                {[
                  "Ceremony-by-ceremony outfit guidance",
                  "Both families coordinated together",
                  "Cultural context explained clearly",
                  "Non-South Asian sizing and fit support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-sm mt-0.5" style={{ color: "var(--cv-accent)" }}>—</span>
                    <span className="text-sm" style={{ color: "#2f2f2f" }}>{item}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onNavigate?.("contact")}
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition"
                style={{ background: "#c7b28a", color: "#fff" }}
              >
                Book a Free Consultation
              </button>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5" }}>
              <p className="text-[#c7b28a] text-3xl mb-3 leading-none font-['Cormorant_Garamond']">"</p>
              <p className="text-base leading-relaxed mb-6 font-['Cormorant_Garamond'] text-xl italic" style={{ color: "#2f2f2f" }}>
                As a South Indian Christian couple, we wanted outfits that truly honored our heritage for any of this. The team walked me through every decision patiently and the sherwani fit perfectly. Our families were blown away.
              </p>
              <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: "#e6dfd5" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ background: "#8a7060" }}>
                  CV
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#1f1f1f" }}>Charly & Viola</p>
                  <p className="text-xs" style={{ color: "#8a6f63" }}>Philadelphia, PA &nbsp;·&nbsp; South Indian Christian wedding</p>
                </div>
              </div>
            </div>
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
            href="https://www.instagram.com/ceremonyverse/"
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

      {/* FAQ SECTION */}
      <section className="py-20 px-6" style={{ background: "#f9f6f3" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-4 text-center" style={{ color: "var(--cv-accent)" }}>
            Common Questions
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f" }}>
            Everything you need to know
          </h2>
          <p className="text-center text-[#6a5c55] mb-12 max-w-xl mx-auto">
            Questions NRI families ask us most — from how to buy a lehenga from India safely, to sizing, shipping, and what to expect.
          </p>
          <div className="space-y-0">
            {[
              {
                q: "How do NRI brides buy a lehenga from India without getting scammed?",
                a: "The safest way is to never pay for something you haven't seen. CeremonyVerse does live video shopping sessions where you see the exact item — actual fabric draped, embroidery up close, color in natural light — before you commit to anything. We work only with vetted artisan partners we know personally, not random Instagram sellers. Every order is documented with reference photos and your written approval before production begins. This is how we eliminate the risk that NRI families face when ordering from India."
              },
              {
                q: "What exactly does CeremonyVerse source?",
                a: "Everything for your Indian wedding — bridal lehengas, sherwanis, bridesmaid and groomsmen outfits, family attire, jewelry, ceremonial items, return gifts, sweets, welcome bags, and even pet outfits. If it's for an Indian wedding, we can source it from India."
              },
              {
                q: "How do I know what I see is what I'll actually receive?",
                a: "We do live video shopping sessions where you see the exact item — actual fabric draped, embroidery up close, color in natural light. That specific piece is reserved with your name and order number. We also do a final inspection before it ships. If anything doesn't match, we halt shipping and resolve it."
              },
              {
                q: "How much does it cost? Is there a hidden markup?",
                a: "No hidden markup. Our sourcing fee is 15–20% of the outfit cost, clearly itemized. You see the full breakdown: outfit cost, sourcing fee, shipping, and customs. Services start at $149 for a Style Guide, $599 for Guided Sourcing, and $1,499 for Full Bridal Concierge. A free consultation is always available."
              },
              {
                q: "How far in advance should I start?",
                a: "6–12 months before your wedding date. Top artisan workshops book quickly and custom outfits need production time. The bridal lehenga alone takes 14–20 weeks for quality custom work. If your wedding is sooner, contact us — we'll tell you honestly what's achievable."
              },
              {
                q: "Can you coordinate outfits for a large family across multiple states?",
                a: "This is one of our specialties. We've coordinated 14 bridesmaids and 14 groomsmen across multiple states, full families for 4-day weddings, and destination weddings in Mexico. We collect all measurements, manage all communication, and ship everything together."
              },
              {
                q: "Do you help with intercultural weddings where one partner isn't South Asian?",
                a: "Yes — and we love this work. We explain every ceremony, dress code, and cultural context clearly. We've helped many couples where one partner had never worn Indian clothes before. No assumptions, no jargon, no judgment."
              },
              {
                q: "Do you ship to all US states?",
                a: "Yes. We serve families across the entire United States — New Jersey, New York, Pennsylvania, Illinois, Georgia, Texas, California, and everywhere in between. All items are quality-checked in India before being shipped to your US address."
              },
              {
                q: "Do I have to pay US customs duties on a lehenga I order from India?",
                a: "It depends on how your outfit arrives. If you carry it home yourself after a trip to India, the $800 duty-free personal exemption applies and the current Section 122 surcharge explicitly excludes accompanied baggage. If your outfit is shipped from India to your US address, full commercial duties now apply — the de minimis exemption was eliminated in August 2025. CeremonyVerse helps you plan around this from the start."
              },
              {
                q: "How far in advance do I need to order my Indian wedding outfit from India?",
                a: "For custom bridal lehengas or heavily embroidered pieces, plan for at least 4–6 months from order to delivery — this accounts for production time (6–12 weeks for complex pieces), shipping, and customs clearance. During peak wedding season (November–February), add an extra buffer. For semi-custom or ready-to-wear pieces, 8–12 weeks is usually workable."
              },
              {
                q: "How do you handle sizing when I can't do in-person fittings?",
                a: "We use detailed measurement guides that go beyond basic measurements — capturing high waist, blouse back length, shoulder width, and other measurements specific to Indian silhouettes. These are shared directly with our artisan partners in India, and most pieces include seam allowance for final alterations. We always recommend budgeting for one round of alterations with a local tailor after delivery."
              },
              {
                q: "What if my outfit arrives damaged or looks different from what I approved?",
                a: "CeremonyVerse documents every order with reference photos, written specifications, and your written approval at the design stage before production begins. If a piece arrives with a quality issue, we work directly with the source to determine whether repair, partial credit, or a remake is appropriate. Our established vendor relationships give us far more leverage than an individual buyer would have."
              },
              {
                q: "Can you help with Gujarati wedding traditions — Garba outfits, Pithi, Mameru?",
                a: "Yes. Gujarati weddings have specific outfit conventions — chaniya choli for Garba, color expectations for Pithi, regional embroidery styles like Kutch and Bandhani. We understand these distinctions and source outfits that are culturally aligned across all functions, not just generically Indian. We have dressed multiple Gujarati families for multi-day weddings including destination weddings."
              },
              {
                q: "Do you work with South Indian Christian weddings?",
                a: "Yes. South Indian Christian weddings — Kerala Christian, Tamil Christian, Telugu Christian — have distinct outfit traditions blending church ceremony aesthetics with South Indian elements like Kanjivaram silk, kasavu sets, and gold temple jewelry. We can help you navigate what is traditional within your specific denomination and family background, and source pieces that feel authentic."
              },
            ].map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => onNavigate?.("faq")}
              className="text-sm font-medium transition hover:opacity-70"
              style={{ color: "var(--cv-accent)" }}
            >
              See all FAQ →
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#c7b28a" }}>For NRI Families Planning Indian Weddings</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-4">
            This is your wedding. You shouldn't have to settle.
          </h2>
          <p className="text-[#6a5c55] mb-2">
            Book a free 30-minute consultation. We'll review your vision, timeline, and budget — and tell you exactly what's achievable. No commitment required.
          </p>
          <p className="text-sm text-[#8a6f63] mb-8">
            Top India vendors book 6–12 months in advance. If your wedding is within the year, reach out now.
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
