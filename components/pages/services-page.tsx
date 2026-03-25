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
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("bridal")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("bridal")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-bridal-gold.jpg" alt="Champagne gold bridal lehenga with intricate embroidery hanging on a wooden rack" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Bridal Lehengas & Wedding Outfits</h3>
              <p className="text-[var(--cv-muted)]">Bridal lehengas and outfits sourced directly from India with authentic craftsmanship, full quality checks, and secure shipping to the US.</p>
            </div>
          </div>

          {/* GROOM */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("groom")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("groom")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-groom.jpg" alt="Full length ivory and gold sherwani with safa and mojari on marble surface" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Groom Sherwanis & Attire</h3>
              <p className="text-[var(--cv-muted)]">Custom sherwanis and groom outfits with verified craftsmanship, tailored fit, and inspection before delivery.</p>
            </div>
          </div>

          {/* BRIDESMAIDS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("bridesmaids")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("bridesmaids")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-bridesmaids.jpg" alt="Five coordinated pastel bridesmaid lehengas in blush, mint, sky blue, lavender and peach hanging on a gold rack" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Bridesmaid Outfits</h3>
              <p className="text-[var(--cv-muted)]">Coordinated bridesmaid lehengas and outfits sourced in matching palettes — consistent colors, fabrics, and sizing for a cohesive wedding look.</p>
            </div>
          </div>

          {/* GROOMSMEN */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("groomsmen")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("groomsmen")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-groomsmen.jpg" alt="Five matching ivory kurta sets with blue brocade Nehru jackets hanging on a wooden rack" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <div className="text-xs font-medium text-[var(--cv-accent)] uppercase tracking-widest mb-2">Popular Add-On</div>
              <h3 className="text-xl font-semibold mb-3">Groomsmen Attire</h3>
              <p className="text-[var(--cv-muted)]">Matching kurtas and bandhgalas for the entire groomsmen crew — sourced with accurate measurements and delivered with your groom's order.</p>
            </div>
          </div>

          {/* FAMILY */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("family")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("family")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-bridesmaids.png" alt="Folded coordinated Indian family sarees in warm tones" style={{ width: "100%", height: "12rem", objectFit: "cover", objectPosition: "center", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Family Wedding Outfits</h3>
              <p className="text-[var(--cv-muted)]">Sarees, lehengas, and traditional outfits for parents, in-laws, and extended family — coordinated across colors and fabrics for a unified look.</p>
              <p className="text-xs text-[var(--cv-accent)] mt-3 font-medium">✦ Vendors book 6–12 months out — start early</p>
            </div>
          </div>

          {/* PETS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("pets")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("pets")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-pets.jpg" alt="Two small dogs in Indian wedding outfits — shih tzu in gold sherwani and maltese in teal lehenga" style={{ width: "100%", height: "12rem", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            <div className="p-6">
              <div className="text-xs font-medium text-[var(--cv-accent)] uppercase tracking-widest mb-2">Fan Favorite</div>
              <h3 className="text-xl font-semibold mb-3">Pet Outfits (Dogs & Cats)</h3>
              <p className="text-[var(--cv-muted)]">Custom sherwanis, lehengas, and bandanas for your fur babies — designed to match your wedding palette and made for comfort.</p>
            </div>
          </div>

          {/* JEWELRY */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("jewelry")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("jewelry")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-jewelry3.jpg" alt="Bridal kundan choker necklace set with chandbali earrings, maang tikka and matha patti on velvet tray with rose petals" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Jewelry & Bridal Accessories</h3>
              <p className="text-[var(--cv-muted)]">Bridal jewelry, accessories, and finishing pieces sourced with quality verification and attention to detail.</p>
            </div>
          </div>

          {/* CEREMONIAL */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("ceremonial")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("ceremonial")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-ceremonial2.png" alt="Bride's hands with intricate mehndi henna at Indian ceremony with marigolds and brass diyas" style={{ width: "100%", height: "12rem", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Ceremonial Items & Ritual Essentials</h3>
              <p className="text-[var(--cv-muted)]">Items needed for traditional ceremonies sourced accurately to match cultural requirements and rituals.</p>
            </div>
          </div>

          {/* GIFTS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("gifts")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("gifts")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-gifts.jpg" alt="Colourful silk potli bags in emerald, navy, blush, lavender and gold with pearl tassels and dried roses on marble table" style={{ width: "100%", height: "12rem", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Wedding Gifts & Return Gifts</h3>
              <p className="text-[var(--cv-muted)]">Thoughtful gift sourcing — sarees, dry fruit hampers, silver items, and curated return gifts for guests and family, packaged beautifully.</p>
            </div>
          </div>

          {/* WELCOME BAGS */}
          <div className="bg-white border border-[var(--cv-border)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("welcomebags")} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onNavigate("welcomebags")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/services-welcomebags.jpg" alt="Personalized monogram jute welcome bags on table with roses, petals and gold candles" style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Welcome Bags & Event Details</h3>
              <p className="text-[var(--cv-muted)]">Custom welcome bags filled with Indian sweets, herbal teas, mehndi kits, and keepsakes — a memorable first impression for out-of-town guests.</p>
            </div>
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
