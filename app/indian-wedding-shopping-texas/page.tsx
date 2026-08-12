

import Link from "next/link";
import { NorthAmericaCoverage } from "@/components/north-america-coverage";
import {
  buildMetadata,
  buildServiceSchema,
  buildBreadcrumb,
  buildFaqSchema,
  JsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-texas/",
  title: "Indian Wedding Shopping from India — Texas",
  description:
    "Texas families in Houston and DFW can research bridal and family wedding outfits from India with eligible live review, written approvals, and delivery coordination.",
  keywords:
    "Indian wedding shopping Texas, bridal lehenga Houston, Indian wedding outfits Dallas, Indian bridal wear Texas, wedding shopping from India Texas",
});

const serviceSchema = buildServiceSchema({
  name: "Texas Indian Wedding Sourcing Service",
  description:
    "Indian wedding outfit sourcing for Texas families, including Houston, Dallas–Fort Worth, Austin, and San Antonio, with remote shopping and U.S. delivery coordination.",
  url: "/indian-wedding-shopping-texas/",
  category: "Indian Wedding Shopping — Texas",
  areaServed: "Texas, United States",
  offers: [
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
  { name: "Indian Wedding Shopping Texas", url: "/indian-wedding-shopping-texas/" },
]);

const texasFaqs = [
  {
    question: "How do I compare India sourcing with Texas boutique prices?",
    answer:
      "Compare the approved product, CeremonyVerse service tier, shipping, customs estimate, alteration allowance, timeline, and return terms with written Texas boutique quotes. There is no universal savings percentage.",
  },
  {
    question: "Do you coordinate delivery outside Houston and Dallas–Fort Worth?",
    answer:
      "Yes. The shopping and approval process is remote, so CeremonyVerse can coordinate tracked delivery to Austin, San Antonio, and other Texas addresses covered by the selected carrier.",
  },
  {
    question: "What can I review before an outfit ships to Texas?",
    answer:
      "Available pre-shipping review depends on the vendor and item. When included, CeremonyVerse coordinates photos or video against the approved references and documents any issue that can be identified before carrier handoff.",
  },
];

const faqSchema = buildFaqSchema(texasFaqs);

export default function IndianWeddingShoppingTexasPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Texas Families · Houston &amp; Dallas–Fort Worth
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India for Texas Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Coordinate bridal, groom, wedding-party, and family outfits from India through one documented process, with live review when available, custom-order support, and delivery coordination across Texas.
        </p>
        <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
          Schedule Free Consultation
        </Link>
      </section>

      <NorthAmericaCoverage guideName="Texas" />

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why Texas families struggle with Indian wedding shopping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Local vs. India Options", desc: "Texas families can compare local boutique quotes with an itemized India-sourcing estimate that includes the product, service tier, shipping, and customs estimate." },
              { title: "Long-Distance Coordination", desc: "When relatives are spread across Houston, Dallas–Fort Worth, Austin, and San Antonio, one measurement and approval process keeps decisions organized." },
              { title: "Limited Travel Time", desc: "Remote review can help families who cannot set aside an international shopping trip while managing work, events, and wedding decisions." },
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
            How CeremonyVerse serves Texas families
          </h2>
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is a US-based Indian wedding shopping concierge. Our strongest stated working relationships are in Surat and Delhi; other vendors are considered when the requested item, capacity, documentation, and terms can be responsibly reviewed.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Share your wedding vision, ceremony schedule, and budget. We coordinate eligible live shopping sessions so you can review fabrics, colors, and embroidery options. After written approval, we organize measurements, order details, available pre-shipping review, and tracked delivery to your Texas address.
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
            Frequently Asked Questions for Texas Families
          </h2>
          <div>
            {texasFaqs.map((faq) => (
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
            <Link href="/buy-indian-wedding-outfits-from-india/" style={{ color: "#7a6841", textDecoration: "underline" }}>Explore India shopping</Link>
            <Link href="/services/bridal-lehengas/" style={{ color: "#7a6841", textDecoration: "underline" }}>Bridal lehenga sourcing</Link>
            <Link href="/how-it-works/" style={{ color: "#7a6841", textDecoration: "underline" }}>See how it works</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
