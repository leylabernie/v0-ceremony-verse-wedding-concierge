import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { GuestLogisticsClient } from "./guest-logistics-client"

export const metadata = buildMetadata({
  path: "/planning-tools/guest-logistics/",
  title: "Destination Wedding Guest & VIP Cost Calculator",
  description:
    "U.S. and Canadian families can calculate guest room nights, family-paid VIP rooms and flights, transfers, and welcome costs for an Indian destination wedding in Mexico.",
  keywords:
    "destination wedding guest cost calculator, Indian wedding room block calculator, VIP travel wedding budget, Mexico wedding guest costs",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Guest & VIP Cost Calculator", url: "/planning-tools/guest-logistics/" },
])

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Destination Wedding Guest and VIP Travel Cost Calculator",
  url: "https://www.ceremonyverse.com/planning-tools/guest-logistics/",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  description: "A free client-entered calculator for guest room nights, hosted VIP rooms and flights, transfers, welcome items, and family-paid guest support.",
}

const trackingGroups = [
  {
    title: "Guest and room details",
    fields: ["Household or booking group", "Primary guest name", "Email and phone", "Adults and children", "Room category", "Check-in and check-out", "Booking confirmation status", "Accessibility or mobility needs"],
  },
  {
    title: "Arrival and transfer details",
    fields: ["Arrival airport", "Airline and flight number", "Arrival date and local time", "Transfer provider", "Vehicle or route group", "Pickup instructions sent", "Return flight and transfer", "Delayed or missing information"],
  },
  {
    title: "Wedding-week experience",
    fields: ["Dietary needs and allergies", "Jain or no-onion/no-garlic meals", "Welcome-item quantity", "Event attendance exceptions", "Childcare information", "Emergency contact", "Special family assistance", "Last confirmed date"],
  },
]

export default function GuestLogisticsPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-calculator" data={calculatorSchema} />
      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">USA &amp; Canada family planning tool</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Guest &amp; VIP Travel Cost Calculator</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            Separate the room block from the rooms, flights, transfers, and welcome items your family plans to pay. This prevents guest support from disappearing inside the wedding-production budget.
          </p>
        </div>
      </section>

      <GuestLogisticsClient />

      <section className="bg-[#f0ebe3] px-6 py-20 print:hidden">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">After the estimate</p>
          <h2 className="font-serif text-4xl font-semibold">Information to organize for each booking group</h2>
          <p className="mt-4 leading-7 text-[#4d403a]">Collect only the information needed for rooms, transfers, dietary planning, and guest support—never payment-card details or unrelated private records.</p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {trackingGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
              <h2 className="font-serif text-2xl font-semibold">{group.title}</h2>
              <ul className="mt-5 space-y-3 text-[#4d403a]">
                {group.fields.map((field) => <li key={field} className="flex gap-3"><span className="text-[#7a6841]">□</span><span>{field}</span></li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-2xl bg-[#1f1f1f] p-8 text-white sm:p-10">
          <h2 className="font-serif text-3xl font-semibold">Three rules that prevent confusion</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            <li><span className="font-semibold text-[#c5a059]">01</span><p className="mt-2 leading-7 text-white/75">Give each booking group one primary contact and one status.</p></li>
            <li><span className="font-semibold text-[#c5a059]">02</span><p className="mt-2 leading-7 text-white/75">Use local arrival times and record the date when each detail was last confirmed.</p></li>
            <li><span className="font-semibold text-[#c5a059]">03</span><p className="mt-2 leading-7 text-white/75">Share only the minimum information each resort, transfer provider, or wedding contact needs.</p></li>
          </ol>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 sm:flex-row">
          <Link href="/contact/?service=mexico&from=guest-calculator" className="rounded-full bg-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-white">Discuss Guest Support</Link>
          <Link href="/planning-tools/family-responsibility-map/" className="rounded-full border border-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-[#7a6841]">Open Responsibility Map</Link>
        </div>
      </section>
    </main>
  )
}
