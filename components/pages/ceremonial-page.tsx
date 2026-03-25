"use client"
import type { PageType } from "@/app/page"
interface Props { onNavigate: (page: PageType) => void }

export function CeremonialPage({ onNavigate }: Props) {
  return (
    <div className="bg-[var(--cv-bg)]">
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services-ceremonial2.png" alt="Mehndi ceremony with brass diyas and marigolds" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>Sacred Traditions</p>
          <h1 className="text-5xl font-semibold mb-6" style={{ color: "#fff" }}>Ceremonial Items & Ritual Essentials</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>Authentic ritual items sourced from India to ensure every ceremony is performed with the right materials — from the mandap to the mehndi night.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Brass Diyas & Lamps", desc: "Handcrafted brass diyas and decorative lamps for the mandap and ceremony decor." },
            { title: "Puja Thalis & Sets", desc: "Complete puja thali sets with all items needed for traditional wedding rituals." },
            { title: "Dupattas & Chunnis", desc: "Embroidered and embellished dupattas for the bride, mother, and ceremony participants." },
            { title: "Kalash & Coconut Sets", desc: "Traditional kalash sets used in Hindu and Sikh wedding ceremonies." },
            { title: "Garlands & Varmala", desc: "Fresh-style artificial varmalas and flower garlands in custom colors." },
            { title: "Sindoor & Accessories", desc: "Traditional sindoor boxes, mangalsutra supports, and ceremony accessories." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--cv-foreground)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--cv-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Source everything your ceremonies need</h2>
        <p className="text-[var(--cv-muted)] mb-8 max-w-xl mx-auto">Tell us your ceremony type — Hindu, Sikh, Jain, or fusion — and we'll source every item needed, correctly and on time.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => onNavigate("contact")} className="btn-primary">Book Free Consultation</button>
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20need%20ceremonial%20items%20sourced." target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Bhamini</a>
        </div>
      </section>
    </div>
  )
}
