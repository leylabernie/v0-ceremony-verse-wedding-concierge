"use client"

import { ArrowLeft } from "lucide-react"
import type { PageType } from "@/app/page"

interface TermsPageProps {
  onNavigate: (page: PageType) => void
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <div className="animate-fade-in silk-grain bg-muted-rose min-h-screen">
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back Button */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 text-brushed-gold hover:text-midnight-navy transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sans text-sm">Back to Home</span>
          </button>

          {/* Header */}
          <div className="mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-midnight-navy tracking-wide mb-6">
              Terms of Service
            </h1>
            <p className="text-midnight-navy/50 font-sans">
              Last updated: March 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-midnight-navy/70 font-sans leading-[1.9]">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Agreement to Terms
              </h2>
              <p>
                By accessing or using CeremonyVerse services, you agree to be bound by these Terms of 
                Service. If you do not agree to these terms, please do not use our services. These terms 
                apply to all visitors, clients, and others who access or use our website and services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Our Services
              </h2>
              <p className="mb-4">
                CeremonyVerse provides wedding outfit sourcing and concierge services, connecting clients 
                with verified artisan partners in India. Our services include:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span>Personalized consultation and design guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span>Artisan vetting and quality assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span>Order management and production oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span>US-based inspection and shipping coordination</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Payment Terms
              </h2>
              <p className="mb-4">
                Our standard payment structure requires a 50% deposit to begin production, with the 
                remaining 50% due before final shipment. Custom payment arrangements may be discussed 
                during your consultation.
              </p>
              <p>
                All prices are quoted in USD and do not include applicable taxes, duties, or customs fees, 
                which are the responsibility of the client.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Design Approval Process
              </h2>
              <p>
                Our three-gate approval process (Fabric, Embroidery, Final) is designed to ensure your 
                complete satisfaction. Once you approve a design gate, that element is considered final 
                and changes may incur additional fees or production delays. We strongly encourage 
                thorough review at each approval stage.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Cancellation & Refunds
              </h2>
              <p className="mb-4">
                Due to the custom nature of our products, cancellation policies vary based on production 
                stage:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span><strong>Before fabric procurement:</strong> Full refund minus consultation fee</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span><strong>After fabric procurement:</strong> 50% refund</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span><strong>After embroidery begins:</strong> No refund available</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Intellectual Property
              </h2>
              <p>
                All content on our website, including text, images, logos, and design elements, is the 
                property of CeremonyVerse and protected by copyright law. You may not reproduce, 
                distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Limitation of Liability
              </h2>
              <p>
                CeremonyVerse acts as an intermediary between clients and our sourcing partners. While we 
                conduct thorough vetting and quality control, we cannot guarantee against all 
                manufacturing defects or shipping delays. Our liability is limited to the value of 
                services provided.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Contact Us
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-champagne rounded-xl border border-brushed-gold/30">
                <p className="font-sans">
                  <strong className="text-midnight-navy">CeremonyVerse</strong><br />
                  Email: bhamini@ceremonyverse.com<br />
                  WhatsApp: +1 (215) 341-9990
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
