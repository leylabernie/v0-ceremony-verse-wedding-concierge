"use client"

import {
  Lightbulb,
  Building2,
  Video,
  Scissors,
  ClipboardCheck,
  Truck,
  ArrowRight,
} from "lucide-react"

interface JourneyPageProps {
  onNavigate: (page: "contact") => void
}

const journeySteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Initial Vision",
    location: "United States",
    description:
      "We begin with a comprehensive discovery call to understand your events, color palettes, style preferences, and budget. Our team creates a detailed sourcing brief tailored to your wedding vision.",
    details: [
      "One-on-one video consultation",
      "Style mood board creation",
      "Budget planning and allocation",
      "Event timeline mapping",
    ],
  },
  {
    number: "02",
    icon: Building2,
    title: "Factory Vetting",
    location: "Delhi, Mumbai, Chennai",
    description:
      "Our on-ground team physically visits manufacturers across India's textile hubs. We verify credentials, inspect production facilities, and review quality standards in person.",
    details: [
      "Physical factory inspections",
      "Worker welfare verification",
      "Production capacity assessment",
      "Historical quality review",
    ],
  },
  {
    number: "03",
    icon: Video,
    title: "Design Approval",
    location: "Remote Collaboration",
    description:
      "You receive detailed fabric swatch videos, close-up embroidery samples, and color-accurate photos for approval. No production begins without your explicit go-ahead.",
    details: [
      "HD video fabric presentations",
      "Color accuracy verification",
      "Embroidery pattern approval",
      "Material composition documentation",
    ],
  },
  {
    number: "04",
    icon: Scissors,
    title: "Custom Production",
    location: "Verified Workshops",
    description:
      "Your pieces enter made-to-measure production with full oversight from our team. We track progress, ensure adherence to specifications, and provide regular updates.",
    details: [
      "Individual measurement charts",
      "Production milestone tracking",
      "Weekly progress updates",
      "Mid-production quality checks",
    ],
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Final Inspection",
    location: "India Quality Center",
    description:
      "Before shipping, every piece undergoes rigorous in-person quality control. We check embroidery precision, stitching integrity, color accuracy, and overall craftsmanship.",
    details: [
      "Stitch-by-stitch inspection",
      "Embroidery quality verification",
      "Color matching confirmation",
      "Final measurements check",
    ],
  },
  {
    number: "06",
    icon: Truck,
    title: "USA Delivery",
    location: "Your Doorstep",
    description:
      "Secure, tracked shipping delivers your pieces directly to you. Each item arrives professionally packaged with care instructions and our full quality guarantee.",
    details: [
      "Insured international shipping",
      "Customs handling included",
      "Professional packaging",
      "Delivery tracking portal",
    ],
  },
]

export function JourneyPage({ onNavigate }: JourneyPageProps) {
  return (
    <div className="animate-fade-in">

      {/* ── Hero ── */}
      <section className="bg-midnight-navy py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rose-gold/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 border border-rose-gold/40 text-rose-gold text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
            Our Process
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6 text-balance">
            The Sourcing Journey
          </h1>
          <p className="text-champagne/75 text-lg sm:text-xl max-w-3xl mx-auto text-pretty">
            From your first consultation to delivery at your door — our meticulous six-step process
            ensures quality, authenticity, and your complete satisfaction.
          </p>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 sm:py-24 bg-champagne">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical spine */}
            <div className="absolute left-1/2 top-8 bottom-8 w-px bg-rose-gold/25 -translate-x-1/2 hidden sm:block" />

            <div className="space-y-0">
              {journeySteps.map((step, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={step.number}
                    className={`relative sm:flex sm:items-center ${
                      isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                    } ${index !== 0 ? "sm:mt-14" : ""}`}
                  >
                    {/* Central Node */}
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-rose-gold border-4 border-champagne rounded-full items-center justify-center z-10
                      shadow-[0_0_24px_rgba(212,175,55,0.5)]">
                      <step.icon className="w-7 h-7 text-midnight-navy" />
                    </div>

                    {/* Card */}
                    <div className={`sm:w-[calc(50%-2.5rem)] ${isLeft ? "sm:pr-10" : "sm:pl-10"} mb-8 sm:mb-0`}>
                      <div className="bg-midnight-navy rounded-xl p-6 sm:p-8 border border-rose-gold/20 shadow-lg
                        hover:border-rose-gold/40 hover:shadow-[0_4px_24px_rgba(212,175,55,0.15)]
                        transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Mobile icon row */}
                        <div className="flex items-center gap-4 mb-4 sm:hidden">
                          <div className="w-12 h-12 bg-rose-gold rounded-full flex items-center justify-center flex-shrink-0
                            shadow-[0_0_16px_rgba(212,175,55,0.4)]">
                            <step.icon className="w-6 h-6 text-midnight-navy" />
                          </div>
                          <div>
                            <span className="font-serif text-rose-gold text-sm font-bold">Step {step.number}</span>
                            <span className="block text-champagne/50 text-xs">{step.location}</span>
                          </div>
                        </div>

                        {/* Desktop header */}
                        <div className="hidden sm:flex items-center justify-between mb-4">
                          <span className="font-serif text-rose-gold text-base font-bold">Step {step.number}</span>
                          <span className="px-3 py-1 bg-white/5 border border-rose-gold/20 text-champagne/60 text-xs rounded-full">
                            {step.location}
                          </span>
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-champagne mb-3">{step.title}</h3>
                        <p className="text-champagne/65 mb-6 leading-relaxed text-sm">{step.description}</p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-champagne/70">
                              <span className="w-1.5 h-1.5 bg-rose-gold rounded-full flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-midnight-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-gold/8 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne mb-6 text-balance">
            Ready to Begin Your{" "}
            <span className="text-rose-gold">Journey?</span>
          </h2>
          <p className="text-champagne/70 text-lg mb-10 max-w-2xl mx-auto">
            Every great wedding outfit starts with a conversation. Let us understand your vision
            and show you exactly how we bring it to life.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-rose-gold text-midnight-navy font-semibold text-lg rounded-md
              shadow-[0_4px_24px_rgba(212,175,55,0.4)]
              hover:bg-rose-gold/90 hover:shadow-[0_4px_36px_rgba(212,175,55,0.7)]
              transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Journey Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  )
}
