import React from "react"
import type { PageType } from "@/app/page"

interface GuidePageProps {
  onNavigate?: (page: PageType) => void
}

export function GuideCustomsDuty({ onNavigate }: GuidePageProps) {
  return (
    <div className="animate-fade-in silk-grain bg-muted-rose">
      {/* Hero */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.25em] uppercase mb-10">
            Logistics Guide
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-midnight-navy mb-8 tracking-[0.04em]">
            Indian Wedding Customs Duty & Shipping to USA (2026)
          </h1>
          <p className="text-midnight-navy/60 text-lg max-w-2xl mx-auto font-sans leading-[1.8]">
            Complete breakdown of customs duties, shipping timelines, costs, and how to avoid surprises when importing Indian wedding outfits to the US.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Customs Duty Breakdown */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-midnight-navy mb-6 tracking-[0.04em]">
              How Customs Costs Are Determined (2026)
            </h2>
            <p className="text-midnight-navy/60 text-lg leading-[1.8] mb-8">
              Commercial textile shipments may be assessed duties. The rate is shipment-specific and depends on the HTS classification, fiber content, garment construction, declared value, country of origin, and current tariff rules.
            </p>
            
            <div className="space-y-4">
              {[
                { item: "Bridal Lehengas", rate: "Varies", notes: "Classified by fiber content, construction, and embellishment" },
                { item: "Sherwanis & Kurtas", rate: "Varies", notes: "Woven/knit construction and fiber content affect classification" },
                { item: "Sarees", rate: "Varies", notes: "Silk, cotton, and synthetic sarees can fall under different classifications" },
                { item: "Jewelry & Accessories", rate: "Varies", notes: "Material and product type determine the applicable classification" },
                { item: "Ceremonial Items", rate: "Varies", notes: "Each product type must be classified separately" }
              ].map((row, i) => (
                <div key={i} className="bg-champagne rounded-xl p-6 border border-brushed-gold/30 grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-midnight-navy/60 uppercase tracking-wide">Item</p>
                    <p className="font-semibold text-midnight-navy">{row.item}</p>
                  </div>
                  <div>
                    <p className="text-sm text-midnight-navy/60 uppercase tracking-wide">Duty Rate</p>
                    <p className="font-semibold text-brushed-gold text-lg">{row.rate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-midnight-navy/60 uppercase tracking-wide">Notes</p>
                    <p className="text-midnight-navy/60 text-sm">{row.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Calculation Example */}
          <div className="mb-16 bg-champagne rounded-2xl p-10 border border-brushed-gold/30">
            <h2 className="font-serif text-3xl font-semibold text-midnight-navy mb-6">
              Build Your Landed-Cost Estimate
            </h2>
            <p className="text-midnight-navy/60 mb-8">
              Ask for each cost as a separate line item before approving an order:
            </p>
            
            <div className="space-y-3">
              {[
                { label: "Outfit Price", value: "Vendor quote" },
                { label: "CeremonyVerse Service Tier", value: "$249 / $799 / $2,499" },
                { label: "International Shipping", value: "Carrier quote" },
                { label: "Estimated Customs", value: "Shipment-specific estimate" },
                { label: "Actual Assessed Duties", value: "Passed through without markup" },
                { label: "Estimated Landed Cost", value: "Itemized before approval", bold: true, highlight: true }
              ].map((row, i) => (
                <div key={i} className={`flex justify-between py-2 ${row.bold ? 'border-t-2 border-brushed-gold pt-3' : ''} ${row.highlight ? 'bg-white rounded px-4 py-3 font-semibold text-brushed-gold' : ''}`}>
                  <span className={row.bold ? 'font-semibold text-midnight-navy' : 'text-midnight-navy/60'}>{row.label}</span>
                  <span className={row.bold ? 'font-semibold text-midnight-navy' : 'text-midnight-navy'}>{row.value}</span>
                </div>
              ))}
            </div>
            
            <p className="text-midnight-navy/60 text-sm mt-6 pt-6 border-t border-brushed-gold/20">
              <strong>Key Insight:</strong> Even with customs duties, sourcing from India typically saves 30-50% compared to US Indian boutiques ($2,500-3,500 for similar quality).
            </p>
          </div>

          {/* Shipping Options */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-midnight-navy mb-6">
              Shipping Options & Timelines
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  method: "Standard International Shipping",
                  timeline: "2-3 weeks",
                  cost: "$150-200",
                  pros: ["Most economical", "Reliable tracking"],
                  cons: ["Longer wait time", "Risk of delays"]
                },
                {
                  method: "Expedited Shipping (DHL/FedEx)",
                  timeline: "7-10 days",
                  cost: "$250-400",
                  pros: ["Fast delivery", "Full insurance", "Signature required"],
                  cons: ["Higher cost", "Not always necessary"]
                },
                {
                  method: "Express Shipping",
                  timeline: "3-5 days",
                  cost: "$400-600",
                  pros: ["Fastest option", "Maximum security"],
                  cons: ["Most expensive", "Overkill for most orders"]
                }
              ].map((option, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-brushed-gold/20">
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-midnight-navy/60 uppercase tracking-wide mb-1">Method</p>
                      <p className="font-semibold text-midnight-navy">{option.method}</p>
                    </div>
                    <div>
                      <p className="text-sm text-midnight-navy/60 uppercase tracking-wide mb-1">Timeline</p>
                      <p className="font-semibold text-brushed-gold">{option.timeline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-midnight-navy/60 uppercase tracking-wide mb-1">Cost</p>
                      <p className="font-semibold text-midnight-navy">{option.cost}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-midnight-navy/60 uppercase mb-2">Pros</p>
                      <ul className="space-y-1">
                        {option.pros.map((pro, j) => (
                          <li key={j} className="text-sm text-midnight-navy/60 flex gap-2">
                            <span className="text-brushed-gold">✓</span> {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-midnight-navy/60 uppercase mb-2">Cons</p>
                      <ul className="space-y-1">
                        {option.cons.map((con, j) => (
                          <li key={j} className="text-sm text-midnight-navy/60 flex gap-2">
                            <span className="text-brushed-gold">✗</span> {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Plan for Customs */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-midnight-navy mb-6">
              How to Plan for Customs Correctly
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  tip: "Accurate Declaration",
                  desc: "Declare the true value of items. Undervaluing can trigger audits and penalties."
                },
                {
                  tip: "Use the Correct HTS Classification",
                  desc: "Classify each garment using its fiber content, construction, and product type; do not rely on one rate for every outfit."
                },
                {
                  tip: "Verify Current Rules",
                  desc: "Tariff and exemption rules can change. Confirm the rules in effect when the shipment will enter the United States."
                },
                {
                  tip: "Build in Clearance Time",
                  desc: "Leave a buffer before the wedding so documentation questions or customs review do not create a last-minute crisis."
                },
                {
                  tip: "Work with Experienced Shippers",
                  desc: "Use a carrier or broker experienced with commercial textile shipments and customs documentation."
                }
              ].map((item, i) => (
                <div key={i} className="bg-champagne rounded-xl p-6 border border-brushed-gold/30">
                  <h3 className="font-semibold text-midnight-navy mb-2">{item.tip}</h3>
                  <p className="text-midnight-navy/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What Happens at Customs */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-midnight-navy mb-6">
              What Happens at US Customs
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Arrival & Scanning",
                  desc: "Your package arrives at a US customs facility. It's scanned and assigned an entry number."
                },
                {
                  step: "2",
                  title: "Classification & Valuation",
                  desc: "Customs classifies the items using HS codes and determines the duty rate based on declared value."
                },
                {
                  step: "3",
                  title: "Duty Calculation",
                  desc: "Duty is calculated and added to your package. You'll receive a notice with the amount due."
                },
                {
                  step: "4",
                  title: "Payment & Release",
                  desc: "You pay the duty (usually via the shipping company). The package is released for delivery."
                },
                {
                  step: "5",
                  title: "Delivery",
                  desc: "Your package is delivered to your address. Total time: 2-4 weeks depending on shipping method."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brushed-gold text-white flex items-center justify-center font-semibold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-midnight-navy mb-1">{item.title}</h3>
                    <p className="text-midnight-navy/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-midnight-navy text-white rounded-2xl p-10 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Let Us Handle the Logistics
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              CeremonyVerse manages shipping documentation, provides a shipment-specific customs estimate, and itemizes assessed duties. Final charges remain subject to US Customs classification and assessment.
            </p>
            <button
              onClick={() => onNavigate?.("contact")}
              className="inline-flex items-center gap-2 bg-brushed-gold text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Book Free Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
