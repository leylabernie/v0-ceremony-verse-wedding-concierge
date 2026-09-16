import Link from "next/link"
import Image from "next/image"
import {
  buildBreadcrumb,
  buildMetadata,
  buildPersonSchema,
  JsonLd,
  SITE_EMAIL,
  SITE_PHONE,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/about/mini/",
  title: "About Mini — Founder & Destination Wedding Concierge",
  description:
    "Meet Mini (Bhamini), founder of CeremonyVerse. First-person story behind three family Indian destination weddings in Mexico and the India-sourcing service that grew from her son's wedding.",
  image: "/images/proof/family-destination-baarat.webp",
  ogType: "profile",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "About", url: "/about/" },
  { name: "Mini", url: "/about/mini/" },
])

const expertiseTopics = [
  "Gujarati destination weddings",
  "Hindu destination weddings",
  "Indian destination weddings in Mexico",
  "Indian destination weddings in Jamaica",
  "Indian destination weddings in Punta Cana",
  "Indian wedding outfit sourcing from India",
  "Bridal lehenga remote sourcing for NRI brides",
  "US customs duties on Indian wedding textiles",
  "Resort proposal comparison for Indian weddings",
  "Multi-day Indian wedding ceremony logistics",
]

export default function AboutMiniPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-person" data={buildPersonSchema()} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-[#1f1f1f] px-6 py-20 text-[#f8f6f2] sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
              Founder &amp; Destination Wedding Concierge
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              I&rsquo;m Mini. I plan Gujarati and Hindu destination weddings — and I write every guide on this site myself.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              My full name is Bhamini, but every family I work with calls me Mini. I live in Philadelphia and I have spent the last several years on the family side of three multi-day Indian destination weddings in Mexico. Those weekends are why CeremonyVerse exists.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact/?service=mexico&from=about-mini"
                className="inline-flex rounded-full bg-[#c5a059] px-7 py-3 text-sm font-semibold text-[#1f1f1f]"
              >
                Schedule a Free 30-Minute Consultation
              </Link>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="inline-flex rounded-full border border-[#c5a059] px-7 py-3 text-sm font-semibold text-[#c5a059]"
              >
                Email Mini directly
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/15">
              <Image
                src="/images/proof/family-destination-baarat.webp"
                alt="Mini (Bhamini), founder of CeremonyVerse, at a family destination wedding in Mexico"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 32rem, 100vw"
                priority
              />
            </div>
            <p className="mt-3 text-center text-xs text-white/60">
              Family wedding in Mexico · shared as background, not a CeremonyVerse client event
            </p>
          </div>
        </div>
      </section>

      {/* First-person bio */}
      <section className="px-6 py-20 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Why I started CeremonyVerse
          </p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Three family weddings in Mexico taught me what families actually need
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4d403a]">
            <p>
              The first time I stood in a resort ballroom in Canc&uacute;n trying to explain what a Gujarati four-day wedding actually looks like, I realized the gap between what families imagine and what a resort contract assumes is enormous. The resort team was kind and professional. They had done hundreds of weddings. But they had not done many where the Mehndi runs past midnight, where the Haldi needs a separate outdoor space because turmeric stains everything, where 150 guests arrive from three different airports across two days, and where the baraat needs a horse, a DJ who knows Garba, and a clear path from the lobby to the mandap that doesn&rsquo;t trip over the breakfast buffet.
            </p>
            <p>
              That was our family&rsquo;s wedding at the Hard Rock Hotel Canc&uacute;n in 2019. Roughly 150 guests. Four days of events. I was on the family side, not the planner side — but I was the person everyone in our family called when something was unclear. The aunties called me. The resort concierge called me. My son called me. The decorator called me. By the end of that weekend, I had a notebook full of questions I wished I had asked before signing.
            </p>
            <p>
              The second family wedding was at Generations Riviera Maya in February 2023 — about 130 guests, and a very different set of problems. The resort layout was gorgeous but the rooms were spread across multiple buildings, which made guest logistics harder than the brochure suggested. The third was at a Royalton resort in Mexico in 2024, around 80 guests, smaller and more intimate, but with its own surprises around outside-vendor fees we didn&rsquo;t catch until the final invoice.
            </p>
            <p>
              I want to be clear about something important: those three weddings were family celebrations, not CeremonyVerse client projects. I share them honestly as background. They are the reason I built a service that organizes the questions, the approvals, the cost items, and the family-side responsibilities that I had to figure out on the fly. I do not present them as a portfolio. When CeremonyVerse has a real client who agrees to be featured, that case study will be labelled as such with their written permission.
            </p>
          </div>
        </article>
      </section>

      {/* How the sourcing service started */}
      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            How the India sourcing service started
          </p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            My son&rsquo;s wedding outfit was the first one I coordinated from India
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4d403a]">
            <p>
              Before CeremonyVerse was a business, I coordinated the custom outfits for my son&rsquo;s wedding — his sherwani, the groomsmen&rsquo;s kurtas, and a few pieces for immediate family. I had shopped in India my whole life, but coordinating made-to-measure outfits remotely across time zones, with measurements, approvals, fabric swatches, and a delivery deadline that could not slip — that was a different kind of project. There were moments that went smoothly and moments that didn&rsquo;t. The finished looks were beautiful, and the process taught me exactly where the avoidable risks are.
            </p>
            <p>
              After the wedding, another couple saw the outfits and asked if I could help them organize their own. That was the moment I realized there was a real need for a documented, accountable process — not Instagram DMs, not a relative&rsquo;s cousin&rsquo;s recommendation, but an actual written scope with measurements, approvals, shipping terms, and a real remedy if something arrived different from what was approved. That&rsquo;s what CeremonyVerse&rsquo;s <Link href="/buy-indian-wedding-outfits-from-india/" className="text-[#7a6841] underline underline-offset-4">India outfit sourcing service</Link> is today.
            </p>
            <p>
              I write every blog post on this site myself. When I publish a guide on <Link href="/blog/how-to-buy-bridal-lehenga-from-india-usa/" className="text-[#7a6841] underline underline-offset-4">buying a bridal lehenga from India</Link> or <Link href="/blog/us-tariffs-indian-wedding-outfits-2026/" className="text-[#7a6841] underline underline-offset-4">2026 US tariffs on Indian wedding outfits</Link>, the red flags I list are red flags I have personally encountered or watched friends encounter. When I write about <Link href="/blog/how-to-take-lehenga-measurements-at-home/" className="text-[#7a6841] underline underline-offset-4">taking lehenga measurements at home</Link>, the measurement list is the one I use on video calls with brides. This is not content produced from a prompt. It is the working documentation of a service I run.
            </p>
          </div>
        </article>
      </section>

      {/* What I believe */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              What I will and will not do
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
              Three commitments I make to every family
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "I will not fabricate testimonials",
                body: "If I have not worked with a client who has agreed in writing to be featured, I will say so. The three family weddings on /real-weddings/ are family events, not client projects. When I have a real client case study, it will appear with their permission and be labelled as such.",
              },
              {
                title: "I will not promise savings or fit",
                body: "Outfit prices, customs duties, resort fees, and shipping costs change. I organize the questions and the written estimates; I do not guarantee a number I cannot control. If a vendor or process cannot be verified, I will tell you that plainly.",
              },
              {
                title: "I will write the guides myself",
                body: "Every article on this blog is written by me, in my voice, from my experience. When I update an article because something material changed — a tariff, a resort policy, a customs rule — I update the visible date and the structured modifiedTime honestly. I will not bulk-bump dates for SEO.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">
                  Commitment
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise — visible knowsAbout list */}
      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            What I write about
          </p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Topics I have direct, hands-on experience with
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4d403a]">
            These are the same expertise areas asserted in my Person schema. I keep the list short on purpose — these are the topics where I will publish a guide or answer a question without having to research from scratch.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {expertiseTopics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-3 rounded-xl border border-[#d9cfbf] bg-white px-5 py-4"
              >
                <span aria-hidden className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-[#7a6841]" />
                <span className="text-[15px] leading-6 text-[#2f2f2f]">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to reach me */}
      <section className="bg-[#7a6841] px-6 py-20 text-center text-white sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Talk to Mini directly
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
            The first 30-minute consultation is free
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            No payment, no contract. We review your destination, dates, guest count, event plan, and the questions that feel unclear right now. If I think CeremonyVerse can help, I will tell you exactly how. If I think you should work with someone else, I will tell you that too.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=about-mini"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free Consultation
            </Link>
            <a
              href={`https://wa.me/${SITE_PHONE.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white px-8 py-4 text-sm font-semibold text-white"
            >
              WhatsApp Mini
            </a>
          </div>
          <p className="mt-6 text-sm text-white/75">
            Or email <a href={`mailto:${SITE_EMAIL}`} className="underline">{SITE_EMAIL}</a> · Read more <Link href="/about/" className="underline">about CeremonyVerse</Link> · See <Link href="/real-weddings/" className="underline">the family wedding experience behind the service</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
