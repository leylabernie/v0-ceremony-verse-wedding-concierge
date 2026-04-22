import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Mehndi & Haldi Ceremony Outfits from India | Delivered to USA | CeremonyVerse",
  description: "Source authentic Mehndi and Haldi ceremony outfits directly from India. Yellow lehengas, orange salwar sets, bridesmaid coordination, family outfits — custom stitched and delivered to your US door. NRI wedding specialists.",
  alternates: {
    canonical: "https://ceremonyverse.com/mehndi-outfits-usa",
  },
  keywords: "mehndi outfit USA, haldi ceremony outfit USA, mehndi lehenga from India, haldi outfit NRI bride, mehndi ceremony dress USA, yellow lehenga USA, mehndi bridesmaid outfits, Indian mehndi outfit delivered USA, haldi outfit from India, mehndi dress for NRI wedding",
  openGraph: {
    title: "Mehndi & Haldi Ceremony Outfits from India | Delivered to USA | CeremonyVerse",
    description: "Source authentic Mehndi and Haldi ceremony outfits directly from India. Yellow lehengas, orange salwar sets, bridesmaid coordination, family outfits — custom stitched and delivered to your US door. NRI wedding specialists.",
    type: "website",
    url: "https://ceremonyverse.com/mehndi-outfits-usa",
  },
};

export default function MehndiOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Mehndi & Haldi Ceremony
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Mehndi & Haldi outfits sourced from India, delivered to your US door.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          The Mehndi and Haldi ceremonies set the tone for everything that follows. We source bright, festive outfits — yellows, oranges, greens — custom stitched to your measurements and coordinated across your entire bridal party and family.
        </p>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What we source for Mehndi & Haldi
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Bride's Mehndi Lehenga", desc: "Bright yellow, green, or orange lehenga or anarkali — festive, comfortable for sitting, and beautiful for photos." },
              { title: "Haldi Outfit", desc: "Simple, cheerful outfit specifically for the Haldi — often cotton or georgette so it can get messy. Custom stitched to your fit." },
              { title: "Bridesmaid Outfits", desc: "Coordinated salwar sets, lehengas, or anarkalis in complementary colors. All measurements collected and managed by us." },
              { title: "Family Outfits", desc: "Coordinated kurtas and salwar sets for both sides of the family. Bright, festive palette to match the vibe." },
              { title: "Dupatta & Accessories", desc: "Contrasting or matching dupattas, floral jewelry, and mehndi-appropriate accessories sourced together." },
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
            Mehndi outfit FAQ
          </h2>
          {[
            { q: "What colors are traditional for Mehndi outfits?", a: "Yellow is the most traditional Mehndi color, followed by orange, green, and pink. Many brides choose a bright yellow for Haldi and a more elaborate look for the Mehndi function. We source across all color preferences." },
            { q: "Should the Mehndi outfit be comfortable?", a: "Yes — you'll be sitting for extended periods during the Mehndi application. We recommend flats or low heels and a comfortable silhouette. We factor this into our sourcing recommendations." },
            { q: "How far in advance should I order Mehndi outfits?", a: "6–8 months before your ceremony date is ideal. Mehndi outfits are often ordered after the bridal lehenga — but don't leave them too late, especially if bridesmaid coordination is involved." },
            { q: "Can you coordinate bridesmaid outfits in matching colors?", a: "Yes — this is one of our specialties. We collect all measurements, source coordinating pieces, and manage the entire process so everything arrives together." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
