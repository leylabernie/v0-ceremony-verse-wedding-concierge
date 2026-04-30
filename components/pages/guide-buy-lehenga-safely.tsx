import React from "react"
import type { PageType } from "@/app/page"

interface GuidePageProps {
  onNavigate?: (page: PageType) => void
}

export function GuideBuyLehengaSafely({ onNavigate }: GuidePageProps) {
  return (
    <div className="animate-fade-in silk-grain bg-muted-rose">
      {/* Hero */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.25em] uppercase mb-10">
            Complete Guide
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-midnight-navy mb-8 tracking-[0.04em]">
            How to Buy a Bridal Lehenga from India Without Getting Scammed
          </h1>
          <p className="text-midnight-navy/60 text-lg max-w-2xl mx-auto font-sans leading-[1.8]">
            A complete framework for NRI brides to safely source authentic bridal lehengas directly from India — with live verification, vetted vendors, and guaranteed quality.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* The Problem */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-midnight-navy mb-6 tracking-[0.04em]">
              The Problem: Why NRI Brides Get Scammed
            </h2>
            <p className="text-midnight-navy/60 text-lg leading-[1.8] mb-6">
              Buying a bridal lehenga from India as an NRI is high-stakes. A single mistake can cost thousands of dollars and ruin your wedding day. Here are the most common scams:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Fake Vendors & Stolen Images",
                  desc: "Instagram sellers use stolen photos from boutiques. You send payment, they disappear or send a completely different outfit."
                },
                {
                  title: "Instagram vs. Reality",
                  desc: "The fabric looks nothing like the photos. Colors are mismatched, embroidery quality is poor, and the piece arrives days before your wedding."
                },
                {
                  title: "No Accountability After Payment",
                  desc: "Once you've paid, there's no recourse. No customer service, no refunds, no way to contact the vendor."
                },
                {
                  title: "Sizing Disasters",
                  desc: "The blouse doesn't fit. Alterations in the US are expensive and time-consuming. You're stuck."
                },
                {
                  title: "Customs & Shipping Surprises",
                  desc: "Unexpected customs duties, delays, or damaged shipments arrive at your door with no insurance or protection."
                }
              ].map((risk, i) => (
                <div key={i} className="bg-champagne rounded-xl p-6 border border-brushed-gold/30">
                  <h3 className="font-serif text-xl font-semibold text-midnight-navy mb-2">{risk.title}</h3>
                  <p className="text-midnight-navy/60 text-sm">{risk.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-midnight-navy mb-6 tracking-[0.04em]">
              The Solution: A 5-Step Framework for Safe Sourcing
            </h2>
            
            {[
              {
                step: "1",
                title: "Vet Your Vendor Thoroughly",
                points: [
                  "Never buy from Instagram sellers alone. Verify through personal referrals or established concierge services.",
                  "Ask for references from previous clients. Call them directly.",
                  "Check if the vendor has a physical location in India you can verify.",
                  "Look for vendors with 5+ years of experience in bridal lehengas.",
                  "Avoid vendors who pressure you for full payment upfront."
                ]
              },
              {
                step: "2",
                title: "Approve Everything on Live Video",
                points: [
                  "Never commit to a purchase based on photos alone.",
                  "Schedule a live video call where the vendor shows you the exact piece.",
                  "Ask them to drape the fabric, show embroidery up close, and display color in natural light.",
                  "Record the video call for your records.",
                  "Get written confirmation (WhatsApp message) of exactly what you approved."
                ]
              },
              {
                step: "3",
                title: "Use Milestone-Based Payment Protection",
                points: [
                  "Never pay 100% upfront. Use this structure: 25% deposit, 35% after fabric approval, 30% after final inspection, 10% on delivery.",
                  "This ensures you only pay for the next stage after approving the previous one.",
                  "Use payment methods with buyer protection (credit cards, PayPal, Wise).",
                  "Keep all payment receipts and communication records."
                ]
              },
              {
                step: "4",
                title: "Get Precise Measurements & Custom Stitching",
                points: [
                  "Don't rely on standard sizing. Get 15+ precise body measurements.",
                  "Have a tailor in India take measurements on a video call if possible.",
                  "Request custom stitching with strategic ease allowances (0.5-1 inch larger for alterations).",
                  "Ask for a fitting photo before final shipping."
                ]
              },
              {
                step: "5",
                title: "Ensure Full Insurance & Shipping Protection",
                points: [
                  "Verify that your shipment is fully insured.",
                  "Use tracked shipping (DHL, FedEx, UPS) with signature required.",
                  "Get upfront information about expected customs duties (typically 12-27%).",
                  "Have a contingency plan if the shipment is delayed or damaged."
                ]
              }
            ].map((section, i) => (
              <div key={i} className="mb-12">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brushed-gold text-white flex items-center justify-center font-serif text-xl font-semibold flex-shrink-0">
                    {section.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-midnight-navy">{section.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3 ml-16">
                  {section.points.map((point, j) => (
                    <li key={j} className="text-midnight-navy/60 leading-[1.8] flex gap-3">
                      <span className="text-brushed-gold font-bold mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quality Checklist */}
          <div className="mb-16 bg-champagne rounded-2xl p-10 border border-brushed-gold/30">
            <h2 className="font-serif text-3xl font-semibold text-midnight-navy mb-6">
              Quality Checklist: What to Look For
            </h2>
            <div className="space-y-4">
              {[
                { category: "Fabric", items: ["Thread count (higher = better quality)", "Weave consistency", "Color uniformity", "No loose threads or damage"] },
                { category: "Embroidery", items: ["Hand-stitched (not machine-embroidered for bridal)", "Even tension and spacing", "Quality of zari/beads", "No loose stones or beads"] },
                { category: "Blouse", items: ["Proper fit at shoulders", "Sleeve length appropriate for your arms", "Neckline sits correctly", "Back closure secure"] },
                { category: "Skirt", items: ["Even hem", "Waistband comfortable", "Pleats aligned", "Petticoat included and quality"] }
              ].map((section, i) => (
                <div key={i} className="border-l-4 border-brushed-gold pl-4">
                  <h3 className="font-semibold text-midnight-navy mb-2">{section.category}</h3>
                  <ul className="space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-midnight-navy/60 text-sm flex gap-2">
                        <span className="text-brushed-gold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-midnight-navy mb-6">
              Recommended Timeline
            </h2>
            <div className="space-y-4">
              {[
                { months: "12-14 months before", task: "Start researching vendors and concierge services" },
                { months: "10-12 months before", task: "Book consultation and finalize vendor" },
                { months: "8-10 months before", task: "Approve design and place deposit (25%)" },
                { months: "6-8 months before", task: "Fabric sourcing and approval (pay 35%)" },
                { months: "4-6 months before", task: "Custom stitching and production" },
                { months: "2-3 months before", task: "Final inspection and approval (pay 30%)" },
                { months: "2-4 weeks before", task: "Shipping and customs clearance" },
                { months: "1 week before", task: "Final fitting and alterations if needed (pay final 10%)" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 pb-4 border-b border-brushed-gold/20 last:border-b-0">
                  <div className="font-semibold text-brushed-gold min-w-[140px]">{item.months}</div>
                  <div className="text-midnight-navy/60">{item.task}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-midnight-navy text-white rounded-2xl p-10 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Ready to Source Your Bridal Lehenga Safely?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              CeremonyVerse specializes in exactly this — live video verification, vetted vendors, and milestone-based payment protection. Let's help you find the perfect lehenga without the risk.
            </p>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brushed-gold text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
              style={{ textDecoration: "none" }}
            >
              Book Free Consultation →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
