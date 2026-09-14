import Link from "next/link"
import { CeremonyTimelineBuilder } from "@/components/ceremony-timeline-builder"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({ path: "/planning-tools/ceremony-timeline/", title: "Free Wedding Ceremony Timeline & 12-Minute Script", description: "Build a destination wedding ceremony timeline. Download a free ceremony toolkit with an original 12-minute symbolic script and friend officiant guide." })

export default function CeremonyTimelinePage() {
  return <main className="bg-[#faf8f5] text-[#1f1f1f]">
    <JsonLd id="schema-breadcrumb" data={buildBreadcrumb([{ name: "Planning Tools", url: "/planning-tools/" }, { name: "Ceremony Timeline", url: "/planning-tools/ceremony-timeline/" }])} />
    <section className="bg-[#1f1f1f] px-5 py-20 text-center text-white sm:py-24"><div className="mx-auto max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">Free CeremonyVerse planning toolkit</p>
      <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight !text-white sm:text-6xl">A calmer ceremony starts with a clear timeline</h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 !text-white/80">Set your time and guest count. See the handoffs. Download your timeline, a modern 12-minute symbolic ceremony script and a practical friend officiant guide.</p>
      <p className="mt-5 text-sm !text-white/70">For destination weddings in Mexico, Jamaica and Punta Cana · Free preview · Optional planning follow-up</p>
    </div></section>
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6"><CeremonyTimelineBuilder /></section>
    <section className="mx-auto max-w-4xl px-6 pb-20"><h2 className="font-serif text-3xl font-semibold">What the toolkit helps you decide</h2><div className="mt-6 space-y-5 leading-7 text-[#4d403a]">
      <p><strong>A timeline you can share:</strong> get a personalised text file to edit with your planner, resort and officiant, plus a printable PDF with timing checkpoints and a rehearsal worksheet.</p>
      <p><strong>A script that sounds like you:</strong> the original symbolic ceremony template combines ready-to-read passages with personal story, reading and vow prompts. The suggested blocks total 12 minutes; rehearse to fit your speaking pace.</p>
      <p><strong>A clear role for your friend:</strong> the guide covers names, microphones, cues, rehearsal and guest directions. A symbolic script does not establish authority to perform a legal marriage. Confirm any legal ceremony requirements directly with the relevant local authority.</p>
      <p><strong>Space for your traditions:</strong> the Gujarati/Hindu option reserves a ceremony block for your pandit and families to shape. The short symbolic script is a separate option and does not replace Hindu rituals.</p>
    </div><div className="mt-10 flex flex-col gap-4 sm:flex-row"><Link href="/resorts/" className="font-semibold text-[#7a6841] underline">Explore venue planning guides →</Link><Link href="/destination-wedding-feasibility-plan/" className="font-semibold text-[#7a6841] underline">Start with the $300 Feasibility Plan →</Link></div></section>
  </main>
}
