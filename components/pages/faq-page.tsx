"use client"

import { ArrowRight } from "lucide-react"
import type { PageType } from "@/app/page"

interface FAQPageProps {
  onNavigate: (page: PageType) => void
}

const faqSections = [
  {
    category: "Trust & Authenticity",
    items: [
      {
        question: "How do I know this isn't a scam?",
        answer: "Unlike Instagram sellers, we don't hide behind a screen. Our team physically visits every manufacturer, documents factory conditions, and verifies production capabilities in person. We provide video walkthroughs and never ask for full payment upfront."
      },
      {
        question: "What if quality doesn't match?",
        answer: "You approve fabrics via detailed HD video showing thread count, weave quality, and color under natural light. That exact bolt is reserved with your order number. If anything doesn't match, we halt shipping and resolve it at our cost."
      },
      {
        question: "How do you verify manufacturers?",
        answer: "We personally visit every manufacturer. We check business licenses, inspect facilities, verify labor practices, and review client history. Only 15-20 vetted manufacturers across India make our network."
      }
    ]
  },
  {
    category: "Sizing & Fit",
    items: [
      {
        question: "What if the outfits don't fit?",
        answer: "We collect 15+ precise body measurements and build in strategic ease allowances. Every piece is made 0.5-1 inch larger for professional alterations. Our 100% fit guarantee covers alteration costs if adjustments are needed."
      },
      {
        question: "How do you handle large parties?",
        answer: "Coordinating 8-15 groomsmen is our specialty. We provide video tutorials for self-measurement, virtual sizing sessions, individual profiles, and extra allowances for weight fluctuations. 99% first-time fit rate."
      },
      {
        question: "What's your alteration policy?",
        answer: "We guarantee fit. If alterations are needed due to our measurement error, we cover the cost up to $150 per garment. For quality defects, we replace the item entirely at our expense."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    items: [
      {
        question: "How is pricing structured?",
        answer: "Radical transparency: factory cost, our 15-20% sourcing fee, shipping, customs, and guarantee coverage. Itemized quotes show exactly what you pay for. Most clients save 30-50% compared to US boutiques."
      },
      {
        question: "What's the payment schedule?",
        answer: "Milestone-based protection: 25% deposit to reserve, 35% after fabric approval, 30% after final inspection, 10% upon delivery. You never pay for the next stage until you've approved the previous one."
      },
      {
        question: "Do you accept payment plans?",
        answer: "Yes. For orders over $3,000, we offer extended plans across 4-6 months aligned with wedding timelines. We accept credit cards, bank transfers, and most payment methods."
      }
    ]
  }
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

export function FAQPage({ onNavigate }: FAQPageProps) {
  return (
    <div className="animate-fade-in silk-grain bg-muted-rose">

      {/* Hero */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.25em] uppercase mb-10">
            The Trust Center
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-midnight-navy mb-8 tracking-[0.04em]">
            Your Questions, Answered
          </h1>
          <p className="text-midnight-navy/60 text-lg max-w-2xl mx-auto font-sans leading-[1.8]">
            We know you have concerns about online sourcing. Scams, sizing disasters, and broken
            promises are real. Here's how we address them.
          </p>
        </div>
      </section>

      <FloralSeparator />

      {/* FAQ Bento Grid Sections */}
      {faqSections.map((section, sectionIdx) => (
        <section 
          key={sectionIdx} 
          className="py-20 sm:py-28"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div className="lg:max-w-xl">
                <p className="text-brushed-gold text-sm font-medium tracking-[0.25em] uppercase mb-4">
                  {String(sectionIdx + 1).padStart(2, '0')}
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-midnight-navy tracking-[0.04em]">
                  {section.category}
                </h2>
              </div>
            </div>

            {/* Bento Grid of FAQ Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((faq, faqIdx) => (
                <div
                  key={faqIdx}
                  className="bg-champagne rounded-2xl border border-brushed-gold/30 p-8 sm:p-10 flex flex-col min-h-[320px]"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-midnight-navy mb-6 tracking-wide leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-midnight-navy/60 leading-[1.8] font-sans text-[0.9rem] flex-1">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {sectionIdx < faqSections.length - 1 && <FloralSeparator />}
        </section>
      ))}

      <FloralSeparator />

      {/* Timeline & Process Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-brushed-gold text-sm font-medium tracking-[0.25em] uppercase mb-4">
              04
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-midnight-navy tracking-[0.04em] mb-6">
              Timeline & Process
            </h2>
            <p className="text-midnight-navy/60 text-lg max-w-2xl mx-auto font-sans">
              Production timelines and what to expect throughout your sourcing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-champagne rounded-2xl border border-brushed-gold/30 p-10 flex flex-col">
              <h3 className="font-serif text-2xl font-semibold text-midnight-navy mb-6 tracking-wide">
                When should I start?
              </h3>
              <div className="text-midnight-navy/60 leading-[1.8] font-sans space-y-4 flex-1">
                <p>Ideal timeline is 6-8 months before your event.</p>
                <ul className="premium-list pl-4">
                  <li>Consultation and design: 2-3 weeks</li>
                  <li>Fabric sourcing and approval: 3-4 weeks</li>
                  <li>Production: 6-10 weeks</li>
                  <li>Quality inspection: 1 week</li>
                  <li>Shipping: 2-3 weeks</li>
                </ul>
              </div>
            </div>

            <div className="bg-champagne rounded-2xl border border-brushed-gold/30 p-10 flex flex-col">
              <h3 className="font-serif text-2xl font-semibold text-midnight-navy mb-6 tracking-wide">
                How will I track my order?
              </h3>
              <div className="text-midnight-navy/60 leading-[1.8] font-sans space-y-4 flex-1">
                <p>Complete visibility throughout production:</p>
                <ul className="premium-list pl-4">
                  <li>Weekly email updates with photos</li>
                  <li>Client portal with real-time status</li>
                  <li>Direct WhatsApp with your sourcing manager</li>
                  <li>Video calls at key milestones</li>
                  <li>Full shipping tracking once dispatched</li>
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
            Still Have Questions?
          </h2>
          <p className="text-midnight-navy/60 text-lg mb-14 font-sans leading-[1.8] max-w-xl mx-auto">
            Schedule a free consultation and let us address your specific situation directly.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-transparent text-midnight-navy border border-brushed-gold font-medium rounded-full
              hover:bg-brushed-gold/10 hover:shadow-[0_0_32px_rgba(197,160,89,0.2)]
              transition-all duration-300 inline-flex items-center gap-3"
          >
            Ask Us Directly
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}
