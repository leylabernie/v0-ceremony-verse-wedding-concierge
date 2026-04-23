"use client"
import type { PageType } from "@/app/page"
interface Props { onNavigate: (page: PageType) => void }

export function GiftsPage({ onNavigate }: Props) {
  return (
    <div className="bg-[var(--cv-bg)]">
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services-gifts.jpg" alt="Silk potli bags as wedding return gifts" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>Give With Love</p>
          <h1 className="text-5xl font-semibold mb-6" style={{ color: "#fff" }}>Wedding Gifts & Return Gifts</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>Thoughtfully sourced return gifts and wedding favors from India — beautifully packaged silk potlis, dry fruit hampers, silverware, and more.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Silk Potli Bags", desc: "Hand-embroidered silk potli bags filled with sweets, dry fruits, or keepsakes." },
            { title: "Dry Fruit Hampers", desc: "Premium boxed dry fruit and nut assortments — a classic and universally loved return gift." },
            { title: "Silver Items", desc: "Small silver idols, bowls, and gifting items — auspicious and elegant." },
            { title: "Saree Gifts", desc: "Gifting sarees for mothers, aunts, and elder family members from the groom and bride's side." },
            { title: "Branded Boxes", desc: "Custom-printed gift boxes with your names, wedding date, and monogram." },
            { title: "Bulk Orders", desc: "We handle bulk return gifts for 50–500 guests with consistent quality and packaging." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--cv-foreground)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--cv-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Make every guest feel valued</h2>
        <p className="text-[var(--cv-muted)] mb-8 max-w-xl mx-auto">From 10 gifts to 500 — we source, package, and ship everything together with your outfit order to save on logistics.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" className="btn-primary">Book Free Consultation</a>
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20need%20help%20with%20wedding%20return%20gifts." target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Bhamini</a>
        </div>
      </section>
    </div>
  )
}
