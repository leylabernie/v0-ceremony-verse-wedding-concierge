"use client"

type PageType =
  | "home"
  | "services"
  | "journey"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"

interface BridalPageProps {
  onNavigate?: (page: PageType) => void
}

export function BridalPage({ onNavigate }: BridalPageProps) {
  return (
    <main>

      {/* HERO */}
      <section className="relative text-center overflow-hidden" style={{ minHeight: "480px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/bridal-hero.png" alt="Indian bride in red and gold bridal lehenga in a marble palace" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.6) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="tracking-[0.15em] text-xs font-medium mb-4 uppercase" style={{ color: "#c7b28a" }}>Bridal Sourcing</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold mb-6" style={{ color: "#fff" }}>
            Your Dream Lehenga,<br />Sourced from India
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10" style={{ color: "rgba(255,255,255,0.85)" }}>
            From bridal lehengas to reception looks — we find authentic, handcrafted outfits directly from India’s best manufacturers. Live video verification. Quality guaranteed. Delivered to your door.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate?.("contact")}
              className="bg-[#c7b28a] text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Start Your Bridal Sourcing
            </button>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I'm%20interested%20in%20bridal%20outfit%20sourcing%20from%20CeremonyVerse."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-[#1f1f1f] transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="py-16 px-6 bg-[#f9f6f3]">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#1f1f1f]">
          What We Help You Source
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Bridal Lehengas", desc: "Classic, contemporary, and fully custom lehengas in every fabric — silk, velvet, georgette, and more. Any color, any embroidery style." },
            { title: "Reception Outfits", desc: "Modern reception looks — sarees, Indo-western gowns, or a second lehenga — tailored to your style and event vibe." },
            { title: "Mehndi & Sangeet Looks", desc: "Coordinated outfits for every pre-wedding ceremony. We source each look to complement your overall bridal story." },
            { title: "Dupatta & Veil", desc: "Embroidered or printed dupattas to match or contrast your lehenga — including heavy bridal dupattas with gold work." },
            { title: "Custom Embroidery", desc: "Want your initials, a motif, or a specific embroidery pattern? We coordinate directly with artisans for custom work." },
            { title: "Full Bridal Set", desc: "Lehenga + blouse + dupatta sourced as a complete set, ensuring fabric, color, and embroidery are perfectly matched." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#e6dfd5]">
              <h3 className="font-semibold text-[#1f1f1f] mb-2">{item.title}</h3>
              <p className="text-sm text-[#6a5c55] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 text-[#1f1f1f]">Why Brides Choose CeremonyVerse</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "No flying to India required", desc: "We handle everything remotely. Live video shopping sessions let you see and approve every detail before anything is made or shipped." },
              { title: "Only vetted manufacturers", desc: "We work with 15–20 manufacturers we've personally visited. No Instagram sellers, no middlemen, no surprises." },
              { title: "Transparent pricing", desc: "You see exactly what you pay — factory cost, our sourcing fee, shipping, and customs. Most brides save 30–50% vs. US boutiques." },
              { title: "Guaranteed fit", desc: "We collect 15+ measurements and build in alteration allowance. 99% first-time fit rate. If alterations are needed due to our error, we cover the cost." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-[#f9f6f3] rounded-2xl">
                <span className="text-[#c7b28a] font-semibold text-lg mt-0.5">—</span>
                <div>
                  <h3 className="font-semibold text-[#1f1f1f] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6a5c55] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-6 bg-[#f9f6f3] text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#1f1f1f]">How Bridal Sourcing Works</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          {[
            { step: "01", title: "Share Your Vision", desc: "Send references, color preferences, event dates, and budget. We take it from there." },
            { step: "02", title: "We Curate Options", desc: "We shortlist outfits from trusted manufacturers that match your vision and budget." },
            { step: "03", title: "Live Video Review", desc: "Join a video session to see fabrics, embroidery, and colors in real time before deciding." },
            { step: "04", title: "Quality Check & Ship", desc: "We inspect every piece before it ships, then deliver directly to your US address." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-xs tracking-widest text-[#c7b28a] font-medium mb-3 uppercase">Step {item.step}</p>
              <h3 className="font-semibold text-[#1f1f1f] mb-2">{item.title}</h3>
              <p className="text-sm text-[#6a5c55]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICE COMPARISON */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-4 text-center" style={{ color: "#c7b28a" }}>The Numbers</p>
          <h2 className="text-3xl font-semibold text-center mb-10 text-[#1f1f1f]">Why Source from India?</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e6dfd5]">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1f1f1f", color: "#fff" }}>
                  <th className="text-left px-6 py-4 font-medium">Outfit Type</th>
                  <th className="text-center px-6 py-4 font-medium">US Boutique</th>
                  <th className="text-center px-6 py-4 font-medium" style={{ color: "#c7b28a" }}>CeremonyVerse</th>
                  <th className="text-center px-6 py-4 font-medium" style={{ color: "#c7b28a" }}>Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "Bridal Lehenga (heavy embroidery)", us: "$3,500–$8,000", cv: "$1,200–$3,500", save: "Up to 60%" },
                  { item: "Groom Sherwani", us: "$800–$2,500", cv: "$350–$900", save: "Up to 55%" },
                  { item: "Bridesmaid Lehenga (set of 6)", us: "$3,000–$6,000", cv: "$900–$2,400", save: "Up to 65%" },
                  { item: "Bridal Jewelry Set", us: "$600–$2,000", cv: "$200–$700", save: "Up to 65%" },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9f6f3" }}>
                    <td className="px-6 py-4 text-[#1f1f1f] font-medium">{row.item}</td>
                    <td className="px-6 py-4 text-center text-[#6a5c55] line-through">{row.us}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#1f1f1f]">{row.cv}</td>
                    <td className="px-6 py-4 text-center font-semibold" style={{ color: "#c7b28a" }}>{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#8a6f63] mt-4 text-center">
            Estimates based on comparable quality items. Itemized quotes provided for every order.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1f1f1f] text-white text-center">
        <p className="tracking-[0.15em] text-xs font-medium text-[#c7b28a] mb-4 uppercase">Ready to Begin?</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Let's find your perfect bridal look.
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">
          Book a free 30-minute consultation. We'll review your vision, budget, and timeline — no commitment required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate?.("contact")}
            className="bg-[#c7b28a] text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Book Free Consultation
          </button>
          <a
            href="https://wa.me/12153419990?text=Hi%2C%20I'm%20interested%20in%20bridal%20outfit%20sourcing%20from%20CeremonyVerse."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium hover:border-white transition"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}
