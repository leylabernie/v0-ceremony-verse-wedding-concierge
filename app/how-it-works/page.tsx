/*
 * STYLE DIRECTION — CeremonyVerse Editorial Ritual Map
 * Warm ivory, charcoal, restrained gold, Cormorant Garamond editorial display,
 * DM Sans operational labels, and a processional route structure. This page
 * makes a Gujarati-first planning method tangible without presenting a private
 * workspace or a family wedding as a CeremonyVerse client project.
 */
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleDot,
  Compass,
  MapPin,
  Route,
  Sparkles,
  UsersRound,
} from "lucide-react"
import {
  JsonLd,
  buildBreadcrumb,
  buildFaqSchema,
  buildHowToSchema,
  buildMetadata,
  buildServiceSchema,
} from "@/lib/seo"

const consultationHref = "/contact/?service=mexico&from=how-it-works"

export const metadata = buildMetadata({
  path: "/how-it-works/",
  title: "How CeremonyVerse Makes Destination Wedding Planning Clear",
  description:
    "Explore CeremonyVerse’s family-facing process for Gujarati and Hindu destination weddings: clear decisions, respectful ceremony coordination, and defined provider handoffs.",
  image: "/images/proof/family-destination-baarat.webp",
})

const planningViews = [
  {
    eyebrow: "Guest clarity",
    title: "A family picture everyone can understand.",
    figure: "100",
    figureLabel: "sample guest view",
    description:
      "Guest range, family groups, meal needs, and multi-event attendance are organized before messages become a maze.",
    icon: UsersRound,
  },
  {
    eyebrow: "Destination decisions",
    title: "Options compared on the same page.",
    figure: "3",
    figureLabel: "sample destination paths",
    description:
      "Written information is considered through the same questions: event flow, room assumptions, ceremony space, weather backup, and unresolved scope.",
    icon: MapPin,
  },
  {
    eyebrow: "Ceremony alignment",
    title: "Traditions held with care and clarity.",
    figure: "5",
    figureLabel: "celebration moments",
    description:
      "Families and officiants retain authority over traditions. The practical timing, venue needs, and responsibility lines become visible around their decisions.",
    icon: Sparkles,
  },
  {
    eyebrow: "Wedding week",
    title: "Every moment has a place to land.",
    figure: "1",
    figureLabel: "shared run sheet",
    description:
      "Hosts, venues, family timing, providers, and weather paths arrive in one usable reference for the wedding week.",
    icon: CalendarDays,
  },
]

const milestones = [
  {
    number: "01",
    title: "Discover what matters",
    copy: "Start with the guest range, target season, destination ideas, ceremony priorities, and the non-negotiables your families want honored.",
  },
  {
    number: "02",
    title: "Design the decision map",
    copy: "Make the questions, options, dependencies, and people who need to weigh in visible before the choices harden.",
  },
  {
    number: "03",
    title: "Compare written answers",
    copy: "Bring resort and provider information into the same scope so the family can identify what is known, what needs clarification, and what belongs in writing.",
  },
  {
    number: "04",
    title: "Coordinate the moving parts",
    copy: "Move guest communication design, the event sequence, decisions, and wedding-week information from scattered conversations into a shared plan.",
  },
  {
    number: "05",
    title: "Arrive with a clear path",
    copy: "By wedding week, the family sees the details, handoffs, and open questions in the right place—and providers retain their contracted responsibilities.",
  },
]

const faqItems = [
  {
    question: "What should we bring to a first consultation?",
    answer:
      "Bring your rough guest range, target season, destination ideas, and the traditions or moments that are non-negotiable. You do not need a final budget, guest list, or venue shortlist before the conversation.",
  },
  {
    question: "Do you book rooms, travel, resorts, or vendors for us?",
    answer:
      "No. CeremonyVerse organizes information, research, decisions, and the planning process. Resorts, travel providers, transport providers, and vendors remain responsible for the services they quote, contract, book, and deliver.",
  },
  {
    question: "Who makes the ceremonial decisions?",
    answer:
      "Your family and officiant do. CeremonyVerse helps make the practical planning inputs and coordination around those decisions easier to see and manage.",
  },
  {
    question: "Will our planning workspace be public?",
    answer:
      "No. A guest-facing workspace is considered only after a client project is active and its information, access, and communication ownership have been approved. It is not a public sales page.",
  },
]

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Family-Facing Destination Wedding Planning",
  description:
    "Family-facing Gujarati and Hindu destination-wedding planning organization for Mexico and Punta Cana, with defined handoffs to independent resorts and local providers for their own contracted scopes.",
  url: "/how-it-works/",
  category: "Destination Wedding Planning",
  areaServed: ["United States", "Canada", "Mexico", "Dominican Republic"],
})

const breadcrumbSchema = buildBreadcrumb([{ name: "How It Works", url: "/how-it-works/" }])
const howToSchema = buildHowToSchema({
  name: "How CeremonyVerse Makes Gujarati Destination Wedding Planning Clear",
  description:
    "A family-aware process for organizing destination-wedding decisions from the first consultation through the wedding week.",
  url: "/how-it-works/",
  steps: milestones.map((milestone) => ({ name: milestone.title, text: milestone.copy })),
})
const faqSchema = buildFaqSchema(faqItems)

function SectionMarker({ index, label, dark = false }: { index: string; label: string; dark?: boolean }) {
  return (
    <div className="cv-process-sans flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em]">
      <span className={dark ? "text-[#e8cf9d]" : "text-[#7a6841]"}>{index}</span>
      <span className={dark ? "text-white/70" : "text-[#6a5b52]"}>{label}</span>
    </div>
  )
}

export default function HowItWorksPage() {
  return (
    <main className="cv-process-page overflow-hidden bg-[#f8f6f2] text-[#2f2f2f]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#1f1f1f] text-white lg:min-h-[700px]" aria-labelledby="how-it-works-title">
        <Image
          src="/images/proof/family-destination-baarat.webp"
          alt="Family celebrating a baraat at a destination wedding in Mexico"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[63%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/78 to-black/28" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:min-h-[700px] lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.58fr)] lg:px-12">
          <div className="max-w-3xl pt-3 lg:pt-0">
            <p className="cv-process-sans mb-5 text-xs font-bold uppercase tracking-[0.22em] !text-[#e8cf9d]">
              Gujarati destination celebrations, made clear
            </p>
            <h1 id="how-it-works-title" className="max-w-3xl !text-5xl !leading-[0.95] !tracking-[-0.025em] !text-white sm:!text-6xl lg:!text-7xl">
              A celebration with many moving parts deserves <em className="font-medium !text-[#e8cf9d]">one clear planning path.</em>
            </h1>
            <p className="mt-7 max-w-2xl !text-lg !leading-8 !text-white/85 sm:!text-xl">
              CeremonyVerse helps families turn a multi-day destination wedding into visible decisions, shared information, and a calmer wedding week—while the people with ceremony, contracting, and local execution authority retain their roles.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={consultationHref}
                className="cv-process-sans inline-flex items-center justify-center gap-2 rounded-full bg-[#c5a059] px-7 py-4 text-sm font-bold !text-[#1f1f1f] transition hover:bg-[#d6bb7d]"
              >
                Bring your planning question <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/planning-tools/"
                className="cv-process-sans inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 text-sm font-bold !text-white transition hover:bg-white/10"
              >
                Explore free planning tools
              </Link>
            </div>
            <p className="cv-process-sans mt-6 max-w-xl text-xs !leading-5 !text-white/70">
              The photograph shows a family destination wedding in Mexico that helped shape CeremonyVerse. It is not a CeremonyVerse client event.
            </p>
          </div>

          <aside className="relative justify-self-start border border-[#d9cfbf] bg-[#f8f6f2] p-6 text-[#2f2f2f] shadow-[14px_14px_0_#c5a059] sm:p-7 lg:justify-self-end lg:rotate-[1deg]" aria-label="Fictional planning view preview">
            <span className="cv-process-sans inline-flex bg-[#7a6841] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] !text-white">Fictional planning view</span>
            <div className="mt-7 flex items-center justify-between border-b border-[#d9cfbf] pb-4">
              <div>
                <p className="cv-process-sans text-[9px] font-bold uppercase tracking-[0.16em] !text-[#6a5b52]">The celebration map</p>
                <h2 className="mt-2 !text-3xl !leading-none !tracking-[-0.02em]">Family decision folio</h2>
              </div>
              <CircleDot size={20} className="text-[#7a6841]" aria-hidden="true" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-b border-[#d9cfbf] pb-5">
              {[['100', 'guest picture'], ['5', 'key moments'], ['3', 'decision paths']].map(([number, label]) => (
                <div key={label}>
                  <span className="block !text-3xl !leading-none !text-[#7a6841]">{number}</span>
                  <span className="cv-process-sans mt-1 block text-[9px] font-bold uppercase leading-3 tracking-[0.1em] !text-[#6a5b52]">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-1.5" aria-hidden="true">
              <span className="h-1 flex-1 bg-[#7a6841]" /><span className="h-1 flex-1 bg-[#7a6841]" /><span className="h-1 flex-1 bg-[#7a6841]" /><span className="h-1 flex-1 bg-[#d9cfbf]" /><span className="h-1 flex-1 bg-[#d9cfbf]" />
            </div>
            <p className="mt-5 max-w-[265px] !text-base !leading-6 !text-[#4d453d]">What matters, who decides, what needs a written answer, and what comes next.</p>
          </aside>
        </div>
      </section>

      <section className="relative border-b border-[#e6dfd5] bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="welcome-heading">
        <div className="absolute left-[5%] top-12 hidden h-16 w-px bg-[#c5a059] lg:block" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.65fr)] lg:items-end lg:gap-24">
          <div>
            <SectionMarker index="01" label="A planning experience, not another spreadsheet" />
            <h2 id="welcome-heading" className="mt-6 max-w-4xl !text-4xl !leading-[0.98] !tracking-[-0.025em] sm:!text-5xl lg:!text-6xl">Your families should feel <em className="font-medium">held by the plan</em>, not buried under it.</h2>
          </div>
          <div className="max-w-xl border-l border-[#c5a059] pl-6">
            <p className="!text-lg !leading-8 !text-[#4d453d]">When a Gujarati destination wedding spans families, ceremony decisions, resort options, guest logistics, and several days of celebration, clarity becomes its own kind of hospitality.</p>
            <p className="mt-5 !text-lg !leading-8 !text-[#4d453d]">Mini organizes the planning picture: the decisions in front of you, the details that depend on them, and the next step your family can make with context.</p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1f1f1f] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12" aria-labelledby="path-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.62fr)] lg:items-end lg:gap-20">
            <div>
              <SectionMarker index="02" label="The planning path" dark />
              <h2 id="path-heading" className="mt-6 max-w-4xl !text-4xl !leading-[0.98] !tracking-[-0.025em] !text-white sm:!text-5xl lg:!text-6xl">A route from first conversation to <em className="font-medium !text-[#e8cf9d]">wedding week.</em></h2>
            </div>
            <p className="!text-lg !leading-8 !text-white/75">Every celebration follows its own rhythm. The structure keeps information clear while your family keeps the celebration yours.</p>
          </div>

          <div className="mt-14 grid gap-9 lg:grid-cols-[78px_minmax(0,1fr)]">
            <div className="relative hidden min-h-[650px] lg:block" aria-hidden="true">
              <span className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-[#e8cf9d]/50" />
              {milestones.map((milestone, index) => (
                <span key={milestone.number} className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-[#1f1f1f] bg-[#e8cf9d]" style={{ top: `${6 + index * 22.5}%` }} />
              ))}
            </div>
            <ol className="grid gap-8 lg:gap-6">
              {milestones.map((milestone, index) => (
                <li key={milestone.number} className={`grid gap-5 border-t border-white/20 pt-6 sm:grid-cols-[70px_minmax(0,1fr)] ${index % 2 === 1 ? "lg:ml-[12%] lg:max-w-3xl" : "lg:max-w-3xl"}`}>
                  <span className="!text-4xl !leading-none !text-[#e8cf9d]">{milestone.number}</span>
                  <div>
                    <h3 className="!text-3xl !leading-none !tracking-[-0.02em] !text-white">{milestone.title}</h3>
                    <p className="mt-3 !text-lg !leading-8 !text-white/75">{milestone.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 flex max-w-4xl items-start gap-3 border border-white/15 bg-white/[0.06] p-5">
            <Sparkles size={20} className="mt-0.5 shrink-0 text-[#e8cf9d]" aria-hidden="true" />
            <p className="!text-base !leading-7 !text-white/80"><strong className="!text-white">Respect is built into the process.</strong> Families and officiants retain ceremony authority. Independent resorts and local providers remain responsible for the services they quote and contract.</p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f8f6f2] px-6 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="sample-heading">
        <div className="mx-auto max-w-7xl">
          <SectionMarker index="03" label="What a clear planning picture looks like" />
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(310px,0.62fr)] lg:items-end lg:gap-20">
            <h2 id="sample-heading" className="max-w-4xl !text-4xl !leading-[0.98] !tracking-[-0.025em] sm:!text-5xl lg:!text-6xl">The details become <em className="font-medium">one shared view.</em></h2>
            <p className="!text-lg !leading-8 !text-[#4d453d]">These are fictional illustrations of how a planning path becomes visible—not a client project, a provider quote, or a promise of availability.</p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#d9cfbf] sm:grid-cols-2 lg:grid-cols-4">
            {planningViews.map((view) => {
              const Icon = view.icon
              return (
                <article key={view.eyebrow} className="min-h-[310px] border-b border-r border-[#d9cfbf] bg-[#fdfcf9] p-6 transition hover:bg-[#f3eee6]">
                  <div className="flex items-start justify-between gap-4">
                    <Icon size={22} className="text-[#7a6841]" aria-hidden="true" />
                    <span className="cv-process-sans text-[10px] font-bold uppercase tracking-[0.14em] !text-[#7a6841]">Sample only</span>
                  </div>
                  <p className="cv-process-sans mt-7 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#6a5b52]">{view.eyebrow}</p>
                  <h3 className="mt-3 !text-3xl !leading-[0.95] !tracking-[-0.02em]">{view.title}</h3>
                  <p className="mt-4 !text-base !leading-7 !text-[#4d453d]">{view.description}</p>
                  <div className="mt-6 border-t border-[#d9cfbf] pt-4">
                    <span className="!text-3xl !leading-none !text-[#7a6841]">{view.figure}</span>
                    <span className="cv-process-sans ml-2 text-[10px] font-bold uppercase tracking-[0.12em] !text-[#6a5b52]">{view.figureLabel}</span>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-10 grid gap-8 border-y border-[#d9cfbf] py-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
            <div className="flex items-center gap-3">
              <Route size={22} className="text-[#7a6841]" aria-hidden="true" />
              <span className="cv-process-sans text-[10px] font-bold uppercase tracking-[0.16em] !text-[#7a6841]">Illustrative ceremony path</span>
            </div>
            <p className="!text-xl !leading-8 !text-[#2f2f2f]">Vidhi <span aria-hidden="true">→</span> Garba/Sangeet with Mehendi <span aria-hidden="true">→</span> Baraat <span aria-hidden="true">→</span> Pheras with Vidai <span aria-hidden="true">→</span> Reception</p>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="roles-heading">
        <div className="mx-auto max-w-7xl">
          <SectionMarker index="04" label="Clear roles create calmer celebrations" />
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.6fr)] lg:items-end lg:gap-20">
            <h2 id="roles-heading" className="max-w-4xl !text-4xl !leading-[0.98] !tracking-[-0.025em] sm:!text-5xl lg:!text-6xl">The right things stay in <em className="font-medium">the right hands.</em></h2>
            <p className="!text-lg !leading-8 !text-[#4d453d]">CeremonyVerse brings structure to the planning conversation while protecting the relationships and responsibilities that matter most.</p>
          </div>
          <div className="mt-12 grid border-l border-t border-[#d9cfbf] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["A", "Your family", "Traditions, guest relationships, priorities, and final approvals remain yours."],
              ["B", "Your officiant", "Ceremonial sequence and spiritual guidance remain under officiant and family authority."],
              ["C", "Independent local providers", "Resorts, venues, transport teams, and vendors remain responsible for their own contracted delivery."],
              ["CV", "CeremonyVerse", "Mini organizes information, research, decisions, and the family-facing planning process."],
            ].map(([mark, title, copy]) => (
              <article key={title} className="min-h-[280px] border-b border-r border-[#d9cfbf] bg-[#fdfcf9] p-7">
                <span className={`cv-process-sans inline-grid h-10 w-10 place-items-center rounded-full border text-xs font-bold ${mark === "CV" ? "border-[#7a6841] bg-[#7a6841] !text-white" : "border-[#2f2f2f] !text-[#2f2f2f]"}`}>{mark}</span>
                <h3 className="mt-10 !text-3xl !leading-none !tracking-[-0.02em]">{title}</h3>
                <p className="mt-4 !text-base !leading-7 !text-[#4d453d]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-[#f3eee6] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]" aria-labelledby="consultation-heading">
        <div className="relative min-h-[560px] overflow-hidden lg:min-h-[660px]">
          <Image
            src="/images/proof/family-wedding-mandap-couple.webp"
            alt="Couple beneath a floral mandap at a family wedding in Mexico"
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <p className="cv-process-sans absolute bottom-6 left-6 right-6 text-xs leading-5 !text-white/85 sm:left-8 sm:bottom-8">Family wedding in Mexico that helped shape CeremonyVerse—not a CeremonyVerse client project.</p>
        </div>
        <div className="flex items-center px-6 py-20 sm:px-8 sm:py-24 lg:px-16">
          <div className="max-w-2xl">
            <SectionMarker index="05" label="Your first conversation" />
            <h2 id="consultation-heading" className="mt-6 !text-4xl !leading-[0.98] !tracking-[-0.025em] sm:!text-5xl">Bring the vision. We will make the <em className="font-medium">next decisions visible.</em></h2>
            <p className="mt-7 !text-lg !leading-8 !text-[#4d453d]">In your first consultation, we listen for the shape of your celebration and identify the questions worth answering first.</p>
            <div className="mt-8 grid gap-3 border-y border-[#d9cfbf] py-6">
              {[
                "Your target season and destination instincts",
                "Your approximate guest range and family priorities",
                "Your cultural and ceremonial non-negotiables",
                "The next decision that would make planning feel lighter",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={19} className="mt-1 shrink-0 text-[#7a6841]" aria-hidden="true" />
                  <p className="!text-base !leading-7 !text-[#4d453d]">{item}</p>
                </div>
              ))}
            </div>
            <Link href={consultationHref} className="cv-process-sans mt-9 inline-flex items-center gap-2 rounded-full bg-[#7a6841] px-7 py-4 text-sm font-bold !text-white transition hover:bg-[#5f502f]">
              Schedule free consultation <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <p className="cv-process-sans mt-5 text-xs !leading-5 !text-[#6a5b52]">No generic sales template. No pressure. Just a clearer way forward.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12" aria-labelledby="workspace-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(320px,1.12fr)] lg:items-center lg:gap-20">
          <div>
            <SectionMarker index="06" label="After a project is active" dark />
            <h2 id="workspace-heading" className="mt-6 !text-4xl !leading-[0.98] !tracking-[-0.025em] !text-white sm:!text-5xl">A private workspace belongs <em className="font-medium !text-[#e8cf9d]">after the right decisions.</em></h2>
          </div>
          <div className="border-l border-[#e8cf9d]/60 pl-6">
            <p className="!text-lg !leading-8 !text-white/75">Once a client project is active, a tailored, access-managed workspace can organize approved event details, travel and stay guidance, RSVP prompts, and wedding-week information. It is not a public marketing destination and is never shared before the family approves its content and access.</p>
            <div className="mt-7 flex items-start gap-3">
              <Compass size={21} className="mt-1 shrink-0 text-[#e8cf9d]" aria-hidden="true" />
              <p className="!text-base !leading-7 !text-white/80">The public CeremonyVerse page explains the method. A private workspace supports a specific family only after the project scope, information, and communication ownership are clear.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
          <div>
            <SectionMarker index="07" label="Questions, answered" />
            <h2 id="faq-heading" className="mt-6 !text-4xl !leading-[0.98] !tracking-[-0.025em] sm:!text-5xl">A confident first step starts with <em className="font-medium">clear expectations.</em></h2>
          </div>
          <div className="border-t border-[#d9cfbf]">
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0} className="group border-b border-[#d9cfbf] py-5">
                <summary className="cv-process-sans flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold !text-[#2f2f2f] marker:content-none">
                  <span>{item.question}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#7a6841] text-[#7a6841] transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl pt-4 !text-lg !leading-8 !text-[#4d453d]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white sm:px-8 sm:py-24" aria-labelledby="final-cta-heading">
        <div className="mx-auto max-w-4xl">
          <p className="cv-process-sans text-xs font-bold uppercase tracking-[0.2em] !text-[#f2dfb9]">Your first conversation</p>
          <h2 id="final-cta-heading" className="mt-5 !text-4xl !leading-[0.98] !tracking-[-0.025em] !text-white sm:!text-5xl">Bring the facts you already have. You will not be asked to start over.</h2>
          <p className="mx-auto mt-6 max-w-3xl !text-lg !leading-8 !text-white/85">We begin with your timeframe, guest range, destination ideas, ceremony priorities, and the questions that are keeping the family from moving forward.</p>
          <Link href={consultationHref} className="cv-process-sans mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold !text-[#2f2f2f] transition hover:bg-[#f3eee6]">
            Schedule free consultation <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
