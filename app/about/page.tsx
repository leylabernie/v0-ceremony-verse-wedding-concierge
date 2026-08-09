import Image from "next/image";
import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/about/",
  title: "About CeremonyVerse — Family Experience & Partnership",
  description:
    "CeremonyVerse grew from three Indian family weddings in Mexico and now combines family-side support, destination planning, and optional India sourcing.",
  keywords:
    "About CeremonyVerse, Indian destination wedding family experience, Gujarati wedding planning support, Hindu wedding planning support, Mexico wedding partnership, India wedding sourcing",
});

const breadcrumbSchema = buildBreadcrumb([{ name: "About", url: "/about/" }]);

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About CeremonyVerse",
  url: "https://www.ceremonyverse.com/about/",
  description:
    "CeremonyVerse was shaped by firsthand family involvement in three Indian destination weddings in Mexico and now works with an experienced destination-wedding planner serving Cancun, Riviera Maya, and Punta Cana.",
  mainEntity: {
    "@type": "Organization",
    name: "CeremonyVerse",
    foundingDate: "2021",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "PA",
      addressLocality: "Philadelphia",
    },
    telephone: "+12153419990",
    email: "hello@ceremonyverse.com",
    areaServed: ["United States", "Cancun", "Riviera Maya", "Punta Cana"],
  },
};

const familyWeddings = [
  {
    venue: "Hard Rock Hotel Cancun",
    detail: "Approximately 150 guests · Mexico",
  },
  {
    venue: "Generations Riviera Maya",
    detail: "Approximately 130 guests · February 2023",
  },
  {
    venue: "Royalton resort in Mexico",
    detail: "Approximately 80 guests · 2024",
  },
];

const responsibilities = [
  ["Local destination planning", "Planning partner"],
  ["Resort and local-vendor coordination", "Planning partner"],
  ["Production timeline and on-site execution", "Planning partner"],
  ["Cultural and family requirements", "CeremonyVerse with the family"],
  ["Family communication and approvals", "CeremonyVerse and planning partner"],
  ["India outfits, jewelry, gifts and ceremony sourcing", "CeremonyVerse when included"],
  ["Guest information and welcome details", "CeremonyVerse when included"],
  ["Travel, rooms and transportation bookings", "Resort or licensed travel provider"],
  ["Final decisions and timely approvals", "Client"],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-about" data={aboutSchema} />
      <SeoNav />

      <section className="bg-[#1f1f1f] px-6 py-24 text-[#f8f6f2]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            About CeremonyVerse
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Built from firsthand family experience
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#e8dfd2] md:text-xl">
            CeremonyVerse was shaped by close family involvement in three Indian destination weddings in Mexico.
            That experience revealed how easily resort decisions, cultural needs, guest logistics, wedding wardrobes,
            vendor responsibilities, and family communication can become disconnected.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              The experience behind the service
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Three family weddings in Mexico</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              These were family celebrations—not CeremonyVerse client projects. They are shared as the honest
              background that shaped the questions, safeguards, and family-side support used today.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {familyWeddings.map((wedding) => (
              <article key={wedding.venue} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Family wedding</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{wedding.venue}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{wedding.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/sourcing/couple-portrait.webp"
              alt="Indian couple in coordinated wedding attire"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              One coordinated planning relationship
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
              Destination expertise, family-side support, and optional India sourcing
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
              <p>
                CeremonyVerse works in partnership with an experienced destination-wedding planner serving Cancun,
                Riviera Maya, and Punta Cana. The planning partner becomes involved from the beginning and leads the
                contracted local planning and on-site execution.
              </p>
              <p>
                CeremonyVerse works alongside the planner and family to keep cultural requirements, family priorities,
                approvals, guest information, welcome details, and other agreed responsibilities organized. When India
                sourcing is needed, CeremonyVerse leads the approved sourcing scope.
              </p>
              <p>
                Our initial destination-planning focus is Gujarati and Hindu families. Punta Cana is a current service
                destination through the planning partnership; it is not part of the three-wedding family experience
                described above.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Clear responsibility from the start
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Who leads each part</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4d403a]">
              The private proposal identifies the final scope, fees, payment recipients, third-party costs, and
              responsibilities before any agreement is signed.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-[#e6dfd5] bg-white">
            {responsibilities.map(([area, owner], index) => (
              <div
                key={area}
                className={`grid gap-2 px-6 py-5 sm:grid-cols-[1.1fr_0.9fr] ${index % 2 === 0 ? "bg-[#faf8f5]" : "bg-white"}`}
              >
                <h3 className="font-semibold">{area}</h3>
                <p className="text-[#4d403a]">{owner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Tell us what your family needs</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Share your destination, preferred dates, guest count, ceremonies, budget, and whether India sourcing is
            needed. CeremonyVerse will recommend a clear next step without publishing the planning partner&apos;s private
            identity or pricing.
          </p>
          <Link
            href="/contact/?service=mexico"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
          >
            Request a Private Destination-Wedding Proposal
          </Link>
        </div>
      </section>
    </main>
  );
}
