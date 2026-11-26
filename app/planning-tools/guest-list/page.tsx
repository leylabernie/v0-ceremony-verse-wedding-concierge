import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { calculatorSchema } from "@/lib/schema"
import { GuestListClient } from "./guest-list-client"

export const metadata = buildMetadata({
  path: "/planning-tools/guest-list/",
  title: "Gujarati & South Asian Wedding Guest List Manager | Free Tool | CeremonyVerse",
  description: "A free guest list manager for Gujarati and South Asian weddings. Track households, family sides, RSVP status, party size, event invites, and notes in your browser.",
  keywords: "Gujarati wedding guest list, South Asian wedding guest list manager, wedding RSVP tracker, family guest list",
})

const breadcrumb = buildBreadcrumb([{ name: "Planning Tools", url: "/planning-tools/" }, { name: "Guest List Manager", url: "/planning-tools/guest-list/" }])
const schema = calculatorSchema({ name: "Gujarati & South Asian Wedding Guest List Manager", description: "A free browser-saved guest list manager for Gujarati and South Asian weddings, with family sides, RSVP, and event tracking.", url: "/planning-tools/guest-list/" })

export default function Page() {
  return (
    <main className="bg-[#faf8f5] px-6 py-16 text-[#1f1f1f] sm:py-20">
      <JsonLd id="schema-breadcrumb" data={breadcrumb} />
      <JsonLd id="schema-tool" data={schema} />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Free planning tool</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Guest List Manager</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[#4d403a]">Track guests, households, family sides, RSVP status, party size, and event-by-event invites. Built with Gujarati and South Asian wedding celebrations in mind, and saved locally in your browser.</p>
        <GuestListClient />
      </div>
    </main>
  )
}
