"use client"

import type { PageType } from "@/app/page"
import Link from "next/link"

interface HomePageProps {
  onNavigate: (page: PageType) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <p className="tracking-wide text-sm text-[var(--cv-muted)] mb-4">
            YOUR PERSONAL SOURCING TEAM
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Skip the Flights.
            <br />
            Skip the Scams.
          </h1>

          <p className="text-[var(--cv-muted)] text-lg mb-10">
            Shop Indian wedding outfits directly from trusted designers and skilled makers — guided through live video, without travel or uncertainty.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button
              onClick={() => onNavigate("contact")}
              className="btn-primary"
            >
              Book Consultation
            </button>

            <Link
              href="/shop-from-india"
              className="border border-[var(--cv-border)] px-6 py-3 rounded-full inline-block"
            >
              How It Works
            </Link>

          </div>

          {/* INTERNAL LINKS (SEO + ACCESS) */}
          <p className="mt-6 text-sm text-[var(--cv-muted)] text-center">
            <Link href="/shop-from-india" className="underline">
              View our sourcing process
            </Link>

            {" • "}

            <Link href="/buy-indian-wedding-outfits-from-india" className="underline">
              Learn how to buy directly from India
            </Link>
          </p>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12">
            Why CeremonyVerse Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="font-semibold mb-2">
                Trusted Designers
              </h3>
              <p className="text-[var(--cv-muted)]">
                We work with reliable designers and skilled makers, not unknown vendors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Direct Access
              </h3>
              <p className="text-[var(--cv-muted)]">
                Avoid retail markups by accessing the same sources directly through guided support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Verified Quality
              </h3>
              <p className="text-[var(--cv-muted)]">
                Every item is reviewed before delivery so you know exactly what you’re getting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Start Your Sourcing Journey
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            From outfits to accessories and wedding details — everything handled with clarity and guidance.
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
