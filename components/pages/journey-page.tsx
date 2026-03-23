"use client"

import { ArrowRight } from "lucide-react"

interface JourneyPageProps {
  onNavigate: (page: "contact") => void
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

export function JourneyPage({ onNavigate }: JourneyPageProps) {
  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="bg-midnight-navy py-24 sm:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-brushed-gold/40" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-8">
            Our Process
          </p>
          <h1 className="font-garamond text-4xl sm:text-5xl lg:text-6xl font-semibold text-champagne mb-6 tracking-wide">
            The Sourcing Journey
          </h1>
          <p className="text-champagne/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From your first consultation to delivery at your door — our meticulous six-step process
            ensures quality, authenticity, and your complete satisfaction.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32 bg-muted-rose">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div
                key={step.number}
                className="bento-card p-8 sm:p-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <span className="font-garamond text-5xl sm:text-6xl font-light text-brushed-gold/30">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="font-garamond text-2xl sm:text-3xl font-semibold text-midnight-navy tracking-wide">
                        {step.title}
                      </h3>
                      <span className="text-sm text-brushed-gold font-medium tracking-wide">
                        {step.location}
                      </span>
                    </div>
                    
                    <p className="text-midnight-navy/60 leading-relaxed font-light mb-6">
                      {step.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full flex-shrink-0" />
                          <span className="text-midnight-navy/70 text-sm font-light">{detail}</span>
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

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-midnight-navy">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-garamond text-3xl sm:text-4xl font-semibold text-champagne mb-6 tracking-wide">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-champagne/60 text-lg mb-12 font-light leading-relaxed">
            Every great wedding outfit starts with a conversation. Let us understand your vision
            and show you exactly how we bring it to life.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-champagne text-midnight-navy border border-brushed-gold font-medium rounded-full
              hover:bg-muted-rose hover:shadow-[0_8px_32px_rgba(197,160,89,0.25)]
              transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Journey Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}
