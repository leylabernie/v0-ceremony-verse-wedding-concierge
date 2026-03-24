"use client"

import Link from "next/link"

export default function HomePage() {
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

      {/* DECISION SECTION */}
      <section className="mt-16 bg-sage/10 p-8 rounded-xl text-center max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Not sure where to start with wedding outfit shopping?
        </h2>

        <p className="text-base text-charcoal/90 max-w-2xl mx-auto mb-6">
          Most couples feel overwhelmed choosing the right vendors, negotiating prices, and avoiding low-quality pieces. We guide you step-by-step so you get exactly what you want — without traveling to India.
        </p>

        <a
          href="https://wa.me/12153419990?text=Hi%20I%20am%20interested%20in%20Indian%20wedding%20outfit%20sourcing"
          target="_blank"
          className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          Get Vendor Recommendations on WhatsApp
        </a>
      </section>

      {/* FINAL CARDS */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        <Link
          href="/shop-from-india"
          className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Shop From India Process
          </h3>
          <p className="text-charcoal/70">
            Step-by-step guided sourcing and live video shopping experience.
          </p>
        </Link>

        <Link
          href="/services"
          className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Full Wedding Support
          </h3>
          <p className="text-charcoal/70">
            Planning, coordination, and sourcing tailored to your wedding.
          </p>
        </Link>

        <Link
          href="/resources"
          className="bg-white border border-[var(--cv-border)] rounded-2xl p-6 hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Wedding Resources
          </h3>
          <p className="text-charcoal/70">
            Guides, tips, and insights for planning your wedding smoothly.
          </p>
        </Link>

      </div>

    </div>
  )
}
