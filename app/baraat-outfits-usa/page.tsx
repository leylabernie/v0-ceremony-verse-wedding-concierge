import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

export const metadata = {
  title: "Baraat Outfits from India | Groom Sherwani & Groomsmen Kurta Sets | CeremonyVerse",
  description: "Source authentic Baraat outfits from India — full-length groom sherwanis, coordinated groomsmen kurta sets, family attire. Custom stitched to measurements, delivered to USA. CeremonyVerse — NRI wedding specialists.",
  alternates: {
    canonical: "https://ceremonyverse.com/baraat-outfits-usa",
  },
  keywords: "baraat outfit USA, baraat sherwani from India, groom baraat sherwani USA, groomsmen kurta baraat USA, baraat outfit NRI groom, Indian groom baraat outfit, sherwani for baraat delivered USA, baraat groomsmen matching sets, baraat family outfits USA, Indian baraat ceremony outfit USA",
  openGraph: {
    title: "Baraat Outfits from India | Groom Sherwani & Groomsmen Kurta Sets | CeremonyVerse",
    description: "Source authentic Baraat outfits from India — full-length groom sherwanis, coordinated groomsmen kurta sets, family attire. Custom stitched to measurements, delivered to USA. CeremonyVerse — NRI wedding specialists.",
    type: "website",
    url: "https://ceremonyverse.com/baraat-outfits-usa",
  
    images: [
      {
        url: "https://ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
};

export default function BaraatOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Baraat Ceremony
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Baraat outfits sourced from India — the groom's grand entry, done right.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          The Baraat is the groom's moment. A full-length sherwani, coordinated groomsmen, family dressed to celebrate — we source every piece directly from India, custom stitched to every measurement, and delivered to your US door.
        </p>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What we source for Baraat
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Groom's Baraat Sherwani", desc: "Full-length sherwani with safa, custom stitched to your exact measurements. Ivory, cream, gold, or any color — your vision, our execution." },
              { title: "Groomsmen Kurta Sets", desc: "Coordinated bandhgalas or kurta sets in complementary colors. All measurements collected from groomsmen across any state." },
              { title: "Sehra & Accessories", desc: "Groom's sehra, kaleere, and dupatta sourced to complete the look. Every detail coordinated." },
              { title: "Groom's Family Attire", desc: "Coordinated sherwanis and kurtas for the groom's father and brothers. Festive, traditional, and unified." },
              { title: "Mojari & Footwear", desc: "Traditional mojari footwear sourced from India to complete the groom's look — in matching or complementary tones." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Baraat outfit FAQ
          </h2>
          {[
            { q: "Should the Baraat sherwani be different from the wedding sherwani?", a: "Many grooms wear the same sherwani for both the Baraat and the wedding ceremony, while others prefer a separate look. We can source one or both depending on your preference and budget." },
            { q: "How long does a custom sherwani take?", a: "Allow 12–16 weeks for a custom sherwani — measurements, production, and shipping. We recommend starting at least 10 months before your wedding date." },
            { q: "Can you coordinate groomsmen across multiple states?", a: "Yes — we send the measurement guide to each groomsman, follow up to collect all measurements, and ship to a single address or individually. Multi-state coordination is something we do regularly." },
            { q: "What if the groom has never worn a sherwani before?", a: "No problem at all. We guide non-South Asian grooms through everything — what styles look best, how to wear it, and what accessories go with it. Many of our clients are first-time sherwani wearers." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    <SeoFooter />
    </div>
  )
}