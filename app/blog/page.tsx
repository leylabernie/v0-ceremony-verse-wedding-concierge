import { SeoNav } from "@/components/seo-nav";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Indian Wedding Tips & Guides for NRI Families | CeremonyVerse",
  description: "Expert guides for NRI brides and families — how to source Indian wedding outfits from India, tariff updates, Gujarati wedding traditions, and more.",
};

const posts = [
  {
    slug: "how-much-does-bridal-lehenga-cost-india-2026",
    title: "How Much Does a Bridal Lehenga Cost in India in 2026? Real Prices for NRI Brides",
    description: "Real 2026 bridal lehenga prices from India — from budget-friendly ₹45,000 options to luxury ₹5,00,000+ pieces. What NRI brides actually pay when sourcing from India.",
    date: "June 2026",
  },
  {
    slug: "how-to-buy-sherwani-from-india-usa",
    title: "How to Buy a Sherwani from India for Your US Wedding — Complete 2026 Guide",
    description: "Step-by-step guide for NRI grooms buying a sherwani from India — what to budget, how to get the right fit, avoid scams, and handle customs & shipping to the USA.",
    date: "June 2026",
  },
  {
    slug: "indian-wedding-outfit-checklist-every-ceremony",
    title: "Indian Wedding Outfit Checklist: What Every Family Member Needs for Every Ceremony",
    description: "The complete outfit-by-ceremony checklist for NRI families — from the bride and groom to parents, siblings, and guests. 42-51 total outfits, nothing missed.",
    date: "June 2026",
  },
  {
    slug: "indian-wedding-outfit-scams-nri-brides",
    title: "10 Scams to Avoid When Buying Indian Wedding Outfits from India",
    description: "The 10 most common scams NRI brides face when buying lehengas, sherwanis, and wedding outfits from India — and exactly how to avoid each one.",
    date: "June 2026",
  },
  {
    slug: "how-to-coordinate-bridesmaid-lehengas-india-usa",
    title: "How to Coordinate Bridesmaid Lehengas from India for a US Wedding",
    description: "How to source matching bridesmaid lehengas from India — color coordination, sizing for multiple bodies, consistent quality, and group order logistics.",
    date: "June 2026",
  },
  {
    slug: "shipping-indian-wedding-outfits-usa-customs-duties",
    title: "Shipping Indian Wedding Outfits to USA: Customs, Duties & Timeline 2026",
    description: "Everything NRI families need to know about shipping Indian wedding outfits to the USA — customs duties, shipping costs, delivery timelines, insurance, and avoiding delays.",
    date: "June 2026",
  },
  {
    slug: "when-to-order-indian-wedding-outfits-nri-bride",
    title: "When Should NRI Brides Order Wedding Outfits from India? Timeline Guide",
    description: "Month-by-month timeline for NRI brides ordering wedding outfits from India — when to start, when to order, when items ship, and buffer time you need.",
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
            Indian Wedding Guides
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
