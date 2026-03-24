"use client"

import { ArrowRight } from "lucide-react"
import type { PageType } from "@/app/page"

interface HomePageProps {
  onNavigate: (page: PageType) => void
}

function Divider() {
  return (
    <div className="flex justify-center my-16">
      <div className="w-24 h-px bg-[var(--cv-border)]"></div>
    </div>
  )
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="min-h-[85vh] flex items-center justify-center text-center px-6">
        <div className="max-w-4xl py-24">
          <p className="text-sm tracking-[0.2em] uppercase mb-6 text-[var(--cv-accent)]">
            Your Personal Sourcing Team
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Skip the Flights.
            <br />
            Skip the Scams.
          </h1>

          <p className="text-lg text-[var(--cv-muted)] max-w-2xl mx-auto mb-10">
            Source wedding outfits directly from trusted manufacturers in India.
            No travel, no guesswork, no risk.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="btn-primary flex items-center gap-2 justify-center"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate("journey")}
              className="border border-[var(--cv-border)] px-6 py-3 rounded-full"
            >
              How It Works
            </button>
          </div>
        </div>
      </section>

      <Divider />

      {/* TRUST */}
      <section className="py-20 text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10">
            Why CeremonyVerse Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-3">Verified Manufacturers</h3>
              <p className="text-[var(--cv-muted)]">
                We only work with trusted and proven production partners.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Direct Sourcing</h3>
              <p className="text-[var(--cv-muted)]">
                No middlemen. Better pricing and full transparency.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Final Quality Check</h3>
              <p className="text-[var(--cv-muted)]">
                Every item is checked before shipping to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* SERVICES (SEO OPTIMIZED) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-semibold mb-14">
            What We Source
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Bridal Lehengas from India
              </h3>
              <p className="text-[var(--cv-muted)]">
                Authentic handcrafted bridal lehengas sourced directly from trusted manufacturers, with full quality audit and secure shipping to the US.
              </p>
            </div>

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Groom Sherwanis & Wedding Attire
              </h3>
              <p className="text-[var(--cv-muted)]">
                Custom sherwanis and groom outfits created with authentic craftsmanship, verified through quality checks before delivery.
              </p>
            </div>

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Bridesmaid & Family Outfits
              </h3>
              <p className="text-[var(--cv-muted)]">
                Coordinated outfits ensuring consistent design, sizing accuracy, and reliable shipping from India to the US.
              </p>
            </div>

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Accessories & Wedding Details
              </h3>
              <p className="text-[var(--cv-muted)]">
                Dupattas, jewelry, and finishing pieces sourced with quality inspection and delivered safely to complete your look.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Divider />

      {/* VIDEO SHOPPING (KILLER FEATURE) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm tracking-[0.2em] uppercase mb-4 text-[var(--cv-accent)]">
              Live Video Sourcing
            </p>

            <h2 className="text-4xl font-semibold mb-6">
              See Exactly What You're Buying — In Real Time
            </h2>

            <p className="text-[var(--cv-muted)] mb-6">
              No guessing. No surprises. No scams.
            </p>

            <p className="text-[var(--cv-muted)] mb-6">
              Join live video calls directly from boutiques in India and inspect fabrics,
              embroidery, and colors before anything is made.
            </p>

            <ul className="space-y-3 text-[var(--cv-muted)]">
              <li>• Inspect fabric and texture live</li>
              <li>• Verify embroidery quality</li>
              <li>• Confirm real colors</li>
              <li>• Guided sourcing in real-time</li>
            </ul>
          </div>

          <div className="bg-[var(--cv-bg)] border border-[var(--cv-border)] rounded-2xl p-10 text-center">
            <div className="aspect-video bg-white rounded-xl flex items-center justify-center text-sm text-[var(--cv-muted)]">
              Video Call Experience
            </div>

            <p className="mt-4 text-sm text-[var(--cv-muted)]">
              Real boutiques. Real inventory.
            </p>
          </div>

        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">
            August 2026 Booking Open
          </h2>

          <p className="text-[var(--cv-muted)] mb-10">
            Limited clients accepted to ensure quality and attention.
          </p>

          <button
            onClick={() => onNavigate("contact")}
            className="btn-primary"
          >
            Reserve Your Spot
          </button>
        </div>
      </section>

    </div>
  )
}
