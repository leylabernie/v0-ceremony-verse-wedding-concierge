/*
 * Public registrant preview. It introduces CeremonyVerse's original planning
 * method without exposing the detailed consultation-stage Ritual & Resort folio.
 */
import Link from "next/link"
import { ArrowRight, Check, Compass, Sparkles, UsersRound } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

const consultationHref = "/contact/?service=mexico&from=planning-preview"

export const metadata = buildMetadata({
  path: "/planning-preview/",
  title: "Your CeremonyVerse Planning Preview",
  description:
    "A concise look at how CeremonyVerse helps Gujarati and Hindu destination-wedding families organize ritual rhythm, family decisions, and destination questions.",
  image: "/images/proof/family-destination-baarat.webp",
  noIndex: true,
})

const planningLenses = [
  {
    number: "01",
    label: "Ritual rhythm",
    title: "The celebration holds its own sequence.",
    copy: "Mini helps a family make the practical questions around Vidhi, Garba/Sangeet with Mehendi, Baraat, Pheras with Vidai, and Reception easier to see.",
    icon: Sparkles,
  },
  {
    number: "02",
    label: "Family decision picture",
    title: "The next decision has a visible owner.",
    copy: "Guest assumptions, family input, officiant questions, and communication needs are organized before the planning conversation becomes scattered.",
    icon: UsersRound,
  },
  {
    number: "03",
    label: "Destination questions",
    title: "A beautiful setting still needs a clear plan.",
    copy: "CeremonyVerse helps frame the questions around event flow, ceremony space, guest movement, weather paths, and written proposal details.",
    icon: Compass,
  },
]

export default function PlanningPreviewPage() {
  return (
    <main className="overflow-hidden bg-[#f8f6f2] text-[#2f2f2f]">
      <section className="relative isolate overflow-hidden bg-[#1f1f1f] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28" aria-labelledby="planning-preview-title">
        <div className="pointer-events-none absolute -right-28 -top-36 h-[520px] w-[520px] rounded-full border border-[#e8cf9d]/30" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-190px] left-[42%] h-[340px] w-[340px] rounded-full border border-[#e8cf9d]/20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.52fr)] lg:items-end lg:gap-24">
          <div className="max-w-3xl">
            <p className="cv-process-sans mb-5 text-xs font-bold uppercase tracking-[0.22em] !text-[#e8cf9d]">CeremonyVerse planning preview</p>
            <h1 id="planning-preview-title" className="max-w-3xl !text-5xl !leading-[0.95] !tracking-[-0.025em] !text-white sm:!text-6xl lg:!text-7xl">
              A clearer way to see <em className="font-medium !text-[#e8cf9d]">what comes next.</em>
            </h1>
            <p className="mt-7 max-w-2xl !text-lg !leading-8 !text-white/85 sm:!text-xl">
              A Gujarati destination celebration becomes easier to plan when the ritual rhythm, family decisions, and destination questions are visible together.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={consultationHref} className="cv-process-sans inline-flex items-center justify-center gap-2 rounded-full bg-[#c5a059] px-7 py-4 text-sm font-bold !text-[#1f1f1f] transition hover:bg-[#d6bb7d]">
                Register for a consultation <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a href="#planning-lenses" className="cv-process-sans inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 text-sm font-bold !text-white transition hover:bg-white/10">
                Explore three planning lenses
              </a>
            </div>
          </div>

          <aside className="justify-self-start border border-[#e8cf9d]/60 bg-[#1f1f1f]/75 p-7 backdrop-blur-sm lg:justify-self-end lg:rotate-[1deg]" aria-label="Fictional planning example">
            <p className="cv-process-sans text-[10px] font-bold uppercase tracking-[0.18em] !text-[#e8cf9d]">Fictional example</p>
            <p className="mt-5 !text-4xl !leading-[0.9] !tracking-[-0.025em] !text-white">100 guests<br />5 ceremony moments</p>
            <p className="mt-5 max-w-[255px] !text-sm !leading-6 !text-white/75">Illustrative only. This is not a client project, resort proposal, provider quote, or booking offer.</p>
          </aside>
        </div>
      </section>

      <section id="planning-lenses" className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="planning-lenses-title">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.64fr)] lg:items-end lg:gap-20">
            <div>
              <p className="cv-process-sans text-[10px] font-bold uppercase tracking-[0.18em] !text-[#7a6841]">Three ways the work becomes visible</p>
              <h2 id="planning-lenses-title" className="mt-6 max-w-4xl !text-4xl !leading-[0.98] !tracking-[-0.025em] sm:!text-5xl lg:!text-6xl">Planning becomes lighter when the right questions are <em className="font-medium">held in one place.</em></h2>
            </div>
            <p className="!text-lg !leading-8 !text-[#4d453d]">Every family starts from a different place. These lenses show the shape of Mini&apos;s process without replacing your family&apos;s authority or a provider&apos;s written terms.</p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#d9cfbf] md:grid-cols-3">
            {planningLenses.map((lens) => {
              const Icon = lens.icon
              return (
                <article key={lens.label} className="min-h-[318px] border-b border-r border-[#d9cfbf] bg-[#fdfcf9] p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="!text-2xl !leading-none !text-[#7a6841]">{lens.number}</span>
                    <Icon size={22} className="text-[#7a6841]" aria-hidden="true" />
                  </div>
                  <p className="cv-process-sans mt-12 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#6a5b52]">{lens.label}</p>
                  <h3 className="mt-3 max-w-[280px] !text-3xl !leading-[0.95] !tracking-[-0.02em]">{lens.title}</h3>
                  <p className="mt-4 !text-base !leading-7 !text-[#4d453d]">{lens.copy}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee6] px-6 py-16 sm:px-8 sm:py-20 lg:px-12" aria-labelledby="preview-boundary-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[auto_minmax(0,1fr)_minmax(300px,0.62fr)] lg:items-end lg:gap-12">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-[#7a6841] text-white"><Check size={22} aria-hidden="true" /></div>
          <div>
            <p className="cv-process-sans text-[10px] font-bold uppercase tracking-[0.18em] !text-[#7a6841]">What this preview is—and is not</p>
            <h2 id="preview-boundary-title" className="mt-5 !text-4xl !leading-[0.98] !tracking-[-0.025em] sm:!text-5xl">A conversation starter, <em className="font-medium">not a generic planner.</em></h2>
          </div>
          <p className="!text-base !leading-7 !text-[#4d453d]">This original CeremonyVerse preview uses a fictional scenario. It does not contain a third-party planning tool, real client data, supplier recommendation, availability, rate, booking authority, travel service, or local provider commitment.</p>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12" aria-labelledby="preview-cta-title">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.66fr)] lg:items-end lg:gap-20">
          <div>
            <p className="cv-process-sans text-[10px] font-bold uppercase tracking-[0.18em] !text-[#e8cf9d]">Your next conversation</p>
            <h2 id="preview-cta-title" className="mt-6 max-w-4xl !text-4xl !leading-[0.98] !tracking-[-0.025em] !text-white sm:!text-5xl lg:!text-6xl">Bring your vision. Mini will help make the <em className="font-medium !text-[#e8cf9d]">next decision visible.</em></h2>
          </div>
          <div>
            <p className="!text-lg !leading-8 !text-white/75">Share your approximate guest range, target season, destination questions, and cultural non-negotiables. You do not need a venue, final budget, or guest list before registering.</p>
            <Link href={consultationHref} className="cv-process-sans mt-8 inline-flex items-center gap-2 rounded-full bg-[#c5a059] px-7 py-4 text-sm font-bold !text-[#1f1f1f] transition hover:bg-[#d6bb7d]">
              Register for a consultation <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
