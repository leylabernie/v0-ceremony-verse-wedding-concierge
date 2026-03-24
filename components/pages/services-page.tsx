"use client"

import type { PageType } from "@/app/page"

interface ServicesPageProps {
  onNavigate: (page: PageType) => void
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-semibold mb-6">
            What We Source
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            Complete wedding outfit sourcing from trusted manufacturers in India — for every person in your celebration.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          {/* BRIDE */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Bridal Lehengas & Wedding Outfits
            </h3>
            <p className="text-[var(--cv-muted)]">
              Bridal lehengas and outfits sourced directly from India with authentic craftsmanship, full quality audit, and secure delivery to the US.
            </p>
          </div>

          {/* GROOM */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Groom Sherwanis & Attire
            </h3>
            <p className="text-[var(--cv-muted)]">
              Custom sherwanis and groom outfits created with verified craftsmanship, inspected before delivery, and tailored for your events.
            </p>
          </div>

          {/* BRIDESMAIDS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Bridesmaid Outfits & Coordination
            </h3>
            <p className="text-[var(--cv-muted)]">
              Coordinated bridesmaid outfits designed for consistency in color, fabric, and styling, with accurate sizing and reliable shipping from India.
            </p>
          </div>

          {/* GROOMSMEN */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Groomsmen & Wedding Party Coordination
            </h3>
            <p className="text-[var(--cv-muted)]">
              Groomsmen outfits and coordinated wedding party looks managed for uniform style, proper fit, and smooth delivery timelines.
            </p>
          </div>

          {/* FAMILY + PETS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Family & Pet (Dog & Cat) Outfits
            </h3>
            <p className="text-[var(--cv-muted)]">
              Outfits for family members and even pets, coordinated to match your wedding aesthetic with attention to comfort, detail, and overall styling.
            </p>
          </div>

          {/* ACCESSORIES */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Accessories & Final Styling Details
            </h3>
            <p className="text-[var(--cv-muted)]">
              Dupattas, jewelry, and finishing pieces sourced with precision, quality-checked, and delivered to complete your entire wedding look.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Start Your Sourcing Process
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            From bride to groom to bridesmaids, groomsmen, family, and even pets — we handle the complexity so you don’t have to.
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
