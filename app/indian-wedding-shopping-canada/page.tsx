import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

export const metadata = {
  title: "Indian Wedding Shopping from India | Canada NRI Families | CeremonyVerse",
  description: "NRI bride in Canada? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to Toronto, Vancouver, Calgary, or anywhere in Canada.",
  alternates: {
    canonical: "https://ceremonyverse.com/indian-wedding-shopping-canada",
  },
  keywords: "Indian wedding shopping Canada, NRI bride Canada, buy lehenga from India Toronto, Indian wedding concierge Canada, Brampton Indian wedding outfits, Vancouver Indian bridal wear",
  openGraph: {
    title: "Indian Wedding Shopping from India | Canada NRI Families | CeremonyVerse",
    description: "NRI bride in Canada? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to Toronto, Vancouver, Calgary, or anywhere in Canada.",
    type: "website",
    url: "https://ceremonyverse.com/indian-wedding-shopping-canada",
  
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

export default function IndianWeddingShoppingCanadaPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Canada NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving Canadian NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Canada — from Brampton and the GTA to Surrey, Vancouver, and Calgary — is home to one of the world's most vibrant Indian diaspora communities. Planning an Indian wedding from Canada means navigating limited local selections and long trips to India. CeremonyVerse brings India's best craftspeople to you.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why Canadian families struggle with Indian wedding shopping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Limited Selection Locally", desc: "Gerrard Street East and Brampton's shops offer a starting point, but nothing close to the full range you'd find on a trip to Delhi or Jaipur. The real artisan-quality lehengas, hand-embroidered sherwanis, and custom silks simply aren't available on Canadian high streets." },
              { title: "CAD Exchange Rate Markups", desc: "Local Canadian boutiques carry the cost of import duties, retail overhead, and currency conversion — meaning you're often paying a significant premium over what the same craftsmanship would cost sourced directly from India." },
              { title: "Coordinating Across Provinces", desc: "Your family might be in Brampton while the groom's side is in Surrey and cousins are flying in from Calgary. Coordinating wedding outfits across Ontario, BC, and Alberta demands a centralized approach — exactly what CeremonyVerse provides." },
              { title: "Desire for Authentic Craftsmanship", desc: "Canadian NRI families want the real thing — hand-embroidered lehengas from Lucknow, Banarasi silks from Varanasi, Kanjeevaram sarees from Kanchipuram. That level of authentic artisanship simply isn't available in Canadian retail." },
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
            How CeremonyVerse serves Canadian families
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is your personal Indian wedding concierge. We work with artisan partners across Delhi, Jaipur, Lucknow, Surat, Kanchipuram, and Kolkata to source exactly what you need — bridal lehengas, groom sherwanis, bridesmaids outfits, family sarees, and complete ceremony wardrobes.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our process is built for Canadian schedules: everything happens virtually. You share your wedding vision, ceremony schedule, and budget. We set up live video shopping sessions with our outfit specialists in India — scheduled around EST or PST to suit families in Toronto, Vancouver, or Calgary — where you see fabrics, embroidery, and stitching options in real time. You choose, we manage custom measurements, tailoring, quality inspections, and doorstep delivery to any Canadian address. We also handle all customs documentation required by the Canada Border Services Agency so there are no surprises at the border.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether it's a Punjabi wedding in Brampton, a South Indian ceremony in Mississauga, or a Gujarati celebration in Surrey — we understand the specific outfit traditions each community and ceremony requires. Our team sources with cultural precision, not generic "Indian wedding" guesswork.
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
              { tier: "Style Guide", price: "$149 USD", desc: "A curated lookbook tailored to your ceremonies, body type, and budget — with specific recommendations from India's top outfit specialists." },
              { tier: "Guided Sourcing", price: "$599 USD", desc: "Live video shopping sessions, direct access to artisan partners in India, measurement guidance, and managed ordering for your key outfits." },
              { tier: "Full Bridal Concierge", price: "$1,499 USD", desc: "End-to-end outfit management for the entire wedding party — bride, groom, bridesmaids, groomsmen, and family. Every ceremony covered." },
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
            <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How does shipping and customs work for deliveries to Canada?</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>We handle all customs documentation for shipments through the Canada Border Services Agency. Import duties on Indian garments typically range from 12–18% depending on fabric composition. We provide a full landed cost estimate before you place any order so there are no surprises at the border.</p>
          </div>
          <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
            <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How far in advance should Canadian families start the process?</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>We recommend starting 4–6 months before your first ceremony. This allows time for consultations, live video shopping sessions, custom stitching, quality inspection in India, and shipping to Canada. Rush timelines of 6–8 weeks are sometimes possible depending on the outfit type.</p>
          </div>
          <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
            <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How does CeremonyVerse compare to shopping at Brampton or Gerrard Street East boutiques?</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Brampton and Gerrard Street shops are convenient but carry a limited selection at retail markups. CeremonyVerse gives you direct access to India's full artisan market — custom stitching, your exact measurements, and the complete range of fabrics and embroidery styles — often at a comparable or lower total cost once you factor in the sourcing savings from India.</p>
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
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through exactly how we can help your Canadian family shop from India with confidence.
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