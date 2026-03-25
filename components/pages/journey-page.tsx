"use client"

import type { PageType } from "@/app/page"

interface JourneyPageProps {
  onNavigate: (page: PageType) => void
}

const journeySteps = [
  {
    number: "01",
    title: "Initial Consultation",
    location: "United States",
    locationIcon: "🇺🇸",
    description:
      "We understand your events, preferences, inspirations, and budget to guide your sourcing strategy.",
    details: [
      "One-on-one consultation",
      "Style and reference review",
      "Budget alignment",
      "Event planning overview",
    ],
    accent: "#c7b28a",
  },
  {
    number: "02",
    title: "Sourcing Strategy & Options",
    location: "India",
    locationIcon: "🇮🇳",
    description:
      "We identify the best sourcing path for you — either ready-to-wear selections or custom-designed outfits created by skilled designers.",
    details: [
      "Direct access to trusted designers",
      "Ready-made and custom options",
      "Fabric and style recommendations",
      "Price-conscious sourcing approach",
    ],
    accent: "#b5a07c",
  },
  {
    number: "03",
    title: "Live Video Selection",
    location: "Remote — From Your Home",
    locationIcon: "📱",
    description:
      "You review outfits, fabrics, embroidery, and colors in real time through live video sessions before making your selections.",
    details: [
      "Live outfit viewing sessions",
      "Fabric and embroidery inspection",
      "Color accuracy confirmation",
      "Guided selection support",
    ],
    accent: "#c7b28a",
  },
  {
    number: "04",
    title: "Design & Customization",
    location: "India",
    locationIcon: "🇮🇳",
    description:
      "For custom outfits, designs are created based on your references with careful selection of fabrics, colors, and embellishments.",
    details: [
      "Reference-based outfit creation",
      "Fabric sourcing and dyeing",
      "Embellishment and detailing selection",
      "Made-to-measure stitching",
    ],
    accent: "#b5a07c",
  },
  {
    number: "05",
    title: "Quality Checks & Coordination",
    location: "India",
    locationIcon: "✅",
    description:
      "We manage all communication, track progress, and ensure quality at every stage before items are finalized.",
    details: [
      "Direct coordination with designers",
      "Progress updates and tracking",
      "Quality verification",
      "Final approval before dispatch",
    ],
    accent: "#c7b28a",
  },
  {
    number: "06",
    title: "Delivery to Your Door",
    location: "United States",
    locationIcon: "📦",
    description:
      "Your outfits and items are securely shipped and delivered to you with care and reliability — ready to wear on your big day.",
    details: [
      "Secure international shipping",
      "Delivery tracking",
      "Careful packaging",
      "Final delivery support",
    ],
    accent: "#b5a07c",
  },
]

export function JourneyPage({ onNavigate }: JourneyPageProps) {
  return (
    <div className="bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="py-24 text-center px-6" style={{ background: "linear-gradient(180deg, #f0ebe3 0%, var(--cv-bg) 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--cv-accent)" }}>
            The CeremonyVerse Process
          </p>
          <h1 className="text-5xl font-semibold mb-6">
            How It Works
          </h1>
          <p className="text-[var(--cv-muted)] text-lg max-w-2xl mx-auto">
            A guided, transparent process that gives you direct access to quality craftsmanship — without unnecessary markups or guesswork.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[var(--cv-muted)]">
            <span>✦ No flights to India needed</span>
            <span>✦ Quality checked before shipping</span>
            <span>✦ Personal concierge throughout</span>
          </div>
        </div>
      </section>

      {/* STEPS — alternating timeline layout */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Vertical connector line */}
          <div className="relative">
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
              style={{ background: "var(--cv-border)", transform: "translateX(-50%)" }}
            />

            <div className="space-y-8">
              {journeySteps.map((step, idx) => {
                const isLeft = idx % 2 === 0
                return (
                  <div key={step.number} className="relative">
                    {/* Center dot */}
                    <div
                      className="hidden md:flex absolute left-1/2 top-8 w-10 h-10 rounded-full items-center justify-center text-white text-sm font-bold z-10"
                      style={{ background: "var(--cv-accent)", transform: "translate(-50%, 0)" }}
                    >
                      {step.number}
                    </div>

                    {/* Card — left or right */}
                    <div className={`md:w-[44%] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                      <div
                        className="bg-white rounded-2xl p-7 border border-[var(--cv-border)]"
                        style={{ borderLeft: `3px solid var(--cv-accent)` }}
                      >
                        {/* Mobile step number */}
                        <div className="flex items-center gap-3 mb-4 md:hidden">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                            style={{ background: "var(--cv-accent)" }}
                          >
                            {step.number}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <span>{step.locationIcon}</span>
                          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--cv-muted)" }}>
                            {step.location}
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--cv-foreground)" }}>
                          {step.title}
                        </h3>

                        <p className="text-[var(--cv-muted)] text-sm mb-4 leading-relaxed">
                          {step.description}
                        </p>

                        <ul className="space-y-1.5">
                          {step.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[var(--cv-muted)]">
                              <span style={{ color: "var(--cv-accent)", marginTop: "2px" }}>✦</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY STRIP */}
      <section className="py-10 px-6" style={{ background: "#f0ebe3" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--cv-foreground)] font-medium">
            ✦ Top vendors in India book out 6–12 months before your wedding date.
            <span className="text-[var(--cv-muted)] font-normal"> Starting early gives you access to the best designers and custom options.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Start?
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            Book a free consultation with Bhamini — get direct access to designers and makers without retail markups.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="btn-primary"
            >
              Book Free Consultation
            </button>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20learn%20about%20the%20sourcing%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Bhamini
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
