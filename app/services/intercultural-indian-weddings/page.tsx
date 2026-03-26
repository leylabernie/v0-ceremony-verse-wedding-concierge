import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Intercultural Indian Wedding Outfits & Guide USA | CeremonyVerse",
  description: "Planning an intercultural Indian wedding? CeremonyVerse guides non-South Asian partners through every outfit, every ceremony, and every cultural detail. Sherwani sourcing, bridesmaid coordination, full family outfits. US-based Indian wedding concierge.",
  keywords: "intercultural Indian wedding outfits USA, non-Indian partner Indian wedding, Indian wedding outfit for non-South Asian groom, mixed culture Indian wedding USA, sherwani for non-Indian groom, Indian wedding guide non-Indian partner, intercultural wedding concierge USA, Indian American wedding USA",
}

export default function InterculturalWeddingPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />
      <section style={{ padding: "80px 24px 40px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "16px" }}>Intercultural Indian Weddings</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.15, marginBottom: "24px" }}>
          South Indian, Gujarati, or intercultural — we know every tradition.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px" }}>
          Whether you're a South Indian Christian family, a Gujarati couple, an intercultural family, or a non-South Asian partner — CeremonyVerse understands your specific traditions and ceremonies. CeremonyVerse has guided dozens of intercultural couples — explaining what to wear, when, and why — and sourcing every outfit from India to your US door.
        </p>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#c7b28a", color: "#fff", padding: "12px 32px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
          Book Free Consultation — CeremonyVerse.com
        </a>
      </section>

      <section style={{ padding: "40px 24px", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", fontStyle: "italic", color: "#f0ebe3", lineHeight: 1.6, marginBottom: "16px" }}>
            "As a non-South Asian groom, I had no frame of reference. CeremonyVerse walked me through every decision patiently and the sherwani fit perfectly. Our families were blown away."
          </p>
          <p style={{ fontSize: "13px", color: "#c7b28a", fontWeight: 500 }}>— Charlie &amp; Viola, Philadelphia PA · Intercultural wedding</p>
        </div>
      </section>

      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          <div style={{ background: "#fff", borderRadius: "16px", padding: "28px", border: "1px solid #e6dfd5" }}>
            <h3 style={{ fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>Ceremony dress guide</h3>
            {[
              ["Mehndi / Haldi", "Bright festive colors — yellows, oranges, greens"],
              ["Sangeet Night", "Elegant evening — jewel tones, statement pieces"],
              ["Baraat", "Traditional for groom's side — sherwani + coordinated groomsmen"],
              ["Wedding Ceremony", "Most formal — bridal lehenga, groom's wedding sherwani"],
              ["Reception", "Semi-formal — lighter lehenga or saree, guests in smart attire"],
            ].map(([c, d]) => (
              <div key={c} style={{ marginBottom: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#c7b28a", marginBottom: "2px" }}>{c}</p>
                <p style={{ fontSize: "13px", color: "#6a5c55" }}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "#f9f6f3", borderRadius: "16px", padding: "28px", border: "1px solid #e6dfd5" }}>
            <h3 style={{ fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>What we help with</h3>
            {[
              "Sherwani sourcing for non-South Asian grooms",
              "Sizing and measurement guidance for all body types",
              "Coordinating both families' outfits together",
              "Indo-western fusion options for less traditional guests",
              "Outfits for non-Indian bridesmaids and groomsmen",
              "Cultural context explained clearly — no jargon",
              "Ceremony-by-ceremony outfit planning",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "10px" }}>
                <span style={{ color: "#c7b28a", marginTop: "2px" }}>—</span>
                <span style={{ fontSize: "13px", color: "#2f2f2f", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
