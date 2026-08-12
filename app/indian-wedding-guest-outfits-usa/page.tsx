import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-guest-outfits-usa/",
  title: "Indian Wedding Guest Outfits \u2014 Sourced from India, Delivered to USA",
  description: "Indian wedding guest outfits sourced from India \u2014 sarees, anarkalis, lehengas, and kurtas for men and women attending Indian weddings in the USA."
});

const serviceSchema = buildServiceSchema({
  name: "Indian Wedding Guest Outfit Sourcing",
  description: "Indian wedding guest outfit research and sourcing for sarees, anarkalis, lehengas, and kurtas, with documented options and U.S. delivery coordination.",
  url: "/indian-wedding-guest-outfits-usa/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Wedding Guest Outfits", url: "/indian-wedding-guest-outfits-usa/" },
]);

export default function IndianWeddingGuestOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Wedding Guest Outfits
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Guest Outfits from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Research lehengas, sarees, anarkalis, sharara sets, and sherwanis through a documented India-sourcing process. Eligible live review, customization, and delivery depend on the selected item and vendor.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
            Schedule a Free 30-Minute Consultation
          </Link>
          <a href="https://wa.me/12153419990" style={{ fontSize: "17px", color: "#4d403a", textDecoration: "none" }}>
            WhatsApp: +1 (215) 341-9990
          </a>
        </div>
      </section>

      {/* Why guests struggle */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why finding a wedding guest outfit in the US is harder than it should be
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { title: "Compare Available Selection", desc: "Compare local and India-sourced options using the same item, material, customization, service, shipping, customs, alteration, and remedy criteria." },
              { title: "Compare Complete Costs", desc: "Do not rely on a universal savings percentage. Use complete written quotes that include every outside cost and responsibility." },
              { title: "Coordinate with Family", desc: "A shared style, color, measurement, and approval record can keep decisions organized when relatives are shopping from different locations." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we source for guests */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What we source for wedding guests
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Lehengas", desc: "Semi-formal and formal lehengas perfect for sangeet, reception, or main ceremony. Sourced in the colors and embroidery styles that match the event's dress code." },
              { title: "Sarees", desc: "Silk sarees, chiffon sarees, and designer drapes — sourced from across India's regional weaving traditions. Pre-stitched blouse included, custom to your measurements." },
              { title: "Anarkalis & Gowns", desc: "Floor-length anarkalis and Indo-Western gowns for guests who want elegance without the complexity of a lehenga or saree." },
              { title: "Sharara Sets", desc: "Relaxed yet festive sharara and gharara sets — ideal for Mehndi, Haldi, or daytime ceremonies where comfort matters." },
              { title: "Sherwanis for Male Guests", desc: "Sherwanis, Nehru jackets, and kurta-pajama sets for male guests. Coordinated with the family's color palette if needed." },
              { title: "Coordinated Family Sets", desc: "Matching or complementary outfits for the entire family — parents, siblings, and extended family — all sourced together so everyone looks cohesive." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            How it works
          </h2>
          <div style={{ display: "grid", gap: "24px" }}>
            {[
              { step: "01", title: "Review Current Options", desc: "Eligible tiers may include live video or current item media when the selected vendor and item allow it. Record the item references before approval." },
              { step: "02", title: "Measurement Coordination", desc: "For made-to-measure items, we document the selected vendor's requested measurements. Local alteration may still be needed." },
              { step: "03", title: "Coordinate Delivery", desc: "The written quote identifies packaging, carrier service, declared value, insurance options, customs responsibilities, tracking, and alteration buffer." },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#7a6841", lineHeight: 1 }}>{item.step}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline notice */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", background: "#fff8ed", border: "1px solid #e6dfd5", borderRadius: "14px", padding: "28px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
            Planning your timeline
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a" }}>
            Sourcing from India takes time. The usable lead time depends on the item, vendor availability, customization, approvals, shipping, customs, and alteration buffer. Confirm the complete written timeline before approving a purchase.
          </p>
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
              { tier: "Free 30-Minute Consultation", price: "Free", desc: "A 30-minute call to understand your needs, timing, and budget scope. No commitment." },
              { tier: "Guided Sourcing", price: "$799", desc: "Selected live or recorded item review and order coordination, subject to item and vendor availability." },
              { tier: "Full Bridal Concierge", price: "$2,499", desc: "One organized sourcing process for the bride, groom, and wedding party of up to eight people." },
            ].map((item) => (
              <div key={item.tier} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <p style={{ fontSize: "17px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a6841", fontWeight: 600, marginBottom: "8px" }}>{item.tier}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#1f1f1f", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Guest outfit FAQ
          </h2>
          {[
            { q: "I'm attending a wedding in 6 weeks — is that enough time?", a: "It depends on current ready-made availability, alterations, vendor handling time, carrier service, customs, and your flexibility. A made-to-order item may not be responsible on that schedule. Request item-specific written estimates and preserve a local backup rather than relying on a universal minimum." },
            { q: "Can you help me figure out what to wear?", a: "Yes. Guided Sourcing starts with your event type, dress code, preferences, body type, and budget, then keeps CeremonyVerse involved through the selected shopping and order-coordination scope. Start with your free first 30-minute consultation to talk it through." },
            { q: "I need outfits for my whole family. Can you coordinate everything?", a: "Group coordination is available within the selected tier or a custom written scope. We organize participant measurements, selections, and approvals; vendor capacity and shipment structure are confirmed before ordering." },
            { q: "How do measurements work if I'm in the US?", a: "We use the selected vendor's measurement chart and document the measurements and fit preferences included in your tier. You may measure at home or use a qualified local tailor. A documented review can reduce recording errors, but it does not guarantee fit or replace an in-person fitting." },
            { q: "What if I don't like what I see on the video call?", a: "You do not have to approve an item that does not fit the written brief. Within the selected scope, we can document the concern and compare another available option or revise the brief; any additional session or expanded search is confirmed in writing first." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related ceremonies */}
      <section style={{ padding: "48px 24px 8px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6841", fontWeight: 600, marginBottom: "16px" }}>
            Related ceremonies &amp; outfits
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/buy-sherwani-from-india-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Groom Sherwanis</Link>
            <Link href="/sangeet-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Sangeet Outfits</Link>
            <Link href="/reception-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/mehndi-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Mehndi Outfits</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Sarees</Link>
            <Link href="/how-it-works/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>How It Works</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px 80px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "14px" }}>
            Stop settling for what&rsquo;s in stock
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Compare available India-sourced options using the same item, material, customization, service, shipping, customs, alteration, and remedy criteria.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
              Schedule a Free 30-Minute Consultation
            </Link>
            <a href="https://wa.me/12153419990" style={{ fontSize: "17px", color: "#e8dfd2", textDecoration: "none" }}>
              WhatsApp: +1 (215) 341-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
