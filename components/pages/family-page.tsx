"use client"
import type { PageType } from "@/app/page"
interface Props { onNavigate: (page: PageType) => void }

export function FamilyPage({ onNavigate }: Props) {
  return (
    <div className="bg-[var(--cv-bg)]">
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services-bridesmaids.png" alt="Coordinated family sarees" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>For the Whole Family</p>
          <h1 className="text-5xl font-semibold mb-6" style={{ color: "#fff" }}>Family Wedding Outfits</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>Sarees, lehengas, and traditional outfits for parents, in-laws, siblings, and extended family — coordinated so everyone looks unified and beautiful.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Mother of the Bride/Groom", desc: "Silk sarees, lehengas, and salwar suits in colors that complement the bridal palette." },
            { title: "Father Outfits", desc: "Sherwanis, kurta sets, and bandhgalas for fathers and father-in-laws." },
            { title: "Siblings", desc: "Coordinated outfits for brothers and sisters — matching or complementary to the main wedding colors." },
            { title: "Extended Family", desc: "Outfits for uncles, aunts, and cousins across any family size, sourced together." },
            { title: "Multi-Ceremony Coordination", desc: "Separate looks for mehndi, sangeet, wedding, and reception — all coordinated." },
            { title: "Color Theme Planning", desc: "We help plan a cohesive family color story across all ceremonies and generations." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--cv-foreground)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--cv-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-6" style={{ background: "#f0ebe3" }}>
        <p className="text-center font-medium" style={{ color: "var(--cv-foreground)" }}>
          ✦ Top vendors book 6–12 months out. <span style={{ color: "var(--cv-muted)", fontWeight: 400 }}>The earlier you start, the better your selection.</span>
        </p>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Dress the whole family</h2>
        <p className="text-[var(--cv-muted)] mb-8 max-w-xl mx-auto">We've coordinated outfits for families of 20+, across multiple states and ceremonies. One point of contact. Zero stress.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => onNavigate("contact")} className="btn-primary">Book Free Consultation</button>
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20need%20family%20wedding%20outfits." target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Bhamini</a>
        </div>
      </section>
    </div>
  )
}
