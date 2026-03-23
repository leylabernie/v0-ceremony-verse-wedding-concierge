"use client"

import { ArrowRight } from "lucide-react"
import type { PageType } from "@/app/page"

interface HomePageProps {
  onNavigate: (page: PageType) => void
}

// Floral Leaf SVG separator
function FloralSeparator() {
  return (
    <div className="floral-separator my-8">
      <svg className="leaf" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.5-2.5 2-5.5 2-8.5 0-4-2-7.5-2-11.5z" 
          fill="#C5A059" 
          fillOpacity="0.3"
        />
        <path 
          d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10c-1.5-2.5-2-5.5-2-8.5 0-4 2-7.5 2-11.5z" 
          fill="#C5A059" 
          fillOpacity="0.2"
        />
      </svg>
    </div>
  )
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-in silk-grain bg-muted-rose">

      {/* Hero Section - Clean Muted Rose Background */}
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-32 sm:py-40">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-8">
            Your Personal Sourcing Team
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-midnight-navy leading-tight mb-8 tracking-wide">
            Skip the Flights.
            <br />
            Skip the Scams.
          </h1>
          <p className="text-lg text-midnight-navy/60 max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
            Source authentic, custom-made wedding outfits and heritage weaves directly from 
            verified manufacturers in India. Vetted, verified, and yours alone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onNavigate("contact")}
              className="group px-10 py-4 bg-transparent text-midnight-navy border border-brushed-gold font-medium rounded-full
                hover:bg-brushed-gold/10 hover:shadow-[0_0_32px_rgba(197,160,89,0.2)]
                transition-all duration-300 flex items-center gap-3"
            >
              Book Your Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("journey")}
              className="px-10 py-4 border border-brushed-gold/40 text-midnight-navy/70 font-medium rounded-full
                hover:border-brushed-gold hover:text-midnight-navy
                transition-all duration-300"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </section>

      <FloralSeparator />

      {/* Signature Standards */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Signature Standards
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-midnight-navy tracking-wide">
              The CeremonyVerse Guarantee
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Physical Factory Audits in India
              </h3>
              <p className="text-midnight-navy/60 leading-relaxed font-sans">
                Our team conducts in-person quality inspections at every manufacturing stage. 
                Your pieces are never sourced sight unseen.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Direct Artisan Sourcing
              </h3>
              <p className="text-midnight-navy/60 leading-relaxed font-sans">
                We work directly with verified heritage manufacturers. No middlemen, no markups. 
                Every investment goes directly to craftsmanship.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Inspected & Shipped from the USA
              </h3>
              <p className="text-midnight-navy/60 leading-relaxed font-sans">
                Completed pieces arrive at our USA inspection facility where we verify quality 
                one final time before delivery to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FloralSeparator />

      {/* Services Bento Grid */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Our Services
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-midnight-navy tracking-wide">
              What We Source
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="lg:col-span-2 bg-champagne rounded-2xl p-10 border border-brushed-gold/30 flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="font-serif text-3xl font-semibold text-midnight-navy mb-4 tracking-wide">
                  Groomsmen Studio
                </h3>
                <p className="text-midnight-navy/60 leading-relaxed font-sans max-w-xl">
                  Coordinate your entire wedding party with custom sherwanis, kurta sets, and Indo-western 
                  ensembles. From 4 to 40 groomsmen, we handle the complexity.
                </p>
              </div>
              <button
                onClick={() => onNavigate("services")}
                className="self-start mt-8 text-brushed-gold font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Small Card */}
            <div className="bg-champagne rounded-2xl p-8 border border-brushed-gold/30 flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                  Heritage Library
                </h3>
                <p className="text-midnight-navy/60 leading-relaxed font-sans text-sm">
                  Authentic Kanchipuram silks, Banarasi weaves, and heirloom-quality sarees from 
                  verified weavers.
                </p>
              </div>
              <button
                onClick={() => onNavigate("services")}
                className="self-start mt-6 text-brushed-gold font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Small Card */}
            <div className="bg-champagne rounded-2xl p-8 border border-brushed-gold/30 flex flex-col justify-between min-h-[280px]">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                  Bridesmaid Bureau
                </h3>
                <p className="text-midnight-navy/60 leading-relaxed font-sans text-sm">
                  Lehengas, sarees, and coordinated ensembles for your bridal party with 
                  professional sizing.
                </p>
              </div>
              <button
                onClick={() => onNavigate("services")}
                className="self-start mt-6 text-brushed-gold font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Large Card */}
            <div className="lg:col-span-2 bg-champagne rounded-2xl p-10 border border-brushed-gold/30 flex flex-col justify-between min-h-[280px]">
              <div>
                <h3 className="font-serif text-3xl font-semibold text-midnight-navy mb-4 tracking-wide">
                  Ceremony Details
                </h3>
                <p className="text-midnight-navy/60 leading-relaxed font-sans max-w-xl">
                  Complete your celebration with curated ceremonial items, jewelry sourcing, 
                  and custom accessories that honor your heritage.
                </p>
              </div>
              <button
                onClick={() => onNavigate("services")}
                className="self-start mt-8 text-brushed-gold font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <FloralSeparator />

      {/* The Protocol */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-champagne rounded-2xl p-12 sm:p-16 border border-brushed-gold/30">
            <div className="text-center mb-12">
              <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-6">
                How We Work
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-midnight-navy tracking-wide">
                The CeremonyVerse Protocol
              </h2>
            </div>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <span className="font-serif text-4xl text-brushed-gold/50 font-light">01</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-midnight-navy mb-2 tracking-wide">
                    Direct Source Management
                  </h3>
                  <p className="text-midnight-navy/60 leading-relaxed font-sans">
                    All communications with manufacturers are handled exclusively by our studio 
                    to protect design integrity.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <span className="font-serif text-4xl text-brushed-gold/50 font-light">02</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-midnight-navy mb-2 tracking-wide">
                    Locked Design Gates
                  </h3>
                  <p className="text-midnight-navy/60 leading-relaxed font-sans">
                    Three mandatory approval gates: Fabric, Embroidery, and Final Pre-Shipment. 
                    Once approved, the design is locked.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <span className="font-serif text-4xl text-brushed-gold/50 font-light">03</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-midnight-navy mb-2 tracking-wide">
                    Scheduled Concierge
                  </h3>
                  <p className="text-midnight-navy/60 leading-relaxed font-sans">
                    We utilize scheduled consultations rather than 24/7 messaging to maintain 
                    production focus and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloralSeparator />

      {/* CTA Section - Rose Background */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.25em] uppercase mb-8">
            Limited Availability
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-midnight-navy mb-8 tracking-[0.04em]">
            August 2026 Wedding Season Now Open
          </h2>
          <p className="text-midnight-navy/60 text-lg mb-14 leading-[1.8] font-sans max-w-xl mx-auto">
            We curate a limited number of weddings to ensure individual attention and 
            manufacturing excellence for every client.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-transparent text-midnight-navy border border-brushed-gold font-medium rounded-full
              hover:bg-brushed-gold/10 hover:shadow-[0_0_32px_rgba(197,160,89,0.2)]
              transition-all duration-300 inline-flex items-center gap-3"
          >
            Reserve Your Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}
