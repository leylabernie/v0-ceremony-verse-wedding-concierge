import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer";
import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, jsonLd } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog — Indian Wedding Tips & Guides for NRI Families | CeremonyVerse",
  description: "Expert guides for NRI brides and families — how to source Indian wedding outfits from India, tariff updates, Gujarati wedding traditions, and more.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/blog",
  },
  openGraph: {
    title: "Blog — Indian Wedding Tips & Guides for NRI Families | CeremonyVerse",
    description: "Expert guides for NRI brides and families — how to source Indian wedding outfits from India, tariff updates, Gujarati wedding traditions, and more.",
    type: "website",
    url: "https://www.ceremonyverse.com/blog",
  
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  }};

const posts = [
  {
    slug: "indian-wedding-shopping-without-going-to-india",
    title: "How to Source Your Indian Wedding Outfits from India — Without Going to India",
    description: "The complete guide for NRI families: 4 ways to get Indian wedding outfits, compared honestly. Plus the step-by-step concierge process that eliminates the risk.",
    date: "April 2026",
  },
  {
    slug: "sabyasachi-alternatives-nri-brides",
    title: "Sabyasachi Alternatives: How NRI Brides Get Designer-Quality Lehengas from India for Less",
    description: "You don't need to spend $15,000 on a label. Here's how NRI brides are getting artisan-quality lehengas sourced directly from India's best craftspeople.",
    date: "April 2026",
  },
  {
    slug: "how-many-outfits-for-indian-wedding",
    title: "How Many Outfits Does an Indian Bride Need? A Ceremony-by-Ceremony Guide",
    description: "From mehndi to reception — how many outfits you actually need, broken down by tradition (Hindu, Gujarati, South Indian, Bengali, Sikh) with budget tips.",
    date: "April 2026",
  },
  {
    slug: "what-non-indian-partner-should-wear-indian-wedding",
    title: "What Should a Non-Indian Partner Wear to an Indian Wedding? A Complete Guide",
    description: "Lehenga or saree? Sherwani or suit? The honest, practical guide for non-Indian partners entering an Indian wedding — from someone who dresses intercultural couples.",
    date: "April 2026",
  },
  {
    slug: "nri-groom-outfit-guide-sherwani-from-india",
    title: "The NRI Groom's Guide to Sourcing a Sherwani from India",
    description: "Everything the groom needs to know: sherwani styles, fabrics, remote fitting, accessories, timeline, and a full cost breakdown for sourcing from India.",
    date: "April 2026",
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
  {
    slug: "punjabi-sikh-wedding-outfit-guide",
    title: "Punjabi & Sikh Wedding Outfit Guide: Every Ceremony Covered",
    description: "Complete outfit guide for Punjabi and Sikh weddings — Roka to Reception. What to wear, what to source from India, and how NRI families coordinate it all.",
    date: "April 2026",
  },
  {
    slug: "how-much-does-bridal-lehenga-from-india-cost",
    title: "How Much Does a Bridal Lehenga from India Really Cost? Real Examples",
    description: "Real cost breakdown for NRI brides: bridal lehenga prices from India including outfit, customs, shipping, and concierge fees. No hidden costs.",
    date: "April 2026",
  },
];

export default function BlogIndexPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <Script id="breadcrumb-schema-blog" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
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
    <SeoFooter />
    </main>
  );
}