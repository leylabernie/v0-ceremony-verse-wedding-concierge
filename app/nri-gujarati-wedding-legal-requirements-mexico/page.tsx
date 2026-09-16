import Link from "next/link"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/nri-gujarati-wedding-legal-requirements-mexico/",
  title: "Legal Requirements for a Gujarati Wedding in Mexico",
  description:
    "Civil vs religious ceremony in Mexico, document requirements, blood tests, witnesses, translation, apostille, and how to ensure your destination wedding is legally recognized in the USA or Canada.",
  keywords: [
    "legal requirements Indian wedding Mexico",
    "get married legally in Mexico",
    "Mexico civil wedding requirements",
    "destination wedding legal USA recognition",
    "Mexico marriage license documents",
  ],
  publishedTime: "2026-09-16",
  authorName: "Mini",
  ogType: "article",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Guides", url: "/blog/" },
  { name: "Legal Requirements for a Gujarati Wedding in Mexico", url: "/nri-gujarati-wedding-legal-requirements-mexico/" },
])

const documents = [
  {
    name: "Valid passports",
    detail:
      "Both the bride and groom must have valid passports at the time of the civil ceremony. Carry the physical passport &mdash; not a photocopy or a digital image. Passports should be valid for at least six months beyond the wedding date.",
  },
  {
    name: "Birth certificates &mdash; apostilled and translated",
    detail:
      "Original or certified birth certificates, apostilled in the country of issuance and translated into Spanish by a Mexican-certified translator. The apostille certifies the document&rsquo;s authenticity for international use; the translation is required by the Registro Civil.",
  },
  {
    name: "Tourist card (FMM)",
    detail:
      "The Forma Migratoria Múltiple (FMM) is the tourist card issued on arrival in Mexico. Keep the stub &mdash; you will need to present it as part of the civil marriage application. Some Mexican states have moved to digital FMMs; confirm the current format with the resort coordinator.",
  },
  {
    name: "Blood test (some Mexican states)",
    detail:
      "Some Mexican states require a blood test (typically for syphilis, HIV, and sometimes rubella) performed in Mexico within a defined window before the civil ceremony. The test must be done at a Mexican-approved clinic; results from a US or Canadian lab are not accepted. Confirm with the resort coordinator whether your state requires it.",
  },
  {
    name: "Four witnesses with valid passports",
    detail:
      "Four witnesses (typically two per side) must be present at the civil ceremony with their valid physical passports. Witnesses cannot be immediate family in some Mexican states &mdash; confirm the local rule with the Registro Civil. Brief the witnesses in advance to bring their physical passports to the ceremony.",
  },
  {
    name: "Divorce decree or death certificate (if applicable)",
    detail:
      "If either party has been previously married, the prior divorce decree or former spouse&rsquo;s death certificate must be apostilled in the country of issuance and translated into Spanish. Some Mexican states impose a waiting period (often 365 days) between a divorce and a new civil marriage &mdash; confirm the local rule.",
  },
  {
    name: "Parental consent (if either party is under 18)",
    detail:
      "If either the bride or groom is under 18 at the time of the civil ceremony, parental consent is required. The consent must be in writing, apostilled in the country of issuance, and translated into Spanish. This is rare for Gujarati destination weddings but is part of Mexican civil marriage law.",
  },
]

const sources = [
  {
    label: "U.S. Embassy in Mexico &mdash; Marriage in Mexico",
    url: "https://mx.usembassy.gov/marriage-in-mexico/",
    note: "Authoritative source on U.S. recognition of Mexican civil marriages, including the apostille process.",
  },
  {
    label: "Government of Canada &mdash; Travel and tourism in Mexico",
    url: "https://travel.gc.ca/destinations/mexico",
    note: "Canadian government guidance for citizens marrying abroad, including Mexico-specific requirements.",
  },
  {
    label: "Quintana Roo Registro Civil",
    url: "https://www.gob.mx/segob",
    note: "State-specific civil registry for Cancún and Riviera Maya weddings. Confirm the current document list and witness rules here.",
  },
  {
    label: "Baja California Sur Registro Civil",
    url: "https://www.gob.mx/segob",
    note: "State-specific civil registry for Los Cabos weddings. Baja California Sur has historically required blood tests &mdash; confirm the current rule.",
  },
  {
    label: "Mexican Apostille &mdash; Secretaría de Gobernación",
    url: "https://www.gob.mx/segob",
    note: "The Mexican government&rsquo;s apostille authority. Use this to confirm the apostille process for your Mexican marriage certificate.",
  },
]

const faqs = [
  {
    question: "Is a religious Hindu ceremony at a Mexico resort legal in the USA or Canada?",
    answer:
      "No. A religious Hindu ceremony performed at a Mexico resort (or at any destination outside the USA or Canada) is not automatically a legally recognized marriage in the United States or Canada. The religious ceremony is recognized within the Hindu tradition and by the family and community, but it does not create a legal marriage under US, Canadian, or Mexican civil law. To be legally married, you need a separate civil ceremony &mdash; either at home in your US state or Canadian province, or in Mexico performed by a Mexican civil judge (Juez del Registro Civil).",
  },
  {
    question: "What documents do we need for a legal civil wedding in Mexico?",
    answer:
      "The standard document set for a legal civil wedding in Mexico is: valid passports for the bride and groom, apostilled and translated birth certificates, the tourist card (FMM) issued on arrival, blood test results (required in some Mexican states), four witnesses with valid physical passports, and (if applicable) an apostilled and translated divorce decree or death certificate. If either party is under 18, parental consent is required. Requirements vary by Mexican state &mdash; confirm the state-specific list with the resort&rsquo;s wedding coordinator or the local Registro Civil before traveling.",
  },
  {
    question: "Do we need a blood test?",
    answer:
      "It depends on the Mexican state where the civil ceremony is performed. Some states &mdash; including historically Baja California Sur (Los Cabos) &mdash; have required blood tests for syphilis, HIV, and sometimes rubella, performed at a Mexican-approved clinic within a defined window before the ceremony. Other states have removed the blood-test requirement or never had one. The blood test must be done in Mexico; results from a US or Canadian lab are not accepted. Confirm the current state-specific rule with the resort coordinator before traveling.",
  },
  {
    question: "How do we get the Mexican marriage certificate recognized?",
    answer:
      "After the civil ceremony, the Mexican Registro Civil issues a marriage certificate. To be recognized in the USA or Canada, the certificate must be apostilled by the Mexican government (Secretaría de Gobernación) and translated into English by a certified translator. The apostilled and translated certificate is then your legal proof of marriage in your home jurisdiction. There is no separate &ldquo;registration&rdquo; step required in the USA or Canada for a Mexican civil marriage that has been apostilled &mdash; the apostilled certificate is the legal document. The apostille process can take 4 to 12 weeks.",
  },
  {
    question: "Civil ceremony at home or in Mexico?",
    answer:
      "For most NRI families, civil at home is the simpler path. The civil ceremony at home (typically at city hall, before or after the destination wedding) is fast, inexpensive, uses your local jurisdiction&rsquo;s familiar document requirements, and produces a marriage certificate in English that is immediately recognized. The destination wedding in Mexico is then the religious and social celebration &mdash; the Mehndi, Haldi, Sangeet, Baraat, ceremony at the mandap, and reception. Path B (civil in Mexico) is the right choice if you specifically want the Mexican civil judge to perform the legal ceremony at the resort, but it carries the document, blood-test, witness, and apostille overhead described in this guide.",
  },
  {
    question: "What if we are both US/Canadian citizens &mdash; do we need to register the marriage back home?",
    answer:
      "If you do the civil ceremony at home (Path A), there is nothing further to register &mdash; the marriage is already legally recorded in your home jurisdiction. If you do the civil ceremony in Mexico (Path B), the apostilled and translated Mexican marriage certificate is your legal proof of marriage in the USA or Canada; there is no separate registration step at a US courthouse or Canadian vital-records office. Keep the apostilled certificate in a safe place &mdash; you will need it for immigration, tax, insurance, and Social Security / pension purposes. Some US states accept a certified translation of the Mexican certificate for name-change purposes; check with your local DMV or Social Security office.",
  },
]

const faqSchema = buildFaqSchema(faqs)

const aiSummary = `A religious Hindu ceremony at a Mexico resort is not automatically a legal marriage in the USA or Canada. To be legally married, you need either (1) a civil ceremony in your home US state or Canadian province (typically at city hall, before or after the destination wedding), or (2) a civil ceremony in Mexico performed by a Mexican civil judge (Juez del Registro Civil) that complies with Mexican civil marriage law. For a legal Mexico civil wedding, you need valid passports, apostilled and translated birth certificates, a tourist card (FMM), blood test results in some Mexican states, and four witnesses with valid passports. The resulting Mexican marriage certificate must be apostilled and translated into English to be recognized in the USA or Canada. Most NRI families do the legal civil ceremony at home before the destination wedding for simplicity, and treat the Mexico ceremony as the religious and social celebration. Requirements vary by Mexican state — confirm the state-specific list with the resort's wedding coordinator or the local Registro Civil before traveling. This guide is written by Mini, founder of CeremonyVerse, and is planning information, not legal advice.`

const relatedGuides = [
  { href: "/nri-gujarati-wedding-planning-guide/", label: "NRI Gujarati Wedding Planning Guide — the master guide" },
  { href: "/nri-gujarati-wedding-rituals-explained/", label: "Gujarati wedding rituals explained for NRI families" },
  { href: "/destinations/cancun-indian-wedding/", label: "Cancún Indian wedding destination guide" },
  { href: "/destinations/los-cabos-indian-wedding/", label: "Los Cabos Indian wedding destination guide" },
  { href: "/destinations/punta-cana-indian-wedding/", label: "Punta Cana Indian wedding destination guide" },
  { href: "/nri-gujarati-wedding-timeline-12-months/", label: "12-month NRI Gujarati wedding planning timeline" },
  { href: "/about/mini/", label: "About Mini — the founder behind this guide" },
]

export default function NriGujaratiWeddingLegalRequirementsMexicoPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* Hero */}
      <section className="bg-[#1f1f1f] px-6 py-20 text-[#f8f6f2] sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Legal guide · written by{" "}
            <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">
              Mini
            </Link>
            , founder of CeremonyVerse
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Legal Requirements for a Gujarati Wedding in Mexico
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            Civil versus religious ceremony, document requirements, blood tests, witnesses, translation, and apostille &mdash; and how to ensure your destination wedding is legally recognized in the USA or Canada.
          </p>
          <p className="mt-5 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm leading-6 text-white/80">
            <strong className="text-[#c5a059]">Disclaimer:</strong> I am a wedding planner, not an attorney. Confirm current requirements with the relevant embassy, the resort&rsquo;s wedding coordinator, and the local Registro Civil before traveling. Mexican civil marriage law and state-specific requirements change &mdash; this guide is planning information, not legal advice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/?service=mexico&from=legal-requirements"
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

      {/* Two paths */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Two paths to a legal marriage</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Choose your legal ceremony path</h2>
          <p className="mt-5 text-lg leading-8 text-[#4d403a]">
            The religious Hindu ceremony at the Mexico resort &mdash; the Ganesh Puja, Kanyadaan, Saptapadi, Vidaai &mdash; is the heart of the wedding. But it is not, by itself, a legal marriage in the USA or Canada. To be legally married, you choose one of two civil ceremony paths. The destination wedding itself stays the same either way &mdash; the choice is only about where the legal civil ceremony happens.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#d9cfbf] bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Path A &mdash; recommended for most families</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold">Civil ceremony at home</h3>
              <p className="mt-3 leading-7 text-[#4d403a]">
                Get legally married at your local city hall or with a registered officiant in your home US state or Canadian province, before or after the destination wedding. The Mexico resort ceremony is then the religious and social celebration.
              </p>
              <ul className="mt-4 space-y-2 text-[#4d403a]">
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>Familiar local document requirements &mdash; no apostille, no translation</span></li>
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>Marriage certificate issued in English, immediately recognized</span></li>
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>No blood test, no witness passport logistics</span></li>
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>Typically a 15-minute ceremony at city hall</span></li>
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>Lowest total cost and shortest timeline</span></li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[#d9cfbf] bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Path B &mdash; for families who want the legal ceremony at the resort</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold">Civil ceremony in Mexico</h3>
              <p className="mt-3 leading-7 text-[#4d403a]">
                A Mexican civil judge (Juez del Registro Civil) performs the legal civil ceremony at the resort, typically the day before or the day of the religious ceremony. The Mexican marriage certificate is then apostilled and translated for US or Canadian recognition.
              </p>
              <ul className="mt-4 space-y-2 text-[#4d403a]">
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>Mexican civil judge performs the legal ceremony at the resort</span></li>
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>Requires apostilled and translated birth certificates in advance</span></li>
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>Blood test required in some Mexican states (Cancún varies, Los Cabos historically yes)</span></li>
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>Four witnesses with physical passports required</span></li>
                <li className="flex gap-2 leading-7"><span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" /><span>Apostille process for the marriage certificate takes 4 to 12 weeks</span></li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Documents table for Path B */}
      <section className="bg-[#f4eee4] px-6 py-12">
        <article className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Path B documents</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">The seven documents for a legal Mexico civil wedding</h2>
          <p className="mt-5 text-lg leading-8 text-[#4d403a]">
            If you choose Path B, the document set below is the standard for a Mexican civil marriage. Requirements vary by state &mdash; confirm the state-specific list with the resort&rsquo;s wedding coordinator or the local Registro Civil before traveling.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#d9cfbf] bg-white">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-[#efe8de] text-[#5e4a40]">
                <tr>
                  <th className="px-5 py-4 font-semibold">Document</th>
                  <th className="px-5 py-4 font-semibold">What to confirm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6dfd5] text-[#4d403a]">
                {documents.map((doc) => (
                  <tr key={doc.name}>
                    <td className="px-5 py-4 font-semibold align-top">{doc.name}</td>
                    <td className="px-5 py-4 leading-7">{doc.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      {/* Apostille process */}
      <section className="px-6 py-12">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">The apostille process</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Why the apostille takes 4 to 12 weeks</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              An apostille is an international certification that authenticates the origin of a public document for use in another country. Mexico and the United States are both parties to the 1961 Hague Apostille Convention, which means a Mexican apostille on a Mexican marriage certificate is recognized in the USA and Canada without further legalization. The apostille is what makes the Mexican marriage legally binding back home.
            </p>
            <p>
              After the civil ceremony, the Mexican Registro Civil issues the marriage certificate. The certificate is then sent (by the resort&rsquo;s coordinator or by your Mexican attorney) to the Secretaría de Gobernación for apostille. The apostille process currently takes 4 to 12 weeks, depending on backlog. After the apostille is issued, the certificate is translated into English by a certified translator. The final document &mdash; apostilled Mexican certificate plus certified English translation &mdash; is your legal proof of marriage in the USA or Canada.
            </p>
            <p>
              Plan for the apostille timeline before the wedding. If you have an immigration petition, a name change, a tax filing, or an insurance enrollment that depends on the marriage certificate, the apostille delay will hold those up. Couples who need the legal proof quickly should choose Path A (civil at home) and avoid the apostille timeline entirely.
            </p>
          </div>
        </article>
      </section>

      {/* FAQ */}
      <section id="faqs" className="bg-[#f4eee4] px-6 py-12 scroll-mt-24">
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

      {/* Sources */}
      <section className="px-6 py-12">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Sources and verification</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Confirm current requirements before traveling</h2>
          <p className="mt-5 leading-7 text-[#4d403a]">
            Mexican civil marriage law and state-specific requirements change. The five sources below are the authoritative references I send families to for verification. Check each one before finalizing your travel and document plan, and confirm the current state-specific rule with the resort&rsquo;s wedding coordinator.
          </p>
          <ul className="mt-6 space-y-4">
            {sources.map((source) => (
              <li key={source.url} className="rounded-2xl border border-[#e6dfd5] bg-white p-5">
                <a
                  href={source.url}
                  className="font-serif text-lg font-semibold text-[#7a6841] underline underline-offset-4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {source.label}
                </a>
                <p className="mt-2 leading-7 text-[#4d403a]">{source.note}</p>
              </li>
            ))}
          </ul>
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
            Tell me your state and your dates &mdash; I will help you choose the right legal path
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            The first 30-minute consultation is free. Bring your destination, your resort shortlist, your wedding date, and your US or Canadian home jurisdiction. I will help you compare Path A and Path B for your specific situation, and point you to the Registro Civil or embassy source you need to verify before traveling.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=legal-requirements"
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
            Written by <Link href="/about/mini/" className="underline">Mini</Link>, founder of CeremonyVerse &middot; This guide is planning information, not legal advice
          </p>
        </div>
      </section>
    </main>
  )
}
