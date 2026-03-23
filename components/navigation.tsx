"use client"

import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

type PageType = "home" | "services" | "journey" | "faq" | "contact"

interface NavigationProps {
  activePage: PageType
  onNavigate: (page: PageType) => void
}

const navItems: { label: string; page: PageType }[] = [
  { label: "Home", page: "home" },
  { label: "Services", page: "services" },
  { label: "The Journey", page: "journey" },
  { label: "FAQ", page: "faq" },
  { label: "Contact", page: "contact" },
]

export function Navigation({ activePage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (page: PageType) => {
    onNavigate(page)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group"
            aria-label="CeremonyVerse Home"
          >
            <span className="font-garamond text-2xl sm:text-3xl font-semibold text-midnight-navy tracking-wide">
              Ceremony<span className="text-brushed-gold">Verse</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200",
                  activePage === item.page
                    ? "text-brushed-gold"
                    : "text-midnight-navy/60 hover:text-brushed-gold"
                )}
                aria-current={activePage === item.page ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="ml-6 px-6 py-2.5 bg-champagne text-midnight-navy border border-brushed-gold font-medium text-sm rounded-full
                transition-all duration-300
                hover:bg-muted-rose hover:shadow-[0_4px_20px_rgba(197,160,89,0.2)]"
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
                    "px-4 py-3 text-left font-medium transition-all duration-200",
                    activePage === item.page
                      ? "text-brushed-gold"
                      : "text-midnight-navy/60 hover:text-brushed-gold"
                  )}
                  aria-current={activePage === item.page ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="mt-4 mx-4 px-6 py-3 bg-champagne text-midnight-navy border border-brushed-gold font-medium rounded-full
                  hover:bg-muted-rose transition-all duration-300 text-center"
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
