import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildServiceSchema, buildMetadata, JsonLd } from "@/lib/seo"
import { resortProfiles } from "@/lib/resort-links"

export const metadata = buildMetadata({
  path: "/resorts/",
  title: "Resort Profiles for Indian Destination Weddings — Mexico & Punta Cana",
  description:
    "Compare independent resort profiles for Gujarati and Hindu destination weddings in Cancún, Riviera Maya, Los Cabos, and Punta Cana — Moon Palace, Hard Rock, Hyatt Inclusive Collection, and Lopesan Costa Bávaro — with the package, venue, catering, and room-block terms to confirm in writing.",
  image: "/images/sourcing/couple-mandap.webp",
})

const faqItems = [
  {
    question: "Are these resort profiles endorsements or preferred partnerships?",
    answer:
      "No. These are independent evaluation profiles to help families compare resorts. Inclusion does not mean affiliation, preferred status, guaranteed South Asian capability, availability, or a recommendation. Current resort proposals and contracts control, and CeremonyVerse works from written terms rather than sales claims.",
  },
  {
    question: "Which resorts are covered for Indian destination weddings?",
    answer:
      "Detailed written profiles are published for Moon Palace Cancún, Hard Rock Riviera Maya, the Hyatt Inclusive Collection across Cancún, Riviera Maya, Los Cabos, and Punta Cana, and Lopesan Costa Bávaro in Punta Cana. The destination pages list additional comparable properties families can ask to have evaluated.",
  },
  {
    question: "What should be compared before signing a resort contract?",
    answer:
      "Compare written proposals using the same assumptions: published package prices and what they include, Mandap and Baraat terms, sound limits and curfews, weather backup, in-house Indian catering or external-kitchen rules, room-night obligations and room-block terms, guest-count tiers, and outside-vendor fees. Use the Resort Comparison Calculator to compare side by side.",
  },
  {
    question: "Does CeremonyVerse plan the wedding at these resorts?",
    answer:
      "CeremonyVerse provides destination-wedding planning and family support, coordinating with resorts and independent local providers in Mexico and Punta Cana. Local execution scope is visible in writing before payment. Start with the free 30-minute consultation, or the $300 Destination Wedding Feasibility & Action Plan for a specific resort decision.",
  },
]

const confirmBeforeSigning = [
  "Published package price and exactly what it includes",
  "Mandap, Baraat, and procession permissions",
  "Sound limits, curfew, and event-hour cutoffs",
  "In-house Indian kitchen vs. external-catering rules",
  "Weather backup for outdoor and Mandap events",
  "Room-night obligations and room-block terms",
  "Guest-count tiers and overage pricing",
  "Outside-vendor fees and preferred-vendor lock-in",
]

const breadcrumbSchema = buildBreadcrumb([
  { name: "Destinations", url: "/destinations/" },
  { name: "Resort Profiles", url: "/resorts/" },
])
const faqSchema = buildFaqSchema(faqItems)
const serviceSchema = buildServiceSchema({
  name: "Indian destination-wedding resort feasibility profiles",
  description:
    "Independent, written resort evaluation profiles for Gujarati and Hindu destination weddings in Mexico and Punta Cana, covering package, venue, catering, room-block, and weather-backup terms to confirm before signing.",
  url: "/resorts/",
  category: "Indian Destination Wedding Planning",
  areaServed: ["Mexico", "Dominican Republic", "United States", "Canada"],
})

export default function ResortsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-service" data={serviceSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Resort profiles · Mexico &amp; Punta Cana</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold !text-white sm:text-6xl">Resort profiles for Indian destination weddings</h1>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 !text-white/80">
            Property-by-property feasibility for Gujarati and Hindu multi-day weddings — the package prices, venue terms,
            catering, room blocks, and weather backup to confirm in writing before you sign.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=mexico&from=resorts-hero" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule Free Consultation</Link>
            <Link href="/planning-tools/resort-comparison/" className="rounded-full border border-white/55 px-7 py-4 text-sm font-semibold !text-white">Open Resort Comparison Calculator</Link>
          </div>
          <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-6 !text-white/75">
            <strong className="!text-white">Evaluation list — not endorsements.</strong> These are independent profiles
            families can ask CeremonyVerse to evaluate. Inclusion does not mean affiliation, preferred status, guaranteed
            South Asian capability, availability, or a recommendation. Current resort proposals and contracts control.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Published written profiles</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Four resort feasibility profiles</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              Each profile covers the specific terms that decide whether a resort can actually host a multi-day Indian wedding.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {resortProfiles.map((profile) => (
              <article key={profile.href} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-white p-8 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Resort profile</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold">{profile.label}</h2>
                <p className="mt-5 flex-1 leading-7 text-[#4d403a]">{profile.summary}</p>
                <Link href={profile.href} className="mt-7 inline-flex justify-center rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white">
                  Read the {profile.label} profile
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm leading-7 text-[#5e4a40]">
            Comparing by region first? See the destination guides for{" "}
            <Link href="/destinations/cancun-indian-wedding/" className="font-semibold text-[#7a6841] underline underline-offset-4">Cancún</Link>,{" "}
            <Link href="/destinations/riviera-maya-indian-wedding/" className="font-semibold text-[#7a6841] underline underline-offset-4">Riviera Maya</Link>,{" "}
            <Link href="/destinations/los-cabos-indian-wedding/" className="font-semibold text-[#7a6841] underline underline-offset-4">Los Cabos</Link>, and{" "}
            <Link href="/destinations/punta-cana-indian-wedding/" className="font-semibold text-[#7a6841] underline underline-offset-4">Punta Cana</Link>.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Before a deposit</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">What every resort proposal must answer</h2>
              <p className="mt-5 leading-7 text-[#4d403a]">
                These are the terms families most often miss — and the ones that derail an Indian wedding if left verbal.
                Run proposals side by side in the{" "}
                <Link href="/planning-tools/resort-comparison/" className="font-semibold text-[#7a6841] underline underline-offset-4">Resort Comparison Calculator</Link>,
                and review the <Link href="/indian-destination-wedding-cost/" className="font-semibold text-[#7a6841] underline underline-offset-4">complete wedding cost breakdown</Link>.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {confirmBeforeSigning.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-[#e6dfd5] bg-[#faf8f5] p-5 leading-7 text-[#4d403a]">
                  <span aria-hidden="true" className="font-semibold text-[#7a6841]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Resort profile FAQ</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">How these profiles should be used</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="font-serif text-2xl font-semibold">{faq.question}</h3>
                <p className="mt-4 leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">Not sure which resort fits your plan?</h2>
          <p className="mt-5 text-lg leading-8 !text-white/85">
            Bring your shortlist or your resort proposal. The free consultation covers feasibility and the terms to verify —
            or start with the written $300 Feasibility &amp; Action Plan for a specific property.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=mexico&from=resorts-final" className="rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule Free Consultation</Link>
            <Link href="/destination-wedding-feasibility-plan/" className="rounded-full border border-white/60 px-8 py-4 text-sm font-semibold !text-white">See the $300 action plan</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
