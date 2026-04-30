import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer";
import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, buildBlogPostingSchema, jsonLd } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026 | CeremonyVerse",
  description: "What do the new US tariffs mean for your Indian wedding lehenga? Here's exactly what NRI brides need to know — and how CeremonyVerse handles it.",
  keywords: "US tariffs Indian wedding outfits, Indian lehenga import USA, NRI bride lehenga from India 2026, buy lehenga from India USA, Indian wedding tariffs 2026, lehenga customs USA",
  alternates: {
    canonical: "https://www.ceremonyverse.com/blog/us-tariffs-indian-wedding-outfits-2026",
  },
  openGraph: {
    title: "US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026",
    description: "What do the new US tariffs mean for your Indian wedding lehenga? Here's exactly what NRI brides need to know — and how CeremonyVerse handles it.",
    type: "article",
    url: "https://www.ceremonyverse.com/blog/us-tariffs-indian-wedding-outfits-2026",
  
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
};

export default function TariffsBlogPost() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026", path: "/blog/us-tariffs-indian-wedding-outfits-2026" },
  ]);

  const blogSchema = buildBlogPostingSchema({
    title: "US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026",
    description: "What do the new US tariffs mean for your Indian wedding lehenga? Here's exactly what NRI brides need to know — and how CeremonyVerse handles it.",
    path: "/blog/us-tariffs-indian-wedding-outfits-2026",
    datePublished: "2026-03-01",
    dateModified: "2026-04-23",
    image: "/images/hero-lehenga.jpg",
    keywords: ["US tariffs Indian wedding outfits", "Indian lehenga import USA", "NRI bride lehenga from India 2026", "Indian wedding tariffs 2026"],
  });

  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <Script id="breadcrumb-schema-us-tariffs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="blog-schema-us-tariffs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogSchema) }} />
      <SeoNav />
      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#c7b28a", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · March 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026
          </h1>
          <p style={{ color: "#c7b28a", fontSize: "0.95rem", lineHeight: 1.7 }}>
            The tariff landscape changed multiple times in 2025. Here is what actually applies to your lehenga — and how to plan around it.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            If you have been planning your Indian wedding in the US and scrolling through lehenga inspiration at midnight, you have probably hit a wall of headlines about tariffs on Indian imports. The confusion is completely understandable. In the past twelve months alone, tariff rates on Indian goods swung from 26% to 50%, then back down after a Supreme Court ruling, and now sit under a new temporary framework. It is a lot to track — and none of it was designed with NRI brides in mind.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Here is the truth: the tariff situation does affect how Indian wedding outfits reach you in the US, but probably not in the way the headlines make it sound. Whether it adds a few hundred dollars to your order or nothing at all depends entirely on how your outfit gets to you and who is handling the process. Let us break it down clearly.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            What the Tariffs Actually Are Right Now
          </h2>
          <p>
            The current US tariff environment for Indian goods has been one of the most volatile in decades. Through most of 2025, the Trump administration imposed escalating reciprocal tariffs on Indian imports. By August 2025, Indian goods — including textiles and apparel — were subject to a combined rate of roughly <strong>50%</strong>.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Then, in February 2026, two significant things happened almost simultaneously:
          </p>
          <ol style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>The <strong>US–India interim trade agreement</strong> (announced February 2, 2026) outlined a reduction in the reciprocal tariff rate on Indian goods to <strong>18%</strong>, covering textiles, apparel, leather goods, and artisanal products.</li>
            <li>The <strong>US Supreme Court struck down the IEEPA-based tariffs</strong> on February 20, 2026. The White House responded by invoking Section 122 of the Trade Act of 1974, imposing a <strong>flat 10–15% temporary surcharge</strong> on imports from all countries, effective February 24, 2026 and set to expire July 24, 2026.</li>
          </ol>
          <p style={{ marginTop: "1.2rem" }}>
            The practical result today: Indian wedding outfits shipped commercially into the US are not tariff-free, but they are no longer subject to the catastrophic 50% rates either. The situation is manageable — especially for those working with experienced partners.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Does This Apply to Your Wedding Lehenga?
          </h2>
          <p>The answer depends entirely on <em>how</em> your outfit reaches you.</p>

          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "#2f2f2f", marginTop: "1.8rem", marginBottom: "0.6rem" }}>
            If you carry it home in your suitcase from India
          </h3>
          <p>
            Good news here. When you travel to India, shop for your lehenga, and bring it back in your checked luggage, US Customs treats it under personal baggage rules — not commercial import rules. As a returning US resident, you have an <strong>$800 duty-free personal exemption</strong>. The Section 122 CBP bulletin explicitly carves out &ldquo;products for personal use included in accompanied baggage&rdquo; from the additional surcharge — so even the current temporary tariff does not apply to what you carry home yourself.
          </p>

          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "#2f2f2f", marginTop: "1.8rem", marginBottom: "0.6rem" }}>
            If your outfit is shipped directly from India to your US address
          </h3>
          <p>
            This is where the tariff picture changes. Since August 29, 2025, the US <strong>eliminated the de minimis exemption</strong> for all countries. Previously, packages valued under $800 entered duty-free. That rule is gone. Now every commercial shipment from India — regardless of value — is subject to applicable duties based on the Harmonized Tariff Schedule code for the product.
          </p>

          {/* Table */}
          <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.93rem" }}>
              <thead>
                <tr style={{ background: "#2f2f2f", color: "#f8f6f2" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 500 }}>Scenario</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 500 }}>Tariff applies?</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 500 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "#fff", borderBottom: "1px solid #e6dfd5" }}>
                  <td style={{ padding: "0.75rem 1rem" }}>Carried in your suitcase from India</td>
                  <td style={{ padding: "0.75rem 1rem", color: "#2a7a2a", fontWeight: 500 }}>No (up to $800)</td>
                  <td style={{ padding: "0.75rem 1rem" }}>Personal exemption applies; Section 122 excludes accompanied baggage</td>
                </tr>
                <tr style={{ background: "#f8f6f2", borderBottom: "1px solid #e6dfd5" }}>
                  <td style={{ padding: "0.75rem 1rem" }}>Shipped by courier from India</td>
                  <td style={{ padding: "0.75rem 1rem", color: "#b84040", fontWeight: 500 }}>Yes</td>
                  <td style={{ padding: "0.75rem 1rem" }}>Full HTS duties + Section 122 surcharge; de minimis eliminated Aug 2025</td>
                </tr>
                <tr style={{ background: "#fff" }}>
                  <td style={{ padding: "0.75rem 1rem" }}>Custom-made vs. ready-made</td>
                  <td style={{ padding: "0.75rem 1rem" }}>No difference</td>
                  <td style={{ padding: "0.75rem 1rem" }}>Both assessed on declared value</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            How CeremonyVerse Handles This For You
          </h2>
          <p>
            This is exactly the kind of complexity that makes working with a dedicated Indian wedding shopping concierge worth it — versus trying to coordinate everything yourself across twelve time zones.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Sourcing with documentation in mind.</strong> CeremonyVerse works directly with artisan partners who provide accurate invoicing, fabric composition breakdowns, and proper customs documentation. Correct HTS classification can make a meaningful difference in the duty rate assessed.</li>
            <li><strong>Smart shipping strategy.</strong> Depending on your timeline and the nature of the outfit, CeremonyVerse advises on the most practical routing — whether timing a trip to India, using specific couriers that handle Indian textile customs professionally, or other approaches.</li>
            <li><strong>Transparent cost planning.</strong> Before you fall in love with an outfit, CeremonyVerse builds the landed cost — including estimated duties and shipping — into your budget conversation. No surprises when the package arrives.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Tips for NRI Brides — Whoever You Work With
          </h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Plan around a trip to India if possible.</strong> Carrying outfits home in your suitcase is still the most straightforward path to avoid commercial tariffs on personal pieces.</li>
            <li><strong>Get a proper invoice — always.</strong> Get an itemized invoice showing each outfit, fabric content, and individual price. This is your documentation if customs questions the declared value.</li>
            <li><strong>Know your HTS code.</strong> Different fabrics attract different duty rates. A silk lehenga and a polyester-blend lehenga are assessed differently. Ask your shipper to confirm the correct code before dispatch.</li>
            <li><strong>Factor in timing.</strong> The current Section 122 surcharge is scheduled to expire July 24, 2026. Build extra time into your customs clearance timeline — especially for heavier multi-outfit packages.</li>
            <li><strong>Do not rely on social media for customs guidance.</strong> Tariff rules changed multiple times in 2025 alone. Information shared in Reddit or Facebook groups from even six months ago may be outdated.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            This Is Manageable — With the Right Help
          </h2>
          <p>
            The tariff landscape for buying Indian wedding outfits for US-based weddings has been genuinely stressful for NRI brides. The good news is that the worst of the 50% rates are behind us, and there is a clear path to getting your dream outfit to your doorstep without a panic-inducing customs bill.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The key is working with people who have done this before — who know the documentation, the carriers, the HTS codes, and the customs expectations.
          </p>

          {/* CTA Box */}
          <div style={{ background: "#2f2f2f", borderRadius: "8px", padding: "2rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "#f8f6f2", marginBottom: "0.75rem" }}>
              Ready to start sourcing?
            </p>
            <p style={{ color: "#c7b28a", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Book a free 30-minute consultation. Bring your budget, inspiration photos, and timeline — we will handle the rest.
            </p>
            <Link
              href="/contact"
              style={{ display: "inline-block", background: "#c7b28a", color: "#2f2f2f", padding: "0.8rem 2rem", borderRadius: "4px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", letterSpacing: "0.03em" }}
            >
              Book Free Consultation
            </Link>
            <p style={{ color: "#6f6a63", fontSize: "0.85rem", marginTop: "1rem" }}>
              Or WhatsApp: <a href="https://wa.me/12153419990" style={{ color: "#c7b28a" }}>+1 (215) 341-9990</a>
            </p>
          </div>

          {/* Sources */}
          <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid #e6dfd5" }}>
            <p style={{ fontSize: "0.8rem", color: "#6f6a63", lineHeight: 1.7 }}>
              <strong>Sources:</strong>{" "}
              <a href="https://www.whitehouse.gov/briefings-statements/2026/02/united-states-india-joint-statement/" target="_blank" rel="noopener noreferrer" style={{ color: "#6f6a63" }}>White House US–India Joint Statement, Feb 6 2026</a>{" · "}
              <a href="https://www.whitehouse.gov/presidential-actions/2026/02/imposing-a-temporary-import-surcharge-to-address-fundamental-international-payments-problems/" target="_blank" rel="noopener noreferrer" style={{ color: "#6f6a63" }}>Section 122 Proclamation, Feb 20 2026</a>{" · "}
              <a href="https://content.govdelivery.com/accounts/USDHSCBP/bulletins/40b3b7b" target="_blank" rel="noopener noreferrer" style={{ color: "#6f6a63" }}>CBP Section 122 Duties Guidance</a>{" · "}
              <a href="https://www.reuters.com/business/retail-consumer/what-end-de-minimis-exemption-means-us-shoppers-businesses-2025-08-29/" target="_blank" rel="noopener noreferrer" style={{ color: "#6f6a63" }}>Reuters: End of De Minimis Exemption, Aug 2025</a>{" · "}
              <a href="https://www.cbp.gov/travel/us-citizens/know-before-you-go/what-expect-when-you-return" target="_blank" rel="noopener noreferrer" style={{ color: "#6f6a63" }}>CBP Personal Exemption Guide</a>
            </p>
          </div>

        </div>

        {/* Back to blog */}
        <div style={{ marginTop: "3rem" }}>
          <Link href="/" style={{ color: "#c7b28a", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Back to CeremonyVerse
          </Link>
        </div>
      </article>
    <SeoFooter />
    </main>
  );
}