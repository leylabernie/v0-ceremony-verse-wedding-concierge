import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer";
import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, buildBlogPostingSchema, jsonLd } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Indian Wedding Outfit Timeline — Exactly When to Order Every Outfit for Your NRI Wedding | CeremonyVerse",
  description: "Month-by-month timeline for ordering every outfit for your Indian wedding — bridal lehenga, groom sherwani, bridesmaid outfits, family outfits, and jewelry. What happens if you're late, and what rush orders really cost.",
  keywords: "indian wedding outfit timeline, when to order lehenga, NRI wedding planning timeline, indian wedding outfit ordering guide, when to order sherwani, bridal outfit timeline india, indian wedding shopping schedule",
  alternates: {
    canonical: "https://www.ceremonyverse.com/blog/indian-wedding-outfit-timeline-when-to-order",
    languages: {
      "en-US": "https://www.ceremonyverse.com/blog/indian-wedding-outfit-timeline-when-to-order",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/blog/indian-wedding-outfit-timeline-when-to-order",
    },
  },
  openGraph: {
    title: "Indian Wedding Outfit Timeline — Exactly When to Order Every Outfit for Your NRI Wedding",
    description: "Month-by-month timeline for ordering every outfit for your Indian wedding — bridal lehenga, groom sherwani, bridesmaid outfits, family outfits, and jewelry. What happens if you're late, and what rush orders really cost.",
    type: "article",
    url: "https://www.ceremonyverse.com/blog/indian-wedding-outfit-timeline-when-to-order",
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Outfit Timeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ceremonyverse",
    title: "Indian Wedding Outfit Timeline — Exactly When to Order Every Outfit for Your NRI Wedding",
    description: "Month-by-month timeline for ordering every outfit for your Indian wedding — bridal lehenga, groom sherwani, bridesmaid outfits, family outfits, and jewelry. What happens if you're late, and what rush orders really cost.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
};

export default function IndianWeddingOutfitTimelineBlogPost() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Indian Wedding Outfit Timeline", path: "/blog/indian-wedding-outfit-timeline-when-to-order" },
  ]);

  const blogSchema = buildBlogPostingSchema({
    title: "Indian Wedding Outfit Timeline — Exactly When to Order Every Outfit for Your NRI Wedding",
    description: "Month-by-month timeline for ordering every outfit for your Indian wedding — bridal lehenga, groom sherwani, bridesmaid outfits, family outfits, and jewelry. What happens if you're late, and what rush orders really cost.",
    path: "/blog/indian-wedding-outfit-timeline-when-to-order",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    image: "/images/hero-lehenga.jpg",
    keywords: ["indian wedding outfit timeline", "when to order lehenga", "NRI wedding planning timeline", "indian wedding outfit ordering guide", "when to order sherwani"],
  });

  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <Script id="breadcrumb-schema-outfit-timeline" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="blog-schema-outfit-timeline" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogSchema) }} />
      <SeoNav />
      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#c7b28a", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · May 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            Indian Wedding Outfit Timeline — Exactly When to Order Every Outfit for Your NRI Wedding
          </h1>
          <p style={{ color: "#c7b28a", fontSize: "0.95rem", lineHeight: 1.7 }}>
            The month-by-month schedule for ordering every outfit — bridal lehenga, groom sherwani, bridesmaid sets, family outfits, and jewelry — with real timelines, real costs, and what happens when you run out of time.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            Here is a number that surprises almost every NRI bride: the average Indian wedding in the US requires 12 to 18 separate outfit orders across 4 to 8 events. Your bridal lehenga. The groom&rsquo;s sherwani. Two to four bridesmaid outfits per bridesmaid. Your parents&rsquo; outfits for three different ceremonies. The in-laws&rsquo; outfits. The reception dress. The mehendi outfit. The haldi outfit. And on, and on.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            When you are planning from the US, the stakes are higher because every item involves international shipping, customs clearance, and the real possibility of delays. A lehenga that arrives three days late from a local boutique is an inconvenience. A lehenga that arrives three days late from India is a crisis. The only defense against this chaos is a timeline — a clear, specific, month-by-month schedule that tells you exactly what to order and when.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            This guide gives you that timeline. We have built it from hundreds of NRI weddings, and it accounts for the real lead times of Indian artisans, the real shipping windows for international delivery, and the real buffer you need for alterations, exchanges, and the unexpected. Follow this timeline and you will not be the bride texting her concierge in a panic two weeks before the wedding.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            10 to 12 Months Before: Research and Budget
          </h2>
          <p>
            This is the dreaming phase — but it needs to be productive dreaming. Ten to twelve months out, you should be doing three things: building your outfit budget, creating a full outfit list for every event, and beginning your research on style direction. Sit down with your partner and your families and list every single event that requires outfits. For most NRI weddings, this includes the mehendi, haldi, sangeet, ceremony, reception, and often a post-wedding brunch or pooja. Each event may require outfits for the couple, both sets of parents, siblings, and the bridal party. Write it all down.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Build your budget now, before you fall in love with anything. A realistic total outfit budget for an NRI wedding in 2026 runs between $8,000 and $35,000, depending on the number of events, the number of people you are outfitting, and whether you are investing in heritage pieces or choosing more affordable options. As a rough allocation: the bridal lehenga typically consumes 25-35% of the total outfit budget, the groom&rsquo;s sherwani takes 10-15%, bridesmaid outfits take 15-25%, and family outfits take the remaining 25-35%. These are guidelines, not rules — but they help you set expectations before you start shopping.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Start creating Pinterest boards, saving Instagram posts, and building a visual mood board for each event. This research phase matters because it gives your <Link href="/" style={{ color: "#c7b28a" }}>sourcing partner</Link> or family shoppers in India a clear sense of your aesthetic before they start looking. Vague requests (&ldquo;something pretty and traditional&rdquo;) lead to mismatched expectations. Specific references (&ldquo;deep maroon kundan lehenga with a velvet border, similar to this Sabyasachi piece&rdquo;) get results.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            8 to 10 Months Before: Place the Bridal Lehenga Order
          </h2>
          <p>
            The bridal lehenga is the single most important outfit order, and it needs the longest lead time. Custom bridal lehengas from India take 8 to 16 weeks for production, depending on the embroidery technique. Hand-embroidered zardozi or aari work can take 12 to 16 weeks. Machine-assisted embroidery with hand-finishing takes 6 to 10 weeks. Add 3 to 4 weeks for international shipping, 1 to 2 weeks for customs clearance, and 2 to 4 weeks for local alterations — and you need the lehenga in your hands at least 6 weeks before the wedding for peace of mind.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Working backwards from a wedding date, you need to place your bridal lehenga order 8 to 10 months before the wedding for a custom piece. If you are buying a ready-made lehenga that only needs sizing adjustments, you can compress this to 4 to 6 months — but you are limiting your options significantly. The best artisans and the most unique pieces require advance booking. For more details on this process, see our complete <Link href="/blog/how-to-buy-bridal-lehenga-from-india-usa" style={{ color: "#c7b28a" }}>guide to buying a bridal lehenga from India</Link>.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            At this stage, also place orders for any custom jewelry that needs to be made — particularly polki or temple jewelry, which has similar 8-to-12-week production timelines. Read our <Link href="/blog/indian-wedding-jewelry-guide-nri-brides" style={{ color: "#c7b28a" }}>Indian Wedding Jewelry Guide</Link> for detailed timing and pricing on bridal jewelry.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            6 to 8 Months Before: Groom&rsquo;s Sherwani and Bridesmaid Outfits
          </h2>
          <p>
            Six to eight months before the wedding is the right window to order the groom&rsquo;s sherwani and the bridesmaid outfits. Custom sherwanis from India take 6 to 10 weeks for production, depending on the embroidery and fabric. A heavily embroidered sherwani with handwork can take 10 to 12 weeks, while a simpler silk or brocade sherwani takes 4 to 6 weeks. Add the same shipping and alteration buffers, and 6 to 8 months gives you comfortable breathing room. For a full guide, see our <Link href="/blog/nri-groom-outfit-guide-sherwani-from-india" style={{ color: "#c7b28a" }}>NRI Groom Outfit Guide</Link>.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Bridesmaid outfits are a coordination challenge that most brides underestimate. If you have 4 to 8 bridesmaids and each needs 2 to 3 outfits for different events, you are managing 8 to 24 separate outfit orders. The key decision at this stage is whether you are going for identical outfits (same color and style for everyone), coordinated outfits (same palette, different styles), or a mix. Coordinated outfits are the most popular choice for NRI weddings because they accommodate different body types and comfort levels while still looking cohesive in photographs. Read our detailed guide on <Link href="/blog/matching-bridesmaid-outfits-indian-wedding" style={{ color: "#c7b28a" }}>matching bridesmaid outfits</Link> for strategies.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Order bridesmaid outfits 6 to 8 months out if you want custom pieces, or 4 to 5 months out if you are selecting from ready-made collections. The critical factor is getting all bridesmaids&rsquo; measurements collected early — this is often the bottleneck, since you are coordinating with multiple people across different cities and time zones.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            4 to 6 Months Before: Family Outfits
          </h2>
          <p>
            Both sets of parents, siblings, and close family members who have roles in the ceremony all need coordinated outfits. This is where the logistics really multiply. Your mother likely needs 3 to 4 outfits (ceremony, sangeet, reception, possibly mehendi). Your mother-in-law needs the same. Fathers need 2 to 3 outfits each. Siblings who are part of the bridal party need coordinated pieces. By the time you tally it up, family outfits can account for 8 to 15 separate orders.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The reason to order family outfits 4 to 6 months before the wedding is that these orders are typically less complex than the bridal lehenga or sherwani — most family pieces can be sourced from ready-made collections or semi-custom options. However, if your mother wants a specific Banarasi saree with custom blouse work, or your father-in-law wants a particular style of Jodhpuri bandhgala, those custom orders need the same 8-to-12-week production timeline as any other hand-embroidered piece.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Pro tip: assign one person from each family (usually a sibling or cousin) to collect measurements and preferences from their side. Trying to coordinate measurements with your mother-in-law directly can be awkward. Having a designated family liaison makes the process smoother and faster.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            3 to 4 Months Before: Ready-Made Jewelry, Accessories, and Event-Specific Outfits
          </h2>
          <p>
            Three to four months out, close the remaining gaps. Ready-made kundan jewelry sets, gold-plated pieces, and fashion jewelry can be ordered on shorter timelines — typically 2 to 4 weeks for production and shipping. This is also the window for ordering mehendi and haldi outfits, which are generally simpler and do not require custom embroidery. Clutches, potli bags, mojari (traditional footwear), dupatta pins, and other accessories should be ordered now too, while you still have time to exchange or replace anything that does not work.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            If you have not already, this is the time to confirm your <Link href="/pricing" style={{ color: "#c7b28a" }}>concierge or sourcing service</Link> is handling the logistics for all outstanding orders. A good concierge will give you a consolidated tracking dashboard so you can see the status of every order, every shipment, and every pending measurement in one place.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            6 to 8 Weeks Before: Everything Must Have Shipped
          </h2>
          <p>
            This is your hard deadline. Every single outfit and piece of jewelry must be in transit by this point. If an item has not shipped 8 weeks before the wedding, you are in the danger zone. International shipping from India to the US typically takes 5 to 10 business days by courier, but customs delays can add another 1 to 3 weeks. Then you need at least 2 to 4 weeks for local alterations and fittings. Working backwards, 6 to 8 weeks before the wedding is the latest you can afford for items to leave India.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            If you are at this stage and something has not shipped, contact your sourcing partner immediately. They may be able to expedite shipping (switching from standard to express courier) or arrange for an alternate piece from a ready-made collection. The key is not to wait and hope — hope is not a logistics strategy.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            2 to 4 Weeks Before: Fittings and Final Touches
          </h2>
          <p>
            With everything in hand, this is the fitting window. Schedule fittings for the bridal lehenga, the groom&rsquo;s sherwani, and any other custom pieces. Minor alterations — a waist tuck, a hem adjustment, a blouse tightening — typically take 1 to 2 weeks. More complex alterations, like reworking a blouse or adjusting heavy embroidery, can take 2 to 3 weeks. Schedule your first fitting 4 weeks before the wedding and your final fitting 10 to 14 days before, so there is time for adjustments between the two.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            This is also the time to do a complete dress rehearsal — lehenga, jewelry, dupatta drape, shoes, and all. Try on the full bridal look to make sure every element works together. You do not want to discover on the morning of your wedding that your necklace clashes with your lehenga&rsquo;s neckline or that your dupatta is too heavy to pin the way you planned.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            What Happens If You Are Late — Rush Order Realities and Costs
          </h2>
          <p>
            Life happens. Engagements get moved up. You spent three months going back and forth on the lehenga design. Your family could not agree on the bridesmaid color scheme until the last minute. Whatever the reason, if you are behind schedule, you need to understand what rush orders actually look like — because they are not magic, and they come with real trade-offs.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Rush production adds 30-50% to the cost.</strong> Artisans who compress a 12-week embroidery timeline into 6 weeks are working overtime, hiring additional help, or both. That cost gets passed to you. A $3,000 lehenga with rush production typically costs $3,900 to $4,500.</li>
            <li><strong>Rush orders compromise detail.</strong> The most intricate handwork — the fine aari embroidery, the delicate stone placement, the perfectly finished edges — is what takes the most time. Rush it, and you get fewer stitches per inch, less precise stone-setting, and rougher finishing. The lehenga will look good from a distance, but up close, the difference is noticeable.</li>
            <li><strong>Express shipping adds another $150–$400.</strong> DHL and FedEx offer priority international shipping that delivers in 3 to 5 business days, but the premium is significant. Standard international shipping runs $100–$300; express pushes that to $250–$700.</li>
            <li><strong>You lose the alteration buffer.</strong> A rushed lehenga that arrives 10 days before the wedding leaves almost no time for alterations. You are stuck with whatever fit you get, or you are paying emergency rush fees to a local tailor.</li>
            <li><strong>Some artisans simply refuse.</strong> Not every workshop will accept a rush order, especially during peak wedding season (October through February). The best artisans are booked months in advance and will not compromise their craft for a rush fee.</li>
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            The honest truth: rush orders are better than no outfit, but they are never as good as orders placed on schedule. If you are reading this and you still have 8 to 10 months before your wedding, start now. Future you will be grateful.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Quick Reference: The Master Timeline
          </h2>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>10–12 months:</strong> Full outfit list, budget, style research, start bridal lehenga shopping</li>
            <li><strong>8–10 months:</strong> Place bridal lehenga order, order custom jewelry (polki, temple)</li>
            <li><strong>6–8 months:</strong> Order groom&rsquo;s sherwani, order bridesmaid outfits</li>
            <li><strong>4–6 months:</strong> Order family outfits (parents, siblings, in-laws)</li>
            <li><strong>3–4 months:</strong> Ready-made jewelry, mehendi/haldi outfits, accessories</li>
            <li><strong>6–8 weeks:</strong> Hard shipping deadline — everything must be in transit</li>
            <li><strong>4 weeks:</strong> First fitting for bridal lehenga and sherwani</li>
            <li><strong>2 weeks:</strong> Final fitting, full dress rehearsal</li>
            <li><strong>1 week:</strong> Breathe. Everything should be ready.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            The Bottom Line
          </h2>
          <p>
            Timing is the difference between a wedding outfit experience that feels joyful and intentional, and one that feels frantic and compromised. Indian wedding outfits are not Amazon Prime deliveries — they are handcrafted pieces made by artisans who deserve (and require) time to do their best work. Give them that time, give yourself the buffer for shipping and alterations, and you will walk into every event knowing your outfit is exactly what you envisioned.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The brides who stress the most about outfits are the ones who started late. The brides who enjoy the process are the ones who followed a timeline. Be in the second group.
          </p>

          {/* CTA Box */}
          <div style={{ background: "#2f2f2f", borderRadius: "8px", padding: "2rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "#f8f6f2", marginBottom: "0.75rem" }}>
              Overwhelmed by the timeline?
            </p>
            <p style={{ color: "#c7b28a", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              CeremonyVerse manages the entire outfit timeline for NRI families — from the first consultation to the final fitting. We track every order, coordinate every shipment, and make sure nothing falls through the cracks. Tell us your wedding date, and we will tell you exactly what needs to happen and when.
            </p>
            <Link
              href="/contact"
              style={{ display: "inline-block", background: "#c7b28a", color: "#2f2f2f", padding: "0.8rem 2rem", borderRadius: "4px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", letterSpacing: "0.03em" }}
            >
              Book Free Consultation
            </Link>
            <p style={{ color: "#6f6a63", fontSize: "0.85rem", marginTop: "1rem" }}>
              Or WhatsApp: <a href="https://wa.me/12153419990" style={{ color: "#c7b28a" }}>+1 (215) 341-9990</a>
            </p>
          </div>

          {/* Related Reading */}
          <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e6dfd5" }}>
            <p style={{ fontSize: "0.85rem", color: "#6f6a63", marginBottom: "0.5rem" }}>
              <strong>Continue reading:</strong>
            </p>
            <p style={{ fontSize: "0.85rem", color: "#6f6a63", lineHeight: 1.7 }}>
              <Link href="/blog/how-to-buy-bridal-lehenga-from-india-usa" style={{ color: "#c7b28a" }}>How to Buy a Bridal Lehenga from India When You Live in the USA</Link> ·{" "}
              <Link href="/blog/indian-wedding-jewelry-guide-nri-brides" style={{ color: "#c7b28a" }}>Complete Indian Wedding Jewelry Guide for NRI Brides</Link> ·{" "}
              <Link href="/blog/nri-groom-outfit-guide-sherwani-from-india" style={{ color: "#c7b28a" }}>NRI Groom Outfit Guide — Sherwani from India</Link> ·{" "}
              <Link href="/free-guides" style={{ color: "#c7b28a" }}>Free Wedding Planning Guides</Link>
            </p>
          </div>

        </div>

        {/* Back to blog */}
        <div style={{ marginTop: "3rem" }}>
          <Link href="/" style={{ color: "#c7b28a", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Back to CeremonyVerse
          </Link>
        </div>
      </article>
    <SeoFooter />
    </main>
  );
}
