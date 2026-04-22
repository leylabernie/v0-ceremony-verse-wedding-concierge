import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Press & Media — CeremonyVerse | Indian Wedding Shopping Concierge",
  description: "Press and media resources for CeremonyVerse — the Indian wedding shopping concierge for NRI families in the US, Canada, UK, Australia, and New Zealand. Founded by Bhamini, based in Philadelphia.",
  alternates: {
    canonical: "https://ceremonyverse.com/press",
  },
  keywords: "CeremonyVerse press, CeremonyVerse media, NRI wedding concierge press, Indian wedding shopping press kit, Bhamini CeremonyVerse founder, indian wedding media",
  openGraph: {
    title: "Press & Media — CeremonyVerse | Indian Wedding Shopping Concierge",
    description: "Press and media resources for CeremonyVerse — the Indian wedding shopping concierge for NRI families in the US, Canada, UK, Australia, and New Zealand. Founded by Bhamini, based in Philadelphia.",
    type: "website",
    url: "https://ceremonyverse.com/press",
  },
};

const storyAngles = [
  {
    tag: "NRI & Diaspora",
    title: "The Cross-Border Shopping Problem NRI Families Face",
    desc: "How 4.4 million Indian Americans navigate wedding outfit shopping when the best craftspeople are 8,000 miles away — and the solutions that are emerging to bridge the gap.",
    accent: "#c7b28a",
  },
  {
    tag: "Technology & Tradition",
    title: "Live Video Shopping: How One Concierge Bridges India and the West",
    desc: "The technology and personal touch behind CeremonyVerse's live video shopping model — real-time access to artisan workshops in Kanchipuram, Surat, and Delhi from living rooms in New Jersey to Auckland.",
    accent: "#b89e72",
  },
  {
    tag: "Supply Chain & Craft",
    title: "From Kanchipuram to California: The Artisan Supply Chain",
    desc: "How CeremonyVerse works directly with artisan workshops across India — bypassing middlemen, preserving craft authenticity, and delivering genuine handwoven silk to diaspora families who know the difference.",
    accent: "#d4c09a",
  },
  {
    tag: "Intercultural Weddings",
    title: "Intercultural Weddings: When Two Cultures Dress as One",
    desc: "How CeremonyVerse helps couples where one partner has never worn Indian clothes before — measuring, styling, and guiding non-Indian partners and their families into attire that feels right, not costumed.",
    accent: "#c7b28a",
  },
]

const quickFacts = [
  { label: "Founded", value: "2024" },
  { label: "Founder", value: "Bhamini" },
  { label: "Headquarters", value: "Philadelphia, PA, USA" },
  { label: "What", value: "Indian wedding shopping concierge" },
  { label: "Markets", value: "USA, Canada, UK, Australia, New Zealand" },
  { label: "Website", value: "ceremonyverse.com", href: "https://ceremonyverse.com" },
  { label: "Press Contact", value: "bhamini@ceremonyverse.com", href: "mailto:bhamini@ceremonyverse.com" },
]

export default function PressPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 56px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Press & Media
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          CeremonyVerse in the News
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", maxWidth: "580px", margin: "0 auto 32px" }}>
          CeremonyVerse is the Indian wedding shopping concierge for NRI families worldwide — sourcing authentic outfits directly from artisan workshops across India for weddings happening in the US, Canada, UK, Australia, and New Zealand.
        </p>
        <a
          href="mailto:bhamini@ceremonyverse.com"
          style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
        >
          Contact for Press Inquiries
        </a>
      </section>

      {/* About CeremonyVerse — Quick Reference for Journalists */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "10px", fontWeight: 500, textAlign: "center" }}>
            For Journalists
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            About CeremonyVerse
          </h2>
          <div style={{ background: "#f9f6f3", borderRadius: "16px", border: "1px solid #e6dfd5", overflow: "hidden" }}>
            {quickFacts.map((fact, i) => (
              <div
                key={fact.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  padding: "16px 28px",
                  borderBottom: i < quickFacts.length - 1 ? "1px solid #e6dfd5" : "none",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, color: "#1f1f1f", minWidth: "130px", flexShrink: 0 }}>
                  {fact.label}
                </span>
                {fact.href ? (
                  <a href={fact.href} style={{ fontSize: "15px", color: "#c7b28a", textDecoration: "none", fontWeight: 500 }}>
                    {fact.value}
                  </a>
                ) : (
                  <span style={{ fontSize: "15px", color: "#6a5c55", lineHeight: 1.5 }}>{fact.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Angles */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "10px", fontWeight: 500, textAlign: "center" }}>
            Pitch Ideas
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "10px" }}>
            Story Angles
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", textAlign: "center", maxWidth: "540px", margin: "0 auto 40px" }}>
            We&apos;re happy to support any of these angles with founder interviews, customer stories, and background research.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {storyAngles.map((angle) => (
              <div
                key={angle.title}
                style={{ background: "#f9f6f3", borderRadius: "16px", border: "1px solid #e6dfd5", overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                <div style={{ height: "4px", background: angle.accent }} />
                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: angle.accent, fontWeight: 600, marginBottom: "10px" }}>
                    {angle.tag}
                  </p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.3, marginBottom: "14px", flex: 1 }}>
                    {angle.title}
                  </h3>
                  <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#6a5c55", margin: 0 }}>
                    {angle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section style={{ padding: "56px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "10px", fontWeight: 500, textAlign: "center" }}>
            Coverage
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            As Featured In
          </h2>
          <div
            style={{
              background: "#f9f6f3",
              border: "1px solid #e6dfd5",
              borderRadius: "16px",
              padding: "40px 36px",
              textAlign: "center",
            }}
          >
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", fontStyle: "italic", color: "#1f1f1f", marginBottom: "12px", lineHeight: 1.5 }}>
              Media features coming soon.
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "20px" }}>
              We&apos;re a young brand doing meaningful work. If you&apos;re a journalist, blogger, or podcaster covering NRI culture, Indian fashion, or diaspora weddings — we&apos;d love to be your first feature.
            </p>
            <a
              href="mailto:bhamini@ceremonyverse.com"
              style={{ display: "inline-flex", alignItems: "center", border: "1px solid #c7b28a", color: "#c7b28a", padding: "10px 26px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, textDecoration: "none", background: "transparent" }}
            >
              Reach Out for Press Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* Press Kit & Contact */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "10px", fontWeight: 500, textAlign: "center" }}>
            Resources
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "40px" }}>
            Press Kit & Contact
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#f9f6f3", borderRadius: "14px", padding: "28px", border: "1px solid #e6dfd5" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "14px", letterSpacing: "0.02em" }}>Contact</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "10px" }}>
                <span style={{ fontWeight: 600, color: "#1f1f1f" }}>Email: </span>
                <a href="mailto:bhamini@ceremonyverse.com" style={{ color: "#c7b28a", textDecoration: "none" }}>bhamini@ceremonyverse.com</a>
              </p>
              <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#6a5c55", margin: 0 }}>
                <span style={{ fontWeight: 600, color: "#1f1f1f" }}>WhatsApp: </span>
                <a href="https://wa.me/12153419990" target="_blank" rel="noopener noreferrer" style={{ color: "#c7b28a", textDecoration: "none" }}>+1 (215) 341-9990</a>
              </p>
            </div>
            <div style={{ background: "#f9f6f3", borderRadius: "14px", padding: "28px", border: "1px solid #e6dfd5" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "14px", letterSpacing: "0.02em" }}>Assets Available on Request</h3>
              <ul style={{ paddingLeft: "16px", margin: 0 }}>
                {["High-resolution logo files", "Founder photo (Bhamini)", "Product & sourcing photography"].map((item) => (
                  <li key={item} style={{ fontSize: "13px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "4px" }}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#f9f6f3", borderRadius: "14px", padding: "28px", border: "1px solid #e6dfd5" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "14px", letterSpacing: "0.02em" }}>We Can Provide</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#6a5c55", margin: 0 }}>
                Founder interviews, customer stories (with permission), and expert commentary on NRI wedding trends, cross-border shopping, and Indian fashion for diaspora families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "56px 24px", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
            Work With Us
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.2, marginBottom: "18px" }}>
            Want to Feature CeremonyVerse?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "32px" }}>
            We respond to every press inquiry personally. Whether you&apos;re writing a feature, recording a podcast, or building a roundup — reach out and we&apos;ll make it easy.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:bhamini@ceremonyverse.com"
              style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
            >
              Email Bhamini
            </a>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20reaching%20out%20about%20a%20press%20feature%20on%20CeremonyVerse."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", background: "#1f1f1f", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
            >
              WhatsApp
            </a>
          </div>
          <p style={{ fontSize: "13px", color: "#6a5c55", marginTop: "20px" }}>
            Response time: within 24 hours
          </p>
        </div>
      </section>
    </div>
  )
}
