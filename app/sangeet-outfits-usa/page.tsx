import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Sangeet Night Outfits from India | Delivered to USA | CeremonyVerse",
  description: "Source stunning Sangeet night outfits from India — jewel-tone lehengas, embellished sarees, statement jewelry. Custom stitched, coordinated for the full party, delivered to your US door. NRI wedding specialists.",
  alternates: {
    canonical: "https://ceremonyverse.com/sangeet-outfits-usa",
  },
  keywords: "sangeet outfit USA, sangeet lehenga from India, sangeet night dress NRI, sangeet outfit delivered USA, Indian sangeet ceremony outfit, jewel tone lehenga USA, sangeet bridesmaid outfits, sangeet night wear from India, sangeet outfit for NRI bride, sangeet coordination USA",
  openGraph: {
    title: "Sangeet Night Outfits from India | Delivered to USA | CeremonyVerse",
    description: "Source stunning Sangeet night outfits from India — jewel-tone lehengas, embellished sarees, statement jewelry. Custom stitched, coordinated for the full party, delivered to your US door. NRI wedding specialists.",
    type: "website",
    url: "https://ceremonyverse.com/sangeet-outfits-usa",
  },
};

export default function SangeetOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Sangeet Night
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Sangeet outfits sourced from India — statement looks for your biggest night.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          The Sangeet is your most photogenic night — deep emerald, sapphire blue, rich plum. We source show-stopping looks for the bride, coordinated outfits for the full bridal party, and statement jewelry — all from India, all delivered to your US door.
        </p>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What we source for Sangeet
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Bride's Sangeet Lehenga", desc: "Jewel-toned statement piece — emerald, sapphire, plum, or royal blue. Heavy embroidery, custom stitched to your measurements." },
              { title: "Bridesmaid Coordination", desc: "Coordinated lehengas or embellished sarees in complementary shades. All measurements collected and managed." },
              { title: "Groomsmen Attire", desc: "Bandhgalas, silk kurtas, or indo-western sets in coordinating colors — polished without being overdressed." },
              { title: "Statement Jewelry", desc: "Kundan, polki, or gold statement sets sourced from our dedicated jewelry supplier for the Sangeet look." },
              { title: "Family Outfits", desc: "Semi-formal Indian wear for both families — sarees, lehengas, and kurta sets coordinated to the evening palette." },
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
            Sangeet outfit FAQ
          </h2>
          {[
            { q: "What colors work best for a Sangeet outfit?", a: "Jewel tones photograph beautifully under evening lighting — deep emerald, sapphire blue, rich plum, and burgundy are all popular. Many brides choose a bold color contrast to their bridal lehenga." },
            { q: "Should the Sangeet outfit be different from the wedding lehenga?", a: "Yes — most brides wear a separate look for the Sangeet. It's typically lighter and more dance-friendly than the bridal lehenga, but equally show-stopping." },
            { q: "Can you source matching outfits for the whole party?", a: "Absolutely. We coordinate the bride, bridesmaids, groomsmen, and family into a cohesive palette — managing all measurements and shipping together." },
            { q: "How early should I order Sangeet outfits?", a: "Order at least 5–8 months before your Sangeet date, especially if you're coordinating multiple people. Custom stitching takes time and we need measurements from everyone." },
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
