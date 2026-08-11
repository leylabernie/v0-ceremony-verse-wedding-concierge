import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo";
import { NorthAmericaCoverage } from "@/components/north-america-coverage";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-philadelphia/",
  title: "Philadelphia Indian Wedding Shopping Concierge",
  description: "Philadelphia-area families can coordinate Indian wedding outfits from India with vendor research, eligible live review, measurements, written approvals, inspection checkpoints, and delivery planning.",
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

const faqItems = [
  {
    q: "Is CeremonyVerse actually based in Philadelphia?",
    a: "Yes. CeremonyVerse is based in the Philadelphia area, operates on Eastern Time, and provides a U.S.-based family contact for the documented sourcing process.",
  },
  {
    q: "Is CeremonyVerse a Philadelphia clothing store?",
    a: "No. CeremonyVerse is a concierge and coordination service, not a walk-in boutique with local inventory. The process begins with a scheduled consultation and compares documented India-based options with any local alternatives the family is considering.",
  },
  {
    q: "How much does a bridal lehenga from India cost delivered to Philadelphia?",
    a: "There is no responsible universal price. Fabric, handwork, customization, vendor, shipping, insurance, assessed duty or tax, and local alterations can all change the landed amount. The written comparison separates the product, CeremonyVerse service tier, outside costs, and alteration allowance.",
  },
  {
    q: "Can an order be delivered to Philadelphia, the Main Line, South Jersey, or Delaware?",
    a: "Delivery can be coordinated when the selected vendor and carrier serve the address. The written quote identifies the carrier, estimated timing, shipment documents, insurance options, customs responsibilities, and claim owner. Carrier and customs dates are not guaranteed.",
  },
  {
    q: "Can CeremonyVerse coordinate outfits for several Hindu or Gujarati wedding events?",
    a: "Yes. CeremonyVerse can translate the family's approved event, clothing, color, and participant requirements into a sourcing brief. The family and officiants remain the authority on ceremony-specific customs, and the written scope identifies which people and items are included.",
  },
];

const faqSchema = buildFaqSchema(
  faqItems.map((item) => ({ question: item.q, answer: item.a })),
);

export default function PhiladelphiaPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Philadelphia-Based · USA &amp; Canada-Wide Service
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping Philadelphia — We&apos;re Based Here
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          CeremonyVerse is based in the Philadelphia area. We help local families compare and coordinate Indian wedding outfits through a documented remote process, using India-based vendors that can be responsibly reviewed for the requested item and scope.
        </p>
        <a
          href="/contact/"
          style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
        >
          Schedule Free Consultation
        </a>
      </section>

      <NorthAmericaCoverage guideName="Philadelphia" />

      {/* Why Philadelphia */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why the Philadelphia connection is useful
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

      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What the Philadelphia service includes—and what remains separate
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
              <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "12px" }}>CeremonyVerse coordinates</h3>
              <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a" }}>
                The brief, vendor option record, eligible live or recorded item review, measurement and approval tracking, available pre-shipping evidence, and delivery handoff included in the selected tier.
              </p>
            </div>
            <div style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
              <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "12px" }}>Separate and not guaranteed</h3>
              <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a" }}>
                Products, tailoring, shipping, insurance, customs, tax, and local alterations are separate unless itemized. Vendor workmanship, exact fit or color, carrier dates, customs decisions, and vendor remedies remain outside CeremonyVerse&apos;s control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving the Greater Philadelphia Area */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Philadelphia-area context, North America-wide service
          </h2>
          <p style={{ textAlign: "center", color: "#4d403a", marginBottom: "32px", fontSize: "17px" }}>
            The business is locally based, while the same remote sourcing process serves families across the United States and Canada. Carrier availability is confirmed for the actual delivery address.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["Philadelphia", "Main Line", "King of Prussia", "West Chester", "South Jersey", "Delaware"].map((loc) => (
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
            Philadelphia Indian wedding shopping questions
          </h2>
          <div>
            {faqItems.map((faq, index) => (
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
              Schedule Free Consultation
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
