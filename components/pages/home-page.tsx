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

          <p className="tracking-wide text-sm text-charcoal/70 mb-4">
            YOUR PERSONAL SOURCING TEAM
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Skip the Flights.
            <br />
            Skip the Scams.
          </h1>

          <p className="mt-4 text-lg text-charcoal max-w-xl mx-auto">
            We help you source authentic Indian wedding outfits from trusted vendors — entirely from the U.S.
          </p>

          <p className="mt-3 text-base text-charcoal/90 max-w-2xl mx-auto">
            Skip expensive trips to India. We guide you through trusted vendors, pricing, and quality — so you get exactly what you want without the stress.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="https://wa.me/12153419990?text=Hi%20I%20am%20interested%20in%20Indian%20wedding%20outfit%20sourcing"
              target="_blank"
              className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition text-center"
            >
              Get Outfit Help on WhatsApp
            </a>

            <Link
              href="/shop-from-india"
              className="border border-[var(--cv-border)] px-6 py-3 rounded-full inline-block"
            >
              How It Works
            </Link>

          </div>

          {/* 6 CARDS */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

            <Link href="/shop-from-india" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Shop From India Process
              </h3>
              <p className="text-charcoal/80">
                Step-by-step guided sourcing and video shopping experience.
              </p>
            </Link>

            <Link href="/buy-indian-wedding-outfits-from-india" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Buy Directly from India
              </h3>
              <p className="text-charcoal/80">
                Learn how to access trusted sources without retail markups.
              </p>
            </Link>

            <Link href="/buy-bridal-lehenga-from-india-usa" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Bridal Lehenga Guide
              </h3>
              <p className="text-charcoal/80">
                Everything you need to buy your bridal lehenga from India.
              </p>
            </Link>

            <Link href="/buy-sherwani-from-india-usa" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Groom Sherwani Guide
              </h3>
              <p className="text-charcoal/80">
                A complete guide to sourcing groom outfits with proper fit and style.
              </p>
            </Link>

            <Link href="/bridesmaid-and-family-outfits-from-india" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Bridesmaid & Family Outfits
              </h3>
              <p className="text-charcoal/80">
                Coordinate outfits for your entire wedding party with consistent colors and sizing.
              </p>
            </Link>

            <Link href="/indian-wedding-jewelry-and-accessories" className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Jewelry & Ceremonial Accessories
              </h3>
              <p className="text-charcoal/80">
                Source bridal jewelry, accessories, and ceremony essentials from trusted vendors.
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
              <h3 className="font-semibold mb-2">Trusted Designers</h3>
              <p className="text-charcoal/70">
                We work with reliable designers and skilled makers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Direct Access</h3>
              <p className="text-charcoal/70">
                Avoid retail markups with direct sourcing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Verified Quality</h3>
              <p className="text-charcoal/70">
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

          <p className="text-charcoal/70 mb-8">
            From outfits to accessories and wedding details — everything handled with clarity and guidance.
          </p>

          <a
            href="https://wa.me/12153419990?text=Hi%20I%20am%20interested%20in%20Indian%20wedding%20outfit%20sourcing"
            target="_blank"
            className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Start on WhatsApp
          </a>

        </div>
      </section>

    </div>
  )
}
