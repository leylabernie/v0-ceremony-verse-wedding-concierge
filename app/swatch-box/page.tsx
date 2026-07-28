import { buildMetadata, buildBreadcrumb, buildServiceSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/swatch-box/",
  title: "The Swatch Box — $45, Credited to Your Order",
  description:
    "Twelve fabric swatches, the full colour card set printed on fabric, a measuring tape and guide — posted to your door. $45, credited in full to your order.",
  keywords:
    "Indian wedding fabric swatches USA, lehenga fabric samples, bridesmaid colour matching, swatch box India to USA",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "The Swatch Box", url: "/swatch-box/" },
]);

const serviceSchema = buildServiceSchema({
  name: "The Swatch Box",
  description:
    "Twelve fabric swatches, the full colour card set printed on fabric, a measuring tape with printed guide, and a written quote form — posted to a US address. $45, credited in full to your order.",
  url: "/swatch-box/",
  category: "Indian Wedding Fabric Swatches",
  offers: [
    {
      name: "The Swatch Box",
      price: 45,
      description:
        "Twelve fabric swatches, full colour card set, measuring tape and guide, and a written quote form. Credited in full to your order.",
    },
  ],
});

const whatsInside = [
  "Twelve fabric swatches — raw silk, georgette, organza, velvet, banarasi, crepe",
  "The full colour card set, printed on fabric rather than paper",
  "A measuring tape and printed guide, with a QR code to a two-minute video",
  "A written quote form — sketch your idea, note your dates, send it back",
];

export default function SwatchBoxPage() {
  return (
    <>
      <JsonLd id="swatch-box-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="swatch-box-service" data={serviceSchema} />

      <main>
        {/* HERO */}
        <section style={{ background: "#1f1f1f", padding: "72px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 600,
                lineHeight: 1.12,
                color: "#fff",
                marginBottom: "16px",
                letterSpacing: "-0.01em",
              }}
            >
              The Swatch Box
            </h1>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "2.4rem",
                fontWeight: 600,
                color: "#c7b28a",
                marginBottom: "8px",
                lineHeight: 1,
              }}
            >
              $45
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "32px",
              }}
            >
              Credited in full to your order. Ships in 2 business days.
            </p>

            <p
              style={{
                fontSize: "clamp(15px, 1.8vw, 18px)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.92)",
                maxWidth: "620px",
                margin: "0 auto 36px",
              }}
            >
              You cannot choose a colour from a screen. Every phone renders dusty
              rose differently, and the lehenga that looked blush online arrives
              salmon. So we send you the fabric.
            </p>

            {/* TODO(owner): replace with your Stripe Payment Link or Shopify checkout URL */}
            <a
              href="#"
              style={{
                display: "inline-block",
                background: "#7a6841",
                color: "#fff",
                padding: "15px 34px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Order your Swatch Box — $45
            </a>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2
              className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold mb-8"
              style={{ color: "#1f1f1f" }}
            >
              What&apos;s inside
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {whatsInside.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    padding: "14px 0",
                    borderBottom: "1px solid #e6dfd5",
                    fontSize: "16px",
                    lineHeight: 1.65,
                    color: "#4d403a",
                  }}
                >
                  <span style={{ color: "#7a6841", flexShrink: 0 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* THE COLOUR MATCH PROMISE */}
        <section style={{ background: "#f9f6f3", padding: "64px 24px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2
              className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold mb-6"
              style={{ color: "#1f1f1f" }}
            >
              The Colour Match Promise
            </h2>
            <p
              style={{ fontSize: "17px", lineHeight: 1.75, color: "#4d403a" }}
            >
              Send us a photograph of anything — a flower, a paint chip, your
              mother&apos;s wedding saree, a screenshot from Pinterest — and we
              will match it. Not &ldquo;close to.&rdquo; Matched, and confirmed by
              you on video before a single metre is cut.
            </p>
          </div>
        </section>

        {/* FOR YOUR BRIDESMAIDS */}
        <section style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2
              className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold mb-6"
              style={{ color: "#1f1f1f" }}
            >
              For your bridesmaids
            </h2>
            <p
              style={{ fontSize: "17px", lineHeight: 1.75, color: "#4d403a" }}
            >
              When you place a group order, every person in your party gets her own
              box — swatches, measuring tape, video guide and a prepaid return
              envelope — at no extra cost. It is how we get accurate measurements
              from eight women in four states without anyone booking a flight.
            </p>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section style={{ background: "#1f1f1f", padding: "56px 24px" }}>
          <div style={{ maxWidth: "620px", margin: "0 auto", textAlign: "center" }}>
            {/* TODO(owner): replace with your Stripe Payment Link or Shopify checkout URL */}
            <a
              href="#"
              style={{
                display: "inline-block",
                background: "#7a6841",
                color: "#fff",
                padding: "15px 34px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Order your Swatch Box — $45
            </a>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.75)",
                marginTop: "14px",
              }}
            >
              Credited in full to your order. Ships in 2 business days.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
