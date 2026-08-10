import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { FamilyMapActions } from "./family-map-actions"

export const metadata = buildMetadata({
  path: "/planning-tools/family-responsibility-map/",
  title: "Indian Wedding Family Responsibility Map",
  description:
    "Organize family decisions for a Gujarati or Hindu destination wedding by assigning one owner, approver, deadline, and status to each decision area.",
  keywords:
    "Indian wedding family responsibility checklist, Gujarati wedding planning roles, destination wedding decision tracker, Hindu wedding family planning",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Family Responsibility Map", url: "/planning-tools/family-responsibility-map/" },
])

const decisionAreas = [
  "Total budget and what it must cover",
  "Guest-list changes and invitation decisions",
  "Resort and room-block approval",
  "Ceremony schedule and religious requirements",
  "Menu, Jain-food, allergy, and dietary approvals",
  "Decor direction and final design approvals",
  "Music, entertainment, photography, and video",
  "Bride, groom, family, and wedding-party outfits",
  "Guest rooms, arrivals, transfers, and welcome details",
  "Contracts, deposits, payment dates, and document storage",
  "Emergency decisions during the wedding week",
]

export default function FamilyResponsibilityMapPage() {
  return (
    <main className="bg-[#faf8f5] px-6 py-20 text-[#1f1f1f] sm:py-24">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Family decision tool</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Family Responsibility Map</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            The goal is not to give everyone a title. It is to make sure every important decision has one owner,
            one final approver, a deadline, and a visible status.
          </p>
          <FamilyMapActions />
        </header>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-[#d9cfbf] bg-white">
          <table className="min-w-[940px] w-full border-collapse text-sm">
            <thead className="bg-[#1f1f1f] text-left text-white">
              <tr>
                {['Decision area', 'Owner', 'Final approver', 'Due date', 'Status', 'Notes / dependency'].map((heading) => (
                  <th key={heading} className="px-4 py-4 font-semibold">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {decisionAreas.map((area) => (
                <tr key={area} className="border-t border-[#eee7dd] align-top">
                  <th className="w-[270px] px-4 py-5 text-left font-medium text-[#4d403a]">{area}</th>
                  {[0, 1, 2, 3, 4].map((column) => (
                    <td key={column} className="min-w-[130px] border-l border-[#eee7dd] px-4 py-5"><span className="block h-6 border-b border-dashed border-[#c7bcae]" /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-[#e6dfd5] bg-white p-6"><h2 className="font-serif text-2xl font-semibold">One owner</h2><p className="mt-3 leading-7 text-[#4d403a]">Several people may help, but one person is responsible for moving the decision forward.</p></article>
          <article className="rounded-2xl border border-[#e6dfd5] bg-white p-6"><h2 className="font-serif text-2xl font-semibold">One approver</h2><p className="mt-3 leading-7 text-[#4d403a]">Choose who can give the final answer before options are sent for review.</p></article>
          <article className="rounded-2xl border border-[#e6dfd5] bg-white p-6"><h2 className="font-serif text-2xl font-semibold">One record</h2><p className="mt-3 leading-7 text-[#4d403a]">Keep the approved decision and related quote or contract in one shared location.</p></article>
        </div>

        <p className="mt-8 rounded-xl border border-[#d9cfbf] bg-white p-4 text-sm leading-6 text-[#5e4a40]">
          This is an organizing worksheet. Signed resort and vendor contracts, current written proposals, and agreed scopes control the actual responsibilities, prices, deadlines, and approvals.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row print:hidden">
          <Link href="/contact/?service=mexico" className="rounded-full bg-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-white">Organize a Private Planning Call</Link>
          <Link href="/planning-tools/guest-logistics/" className="rounded-full border border-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-[#7a6841]">Next: Guest Logistics</Link>
        </div>
      </div>
    </main>
  )
}
