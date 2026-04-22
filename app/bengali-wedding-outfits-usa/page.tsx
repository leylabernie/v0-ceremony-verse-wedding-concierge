import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Bengali Wedding Outfits from India | NRI USA | CeremonyVerse",
  description: "Planning a Bengali wedding in the USA? CeremonyVerse sources authentic Banarasi silk sarees, bridal lehengas, sherwanis, and family outfits from India — delivered to your US door.",
  alternates: {
    canonical: "https://ceremonyverse.com/bengali-wedding-outfits-usa",
  },
  keywords: "bengali wedding outfits usa, NRI bengali wedding, bengali bridal saree usa, banarasi silk saree usa, bengali wedding what to wear",
  openGraph: {
    title: "Bengali Wedding Outfits from India | NRI USA | CeremonyVerse",
    description: "Planning a Bengali wedding in the USA? CeremonyVerse sources authentic Banarasi silk sarees, bridal lehengas, sherwanis, and family outfits from India — delivered to your US door.",
    type: "website",
    url: "https://ceremonyverse.com/bengali-wedding-outfits-usa",
  };

export default function BengaliWeddingOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Bengali Wedding Specialists
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Bengali Wedding Outfits Sourced from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Bengali weddings are rich in ritual and textile tradition — from the iconic red and white Banarasi silk saree of the bride to the groom's crisp dhoti-kurta and topor. CeremonyVerse sources everything directly from India, with live video approval so you see the exact saree, weave, and zari work before it ships to your US door.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20planning%20a%20Bengali%20wedding%20and%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* What Makes Bengali Weddings Distinct */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What makes Bengali weddings distinct
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Bridal Saree (Benarasi Silk)", desc: "The Bengali bride traditionally wears a red Banarasi silk saree with gold zari work. The saree is draped in the distinctive Bengali style (seedha pallu). We source directly from Varanasi weavers to ensure authentic handwoven Benarasi silk for your wedding day." },
              { title: "Groom's Dhoti-Kurta & Topor", desc: "Bengali grooms wear a cream or white dhoti-kurta with the iconic topor — the pointed ceremonial crown unique to Bengali weddings. We source handcrafted topors and matching dhoti sets directly from Kolkata artisans." },
              { title: "Haldi (Gaye Holud)", desc: "Yellow is the color of the Gaye Holud — turmeric yellow sarees, salwar sets, and coordinated family outfits. The bride and groom each have their own separate haldi ceremony, so both sides of the family need to be outfitted." },
              { title: "Mehendi & Sangeet", desc: "More relaxed and celebratory — lehengas, anarkalis, or contemporary sarees in jewel tones are popular. Bridesmaids often coordinate in matching sets. We source a range of styles to suit the mood of each pre-wedding celebration." },
              { title: "Shankha Pola & Alta", desc: "Red and white bangles (shankha pola) and alta (red dye applied to the feet and hands) are essential Bengali bridal elements that carry deep cultural meaning. We source authentic shankha pola sets from Kolkata to complete the bridal look." },
              { title: "Reception", desc: "Bengali receptions are glamorous — the bride often changes into a different Banarasi or designer saree or lehenga for the evening. Bold colors, heavy jewelry, and statement pieces define the reception aesthetic. We source both the wedding day and reception outfits." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NRI Bengali Families Choose CeremonyVerse */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            Why NRI Bengali families choose CeremonyVerse
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "Direct access to Varanasi Banarasi silk weavers and Kolkata artisans",
              "Live video shopping — see the actual saree weave and zari work before you commit",
              "Authentic Bengali bridal accessories including topor, shankha pola, and mukut",
              "Full family coordination across US states — one process, one point of contact",
              "100% fit guarantee — every outfit stitched to your exact measurements",
            ].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: "#f9f6f3", borderRadius: "12px", padding: "16px 20px", border: "1px solid #e6dfd5" }}>
                <span style={{ color: "#c7b28a", fontWeight: 700, fontSize: "16px", flexShrink: 0, lineHeight: 1.5 }}>—</span>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#6a5c55", margin: 0 }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceremonies We Outfit */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Ceremonies we outfit
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { name: "Ashirbaad", desc: "The formal blessing ceremony — often the first event where traditional outfits take center stage." },
              { name: "Gaye Holud", desc: "The turmeric ceremony — turmeric yellow is the defining color for the entire family." },
              { name: "Mehendi", desc: "Intricate henna designs paired with festive lehengas and anarkalis." },
              { name: "Sangeet", desc: "Music and dance — jewel-toned sarees, lehengas, and coordinated family looks." },
              { name: "Wedding Day (Shubho Bibaho)", desc: "The main ceremony — red Banarasi bridal saree, dhoti-kurta with topor, and full family coordination." },
              { name: "Reception", desc: "A glamorous evening — the bride often changes into a second Banarasi or designer saree or lehenga." },
            ].map((item) => (
              <div key={item.name} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "20px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "1.1rem", color: "#1f1f1f", marginBottom: "8px" }}>{item.name}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Planning a Bengali wedding in the USA?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll source authentic Banarasi silk sarees, bridal accessories, and full family outfits directly from India — delivered to your door anywhere in the US.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20planning%20a%20Bengali%20wedding%20and%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
