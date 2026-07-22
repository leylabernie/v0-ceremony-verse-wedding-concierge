import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  path: "/link-to-us/",
  title: "Link to CeremonyVerse",
  description:
    "If CeremonyVerse helped with your Indian wedding sourcing, link back to us. Copy-paste ready HTML snippets, badges, and suggested anchor text.",
  keywords: ["link to ceremonyverse", "ceremonyverse badge", "indian wedding concierge"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Link to Us", url: "/link-to-us/" },
]);

const snippets = [
  {
    label: "Standard text link",
    code: `<a href="https://www.ceremonyverse.com/">CeremonyVerse</a>`,
    preview: "CeremonyVerse",
  },
  {
    label: "Link with description (recommended)",
    code: `<a href="https://www.ceremonyverse.com/">CeremonyVerse</a> — Indian wedding shopping concierge that helps NRI families source custom bridal lehengas, sherwanis, jewelry, and ceremonial items directly from India to the USA.`,
    preview:
      "CeremonyVerse — Indian wedding shopping concierge that helps NRI families source custom bridal lehengas, sherwanis, jewelry, and ceremonial items directly from India to the USA.",
  },
  {
    label: "Bridal lehenga sourcing",
    code: `We worked with <a href="https://www.ceremonyverse.com/services/bridal-lehengas/">CeremonyVerse</a> to source our bridal lehengas directly from India.`,
    preview:
      "We worked with CeremonyVerse to source our bridal lehengas directly from India.",
  },
  {
    label: "Vendor / partner page",
    code: `<a href="https://www.ceremonyverse.com/">CeremonyVerse</a> — Indian wedding shopping concierge for NRI brides and families in the USA.`,
    preview:
      "CeremonyVerse — Indian wedding shopping concierge for NRI brides and families in the USA.",
  },
];

export default function LinkToUsPage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <SeoNav />

      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
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
            For Our Clients, Partners & Friends
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
            Link to CeremonyVerse
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            If CeremonyVerse helped you with your Indian wedding shopping — sourcing a bridal
            lehenga, sherwani, family outfits, or any wedding items from India — we would be
            honored if you linked back to us. A simple link from your wedding website, blog,
            or vendor page helps other NRI families discover our service.
          </p>
        </div>
      </div>

      {/* Snippets */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div
          style={{
                        fontSize: "1.125rem",
            lineHeight: 1.8,
            color: "#2f2f2f",
          }}
        >
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
            How to Link to Us
          </h2>
          <p>
            Pick a snippet below, copy the HTML, and paste it into your website builder, blog
            post, vendor page, or wedding website. Each snippet is ready to use as-is.
          </p>

          {snippets.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #e6dfd5",
                borderRadius: "8px",
                padding: "1.5rem",
                margin: "1.5rem 0",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#2f2f2f",
                  margin: "0 0 0.75rem",
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#4d403a",
                  margin: "0 0 1rem",
                  lineHeight: 1.7,
                  padding: "0.75rem",
                  background: "#f8f6f2",
                  borderRadius: "4px",
                }}
              >
                Preview: {s.preview}
              </p>
              <pre
                style={{
                  background: "#2f2f2f",
                  color: "#f8f6f2",
                  padding: "1rem",
                  borderRadius: "4px",
                  fontSize: "0.95rem",
                  overflowX: "auto",
                  margin: 0,
                  fontFamily: "'DM Sans', monospace",
                }}
              >
                <code>{s.code}</code>
              </pre>
            </div>
          ))}

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
            Suggested Anchor Text
          </h2>
          <p>
            If you write your own link text, here are the phrases that help search engines
            understand what CeremonyVerse does (these are the keywords our potential clients
            search for):
          </p>
          <ul
            style={{
              marginTop: "1rem",
              paddingLeft: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <li>Indian wedding shopping concierge</li>
            <li>buy bridal lehenga from India</li>
            <li>NRI Indian wedding sourcing</li>
            <li>Indian wedding concierge USA</li>
            <li>source sherwani from India</li>
            <li>kanchipuram silk sarees USA</li>
          </ul>

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
            Where to Place Your Link
          </h2>
          <p>The most valuable places to link to us from:</p>
          <ul
            style={{
              marginTop: "1rem",
              paddingLeft: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <li>
              <strong>Your wedding website</strong> (The Knot, Zola, WeddingWire, Joy, etc.) —
              in the vendors or credits section
            </li>
            <li>
              <strong>Your personal blog or Instagram bio</strong> — a simple mention of who
              sourced your outfits
            </li>
            <li>
              <strong>Vendor partner pages</strong> — if you are a wedding photographer,
              planner, mehndi artist, or caterer, add us to your preferred vendors list and we
              will happily reciprocate
            </li>
            <li>
              <strong>Reddit, Quora, Facebook groups</strong> — when someone asks where to buy
              Indian wedding outfits in the USA, a genuine recommendation helps
            </li>
            <li>
              <strong>Online reviews</strong> — Google reviews, Yelp, WeddingWire reviews
              don&apos;t count as backlinks but they directly help other brides find us
            </li>
          </ul>

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
              Thank you for linking to us.
            </p>
            <p
              style={{
                color: "#7a6841",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Every link helps another NRI family discover a trustworthy partner for their
              Indian wedding shopping. If you have any questions about linking, just reach out.
            </p>
            <Link
              href="/contact/"
              style={{
                display: "inline-block",
                background: "#7a6841",
                color: "#2f2f2f",
                padding: "0.8rem 2rem",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Contact CeremonyVerse
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
