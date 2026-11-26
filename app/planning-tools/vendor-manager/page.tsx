import { calculatorSchema } from "@/lib/schema"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { VendorManagerClient } from "./vendor-manager-client"

export const metadata = buildMetadata({
  path: "/planning-tools/vendor-manager/",
  title: "Free Wedding Vendor Manager | CeremonyVerse",
  description: "Track wedding vendors, contacts, costs, and status in one free browser-based vendor manager.",
  keywords: "wedding vendor manager, wedding vendor tracker, free wedding planning tool",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Vendor Manager", url: "/planning-tools/vendor-manager/" },
])

const toolSchema = calculatorSchema({
  name: 'Wedding Vendor Manager',
  url: "https://www.ceremonyverse.com/planning-tools/vendor-manager/",
  description: 'Track wedding vendors, contacts, costs, and status in one free browser-based vendor manager.',
})

export default function VendorManagerPage() {
  return (
    <main className="bg-[#faf8f5] px-6 py-20 text-[#1f1f1f] sm:py-24">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-tool" data={toolSchema} />
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Free planning tool</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Vendor Manager</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d403a]">
            Keep vendor contacts, quotes, payment status, and notes organized in one place. Saved in your browser.
          </p>
        </header>
        <VendorManagerClient />
      </div>
    </main>
  )
}
