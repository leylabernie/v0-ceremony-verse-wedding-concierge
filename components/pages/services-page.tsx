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
    tagline: "Coordinated Groomsmen Sherwanis USA",
    description: "Perfect coordination for your entire groomsmen party, from sherwanis to accessories.",
    features: [
      "Color-matching for parties of any size (2 to 20+)",
      "Coordinated safas, stoles, and pocket squares",
      "Custom mojaris and footwear sourcing",
      "Made-to-measure with individual sizing",
      "Group pricing transparency",
      "Pre-wedding video approval of all pieces",
    ],
    image: "Elegant sherwanis displayed on tailoring mannequins, showing intricate embroidery details and coordinated accessories in deep burgundy and gold",
  },
  {
    id: "bridesmaids",
    icon: Heart,
    title: "Bridesmaid Bureau",
    tagline: "Custom Coordinated Bridesmaid Outfits",
    description: "Made-to-measure outfits in any custom hue, perfectly coordinated for your bridal party.",
    features: [
      "Lehengas, sarees, and anarkalis in custom colors",
      "Fabric and embroidery customization",
      "Mix-and-match styles within color family",
      "Individual measurements for perfect fit",
      "Coordinated jewelry sets available",
      "Rush production available",
    ],
    image: "Stunning lehengas in blush pink and coral on dress forms, showcasing delicate hand embroidery and flowing silhouettes",
  },
  {
    id: "heritage",
    icon: BookOpen,
    title: "The Heritage Library",
    tagline: "Pure Kanchipuram Sourcing 2026",
    description: "Authentic heritage weaves sourced directly from master weavers across India.",
    features: [
      "Pure Kanchipuram silk sarees with GI tags",
      "Banarasi, Paithani, and Patola weaves",
      "Verified thread count documentation",
      "Direct weaver relationships",
      "Antique and vintage piece sourcing",
      "Investment-grade heritage pieces",
    ],
    image: "Luxurious Kanchipuram silk sarees draped elegantly, displaying rich gold zari borders and traditional temple motifs",
  },
  {
    id: "ceremony",
    icon: Gift,
    title: "The Ceremony Details",
    tagline: "Complete Wedding Accessory Sourcing",
    description: "Every ceremonial detail, from welcome bags to mandap decor, sourced with care.",
    features: [
      "Custom welcome bag items and gifts",
      "Wedding favors and mithai boxes",
      "Bridal and ceremonial jewelry",
      "Mandap and decor elements",
      "Pooja items and ceremonial accessories",
      "Custom packaging and presentation",
    ],
    image: "Artfully arranged wedding accessories including ornate jewelry, decorative gift boxes, and ceremonial items with gold accents",
  },
]

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState("groomsmen")
  const activeService = services.find((s) => s.id === activeTab)

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
            Our Services
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory mb-6 text-balance">
            What We Source
          </h1>
          <p className="text-ivory/80 text-lg sm:text-xl max-w-3xl mx-auto text-pretty">
            From coordinated groomsmen parties to authentic heritage silks, we handle every detail 
            of your wedding sourcing with meticulous care and factory-direct relationships.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200",
                  activeTab === service.id
                    ? "bg-navy text-ivory shadow-lg"
                    : "bg-white text-navy hover:bg-muted border border-border"
                )}
              >
                <service.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{service.title}</span>
                <span className="sm:hidden">{service.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          {activeService && (
            <div className="glass rounded-2xl overflow-hidden shadow-xl animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="bg-muted h-64 lg:h-auto min-h-[400px] flex items-center justify-center p-8">
                  <div className="text-center max-w-md">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gold/20 rounded-full flex items-center justify-center">
                      <activeService.icon className="w-12 h-12 text-gold" />
                    </div>
                    <p className="text-navy/60 text-sm italic">{activeService.image}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 sm:p-12">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full mb-4">
                    {activeService.tagline}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
                    {activeService.title}
                  </h2>
                  <p className="text-navy/70 text-lg mb-8">
                    {activeService.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-navy/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onNavigate("contact")}
                    className="px-8 py-4 bg-gold text-navy font-semibold rounded-md hover:bg-gold-light transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    Inquire About {activeService.title}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-navy/70 text-lg mb-8">
            Book a complimentary consultation and let us guide you through the sourcing process.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="px-8 py-4 bg-navy text-ivory font-semibold rounded-md hover:bg-navy-light transition-all duration-200 inline-flex items-center gap-2 group"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}
