"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div className="bg-[var(--cv-bg)]">
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

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

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

        </div>
      </section>
    </div>
  )
}
