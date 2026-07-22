"use client"

import Image from "next/image"
import type { PageType } from "@/app/page"

interface ServicesPageProps {
  onNavigate: (page: PageType) => void
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        <Image
          src="/images/services-hero.webp"
          alt="Indian wedding flat lay with lehenga, jewelry, marigolds and brass diya on marble"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 100%)", zIndex: 1 }} />
        <div className="relative py-20 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#7a6841" }}>Everything You Need</p>
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
            <Image
              src="/images/services-bridal-gold.webp"
              alt="Champagne gold bridal lehenga"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", display: "block" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bridal Lehengas & Wedding Outfits</h3>
              <p className="text-[var(--cv-muted)] text-sm">Sourced directly from India with authentic craftsmanship, full quality checks, and secure shipping to the US.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* GROOM */}
          <button type="button" onClick={() => onNavigate("groom")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            <Image
              src="/images/services-groom.webp"
              alt="Full length ivory and gold sherwani"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", display: "block" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Groom Sherwanis & Attire</h3>
              <p className="text-[var(--cv-muted)] text-sm">Custom sherwanis and groom outfits with verified craftsmanship, tailored fit, and inspection before delivery.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* BRIDESMAIDS */}
          <button type="button" onClick={() => onNavigate("bridesmaids")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            <Image
              src="/images/services-bridesmaids.webp"
              alt="Pastel bridesmaid lehengas on rack"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", objectPosition: "left center", display: "block" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bridesmaid Outfits</h3>
              <p className="text-[var(--cv-muted)] text-sm">Coordinated lehengas in matching palettes — consistent colors, fabrics, and sizing for a cohesive wedding look.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* GROOMSMEN */}
          <button type="button" onClick={() => onNavigate("groomsmen")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            <Image
              src="/images/services-groomsmen.webp"
              alt="Ivory kurta sets on rack"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", objectPosition: "center center", display: "block" }}
            />
            <div className="p-6">
              <div className="text-xs font-medium text-[var(--cv-accent)] uppercase tracking-widest mb-2">Popular Add-On</div>
              <h3 className="text-xl font-semibold mb-2">Groomsmen Attire</h3>
              <p className="text-[var(--cv-muted)] text-sm">Matching kurtas and bandhgalas for the entire crew — sourced with accurate measurements alongside the groom's order.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* FAMILY */}
          <button type="button" onClick={() => onNavigate("family")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            <Image
              src="/images/services-bridesmaids.webp"
              alt="Coordinated Indian family sarees"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Family Wedding Outfits</h3>
              <p className="text-[var(--cv-muted)] text-sm">Sarees, lehengas, and traditional outfits for parents, in-laws, and extended family — coordinated across colors and fabrics.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* PETS */}
          <button type="button" onClick={() => onNavigate("pets")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            <Image
              src="/images/services-pets.webp"
              alt="Two dogs dressed for a wedding — shih tzu in gold sherwani and maltese in teal lehenga"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <div className="p-6">
              <div className="text-xs font-medium text-[var(--cv-accent)] uppercase tracking-widest mb-2">Fan Favorite</div>
              <h3 className="text-xl font-semibold mb-2">Pet Outfits (Dogs & Cats)</h3>
              <p className="text-[var(--cv-muted)] text-sm">Custom sherwanis, lehengas, and bandanas for your fur babies — matched to your wedding palette and made for comfort.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* JEWELRY */}
          <button type="button" onClick={() => onNavigate("jewelry")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            <Image
              src="/images/services-jewelry-real.webp"
              alt="Authentic kundan polki bridal jewelry set with emerald green stones — sourced from India for NRI brides in USA by CeremonyVerse"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", display: "block" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Jewelry & Bridal Accessories</h3>
              <p className="text-[var(--cv-muted)] text-sm">Bridal jewelry, accessories, and finishing pieces sourced with quality verification and attention to detail.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* CEREMONIAL */}
          <button type="button" onClick={() => onNavigate("ceremonial")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            <Image
              src="/images/services-ceremonial2.webp"
              alt="Mehndi ceremony with marigolds and brass diyas"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Ceremonial Items & Ritual Essentials</h3>
              <p className="text-[var(--cv-muted)] text-sm">Items needed for traditional ceremonies sourced accurately to match cultural requirements and rituals.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* GIFTS */}
          <button type="button" onClick={() => onNavigate("gifts")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            <Image
              src="/images/services-gifts.webp"
              alt="Colourful silk potli bags in emerald, navy, burgundy and lavender in a gold ballroom"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", objectPosition: "center center", display: "block" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Wedding Gifts & Return Gifts</h3>
              <p className="text-[var(--cv-muted)] text-sm">Thoughtful gift sourcing — sarees, dry fruit hampers, silver items, and curated return gifts for guests and family.</p>
              <p className="text-[var(--cv-accent)] text-xs font-medium mt-3">Tap to explore →</p>
            </div>
          </button>

          {/* WELCOME BAGS */}
          <button type="button" onClick={() => onNavigate("welcomebags")} className="text-left bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full">
            <Image
              src="/images/services-welcomebags.webp"
              alt="Personalized monogram jute welcome bags"
              width={800}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover", objectPosition: "center center", display: "block" }}
            />
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
