"use client"

import { useState } from "react"
import { ChevronDown, Shield, ArrowRight } from "lucide-react"
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

      {/* ── Hero ── */}
      <section className="bg-navy py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/40 text-gold text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
            <Shield className="w-4 h-4" />
            <span>The Trust Center</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory mb-6 text-balance">
            Your Questions, Answered Honestly
          </h1>
          <p className="text-ivory/75 text-lg sm:text-xl max-w-3xl mx-auto text-pretty">
            We know you have concerns about online sourcing. Scams, sizing disasters, and broken
            promises are real. Here's how we address them — directly.
          </p>
        </div>
      </section>

      {/* ── FAQ Accordions ── */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-14 last:mb-0">
              <div className="mb-6 pb-4 border-b border-gold/30">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-1">
                  {category.title}
                </h2>
                <p className="text-navy/55 text-sm">{category.description}</p>
              </div>

              <div className="space-y-3">
                {category.faqs.map((faq, faqIdx) => {
                  const key = `${catIdx}-${faqIdx}`
                  const isOpen = !!openItems[key]

                  return (
                    <div
                      key={faqIdx}
                      className={cn(
                        "bg-navy rounded-xl overflow-hidden border transition-all duration-300",
                        isOpen
                          ? "border-gold/40 shadow-[0_4px_20px_rgba(197,160,89,0.15)]"
                          : "border-gold/15 hover:border-gold/30"
                      )}
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-ivory leading-snug pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-gold flex-shrink-0 mt-0.5 transition-transform duration-300",
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
                        <div className="px-6 pb-6 border-t border-gold/15">
                          <p className="text-ivory/70 leading-relaxed pt-4">
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

      {/* ── CTA ── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-ivory mb-4 text-balance">
            Still Have{" "}
            <span className="text-gold">Questions?</span>
          </h2>
          <p className="text-ivory/70 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and let us address your specific situation directly.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-8 py-4 bg-gold text-navy font-semibold rounded-md
              shadow-[0_4px_20px_rgba(197,160,89,0.35)]
              hover:bg-gold-light hover:shadow-[0_4px_30px_rgba(197,160,89,0.65)]
              transition-all duration-300 inline-flex items-center gap-2"
          >
            Ask Us Directly
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  )
}
