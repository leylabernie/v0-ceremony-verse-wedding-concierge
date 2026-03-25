"use client"
import type { PageType } from "@/app/page"
interface Props { onNavigate: (page: PageType) => void }

export function PetsPage({ onNavigate }: Props) {
  return (
    <div className="bg-[var(--cv-bg)]">
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services-pets.jpg" alt="Two dogs in Indian wedding outfits — sherwani and lehenga" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c7b28a" }}>Fan Favorite</p>
          <h1 className="text-5xl font-semibold mb-6" style={{ color: "#fff" }}>Pet Outfits for Dogs & Cats</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>Your fur babies deserve to look the part too. Custom Indian wedding outfits for dogs and cats — matched to your wedding palette and made for comfort.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Mini Sherwanis", desc: "Embroidered miniature sherwanis for the groom's dog — complete with tiny buttons and fabric details." },
            { title: "Lehengas for Pets", desc: "Flowing mini lehengas with dupatta for the bride's dog or cat — in any color you choose." },
            { title: "Bandanas & Accessories", desc: "Embroidered bandanas and floral collars for pets who prefer something lighter." },
            { title: "Color Matching", desc: "We match your pet's outfit to the bride and groom's palette for perfect wedding photos." },
            { title: "Size & Comfort", desc: "Custom-measured to your pet's exact dimensions. All fabrics are pet-safe and non-restrictive." },
            { title: "Dogs & Cats", desc: "We make outfits for all breeds and sizes — from Chihuahuas to Labradors and everything in between." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--cv-foreground)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--cv-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-6 text-center" style={{ background: "#f0ebe3" }}>
        <p className="font-medium" style={{ color: "var(--cv-foreground)" }}>🐾 The most-photographed part of every wedding we do.</p>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Dress your fur baby for the big day</h2>
        <p className="text-[var(--cv-muted)] mb-8 max-w-xl mx-auto">Send us your pet's measurements and your wedding colors — we'll handle the rest. Lead time: 6–8 weeks.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => onNavigate("contact")} className="btn-primary">Book Free Consultation</button>
          <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20an%20outfit%20for%20my%20pet%20for%20the%20wedding!" target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Bhamini</a>
        </div>
      </section>
    </div>
  )
}
