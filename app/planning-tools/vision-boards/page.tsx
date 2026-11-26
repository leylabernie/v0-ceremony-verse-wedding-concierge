import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { calculatorSchema } from "@/lib/schema"
import { VisionBoardsClient } from "./vision-boards-client"

export const metadata = buildMetadata({
  path: "/planning-tools/vision-boards/",
  title: "Gujarati & South Asian Wedding Vision Boards | Free Tool | CeremonyVerse",
  description: "A free vision board tool for Gujarati and South Asian weddings. Save inspiration for Garba, mandap, outfits, jewelry, and reception decor in your browser.",
  keywords: "Gujarati wedding vision board, South Asian wedding inspiration, Garba Sangeet decor ideas, mandap vision board",
})

const breadcrumb = buildBreadcrumb([{ name: "Planning Tools", url: "/planning-tools/" }, { name: "Vision Boards", url: "/planning-tools/vision-boards/" }])
const schema = calculatorSchema({ name: "Gujarati & South Asian Wedding Vision Boards", description: "A free browser-saved vision board tool for Gujarati and South Asian wedding inspiration.", url: "/planning-tools/vision-boards/" })

export default function Page() {
  return (
    <main className="bg-[#faf8f5] px-6 py-16 text-[#1f1f1f] sm:py-20">
      <JsonLd id="schema-breadcrumb" data={breadcrumb} />
      <JsonLd id="schema-tool" data={schema} />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Free planning tool</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Vision Boards</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[#4d403a]">Collect inspiration for your wedding in one place. Save links and notes for Garba, Sangeet, mandap, outfits, jewelry, reception decor, and every detail you love — with Gujarati and South Asian celebrations in mind.</p>
        <VisionBoardsClient />
      </div>
    </main>
  )
}
