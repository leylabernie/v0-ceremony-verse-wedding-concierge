"use client"

import { ArrowRight } from "lucide-react"
import type { PageType } from "@/app/page"

interface JourneyPageProps {
  onNavigate: (page: PageType) => void
}

const journeySteps = [
  {
    number: "01",
    title: "Initial Vision",
    location: "United States",
    description:
      "A comprehensive discovery call to understand your events, color palettes, style preferences, and budget.",
    details: [
      "One-on-one video consultation",
      "Style mood board creation",
      "Budget planning",
      "Event timeline mapping",
    ],
  },
  {
  number: "02",
  title: "Boutique Sourcing & Ready-to-Wear Selection",
  location: "India",
  description:
    "We help you select from trusted boutiques and designers offering ready-made outfits, ensuring quality, authenticity, and reliability before anything is finalized.",
  details: [
    "Curated boutique selection",
    "Ready-made outfit sourcing",
    "Quality and finish verification",
    "Fit and style guidance",
  ],
},
  {
  number: "03",
  title: "Live Selection & Video Review",
  location: "Remote",
  description:
    "You review and select outfits in real time through live video sessions, seeing fabrics, embroidery, and true colors before making your decision.",
  details: [
    "Live video outfit viewing",
    "Real-time fabric and embroidery review",
    "Color accuracy confirmation",
    "Guided selection support",
  ],
},
  {
    number: "04",
    title: "Production",
    location: "Workshops",
    description:
      "Your outfits are produced with continuous oversight and progress updates.",
    details: [
      "Custom measurements",
      "Production tracking",
      "Progress updates",
      "Quality checks",
    ],
  },
  {
    number: "05",
    title: "Final Inspection",
    location: "Quality Check",
    description:
      "Every piece is inspected for quality before shipping.",
    details: [
      "Stitch inspection",
      "Color check",
      "Fit validation",
      "Final review",
    ],
  },
  {
    number: "06",
    title: "Delivery",
    location: "Your Door",
    description:
      "Secure delivery directly to your home.",
    details: [
      "Tracked shipping",
      "Secure packaging",
      "Delivery updates",
      "Final handoff",
    ],
  },
]

export function JourneyPage({ onNavigate }: JourneyPageProps) {
  return (
    <div className="animate-fade-in bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-semibold mb-6">
            The Sourcing Journey
          </h1>
          <p className="text-[var(--cv-muted)] text-lg">
            A clear, transparent process from consultation to delivery.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
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
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Begin?
          </h2>

          <button
            onClick={() => onNavigate("contact")}
            className="px-6 py-3 border border-[var(--cv-border)] rounded-full"
          >
            Start Your Journey
          </button>
        </div>
      </section>

    </div>
  )
}
