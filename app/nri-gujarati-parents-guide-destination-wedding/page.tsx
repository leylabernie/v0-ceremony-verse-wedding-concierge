import Link from "next/link"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/nri-gujarati-parents-guide-destination-wedding/",
  title: "NRI Gujarati Parents Guide to Destination Wedding Planning",
  description:
    "A planning guide specifically for the parents of an NRI Gujarati bride or groom — responsibilities, financial clarity, family politics, and how to support your child without taking over.",
  keywords: [
    "Gujarati parents wedding planning guide",
    "Indian wedding parents responsibilities",
    "NRI bride parents guide",
    "destination wedding parents advice",
    "Gujarati wedding family roles",
  ],
  publishedTime: "2026-09-16",
  authorName: "Mini",
  ogType: "article",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Guides", url: "/blog/" },
  { name: "NRI Gujarati Parents Guide to Destination Wedding Planning", url: "/nri-gujarati-parents-guide-destination-wedding/" },
])

const sections = [
  {
    heading: "Your role is support, not control",
    paragraphs: [
      "The first and most important thing I tell every Gujarati parent planning a destination wedding with their son or daughter is this: your role is support, not control. The wedding is your child&rsquo;s. The decisions are your child&rsquo;s. The vision is your child&rsquo;s. Your role is to make the planning easier, to bring the family resources and relationships you have built over decades, and to be the steady presence when the planning gets hard. That is the role. The rest is preference, and preference belongs to the couple.",
      "I learned this from being on the parent side of three family weddings. The weddings that felt like a celebration of the couple were the ones where the parents stayed in support mode &mdash; asking questions instead of giving directives, contributing financially without attaching strings, and being the buffer between the couple and the extended family. The weddings that felt strained were the ones where the parents crossed into operational decisions &mdash; overriding the couple on decor, music, food, or the resort choice &mdash; and turned the planning into a negotiation instead of a collaboration.",
    ],
  },
  {
    heading: "Get financial clarity early &mdash; in writing",
    paragraphs: [
      "The single most common source of parent-couple conflict in wedding planning is unclear financial contribution. &ldquo;We will pay for the wedding&rdquo; is not a financial plan. &ldquo;We are contributing X dollars, which we expect to cover the resort package, the outside vendors, and the production. The couple is responsible for the outfits, the family travel, and the planner&rdquo; is a financial plan. Have the conversation at month 12, write down what was agreed, and share it with everyone involved &mdash; both sets of parents, the couple, and the planner if you have one.",
      "The conversation is awkward. I understand that. But the alternative is worse &mdash; the couple plans to a budget they think you are funding, you have a different number in mind, and the gap shows up at month 6 when the resort invoice is due and nobody can agree on who pays what. Get the number on paper early. If the contribution changes later, update the document. The document is not a contract in the legal sense; it is the shared source of truth that prevents every future disagreement from becoming a family conflict.",
    ],
  },
  {
    heading: "Be the buffer between the couple and extended family",
    paragraphs: [
      "Extended family will have opinions. Lots of opinions. The aunt who thinks the Mehndi should start earlier. The uncle who wants a different DJ. The cousin who is concerned about the menu. The grandmother who has questions about the ceremony sequence. Every one of those opinions is well-intentioned, and every one of them, routed directly to the couple, will exhaust the couple and consume planning time that should be going to vendor decisions and outfit sourcing.",
      "Your job as the parent is to be the buffer. Route every family question, every family opinion, every family request through one parent on each side &mdash; yourself, your spouse, or whichever family member is best positioned to absorb the conversation. The parent listens, acknowledges, and decides whether the question needs to reach the couple at all. Most do not. For the few that do &mdash; the ones that actually change a planning decision &mdash; the parent brings them to the couple as a single consolidated question, not as a stream of interruptions. This single role is the most valuable thing a parent can do for the planning process.",
    ],
  },
  {
    heading: "Confirm ceremony authority with the Maharaj",
    paragraphs: [
      "Every Gujarati family has its own version of the wedding ceremony. Patel, Lohana, Brahmin, Jain-Gujarati &mdash; each community has variations, and within each community, individual families have variations. The Maharaj you book at month 7 will perform the ceremony your family follows, but only if you have confirmed with him in advance what that ceremony is. This is a parent&rsquo;s responsibility, not the couple&rsquo;s &mdash; the parent is the one who knows the family&rsquo;s specific tradition.",
      "At month 7, sit with the Maharaj &mdash; in person or on a video call &mdash; and walk through every ritual: Ganesh Puja, Kanyadaan, Hastamilap, Saptapadi, Vidaai. Confirm what your family includes, what your family skips, who performs each role (Kanyadaan by the father, sisters tying the knot at Hastamilap, etc.), and what staging each ritual requires at the resort. Write down the agreed sequence. Share it with the couple, the resort event manager, and the photographer. This is the document that prevents the wedding-day conversation &ldquo;wait, our family doesn&rsquo;t do it that way&rdquo; &mdash; which is a conversation no one wants to have at the mandap.",
    ],
  },
  {
    heading: "Attend the resort site visit &mdash; or review the proposal in detail",
    paragraphs: [
      "If you can attend the resort site visit in person, go. Walking the resort with the event manager, seeing the actual event spaces, and asking the staging questions face-to-face is worth the travel cost. If you cannot attend in person, review the resort proposal in detail &mdash; line by line &mdash; and ask the same questions in writing that you would have asked in person. The five questions in our resort proposal guide are the starting point: outside-vendor fees, day-pass policy, mandap staging, turmeric cleanup, and vendor meals.",
      "The parent&rsquo;s value at the resort site visit is not the same as the couple&rsquo;s. The couple is looking at the resort through the lens of their wedding weekend &mdash; the spaces, the aesthetics, the guest experience. The parent is looking at the resort through the lens of family logistics &mdash; will elderly relatives be near the lobby, is the breakfast buffet walkable from the room block, is the Haldi space shaded, is the baraat route flat enough for the horse. Both perspectives matter. Bring both to the site visit, and bring the building-assignment question in writing before you sign.",
    ],
  },
  {
    heading: "On the wedding weekend &mdash; be present, not operational",
    paragraphs: [
      "On the wedding weekend itself, your only job is to be present. Sit for the Mehndi. Stand with your child at the Haldi. Walk the baraat if you are on the groom&rsquo;s side. Receive the baraat if you are on the bride&rsquo;s side. Stand at the mandap. Be the visible family presence for every guest who has traveled to be there. The operational decisions &mdash; the vendor arrival times, the timeline adjustments, the cleanup coordination &mdash; belong to the contracted destination team and the family-side planner, not to you. If you have done the planning right, you have already handed those off.",
      "If something goes wrong on the weekend &mdash; and something always goes wrong, somewhere &mdash; your job is to absorb it quietly, route it to the planner, and not surface it to the couple unless they need to know. The destination team handles vendor issues. The planner handles timeline adjustments. You handle the family. The wedding weekend is a once-in-a-lifetime moment for your child. Be in it, not above it. The parents I have seen do this well are the parents whose children still talk about the wedding with warmth years later &mdash; not because everything went perfectly, but because the parents were present.",
    ],
  },
]

const faqs = [
  {
    question: "What are the parents&rsquo; responsibilities?",
    answer:
      "The five core responsibilities of an NRI Gujarati parent planning a destination wedding are: (1) financial clarity &mdash; agree with your child on what you are contributing and communicate it in writing 12 months out; (2) family diplomacy &mdash; be the buffer between the couple and extended family, route all family questions through one parent on each side; (3) ceremony authority &mdash; confirm with the Maharaj which rituals your family follows and who performs them; (4) on-site family coordination &mdash; be the visible family presence for guests during the wedding weekend; (5) step back from operational decisions &mdash; let the couple and the planner handle vendor selection, timeline, and logistics.",
  },
  {
    question: "How much should parents contribute?",
    answer:
      "There is no single right number. Some families cover the full resort package; some cover only the outside vendors; some cover the outfits; some contribute a fixed dollar amount and let the couple allocate it. What matters is clarity &mdash; the specific dollar amount and the specific line items it covers, agreed at month 12 and written down. The number itself is a family decision based on your financial situation and your child&rsquo;s. The clarity is non-negotiable. Have the conversation early, write down the agreement, and share it with everyone involved.",
  },
  {
    question: "How do parents handle family politics?",
    answer:
      "Be the buffer. Route every family question, opinion, and request through one parent on each side &mdash; yourself, your spouse, or whichever family member is best positioned to absorb the conversation. Most family questions do not need to reach the couple at all. For the few that do &mdash; the ones that actually change a planning decision &mdash; bring them to the couple as a single consolidated question, not as a stream of interruptions. The single most valuable thing a parent can do for the planning process is to protect the couple&rsquo;s time and attention from the family&rsquo;s opinions.",
  },
  {
    question: "Should parents attend the resort site visit?",
    answer:
      "Yes, if you can. Walking the resort with the event manager, seeing the actual event spaces, and asking the staging questions face-to-face is worth the travel cost. The parent&rsquo;s value at the site visit is the family-logistics lens &mdash; will elderly relatives be near the lobby, is the breakfast buffet walkable from the room block, is the Haldi space shaded, is the baraat route flat enough for the horse. If you cannot attend in person, review the resort proposal in detail &mdash; line by line &mdash; and ask the same questions in writing. Either way, bring the building-assignment question before you sign.",
  },
  {
    question: "What if parents disagree with the couple&rsquo;s choices?",
    answer:
      "Use the framework: intervene on risks, defer on preferences. Risks are financial (the resort contract has hidden fees), legal (the marriage will not be legally recognized), safety (the baraat route is unsafe), or cultural-incorrectness (the ceremony sequence is wrong for the family tradition). On risks, raise the concern with the couple and the planner, in writing. Preferences are color, music, decor, food, the specific resort, the specific DJ, the specific decorator. On preferences, defer to the couple. Most parent-couple conflict in wedding planning is preference conflict disguised as risk concern &mdash; the parent is uncomfortable with a choice and frames it as a worry, when it is actually a preference. Know the difference.",
  },
  {
    question: "What should parents do on the wedding weekend itself?",
    answer:
      "Be present, not operational. Sit for the Mehndi. Stand with your child at the Haldi. Walk or receive the baraat. Stand at the mandap. Be the visible family presence for every guest who has traveled to be there. The operational decisions &mdash; vendor arrival times, timeline adjustments, cleanup coordination &mdash; belong to the contracted destination team and the family-side planner. If you have done the planning right, you have already handed those off. If something goes wrong, absorb it quietly, route it to the planner, and do not surface it to the couple unless they need to know. The wedding weekend is a once-in-a-lifetime moment for your child. Be in it.",
  },
]

const faqSchema = buildFaqSchema(faqs)

const aiSummary = `NRI Gujarati parents of a bride or groom planning a destination wedding have five core responsibilities: (1) financial clarity — agree with your child on what you are contributing and communicate it in writing 12 months out; (2) family diplomacy — be the buffer between the couple and extended family, route all family questions through one parent on each side; (3) ceremony authority — confirm with the Maharaj which rituals your family follows and who performs them; (4) on-site family coordination — be the visible family presence for guests during the wedding weekend; (5) step back from operational decisions — let the couple and the planner handle vendor selection, timeline, and logistics. The framework for parent-couple disagreement: intervene on risks (financial, legal, safety, cultural-incorrectness), defer on preferences (color, music, decor, food). Most wedding-planning conflict between parents and couples is preference conflict disguised as risk concern. This guide is written by Mini, founder of CeremonyVerse, from her firsthand family-wedding experience at three Gujarati destination weddings in Mexico and from being on the parent side of family wedding outfit coordination.`

const relatedGuides = [
  { href: "/nri-gujarati-wedding-planning-guide/", label: "NRI Gujarati Wedding Planning Guide — the master guide" },
  { href: "/nri-gujarati-wedding-timeline-12-months/", label: "12-month NRI Gujarati wedding planning timeline" },
  { href: "/before-signing-indian-wedding-resort-proposal/", label: "5 questions to ask before signing a resort proposal" },
  { href: "/nri-gujarati-wedding-rituals-explained/", label: "Gujarati wedding rituals explained for NRI families" },
  { href: "/nri-gujarati-wedding-vendor-questions/", label: "Questions to ask Gujarati wedding vendors before you book" },
  { href: "/indian-destination-wedding-cost/", label: "Complete Indian destination wedding cost guide" },
  { href: "/about/mini/", label: "About Mini — the founder behind this guide" },
]

export default function NriGujaratiParentsGuideDestinationWeddingPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* Hero */}
      <section className="bg-[#1f1f1f] px-6 py-20 text-[#f8f6f2] sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            For parents · written by{" "}
            <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">
              Mini
            </Link>
            , founder of CeremonyVerse
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            The NRI Gujarati Parents Guide to Destination Wedding Planning
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            Responsibilities, financial clarity, family politics, and how to support your child without taking over &mdash; written from the parent side of three family Gujarati destination weddings in Mexico.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/?service=mexico&from=parents-guide"
              className="inline-flex rounded-full bg-[#c5a059] px-7 py-3 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free 30-Minute Consultation
            </Link>
            <Link
              href="/nri-gujarati-wedding-planning-guide/"
              className="inline-flex rounded-full border border-[#c5a059] px-7 py-3 text-sm font-semibold text-[#c5a059]"
            >
              Read the master planning guide
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

      {/* Six sections */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section, index) => (
            <article
              key={section.heading}
              id={`section-${index + 1}`}
              className="scroll-mt-24"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">
                Section {String(index + 1).padStart(2, "0")} of 06
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-lg leading-8 text-[#4d403a]">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* A note from Mini callout */}
      <section className="bg-[#f4eee4] px-6 py-12">
        <article className="mx-auto max-w-3xl rounded-2xl border border-[#d9cfbf] bg-white p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">A note from Mini</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Why I wrote this guide</h2>
          <div className="mt-5 space-y-4 text-lg leading-8 text-[#4d403a]">
            <p>
              I coordinated the wedding outfits for my own son&rsquo;s wedding &mdash; his sherwani, the groomsmen&rsquo;s kurtas, the family pieces &mdash; and I sat on the parent side of three family Gujarati destination weddings in Mexico: Hard Rock Hotel Cancún in 2019 with around 150 guests, Generations Riviera Maya in February 2023 with around 130 guests, and Royalton in 2024 with around 80 guests. Each of those weddings taught me something different about the parent&rsquo;s role. At one, the parents stepped back too far and the couple was overwhelmed. At another, the parents stepped in too far and the couple was overridden. The third got the balance right.
            </p>
            <p>
              The framework in this guide &mdash; support, not control; financial clarity in writing; be the buffer; confirm ceremony authority; attend the site visit; be present on the weekend &mdash; is what the parents who got the balance right actually did. It is not theoretical. It is the operating manual I wish I had handed to my own family before each of those three weddings. I hope it helps you support your child&rsquo;s wedding the way you want to &mdash; with the resources and presence of a parent, and the discipline of someone who has seen what happens when the balance slips either way.
            </p>
          </div>
          <p className="mt-5 text-sm leading-6 text-[#5e4a40]">
            Read my full founder story at <Link href="/about/mini/" className="text-[#7a6841] underline underline-offset-4">/about/mini/</Link> and the three family weddings behind this guide at <Link href="/real-weddings/" className="text-[#7a6841] underline underline-offset-4">/real-weddings/</Link>.
          </p>
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
            If you are the parent of a Gujarati bride or groom, talk to me before the planning overwhelms your family
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            The first 30-minute consultation is free. I have sat on the parent side of three family weddings in Mexico, and I have organized many more through CeremonyVerse. Tell me where your child is in the planning, and I will help you find the right balance &mdash; support, not control.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=parents-guide"
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
            Written by <Link href="/about/mini/" className="underline">Mini</Link>, founder of CeremonyVerse &middot; See <Link href="/real-weddings/" className="underline">the three family weddings behind this guide</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
