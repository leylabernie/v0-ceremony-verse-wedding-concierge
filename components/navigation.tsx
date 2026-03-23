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
    <header className="fixed top-0 left-0 right-0 z-50 bg-champagne/70 backdrop-blur-2xl border-b border-rose-gold/30 shadow-[0_4px_32px_rgba(212,175,55,0.12)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group"
            aria-label="CeremonyVerse Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold text-midnight-navy tracking-tight">
              Ceremony<span className="text-rose-gold">Verse</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 relative",
                  activePage === item.page
                    ? "text-rose-gold after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-rose-gold after:rounded-full"
                    : "text-midnight-navy/60 hover:text-rose-gold hover:bg-rose-gold/5"
                )}
                aria-current={activePage === item.page ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="ml-4 px-5 py-2.5 bg-rose-gold text-midnight-navy font-semibold text-sm rounded-lg
                transition-all duration-300
                hover:bg-rose-gold/90 hover:shadow-[0_8px_28px_rgba(212,175,55,0.4)]
                focus:outline-none focus:ring-2 focus:ring-rose-gold/60"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-midnight-navy hover:text-rose-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-gold/20 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={cn(
                    "px-4 py-3 text-left font-medium rounded-md transition-all duration-200",
                    activePage === item.page
                      ? "text-rose-gold bg-rose-gold/5"
                      : "text-midnight-navy/60 hover:text-rose-gold hover:bg-rose-gold/5"
                  )}
                  aria-current={activePage === item.page ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="mt-2 mx-4 px-5 py-3 bg-rose-gold text-midnight-navy font-semibold rounded-lg
                  hover:bg-rose-gold/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
                  transition-all duration-300 text-center"
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
