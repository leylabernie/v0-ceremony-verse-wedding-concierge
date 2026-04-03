import { SeoNav } from "@/components/seo-nav";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete NRI Indian Wedding Shopping Guide | CeremonyVerse",
  description:
    "The definitive guide for NRI families shopping for Indian weddings from the US. Covers outfits, jewelry, gifts, customs, timeline, costs, and how to avoid scams.",
  keywords:
    "NRI Indian wedding shopping guide, how to shop for Indian wedding from USA, NRI wedding planning guide, Indian wedding outfit sourcing guide",
  openGraph: {
    title: "Complete NRI Indian Wedding Shopping Guide | CeremonyVerse",
    description:
      "The definitive guide for NRI families shopping for Indian weddings from the US. Covers outfits, jewelry, gifts, customs, timeline, costs, and how to avoid scams.",
    type: "article",
    url: "https://www.ceremonyverse.com/nri-indian-wedding-shopping-guide",
  },
};

export default function NriWeddingShoppingGuide() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p
            style={{
              color: "#c7b28a",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            CeremonyVerse · April 2026 · NRI Wedding Guide
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
              color: "#f8f6f2",
              lineHeight: 1.25,
              margin: "0 0 1.5rem",
            }}
          >
            The Complete Guide: How NRI Families Shop for Indian Weddings from the US
          </h1>
          <p style={{ color: "#c7b28a", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Everything you need to know — outfits for every family member, jewelry, gifts, customs duties, scam red flags, timelines, and real cost breakdowns. The definitive NRI wedding shopping resource.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#2f2f2f",
          }}
        >
          <p>
            You are planning an Indian wedding from across the ocean. The guest list spans two continents. The ceremonies span three days. The outfit requirements — for the bride, the groom, both families, the bridesmaids, the groomsmen, and possibly even the family dog — span every category of Indian textile artistry you can imagine.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            And you are doing all of this from New Jersey, or Texas, or California, or Canada, with a full-time job, a time zone that is 9 to 12 hours behind your family in India, and a WhatsApp group that currently has 47 unread messages from your mother-in-law.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            This guide is for you. It covers everything: why NRI wedding shopping is uniquely difficult, how to source every single item you need, when to start, how live video shopping works, what customs duties you will pay in 2026, how to avoid getting scammed, and what a sourcing concierge like <a href="/about" style={{ color: "#c7b28a" }}>CeremonyVerse</a> actually does. By the end, you will have a clear, actionable plan — and significantly less anxiety.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Let&rsquo;s begin.
          </p>

          {/* ── Section 1 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Why Shopping for an Indian Wedding from the US Is So Hard
          </h2>
          <p>
            NRI families face a category of wedding planning challenge that simply does not exist for families based in India. It is not just inconvenient — it is structurally difficult in several compounding ways.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Distance and the inability to touch
          </h3>
          <p>
            Indian wedding shopping is a tactile experience. You are meant to feel the weight of the silk, run your fingers over the zardozi embroidery, hold the fabric up to the light. Shopping for a bridal lehenga via Instagram photos or catalog images strips away 90% of the information you need to make a good decision. What looks stunning on screen can feel papery and thin when it arrives. What looks like heavy zari turns out to be printed foil.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Trust without proximity
          </h3>
          <p>
            In India, you walk into Chandni Chowk or Laad Bazaar with a friend who has been there before. You haggle in person. If the vendor misrepresents something, you are standing right there. When you are shopping from the US, you are wiring money to someone 8,000 miles away, often with very little legal recourse if things go wrong. The scam problem in this space is real and well-documented — and it disproportionately affects NRI buyers precisely because of this distance.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Sizing across two systems
          </h3>
          <p>
            Indian sizing conventions bear almost no relationship to US sizing. An Indian size 40 blouse is not an American size 40 anything. Custom measurements help — but coordinating accurate measurements for the bride, groom, both mothers, multiple bridesmaids, and any children involved, all via WhatsApp, is genuinely hard to get right without expert guidance.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            US customs complexity
          </h3>
          <p>
            Since August 2025, the US eliminated the de minimis exemption that previously let packages under $800 enter duty-free. Every commercial shipment from India now incurs duties. The rules around what qualifies as commercial versus personal baggage, what the Section 122 surcharge applies to, and how to declare value correctly are confusing even for logistics professionals — let alone someone planning their first Indian wedding.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Coordination across families and time zones
          </h3>
          <p>
            An Indian wedding involves coordinating outfits across the bride&rsquo;s family, the groom&rsquo;s family, and the wedding party — often ensuring that colors are complementary without being identical, that nothing clashes with the bridal look, and that everyone&rsquo;s specific preferences are honored. Doing this across a 10-hour time zone gap, with family members who have different opinions and different WhatsApp availability windows, is its own project management challenge.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            These challenges are not insurmountable. But they require a clear process — and usually, an experienced guide.
          </p>

          {/* ── Section 2 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            The Three Ways NRI Families Source Wedding Outfits
          </h2>
          <p>
            When it comes to actually sourcing your wedding outfits, NRI families typically choose one of three paths. Each has real advantages and real tradeoffs.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Option 1: US boutiques — convenient but expensive and limited
          </h3>
          <p>
            Indian boutiques in the US are the most familiar option. You can touch the fabric, try things on, and work with someone in person. The problems: selection is limited compared to what is available in India, and prices are substantially higher — typically 2 to 4 times what the same outfit would cost sourced directly. Most US boutiques carry ready-to-wear or semi-custom at best, and their stock cycles slowly. For families needing coordinated outfits for 10 or 15 people, boutiques often simply cannot fulfill the full order.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Option 2: Buying direct from India — best prices, highest risk
          </h3>
          <p>
            Going direct to Indian vendors — whether through Instagram, WhatsApp, or visiting India on a shopping trip — offers the best access to pricing and selection. The risk is significant, however. Without a trusted intermediary, you are dependent entirely on the vendor&rsquo;s honesty and competence. The NRI wedding scam rate through direct online purchases is high. Even when the vendor is reputable, managing measurements, communication, production timelines, shipping, and customs from abroad, alone, is exhausting. Many families who go this route spend more time and stress than the price savings justify.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Option 3: A sourcing concierge — structured, verified, and accountable
          </h3>
          <p>
            A sourcing concierge operates as your trusted agent in the Indian market. They are physically present — in the bazaars, with the artisans, in the fabric markets — and they act on your behalf with full visibility. You get the pricing and selection of India, with the accountability and communication quality of a US-facing business. Live video shopping sessions, measurement management, quality inspection, and shipping coordination are all handled. This is the approach <a href="/about" style={{ color: "#c7b28a" }}>CeremonyVerse</a> uses, and it is what we recommend for any NRI family sourcing a significant number of items.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The concierge approach does involve a service fee, which is covered in the <a href="/pricing" style={{ color: "#c7b28a" }}>pricing section</a>. But for most families, the combination of cost savings versus US boutiques and the dramatic reduction in risk makes it the most sensible option.
          </p>

          {/* ── Section 3 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            What You Need to Source for an Indian Wedding
          </h2>
          <p>
            Most families underestimate the scope of the sourcing list until they sit down and write it out. Here is a comprehensive breakdown of everything that typically needs to be sourced — with a brief note on each category.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Bridal lehenga or saree
          </h3>
          <p>
            The centerpiece of the entire sourcing operation. Depending on ceremony count, many brides need two or three looks: a bridal look for the main wedding ceremony, something for the mehndi or sangeet, and a reception outfit. Each requires separate sourcing, sizing, and typically separate timelines. Read our detailed <a href="/blog/how-to-buy-bridal-lehenga-from-india-usa" style={{ color: "#c7b28a" }}>bridal lehenga buying guide</a> for step-by-step guidance on this item specifically.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Groom sherwani and wedding suit
          </h3>
          <p>
            The groom typically needs a sherwani for the main ceremony and a separate look for reception — often a suit or bandhgala. Sherwani sizing is unforgiving: shoulder width, chest, and length all need to be precise, and alterations on a heavily embroidered sherwani are difficult. Custom is almost always the better option over ready-to-wear.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Bridesmaids
          </h3>
          <p>
            Indian bridesmaid outfits — lehengas, anarkalis, or sarees — need to be coordinated in palette without being identical. When bridesmaids are spread across multiple cities, gathering measurements and preferences and then sourcing a cohesive set is a significant coordination challenge. A concierge handles this as a single project rather than five separate conversations.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Groomsmen
          </h3>
          <p>
            Coordinated kurta pajama sets or bandhgalas for the groomsmen are standard. The good news: men&rsquo;s Indian formalwear tends to be more forgiving to size and less intricate to source than bridal pieces. The challenge is quantity — 8 to 12 groomsmen, each with individual measurements.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Both families — mothers, fathers, siblings
          </h3>
          <p>
            This is often the most underestimated category. Both mothers need looks for each ceremony — often three or four outfits each. Both fathers need sherwanis or kurta sets. Siblings need ceremony-specific coordination. In total, a full Indian wedding can involve 20 to 30 individual family outfits. Planning this as a coordinated sourcing project rather than 30 separate purchases is the only sane approach.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Jewelry
          </h3>
          <p>
            Bridal jewelry — necklace sets, maang tikka, jhumkas, bangles, haath phool — is one of the most frequently sourced items from India. Kundan, polki, and temple gold jewelry from India is both more authentic and significantly less expensive than US equivalents. Imitation bridal jewelry (high-quality) from Jaipur and Rajkot markets offers even more accessible price points. Gold jewelry requires careful customs documentation and declared value — always declare accurately.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Ceremonial items — puja thalis, kalash, mandap accessories
          </h3>
          <p>
            Depending on your ceremony, you may need specialized puja items: a decorated thali set for the aarti and pheras, a kalash for the water ceremony, supari and coconut for ritual placement, and decorative accessories for the mandap. Many of these items are difficult to find with the right quality or regional specificity in the US. Sourcing from India ensures cultural accuracy.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Return gifts and favors
          </h3>
          <p>
            Indian weddings traditionally involve return gifts (shagun, thaamboolam, or shaalu depending on community) for guests. Sourcing small, personalized, high-quality return gifts from India — silver-plated items, handmade textiles, artisan snacks — can be dramatically more cost-effective than US alternatives. Quantity, packaging, and customs documentation all require advance planning.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Welcome bags
          </h3>
          <p>
            For destination weddings or for guests flying in from out of state, welcome bags with Indian snacks, chai, small handicrafts, and personalized notes are a popular and memorable touch. Sourcing the Indian-made components — mithai tins, block-printed pouches, spice kits — is a great fit for the sourcing concierge model.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Sweets and mithai
          </h3>
          <p>
            Indian sweets — especially fresh or specialty mithai for baraat, mehendi, and vidaai — are often not replicated well in the US. Some families ship dry mithai from India or source locally through specialty Indian grocery vendors. Others have family bring it as checked luggage. This category requires careful planning due to customs restrictions on food items.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Pet outfits
          </h3>
          <p>
            Yes — this is genuinely a category now. Indian families who want their dog in the baraat or the wedding photos are sourcing custom sherwanis and lehengas for their pets from Indian artisans. It is delightful. It requires a very small set of measurements and usually a 3 to 4 week lead time.
          </p>

          {/* ── Section 4 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            The Ideal Timeline: When to Start Sourcing
          </h2>
          <p>
            The single most common source of NRI wedding stress is starting too late. Indian wedding sourcing is not an e-commerce experience where you click and the item ships in two days. Top artisans book months in advance. Embroidery takes 8 to 16 weeks. Shipping and customs add more time. If you want the best options — not just what is left — you need to start early.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Here is the recommended sourcing timeline. For a detailed month-by-month breakdown, see our <a href="/blog/nri-wedding-planning-timeline" style={{ color: "#c7b28a" }}>NRI wedding planning timeline guide</a>.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            12 months out — establish your sourcing plan
          </h3>
          <p>
            At the 12-month mark, you should be building your complete sourcing list, establishing your total budget across all categories, identifying your sourcing partner or concierge, and beginning the search for the bridal lehenga. Top bridal artisans — particularly those known for karigari (handwork) — frequently have 4 to 6 month waitlists. Starting now gives you access to the full market.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            9 months out — finalize bridal and key anchor pieces
          </h3>
          <p>
            By 9 months, the bridal lehenga and groom sherwani should be finalized and in production. These are your anchor pieces — everything else will be coordinated around them. Your mother&rsquo;s outfits, the color palette for the families, and the bridesmaids&rsquo; looks should be decided at this stage and sourcing should begin. Jewelry sourcing also begins here.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            6 months out — all clothing finalized and in production
          </h3>
          <p>
            By 6 months before the wedding, all wedding outfits should be in production or ordered. This includes groomsmen, extended family outfits for both sides, and any ceremonial items. Return gifts and welcome bag components should be identified and orders placed. Shipping logistics should be planned.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            3 months out — shipments arriving, alterations beginning
          </h3>
          <p>
            Most shipments should be arriving at the 3-month mark, leaving enough buffer for customs delays, inspection, and alteration appointments. Local tailor fittings should begin for any pieces that need adjustment. At 6 to 8 weeks before the wedding, final fittings should be complete. Use the remaining time for any last-minute additions or backup sourcing if something is off.
          </p>

          {/* ── Section 5 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            How Live Video Shopping Works
          </h2>
          <p>
            Live video shopping is the single most important innovation in NRI Indian wedding sourcing — and if you have not heard of it, here is exactly what it means.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Instead of viewing catalog photos or static images on an Instagram grid, you join a scheduled video call — typically via WhatsApp or Zoom — while your sourcing partner is physically present in the market in India. They are standing in the showroom or at the artisan&rsquo;s workshop, holding the actual garment in their hands.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            During the session, they show you:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>The fabric being rustled near the camera so you can assess weight and drape</li>
            <li>Embroidery up close — the density of zardozi, the consistency of thread work, the finish quality of stonework</li>
            <li>All sides of the garment, including the inner lining and stitching</li>
            <li>Colors under natural light rather than showroom or ring-light conditions</li>
            <li>The dupatta separately, then draped together with the lehenga</li>
            <li>Any finishing details — piping, latkans, hemwork, mirror placements</li>
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            When you approve a piece on live video, it is immediately tagged and reserved for you. Nothing is shipped based on catalog photos alone. This process eliminates the single most common NRI shopping problem: receiving something that looks nothing like what you thought you were buying.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Live video sessions can be scheduled in advance to fit your schedule and the time zone gap. Most sessions run 30 to 90 minutes depending on how many items are being reviewed. For bridal pieces, they are non-negotiable. For family outfits, they can be abbreviated but are still strongly recommended.
          </p>

          {/* ── Section 6 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            How to Take Measurements for Indian Outfits
          </h2>
          <p>
            If you have never ordered custom Indian clothing before, the measurement process will surprise you. A standard US size — XS, M, 10, 14 — means essentially nothing for Indian custom tailoring. What matters is a precise set of body measurements, taken in specific ways, for each garment type.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            For a bridal lehenga blouse and skirt, typical measurements required include:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Full bust</strong> — taken at the fullest point of the chest</li>
            <li><strong>Upper bust</strong> — above the chest, used for structured blouse fitting</li>
            <li><strong>Waist</strong> — at the natural waist, not the low waist</li>
            <li><strong>Hips</strong> — at the fullest point, usually 7 to 9 inches below the natural waist</li>
            <li><strong>Blouse length front</strong> — from shoulder to desired hem in front</li>
            <li><strong>Blouse length back</strong> — from nape of neck to desired hem in back</li>
            <li><strong>Shoulder width</strong> — from shoulder bone to shoulder bone, across the upper back</li>
            <li><strong>Sleeve length</strong> — from shoulder bone to wrist, arm slightly bent</li>
            <li><strong>Arm circumference</strong> — around the fullest part of the upper arm</li>
            <li><strong>Skirt waist</strong> — where the lehenga waistband will sit (may differ from natural waist)</li>
            <li><strong>Skirt length</strong> — from skirt waist to floor, measured while standing in wedding shoes</li>
            <li><strong>High hip</strong> — about 3 inches below the natural waist</li>
            <li><strong>Neck circumference</strong> — for high-neck or halter-neck blouse styles</li>
            <li><strong>Armhole depth</strong> — for sleeveless designs</li>
            <li><strong>Waist ease preference</strong> — whether the customer prefers a snug or relaxed waistband fit</li>
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            That is 15 measurements — and a skilled concierge will walk through each one with you via video call, confirming technique and placement to ensure accuracy. Strategic ease allowances are also built in: most Indian blouses are made with a 0.5 to 1 inch ease at bust and a small allowance at waist to allow for typical weight fluctuations in the months between ordering and the wedding day.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Even with perfect measurements, plan for minor local alterations when the garment arrives. This is standard practice — not a sign that something went wrong. Bodies change, fabric settles during transit, and the difference between &ldquo;good fit&rdquo; and &ldquo;bridal perfection&rdquo; is usually one careful fitting with a local tailor.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            A good sourcing concierge offers a fit guarantee: if the garment arrives with a fit error that was the result of their measurement collection or tailoring oversight — not a change in your body — they will cover the cost of the correction.
          </p>

          {/* ── Section 7 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Understanding Customs Duties and Shipping in 2026
          </h2>
          <p>
            This is an area where the rules changed significantly in 2025, and many NRI families are still operating on outdated information. Here is the current landscape, accurate as of April 2026. For a full deep-dive, see our <a href="/blog/us-tariffs-indian-wedding-outfits-2026" style={{ color: "#c7b28a" }}>complete guide to US tariffs on Indian wedding outfits</a>.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            De minimis exemption: eliminated for commercial shipments
          </h3>
          <p>
            Prior to August 29, 2025, packages with a declared value under $800 entering the US could do so duty-free under the de minimis exemption. That exemption has been eliminated for commercial shipments. Every commercial shipment from India — including Indian wedding outfits shipped by vendors — is now subject to full US import duties, regardless of value.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Current duty rates: 12–27% on Indian textiles
          </h3>
          <p>
            Indian textile imports currently face a combined tariff of approximately 12 to 27% depending on the specific Harmonized Tariff Schedule (HTS) classification. Silk garments, embroidered textile articles, and synthetic fabric garments each fall under different codes with different rates. Jewelry carries its own classification. When budgeting, assume 20% as a conservative estimate unless your concierge or customs broker has calculated the specific HTS code for your shipment.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Section 122 surcharge
          </h3>
          <p>
            An additional Section 122 surcharge applies to certain categories of imported goods. Importantly, this surcharge does not apply to accompanied personal baggage — meaning items you physically carry back from India as a traveler are not subject to this additional charge. This distinction matters for families planning a trip to India for shopping.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Personal baggage exemption: $800 still applies
          </h3>
          <p>
            When you physically carry items back from India as a returning US resident, the $800 personal duty-free exemption per traveler still applies. Items above $800 are dutiable at standard rates. Keep all receipts, declare everything accurately on your customs form, and do not attempt to undervalue. US Customs penalties for misrepresentation are severe.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Shipping methods and insurance
          </h3>
          <p>
            Commercial shipments from India typically travel via DHL or FedEx International, with delivery times of 5 to 10 business days. Always ensure your shipment is insured for its full declared value — not a reduced amount. A bridal lehenga worth $2,000 should be insured for $2,000. Always request a tracking number and confirm the shipment carrier before the vendor ships. US Postal Service (USPS/India Post) is not recommended for high-value items due to slower delivery, more limited tracking, and lower insurance maximums.
          </p>

          {/* ── Section 8 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            How to Avoid Getting Scammed
          </h2>
          <p>
            The NRI wedding shopping scam problem is real, documented, and unfortunately common. Every week, families in the US receive packages from Indian vendors that contain something entirely different from what was shown in the photos — or, in worse cases, nothing at all. Here is how to protect yourself.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Red flags — walk away if you see these
          </h3>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Instagram-only presence with no verifiable business identity.</strong> A business that exists only as an Instagram account, with no website, no physical address, no GST registration number, and no verifiable business history, is a high-risk vendor.</li>
            <li><strong>No live video option.</strong> Any vendor who will not show you the actual garment on a live video call before you pay — not catalog photos, not reels, the real item in real time — is a vendor you should not trust with a significant payment.</li>
            <li><strong>Full payment required upfront.</strong> Reputable vendors work with a milestone payment structure: a deposit to initiate production, and the remainder before shipping. Full payment before you see anything is a scam pattern.</li>
            <li><strong>Portfolio photos that do not match the prices.</strong> If the photos show elaborate, high-end bridal work but the prices are 60% below market, the photos are likely stolen from a different brand. Reverse-image-search any outfit photos that feel too good to be true.</li>
            <li><strong>Pressure tactics.</strong> &ldquo;This is the last piece at this price,&rdquo; &ldquo;another buyer is interested,&rdquo; or &ldquo;the artisan is closing the workshop next week&rdquo; are classic urgency tactics. Real sourcing partners give you space to decide.</li>
            <li><strong>No clear recourse policy.</strong> Ask directly: what happens if what arrives does not match what was shown to me? A legitimate vendor has a clear, written answer to this question.</li>
          </ul>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Green flags — what trustworthy sourcing looks like
          </h3>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Live video shopping as a standard practice.</strong> Not as an exception, not on request — as the default way every item is approved before purchase.</li>
            <li><strong>Milestone payment structure.</strong> Deposit on confirmation, balance before shipping. This protects you and signals that the vendor is confident enough in the outcome to not need your money in full upfront.</li>
            <li><strong>US accountability.</strong> A sourcing concierge who operates as a US-facing business, with a US phone number, clear terms, and the reputation risk of operating in the NRI community, has structural accountability that an India-only Instagram vendor does not.</li>
            <li><strong>Real client references.</strong> Not testimonials in their Instagram highlights — real names, real people you can contact. Or detailed client stories with enough specificity to be verifiable.</li>
            <li><strong>Transparent fee structure.</strong> You know exactly what you are paying: outfit cost, sourcing fee, shipping, and approximate duties. No hidden charges appear at the end.</li>
          </ul>

          {/* ── Section 9 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            What a Concierge Actually Does (And Doesn&rsquo;t Do)
          </h2>
          <p>
            There is a persistent misconception about what a wedding shopping concierge is. Let&rsquo;s be precise.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong><a href="/about" style={{ color: "#c7b28a" }}>CeremonyVerse</a> is not a wedding planner.</strong> We do not coordinate your venue, manage your caterer, direct your decorator, or build your guest seating chart. Wedding planners exist for those things, and they are excellent at them.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            CeremonyVerse is a <em>sourcing concierge</em>. Here is exactly what that means, function by function:
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Vendor vetting
          </h3>
          <p>
            We have spent years building relationships with verified artisans, fabric merchants, jewelry makers, and manufacturers across India&rsquo;s key wedding markets — Chandni Chowk, Surat textile market, Jaipur&rsquo;s jewelry quarter, and regional specialists. We know who delivers on their word and who does not. When you work with us, you are not starting from scratch with a random Instagram account.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Live video shopping sessions
          </h3>
          <p>
            Every significant piece is reviewed on a scheduled live video call. We are physically in the market, holding the garment, showing you what you need to see. Nothing moves to purchase without your explicit approval on video.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Measurement management
          </h3>
          <p>
            We collect and manage measurements for every family member in the sourcing order — verifying technique via video call, building measurement profiles, and communicating them accurately to the artisans. We also track who has submitted measurements and follow up with families who have not.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Production monitoring and quality inspection
          </h3>
          <p>
            For custom orders, we monitor production progress and conduct an in-person quality inspection before anything ships. If an artisan&rsquo;s work does not meet the standard shown in the video session, we negotiate corrections before the item leaves India — not after it arrives in your living room.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Shipping coordination and customs documentation
          </h3>
          <p>
            We coordinate insured international shipping via reputable couriers, ensure accurate customs documentation, and prepare you for the duties you will owe upon arrival. We do not handle customs payments on your behalf, but we make sure you know exactly what to expect and what forms you will need.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Fit guarantee
          </h3>
          <p>
            If a garment arrives with a fit error attributable to measurement collection or artisan execution — not a change in your body measurements — we cover the cost of corrections at a qualified local tailor up to a specified amount. Details are outlined in our <a href="/pricing" style={{ color: "#c7b28a" }}>engagement terms</a>.
          </p>

          {/* ── Section 10 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Real Cost Examples
          </h2>
          <p>
            Full price transparency is something we believe in. Here are realistic cost ranges for the most common sourcing categories, as of 2026. These include the item cost from India — not yet shipping, duties, or concierge fees.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Bridal lehenga from India:</strong> $800 to $3,000 for a high-quality, custom-embroidered piece from a vetted artisan. US boutique equivalent: $3,000 to $8,000 or more for comparable quality.</li>
            <li><strong>Groom sherwani from India:</strong> $200 to $800 for a custom sherwani with embroidery. US equivalent: $600 to $2,000.</li>
            <li><strong>Bridesmaid outfit set (lehenga or anarkali):</strong> $150 to $400 per person from India. US boutique: $300 to $900 per person.</li>
            <li><strong>Mother of bride/groom saree or suit:</strong> $200 to $600 per person from India.</li>
            <li><strong>Groomsmen kurta pajama set:</strong> $80 to $200 per person from India.</li>
            <li><strong>Imitation bridal jewelry set:</strong> $150 to $600 for a full set (necklace, earrings, maang tikka, bangles).</li>
            <li><strong>Return gifts (per guest, quantity 100+):</strong> $8 to $30 per item depending on type and personalization.</li>
            <li><strong>CeremonyVerse sourcing fee:</strong> Described in full on our <a href="/pricing" style={{ color: "#c7b28a" }}>pricing page</a>. Structured as a flat engagement fee, not a per-item commission.</li>
            <li><strong>International shipping (per shipment):</strong> $80 to $300 via DHL or FedEx, depending on weight and declared value.</li>
            <li><strong>US customs duties:</strong> Approximately 12 to 27% of declared commercial value on textile goods; varies by HTS code.</li>
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            To build a realistic total budget, add the India sourcing cost, shipping, and estimated duties — then compare to what you would spend at US boutiques for equivalent quality. For most families, the sourcing-from-India approach, even with all fees and duties included, represents a significant net saving on the total wedding wardrobe spend.
          </p>

          {/* ── Section 11 ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Cultural Considerations by Community
          </h2>
          <p>
            Indian weddings are not monolithic. The ceremony structure, outfit conventions, color symbolism, and ceremonial items vary significantly by community and regional tradition. Here is a brief overview of the communities CeremonyVerse most frequently serves — with links to dedicated guides for each.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Gujarati weddings
          </h3>
          <p>
            Gujarati weddings center on the Garba night — which is its own outfit event, distinct from the main Saptapadi (wedding ceremony) look — plus the Pithi (turmeric ceremony) and the Mameru (maternal uncle&rsquo;s gift ceremony). The color conventions are distinctive: red and white are traditional for the bride, but contemporary Gujarati brides are wearing burgundy, blush, and pastels. Chaniya choli (ghagra choli) is the signature Gujarati bridal garment. See our full <a href="/gujarati-wedding-outfits-usa" style={{ color: "#c7b28a" }}>Gujarati wedding outfit guide</a> for sourcing specifics.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Punjabi and Sikh weddings
          </h3>
          <p>
            Sikh weddings center on the Anand Karaj ceremony at the Gurdwara, followed (for many families) by a separate reception or celebration. The Jaggo night is a festive pre-wedding event with its own outfit conventions. Bridal color has traditionally been red, though pink, orange, and fuchsia are all common today. Phulkari embroidery from Punjab is a distinctive textile tradition often incorporated into bridal and family outfits. Read our dedicated <a href="/punjabi-sikh-wedding-outfits-usa" style={{ color: "#c7b28a" }}>Punjabi and Sikh wedding outfit sourcing guide</a> for full details.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            South Indian Christian weddings
          </h3>
          <p>
            South Indian Christian weddings — particularly from Kerala and Tamil Nadu — combine a church ceremony (typically in a white or cream saree for the bride) with a separate reception that often features more elaborate Indian bridal wear or a gown. The church saree has its own conventions around silk type, border style, and pallu drape. The reception look may be a Kanjivaram silk saree, an embroidered lehenga, or a blend of both traditions. See our <a href="/south-indian-christian-wedding-outfits-usa" style={{ color: "#c7b28a" }}>South Indian Christian wedding outfit guide</a> for detailed guidance.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Intercultural and fusion weddings
          </h3>
          <p>
            A growing proportion of the weddings we work with involve intercultural couples — Indian and non-Indian, or two families from different Indian regional traditions. Outfit sourcing for intercultural weddings requires additional sensitivity to what both families will be comfortable wearing, what feels authentic versus costumey for the non-Indian partner or family, and how to create visual cohesion across two aesthetic traditions. We have extensive experience with this category and are happy to discuss your specific situation during an initial consultation.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Browse our <a href="/free-guides" style={{ color: "#c7b28a" }}>free community-specific guides</a> for additional reading on each tradition.
          </p>

          {/* ── Section 12 — FAQ ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Frequently Asked Questions
          </h2>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            How far in advance should we contact CeremonyVerse?
          </h3>
          <p>
            Ideally, 10 to 12 months before the wedding date. This gives us the most flexibility to access the best artisans, accommodate custom production timelines, and avoid the last-minute scramble that leads to compromises. That said, we regularly work with families who come to us 6 months out, and sometimes less. Contact us and we will tell you honestly what is achievable within your timeline.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Do you only serve families in the US?
          </h3>
          <p>
            Our primary client base is NRI families based in the United States, which is where our expertise in customs, shipping, and US consumer context is most directly applicable. We do work with families in Canada and the UK on a case-by-case basis. Reach out and we can discuss your specific situation.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            What if I am not happy with the outfit when it arrives?
          </h3>
          <p>
            This is exactly why the live video approval process matters so much. Because you have seen and approved the exact item on video before it shipped, the risk of &ldquo;this is not what I ordered&rdquo; is dramatically reduced. In the event that a garment arrives with a documented fit error or quality defect attributable to production — not to changes in your body — our fit guarantee covers correction costs up to the specified amount in our engagement terms.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Can I see pricing before committing?
          </h3>
          <p>
            Yes — our <a href="/pricing" style={{ color: "#c7b28a" }}>pricing page</a> outlines our engagement structure. We believe in complete transparency on fees. The concierge fee covers our time, expertise, market access, and process management — not a markup on the outfit itself. You see the India price and the concierge fee as separate line items.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            What if family members in India want to be involved in the shopping?
          </h3>
          <p>
            This is common and welcome. Many families have mothers or aunties in India who want input on outfit selection. We can coordinate live video sessions that include family members joining from different locations — the bride in New Jersey, her mother in Ahmedabad, and her mother-in-law in London, all on the same call while we are physically in the market. This is one of the advantages of the live video format.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            How do customs duties work, practically speaking?
          </h3>
          <p>
            When your shipment arrives in the US via commercial courier (DHL, FedEx), US Customs will assess duties based on the declared value. The courier will notify you (or the customs broker they use) with a duties amount due before the package is released for final delivery. You pay this amount — typically via credit card or bank transfer — and the package is delivered within a day or two. We prepare all the documentation in advance to make this as smooth as possible and to minimize the chance of the package being held for additional inspection.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Is it possible to do all the sourcing in one India trip?
          </h3>
          <p>
            It is possible, and some families choose this path. A well-planned 5 to 7 day sourcing trip to India — typically covering Delhi and one or two regional cities — can yield most of the wedding wardrobe in one visit. The tradeoffs: it requires significant advance research to know where to go, it is physically exhausting, you will face pressure tactics at some markets, and carrying everything back involves customs declarations and baggage limits. We offer trip planning support as a separate service for families who want to go this route. Ask us about it.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            Do you help with jewelry, gifts, and non-clothing items, or only outfits?
          </h3>
          <p>
            We source across the full range of wedding needs — outfits, jewelry, ceremonial items, return gifts, and welcome bag components. Some families engage us for the complete wedding sourcing project; others engage us specifically for outfits and handle gifts themselves. Our <a href="/pricing" style={{ color: "#c7b28a" }}>engagement tiers</a> accommodate both. Download our <a href="/free-guides" style={{ color: "#c7b28a" }}>free NRI wedding sourcing checklist</a> for a full list of everything to plan for.
          </p>

          {/* ── Closing ── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            The Bottom Line
          </h2>
          <p>
            Shopping for an Indian wedding from the US is genuinely difficult — but it is not impossible to do beautifully, within budget, and without the anxiety that plagues so many NRI families going through this process for the first time.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The families who have the best experiences share a few things in common: they start early, they work with people they can trust, they insist on live video before approving any significant purchase, they budget for the full landed cost including duties, and they build in buffer time for the unexpected.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            CeremonyVerse was built specifically for this. We are not a vendor. We are not a marketplace. We are your sourcing partner — the people who are physically in the Indian markets, on video with you, making sure that what you fall in love with is what actually arrives at your door.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Your family deserves to show up to this wedding looking extraordinary — and you deserve to get there without losing your mind in the process. We would love to help make both of those things happen.
          </p>

          {/* ── CTA ── */}
          <div
            style={{
              background: "#2f2f2f",
              borderRadius: "8px",
              padding: "2rem",
              marginTop: "2.5rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.4rem",
                color: "#f8f6f2",
                marginBottom: "0.75rem",
              }}
            >
              Ready to Start?
            </p>
            <p
              style={{
                color: "#c7b28a",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Tell us about your wedding — dates, family size, ceremony types, and how much you have figured out so far. We will let you know exactly how we can help and what the process looks like for your situation. No obligation, no pressure.
            </p>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#c7b28a",
                color: "#2f2f2f",
                padding: "0.8rem 2rem",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Message Us on WhatsApp
            </a>
            <p style={{ color: "#6f6a63", fontSize: "0.85rem", marginTop: "1rem" }}>
              WhatsApp:{" "}
              <a href="https://wa.me/12153419990" style={{ color: "#c7b28a" }}>
                +1 (215) 341-9990
              </a>{" "}
              · Or browse our{" "}
              <a href="/pricing" style={{ color: "#c7b28a" }}>
                pricing
              </a>{" "}
              and{" "}
              <a href="/free-guides" style={{ color: "#c7b28a" }}>
                free guides
              </a>{" "}
              first.
            </p>
          </div>

          {/* ── Sources ── */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #e6dfd5",
            }}
          >
            <p style={{ fontSize: "0.8rem", color: "#6f6a63", lineHeight: 1.7 }}>
              <strong>Sources &amp; further reading:</strong>{" "}
              <a
                href="https://www.help.cbp.gov/s/article/Article-1402?language=en_US"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6f6a63" }}
              >
                US Customs and Border Protection — Duty-Free Exemption
              </a>{" · "}
              <a
                href="https://www.whitehouse.gov/presidential-actions/2025/07/suspending-duty-free-de-minimis-treatment-for-all-countries/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6f6a63" }}
              >
                White House Executive Order — Suspending De Minimis Treatment
              </a>{" · "}
              <a
                href="https://www.jmrodgers.com/august-2025-trade-policy-updates-india-brazil-and-de-minimis-reform/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6f6a63" }}
              >
                J.M. Rodgers Trade Policy Update — August 2025
              </a>{" · "}
              <a
                href="https://hts.usitc.gov/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6f6a63" }}
              >
                US International Trade Commission — Harmonized Tariff Schedule
              </a>
            </p>
          </div>
        </div>

        {/* Back link */}
        <div style={{ marginTop: "3rem" }}>
          <Link href="/" style={{ color: "#c7b28a", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Back to CeremonyVerse
          </Link>
        </div>
      </article>
    </main>
  );
}
