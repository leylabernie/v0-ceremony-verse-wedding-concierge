import Link from "next/link"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/nri-gujarati-wedding-guest-etiquette/",
  title: "Gujarati Wedding Guest Etiquette for Non-Gujarati Guests",
  description:
    "A practical guide for non-Gujarati and non-Indian guests attending a Gujarati wedding — what to wear, what to expect at each ceremony, gift etiquette, how to participate, and what questions are okay to ask.",
  keywords: [
    "Gujarati wedding guest etiquette",
    "what to expect at Gujarati wedding",
    "what to wear to Indian wedding",
    "non-Indian guest at Gujarati wedding",
    "Gujarati wedding gift etiquette",
  ],
  publishedTime: "2026-09-16",
  authorName: "Mini",
  ogType: "article",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Guides", url: "/blog/" },
  { name: "Gujarati Wedding Guest Etiquette", url: "/nri-gujarati-wedding-guest-etiquette/" },
])

const quickRules = [
  "Dress modestly for the religious ceremony &mdash; cover shoulders and knees.",
  "Avoid red (reserved for the bride) and black (associated with mourning).",
  "Wear Indian clothes if you want to &mdash; it is welcomed as participation, not appropriation.",
  "Give $100 to $300 USD per person in a decorated envelope as a cash gift.",
  "Take off your shoes before entering the Garba circle or any sacred space.",
]

const ceremonies = [
  {
    name: "Mehndi",
    what: "The Mehndi is the henna ceremony &mdash; the bride, bridesmaids, and female family members have intricate henna designs applied to their hands and feet. It is the first event of the wedding weekend and runs as a social evening with music, food, and conversation alongside the henna application.",
    wear: "Festive Indian or smart-casual Western attire. Bright colors are welcome &mdash; yellows, oranges, pinks, greens. No need for heavy embroidery; this is a relaxed evening event. Female guests can wear a kurta, a tunic, or a festive dress. Male guests can wear a kurta or a button-down shirt with slacks.",
    expect: "A long evening &mdash; most Gujarati Mehndi events run past midnight. Female guests who want henna can queue for the mehndi artist. Food is typically served buffet-style. Music is usually a mix of filmi and Garba. The bride&rsquo;s henna takes 4 to 6 hours and is the centerpiece of the evening.",
    participate: "Female guests can get henna applied &mdash; ask the artist for a design that matches the time you have. Male guests can join the dancing when the music starts. Mingle, eat, and compliment the bride on her henna once it is done. Do not touch anyone&rsquo;s wet henna.",
  },
  {
    name: "Haldi and Pithi",
    what: "The Haldi and Pithi are turmeric ceremonies held separately at the bride&rsquo;s and groom&rsquo;s sides on the morning before the wedding. A paste of turmeric, oil, and sometimes chickpea flour is applied to the bride&rsquo;s and groom&rsquo;s skin by family members as a blessing and purification. It is a family-and-close-friends event, not a full-guest event.",
    wear: "Clothes you do not mind getting stained yellow. Yellow and orange are traditional and welcome. Simple cotton kurtas, t-shirts, or old clothes &mdash; turmeric stains permanently. The host family usually provides a change of clothes or a wrap.",
    expect: "An informal, often outdoor morning event. Turmeric paste is applied to the bride or groom by family members &mdash; guests typically watch and participate only if invited. There will be music, food, and a lot of laughter. Plan to wash your hands thoroughly after.",
    participate: "If you are invited to apply turmeric, do so gently on the bride&rsquo;s or groom&rsquo;s arms or feet &mdash; never on the face unless invited. Bring a small gift if you like (a flower, a sweet). Stay back from the central ritual unless invited forward. Most guest participation at the Haldi is as a happy observer.",
  },
  {
    name: "Sangeet and Garba",
    what: "The Sangeet and Garba night is the social highlight of the wedding weekend. The Garba is a traditional Gujarati folk dance performed in a circle with sticks (dandiya) or hand claps. The Sangeet is the broader program of choreographed family performances, music, and dinner. It is the event most guests remember.",
    wear: "Festive Indian attire &mdash; lehenga, saree, kurta with churidar, or an Indo-Western fusion outfit. Bright colors and some embellishment are appropriate. Comfortable shoes are essential &mdash; you will be on your feet for hours. Female guests should avoid very high heels; the Garba is danced on the floor.",
    expect: "A high-energy evening. The Garba begins with the family and expands outward as more guests join. Family performances &mdash; choreographed dances, skits, songs &mdash; typically run 60 to 90 minutes. Dinner is buffet-style and served during or after the performances. The DJ plays filmi music for open dancing late into the night.",
    participate: "Join the Garba even if you do not know the steps. Stand in the outer circle, watch the people inside you, and clap on the beat. The steps are simple once you watch for a minute &mdash; you will pick them up. Take off your shoes before entering the Garba circle. Dandiya sticks are usually provided; ask someone to show you the basic pattern. You will not be judged for being a beginner &mdash; Gujarati families are delighted when non-Gujarati guests join in.",
  },
  {
    name: "Baraat",
    what: "The Baraat is the groom&rsquo;s procession from a starting point (typically the resort lobby) to the mandap where the wedding ceremony will be held. The groom arrives on a horse, accompanied by his family dancing to a live dhol drummer or a mobile DJ. It is the loudest, most energetic event of the weekend.",
    wear: "Festive Indian attire &mdash; sherwani or kurta for men, lehenga or saree for women. Bright colors are appropriate. Comfortable shoes are essential &mdash; you will be dancing and walking. Sunglasses and a hat are practical for an outdoor afternoon procession.",
    expect: "Loud music, energetic dancing, and a horse. The Baraat typically takes 45 to 90 minutes from start to arrival at the mandap. The groom&rsquo;s family leads the procession; the bride&rsquo;s family receives them at the mandap. There is usually a small ritual at the mandap where the bride&rsquo;s mother welcomes the groom before the ceremony begins.",
    participate: "Join the procession and dance. The energy is infectious &mdash; you do not need to know the steps, just move with the music. Stay clear of the horse &mdash; the horse is trained for noise but you should not approach it from behind. If you are on the bride&rsquo;s side, gather at the mandap to receive the baraat. Bring water; you will be outside for a while.",
  },
  {
    name: "Wedding Ceremony",
    what: "The wedding ceremony is the religious Hindu ritual at the mandap &mdash; the Ganesh Puja, Kanyadaan, Hastamilap, Saptapadi (the seven steps around the sacred fire), and Vidaai. The ceremony is conducted by the Maharaj (officiant) in Sanskrit and Gujarati, and typically runs 60 to 90 minutes.",
    wear: "Modest Indian attire that covers shoulders and knees. Lehenga, saree, or salwar kameez for women; sherwani, kurta, or a formal Western suit for men. Avoid red &mdash; red is reserved for the bride. Avoid black &mdash; it is associated with mourning in Indian tradition. Cream, gold, pastel, blue, green, and purple are all safe choices.",
    expect: "A seated ceremony &mdash; typically on chairs arranged facing the mandap. The ceremony is in Sanskrit and Gujarati; you will not understand every word, and that is fine. The most important moments are the Kanyadaan (the bride&rsquo;s father giving her hand), the Hastamilap (the joining of hands), the Saptapadi (the seven steps around the fire &mdash; the central ritual), and the Vidaai (the bride&rsquo;s farewell). Plan to be seated and quiet during the ceremony.",
    participate: "Be a respectful observer. Take photos from your seat &mdash; no flash, no standing in front of the mandap. Stand when the family stands, sit when the family sits. There may be moments where guests are invited forward to bless the couple &mdash; follow the lead of the family. Applaud at the end of the Saptapadi and at the Vidaai. Do not leave during the ceremony.",
  },
  {
    name: "Reception",
    what: "The reception is the formal celebration that follows the wedding ceremony &mdash; dinner, toasts, dancing, and the couple&rsquo;s first dance as a married pair. It is the most Western-style event of the weekend, and the most relaxed for non-Gujarati guests.",
    wear: "Formal Indian or Western attire &mdash; lehenga, saree, evening gown, formal suit, or tuxedo. This is the dressiest event of the weekend. Darker colors, sequins, and heavier embellishment are appropriate. Comfortable dress shoes for dancing.",
    expect: "A seated dinner or a substantial buffet, multiple toasts (the couple&rsquo;s parents, the couple, sometimes close friends), the first dance, and open dancing. The reception typically runs 4 to 5 hours. The bar is usually open. The couple will circulate among the tables during dinner.",
    participate: "Mingle, dance, and toast the couple. Bring your gift envelope &mdash; gifts are typically given at the reception, not at the ceremony. Join the dancing after the first dance &mdash; the music is usually filmi and easy to dance to. Stay for the cake cutting and the couple&rsquo;s farewell, which is typically the last formal moment of the night.",
  },
]

const giftParagraphs = [
  "Cash is the most common gift at an Indian wedding, given in a decorated envelope. The standard range for a non-family guest is $100 to $300 USD per person; closer friends and family give more. The envelope is handed to the couple or to a designated family member at the reception, not at the ceremony. The amount is not written on the outside &mdash; the envelope is decorated, and the cash is inside.",
  "If the couple has a registry, a physical gift from the registry is also welcome &mdash; but cash is more common, and for many Indian families, cash is preferred. Registry gifts are typically shipped to the couple&rsquo;s home; do not bring a large physical gift to the wedding, especially to a destination wedding where the couple has to fly it home.",
  "Avoid religious-icon gifts (a Ganesh statue, a Krishna painting, a copy of the Bhagavad Gita) unless you know the family&rsquo;s specific tradition. These are deeply meaningful gifts when chosen well, but they require cultural knowledge to choose appropriately &mdash; and an inappropriate choice can be awkward. A safer choice is a generic decorative item, a high-quality candle, or a bottle of wine if the family drinks.",
  "Some families accept digital payments (Venmo, Zelle, PayPal) &mdash; the couple will typically indicate this on the wedding website or at the reception welcome table. If a digital payment is welcomed, it is perfectly acceptable; if it is not mentioned, default to cash in an envelope. Cash in USD is fine at a Mexico destination wedding; do not feel obligated to bring Indian rupees.",
]

const faqs = [
  {
    question: "Can non-Indian guests wear Indian clothes?",
    answer:
      "Yes &mdash; and it is welcomed as participation, not appropriation. Gujarati families are delighted when non-Gujarati and non-Indian guests wear Indian clothes to a wedding. The cultural line is not about who wears what; it is about respect for the meaning of the attire. Avoid wearing a bridal-red lehenga (red is reserved for the bride), avoid wearing religious items you do not understand (a tilak, a sacred thread), and dress modestly for the religious ceremony. If you are unsure what to buy, ask a friend who has attended an Indian wedding, or visit an Indian clothing store &mdash; the staff will guide you to appropriate choices.",
  },
  {
    question: "How much should I give as a wedding gift?",
    answer:
      "The standard range for a non-family guest at a Gujarati wedding is $100 to $300 USD per person. Closer friends and family give more; $300 to $500 per person is common for close friends, and $500+ per person for immediate family. The gift is typically cash in a decorated envelope, handed to the couple or a designated family member at the reception. The amount is not written on the outside of the envelope. If the couple has a registry, a physical gift from the registry is also welcome, but cash is more common.",
  },
  {
    question: "What should I wear to each ceremony?",
    answer:
      "Mehndi: festive Indian or smart-casual Western, bright colors. Haldi: clothes you do not mind staining yellow. Sangeet and Garba: festive Indian attire with comfortable shoes for dancing. Baraat: festive Indian attire with comfortable shoes for an outdoor procession. Wedding ceremony: modest Indian attire that covers shoulders and knees, avoid red (bride) and black (mourning). Reception: formal Indian or Western attire &mdash; the dressiest event of the weekend. If you are buying one Indian outfit for the weekend, choose a lehenga or a kurta in a color that is not red, and wear it to the Sangeet or the reception.",
  },
  {
    question: "Can I participate in the Garba if I do not know the steps?",
    answer:
      "Yes &mdash; absolutely. Join the outer circle, watch the people inside you, and clap on the beat. The basic Garba step is a simple side-to-side movement; you will pick it up within a minute of watching. The dandiya (stick) version has a simple pattern where partners tap sticks &mdash; ask someone to show you the basic pattern, and they will. Gujarati families are delighted when non-Gujarati guests join the Garba; no one will judge you for being a beginner. The only rules: take off your shoes before entering the Garba circle, and follow the direction of the circle (clockwise or counterclockwise, depending on the family&rsquo;s tradition).",
  },
  {
    question: "Is it okay to take photos during the wedding ceremony?",
    answer:
      "Yes, from your seat &mdash; no flash, no standing in front of the mandap, no walking into the ceremony space. The wedding ceremony is a religious ritual, and the couple&rsquo;s hired photographer and videographer are responsible for the official coverage. Take photos from your chair, do not use flash (it disrupts the ceremony and the hired photographer&rsquo;s work), and do not stand in front of the mandap or in the aisles. If you want a photo with the couple, wait for the reception. Some families request an unplugged ceremony &mdash; no phones at all &mdash; which will be announced at the start; respect it.",
  },
  {
    question: "What questions are okay to ask the family?",
    answer:
      "Ask about the ceremonies &mdash; what is happening, what each ritual means, what to expect next. Gujarati families are happy to explain their traditions to guests who are curious and respectful. Ask about the food &mdash; what each dish is, whether it is spicy, whether it is vegetarian. Ask about the music and the dancing &mdash; whether you can join, what the steps are. Avoid asking about wedding cost, family politics, the couple&rsquo;s personal history, or anything you would not ask at a Western wedding. If you are unsure whether a question is appropriate, default to asking about the ceremony itself &mdash; that is always welcome.",
  },
]

const faqSchema = buildFaqSchema(faqs)

const aiSummary = `Gujarati wedding guest etiquette for non-Gujarati and non-Indian guests: dress modestly for the religious ceremony (cover shoulders and knees), avoid red (reserved for the bride) and black (associated with mourning), wear Indian clothes if you want to (it is welcomed as participation, not appropriation), give $100 to $300 USD per person in a decorated envelope as a cash gift (the most common gift at Indian weddings), join the Garba dance even if you do not know the steps (stand in the outer circle, watch, and clap on the beat), take off your shoes before entering the Garba circle, ask questions about the ceremonies (Gujarati families are happy to explain), avoid asking about wedding cost or family politics, take photos from your seat during the ceremony (no flash, no standing in front of the mandap), and join the dancing at the Baraat and the reception. The typical 4-day sequence is Mehndi (Thursday), Haldi and Sangeet (Friday), Baraat and wedding ceremony (Saturday), reception (Saturday evening), and farewell brunch (Sunday). This guide is written by Mini, founder of CeremonyVerse, from her firsthand family-wedding experience at three Gujarati destination weddings in Mexico.`

const relatedGuides = [
  { href: "/nri-gujarati-wedding-planning-guide/", label: "NRI Gujarati Wedding Planning Guide — the master guide" },
  { href: "/nri-gujarati-wedding-rituals-explained/", label: "Gujarati wedding rituals explained for NRI families" },
  { href: "/blog/gujarati-wedding-outfit-guide/", label: "Gujarati wedding outfit guide — ceremony by ceremony" },
  { href: "/blog/indian-wedding-outfit-checklist-every-ceremony/", label: "Indian wedding outfit checklist for every ceremony" },
  { href: "/indian-wedding-guest-outfits-usa/", label: "Indian wedding guest outfits USA" },
  { href: "/about/mini/", label: "About Mini — the founder behind this guide" },
]

export default function NriGujaratiWeddingGuestEtiquettePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* Hero */}
      <section className="bg-[#1f1f1f] px-6 py-20 text-[#f8f6f2] sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            For guests · written by{" "}
            <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">
              Mini
            </Link>
            , founder of CeremonyVerse
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Gujarati Wedding Guest Etiquette for Non-Gujarati Guests
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            A practical guide for non-Gujarati and non-Indian guests attending a Gujarati wedding &mdash; what to wear, what to expect at each ceremony, gift etiquette, how to participate, and what questions are okay to ask.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/?service=mexico&from=guest-etiquette"
              className="inline-flex rounded-full bg-[#c5a059] px-7 py-3 text-sm font-semibold text-[#1f1f1f]"
            >
              Ask Mini a Question
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

      {/* Five quick rules */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#d9cfbf] bg-[#f4eee4] p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">The five quick rules</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">If you read nothing else, read these</h2>
          <ol className="mt-5 space-y-3 text-[#4d403a]">
            {quickRules.map((rule, index) => (
              <li key={rule} className="flex gap-3 leading-7">
                <span className="font-serif text-lg font-semibold text-[#7a6841]">{index + 1}.</span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-4">
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-[#4d403a]">
            If you have been invited to a Gujarati wedding and you are not Gujarati &mdash; or not Indian at all &mdash; you are in for a wonderful weekend. Gujarati weddings are warm, energetic, full of music and food, and explicitly welcoming of guests from every background. This guide is the etiquette I wish someone had handed to the non-Gujarati guests at the three family weddings I describe on <Link href="/real-weddings/" className="text-[#7a6841] underline underline-offset-4">/real-weddings/</Link>. The short version: come curious, dress respectfully, join the dancing, and ask questions. The longer version is below.
          </p>
        </article>
      </section>

      {/* Ceremony-by-ceremony cards */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Ceremony by ceremony</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">What to expect, what to wear, how to participate</h2>
          <div className="mt-8 space-y-6">
            {ceremonies.map((ceremony, index) => (
              <article
                key={ceremony.name}
                id={`ceremony-${index + 1}`}
                className="scroll-mt-24 rounded-2xl border border-[#e6dfd5] bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">
                  Ceremony {String(index + 1).padStart(2, "0")} of 06
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">{ceremony.name}</h3>
                <dl className="mt-5 space-y-4 text-[#4d403a]">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">What it is</dt>
                    <dd className="mt-1 leading-7">{ceremony.what}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">What to wear</dt>
                    <dd className="mt-1 leading-7">{ceremony.wear}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">What to expect</dt>
                    <dd className="mt-1 leading-7">{ceremony.expect}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">How to participate</dt>
                    <dd className="mt-1 leading-7">{ceremony.participate}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gift etiquette callout */}
      <section className="bg-[#f4eee4] px-6 py-12">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Gift etiquette &mdash; the short version</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">How to give, what to give, what to avoid</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            {giftParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
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
            Have a question I did not answer?
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Ask me anything before the wedding weekend
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            If you have been invited to a Gujarati wedding and you have a question this guide did not answer &mdash; what to wear to a specific ceremony, what to give, how to participate, what to expect &mdash; send it to me. I will answer from firsthand experience. No charge, no consultation fee, just an answer.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=guest-etiquette"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
            >
              Ask Mini a Question
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
