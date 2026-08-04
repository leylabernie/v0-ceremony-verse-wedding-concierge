import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { buildMetadata, buildFaqSchema, buildBreadcrumb, JsonLd } from "@/lib/seo"

const faqSections = [
  {
    category: "Trust & Authenticity",
    items: [
      {
        question: "How do NRI brides buy a lehenga from India without getting scammed?",
        answer: "Eligible sourcing tiers include live video shopping or documented current media before you approve an item purchase. We record reference photos, specifications, and written approvals to reduce remote-shopping risk. No process can eliminate all vendor, handmade-item, shipping, customs, or fit risk."
      },
      {
        question: "How do I know this isn't a scam?",
        answer: "CeremonyVerse is a US-based business contact that documents the selected scope, vendor option, approvals, and applicable payment schedule. Eligible tiers include live video or current-media review. Payment requirements follow the signed proposal rather than a universal rule."
      },
      {
        question: "What if quality doesn't match?",
        answer: "We compare the item with the written order references and available approval photos or video before shipping. If we identify a material mismatch, we pause shipment, document the issue, and work through the remedy described in your signed service terms."
      },
      {
        question: "How do you verify your sourcing partners?",
        answer: "Our strongest stated working relationships are in Surat and Delhi. Other vendors or locations are considered only when the requested product, documentation, capacity, and terms can be responsibly reviewed for the project."
      }
    ]
  },
  {
    category: "Sizing & Fit",
    items: [
      {
        question: "What if the outfits don't fit?",
        answer: "We collect 15+ precise body measurements and build in strategic ease allowances. Eligible made-to-measure garments include Fit Assurance with up to $150 toward local alterations after delivery, subject to service terms."
      },
      {
        question: "How do you handle large parties?",
        answer: "Group outfit coordination is available within the selected tier or custom written scope. We organize each participant's measurement record and approvals, but vendor capacity, handmade color variation, and local alteration needs still apply."
      },
      {
        question: "What's your alteration policy?",
        answer: "Remote made-to-measure work can still require local adjustment. Eligible garments may include Fit Assurance with an alteration allowance of up to $150 when stated in the signed service agreement. Coverage, documentation, and exclusions are governed by that agreement."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    items: [
      {
        question: "How is pricing structured?",
        answer: "India shopping uses flat service tiers: $249 for Style Guide & Vendor List, $799 for Guided Sourcing, and $2,499 for Full Bridal Concierge. Product costs, shipping, and customs are itemized separately. Mexico planning uses separate tiers beginning at $499."
      },
      {
        question: "What's the payment schedule?",
        answer: "The payment schedule is stated in your signed proposal or service agreement before paid work begins. Larger sourcing or planning scopes may use approval milestones tied to the contracted deliverables."
      },
      {
        question: "Do you accept payment plans?",
        answer: "Available payment methods and any installment schedule are stated in the written proposal. Do not assume an installment plan is available until it is confirmed for your project."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        question: "How long does shipping take from India to the US?",
        answer: "The carrier estimate depends on origin, destination, service level, shipment details, and customs clearance. We recommend building a meaningful buffer because carrier and customs timing cannot be guaranteed."
      },
      {
        question: "Do you handle customs and import duties?",
        answer: "We prepare shipping documentation and estimate customs costs using the garment classification, fiber content, declared value, and current tariff rules. Any duties actually assessed are itemized and passed through without a CeremonyVerse markup."
      },
      {
        question: "What if my outfit arrives damaged?",
        answer: "Eligible shipments are insured as described in your service agreement. If an item is delayed, damaged, or lost, we coordinate the carrier claim and the applicable repair, replacement, or other remedy with you."
      }
    ]
  },
  {
    category: "The Process",
    items: [
      {
        question: "Do I need to travel to India?",
        answer: "No. The India-shopping process can be handled remotely through scheduled calls, written approvals, and eligible live video sessions. Mexico on-site planning applies only to the contracted Cancun or Riviera Maya scope."
      },
      {
        question: "Can I source just one item, or do I need a full package?",
        answer: "You can request help with one item or a larger group. The recommended tier depends on the number of people, ceremonies, items, approvals, and vendor-management work involved."
      },
      {
        question: "What regions of India do you source from?",
        answer: "Our strongest working relationships are in Surat and Delhi, with additional sourcing considered when the requested item and vendor can be responsibly verified. We do not promise access to every city, craft cluster, or designer."
      }
    ]
  }
]

// Floral separator component
function FloralSeparator() {
  return (
    <div className="floral-separator my-8 flex justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export const metadata = buildMetadata({
  path: '/faq',
  title: 'FAQ — Indian Wedding Outfit Sourcing for NRI Families',
  description: 'Frequently asked questions about Indian wedding outfit sourcing for NRI families. Trust, sizing, pricing, shipping, customs, and process answered in detail.',
  keywords: 'Indian wedding outfit sourcing FAQ, NRI bride questions, lehenga from India scams, customs duties Indian wedding outfits, bridal lehenga sizing',
});

// Generate FAQ Schema for SEO (rendered server-side via JsonLd component)
const generateFAQSchema = () => {
  const faqItems = faqSections.flatMap(section =>
    section.items.map(item => ({
      question: item.question,
      answer: item.answer,
    }))
  )
  return buildFaqSchema(faqItems)
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema()
  const breadcrumb = buildBreadcrumb([{ name: 'FAQ', url: '/faq/' }])

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="faq-schema" data={faqSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumb} />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[#7a6841] text-sm font-medium tracking-[0.25em] uppercase mb-6">
            The Trust Center
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1f1f1f] mb-6 tracking-[0.04em]">
            Your Questions, Answered
          </h1>
          <p className="text-[#4d403a] text-lg max-w-2xl mx-auto font-sans leading-[1.8]">
            For NRI families planning Indian weddings in the US — scams, sizing disasters, and broken
            promises are real concerns. Here's exactly how CeremonyVerse addresses every one of them.
          </p>
        </div>
      </section>

      <FloralSeparator />

      {/* FAQ Bento Grid Sections */}
      {faqSections.map((section, sectionIdx) => (
        <section key={sectionIdx} className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
              <div className="lg:max-w-xl">
                <p className="text-[#7a6841] text-sm font-medium tracking-[0.25em] uppercase mb-3">
                  {String(sectionIdx + 1).padStart(2, '0')}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1f1f1f] tracking-[0.04em]">
                  {section.category}
                </h2>
              </div>
            </div>

            {/* Bento Grid of FAQ Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((faq, faqIdx) => (
                <div
                  key={faqIdx}
                  className="bg-white rounded-2xl border border-[#e6dfd5] p-8 sm:p-10 flex flex-col min-h-[320px] hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1f1f1f] mb-6 tracking-wide leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-[#4d403a] leading-[1.8] font-sans text-[0.9rem] flex-1">
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
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#7a6841] text-sm font-medium tracking-[0.25em] uppercase mb-3">
              06
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1f1f1f] tracking-[0.04em] mb-4">
              Timeline & Process
            </h2>
            <p className="text-[#4d403a] text-lg max-w-2xl mx-auto font-sans">
              Production timelines and what to expect throughout your sourcing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#e6dfd5] p-10 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-serif text-2xl font-semibold text-[#1f1f1f] mb-6 tracking-wide">
                When should I start?
              </h3>
              <div className="text-[#4d403a] leading-[1.8] font-sans space-y-4 flex-1">
                <p>Ideal timeline is 6-8 months before your event.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Consultation and design: 2-3 weeks</li>
                  <li>Fabric sourcing and approval: 3-4 weeks</li>
                  <li>Production: 6-10 weeks</li>
                  <li>Quality inspection: 1 week</li>
                  <li>Shipping: 2-3 weeks</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e6dfd5] p-10 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-serif text-2xl font-semibold text-[#1f1f1f] mb-6 tracking-wide">
                How will I track my order?
              </h3>
              <div className="text-[#4d403a] leading-[1.8] font-sans space-y-4 flex-1">
                <p>Complete visibility throughout production:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Email or WhatsApp updates at agreed milestones</li>
                  <li>Photos or video when available for the applicable order stage</li>
                  <li>Written approval records for key decisions</li>
                  <li>Carrier tracking once the shipment is dispatched</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloralSeparator />

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1f1f1f] mb-6 tracking-[0.04em]">
            Still Have Questions?
          </h2>
          <p className="text-[#4d403a] text-lg mb-10 font-sans leading-[1.8] max-w-xl mx-auto">
            Schedule a free consultation and let us address your specific situation directly.
          </p>
          <Link
            href="/contact/"
            className="group px-10 py-4 bg-transparent text-[#1f1f1f] border border-[#7a6841] font-medium rounded-full
              hover:bg-[#7a6841]/10 hover:shadow-[0_0_32px_rgba(197,160,89,0.2)]
              transition-all duration-300 inline-flex items-center gap-3"
          >
            Ask Us Directly
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
