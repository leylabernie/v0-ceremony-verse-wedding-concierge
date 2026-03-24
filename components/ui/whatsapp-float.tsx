"use client"

export default function WhatsAppFloat() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999999,
      }}
    >
      <a
        href="https://wa.me/12153419990?text=Hi%20I%20am%20interested%20in%20Indian%20wedding%20outfit%20sourcing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#25D366",
          color: "white",
          padding: "12px 18px",
          borderRadius: "999px",
          fontWeight: 600,
          fontSize: "14px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Message on WhatsApp
      </a>
    </div>
  )
}
