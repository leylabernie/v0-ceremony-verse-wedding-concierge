"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQPageProps {
  onNavigate: (page: "contact") => void
}

const faqCategories = [
  {
    title: "Trust & Authenticity",
    description: "Your concerns about scams and authenticity, addressed head-on.",
    faqs: [
      {
        question: "How do I know CeremonyVerse isn't just another online scam?",
        answer:
          "We understand your skepticism — the internet is full of stolen photos and broken promises. Unlike Instagram sellers, we don't hide behind a screen. Our team physically visits every manufacturer, documents factory conditions, and verifies production capabilities in person. We provide video walkthroughs of factories, introduce you to our sourcing managers via video call, and share our company registration details. Most importantly, we never ask for full payment upfront — our milestone-based payment structure protects you at every step.",
      },
      {
        question: "What if the fabric quality doesn't match what I approved?",
        answer:
          "This is where our process shines. You approve fabrics via detailed HD video calls showing thread count, weave quality, and color accuracy under natural light. Once you approve, that exact bolt is reserved and photographed with your order number. At final inspection, we verify it's the same material before shipping. If anything doesn't match your approval, we halt shipping and resolve the issue — at our cost, not yours.",
      },
      {
        question: "How do you verify manufacturers are legitimate?",
        answer:
          "We personally visit every manufacturer we work with. We check business licenses, inspect production facilities, verify labor practices, and review their client history. We maintain relationships with only 15–20 vetted manufacturers across India, chosen from hundreds we've evaluated over 12 years. Every factory in our network has passed our rigorous multi-point verification process.",
      },
    ],
  },
  {
    title: "Sizing & Fit Concerns",
    description: "Custom sizing questions answered with our guarantee details.",
    faqs: [
      {
        question: "I'm worried about sizing — what if the outfits don't fit?",
        answer:
          "Sizing anxiety is real, especially when you can't try things on. Here's how we eliminate the risk: We collect 15+ precise body measurements (not just S/M/L), including specific cultural garment measurements. We build in strategic ease allowances based on garment type. Every piece is made 0.5–1 inch larger than your exact measurements to allow for professional alterations. We include a detailed alteration guide with every shipment, and our 100% fit guarantee means we cover alteration costs if adjustments are needed.",
      },
      {
        question: "How do you handle measurements for large wedding parties?",
        answer:
          "Coordinating 8–15 groomsmen or bridesmaids is our specialty. We provide detailed video tutorials for self-measurement, offer virtual measurement sessions via video call, create individual sizing profiles for each party member, and build extra allowances for weight fluctuations closer to the wedding. We've successfully outfitted parties of 20+ people with a 99% first-time fit rate.",
      },
      {
        question: "What's your return and alteration policy?",
        answer:
          "We don't do returns — because we don't need to. Our multi-stage approval process means you've seen and approved everything before production. Instead, we guarantee fit: if alterations are needed due to our measurement error, we cover the cost up to $150 per garment at your local tailor. For any quality defects, we replace the item entirely at our expense.",
      },
    ],
  },
  {
    title: "Pricing & Payments",
    description: "Transparent pricing and secure payment structure explained.",
    faqs: [
      {
        question: "How is your pricing structured?",
        answer:
          "We believe in radical transparency. Our pricing includes: the factory cost of the garment, our sourcing and quality control fee (typically 15–20% of garment cost), shipping and customs handling, and quality guarantee coverage. We provide itemized quotes showing exactly what you're paying for. No hidden markups, no surprise fees. Most clients save 30–50% compared to US-based Indian boutiques while getting superior quality and customization.",
      },
      {
        question: "What's your payment schedule?",
        answer:
          "We use a milestone-based payment structure to protect both parties: 25% deposit to reserve your production slot and source fabrics; 35% after fabric approval and before production begins; 30% after final quality inspection with photos/video; and 10% upon delivery confirmation. You never pay for the next stage until you've approved the previous one.",
      },
      {
        question: "Do you accept payment plans?",
        answer:
          "Yes. For orders over $3,000, we offer extended payment plans that align with wedding planning timelines. We can structure payments across 4–6 months, making premium sourcing accessible without financial strain. We accept credit cards, bank transfers, and can work with most payment methods.",
      },
    ],
  },
  {
    title: "Timeline & Process",
    description: "Production timelines and what to expect throughout.",
    faqs: [
      {
        question: "How far in advance should I start the sourcing process?",
        answer:
          "Ideal timeline is 6–8 months before your event. This allows time for: consultation and design (2–3 weeks), fabric sourcing and approval (3–4 weeks), production (6–10 weeks depending on complexity), quality inspection (1 week), and shipping (2–3 weeks). Rush orders are possible with 4-month timelines for an additional fee, but we recommend starting early for the best selection and pricing.",
      },
      {
        question: "How will I track my order progress?",
        answer:
          "You'll receive: weekly email updates with photos during production, access to a client portal showing real-time status, direct WhatsApp communication with your sourcing manager, video calls at key milestones (fabric approval, mid-production, final inspection), and shipping tracking once dispatched. You're never left wondering what's happening with your order.",
      },
      {
        question: "What happens if there's a production delay?",
        answer:
          "Delays are rare but can happen. If they do, we notify you immediately with the reason and revised timeline, offer expedited shipping at our cost to make up time, provide compensation or partial refunds for significant delays, and in extreme cases, source from alternate verified manufacturers. We've maintained a 97% on-time delivery rate over the past three years.",
      },
    ],
  },
]

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="bg-midnight-navy py-24 sm:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-brushed-gold/40" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-8">
            The Trust Center
          </p>
          <h1 className="font-garamond text-4xl sm:text-5xl lg:text-6xl font-semibold text-champagne mb-6 tracking-wide">
            Your Questions, Answered
          </h1>
          <p className="text-champagne/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We know you have concerns about online sourcing. Scams, sizing disasters, and broken
            promises are real. Here's how we address them — directly.
          </p>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="py-24 sm:py-32 bg-muted-rose">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16 last:mb-0">
              <div className="mb-8">
                <h2 className="font-garamond text-2xl sm:text-3xl font-semibold text-midnight-navy mb-2 tracking-wide">
                  {category.title}
                </h2>
                <p className="text-midnight-navy/50 text-sm font-light">{category.description}</p>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIdx) => {
                  const key = `${catIdx}-${faqIdx}`
                  const isOpen = !!openItems[key]

                  return (
                    <div
                      key={faqIdx}
                      className={cn(
                        "bento-card overflow-hidden transition-all duration-300",
                        isOpen && "shadow-[0_12px_48px_rgba(10,25,47,0.1)]"
                      )}
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-medium text-midnight-navy leading-snug pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-brushed-gold flex-shrink-0 mt-0.5 transition-transform duration-300",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="px-6 pb-6 border-t border-brushed-gold/20">
                          <p className="text-midnight-navy/60 leading-relaxed pt-4 font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-midnight-navy">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-garamond text-3xl sm:text-4xl font-semibold text-champagne mb-6 tracking-wide">
            Still Have Questions?
          </h2>
          <p className="text-champagne/60 text-lg mb-12 font-light leading-relaxed">
            Schedule a free consultation and let us address your specific situation directly.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-10 py-4 bg-champagne text-midnight-navy border border-brushed-gold font-medium rounded-full
              hover:bg-muted-rose hover:shadow-[0_8px_32px_rgba(197,160,89,0.25)]
              transition-all duration-300 inline-flex items-center gap-2"
          >
            Ask Us Directly
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}
