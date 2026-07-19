import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/blog/nri-bridal-lehenga-sizing-guide/",
  title: "NRI Bridal Lehenga Sizing Guide | CeremonyVerse",
  description: "Take 15+ precise bridal lehenga measurements at home for perfect custom fits from India. Free master measurement sheet for NRI brides.",
  keywords: ["bridal lehenga sizing guide", "how to take lehenga measurements at home", "NRI bride measurements", "lehenga blouse measurement guide"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "NRI Bridal Lehenga Sizing Guide: How to Take Measurements at Home",
  description: "How to take 15+ precise bridal lehenga measurements at home for custom stitching in India \u2014 blouse, skirt, dupatta, and ease allowances for NRI brides.",
  url: "/blog/nri-bridal-lehenga-sizing-guide/",
  datePublished: "2026-03-01",
  keywords: ["bridal lehenga sizing guide", "how to take lehenga measurements at home", "NRI bride measurements", "lehenga blouse measurement guide"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "NRI Bridal Lehenga Sizing Guide: How to Take Measurements at", url: "/blog/nri-bridal-lehenga-sizing-guide/" },
]);

export default function SizingGuidePage() {
  return (
    <main className="min-h-screen bg-[var(--cv-bg)]">
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      <SeoNav />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--cv-foreground)] mb-8">NRI Bridal Lehenga Sizing Guide</h1>
          <p className="text-lg text-[var(--cv-muted)] mb-8">
            The biggest fear for any NRI bride sourcing from India is the fit. This guide ensures your measurements are pinpoint accurate.
          </p>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">1. The Golden Rule of Measurements</h2>
              <p className="text-[var(--cv-muted)]">
                Always have a professional tailor take your measurements. DIY measurements often lead to tight armholes or short lehenga lengths.
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
            <p className="mb-8">We provide our clients with a 15-point measurement guide used by top India workshops.</p>
            <a href="/contact" className="inline-block bg-white text-[var(--cv-accent)] px-8 py-4 rounded-lg font-bold">
              Book a Sourcing Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
