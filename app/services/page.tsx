import Script from "next/script"
import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export const metadata = {
  title: "Indian Wedding Services — Bridal Lehengas, Sherwanis, Jewelry & More | CeremonyVerse",
  description: "Complete Indian wedding sourcing services from CeremonyVerse. Bridal lehengas, groom sherwanis, bridesmaid outfits, jewelry, ceremonial items, gifts, and welcome bags — all sourced from India with live video approval and delivered to the USA, Canada, UK, Australia & NZ.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/services",
    languages: {
      "en-US": "https://www.ceremonyverse.com/services",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/services",
    },
  },
  keywords: "indian wedding services, bridal lehenga sourcing, sherwani from india, bridesmaid outfits, indian wedding concierge, NRI wedding shopping, wedding jewelry from india",
  openGraph: {
    title: "Indian Wedding Services — Bridal Lehengas, Sherwanis, Jewelry & More | CeremonyVerse",
    description: "Complete Indian wedding sourcing services from CeremonyVerse. Bridal lehengas, groom sherwanis, bridesmaid outfits, jewelry, ceremonial items, gifts, and welcome bags — all sourced from India with live video approval.",
    type: "website",
    url: "https://www.ceremonyverse.com/services",
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
    title: "Indian Wedding Services — Bridal Lehengas, Sherwanis, Jewelry & More | CeremonyVerse",
    description: "Complete Indian wedding sourcing services from CeremonyVerse. Bridal lehengas, groom sherwanis, bridesmaid outfits, jewelry, ceremonial items, gifts, and welcome bags — all sourced from India with live video approval.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
};

const WA_LINK = "https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."

const services = [
  {
    title: "Bridal Lehengas & Wedding Outfits",
    desc: "Sourced directly from India with authentic craftsmanship, full quality checks, and secure shipping to the US. See your lehenga on live video before it ships — no surprises.",
    href: "/buy-bridal-lehenga-from-india-usa",
    image: "/images/services-bridal-gold.jpg",
    imageAlt: "Champagne gold bridal lehenga sourced from India",
  },
  {
    title: "Groom Sherwanis & Attire",
    desc: "Custom sherwanis and groom outfits with verified craftsmanship, tailored fit, and inspection before delivery. Every piece measured and stitched to your exact specifications.",
    href: "/buy-sherwani-from-india-usa",
    image: "/images/services-groom.jpg",
    imageAlt: "Ivory and gold sherwani for Indian groom",
  },
  {
    title: "Bridesmaid Outfits",
    desc: "Coordinated lehengas in matching palettes — consistent colors, fabrics, and sizing for a cohesive wedding look. All sourced from the same artisan to ensure zero variation in dye or weave.",
    href: "/bridesmaid-and-family-outfits-from-india",
    image: "/images/services-bridesmaids.jpg",
    imageAlt: "Pastel bridesmaid lehengas on rack",
  },
  {
    title: "Family Wedding Outfits",
    desc: "Sarees, lehengas, and traditional outfits for parents, in-laws, and extended family — coordinated across colors and fabrics. One point of contact for the entire family.",
    href: "/bridesmaid-and-family-outfits-from-india",
    image: "/images/services-bridesmaids.png",
    imageAlt: "Coordinated Indian family wedding sarees",
  },
  {
    title: "Jewelry & Bridal Accessories",
    desc: "Authentic kundan, polki, and gold-plated bridal jewelry sets sourced from established artisans in India. Quality verified on video before shipping.",
    href: "/wedding-accessories-and-ceremony-items-from-india",
    image: "/images/services-jewelry-real.jpg",
    imageAlt: "Kundan polki bridal jewelry set with emerald stones",
  },
  {
    title: "Ceremonial Items & Ritual Essentials",
    desc: "Everything needed for mehndi, sangeet, puja, and other traditional ceremonies — sourced accurately to match cultural requirements and rituals.",
    href: "/wedding-accessories-and-ceremony-items-from-india",
    image: "/images/services-ceremonial2.png",
    imageAlt: "Mehndi ceremony with marigolds and brass diyas",
  },
  {
    title: "Wedding Gifts & Return Gifts",
    desc: "Thoughtful gift sourcing — sarees, dry fruit hampers, silver items, and curated return gifts for guests and family. Each gift wrapped and ready for your event.",
    href: "/wedding-accessories-and-ceremony-items-from-india",
    image: "/images/services-gifts.jpg",
    imageAlt: "Colourful silk potli bags for wedding return gifts",
  },
  {
    title: "Welcome Bags & Event Details",
    desc: "Custom welcome bags filled with Indian sweets, herbal teas, mehndi kits, and keepsakes — a memorable first impression for out-of-town guests.",
    href: "/wedding-accessories-and-ceremony-items-from-india",
    image: "/images/services-welcomebags.jpg",
    imageAlt: "Personalized monogram jute welcome bags",
  },
]

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ])

  const faqSchema = buildFAQSchema([
    { question: "What services does CeremonyVerse offer?", answer: "CeremonyVerse offers complete Indian wedding sourcing services including bridal lehengas, groom sherwanis, bridesmaid outfits, family attire, jewelry, ceremonial items, wedding gifts, and welcome bags — all sourced from India with live video approval." },
    { question: "How much do CeremonyVerse services cost?", answer: "Our sourcing fee starts at $149 for a Style Guide & Vendor List, $599 for Guided Sourcing, and $1,499 for Full Bridal Concierge. Outfit costs, shipping, and customs are separate and quoted upfront." },
    { question: "Do you source everything from India?", answer: "Yes. All outfits and items are sourced directly from vetted artisan workshops in India. We work with weavers, embroiderers, and tailors across India's major bridal markets including Delhi, Jaipur, Kanchipuram, Varanasi, and Surat." },
    { question: "What countries do you deliver to?", answer: "We primarily deliver to the USA, but also serve clients in Canada, UK, Australia, and New Zealand. All items are shipped with full customs documentation and insured transit." },
  ])

  const serviceSchema = buildServiceSchema({
    name: "Indian Wedding Shopping Concierge",
    description: "Complete Indian wedding sourcing services — bridal lehengas, groom sherwanis, bridesmaid outfits, jewelry, ceremonial items, gifts, and welcome bags sourced from India with live video approval.",
    path: "/services",
    priceFrom: "149",
  })

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Everything You Need
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          What We Source for Your Indian Wedding
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Complete wedding sourcing from India — outfits, accessories, gifts, and ceremonial items — all handled for you with quality checks and reliable delivery to the US, Canada, UK, Australia, and New Zealand.
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "0 24px 56px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              style={{
                textDecoration: "none",
                background: "#fff",
                border: "1px solid #e6dfd5",
                borderRadius: "16px",
                overflow: "hidden",
                display: "block",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
            >
              <img src={service.image} alt={service.imageAlt} style={{ width: "100%", height: "16rem", objectFit: "cover", display: "block" }} />
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "8px" }}>{service.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#6a5c55", marginBottom: "12px" }}>{service.desc}</p>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#c7b28a", letterSpacing: "0.04em" }}>Learn more →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            How It Works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { step: "01", title: "Free Consultation", desc: "Tell us about your wedding — ceremonies, vision, timeline, budget. We'll advise honestly on what's possible and what it takes." },
              { step: "02", title: "Live Video Sourcing", desc: "We connect you directly with artisans and weavers in India via live video. You see the actual fabric, the real color, the true weight. No catalog surprises." },
              { step: "03", title: "Quality Check & Ship", desc: "Before anything ships, we verify quality — stitching, color accuracy, fit. If something isn't right, it gets corrected in India, not after it's in your living room." },
            ].map((item) => (
              <div key={item.step} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 600, color: "#c7b28a", marginBottom: "8px" }}>{item.step}</p>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Start Your Sourcing Process
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
            From outfits to gifts to ceremonial details — we manage the entire sourcing process so you don't have to. The consultation is free, genuine, and without pressure.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Book Free Consultation
          </a>
          <p style={{ fontSize: "13px", color: "#6a5c55", marginTop: "16px" }}>
            Or message directly on WhatsApp: <strong style={{ color: "#1f1f1f" }}>+1 (215) 341-9990</strong>
          </p>
        </div>
      </section>
    <SeoFooter />
      <Script id="breadcrumb-schema-services" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-services" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-services" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
    </div>
  )
}
