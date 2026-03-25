"use client"

import type { PageType } from "@/app/page"

interface BlogPageProps {
  onNavigate: (page: PageType) => void
}

const posts = [
  {
    tag: "Bridal Guide",
    title: "How to Source Your Bridal Lehenga from India Without Flying There",
    excerpt: "Live video shopping has changed everything for NRI brides. Here's exactly how the process works — from first consultation to outfit arriving at your door.",
    date: "March 10, 2026",
    readTime: "8 min read",
  },
  {
    tag: "Sizing Tips",
    title: "The 15 Measurements Every Indian Wedding Outfit Needs (And How to Take Them at Home)",
    excerpt: "Avoid the most common sizing mistake NRI families make — and get your measurements right the first time with our step-by-step guide.",
    date: "February 28, 2026",
    readTime: "6 min read",
  },
  {
    tag: "Budget Guide",
    title: "What Does a Bridal Lehenga Actually Cost? A Transparent Breakdown",
    excerpt: "Outfit cost, sourcing fee, shipping, customs — we break down every line item so you know exactly what you're paying and why.",
    date: "February 14, 2026",
    readTime: "5 min read",
  },
  {
    tag: "Family Planning",
    title: "Coordinating Outfits for 20+ Family Members: A Step-by-Step Playbook",
    excerpt: "Colors, fabrics, silhouettes, sizing across three states — here's how we manage large family outfit coordination without anyone wearing the wrong thing.",
    date: "January 30, 2026",
    readTime: "7 min read",
  },
  {
    tag: "Trend Report",
    title: "Top Indian Bridal Lehenga Trends for 2026 Wedding Season",
    excerpt: "From dusty rose to deep plum — the colors, embroidery styles, and silhouettes dominating this wedding season straight from India's top ateliers.",
    date: "January 15, 2026",
    readTime: "4 min read",
  },
  {
    tag: "Real Wedding",
    title: "Kaval & April's Wedding: 14 Outfits Sourced Across Three Ceremonies",
    excerpt: "An intercultural wedding in Philadelphia — how we coordinated a Sikh ceremony, a Hindu ceremony, and a Western reception for 14 members of the wedding party.",
    date: "January 5, 2026",
    readTime: "9 min read",
  },
]

export function BlogPage({ onNavigate }: BlogPageProps) {
  return (
    <div className="bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(180deg, #f0ebe3 0%, var(--cv-bg) 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--cv-accent)" }}>
            The CeremonyVerse Journal
          </p>
          <h1 className="text-5xl font-semibold mb-6">
            Guides, Stories & Sourcing Advice
          </h1>
          <p className="text-[var(--cv-muted)] text-lg max-w-2xl mx-auto">
            Everything you need to know about sourcing Indian wedding outfits from the US — written by Bhamini and the CeremonyVerse team.
          </p>
        </div>
      </section>

      {/* COMING SOON BANNER */}
      <section className="py-6 px-6" style={{ background: "var(--cv-accent)" }}>
        <p className="text-center text-white text-sm font-medium tracking-wide">
          Full articles launching soon — follow us on{" "}
          <a
            href="https://www.instagram.com/ceremonyverse"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 font-semibold"
          >
            Instagram @ceremonyverse
          </a>{" "}
          for updates
        </p>
      </section>

      {/* POSTS GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white border border-[var(--cv-border)] rounded-2xl p-7 flex flex-col"
              style={{ opacity: 0.85 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ background: "#f0ebe3", color: "var(--cv-accent)" }}
                >
                  {post.tag}
                </span>
                <span className="text-xs text-[var(--cv-muted)]">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-snug" style={{ color: "var(--cv-foreground)" }}>
                {post.title}
              </h3>
              <p className="text-sm text-[var(--cv-muted)] leading-relaxed flex-1 mb-5">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--cv-border)]">
                <span className="text-xs text-[var(--cv-muted)]">{post.date}</span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--cv-accent)" }}
                >
                  Notify me →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NOTIFY CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#f0ebe3" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Get Notified When We Publish</h2>
          <p className="text-[var(--cv-muted)] mb-8">
            Follow us on Instagram or WhatsApp us — we'll let you know when new guides go live.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/ceremonyverse"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow on Instagram
            </a>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20Please%20notify%20me%20when%20new%20blog%20posts%20go%20live."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Me Updates
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
