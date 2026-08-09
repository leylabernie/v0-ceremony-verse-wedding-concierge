"use client"

import { useState } from "react"
import type { PageType } from "@/app/page"

interface BlogPageProps {
  onNavigate: (page: PageType) => void
}

type Post = {
  tag: string
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  content?: string
}

const posts: Post[] = [
  {
    tag: "Bridal Guide",
    title: "How to Source Your Bridal Lehenga from India Without Flying There",
    excerpt: "Live video shopping has changed everything for NRI brides. Here's exactly how the process works — from first consultation to outfit arriving at your door.",
    date: "March 10, 2026",
    readTime: "8 min read",
    slug: "source-bridal-lehenga-from-india",
    content: `Every NRI bride faces the same dilemma: the most beautiful lehengas are in India, but you're in the US. Flying there is expensive, exhausting, and often impossible with work schedules. And ordering online feels like a gamble — you've heard the horror stories.

**The good news: live video shopping has completely changed this.**

Here's exactly how it works when you source your bridal lehenga through CeremonyVerse:

**Step 1: Your style consultation (30 minutes, free)**

We start with a call to understand your vision — colors, silhouette, embroidery style, budget, and timeline. We look at your inspiration images together. This isn't a sales call. It's a listening session.

**Step 2: We shortlist from our verified network**

Based on your brief, eligible tiers can include research and shortlisting of vendors whose item, capacity, documentation, and terms can be reviewed for the request. The shortlist identifies what has and has not been independently verified.

**Step 3: The live video shopping session**

This is where the magic happens. You join a video call — usually 60–90 minutes — and we walk you through each option in real time. You see the actual fabric draped, the embroidery up close, the color in natural light. You can ask to see it from different angles, compare two options side by side, or ask about customizations.

That specific piece — the one you approve — is reserved with your name and order number. Nobody else gets it.

**Step 4: Measurements and customization**

We send you our measurement guide. You take 15 measurements at home (we walk you through it on video if needed). Custom stitching typically takes 8–12 weeks for a bridal lehenga.

**Step 5: Quality inspection before shipping**

When included in the selected scope, available pre-shipping review can compare visible stitching, embroidery, color against the approved reference, and recorded measurements. The review cannot guarantee perfect fit, identical screen color, or resolution of every issue.

**Step 6: Delivery to your door**

The written quote identifies packaging, carrier, available insurance, shipping documents, customs responsibilities, estimated timing, and the party responsible for a claim. Carrier and customs dates remain estimates.

**The timeline you need to know**

Start 10–14 months before your wedding for a bridal lehenga. The best artisans book out quickly, and custom production takes time. If you're within 6 months, it's still possible — we'll tell you honestly what's achievable.

Ready to start? Book your free consultation at ceremonyverse.com.`
  },
  {
    tag: "Sizing Tips",
    title: "The 15 Measurements Every Indian Wedding Outfit Needs (And How to Take Them at Home)",
    excerpt: "Avoid the most common sizing mistake NRI families make — and get your measurements right the first time with our step-by-step guide.",
    date: "February 28, 2026",
    readTime: "6 min read",
    slug: "indian-wedding-outfit-measurements",
    content: `The most common reason an Indian wedding outfit doesn't fit perfectly isn't the tailor. It's the measurements.

NRI families often send incomplete measurements, measurements taken over clothing, or measurements taken without knowing the Indian tailoring conventions. The result: a lehenga blouse that won't close, a sherwani that's perfect in the chest but too short in the sleeve.

Here are the 15 measurements you need — and exactly how to take each one.

**For the bride (lehenga/saree blouse):**

1. **Bust** — measured around the fullest part of the chest, over your bra but not a padded one
2. **Under bust** — directly under the chest
3. **Waist** — the narrowest part, usually 1–2 inches above the navel
4. **Hips** — the fullest part, usually 7–9 inches below the waist
5. **Shoulder width** — across the back, from shoulder point to shoulder point
6. **Shoulder to bust** — from the shoulder seam to the center of the bust
7. **Shoulder to waist** — from the shoulder to the natural waist
8. **Sleeve length** — from the shoulder point to where you want the sleeve to end
9. **Armhole** — around the arm at the armpit

**For the lehenga skirt:**
10. **Waist** (same as above)
11. **Hip** (same as above)
12. **Length** — from the waist to the floor, wearing the heels you'll wear on the day

**For the groom (sherwani):**
13. **Chest** — around the fullest part
14. **Shoulder width** — across the back
15. **Height** — for full-length sherwani proportions

**The mistakes to avoid:**

— Never take measurements over thick clothing. Use a thin fitted top or no top.
— Don't pull the tape too tight. It should rest snugly, not compress.
— Measure twice before sending. A 1-inch error in a blouse measurement can mean the difference between a perfect fit and one that won't close.
— Height matters. Always provide your height, even for tops. Tailors use it for proportion.

**Getting it right the first time**

Eligible service tiers can include a guided measurement review before the measurements are submitted. The review helps identify visible inconsistencies, but it does not replace an in-person fitting or guarantee final fit.

If you're unsure about any measurement, just ask. It's much cheaper to get it right the first time than to alter after shipping.`
  },
  {
    tag: "Budget Guide",
    title: "What Does a Bridal Lehenga Actually Cost? A Transparent Breakdown",
    excerpt: "Outfit cost, sourcing fee, shipping, customs — we break down every line item so you know exactly what you're paying and why.",
    date: "February 14, 2026",
    readTime: "5 min read",
    slug: "bridal-lehenga-cost-breakdown",
    content: `One of the most common questions we get: "How much should I expect to pay?"

The honest answer is: it depends on the level of craftsmanship. But unlike most concierge services, we'll give you exact numbers.

**What bridal lehengas actually cost in India:**

— Budget range (machine embroidery, polyester blend): $400–$900
— Mid-range (hand embroidery, georgette/net): $900–$2,500
— Premium (heavy hand embroidery, pure silk): $2,500–$6,000
— Couture (designer name, full zardozi, pure silk): $6,000–$15,000+

The responsible way to compare options is to request written specifications and itemized quotes for the actual garments under consideration.

**Compare that to US boutiques:**

Do not assume that an India quote is automatically less expensive or equivalent to a US boutique item. Compare fabric, handwork, customization, fittings, return or remedy terms, shipping, customs, alteration allowance, and delivery risk.

**The CeremonyVerse fee:**

CeremonyVerse uses the published flat service tiers rather than a percentage claim. Depending on the selected tier, the written scope may cover:
— Vendor research and shortlisting
— Live video shopping sessions
— Quality inspection before shipping
— Measurement coordination
— Shipping support and customs documentation

**Shipping costs:**

Shipping depends on packed weight and dimensions, carrier, service level, insurance, destination, and current rates. It is quoted for the actual order rather than promised as a universal range.

**Customs and import duties:**

Indian textiles imported to the US may be assessed customs duties based on HTS classification, fiber content, construction, declared value, and current tariff rules. We provide documentation and a shipment-specific estimate.

**The complete picture:**

Compare the approved item price, published CeremonyVerse service tier, tailoring, shipping, insurance, possible customs charges, local alteration allowance, timeline, and remedy terms. CeremonyVerse does not promise a universal savings amount or equivalence between two differently specified garments.`
  },
  {
    tag: "Family Planning",
    title: "Coordinating Outfits for a Large Family: A Step-by-Step Framework",
    excerpt: "A practical way to organize colors, silhouettes, measurements, approvals, and delivery when relatives live in different places.",
    date: "January 30, 2026",
    readTime: "7 min read",
    slug: "coordinate-family-wedding-outfits",
    content: `Large-family outfit coordination becomes difficult when several ceremonies, dress codes, measurements, budgets, and delivery addresses are managed in separate message threads. The framework below helps a family create one source of truth before any order is placed.

This is an illustrative planning framework, not a CeremonyVerse client case study. CeremonyVerse package limits and any larger-group responsibilities must be confirmed in a private written scope.

**Phase 1: The outfit map (week 1)**

Before we source a single outfit, we create a complete outfit map: who is attending which ceremony, what role they play, and what the color palette and dress code is for each event. This document becomes the single source of truth — no confusion about who wears what.

**Phase 2: Measurement collection (weeks 2–3)**

Use one measurement guide and one deadline. Record who submitted each measurement, when it was reviewed, and which items still require clarification before an order is approved.

**Phase 3: Fabric and color coordination**

Not everyone wears the same fabric or silhouette — and they shouldn't. Aunties who prefer a saree get a saree. Younger cousins who want a lehenga get a lehenga. But colors and embroidery tones are coordinated so the whole family photographs beautifully together.

**Phase 4: Single shipment where possible**

When practical, compare consolidated and separate shipment options. The family should review cost, customs exposure, delivery timing, insurance, and the consequences of one delayed package before choosing.

**Phase 5: Labeling and handoff**

Label each outfit with the wearer and ceremony, and prepare a one-page handoff inventory showing what arrived, what still needs alteration, and who owns the next step.

CeremonyVerse can help organize this process only to the extent stated in the selected package or private proposal.`,
  },
  {
    tag: "Trend Report",
    title: "Top Indian Bridal Lehenga Trends for 2026 Wedding Season",
    excerpt: "From dusty rose to deep plum — the colors, embroidery styles, and silhouettes dominating this wedding season straight from India's top ateliers.",
    date: "January 15, 2026",
    readTime: "4 min read",
    slug: "bridal-lehenga-trends-2026",
    content: `Every wedding season brings a shift in what brides want. Here's what we're seeing from the workshops and ateliers we work with across India as of early 2026.

**Colors**

The red lehenga isn't going anywhere — it remains the most requested bridal color, especially for the main ceremony. But the 2026 brides are asking for richer, more complex reds: deep burgundy, terracotta-tinged red, and red with heavy gold zardozi rather than silver.

Dusty rose, blush, and champagne gold are dominant for reception lehengas — brides want something lighter for the evening event.

Jewel tones are big for the sangeet: deep emerald, sapphire blue, and plum. These photograph beautifully under reception lighting.

**Embroidery**

Zardozi (goldwork) is at its peak. Brides are choosing heavier embroidery that covers more of the skirt — the "full coverage" look rather than scattered motifs. This reads beautifully in photos.

Raw silk and tissue silk are replacing pure georgette as the fabric of choice for the lehenga skirt — they hold the embroidery weight better and have a more structured silhouette.

**Silhouettes**

The lehenga skirt is getting fuller — six-panel and eight-panel skirts with heavy inner netting are back. Brides want the dramatic swirl for their entry shots.

Blouse styles are more experimental: cold shoulder, off-shoulder, deep V-back, and cape blouses are all requested regularly.

**For the groom**

Ivory and cream sherwanis remain the dominant choice for the wedding day. But sangeet and cocktail looks are going bolder — royal blue, forest green, and deep maroon bandhgalas are popular.

The nehru collar sherwani with minimal embroidery is the clean, modern choice for grooms who want to look polished without feeling costumed.`
  },
  {
    tag: "Planning Guide",
    title: "How to Plan a Multi-Event Gujarati and Christian Wedding Wardrobe",
    excerpt: "Build one respectful wardrobe plan for multiple ceremonies, traditions, families, and dress-code needs without inventing a one-style-fits-all solution.",
    date: "January 5, 2026",
    readTime: "9 min read",
    slug: "intercultural-wedding-wardrobe-planning-guide",
    content: `A multi-event intercultural wedding may include Gujarati and Christian ceremonies with different religious settings, levels of formality, cultural expectations, and comfort needs. Start with the actual ceremony schedule and guidance from the couple and officiants rather than assuming every attendee needs traditional Indian clothing for every event.

**Build the ceremony map**

List every event, venue, dress code, and participant. Identify which outfits are required, which are optional, and where modesty, color, head-covering, footwear, or ceremonial requirements apply.

**Give each family equal clarity**

Use plain-language notes and visual examples for relatives who have not worn Indian clothing before. Explain how each item is worn, what measurements are needed, and whether local alterations may be required.

**Coordinate without making everyone identical**

A shared palette can connect the group while allowing sarees, lehengas, suits, sherwanis, bandhgalas, and Western formalwear appropriate to each person and event.

**Document approvals**

Record the approved item, wearer, measurements, color reference, price, expected timing, shipping destination, and responsible party. Do not place a group order until unanswered questions and third-party costs are visible.

This is general planning guidance, not a client case study. CeremonyVerse supports Gujarati and Hindu destination-wedding planning through the responsibilities stated in a private proposal; other traditions require the appropriate qualified cultural and religious professionals.`
  },
]

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [activePost, setActivePost] = useState<Post | null>(null)

  if (activePost) {
    return (
      <div className="bg-[var(--cv-bg)] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <button
            onClick={() => setActivePost(null)}
            className="flex items-center gap-2 text-sm mb-10 transition hover:opacity-70"
            style={{ color: "var(--cv-muted)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
            </svg>
            Back to Journal
          </button>
          <span
            className="text-xs font-medium px-3 py-1 rounded-full inline-block mb-6"
            style={{ background: "#f0ebe3", color: "var(--cv-accent)" }}
          >
            {activePost.tag}
          </span>
          <h1
            className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ color: "var(--cv-foreground)" }}
          >
            {activePost.title}
          </h1>
          <div className="flex items-center gap-4 mb-10 pb-8" style={{ borderBottom: "1px solid var(--cv-border)" }}>
            <span className="text-sm" style={{ color: "var(--cv-muted)" }}>{activePost.date}</span>
            <span style={{ color: "var(--cv-border)" }}>·</span>
            <span className="text-sm" style={{ color: "var(--cv-muted)" }}>{activePost.readTime}</span>
            <span style={{ color: "var(--cv-border)" }}>·</span>
            <span className="text-sm" style={{ color: "var(--cv-muted)" }}>By the CeremonyVerse team</span>
          </div>
          <div className="prose-style">
            {activePost.content?.split('\n\n').map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**') && !para.slice(2).includes('**')) {
                return (
                  <h2 key={i} className="font-['Cormorant_Garamond'] text-2xl font-semibold mt-10 mb-4"
                    style={{ color: "var(--cv-foreground)" }}>
                    {para.replace(/\*\*/g, '')}
                  </h2>
                )
              }
              if (para.startsWith('— ')) {
                return (
                  <div key={i} className="flex items-start gap-3 mb-2">
                    <span style={{ color: "var(--cv-accent)" }}>—</span>
                    <p className="text-base leading-relaxed" style={{ color: "#5a4a42" }}>
                      {para.slice(2).replace(/\*\*(.*?)\*\*/g, '$1')}
                    </p>
                  </div>
                )
              }
              // Bold inline text
              const parts = para.split(/\*\*(.*?)\*\*/g)
              return (
                <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "#5a4a42" }}>
                  {parts.map((part, j) =>
                    j % 2 === 1
                      ? <strong key={j} style={{ color: "var(--cv-foreground)", fontWeight: 600 }}>{part}</strong>
                      : part
                  )}
                </p>
              )
            })}
          </div>
          <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: "#f0ebe3", border: "1px solid var(--cv-border)" }}>
            <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--cv-accent)" }}>Ready to start?</p>
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold mb-3" style={{ color: "var(--cv-foreground)" }}>
              Book your free consultation
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--cv-muted)" }}>
              No commitment required. We'll review your vision, timeline, and budget.
            </p>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[var(--cv-bg)]">

      {/* HERO */}
      <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(180deg, #f0ebe3 0%, var(--cv-bg) 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--cv-accent)" }}>
            The CeremonyVerse Journal
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl font-semibold mb-6" style={{ color: "var(--cv-foreground)" }}>
            Guides, Stories & Sourcing Advice
          </h1>
          <p className="text-[var(--cv-muted)] text-lg max-w-2xl mx-auto">
            Practical guidance for sourcing Indian wedding outfits from the US — written by the CeremonyVerse team.
          </p>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white border border-[var(--cv-border)] rounded-2xl p-7 flex flex-col cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setActivePost(post)}
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
                <span className="text-xs font-medium" style={{ color: "var(--cv-accent)" }}>
                  Read article →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#f0ebe3" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold mb-4" style={{ color: "var(--cv-foreground)" }}>
            Ready to start sourcing?
          </h2>
          <p className="mb-8" style={{ color: "var(--cv-muted)" }}>
            Book a free consultation — no commitment, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Free Consultation
            </button>
            <a
              href="https://www.instagram.com/ceremonyverse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#1f1f1f", color: "#1f1f1f" }}
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
