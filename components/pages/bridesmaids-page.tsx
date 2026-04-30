"use client"
import type { PageType } from "@/app/page"
interface Props { onNavigate: (page: PageType) => void }

export function BridesmaidsPage({ onNavigate }: Props) {
  return (
    <div className="bg-[var(--cv-bg)]">
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services-bridesmaids.jpg" alt="Pastel bridesmaid lehengas on rack" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.62) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>For the Squad</p>
          <h1 className="text-5xl font-semibold mb-6" style={{ color: "#fff" }}>Bridesmaid Outfits</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>Coordinated lehengas, sarees, and salwar sets sourced in matching palettes — so your girls look stunning and cohesive on every ceremony.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Lehengas", desc: "Full lehenga sets in coordinated colors — available in any palette to match your bridal look." },
            { title: "Sarees", desc: "Silk, georgette, and chiffon sarees in matching shades for a timeless bridesmaids look." },
            { title: "Anarkali Suits", desc: "Flowy Anarkali sets for bridesmaids who prefer a covered, elegant silhouette." },
            { title: "Sharara Sets", desc: "Contemporary sharara and palazzo sets — perfect for modern bridesmaids." },
            { title: "Dupatta Matching", desc: "Every set comes with a matching or contrast dupatta coordinated to your theme." },
            { title: "Blouse Customization", desc: "Blouse sizes and cuts customized per bridesmaid for a perfect, flattering fit." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--cv-foreground)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--cv-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "#f0ebe3" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">How Bridesmaid Sourcing Works</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {["Share your color palette & inspiration", "Live video sessions to pick fabrics & styles", "Individual measurements collected per bridesmaid", "Quality checked & shipped to one US address"].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-[var(--cv-border)]">
                <div className="text-2xl font-bold mb-2" style={{ color: "var(--cv-accent)" }}>0{i+1}</div>
                <p className="text-sm" style={{ color: "var(--cv-muted)" }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--cv-accent)" }}>✦ Vendors book 6–12 months out</p>
        <h2 className="text-3xl font-semibold mb-4">Ready to coordinate your squad?</h2>
        <p className="text-[var(--cv-muted)] mb-8 max-w-xl mx-auto">We handle every measurement, follow-up, and delivery. Most bridesmaid orders take 8–12 weeks from design to your door.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" className="btn-primary">Book Free Consultation</a>
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20need%20help%20with%20bridesmaid%20outfits." target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Bhamini</a>
        </div>
      </section>
    </div>
  )
}
