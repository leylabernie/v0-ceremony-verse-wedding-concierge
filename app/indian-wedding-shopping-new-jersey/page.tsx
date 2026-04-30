import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import Script from "next/script"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export const metadata = {
  title: "Indian Wedding Shopping from India | New Jersey NRI Families | CeremonyVerse",
  description: "NRI bride in New Jersey? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NJ door.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/indian-wedding-shopping-new-jersey",
    languages: {
      "en-US": "https://www.ceremonyverse.com/indian-wedding-shopping-new-jersey",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/",
    },
  },
  keywords: "Indian wedding shopping New Jersey, NRI bride New Jersey, buy lehenga from India NJ, Indian wedding concierge New Jersey",
  openGraph: {
    title: "Indian Wedding Shopping from India | New Jersey NRI Families | CeremonyVerse",
    description: "NRI bride in New Jersey? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NJ door.",
    type: "website",
    url: "https://www.ceremonyverse.com/indian-wedding-shopping-new-jersey",
  
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

export default function IndianWeddingShoppingNewJerseyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Indian Wedding Shopping New Jersey", path: "/indian-wedding-shopping-new-jersey" },
  ])

  const faqSchema = buildFAQSchema([
    {
      question: "How does CeremonyVerse compare to shopping on Oak Tree Road in Edison?",
      answer: "Oak Tree Road has great options, but selection is limited to what's in stock and prices reflect NJ retail overhead. With CeremonyVerse, you access India's full range of artisan craftspeople — more styles, custom stitching to your measurements, and typically 40–60% savings on comparable quality.",
    },
    {
      question: "What is the typical delivery timeline to New Jersey addresses?",
      answer: "From consultation to delivery at your NJ door, the typical timeline is 8–12 weeks. We schedule video shopping sessions around Eastern Time, and shipping from India to New Jersey usually takes 7–10 business days via express courier.",
    },
    {
      question: "Can you source outfits for Gujarati and South Indian weddings common in the NJ community?",
      answer: "Yes. New Jersey has large Gujarati, Telugu, Tamil, and Punjabi communities. We source ceremony-specific outfits for all traditions — including chaniya cholis for garba, pattu sarees for muhurtham, and coordinated family sets across every ceremony.",
    },
  ])

  const serviceSchema = buildServiceSchema({
    name: "Indian Wedding Shopping Concierge for New Jersey NRI Families",
    description: "NRI bride in New Jersey? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NJ door.",
    path: "/indian-wedding-shopping-new-jersey",
    priceFrom: "149",
    priceCurrency: "USD",
    areaServed: ["USA"],
  })

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />
      <Script id="breadcrumb-schema-new-jersey" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-new-jersey" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-new-jersey" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          New Jersey NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving New Jersey NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          New Jersey is home to one of the largest Indian diaspora populations in the United States, with thriving communities in Edison, Jersey City, and Parsippany. If you are planning an Indian wedding from NJ, CeremonyVerse connects you directly with India's finest craftspeople — so you get bridal lehengas, sherwanis, and family outfits that match the quality and variety available back home.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why NJ families struggle with Indian wedding shopping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Limited Local Selection", desc: "Boutiques on Oak Tree Road or in Jersey City carry a fraction of what's available in India. You're choosing from what was imported — not from the full range of designs, fabrics, and embroidery styles." },
              { title: "Markups of 3–5×", desc: "The same lehenga that costs ₹50,000 in Chandni Chowk can be priced at $2,000–$3,500 in a NJ showroom. You deserve India pricing with US convenience." },
              { title: "No Time for India Trips", desc: "Between work schedules and wedding planning, flying to India for a shopping trip is often impractical. Coordinating family outfits across two countries adds another layer of stress." },
              { title: "Fit & Quality Uncertainty", desc: "Ordering online from India without guidance risks wrong sizing, mismatched colors, or fabrics that don't meet expectations. Returns across borders are a nightmare." },
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
            How CeremonyVerse serves New Jersey families
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is your personal Indian wedding concierge. We work with artisan partners across Delhi, Jaipur, Lucknow, Surat, Kanchipuram, and Kolkata to source exactly what you need — bridal lehengas, groom sherwanis, bridesmaids outfits, family sarees, and everything in between.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Here's how it works: you tell us your vision, your budget, and your ceremony schedule. We take you on live video shopping sessions with our outfit specialists in India, showing you fabrics, embroidery, and stitching in real time. You choose, we handle measurements, custom tailoring, quality checks, and doorstep delivery to your home in Edison, Jersey City, Parsippany, or anywhere in New Jersey.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether you are a bride looking for a show-stopping reception lehenga, a mother-of-the-bride who wants a coordinated silk saree set, or a groom who wants a perfectly fitted sherwani — we have you covered. Every outfit is custom stitched to your exact measurements.
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
              { tier: "Style Guide", price: "$149", desc: "A curated lookbook tailored to your ceremonies, body type, and budget — with specific recommendations from India's top outfit specialists." },
              { tier: "Guided Sourcing", price: "$599", desc: "Live video shopping sessions, direct access to artisan partners in India, measurement guidance, and managed ordering for your key outfits." },
              { tier: "Full Bridal Concierge", price: "$1,499", desc: "End-to-end outfit management for the entire wedding party — bride, groom, bridesmaids, groomsmen, and family. Every ceremony covered." },
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
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How does CeremonyVerse compare to shopping on Oak Tree Road in Edison?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Oak Tree Road has great options, but selection is limited to what’s in stock and prices reflect NJ retail overhead. With CeremonyVerse, you access India’s full range of artisan craftspeople — more styles, custom stitching to your measurements, and typically 40–60% savings on comparable quality.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>What is the typical delivery timeline to New Jersey addresses?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>From consultation to delivery at your NJ door, the typical timeline is 8–12 weeks. We schedule video shopping sessions around Eastern Time, and shipping from India to New Jersey usually takes 7–10 business days via express courier.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>Can you source outfits for Gujarati and South Indian weddings common in the NJ community?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Yes. New Jersey has large Gujarati, Telugu, Tamil, and Punjabi communities. We source ceremony-specific outfits for all traditions — including chaniya cholis for garba, pattu sarees for muhurtham, and coordinated family sets across every ceremony.</p>
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
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through exactly how we can help your New Jersey family shop from India with confidence.
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