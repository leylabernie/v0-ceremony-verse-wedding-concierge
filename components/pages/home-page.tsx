"use client"

import { Shield, Eye, Video, CheckCircle, AlertTriangle, ArrowRight, Lock } from "lucide-react"

interface HomePageProps {
  onNavigate: (page: "contact" | "services" | "journey") => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-in">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-midnight-navy overflow-hidden">
        {/* Subtle rose gold glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-gold/8 rounded-full blur-[120px]" />
        </div>
        {/* Rose gold top border accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block px-4 py-1.5 border border-rose-gold/40 text-rose-gold text-sm font-medium rounded-full mb-8 tracking-wider uppercase">
            Your Trusted Sourcing Partner
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne leading-tight mb-6 text-balance">
            Skip the Flights. Skip the Scams.{" "}
            <span className="text-rose-gold">Meet Your Personal Sourcing Team in India.</span>
          </h1>
          <p className="text-lg sm:text-xl text-champagne/75 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            Source authentic, custom-made wedding outfits, ethical heritage weaves, jewelry, and
            ceremonial items directly from factory manufacturers. Vetted, verified, and yours alone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="group px-8 py-3.5 bg-champagne text-midnight-navy border-1.5 border-rose-gold font-semibold text-base rounded-full
                hover:bg-muted-rose hover:shadow-[0_6px_24px_rgba(212,175,55,0.25)]
                transition-all duration-300 flex items-center gap-2"
            >
              Book Your Concierge Intake
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => onNavigate("journey")}
              className="px-8 py-3.5 border-1.5 border-rose-gold/40 text-midnight-navy font-semibold text-base rounded-full
                hover:border-rose-gold hover:text-midnight-navy hover:shadow-[0_4px_16px_rgba(212,175,55,0.2)]
                transition-all duration-300 bg-champagne/50"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-midnight-navy border-y border-rose-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-rose-gold/20">
            {[
              { number: "500+", label: "Wedding Parties Served" },
              { number: "15+", label: "Verified Manufacturers" },
              { number: "100%", label: "Quality Guarantee" },
              { number: "12", label: "Years of Expertise" },
            ].map((stat, index) => (
              <div key={index} className="px-6 py-8 text-center">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-rose-gold mb-2">{stat.number}</div>
                <div className="text-champagne/60 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The CeremonyVerse Guarantee ── */}
      <section className="py-32 sm:py-40 bg-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-garamond text-5xl sm:text-6xl lg:text-7xl font-light text-midnight-navy mb-8 text-balance leading-tight">
              The CeremonyVerse Guarantee
            </h2>
            <p className="text-midnight-navy/60 text-lg max-w-2xl mx-auto font-light">
              Every piece you source through our studio carries three signatures of authenticity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: "Physical Factory Audits in India",
                description: "Our team conducts in-person quality inspections at every manufacturing stage in Delhi, Mumbai, and Chennai. Your pieces are never sourced sight unseen."
              },
              {
                title: "Direct Artisan Sourcing",
                description: "We work directly with verified heritage manufacturers—no middlemen, no markups. Every rupee you invest goes directly to craftsmanship, not intermediaries."
              },
              {
                title: "Inspected & Shipped from the USA",
                description: "Your completed pieces arrive at our USA inspection facility where we verify quality one final time before delivery to your door."
              },
            ].map((guarantee, index) => (
              <div key={index} className="text-center">
                <h3 className="font-garamond text-2xl sm:text-3xl font-light text-midnight-navy mb-4 leading-relaxed">
                  {guarantee.title}
                </h3>
                <p className="text-midnight-navy/60 text-base leading-relaxed font-light">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust vs Risk Comparison ── */}
      <section className="py-20 sm:py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 border border-rose-gold/40 text-rose-gold text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Know the Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-midnight-navy mb-4 text-balance">
              Why CeremonyVerse Is Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Risk Column */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-midnight-navy">Instagram / Etsy Shops</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Stolen catalog photos from real manufacturers",
                  "Unknown fabric quality and composition",
                  "No way to verify actual product before purchase",
                  "Poor stitching hidden in filtered photos",
                  "Zero recourse for sizing issues or defects",
                  "Opaque pricing with massive markups",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 mt-0.5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 text-xs font-bold">✕</span>
                    <span className="text-midnight-navy/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CeremonyVerse Standard */}
            <div className="bg-midnight-navy rounded-2xl p-8 shadow-xl border-2 border-rose-gold/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-rose-gold/20 border border-rose-gold/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-rose-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-champagne">The CeremonyVerse Standard</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Eye, text: "Physical in-person audits at every manufacturing stage" },
                  { icon: CheckCircle, text: "Verified thread count and authentic dye testing" },
                  { icon: Video, text: "HD video approval before your pieces ship to the USA" },
                  { icon: CheckCircle, text: "Direct factory pricing—no middleman markups" },
                  { icon: Shield, text: "Full sizing guarantee with professional alterations" },
                  { icon: CheckCircle, text: "Dedicated concierge team throughout your journey" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 bg-rose-gold/20 border border-rose-gold/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3 h-3 text-rose-gold" />
                    </div>
                    <span className="text-champagne/85">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CeremonyVerse Protocol ── */}
      <section className="py-20 sm:py-28 bg-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-midnight-navy rounded-2xl p-8 sm:p-12 border-2 border-rose-gold/50 shadow-[0_12px_48px_rgba(212,175,55,0.25)] relative overflow-hidden">
            {/* Decorative rose gold corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-rose-gold/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-rose-gold/50 rounded-br-2xl" />
            
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 border border-rose-gold/50 text-rose-gold text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                Elite Client Protocol
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne text-balance">
                The CeremonyVerse Protocol
              </h2>
              <p className="text-champagne/70 text-lg mt-4 max-w-2xl mx-auto">
                Firm, professional boundaries that protect both your wedding vision and our manufacturing excellence.
              </p>
            </div>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-gold/20 border border-rose-gold/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-semibold text-rose-gold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-rose-gold text-lg mb-2">Direct Source Management</h3>
                  <p className="text-champagne/80 leading-relaxed">
                    All communications with manufacturers in India are handled exclusively by our studio to protect design integrity and prevent client confusion or unauthorized modifications.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-gold/20 border border-rose-gold/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-semibold text-rose-gold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-rose-gold text-lg mb-2">Locked Design Gates</h3>
                  <p className="text-champagne/80 leading-relaxed">
                    Clients receive three mandatory approval gates (Fabric, Embroidery, Final Pre-Shipment). Once approved and production begins, the design is locked to ensure your August 2026 delivery.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-gold/20 border border-rose-gold/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-semibold text-rose-gold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-rose-gold text-lg mb-2">Scheduled Concierge</h3>
                  <p className="text-champagne/80 leading-relaxed">
                    To maintain production focus and quality, we utilize scheduled consultations rather than 24/7 instant messaging. Your dedicated concierge is available within 24 hours.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── August 2026 Limited Availability ── */}
      <section className="py-20 sm:py-28 bg-midnight-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-gold/8 rounded-full blur-[100px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 border border-rose-gold/40 text-rose-gold text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
            Limited Availability
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne mb-6 text-balance">
            August 2026 Wedding Season Now Open
          </h2>
          <p className="text-champagne/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            We curate a limited number of August 2026 weddings to ensure individual attention and manufacturing excellence for every client. Early bookings receive priority sourcing access.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-champagne text-midnight-navy border-1.5 border-rose-gold font-semibold text-base rounded-full
              hover:bg-muted-rose hover:shadow-[0_6px_28px_rgba(212,175,55,0.3)]
              transition-all duration-300 inline-flex items-center gap-2"
          >
            Reserve Your Intake Slot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  )
}
