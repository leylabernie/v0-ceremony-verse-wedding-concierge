"use client"

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
    <header
      style={{
        position: "fixed",
        top: "40px",
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(245,243,239,0.97)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "2px solid #c7b28a",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
        aria-label="Main navigation"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "96px",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{ textDecoration: "none", flexShrink: 0 }}
            aria-label="CeremonyVerse Home"
          >
            <span
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontWeight: 600,
                color: "#1f1f1f",
              }}
            >
              CEREMONY
              <span style={{ fontWeight: 300, color: "#c7b28a" }}>VERSE</span>
            </span>
            <span
              style={{
                display: "block",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#8a6f63",
                marginTop: "2px",
              }}
            >
              Authentic Indian Wedding Shopping for NRI Families
            </span>
          </a>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              paddingLeft: "32px",
              paddingRight: "32px",
            }}
            className="seo-nav-desktop"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    padding: "8px 16px",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    color: "#1f1f1f",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#c7b28a"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#1f1f1f"
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ flexShrink: 0 }} className="seo-nav-cta">
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                background: "transparent",
                color: "#1f1f1f",
                border: "1px solid #1f1f1f",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#c7b28a"
                e.currentTarget.style.borderColor = "#c7b28a"
                e.currentTarget.style.color = "#fff"
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(197,160,89,0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = "#1f1f1f"
                e.currentTarget.style.color = "#1f1f1f"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="seo-nav-mobile-btn"
            style={{
              display: "none",
              padding: "8px",
              background: "none",
              border: "none",
              color: "#1f1f1f",
              cursor: "pointer",
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            style={{
              paddingTop: "24px",
              paddingBottom: "24px",
              borderTop: "1px solid rgba(199,178,138,0.3)",
            }}
            className="seo-nav-mobile"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    padding: "12px 16px",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    color: "#1f1f1f",
                    textDecoration: "none",
                    display: "block",
                    transition: "color 0.2s",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "16px",
                  margin: "16px 16px 0",
                  padding: "12px 24px",
                  background: "transparent",
                  color: "#1f1f1f",
                  border: "1px solid #1f1f1f",
                  fontWeight: 700,
                  fontSize: "1rem",
                  borderRadius: "999px",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  transition: "all 0.3s",
                }}
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .seo-nav-desktop { display: none !important; }
          .seo-nav-cta { display: none !important; }
          .seo-nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
