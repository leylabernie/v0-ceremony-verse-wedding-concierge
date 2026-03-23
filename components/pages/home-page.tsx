"use client"

import { Shield, Eye, Video, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react"

interface HomePageProps {
  onNavigate: (page: "contact") => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-navy overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
            Your Trusted Sourcing Partner
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6 text-balance">
            Skip the Flights. Skip the WhatsApp Scammers.{" "}
            <span className="text-gold">Meet Your Trusted Personal Sourcing Team in India.</span>
          </h1>
          <h2 className="text-lg sm:text-xl text-ivory/80 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            Source authentic, custom-made wedding outfits, ethical heritage weaves, jewelry, and 
            ceremonial items directly from factory manufacturers at the source. No family in India required.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-gold text-navy font-semibold text-lg rounded-md hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              Book Your Concierge Intake
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 border-2 border-ivory/30 text-ivory font-medium text-lg rounded-md hover:border-gold hover:text-gold transition-all duration-200"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Wedding Parties Served" },
              { number: "15+", label: "Verified Manufacturers" },
              { number: "100%", label: "Quality Guarantee" },
              { number: "12", label: "Years of Expertise" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-navy/70 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Truth About Sourcing - Comparison Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              The Truth About Sourcing
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Know the difference between risky online shopping and our vetted, in-person sourcing process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Risk Column */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy">Instagram / Etsy Shops</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Stolen catalog photos from legitimate manufacturers",
                  "Unknown fabric quality and composition",
                  "No way to verify actual product before purchase",
                  "Poor stitching and finishing hidden in photos",
                  "Zero recourse for sizing issues or defects",
                  "Opaque pricing with massive markups",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-xs font-bold">X</span>
                    </div>
                    <span className="text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The CeremonyVerse Standard */}
            <div className="bg-navy rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ivory">The CeremonyVerse Standard</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Eye, text: "Physical in-person quality checks at every stage" },
                  { icon: CheckCircle, text: "Verified thread count and fabric authenticity" },
                  { icon: Video, text: "Video approval for fabrics before production" },
                  { icon: CheckCircle, text: "Direct factory relationships with transparent pricing" },
                  { icon: Shield, text: "Full sizing guarantee with alterations support" },
                  { icon: CheckCircle, text: "24/7 communication with your sourcing team" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-ivory/90">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-6">
            Ready to Source with Confidence?
          </h2>
          <p className="text-navy/70 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of families who have trusted CeremonyVerse to bring their wedding vision to life 
            with authentic, ethically sourced pieces from India.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="px-10 py-4 bg-gold text-navy font-semibold text-lg rounded-md hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
          >
            Start Your Sourcing Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}
