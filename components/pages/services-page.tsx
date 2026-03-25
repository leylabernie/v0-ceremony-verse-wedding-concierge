"use client"

import type { PageType } from "@/app/page"

interface ServicesPageProps {
  onNavigate: (page: PageType) => void
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services-hero.png" alt="Indian wedding flat lay with lehenga, jewelry, marigolds and brass diya on marble" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 100%)", zIndex: 1 }} />
        <div className="relative py-20 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>Everything You Need</p>
          <h1 className="text-5xl font-semibold mb-6" style={{ color: "#fff" }}>
            What We Source
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Complete wedding sourcing from India — outfits, accessories, gifts, and ceremonial items — all handled for you with quality checks and reliable delivery.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          {/* BRIDE */}
          <button type="button" onClick={() => onNavigate("bridal")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-bridal-gold.jpg" alt="Champagne gold bridal lehenga" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bridal Lehengas & Wedding Outfits</h3>
              <p className="text-[var(--cv-muted)] text-sm">Sourced directly from India with authentic craftsmanship, full quality checks, and secure shipping to the US.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* GROOM */}
          <button type="button" onClick={() => onNavigate("groom")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-groom.jpg" alt="Full length ivory and gold sherwani" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Groom Sherwanis & Attire</h3>
              <p className="text-[var(--cv-muted)] text-sm">Custom sherwanis and groom outfits with verified craftsmanship, tailored fit, and inspection before delivery.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* BRIDESMAIDS */}
          <button type="button" onClick={() => onNavigate("bridesmaids")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-bridesmaids.jpg" alt="Pastel bridesmaid lehengas on rack" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bridesmaid Outfits</h3>
              <p className="text-[var(--cv-muted)] text-sm">Coordinated lehengas in matching palettes — consistent colors, fabrics, and sizing for a cohesive wedding look.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* GROOMSMEN */}
          <button type="button" onClick={() => onNavigate("groomsmen")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-groomsmen.jpg" alt="Ivory kurta sets on rack" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <div className="text-xs font-medium text-[var(--cv-accent)] uppercase tracking-widest mb-2">Popular Add-On</div>
              <h3 className="text-xl font-semibold mb-2">Groomsmen Attire</h3>
              <p className="text-[var(--cv-muted)] text-sm">Matching kurtas and bandhgalas for the entire crew — sourced with accurate measurements alongside the groom's order.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* FAMILY */}
          <button type="button" onClick={() => onNavigate("family")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-bridesmaids.png" alt="Coordinated Indian family sarees" style={{ width: "100%", height: "12rem", objectFit: "cover", objectPosition: "center", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Family Wedding Outfits</h3>
              <p className="text-[var(--cv-muted)] text-sm">Sarees, lehengas, and traditional outfits for parents, in-laws, and extended family — coordinated across colors and fabrics.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* PETS */}
          <button type="button" onClick={() => onNavigate("pets")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-pets.jpg" alt="Two dogs in Indian wedding outfits" style={{ width: "100%", height: "12rem", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            <div className="p-6">
              <div className="text-xs font-medium text-[var(--cv-accent)] uppercase tracking-widest mb-2">Fan Favorite</div>
              <h3 className="text-xl font-semibold mb-2">Pet Outfits (Dogs & Cats)</h3>
              <p className="text-[var(--cv-muted)] text-sm">Custom sherwanis, lehengas, and bandanas for your fur babies — matched to your wedding palette and made for comfort.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* JEWELRY */}
          <button type="button" onClick={() => onNavigate("jewelry")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-jewelry3.jpg" alt="Bridal kundan necklace set" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Jewelry & Bridal Accessories</h3>
              <p className="text-[var(--cv-muted)] text-sm">Bridal jewelry, accessories, and finishing pieces sourced with quality verification and attention to detail.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* CEREMONIAL */}
          <button type="button" onClick={() => onNavigate("ceremonial")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-ceremonial2.png" alt="Mehndi ceremony with marigolds and brass diyas" style={{ width: "100%", height: "12rem", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Ceremonial Items & Ritual Essentials</h3>
              <p className="text-[var(--cv-muted)] text-sm">Items needed for traditional ceremonies sourced accurately to match cultural requirements and rituals.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* GIFTS */}
          <button type="button" onClick={() => onNavigate("gifts")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-gifts.jpg" alt="Colourful silk potli bags" style={{ width: "100%", height: "12rem", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Wedding Gifts & Return Gifts</h3>
              <p className="text-[var(--cv-muted)] text-sm">Thoughtful gift sourcing — sarees, dry fruit hampers, silver items, and curated return gifts for guests and family.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* WELCOME BAGS */}
          <button type="button" onClick={() => onNavigate("welcomebags")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-welcomebags.jpg" alt="Personalized monogram jute welcome bags" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Welcome Bags & Event Details</h3>
              <p className="text-[var(--cv-muted)] text-sm">Custom welcome bags filled with Indian sweets, herbal teas, mehndi kits, and keepsakes — a memorable first impression for out-of-town guests.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

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
