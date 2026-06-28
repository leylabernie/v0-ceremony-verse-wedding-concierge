import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  path: "/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/",
  title: "How to Buy Authentic Kanchipuram Silk Sarees Online: An NRI Bride's Guide",
  description:
    "Spot fake Kanjivaram silk online. The Zari Test, Silk Mark India certification, Korvai border inspection, and how to source real Kanchipuram wedding sarees from India to the USA without getting scammed.",
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
    "Spot fake Kanjivaram silk online. The Zari Test, Silk Mark India certification, Korvai border inspection, and how to source real Kanchipuram wedding sarees from India to the USA without getting scammed.",
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
              color: "#a69260",
              fontSize: "0.8rem",
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
              color: "#a69260",
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
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
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
              href="/blog/indian-wedding-outfit-checklist-every-ceremony"
              style={{ color: "#a69260" }}
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
            3 Critical Tests to Identify Real Kanchipuram Silk
          </h2>

          <p>
            If you cannot physically touch the fabric before buying, you need
            to verify that your seller performs rigorous quality checks.
            Authentic Kanchipuram sarees are defined by pure mulberry silk
            yarns twisted with solid silver wire and dipped in 24k gold thread
            (Zari). Here is how experts separate real heirloom pieces from
            cheap imitations.
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
            The government of India protects traditional weavers through the
            Silk Mark Organization of India (SMOI). Every genuine pure silk
            saree comes with a secure, non-reusable holographic tag containing
            a unique identification number. This tag is your single most
            reliable proof that the saree is woven from pure mulberry silk
            rather than a synthetic blend.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>The rule:</strong> If an online boutique cannot show you a
            physical Silk Mark certificate for your specific piece — with the
            holographic tag visible in HD video — do not buy it. Reputable
            sellers will happily hold the tag up to the camera; scammers will
            deflect with claims like &quot;we forgot to attach it&quot; or
            &quot;it will arrive in the parcel.&quot;
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
            The Hidden Costs of Buying from US Indian Boutiques
          </h2>

          <p>
            Many NRI brides turn to brick-and-mortar boutiques in major US hubs
            like New Jersey, Chicago, or the Bay Area out of convenience. The
            idea of touching the fabric in person feels safer than buying
            online. However, these physical storefronts come with massive
            markups that often double or triple the actual artisan price.
          </p>

          <p style={{ marginTop: "1rem" }}>
            When you buy locally in the US, you are not just paying for the
            saree. You are paying for:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>The store&apos;s high commercial rent</strong> in a South
              Asian neighborhood (often $8,000–$20,000/month for a 1,200 sq ft
              boutique in Jersey City or Hicksville)
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>International import middleman fees</strong> — most US
              boutiques buy from a US-based importer who already added a
              30–50% margin on top of the Indian wholesale price
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>Expensive inventory overhead</strong> — bridal silk
              sarees sit in inventory for 6–18 months, and the carrying cost is
              baked into the price tag
            </li>
            <li>
              <strong>Limited selection</strong> — a typical US boutique
              carries 30–80 bridal silk sarees. India&apos;s heritage retailers
              carry thousands.
            </li>
          </ul>

          <p style={{ marginTop: "1rem" }}>
            This can inflate the price of a standard $500 artisan saree up to
            $1,200 or more. For a true heirloom Kanjivaram with heavy zari
            work, a US boutique will charge $2,500–$5,000 for the exact same
            saree that costs $900–$1,800 in India. Sourcing directly from the
            weavers of Tamil Nadu or trusted heritage retailers in India allows
            you to skip these retail markups entirely.
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
            How CeremonyVerse Protects NRI Brides Sourcing Online
          </h2>

          <p>
            If you want the wholesale cost savings of shopping directly in
            India without the logistical stress, CeremonyVerse bridges the gap.
            We act as your trusted, personal boots on the ground — verifying
            every saree before a single dollar leaves your account.
          </p>

          <p style={{ marginTop: "1rem" }}>
            Here is how our elite concierge service guarantees an authentic
            shopping experience:
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
                color: "#a69260",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
              }}
            >
              Live Hand-Selection
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              We do not rely on static catalog photos. Our team conducts live
              video shopping sessions with vetted, heritage silk weavers and
              premium boutiques across India. You see the exact weight, drape,
              and color of the saree in real-time — and you can ask the weaver
              questions directly through us.
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
                color: "#a69260",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
              }}
            >
              Physical Quality Verification
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Once a saree is selected, our team physically inspects the piece
              in India. We verify the Korvai borders, test the fabric weight,
              and confirm the presence of the official Silk Mark India
              holographic tag. We film the entire inspection in natural
              daylight so you can see exactly what is being shipped.
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
                color: "#a69260",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
              }}
            >
              Transparent Sizing &amp; Stitching
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              We host a three-way video call with an expert tailor (Masterji)
              to map out your blouse measurements perfectly, avoiding any
              remote tailoring errors. The master tailor walks you through each
              measurement point on a live call, and our team visually verifies
              how you take the measurements so nothing is left to
              interpretation.
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
                color: "#a69260",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
              }}
            >
              Secure Logistics
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              We manage the entire export process, handle US customs textile
              declarations, and securely box your bridal wear for direct,
              insured delivery to your doorstep in the United States. We also
              itemize the customs duties upfront so there are no surprise
              charges when the parcel clears the border.
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
                  href="/kanchipuram-silk-sarees-usa"
                  style={{ color: "#a69260" }}
                >
                  Kanchipuram Silk Sarees USA — our dedicated service page
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/blog/how-to-buy-bridal-lehenga-from-india-usa"
                  style={{ color: "#a69260" }}
                >
                  How to buy a bridal lehenga from India when you live in the
                  USA
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/blog/indian-wedding-outfit-scams-nri-brides"
                  style={{ color: "#a69260" }}
                >
                  10 red flags every NRI bride must avoid when buying from
                  India
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/shipping-indian-wedding-outfits-usa-customs-duties"
                  style={{ color: "#a69260" }}
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
              Ready to Source Your Authentic Wedding Trousseau?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Skip the boutique stress and get direct access to India&apos;s
              finest bridal artisans. Book your free 30-minute consultation and
              we&apos;ll walk you through how to verify authentic Kanchipuram
              silk — live, on video, before you commit a dollar.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#a69260",
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
                fontSize: "0.85rem",
                color: "#6f6a63",
                marginTop: "1rem",
              }}
            >
              Prefer WhatsApp?{" "}
              <a
                href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20source%20an%20authentic%20Kanchipuram%20silk%20saree."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a69260", fontWeight: 600 }}
              >
                Message Bhamini directly →
              </a>
            </p>
          </div>

          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.85rem",
              color: "#5e4a40",
            }}
          >
            <strong>About CeremonyVerse:</strong> We source authentic
            Kanchipuram silk sarees, bridal lehengas, sherwanis, and family
            wedding attire directly from India&apos;s heritage weavers for NRI
            brides in the USA. Every saree is verified with the Silk Mark India
            holographic tag and physically inspected before shipping.{" "}
            <Link href="/contact" style={{ color: "#a69260" }}>
              Book a consultation
            </Link>{" "}
            to discuss your wedding trousseau.
          </p>
        </div>
      </article>
    </main>
  );
}
