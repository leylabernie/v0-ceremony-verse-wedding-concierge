"use client"

import { ArrowRight } from "lucide-react"
import type { PageType } from "@/app/page"

interface JourneyPageProps {
  onNavigate: (page: PageType) => void
}

const journeySteps = [
  {
    number: "01",
    title: "Initial Vision",
    location: "United States",
    description:
      "A comprehensive discovery call to understand your events, color palettes, style preferences, and budget. We create a detailed sourcing brief tailored to your wedding vision.",
    details: [
      "One-on-one video consultation",
      "Style mood board creation",
      "Budget planning and allocation",
      "Event timeline mapping",
    ],
  },
  {
    number: "02",
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

export function JourneyPage({ onNavigate }: JourneyPageProps) {
  return (
    <div className="animate-fade-in silk-grain bg-muted-rose">

      {/* Hero */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-8">
            Our Process
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-midnight-navy mb-6 tracking-wide">
            The Sourcing Journey
          </h1>
          <p className="text-midnight-navy/60 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            From your first consultation to delivery at your door — our meticulous six-step process
            ensures quality, authenticity, and your complete satisfaction.
          </p>
        </div>
      </section>

      <FloralSeparator />

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-8">
            {journeySteps.map((step) => (
              <div
                key={step.number}
                className="bg-champagne rounded-2xl border border-brushed-gold/30 p-8 sm:p-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <span className="font-serif text-5xl sm:text-6xl font-light text-brushed-gold/40">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-midnight-navy tracking-wide">
                        {step.title}
                      </h3>
                      <span className="text-sm text-brushed-gold font-medium tracking-wide">
                        {step.location}
                      </span>
                    </div>
                    
                    <p className="text-midnight-navy/60 leading-relaxed font-sans mb-6">
                      {step.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-baseline gap-3">
                          <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full flex-shrink-0 translate-y-[3px]" />
                          <span className="font-sans text-midnight-navy/70 text-sm leading-[1.8]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloralSeparator />

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-midnight-navy mb-8 tracking-[0.04em]">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-midnight-navy/60 text-lg mb-14 font-sans leading-[1.8]">
            Every great wedding outfit starts with a conversation. Let us understand your vision
            and show you exactly how we bring it to life.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-transparent text-midnight-navy border border-brushed-gold font-medium rounded-full
              hover:bg-brushed-gold/10 hover:shadow-[0_0_32px_rgba(197,160,89,0.2)]
              transition-all duration-300 inline-flex items-center gap-3"
          >
            Start Your Journey Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}
