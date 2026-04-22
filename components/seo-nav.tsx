"use client"

import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Free Guides", href: "/free-guides" },
  { label: "Contact", href: "/#contact" },
]

export function SeoNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 z-50 bg-muted-rose/95 backdrop-blur-md border-b-2 border-brushed-gold" style={{ top: "40px" }}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Far Left with Two-Tone Styling */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex flex-col items-start group"
              aria-label="CeremonyVerse Home"
            >
              <span className="text-2xl sm:text-3xl uppercase tracking-[0.2em] font-semibold text-[#1f1f1f]">
                CEREMONY<span className="font-light text-[#c7b28a]">VERSE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a6f63] mt-0.5">
                Authentic Indian Wedding Shopping for NRI Families
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Center, vertically aligned */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-lg font-medium transition-all duration-200 text-midnight-navy hover:text-brushed-gold whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Far Right */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent text-midnight-navy border border-midnight-navy font-bold text-base rounded-full
                transition-all duration-300
                hover:bg-brushed-gold hover:border-brushed-gold hover:text-white hover:shadow-[0_4px_20px_rgba(197,160,89,0.3)] inline-block text-center"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-midnight-navy hover:text-brushed-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-brushed-gold/30 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-left text-lg font-medium transition-all duration-200 text-midnight-navy hover:text-brushed-gold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 mx-4 px-6 py-3 bg-transparent text-midnight-navy border border-midnight-navy font-bold text-base rounded-full
                  hover:bg-brushed-gold hover:border-brushed-gold hover:text-white transition-all duration-300 text-center"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
