import { calculatorSchema } from "@/lib/schema"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { GuestListClient } from "./guest-list-client"

export const metadata = buildMetadata({
  path: "/planning-tools/guest-list/",
  title: "Free Wedding Guest List Manager | CeremonyVerse",
  description: "Track wedding guests, RSVPs, sides, and notes in a free browser-based guest list manager. No account required.",
  keywords: "wedding guest list manager, wedding RSVP tracker, free wedding planning tool",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Guest List Manager", url: "/planning-tools/guest-list/" },
])

const toolSchema = calculatorSchema({
  name: 'Wedding Guest List Manager',
  url: "https://www.ceremonyverse.com/planning-tools/guest-list/",
  description: 'Track wedding guests, RSVPs, sides, and notes in a free browser-based guest list manager.',
})

export default function GuestListPage() {
  return (
    <main className="bg-[#faf8f5] px-6 py-20 text-[#1f1f1f] sm:py-24">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-tool" data={toolSchema} />
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Free planning tool</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Guest List Manager</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d403a]">
            Keep guests, contact details, RSVP status, and notes in one place. Saved in your browser for easy updates.
          </p>
        </header>
        <GuestListClient />
      </div>
    </main>
  )
}
