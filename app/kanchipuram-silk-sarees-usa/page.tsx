import Script from "next/script"
import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export const metadata = {
  title: "Kanchipuram Silk Sarees for US Families | Pure Silk Sourced from India | CeremonyVerse",
  description: "Authentic Kanchipuram pure silk sarees sourced directly from Kanchipuram, India for US-based families. CeremonyVerse travels to Kanchipuram to select the finest silk sarees for your wedding. Delivered to your US door.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/kanchipuram-silk-sarees-usa",
  },
  keywords: "Kanchipuram silk sarees USA, buy Kanchipuram saree online USA, pure silk saree from India delivered USA, NRI Kanchipuram saree, South Indian wedding saree USA, Kanchi pattu saree USA, authentic Kanchipuram silk NRI, Kanchipuram saree delivered USA, CeremonyVerse Kanchipuram",
  openGraph: {
    title: "Kanchipuram Silk Sarees for US Families | Pure Silk Sourced from India | CeremonyVerse",
    description: "Authentic Kanchipuram pure silk sarees sourced directly from Kanchipuram, India for US-based families. CeremonyVerse travels to Kanchipuram to select the finest silk sarees for your wedding. Delivered to your US door.",
    type: "website",
    url: "https://www.ceremonyverse.com/kanchipuram-silk-sarees-usa",
  
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

export default function KanchipuramSareesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Kanchipuram Silk Sarees USA", path: "/kanchipuram-silk-sarees-usa" },
  ])

  const faqSchema = buildFAQSchema([
    { question: "How much does a Kanchipuram silk saree cost?", answer: "Authentic Kanchipuram pure silk sarees range from approximately $150–$800 depending on the weight of silk, zari work, and design complexity. We source directly to ensure you get authentic quality at the best price." },
    { question: "How do I know it's authentic?", answer: "We source only Silk Mark certified sarees from verified weavers in Kanchipuram. We have personally visited the source and know exactly what we're sourcing. No synthetic silk, no fake zari." },
    { question: "Can you source specific colors or designs?", answer: "Yes — tell us your wedding color palette and we'll source sarees that coordinate with the bridal and groom outfits. We can also source matching blouse fabric or arrange custom blouse stitching." },
    { question: "How long does it take?", answer: "We recommend allowing 6–8 weeks for Kanchipuram saree sourcing, including selection, shipping, and delivery. Start early if you need multiple sarees for family members." },
  ])

  const serviceSchema = buildServiceSchema({
    name: "Kanchipuram Silk Sarees for US Families",
    description: "Authentic Kanchipuram pure silk sarees sourced directly from Kanchipuram, India for US-based families. Handwoven with pure mulberry silk and real gold or silver zari thread.",
    path: "/kanchipuram-silk-sarees-usa",
    priceFrom: "149",
  })

  const sarees = [
    { src: "/images/kanchipuram-red-silk.jpg", name: "Kancheepuram Silk Red", desc: "Classic bridal red with gold zari border — the most traditional choice for South Indian weddings." },
    { src: "/images/kanchipuram-orange-silk.jpg", name: "Kancheepuram Silk Orange", desc: "Vibrant orange with intricate gold border — perfect for the bride or mother of the bride." },
    { src: "/images/kanchipuram-tissue-dual.jpg", name: "Kancheepuram Tissue Dual Colour", desc: "Shimmering tissue silk in two contrasting colors — a modern take on the classic." },
    { src: "/images/kanchipuram-multicolour.jpg", name: "Kancheepuram Silk Multicolour", desc: "Rich multicolour weave with traditional motifs — standout piece for any ceremony." },
    { src: "/images/kanchipuram-gold-tissue.jpg", name: "Kancheepuram Tissue Gold", desc: "Lustrous gold tissue silk — elegant and regal, ideal for reception or sangeet." },
    { src: "/images/kanchipuram-dark-purple.jpg", name: "Kancheepuram Silk Dark Purple", desc: "Deep jewel-toned purple with gold zari — dramatic and beautiful for evening ceremonies." },
    { src: "/images/kanchipuram-pink-silk.jpg", name: "Kancheepuram Silk Pink", desc: "Soft pink pure silk with gold border — a feminine choice for any wedding ceremony." },
    { src: "/images/kanchipuram-maroon-silk.jpg", name: "Kancheepuram Silk Maroon", desc: "Rich maroon with heavy gold zari — a close second to red for bridal wear." },
  ]

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* HERO */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px" }}>
          Kanchipuram Silk Sarees
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Pure Kanchipuram silk, sourced from the source.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "12px", maxWidth: "600px", margin: "0 auto 12px" }}>
          We travel to Kanchipuram — the silk weaving capital of India — to hand-select pure silk sarees for our clients. Every saree is hand-woven with pure mulberry silk and real gold or silver zari thread.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#8a6f63", marginBottom: "32px", maxWidth: "560px", margin: "0 auto 32px" }}>
          This is not sourced from a catalog. We go there so you don't have to.
        </p>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* SAREE GALLERY */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "40px" }}>
            Our Kanchipuram Collection
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {sarees.map((saree) => (
              <div key={saree.src} style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #e6dfd5", background: "#f9f6f3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={saree.src}
                  alt={`${saree.name} — pure Kanchipuram silk saree sourced from India for US families by CeremonyVerse`}
                  style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "6px" }}>{saree.name}</h3>
                  <p style={{ fontSize: "12px", color: "#6a5c55", lineHeight: 1.5 }}>{saree.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KANCHIPURAM */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why Kanchipuram silk is different
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { title: "Pure mulberry silk", desc: "Made from 100% pure mulberry silk — stronger, shinier, and more durable than any other saree fabric." },
              { title: "Real zari thread", desc: "Authentic Kanchipuram sarees use real gold or silver zari thread, not synthetic alternatives." },
              { title: "Handwoven heritage", desc: "Each saree takes days to weave by hand. The craftsmanship has been passed down for generations." },
              { title: "Silk Mark certified", desc: "We source only Silk Mark certified sarees — the Government of India's guarantee of pure silk authenticity." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "#6a5c55", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Kanchipuram Saree FAQ
          </h2>
          {[
            { q: "How much does a Kanchipuram silk saree cost?", a: "Authentic Kanchipuram pure silk sarees range from approximately $150–$800 depending on the weight of silk, zari work, and design complexity. We source directly to ensure you get authentic quality at the best price." },
            { q: "How do I know it's authentic?", a: "We source only Silk Mark certified sarees from verified weavers in Kanchipuram. We have personally visited the source and know exactly what we're sourcing. No synthetic silk, no fake zari." },
            { q: "Can you source specific colors or designs?", a: "Yes — tell us your wedding color palette and we'll source sarees that coordinate with the bridal and groom outfits. We can also source matching blouse fabric or arrange custom blouse stitching." },
            { q: "How long does it take?", a: "We recommend allowing 6–8 weeks for Kanchipuram saree sourcing, including selection, shipping, and delivery. Start early if you need multiple sarees for family members." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    <SeoFooter />
      <Script id="breadcrumb-schema-kanchipuram-sarees" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-kanchipuram-sarees" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-kanchipuram-sarees" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
    </div>
  )
}