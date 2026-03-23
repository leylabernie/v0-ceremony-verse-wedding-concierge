"use client"

import type { PageType } from "@/app/page"

interface FooterProps {
  onNavigate: (page: PageType) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-champagne border-t border-brushed-gold/30" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => onNavigate("home")}
              className="text-lg font-semibold uppercase tracking-[0.2em] mb-6 inline-block text-midnight-navy"
            >
              CEREMONYVERSE
            </button>
            <p className="text-brushed-gold text-xs font-light italic tracking-wider mb-4 uppercase">
              Heritage Sourcing & Bridal Concierge
            </p>
            <p className="text-midnight-navy/50 text-sm leading-relaxed">
              Your trusted personal sourcing team for authentic South Asian wedding 
              outfits and heritage weaves directly from India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.15em] text-brushed-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Home", page: "home" as PageType },
                { label: "Our Services", page: "services" as PageType },
                { label: "The Journey", page: "journey" as PageType },
                { label: "FAQ", page: "faq" as PageType },
                { label: "Inquire", page: "contact" as PageType },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-midnight-navy/50 hover:text-brushed-gold transition-colors text-sm font-sans"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.15em] text-brushed-gold mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Groomsmen Studio",
                "Bridesmaid Bureau",
                "Heritage Library",
                "Ceremony Details",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onNavigate("services")}
                    className="text-midnight-navy/50 hover:text-brushed-gold transition-colors text-sm font-sans"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.15em] text-brushed-gold mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="text-midnight-navy/50 text-sm font-sans">
                hello@ceremonyverse.com
              </li>
              <li className="text-midnight-navy/50 text-sm font-sans">
                +1 (555) 123-4567
              </li>
              <li className="text-midnight-navy/50 text-sm font-sans leading-relaxed">
                Serving clients across the USA<br />
                Sourcing offices in Delhi, Mumbai & Chennai
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brushed-gold/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-midnight-navy/40 text-sm font-sans">
              {new Date().getFullYear()} CeremonyVerse. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <button 
                onClick={() => onNavigate("privacy")}
                className="text-midnight-navy/40 hover:text-brushed-gold transition-colors text-sm font-sans"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => onNavigate("terms")}
                className="text-midnight-navy/40 hover:text-brushed-gold transition-colors text-sm font-sans"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
