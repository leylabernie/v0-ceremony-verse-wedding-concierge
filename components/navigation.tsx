"use client"

import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { trackLead } from "@/lib/analytics"

// All internal links use trailing slashes to match next.config.mjs `trailingSlash: true`.
// Without this, Next.js emits a 308 redirect on every click/crawl, wasting crawl
// budget and slowing Google's ability to discover & refresh content.
const navItems: { label: string; href: string }[] = [
  { label: "Services", href: "/services/" },
  { label: "India Shopping", href: "/shop-from-india/" },
  { label: "Destination Planning", href: "/indian-wedding-coordination-mexico/" },
  { label: "Calculators", href: "/planning-tools/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  // Normalize both sides to trailing-slash form so "/services/" matches
  // when Next.js reports pathname as "/services" (client-side transitions
  // sometimes arrive without the slash).
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === ""
    }
    const norm = (p: string) => (p.endsWith("/") ? p : p + "/")
    return norm(pathname) === norm(href)
  }

  return (
    <header className="cv-site-header fixed left-0 right-0 z-50 bg-muted-rose/95 backdrop-blur-md border-b-2 border-brushed-gold">
      <nav className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="cv-navigation-row flex items-center justify-between gap-3">
          {/* Logo - Far Left with Two-Tone Styling */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex flex-col items-start group"
              onClick={handleLinkClick}
            >
              <span className="text-2xl sm:text-3xl uppercase tracking-[0.2em] font-semibold text-[#1f1f1f]">
                CEREMONY<span className="font-light text-[#7a6841]">VERSE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#5e4a40] mt-0.5">
                India Shopping · Destination Planning
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center, vertically aligned */}
          <div className="hidden min-w-0 flex-1 items-center justify-center px-3 min-[1280px]:flex">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap px-2 py-2 text-sm font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "text-brushed-gold"
                      : "text-midnight-navy hover:text-brushed-gold"
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Far Right */}
          <div className="hidden flex-shrink-0 items-center gap-3 min-[1280px]:flex">
            <a
              href="https://wa.me/12153419990?text=Hello%20CeremonyVerse!%20I%20found%20your%20website%20and%20want%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead("whatsapp", "nav")}
              className="hidden min-[1660px]:inline-flex items-center gap-2 px-5 py-3 font-bold text-base rounded-full text-white
                transition-all duration-300 hover:opacity-90"
              style={{ background: "#25D366" }}
              aria-label="Chat with us on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16.001 3.2c-7.058 0-12.8 5.742-12.8 12.8 0 2.257.59 4.458 1.71 6.4L3.2 28.8l6.528-1.707a12.734 12.734 0 006.273 1.707h.001c7.058 0 12.8-5.742 12.8-12.8S23.059 3.2 16.001 3.2zm5.835 15.547c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.588-.95-.848-1.59-1.893-1.776-2.213-.187-.32-.02-.493.14-.653.147-.146.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.626-.526-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.257 3.447 5.467 4.827.764.33 1.36.527 1.825.674.767.244 1.466.21 2.02.127.616-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contact/"
              className="inline-block whitespace-nowrap px-6 py-3 bg-transparent text-midnight-navy border border-midnight-navy font-bold text-base rounded-full
                transition-all duration-300
                hover:bg-brushed-gold hover:border-brushed-gold hover:text-white hover:shadow-[0_4px_20px_rgba(197,160,89,0.3)]"
            >
              <span className="min-[1660px]:hidden">Book Fit Call</span>
              <span className="hidden min-[1660px]:inline">Book Free Fit Call</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex-shrink-0 p-2 text-midnight-navy transition-colors hover:text-brushed-gold min-[1280px]:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="max-h-[calc(100vh-var(--cv-announcement-height)-var(--cv-navigation-height))] overflow-y-auto border-t border-brushed-gold/30 py-6 animate-fade-in min-[1280px]:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "px-4 py-3 text-left text-lg font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "text-brushed-gold"
                      : "text-midnight-navy hover:text-brushed-gold"
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={handleLinkClick}
                className="mt-4 mx-4 px-6 py-3 bg-transparent text-midnight-navy border border-midnight-navy font-bold text-base rounded-full
                  hover:bg-brushed-gold hover:border-brushed-gold hover:text-white transition-all duration-300 text-center"
              >
                Book Free Fit Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
