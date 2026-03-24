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
    description:
      "We understand your events, preferences, inspirations, and budget to guide your sourcing strategy.",
    details: [
      "One-on-one consultation",
      "Style and reference review",
      "Budget alignment",
      "Event planning overview",
    ],
  },
  {
    number: "02",
    title: "Sourcing Strategy & Options",
    location: "India",
    description:
      "We identify the best sourcing path for you — either ready-to-wear selections or custom-designed outfits created by skilled designers.",
    details: [
      "Direct access to trusted designers",
      "Ready-made and custom options",
      "Fabric and style recommendations",
      "Price-conscious sourcing approach",
    ],
  },
  {
    number: "03",
    title: "Live Video Selection",
    location: "Remote",
    description:
      "You review outfits, fabrics, embroidery, and colors in real time through live video sessions before making your selections.",
    details: [
      "Live outfit viewing sessions",
      "Fabric and embroidery inspection",
      "Color accuracy confirmation",
      "Guided selection support",
    ],
  },
  {
    number: "04",
    title: "Design & Customization (If Needed)",
    location: "India",
    description:
      "For custom outfits, designs are created based on your references with careful selection of fabrics, colors, and embellishments.",
    details: [
      "Reference-based outfit creation",
      "Fabric sourcing and dyeing",
      "Embellishment and detailing selection",
      "Made-to-measure stitching",
    ],
  },
  {
    number: "05",
    title: "Order Coordination & Quality Checks",
    location: "India",
    description:
      "We manage all communication, track progress, and ensure quality at every stage before items are finalized.",
    details: [
      "Direct coordination with designers",
      "Progress updates and tracking",
      "Quality verification",
      "Final approval before dispatch",
    ],
  },
  {
    number: "06",
    title: "Delivery to Your Door",
    location: "United States",
    description:
      "Your outfits and items are securely shipped and delivered to you with care and reliability.",
    details: [
      "Secure international shipping",
      "Delivery tracking",
      "Careful packaging",
      "Final delivery support",
    ],
  },
]

export function JourneyPage({ onNavigate }: JourneyPageProps) {
  return (
    <div className="bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-semibold mb-6">
            How It Works
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            A guided, transparent process that gives you direct access to quality craftsmanship — without unnecessary markups or guesswork.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          {journeySteps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[var(--cv-border)] rounded-2xl p-8"
            >
              <div className="flex gap-6">
                <div className="text-3xl opacity-30">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[var(--cv-muted)] mb-4">
                    {step.location}
                  </p>

                  <p className="text-[var(--cv-muted)] mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((d, i) => (
                      <li key={i} className="text-sm text-[var(--cv-muted)]">
                        • {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Start Your Sourcing Journey
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            Get direct access to designers and makers without retail markups — all guided step by step.
          </p>

          <button
            onClick={() => onNavigate("contact")}
            className="btn-primary"
          >
            Book Consultation
          </button>
        </div>
      </section>

    </div>
  )
}
