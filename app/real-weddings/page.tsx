import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/real-weddings/",
  title: "Family Wedding Experience Behind CeremonyVerse",
  description:
    "Three Indian family weddings in Mexico shaped CeremonyVerse: Hard Rock Hotel Cancun, Generations Riviera Maya, and a Royalton resort in Mexico.",
  keywords: [
    "Indian destination wedding Mexico experience",
    "Gujarati wedding Cancun",
    "Generations Riviera Maya Indian wedding",
    "Royalton Indian wedding Mexico",
    "CeremonyVerse family experience",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Family Wedding Experience", url: "/real-weddings/" },
]);

const experiences = [
  {
    venue: "Hard Rock Hotel Cancun",
    detail: "Approximately 150 guests",
    context: "A family celebration in Mexico, shared as background only—not a CeremonyVerse client project.",
  },
  {
    venue: "Generations Riviera Maya",
    detail: "Approximately 130 guests · February 2023",
    context: "A family celebration in Riviera Maya, shared as background only—not a CeremonyVerse client project.",
  },
  {
    venue: "Royalton resort in Mexico",
    detail: "Approximately 80 guests · 2024",
    context: "A family celebration in Mexico, shared as background only—not a CeremonyVerse client project.",
  },
];

export default function WeddingExperiencePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <SeoNav />

      <section className="bg-[#1f1f1f] px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            The experience behind the service
          </p>
          <h1 className="mb-6 font-serif text-5xl font-semibold sm:text-6xl">
            Three family weddings in Mexico
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/80">
            These were family celebrations—not CeremonyVerse client projects. They are shared to explain the honest
            background behind CeremonyVerse&apos;s destination-planning support and India-sourcing service.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <article key={experience.venue} className="rounded-2xl border border-[#e6dfd5] bg-white p-8 sm:p-10">
              <p className="font-serif text-5xl text-[#7a6841]">0{index + 1}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Family wedding</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">{experience.venue}</h2>
              <p className="mt-3 font-semibold text-[#7a6841]">{experience.detail}</p>
              <p className="mt-5 leading-7 text-[#4d403a]">{experience.context}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            How the experience is used today
          </p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Better questions, clearer responsibilities, and one organized family relationship
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            CeremonyVerse now serves Gujarati and Hindu destination weddings across Mexico and in Punta Cana, with
            planning, on-site coordination, family support, guest organization, and optional India sourcing defined
            privately for each wedding. Punta Cana is part of current service coverage; it is not part of the three
            family weddings above.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/indian-wedding-coordination-mexico/"
              className="rounded-full bg-[#7a6841] px-7 py-3 font-semibold text-white"
            >
              Review Destination Planning
            </Link>
            <Link
              href="/buy-indian-wedding-outfits-from-india/"
              className="rounded-full border border-[#7a6841] px-7 py-3 font-semibold text-[#7a6841]"
            >
              Explore India Shopping
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Planning a destination wedding, shopping India, or both?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Tell us your destination, ceremonies, party size, shopping needs, timeline, and budget. We&apos;ll recommend
            a clear service scope during the free consultation.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
          >
            Request a Private Proposal
          </Link>
        </div>
      </section>
    </main>
  );
}
