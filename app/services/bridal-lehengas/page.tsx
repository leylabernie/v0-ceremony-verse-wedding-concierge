import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/services/bridal-lehengas/",
  title: "Bridal Lehenga Sourcing Service \u2014 Custom Bridal Lehengas from India",
  description: "Our flagship service \u2014 sourcing custom bridal lehengas from India with live video approval, 15+ measurement fitting, custom stitching, and US delivery."
});

const serviceSchema = buildServiceSchema({
  name: "Bridal Lehenga Sourcing Service",
  description: "Custom bridal lehenga sourcing from India \u2014 zardozi, gota patti, sequin, and mirror work, with live video approval, custom stitching, and US delivery.",
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
          Your dream bridal lehenga, sourced from India and delivered to your US door.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          The most beautiful bridal lehengas are made in India. CeremonyVerse brings them to you — with live video shopping so you see every detail before you buy, custom stitching to your exact measurements, quality inspection before shipping, and full delivery to your door.
        </p>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#7a6841", color: "#fff", padding: "12px 32px", borderRadius: "999px", fontSize: "17px", fontWeight: 500, textDecoration: "none" }}>
          Book Free Consultation — CeremonyVerse.com
        </Link>
        <p style={{ fontSize: "17px", color: "#5e4a40", marginTop: "12px" }}>No commitment required · Response within 24–48 hours</p>
      </section>

      <section style={{ padding: "56px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {[
            { title: "Live Video Shopping", desc: "See the exact fabric, embroidery, and color in real time before purchasing. Your approved piece is reserved with your name." },
            { title: "Custom to Your Measurements", desc: "15-point measurement process guided by video call. Custom stitched to your body — 99% first-time fit rate." },
            { title: "Quality Inspected Before Shipping", desc: "Physical inspection of every item before it leaves India. If anything changed, we halt shipping and resolve it at no cost." },
            { title: "Save 30–50% vs US Boutiques", desc: "Direct sourcing from artisan workshops means no retail markup. Same quality, significantly lower cost." },
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
            { q: "How much does a bridal lehenga from India cost?", a: "Quality bridal lehengas from India cost $900–$4,000 depending on fabric and embroidery. With our sourcing fee, shipping, and customs, total cost is typically 30–50% less than a US boutique for equivalent quality." },
            { q: "How long does sourcing a bridal lehenga take?", a: "Allow 14–20 weeks for custom production plus shipping. We recommend starting 10–12 months before your wedding date." },
            { q: "What if my lehenga doesn't fit?", a: "We guide every measurement on video call and maintain a 99% first-time fit rate. Minor alterations, if needed, can be done by any local tailor." },
            { q: "What styles are available?", a: "All styles — heavy zardozi embroidery, thread work, mirror work, raw silk, georgette, tissue silk, any color. We source based on your specific vision." },
            { q: "Can I see designs before deciding?", a: "Yes — we do live video shopping sessions where you see actual items in real time. You never commit to anything without seeing it first." },
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
