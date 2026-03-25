"use client"

import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import type { PageType } from "@/app/page"

interface NavigationProps {
  activePage: PageType
  onNavigate: (page: PageType) => void
}

const navItems: { label: string; page: PageType }[] = [
  { label: "Home", page: "home" },
  { label: "Services", page: "services" },
  { label: "How It Works", page: "journey" },
  { label: "FAQ", page: "faq" },
  { label: "Blog", page: "blog" },
  { label: "Contact", page: "contact" },
]

export function Navigation({ activePage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (page: PageType) => {
    onNavigate(page)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 z-50 bg-muted-rose/95 backdrop-blur-md border-b-2 border-brushed-gold" style={{ top: "40px" }}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Far Left with Two-Tone Styling */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center group"
              aria-label="CeremonyVerse Home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-transparent.png"
                alt="CeremonyVerse"
                style={{ height: "52px", width: "auto", display: "block" }}
              />
            </button>
          </div>

          {/* Desktop Navigation - Center, vertically aligned */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={cn(
                    "px-4 py-2 text-lg font-medium transition-all duration-200",
                    activePage === item.page
                      ? "text-brushed-gold"
                      : "text-midnight-navy hover:text-brushed-gold"
                  )}
                  aria-current={activePage === item.page ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button - Far Right */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-8 py-3 bg-transparent text-midnight-navy border border-midnight-navy font-bold text-base rounded-full
                transition-all duration-300
                hover:bg-brushed-gold hover:border-brushed-gold hover:text-white hover:shadow-[0_4px_20px_rgba(197,160,89,0.3)]"
            >
              Book Consultation
            </button>
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
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={cn(
                    "px-4 py-3 text-left text-lg font-medium transition-all duration-200",
                    activePage === item.page
                      ? "text-brushed-gold"
                      : "text-midnight-navy hover:text-brushed-gold"
                  )}
                  aria-current={activePage === item.page ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="mt-4 mx-4 px-6 py-3 bg-transparent text-midnight-navy border border-midnight-navy font-bold text-base rounded-full
                  hover:bg-brushed-gold hover:border-brushed-gold hover:text-white transition-all duration-300 text-center"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
