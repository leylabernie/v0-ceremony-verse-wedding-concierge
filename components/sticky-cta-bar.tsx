"use client"

import { useState, useEffect } from "react"

export default function StickyCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show the sticky bar after scrolling 600px (don't show immediately)
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Don't render until we know scroll position
  if (!visible && typeof window !== "undefined" && window.scrollY <= 600) {
    return null
  }

  return (
    <>
      {/* Mobile Sticky CTA — always visible at bottom on mobile */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: "#c7b28a",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          boxShadow: "0 -2px 12px rgba(0,0,0,0.12)",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <p style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 500, margin: 0, lineHeight: 1.3 }}>
          Top vendors book 6–12 months out
        </p>
        <a
          href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20found%20CeremonyVerse%20and%20want%20to%20learn%20more."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#fff",
            color: "#c7b28a",
            fontWeight: 700,
            fontSize: "0.8rem",
            padding: "8px 16px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          Book Now
        </a>
      </div>

      {/* Desktop Sticky CTA — slides in from bottom-right */}
      <div
        className="hidden md:flex"
        style={{
          position: "fixed",
          bottom: visible ? 24 : -80,
          right: 24,
          zIndex: 40,
          background: "#1f1f1f",
          borderRadius: "12px",
          padding: "14px 20px",
          alignItems: "center",
          gap: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
          transition: "bottom 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          maxWidth: "480px",
          border: "1px solid #c7b28a33",
        }}
      >
        <div style={{ flex: 1 }}>
          <p style={{ color: "#f8f6f2", fontSize: "0.85rem", fontWeight: 600, margin: "0 0 2px" }}>
            Ready to start sourcing?
          </p>
          <p style={{ color: "#c7b28a", fontSize: "0.75rem", margin: 0, lineHeight: 1.4 }}>
            Free consultation · Live video shopping · US delivery
          </p>
        </div>
        <a
          href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20book%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#c7b28a",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.8rem",
            padding: "10px 20px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.background = "#b5a17a" }}
          onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.background = "#c7b28a" }}
        >
          Book Free Consult
        </a>
        <a
          href="/quiz"
          style={{
            color: "#c7b28a",
            fontWeight: 600,
            fontSize: "0.75rem",
            whiteSpace: "nowrap",
            textDecoration: "none",
            borderBottom: "1px solid #c7b28a66",
            paddingBottom: "1px",
          }}
        >
          Take Style Quiz
        </a>
      </div>
    </>
  )
}
