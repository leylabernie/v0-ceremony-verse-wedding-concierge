

// import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-texas/",
  title: "Indian Wedding Shopping from India \u2014 Texas NRI Families",
  description: "Texas NRI families: source bridal lehengas, sherwanis, and Indian wedding outfits directly from India \u2014 live video shopping, custom stitching, delivered to your TX door."
});

const serviceSchema = buildServiceSchema({
  name: "Texas Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for NRI families in Texas \u2014 Houston, Dallas, Plano, Sugar Land, Frisco, Austin, San Antonio \u2014 with US delivery.",
  url: "/indian-wedding-shopping-texas/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Texas NRI Families", url: "/indian-wedding-shopping-texas/" },
]);

export default function IndianWeddingShoppingTexasPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      {/* <SeoNav /> */}

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Texas NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving Texas NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Texas is one of the fastest-growing hubs for Indian families in the US, with vibrant communities in Houston, Dallas, Plano, Sugar Land, and Frisco. CeremonyVerse connects NRI families in Texas directly with India's finest craftspeople for bridal lehengas, sherwanis, and coordinated wedding outfits — custom stitched and delivered to your door.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why Texas families struggle with Indian wedding shopping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Sparse Local Options", desc: "While Hillcroft in Houston and parts of Irving/Plano have Indian boutiques, the selection pales compared to what's available in India. Finding the exact lehenga style, color, and embroidery you envisioned often means settling." },
              { title: "Spread-Out Communities", desc: "Texas is vast. Your bridal party might be spread across Houston, Dallas, Austin, and San Antonio. Coordinating in-person shopping trips is impractical — but CeremonyVerse manages measurements and ordering remotely." },
              { title: "High Local Prices", desc: "Indian wedding boutiques in Texas carry significant overhead. The same bridal lehenga available in Chandni Chowk or Surat for a fraction of the price gets marked up substantially once it reaches a US showroom." },
              { title: "Last-Minute India Trips", desc: "Many Texas families resort to rushed trips to India for shopping, squeezing fabric selection, measurements, and fittings into a week. The result is often compromised choices under time pressure." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What CeremonyVerse Does */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            How CeremonyVerse serves Texas families
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is your personal Indian wedding concierge. We work with artisan partners across Delhi, Jaipur, Lucknow, Surat, Kanchipuram, and Kolkata to source exactly what you need — bridal lehengas, groom sherwanis, bridesmaids outfits, family sarees, and ceremony-specific pieces for every event from Mehndi to Reception.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our process is simple: share your wedding vision, ceremony schedule, and budget. We connect you through live video shopping sessions with our outfit specialists in India, showing you fabrics, colors, and embroidery options in real time. You select what you love, and we handle custom measurements, tailoring, quality checks, and doorstep delivery to your home in Houston, Dallas, Plano, Sugar Land, Frisco, or anywhere in Texas.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Texas families often plan grand, multi-day celebrations. We understand the scale involved — coordinating outfits for Sangeet, Haldi, Mehndi, the main ceremony, and reception across the entire family. Our concierge approach means one point of contact managing it all.
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
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#7a6841", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "48px 24px", background: "#f8f6f2" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions for Texas NRI Brides
          </h2>
          <div style={{ spaceY: "24px" }}>
            {[
              { q: "How much can I save by sourcing from India vs. Texas boutiques?", a: "Most Texas NRI brides save between 30% and 50% by using CeremonyVerse. Even after shipping and our concierge fee, the total cost for a designer-quality lehenga is significantly lower than local Houston or Dallas prices." },
              { q: "Do you serve brides in smaller Texas cities like Austin or San Antonio?", a: "Absolutely. While we focus on major hubs like Houston and Dallas, we provide door-to-door delivery and virtual shopping sessions for NRI families in Austin, San Antonio, El Paso, and across the entire state of Texas." },
              { q: "How do you ensure the quality of the outfits before they ship to Texas?", a: "We have an in-person quality control team in India that inspects every outfit for fabric quality, embroidery detail, and measurement accuracy. We send you high-resolution photos and videos for final approval before the shipment leaves for Texas." },
            ].map((faq, index) => (
              <div key={index} style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "16px", color: "#1f1f1f", marginBottom: "8px" }}>{faq.q}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4d403a" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Ready to start your wedding shopping?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4d403a", marginBottom: "24px" }}>
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through exactly how we can help your Texas family shop from India with confidence.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
