import Script from "next/script"
import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export const metadata = {
  title: "Punjabi & Sikh Wedding Outfits from India | NRI USA | CeremonyVerse",
  description: "Planning a Punjabi or Sikh wedding in the USA? CeremonyVerse sources bridal lehengas, sherwanis, and family outfits from India's top Punjabi bridal markets — delivered to your US door.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/punjabi-sikh-wedding-outfits-usa",
    languages: {
      "en-US": "https://www.ceremonyverse.com/punjabi-sikh-wedding-outfits-usa",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/punjabi-sikh-wedding-outfits-usa",
    },
  },
  keywords: "punjabi wedding outfits usa, sikh wedding outfits usa, NRI punjabi wedding, anand karaj bridal lehenga usa, punjabi bridal lehenga from india, sikh groom sherwani usa",
  openGraph: {
    title: "Punjabi & Sikh Wedding Outfits from India | NRI USA | CeremonyVerse",
    description: "Planning a Punjabi or Sikh wedding in the USA? CeremonyVerse sources bridal lehengas, sherwanis, and family outfits from India's top Punjabi bridal markets — delivered to your US door.",
    type: "website",
    url: "https://www.ceremonyverse.com/punjabi-sikh-wedding-outfits-usa",
  
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ceremonyverse",
    title: "Punjabi & Sikh Wedding Outfits from India | NRI USA | CeremonyVerse",
    description: "Planning a Punjabi or Sikh wedding in the USA? CeremonyVerse sources bridal lehengas, sherwanis, and family outfits from India's top Punjabi bridal markets — delivered to your US door.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
};

export default function PunjabiSikhWeddingOutfitsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Punjabi & Sikh Wedding Outfits USA", path: "/punjabi-sikh-wedding-outfits-usa" },
  ])

  const faqSchema = buildFAQSchema([
    { question: "What makes a Punjabi Sikh wedding different from other Indian weddings?", answer: "Punjabi and Sikh weddings include unique ceremonies like the Chunni, Jaggo, and the sacred Anand Karaj in the Gurudwara. Each has specific outfit requirements, from the traditional red bridal lehenga to the groom's sherwani with safa and kalgi." },
    { question: "Can you source authentic chooda and kalire from India?", answer: "Yes. We source authentic chooda sets and hand-crafted kalire directly from Amritsar and Ludhiana markets — the real thing, blessed and traditional." },
    { question: "How do you coordinate a large Punjabi wedding party across US states?", answer: "We send measurement guides to each bridesmaid and groomsman, follow up to collect all numbers, and source matching sets from a single artisan partner. Everything can be shipped to one address or individually across states." },
    { question: "What is the typical timeline for sourcing Punjabi wedding outfits?", answer: "We recommend starting 8–12 months before the wedding. Punjabi weddings involve many ceremonies and many people, so early planning ensures the best selection and stress-free delivery." },
  ])

  const serviceSchema = buildServiceSchema({
    name: "Punjabi & Sikh Wedding Outfits from India",
    description: "Planning a Punjabi or Sikh wedding in the USA? CeremonyVerse sources bridal lehengas, sherwanis, and family outfits from India's top Punjabi bridal markets — delivered to your US door.",
    path: "/punjabi-sikh-wedding-outfits-usa",
    priceFrom: "149",
  })

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Punjabi &amp; Sikh Wedding Specialists
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Punjabi &amp; Sikh Wedding Outfits Sourced from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Punjabi and Sikh weddings span multiple days and ceremonies — from the Chunni and Mehendi to the sacred Anand Karaj and the grand reception — each with its own distinct outfit requirement. CeremonyVerse sources everything directly from India's top Punjabi bridal markets, including Chandni Chowk, Phagwara, and Ludhiana, with live video approval and delivery to your US door.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20planning%20a%20Punjabi%20wedding%20and%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* What Makes These Weddings Distinct */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What makes Punjabi &amp; Sikh weddings distinct
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Anand Karaj Bridal Look", desc: "The Gurudwara ceremony calls for a traditional red or maroon bridal lehenga with a heavy dupatta — worn during the sacred Anand Karaj. We source these directly from Chandni Chowk, Phagwara, and Ludhiana, India's foremost Punjabi bridal markets, ensuring authentic embroidery and the weight of cloth that photographs beautifully in the Gurudwara light." },
              { title: "Groom's Sherwani & Turban", desc: "A Punjabi groom's look is defined by his full-length sherwani, his safa (turban), and the kalgi (turban brooch). We source custom-stitched sherwanis with matching options coordinated to the bride's outfit — and can source the safa fabric in complementary colors for a cohesive bridal party look." },
              { title: "Mehendi & Jaggo Night", desc: "Bold yellows, greens, and pinks are the colors of Mehendi. The Jaggo — the lively nighttime procession — calls for statement outfits that stand out under lights. We coordinate looks for the bride, her sisters, bridesmaids, and the full family for both functions, so everyone is dressed intentionally." },
              { title: "Sangeet & Ladies Sangeet", desc: "The Sangeet is where Punjabi families go all out — glamorous lehengas, embellished gowns, sharara sets, and anything with sequins, mirrors, or bold colors. This is often the most photographed function after the wedding itself. We source show-stopping outfits from Delhi's fashion districts with a live video walkthrough before you confirm." },
              { title: "Bridesmaid & Groomsmen Coordination", desc: "Matching lehengas for bridesmaids and coordinated kurta-pajamas for groomsmen require precise color consistency and sizing across multiple people in multiple US states. We manage all measurements remotely and source matching sets from a single artisan partner — so the final look is perfectly uniform on the day." },
              { title: "Chunni Ceremony & Chooda", desc: "The Chunni ceremony (engagement outfit), the traditional red and white chooda set, and the kalire are items that are genuinely hard to source authentically in the US. We source the real thing from Amritsar and Ludhiana markets — the chooda blessed, the kalire hand-crafted — and ship them directly to you." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NRI Punjabi Families Choose CeremonyVerse */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            Why NRI Punjabi families choose CeremonyVerse
          </h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {[
              { point: "Access to Chandni Chowk, Ludhiana, and Phagwara markets without traveling", detail: "India's top Punjabi bridal markets are at your fingertips. We shop on your behalf, carrying your vision into the lanes of Chandni Chowk and the showrooms of Ludhiana — so you don't have to fly across the world to find the right outfit." },
              { point: "Live video shopping so you approve the exact fabric and embroidery", detail: "Before anything is ordered, you see it on video. We hold up the lehenga, show you the embroidery up close, let you compare colors in natural light — and you approve before a single rupee is spent." },
              { point: "Custom stitching to measurements — critical for heavy Punjabi bridal lehengas", detail: "A heavy Punjabi bridal lehenga is not off-the-rack wear. It needs to be stitched to your exact measurements. We collect your measurements remotely, supervise the stitching with our local partners, and ensure the fit is right before it ships." },
              { point: "Full family coordination across US states", detail: "Punjabi weddings dress dozens of people. Bridesmaids in New Jersey, groomsmen in California, parents in Texas. We manage all measurements, coordinate colors, and ship everything in time — one managed process, not a dozen phone calls." },
              { point: "100% fit guarantee with alteration cost coverage", detail: "If your outfit doesn't fit on arrival, we cover the cost of alterations at a local tailor. No negotiation, no extra charge — it's our commitment to you." },
            ].map((item) => (
              <div key={item.point} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "20px 24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "6px" }}>{item.point}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55", margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceremonies We Outfit */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "28px" }}>
            Ceremonies we outfit
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              "Roka",
              "Chunni Ceremony",
              "Mehendi",
              "Jaggo",
              "Sangeet / Ladies Sangeet",
              "Anand Karaj",
              "Reception",
              "Doli",
            ].map((ceremony) => (
              <div key={ceremony} style={{ background: "#f9f6f3", borderRadius: "10px", padding: "14px 18px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#1f1f1f", margin: 0 }}>{ceremony}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Start Planning Your Punjabi Wedding Outfits
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. From the Anand Karaj lehenga to the reception gown, we'll source every outfit your family needs — directly from India's best Punjabi bridal markets, delivered to your US door.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20planning%20a%20Punjabi%20wedding%20and%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    <SeoFooter />
      <Script id="breadcrumb-schema-punjabi-sikh-outfits" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-punjabi-sikh-outfits" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-punjabi-sikh-outfits" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
    </div>
  )
}