import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { calculatorSchema } from "@/lib/schema"
import { WeddingChecklistClient } from "./wedding-checklist-client"

export const metadata = buildMetadata({
  path: "/planning-tools/wedding-checklist/",
  title: "Gujarati & South Asian Wedding Checklist | Free Tool | CeremonyVerse",
  description: "A free wedding checklist designed for Gujarati and South Asian weddings. Track tasks by timeline, customize events, and keep planning progress saved in your browser.",
  keywords: "Gujarati wedding checklist, South Asian wedding checklist, Hindu wedding planning checklist, Garba Sangeet wedding timeline",
})

const breadcrumb = buildBreadcrumb([{ name: "Planning Tools", url: "/planning-tools/" }, { name: "Wedding Checklist", url: "/planning-tools/wedding-checklist/" }])
const schema = calculatorSchema({ name: "Gujarati & South Asian Wedding Checklist", description: "A free browser-saved wedding checklist designed for Gujarati and South Asian wedding timelines and events.", url: "/planning-tools/wedding-checklist/" })

export default function Page() {
  return (
    <main className="bg-[#faf8f5] px-6 py-16 text-[#1f1f1f] sm:py-20">
      <JsonLd id="schema-breadcrumb" data={breadcrumb} />
      <JsonLd id="schema-tool" data={schema} />
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Free planning tool</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Wedding Checklist</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[#4d403a]">Track your wedding to-dos by timeline, from early planning to the final month. Pre-filled for Gujarati and South Asian celebrations — including Garba, Sangeet, ceremony, and reception planning — and fully customizable for your family.</p>
        <WeddingChecklistClient />
      </div>
    </main>
  )
}
