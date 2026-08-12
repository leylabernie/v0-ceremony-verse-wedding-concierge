import Link from "next/link"
import { SourcingCallout } from "@/components/sourcing-callout"
import {
  buildBlogPosting,
  buildBreadcrumb,
  buildMetadata,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/blog/nri-bride-lehenga-sourcing-new-jersey-story/",
  title: "Bridal Lehenga Sourcing Scenario for New Jersey Brides",
  description:
    "An illustrative, clearly labeled planning scenario for comparing a bridal lehenga from India with New Jersey boutique options.",
  keywords: [
    "NRI bride New Jersey lehenga",
    "bridal lehenga sourcing checklist",
    "Indian wedding shopping NJ",
    "lehenga from India planning scenario",
  ],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
})

const blogPostingSchema = buildBlogPosting({
  headline: "Bridal Lehenga Sourcing Scenario for New Jersey Brides",
  description:
    "An illustrative planning scenario for comparing a bridal lehenga from India with New Jersey boutique options.",
  url: "/blog/nri-bride-lehenga-sourcing-new-jersey-story/",
  datePublished: "2026-03-01",
  keywords: [
    "NRI bride New Jersey lehenga",
    "bridal lehenga sourcing checklist",
    "Indian wedding shopping NJ",
  ],
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  {
    name: "New Jersey Bridal Lehenga Sourcing Scenario",
    url: "/blog/nri-bride-lehenga-sourcing-new-jersey-story/",
  },
])

const planningSteps = [
  {
    title: "1. Build one written brief",
    body:
      "List the wedding date, deadline for first local fitting, preferred color and silhouette, handwork preferences, measurements, and complete budget. Separate must-haves from optional details.",
  },
  {
    title: "2. Compare complete quotes",
    body:
      "For every India or New Jersey option, compare the product, customization, service fee, shipping, customs estimate, alteration budget, payment schedule, cancellation terms, and available remedy.",
  },
  {
    title: "3. Verify the actual option",
    body:
      "Ask for live video or current dated media when possible. Confirm whether you are approving an in-stock piece, a sample, or a new custom production order.",
  },
  {
    title: "4. Document measurements and approvals",
    body:
      "Use the selected vendor's measurement format, review the final chart, and keep written records of the approved fabric, color, embroidery, lining, blouse, dupatta, and delivery target.",
  },
  {
    title: "5. Protect the alteration window",
    body:
      "Remote made-to-measure clothing can still need adjustment. Build enough time for delivery, customs, a first fitting, and local tailoring rather than relying on a universal fit or shipping guarantee.",
  },
]

export default function BrideSourcingScenarioPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#2f2f2f]">
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      <header className="bg-[#2f2f2f] px-6 py-16 text-center text-[#f8f6f2]">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.16em] text-[#c5a059]">
            Illustrative planning scenario · not a client testimonial
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Comparing a Bridal Lehenga from India with New Jersey Options
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Use this decision framework to compare real quotes and reduce avoidable risk. The page
            does not represent a named client, promised outcome, or universal savings percentage.
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-5 font-serif text-3xl font-semibold">
          A realistic starting situation
        </h2>
        <p className="text-lg leading-8 text-[#4d403a]">
          Imagine a New Jersey bride who wants a made-to-measure lehenga but has not yet decided
          whether to buy locally or source from India. She has reference images, a budget, and a
          wedding date. Those details are not enough: the useful comparison is the complete landed
          cost, written scope, approval process, timeline, and remedy terms for each actual option.
        </p>

        <div className="my-12 space-y-5">
          {planningSteps.map((step) => (
            <section
              key={step.title}
              className="rounded-2xl border border-[#e6dfd5] bg-white p-7"
            >
              <h2 className="mb-3 font-serif text-2xl font-semibold">{step.title}</h2>
              <p className="leading-7 text-[#4d403a]">{step.body}</p>
            </section>
          ))}
        </div>

        <section className="rounded-2xl bg-[#efe8de] p-8">
          <h2 className="mb-4 font-serif text-3xl font-semibold">What CeremonyVerse adds</h2>
          <p className="mb-6 leading-7 text-[#4d403a]">
            CeremonyVerse offers flat-fee India shopping tiers for research, eligible live shopping,
            documented approvals, measurement coordination, pre-shipping review, and delivery
            support. Product, shipping, customs, and local alteration costs remain separate.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pricing/"
              className="inline-flex justify-center rounded-full bg-[#7a6841] px-6 py-3 font-semibold text-white"
            >
              Compare Service Tiers
            </Link>
            <Link
              href="/contact/"
              className="inline-flex justify-center rounded-full border border-[#7a6841] px-6 py-3 font-semibold text-[#7a6841]"
            >
              Schedule a Free 30-Minute Consultation
            </Link>
          </div>
        </section>

        <SourcingCallout />
      </article>
    </main>
  )
}
