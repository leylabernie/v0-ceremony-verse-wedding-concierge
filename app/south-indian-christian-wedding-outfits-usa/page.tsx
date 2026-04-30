import Script from "next/script"
import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export const metadata = {
  title: "South Indian Christian Wedding Outfits from India | NRI USA | CeremonyVerse",
  description: "Planning a South Indian Christian wedding in the USA? CeremonyVerse sources Kerala Christian sarees, Kanchipuram silk, bridesmaids outfits, and bridal wear from India — delivered to your US door.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/south-indian-christian-wedding-outfits-usa",
    languages: {
      "en-US": "https://www.ceremonyverse.com/south-indian-christian-wedding-outfits-usa",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/south-indian-christian-wedding-outfits-usa",
    },
  },
  keywords: "south indian christian wedding outfits usa, kerala christian wedding saree usa, NRI south indian christian wedding, kanchipuram silk usa, south indian bridal saree usa",
  openGraph: {
    title: "South Indian Christian Wedding Outfits from India | NRI USA | CeremonyVerse",
    description: "Planning a South Indian Christian wedding in the USA? CeremonyVerse sources Kerala Christian sarees, Kanchipuram silk, bridesmaids outfits, and bridal wear from India — delivered to your US door.",
    type: "website",
    url: "https://www.ceremonyverse.com/south-indian-christian-wedding-outfits-usa",
  
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
    title: "South Indian Christian Wedding Outfits from India | NRI USA | CeremonyVerse",
    description: "Planning a South Indian Christian wedding in the USA? CeremonyVerse sources Kerala Christian sarees, Kanchipuram silk, bridesmaids outfits, and bridal wear from India — delivered to your US door.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
};

export default function SouthIndianChristianWeddingOutfitsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "South Indian Christian Wedding Outfits USA", path: "/south-indian-christian-wedding-outfits-usa" },
  ])

  const faqSchema = buildFAQSchema([
    { question: "What do South Indian Christian brides wear for the church ceremony?", answer: "South Indian Christian brides typically wear a white, cream, or soft pastel saree for the church ceremony. Kerala Christian brides often choose a kasavu saree with gold border, while Tamil Christian brides may choose a Kanchipuram silk in ivory or blush." },
    { question: "Can you source authentic Kanchipuram silk sarees for the family?", answer: "Yes. We source directly from Kanchipuram — the only place where authentic Kanchipuram silk is woven — ensuring pure zari and genuine silk for mothers, aunties, and senior family members." },
    { question: "How do you handle different Kerala and Tamil Christian traditions?", answer: "Kerala Christian (Syro-Malabar, Latin Catholic, Marthoma) and Tamil Christian families each have nuanced traditions. We understand these differences and source outfits that honor your specific community's heritage." },
    { question: "Can you coordinate bridesmaid outfits for a South Indian Christian wedding?", answer: "Yes. Bridesmaids at South Indian Christian weddings are often coordinated in matching sarees or churidars in pastels or complementary shades. We collect all measurements and source matching sets from a single artisan partner for perfect color consistency." },
  ])

  const serviceSchema = buildServiceSchema({
    name: "South Indian Christian Wedding Outfits from India",
    description: "Planning a South Indian Christian wedding in the USA? CeremonyVerse sources Kerala Christian sarees, Kanchipuram silk, bridesmaids outfits, and bridal wear from India — delivered to your US door.",
    path: "/south-indian-christian-wedding-outfits-usa",
    priceFrom: "149",
  })

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          South Indian Christian Wedding Specialists
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          South Indian Christian Wedding Outfits Sourced from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          South Indian Christian weddings carry a distinctive elegance — blending church traditions with the rich textile heritage of Kerala and Tamil Nadu. CeremonyVerse understands exactly what each ceremony calls for, from the church procession saree to the reception outfit, and sources everything directly from India.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* What Makes These Weddings Distinct */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What makes South Indian Christian weddings distinct
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Church Ceremony Bridal Saree", desc: "The church wedding calls for a bridal saree in white, cream, or soft pastels — a departure from the bold reds of Hindu ceremonies. Kerala Christian brides often wear a kasavu saree with gold border, while Tamil Christian brides may choose a Kanchipuram silk in ivory or blush." },
              { title: "Set Mundu & Kasavu", desc: "For Kerala Christian families, the traditional set mundu (white with gold kasavu border) is central to the wedding aesthetic. Grooms often wear a matching mundu and shirt. We source authentic handwoven kasavu sets directly from Kerala weavers." },
              { title: "Reception Outfits", desc: "The reception is where South Indian Christian families often embrace bolder colors — jewel-toned sarees, embroidered lehengas, or contemporary Indo-Western looks. We source both the formal church outfit and the celebratory reception look." },
              { title: "Bridesmaids Coordination", desc: "Bridesmaids at South Indian Christian weddings are often coordinated in matching sarees or churidars — typically in pastels or complementary shades. We collect all measurements and source matching sets from a single artisan partner to ensure perfect color consistency." },
              { title: "Mother & Aunty Sarees", desc: "Kanchipuram silk sarees are the go-to for mothers, aunties, and senior family members. We source directly from Kanchipuram — the only place where authentic Kanchipuram silk is woven — ensuring pure zari and genuine silk." },
              { title: "Kerala & Tamil Traditions", desc: "Kerala Christian (Syro-Malabar, Latin Catholic, Marthoma) and Tamil Christian families each have nuanced traditions. We understand these differences and source outfits that honor your specific community's heritage." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            Our experience with South Indian Christian weddings
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse has dressed South Indian Christian families in Philadelphia — understanding exactly what each ceremony calls for, from the church procession to the reception. We know that a Kerala Christian wedding saree isn't the same as a Tamil Christian one, and that the outfit expectations for a Syro-Malabar ceremony differ from a Latin Catholic celebration.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our artisan partners in Kanchipuram, Kochi, and Chennai specialize in the textiles that define South Indian Christian weddings — kasavu cotton and silk for Kerala families, Kanchipuram silk for Tamil families, and contemporary blended pieces for the reception. Every saree is handwoven, every blouse custom stitched to your measurements.
            </p>
            <p style={{ marginBottom: "16px" }}>
              We also handle the details that make coordination seamless: matching bridesmaids sarees or churidars, coordinated outfits for the groom's family, and Kanchipuram silk sarees for mothers and grandmothers. One point of contact, one managed process, delivered to your US door.
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
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your South Indian Christian wedding — the ceremonies, your outfit vision, and your family's specific traditions. No obligation." },
              { tier: "Style Guide", price: "$149", desc: "A curated lookbook covering church ceremony, reception, and family outfits — with specific textile recommendations for Kerala or Tamil Christian traditions." },
              { tier: "Guided Sourcing", price: "$599", desc: "Live video shopping sessions with artisan partners in Kanchipuram, Kochi, and Chennai. Measurement guidance and managed ordering for key outfits." },
              { tier: "Full Bridal Concierge", price: "$1,499", desc: "End-to-end outfit management — bride, groom, bridesmaids, groomsmen, parents, and family. Church ceremony and reception outfits all coordinated and delivered." },
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

      {/* CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Planning a South Indian Christian wedding in the USA?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. Whether your family is Kerala Christian or Tamil Christian, we'll source outfits that honor your traditions — directly from India.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    <SeoFooter />
      <Script id="breadcrumb-schema-south-indian-christian" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-south-indian-christian" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-south-indian-christian" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
    </div>
  )
}