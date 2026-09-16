import Link from "next/link"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/nri-gujarati-wedding-vendor-questions/",
  title: "Questions to Ask Gujarati Wedding Vendors Before You Book",
  description:
    "A vendor-by-vendor checklist of questions to ask your Gujarati wedding decorator, DJ, mehndi artist, photographer, caterer, and transfer company before signing — written from firsthand family-wedding experience.",
  keywords: [
    "questions to ask Indian wedding vendors",
    "Gujarati wedding vendor checklist",
    "Indian wedding decorator questions",
    "Indian wedding DJ questions",
    "destination wedding vendor questions",
  ],
  publishedTime: "2026-09-16",
  authorName: "Mini",
  ogType: "article",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Guides", url: "/blog/" },
  { name: "Gujarati Wedding Vendor Questions", url: "/nri-gujarati-wedding-vendor-questions/" },
])

const vendors = [
  {
    name: "Decorator",
    intro:
      "The decorator designs and builds the mandap, the stage, the entry decor, and the floral work for every event. The single most common decorator failure at an Indian destination wedding is a mandap that does not fit the resort&rsquo;s staging dimensions &mdash; either too tall for the ceiling, too wide for the platform, or too heavy for the surface. Get the resort&rsquo;s dimension sheet in writing before the decorator designs.",
    questions: [
      "How many Indian destination weddings have you executed in Mexico, Jamaica, or Punta Cana &mdash; with named families and dated events I can verify?",
      "Will you design the mandap to the resort&rsquo;s staging dimensions &mdash; and will you accept the dimension sheet in writing before production?",
      "What is your cleanup policy &mdash; do you remove all decor and floral at the end of each event, and what is the fee if the resort charges a separate cleanup line item?",
      "What is your payment schedule &mdash; and is the final payment after the wedding, not 100% before?",
      "What happens if what you deliver does not match what you promised &mdash; what is the documented remedy?",
      "Have you worked with this resort before &mdash; and if not, will you coordinate with the resort event manager before signing?",
      "Do you source flowers locally or import from India &mdash; and what is the cost difference for each option?",
    ],
  },
  {
    name: "DJ",
    intro:
      "The DJ for a Gujarati wedding must know Garba, traditional Gujarati wedding songs, and the filmi music that guests expect at the Sangeet and reception. Most resort in-house DJs do not. A DJ without Indian-wedding experience will play generic Bollywood and miss the cultural beats that make a Gujarati wedding feel like one.",
    questions: [
      "How many Gujarati weddings have you DJ&rsquo;d &mdash; and can I speak to two of those families as references?",
      "Do you know Garba, dandiya, and traditional Gujarati wedding songs &mdash; can you send me a sample playlist?",
      "Will you take requests from the family on the night &mdash; or do you work only from a pre-approved playlist?",
      "Do you bring your own equipment, or do you use the resort&rsquo;s in-house AV &mdash; and what is the outside-vendor fee the resort charges in each case?",
      "What is your backup plan if your primary DJ or your equipment fails on the night?",
      "What happens if what you deliver does not match what you promised &mdash; what is the documented remedy?",
      "Will you emcee the toasts and the family introductions, or do I need a separate emcee?",
    ],
  },
  {
    name: "Mehndi Artist",
    intro:
      "The mehndi artist applies henna to the bride, bridesmaids, and female family members at the Mehndi ceremony. Use only natural henna &mdash; chemical black henna contains PPD (para-phenylenediamine), which causes severe skin reactions and can leave permanent scarring. A bride&rsquo;s mehndi takes 4 to 6 hours; book the artist for the full evening, not by the hour.",
    questions: [
      "Do you use only natural henna &mdash; with no chemical black henna or PPD additives? Will you put this in writing?",
      "How many Indian destination weddings have you worked &mdash; with named families and dates I can verify?",
      "How long will the bride&rsquo;s mehndi take &mdash; and what is your rate for the full evening versus per guest?",
      "Do you bring your own henna cones, or do you expect the family to supply them?",
      "What happens if you cannot complete the bride&rsquo;s mehndi by the end of the evening &mdash; what is the documented remedy?",
      "Can you send me photos of bride-level mehndi you have done in the last 12 months &mdash; not catalog photos, current work?",
    ],
  },
  {
    name: "Photographer and Videographer",
    intro:
      "The photographer and videographer must have Gujarati-wedding experience to capture the moments that matter &mdash; Kanyadaan, Hastamilap, Saptapadi, and Vidaai each have a specific choreography that a non-Indian-experienced photographer will miss. Brief the photographer in advance on which moments are non-negotiable and which angles are required.",
    questions: [
      "How many Gujarati Hindu weddings have you photographed &mdash; and can I see full galleries from two of them?",
      "Do you know the choreography of Kanyadaan, Hastamilap, Saptapadi, and Vidaai &mdash; can you tell me which moments you would shoot and from where?",
      "Will you attend the rehearsal or walk the venue with the event manager before the wedding?",
      "What is your delivery timeline &mdash; how many edited photos, how many edited videos, and when do I receive them?",
      "What is your backup plan if your primary photographer or videographer cannot make the wedding?",
      "What happens if the deliverables do not match what you promised &mdash; what is the documented remedy?",
      "What is the outside-vendor fee the resort charges for AV &mdash; and is it higher than the fee for decor?",
    ],
  },
  {
    name: "Caterer",
    intro:
      "If the resort&rsquo;s kitchen cannot meet your Jain or satvik requirements, an outside caterer may be permitted &mdash; but only some resorts allow it. Confirm in writing at the contract stage whether an outside caterer is permitted, what the outside-vendor fee is, and what kitchen access the outside caterer will have.",
    questions: [
      "Can you produce Jain (no onion, no garlic, no root vegetables) and satvik (no onion, no garlic, prepared without tasting) versions of every dish &mdash; in writing?",
      "How will the dishes be labeled at the buffet so guests can identify the Jain and satvik versions?",
      "What is your Gujarati wedding menu &mdash; can you send me a sample menu with photos of dishes you have actually served?",
      "Have you cooked at this resort before &mdash; and if not, what is your relationship with the resort&rsquo;s kitchen?",
      "What is the outside-vendor fee the resort charges for outside catering &mdash; and is it per event or per day?",
      "What happens if a dish is not up to standard on the night &mdash; what is the documented remedy?",
      "What is your payment schedule &mdash; and is the final payment after the wedding, not 100% before?",
    ],
  },
  {
    name: "Airport Transfer Company",
    intro:
      "The airport transfer company moves 100+ guests from the airport to the resort and back. The single biggest failure mode is a transfer company that does not accept a shared flight manifest &mdash; they want individual bookings, which means individual pickups, which means guests waiting at the airport for an hour because the manifest was not shared.",
    questions: [
      "Will you accept a shared flight manifest for 100+ guests &mdash; with one master document covering every arrival and departure?",
      "What is your per-guest rate &mdash; and is it different for arrivals versus departures, weekday versus weekend?",
      "What size vehicles do you operate &mdash; can you handle large coaches for group arrivals, not just sedans?",
      "Will you coordinate with the resort event manager on the pickup schedule &mdash; or do you expect the family to manage the coordination?",
      "What happens if a flight is delayed &mdash; what is the documented remedy for the affected guests?",
      "Have you handled Indian wedding transfers at this airport before &mdash; with named families and dates I can verify?",
    ],
  },
  {
    name: "Maharaj",
    intro:
      "The Maharaj is the officiant who performs the wedding ceremony. Every Gujarati community &mdash; Patel, Lohana, Brahmin, Jain-Gujarati &mdash; has its own specific ceremony sequence, and not every Maharaj knows every community&rsquo;s version. Confirm with the Maharaj at month 7 that he knows your family&rsquo;s specific traditions.",
    questions: [
      "Which Gujarati communities have you officiated weddings for &mdash; and do you know our specific family tradition?",
      "Will you walk us through the full ceremony sequence before the wedding &mdash; and confirm it in writing?",
      "Do you bring your own puja materials, or do you give us a list to source?",
      "Will you travel to the destination resort &mdash; and what is your travel and accommodation arrangement?",
      "What happens if you cannot attend on the day &mdash; what is your backup plan?",
      "Will you coordinate with the resort on the fire-safety plan for the havan &mdash; and confirm the staging requirements in writing?",
      "What is your fee structure &mdash; travel, accommodation, ceremony, and any dakshina?",
    ],
  },
]

const faqs = [
  {
    question: "When should we book vendors?",
    answer:
      "Sign the decorator, DJ, mehndi artist, photographer, and Maharaj at month 7 on the 12-month timeline. The caterer is typically the resort&rsquo;s in-house kitchen (confirmed at month 10 with the resort contract) unless you are bringing an outside caterer, in which case the outside caterer is signed at month 7 as well. The airport transfer company is signed at month 5 alongside the save-the-date send. Booking earlier than month 7 gives you more choice; booking later means your first-choice vendors may be booked for your date.",
  },
  {
    question: "Resort in-house vendors or our own?",
    answer:
      "For the decorator, DJ, mehndi artist, photographer, and Maharaj &mdash; bring your own. Resort in-house vendors at most Mexico, Jamaica, and Punta Cana resorts do not have Indian-wedding experience, and the cultural-specific delivery (Garba music, Gujarati ceremony choreography, mandap staging, natural henna) is not something a resort in-house team can produce on demand. For the caterer, start with the resort&rsquo;s in-house kitchen and confirm Jain and satvik capability in writing; only bring an outside caterer if the resort kitchen cannot meet the requirement. For airport transfers, use a specialist transfer company that accepts a shared manifest.",
  },
  {
    question: "What is the most important question for any vendor?",
    answer:
      "&ldquo;What happens if what you deliver does not match what you promised?&rdquo; This question reveals whether the vendor has a documented remedy or whether they will say &ldquo;everything would be fine.&rdquo; A vendor who cannot answer this question in writing is a vendor who has not thought about failure &mdash; and at a destination wedding 1,500 miles from home, you cannot afford a vendor who has not thought about failure. Get the remedy terms in the written contract, not in a verbal assurance.",
  },
  {
    question: "How do we know if a vendor has Indian-wedding experience?",
    answer:
      "Ask for named families, dated events, and references you can verify. A vendor who has done 30 Indian weddings will be able to name three of them with dates and contact information for the families. A vendor who has done 0 will give you generalities. Ask for photos of actual work from the last 12 months &mdash; not catalog stock photos. Ask if they have worked at your specific resort before; if not, ask if they will coordinate with the resort event manager before signing. The outside-vendor fee is the same whether the vendor has Indian-wedding experience or not, so pay it for a vendor who has the experience.",
  },
  {
    question: "Should we pay vendors in full before the wedding?",
    answer:
      "No. The standard payment schedule for any wedding vendor is a deposit at signing (typically 25 to 50 percent), a milestone payment partway through (typically 25 percent), and the final payment after the wedding (the remaining 25 to 50 percent). A vendor who asks for 100 percent before the wedding has no incentive to deliver on the day. The exception is the resort, which is typically paid in full or near-full before the wedding per the resort&rsquo;s own contract terms &mdash; that is industry-standard for resorts and cannot be negotiated away. For every other vendor, hold the final payment until after the wedding.",
  },
]

const faqSchema = buildFaqSchema(faqs)

const aiSummary = `Before booking any Gujarati wedding vendor, ask for proof of Indian-wedding experience (named families, dated events, photos, references), a documented remedy for non-delivery, a payment schedule with the final payment after the wedding (never 100% upfront), and a written contract. The seven vendor categories that need their own question set are: decorator (mandap design must match resort staging dimensions), DJ (must know Garba and traditional Gujarati wedding songs — most resort in-house DJs do not), mehndi artist (use natural henna only — chemical black henna causes skin reactions), photographer and videographer (must have Gujarati-wedding experience to capture Kanyadaan, Saptapadi, Vidaai), caterer (must confirm Jain and satvik menu versions in writing), airport transfer company (must accept a shared flight manifest for 100+ guest weddings), and Maharaj (must know your family's specific Gujarati community traditions). Every outside vendor carries a resort outside-vendor fee — typically higher for AV than for decor. This guide is written by Mini, founder of CeremonyVerse, from her firsthand family-wedding experience at three Gujarati destination weddings in Mexico.`

const relatedGuides = [
  { href: "/nri-gujarati-wedding-planning-guide/", label: "NRI Gujarati Wedding Planning Guide — the master guide" },
  { href: "/before-signing-indian-wedding-resort-proposal/", label: "5 questions to ask before signing a resort proposal" },
  { href: "/blog/hidden-resort-fees-4-day-indian-wedding-cancun/", label: "Hidden resort fees for a 4-day Indian wedding in Cancún" },
  { href: "/nri-gujarati-wedding-timeline-12-months/", label: "12-month NRI Gujarati wedding planning timeline" },
  { href: "/blog/indian-wedding-outfit-scams-nri-brides/", label: "Indian wedding outfit scams — what NRI brides should know" },
  { href: "/vendors/", label: "CeremonyVerse vendor roster and partners" },
  { href: "/about/mini/", label: "About Mini — the founder behind this checklist" },
]

export default function NriGujaratiWeddingVendorQuestionsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* Hero */}
      <section className="bg-[#1f1f1f] px-6 py-20 text-[#f8f6f2] sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Vendor checklist · written by{" "}
            <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">
              Mini
            </Link>
            , founder of CeremonyVerse
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Questions to Ask Gujarati Wedding Vendors Before You Book
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            A vendor-by-vendor checklist &mdash; the decorator, DJ, mehndi artist, photographer, caterer, transfer company, and Maharaj &mdash; with the specific questions to ask each one before signing, written from firsthand family-wedding experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/?service=mexico&from=vendor-questions"
              className="inline-flex rounded-full bg-[#c5a059] px-7 py-3 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free 30-Minute Consultation
            </Link>
            <Link
              href="/vendors/"
              className="inline-flex rounded-full border border-[#c5a059] px-7 py-3 text-sm font-semibold text-[#c5a059]"
            >
              See our vendor roster
            </Link>
          </div>
        </div>
      </section>

      {/* AI summary */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Quick answer</p>
          <p className="mt-4 text-lg leading-8 text-[#4d403a]">{aiSummary}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-4">
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-[#4d403a]">
            The seven vendor categories below are the ones that make or break a Gujarati destination wedding. The resort itself is a separate document &mdash; see our <Link href="/before-signing-indian-wedding-resort-proposal/" className="text-[#7a6841] underline underline-offset-4">five-question resort proposal checklist</Link>. For each vendor category below, the questions are the ones I ask &mdash; or wish I had asked &mdash; on the family weddings I describe on <Link href="/real-weddings/" className="text-[#7a6841] underline underline-offset-4">/real-weddings/</Link>.
          </p>
        </article>
      </section>

      {/* Vendor category cards */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Vendor by vendor</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">The seven vendor question sets</h2>
          <div className="mt-8 space-y-6">
            {vendors.map((vendor, index) => (
              <article
                key={vendor.name}
                id={`vendor-${index + 1}`}
                className="scroll-mt-24 rounded-2xl border border-[#e6dfd5] bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">
                  Vendor {String(index + 1).padStart(2, "0")} of 07
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">{vendor.name}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{vendor.intro}</p>
                <ol className="mt-5 space-y-3 text-[#4d403a]">
                  {vendor.questions.map((question, qIndex) => (
                    <li key={question} className="flex gap-3 leading-7">
                      <span className="font-semibold text-[#7a6841]">{qIndex + 1}.</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The single most important question callout */}
      <section className="bg-[#f4eee4] px-6 py-12">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">The single most important question</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            &ldquo;What happens if what you deliver does not match what you promised?&rdquo;
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              I learned this question the hard way. On one of the family weddings I describe on /real-weddings/, I asked a vendor (not the resort) for assurance about a specific deliverable. The vendor said, verbally and warmly, &ldquo;everything would be fine.&rdquo; I trusted that. I did not push for the remedy terms in writing. The deliverable did not arrive as promised on the day, and the family had no documented recourse &mdash; only a difficult conversation after the wedding, by which point the damage was done.
            </p>
            <p>
              The lesson I now apply to every vendor conversation: ask the remedy question explicitly, and do not accept a verbal answer. A vendor who has thought about failure will tell you what they do when something goes wrong &mdash; partial refund, re-shoot, credit, replacement, whatever their specific policy is. A vendor who has not thought about failure will say &ldquo;everything would be fine&rdquo; and change the subject. Either response is useful information for you, before you sign.
            </p>
            <p>
              The remedy terms go in the written contract, with the same specificity as the deliverables. &ldquo;If X is not delivered by Y date, vendor will Z within W days.&rdquo; If a vendor will not put the remedy in writing, that vendor does not get the booking. At a destination wedding 1,500 miles from home, on a date that cannot be re-scheduled, the written remedy is the only leverage you have.
            </p>
          </div>
        </article>
      </section>

      {/* FAQ */}
      <section id="faqs" className="px-6 py-12 scroll-mt-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">FAQ</p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-[#e6dfd5] bg-white p-6"
              >
                <h3 className="font-serif text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      {/* Related guides */}
      <section className="bg-[#f4eee4] px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Related guides</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Where to go next</h2>
          <ul className="mt-6 space-y-3">
            {relatedGuides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="text-[#7a6841] underline underline-offset-4">
                  {guide.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7a6841] px-6 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Talk to Mini directly
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Bring me your vendor shortlist &mdash; I will tell you which questions they have not answered
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            The first 30-minute consultation is free. Tell me the vendors you are considering, the resort you have signed with, and the questions that feel unanswered. I will help you translate the answers (or the silence) into a written contract that protects your wedding day.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=vendor-questions"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/nri-gujarati-wedding-planning-guide/"
              className="inline-flex rounded-full border border-white px-8 py-4 text-sm font-semibold text-white"
            >
              Read the master planning guide
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/75">
            Written by <Link href="/about/mini/" className="underline">Mini</Link>, founder of CeremonyVerse &middot; See <Link href="/real-weddings/" className="underline">the three family weddings behind this checklist</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
