import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { CateringDeadlineTrackerClient } from "./catering-deadline-tracker-client"

export const metadata = buildMetadata({
  path: "/tools/catering-deadline-tracker/",
  title: "Indian Wedding Catering Deadline Tracker",
  description:
    "Enter your wedding date and get the three food deadlines that make or break a South Asian destination wedding: off-site chef requests at 180 days, Jain/Satvik/Halal ingredients at 90 days, and the traveling vendor meal count at 30 days.",
  keywords:
    "Indian wedding catering deadline, Jain satvik halal menu resort deadline, outside chef approval all inclusive resort, traveling vendor meals wedding, South Asian wedding food planning timeline",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Catering Deadline Tracker", url: "/tools/catering-deadline-tracker/" },
])

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Indian Wedding Catering Deadline Tracker",
  url: "https://www.ceremonyverse.com/tools/catering-deadline-tracker/",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  description:
    "A free countdown tool that works backward from a South Asian destination-wedding date to the three critical catering deadlines: off-site specialty chef requests at 180 days, strict Jain/Satvik/Halal ingredient lock-in at 90 days, and the traveling vendor meal count at 30 days.",
}

export default function CateringDeadlineTrackerPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-calculator" data={calculatorSchema} />

      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            USA &amp; Canada family planning tool
          </p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">
            Indian Wedding Catering Deadline Tracker
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            Resort kitchens are not used to &ldquo;no onion, no garlic, dedicated cookware, no shared frying
            oil.&rdquo; That request only succeeds when it arrives early enough. Enter your wedding date and see the
            three deadlines that decide whether your Jain aunts eat the wedding food or watch everyone else eat.
          </p>
        </div>
      </section>

      <CateringDeadlineTrackerClient />

      <section className="bg-[#f0ebe3] px-6 py-20 print:hidden">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#e6dfd5] bg-white p-8 text-center sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Go deeper</p>
          <h2 className="font-serif text-4xl font-semibold">The full playbook behind these deadlines</h2>
          <p className="mt-4 leading-7 text-[#4d403a]">
            The deadlines are the schedule; the deep-dive guide is the strategy. Read how resort kitchens actually
            handle Gujarati and Hindu wedding menus, when outside chefs and caterers are permitted, and the exact
            Jain, satvik, and pure-vegetarian requirements to confirm in writing — including the live chaat and dosa
            stations your guests will ask about.
          </p>
          <Link
            href="/blog/indian-wedding-catering-mexico-all-inclusive-resorts/"
            className="mt-7 inline-flex rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#665633]"
          >
            Read the Catering Deep-Dive Guide →
          </Link>
          <p className="mt-6 text-sm leading-6 text-[#4d403a]">
            Then bring your menu requirements to a{" "}
            <Link href="/contact/?service=mexico&from=catering-deadline-tracker" className="font-semibold text-[#7a6841] underline">
              free 30-minute consultation
            </Link>{" "}
            and pressure-test them against your resort shortlist.
          </p>
        </div>
      </section>
    </main>
  )
}
