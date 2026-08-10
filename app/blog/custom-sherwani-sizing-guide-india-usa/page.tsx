import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/custom-sherwani-sizing-guide-india-usa/",
  title:
    "Custom Sherwani Sizing Guide: Source from India, Fit in the US",
  description:
    "Five important sherwani measurements, fabric-selection guidance, and practical steps to reduce remote custom-fit risk.",
  keywords: [
    "custom sherwani online USA",
    "Indian groom wear shopping from India",
    "men's wedding sherwani sizing guide",
    "how to measure for sherwani at home",
    "buy sherwani from India USA",
    "Banarasi brocade vs raw silk sherwani",
  ],
  publishedTime: "2026-06-28",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline:
    "Sizing and Sourcing a Custom Men's Sherwani from India Without Leaving the US",
  description:
    "Five important sherwani measurements, fabric-selection guidance, and practical steps to reduce remote custom-fit risk.",
  url: "/blog/custom-sherwani-sizing-guide-india-usa/",
  datePublished: "2026-06-28",
  keywords: [
    "custom sherwani online USA",
    "Indian groom wear shopping from India",
    "men's wedding sherwani sizing guide",
    "how to measure for sherwani at home",
    "buy sherwani from India USA",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  {
    name: "Custom Sherwani Sizing & Sourcing Guide",
    url: "/blog/custom-sherwani-sizing-guide-india-usa/",
  },
]);

export default function CustomSherwaniSizingGuideBlogPost() {
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
            Sizing and Sourcing a Custom Men&apos;s Sherwani from India Without
            Leaving the US
          </h1>
          <p
            style={{
              color: "#7a6841",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            The 5 measurements every groom must get right, the fabric
            differences between Banarasi brocade and raw silk, and how to
            reduce custom-fit risk when you cannot fly to India.
          </p>
        </div>
      </div>

      {/* IMAGE PLACEHOLDER 1 */}
      {/*
        TODO: Drop an image at /public/images/custom-sherwani-online-usa-groom.jpg
        Alt text: "An Indian groom wearing a custom tailored ivory raw silk wedding sherwani"
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
            For an Indian groom planning a wedding in the United States,
            finding the perfect sherwani is a major milestone. A wedding
            sherwani is not just a suit — it is a structured, regal garment
            that must drape flawlessly across the shoulders and torso. The
            silhouette is what makes a sherwani look royal, and that silhouette
            depends entirely on precise measurements and expert tailoring.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            Unfortunately, buying custom menswear online from thousands of
            miles away can be incredibly stressful. A single inch of error in a
            digital form can result in a jacket that is too tight across the
            chest or arms that are too short to move comfortably during the
            ceremony. And unlike a Western suit, a sherwani cannot be easily
            altered at a US tailor — the embroidery, button placement, and
            structured shoulder pads all need to be right the first time.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            This guide breaks down the essential measurements every groom
            needs, how to evaluate premium Indian fabrics remotely, and how to
            plan for a better custom fit from abroad. For a broader look at
            the full groom outfit checklist, see our{" "}
            <Link
              href="/blog/indian-wedding-outfit-checklist-every-ceremony/"
              style={{ color: "#7a6841" }}
            >
              Indian wedding outfit checklist for every ceremony
            </Link>
            .
          </p>

          {/* ─── 5 CRITICAL MEASUREMENTS ─── */}
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
            The 5 Critical Measurements Every Groom Must Get Right
          </h2>

          <p>
            Never rely on standard US suit sizes (like 40R or 42L) when
            ordering a custom sherwani. Indian tailoring relies on precise,
            close-to-body measurements, and US suit sizes use a different
            fitting philosophy (looser, drop-6 chest-to-waist ratio) that does
            not translate to the structured silhouette of a sherwani.
          </p>

          <p style={{ marginTop: "1rem" }}>
            For the ultimate fit, have a professional tailor or a trusted
            friend measure you using this exact checklist:
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
            <ol style={{ paddingLeft: "1.2rem", margin: 0 }}>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Shoulder Width:</strong> Measure from the outer edge
                of one shoulder bone, straight across the back, to the outer
                edge of the other shoulder bone. A sherwani has structured
                shoulder pads; if this measurement is off, the entire silhouette
                collapses. The shoulder seam must sit exactly on the bone —
                even half an inch too wide makes the jacket look like
                hand-me-down.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Chest Circumference:</strong> Wrap the tape measure
                around the fullest part of your chest, keeping it flat under
                your armpits. Do not puff out your chest while being measured —
                this is the most common mistake grooms make and it adds 1–2
                inches that result in a loose, sloppy jacket.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Armhole &amp; Bicep:</strong> Sherwani sleeves are
                narrower than Western suit sleeves. Measure around your armpit
                and the widest part of your bicep to ensure you can raise your
                arms during the wedding rituals. You should be able to lift
                your arms to shoulder height without the entire jacket riding
                up.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Sleeve Length:</strong> Measure from the shoulder bone
                down to your wrist joint, keeping your arm relaxed at your
                side. The sleeve cuff should rest exactly at the wrist bone —
                any shorter and you look like you outgrew the jacket, any
                longer and the cuff folds over your hand and hides your
                wedding ring.
              </li>
              <li>
                <strong>Jacket Length:</strong> Measure from the base of your
                neck straight down to just below your knee. The ideal length
                depends on your height and the specific style (e.g., Achkan vs.
                asymmetric cut). A traditional sherwani falls below the knee;
                an Achkan is longer and more formal.
              </li>
            </ol>
          </div>

          <div
            style={{
              background: "#faf8f4",
              border: "1px solid #e6dfd5",
              borderRadius: "12px",
              padding: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: "0.8rem" }}>
              Bonus: 3 More Measurements for a Truly Bespoke Fit
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              If your concierge service offers it, also capture{" "}
              <strong>neck circumference</strong> (for the collar),{" "}
              <strong>waist circumference</strong> (for the internal drawstring
              of the churidar), and <strong>back length</strong> (from
              shoulder blade to waist, for the back seam). These three turn a
              good fit into a flawless one.
            </p>
          </div>

          {/* ─── CHOOSING THE RIGHT FABRIC ─── */}
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
            Choosing the Right Fabric for Your Wedding Theme
          </h2>

          <p>
            When browsing photos online, different fabrics can look strikingly
            similar, but they behave very differently in real life. A fabric
            that photographs beautifully under studio lights can become a
            sweaty, uncomfortable nightmare under July sun at an outdoor
            ceremony. Here is what to look for based on your wedding climate
            and style:
          </p>

          {/* IMAGE PLACEHOLDER 2 */}
          {/*
            TODO: Drop an image at /public/images/mens-wedding-sherwani-sizing-guide.jpg
            Alt text: "Close up of premium hand-embroidered Zardozi details on a groom sherwani jacket"
            Recommended size: 1200x800
          */}

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
              Banarasi Brocade
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Features raised, intricate patterns woven directly into silk
              threads. It offers a structured, heavy look that is perfect for
              traditional indoor or winter weddings. Banarasi brocade holds its
              shape beautifully and photographs with a deep, luxurious
              sheen — but it is heavier than other options and can be
              uncomfortable above 80°F. Best for evening receptions and
              formal daytime ceremonies.
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
              Raw Silk
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Known for its distinct texture and subtle, masculine matte
              finish. It is lightweight, holds structured embroidery
              beautifully, and is highly breathable for outdoor spring or
              summer celebrations. Raw silk is the most versatile fabric choice
              — it works for day weddings, beach weddings, and destination
              weddings in Mexico or the Caribbean. The matte finish also
              photographs more naturally than high-shine fabrics.
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
              Premium Velvet
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Gives an incredibly rich, deep color payout and a royal drape. It
              is best reserved for formal, evening receptions or colder winter
              climates. Velvet absorbs light, so deep emerald, navy, and
              burgundy velvets photograph with a depth that no other fabric can
              match. However, velvet is heavy and traps heat — never choose it
              for a summer outdoor event, no matter how beautiful it looks in
              the catalog.
            </p>
          </div>

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
            How CeremonyVerse Helps Reduce Remote Sizing Risk
          </h2>

          <p>
            Remote made-to-measure clothing can still need adjustment.
            CeremonyVerse helps document the selected vendor&apos;s measurement
            requirements and approvals while preserving a local-fitting and
            alteration plan.
          </p>

          <p style={{ marginTop: "1rem" }}>
            Here is how the available process can reduce recording and coordination risk:
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
              Documented Measurement Review
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Use the measurement chart required by the selected vendor and
              have a qualified local tailor help when appropriate. Eligible
              tiers may include a scheduled review of the completed chart and
              written approval before production. This can reduce recording
              errors but cannot guarantee fit.
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
              Fabric and Embroidery Inspection
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Ask for current media and written representations for the
              selected fabric, lining, embroidery, color, and construction.
              Eligible live review may add evidence when the vendor and item
              allow it, but screen color and video do not prove every material
              or handwork claim.
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
              The Pre-Shipment Fitting Check
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Eligible tiers may include available finished-item media or
              another documented pre-shipping check when the vendor and item
              allow it. Compare the evidence with the approved order record.
              Any correction, alteration, replacement, or refund follows the
              applicable signed terms.
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
              Related Guides for NRI Grooms:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/buy-sherwani-from-india-usa/"
                  style={{ color: "#7a6841" }}
                >
                  Buy a Sherwani from India — Delivered to Your US Door
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/blog/how-to-buy-sherwani-from-india-usa/"
                  style={{ color: "#7a6841" }}
                >
                  How to Buy a Sherwani from India — complete guide with prices
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/blog/indian-wedding-outfit-checklist-every-ceremony/"
                  style={{ color: "#7a6841" }}
                >
                  Groom outfit checklist for every ceremony
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/indian-wedding-outfit-scams-nri-brides/"
                  style={{ color: "#7a6841" }}
                >
                  Red flags to avoid when buying Indian wedding outfits online
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
              Ready to Design Your Custom Wedding Sherwani?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Get the elite look of premium Indian designers without the
              complete written local and remote quotes. Request a consultation
              — we&apos;ll walk you through the 5 critical measurements, the
              fabric choice for your wedding climate, and a transparent price
              breakdown.
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
                href="https://wa.me/12153419990?text=Hello%20CeremonyVerse!%20I%20want%20to%20talk%20about%20a%20custom%20sherwani%20from%20India."
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
            <strong>About CeremonyVerse:</strong> We source custom sherwanis,
            Indo-Western suits, and full groom wedding attire directly from
            India&apos;s premium menswear designers for NRI grooms in the USA.
            Every sherwani goes through a live Masterji measurement call and a
            pre-shipment fitting on a custom mannequin before it ships.{" "}
            <Link href="/contact/" style={{ color: "#7a6841" }}>
              Book a consultation
            </Link>{" "}
            to discuss your wedding outfit.
          </p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
