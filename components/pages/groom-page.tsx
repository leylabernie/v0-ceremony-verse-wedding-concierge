"use client"

type PageType =
  | "home"
  | "services"
  | "journey"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"
  | "bridal"
  | "groom"

interface GroomPageProps {
  onNavigate?: (page: PageType) => void
}

export function GroomPage({ onNavigate }: GroomPageProps) {
  return (
    <main>

      {/* HERO */}
      <section className="relative text-center overflow-hidden" style={{ minHeight: "480px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/groom-hero.png" alt="Indian groom in ivory gold sherwani with blue safa in palace hall" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.62) 100%)", zIndex: 1 }} />
        <div className="relative py-24 px-6" style={{ zIndex: 2 }}>
          <p className="tracking-[0.15em] text-xs font-medium mb-4 uppercase" style={{ color: "#c7b28a" }}>Groom Sourcing</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold mb-6" style={{ color: "#fff" }}>
            Sherwanis & Groom Attire<br />Sourced from India
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10" style={{ color: "rgba(255,255,255,0.85)" }}>
            From traditional sherwanis to contemporary bandhgalas — we source authentic groom outfits with verified craftsmanship, perfect fit, and delivery to the US.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate?.("contact")}
              className="bg-[#c7b28a] text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Start Groom Sourcing
            </button>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I'm%20interested%20in%20groom%20outfit%20sourcing%20from%20CeremonyVerse."
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
            { title: "Sherwanis", desc: "Traditional and modern sherwanis in silk, brocade, and velvet. Long or short, with or without embroidery — we find exactly what fits your style." },
            { title: "Bandhgala & Indo-Western", desc: "Contemporary groom styles for reception and cocktail events. Clean lines, subtle embroidery, modern silhouettes." },
            { title: "Kurta Pajama Sets", desc: "Relaxed kurta sets for mehndi, haldi, or day events — light fabrics, subtle prints, comfortable and sharp." },
            { title: "Nehru Jackets", desc: "Structured Nehru jackets to layer over kurtas for a polished, modern groom look across multiple events." },
            { title: "Safa & Accessories", desc: "Matching or complementary safa (turban), mojari footwear, pocket squares, and finishing accessories." },
            { title: "Groomsmen Sets", desc: "We coordinate multiple sets ensuring color consistency, matching fabrics, and accurate sizing for the whole party." },
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
          <h2 className="text-3xl font-semibold text-center mb-10 text-[#1f1f1f]">Why Grooms Choose CeremonyVerse</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "No guesswork on fit", desc: "We collect detailed measurements and build in allowance. Sherwanis are tailored to your exact size — no alterations needed in most cases." },
              { title: "Verified craftsmanship", desc: "Every manufacturer we work with has been personally vetted. We inspect stitching, embroidery, and fabric quality before anything ships." },
              { title: "Coordinated with the bridal look", desc: "We ensure groom and groomsmen attire complements the bridal party colors, fabrics, and overall wedding aesthetic." },
              { title: "Save 30–50% vs. US stores", desc: "Direct factory access means no boutique markup. You get better quality at a fraction of what US stores charge for the same craftsmanship." },
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

      {/* PRICE COMPARISON */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-4 text-center" style={{ color: "#c7b28a" }}>The Numbers</p>
          <h2 className="text-3xl font-semibold text-center mb-10 text-[#1f1f1f]">What You Save Sourcing from India</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e6dfd5]">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1f1f1f", color: "#fff" }}>
                  <th className="text-left px-6 py-4 font-medium">Item</th>
                  <th className="text-center px-6 py-4 font-medium">US Boutique</th>
                  <th className="text-center px-6 py-4 font-medium" style={{ color: "#c7b28a" }}>CeremonyVerse</th>
                  <th className="text-center px-6 py-4 font-medium" style={{ color: "#c7b28a" }}>Savings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "Groom Sherwani (full set)", us: "$800–$2,500", cv: "$350–$900", save: "Up to 55%" },
                  { item: "Bandhgala / Indo-Western", us: "$600–$1,800", cv: "$250–$700", save: "Up to 60%" },
                  { item: "Groomsmen Kurta Set (x5)", us: "$1,500–$3,500", cv: "$600–$1,400", save: "Up to 60%" },
                  { item: "Safa & Accessories", us: "$200–$500", cv: "$80–$180", save: "Up to 65%" },
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
          <p className="text-xs text-[#8a6f63] mt-4 text-center">Estimates based on comparable quality. Every order includes an itemized quote.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1f1f1f] text-white text-center">
        <p className="tracking-[0.15em] text-xs font-medium text-[#c7b28a] mb-4 uppercase">Ready to Begin?</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Let's find your perfect groom look.
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">
          Book a free consultation. We'll match your style, coordinate with the bridal look, and source the right outfit — stress free.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate?.("contact")}
            className="bg-[#c7b28a] text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Book Free Consultation
          </button>
          <a
            href="https://wa.me/12153419990?text=Hi%2C%20I'm%20interested%20in%20groom%20outfit%20sourcing%20from%20CeremonyVerse."
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
