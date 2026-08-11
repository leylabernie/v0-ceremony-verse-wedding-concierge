import Link from "next/link";

/**
 * Lightweight server-rendered footer — added to layout.tsx so it renders
 * on every page. It keeps the primary visitor paths accessible without
 * repeating the full location-page inventory or a hidden keyword block.
 */
const serviceLinks = [
  { label: "Destination Wedding Planning", href: "/indian-wedding-coordination-mexico/" },
  { label: "Bridal Lehengas", href: "/services/bridal-lehengas/" },
  { label: "Groom Sherwanis", href: "/buy-sherwani-from-india-usa/" },
  { label: "Bridesmaid Outfits", href: "/bridesmaid-and-family-outfits-from-india/" },
  { label: "Jewelry & Accessories", href: "/services/" },
  { label: "Ceremonial Items", href: "/wedding-accessories-and-ceremony-items-from-india/" },
];

const ceremonyLinks = [
  { label: "Mehndi & Haldi Outfits", href: "/mehndi-outfits-usa/" },
  { label: "Sangeet Outfits", href: "/sangeet-outfits-usa/" },
  { label: "Baraat Outfits", href: "/baraat-outfits-usa/" },
  { label: "Reception Outfits", href: "/reception-outfits-usa/" },
  { label: "Gujarati Wedding Outfits", href: "/gujarati-wedding-outfits-usa/" },
];

const companyLinks = [
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Wedding Calculators", href: "/planning-tools/" },
  { label: "Free Guides", href: "/free-guides/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export function GlobalFooter() {
  return (
    <footer style={{ background: "#f9f6f3", borderTop: "1px solid #e6dfd5" }}>
      {/* Main footer grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "32px",
        }}>
          {/* Brand column */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1f1f1f" }}>
                CEREMONY<span style={{ fontWeight: 300, color: "#7a6841" }}>VERSE</span>
              </span>
            </Link>
            <p style={{ fontSize: "13px", color: "#4d403a", lineHeight: 1.6, marginTop: "8px" }}>
              India wedding shopping for families across the entire USA and Canada, plus destination-wedding
              planning for Gujarati and Hindu families across Mexico and Punta Cana.
            </p>
            <a
              href="https://www.trustpilot.com/review/ceremonyverse.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "#7a6841",
                marginTop: "12px",
                textDecoration: "none",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.95 6.36L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 7.05-1.91L12 2z" />
              </svg>
              View our Trustpilot profile →
            </a>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#5e4a40", fontWeight: 600, marginBottom: "12px" }}>Services</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "13px", color: "#4d403a", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ceremonies */}
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#5e4a40", fontWeight: 600, marginBottom: "12px" }}>By Ceremony</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {ceremonyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "13px", color: "#4d403a", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#5e4a40", fontWeight: 600, marginBottom: "12px" }}>Company</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "13px", color: "#4d403a", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #e6dfd5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <p style={{ fontSize: "11px", color: "#5e4a40" }}>© {new Date().getFullYear()} CeremonyVerse. All rights reserved.</p>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/privacy/" style={{ fontSize: "11px", color: "#5e4a40", textDecoration: "none" }}>Privacy Policy</Link>
            <span style={{ color: "#e6dfd5" }}>·</span>
            <Link href="/terms/" style={{ fontSize: "11px", color: "#5e4a40", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
