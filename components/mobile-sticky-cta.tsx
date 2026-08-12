"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileStickyCTA() {
  const pathname = usePathname()
  const calculatorPage = pathname.startsWith("/planning-tools")
  const homePage = pathname === "/"
  const destinationPage =
    pathname.startsWith("/destinations") ||
    pathname.startsWith("/resort-packages") ||
    pathname.startsWith("/indian-wedding-coordination-mexico") ||
    pathname.startsWith("/indian-destination-wedding-planner-mexico")

  const consultationHref = homePage
    ? "/contact/?service=mexico&from=mobile-home"
    : calculatorPage
      ? "/contact/?service=mexico&from=mobile-calculator"
      : "/contact/?service=mexico&from=mobile-destination"
  const prompt = calculatorPage
    ? "Need help with these numbers?"
    : homePage
      ? "Ready for a clearer first step?"
      : destinationPage
        ? "Planning Mexico, Jamaica, or Punta Cana?"
        : "Questions about CeremonyVerse?"

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
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.12)",
      }}
      className="cv-mobile-sticky-cta flex min-[1280px]:hidden"
    >
      <p style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 500, margin: 0, lineHeight: 1.3 }}>
        {prompt}
      </p>
      <Link
        href={consultationHref}
        style={{
          background: "#fff",
          color: "var(--cv-accent)",
          fontWeight: 700,
          fontSize: "0.9rem",
          padding: "8px 16px",
          borderRadius: "999px",
          whiteSpace: "nowrap",
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        Free Call
      </Link>
    </div>
  )
}
