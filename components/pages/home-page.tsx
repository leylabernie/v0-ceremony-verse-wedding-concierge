"use client"

import { Shield, Eye, Video, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react"

interface HomePageProps {
  onNavigate: (page: "contact" | "services" | "journey") => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-in">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-navy overflow-hidden">
        {/* Subtle radial gold glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/10 rounded-full blur-[120px]" />
        </div>
        {/* Gold top border accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block px-4 py-1.5 border border-gold/40 text-gold text-sm font-medium rounded-full mb-8 tracking-wider uppercase">
            Your Trusted Sourcing Partner
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6 text-balance">
            Skip the Flights. Skip the WhatsApp Scammers.{" "}
            <span className="text-gold">Meet Your Trusted Personal Sourcing Team in India.</span>
          </h1>
          <p className="text-lg sm:text-xl text-ivory/75 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            Source authentic, custom-made wedding outfits, ethical heritage weaves, jewelry, and
            ceremonial items directly from factory manufacturers at the source. No family in India required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="group px-8 py-4 bg-gold text-navy font-semibold text-lg rounded-md
                shadow-[0_4px_24px_rgba(197,160,89,0.35)]
                hover:bg-gold-light hover:shadow-[0_4px_32px_rgba(197,160,89,0.65)]
                transition-all duration-300 flex items-center gap-2"
            >
              Book Your Concierge Intake
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => onNavigate("journey")}
              className="px-8 py-4 border-2 border-gold/40 text-ivory font-medium text-lg rounded-md
                hover:border-gold hover:text-gold hover:shadow-[0_0_16px_rgba(197,160,89,0.3)]
                transition-all duration-300"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-navy border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gold/20">
            {[
              { number: "500+", label: "Wedding Parties Served" },
              { number: "15+", label: "Verified Manufacturers" },
              { number: "100%", label: "Quality Guarantee" },
              { number: "12", label: "Years of Expertise" },
            ].map((stat, index) => (
              <div key={index} className="px-6 py-8 text-center">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-ivory/60 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 border border-gold/40 text-gold text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Know the Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4 text-balance">
              The Truth About Online Sourcing
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">
              Understand the difference between risky online shopping and our vetted, in-person sourcing process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {/* Risk Column */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy">Instagram / Etsy Shops</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Stolen catalog photos from real manufacturers",
                  "Unknown fabric quality and composition",
                  "No way to verify actual product before purchase",
                  "Poor stitching and finishing hidden in photos",
                  "Zero recourse for sizing issues or defects",
                  "Opaque pricing with massive hidden markups",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 mt-0.5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 text-xs font-bold">✕</span>
                    <span className="text-navy/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CeremonyVerse Standard */}
            <div className="bg-navy rounded-2xl p-8 shadow-xl border border-gold/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/20 border border-gold/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ivory">The CeremonyVerse Standard</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Eye, text: "Physical in-person quality checks at every stage" },
                  { icon: CheckCircle, text: "Verified thread count and fabric authenticity" },
                  { icon: Video, text: "HD video approval for fabrics before production" },
                  { icon: CheckCircle, text: "Direct factory relationships with transparent pricing" },
                  { icon: Shield, text: "Full sizing guarantee with alteration coverage" },
                  { icon: CheckCircle, text: "24/7 communication with your dedicated sourcing team" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 bg-gold/20 border border-gold/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-ivory/85">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work / The CeremonyVerse Protocol ── */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A192F] rounded-2xl p-8 sm:p-12 border-2 border-[#C5A059] shadow-[0_8px_40px_rgba(197,160,89,0.25)] relative overflow-hidden">
            {/* Decorative gold corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#C5A059] rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#C5A059] rounded-br-2xl" />
            
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 border border-[#C5A059]/50 text-[#C5A059] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                How We Work
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FDFBF7] text-balance">
                The CeremonyVerse Protocol
              </h2>
            </div>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C5A059]/20 border border-[#C5A059]/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#C5A059] font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#C5A059] text-lg mb-2">Direct Source Management</h3>
                  <p className="text-[#FDFBF7]/80 leading-relaxed">
                    All communications with manufacturers in India are handled exclusively by our studio to protect design integrity.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C5A059]/20 border border-[#C5A059]/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#C5A059] font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#C5A059] text-lg mb-2">The 3-Point Approval</h3>
                  <p className="text-[#FDFBF7]/80 leading-relaxed">
                    Clients receive three mandatory approval gates (Fabric, Embroidery, and Final Pre-Shipment). Once a gate is closed, the design is locked.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C5A059]/20 border border-[#C5A059]/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#C5A059] font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#C5A059] text-lg mb-2">Concierge Boundaries</h3>
                  <p className="text-[#FDFBF7]/80 leading-relaxed">
                    To ensure quality, we follow a structured workflow. Consultations are scheduled; we do not utilize 24/7 instant messaging.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/8 rounded-full blur-[100px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory mb-6 text-balance">
            Ready to Source with{" "}
            <span className="text-gold">Confidence?</span>
          </h2>
          <p className="text-ivory/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of families who have trusted CeremonyVerse to bring their wedding vision
            to life with authentic, ethically sourced pieces directly from India.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-gold text-navy font-semibold text-lg rounded-md
              shadow-[0_4px_24px_rgba(197,160,89,0.4)]
              hover:bg-gold-light hover:shadow-[0_4px_36px_rgba(197,160,89,0.7)]
              transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Sourcing Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  )
}
