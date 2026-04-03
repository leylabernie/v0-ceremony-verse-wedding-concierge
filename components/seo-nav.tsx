export function SeoNav() {
  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid #e6dfd5",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.25rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#1f1f1f",
          textDecoration: "none",
        }}
      >
        CEREMONY<span style={{ color: "#c7b28a", fontWeight: 300 }}>VERSE</span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
        <a href="/" style={{ fontSize: "0.85rem", color: "#6a5c55", textDecoration: "none", whiteSpace: "nowrap" }}>
          Home
        </a>
        <a href="/#services" style={{ fontSize: "0.85rem", color: "#6a5c55", textDecoration: "none", whiteSpace: "nowrap" }}>
          Services
        </a>
        <a href="/how-it-works" style={{ fontSize: "0.85rem", color: "#6a5c55", textDecoration: "none", whiteSpace: "nowrap" }}>
          How It Works
        </a>
        <a href="/about" style={{ fontSize: "0.85rem", color: "#6a5c55", textDecoration: "none", whiteSpace: "nowrap" }}>
          About
        </a>
        <a href="/blog" style={{ fontSize: "0.85rem", color: "#6a5c55", textDecoration: "none", whiteSpace: "nowrap" }}>
          Blog
        </a>
        <a href="/pricing" style={{ fontSize: "0.85rem", color: "#6a5c55", textDecoration: "none", whiteSpace: "nowrap" }}>
          Pricing
        </a>
        <a href="/free-guides" style={{ fontSize: "0.85rem", color: "#c7b28a", textDecoration: "none", whiteSpace: "nowrap", fontWeight: 600 }}>
          Free Guides
        </a>
        <a href="/#faq" style={{ fontSize: "0.85rem", color: "#6a5c55", textDecoration: "none", whiteSpace: "nowrap" }}>
          FAQ
        </a>
        <a
          href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.82rem",
            fontWeight: 600,
            background: "#c7b28a",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          Book Free Consult
        </a>
      </div>
    </nav>
  )
}
