import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/",
  title: "How to Buy Authentic Kanchipuram Silk Sarees Online",
  description:
    "Spot fake Kanjivaram silk online — Zari Test, Silk Mark certification, and how to source real Kanchipuram sarees from India to the USA.",
  keywords: [
    "how to identify real Kanchipuram silk online",
    "authentic Kanjivaram sarees USA",
    "buy wedding silk sarees from India",
    "Kanchipuram silk saree USA NRI bride",
    "Silk Mark India certification",
    "real vs fake Kanjivaram saree",
  ],
  publishedTime: "2026-06-28",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline:
    "How to Buy Authentic Kanchipuram Silk Sarees Online: An NRI Bride's Guide",
  description:
    "Spot fake Kanjivaram silk online — Zari Test, Silk Mark certification, and how to source real Kanchipuram sarees from India to the USA.",
  url: "/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/",
  datePublished: "2026-06-28",
  keywords: [
    "how to identify real Kanchipuram silk online",
    "authentic Kanjivaram sarees USA",
    "buy wedding silk sarees from India",
    "Kanchipuram silk saree USA NRI bride",
    "Silk Mark India certification",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  {
    name: "Authentic Kanchipuram Silk Sarees Online Guide",
    url: "/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/",
  },
]);

export default function KanchipuramSilkGuideBlogPost() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <div
        style={{
          background: "#2f2f2f",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p
            style={{
              color: "#7a6841",
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            CeremonyVerse · June 2026
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
            How to Buy Authentic Kanchipuram Silk Sarees Online: An NRI
            Bride&apos;s Guide
          </h1>
          <p
            style={{
              color: "#7a6841",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Spot synthetic fakes sold as pure mulberry silk — and source a real
            heirloom Kanjivaram wedding saree directly from India&apos;s weavers
            to your US door.
          </p>
        </div>
      </div>

      {/* IMAGE PLACEHOLDER 1 */}
      {/*
        TODO: Drop an image at /public/images/authentic-kanchipuram-wedding-silk-saree.jpg
        Alt text: "A close-up of a real red and gold Kanchipuram silk saree border showing authentic weaving"
        Recommended size: 1200x800
      */}

      {/* Article body */}
      <article
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "3rem 1.5rem 5rem",
        }}
      >
        <div
          style={{
                        fontSize: "1.125rem",
            lineHeight: 1.8,
            color: "#2f2f2f",
          }}
        >
          <p>
            Planning a South Asian wedding from the United States comes with
            unique challenges. For many brides, finding an authentic,
            heirloom-quality Kanchipuram (Kanjivaram) silk saree is a top
            priority. The saree is not just a wedding outfit — it is a piece of
            heritage, often handed down through generations and chosen with the
            same care as a Western bride would choose her wedding gown.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            Unfortunately, shopping online from abroad can be a minefield. Many
            digital storefronts sell synthetic polyester blends or powerloom
            imitations passed off as pure mulberry silk, charging premium
            prices to unsuspecting NRI families. By the time the saree arrives
            at your US door, the wedding is weeks away and there is no time to
            replace a fake.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            This guide will teach you how to spot authentic silk, avoid common
            online scams, and safely source your dream wedding attire directly
            from the weavers of India. For a deeper look at how the full bridal
            trousseau fits together, see our{" "}
            <Link
              href="/blog/indian-wedding-outfit-checklist-every-ceremony/"
              style={{ color: "#7a6841" }}
            >
              Indian wedding outfit checklist for every ceremony
            </Link>
            .
          </p>

          {/* ─── 3 CRITICAL TESTS ─── */}
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
            3 Evidence Checks for a Kanchipuram Silk Claim
          </h2>

          <p>
            Remote review has limits. Ask the selected seller to state the
            fiber, zari, origin, weave, construction, and certification claims
            for the specific saree in writing, then keep the available evidence
            with the approval record. Video appearance alone is not authentication.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.35rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            1. Look for the &quot;Silk Mark India&quot; Certification
          </h3>
          <p>
            Ask whether Silk Mark documentation is available for the selected
            saree and request a clear view of the item-specific tag or record.
            A product name, seller reputation, or generic certificate should
            not be substituted for evidence tied to the actual item.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>The check:</strong> Record what documentation was requested,
            what the seller supplied for the selected piece, and what the seller
            is representing in the written order. Decide with those limits visible.
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.35rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            2. Request a Video Close-Up of the Zari Border
          </h3>
          <p>
            Pure Kanchipuram sarees are woven using a technique called{" "}
            <strong>Korvai</strong>, where the body and the border are woven
            separately on different looms and then joined together by hand.
            This interlocking join is the signature of authentic Kanjivaram
            work and is nearly impossible to replicate on a powerloom.
          </p>

          <div
            style={{
              background: "#faf8f4",
              border: "1px solid #e6dfd5",
              borderRadius: "12px",
              padding: "1.5rem",
              marginTop: "1rem",
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: "0.6rem" }}>
              The Authentic Sign
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Look closely at the seam where the body meets the border. You
              should see a distinct, slightly zigzag joint line where the two
              woven panels interlock. A small wavy line — almost like a tiny
              ladder — runs along the entire length of the border. This is the
              handwoven Korvai joint, and it is the single most reliable
              visual proof of an authentic Kanchipuram saree.
            </p>
          </div>

          <div
            style={{
              background: "#faf8f4",
              border: "1px solid #e6dfd5",
              borderRadius: "12px",
              padding: "1.5rem",
              marginTop: "1rem",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.6rem",
                color: "#8a4a3a",
              }}
            >
              The Fake Sign
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              If the transition between body and border is completely flat and
              seamless, the saree was likely mass-produced on a modern
              powerloom using synthetic threads. Powerlooms cannot replicate
              the Korvai join because they weave the entire saree in a single
              piece. Flat joins are the #1 red flag for fake Kanjivaram.
            </p>
          </div>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.35rem",
              fontWeight: 600,
              color: "#2f2f2f",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            3. The Visual Contrast Test
          </h3>
          <p>
            Genuine Kanjivaram silk has a natural, subtle luster that changes
            slightly depending on how the light hits it — the silk fibers
            refract light organically because they are protein-based. Synthetic
            polyester alternatives have a harsh, uniform, plastic-like shine
            that looks identical from every angle. The difference is
            unmistakable once you have seen both side by side.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>Always request high-definition video footage</strong> of
            the saree taken in natural daylight rather than under heavy studio
            photography lighting. Studio lights are designed to make cheap
            fabric look luxurious. Natural daylight exposes the true weave,
            color depth, and luster — and reveals the difference between pure
            silk and a synthetic imitation within seconds.
          </p>

          {/* ─── HIDDEN COSTS OF US BOUTIQUES ─── */}
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
            Compare Local and Remote Options on Equivalent Terms
          </h2>

          <p>
            A brick-and-mortar boutique may provide in-person viewing, fitting,
            local payment, and local return options. A remote India-based order
            may offer different inventory, customization, and costs while adding
            seller, shipping, customs, and remedy risk.
          </p>

          <p style={{ marginTop: "1rem" }}>
            For a useful comparison, record:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>The exact saree</strong> — fiber, zari, weave, origin representation,
              construction, included blouse material, and item-specific evidence
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>The service scope</strong> — in-person or remote review, measurements,
              blouse work, approvals, and excluded outside costs
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>The delivery plan</strong> — pickup or carrier, insurance option,
              shipping quote, customs estimate, and claim responsibility
            </li>
            <li>
              <strong>The remedy</strong> — cancellation, return, correction, alteration,
              replacement, or refund terms for the selected item
            </li>
          </ul>

          <p style={{ marginTop: "1rem" }}>
            Compare complete written quotes for equivalent items and responsibilities.
            There is no universal price range or savings percentage, and two products
            that share a category name should not be assumed identical.
          </p>

          {/* IMAGE PLACEHOLDER 2 */}
          {/*
            TODO: Drop an image at /public/images/buy-kanjivaram-sarees-online-usa.jpg
            Alt text: "An NRI bride wearing a premium custom-tailored Kanjivaram bridal saree"
            Recommended size: 1200x800
          */}

          {/* ─── CEREMONYVERSE SOLUTION ─── */}
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
            How CeremonyVerse Documents a Sourcing Scope
          </h2>

          <p>
            CeremonyVerse can help compare direct India sourcing with retail
            options using one record for the selected item, seller evidence,
            approvals, service fee, shipping estimate, customs estimate,
            alteration allowance, and remedy terms.
          </p>

          <p style={{ marginTop: "1rem" }}>
            Here is how an eligible concierge scope can document the
            shopping and verification process:
          </p>

          <div
            style={{
              background: "#fff",
              border: "1px solid #e6dfd5",
              borderRadius: "12px",
              padding: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "#7a6841",
                textTransform: "uppercase",
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
              }}
            >
              Live Hand-Selection
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Eligible tiers may include live video or current item media when
              the vendor and saree allow it. Use that evidence alongside the
              written fiber, zari, weave, origin, certification, blouse, and
              vendor terms; video alone does not authenticate those claims.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #e6dfd5",
              borderRadius: "12px",
              padding: "1.5rem",
              marginTop: "1rem",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "#7a6841",
                textTransform: "uppercase",
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
              }}
            >
              Physical Quality Verification
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Eligible tiers may include available pre-shipping media or
              another documented check. Record the seller&apos;s representations
              and any certification evidence for the selected saree. No remote
              review independently proves every fiber, zari, weave, or origin claim.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #e6dfd5",
              borderRadius: "12px",
              padding: "1.5rem",
              marginTop: "1rem",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "#7a6841",
                textTransform: "uppercase",
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
              }}
            >
              Transparent Sizing &amp; Stitching
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Use the measurement chart required by the selected blouse vendor
              and have a qualified local tailor help when appropriate. A
              documented review can reduce recording errors, but remote
              made-to-measure work can still require local alteration.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #e6dfd5",
              borderRadius: "12px",
              padding: "1.5rem",
              marginTop: "1rem",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "#7a6841",
                textTransform: "uppercase",
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
              }}
            >
              Documented Logistics
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              The written scope identifies the vendor, packer, carrier, available
              insurance, required documents, customs responsibilities, estimates,
              and claim process. Carrier and government assessments may differ from
              estimates, and no remote process eliminates shipment risk.
            </p>
          </div>

          {/* ─── RELATED GUIDES ─── */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e6dfd5",
              borderRadius: "12px",
              padding: "1.5rem",
              marginTop: "2.5rem",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.8rem",
                color: "#2f2f2f",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Related Guides for NRI Brides:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/kanchipuram-silk-sarees-usa/"
                  style={{ color: "#7a6841" }}
                >
                  Kanchipuram Silk Sarees USA — our dedicated service page
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/blog/how-to-buy-bridal-lehenga-from-india-usa/"
                  style={{ color: "#7a6841" }}
                >
                  How to buy a bridal lehenga from India when you live in the
                  USA
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/blog/indian-wedding-outfit-scams-nri-brides/"
                  style={{ color: "#7a6841" }}
                >
                  10 red flags every NRI bride must avoid when buying from
                  India
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/"
                  style={{ color: "#7a6841" }}
                >
                  US customs duties on Indian silk sarees — full breakdown
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── LEAD CTA ─── */}
          <div
            style={{
              background: "#faf8f4",
              border: "1px solid #e6dfd5",
              borderRadius: "12px",
              padding: "2rem",
              marginTop: "2.5rem",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#2f2f2f",
                marginBottom: "1rem",
              }}
            >
              Ready to Research Your Wedding Trousseau?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Request a consultation to organize item-specific vendor evidence,
              written approvals, complete cost inputs, and delivery responsibilities.
              No remote process can authenticate every claim or eliminate product risk.
            </p>
            <Link
              href="/contact/"
              style={{
                display: "inline-block",
                background: "#7a6841",
                color: "#fff",
                padding: "13px 32px",
                borderRadius: "999px",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Book Your CeremonyVerse Concierge Session Today
            </Link>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#4d403a",
                marginTop: "1rem",
              }}
            >
              Prefer WhatsApp?{" "}
              <a
                href="https://wa.me/12153419990?text=Hello%20CeremonyVerse!%20I%20want%20to%20source%20an%20authentic%20Kanchipuram%20silk%20saree."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7a6841", fontWeight: 600 }}
              >
                Message CeremonyVerse →
              </a>
            </p>
          </div>

          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.95rem",
              color: "#5e4a40",
            }}
          >
            <strong>About CeremonyVerse:</strong> We help families research
            Kanchipuram and <Link href="/banarasi-silk-sarees-usa/" style={{ color: "#7a6841" }}>Banarasi saree</Link> options, bridal lehengas, sherwanis, and family
            wedding attire. The selected vendor&apos;s item claims, available evidence,
            approval record, and pre-shipping review limits are documented within the chosen scope.{" "}
            <Link href="/contact/" style={{ color: "#7a6841" }}>
              Book a consultation
            </Link>{" "}
            to discuss your wedding trousseau.
          </p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
