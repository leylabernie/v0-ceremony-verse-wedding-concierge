"use client"

import { ArrowRight } from "lucide-react"
import type { PageType } from "@/app/page"

interface HomePageProps {
  onNavigate: (page: PageType) => void
}

function FloralSeparator() {
  return (
    <div className="flex justify-center my-12">
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
          <p className="text-[var(--cv-accent)] text-sm tracking-[0.2em] uppercase mb-6">
            Your Personal Sourcing Team
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-[var(--cv-foreground)] leading-tight mb-6">
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
              className="bg-[var(--cv-accent)] text-white px-6 py-3 rounded-full flex items-center gap-2 justify-center"
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

      <FloralSeparator />

      {/* TRUST SECTION */}
      <section className="py-20 text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10 text-[var(--cv-foreground)]">
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

      <FloralSeparator />

      {/* SERVICES GRID */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-semibold mb-14 text-[var(--cv-foreground)]">
            What We Source
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Bridal Lehengas</h3>
              <p className="text-[var(--cv-muted)]">
                Custom and ready bridal outfits sourced directly from India.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Sherwanis</h3>
              <p className="text-[var(--cv-muted)]">
                Groom outfits tailored and verified before delivery.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Bridesmaid Outfits</h3>
              <p className="text-[var(--cv-muted)]">
                Coordinated looks for your wedding party.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Accessories</h3>
              <p className="text-[var(--cv-muted)]">
                Dupattas, jewelry, and finishing pieces.
              </p>
            </div>

          </div>
        </div>
      </section>

      <FloralSeparator />

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-[var(--cv-foreground)]">
            August 2026 Booking Open
          </h2>

          <p className="text-[var(--cv-muted)] mb-10">
            Limited clients accepted to ensure quality and attention.
          </p>

          <button
            onClick={() => onNavigate("contact")}
            className="bg-[var(--cv-accent)] text-white px-6 py-3 rounded-full"
          >
            Reserve Your Spot
          </button>
        </div>
      </section>

    </div>
  )
}
