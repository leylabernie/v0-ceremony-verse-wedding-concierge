import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import Image from "next/image"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/kanchipuram-silk-sarees-usa/",
  title: "Buy Kanchipuram Silk Sarees from India \u2014 Delivered to USA",
  description: "Authentic pure Kanchipuram (Kanjivaram) silk sarees sourced directly from weavers in Tamil Nadu, with hallmark certification, live video approval, and US delivery."
});

const serviceSchema = buildServiceSchema({
  name: "Kanchipuram Silk Saree Sourcing",
  description: "Authentic pure Kanchipuram silk sarees sourced directly from Tamil Nadu weavers \u2014 hallmark certification, live video approval, custom blouse stitching, and US delivery.",
  url: "/kanchipuram-silk-sarees-usa/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Kanchipuram Silk Sarees", url: "/kanchipuram-silk-sarees-usa/" },
]);

export default function KanchipuramSareesPage() {
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
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* HERO */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px" }}>
          Kanchipuram Silk Sarees
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Kanchipuram silk sourcing with documented specifications.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "12px", maxWidth: "600px", margin: "0 auto 12px" }}>
          CeremonyVerse helps research Kanchipuram sarees by requested silk composition, weave, border, zari type, color, and budget. Product claims and available certification must be checked for the specific saree.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#5e4a40", marginBottom: "32px", maxWidth: "560px", margin: "0 auto 32px" }}>
          Eligible tiers can include live review and documentation before purchase.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
            Book Free Consultation
          </Link>
          <a href="https://wa.me/12153419990" style={{ fontSize: "17px", color: "#4d403a", textDecoration: "none" }}>
            WhatsApp: +1 (215) 341-9990
          </a>
        </div>
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
                <div className="relative" style={{ width: "100%", height: "280px" }}>
                  <Image
                    src={saree.src}
                    alt={`${saree.name} — pure Kanchipuram silk saree sourced from India for US families by CeremonyVerse`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "16px" }}>
                  <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "6px" }}>{saree.name}</h3>
                  <p style={{ fontSize: "17px", color: "#4d403a", lineHeight: 1.5 }}>{saree.desc}</p>
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
              { title: "Silk composition", desc: "Ask for the specific fiber composition and available Silk Mark documentation rather than relying on a product name alone." },
              { title: "Zari composition", desc: "Traditional and modern sarees can use different metallic yarns. Confirm the represented zari type for the exact saree." },
              { title: "Handwoven heritage", desc: "Each saree takes days to weave by hand. The craftsmanship has been passed down for generations." },
              { title: "Documented approval", desc: "Record the selected saree, seller representations, available certification, price, and return terms before purchase." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", color: "#4d403a", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related outfits */}
      <section style={{ padding: "32px 24px 8px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6841", fontWeight: 600, marginBottom: "16px" }}>
            Related sarees &amp; outfits
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            <Link href="/banarasi-silk-sarees-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Banarasi Silk Sarees</Link>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid Outfits</Link>
            <Link href="/south-indian-christian-wedding-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>South Indian Christian</Link>
            <Link href="/reception-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/how-it-works/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>How It Works</Link>
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
            { q: "How much does a Kanchipuram silk saree cost?", a: "Price depends on the represented silk and zari composition, weave, weight, design, seller, shipping, and any assessed duty. Your quote itemizes the selected saree and outside costs." },
            { q: "How do I evaluate authenticity?", a: "Ask for the exact fiber and zari composition plus any available Silk Mark documentation for the selected saree. Eligible tiers can include live review, but video alone does not authenticate material composition." },
            { q: "Can you source specific colors or designs?", a: "Yes — tell us your wedding color palette and we'll source sarees that coordinate with the bridal and groom outfits. We can also source matching blouse fabric or arrange custom blouse stitching." },
            { q: "How long does it take?", a: "We recommend allowing 6–8 weeks for Kanchipuram saree sourcing, including selection, shipping, and delivery. Start early if you need multiple sarees for family members." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "48px 24px 80px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "14px" }}>
            Source your Kanchipuram saree from the source
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Hand-woven pure silk, real zari, Silk Mark certified &mdash; sourced directly from Kanchipuram weavers and delivered to your US door.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
              Book Free Consultation
            </Link>
            <a href="https://wa.me/12153419990" style={{ fontSize: "17px", color: "#e8dfd2", textDecoration: "none" }}>
              WhatsApp: +1 (215) 341-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
