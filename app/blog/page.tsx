import { SeoNav } from "@/components/seo-nav";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Indian Wedding Tips & Guides for NRI Families | CeremonyVerse",
  description: "Expert guides for NRI brides and families — how to source Indian wedding outfits from India, tariff updates, Gujarati wedding traditions, and more.",
};

const posts = [
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
          <p style={{ color: "#c7b28a", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · Resources
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.2, margin: "0 0 1rem" }}>
            Indian Wedding Guides
          </h1>
          <p style={{ color: "#c7b28a", fontSize: "0.95rem", lineHeight: 1.7 }}>
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
                <p style={{ fontSize: "0.78rem", color: "#c7b28a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {post.date}
                </p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#2f2f2f", lineHeight: 1.3, marginBottom: "0.75rem" }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: "0.95rem", color: "#6f6a63", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {post.description}
                </p>
                <span style={{ fontSize: "0.85rem", color: "#c7b28a", fontWeight: 600 }}>
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
