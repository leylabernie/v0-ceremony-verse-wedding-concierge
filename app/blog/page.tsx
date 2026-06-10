import { SeoNav } from "@/components/seo-nav";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Indian Wedding Shopping Guides for NRI Families | CeremonyVerse",
  description: "Expert guides for NRI brides and families — how to buy lehengas from India without getting scammed, shipping to USA, customs duties, outfit checklists, and timelines.",
  keywords: [
    "NRI wedding shopping guides",
    "how to buy lehenga from india",
    "indian wedding outfit checklist",
    "ship wedding outfits india to usa",
    "NRI bride timeline",
  ],
};

const posts = [
  {
    slug: "how-much-does-bridal-lehenga-cost-india-2026",
    title: "How Much Does a Bridal Lehenga Cost in India (Including Shipping to USA)? 2026 Prices",
    description: "Real 2026 bridal lehenga prices from India — budget to high-end with USD conversion. Total cost breakdown including customs, shipping, and hidden costs NRI brides forget.",
    date: "June 2026",
  },
  {
    slug: "how-to-buy-sherwani-from-india-usa",
    title: "How to Buy a Sherwani from India for a US Wedding: Complete Guide with Prices & Sizing",
    description: "Step-by-step guide for NRI grooms — sherwani prices from India, how to take measurements at home, scam warnings, and shipping to USA.",
    date: "June 2026",
  },
  {
    slug: "indian-wedding-outfit-checklist-every-ceremony",
    title: "Indian Wedding Outfit Checklist for NRI Families: Who Needs What (42-51 Outfits)",
    description: "The complete outfit-by-ceremony checklist for NRI families — from the bride and groom to parents, siblings, and guests. Total cost comparison: India vs. US stores.",
    date: "June 2026",
  },
  {
    slug: "indian-wedding-outfit-scams-nri-brides",
    title: "How to Buy Lehengas from India Without Getting Scammed: 10 Red Flags for NRI Brides",
    description: "How to buy a lehenga from India safely — 10 scams NRI brides must avoid, how to verify sellers before sending money, and the safest way to buy as an NRI bride.",
    date: "June 2026",
  },
  {
    slug: "how-to-coordinate-bridesmaid-lehengas-india-usa",
    title: "How to Order Matching Bridesmaid Lehengas from India for a US Wedding",
    description: "How to get consistent colors when ordering multiple lehengas from India — sizing for different bodies, bridesmaid prices per person, and group order logistics.",
    date: "June 2026",
  },
  {
    slug: "shipping-indian-wedding-outfits-usa-customs-duties",
    title: "Shipping Wedding Outfits from India to USA: Customs, Duties & Delivery Timeline",
    description: "How much are US customs duties on Indian wedding lehengas? How long does shipping take? Everything NRI families need to know about delivery from India.",
    date: "June 2026",
  },
  {
    slug: "when-to-order-indian-wedding-outfits-nri-bride",
    title: "When to Order Indian Wedding Outfits from India: NRI Timeline (So Nothing Arrives Late)",
    description: "Month-by-month timeline for NRI brides — minimum lead times for each outfit type, what to do if you are behind schedule, and backup plans.",
    date: "June 2026",
  },
  {
    slug: "nri-bride-lehenga-sourcing-new-jersey-story",
    title: "NRI Bride Story: Sourcing a Bridal Lehenga from India to New Jersey",
    description: "Real story of an NRI bride in New Jersey who sourced her bridal lehenga from India — the process, the challenges, the cost, and how it turned out better than any US boutique option.",
    date: "June 2026",
  },
  {
    slug: "south-indian-christian-wedding-outfit-guide",
    title: "South Indian Christian Wedding Outfit Guide: What Every Family Member Wears",
    description: "Complete outfit guide for South Indian Christian weddings — Kerala Christian, Tamil Christian, bride, bridesmaids, and family. For NRI families in the USA sourcing from India.",
    date: "March 2026",
  },
  {
    slug: "nri-wedding-planning-timeline",
    title: "The NRI Wedding Planning Timeline: When to Order Everything from India",
    description: "Month-by-month timeline for NRI brides sourcing Indian wedding outfits and items from India. Know exactly when to order your lehenga, bridesmaid outfits, jewelry, and more.",
    date: "March 2026",
  },
  {
    slug: "how-to-buy-bridal-lehenga-from-india-usa",
    title: "How to Buy a Bridal Lehenga from India When You Live in the USA",
    description: "Step-by-step guide for NRI brides — from finding a trustworthy sourcing partner to getting your lehenga through customs and to your doorstep.",
    date: "March 2026",
  },
  {
    slug: "gujarati-wedding-outfit-guide",
    title: "Gujarati Wedding Outfit Guide: What to Wear for Every Ceremony",
    description: "Complete outfit guide for Gujarati weddings — Garba, Pithi, Mehndi, Mameru, Saptapadi, and Reception. For NRI Gujarati brides and families in the USA.",
    date: "March 2026",
  },
  {
    slug: "us-tariffs-indian-wedding-outfits-2026",
    title: "US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026",
    description: "The tariff landscape changed multiple times in 2025. Here is what actually applies to your lehenga — and how to plan around it.",
    date: "March 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#a69260", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · Resources
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.2, margin: "0 0 1rem" }}>
            Indian Wedding Shopping Guides
          </h1>
          <p style={{ color: "#a69260", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Expert advice for NRI brides and families sourcing Indian wedding outfits from the USA.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "8px", padding: "2rem", transition: "box-shadow 0.2s" }}>
                <p style={{ fontSize: "0.78rem", color: "#a69260", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {post.date}
                </p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#2f2f2f", lineHeight: 1.3, marginBottom: "0.75rem" }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: "0.95rem", color: "#6f6a63", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {post.description}
                </p>
                <span style={{ fontSize: "0.85rem", color: "#a69260", fontWeight: 600 }}>
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
