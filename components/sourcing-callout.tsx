/**
 * SourcingCallout — reusable inline CTA banner for blog posts.
 *
 * Drop this anywhere inside a blog article body to surface the primary
 * sourcing conversion CTA. Styling is inlined so it renders identically
 * regardless of the surrounding page's CSS approach (some blog pages use
 * Tailwind classes, others use inline styles).
 *
 * Usage:
 *   import { SourcingCallout } from "@/components/sourcing-callout";
 *   ...
 *   <SourcingCallout />
 */
export function SourcingCallout() {
  return (
    <div
      className="ceremony-cta-box"
      style={{
        border: "1px solid #d4af37",
        background: "#fffdfa",
        padding: "20px",
        borderRadius: "8px",
        margin: "25px 0",
      }}
    >
      <h4 style={{ marginTop: 0, color: "#1a1a1a" }}>
        Sourcing Your Indian Wedding Wardrobe from Abroad?
      </h4>
      <p style={{ color: "#555" }}>
        CeremonyVerse manages custom measurements, quality checks, and direct
        door delivery for NRI brides and grooms.
      </p>
      <a
        href="/how-it-works/"
        style={{
          background: "#1a1a1a",
          color: "#fff",
          padding: "10px 18px",
          borderRadius: "4px",
          textDecoration: "none",
          display: "inline-block",
          fontWeight: "bold",
        }}
      >
        Explore Sourcing Services &rarr;
      </a>
    </div>
  );
}

export default SourcingCallout;
