import { calculatorSchema } from "@/lib/schema"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { VisionBoardsClient } from "./vision-boards-client"

export const metadata = buildMetadata({
  path: "/planning-tools/vision-boards/",
  title: "Free Wedding Vision Boards | CeremonyVerse",
  description: "Save wedding inspiration links, images, and notes into simple vision boards. Free and saved in your browser.",
  keywords: "wedding vision board, wedding inspiration board, free wedding planning tool",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Vision Boards", url: "/planning-tools/vision-boards/" },
])

const toolSchema = calculatorSchema({
  name: 'Wedding Vision Boards',
  url: "https://www.ceremonyverse.com/planning-tools/vision-boards/",
  description: 'Save wedding inspiration links, images, and notes into simple vision boards.',
})

export default function VisionBoardsPage() {
  return (
    <main className="bg-[#faf8f5] px-6 py-20 text-[#1f1f1f] sm:py-24">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-tool" data={toolSchema} />
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Free planning tool</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Vision Boards</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d403a]">
            Collect inspiration for outfits, decor, venues, and details. Save image links and notes in boards you can revisit anytime.
          </p>
        </header>
        <VisionBoardsClient />
      </div>
    </main>
  )
}
