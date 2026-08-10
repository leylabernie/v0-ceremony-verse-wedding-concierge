import Image from "next/image";
import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { SourcingCallout } from "@/components/sourcing-callout";
import { buildBlogPosting, buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

const title = "Mexico Wedding Wardrobe Sourcing from India: Planning Guide";
const description =
  "A practical guide to planning Indian wedding outfits, measurements, approvals, shipping, and alteration time for a destination wedding in Mexico.";

export const metadata = buildMetadata({
  path: "/blog/mexico-wedding-wardrobe-sourcing-from-india/",
  title,
  description,
  keywords:
    "Mexico Indian wedding outfits, India wedding wardrobe sourcing, destination wedding outfit planning, Indian wedding outfits Mexico",
  publishedTime: "2026-07-14T10:00:00-05:00",
  modifiedTime: "2026-08-08T21:00:00-04:00",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: title,
  description,
  url: "/blog/mexico-wedding-wardrobe-sourcing-from-india/",
  image: "/images/sourcing/couple-portrait.webp",
  datePublished: "2026-07-14T10:00:00-05:00",
  dateModified: "2026-08-08T21:00:00-04:00",
  authorName: "CeremonyVerse",
  keywords: ["Mexico Indian wedding", "India wedding wardrobe sourcing", "destination wedding outfits", "Indian wedding outfits"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: title, url: "/blog/mexico-wedding-wardrobe-sourcing-from-india/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Can CeremonyVerse source outfits for a destination wedding from India?",
    answer:
      "Yes. CeremonyVerse can coordinate approved wedding-outfit sourcing from India for families throughout the United States and Canada. The written scope identifies which shopping, measurement, inspection, shipping, and delivery responsibilities are included and which third-party costs remain separate.",
  },
  {
    question: "How does live video shopping work?",
    answer:
      "When the vendor and item allow it, Guided Sourcing and Full Bridal Concierge can include a scheduled video review of available pieces. The selected item, measurements, price, and next approval step are documented before purchase or production.",
  },
  {
    question: "How should a family compare India sourcing with US options?",
    answer:
      "There is no universal savings percentage. Compare the approved item price, CeremonyVerse service fee, shipping, possible customs charges, alteration allowance, timeline, and remedy terms with complete written US boutique quotes.",
  },
]);

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7a6841]">
          CeremonyVerse Planning Guide · 7 min read
        </p>
        <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] md:text-5xl">{title}</h1>
        <p className="mb-6 text-lg leading-8 text-[#4d403a]">
          A practical framework for coordinating a multi-event Indian wedding wardrobe across India, the United
          States, and a destination in Mexico.
        </p>
        <p className="mb-12 text-sm text-[#4d403a]">By CeremonyVerse · Updated August 8, 2026</p>

        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="/images/sourcing/couple-portrait.webp"
            alt="Indian wedding couple in coordinated red and cream wedding attire"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none space-y-6 leading-relaxed text-[#4d403a]">
          <p>
            A destination wedding wardrobe can involve the couple, immediate family, wedding party, and several
            events. When outfits are sourced from India for a wedding in Mexico, the plan must separate design and
            sizing decisions from production, U.S. or destination delivery, customs, local alterations, and resort
            handoff responsibilities.
          </p>

          <p>
            This guide is general planning information—not a client case study or delivery guarantee. A private
            proposal should identify clear ownership, documented approvals, realistic timing, and the separation
            between local planning, family-side support, India sourcing, travel providers, and third-party costs.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">Start with one wardrobe brief</h2>
          <p>
            A destination wedding can require outfits for the couple, immediate family, wedding party, and several
            events. Before shopping, organize the event list, wearer list, preferred colors, modesty needs,
            measurements, working budget, and order-by dates. This keeps one purchase from quietly conflicting with
            another.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">Review what is actually available</h2>
          <p>
            Live video can be useful when a vendor and item allow it, but it is not a universal guarantee. The goal is
            to review the actual available piece, fabric, embroidery, color under reasonable lighting, measurements,
            and price before committing. Custom work needs its own written specifications and approval milestones.
          </p>

          <div className="not-prose relative my-8 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/sourcing/bride-traditional.webp"
              alt="Bride in an embroidered traditional wedding outfit"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">Put approvals and costs in writing</h2>
          <p>
            A useful comparison includes the item price, service fee, tailoring, shipping, possible customs charges,
            alteration allowance, delivery timing, and remedy terms. CeremonyVerse does not promise a universal
            savings percentage or an exact copy of a designer&apos;s work. Reference images may guide the requested
            silhouette, palette, and level of handwork, but unauthorized replicas and counterfeit labels are outside
            the service.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">Build in time for inspection and fitting</h2>
          <p>
            The written scope should identify which photos, video, measurements, and condition checks occur before
            shipping. It should also identify who owns final alterations, carrier selection, insurance, customs
            handling, and delivery to the final address. No remote service can responsibly promise perfect fit,
            identical screen color, or a customs date it does not control.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">How this connects to destination planning</h2>
          <p>
            CeremonyVerse offers destination planning, on-site coordination, family support, and optional India sourcing
            across Mexico and in Punta Cana. Cancun and Riviera Maya appear in the family-experience story, while Punta
            Cana is current service coverage; this guide does not present a client portfolio.
          </p>
        </div>

        <div className="mt-16 rounded-2xl bg-[#1f1f1f] p-8 text-center text-white">
          <h2 className="font-serif text-3xl font-semibold">Planning a destination wedding or sourcing from India?</h2>
          <p className="mt-4 leading-7 text-[#e8dfd2]">
            Share your dates, destination, guest count, events, shopping needs, and working budget. CeremonyVerse will
            recommend a clear next step and identify which responsibilities belong in the private proposal.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact/" className="rounded-full bg-[#7a6841] px-7 py-3 font-semibold text-white">
              Request a Private Proposal
            </Link>
            <Link
              href="/indian-wedding-coordination-mexico/"
              className="rounded-full border border-[#7a6841] px-7 py-3 font-semibold text-white"
            >
              Review Destination Planning
            </Link>
          </div>
        </div>

        <SourcingCallout />
      </article>
    </main>
  );
}
