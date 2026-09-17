import Link from "next/link"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/nri-gujarati-wedding-rituals-explained/",
  title: "Gujarati Wedding Rituals Explained for NRI Families",
  description:
    "A ceremony-by-ceremony explanation of Gujarati Hindu wedding rituals — Ganesh Puja, Mehndi, Haldi, Pithi, Baraat, Kanyadaan, Saptapadi, Vidaai — written for NRI families planning a destination wedding.",
  keywords: [
    "Gujarati wedding rituals explained",
    "Gujarati Hindu wedding ceremony steps",
    "Gujarati wedding traditions for NRI",
    "Gujarati baraat kanyadaan saptapadi",
    "Gujarati wedding ceremony order",
  ],
  publishedTime: "2026-09-16",
  authorName: "Mini",
  ogType: "article",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Guides", url: "/blog/" },
  { name: "Gujarati Wedding Rituals Explained", url: "/nri-gujarati-wedding-rituals-explained/" },
])

const ceremonies = [
  {
    sanskrit: "Ganesh Puja",
    english: "Invoking Ganesha before any other ritual begins",
    timing: "Morning of the wedding day, before the Baraat",
    summary:
      "Every Hindu wedding ceremony begins with a prayer to Lord Ganesha, the remover of obstacles. The Ganesh Puja is performed by the Maharaj with the couple&rsquo;s immediate family present, and it formally opens the wedding-day rituals.",
    detail:
      "At a destination wedding, the Ganesh Puja is typically done in the bride&rsquo;s family suite or a small private room at the resort, not in the main event space. It takes 20 to 40 minutes. The family brings a small murti of Ganesha from home (packed in carry-on, never checked), and the Maharaj supplies the rest of the puja thali. Confirm with the resort that a small fire (havan) is permitted indoors &mdash; some resorts require an outdoor location for any open-flame ritual, which changes the logistics of the morning.",
  },
  {
    sanskrit: "Mehndi",
    english: "Henna application for the bride and female family",
    timing: "Thursday evening before the wedding",
    summary:
      "The Mehndi ceremony is the first event of the wedding weekend. A mehndi artist applies intricate henna designs to the bride&rsquo;s hands and feet, and to the hands of female family members and guests. It is both a ritual and a social event &mdash; music, food, and conversation run alongside the application.",
    detail:
      "At a destination resort, the Mehndi is typically held in a separate event space from the welcome dinner, so guests can move between the two. It runs long &mdash; most Gujarati Mehndi events I have attended go past midnight &mdash; which means the resort&rsquo;s event-space curfew must be confirmed in writing before you sign the contract. Use only natural henna, never chemical black henna, which can cause skin reactions. The bride&rsquo;s mehndi is the most detailed and takes 4 to 6 hours; book the mehndi artist for the full evening.",
  },
  {
    sanskrit: "Haldi and Pithi",
    english: "Turmeric application to bless and purify the couple",
    timing: "Friday morning before the Saturday wedding",
    summary:
      "The Haldi and Pithi are turmeric ceremonies performed separately at the bride&rsquo;s and groom&rsquo;s sides. A paste of turmeric, oil, and sometimes chickpea flour is applied to the bride&rsquo;s and groom&rsquo;s skin by family members, symbolizing blessing, purification, and the glow of the wedding day.",
    detail:
      "The Haldi is the bride&rsquo;s family&rsquo;s ceremony; the Pithi is the groom&rsquo;s family&rsquo;s ceremony. Some Gujarati families hold them at the same time on Friday morning in two separate resort spaces; others combine them. The single most important logistical detail is the cleanup &mdash; turmeric stains pool decks, white marble, and resort linens, and the cleanup is a real line item in the resort proposal. Confirm the turmeric cleanup fee in writing at month 10, not at checkout. The Haldi needs an outdoor space with shade and a wash-up area for guests.",
  },
  {
    sanskrit: "Sangeet and Garba",
    english: "Music and dance evening &mdash; the social highlight",
    timing: "Friday evening before the wedding",
    summary:
      "The Sangeet and Garba night is the social highlight of the wedding weekend. The Garba is a traditional Gujarati folk dance performed in a circle with sticks (dandiya) or hand claps; the Sangeet is the broader program of choreographed family performances, music, and dinner.",
    detail:
      "A DJ who knows Garba and traditional Gujarati wedding songs is non-negotiable &mdash; most resort in-house DJs do not. The Garba is performed in a circle, which means the event space needs a clear center with no tables or pillars. The Sangeet program is typically 90 to 120 minutes of family performances followed by open dancing. Plan the AV requirements (DJ, lighting, microphones for toasts, video recording) and confirm the resort&rsquo;s outside-vendor fee for AV &mdash; it is typically higher than the fee for decor.",
  },
  {
    sanskrit: "Baraat",
    english: "The groom&rsquo;s procession to the mandap",
    timing: "Saturday afternoon, before the wedding ceremony",
    summary:
      "The Baraat is the groom&rsquo;s procession from a starting point (typically the resort lobby) to the mandap where the wedding ceremony will be held. The groom arrives on a horse (traditionally a mare), accompanied by his family dancing to a live dhol drummer or a mobile DJ setup.",
    detail:
      "At a destination resort, the Baraat route needs to be walked in advance with the event manager. Confirm the route does not trip over the breakfast buffet, the pool deck, or another wedding&rsquo;s event space. The horse must be trained for noise &mdash; dhol drums and firecrackers are loud, and a horse that has not been conditioned will bolt. Confirm the noise plan with the resort, especially if other guests are on property. The Baraat typically takes 45 to 90 minutes from start to arrival at the mandap.",
  },
  {
    sanskrit: "Kanyadaan",
    english: "Giving away the bride",
    timing: "Within the wedding ceremony at the mandap",
    summary:
      "Kanyadaan is the ritual in which the bride&rsquo;s father (or the eldest male relative performing the role) gives the bride&rsquo;s hand in marriage to the groom. It is one of the most emotionally charged moments of the ceremony and is considered the father&rsquo;s highest gift.",
    detail:
      "In the Kanyadaan, the bride&rsquo;s father places the bride&rsquo;s right hand in the groom&rsquo;s right hand, and the couple&rsquo;s hands are joined with a sacred thread or flowers. The mother of the bride may pour water or milk over the joined hands as a blessing. The ritual has variations across Gujarati communities &mdash; some families include a small havan, others do not. Confirm the specific Kanyadaan sequence your family follows with the Maharaj before the wedding, and brief the photographer so the moment is captured from the correct angle.",
  },
  {
    sanskrit: "Hastamilap",
    english: "Joining of the hands",
    timing: "Immediately after Kanyadaan, within the ceremony",
    summary:
      "Hastamilap, literally &ldquo;the joining of hands,&rdquo; is the ritual in which the bride&rsquo;s and groom&rsquo;s right hands are formally joined and tied together with a sacred thread. It is the ritual transition from Kanyadaan into the Saptapadi.",
    detail:
      "A piece of cloth or a sacred thread is wrapped around the couple&rsquo;s joined hands, and the Maharaj recites the relevant mantras. Some Gujarati families include a small symbolic ritual at this point &mdash; for example, the groom&rsquo;s sister tying the knot, or the bride&rsquo;s brother adjusting the cloth. The Hastamilap is short &mdash; two to five minutes &mdash; but it is the structural pivot of the ceremony. After Hastamilap, the couple is treated as joined for the Saptapadi.",
  },
  {
    sanskrit: "Saptapadi",
    english: "The seven steps around the sacred fire",
    timing: "The central ritual of the wedding ceremony",
    summary:
      "The Saptapadi &mdash; the seven steps &mdash; is the central ritual of the Hindu wedding ceremony. The couple walks seven circles around the sacred fire (the agni), with each step representing a specific vow: nourishment, strength, prosperity, happiness, progeny, health, and friendship. After the Saptapadi, the couple is considered married in Hindu tradition.",
    detail:
      "The Saptapadi is the moment the marriage is religiously complete. Some communities perform the seven steps as seven full circles of the fire; others perform seven steps forward with the fire alongside. In Gujarati tradition, the bride leads the first steps and the groom leads the later ones, though the specifics vary by family. Confirm the sequence with your Maharaj. The fire must be in a fire-safe container approved by the resort &mdash; this is a non-negotiable staging detail at a destination wedding. Brief the photographer and videographer specifically on the Saptapadi; it is the single most photographed moment of the wedding.",
  },
  {
    sanskrit: "Vidaai",
    english: "The bride&rsquo;s farewell to her family",
    timing: "End of the wedding ceremony, before the reception",
    summary:
      "The Vidaai is the farewell ritual in which the bride leaves her family&rsquo;s home to begin her new life with the groom&rsquo;s family. It is the most emotionally charged moment of the wedding weekend &mdash; the bride says goodbye to her parents and siblings, and the family formally sends her off.",
    detail:
      "At a destination wedding, the Vidaai is typically performed at the end of the ceremony at the mandap, before guests move to the reception. The bride&rsquo;s parents give her a final blessing, often with rice tossed over her head as a symbol of prosperity. There is no single scripted form &mdash; every family handles the Vidaai differently, and the Maharaj will guide it. The Vidaai is the moment most likely to bring the entire wedding party to tears; the photographer should be briefed to capture it from a respectful distance.",
  },
]

const faqs = [
  {
    question: "What is the order of ceremonies?",
    answer:
      "The typical 4-day Gujarati destination wedding sequence is: Thursday Mehndi, Friday morning Haldi and Pithi (separately at the bride&rsquo;s and groom&rsquo;s sides), Friday evening Sangeet and Garba, Saturday Baraat and wedding ceremony (which itself runs Ganesh Puja, Kanyadaan, Hastamilap, Saptapadi, and Vidaai in that order), Saturday evening reception, and Sunday farewell brunch. Every Gujarati family has variations &mdash; confirm your family&rsquo;s specific sequence with your Maharaj before finalizing the resort contract.",
  },
  {
    question: "What is the difference between Haldi and Pithi?",
    answer:
      "The Haldi is the turmeric ceremony held by the bride&rsquo;s family for the bride; the Pithi is the same ceremony held by the groom&rsquo;s family for the groom. Both use a turmeric-based paste applied to the skin as a blessing and purification. Some Gujarati families hold them at the same time on Friday morning in two separate resort spaces; others combine them into a single ceremony. The terms are sometimes used interchangeably, but technically Haldi refers to the bride&rsquo;s side and Pithi to the groom&rsquo;s side.",
  },
  {
    question: "What happens at a Gujarati Baraat?",
    answer:
      "The Baraat is the groom&rsquo;s procession from the resort lobby (or another starting point) to the mandap where the wedding ceremony will be held. The groom arrives on a horse, accompanied by his family dancing to a live dhol drummer or a mobile DJ. The procession typically takes 45 to 90 minutes. At the destination resort, the Baraat route must be walked in advance with the event manager &mdash; confirm it does not cross another event&rsquo;s space, that the horse is trained for noise, and that the noise plan is acceptable to the resort. The bride&rsquo;s family receives the Baraat at the mandap.",
  },
  {
    question: "What is Kanyadaan and who performs it?",
    answer:
      "Kanyadaan is the ritual in which the bride&rsquo;s father (or the eldest male relative performing the role) gives the bride&rsquo;s hand in marriage to the groom. The father places the bride&rsquo;s right hand in the groom&rsquo;s right hand, and the couple&rsquo;s hands are joined. The mother of the bride may pour water or milk over the joined hands as a blessing. Kanyadaan is considered the father&rsquo;s highest gift. If the bride&rsquo;s father is not present, an elder male relative (typically an uncle) performs the role &mdash; confirm with your Maharaj who will perform it and brief the photographer.",
  },
  {
    question: "What is Saptapadi?",
    answer:
      "Saptapadi, the seven steps, is the central ritual of the Hindu wedding ceremony. The couple walks seven circles around the sacred fire (the agni), with each step representing a vow: nourishment, strength, prosperity, happiness, progeny, health, and friendship. After the Saptapadi, the couple is considered married in Hindu tradition. Some communities perform seven full circles of the fire; others perform seven steps forward. In Gujarati tradition, the bride typically leads the first steps and the groom leads the later ones, though the specifics vary by family.",
  },
  {
    question: "Is the religious ceremony a legal marriage in the USA or Canada?",
    answer:
      "No. A religious Hindu ceremony performed at a Mexico resort (or at any destination outside the USA or Canada) is not automatically a legally recognized marriage in the United States or Canada. To be legally married, you need either a civil ceremony in your home US state or Canadian province (typically at city hall, before or after the destination wedding), or a civil ceremony in Mexico performed by a Mexican civil judge that complies with Mexican civil marriage law. Most NRI families do the legal civil ceremony at home before the destination wedding for simplicity and treat the Mexico ceremony as the religious and social celebration. See our legal requirements guide for the document-by-document path.",
  },
]

const faqSchema = buildFaqSchema(faqs)

const aiSummary = `A Gujarati Hindu wedding ceremony follows a sequence of rituals across a 4-day weekend: Thursday Mehndi (henna for bride and female family), Friday Haldi and Pithi (turmeric ceremony separately at the bride's and groom's sides), Friday Sangeet and Garba (music and dance evening), Saturday Baraat (groom's procession to the mandap), the wedding ceremony itself (Ganesh Puja, Kanyadaan, Hastamilap, Saptapadi, Vidaai), Saturday evening reception, and Sunday farewell brunch. The Saptapadi — seven steps around the sacred fire — is the central ritual and the moment the couple is considered married in Hindu tradition. The religious ceremony at a destination resort is not automatically a legal marriage in the USA or Canada; a separate civil ceremony is required for legal recognition. Every Gujarati family has its own variation — confirm your family's specific sequence with the officiant (Maharaj) before finalizing the resort contract. This guide is written by Mini, founder of CeremonyVerse, from her firsthand family-wedding experience at three Gujarati destination weddings in Mexico.`

const relatedGuides = [
  { href: "/nri-gujarati-wedding-planning-guide/", label: "NRI Gujarati Wedding Planning Guide — the master guide" },
  { href: "/blog/gujarati-wedding-outfit-guide/", label: "Gujarati wedding outfit guide — ceremony by ceremony" },
  { href: "/gujarati-wedding-outfits-usa/", label: "Gujarati wedding outfits USA" },
  { href: "/blog/indian-wedding-catering-mexico-all-inclusive-resorts/", label: "Indian wedding catering at Mexico all-inclusive resorts" },
  { href: "/nri-gujarati-wedding-legal-requirements-mexico/", label: "Legal requirements for a Gujarati wedding in Mexico" },
  { href: "/nri-gujarati-wedding-timeline-12-months/", label: "12-month NRI Gujarati wedding planning timeline" },
  { href: "/about/mini/", label: "About Mini — the founder behind this guide" },
]

export default function NriGujaratiWeddingRitualsExplainedPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* Hero */}
      <section className="bg-[#1f1f1f] px-6 py-20 text-[#f8f6f2] sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Ceremonies explained · written by{" "}
            <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">
              Mini
            </Link>
            , founder of CeremonyVerse
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Gujarati Wedding Rituals Explained for NRI Families
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            A ceremony-by-ceremony explanation of the rituals in a Gujarati Hindu wedding &mdash; what each ritual is, when it happens, what it means, and what to confirm with your Maharaj before the resort contract is signed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/?service=mexico&from=rituals-explained"
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

      {/* In this guide nav */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#e6dfd5] bg-white p-7">
          <h2 className="font-serif text-2xl font-semibold">In this guide</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {ceremonies.map((ceremony, index) => (
              <li key={ceremony.sanskrit}>
                <a
                  href={`#ceremony-${index + 1}`}
                  className="text-[#7a6841] underline underline-offset-4"
                >
                  {ceremony.sanskrit}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-4">
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-[#4d403a]">
            I have attended three family Gujarati destination weddings in Mexico and organized many more through CeremonyVerse. Every one of them ran the same broad sequence &mdash; Mehndi, Haldi, Sangeet, Baraat, wedding ceremony, reception, farewell brunch &mdash; and every one of them had family-specific variations on the details. The sequence below is the framework I use when I sit with a couple and their parents to walk through the weekend. Treat it as a starting point, not a script. Your Maharaj has the final word on what your family&rsquo;s specific version looks like.
          </p>
        </article>
      </section>

      {/* Ceremony cards */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">The nine rituals</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Ceremony by ceremony</h2>
          <div className="mt-8 space-y-6">
            {ceremonies.map((ceremony, index) => (
              <article
                key={ceremony.sanskrit}
                id={`ceremony-${index + 1}`}
                className="scroll-mt-24 rounded-2xl border border-[#e6dfd5] bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">
                  Ritual {String(index + 1).padStart(2, "0")} of 09 · {ceremony.timing}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                  {ceremony.sanskrit}
                </h3>
                <p className="mt-1 text-base italic text-[#5e4a40]">{ceremony.english}</p>
                <div className="mt-4 space-y-3 text-[#4d403a]">
                  <p className="leading-7">{ceremony.summary}</p>
                  <p className="leading-7">{ceremony.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Family variation callout */}
      <section className="bg-[#f4eee4] px-6 py-12">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">A note on family variation</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Every Gujarati family has its own version</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              The nine rituals above are the framework, not the script. Gujarati communities &mdash; Patel, Lohana, Brahmin, Jain-Gujarati, and others &mdash; have variations on the specifics of each ritual. Some families include an additional Antarpat ritual before the Kanyadaan. Some perform the Saptapadi as seven full circles of the fire; others perform seven steps forward. Some families hold the Haldi and Pithi simultaneously; others stagger them by an hour so both sides can attend both.
            </p>
            <p>
              I am not the authority on which version is correct &mdash; your family and your Maharaj are. The role of the family-side planner is to make sure the resort contract and the on-site execution accommodate whatever your specific sequence is. Confirm with your Maharaj at month 7 (when you book the officiant) which rituals your family performs, in what order, and with what specific staging requirements. Then confirm in writing with the resort that the venue, the fire-safety plan, the noise plan, and the cleanup fees all match.
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
            Tell me which rituals your family follows &mdash; I will help you match them to the resort
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            The first 30-minute consultation is free. Bring your Maharaj&rsquo;s ceremony outline, your resort shortlist, and the questions about staging, fire safety, noise, and cleanup that are not yet answered. I will help you translate the ceremony sequence into the resort contract.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=rituals-explained"
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
