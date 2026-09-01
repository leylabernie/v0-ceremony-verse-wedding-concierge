import { SeoNav } from "@/components/seo-nav"
import { SourcingCallout } from "@/components/sourcing-callout"
import { buildMetadata, buildBlogPosting, buildBreadcrumb, buildHowToSchema, JsonLd } from "@/lib/seo"
import Link from "next/link"

export const metadata = buildMetadata({
  path: "/blog/how-to-take-lehenga-measurements-at-home/",
  title: "How to Take Lehenga Measurements at Home (NRI Step-by-Step)",
  description: "Document blouse, skirt, and dupatta measurements with the selected vendor's chart, a helper or local tailor, and time for a fitting and alterations.",
  keywords: [
    "how to take lehenga measurements at home",
    "lehenga measurement guide",
    "blouse measurement chart",
    "NRI bride measurements",
    "custom lehenga sizing from India",
  ],
  publishedTime: "2026-07-29",
  authorName: "CeremonyVerse",
  ogType: "article",
})

const blogPostingSchema = buildBlogPosting({
  headline: "How to Take Lehenga Measurements at Home: A Step-by-Step Guide for NRI Brides",
  description: "A step-by-step guide to documenting lehenga measurements at home while preserving room for vendor review, a local fitting, and alterations.",
  url: "/blog/how-to-take-lehenga-measurements-at-home/",
  datePublished: "2026-07-29",
  keywords: [
    "how to take lehenga measurements at home",
    "lehenga measurement guide",
    "blouse measurement chart",
    "NRI bride measurements",
  ],
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "How to Take Lehenga Measurements at Home", url: "/blog/how-to-take-lehenga-measurements-at-home/" },
])

const howToSchema = buildHowToSchema({
  name: "How to Take Lehenga Measurements at Home",
  description: "Step-by-step instructions for documenting lehenga measurements at home for the selected vendor's review.",
  url: "/blog/how-to-take-lehenga-measurements-at-home/",
  totalTime: "PT20M",
  steps: [
    {
      name: "Gather your tools and a helper",
      text: "Use a soft cloth measuring tape, wear a well-fitted bra and fitted clothing, and ask a friend to measure you. Self-measuring pulls numbers out of alignment.",
    },
    {
      name: "Measure your bust",
      text: "Follow the selected vendor's chart while recording the fullest-bust measurement. Keep the tape level and note the event-day undergarment and fit preference.",
    },
    {
      name: "Measure your waist",
      text: "Use the selected vendor's stated waist reference point and keep the tape level. Record where the lehenga is intended to sit rather than assuming one waist position for every garment.",
    },
    {
      name: "Measure your hips",
      text: "Measure around the fullest part of your hips and seat with your feet together, keeping the tape level all the way around.",
    },
    {
      name: "Measure your blouse (choli) length and shoulder",
      text: "Measure from the high point of your shoulder down to where you want the blouse to end, and measure shoulder-to-shoulder across your upper back.",
    },
    {
      name: "Measure your sleeve and armhole",
      text: "Measure sleeve length from shoulder point to your desired end point, upper-arm circumference around the widest part of your bicep, and armhole around the shoulder-armpit joint.",
    },
    {
      name: "Measure the lehenga (skirt) length",
      text: "Record the vendor's requested start and end points, intended heel height, and hem preference. Do not subtract or add an allowance unless the selected vendor requests it.",
    },
    {
      name: "Record everything with photos and reference heights",
      text: "Label the unit, note height and intended heel height, and provide only the reference photos requested by the selected vendor. Keep the final chart and approval in writing.",
    },
  ],
})

const faqs = [
  {
    q: "Should I measure myself or have someone help?",
    a: "Use the selected vendor's instructions. A helper or qualified local tailor can make back, shoulder, and length measurements easier to record, but no method guarantees fit.",
  },
  {
    q: "In inches or centimeters?",
    a: "Either works, but be consistent and label the unit. Most India workshops accept both; when in doubt, send inches and note it clearly on your measurement sheet.",
  },
  {
    q: "How much ease should I add?",
    a: "Don't add ease yourself — record your true body measurements. Experienced tailors add the correct ease for the garment and fabric. Adding your own ease on top of theirs is the most common cause of a loose, sloppy fit.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function HowToTakeLehengaMeasurementsPage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <SeoNav />

      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · July 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            How to Take Lehenga Measurements at Home: A Step-by-Step Guide for NRI Brides
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Use the selected vendor&apos;s measurement chart and document the numbers consistently. Remote made-to-measure clothing can still require a local fitting and alterations.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            Remote production relies on the selected vendor&apos;s chart, the measurements and fit preferences you approve, and the vendor&apos;s construction process. Measurements can reduce recording errors but cannot guarantee fit.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            A helper or qualified local tailor can make the recording process easier. Use this guide to prepare, then follow the selected vendor&apos;s chart, terminology, layers, and approval process because requirements vary by garment and workshop.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Before You Start: Three Documentation Checks
          </h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Use help when possible.</strong> A helper or qualified local tailor can make back, shoulder, and length measurements easier to record.</li>
            <li><strong>Use a soft cloth tape, not a hardware tape.</strong> And wear fitted clothing plus the bra you will actually wear on the day.</li>
            <li><strong>Follow the selected vendor&apos;s chart.</strong> Confirm who adds ease, which layers or undergarments to wear, the unit, and the final approval process.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Step-by-Step: Every Measurement Your Tailor Needs
          </h2>

          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <li>
              <strong>Gather your tools and a helper.</strong> Soft cloth measuring tape, a well-fitted bra, fitted clothing, and a friend. Stand naturally with your weight even on both feet.
            </li>
            <li>
              <strong>Bust.</strong> Wrap the tape around the fullest part of your bust, level all the way around, snug but not compressing. Wear your event-day bra.
            </li>
            <li>
              <strong>Waist and skirt position.</strong> Follow the vendor&apos;s stated reference point, keep the tape level, and record where the lehenga is intended to sit.
            </li>
            <li>
              <strong>Hips.</strong> Measure the fullest part of your hips and seat with your feet together, tape level all the way around.
            </li>
            <li>
              <strong>Blouse (choli) length and shoulder.</strong> Measure from the high point of your shoulder to where you want the blouse to end, then shoulder-to-shoulder across your upper back.
            </li>
            <li>
              <strong>Sleeve and armhole.</strong> Sleeve length from shoulder point to your desired end; upper-arm circumference around the widest part of your bicep; armhole around the shoulder-armpit joint.
            </li>
            <li>
              <strong>Lehenga (skirt) length.</strong> Record the vendor&apos;s requested start and end points, intended heel height, and hem preference. Do not add or subtract an allowance unless the vendor requests it.
            </li>
            <li>
              <strong>Record everything with photos.</strong> Write each number in inches, note your height and heel height, and take clear front and side photos so your tailor can sanity-check the fit.
            </li>
          </ol>

          <SourcingCallout />

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Common Mistakes to Avoid
          </h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>Measuring the skirt length barefoot, then wearing heels on the day — the hem ends up too short.</li>
            <li>Wearing a different bra for measuring than for the event, which changes the bust and blouse fit.</li>
            <li>Pulling the tape too tight for a "flattering" number, which produces a blouse that won't close.</li>
            <li>Sending measurements without your height and heel height, leaving the tailor to guess proportions.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Frequently Asked Questions
          </h2>
          {faqs.map((f) => (
            <div key={f.q} style={{ marginBottom: "1.4rem" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "#2f2f2f", marginBottom: "0.4rem" }}>
                {f.q}
              </p>
              <p>{f.a}</p>
            </div>
          ))}

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Keep Reading
          </h2>
          <p>
            Measurements are only one part of the order record. Read{" "}
            <Link href="/blog/indian-wedding-shopping-timeline-checklist/" style={{ color: "#7a6841" }}>the complete outfit-shopping timeline</Link>,{" "}
            <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>how to build a complete bridal-lehenga quote</Link>{" "}
            and the{" "}
            <Link href="/blog/ordering-indian-wedding-outfits-usa-canada/" style={{ color: "#7a6841" }}>USA and Canada ordering guide</Link>{" "}
            before approving production or shipping.
          </p>

        </div>

        <SourcingCallout />
      </article>
    </main>
  )
}
