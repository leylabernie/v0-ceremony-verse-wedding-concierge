import Image from "next/image"
import Link from "next/link"

const phases = [
  {
    number: "01",
    title: "Complimentary introduction",
    text: "Meet Mini for a free 30-minute conversation about your destination, guests, events, priorities, and approximate budget.",
  },
  {
    number: "02",
    title: "A clear recommendation",
    text: "Receive an honest next step. When deeper research is useful, the optional $300 written plan is credited after an eligible planning contract is signed.",
  },
  {
    number: "03",
    title: "Planning with one scope",
    text: "Your signed proposal defines the planning team, responsibilities, CeremonyVerse fee, outside costs, milestones, and on-site support.",
  },
  {
    number: "04",
    title: "Wedding-week delivery",
    text: "Mini remains your organized contact while the destination team manages the local responsibilities included in your agreement.",
  },
]

const destinations = [
  {
    name: "Mexico",
    detail: "Cancún · Riviera Maya · Los Cabos · Mexico City and beyond",
    href: "/destinations/",
  },
  {
    name: "Jamaica",
    detail: "Resort comparisons shaped around guest access and multi-event execution",
    href: "/destinations/jamaica-indian-wedding/",
  },
  {
    name: "Punta Cana",
    detail: "All-inclusive resort planning with cultural and guest needs considered together",
    href: "/destinations/punta-cana-indian-wedding/",
  },
]

export function HomePage() {
  return (
    <main className="bg-[#f8f5ef] text-[#201d1a]">
      <section className="relative min-h-[720px] overflow-hidden">
        <Image
          src="/images/proof/family-destination-baarat.webp"
          alt="Joyful baraat celebration at a destination wedding in Mexico"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17130f]/92 via-[#17130f]/68 to-[#17130f]/18" />
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-14">
          <div className="max-w-[760px] text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] !text-[#e7c98e]">Gujarati &amp; Hindu destination weddings</p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.02] !text-white sm:text-6xl lg:text-[5.15rem]">
              One relationship. A beautifully clear plan.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 !text-white/82 sm:text-xl">
              CeremonyVerse connects your priorities with experienced local planning across Mexico, Jamaica, and Punta Cana—with Mini as your consistent U.S.-based contact.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/contact/?service=mexico&from=home-hero" className="inline-flex items-center justify-center rounded-full bg-[#caa867] px-8 py-4 text-sm font-semibold !text-[#201d1a] transition hover:bg-[#dec58f]">
                Schedule Your Free Consultation
              </Link>
              <Link href="/how-it-works/" className="border-b border-white/60 pb-1 text-sm font-semibold !text-white">See the four-phase process</Link>
            </div>
            <p className="mt-5 text-sm !text-white/65">Your first 30 minutes are free · No payment · No contract · No pressure</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">How we work</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-6xl">Four phases, from first conversation to final event.</h2>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-[#d8cdbc] bg-[#d8cdbc] md:grid-cols-2 xl:grid-cols-4">
            {phases.map((phase) => (
              <li key={phase.number} className="bg-[#fffdf9] p-8 sm:p-9">
                <span className="font-serif text-3xl text-[#9b7c43]">{phase.number}</span>
                <h3 className="mt-8 font-serif text-2xl font-medium leading-tight">{phase.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#51483f]">{phase.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#211d19] px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">Where we plan</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight !text-white sm:text-6xl">Choose the destination that works—not only the one that photographs well.</h2>
              <p className="mt-6 text-lg leading-8 !text-white/68">We compare guest access, room commitments, event spaces, food, culture, outside-vendor rules, weather backup, and complete cost.</p>
              <Link href="/resort-packages/" className="mt-8 inline-flex border-b border-[#caa867] pb-1 font-semibold !text-[#e7c98e]">Explore published resort information</Link>
            </div>
            <div className="border-t border-white/20">
              {destinations.map((destination) => (
                <Link key={destination.name} href={destination.href} className="group grid gap-3 border-b border-white/20 py-8 sm:grid-cols-[170px_1fr_auto] sm:items-center">
                  <h3 className="font-serif text-3xl font-medium !text-white">{destination.name}</h3>
                  <p className="text-base leading-7 !text-white/62">{destination.detail}</p>
                  <span aria-hidden="true" className="!text-[#caa867] transition group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf9] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">CeremonyVerse planning fees</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-6xl">Know our fee before you inquire.</h2>
              <p className="mt-6 text-lg leading-8 text-[#51483f]">Resort packages, rooms, travel, vendors, décor, production, taxes, and other third-party costs remain separate unless your proposal expressly includes them.</p>
              <Link href="/pricing/" className="mt-8 inline-flex rounded-full bg-[#80683b] px-7 py-3.5 text-sm font-semibold !text-white">View Complete Pricing</Link>
            </div>
            <div className="border-t border-[#cfc2af]">
              {[
                ["Event Coordination", "For finalized plans, contracts, and vendors"],
                ["Partial Planning", "For couples with a venue and initial vendors secured"],
                ["Full Planning & Design", "For comprehensive support from the beginning"],
              ].map(([name, fit]) => (
                <article key={name} className="border-b border-[#cfc2af] py-7">
                  <h3 className="font-serif text-2xl font-medium">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6b5b4d]">{fit}</p>
                </article>
              ))}
              <div className="mt-8 rounded-2xl bg-[#eee7dc] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#80683b]">Optional India sourcing</p>
                <p className="mt-3 text-base leading-7 text-[#51483f]">Flat-fee wardrobe and wedding-item sourcing can be added when useful. It is never presented as a free planning inclusion.</p>
                <Link href="/pricing/#india-sourcing" className="mt-4 inline-flex font-semibold text-[#80683b]">See sourcing fees <span aria-hidden="true" className="ml-2">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-[#eee7dc] lg:grid-cols-2">
        <div className="relative min-h-[560px] lg:min-h-[720px]">
          <Image
            src="/images/proof/family-wedding-mandap-couple.webp"
            alt="Bride and groom standing beneath a floral mandap"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-6 sm:p-10"
          />
        </div>
        <div className="flex items-center bg-[#f8f5ef] px-7 py-20 sm:px-14 lg:px-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Why CeremonyVerse</p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight sm:text-6xl">Personal guidance, supported by local execution.</h2>
            <p className="mt-7 text-lg leading-8 text-[#51483f]">Mini keeps questions, decisions, family priorities, and the agreed scope organized. The experienced Mexico City–based destination team handles the local planning and wedding-week responsibilities identified in your proposal.</p>
            <p className="mt-5 text-base leading-7 text-[#6b5b4d]">CeremonyVerse was shaped by firsthand involvement in multi-day celebrations at Hard Rock Hotel Cancun, Generations Riviera Maya, and a Royalton resort.</p>
            <p className="mt-5 text-sm leading-6 text-[#6b5b4d]">These celebrations occurred before CeremonyVerse began accepting planning clients and are not presented as CeremonyVerse client case studies.</p>
            <Link href="/about/" className="mt-8 inline-flex border-b border-[#80683b] pb-1 font-semibold text-[#80683b]">Meet Mini and the planning model</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#80683b] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-white/65">Begin without pressure</p>
          <h2 className="mt-4 font-serif text-4xl font-medium !text-white sm:text-6xl">Start with one useful conversation.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 !text-white/80">Bring your dates, guest estimate, destination ideas, and budget questions. Your first 30 minutes with Mini are free.</p>
          <Link href="/contact/?service=mexico&from=home-final" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#2a241e]">Schedule Your Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
