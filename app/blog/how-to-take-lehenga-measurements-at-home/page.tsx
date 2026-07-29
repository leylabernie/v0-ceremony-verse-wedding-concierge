import { SeoNav } from "@/components/seo-nav"
import { SourcingCallout } from "@/components/sourcing-callout"
import { buildMetadata, buildBlogPosting, buildBreadcrumb, buildHowToSchema, JsonLd } from "@/lib/seo"
import Link from "next/link"

export const metadata = buildMetadata({
  path: "/blog/how-to-take-lehenga-measurements-at-home/",
  title: "How to Take Lehenga Measurements at Home (NRI Step-by-Step)",
  description: "Take accurate lehenga measurements at home with a soft tape and a helper. Step-by-step blouse, skirt, and dupatta measurements so custom outfits from India fit the first time.",
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
  description: "A complete step-by-step guide to taking accurate lehenga measurements at home — blouse, skirt, and dupatta — so custom outfits stitched in India fit perfectly the first time.",
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
  description: "Step-by-step instructions for taking accurate lehenga measurements at home so a custom bridal or party lehenga stitched in India fits perfectly.",
  url: "/blog/how-to-take-lehenga-measurements-at-home/",
  totalTime: "PT20M",
  steps: [
    {
      name: "Gather your tools and a helper",
      text: "Use a soft cloth measuring tape, wear a well-fitted bra and fitted clothing, and ask a friend to measure you. Self-measuring pulls numbers out of alignment.",
    },
    {
      name: "Measure your bust",
      text: "Wrap the tape around the fullest part of your bust, keeping it level and snug but not tight. Wear the bra you plan to wear on the day.",
    },
    {
      name: "Measure your waist",
      text: "Measure around your natural waistline — the narrowest part of your torso, roughly at belly-button level — keeping the tape parallel to the floor.",
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
      text: "Wear the exact heels you will wear on the day. Measure from your waist to the floor at the front, then subtract about half an inch so the hem clears the ground.",
    },
    {
      name: "Record everything with photos and reference heights",
      text: "Write each measurement in inches, note your height and heel height, and take clear front and side photos so your tailor in India can cross-check the fit.",
    },
  ],
})

const faqs = [
  {
    q: "Should I measure myself or have someone help?",
    a: "Always have someone else measure you. Self-measuring twists the tape and shortens numbers, especially for the back, shoulders, and blouse length. A helper and a soft cloth tape are the two things that matter most.",
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
            The single biggest reason a custom lehenga from India arrives fitting wrong is bad measurements — not bad tailoring. Here is exactly how to get them right from your own bedroom.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            When you order a custom lehenga from India while living in the USA, your tailor never sees you in person. Everything they build is based on the numbers you send. Get those numbers right and the outfit fits like it was made for you — because it was. Get them wrong and you are paying for alterations, or worse, discovering the problem the week of the wedding.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The good news: taking accurate measurements at home is completely doable with a soft measuring tape, fitted clothing, and one friend to help. This guide walks through every measurement your tailor needs, in the order you should take them.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Before You Start: Three Rules That Prevent 90% of Fit Problems
          </h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Never measure yourself.</strong> Have a friend do it. Self-measuring twists the tape and consistently produces short, inaccurate numbers.</li>
            <li><strong>Use a soft cloth tape, not a hardware tape.</strong> And wear fitted clothing plus the bra you will actually wear on the day.</li>
            <li><strong>Record your true body measurements — do not add ease.</strong> Your tailor adds the correct ease for the garment. If you pad the numbers yourself, the outfit ends up loose.</li>
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
              <strong>Waist.</strong> Measure your natural waist — the narrowest part of your torso, roughly at belly-button level — keeping the tape parallel to the floor.
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
              <strong>Lehenga (skirt) length.</strong> Put on the exact heels you will wear on the day. Measure from your waist to the floor at the front, then subtract about half an inch so the hem clears the ground.
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
            For bridal-specific detail — including ease allowances, dupatta sizing, and a 15-point master sheet — see our{" "}
            <Link href="/blog/nri-bridal-lehenga-sizing-guide/" style={{ color: "#7a6841" }}>NRI Bridal Lehenga Sizing Guide</Link>. Wondering about budget?{" "}
            <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>How much a bridal lehenga costs in India (2026)</Link>{" "}
            breaks down every line item.
          </p>

        </div>

        <SourcingCallout />
      </article>
    </main>
  )
}
