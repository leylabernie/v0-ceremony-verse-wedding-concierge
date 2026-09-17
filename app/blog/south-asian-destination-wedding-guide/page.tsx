import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { VisibleFaqs } from "@/components/visible-faqs";
import { RoomBlockLeadCard } from "@/components/room-block-lead-card";
import { buildBlogPosting, buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

const title = "The South Asian Family Guide to Destination Wedding Room Blocks in Mexico & The Caribbean";
const description =
  "How to build multi-day room blocks at all-inclusive resorts in Mexico and the Caribbean for large Gujarati and Hindu weddings: event spaces, Jain and satvik catering in writing, and elderly-guest logistics that do not punish your grandparents.";
const path = "/blog/south-asian-destination-wedding-guide/";
const lastModified = "2026-09-17T09:00:00-04:00";

export const metadata = buildMetadata({
  path,
  title,
  description,
  keywords: [
    "destination wedding room blocks Mexico",
    "Indian wedding room block all inclusive resort",
    "South Asian destination wedding Caribbean",
    "elderly guests destination wedding logistics",
    "Jain satvik wedding catering resort",
  ],
  publishedTime: lastModified,
  modifiedTime: lastModified,
  authorName: "Mini",
  ogType: "article",
  image: "/images/proof/family-wedding-mandap-couple.webp",
});

const blogPostingSchema = buildBlogPosting({
  headline: title,
  description,
  url: path,
  datePublished: lastModified,
  dateModified: lastModified,
  authorName: "Mini",
  keywords: [
    "destination wedding room blocks Mexico",
    "Caribbean Indian wedding room block",
    "multi-day wedding event spaces all inclusive",
    "elderly guest room block logistics",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: title, url: path },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How far in advance should we request a room block for a large South Asian wedding in Mexico or the Caribbean?",
    answer:
      "Earlier than a Western wedding of the same size, because a four-day Indian wedding competes with every other group for the same rooms and event spaces. Families I work with start the block conversation as soon as the resort shortlist exists — well before the contract is signed — so building assignments, event-space holds, and elderly-guest needs are negotiated while they can still be written into the proposal.",
  },
  {
    question: "What is the difference between a room block and a room guarantee?",
    answer:
      "A block is a set of rooms held for your wedding dates, usually under a cutoff date by which guests must book. A guarantee is the number of rooms you commit to pay for if they go unbooked. The difference matters enormously for a 100-plus-guest wedding: confirm the block size, the cutoff date, the attrition terms, and who collects deposits — all in writing — before signing.",
  },
  {
    question: "How do we keep elderly grandparents close to the wedding events?",
    answer:
      "Ask for the specific building and floor by name in the proposal — near the lobby, the ballroom, and the elevator — and have the resort confirm it in writing, not verbally. At my family's 2023 wedding the block was split across two buildings, and the elders ended up a ten-minute walk from the lobby while young cousins had the convenient rooms. That single request, made early, fixes most of the problem.",
  },
  {
    question: "Can guests book outside the room block, and what happens to day guests?",
    answer:
      "Guests can book whatever the resort permits, but anyone not staying on property may need a day pass per event day — at my family's 2024 wedding, two elderly aunts staying at a nearby accessible hotel needed day passes for every event day, and that became a meaningful unbudgeted line item. Flag every non-resort guest in writing and confirm the day-pass policy before signing.",
  },
  {
    question: "Do we have to use a travel agent for the guest bookings?",
    answer:
      "No law requires it — but collecting 80 to 150 guests' names, arrival flights, dietary notes, and payments yourself is a second job. CeremonyVerse Travel handles direct guest bookings through the booking portal, with the planning side staying here. Whichever path your family chooses, put every guest's arrival flight on one shared document with the resort's event manager copied before the first guest lands.",
  },
]);

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7a6841]">
          Room blocks &amp; guest logistics · 9 min read
        </p>
        <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] md:text-5xl">{title}</h1>
        <p className="mb-6 text-lg leading-8 text-[#4d403a]">
          The room block is the least glamorous part of a destination wedding — and after three family weddings in
          Mexico, it is where I have watched the most stress happen. Not at the mandap. At the front desk, when
          someone&apos;s grandmother discovers her room is a ten-minute walk from everything.
        </p>
        <p className="mb-12 text-sm text-[#4d403a]">
          By <a href="/about/mini/" className="text-[#7a6841] underline underline-offset-4">Mini</a> · Updated September 17, 2026
        </p>

        <div className="space-y-7 text-[1.06rem] leading-8 text-[#4d403a]">
          <p>
            A Western wedding at an all-inclusive resort is one evening. Ours is a takeover: Mehndi, Haldi, Sangeet,
            the baraat and ceremony, the reception — four or five days of events, 80 to 150 guests flying in from two
            or three countries, and a resort that has done hundreds of weddings but not many like ours. The room block
            is the connective tissue holding all of it together, and the proposal you sign decides whether it holds.
          </p>
          <p>
            This guide covers the three places room blocks actually break for South Asian families: multi-day event
            space, strict catering requirements, and — the one nobody budgets for — elderly guests. Everything here
            comes from my family&apos;s weddings in Mexico or the work I now do for NRI Gujarati and Hindu families
            across the USA and Canada, planning weddings in Mexico, Jamaica, and Punta Cana.
          </p>

          <RoomBlockLeadCard />

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">Why room blocks break differently for our weddings</h2>
          <p>
            Resorts sell room blocks designed for a Friday-night wedding: arrive Saturday, leave Sunday, one ballroom,
            one dinner. Our weddings ask a resort to feed and house the same 130 people across four days of early
            mornings and late nights. That is a different product, and the contract gap shows up in three places —
            buildings, budgets, and bellies.
          </p>
          <p>
            At my family&apos;s 2023 wedding in the Riviera Maya, about 130 guests arrived across two days through
            three different airports. The resort had given us a room-block rate, and the rate was good. But the block
            was split across two buildings. Family with young children landed on a third floor with no elevator
            access to the pool. Our elderly aunts and uncles ended up a ten-minute walk from the main lobby while the
            young cousins got the convenient rooms. We had asked for the rate. We had not asked for the building
            assignments.
          </p>
          <p>
            One sentence, people. &ldquo;Which building, which floor, and how far from the ballroom?&rdquo; — asked
            before signing, in writing.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">Multi-day event spaces: five ceremonies, one property</h2>
          <p>
            Every event in a Gujarati or Hindu wedding needs its own space, and each one has a physical requirement
            the resort will not volunteer. The Haldi needs an outdoor area with shade and a wash-up station, because
            turmeric stains pool decks and clothing alike — and yes, the turmeric-removal cleanup fee is a real line
            item; it was on my family&apos;s proposal. The Sangeet needs a covered evening venue that can take live
            sound until midnight without a noise waiver fight. The baraat needs a procession route the resort will
            actually permit. The mandap needs staging that meets the decorator&apos;s dimensions.
          </p>
          <p>
            That last one nearly caught us in 2019. Our decorator — an outside vendor we brought in from Cancún — was
            excellent, but the resort required us to use their staging for the mandap platform, at a fee, with a size
            constraint that affected the mandap design. We caught it only because she asked the right question before
            building the mandap in her workshop. Had she not asked, we would have discovered it on setup day.
          </p>
          <p>
            And here is what makes multi-day space genuinely hard: your events compete with every other wedding group
            at the resort for the same venues. A resort can happily say &ldquo;yes&rdquo; to your Sangeet concept in
            a sales meeting and then discover your date collides with a conference that needs the pool deck. The
            defense is a per-event space sheet in the written proposal — event, date, time, venue, backup venue, and
            setup window — with each line initialed.
          </p>
          <p>
            I put the full question list in{" "}
            <Link href="/before-signing-indian-wedding-resort-proposal/" className="font-semibold text-[#7a6841] underline">
              what to check before signing an Indian wedding resort proposal
            </Link>
            , and the fee traps that hide inside multi-day bookings — outside-vendor fees, staging, cleanup, day
            passes — are broken down line by line in{" "}
            <Link href="/blog/hidden-resort-fees-4-day-indian-wedding-cancun/" className="font-semibold text-[#7a6841] underline">
              hidden resort fees for a four-day Indian wedding
            </Link>
            .
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">Strict catering: Jain, satvik, and the week-you-sign rule</h2>
          <p>
            Food is where cultural requirements and resort kitchens collide hardest. At our 2019 wedding, the resort
            kitchen was good and tried hard — but it could not make a Jain version of every dish. We had aunts and
            uncles who eat Jain food, we had not specified the requirement in writing early enough, and the kitchen
            scrambled. The Jain guests were fed. But I learned the lesson that now shapes every menu I organize:
            &ldquo;vegetarian&rdquo; in a resort contract is not the same as &ldquo;Jain vegetarian&rdquo; or
            &ldquo;satvik vegetarian,&rdquo; and the time to confirm that distinction in writing is the week you sign
            the contract — not the week before the wedding.
          </p>
          <p>
            The mechanics are straightforward even when the requirement is strict: state the restriction per event
            (no onion, no garlic, no root vegetables, dedicated cookware, no shared frying oil), ask the resort to
            confirm each item in the banquet documentation rather than verbally, and reconfirm everything at the
            tasting. Label the buffet stations so fasting elders and first-time guests are not guessing. And remember
            the vendors: outside suppliers on site more than four hours are typically entitled to resort meals at the
            vendor rate — nobody told us that in 2024, and the bill arrived at the end anyway.
          </p>
          <p>
            The full food playbook — outside chefs, kitchen access, tastings, live chaat and dosa stations — lives in{" "}
            <Link href="/blog/indian-wedding-catering-mexico-all-inclusive-resorts/" className="font-semibold text-[#7a6841] underline">
              my guide to Indian wedding catering at Mexico all-inclusive resorts
            </Link>
            , so I will not repeat it here. Read that one before your tasting, not after.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">Simplifying room blocks for elderly family members</h2>
          <p>
            This is the part I care about most, because our elders are the reason these weddings happen — and they
            are the guests the default room block treats worst.
          </p>
          <p>
            At our 2024 wedding, two of my elderly aunts could not stay at the resort for medical reasons. They stayed
            at a nearby hotel with better accessibility. To attend the wedding events, they needed day passes — for
            two people, across four event days, that came to a meaningful amount of money we had not budgeted because
            we had not known to ask. The lesson: every guest who is not staying at the resort should be flagged in
            writing, and the day-pass policy should be confirmed before the contract is signed.
          </p>
          <p>
            The 2023 airport story belongs in the same conversation. With guests arriving across two days through
            Cancún, Mexico City, and Mérida, the resort&apos;s transfer desk could not handle the load on day two, and
            guests waited an hour at the airport because the transfer company never got the full flight manifest. That
            was on me — I had assumed the resort would coordinate with the transfer company. They had not.
          </p>
          <p>So here is the elderly-guest block checklist I now use with every family:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Building and floor named in the proposal — near the lobby, the ballroom, and the elevator — confirmed in writing, not verbally.</li>
            <li>Room assignments by family unit and mobility need, requested when you ask for the rate, not after.</li>
            <li>Every non-resort guest (accessible hotels, relatives who live nearby) listed with the day-pass policy and per-day cost confirmed.</li>
            <li>One shared arrival document: every guest&apos;s flight, every transfer, the resort event manager copied — finalized before the first guest lands.</li>
            <li>Wheelchair-accessible rooms and shuttle logistics requested by room count, because &ldquo;we have accessible rooms&rdquo; and &ldquo;we have four available that week&rdquo; are different sentences.</li>
            <li>An elder point-person per family branch — someone the resort and the planner can text at midnight when a flight slips.</li>
          </ul>
          <p>
            The{" "}
            <Link href="/indian-wedding-room-block-mexico/" className="font-semibold text-[#7a6841] underline">
              Mexico room-block guide
            </Link>{" "}
            covers the resort-side mechanics, and{" "}
            <Link href="/planning-tools/guest-logistics/" className="font-semibold text-[#7a6841] underline">
              the guest-logistics planning tool
            </Link>{" "}
            turns this checklist into a worksheet your family can actually fill in.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">How guests actually book: the two-door system</h2>
          <p>
            Families always ask who books what. Here is the cleanest division I have found. Planning — resort
            comparison, proposals, catering requirements, event spaces, the room-block contract itself — stays with
            the planning side, because those decisions need one accountable negotiator. But the guests themselves need
            somewhere simple to reserve their rooms, and a WhatsApp thread with 40 cousins is not that place.
          </p>
          <p>
            That is why guests of the families I work with book their own stays and cruises through{" "}
            <a href="https://ceremonyversetravel.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7a6841] underline">
              CeremonyVerse Travel
            </a>{" "}
            — the booking portal for the resorts and cruise lines we coordinate with — while the wedding planning
            continues here on CeremonyVerse. Whether your family books through the portal or directly with the resort,
            put every booking on the shared manifest and confirm the block cutoff dates before invitations go out.
          </p>
          <p className="text-sm leading-6 text-[#5e4a40]">
            Disclosure: CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc., Florida Seller of
            Travel No. FST ST15578.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">A note on Jamaica and Punta Cana</h2>
          <p>
            Everything above applies across our coverage area — Mexico, Jamaica, and Punta Cana. Jamaica and Punta
            Cana are part of current service coverage, but not part of the three family weddings told on{" "}
            <Link href="/real-weddings/" className="font-semibold text-[#7a6841] underline">
              the real-weddings page
            </Link>{" "}
            — those are Mexico weddings, and I keep that line honest. For destination specifics beyond Mexico, start
            with the{" "}
            <Link href="/destinations/jamaica-indian-wedding/" className="font-semibold text-[#7a6841] underline">
              Jamaica
            </Link>{" "}
            and{" "}
            <Link href="/destinations/punta-cana-indian-wedding/" className="font-semibold text-[#7a6841] underline">
              Punta Cana
            </Link>{" "}
            guides, and treat every rate you read anywhere as something the resort must confirm in its current written
            proposal.
          </p>

          <div className="mt-12 rounded-2xl bg-[#1f1f1f] p-8 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold">Want a room block that doesn&apos;t punish your elders?</h2>
            <p className="mt-4 leading-7 text-[#e8dfd2]">
              Tell me your guest count, your dates, and your resort shortlist. I&apos;ll review the proposal line by
              line — buildings, event spaces, catering requirements, day passes — before your family signs.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact/?service=mexico&from=room-block-guide" className="rounded-full bg-[#c5a059] px-7 py-3 font-semibold text-[#1f1f1f]">
                Request a Custom Quote
              </Link>
              <a
                href="https://ceremonyversetravel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#c5a059] px-7 py-3 font-semibold text-white"
              >
                Book Resorts &amp; Cruises for Your Guests
              </a>
            </div>
            <p className="mt-5 text-xs text-white/70">
              CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc., Florida Seller of Travel No.
              FST ST15578.
            </p>
          </div>

          <p className="border-t border-[#e6dfd5] pt-6 text-sm leading-6">
            <strong>Source note:</strong> Room-block, event-space, catering, and day-pass terms vary by property and
            change over time. This article describes planning patterns from family wedding experience, not any single
            resort&apos;s current policy. Verify every term directly with each property and confirm it in the current
            written event contract before relying on it. Property references:{" "}
            <a href="https://www.hardrockhotels.com/cancun/" target="_blank" rel="noopener noreferrer" className="underline">Hard Rock Hotel Cancún</a>,{" "}
            <a href="https://www.hardrockhotels.com/riviera-maya/" target="_blank" rel="noopener noreferrer" className="underline">Hard Rock Riviera Maya</a>{" "}
            (the property our family knew as Generations), and{" "}
            <a href="https://www.royaltonresorts.com/" target="_blank" rel="noopener noreferrer" className="underline">Royalton</a>.
          </p>
        </div>
        <VisibleFaqs schema={faqSchema} />
      </article>
    </main>
  );
}
