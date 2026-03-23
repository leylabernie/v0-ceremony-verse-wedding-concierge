"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Users, Heart, BookOpen, Gift, ArrowRight, CheckCircle } from "lucide-react"

interface ServicesPageProps {
  onNavigate: (page: "contact") => void
}

const services = [
  {
    id: "groomsmen",
    icon: Users,
    title: "Groomsmen Studio",
    tagline: "Coordinated Groomsmen Sherwanis · USA Clients",
    description:
      "Perfect coordination for your entire groomsmen party, from sherwanis to accessories — all made-to-measure.",
    features: [
      "Color-matching for parties of any size (2 to 20+)",
      "Coordinated safas, stoles, and pocket squares",
      "Custom mojaris and footwear sourcing",
      "Made-to-measure with individual sizing",
      "Group pricing transparency",
      "Pre-wedding video approval of all pieces",
    ],
  },
  {
    id: "bridesmaids",
    icon: Heart,
    title: "Bridesmaid Bureau",
    tagline: "Custom Coordinated Bridesmaid Outfits",
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
    icon: BookOpen,
    title: "The Heritage Library",
    tagline: "Pure Kanchipuram Sourcing · GI-Tagged Weaves",
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
    icon: Gift,
    title: "The Ceremony Details",
    tagline: "Complete Wedding Accessory Sourcing",
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

      {/* ── Hero ── */}
      <section className="bg-navy py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 border border-gold/40 text-gold text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
            Our Services
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory mb-6 text-balance">
            What We Source
          </h1>
          <p className="text-ivory/75 text-lg sm:text-xl max-w-3xl mx-auto text-pretty">
            From coordinated groomsmen parties to authentic heritage silks, we handle every detail
            of your wedding sourcing with meticulous care and factory-direct relationships.
          </p>
        </div>
      </section>

      {/* ── Tabs ── */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "flex items-center gap-2 px-5 sm:px-7 py-3 rounded-lg font-medium transition-all duration-300 border",
                  activeTab === service.id
                    ? "bg-navy text-ivory border-navy shadow-[0_4px_20px_rgba(10,25,47,0.3)]"
                    : "bg-white text-navy border-border hover:border-gold/50 hover:text-gold hover:shadow-[0_2px_12px_rgba(197,160,89,0.2)]"
                )}
              >
                <service.icon className={cn("w-5 h-5", activeTab === service.id ? "text-gold" : "")} />
                <span className="hidden sm:inline">{service.title}</span>
                <span className="sm:hidden">{service.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Service Card */}
          <div
            key={activeService.id}
            className="animate-fade-in bg-navy rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,25,47,0.25)] border border-gold/20 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Icon/Visual Side */}
              <div className="bg-navy-light h-64 lg:h-auto min-h-[380px] flex flex-col items-center justify-center p-10 border-r border-gold/15">
                <div className="w-28 h-28 mb-6 bg-gold/15 border border-gold/30 rounded-full flex items-center justify-center
                  shadow-[0_0_40px_rgba(197,160,89,0.2)]">
                  <activeService.icon className="w-14 h-14 text-gold" />
                </div>
                <span className="font-serif text-2xl font-bold text-ivory text-center mb-2">{activeService.title}</span>
                <span className="text-gold/80 text-sm text-center px-4">{activeService.tagline}</span>
              </div>

              {/* Content Side */}
              <div className="p-8 sm:p-12">
                <p className="text-ivory/75 text-lg mb-8 leading-relaxed">
                  {activeService.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-ivory/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate("contact")}
                  className="group px-8 py-4 bg-gold text-navy font-semibold rounded-md
                    shadow-[0_4px_20px_rgba(197,160,89,0.35)]
                    hover:bg-gold-light hover:shadow-[0_4px_32px_rgba(197,160,89,0.65)]
                    transition-all duration-300 inline-flex items-center gap-2"
                >
                  Inquire About {activeService.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory mb-4 text-balance">
            Not Sure Where to{" "}
            <span className="text-gold">Start?</span>
          </h2>
          <p className="text-ivory/70 text-lg mb-10 max-w-2xl mx-auto">
            Book a complimentary consultation and let us guide you through the sourcing process.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-8 py-4 border-2 border-gold text-gold font-semibold rounded-md
              hover:bg-gold hover:text-navy hover:shadow-[0_4px_28px_rgba(197,160,89,0.55)]
              transition-all duration-300 inline-flex items-center gap-2"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  )
}
