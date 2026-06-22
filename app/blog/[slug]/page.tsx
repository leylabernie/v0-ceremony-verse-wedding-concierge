import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | CeremonyVerse`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://www.ceremonyverse.com/blog/${post.slug}/`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#a69260", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · {post.date}
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#2f2f2f" }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Lead-First CTA */}
        <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "2rem", marginTop: "2.5rem" }}>
          <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
            Want to avoid wedding shopping surprises?
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
            <strong>Download our free India Sourcing Price Guide</strong> — real 2026 price ranges for lehengas, sherwanis, and family outfits.
          </p>
          <Link href="/free-guides/" style={{ display: "inline-block", background: "#2f2f2f", color: "#a69260", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>
            Get the Free Price Guide →
          </Link>
        </div>
      </article>
    </main>
  );
}
