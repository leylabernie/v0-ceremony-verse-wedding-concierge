"use client"

import { 
  Lightbulb, 
  Building2, 
  Video, 
  Scissors, 
  ClipboardCheck, 
  Truck,
  ArrowRight 
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
    description: "We begin with a comprehensive discovery call to understand your events, color palettes, style preferences, and budget. Our team creates a detailed sourcing brief tailored to your wedding vision.",
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
    description: "Our on-ground team physically visits manufacturers across India's textile hubs. We verify credentials, inspect production facilities, and review quality standards in person.",
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
    description: "You receive detailed fabric swatch videos, close-up embroidery samples, and color-accurate photos for approval. No production begins without your explicit go-ahead.",
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
    description: "Your pieces enter made-to-measure production with full oversight from our team. We track progress, ensure adherence to specifications, and provide regular updates.",
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
    title: "Final Physical Inspection",
    location: "India Quality Center",
    description: "Before shipping, every piece undergoes rigorous in-person quality control. We check embroidery precision, stitching integrity, color accuracy, and overall craftsmanship.",
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
    description: "Secure, tracked shipping delivers your pieces directly to you. Each item arrives professionally packaged with care instructions and our quality guarantee.",
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
      {/* Hero Section */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
            Our Process
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory mb-6 text-balance">
            The Sourcing Journey
          </h1>
          <p className="text-ivory/80 text-lg sm:text-xl max-w-3xl mx-auto text-pretty">
            From your first consultation to delivery at your door, follow our meticulous 
            six-step process that ensures quality, authenticity, and your complete satisfaction.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 transform sm:-translate-x-1/2 hidden sm:block" />

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-0">
              {journeySteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative sm:flex sm:items-center sm:gap-8 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } ${index !== 0 ? "sm:mt-16" : ""}`}
                >
                  {/* Timeline Node */}
                  <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gold rounded-full items-center justify-center z-10 shadow-lg">
                    <step.icon className="w-7 h-7 text-navy" />
                  </div>

                  {/* Content Card */}
                  <div className={`sm:w-[calc(50%-4rem)] ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                    <div className="glass rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Mobile Icon */}
                      <div className="flex items-center gap-4 mb-4 sm:hidden">
                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-navy" />
                        </div>
                        <div>
                          <span className="font-serif text-gold text-sm font-bold">Step {step.number}</span>
                          <span className="block text-navy/60 text-xs">{step.location}</span>
                        </div>
                      </div>

                      {/* Desktop Header */}
                      <div className="hidden sm:flex items-center justify-between mb-4">
                        <span className="font-serif text-gold text-sm font-bold">Step {step.number}</span>
                        <span className="px-3 py-1 bg-navy/5 text-navy/70 text-xs rounded-full">
                          {step.location}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                        {step.title}
                      </h3>
                      <p className="text-navy/70 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-navy/80">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-[calc(50%-4rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-ivory/80 text-lg mb-10 max-w-2xl mx-auto">
            Every great wedding outfit starts with a conversation. Let us understand your 
            vision and show you how we can bring it to life.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="px-10 py-4 bg-gold text-navy font-semibold text-lg rounded-md hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
          >
            Start Your Journey Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}
