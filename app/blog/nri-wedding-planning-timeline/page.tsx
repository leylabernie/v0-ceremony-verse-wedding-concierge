import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/nri-wedding-planning-timeline/",
  title: "NRI Wedding Planning Timeline: When to Order Indian Wedding Outfits from India (12-Month Checklist)",
  description: "Month-by-month NRI wedding planning timeline for sourcing Indian wedding outfits, jewelry, ceremonial items, return gifts, and welcome bags from India. Includes when to book video shopping sessions and how to avoid rush-shipping fees.",
  keywords: ["NRI wedding planning timeline", "when to order Indian wedding outfits from India", "Indian wedding planning checklist USA", "NRI bride 12 month timeline", "Indian wedding outfit ordering schedule"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "The NRI Wedding Planning Timeline: When to Order Everything from India",
  description: "A 12-month NRI wedding planning framework for U.S. and Canadian families sourcing outfits, jewelry, ceremonial items, gifts, and welcome bags from India.",
  url: "/blog/nri-wedding-planning-timeline/",
  datePublished: "2026-03-01",
  keywords: ["NRI wedding planning timeline", "Indian wedding planning checklist USA", "when to order wedding outfits from India", "NRI bride planning guide"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "The NRI Wedding Planning Timeline: When to Order Everything ", url: "/blog/nri-wedding-planning-timeline/" },
]);

export default function NriWeddingPlanningTimeline() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      <SeoNav />
      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · March 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            The NRI Wedding Planning Timeline: When to Order Everything from India
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            A month-by-month guide so nothing falls through the cracks — from the bridal lehenga to the welcome bags.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            A common planning risk is postponing wardrobe decisions until the wedding date, participant list, and ceremony schedule are already creating deadline pressure. The bridal look, family sarees, and wedding-party outfits may still be unresolved, while vendor production, approvals, shipping, customs, fitting, and alteration time remain.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Six months feels like a lot of time. For a domestic wedding in India, it might be. But for an NRI bride sourcing outfits from India while living in the United States, six months is tight. And for heavily embroidered, custom-made, or multi-ceremony bridal wardrobes? Six months is genuinely risky.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            This timeline exists to help you avoid that feeling. Whether your wedding is 14 months away or 7, read through this and figure out where you are — and what needs to happen next.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Why NRI Weddings Require More Lead Time
          </h2>
          <p>
            When you live in India, outfit shopping is an ongoing, iterative process. You visit stores. You get second opinions. You go back three times before committing. You&apos;re nearby when the blouse needs to be re-stitched.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            When you live in Philadelphia, Houston, or Toronto, none of that is possible. Every step — initial consultation, fabric selection, measuring, sampling, production, quality review, shipping, customs clearance, and final alteration — has to be planned in advance and executed with a clear window of time. A delay at any stage creates a domino effect that&apos;s very hard to recover from.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Carrier and customs timing can change by route, service level, shipment details, documentation, and inspection. Obtain current estimates for the actual shipment, preserve a meaningful buffer, and do not treat an outside estimate as a guarantee.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The stages below are an illustrative planning framework. Replace every range with current written estimates for the selected items and providers.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            12+ Months Out: Start the Conversation
          </h2>
          <p>
            At this stage, you don&apos;t need to have chosen anything. But you do need to start.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>Request a <Link href="/contact/" style={{ color: "#7a6841" }}>consultation</Link> to organize the family-approved ceremony schedule, item count, priorities, known estimates, and budget</li>
            <li>List every ceremony — sangeet, mehendi, church or mandap ceremony, reception, post-wedding events — and assign a rough outfit to each one</li>
            <li>Identify which family members need outfits sourced from India: both mothers, bridesmaids, groomsmen, flower girls, and any aunties who are part of the formal party</li>
            <li>Set a total outfit budget and rough allocation by category</li>
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            The goal here is not to purchase anything. The goal is to understand the full scope of what you&apos;re coordinating so nothing gets forgotten in a rushed rush later.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            10–12 Months Out: Bridal Lehenga Sourcing Begins
          </h2>
          <p>
            A custom bridal lehenga may be one of the more time-sensitive items, depending on the selected design, vendor capacity, customization, and approval process.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Why review it early?</strong> Vendor capacity, materials, customization, and approval timing can change. Ask the selected seller for a current production estimate and decision deadlines, then add shipping, customs, first-fitting, alteration, and contingency buffers.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>Review available vendor options based on the family-approved ceremony brief, palette, silhouette, and complete budget</li>
            <li>Narrow down to two or three options and request swatches or samples if possible</li>
            <li>Finalize your selection and confirm measurements — these will be used for stitching</li>
            <li>Place the order only after the vendor estimate, shipping plan, local-fitting window, and remedy terms are documented</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            8–10 Months Out: Groom&apos;s Sherwani and Bridesmaid Outfits
          </h2>
          <p>
            With the bridal lehenga confirmed, attention shifts to the groom and the bridal party.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Groom&apos;s sherwani:</strong> Production depends on the selected garment, vendor, materials, customization, and approvals. Record the current estimate and preserve a local-fitting and alteration plan.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Bridesmaid outfits:</strong> Group coordination may involve participants in different cities, vendor-specific measurements, individual approvals, quantity, packing, shipping, customs, and local alterations. Build the range from those actual inputs rather than a universal minimum.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>Finalize bridesmaid style (sarees, churidars, or indo-western), fabric, and color</li>
            <li>Collect measurements from every bridesmaid — build in 2 weeks of buffer for the ones who take a while to respond</li>
            <li>Place all bridesmaid orders at once so they arrive together</li>
            <li>Confirm the groom&apos;s sherwani measurements and place the order</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            6–8 Months Out: Family Outfits
          </h2>
          <p>
            Mothers, mothers-in-law, aunties, cousins — this layer is both emotionally important and logistically large.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Family wardrobe expectations vary by region, faith, ceremony, and household. Let the family approve each person&apos;s requirements, then document the selected item and vendor details.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>Have the color coordination conversation with both families — ideally the two mothers should complement each other without clashing</li>
            <li>Finalize fabrics and styles with each family member who needs a sourced outfit</li>
            <li>Collect measurements and preferences</li>
            <li>Place orders only after the selected vendor, item details, approvals, costs, timeline, and remedy terms are documented</li>
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            Note: Ask each participant what measurement help, comfort, mobility, care, and fitting support they need; do not assume those needs from age alone.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            4–6 Months Out: Jewelry, Accessories, and Ceremonial Items
          </h2>
          <p>
            Indian bridal jewelry — particularly custom-made sets or heirloom-quality pieces — requires meaningful lead time. If you are ordering from India, factor in the same customs and shipping considerations as clothing.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>Finalize bridal jewelry: necklace, earrings, maang tikka, bangles, and any piece specific to your regional tradition</li>
            <li>Order the groom&apos;s accessories: pocket squares, shoes, turban fabric or pagri if applicable</li>
            <li>Source ceremonial items: garlands, puja items, any ritual objects that need to come from India</li>
            <li>Confirm all outfits ordered so far have shipped or have confirmed dispatch dates</li>
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            As <a href="https://www.reddit.com/r/DesiWeddings/comments/1pw1bgo/what_most_nri_brides_dont_realize_about_ordering/" target="_blank" rel="noopener noreferrer" style={{ color: "#7a6841" }}>noted by NRI brides on DesiWeddings</a>, jewelry is often the most underestimated category for lead time. Custom or semi-custom pieces especially need to be ordered with the same intentionality as the lehenga.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            3–4 Months Out: Welcome Bags, Return Gifts, and Sweets
          </h2>
          <p>
            Wedding favors, return gifts (shagun boxes, mithai, or personalized items), and welcome bags for out-of-town guests are often bought in India and shipped to the US. This feels like a small logistical task, but it is not. Customs can hold food items. Weight restrictions apply to packages. Indian sweets have shelf lives.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>Finalize your return gift concept and vendor</li>
            <li>Place orders with enough lead time for shipping, customs, and any re-packaging needed on the US side</li>
            <li>Confirm arrival timing relative to your earliest guests&apos; arrival at the hotel</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            2–3 Months Out: Local Fittings and Alterations
          </h2>
          <p>
            By this point, your bridal lehenga, bridesmaid outfits, and family sarees should either be in hand or have confirmed shipping dates that put them in your hands soon.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>Schedule appointments with a local Indian tailor for final fittings — blouse alterations, fall and pico stitching on sarees, and hemming on lehengas</li>
            <li>Ask the selected local tailor for a current estimate and preserve time for any approved follow-up fitting</li>
            <li>Do not skip this step. Even well-made outfits sourced in India often need minor adjustments once worn on a US body in a fitting room</li>
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            This is also the time to review everything you have and identify any gaps. Missing a belt? A dupatta? A second pair of earrings? Three months out is manageable. Three weeks out is not.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            1 Month Out: Everything Should Be in Hand
          </h2>
          <p>
            <strong>The rule is simple:</strong> if it hasn&apos;t arrived yet, you should be tracking it daily.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Use an inventory record to identify anything still in production or transit and activate the documented backup plan when the remaining buffer is no longer acceptable.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Schedule a final outfit review with your planner or concierge: try everything on, confirm all alterations are complete, and do a full inventory against your ceremony-by-ceremony outfit list.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            What to Do If You&apos;re Starting Late (6 Months or Less)
          </h2>
          <p>
            It happens. Life is busy. Engagements run long. Planning got delayed.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            If the schedule is compressed, request current ready-made and limited-customization options, prioritize the couple&apos;s most important items, and keep a local backup. Feasibility depends on actual vendor and carrier confirmation.
          </p>
          <ol style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Bridal lehenga first</strong> — call your concierge today, not next week</li>
            <li><strong>Accept that some custom work may no longer be feasible;</strong> you may need to source from existing inventory or semi-custom options</li>
            <li><strong>Simplify where you can</strong> — coordinated ready-to-wear for bridesmaids is completely appropriate</li>
            <li><strong>Build in extra budget</strong> for expedited shipping and potential duty fees</li>
          </ol>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>For US tariffs and customs:</strong> An assessment can depend on classification, fiber, construction, country of origin, declared value, and the rules in effect on the entry date. Obtain shipment-specific guidance from the carrier or qualified customs professional; a concierge cannot control clearance timing or the final assessment.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Illustrative Four-Day Destination Wedding Schedule
          </h2>
          <p>
            For an illustrative four-day Gujarati destination wedding with Garba, <Link href="/haldi-outfits-usa/" style={{ color: "#7a6841" }}>Haldi</Link>, Vidhi, and <Link href="/reception-outfits-usa/" style={{ color: "#7a6841" }}>Reception</Link>, begin by mapping every wearer and event 10–12 months before the wedding. Prioritize the couple&apos;s custom pieces first, then confirm the wedding party and immediate-family scope, and leave time for documented approvals, shipping, customs, and local alterations.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            This is a planning framework, not a CeremonyVerse client case study or a delivery guarantee. Actual lead times depend on the garments, vendors, customization, destination, carrier, customs, and the family&apos;s approval timing.
          </p>

          {/* CTA Box */}
          <div style={{ background: "#2f2f2f", borderRadius: "8px", padding: "2rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "#f8f6f2", marginBottom: "0.75rem" }}>
              Ready to start planning?
            </p>
            <p style={{ color: "#7a6841", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Book a free consultation. Tell us your wedding date, your ceremonies, and where you are in the planning process — we&apos;ll take it from there.
            </p>
            <Link
              href="/contact/"
              style={{ display: "inline-block", background: "#7a6841", color: "#2f2f2f", padding: "0.8rem 2rem", borderRadius: "4px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", letterSpacing: "0.03em" }}
            >
              Book Free Consultation
            </Link>
            <p style={{ color: "#4d403a", fontSize: "0.95rem", marginTop: "1rem" }}>
              Or WhatsApp: <a href="https://wa.me/12153419990" style={{ color: "#7a6841" }}>+1 (215) 341-9990</a>
            </p>
          </div>

          {/* Sources */}
          <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid #e6dfd5" }}>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", lineHeight: 1.7 }}>
              <strong>Sources:</strong>{" "}
              <a href="https://g3fashion.com/blog/fashion/how-to-buy-lehenga-choli-in-the-usa-guide/" target="_blank" rel="noopener noreferrer" style={{ color: "#4d403a" }}>G3Fashion: How to Buy Lehenga Choli in the USA</a>{" · "}
              <a href="https://www.reddit.com/r/DesiWeddings/comments/1h0gqkp/timeline_to_buy_bridal_lehenga/" target="_blank" rel="noopener noreferrer" style={{ color: "#4d403a" }}>DesiWeddings: Timeline to Buy Bridal Lehenga</a>{" · "}
              <a href="https://www.reddit.com/r/DesiWeddings/comments/1pw1bgo/what_most_nri_brides_dont_realize_about_ordering/" target="_blank" rel="noopener noreferrer" style={{ color: "#4d403a" }}>DesiWeddings: What NRI Brides Don&apos;t Realize About Ordering</a>
            </p>
          </div>

          {/* Tagline */}
          <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#4d403a", fontStyle: "italic", lineHeight: 1.7 }}>
            CeremonyVerse is a US-based Indian wedding shopping concierge. Our strongest stated working relationships are in Surat and Delhi; other vendors are considered when they can be responsibly reviewed for the requested item.
          </p>

        </div>

        {/* Back to blog */}
        <div style={{ marginTop: "3rem" }}>
          <Link href="/blog/" style={{ color: "#7a6841", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Back to Blog
          </Link>

          {/* ─── COMMERCIAL CTA — directly connects blog readers to the buying funnel ─── */}
          <div style={{ background: "#faf8f5", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.75rem", marginTop: "2rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#7a6841", marginBottom: "0.6rem" }}>
              Ready to Start Sourcing?
            </p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "0.6rem" }}>
              Book a free consultation and map out your full sourcing timeline
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#4d403a", marginBottom: "1rem", lineHeight: 1.6 }}>
              We&apos;ll review your wedding date, family-approved ceremony list, item requirements, known estimates, and budget. The result is a documented planning range and next-action list—not an arrival guarantee.
            </p>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact/" style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>Book Free Consultation</Link>
              <Link href="/services/" style={{ display: "inline-block", background: "transparent", color: "#4d403a", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #7a6841" }}>See Services</Link>
              <Link href="/pricing/" style={{ display: "inline-block", background: "transparent", color: "#4d403a", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #e6dfd5" }}>See Pricing</Link>
            </div>
          </div>

          <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "#4d403a" }}>
            More helpful resources: <Link href="/services/" style={{ color: "#7a6841" }}>Our Services</Link> · <Link href="/how-it-works/" style={{ color: "#7a6841" }}>How It Works</Link> · <Link href="/pricing/" style={{ color: "#7a6841" }}>Pricing</Link> · <Link href="/faq/" style={{ color: "#7a6841" }}>FAQ</Link> · <Link href="/free-guides/" style={{ color: "#7a6841" }}>Free Guides</Link>
          </p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
