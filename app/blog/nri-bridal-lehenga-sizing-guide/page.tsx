import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildBlogPosting, buildBreadcrumb, buildHowToSchema, JsonLd } from "@/lib/seo"
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/nri-bridal-lehenga-sizing-guide/",
  title: "NRI Bridal Lehenga Sizing: Step-by-Step Measurement Guide",
  description: "Avoid costly alteration mistakes when ordering bridal lehengas from India. Step-by-step sizing templates tailored specifically for NRI brides.",
  keywords: ["bridal lehenga sizing guide", "how to take lehenga measurements at home", "NRI bride measurements", "lehenga blouse measurement guide"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "NRI Bridal Lehenga Sizing Guide: How to Take Measurements at Home",
  description: "How to document bridal lehenga measurements using the selected vendor's chart, including blouse, skirt, dupatta, fit preferences, and a local fitting plan.",
  url: "/blog/nri-bridal-lehenga-sizing-guide/",
  datePublished: "2026-03-01",
  keywords: ["bridal lehenga sizing guide", "how to take lehenga measurements at home", "NRI bride measurements", "lehenga blouse measurement guide"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "NRI Bridal Lehenga Sizing Guide: How to Take Measurements at", url: "/blog/nri-bridal-lehenga-sizing-guide/" },
]);

const howToSchema = buildHowToSchema({
  name: "How to Take Bridal Lehenga Measurements at Home for NRI Brides",
  description: "Step-by-step guide to documenting bridal lehenga measurements for the selected vendor while preserving a local fitting and alteration plan.",
  url: "/blog/nri-bridal-lehenga-sizing-guide/",
  steps: [
    {
      name: "Have a professional tailor measure you",
      text: "Use the selected vendor's chart. A qualified local tailor can help record measurements, but remote made-to-measure clothing can still require alteration.",
    },
    {
      name: "Measure blouse length",
      text: "Measure from the high point of your shoulder down to your desired blouse length.",
    },
    {
      name: "Measure bust",
      text: "Measure around the fullest part of your bust while wearing the wedding bra you plan to wear on the day.",
    },
    {
      name: "Measure lehenga length",
      text: "Measure from where you wear your skirt down to the floor, and include the height of the heels you will wear.",
    },
  ],
});

export default function SizingGuidePage() {
  return (
    <main className="min-h-screen bg-[var(--cv-bg)]">
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
        <JsonLd id="schema-howto" data={howToSchema} />
      
      <SeoNav />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--cv-foreground)] mb-8">NRI Bridal Lehenga Sizing Guide</h1>
          <p className="text-lg text-[var(--cv-muted)] mb-8">
            This guide helps document measurements consistently; it does not guarantee fit or replace the selected vendor&apos;s chart and a local fitting plan.
          </p>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">1. The Golden Rule of Measurements</h2>
              <p className="text-[var(--cv-muted)]">
                Use the selected vendor&apos;s chart. A qualified local tailor can help record measurements, layers, and fit preferences, but remote work can still require alteration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">2. Key Measurements Needed</h2>
              <ul className="list-disc pl-6 space-y-2 text-[var(--cv-muted)]">
                <li><strong>Blouse Length:</strong> Measure from high point of shoulder to desired length.</li>
                <li><strong>Bust:</strong> Measure around the fullest part with your wedding bra on.</li>
                <li><strong>Lehenga Length:</strong> Measure from where you wear your skirt to the floor (include your heel height!).</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-[var(--cv-accent)] text-white p-10 rounded-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Want our Master Measurement Sheet?</h2>
            <p className="mb-8">For eligible tiers, we provide a detailed measurement guide aligned to the selected vendor&apos;s requested format.</p>
            <a href="/contact/" className="inline-block bg-white text-[var(--cv-accent)] px-8 py-4 rounded-lg font-bold">
              Book a Sourcing Consultation
            </a>
          </div>
        </div>
      </section>
          <SourcingCallout />
    </main>
  )
}
