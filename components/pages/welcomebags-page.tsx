"use client"
import type { PageType } from "@/app/page"
interface Props { onNavigate: (page: PageType) => void }

export function WelcomeBagsPage({ onNavigate }: Props) {
  return (
    <div className="bg-[var(--cv-bg)]">
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services-welcomebags.jpg" alt="Personalized jute welcome bags" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>First Impressions Matter</p>
          <h1 className="text-5xl font-semibold mb-6" style={{ color: "#fff" }}>Welcome Bags & Event Details</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>Curated welcome bags that greet your out-of-town guests with Indian sweets, keepsakes, and a taste of your wedding story.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Indian Sweets & Snacks", desc: "Individually packaged mithai, namkeen, and premium snack assortments from India." },
            { title: "Herbal Teas & Spices", desc: "Curated chai blends, masala packets, and artisan spice sets." },
            { title: "Mehndi Kits", desc: "Pre-filled mehndi cones and design cards for guests to enjoy at the mehndi event." },
            { title: "Keepsake Items", desc: "Miniature brass diyas, incense sets, or small framed prints as memorable keepsakes." },
            { title: "Personalized Inserts", desc: "Custom welcome cards with your wedding weekend schedule and personal note." },
            { title: "Bag & Packaging", desc: "Jute tote bags, cloth potlis, or kraft boxes — all customizable with your monogram." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--cv-foreground)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--cv-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome your guests in style</h2>
        <p className="text-[var(--cv-muted)] mb-8 max-w-xl mx-auto">We curate, pack, and ship welcome bags for any guest count. Add them to your outfit order and we'll handle everything together.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" className="btn-primary">Book Free Consultation</a>
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20need%20welcome%20bags%20for%20my%20wedding%20guests." target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Bhamini</a>
        </div>
      </section>
    </div>
  )
}
