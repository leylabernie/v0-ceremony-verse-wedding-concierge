

import Link from "next/link";
import {
  buildMetadata,
  buildServiceSchema,
  buildBreadcrumb,
  buildFaqSchema,
  JsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-california/",
  title: "Indian Wedding Shopping from India — California",
  description:
    "Bay Area and Los Angeles families can source bridal and family wedding outfits from India with live review, custom stitching, and U.S. delivery coordination.",
  keywords:
    "Indian wedding shopping California, bridal lehenga Bay Area, Indian wedding outfits Los Angeles, Indian bridal wear California, wedding shopping from India California",
});

const serviceSchema = buildServiceSchema({
  name: "California Indian Wedding Sourcing Service",
  description:
    "Indian wedding outfit sourcing for California families, including the Bay Area, Los Angeles, San Diego, Sacramento, and Fresno, with remote shopping and U.S. delivery coordination.",
  url: "/indian-wedding-shopping-california/",
  category: "Indian Wedding Shopping — California",
  areaServed: "California, United States",
  offers: [
    {
      name: "Style Guide & Vendor List",
      price: 249,
      description: "A curated starting point for families managing their own orders.",
    },
    {
      name: "Guided Sourcing",
      price: 799,
      description: "Live shopping and order coordination for selected wedding outfits.",
    },
    {
      name: "Full Bridal Concierge",
      price: 2499,
      description: "End-to-end sourcing coordination for the couple and wedding party.",
    },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Indian Wedding Shopping California", url: "/indian-wedding-shopping-california/" },
]);

const californiaFaqs = [
  {
    question: "How much does a bridal lehenga from India cost with shipping to California?",
    answer:
      "Cost depends on the selected fabric, handwork, customization, vendor, shipment, and any assessed duty. CeremonyVerse itemizes the product, service tier, shipping, and customs estimate so you can compare the landed quote with California options.",
  },
  {
    question: "Can you coordinate shipping and customs documents for California delivery?",
    answer:
      "Yes. CeremonyVerse coordinates shipment documents and tracking for delivery to California. The carrier and U.S. Customs control final clearance timing and any duty assessment.",
  },
  {
    question: "How are measurements handled when shopping remotely?",
    answer:
      "CeremonyVerse provides measurement instructions and coordinates review for eligible made-to-measure orders. Final fit can still require local alterations, so any applicable fit support is defined in the written service terms.",
  },
];

const faqSchema = buildFaqSchema(californiaFaqs);

export default function IndianWeddingShoppingCaliforniaPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          California Families · Bay Area &amp; Los Angeles
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India for California Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Coordinate bridal, groom, wedding-party, and family outfits from India through one documented process, with live review when available, custom-order support, and delivery coordination across California.
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
              { title: "Local vs. India Options", desc: "California families can compare local boutique quotes with an itemized India-sourcing estimate that includes the product, service tier, shipping, and customs estimate." },
              { title: "Limited Travel Time", desc: "Remote review can help families who cannot set aside an international shopping trip while managing work, events, and wedding decisions." },
              { title: "North-South Coordination", desc: "When relatives are spread across the Bay Area, Los Angeles, San Diego, and other cities, one measurement and approval process keeps decisions organized." },
              { title: "Custom Requirements", desc: "Written references, live review when available, and documented approvals help families communicate fabric, color, embroidery, sizing, and ceremony requirements." },
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
              CeremonyVerse is a US-based Indian wedding shopping concierge. Our strongest stated working relationships are in Surat and Delhi; other vendors are considered when the requested item, capacity, documentation, and terms can be responsibly reviewed.
            </p>
            <p style={{ marginBottom: "16px" }}>
              The process can be handled remotely. You share your wedding vision, ceremony schedule, and budget. We coordinate eligible live shopping sessions around Pacific Time so you can review fabrics, embroidery, and stitching options. After written approval, we organize measurements, order details, available pre-shipping review, and tracked delivery to your California address.
            </p>
            <p style={{ marginBottom: "16px" }}>
              California weddings span many traditions and venues. We begin with your family&apos;s approved ceremony and clothing requirements rather than assuming one set of rules applies to every community.
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
              { tier: "Style Guide & Vendor List", price: "$249", desc: "A researched starting point for families who will contact vendors, order, and ship independently." },
              { tier: "Guided Sourcing", price: "$799", desc: "Live shopping and order coordination for selected wedding outfits, subject to item and vendor availability." },
              { tier: "Full Bridal Concierge", price: "$2,499", desc: "One organized sourcing process for the bride, groom, and wedding party of up to eight people." }
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
            Frequently Asked Questions for California Families
          </h2>
          <div>
            {californiaFaqs.map((faq) => (
              <div key={faq.question} style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "16px", color: "#1f1f1f", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{faq.answer}</p>
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
            Book a free consultation or message us on WhatsApp at +1 (215) 341-9990. We&apos;ll explain the available service tiers, costs, timeline, and responsibilities before you decide.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
          <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <Link href="/shop-from-india/" style={{ color: "#7a6841", textDecoration: "underline" }}>Explore India shopping</Link>
            <Link href="/services/bridal-lehengas/" style={{ color: "#7a6841", textDecoration: "underline" }}>Bridal lehenga sourcing</Link>
            <Link href="/how-it-works/" style={{ color: "#7a6841", textDecoration: "underline" }}>See how it works</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
