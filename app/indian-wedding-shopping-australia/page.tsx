import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

export const metadata = {
  title: "Indian Wedding Shopping from India | Australia NRI Families | CeremonyVerse",
  description: "NRI bride in Australia? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your Australian door.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
  },
  keywords: "Indian wedding shopping Australia, NRI bride Australia, buy lehenga from India Sydney, Indian wedding concierge Australia, Harris Park Indian wedding",
  openGraph: {
    title: "Indian Wedding Shopping from India | Australia NRI Families | CeremonyVerse",
    description: "NRI bride in Australia? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your Australian door.",
    type: "website",
    url: "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
  
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

export default function IndianWeddingShoppingAustraliaPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Australia NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving Australia NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Australia — from Sydney's Harris Park and Parramatta to Melbourne, Brisbane, and Perth — is home to a vibrant and fast-growing Indian community. Planning an Indian wedding here means navigating a market with few bridal specialists. CeremonyVerse brings India's finest artisans directly to your screen, no matter where in Australia you are.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why Australian families struggle with Indian wedding shopping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Very Limited Local Bridal Shops", desc: "Harris Park in Parramatta is Australia's most recognised 'Little India', but even here the bridal selection is narrow and largely off-the-rack. Families seeking bespoke lehengas or hand-embroidered sherwanis quickly hit a wall." },
              { title: "The Distance from India", desc: "A trip to India for wedding shopping is a 12–14 hour flight and significant expense. Adding airfares, accommodation, and time off work for multiple family members makes it impractical for most Australian couples." },
              { title: "High Independent Shipping Costs", desc: "Ordering directly from Indian vendors without a concierge often means unpredictable international shipping fees, opaque customs and GST charges, and no quality assurance before the package leaves India." },
              { title: "Coordinating Across Australian States", desc: "Your family in Sydney, bridesmaids in Melbourne, and in-laws in Perth all need coordinated outfits. Managing measurements and selections across multiple cities — and time zones within Australia — requires a single point of coordination." },
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
            How CeremonyVerse serves Australian families
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is your personal Indian wedding concierge. We work with artisan partners across Delhi, Jaipur, Lucknow, Surat, Kanchipuram, and Kolkata to source bridal lehengas, groom sherwanis, bridesmaids outfits, family sarees, and complete ceremony wardrobes — all without you setting foot on a plane.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our process is built around your schedule. Live video shopping sessions are flexibly scheduled around AEST, so you can browse fabrics, embroidery, and stitching options with our India-based specialists at a time that works for you — whether you're in Sydney, Melbourne, Brisbane, or Perth. We handle custom measurements, tailoring, quality inspections, and delivery to any Australian address. Customs documentation and GST import requirements are managed on your behalf so there are no hidden surprises at the door.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether it's a Punjabi wedding in Melbourne, a Tamil ceremony in Sydney, or a Gujarati celebration in Brisbane — we source with cultural precision. Our team understands the specific outfit traditions each community requires, so every look is right for the occasion.
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
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How long does shipping take to Australia, and are customs and GST handled?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Shipping from India to Australia typically takes 7–14 business days via express courier. We handle all customs documentation and provide accurate GST import declarations upfront so you know the full landed cost before ordering — no surprise charges at delivery.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How do video shopping sessions work across the AEST time difference?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Our India-based specialists offer flexible session windows scheduled around AEST. We coordinate early morning slots in India that align with convenient evening times in Australia, so you never have to compromise on sleep or work for a shopping session.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>Can you coordinate outfits for family members spread across different Australian states?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Absolutely. We manage individual measurement sessions and outfit coordination for family members in Sydney, Melbourne, Brisbane, Perth, or anywhere in Australia. Each person joins their own virtual session, and we ensure every outfit coordinates seamlessly for every ceremony.</p>
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
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through exactly how we can help your Australian family shop from India with confidence.
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