import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/indian-wedding-outfit-scams-nri-brides/",
  title: "10 Remote Indian Wedding Outfit Risks: Vendor Evidence Checklist",
  description: "Real scam patterns NRI brides face buying lehengas online from India — fake Instagram sellers, bait-and-switch fabrics, stolen images, customs fraud — plus a 7-point vendor verification checklist.",
  keywords: ["Indian wedding outfit scams NRI brides", "fake lehenga seller Instagram India", "how to verify Indian wedding vendor online", "lehenga bait and switch scam", "avoid lehenga scam India to USA"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "How to Buy Lehengas from India Without Getting Scammed: 10 Red Flags for NRI Brides",
  description: "10 scam patterns NRI brides face buying lehengas from India \u2014 fake Instagram sellers, bait-and-switch fabrics, stolen images \u2014 and how to verify any vendor.",
  url: "/blog/indian-wedding-outfit-scams-nri-brides/",
  datePublished: "2026-03-01",
  keywords: ["indian wedding outfit scams NRI brides", "fake lehenga seller Instagram", "how to verify Indian wedding vendor", "lehenga bait and switch India"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "How to Buy Lehengas from India Without Getting Scammed: 10 R", url: "/blog/indian-wedding-outfit-scams-nri-brides/" },
]);

export default function ScamsGuidePage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>CeremonyVerse · June 2026</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            How to Buy a Lehenga from India Safely: 10 Scams NRI Brides Must Avoid
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Common remote-shopping warning signs and practical steps for documenting vendors, approvals, payments, measurements, and shipping.
          </p>
        </div>
      </div>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>Remote wedding-outfit shopping can expose buyers to stolen catalog images, seller-identity problems, payment risk, product substitutions, sizing disputes, shipping delays, and limited remedies. The checks below can reduce risk, but no checklist or concierge can guarantee a successful order.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Why NRI Brides Are Especially Vulnerable to Indian Wedding Vendor Scams</h2>

          <p>Cross-border buyers may be reviewing products through Instagram, WhatsApp, websites, or video while under event deadlines and without seeing the seller or item in person. If a dispute occurs, payment remedies, returns, and cross-border enforcement can be difficult or costly. That makes item-specific evidence and written terms important before paying.</p>

          <p style={{ marginTop: "1.2rem" }}>
            Understanding what <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>a bridal lehenga should actually cost from India</Link> is your first line of defense — if a price seems too good to be true, the outfit probably is too.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>1. The Catalog Photo Scam</h2>
          <p><strong>How it works:</strong> The seller shows you a stunning professional photo of a lehenga. You pay. What arrives is a cheap replica made with lower-quality fabric, machine embroidery instead of handwork, and colors that look nothing like the photo.</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to reduce the risk:</strong> Ask for current item media when available and compare it with the written order references. Live video can add evidence, but it does not prove every material claim or guarantee that the delivered item will be identical.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>2. The &quot;Pure Silk&quot; Lie</h2>
          <p><strong>How it works:</strong> A seller labels a synthetic blend as &quot;pure silk&quot; or &quot;100% Banarasi silk.&quot; You pay the premium price for silk. What arrives is polyester that looks acceptable in photos but feels cheap, does not drape well, and photographs poorly under wedding lighting.</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to reduce the risk:</strong> Ask the seller to state the selected item&apos;s fiber, weave, origin, certification, and return terms in writing and request any item-specific Silk Mark or other relevant documentation. Do not rely on a remote burn test, video appearance, product name, or seller confidence as conclusive authentication; use a qualified textile or certification professional when independent verification matters.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>3. The 100% Upfront Payment Trap</h2>
          <p><strong>How it works:</strong> The seller demands full payment before production begins. Once they have your money, they disappear, delay indefinitely, or send something completely different from what you ordered. With no payment protection, your money is gone.</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to reduce risk:</strong> Use a traceable payment method, obtain written terms, and tie any later payment milestones to documented approvals. CeremonyVerse states the applicable payment schedule in the signed proposal or service agreement.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>4. The Sizing Switch</h2>
          <p><strong>How it works:</strong> You send precise measurements. The workshop cuts to a standard template instead, saving time and fabric. When it arrives, it is &quot;close enough&quot; but does not fit properly — and alterations are limited because of the embroidery placement.</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to reduce the risk:</strong> Use the measurement chart required by the selected vendor, keep the approved chart in writing, and ask which production evidence is available. Remote made-to-measure clothing can still require local alteration.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>5. The Color Bait-and-Switch</h2>
          <p><strong>How it works:</strong> The photo shows a deep maroon. What arrives is bright red. The seller blames &quot;monitor differences.&quot; Ivory in a studio photo looks different from ivory in daylight. Gold embroidery can look brassy or yellow depending on the thread quality.</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to avoid it:</strong> Demand photos taken in natural daylight near a window — not under yellow studio lights. Better yet, do a video call during India daytime hours so you see the color in real-time. Keep a Pantone or fabric swatch of your desired color and hold it up on camera for comparison.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>6. The Designer Replica Scam</h2>
          <p><strong>How it works:</strong> Sellers advertise &quot;Sabyasachi-inspired&quot; or &quot;Manish Malhotra replica&quot; lehengas at 1/10th the price. What they deliver is a mass-produced piece with glued-on embellishments that fall off during the first wear. The embroidery is cardboard-stiff, the fabric is synthetic, and the fit is off.</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to reduce the risk:</strong> Buy a designer piece from the designer or an authorized seller. Otherwise, use inspiration only to communicate an original silhouette, palette, or detail direction and document the selected item on its own terms.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>7. The Customs &quot;Surprise&quot;</h2>
          <p><strong>How it works:</strong> The seller ships without proper customs documentation or under-declares the value. Your package gets held at US Customs, and the final assessment is substantially higher than expected. The seller claims it is &quot;not their responsibility.&quot;</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to avoid it:</strong> Confirm who handles customs documentation before ordering. Reputable sellers prepare proper commercial invoices with accurate fabric descriptions and HS codes. Ask for the estimated duty amount upfront. Read our <Link href="/blog/us-tariffs-indian-wedding-outfits-2026/" style={{ color: "#7a6841" }}>2026 US tariffs guide</Link> for current rates.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>8. The Shipping Delay Excuse</h2>
          <p><strong>How it works:</strong> The seller promises delivery in 4 weeks. At week 5, they blame &quot;workshop delays.&quot; At week 7, &quot;fabric shortage.&quot; At week 10, they stop responding. Your wedding is in 2 weeks and you have no outfit.</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to reduce the risk:</strong> Get the current vendor estimate, decision deadlines, available progress evidence, change process, shipping plan, and remedy terms in writing. Build a meaningful buffer based on the actual item and preserve a local backup.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>9. The Return Policy Lie</h2>
          <p><strong>How it works:</strong> The seller promises &quot;easy returns&quot; or &quot;satisfaction guaranteed.&quot; When the wrong item arrives, they claim custom orders are non-returnable, or they offer store credit (useless when you are in the US), or they ghost you completely.</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to reduce the risk:</strong> Get the return, cancellation, correction, replacement, alteration, or refund terms in writing before paying. Live video can add evidence when available, but it cannot eliminate the need for a remedy.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>10. The Missing Accessories Trap</h2>
          <p><strong>How it works:</strong> A listing or conversation may not make clear whether the skirt, blouse, dupatta, lining, can-can, petticoat, stitching, or accessories are included.</p>
          <p style={{ marginTop: "0.8rem" }}><strong>How to reduce the risk:</strong> Record every included piece, its stitched or unstitched status, customization, outside costs, and item references before ordering.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How to Verify an Indian Lehenga Seller Before Sending Money from the US</h2>

          <p>Before you send a single dollar to any vendor, run through this checklist:</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.6rem" }}><strong>Current item review:</strong> Ask whether the seller can show the current item or materials on live video and confirm in writing what is being shown. A refusal is one risk factor, not proof of fraud, and video alone does not authenticate a product claim.</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>Independent history:</strong> Look for verifiable business details, a consistent operating history, and independent reviews. Treat seller-supplied references and social posts as evidence to check, not proof by themselves.</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>Check account history:</strong> Review how long the account has operated, whether contact and business details are consistent, and whether images appear elsewhere under another seller&apos;s name.</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>Request available evidence:</strong> Ask whether an item-specific fabric swatch, certification, current media, or other documentation can be supplied and what it can or cannot prove.</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>Check payment terms:</strong> Review the chosen provider&apos;s current dispute, chargeback, timing, coverage, and exclusion rules before paying. A traceable payment method does not guarantee recovery.</li>
            <li><strong>Limit exposure:</strong> Consider whether a lower-value test order is practical before approving a high-value custom item, while recognizing that one successful order does not guarantee the next result.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>A More Documented Way to Buy a Lehenga from India</h2>

          <p>
            No method removes every risk. Useful controls include verifying the vendor, reviewing current media,
            documenting specifications, using traceable payments, keeping approval records, and understanding
            shipping and return terms. CeremonyVerse offers different levels of those controls by selected tier.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            Learn more about <Link href="/services/bridal-lehengas/" style={{ color: "#7a6841" }}>bridal lehenga sourcing from India</Link> — with itemized quotes, eligible live review, and US delivery coordination.
          </p>

          {/* ─── COMMERCIAL CTA — directly connects blog readers to the buying funnel ─── */}
          <div style={{ background: "#faf8f5", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.75rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#7a6841", marginBottom: "0.6rem" }}>
              Tired of Worrying About Scams?
            </p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "0.6rem" }}>
              Compare bridal lehenga options with documented vendor and item evidence
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#4d403a", marginBottom: "1rem", lineHeight: 1.6 }}>
              Eligible tiers include live video or documented review, written approvals, and pre-shipping checks.
              Product purchases, vendor terms, shipping, customs, and remedies remain governed by the applicable scope.
            </p>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>Review Bridal Lehenga Sourcing</Link>
              <Link href="/contact/" style={{ display: "inline-block", background: "transparent", color: "#4d403a", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #7a6841" }}>Schedule a Free 30-Minute Consultation</Link>
              <Link href="/how-it-works/" style={{ display: "inline-block", background: "transparent", color: "#4d403a", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #e6dfd5" }}>How It Works</Link>
            </div>
          </div>

          {/* ─── RELATED GUIDES (Tier 2 Internal Linking) ─── */}
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "2.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Related Guides for NRI Brides:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>
                  How much a bridal lehenga costs from India with shipping
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" style={{ color: "#7a6841" }}>
                  When to order your wedding outfits so nothing arrives late
                </Link>
              </li>
              <li>
                <Link href="/services/bridal-lehengas/" style={{ color: "#7a6841" }}>
                  How our bridal lehenga sourcing documents item evidence and approvals
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── LEAD-FIRST CTA ─── */}
          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "2rem", marginTop: "2.5rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              These patterns illustrate common remote-shopping risks; they are not CeremonyVerse client stories. A documented process can reduce risk, but it cannot guarantee a successful order.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Want the free vendor-red-flags guide?
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Open the no-email-gate resource library and choose Vendor Red Flags for an evidence, payment, customization, and shipping-risk review you can use before ordering.
            </p>
            <Link href="/free-guides/" style={{ display: "inline-block", background: "#2f2f2f", color: "#7a6841", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginBottom: "1.2rem" }}>
              Open Free Vendor Resources →
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", marginTop: "0.8rem" }}>
              Want help organizing the evidence? <Link href="/buy-indian-wedding-outfits-from-india/" style={{ color: "#7a6841", fontWeight: 600 }}>See CeremonyVerse services</Link> for documented options, measurements, approvals, and delivery responsibilities. <Link href="/contact/" style={{ color: "#7a6841", fontWeight: 600 }}>Request a free 30-minute consultation</Link> to see whether the service fits your needs.
            </p>
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "#5e4a40" }}><strong>About CeremonyVerse:</strong> We help families research Indian wedding outfits, document measurements and approvals, and coordinate the responsibilities included in the selected service scope. <Link href="/faq/" style={{ color: "#7a6841" }}>Read our FAQ</Link> or <Link href="/how-it-works/" style={{ color: "#7a6841" }}>learn how we work</Link>.</p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
