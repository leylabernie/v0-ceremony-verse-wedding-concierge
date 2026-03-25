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
      <section className="py-20 px-6 text-center">
        <p className="tracking-[0.15em] text-xs font-medium text-[#8a6f63] mb-4 uppercase">Bridal Sourcing</p>
        <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1f1f1f] mb-6">
          Your Dream Lehenga,<br />Sourced from India
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#5a4a42] mb-10">
          From bridal lehengas to reception looks — we find authentic, handcrafted outfits directly from India's best manufacturers. Live video verification. Quality guaranteed. Delivered to your door.
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
            className="border border-[#25D366] text-[#25D366] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#25D366] hover:text-white transition"
          >
            WhatsApp Us
          </a>
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
