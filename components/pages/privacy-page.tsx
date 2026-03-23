"use client"

import { ArrowLeft } from "lucide-react"
import type { PageType } from "@/app/page"

interface PrivacyPageProps {
  onNavigate: (page: PageType) => void
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
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
              Privacy Policy
            </h1>
            <p className="text-midnight-navy/50 font-sans">
              Last updated: March 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-midnight-navy/70 font-sans leading-[1.9]">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Information We Collect
              </h2>
              <p className="mb-4">
                At CeremonyVerse, we collect information you provide directly to us, including your name, 
                email address, phone number, wedding date, and preferences when you submit our consultation 
                form or communicate with our team.
              </p>
              <p>
                We also collect certain information automatically when you visit our website, such as your 
                IP address, browser type, and pages visited. This helps us improve our services and 
                provide you with a better experience.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span>Process your consultation requests and provide our sourcing services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span>Communicate with you about your orders, design approvals, and shipping updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span>Send you promotional communications (with your consent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span>Improve our website and services</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Information Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as necessary to provide our services (such as sharing 
                measurements with our manufacturing partners in India) or as required by law.
              </p>
              <p>
                Our manufacturing partners are bound by strict confidentiality agreements and only receive 
                the information necessary to fulfill your orders.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. This 
                includes encrypted communications, secure servers, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Your Rights
              </h2>
              <p className="mb-4">
                You have the right to access, correct, or delete your personal information at any time. 
                You may also opt out of promotional communications by following the unsubscribe 
                instructions in our emails.
              </p>
              <p>
                To exercise these rights, please contact us at privacy@ceremonyverse.com.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-champagne rounded-xl border border-brushed-gold/30">
                <p className="font-sans">
                  <strong className="text-midnight-navy">CeremonyVerse</strong><br />
                  Email: privacy@ceremonyverse.com<br />
                  Phone: +1 (555) 123-4567
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
