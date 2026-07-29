import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/how-to-buy-sherwani-from-india-usa/",
  title: "How to Buy a Sherwani from India to USA in 2026 — Groom's Complete Guide",
  description: "Step-by-step guide for grooms buying a sherwani from India and shipping to USA: fabric choices (silk vs velvet), how to take sherwani measurements, customs duties, shipping costs, and coordinating groomsmen outfits.",
  keywords: ["how to buy sherwani from India to USA", "buy sherwani online USA 2026", "groom sherwani India shipping customs", "sherwani measurements guide", "Indian groom outfit USA"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "How to Buy a Sherwani from India for a US Wedding (Complete Guide with Prices)",
  description: "Complete guide for grooms and groomsmen buying a sherwani from India to the USA \u2014 fabric, fit, customs, shipping, and how to coordinate the full wedding party.",
  url: "/blog/how-to-buy-sherwani-from-india-usa/",
  datePublished: "2026-03-01",
  keywords: ["how to buy a sherwani from India USA", "sherwani price India 2026", "buy sherwani online USA", "groom sherwani customs duties"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "How to Buy a Sherwani from India for a US Wedding (Complete ", url: "/blog/how-to-buy-sherwani-from-india-usa/" },
]);

export default function SherwaniGuidePage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · June 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            How to Buy a Sherwani from India for Your US Wedding: Prices, Sizing & Shipping
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            The complete guide for NRI grooms — real prices, sizing secrets, scam warnings, and how to get your sherwani delivered to your door without surprises.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            Most wedding advice online is written for brides. But if you are an NRI groom — or a parent, sibling, or friend helping one — you know that finding the right sherwani in the US is just as frustrating. US boutiques charge $800-$2,500 for sherwanis that cost a third of that in India. And buying from India online? That opens the door to scams, sizing disasters, and outfits that look nothing like the photo.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            At CeremonyVerse, we have sourced sherwanis for dozens of NRI grooms across the US — from California to New Jersey. This guide shares exactly what we have learned about buying a sherwani from India: what you should pay, how to get the right fit, the scams to watch for, and how to handle shipping and customs.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            How Much Does a Groom Sherwani Cost in India? (Delivered to the USA)
          </h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e6dfd5" }}>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>Category</th>
                  <th style={{ textAlign: "right", padding: "0.6rem 0", fontWeight: 600 }}>Price Range (INR)</th>
                  <th style={{ textAlign: "right", padding: "0.6rem 0", fontWeight: 600 }}>Approx. USD</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Budget (cotton-silk blend, light embroidery)</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>₹8,000 – ₹18,000</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>$95 – $210</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Mid-range (silk, machine + hand embroidery)</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>₹25,000 – ₹55,000</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>$295 – $650</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Premium (heavy silk, zardozi, fully hand-embroidered)</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>₹55,000 – ₹1,20,000</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>$650 – $1,410</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem 0" }}>High-end designer (fully custom)</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>₹1,20,000+</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>$1,410+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            <strong>What most NRI grooms spend:</strong> The sweet spot for most of our clients is the mid-to-premium range — roughly ₹35,000 to ₹75,000 ($410-$880). At this price point, you get a high-quality silk sherwani with genuine hand embroidery that looks significantly better than anything in the $1,500+ range at a US boutique. Planning your <Link href="/blog/indian-wedding-outfit-checklist-every-ceremony/" style={{ color: "#7a6841" }}>complete Indian wedding outfit checklist</Link> early helps you coordinate the groom&apos;s sherwani with what the bride and family are wearing.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            How to Take Sherwani Measurements at Home for the Best Fit
          </h2>

          <p>
            Sherwani sizing is the #1 issue NRI grooms face when ordering from India. Indian sizing charts are different from US sizing. A &quot;Large&quot; in India is often closer to a US Medium. And sherwanis are designed to be worn over a kurta, so the fit is intentionally looser — which means measurements matter even more.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>Get these 6 measurements right and your sherwani will fit perfectly:</strong>
          </p>

          <ol style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Chest:</strong> Measure around the fullest part of your chest, over a thin kurta or t-shirt. Add 2-3 inches for the inner kurta layer.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Shoulder width:</strong> Measure from the tip of one shoulder bone to the other. Sherwani shoulders should sit slightly broader than your natural shoulder for the traditional structured look.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Sleeve length:</strong> Measure from the shoulder tip to your wrist bone. Sherwani sleeves typically end at the wrist or 1 inch past.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Length:</strong> Measure from the top of your shoulder to 2-3 inches below your knee. Traditional sherwanis are knee-length or slightly longer.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Waist:</strong> Measure at your natural waistline, over the kurta.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Hip:</strong> Measure around the fullest part of your hips.</li>
          </ol>

          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Pro Tip: Always Order 1 Size Larger
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              If you are between sizes, always order the larger one. A sherwani can be taken in by a tailor, but letting it out is much harder (and sometimes impossible, depending on the embroidery). Budget $50-$150 for minor alterations at an Indian tailor in your US city.
            </p>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            What to Watch Out For: Common Sherwani Scams Targeting NRI Grooms
          </h2>

          <p>
            The sherwani market online is full of traps for NRI buyers. Here are the 5 most common scams we see grooms fall into:
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>1. The catalog photo scam.</strong> The seller shows you a professional photo of a ₹1,50,000 designer sherwani. What they deliver is a ₹15,000 replica made with cheap fabric and machine embroidery that looks flat and lifeless. <em>How to avoid it:</em> Demand a live video call where the seller shows you the actual sherwani — not a photo. Ask them to hold it up, show the embroidery close-up, and drape the fabric so you can see how it moves.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>2. The &quot;pure silk&quot; lie.</strong> Many sellers label synthetic silk blends as &quot;pure silk.&quot; Real silk has a distinctive sheen and drape that synthetic fabrics cannot replicate. <em>How to avoid it:</em> On a video call, ask the seller to do the burn test on a small thread from an inner seam — real silk smells like burnt hair and leaves a crumbly ash. Synthetic smells like plastic and leaves a hard bead.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>3. The sizing switch.</strong> You send your measurements. The workshop cuts the sherwani to a standard template instead — saving them time and fabric. When it arrives, it is &quot;close enough&quot; but does not fit right. <em>How to avoid it:</em> Ask for photos of the cutting process with a measuring tape visible against the fabric. At CeremonyVerse, we verify every cut against the submitted measurements before sewing begins.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>4. The color bait-and-switch.</strong> Ivory in a studio photo looks different from ivory in natural light. Gold embroidery can look yellow or bronze depending on the lighting. <em>How to avoid it:</em> Ask the seller to take photos in natural daylight near a window — not under yellow artificial lights. Better yet, do a video call during India daytime hours.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>5. The payment-before-delivery trap.</strong> The seller asks for 100% payment upfront. Once they have your money, they disappear, delay indefinitely, or send a completely different product. <em>How to avoid it:</em> Never pay more than 30-40% upfront. Use a payment method with buyer protection (credit card or PayPal). At CeremonyVerse, we use milestone payments — you only pay for the next stage after approving the previous one.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Shipping, Customs, and the Real Total Cost
          </h2>

          <p>
            The sherwani price is only the beginning. Here is what you will actually pay to get it to your US address:
          </p>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e6dfd5" }}>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>Cost Item</th>
                  <th style={{ textAlign: "right", padding: "0.6rem 0", fontWeight: 600 }}>Typical Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Sherwani (mid-range silk, hand embroidery)</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>$410 – $880</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>International shipping (DHL/FedEx express)</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>$60 – $150</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>US customs duties (12-18% for silk garments)</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>$50 – $160</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>US alterations (if needed)</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>$50 – $150</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem 0", fontWeight: 600 }}>Total realistic budget</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0", fontWeight: 600 }}>$570 – $1,340</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            <strong>Compare this to US boutiques:</strong> A sherwani of equivalent quality at an Indian boutique in New Jersey, Texas, or California typically costs $1,200-$2,500. Buying from India — even with all the extra costs — usually saves you $400-$1,000+. Read our full guide on <Link href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/" style={{ color: "#7a6841" }}>shipping wedding outfits from India to USA</Link> for customs and delivery timeline details.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Matching the Groomsmen: The Coordination Secret
          </h2>

          <p>
            One of the most common requests we get is coordinating the groom&apos;s sherwani with the groomsmen&apos;s outfits. Here is what works:
          </p>

          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Color palette coordination:</strong> The groom wears the richest shade (deep burgundy, emerald, midnight blue), while groomsmen wear lighter tones from the same family (blush pink, sage green, powder blue). This creates visual hierarchy in photos.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Fabric consistency:</strong> If the groom wears raw silk, the groomsmen should wear the same fabric in different colors — not a cheaper substitute that looks different under flash photography.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Embroidery detail matching:</strong> Use the same embroidery technique (zardozi, resham, mirror work) across all outfits, varying the density. Groom gets full embroidery, groomsmen get collar/cuff details.</li>
          </ul>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>Pro tip:</strong> Order all groomsmen outfits from the same workshop in India at the same time. This guarantees fabric dye lot consistency — crucial for photos. Ordering from different sellers often results in color mismatches that are obvious in group shots.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Timeline: When Should You Order?
          </h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e6dfd5" }}>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>Timeline Before Wedding</th>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>5 – 6 months out</td>
                  <td style={{ padding: "0.6rem 0" }}>Start browsing styles, finalize color palette with bride</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>4 – 5 months out</td>
                  <td style={{ padding: "0.6rem 0" }}>Place order with workshop; submit measurements</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>3 – 4 months out</td>
                  <td style={{ padding: "0.6rem 0" }}>Video approval of fabric and cut; production begins</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>2 – 3 months out</td>
                  <td style={{ padding: "0.6rem 0" }}>Final inspection; shipping to USA</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem 0" }}>1 – 2 months out</td>
                  <td style={{ padding: "0.6rem 0" }}>Arrives in US; alterations if needed; final fitting</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1.2rem" }}>
            Timing matters just as much for the groom as it does for the bride. See our <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" style={{ color: "#7a6841" }}>when to order your wedding outfits from India</Link> guide for a full month-by-month timeline that covers both bride and groom planning.
          </p>

          {/* ─── COMMERCIAL CTA — directly connects blog readers to the buying funnel ─── */}
          <div style={{ background: "#faf8f5", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.75rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#7a6841", marginBottom: "0.6rem" }}>
              Ready to Source Your Sherwani?
            </p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "0.6rem" }}>
              Skip the boutique markup — buy a custom sherwani from India, delivered to your US door
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#4d403a", marginBottom: "1rem", lineHeight: 1.6 }}>
              Live video shopping with India vendors, custom measurements, real fabric inspection before payment, and full customs + shipping handled. Starting at $249 for the Style Guide tier.
            </p>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/buy-sherwani-from-india-usa/" style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>Buy a Sherwani from India</Link>
              <Link href="/contact/" style={{ display: "inline-block", background: "transparent", color: "#4d403a", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #7a6841" }}>Book Free Consultation</Link>
              <Link href="/how-it-works/" style={{ display: "inline-block", background: "transparent", color: "#4d403a", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #e6dfd5" }}>How It Works</Link>
            </div>
          </div>

          {/* ─── RELATED GUIDES (Tier 2 Internal Linking) ─── */}
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "2.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Related Guides for NRI Grooms & Brides:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>
                  How much a bridal lehenga costs from India with shipping
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/indian-wedding-outfit-checklist-every-ceremony/" style={{ color: "#7a6841" }}>
                  Complete Indian wedding outfit checklist for the whole family
                </Link>
              </li>
              <li>
                <Link href="/blog/indian-wedding-outfit-scams-nri-brides/" style={{ color: "#7a6841" }}>
                  Common scams when buying wedding outfits from India
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── LEAD-FIRST CTA ─── */}
          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "2rem", marginTop: "2.5rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              A groom&apos;s sherwani is just as visible as the bride&apos;s lehenga in every wedding photo — but most NRI grooms leave it to the last minute and end up overpaying at a US rental shop or settling for something that doesn&apos;t fit right. Sourcing from India gives you better quality at half the price, if you plan ahead.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Want us to help you find the perfect sherwani?
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              <strong>Grab our free Groom&apos;s Outfit Planning Guide</strong> — sherwani measurement worksheet, price comparison table (India vs. US), and timeline for when to order so it arrives with time to spare. Enter your email and we&apos;ll send it over.
            </p>
            <Link href="/free-guides/" style={{ display: "inline-block", background: "#2f2f2f", color: "#7a6841", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginBottom: "1.2rem" }}>
              Download the Groom&apos;s Guide →
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", marginTop: "0.8rem" }}>
              Want us to find your sherwani for you? <Link href="/services/" style={{ color: "#7a6841", fontWeight: 600 }}>See how our groom sourcing works</Link> — live video shopping, custom measurements, delivery to your door.
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #e6dfd5", margin: "2.5rem 0" }} />

          <p style={{ fontSize: "0.95rem", color: "#5e4a40" }}>
            <strong>About CeremonyVerse:</strong> We are a US-based Indian wedding shopping concierge helping NRI families source authentic bridal lehengas, groom sherwanis, bridesmaid outfits, jewelry, and wedding essentials directly from India — with live video approval before anything ships. <Link href="/services/" style={{ color: "#7a6841" }}>See what we source</Link> or <Link href="/faq/" style={{ color: "#7a6841" }}>read our FAQ</Link>.
          </p>

        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
