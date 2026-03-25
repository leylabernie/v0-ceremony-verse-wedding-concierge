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
            Complete wedding sourcing from India — outfits, accessories, gifts, and ceremonial items — all handled for you with quality checks and reliable delivery.
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
              Bridal lehengas and outfits sourced directly from India with authentic craftsmanship, full quality checks, and secure shipping to the US.
            </p>
          </div>

          {/* GROOM */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Groom Sherwanis & Attire
            </h3>
            <p className="text-[var(--cv-muted)]">
              Custom sherwanis and groom outfits with verified craftsmanship, tailored fit, and inspection before delivery.
            </p>
          </div>

          {/* BRIDESMAIDS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-bridesmaids.png" alt="Coordinated Indian bridesmaid sarees in blush and sage" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Bridesmaid Outfits</h3>
              <p className="text-[var(--cv-muted)]">Coordinated bridesmaid outfits with consistent colors, fabrics, and sizing for a cohesive wedding look.</p>
            </div>
          </div>

          {/* GROOMSMEN */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Groomsmen Attire
            </h3>
            <p className="text-[var(--cv-muted)]">
              Groomsmen outfits styled and sourced to match your wedding theme with accurate measurements and reliable delivery.
            </p>
          </div>

          {/* FAMILY */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Family Wedding Outfits
            </h3>
            <p className="text-[var(--cv-muted)]">
              Sarees, lehengas, and traditional outfits for parents and extended family, coordinated for color and design consistency.
            </p>
          </div>

          {/* PETS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Pet Outfits (Dogs & Cats)
            </h3>
            <p className="text-[var(--cv-muted)]">
              Custom outfits for pets designed to match your wedding theme while ensuring comfort and safety.
            </p>
          </div>

          {/* JEWELRY */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-jewelry.png" alt="Indian bridal jewelry including kundan necklace and jhumka earrings" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Jewelry & Bridal Accessories</h3>
              <p className="text-[var(--cv-muted)]">Bridal jewelry, accessories, and finishing pieces sourced with quality verification and attention to detail.</p>
            </div>
          </div>

          {/* CEREMONIAL */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Ceremonial Items & Ritual Essentials
            </h3>
            <p className="text-[var(--cv-muted)]">
              Items needed for traditional ceremonies sourced accurately to match cultural requirements and rituals.
            </p>
          </div>

          {/* GIFTS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Wedding Gifts & Return Gifts
            </h3>
            <p className="text-[var(--cv-muted)]">
              Thoughtful gift sourcing including sarees, hampers, and curated return gifts for guests and family.
            </p>
          </div>

          {/* WELCOME BAGS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Welcome Bags & Event Details
            </h3>
            <p className="text-[var(--cv-muted)]">
              Customized welcome bags, favors, and event details designed to enhance your guest experience.
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
            From outfits to gifts to ceremonial details — we manage the entire sourcing process so you don’t have to.
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
