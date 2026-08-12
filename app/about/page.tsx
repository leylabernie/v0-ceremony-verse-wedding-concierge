import Image from "next/image";
import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/about/",
  title: "About CeremonyVerse — Family-Side Wedding Support",
  description:
    "Learn how CeremonyVerse combines firsthand family-side experience, an experienced destination partner, and documented India sourcing for Gujarati and Hindu weddings.",
  keywords:
    "About CeremonyVerse, Indian destination wedding family experience, Gujarati wedding planning support, Hindu wedding planning support, Mexico destination wedding service, India wedding sourcing",
});

const breadcrumbSchema = buildBreadcrumb([{ name: "About", url: "/about/" }]);

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About CeremonyVerse",
  url: "https://www.ceremonyverse.com/about/",
  description:
    "CeremonyVerse combines firsthand family-side destination-wedding experience with an experienced Mexico City-based planning and execution partner and optional India sourcing.",
  mainEntity: {
    "@type": "Organization",
    name: "CeremonyVerse",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "PA",
      addressLocality: "Philadelphia",
    },
    telephone: "+12153419990",
    email: "hello@ceremonyverse.com",
    areaServed: ["United States", "Canada", "Mexico", "Jamaica", "Punta Cana"],
  },
};

const experienceLessons = [
  {
    title: "Multi-day event flow",
    detail: "Keep ceremonies, family decisions, vendor deadlines, approvals, and on-site responsibilities in one working plan.",
  },
  {
    title: "Guest and family logistics",
    detail: "Organize travel origins, arrivals, rooms, accessibility needs, welcome details, and the information families need before the wedding.",
  },
  {
    title: "Clear provider roles",
    detail: "Record what CeremonyVerse, the destination partner, the resort, each vendor, and the family are responsible for before paid work begins.",
  },
];

const familyWeddings = [
  {
    venue: "Hard Rock Hotel Cancun",
    detail: "Approximately 150 guests",
    context: "Firsthand family wedding experience in Mexico",
  },
  {
    venue: "Generations Riviera Maya",
    detail: "Approximately 130 guests · February 2023",
    context: "Firsthand family wedding experience in Mexico",
  },
  {
    venue: "Royalton resort in Mexico",
    detail: "Approximately 80 guests · 2024",
    context: "Firsthand family wedding experience in Mexico",
  },
];

const originStoryPhotos = [
  {
    src: "/images/proof/prior-outfit-couple.webp",
    alt: "Couple wearing coordinated custom wedding outfits from a project completed before CeremonyVerse launched",
    frameClass: "aspect-[3/4]",
    imageClass: "object-contain",
  },
  {
    src: "/images/proof/prior-outfit-wedding-party.webp",
    alt: "Wedding party wearing coordinated Indian outfits from a pre-launch custom-outfit project",
    frameClass: "aspect-[4/3]",
    imageClass: "object-cover",
  },
  {
    src: "/images/proof/prior-outfit-groomsmen.webp",
    alt: "Groom and groomsmen wearing coordinated Indian wedding outfits from a pre-launch project",
    frameClass: "aspect-[4/3]",
    imageClass: "object-cover",
  },
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
            Family-side clarity, backed by destination experience
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#e8dfd2] md:text-xl">
            CeremonyVerse was shaped by firsthand family-side experience navigating multi-day Indian destination
            weddings in Mexico. It showed how easily resort decisions, cultural needs, guest logistics, wedding
            wardrobes, vendor responsibilities, and family communication can become disconnected.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              What the experience taught us
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Turn wedding complexity into visible decisions</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              The family experience is background, not a CeremonyVerse client portfolio. It shaped the questions,
              safeguards, and family-side support used today without presenting private celebrations as client work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {experienceLessons.map((lesson) => (
              <article key={lesson.title} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Working principle</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{lesson.title}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{lesson.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Firsthand family experience</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Three destination weddings that shaped the questions we ask</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              These were family weddings—not CeremonyVerse client engagements. They are shared as truthful background
              for the service model, not as testimonials, reviews, or a destination-planning portfolio.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {familyWeddings.map((wedding) => (
              <article key={wedding.venue} className="rounded-2xl border border-[#d9cfbf] bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Family wedding · not a client project</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{wedding.venue}</h3>
                <p className="mt-4 font-semibold text-[#5e4a40]">{wedding.detail}</p>
                <p className="mt-3 leading-7 text-[#4d403a]">{wedding.context}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            How the outfit-sourcing service started
          </p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            One family wedding led to the first custom-outfit request
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              Before CeremonyVerse launched, its founder coordinated custom outfits for her son&apos;s wedding. After
              seeing those finished wedding looks, another couple asked her to help source and coordinate their own
              custom outfits.
            </p>
            <p>
              That experience became the beginning of the personalized outfit-sourcing service now offered through
              CeremonyVerse. The work was completed before CeremonyVerse existed and relates specifically to custom
              outfit sourcing—not destination-wedding planning.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-[0.75fr_1fr_1fr] md:items-center">
            {originStoryPhotos.map((photo) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-2xl bg-[#f4eee4] ${photo.frameClass}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={photo.imageClass}
                />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-[#6a5b52]">
            These photographs show prior custom-outfit sourcing and coordination completed before CeremonyVerse
            launched. They do not represent a CeremonyVerse destination-planning engagement.
          </p>
          <Link
            href="/buy-indian-wedding-outfits-from-india/"
            className="mt-8 inline-flex rounded-full border border-[#7a6841] px-7 py-3 font-semibold text-[#7a6841]"
          >
            Explore the Outfit-Sourcing Service
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#f4eee4]">
              <Image
                src="/images/proof/family-wedding-mandap-couple.webp"
                alt="Bride and groom beneath a floral mandap at a family wedding that helped shape CeremonyVerse"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-xs leading-5 text-[#6a5b52]">
              Family wedding experience that helped shape CeremonyVerse—not a CeremonyVerse client event.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Current destination coverage
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
              Destination planning across Mexico, Jamaica, and Punta Cana
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
              <p>
                CeremonyVerse supports Gujarati and Hindu destination weddings throughout Mexico, Jamaica, and Punta Cana.
                CeremonyVerse is the family-facing point of contact for cultural understanding, approvals, guest
                organization, logistics oversight, transparency, and optional sourcing support.
              </p>
              <p>
                An experienced Mexico City-based planning and execution partner handles the selected local planning,
                vendor coordination, negotiations, and on-site execution. The private proposal identifies each party&apos;s
                responsibilities, fees, outside costs, approvals, payment handling, and exclusions before paid work.
              </p>
              <p>
                Families can work with CeremonyVerse from anywhere in the United States or Canada. India-sourcing
                shipment terms, tracking, customs responsibilities, and outside costs are confirmed for the exact
                destination before an approved shipment proceeds.
              </p>
              <p>
                CeremonyVerse does not independently sell rooms, flights, transfers, or travel insurance. Those services
                must be booked through the resort or another properly authorized travel provider identified for the
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Before you sign</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold !text-white sm:text-5xl">What you can verify now</h2>
            <p className="mt-5 text-lg leading-8 !text-white/75">
              A new company should make its operating model easier to inspect, not ask you to rely on claims alone.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Starting fees", "Planning-package starting fees and India-sourcing service fees are published in USD."],
              ["Complete process", "The consultation-to-closeout journey shows decisions, approvals, owners, and client checkpoints."],
              ["Provider contracts", "Resorts and licensed providers issue and control their own bookings, contracts, and payments."],
              ["Private written scope", "The proposal names local responsibilities, fees, exclusions, outside costs, and payment milestones before paid work."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-white/15 bg-white/5 p-7">
                <h3 className="font-serif text-2xl font-semibold !text-white">{title}</h3>
                <p className="mt-4 leading-7 !text-white/70">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link href="/how-it-works/" className="inline-flex rounded-full bg-[#c5a059] px-7 py-3.5 text-sm font-semibold !text-[#1f1f1f]">Review the Complete Process</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              A more organized family experience
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Turn scattered decisions into one working plan</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4d403a]">
              CeremonyVerse helps families organize the facts that drive the wedding: total budget coverage, resort
              terms, ceremonies, approvals, guest logistics, arrival details, and optional India sourcing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Planning facts", "Dates, guest origins, event count, cultural requirements, resort status, and what the budget must cover."],
              ["Written decisions", "Approvals, deadlines, open questions, outside costs, and service boundaries recorded before commitments."],
              ["Guest and sourcing details", "Rooms, arrivals, welcome needs, wedding wardrobes, gifts, and ceremony items organized when included."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Tell us what your family needs</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Share your destination, preferred dates, guest count, ceremonies, budget, and whether India sourcing is
            needed. CeremonyVerse will use those facts during the free consultation and explain the practical next step.
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
