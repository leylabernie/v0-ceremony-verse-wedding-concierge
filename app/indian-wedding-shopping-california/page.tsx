import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

export const metadata = {
  title: "Indian Wedding Shopping from India | California NRI Families | CeremonyVerse",
  description: "NRI bride in California? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your CA door.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/indian-wedding-shopping-california",
  },
  keywords: "Indian wedding shopping California, NRI bride California, buy lehenga from India Bay Area, Indian wedding concierge California",
  openGraph: {
    title: "Indian Wedding Shopping from India | California NRI Families | CeremonyVerse",
    description: "NRI bride in California? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your CA door.",
    type: "website",
    url: "https://www.ceremonyverse.com/indian-wedding-shopping-california",
  
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
};

export default function IndianWeddingShoppingCaliforniaPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          California NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving California NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          California — particularly the Bay Area and Silicon Valley — is home to one of the largest Indian tech communities in the world. From Fremont to Sunnyvale, San Jose to Los Angeles, NRI families planning Indian weddings need access to India's best craftspeople. CeremonyVerse makes that happen without the 20-hour flight.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why California families struggle with Indian wedding shopping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Bay Area Boutique Premiums", desc: "Shops along Fremont's Paseo Padre or in Sunnyvale carry curated selections — but the Silicon Valley cost of doing business means prices that are a multiple of what you'd pay in India for the same craftsmanship." },
              { title: "Busy Professional Schedules", desc: "California's tech-driven Indian community often has demanding work schedules. Between product launches and wedding planning, carving out weeks for an India shopping trip isn't realistic for most couples." },
              { title: "North-South CA Coordination", desc: "Your family might be in the Bay Area while bridesmaids are in Los Angeles and the in-laws are in San Diego. Coordinating outfits across 400 miles requires a centralized approach — exactly what we provide." },
              { title: "Desire for Authenticity", desc: "California NRI families want the real thing — not mass-produced replicas. They want the same hand-embroidered lehengas, handwoven silks, and artisan quality their cousins would get shopping in India." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What CeremonyVerse Does */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            How CeremonyVerse serves California families
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is your personal Indian wedding concierge. We work with artisan partners across Delhi, Jaipur, Lucknow, Surat, Kanchipuram, and Kolkata to source exactly what you need — bridal lehengas, groom sherwanis, bridesmaids outfits, family sarees, and complete ceremony wardrobes.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our process fits California lifestyles: everything happens virtually. You share your wedding vision, ceremony schedule, and budget. We set up live video shopping sessions with our outfit specialists in India — scheduled around your time zone — where you see fabrics, embroidery, and stitching options in real time. You choose, we manage custom measurements, tailoring, quality inspections, and doorstep delivery to Fremont, Sunnyvale, San Jose, Los Angeles, or anywhere in California.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether it's a grand Sikh wedding in San Jose, a South Indian ceremony in Sunnyvale, or a Gujarati celebration in Fremont — we understand the specific outfit traditions each community and ceremony requires. Our team sources with cultural precision, not generic "Indian wedding" guesswork.
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
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help — no obligation." },
              { tier: "Style Guide", price: "$149", desc: "A curated lookbook tailored to your ceremonies, body type, and budget — with specific recommendations from India's top outfit specialists." },
              { tier: "Guided Sourcing", price: "$599", desc: "Live video shopping sessions, direct access to artisan partners in India, measurement guidance, and managed ordering for your key outfits." },
              { tier: "Full Bridal Concierge", price: "$1,499", desc: "End-to-end outfit management for the entire wedding party — bride, groom, bridesmaids, groomsmen, and family. Every ceremony covered." },
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


      {/* FAQ */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Frequently asked questions
          </h2>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How far in advance should California NRI brides start ordering from India?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>We recommend 4–6 months before your first ceremony. This gives enough time for style discovery, live video shopping sessions, custom stitching, quality inspection, and shipping to California. Rush orders (6–8 weeks) are sometimes possible.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>Can you coordinate outfits for family members across Northern and Southern California?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Absolutely. We manage measurements and coordination for family members anywhere in California — Bay Area, LA, San Diego, Sacramento. Everyone joins their own video measurement session, and we ensure all outfits coordinate perfectly.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>Do you handle customs and import duties for shipments to California?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Yes. We handle all customs documentation for shipments to California. The current US duty on Indian garments is around 12–20% depending on fabric composition. We provide a full cost estimate upfront so there are no surprises.</p>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Ready to start your wedding shopping?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through exactly how we can help your California family shop from India with confidence.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    <SeoFooter />
    </div>
  )
}