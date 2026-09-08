import Link from "next/link";
import { buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/vendors/",
  title: "For Wedding Vendors — Preferred Vendor Roster",
  description:
    "CeremonyVerse is expanding its preferred vendor roster for 2026 and 2027 Gujarati and Hindu destination weddings in Mexico and Punta Cana. Photographers, DJs, makeup artists, and decorators: here is how to be considered.",
});

const faqItems = [
  {
    question: "Does it cost anything to be considered for the roster?",
    answer:
      "No. CeremonyVerse never charges vendors to be reviewed, listed, or referred. Vendors keep their own contracts, pricing, and client relationships. A family is referred only when their needs genuinely match a vendor's strengths.",
  },
  {
    question: "What should interested vendors send?",
    answer:
      "Two things: a South Asian wedding portfolio — ideally multi-day events such as Mendhi, Haldi, Sangeet, Baraat, and Reception, with any Mexico or Caribbean work highlighted — and a destination pricing sheet covering packages or day rates for multi-event weddings, including travel and accommodation requirements.",
  },
  {
    question: "Does being on the roster guarantee bookings or referrals?",
    answer:
      "No. Referrals happen only when a family's dates, destination, budget, and cultural needs genuinely fit a vendor's work. That honesty is what keeps the roster worth trusting for families and vendors alike.",
  },
  {
    question: "Where do CeremonyVerse weddings take place?",
    answer:
      "CeremonyVerse plans Gujarati and Hindu destination weddings in Mexico and Punta Cana for families across the United States and Canada. Local and on-site scope is carried by independent providers under their own written scopes.",
  },
];

const breadcrumbSchema = buildBreadcrumb([{ name: "For Wedding Vendors", url: "/vendors/" }]);
const faqSchema = buildFaqSchema(faqItems);

const whatToSend = [
  {
    title: "Your South Asian wedding portfolio",
    body: "Multi-day celebrations tell us the most: Mendhi, Haldi, Sangeet, Baraat, and Reception work, with any Mexico or Caribbean destination events highlighted. Show us how you handle the moments that only these weddings contain.",
  },
  {
    title: "Your destination pricing sheet",
    body: "Packages or day rates for multi-event weddings, including travel and accommodation requirements. Clear pricing lets us match you to families efficiently — and shows families a professional standard from the first introduction.",
  },
];

const commitments = [
  {
    title: "No fees, ever",
    body: "We never charge vendors to be reviewed, listed, or referred. There is no pay-to-play roster here — the same honesty standard we hold with families.",
  },
  {
    title: "Your contracts stay yours",
    body: "You keep your pricing, your client contract, and your creative control. Independent providers on a CeremonyVerse wedding carry only the scope written in their own agreement.",
  },
  {
    title: "Referrals only when they fit",
    body: "We refer a vendor only when a family's dates, destination, budget, and cultural needs genuinely match that vendor's work. No forced pairings, no invented praise.",
  },
];

export default function VendorsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="faq-schema" data={faqSchema} />

      <section className="px-6 pb-16 pt-32 text-center sm:pb-24 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#7a6841]">Preferred Vendor Roster</p>
          <h1 className="mb-6 font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">For Wedding Vendors</h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#4d403a]">
            CeremonyVerse plans Gujarati and Hindu destination weddings in Mexico and Punta Cana for families across
            the United States and Canada — full multi-day celebrations. We are expanding our preferred vendor roster
            for the 2026 and 2027 wedding seasons, and we would be glad to consider your work.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@ceremonyverse.com?subject=Preferred%20Vendor%20Roster%20%E2%80%94%20Portfolio%20and%20Destination%20Pricing"
              className="inline-flex rounded-full bg-[#c5a059] px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
            >
              Email Your Portfolio and Pricing
            </a>
            <a
              href="mailto:hello@ceremonyverse.com?subject=Preferred%20Vendor%20Roster%20%E2%80%94%2015%20Minute%20Call"
              className="inline-flex rounded-full border border-[#c5a059] px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
            >
              Request a 15-Minute Intro Call
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-semibold sm:text-4xl">What to send us</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {whatToSend.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-white p-8 transition-shadow hover:shadow-lg sm:p-10"
              >
                <h3 className="mb-6 font-serif text-2xl font-semibold leading-snug">{item.title}</h3>
                <p className="flex-1 leading-7 text-[#4d403a]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-semibold sm:text-4xl">How we work with vendors</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-white p-8 transition-shadow hover:shadow-lg sm:p-10"
              >
                <h3 className="mb-6 font-serif text-2xl font-semibold leading-snug">{item.title}</h3>
                <p className="flex-1 leading-7 text-[#4d403a]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-semibold sm:text-4xl">Cross-promotion and referrals</h2>
          <p className="leading-8 text-[#4d403a]">
            Many wedding conversations begin with a photographer, DJ, makeup artist, or decorator long before a family
            contacts a planner. If a couple you are working with is looking for a planner who specializes in Gujarati
            and Hindu destination weddings, we would be honored to be a name you pass along — and when our families
            ask for trusted vendors, we would be glad to send them your way. We are equally open to cross-promoting
            each other&apos;s work, wherever you prefer to share it.
          </p>
          <p className="mt-6 leading-8 text-[#4d403a]">
            To be considered, email{" "}
            <a href="mailto:hello@ceremonyverse.com" className="font-semibold text-[#7a6841] underline">
              hello@ceremonyverse.com
            </a>{" "}
            with the subject line &quot;Preferred Vendor Roster&quot; and your portfolio and destination pricing
            sheet. We review every submission and reply as wedding-season volume allows. Families who want to learn
            more about our planning can{" "}
            <Link href="/how-it-works/" className="font-semibold text-[#7a6841] underline">
              review the complete planning process
            </Link>{" "}
            or{" "}
            <Link href="/contact/?service=mexico&from=vendors-page" className="font-semibold text-[#7a6841] underline">
              schedule a free consultation
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-semibold sm:text-4xl">Vendor questions, answered</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((faq) => (
              <article
                key={faq.question}
                className="flex min-h-[220px] flex-col rounded-2xl border border-[#e6dfd5] bg-white p-8 transition-shadow hover:shadow-lg sm:p-10"
              >
                <h3 className="mb-6 font-serif text-xl font-semibold leading-snug sm:text-2xl">{faq.question}</h3>
                <p className="flex-1 leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Let&apos;s work the same weddings</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Send your South Asian portfolio and destination pricing sheet. If a family&apos;s celebration fits your
            work, you will hear from us.
          </p>
          <a
            href="mailto:hello@ceremonyverse.com?subject=Preferred%20Vendor%20Roster%20%E2%80%94%20Portfolio%20and%20Destination%20Pricing"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
          >
            Email hello@ceremonyverse.com
          </a>
        </div>
      </section>
    </main>
  );
}
