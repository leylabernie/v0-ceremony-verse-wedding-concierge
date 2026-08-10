import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/how-to-choose-indian-wedding-jewelry-usa/",
  title: "How to Choose Indian Wedding Jewelry in the USA",
  description:
    "How to choose Indian wedding jewelry from the USA — Kundan vs Polki vs Temple vs Meenakari — BIS Hallmark verification, fake red flags, and how NRI brides source bridal sets from India.",
  keywords: [
    "how to choose Indian wedding jewelry USA",
    "Kundan vs Polki jewelry difference",
    "authentic Indian bridal jewelry USA",
    "BIS Hallmark gold jewelry India",
    "buy Indian wedding jewelry from India",
    "NRI bride jewelry guide",
    "temple jewelry vs kundan jewelry",
  ],
  publishedTime: "2026-07-03",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline:
    "How to Choose Indian Wedding Jewelry in the USA: NRI Bride's Complete Guide",
  description:
    "How to choose Indian wedding jewelry from the USA — Kundan vs Polki vs Temple vs Meenakari — BIS Hallmark verification, fake red flags, and how NRI brides source bridal sets from India.",
  url: "/blog/how-to-choose-indian-wedding-jewelry-usa/",
  datePublished: "2026-07-03",
  keywords: [
    "how to choose Indian wedding jewelry USA",
    "Kundan vs Polki jewelry difference",
    "authentic Indian bridal jewelry USA",
    "BIS Hallmark gold jewelry India",
    "buy Indian wedding jewelry from India",
    "NRI bride jewelry guide",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  {
    name: "How to Choose Indian Wedding Jewelry USA",
    url: "/blog/how-to-choose-indian-wedding-jewelry-usa/",
  },
]);

export default function HowToChooseIndianWeddingJewelryBlogPost() {
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
            CeremonyVerse · July 2026
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
            How to Choose Indian Wedding Jewelry in the USA: An NRI
            Bride&apos;s Complete Guide
          </h1>
          <p
            style={{
              color: "#7a6841",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Understand the difference between Kundan, Polki, Temple, and
            Meenakari jewelry — and learn how NRI brides source authentic,
            heirloom-quality bridal sets from India without getting scammed by
            fake stones or inflated US boutique markups.
          </p>
        </div>
      </div>

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
            For an Indian bride, the wedding jewelry is just as defining as the
            lehenga itself. It frames the face in every photograph, sits
            against the bride&apos;s skin for 10 to 14 hours of ceremonies, and
            — if chosen well — becomes an heirloom handed down to the next
            generation. But for NRI brides living in the United States,
            choosing the right bridal jewelry introduces a layer of complexity
            that locally-based brides simply do not face.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            Jewelry decisions can affect color coordination, neckline fit,
            comfort, weight, movement, photography, and the complete budget.
            Review the selected outfit and ceremony requirements first, then
            record the jewelry specifications and approval evidence.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            This guide walks through everything an NRI bride in the USA needs
            to know: the four main jewelry styles, how to match jewelry to
            your outfit and ceremonies, the hidden costs of buying from US
            Indian boutiques, the four red flags that expose fake Kundan and
            Polki online, and how to safely source authentic bridal sets
            directly from India. For the broader trousseau picture, see our{" "}
            <Link
              href="/blog/indian-wedding-outfit-checklist-every-ceremony/"
              style={{ color: "#7a6841" }}
            >
              Indian wedding outfit checklist for every ceremony
            </Link>
            .
          </p>

          {/* ─── 4 MAIN STYLES ─── */}
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
            The 4 Main Types of Indian Bridal Jewelry — and What They Mean
          </h2>

          <p>
            These are broad product categories, not universal cultural rules.
            Materials, construction, terminology, and ceremony use vary by
            seller and family. Let the couple, family, and any relevant ceremony
            authority approve what is appropriate.
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
            1. Kundan — The North Indian Bridal Standard
          </h3>
          <p>
            Kundan is the most recognizable Indian bridal jewelry style in the
            world. It originated in the royal courts of Rajasthan and Gujarat
            and is built by setting uncut glass stones — usually foil-backed
            — into 24-karat gold or gold-plated frames, then surrounding each
            stone with intricate gold filigree. The look is opulent, symmetrical,
            and unmistakably bridal.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>Compare:</strong> base metal, stone representation, setting,
            plating, gram weight, included pieces, dimensions, comfort, care,
            item-specific evidence, and the current complete quote.
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
            2. Polki — The Uncut Diamond Heirloom
          </h3>
          <p>
            Polki is often confused with Kundan, but they are fundamentally
            different. Where Kundan uses foil-backed glass stones, Polki uses
            natural, uncut diamonds — flat, rose-cut, and slightly irregular.
            Polki is older, rarer, and substantially more expensive than
            Kundan. It has a softer, warmer sparkle than faceted diamonds
            because the stones are not precision-cut.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>Compare:</strong> the exact stone and treatment representation,
            base and precious-metal information, gram weight, setting, included
            pieces, any available certification or hallmark, seller terms, and
            current complete quote. Price or video alone does not authenticate stones.
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
            3. Temple Jewelry — The South Indian Heirloom
          </h3>
          <p>
            Temple jewelry is the opposite aesthetic from Kundan and Polki. It
            is made from solid 22-karat gold (or high-quality gold plate over
            silver) and features carved motifs of Hindu deities — Lakshmi,
            Ganesha, and Saraswati — along with floral and geometric patterns.
            The look is devotional, weighty, and unmistakably South Indian.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>Compare:</strong> the couple and family&apos;s approved motifs,
            material and hallmark representation, gram weight, construction,
            included pieces, dimensions, comfort, seller terms, and current quote.
            If you are also researching a{" "}
            <Link
              href="/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/"
              style={{ color: "#7a6841" }}
            >
              Kanchipuram silk saree
            </Link>
            , review the full look with the family rather than applying a universal pairing rule.
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
            4. Meenakari — The Color-Enamel Accent
          </h3>
          <p>
            Meenakari is the art of enameling vivid colors — typically royal
            blue, green, red, or pink — onto gold or gold-plated jewelry. It
            is almost never worn alone for the bridal look. Instead, Meenakari
            is used as the reverse side of Kundan pieces (so the bride can
            flip her necklace for a different look at the reception) or as
            accent pieces for mehndi, haldi, and sangeet ceremonies.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>Compare:</strong> base metal, enamel technique and finish,
            dimensions, reverse-side construction, included pieces, comfort,
            care, item-specific evidence, and the current complete quote.
          </p>

          {/* ─── 6 CRITICAL FACTORS ─── */}
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
            How to Choose Indian Wedding Jewelry: 6 Critical Factors
          </h2>

          <p>
            Once you understand the four styles, the actual selection comes
            down to six practical factors. Skipping any one of these is how
            brides end up with jewelry that photographs badly, hurts to wear,
            or does not match the outfit they spent months designing.
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
            1. Match the Jewelry to the Outfit — Not the Other Way Around
          </h3>
          <p>
            The outfit comes first, the jewelry second. Always. The gold tone
            of your jewelry must match the zari work in your lehenga or saree
            border. If your lehenga has silver zari (common in pastel and
            ivory bridal wear), gold-tone Kundan will clash; you want Polki
            with white gold or silver settings, or white-stone Kundan with
            silver-toned framing. If your lehenga has gold zari (the classic
            red-and-gold bridal look), warm Kundan or 22K temple jewelry will
            sit perfectly.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>The necklines also have to align.</strong> A high-neck
            blouse needs a choker or a long haram — never a mid-length princess
            necklace that lands awkwardly on the collarbone. A sweetheart or
            V-neck blouse can carry almost any length, but the maang tikka
            must end where the blouse neckline begins, or the visual line
            breaks.
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
            2. Pick Jewelry by Ceremony, Not One Set for Everything
          </h3>
          <p>
            NRI brides often try to stretch a single jewelry set across all
            four or five ceremonies to save money. This is a false economy.
            Each ceremony has its own visual mood, and the same necklace that
            looks breathtaking at the wedding mandap will look heavy and
            out-of-place at the haldi the next morning. Plan for at least two
            distinct looks: a heavy main-ceremony set (Kundan, Polki, or
            temple jewelry, depending on heritage) and a lighter mehndi or
            sangeet set (Meenakari, antique gold, or a simple pearl choker).
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            For the reception, many modern NRI brides swap the heavy bridal
            necklace for a statement Polki choker and skip the maang tikka
            entirely in favor of a sleeker, editorial look. This ceremony-by-
            ceremony approach is exactly what we walk through in our{" "}
            <Link
              href="/blog/when-to-order-indian-wedding-outfits-nri-bride/"
              style={{ color: "#7a6841" }}
            >
              NRI wedding timeline guide
            </Link>
            .
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
            3. Gold Purity — BIS Hallmark Is Non-Negotiable
          </h3>
          <p>
            If you are buying any jewelry described as &quot;22K gold&quot; or
            &quot;solid gold,&quot; it must carry a BIS Hallmark. The Bureau of
            Indian Standards (BIS) hallmark is a tiny stamp — visible only
            under magnification — that certifies the karat purity of the gold.
            It contains four elements: the BIS logo, the purity grade (e.g.,
            &quot;916&quot; for 22K), the jeweler&apos;s identification
            number, and the year of hallmarking. Without all four marks, the
            piece is not certified — no matter what the seller claims.
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
              The Hallmark Rule for NRI Brides
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Any Indian jeweler — whether in Mumbai, Hyderabad, or New Jersey
              — selling solid gold jewelry must be able to show you the BIS
              Hallmark under a jeweler&apos;s loupe, on video. If the seller
              resists, says the hallmark is &quot;inside the clasp&quot; but
              cannot film it, or offers a &quot;certificate of
              authenticity&quot; instead of the BIS stamp, walk away. The
              certificate is a marketing document; the BIS Hallmark is a legal
              certification enforceable under Indian law.
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
            4. Weight, Comfort, and the 12-Hour Test
          </h3>
          <p>
            A full bridal Kundan set with a choker, long necklace, maang
            tikka, matha patti, nose ring, and jhumkas can weigh 600 grams —
            well over a pound of metal and stones hanging from your neck,
            ears, and head. Many brides discover on the wedding morning that
            they physically cannot tolerate the weight for more than two
            hours. Always ask for the gram weight of each piece before buying,
            and budget for a lighter back-up set for the post-ceremony
            reception.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>The 12-hour test:</strong> if you cannot comfortably wear
            the full set for 12 consecutive hours at home, you cannot wear it
            for your wedding. Wear the full set for an entire Saturday at
            home — cooking, sitting, walking — before approving the final
            purchase. This is the single most overlooked step in NRI bridal
            jewelry shopping.
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
            5. Build an Item-Specific Jewelry Budget
          </h3>
          <p>
            Price depends on the selected materials, stone and treatment
            representations, metal and gram weight, construction, included pieces,
            customization, seller, service scope, shipping, customs, insurance,
            and remedy terms. Use written item-specific inputs:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>Item:</strong> exact photos or references, materials, stones,
              treatments, base metal, plating, gram weight, dimensions, included pieces,
              customization, and item-specific evidence.
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>Seller:</strong> identity, invoice, payment schedule,
              production estimate, cancellation policy, and available remedy.
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>Service and delivery:</strong> CeremonyVerse scope, shipping,
              customs estimate, declared-value or insurance options, documents,
              handoff, and claim responsibility.
            </li>
            <li>
              <strong>Contingency:</strong> local inspection or fitting if desired,
              schedule buffer, and the written remedy if the item differs from
              the approved record.
            </li>
          </ul>
          <p style={{ marginTop: "1rem" }}>
            Compare equivalent complete written quotes. Local and remote options
            may include different services, evidence, fitting, payment protection,
            delivery risk, and remedies; no universal savings percentage applies.
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
            6. Skin Sensitivity and Nickel Allergies
          </h3>
          <p>
            If you have known or suspected metal sensitivity, ask the seller for
            the exact material and plating representation and discuss suitable
            precautions with a qualified health professional.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <strong>Before ordering:</strong> record the base metal, plating,
            posts, clasps, adhesives, care instructions, and return or remedy terms.
            Consider a wear test early enough to change plans if needed.
          </p>

          {/* ─── 4 RED FLAGS ─── */}
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
            4 Evidence Gaps to Investigate Before Ordering
          </h2>

          <p>
            A remote listing may use material or stone terms without
            item-specific support. These checks can reduce risk, but video,
            price, or a checklist alone does not authenticate a jewelry claim.
          </p>

          <div
            style={{
              background: "#faf8f4",
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
                color: "#8a4a3a",
              }}
            >
              Evidence Gap #1 — Unsupported Stone Representation
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Ask the seller to state the exact stone, treatment, quantity or
              weight information, setting, and any available item-specific
              certification. Price alone does not establish the material.
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
                marginBottom: "0.5rem",
                color: "#8a4a3a",
              }}
            >
              Red Flag #2 — No Loupe Video of Stones or Hallmark
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              A reputable Indian jeweler will film the BIS Hallmark under a
              jeweler&apos;s loupe and film the stones under 10× magnification.
              If the seller offers only studio photos and resists a loupe
              video, the piece is not what they claim. For our deeper guide
              on Indian wedding shopping scams, see our{" "}
              <Link
                href="/blog/indian-wedding-outfit-scams-nri-brides/"
                style={{ color: "#7a6841" }}
              >
                10 red flags every NRI bride must avoid
              </Link>
              .
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
                marginBottom: "0.5rem",
                color: "#8a4a3a",
              }}
            >
              Red Flag #3 — &quot;Gold-Plated&quot; Without Specifying the Base
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              &quot;Gold-plated&quot; means nothing on its own. The base
              metal — silver, brass, copper, or nickel alloy — determines
              quality, weight, and skin safety. A silver-based gold-plated
              Kundan set weighs more, sits better, and lasts decades. A
              brass-based set turns green within a year and triggers nickel
              allergies. Reputable sellers state the base metal in the
              listing. If they do not, ask — and if they hedge, walk away.
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
                marginBottom: "0.5rem",
                color: "#8a4a3a",
              }}
            >
              Red Flag #4 — No Return Policy and Wire-Transfer-Only Payment
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Reputable Indian jewelry sellers accept credit cards and offer a
              7-to-14-day return window for online purchases. If a seller
              demands wire transfer, Zelle, or cryptocurrency only — and
              refuses returns — they are not a jeweler, they are a scammer
              hiding behind Instagram. The same rule applies to US-based
              Instagram &quot;jewelers&quot; selling through DMs.
            </p>
          </div>

          {/* ─── HIDDEN COSTS ─── */}
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
            The Hidden Costs of Buying Indian Bridal Jewelry from US Boutiques
          </h2>

          <p>
            A local boutique may offer in-person inspection, fitting, local payment,
            and local return options. A remote India-based order may offer different
            inventory, customization, and costs while adding seller, shipping,
            customs, and remedy risk.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>Exact item:</strong> material, stone and treatment representations,
              metal and gram weight, construction, dimensions, included pieces,
              and item-specific evidence.
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>Service:</strong> viewing, fitting, customization, approvals,
              payment, delivery, and excluded outside costs.
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <strong>Delivery:</strong> pickup or carrier, declared-value or insurance
              options, shipping quote, customs estimate, and claim responsibility.
            </li>
            <li>
              <strong>Remedy:</strong> cancellation, return, correction, replacement,
              alteration, or refund terms for the selected item.
            </li>
          </ul>

          <p style={{ marginTop: "1rem" }}>
            Compare complete written quotes for equivalent items and responsibilities.
            There is no universal price range or savings percentage. For more on how the
            logistics work end-to-end, see our{" "}
            <Link
              href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/"
              style={{ color: "#7a6841" }}
            >
              guide to shipping Indian wedding outfits and jewelry to the USA
            </Link>
            .
          </p>

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
            How CeremonyVerse Documents Indian Wedding Jewelry Sourcing
          </h2>

          <p>
            CeremonyVerse can organize jewelry research using one record for
            the selected piece, seller evidence, materials, plating, stones,
            dimensions, weight, approvals, service fee, shipping estimate,
            customs estimate, and remedy terms. No remote process eliminates
            seller, material, shipping, or customs risk.
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
              Eligible Live Item Review
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Eligible tiers may include live video or current item media when
              the seller and piece allow it. Use that evidence alongside the
              written material, plating, stone, size, weight, and vendor terms;
              video alone does not authenticate those claims.
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
              BIS Hallmark and Stone Verification
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              For any piece described as solid gold, we film the BIS Hallmark
              under a jeweler&apos;s loupe and send you the video before
              purchase. For Polki and semi-precious stones, we film each
              stone under 10× magnification so you can see the inclusions and
              facet pattern that distinguish real stones from glass. No
              certification letter — only physical, on-camera proof.
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
              Outfit-Matched Selection
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              We do not let you choose jewelry in isolation. Once your bridal
              lehenga or saree is finalized, we match the gold tone, stone
              color, and necklace length to the specific zari work and
              neckline of your outfit. If your{" "}
              <Link
                href="/blog/how-to-buy-bridal-lehenga-from-india-usa/"
                style={{ color: "#7a6841" }}
              >
                bridal lehenga
              </Link>{" "}
              has silver zari, we will not let you walk out with warm-gold
              Kundan. This is the single biggest value of using a concierge —
              the look comes together as a system, not as separate purchases.
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
              Documented Shipping Options
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Confirm whether the selected carrier will accept the item, what
              declared-value or insurance options are available, which documents
              are required, and who is responsible for customs information and claims.
              Shipping and customs amounts are estimates until assessed by the
              responsible provider or agency.
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
                  href="/wedding-accessories-and-ceremony-items-from-india/"
                  style={{ color: "#7a6841" }}
                >
                  Wedding accessories and ceremony items from India — our
                  service page
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
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/"
                  style={{ color: "#7a6841" }}
                >
                  Shipping Indian wedding outfits and jewelry to the USA —
                  customs and duties
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link
                  href="/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/"
                  style={{ color: "#7a6841" }}
                >
                  How to buy authentic Kanchipuram silk sarees online
                </Link>
              </li>
              <li>
                <Link
                  href="/avoid-indian-wedding-shopping-scams/"
                  style={{ color: "#7a6841" }}
                >
                  Avoid Indian wedding shopping scams — full guide
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
              Ready to Research Bridal Jewelry Options?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Compare documented jewelry options and reduce remote-shopping risk.
              Request a consultation to organize item-specific material, construction,
              hallmark, seller, cost, shipping, and remedy information before ordering.
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
                href="https://wa.me/12153419990?text=Hello%20CeremonyVerse!%20I%20want%20to%20source%20authentic%20Indian%20wedding%20jewelry."
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
            <strong>About CeremonyVerse:</strong> We help families research Indian
            bridal-jewelry categories, wedding outfits, ceremonial items, and return gifts.
            Any material or hallmark claim must be supported by item-specific evidence from
            the selected seller; live video and pre-shipping review have documented limits.{" "}
            <Link href="/contact/" style={{ color: "#7a6841" }}>
              Book a consultation
            </Link>{" "}
            to discuss your wedding jewelry and full trousseau.
          </p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
