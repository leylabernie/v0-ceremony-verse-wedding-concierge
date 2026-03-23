"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import type { PageType } from "@/app/page"

interface ServicesPageProps {
  onNavigate: (page: PageType) => void
}

const services = [
  {
    id: "groomsmen",
    title: "Groomsmen Studio",
    tagline: "Coordinated Wedding Parties",
    description:
      "Perfect coordination for your entire groomsmen party, from sherwanis to accessories — all made-to-measure.",
    features: [
      "Color-matching for parties of any size",
      "Coordinated safas, stoles, and pocket squares",
      "Custom mojaris and footwear sourcing",
      "Made-to-measure with individual sizing",
      "Group pricing transparency",
      "Pre-wedding video approval",
    ],
  },
  {
    id: "bridesmaids",
    title: "Bridesmaid Bureau",
    tagline: "Custom Coordinated Ensembles",
    description:
      "Made-to-measure outfits in any custom hue, perfectly coordinated for your bridal party.",
    features: [
      "Lehengas, sarees, and anarkalis in custom colors",
      "Fabric and embroidery customization",
      "Mix-and-match styles within color family",
      "Individual measurements for perfect fit",
      "Coordinated jewelry sets available",
      "Rush production available",
    ],
  },
  {
    id: "heritage",
    title: "Heritage Library",
    tagline: "Authentic Heritage Weaves",
    description:
      "Authentic heritage weaves sourced directly from master weavers across India.",
    features: [
      "Pure Kanchipuram silk sarees with GI tags",
      "Banarasi, Paithani, and Patola weaves",
      "Verified thread count documentation",
      "Direct weaver relationships",
      "Antique and vintage piece sourcing",
      "Investment-grade heritage pieces",
    ],
  },
  {
    id: "ceremony",
    title: "Ceremony Details",
    tagline: "Complete Accessory Sourcing",
    description:
      "Every ceremonial detail, from welcome bags to mandap decor, sourced with care.",
    features: [
      "Custom welcome bag items and gifts",
      "Wedding favors and mithai boxes",
      "Bridal and ceremonial jewelry",
      "Mandap and decor elements",
      "Pooja items and ceremonial accessories",
      "Custom packaging and presentation",
    ],
  },
]

// Floral separator component
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

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState("groomsmen")
  const activeService = services.find((s) => s.id === activeTab)!

  return (
    <div className="animate-fade-in silk-grain bg-muted-rose">

      {/* Hero */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-8">
            Our Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-midnight-navy mb-6 tracking-wide">
            What We Source
          </h1>
          <p className="text-midnight-navy/60 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            From coordinated groomsmen parties to authentic heritage silks, we handle every detail
            of your wedding sourcing with meticulous care.
          </p>
        </div>
      </section>

      <FloralSeparator />

      {/* Service Tabs */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "px-6 py-3 font-medium text-sm transition-all duration-300 rounded-full border",
                  activeTab === service.id
                    ? "bg-brushed-gold/15 text-midnight-navy border-brushed-gold"
                    : "bg-champagne text-midnight-navy/70 border-brushed-gold/30 hover:border-brushed-gold hover:text-midnight-navy"
                )}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Card */}
          <div
            key={activeService.id}
            className="animate-fade-in bg-champagne rounded-2xl border border-brushed-gold/30 p-10 sm:p-14"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Title & Description */}
              <div>
                <p className="text-brushed-gold text-sm font-medium tracking-[0.15em] uppercase mb-4">
                  {activeService.tagline}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-midnight-navy mb-6 tracking-wide">
                  {activeService.title}
                </h2>
                <p className="text-midnight-navy/60 text-lg leading-relaxed font-sans mb-8">
                  {activeService.description}
                </p>
                <button
                  onClick={() => onNavigate("contact")}
                  className="group px-10 py-3.5 bg-transparent text-midnight-navy border border-brushed-gold font-medium rounded-full text-sm
                    hover:bg-brushed-gold/10 hover:shadow-[0_0_24px_rgba(197,160,89,0.15)]
                    transition-all duration-300 inline-flex items-center gap-3"
                >
                  Inquire About This Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right: Features */}
              <div>
                <h3 className="font-serif text-xl font-semibold text-midnight-navy mb-6 tracking-wide">
                  What's Included
                </h3>
                <ul className="space-y-4">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-baseline gap-4">
                      <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full flex-shrink-0 translate-y-[3px]" />
                      <span className="font-sans text-midnight-navy/70 text-base leading-[1.8]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloralSeparator />

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-midnight-navy mb-8 tracking-[0.04em]">
            Not Sure Where to Start?
          </h2>
          <p className="text-midnight-navy/60 text-lg mb-14 font-sans leading-[1.8]">
            Book a complimentary consultation and let us guide you through the sourcing process.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-transparent text-midnight-navy border border-brushed-gold font-medium rounded-full
              hover:bg-brushed-gold/10 hover:shadow-[0_0_32px_rgba(197,160,89,0.2)]
              transition-all duration-300 inline-flex items-center gap-3"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}
