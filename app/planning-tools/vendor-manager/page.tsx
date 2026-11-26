import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { calculatorSchema } from "@/lib/schema"
import { VendorManagerClient } from "./vendor-manager-client"

export const metadata = buildMetadata({
  path: "/planning-tools/vendor-manager/",
  title: "Gujarati & South Asian Wedding Vendor Manager | Free Tool | CeremonyVerse",
  description: "A free vendor manager for Gujarati and South Asian weddings. Track pandits, mehndi artists, decor, DJs, catering, quotes, and booking status in your browser.",
  keywords: "Gujarati wedding vendor manager, South Asian wedding vendors, wedding vendor tracker, pandit mehndi DJ tracker",
})

const breadcrumb = buildBreadcrumb([{ name: "Planning Tools", url: "/planning-tools/" }, { name: "Vendor Manager", url: "/planning-tools/vendor-manager/" }])
const schema = calculatorSchema({ name: "Gujarati & South Asian Wedding Vendor Manager", description: "A free browser-saved vendor manager for Gujarati and South Asian weddings, including event-specific vendor tracking.", url: "/planning-tools/vendor-manager/" })

export default function Page() {
  return (
    <main className="bg-[#faf8f5] px-6 py-16 text-[#1f1f1f] sm:py-20">
      <JsonLd id="schema-breadcrumb" data={breadcrumb} />
      <JsonLd id="schema-tool" data={schema} />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Free planning tool</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Vendor Manager</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[#4d403a]">Keep vendor contacts, quotes, booking status, and notes in one place. Built for Gujarati and South Asian weddings — track pandits, mehndi artists, dhol/DJs, decor, catering, and more by event.</p>
        <VendorManagerClient />
      </div>
    </main>
  )
}
