import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Indian Wedding Shopping from India | UK Families | CeremonyVerse",
  description: "Indian wedding in the UK? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to London, Leicester, Birmingham, or anywhere in the UK.",
  keywords: "Indian wedding shopping UK, buy lehenga from India London, Indian wedding concierge UK, Southall Indian bridal wear, Birmingham Indian wedding outfits, Leicester Indian wedding clothes",
}

export default function IndianWeddingShoppingUKPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          UK Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving UK Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          The UK — from Wembley and Southall in London to Leicester, Birmingham, and Manchester — is home to one of the largest South Asian communities outside India. Planning an Indian wedding from the UK means navigating high-street markups, limited bespoke options, and post-Brexit import complexity. CeremonyVerse handles all of it.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why UK families struggle with Indian wedding shopping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Southall & Green Street Have Limits", desc: "Southall Broadway and Green Street in East London offer impressive variety for UK high streets — but when it comes to truly bespoke, custom-fitted lehengas or artisan-crafted sherwanis to your exact specifications, even the best UK Asian bridal shops can't match what India's top craftspeople produce directly." },
              { title: "High-Street Markup on Indian Formalwear", desc: "UK Indian formalwear retailers carry the costs of import duties, London retail rents, and multi-tier distribution — meaning a lehenga that costs a fraction of the price in Jaipur or Surat can carry a substantial mark-up by the time it reaches a shop in Birmingham or Leicester." },
              { title: "Post-Brexit Import Complications", desc: "Since Brexit, ordering directly from Indian boutiques has become significantly more complicated — new customs declarations, import VAT, and unpredictable delays. Families who try to manage this themselves often face unexpected charges and delivery uncertainty." },
              { title: "Coordinating Across UK Cities", desc: "Your family might be in Wembley while cousins are in Leicester and the in-laws are in Manchester. Coordinating wedding outfits across multiple UK cities requires a centralized approach — exactly what CeremonyVerse provides." },
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
            How CeremonyVerse serves UK families
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is your personal Indian wedding concierge. We work with artisan partners across Delhi, Jaipur, Lucknow, Surat, Kanchipuram, and Kolkata to source exactly what you need — bridal lehengas, groom sherwanis, bridesmaids outfits, family sarees, and complete ceremony wardrobes.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our process is built around UK schedules: everything happens virtually. You share your wedding vision, ceremony schedule, and budget. We set up live video shopping sessions with our outfit specialists in India — scheduled around GMT or BST to suit families across London, Leicester, Birmingham, and Manchester — where you see fabrics, embroidery, and stitching options in real time. You choose, we manage custom measurements, tailoring, quality inspections, and doorstep delivery to any UK address. We handle all UK customs declarations and import documentation post-Brexit, so there are no surprise charges or border delays.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether it's a Punjabi wedding in Wembley, a Gujarati celebration in Leicester, or a South Indian ceremony in Birmingham — we understand the specific outfit traditions each community and ceremony requires. Our team sources with cultural precision, not generic "Indian wedding" guesswork.
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
            <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How does CeremonyVerse compare to shopping at Southall or Green Street?</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Southall Broadway and Green Street are excellent for off-the-rack and semi-custom options, but they can't match the breadth of India's artisan market for truly bespoke, custom-fitted pieces. CeremonyVerse gives you direct access to India's full range — your exact measurements, your exact specifications — often at a comparable or better total cost once you factor in the sourcing savings from working directly with Indian craftspeople.</p>
          </div>
          <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
            <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How do you handle post-Brexit customs for UK deliveries?</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>We manage all UK customs declarations, import VAT documentation, and shipping paperwork on your behalf. Post-Brexit imports from India involve specific HMRC requirements, and we handle them end-to-end. We provide a full landed cost estimate — including all applicable duties and import VAT — before you place any order, so there are no surprise charges.</p>
          </div>
          <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
            <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How far in advance should UK families start the process?</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>We recommend starting 4–6 months before your first ceremony. This allows time for consultations, live video shopping sessions scheduled around UK time zones, custom stitching, quality inspection in India, and shipping to the UK. Rush timelines of 6–8 weeks are sometimes possible depending on the outfit type and complexity.</p>
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
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through exactly how we can help your UK family shop from India with confidence.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
