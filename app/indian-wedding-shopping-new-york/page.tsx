import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import Script from "next/script"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export const metadata = {
  title: "Indian Wedding Shopping from India | New York NRI Families | CeremonyVerse",
  description: "NRI bride in New York? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NY door.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/indian-wedding-shopping-new-york",
    languages: {
      "en-US": "https://www.ceremonyverse.com/indian-wedding-shopping-new-york",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/",
    },
  },
  keywords: "Indian wedding shopping New York, NRI bride New York, buy lehenga from India NYC, Indian wedding concierge New York",
  openGraph: {
    title: "Indian Wedding Shopping from India | New York NRI Families | CeremonyVerse",
    description: "NRI bride in New York? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NY door.",
    type: "website",
    url: "https://www.ceremonyverse.com/indian-wedding-shopping-new-york",
  
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
    title: "Indian Wedding Shopping from India | New York NRI Families | CeremonyVerse",
    description: "NRI bride in New York? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NY door.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
};

export default function IndianWeddingShoppingNewYorkPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Indian Wedding Shopping New York", path: "/indian-wedding-shopping-new-york" },
  ])

  const faqSchema = buildFAQSchema([
    {
      question: "How does CeremonyVerse compare to shopping in Jackson Heights, Queens?",
      answer: "Jackson Heights offers variety, but you're limited to whatever's on the rack, and quality can be inconsistent. With CeremonyVerse, you see the exact piece you're buying via live video from India, get custom stitching to your measurements, and a quality inspection before it ships.",
    },
    {
      question: "Can you coordinate outfits for a large wedding party spread across the Tri-State area?",
      answer: "That's exactly what we do best. Whether your bridesmaids are in Manhattan, family is in Long Island, and in-laws are in Connecticut, we manage every measurement and coordination detail remotely. Everyone gets their own video measurement session.",
    },
    {
      question: "What ceremonies do you typically source outfits for in New York Indian weddings?",
      answer: "We source outfits for every ceremony — mehndi, sangeet, haldi, baraat, main ceremony, and reception. For Tri-State area weddings, we commonly coordinate 6–12+ outfits per person across all events, plus accessories and ceremonial items.",
    },
  ])

  const serviceSchema = buildServiceSchema({
    name: "Indian Wedding Shopping Concierge for New York NRI Families",
    description: "NRI bride in New York? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NY door.",
    path: "/indian-wedding-shopping-new-york",
    priceFrom: "149",
    priceCurrency: "USD",
    areaServed: ["USA"],
  })

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />
      <Script id="breadcrumb-schema-new-york" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-new-york" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-new-york" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          New York NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving New York NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          New York City and its surrounding areas host one of the largest South Asian communities in the country. From Jackson Heights to Flushing to Long Island, NRI families planning Indian weddings deserve the same access to India's best craftspeople — without the transatlantic flight. CeremonyVerse makes that possible.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why New York families struggle with Indian wedding shopping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "NYC Showroom Premiums", desc: "Manhattan and Queens showrooms carry stunning pieces — but at dramatic markups. The overhead of a New York storefront gets passed directly to you, often tripling what you'd pay in India." },
              { title: "Overwhelming but Limited Choices", desc: "Jackson Heights has dozens of shops, yet each carries a narrow import selection. You see the same styles repeated. In India, the variety is truly limitless — CeremonyVerse opens that door for you." },
              { title: "Coordination Across Boroughs & States", desc: "When your bridal party lives across Brooklyn, Long Island, and Connecticut, coordinating outfit shopping in person is nearly impossible. We collect measurements remotely and manage everything centrally." },
              { title: "No Trusted Connection in India", desc: "Even if you wanted to order from India, who do you trust? Without a reliable contact who understands both Indian craftsmanship and NRI expectations, it's a gamble. We bridge that gap." },
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
            How CeremonyVerse serves New York families
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is your personal Indian wedding concierge connecting you with artisan partners across Delhi, Jaipur, Lucknow, Surat, Kanchipuram, and Kolkata. We source bridal lehengas, groom sherwanis, bridesmaids outfits, family sarees, and ceremony-specific pieces — all custom stitched and delivered to your New York address.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our process begins with understanding your wedding vision and ceremony schedule. We then connect you through live video shopping sessions with our outfit specialists in India, where you see fabrics, embroidery, and color options in real time. Once you choose, we handle measurements, custom tailoring, quality inspections, and doorstep delivery — whether you are in Jackson Heights, Long Island, Flushing, or anywhere in the tri-state area.
            </p>
            <p style={{ marginBottom: "16px" }}>
              For New York's large South Asian community, we understand the importance of getting every detail right — from the reception lehenga to the Sangeet outfit to coordinated family attire. We've worked with families across multiple ceremonies and know what each event demands.
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
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How does CeremonyVerse compare to shopping in Jackson Heights, Queens?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Jackson Heights offers variety, but you’re limited to whatever’s on the rack, and quality can be inconsistent. With CeremonyVerse, you see the exact piece you’re buying via live video from India, get custom stitching to your measurements, and a quality inspection before it ships.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>Can you coordinate outfits for a large wedding party spread across the Tri-State area?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>That’s exactly what we do best. Whether your bridesmaids are in Manhattan, family is in Long Island, and in-laws are in Connecticut, we manage every measurement and coordination detail remotely. Everyone gets their own video measurement session.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>What ceremonies do you typically source outfits for in New York Indian weddings?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>We source outfits for every ceremony — mehndi, sangeet, haldi, baraat, main ceremony, and reception. For Tri-State area weddings, we commonly coordinate 6–12+ outfits per person across all events, plus accessories and ceremonial items.</p>
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
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through exactly how we can help your New York family shop from India with confidence.
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