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
            Skip expensive trips to India. We help you source authentic wedding outfits from trusted vendors — with guidance, transparency, and zero guesswork.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button
              onClick={() => onNavigate("contact")}
              className="btn-primary"
            >
              <a
  href="https://wa.me/12153419990?text=Hi%20I%20am%20interested%20in%20Indian%20wedding%20outfit%20sourcing"
  target="_blank"
  className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition text-center"
>
  Get Outfit Help on WhatsApp
</a>
            </button>

            <Link
              href="/shop-from-india"
              className="border border-[var(--cv-border)] px-6 py-3 rounded-full inline-block"
            >
              How It Works
            </Link>

          </div>

          <section className="mt-16 bg-sage/10 p-8 rounded-xl text-center">
  <h2 className="text-2xl font-semibold mb-4">
    Not sure where to start with wedding outfit shopping?
  </h2>

  <p className="text-sm text-charcoal/70 max-w-2xl mx-auto mb-6">
    Most couples feel overwhelmed choosing the right vendors, negotiating prices, and avoiding low-quality pieces. We guide you step-by-step so you get exactly what you want — without traveling to India.
  </p>

  <a
    href="https://wa.me/12153419990?text=Hi%20I%20am%20interested%20in%20Indian%20wedding%20outfit%20sourcing"
    target="_blank"
    className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
  >
    Ask Us on WhatsApp
  </a>
</section>

          {/* FINAL CARDS */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

            <Link href="/shop-from-india" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Shop From India Process
              </h3>
              <p className="text-[var(--cv-muted)]">
                Step-by-step guided sourcing and video shopping experience.
              </p>
            </Link>

            <Link href="/buy-indian-wedding-outfits-from-india" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Buy Directly from India
              </h3>
              <p className="text-[var(--cv-muted)]">
                Learn how to access trusted sources without retail markups.
              </p>
            </Link>

            <Link href="/buy-bridal-lehenga-from-india-usa" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Bridal Lehenga Guide
              </h3>
              <p className="text-[var(--cv-muted)]">
                Everything you need to buy your bridal lehenga from India.
              </p>
            </Link>

            <Link href="/buy-sherwani-from-india-usa" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Groom Sherwani Guide
              </h3>
              <p className="text-[var(--cv-muted)]">
                A complete guide to sourcing groom outfits with proper fit and style.
              </p>
            </Link>

            <Link href="/bridesmaid-and-family-outfits-from-india" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Bridesmaid & Family Outfits
              </h3>
              <p className="text-[var(--cv-muted)]">
                Coordinate outfits for your entire wedding party with consistency.
              </p>
            </Link>

            <Link href="/wedding-accessories-and-ceremony-items-from-india" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Accessories & Ceremony Items
              </h3>
              <p className="text-[var(--cv-muted)]">
                Jewelry, dupattas, favors, and ceremony essentials sourced from India.
              </p>
            </Link>

          </div>

        </div>
      </section>

      {/* TRUST */}
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
                We work with reliable designers and skilled makers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Direct Access
              </h3>
              <p className="text-[var(--cv-muted)]">
                Avoid retail markups with direct sourcing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Verified Quality
              </h3>
              <p className="text-[var(--cv-muted)]">
                Every item is reviewed before delivery.
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
            From outfits to details — everything handled with clarity.
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
