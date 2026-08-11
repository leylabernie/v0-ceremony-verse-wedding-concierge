import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/services/bridal-lehengas/",
  title: "Bridal Lehenga Sourcing Service \u2014 Custom Bridal Lehengas from India",
  description: "Bridal lehenga sourcing from India with guided measurements, documented approvals, available pre-shipping review, and US delivery support."
});

const serviceSchema = buildServiceSchema({
  name: "Bridal Lehenga Sourcing Service",
  description: "Bridal lehenga sourcing from India with guided measurements, documented approvals, available pre-shipping review, and US delivery support.",
  url: "/services/bridal-lehengas/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Bridal Lehengas", url: "/services/bridal-lehengas/" },
]);

export default function BridalLehengaServicePage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />
      <section style={{ padding: "80px 24px 40px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a6841", marginBottom: "16px" }}>Bridal Lehenga Sourcing</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.15, marginBottom: "24px" }}>
          Research a bridal lehenga from India with documented options, approvals, and U.S. delivery coordination.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          CeremonyVerse helps US-based brides research and source bridal lehengas from India. Depending on your selected tier and vendor, we coordinate live video reviews, measurements, written approvals, pre-shipping checks, and delivery tracking.
        </p>
        <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#7a6841", color: "#fff", padding: "12px 32px", borderRadius: "999px", fontSize: "17px", fontWeight: 500, textDecoration: "none" }}>
          Schedule Free Consultation
        </Link>
        <p style={{ fontSize: "17px", color: "#5e4a40", marginTop: "12px" }}>No commitment required · Share your timeline and priorities</p>
      </section>

      <section style={{ padding: "56px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {[
            { title: "Live Video Review", desc: "When the vendor and item allow it, review current visible details on video and record the selected reference in writing. Video does not prove material composition or exact screen color." },
            { title: "Guided Measurements", desc: "We help document measurements in the format requested by the selected vendor and confirm the approved details in writing." },
            { title: "Pre-Shipping Review", desc: "For eligible tiers, we review the finished item before shipment and share any visible concern so you can decide how to proceed." },
            { title: "Transparent Costs", desc: "Your quote separates the CeremonyVerse service fee from product, shipping, customs, and any local alteration costs." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "16px", padding: "28px", border: "1px solid #e6dfd5" }}>
              <h3 style={{ fontWeight: 600, color: "#1f1f1f", marginBottom: "8px", fontSize: "17px" }}>{item.title}</h3>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "40px" }}>Bridal Lehenga FAQ</h2>
          {[
            { q: "How much does a bridal lehenga from India cost?", a: "Cost depends on fabric, embroidery, customization, and vendor availability. Your written quote separates the item price from our service fee, shipping, customs, and other outside costs." },
            { q: "How long does sourcing a bridal lehenga take?", a: "Lead time depends on the selected vendor, customization, approvals, and shipping conditions. Starting early gives you more options and time for local alterations if needed." },
            { q: "What if my lehenga doesn't fit?", a: "We guide measurement documentation and approvals, but remote custom clothing cannot carry a universal fit guarantee. Any remedy or alteration allowance is governed by your signed service terms." },
            { q: "What styles are available?", a: "Availability changes by vendor and season. We research options that match your brief, including preferred color, silhouette, fabric, handwork, and budget." },
            { q: "Can I see designs before deciding?", a: "Eligible sourcing tiers include live video shopping or a documented review of available options. You approve the selected item or custom order in writing before purchase." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "20px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
