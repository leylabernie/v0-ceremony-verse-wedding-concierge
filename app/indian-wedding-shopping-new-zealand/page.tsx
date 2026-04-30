import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import Link from "next/link"
import Script from "next/script"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export const metadata = {
  title: "Indian Wedding Shopping from India | New Zealand NRI Families | CeremonyVerse",
  description: "NRI bride in New Zealand? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NZ door.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
    languages: {
      "en-US": "https://www.ceremonyverse.com/",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/",
    },
  },
  keywords: "Indian wedding shopping New Zealand, NRI bride New Zealand, buy lehenga from India Auckland, Indian wedding concierge New Zealand, Indian wedding Auckland Wellington",
  openGraph: {
    title: "Indian Wedding Shopping from India | New Zealand NRI Families | CeremonyVerse",
    description: "NRI bride in New Zealand? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NZ door.",
    type: "website",
    url: "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
  
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
    title: "Indian Wedding Shopping from India | New Zealand NRI Families | CeremonyVerse",
    description: "NRI bride in New Zealand? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NZ door.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
};

export default function IndianWeddingShoppingNewZealandPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Indian Wedding Shopping New Zealand", path: "/indian-wedding-shopping-new-zealand" },
  ])

  const faqSchema = buildFAQSchema([
    {
      question: "How long does shipping take to New Zealand, and how is customs handled?",
      answer: "Shipping from India to New Zealand typically takes 10–16 business days via express international courier. We prepare all customs documentation and provide a full landed cost estimate — including any NZ import duties — before you confirm your order, so there are no surprises at delivery.",
    },
    {
      question: "How do video shopping sessions work given New Zealand's time difference?",
      answer: "New Zealand is one of the first time zones in the world, which actually works in your favour. Our India-based specialists schedule early morning sessions that align with comfortable evening times in NZ. We coordinate all scheduling around NZST so you never have to set an inconvenient alarm for a shopping appointment.",
    },
    {
      question: "What Indian wedding traditions and communities do you serve in New Zealand?",
      answer: "We serve all major Indian wedding traditions present in New Zealand — Punjabi, South Indian (Tamil, Telugu, Kannada), Gujarati, Maharashtrian, and more. Our sourcing team understands the specific outfit requirements for each ceremony type, from Mehndi and Sangeet attire to main ceremony bridal and groom looks, and coordinated family outfits.",
    },
  ])

  const serviceSchema = buildServiceSchema({
    name: "Indian Wedding Shopping Concierge for New Zealand NRI Families",
    description: "NRI bride in New Zealand? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your NZ door.",
    path: "/indian-wedding-shopping-new-zealand",
    priceFrom: "149",
    priceCurrency: "USD",
    areaServed: ["New Zealand"],
  })

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />
      <Script id="breadcrumb-schema-new-zealand" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-new-zealand" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-new-zealand" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          New Zealand NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving New Zealand NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          New Zealand's Indian community — concentrated in Auckland and Wellington — faces some of the most limited access to authentic Indian bridal fashion of any diaspora in the world. The nearest meaningful options are a flight to Sydney away. CeremonyVerse connects you directly to India's best artisans, wherever you are in New Zealand.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why New Zealand families struggle with Indian wedding shopping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Extremely Limited Local Options", desc: "Auckland has a handful of Indian clothing stores, but nothing approaching a dedicated bridal market. Wellington has even fewer. NZ brides seeking a hand-embroidered lehenga or custom sherwani locally face an almost empty marketplace." },
              { title: "The Nearest Good Options Require a Flight", desc: "Sydney's Harris Park is the closest cluster of Indian bridal shops — but that's a 3-hour international flight from Auckland. Travelling to India itself is 14–17 hours and a major expense for families already managing wedding budgets." },
              { title: "Isolation from Indian Fashion Markets", desc: "New Zealand's geographic remoteness means trends, new collections, and artisan craftsmanship from India are largely inaccessible without a trusted intermediary. What reaches NZ boutiques is often a narrow, dated selection at a significant premium." },
              { title: "Very High Independent Ordering Costs", desc: "Ordering directly from Indian vendors without guidance means navigating international shipping fees, NZ customs duties, uncertain sizing, and zero quality assurance — risks that are multiplied when ordering for an entire wedding party." },
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
            How CeremonyVerse serves New Zealand families
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is your personal Indian wedding concierge. We work with artisan partners across Delhi, Jaipur, Lucknow, Surat, Kanchipuram, and Kolkata to source bridal lehengas, groom sherwanis, bridesmaids outfits, family sarees, and complete ceremony wardrobes — all from the comfort of your home in Auckland or Wellington.
            </p>
            <p style={{ marginBottom: "16px" }}>
              New Zealand's significant time difference from India is no barrier with CeremonyVerse. Live video shopping sessions are flexibly scheduled around NZST, with our India-based specialists accommodating early morning windows that translate to convenient evening slots for NZ families. You browse fabrics, embroidery, and stitching options in real time, then we handle custom measurements, tailoring, quality inspections, and full customs documentation for delivery to any New Zealand address.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether it's a Punjabi celebration in Auckland, a South Indian ceremony in Wellington, or a multi-day wedding across both islands — we serve all Indian wedding traditions with cultural precision. NZ families deserve the same access to India's artisan craftsmanship as any community, and we make that possible.
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
              { tier: "Style Guide", price: "$149 USD", desc: "A curated lookbook tailored to your ceremonies, body type, and budget — with specific recommendations from India's top outfit specialists." },
              { tier: "Guided Sourcing", price: "$599 USD", desc: "Live video shopping sessions, direct access to artisan partners in India, measurement guidance, and managed ordering for your key outfits." },
              { tier: "Full Bridal Concierge", price: "$1,499 USD", desc: "End-to-end outfit management for the entire wedding party — bride, groom, bridesmaids, groomsmen, and family. Every ceremony covered." },
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
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How long does shipping take to New Zealand, and how is customs handled?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>Shipping from India to New Zealand typically takes 10–16 business days via express international courier. We prepare all customs documentation and provide a full landed cost estimate — including any NZ import duties — before you confirm your order, so there are no surprises at delivery.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>How do video shopping sessions work given New Zealand's time difference?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>New Zealand is one of the first time zones in the world, which actually works in your favour. Our India-based specialists schedule early morning sessions that align with comfortable evening times in NZ. We coordinate all scheduling around NZST so you never have to set an inconvenient alarm for a shopping appointment.</p>
            </div>
            <div style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>What Indian wedding traditions and communities do you serve in New Zealand?</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>We serve all major Indian wedding traditions present in New Zealand — Punjabi, South Indian (Tamil, Telugu, Kannada), Gujarati, Maharashtrian, and more. Our sourcing team understands the specific outfit requirements for each ceremony type, from Mehndi and Sangeet attire to main ceremony bridal and groom looks, and coordinated family outfits.</p>
            </div>
        </div>
      </section>

      {/* Explore Our Services */}
      <section style={{ padding: "48px 24px", borderTop: "1px solid #e6dfd5" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "28px" }}>
            Explore Our Services
          </h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {[
              { title: "Browse All Services", desc: "Bridal lehengas, sherwanis, jewelry, ceremonial items, and more — all sourced from India.", href: "/services" },
              { title: "See Pricing", desc: "Transparent pricing from $149 for a Style Guide to $1,499 for Full Bridal Concierge.", href: "/pricing" },
              { title: "Read Our Guides", desc: "Free downloadable guides with real prices, timelines, and vendor red flags.", href: "/free-guides" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: "none", display: "block", background: "#f9f6f3", borderRadius: "14px", padding: "20px 24px", border: "1px solid #e6dfd5", transition: "box-shadow 0.2s" }}>
                <h3 style={{ fontWeight: 600, fontSize: "15px", color: "#2f2f2f", marginBottom: "4px" }}>{link.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55", margin: 0 }}>{link.desc}</p>
              </Link>
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
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We'll walk you through exactly how we can help your New Zealand family shop from India with confidence.
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