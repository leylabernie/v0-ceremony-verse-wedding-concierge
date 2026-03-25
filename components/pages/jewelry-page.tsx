"use client"
import type { PageType } from "@/app/page"
interface Props { onNavigate: (page: PageType) => void }

export function JewelryPage({ onNavigate }: Props) {
  return (
    <div className="bg-[var(--cv-bg)]">
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services-jewelry3.jpg" alt="Bridal kundan jewelry set" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>The Finishing Touch</p>
          <h1 className="text-5xl font-semibold mb-6" style={{ color: "#fff" }}>Jewelry & Bridal Accessories</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>Authentic bridal jewelry sourced directly from India's finest craftsmen — kundan, polki, temple, and meenakari — inspected and delivered to your door.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Kundan Sets", desc: "Traditional kundan necklaces, earrings, and maang tikka — the most popular bridal jewelry style." },
            { title: "Polki & Diamond Look", desc: "Uncut polki sets with antique gold finish for a regal, heirloom-quality appearance." },
            { title: "Temple Jewelry", desc: "South Indian gold-tone temple jewelry — perfect for traditional ceremonies." },
            { title: "Meenakari Jewelry", desc: "Colorful enamel-work pieces from Jaipur — ideal for mehndi and sangeet events." },
            { title: "Bangles & Chooda", desc: "Lac bangles, glass chooda, and gold-tone bangles in any color to match your outfit." },
            { title: "Maang Tikka & Nath", desc: "Statement pieces — matha patti, nath, and passa — coordinated with your full set." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--cv-foreground)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--cv-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "#f0ebe3" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Every piece quality-checked before shipping</h2>
          <p className="text-[var(--cv-muted)]">We photograph jewelry under HD lighting showing stone clarity, setting quality, and color accuracy. What you approve in video is exactly what ships.</p>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Complete your bridal look</h2>
        <p className="text-[var(--cv-muted)] mb-8 max-w-xl mx-auto">From a single statement necklace to a full bridal jewelry trousseau — we source pieces that complement your lehenga and budget.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => onNavigate("contact")} className="btn-primary">Book Free Consultation</button>
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20need%20bridal%20jewelry%20sourcing." target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Bhamini</a>
        </div>
      </section>
    </div>
  )
}
