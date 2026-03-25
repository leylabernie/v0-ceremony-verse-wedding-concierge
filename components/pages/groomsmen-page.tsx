"use client"
import type { PageType } from "@/app/page"
interface Props { onNavigate: (page: PageType) => void }

export function GroomsmenPage({ onNavigate }: Props) {
  return (
    <div className="bg-[var(--cv-bg)]">
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services-groomsmen.jpg" alt="Groomsmen kurta sets on rack" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.62) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>Popular Add-On</p>
          <h1 className="text-5xl font-semibold mb-6" style={{ color: "#fff" }}>Groomsmen Attire</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>Matching kurtas, bandhgalas, and Nehru jacket sets for your groomsmen — coordinated with the groom's look and delivered together.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Kurta Pajama Sets", desc: "Classic kurta pajama in matching colors — the most popular groomsmen choice." },
            { title: "Nehru Jacket Sets", desc: "Embroidered Nehru jackets over a plain kurta for a polished, coordinated look." },
            { title: "Bandhgala Suits", desc: "Indo-western bandhgalas for groomsmen who prefer a more formal silhouette." },
            { title: "Color Coordination", desc: "We match groomsmen colors to the groom's sherwani — contrast or complementary." },
            { title: "Group Sizing", desc: "Individual measurements for each groomsman, even across multiple US states." },
            { title: "Bundled Delivery", desc: "All groomsmen outfits shipped together with the groom's order to one address." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--cv-foreground)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--cv-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 text-center" style={{ background: "#f0ebe3" }}>
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--cv-accent)" }}>Save when you bundle</p>
        <p className="text-[var(--cv-foreground)] font-medium">Order groomsmen outfits with the groom's sherwani and save on shipping & coordination fees.</p>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Coordinate the whole crew</h2>
        <p className="text-[var(--cv-muted)] mb-8 max-w-xl mx-auto">We collect measurements from each groomsman remotely and ship everything together. Average turnaround: 8–10 weeks.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => onNavigate("contact")} className="btn-primary">Book Free Consultation</button>
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20need%20groomsmen%20outfits." target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Bhamini</a>
        </div>
      </section>
    </div>
  )
}
