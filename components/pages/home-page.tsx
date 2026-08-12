import Image from "next/image"
import Link from "next/link"
import { mexicoPackages } from "@/lib/mexico-packages"

const destinations = [
  {
    name: "Mexico",
    eyebrow: "Cancún · Riviera Maya · Los Cabos and beyond",
    description: "Resort and venue planning shaped around your ceremonies, guest travel, room-block terms, food, production, and weather backup.",
    href: "/destinations/",
  },
  {
    name: "Jamaica",
    eyebrow: "Montego Bay · Trelawny · Ocho Rios",
    description: "A careful resort comparison that separates public package headlines from the complete written cost of a multi-event Indian wedding.",
    href: "/destinations/jamaica-indian-wedding/",
  },
  {
    name: "Punta Cana",
    eyebrow: "Dominican Republic",
    description: "Guest access, resort fit, cultural execution, food, vendors, room blocks, and on-site responsibilities reviewed as one plan.",
    href: "/destinations/punta-cana-indian-wedding/",
  },
]

const consultationSteps = [
  ["01", "Request a time", "Begin with a free 30-minute conversation. No payment or contract is required."],
  ["02", "Tell us what matters", "Complete one focused questionnaire so the call can center on your dates, guests, ceremonies, budget, and priorities."],
  ["03", "See the right next step", "Receive a candid fit conversation. If deeper comparison is needed, the optional $300 written plan is offered separately."],
  ["04", "Begin with a clear scope", "Review the recommendation, responsibilities, fee, and outside costs before deciding whether to sign a planning package."],
]

export function HomePage() {
  return (
    <main className="bg-[#f8f5ef] text-[#201d1a]">
      <section className="relative min-h-[760px] overflow-hidden">
        <Image
          src="/images/proof/family-destination-baarat.webp"
          alt="Joyful baraat celebration at a destination wedding in Mexico"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17130f]/90 via-[#17130f]/66 to-[#17130f]/20" />
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-14">
          <div className="max-w-[760px] text-white">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] !text-[#e7c98e]">
              Gujarati &amp; Hindu destination weddings
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[0.98] !text-white sm:text-6xl lg:text-[5.35rem]">
              Your destination wedding, beautifully held together.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 !text-white/86 sm:text-xl">
              CeremonyVerse brings your family, destination team, guest details, and celebration priorities into one thoughtful plan across Mexico, Jamaica, and Punta Cana.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/?service=mexico&from=home-hero" className="inline-flex items-center justify-center rounded-full bg-[#caa867] px-8 py-4 text-sm font-semibold !text-[#201d1a] transition hover:bg-[#dec58f]">
                Schedule Your Free Consultation
              </Link>
              <Link href="/how-it-works/" className="inline-flex items-center justify-center rounded-full border border-white/55 px-8 py-4 text-sm font-semibold !text-white transition hover:bg-white/10">
                See How Planning Works
              </Link>
            </div>
            <p className="mt-5 text-sm !text-white/70">Free for 30 minutes · No payment · No contract · No pressure</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ded5c7] bg-[#211d19] px-6 py-7 text-white">
        <div className="mx-auto grid max-w-6xl gap-5 text-center text-sm sm:grid-cols-2 lg:grid-cols-4">
          <p className="!text-white/78">U.S.-based family contact</p>
          <p className="!text-white/78">Mexico City planning team</p>
          <p className="!text-white/78">On-site execution in the signed scope</p>
          <p className="!text-white/78">Published CeremonyVerse fees</p>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Choose the setting</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-6xl">Three destinations. One standard of care.</h2>
            <p className="mt-6 text-lg leading-8 text-[#51483f]">The right destination is the one that works for your guests, ceremonies, budget, and experience—not simply the prettiest beach photograph.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-[#ded5c7] bg-[#ded5c7] lg:grid-cols-3">
            {destinations.map((destination) => (
              <article key={destination.name} className="flex min-h-[360px] flex-col bg-[#fffdf9] p-9 sm:p-11">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80683b]">{destination.eyebrow}</p>
                <h3 className="mt-5 font-serif text-4xl font-medium">{destination.name}</h3>
                <p className="mt-5 flex-1 leading-8 text-[#51483f]">{destination.description}</p>
                <Link href={destination.href} className="mt-8 inline-flex font-semibold text-[#80683b]">Explore {destination.name} <span aria-hidden="true" className="ml-2">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee7dc] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-48">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Begin without pressure</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-6xl">A clearer first conversation.</h2>
              <p className="mt-6 text-lg leading-8 text-[#51483f]">Start with a free call. Pay only when you choose a defined written service.</p>
              <Link href="/contact/?service=mexico&from=home-process" className="mt-8 inline-flex rounded-full bg-[#27211c] px-7 py-3.5 text-sm font-semibold !text-white">Request a Consultation Time</Link>
            </div>
            <ol className="border-t border-[#cfc2af]">
              {consultationSteps.map(([number, title, text]) => (
                <li key={number} className="grid gap-4 border-b border-[#cfc2af] py-8 sm:grid-cols-[64px_180px_1fr] sm:items-start">
                  <span className="font-serif text-3xl text-[#9b7c43]">{number}</span>
                  <h3 className="font-serif text-2xl font-medium">{title}</h3>
                  <p className="leading-7 text-[#51483f]">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf9] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Planning support</p>
            <h2 className="mt-4 font-serif text-4xl font-medium sm:text-6xl">Choose only the help you need.</h2>
            <p className="mt-6 text-lg leading-8 text-[#51483f]">Your final proposal is shaped around your destination, dates, events, guest count, staffing, travel, and requested additions.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {mexicoPackages.map((pkg) => (
              <article key={pkg.name} className="flex flex-col rounded-[1.75rem] border border-[#ded5c7] bg-[#f8f5ef] p-8 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80683b]">{pkg.timeline}</p>
                <h3 className="mt-5 font-serif text-3xl font-medium">{pkg.name}</h3>
                <p className="mt-3 font-semibold text-[#80683b]">{pkg.priceLabel}</p>
                <p className="mt-5 flex-1 leading-7 text-[#51483f]">{pkg.description}</p>
                <Link href={pkg.href} className="mt-8 inline-flex font-semibold text-[#80683b]">{pkg.cta} <span aria-hidden="true" className="ml-2">→</span></Link>
              </article>
            ))}
          </div>
          <div className="mt-9 text-center"><Link href="/pricing/" className="font-semibold text-[#80683b] underline underline-offset-4">Compare full inclusions, exclusions, and fees</Link></div>
        </div>
      </section>

      <section className="grid bg-[#211d19] text-white lg:grid-cols-2">
        <div className="relative min-h-[560px] bg-[#eee7dc] lg:min-h-[700px]">
          <Image src="/images/proof/family-wedding-mandap-couple.webp" alt="Bride and groom beneath a floral mandap" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
        </div>
        <div className="flex items-center px-7 py-20 sm:px-14 lg:px-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">Experience that shaped CeremonyVerse</p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight !text-white sm:text-6xl">Planning grounded in real multi-day celebrations.</h2>
            <p className="mt-7 text-lg leading-8 !text-white/75">Firsthand involvement in destination weddings at Hard Rock Hotel Cancun, Generations Riviera Maya, and a Royalton resort shaped how CeremonyVerse approaches guest flow, family decisions, cultural needs, and on-site responsibilities.</p>
            <p className="mt-5 text-sm leading-6 !text-white/55">These celebrations took place before CeremonyVerse began accepting planning clients and are not presented as client case studies.</p>
            <Link href="/about/" className="mt-8 inline-flex border-b border-[#caa867] pb-1 font-semibold !text-[#e7c98e]">Meet CeremonyVerse</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-[#ded5c7] bg-[#fffdf9] p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Optional India sourcing</p>
            <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">Keep wedding wardrobes connected to the plan.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#51483f]">Add documented outfit and wedding-item sourcing only when it helps. India sourcing is priced separately and never required with a planning package.</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link href="/buy-indian-wedding-outfits-from-india/" className="inline-flex justify-center rounded-full bg-[#80683b] px-7 py-3.5 text-sm font-semibold !text-white">Explore India Sourcing</Link>
            <Link href="/planning-tools/" className="inline-flex justify-center px-7 py-3 text-sm font-semibold text-[#80683b]">Use Free Planning Tools</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#80683b] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-white/65">Your first conversation is free</p>
          <h2 className="mt-4 font-serif text-4xl font-medium !text-white sm:text-6xl">Let’s make the first decisions feel lighter.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 !text-white/80">Bring your dates, guest estimate, destination ideas, and questions. We’ll help you understand the practical next step.</p>
          <Link href="/contact/?service=mexico&from=home-final" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#2a241e]">Schedule Your Free 30-Minute Consultation</Link>
        </div>
      </section>
    </main>
  )
}
