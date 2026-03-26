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

Based on your brief, we identify 3–5 artisan workshops and designers across India who work in your style and budget range. We've personally visited every one of them. We know their quality, their turnaround times, and their communication styles.

**Step 3: The live video shopping session**

This is where the magic happens. You join a video call — usually 60–90 minutes — and we walk you through each option in real time. You see the actual fabric draped, the embroidery up close, the color in natural light. You can ask to see it from different angles, compare two options side by side, or ask about customizations.

That specific piece — the one you approve — is reserved with your name and order number. Nobody else gets it.

**Step 4: Measurements and customization**

We send you our measurement guide. You take 15 measurements at home (we walk you through it on video if needed). Custom stitching typically takes 8–12 weeks for a bridal lehenga.

**Step 5: Quality inspection before shipping**

Before your outfit ships, we do a final inspection: stitching quality, embroidery match, color accuracy, and fit based on your measurements. If anything doesn't match what you approved, we resolve it before it leaves India.

**Step 6: Delivery to your door**

Your lehenga arrives carefully packaged, with all customs documentation handled. Most US clients receive their orders within 3–5 business days of shipping.

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

At CeremonyVerse, we walk every client through their measurements on a video call before submitting to the tailor. We've caught errors that would have ruined the fit — and that 20-minute call has saved countless alterations.

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

For most of our clients — US-based NRI brides who want authentic quality without overpaying — the $1,500–$4,000 range covers a genuinely beautiful, heavily embroidered bridal lehenga.

**Compare that to US boutiques:**

The same quality lehenga in a US South Asian boutique typically runs $4,000–$10,000. Boutiques have high overhead — retail space, staff, import costs, and significant markup. You're paying for the convenience of walking in, which is real, but the value gap is significant.

**The CeremonyVerse fee:**

Our sourcing fee is 15–20% of the outfit cost, depending on the service tier. This covers:
— Vendor research and shortlisting
— Live video shopping sessions
— Quality inspection before shipping
— Measurement coordination
— Shipping support and customs documentation

On a $2,000 lehenga, that's $300–$400 — typically still significantly less than what a US boutique charges for the same piece.

**Shipping costs:**

International shipping from India to the US typically runs $80–$200 depending on the size and weight of the shipment. A full wedding party order (10+ outfits) can be shipped together to reduce per-item cost.

**Customs and import duties:**

Indian textiles imported to the US are subject to customs duty, typically 10–27% depending on the fabric composition and declared value. We provide accurate documentation to ensure correct customs processing.

**The complete picture:**

For a bridal lehenga that would cost $5,000 in a US boutique, a typical CeremonyVerse order might look like:
— Outfit cost: $2,200
— Sourcing fee (18%): $396
— Shipping: $120
— Estimated customs: $264
— **Total: $2,980**

That's a real saving of over $2,000 on a single outfit — and you saw every detail before it shipped.`
  },
  {
    tag: "Family Planning",
    title: "Coordinating Outfits for 20+ Family Members: A Step-by-Step Playbook",
    excerpt: "Colors, fabrics, silhouettes, sizing across three states — here's how we manage large family outfit coordination without anyone wearing the wrong thing.",
    date: "January 30, 2026",
    readTime: "7 min read",
    slug: "coordinate-family-wedding-outfits",
    content: `When Dhan and Christina came to us, they had 22 family members who needed outfits for three ceremonies across two days. The family was spread across four states. Nobody had the same measurements. Half had never worn Indian clothes before.

Here's the exact system we use to make this work.

**Phase 1: The outfit map (week 1)**

Before we source a single outfit, we create a complete outfit map: who is attending which ceremony, what role they play, and what the color palette and dress code is for each event. This document becomes the single source of truth — no confusion about who wears what.

**Phase 2: Measurement collection (weeks 2–3)**

We send each family member a simple measurement guide with photos showing exactly how to take each measurement. We set a firm deadline. For anyone unsure, we offer a 15-minute video call to walk them through it. We follow up. We chase. We don't ship until every measurement is confirmed.

**Phase 3: Fabric and color coordination**

Not everyone wears the same fabric or silhouette — and they shouldn't. Aunties who prefer a saree get a saree. Younger cousins who want a lehenga get a lehenga. But colors and embroidery tones are coordinated so the whole family photographs beautifully together.

**Phase 4: Single shipment where possible**

Whenever the timeline allows, we consolidate to a single large shipment. This reduces shipping cost, simplifies customs, and means everything arrives at once rather than in a confusing trickle.

**Phase 5: Labeling and handoff**

Every outfit is labeled with the family member's name and the ceremony it's for. We provide a one-page handoff document listing what's in the box and who it belongs to.

The result: Dhan and Christina's family arrived at their wedding with every outfit accounted for, every fit correct, and zero last-minute panics.

Large family coordination is what CeremonyVerse does best. Reach out to start planning yours.`,
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
    tag: "Real Wedding",
    title: "Kaval & April's Wedding: 14 Outfits Sourced Across Three Ceremonies",
    excerpt: "A 4-day Gujarati and South Indian Christian wedding in Philadelphia — 14 bridesmaids, 14 groomsmen, bridal and reception lehenga, full family, pet outfits, ceremonial items, return gifts, and welcome bags. All of it.",
    date: "January 5, 2026",
    readTime: "9 min read",
    slug: "kaval-april-wedding-story",
    content: `Kaval messaged us in March, ten months before his wedding. He and April were planning a 4-day Gujarati and South Indian Christian wedding in Philadelphia — and they needed everything: bridal lehenga, reception lehenga, 14 bridesmaids, 14 groomsmen, full family outfits, their dog's outfit, ceremonial items, return gifts, sweets, and welcome bags.

April had never worn Indian clothes. Kaval's family was split between New Jersey and California. April's family was from Ohio and had no reference point for Indian dress codes.

14 people needed outfits. Here's how we did it.

**The brief**

Kaval wanted coordinated outfits across all four days — different color palettes for each ceremony. April needed a bridal lehenga and a separate reception lehenga. 14 bridesmaids and 14 groomsmen needed coordinated sets. Both families needed outfits. Their small dog needed a wedding outfit. And the non-outfit items — ceremonial pieces, return gifts, sweets, welcome bags — all needed to be sourced and shipped.

**The outfit map**

We built a detailed outfit map: all 14 people, all 3 ceremonies, all dress codes. We shared it with both families via Google Sheet so everyone could see what they were wearing and when.

**April's fittings**

April had never taken Indian measurements before. We did a 30-minute measurement call with her — she laughed her way through it and got every measurement right the first time. Her Anand Karaj lengha was a soft blush pink with ivory embroidery. Her Hindu ceremony lehenga was deep red, heavily embroidered. Both fit perfectly.

**The groomsmen**

Kaval's 5 groomsmen were across three states. We sent them all the measurement guide, set a three-week deadline, and did video calls with two of them who were uncertain. All five sherwanis arrived two weeks before the wedding.

**What Kaval said afterward**

"We had no idea where to start with a 4-day Gujarati and South Indian Christian wedding. CeremonyVerse dressed literally everyone — including our dog. The live video sessions made it feel like we were right there in the market."

If you're planning an intercultural wedding and don't know where to begin, this is exactly what we're here for.`
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
            <span className="text-sm" style={{ color: "var(--cv-muted)" }}>By Bhamini, CeremonyVerse</span>
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
              style={{ background: "#c7b28a", color: "#fff" }}
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
            Everything you need to know about sourcing Indian wedding outfits from the US — written by Bhamini and the CeremonyVerse team.
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
              style={{ background: "#c7b28a", color: "#fff" }}
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
