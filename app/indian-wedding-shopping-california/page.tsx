

// import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-california/",
  title: "Indian Wedding Shopping from India \u2014 California NRI Families",
  description: "California NRI families: source bridal lehengas, sherwanis, and Indian wedding outfits directly from India \u2014 live video shopping, custom stitching, delivered to your CA door."
});

const serviceSchema = buildServiceSchema({
  name: "California Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for NRI families in California \u2014 Bay Area, Los Angeles, San Diego, Sacramento, Fresno \u2014 with US delivery.",
  url: "/indian-wedding-shopping-california/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "California NRI Families", url: "/indian-wedding-shopping-california/" },
]);

export default function IndianWeddingShoppingCaliforniaPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      {/* <SeoNav /> */}

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          California NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving California NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          California — particularly the Bay Area and Silicon Valley — is home to one of the largest Indian tech communities in the world. From Fremont to Sunnyvale, San Jose to Los Angeles, NRI families planning Indian weddings need access to India's best craftspeople. CeremonyVerse makes that happen without the 20-hour flight.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
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
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
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
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
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
              { tier: "Style Guide & Vendor List", price: "$249", desc: "Curated starting point for self-directed brides. Style discovery, curated vendor contacts, and measurement guidance." },
              { tier: "Guided Sourcing", price: "$799", desc: "Live video shopping sessions with our team in India, bridesmaid and groomsmen coordination, and quality inspection." },
              { tier: "Full Bridal Concierge", price: "$2,499", desc: "End-to-end sourcing for your entire wedding party — every ceremony, every outfit, every family member. Dedicated coordinator, unlimited sessions, and priority shipping." }
            ].map((item) => (
              <div key={item.tier} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "4px" }}>{item.tier}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#7a6841", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "48px 24px", background: "#f8f6f2" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions for California NRI Brides
          </h2>
          <div>
            {[
              { q: "How much does a bridal lehenga from India cost with shipping to California?", a: "On average, our clients save 30-50% compared to Bay Area boutiques. A high-quality designer-inspired lehenga from India typically ranges from $1,500 to $4,000, including shipping and our concierge fee." },
              { q: "Can you handle shipping and customs to Los Angeles or San Francisco?", a: "Yes, we handle the entire logistics chain. We perform quality checks in India, manage international shipping, and handle US customs clearance to deliver directly to your door in any California city." },
              { q: "How do I take measurements at home for my wedding outfit?", a: "We provide a detailed measurement guide and can even hop on a quick video call to guide you through the process, ensuring your custom-stitched outfit fits perfectly when it arrives in CA." },
            ].map((faq, index) => (
              <div key={index} style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "16px", color: "#1f1f1f", marginBottom: "8px" }}>{faq.q}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{faq.a}</p>
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
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "24px" }}>
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through exactly how we can help your California family shop from India with confidence.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
