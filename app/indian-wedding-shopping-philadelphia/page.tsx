import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";
import { NorthAmericaCoverage } from "@/components/north-america-coverage";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-philadelphia/",
  title: "Indian Wedding Shopping from India — Philadelphia",
  description: "Philadelphia-area families can research Indian wedding outfits from India with eligible live review, written approvals, available pre-shipping review, and delivery coordination.",
});

const serviceSchema = buildServiceSchema({
  name: "Philadelphia Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for families in Philadelphia and the greater Philadelphia area with eligible live review, written approvals, and delivery coordination.",
  url: "/indian-wedding-shopping-philadelphia/",
  areaServed: "Philadelphia, PA — Greater Philadelphia Area, South Jersey, Delaware",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Philadelphia", url: "/indian-wedding-shopping-philadelphia/" },
]);

export default function PhiladelphiaPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Philadelphia-Based · USA &amp; Canada-Wide Service
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping Philadelphia — We&apos;re Based Here
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          CeremonyVerse is headquartered in Philadelphia. We help families research and source Indian wedding outfits through our strongest working relationships in Surat and Delhi, with other vendors considered when they can be responsibly reviewed.
        </p>
        <a
          href="/contact/"
          style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
        >
          Book Free Consultation
        </a>
      </section>

      <NorthAmericaCoverage guideName="Philadelphia" />

      {/* Why Philadelphia */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why Philadelphia NRI families choose CeremonyVerse
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "Philadelphia-based service",
                desc: "CeremonyVerse is based in the Philadelphia area, with US contact information and East Coast availability. The service was shaped by firsthand family wedding experience and provides one organized point of contact rather than a call-center handoff.",
              },
              {
                title: "Compare complete written costs",
                desc: "Philadelphia-area families can compare nearby boutique options with a documented India-sourcing path that separates the product, CeremonyVerse service tier, shipping estimate, customs estimate, and alteration allowance.",
              },
              {
                title: "Document remote-shopping risks",
                desc: "Remote sourcing still carries vendor, handmade-item, fit, shipping, and customs risk. Written references, approvals, outside costs, and available vendor terms make those risks easier to evaluate before purchase.",
              },
              {
                title: "U.S.-based consultation times",
                desc: "CeremonyVerse is based in the Philadelphia area and operates on Eastern Time. Consultation windows, response timing, and any time-sensitive order steps are confirmed for the selected service rather than promised universally.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for Philadelphia families */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            How CeremonyVerse works for Philadelphia families
          </h2>
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              Everything starts with a free 30-minute consultation. You tell us about your wedding — ceremonies, party size, timeline, and budget. We review the available service tiers, item requirements, and timing without requiring payment for the call.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Depending on the selected tier and item, the process may include live video review or current item media, measurement and custom-order coordination, written approvals, available pre-shipping review, and tracked-delivery support. The written quote identifies the vendor, item, service scope, shipment estimate, and terms before paid work begins.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Philadelphia weddings span many traditions and venues. We begin with your family&apos;s approved ceremony and clothing requirements rather than assuming one set of rules applies to every community.
            </p>
          </div>
        </div>
      </section>

      {/* Serving the Greater Philadelphia Area */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Serving the Greater Philadelphia Area
          </h2>
          <p style={{ textAlign: "center", color: "#4d403a", marginBottom: "32px", fontSize: "17px" }}>
            Philadelphia-area service areas to discuss with the selected vendor and carrier.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["Philadelphia", "Center City", "University City", "Cherry Hill", "Bryn Mawr", "Wayne", "King of Prussia", "Wilmington", "Princeton", "Allentown", "Doylestown", "West Chester", "Harrisburg", "South Jersey", "Delaware Valley"].map((loc) => (
              <span
                key={loc}
                style={{
                  fontSize: "14px",
                  color: "#4d403a",
                  background: "#f9f6f3",
                  border: "1px solid #e6dfd5",
                  borderRadius: "999px",
                  padding: "6px 16px",
                }}
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Transparent Pricing
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help — no obligation." },
              { tier: "Style Guide & Vendor List", price: "$249", desc: "A researched starting point for families who will contact vendors, order, and ship independently." },
              { tier: "Guided Sourcing", price: "$799", desc: "Live shopping and order coordination for selected wedding outfits, subject to item and vendor availability." },
              { tier: "Full Bridal Concierge", price: "$2,499", desc: "One organized sourcing process for the bride, groom, and wedding party of up to eight people." },
            ].map((item) => (
              <div key={item.tier} style={{ background: "#fff", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "4px" }}>{item.tier}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#7a6841", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "16px", fontSize: "14px", color: "#4d403a" }}>
            Outfit costs, shipping, and customs are itemized separately. <a href="/pricing/" style={{ color: "#7a6841", textDecoration: "underline" }}>See full pricing breakdown</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions for Philadelphia NRI Brides
          </h2>
          <div>
            {[
              {
                q: "Are you actually based in Philadelphia?",
                a: "Yes. CeremonyVerse is based in the Philadelphia area and can be reached during East Coast business hours. Any in-person consultation must be confirmed by appointment.",
              },
              {
                q: "How much does a bridal lehenga from India cost delivered to Philadelphia?",
                a: "Cost depends on fabric, handwork, customization, vendor, shipment, and any assessed duty. We itemize the product, flat CeremonyVerse tier, shipping, and customs estimate so you can compare the landed quote with Philadelphia or regional boutique options.",
              },
              {
                q: "Do you deliver to Cherry Hill, Bryn Mawr, and the suburbs?",
                a: "Yes, when the selected vendor and carrier can serve the address. The written quote identifies the carrier, service area, estimated timing, shipping documents, insurance options, customs responsibilities, and the party responsible for a claim. Carrier and customs dates are not guaranteed.",
              },
              {
                q: "Can I meet you in person?",
                a: "Yes, by appointment. Many Philadelphia-area brides prefer to start with a video consultation and then meet in person for measurement sessions or to review fabric samples. We're flexible — whatever makes you most comfortable with the process.",
              },
              {
                q: "I'm planning a wedding at a Philadelphia venue — can you help with outfits for multiple ceremonies?",
                a: "We can translate your family's approved ceremony, clothing, color, and venue requirements into a sourcing brief. Your family and officiants remain the authority on community-specific customs, and any vendor or product recommendation is limited to the documented request.",
              },
            ].map((faq, index) => (
              <div key={index} style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: index < 4 ? "1px solid #e6dfd5" : "none" }}>
                <h3 style={{ fontWeight: 600, fontSize: "16px", color: "#1f1f1f", marginBottom: "8px" }}>{faq.q}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "16px" }}>
            Philadelphia-based. Ready to help.
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Book a free 30-minute consultation. We'll review your wedding vision, timeline, and budget and discuss which available service tier may fit. No commitment, no pressure.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contact/"
              style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20in%20Philadelphia%20and%20interested%20in%20CeremonyVerse."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#f8f6f2", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none", border: "1px solid #7a6841" }}
            >
              WhatsApp +1 (215) 341-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
