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
            Wedding outfits sourced directly from trusted manufacturers in India.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Bridal Lehengas from India
            </h3>
            <p className="text-[var(--cv-muted)]">
              Authentic handcrafted bridal lehengas sourced with full quality checks and secure delivery to the US.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Groom Sherwanis
            </h3>
            <p className="text-[var(--cv-muted)]">
              Custom groom outfits made with verified craftsmanship and inspected before delivery.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Bridesmaid & Family Outfits
            </h3>
            <p className="text-[var(--cv-muted)]">
              Coordinated outfits ensuring consistency, correct sizing, and reliable shipping.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Accessories & Details
            </h3>
            <p className="text-[var(--cv-muted)]">
              Jewelry, dupattas, and finishing pieces sourced and quality-checked before delivery.
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
