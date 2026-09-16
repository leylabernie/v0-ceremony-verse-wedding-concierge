import Link from "next/link"
import Image from "next/image"
import { SeoNav } from "@/components/seo-nav"
import {
  buildBreadcrumb,
  buildMetadata,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/real-weddings/",
  title: "Three Family Weddings in Mexico — The Honest Experience Behind CeremonyVerse",
  description:
    "First-person, decision-by-decision accounts of three family Indian destination weddings in Mexico that shaped CeremonyVerse: Hard Rock Hotel Cancún, Generations Riviera Maya, and a Royalton resort. Shared as family experience, not client work.",
  keywords: [
    "Indian destination wedding Mexico experience",
    "Gujarati wedding Cancun",
    "Generations Riviera Maya Indian wedding",
    "Royalton Indian wedding Mexico",
    "CeremonyVerse family experience",
  ],
  image: "/images/proof/family-destination-baarat.webp",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Family Wedding Experience", url: "/real-weddings/" },
])

export default function WeddingExperiencePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <SeoNav />

      <section className="bg-[#1f1f1f] px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            The experience behind the service · written by <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">Mini</Link>
          </p>
          <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Three family weddings in Mexico, told honestly
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/80">
            These were family celebrations — not CeremonyVerse client projects. I share them because they are the reason this service exists, and because the questions I wish I had asked before signing are the questions I now organize for every family I work with. Nothing on this page is a testimonial. When CeremonyVerse has a real client who agrees in writing to be featured, that case study will be labelled as such.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Family wedding 01 · 2019
          </p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Hard Rock Hotel Cancún — roughly 150 guests, four days of events
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4d403a]">
            <p>
              This was our family&rsquo;s wedding — my son&rsquo;s. About 150 guests flew in from across the US, the UK, and India. We had four days of events: a Mehndi on Thursday evening that ran past midnight, a Haldi on Friday morning that needed a separate outdoor space because turmeric stains everything it touches, the baraat and wedding ceremony on Saturday, and a reception on Sunday. The Hard Rock Hotel Cancún is a capable resort with experienced staff. They had done hundreds of weddings. But they had not done many like ours, and the gap between what we imagined and what the contract assumed showed up everywhere.
            </p>
            <p>
              The baraat was the first moment that taught me what &ldquo;outside vendor&rdquo; means in a resort contract. We had a DJ who knew Garba and filmi music — he had played at three family weddings before. The resort&rsquo;s in-house audio vendor could not have done what he did, but bringing him in carried an outside-vendor fee we had not caught in the proposal. Then there was the horse for the baraat procession. The resort had a horse. The horse was not trained for the noise and movement of an Indian baraat with 150 people walking behind it. We figured this out the day before, when the resort&rsquo;s equestrian vendor casually mentioned it.
            </p>
            <p>
              The mandap was the second moment. The decorator (an outside vendor we had brought in from Cancún) was excellent — the floral work was beautiful and the family was happy. But the resort required us to use their staging for the mandap platform, at a fee, and the staging had a specific size constraint that affected the mandap design. We caught this in time only because the decorator asked. Had she not asked, the mandap would have been built to spec in her workshop and then not fit on the resort&rsquo;s staging. The baraat staging, the mandap staging, the mehndi seating, the haldi tarp, the Sunday brunch — each one had a line item we had not been quoted in the original proposal.
            </p>
            <p>
              The food was the third moment. The resort kitchen was good and tried hard. They could not, however, make a Jain version of every dish. We had aunts and uncles who eat Jain food, and we had not specified this in writing early enough. The resort scrambled and the Jain guests were fed, but I learned that &ldquo;vegetarian&rdquo; in a resort contract is not the same as &ldquo;Jain vegetarian&rdquo; or &ldquo;satvik vegetarian,&rdquo; and that the time to confirm that distinction in writing is the week you sign the contract — not the week before the wedding.
            </p>
            <p>
              The wedding was beautiful. The family cried happy tears. The four days were everything I had hoped they would be for my son. And the morning we flew home, I started a notebook of every question I wished I had asked before signing. That notebook is the seed of what CeremonyVerse does today.
            </p>
          </div>
        </article>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Family wedding 02 · February 2023
          </p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Generations Riviera Maya — about 130 guests, and a very different set of problems
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4d403a]">
            <p>
              The second family wedding was at Generations Riviera Maya in February 2023. About 130 guests. The resort layout was gorgeous — multiple ceremony locations, a beautiful beach, a long pool deck that worked perfectly for a Sangeet under string lights. But the rooms were spread across multiple buildings, and that turned out to be a bigger logistical challenge than the brochure suggested.
            </p>
            <p>
              The first issue was guest logistics. With 130 guests arriving across two days from three different airports (Cancún is the closest, but some guests came through Mexico City and a few through Merida), the resort&rsquo;s airport-transfer desk could not handle the load on the second day. We had guests waiting at the airport for an hour because the transfer company had not been given the full flight manifest. That was on me — I had assumed the resort would coordinate with the transfer company. They had not. The lesson: every outside provider (transfers, decorator, DJ, mehndi artist, photographer) needs to be on a single shared document, with the resort&rsquo;s event manager copied, before the first guest lands.
            </p>
            <p>
              The second issue was room blocks. The resort had given us a room-block rate, but the block was split across two buildings. Family with young children ended up on the third floor of a building with no elevator access to the pool. Elderly aunts and uncles ended up a 10-minute walk from the main lobby. We had not asked for room assignment by family unit or by mobility need — we had only asked for the rate. The rate was good. The room assignments were not. The lesson: when a resort proposes a room block, ask for the building assignments in writing before signing, not after.
            </p>
            <p>
              The third issue was the Haldi. At Generations Riviera Maya, the Haldi needed an outdoor space with shade and a wash-up area, because turmeric stains don&rsquo;t come off pool decks easily. The resort had quoted us a &ldquo;garden area&rdquo; for the Haldi. We assumed the garden area included shade. It did not. The shade structure was an additional line item. The wash-up area was an additional line item. The cleanup fee for turmeric removal (yes, that&rsquo;s a real line item) was an additional line item. The total of these add-ons, had we caught them in the proposal, would have changed which Haldi venue we chose.
            </p>
            <p>
              The wedding, again, was beautiful. The Sangeet under the string lights at the pool deck is one of my favorite memories. But the gap between what we imagined and what the contract assumed was the same gap I had seen at the Hard Rock in 2019 — different resort, different specifics, identical pattern. By 2023, I had started keeping a written checklist of every question I would ask a resort the next time.
            </p>
          </div>
        </article>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Family wedding 03 · 2024
          </p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Royalton resort in Mexico — about 80 guests, smaller and more intimate, with its own surprises
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4d403a]">
            <p>
              The third family wedding was at a Royalton resort in Mexico in 2024. About 80 guests. Smaller, more intimate, and we thought — having done this twice — that we had asked every question. We had not.
            </p>
            <p>
              The Royalton&rsquo;s all-inclusive package covered most of what we needed for the wedding events themselves. What it did not cover — and what the proposal did not flag clearly — were the production charges. The resort had a preferred AV vendor for the Sangeet. We wanted to bring in our own DJ (the same DJ from the 2019 wedding, who now knew our family&rsquo;s music). The outside-vendor fee for AV was significantly higher than the outside-vendor fee for decor. We did not catch this until the final invoice arrived, because the proposal had listed &ldquo;outside-vendor fee&rdquo; as a single line item without breaking out the AV vs decor distinction.
            </p>
            <p>
              The second surprise was the day-pass fee for non-resort guests. Two of our elderly aunts could not stay at the resort for medical reasons and stayed at a nearby hotel with better accessibility. To attend the wedding events at the Royalton, they needed day passes. The day-pass fee, applied to two aunts across four event days, came to a meaningful amount. We had not budgeted for it because we had not known to ask. The lesson: every guest who is not staying at the resort should be flagged in writing, and the day-pass policy should be confirmed before the contract is signed.
            </p>
            <p>
              The third surprise was the resort&rsquo;s vendor meal policy. Outside vendors (decorator, DJ, mehndi artist, photographer) who were on site for more than four hours were entitled to resort meals at the vendor rate. We did not know this. The vendor rate was significantly higher than the team had budgeted for, and the resort billed us at the end. The lesson: ask about vendor meals, vendor gratuities, and vendor room requirements before signing — not at the final invoice.
            </p>
            <p>
              This was the wedding that made me stop keeping the notebook private. I started telling friends who were planning their own family weddings about the questions I had learned to ask. By the third or fourth conversation, it was clear that the gap between what families imagine and what resort contracts assume is not specific to my family. It is universal. And the only way to close it is to organize the questions, the cost items, the approvals, and the family-side responsibilities before signing — not after.
            </p>
          </div>
        </article>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              What those three weekends taught me
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
              The pattern is universal, and the questions are answerable
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
              Three different resorts. Three different family configurations. Three different sets of guests. The same pattern, every time: the resort is capable, the resort means well, the resort has done hundreds of weddings — and the resort has not done many four-day Indian weddings. The questions I learned to ask are the questions I now organize for every family CeremonyVerse works with.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Read the proposal line by line, twice",
                body: "Every outside-vendor fee, every staging fee, every cleanup fee, every day-pass fee, every vendor meal — they all live in the proposal, somewhere. The first read is to understand the package. The second read is to find the line items the resort salesperson did not mention.",
              },
              {
                title: "Put every outside provider on one shared document",
                body: "The resort event manager, the decorator, the DJ, the mehndi artist, the photographer, the transfer company, the mehndi artist, the caterer (if outside) — they all need to be on the same document with the same flight manifest, the same room assignments, the same event schedule, and the same approval milestones.",
              },
              {
                title: "Confirm cultural specifics in writing, the week you sign",
                body: "Jain vegetarian is not the same as vegetarian. Satvik vegetarian is not the same as Jain. A baraat horse trained for noise is not the same as a resort horse. Mandap staging dimensions are not negotiable. Haldi cleanup is a real line item. None of these are things the resort will volunteer — they are things the family has to ask.",
              },
            ].map((card, index) => (
              <article
                key={card.title}
                className="rounded-2xl border border-[#d9cfbf] bg-white p-8"
              >
                <p className="font-serif text-5xl text-[#7a6841]">0{index + 1}</p>
                <h3 className="mt-4 font-serif text-2xl font-semibold">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              The moments behind these stories
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
              A few photos from those family weekends
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
              Shared as family celebration, not as CeremonyVerse client work. When CeremonyVerse publishes real client case studies, they will be labelled as such with the family&rsquo;s written permission.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-[#e6dfd5]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/proof/family-destination-baarat.webp"
                  alt="Family members celebrating at a destination wedding baraat in Mexico"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30rem, 100vw"
                />
              </div>
              <figcaption className="bg-[#faf8f5] px-6 py-4 text-sm text-[#4d403a]">
                Baraat celebration at a family destination wedding in Mexico · family event, not a CeremonyVerse client project
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-[#e6dfd5]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/proof/family-wedding-mandap-couple.webp"
                  alt="Couple beneath a floral mandap at a family destination wedding in Mexico"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30rem, 100vw"
                />
              </div>
              <figcaption className="bg-[#faf8f5] px-6 py-4 text-sm text-[#4d403a]">
                Couple beneath the floral mandap · family event, not a CeremonyVerse client project
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Talk to Mini directly
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
            If you&rsquo;re planning a destination wedding, talk to me before you sign
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            The first 30-minute consultation is free. Tell me your destination, your resort options, your guest count, and the questions that feel unclear. I&rsquo;ll either answer them from experience or point you to the resource that will.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=real-weddings"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/before-signing-indian-wedding-resort-proposal/"
              className="inline-flex rounded-full border border-white px-8 py-4 text-sm font-semibold text-white"
            >
              See the 5 questions to ask before signing
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/75">
            Or read more <Link href="/about/mini/" className="underline">about Mini</Link> · See <Link href="/indian-destination-wedding-planner-mexico/" className="underline">destination planning services</Link> · Browse <Link href="/blog/" className="underline">all guides</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
