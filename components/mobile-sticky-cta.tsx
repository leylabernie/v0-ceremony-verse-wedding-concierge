"use client"

export default function MobileStickyCTA() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: "var(--cv-accent)",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.12)",
      }}
      className="md:hidden"
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
          color: "var(--cv-accent)",
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
  )
}
