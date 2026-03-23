"use client"

import { Mail, Phone, MapPin } from "lucide-react"

type PageType = "home" | "services" | "journey" | "faq" | "contact"

interface FooterProps {
  onNavigate: (page: PageType) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-navy text-ivory" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => onNavigate("home")}
              className="font-serif text-2xl font-bold tracking-tight mb-4 inline-block"
            >
              Ceremony<span className="text-gold">Verse</span>
            </button>
            <p className="text-ivory/70 text-sm leading-relaxed mb-6">
              Your trusted personal sourcing team for authentic South Asian wedding 
              outfits, heritage weaves, and ceremonial items directly from India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", page: "home" as PageType },
                { label: "Our Services", page: "services" as PageType },
                { label: "The Journey", page: "journey" as PageType },
                { label: "FAQ", page: "faq" as PageType },
                { label: "Contact", page: "contact" as PageType },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-ivory/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Groomsmen Studio",
                "Bridesmaid Bureau",
                "Heritage Library",
                "Ceremony Details",
                "Custom Sourcing",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onNavigate("services")}
                    className="text-ivory/70 hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-ivory/70 text-sm">hello@ceremonyverse.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-ivory/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-ivory/70 text-sm">
                  Serving clients across the USA<br />
                  Sourcing offices in Delhi, Mumbai & Chennai
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ivory/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-ivory/50 text-sm">
              {new Date().getFullYear()} CeremonyVerse. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-ivory/50 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-ivory/50 hover:text-gold transition-colors text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
