import Script from "next/script"
import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import { buildBreadcrumbSchema, buildFAQSchema, jsonLd } from "@/lib/schema"

export const metadata = {
  title: "FAQ — Indian Wedding Shopping Concierge | CeremonyVerse",
  description:
    "Answers to common questions about CeremonyVerse's Indian wedding shopping concierge service for NRI families. Trust, pricing, shipping, sizing, and process FAQs.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/faq",
    languages: {
      "en-US": "https://www.ceremonyverse.com/faq",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/faq",
    },
  },
  keywords:
    "Indian wedding FAQ, NRI wedding shopping questions, bridal lehenga from India FAQ, Indian wedding concierge FAQ, CeremonyVerse FAQ, Indian wedding shipping, Indian wedding outfit sizing, Indian wedding pricing",
  openGraph: {
    title: "FAQ — Indian Wedding Shopping Concierge | CeremonyVerse",
    description:
      "Answers to common questions about CeremonyVerse's Indian wedding shopping concierge service for NRI families. Trust, pricing, shipping, sizing, and process FAQs.",
    type: "website",
    url: "https://www.ceremonyverse.com/faq",
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ceremonyverse",
    title: "FAQ — Indian Wedding Shopping Concierge | CeremonyVerse",
    description: "Answers to common questions about CeremonyVerse's Indian wedding shopping concierge service for NRI families. Trust, pricing, shipping, sizing, and process FAQs.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
}

/* ────────────────────────────────────────────────────────────── */
/*  FAQ DATA — exact text from the SPA component + 8 global Qs  */
/* ────────────────────────────────────────────────────────────── */

const faqCategories = [
  {
    category: "Trust & Authenticity",
    items: [
      {
        question: "How do NRI brides buy a lehenga from India without getting scammed?",
        answer:
          "The safest way is to never pay for something you haven't seen. CeremonyVerse does live video shopping sessions where you see the exact item — actual fabric draped, embroidery up close, color in natural light — before you commit to anything. We work only with vetted artisan partners we know personally, not random Instagram sellers. Every order is documented with reference photos and your written approval before production begins. This is how we eliminate the risk that NRI families face when ordering from India.",
        links: [{ label: "Read our scam prevention guide →", href: "/blog/avoiding-scams-buying-indian-wedding-outfits-online" }],
      },
      {
        question: "How do I know this isn't a scam?",
        answer:
          "Unlike Instagram sellers, we don't hide behind a screen. We work with trusted partners in India — skilled craftspeople, a custom designer and tailor, a fabric specialist, and a jewelry supplier — all relationships we've built personally. We do live video walkthroughs and never ask for full payment upfront.",
      },
      {
        question: "What if quality doesn't match?",
        answer:
          "You approve fabrics via detailed HD video showing thread count, weave quality, and color under natural light. That exact bolt is reserved with your order number. If anything doesn't match, we halt shipping and resolve it at our cost.",
      },
      {
        question: "How do you verify your sourcing partners?",
        answer:
          "We work with a carefully chosen circle of partners built over time — an outfit specialist who sources both ready-made and semi-custom pieces, a local designer and tailor who custom-stitches to your exact measurements and references, a fabric expert who sources and dyes fabrics to your chosen color shade, and a dedicated bridal jewelry supplier. Every partner is someone we know personally.",
      },
    ],
  },
  {
    category: "Sizing & Fit",
    items: [
      {
        question: "What if the outfits don't fit?",
        answer:
          "We collect 15+ precise body measurements and build in strategic ease allowances. Every piece is made 0.5-1 inch larger for professional alterations. Our 100% fit guarantee covers alteration costs if adjustments are needed.",
      },
      {
        question: "How do you handle large parties?",
        answer:
          "Coordinating 8-15 groomsmen is our specialty. We provide video tutorials for self-measurement, virtual sizing sessions, individual profiles, and extra allowances for weight fluctuations. custom-fitted to your measurements.",
      },
      {
        question: "What's your alteration policy?",
        answer:
          "We guarantee fit. If alterations are needed due to our measurement error, we cover the cost up to $150 per garment. For quality defects, we replace the item entirely at our expense.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    items: [
      {
        question: "How is pricing structured?",
        answer:
          "Radical transparency: outfit cost, our 15–20% sourcing fee, shipping, customs, and guarantee coverage. Itemized quotes show exactly what you pay for. Most clients save vs. US boutiques.",
        links: [{ label: "See full pricing details →", href: "/pricing" }],
      },
      {
        question: "What's the payment schedule?",
        answer:
          "Milestone-based protection: 25% deposit to reserve, 35% after fabric approval, 30% after final inspection, 10% upon delivery. You never pay for the next stage until you've approved the previous one.",
        links: [{ label: "See full pricing details →", href: "/pricing" }],
      },
      {
        question: "Do you accept payment plans?",
        answer:
          "Yes. For orders over $3,000, we offer extended plans across 4-6 months aligned with wedding timelines. We accept credit cards, bank transfers, and most payment methods.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        question: "How long does shipping take from India to the US?",
        answer:
          "Standard international shipping takes 2–3 weeks. For urgent timelines, expedited shipping (7–10 days) is available at an additional cost. We always recommend building in extra buffer time before your wedding date.",
        links: [{ label: "See our outfit ordering timeline →", href: "/blog/indian-wedding-outfit-timeline-when-to-order" }],
      },
      {
        question: "Do you handle customs and import duties?",
        answer:
          "Yes. We prepare all shipping documentation and advise on expected customs duties. Import duties on clothing typically range from 12–27% of the declared value. These are itemized in your quote upfront — no surprises at the door.",
        links: [{ label: "Calculate your customs duties →", href: "/pricing" }],
      },
      {
        question: "What if my outfit arrives damaged?",
        answer:
          "Every shipment is fully insured. If an item arrives damaged, we file the insurance claim and coordinate a replacement or repair at no cost to you. We've never had an unresolved shipping issue.",
      },
    ],
  },
  {
    category: "The Process",
    items: [
      {
        question: "Do I need to travel to India?",
        answer:
          "Not at all. Everything happens remotely via WhatsApp video calls, Zoom sessions, and live video shopping. Most of our clients are US-based and have never set foot in India for their wedding shopping.",
      },
      {
        question: "Can I source just one item, or do I need a full package?",
        answer:
          "You can source as little as one piece. Many clients start with just the bridal lehenga, then come back for bridesmaids, jewelry, and family outfits once they see how the process works.",
        links: [{ label: "Browse all our services →", href: "/services" }],
      },
      {
        question: "What regions of India do you source from?",
        answer:
          "We source from specialized craft clusters across India: Surat and Kolkata for embroidered lehengas, Varanasi for Banarasi silk, Jaipur for Rajasthani and block print styles, and Mumbai for contemporary designer looks.",
      },
    ],
  },
]

const globalFaqs = [
  {
    question: "What does CeremonyVerse do?",
    answer:
      "CeremonyVerse is an Indian wedding shopping concierge for NRI families. We source authentic bridal lehengas, sherwanis, bridesmaid and groomsmen outfits, family attire, jewelry, ceremonial items, return gifts, sweets, welcome bags, and even pet outfits — all directly from India. You see and approve every piece via live video before it ships, and we deliver to your door in the USA, Canada, UK, Australia, and New Zealand.",
    links: [{ label: "Browse all services →", href: "/services" }],
  },
  {
    question: "How does CeremonyVerse source Indian wedding items from India to the USA?",
    answer:
      "We work with a vetted network of artisan partners across India — outfit specialists, custom designers and tailors, fabric experts, and jewelry suppliers — all relationships built personally over time. After your free consultation, we host live video shopping sessions where you see actual fabrics, embroidery, and colors in real time. You approve the specific piece, it gets reserved with your order number, custom-stitched to your measurements, inspected before shipping, and delivered directly to your US address with full customs documentation.",
  },
  {
    question: "Can I buy a bridal lehenga from India and have it delivered to the USA?",
    answer:
      "Yes — that's our core service. You browse and approve your bridal lehenga via live video shopping, we have it custom-stitched to your exact measurements by our tailor partner in India, inspect it for quality, and ship it insured directly to your US address. Custom bridal lehengas typically take 14–20 weeks from order to delivery. Most clients save 30–50% compared to US Indian boutiques.",
    links: [{ label: "Read our bridal lehenga buying guide →", href: "/blog/how-to-buy-bridal-lehenga-from-india-usa" }],
  },
  {
    question: "How much does it cost to source Indian wedding outfits from India?",
    answer:
      "Our sourcing fee is 15–20% of the outfit cost, clearly itemized. Service tiers start at $149 for a Style Guide & Vendor List, $599 for Guided Sourcing with live video shopping, and $1,499 for Full Bridal Concierge covering your entire wedding party. The outfit cost itself, shipping, and customs duties are separate — and quoted upfront before you commit. No hidden markups.",
    links: [{ label: "See full pricing details →", href: "/pricing" }],
  },
  {
    question: "Do you only source outfits or other Indian wedding items too?",
    answer:
      "We source everything for your Indian wedding — not just outfits. That includes bridal lehengas, sherwanis, bridesmaid and groomsmen outfits, family attire, jewelry and accessories, ceremonial items like pooja thalis and kalire, return gifts, sweets, welcome bags, and even matching pet outfits. If it's for an Indian wedding, we can source it from India.",
    links: [{ label: "Browse all services →", href: "/services" }],
  },
  {
    question: "How far in advance should I contact CeremonyVerse?",
    answer:
      "6–12 months before your wedding date. Top artisan workshops book quickly and custom outfits need production time. The bridal lehenga alone takes 14–20 weeks for quality custom work. If your wedding is sooner, contact us anyway — we'll tell you honestly what's achievable given your timeline and what tradeoffs to expect.",
    links: [{ label: "See our outfit timeline guide →", href: "/blog/indian-wedding-outfit-timeline-when-to-order" }],
  },
  {
    question: "Do you serve intercultural couples who are new to Indian weddings?",
    answer:
      "Yes — and we love this work. We explain every ceremony, dress code, and cultural context clearly. We've helped many couples where one partner had never worn Indian clothes before. No assumptions, no jargon, no judgment. Whether it's explaining what to wear for a Mehndi or navigating the difference between a Sangeet and a Reception, we guide you through every detail.",
  },
  {
    question: "Do you ship Indian wedding items internationally?",
    answer:
      "Yes. We ship to the entire United States, Canada, the United Kingdom, Australia, and New Zealand. All items are quality-checked in India before shipping, fully insured, and sent with complete customs documentation. Standard international shipping takes 2–3 weeks; expedited shipping (7–10 days) is available for urgent timelines.",
  },
]

/* ──────────────────────────────────── */
/*  Flat list for FAQPage JSON-LD      */
/* ──────────────────────────────────── */

const allFaqs = [
  ...faqCategories.flatMap((c) => c.items),
  ...globalFaqs,
]

/* ──────────────────────────────────── */
/*  WhatsApp link                       */
/* ──────────────────────────────────── */

const WA_LINK =
  "https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."

/* ════════════════════════════════════ */
/*  PAGE COMPONENT                      */
/* ════════════════════════════════════ */

export default function FAQPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ])

  const faqSchema = buildFAQSchema(allFaqs)

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      {/* JSON-LD Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
      />

      <SeoNav />

      {/* ─── Hero ─── */}
      <section
        style={{
          padding: "64px 24px 48px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#c7b28a",
            marginBottom: "14px",
            fontWeight: 500,
          }}
        >
          The Trust Center
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 600,
            color: "#1f1f1f",
            lineHeight: 1.12,
            marginBottom: "22px",
          }}
        >
          Frequently Asked Questions
        </h1>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#6a5c55",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          For NRI families planning Indian weddings in the US — scams, sizing
          disasters, and broken promises are real concerns. Here's exactly how
          CeremonyVerse addresses every one of them.
        </p>
      </section>

      {/* ─── Category FAQ Sections ─── */}
      {faqCategories.map((section, sectionIdx) => (
        <section
          key={section.category}
          style={{
            padding: sectionIdx === 0 ? "0 24px 56px" : "16px 24px 56px",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Section header */}
            <div style={{ marginBottom: "28px" }}>
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c7b28a",
                  marginBottom: "8px",
                  fontWeight: 500,
                }}
              >
                {String(sectionIdx + 1).padStart(2, "0")}
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "#1f1f1f",
                  lineHeight: 1.2,
                }}
              >
                {section.category}
              </h2>
            </div>

            {/* FAQ cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              {section.items.map((faq) => (
                <div
                  key={faq.question}
                  style={{
                    background: "#f9f6f3",
                    border: "1px solid #e6dfd5",
                    borderRadius: "14px",
                    padding: "24px 28px",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#1f1f1f",
                      marginBottom: "10px",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "#6a5c55",
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                  {faq.links && faq.links.length > 0 && (
                    <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                      {faq.links.map((link: { label: string; href: string }) => (
                        <Link key={link.href} href={link.href} style={{ fontSize: "13px", color: "#c7b28a", textDecoration: "none", fontWeight: 500 }}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ─── About CeremonyVerse — Global FAQs ─── */}
      <section style={{ padding: "16px 24px 56px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "28px" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#c7b28a",
                marginBottom: "8px",
                fontWeight: 500,
              }}
            >
              06
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.8rem",
                fontWeight: 600,
                color: "#1f1f1f",
                lineHeight: 1.2,
              }}
            >
              About CeremonyVerse
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {globalFaqs.map((faq) => (
              <div
                key={faq.question}
                style={{
                  background: "#f9f6f3",
                  border: "1px solid #e6dfd5",
                  borderRadius: "14px",
                  padding: "24px 28px",
                }}
              >
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#1f1f1f",
                    marginBottom: "10px",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#6a5c55",
                    margin: 0,
                  }}
                >
                  {faq.answer}
                </p>
                {faq.links && faq.links.length > 0 && (
                  <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    {faq.links.map((link: { label: string; href: string }) => (
                      <Link key={link.href} href={link.href} style={{ fontSize: "13px", color: "#c7b28a", textDecoration: "none", fontWeight: 500 }}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section
        style={{
          padding: "56px 24px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              marginBottom: "14px",
            }}
          >
            Still Have Questions?
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#6a5c55",
              marginBottom: "28px",
              maxWidth: "480px",
              margin: "0 auto 28px",
            }}
          >
            Schedule a free consultation and let us address your specific
            situation directly.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#c7b28a",
              color: "#fff",
              padding: "13px 30px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Ask Us Directly on WhatsApp
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      <SeoFooter />
    </div>
  )
}
