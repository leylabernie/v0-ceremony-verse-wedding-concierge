import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Gujarati Wedding Outfits from India | NRI Families USA | CeremonyVerse",
  description: "Planning a Gujarati wedding in the USA? CeremonyVerse sources authentic chaniya cholis, bridal lehengas, sherwanis, and family outfits from India — live video shopping, delivered to your US door.",
  alternates: {
    canonical: "https://ceremonyverse.com/gujarati-wedding-outfits-usa",
  },
  keywords: "gujarati wedding outfits usa, chaniya choli from india usa, gujarati lehenga usa, NRI gujarati wedding, gujarati bridal lehenga",
  openGraph: {
    title: "Gujarati Wedding Outfits from India | NRI Families USA | CeremonyVerse",
    description: "Planning a Gujarati wedding in the USA? CeremonyVerse sources authentic chaniya cholis, bridal lehengas, sherwanis, and family outfits from India — live video shopping, delivered to your US door.",
    type: "website",
    url: "https://ceremonyverse.com/gujarati-wedding-outfits-usa",
  },
};

export default function GujaratiWeddingOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Gujarati Wedding Specialists
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Gujarati Wedding Outfits Sourced from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          A Gujarati wedding is a multi-day celebration with distinct outfit requirements for each ceremony — from Garba night to Saptapadi. CeremonyVerse has deep experience dressing Gujarati families across multiple ceremonies. We source authentic chaniya cholis, bridal lehengas, sherwanis, and coordinated family outfits directly from India.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Ceremony Outfits */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Outfits for every Gujarati ceremony
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Garba Night — Chaniya Choli", desc: "The Garba is the heart of a Gujarati wedding celebration. We source vibrant, mirror-work chaniya cholis from Kutch and Jaipur — designed for spinning and dancing, with the right flare and weight for movement." },
              { title: "Mehndi Ceremony", desc: "Bright, festive outfits in yellows, greens, and oranges. Comfortable enough for sitting through mehndi application, yet photo-ready. Coordinated pieces for the bridal party sourced together." },
              { title: "Haldi / Pithi Ceremony", desc: "Simple, cheerful outfits — often in yellow or light colors — designed to handle the turmeric paste. We source cotton and georgette pieces that are beautiful yet practical for this joyful ritual." },
              { title: "Mameru Ceremony", desc: "The Mameru is a cherished Gujarati tradition where the maternal uncle gifts the bride her wedding outfit and trousseau. We help source the traditional saree or lehenga for this ceremony, ensuring it honors the significance of the occasion." },
              { title: "Saptapadi — Bridal Lehenga", desc: "The main wedding ceremony demands a statement bridal lehenga — rich reds, maroons, or pinks with heavy embroidery and traditional Gujarati motifs. Custom stitched to perfection by our artisan partners." },
              { title: "Reception & Family Outfits", desc: "Coordinated sarees, lehengas, and sherwanis for the reception and family photographs. We manage measurements across the entire family — both sides — and deliver everything together." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            Our experience with Gujarati weddings
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse has dressed Gujarati families for multi-day weddings — including a destination wedding in Mexico — sourcing everything from Garba chaniya cholis to bridal lehengas to coordinated family outfits. We have even made a special trip to Kanchipuram to source pure Kanchipuram silk sarees for a Gujarati family who wanted the finest silk for the mothers and aunties.
            </p>
            <p style={{ marginBottom: "16px" }}>
              We understand that a Gujarati wedding isn't one outfit — it's six or seven. Each ceremony has its own palette, its own formality level, and its own cultural significance. The Garba chaniya choli needs to move with you. The Mameru saree needs to honor tradition. The bridal lehenga needs to take everyone's breath away. We source each piece with that understanding.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our artisan partners in Surat, Jaipur, Delhi, and Kanchipuram specialize in exactly the kind of craftsmanship Gujarati celebrations demand — intricate mirror work, bandhani, gota patti, and heavy zardozi embroidery. Every outfit is custom stitched to your measurements and delivered to your US address.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Pricing
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your Gujarati wedding, the ceremonies planned, and your outfit vision. We'll share how we can help — no obligation." },
              { tier: "Style Guide", price: "$149", desc: "A curated lookbook covering every ceremony — Garba, Mehndi, Pithi, Mameru, Saptapadi, and Reception — with specific outfit recommendations." },
              { tier: "Guided Sourcing", price: "$599", desc: "Live video shopping sessions with artisan partners in India, measurement guidance, and managed ordering for your key outfits." },
              { tier: "Full Bridal Concierge", price: "$1,499", desc: "End-to-end outfit management for every ceremony and every family member. Bride, groom, bridesmaids, groomsmen, parents, and extended family — all coordinated." },
            ].map((item) => (
              <div key={item.tier} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "4px" }}>{item.tier}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#c7b28a", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Planning a Gujarati wedding in the USA?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through how we source authentic Gujarati wedding outfits from India — for every ceremony, every family member.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
