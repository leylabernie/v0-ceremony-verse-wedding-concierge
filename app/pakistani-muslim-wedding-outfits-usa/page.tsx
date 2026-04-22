import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Pakistani & Muslim Wedding Outfits from India | NRI USA | CeremonyVerse",
  description: "Planning a Pakistani or Muslim wedding in the USA? CeremonyVerse sources bridal lehengas, sherwanis, sharara sets, and family outfits from South Asia — delivered to your US door.",
  alternates: {
    canonical: "https://ceremonyverse.com/pakistani-muslim-wedding-outfits-usa",
  },
  keywords: "pakistani wedding outfits usa, muslim wedding outfits usa, NRI pakistani wedding, pakistani bridal lehenga usa, nikah outfit usa, walima outfit usa",
  openGraph: {
    title: "Pakistani & Muslim Wedding Outfits from India | NRI USA | CeremonyVerse",
    description: "Planning a Pakistani or Muslim wedding in the USA? CeremonyVerse sources bridal lehengas, sherwanis, sharara sets, and family outfits from South Asia — delivered to your US door.",
    type: "website",
    url: "https://ceremonyverse.com/pakistani-muslim-wedding-outfits-usa",
  };

export default function PakistaniMuslimWeddingOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Pakistani &amp; Muslim Wedding Specialists
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Pakistani &amp; Muslim Wedding Outfits Sourced from South Asia — For Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Pakistani and Muslim weddings are a celebration spanning multiple events — each with its own distinct aesthetic and dress code, from the solemn elegance of the Nikah to the joyful grandeur of the Walima. CeremonyVerse sources authentic bridal and family outfits directly from artisans across India and Pakistan, with live video approval so you see every detail before anything ships to your US door.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20planning%20a%20Pakistani%20or%20Muslim%20wedding%20and%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* What Makes These Weddings Distinct */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What makes Pakistani &amp; Muslim weddings distinct
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Nikah Bridal Outfit", desc: "Traditional deep reds, maroons, or emerald greens. Heavy bridal lehengas or shararas with intricate zardozi, dabka, and tilla work. We source from the finest artisans in Lahore, Delhi, and Lucknow — custodians of the embroidery traditions that define Pakistani bridal fashion." },
              { title: "Groom's Sherwani", desc: "Full-length embroidered sherwanis with matching khussa shoes and sehra. Cream, ivory, gold, or a shade chosen to complement the bride's color palette. Every sherwani is custom-stitched to exact measurements so the groom is dressed as precisely as the bride." },
              { title: "Mehndi Night", desc: "The most colorful event in the Pakistani wedding calendar — vibrant yellows, greens, and multi-color outfits fill the room. Brides often wear pishwas or ghararas embellished with gota and mirror work. We coordinate family outfits in complementary bright hues for a cohesive look." },
              { title: "Dholki & Mayun", desc: "Pre-wedding celebrations with traditional folk singing and close family gatherings. Outfits are festive but less formal than the Nikah — embroidered kurtis, shalwar kameez, and lawn suits in warm, cheerful tones. We source from artisans who specialize in these celebratory everyday-luxe styles." },
              { title: "Barat", desc: "The groom's procession is the central wedding event and carries the most formal dress code. Family members dress in their absolute finest — heavy silk sarees, ornate lehengas, and embroidered sherwanis. Every outfit is chosen to honor the gravity and joy of this occasion." },
              { title: "Walima (Reception)", desc: "Hosted by the groom's family, the Walima is a celebration of the new union. The bride often changes into a lighter, more contemporary silhouette — powder pink, mint, or lavender with softer embroidery. We source both the Nikah and Walima looks as a coordinated bridal story." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CeremonyVerse */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why families in the USA choose CeremonyVerse
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { title: "Artisan Access", desc: "Direct relationships with artisans in Lahore, Delhi, Lucknow, and Hyderabad — the four cities that define South Asian bridal embroidery." },
              { title: "Live Video Shopping", desc: "See the exact fabric, embroidery weight, and color in real time before approving anything. No surprises when the package arrives." },
              { title: "Cross-Border Expertise", desc: "Deep knowledge of both Pakistani and Indian bridal aesthetics — we understand where traditions converge and where they beautifully differ." },
              { title: "Custom Stitching", desc: "Every outfit is made to your precise measurements. No tailoring stress when it arrives in the USA." },
              { title: "Full Family Coordination", desc: "We dress the entire family — including non-South Asian family members who want to participate in traditional dress." },
              { title: "Insured Shipping & Customs Guidance", desc: "We handle the logistics of getting your outfits from South Asia to your US door, including full customs documentation and insured transit." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Outfit */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "24px" }}>
            Events we outfit
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "28px" }}>
            Pakistani and Muslim weddings are multi-day affairs. We source outfits for every event so your family is dressed with intention — from the first pre-wedding gathering to the final reception.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            {["Dholki", "Mayun", "Mehndi", "Nikah / Barat", "Walima", "Valima Reception"].map((event) => (
              <span key={event} style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 20px", fontSize: "13px", fontWeight: 500, color: "#1f1f1f" }}>
                {event}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Planning a Pakistani or Muslim wedding in the USA?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
            Pakistani and Muslim weddings share a rich tradition with the broader South Asian wedding world — but they carry their own distinct identity, their own ceremonies, and their own aesthetic language. CeremonyVerse approaches every family with that understanding. Book a free consultation or message us on WhatsApp at +1 (215) 341-9990. We'll source outfits that honor your traditions, delivered to your US door.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20planning%20a%20Pakistani%20or%20Muslim%20wedding%20and%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
