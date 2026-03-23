"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface ServicesPageProps {
  onNavigate: (page: "contact") => void
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

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState("groomsmen")
  const activeService = services.find((s) => s.id === activeTab)!

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="bg-midnight-navy py-24 sm:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-brushed-gold/40" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-8">
            Our Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-champagne mb-6 tracking-wide">
            What We Source
          </h1>
          <p className="text-champagne/60 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            From coordinated groomsmen parties to authentic heritage silks, we handle every detail
            of your wedding sourcing with meticulous care.
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-28 sm:py-36 bg-radial-rose">
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
                    ? "bg-midnight-navy text-champagne border-midnight-navy"
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
            className="animate-fade-in bento-card bg-champagne p-10 sm:p-14"
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
                  className="group px-10 py-3.5 bg-transparent text-midnight-navy border border-midnight-navy font-medium rounded-full text-sm
                    hover:border-brushed-gold hover:bg-brushed-gold/5 hover:shadow-[0_0_24px_rgba(197,160,89,0.15)]
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

      {/* CTA */}
      <section className="py-28 sm:py-36 bg-midnight-navy">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-champagne mb-8 tracking-[0.04em]">
            Not Sure Where to Start?
          </h2>
          <p className="text-champagne/50 text-lg mb-14 font-sans leading-[1.8]">
            Book a complimentary consultation and let us guide you through the sourcing process.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-transparent text-champagne border border-champagne font-medium rounded-full
              hover:border-brushed-gold hover:text-brushed-gold hover:shadow-[0_0_32px_rgba(197,160,89,0.2)]
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
