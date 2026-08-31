import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  path: "/blog/",
  title: "Indian Destination Wedding & Shopping Guides",
  description: "Practical destination-wedding and India-sourcing guides for families across the United States and Canada, with clear service-scope boundaries."
});

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Blog \u2014 Indian Wedding Shopping Guides",
  description: "Practical guides for Gujarati and Hindu destination weddings in Mexico, plus documented India-sourcing guidance for families across the United States and Canada.",
  url: "/blog/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
]);

const posts = [
  {
    slug: "how-to-plan-gujarati-hindu-destination-wedding-mexico",
    title: "How to Plan a Gujarati or Hindu Destination Wedding in Mexico",
    description: "A practical guide to guest documents, resort proposals, cultural decisions, budgets, family responsibilities, and on-site execution for a wedding in Mexico.",
    date: "August 2026",
  },
  {
    slug: "ordering-indian-wedding-outfits-usa-canada",
    title: "Ordering Indian Wedding Outfits from India to the USA or Canada",
    description: "Plan vendor evidence, measurements, written approvals, shipping, duties, taxes, brokerage, tracking, and local alterations for U.S. or Canadian delivery.",
    date: "August 2026",
  },
  {
    slug: "how-to-take-lehenga-measurements-at-home",
    title: "How to Take Lehenga Measurements at Home: A Step-by-Step Guide for NRI Brides",
    description: "A step-by-step guide to documenting blouse, skirt, and dupatta measurements while preserving room for a local fitting and alterations.",
    date: "July 2026",
  },
  {
    slug: "how-to-choose-indian-wedding-jewelry-usa",
    title: "How to Choose Indian Wedding Jewelry in the USA: An NRI Bride's Comparison Guide",
    description: "Kundan vs. Polki vs. Temple vs. Meenakari—how to compare material, construction, hallmark, seller, cost, shipping, and remedy information.",
    date: "July 2026",
  },
  {
    slug: "how-to-buy-authentic-kanchipuram-silk-sarees-online-usa",
    title: "How to Buy Authentic Kanchipuram Silk Sarees Online: An NRI Bride's Guide",
    description: "How to request item-specific fiber, zari, origin, construction, certification, seller, cost, and remedy evidence for a Kanchipuram saree claim.",
    date: "June 2026",
  },
  {
    slug: "custom-sherwani-sizing-guide-india-usa",
    title: "Sizing and Sourcing a Custom Men's Sherwani from India Without Leaving the US",
    description: "Five important sherwani measurements, fabric-selection guidance, and practical steps to reduce remote custom-fit risk.",
    date: "June 2026",
  },
  {
    slug: "indian-wedding-return-gifts-bulk-usa",
    title: "How to Source and Ship Unique Indian Wedding Return Gifts to the USA in Bulk",
    description: "Compare Indian wedding favor options, quantities, packaging, shipping, and import costs before approving a bulk order for the United States or Canada.",
    date: "June 2026",
  },
  {
    slug: "how-much-does-bridal-lehenga-cost-india-2026",
    title: "How Much Does a Bridal Lehenga from India Cost? A Complete Quote Guide",
    description: "Compare fabric, handwork, customization, service fees, shipping, customs estimates, and alteration allowances using current written quotes.",
    date: "June 2026",
  },
  {
    slug: "indian-wedding-outfit-checklist-every-ceremony",
    title: "Indian Wedding Outfit Checklist for NRI Families: Who Needs What",
    description: "Build a ceremony-by-ceremony list for the couple, parents, wedding party, and family without assuming one outfit count or universal budget.",
    date: "June 2026",
  },
  {
    slug: "indian-wedding-outfit-scams-nri-brides",
    title: "How to Buy Lehengas from India Without Getting Scammed: 10 Red Flags for NRI Brides",
    description: "Review ten common remote-order risks and the seller, item, payment, approval, shipping, and remedy evidence to request before purchasing.",
    date: "June 2026",
  },
  {
    slug: "how-to-coordinate-bridesmaid-lehengas-india-usa",
    title: "How to Order Matching Bridesmaid Lehengas from India for a US Wedding",
    description: "Plan written color references, size-specific measurements, approvals, group-order logistics, and allowances for handmade variation.",
    date: "June 2026",
  },
  {
    slug: "shipping-indian-wedding-outfits-usa-customs-duties",
    title: "Shipping Wedding Outfits from India to USA: Customs, Duties & Delivery Timeline",
    description: "Plan classification, declared value, duties, carrier charges, customs review, tracking, and delivery estimates for an India-to-USA shipment.",
    date: "June 2026",
  },
  {
    slug: "when-to-order-indian-wedding-outfits-nri-bride",
    title: "When to Order Indian Wedding Outfits from India: NRI Planning Timeline",
    description: "Work backward from the first local fitting and event date while allowing for vendor estimates, approvals, production, shipping, customs, alterations, and backup options.",
    date: "June 2026",
  },
  {
    slug: "nri-bride-lehenga-sourcing-new-jersey-story",
    title: "Bridal Lehenga Sourcing Scenario for New Jersey Brides",
    description: "An explicitly illustrative planning scenario for comparing an India-sourced bridal lehenga with New Jersey boutique options.",
    date: "June 2026",
  },
  {
    slug: "nri-wedding-planning-timeline",
    title: "The NRI Wedding Planning Timeline: When to Order Everything from India",
    description: "A planning framework for recording item requirements, current vendor estimates, approvals, shipping responsibilities, and fitting buffers.",
    date: "March 2026",
  },
  {
    slug: "gujarati-wedding-outfit-guide",
    title: "Gujarati Wedding Outfit Guide: What to Wear for Every Ceremony",
    description: "A practical ceremony-by-ceremony wardrobe guide for Gujarati brides, grooms, and families, with family-specific traditions and preferences confirmed before sourcing.",
    date: "March 2026",
  },
  {
    slug: "south-indian-christian-wedding-outfit-guide",
    title: "South Indian Christian Wedding Outfit Planning Guide",
    description: "A family- and church-approved framework for building ceremony outfits, measurements, vendor records, delivery buffers, and local alteration plans without assuming one universal dress code.",
    date: "Updated August 2026",
  },
  {
    slug: "us-tariffs-indian-wedding-outfits-2026",
    title: "US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026",
    description: "The tariff landscape changed multiple times in 2025. Here is what actually applies to your lehenga — and how to plan around it.",
    date: "March 2026",
  },
];

const destinationPostSlugs = new Set([
  "how-to-plan-gujarati-hindu-destination-wedding-mexico",
])

const postGroups = [
  {
    id: "destination-planning-guides",
    label: "Destination planning",
    description: "Mexico, Gujarati and Hindu planning, room blocks, budgets, and family responsibilities.",
    posts: posts.filter((post) => destinationPostSlugs.has(post.slug)),
  },
  {
    id: "india-shopping-guides",
    label: "India shopping",
    description: "Outfits, measurements, vendor evidence, shipping, customs, fit, jewelry, gifts, and group coordination.",
    posts: posts.filter((post) => !destinationPostSlugs.has(post.slug)),
  },
]

export default function BlogIndexPage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · Resources
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.2, margin: "0 0 1rem" }}>
            Indian Destination Wedding &amp; Shopping Guides
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Practical destination-wedding and India-sourcing guidance, with each page&apos;s service boundaries stated clearly.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem 1.5rem 0" }}>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#destination-planning-guides" style={{ border: "1px solid #7a6841", borderRadius: "999px", padding: "10px 18px", color: "#7a6841", fontWeight: 600, textDecoration: "none" }}>Destination planning guides</a>
          <a href="#india-shopping-guides" style={{ border: "1px solid #7a6841", borderRadius: "999px", padding: "10px 18px", color: "#7a6841", fontWeight: 600, textDecoration: "none" }}>India shopping guides</a>
          <Link href="/destinations/" style={{ background: "#7a6841", borderRadius: "999px", padding: "10px 18px", color: "#fff", fontWeight: 600, textDecoration: "none" }}>Compare destinations</Link>
        </div>
      </div>

      {/* Posts */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        {postGroups.map((group) => (
          <section key={group.id} id={group.id} style={{ marginBottom: "4rem", scrollMarginTop: "7rem" }}>
            <p style={{ color: "#7a6841", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Guide cluster</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.2rem", fontWeight: 600, color: "#2f2f2f", marginBottom: "0.5rem" }}>{group.label}</h2>
            <p style={{ color: "#4d403a", lineHeight: 1.7, marginBottom: "2rem" }}>{group.description}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {group.posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "8px", padding: "2rem", transition: "box-shadow 0.2s" }}>
                <p style={{ fontSize: "0.95rem", color: "#7a6841", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {post.date}
                </p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#2f2f2f", lineHeight: 1.3, marginBottom: "0.75rem" }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#4d403a", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {post.description}
                </p>
                <span style={{ fontSize: "0.95rem", color: "#7a6841", fontWeight: 600 }}>
                  Read more →
                </span>
              </div>
            </Link>
          ))}
            </div>
          </section>
        ))}
        </div>

      {/* CONVERSION CTA — after every 5 posts and at bottom */}
      {posts.length > 5 && (
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ background: "#1f1f1f", borderRadius: "12px", padding: "2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "0.75rem", lineHeight: 1.25 }}>
              Ready to source your wedding outfits from India?
            </p>
            <p style={{ fontSize: "0.95rem", color: "#e8dfd2", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              Request a free 30-minute consultation. We&apos;ll review your vision, timeline, known estimates, and budget, then identify the in-scope decisions and next actions.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#7a6841",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Schedule a Free 30-Minute Consultation
              </Link>
              <a
                href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "transparent",
                  color: "#f8f6f2",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid #7a6841",
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
          <p style={{ fontSize: "1rem", fontWeight: 600, color: "#2f2f2f", marginBottom: "0.5rem" }}>
            Not sure where to start?
          </p>
          <p style={{ fontSize: "0.9rem", color: "#4d403a", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            These guides are planning resources for families across the United States and Canada. When you&apos;re ready to move from reading to a documented service scope, we&apos;re here.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#1f1f1f",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "999px",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get Started →
            </Link>
            <Link
              href="/how-it-works/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#7a6841",
                padding: "12px 28px",
                borderRadius: "999px",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid #e6dfd5",
              }}
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
