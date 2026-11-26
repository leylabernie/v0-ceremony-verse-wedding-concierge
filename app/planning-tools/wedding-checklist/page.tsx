import { calculatorSchema } from "@/lib/schema"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { WeddingChecklistClient } from "./wedding-checklist-client"

export const metadata = buildMetadata({
  path: "/planning-tools/wedding-checklist/",
  title: "Free Wedding Checklist | CeremonyVerse Planning Tools",
  description: "A free wedding checklist for destination and multicultural weddings. Track tasks by timeline, check off progress, and add your own to-dos. Saved in your browser.",
  keywords: "wedding checklist, destination wedding checklist, Indian wedding planning checklist, free wedding planning tool",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Wedding Checklist", url: "/planning-tools/wedding-checklist/" },
])

const toolSchema = calculatorSchema({
  name: 'Wedding Checklist',
  url: "https://www.ceremonyverse.com/planning-tools/wedding-checklist/",
  description: 'A free wedding checklist for destination and multicultural weddings. Track tasks by timeline, check off progress, and add your own to-dos.',
})

export default function WeddingChecklistPage() {
  return (
    <main className="bg-[#faf8f5] px-6 py-20 text-[#1f1f1f] sm:py-24">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-tool" data={toolSchema} />
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Free planning tool</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Wedding Checklist</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d403a]">
            Organize your to-dos by timeline, check off progress, and add your own tasks. Your checklist is saved in this browser so you can come back anytime.
          </p>
        </header>
        <WeddingChecklistClient />
      </div>
    </main>
  )
}
