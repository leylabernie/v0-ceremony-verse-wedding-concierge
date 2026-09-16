import { VisibleFaqs } from "@/components/visible-faqs";
import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildBlogPosting, buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

const title = "Indian Wedding Catering at Mexico All-Inclusive Resorts";
const description =
  "How Mexican all-inclusive resort kitchens handle Gujarati and Hindu wedding menus, when outside chefs and caterers are permitted, and the Jain, satvik, and pure-vegetarian requirements to confirm in writing.";
const path = "/blog/indian-wedding-catering-mexico-all-inclusive-resorts/";
const lastModified = "2026-09-13T12:00:00Z";

export const metadata = buildMetadata({
  path,
  title,
  description,
  keywords: [
    "Indian wedding catering Mexico all inclusive resorts",
    "outside Indian caterer Mexico resort",
    "Gujarati Jain vegetarian wedding menu Mexico",
    "Indian food destination wedding Cancun",
  ],
  publishedTime: "2026-09-08T12:00:00-04:00",
  modifiedTime: lastModified,
  authorName: "Mini",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: title,
  description,
  url: path,
  datePublished: "2026-09-08T12:00:00-04:00",
  dateModified: lastModified,
  authorName: "Mini",
  keywords: [
    "Indian wedding catering Mexico",
    "outside caterer all inclusive resort",
    "Jain wedding menu Mexico",
    "Hindu wedding food destination wedding",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: title, url: path },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Can we bring an outside Indian caterer or chef to a Mexico all-inclusive resort?",
    answer:
      "Only if the specific resort permits it, and only with the resort's written approval. A property may require food served on site to be prepared in its own kitchens. Where outside caterers are allowed, they generally need current licenses and health certifications, and the family should expect the resort's outside-vendor or catering-supervision fees. Each property's current written event contract controls its own rules.",
  },
  {
    question: "Can Cancún and Riviera Maya resorts cook authentic Gujarati or Hindu wedding food?",
    answer:
      "Many resorts have successfully prepared Indian menus for multi-day weddings. The outcome depends on sharing full menus and recipes early, arranging a documented tasting, confirming spice and ingredient sourcing, and — for pure-vegetarian or Jain families — confirming dedicated cookware and preparation areas in writing before contracting.",
  },
  {
    question: "How do we protect pure-vegetarian and Jain food at a resort kitchen?",
    answer:
      "State the requirement in writing per event: vegetarian-only or Jain preparation (no onion, garlic, or root vegetables), separate cookware and prep surfaces, no shared frying oil, and labeled service. Ask the resort to confirm each item in the banquet documentation rather than verbally, and reconfirm at the tasting.",
  },
  {
    question: "How does CeremonyVerse handle the catering process?",
    answer:
      "CeremonyVerse organizes the family-side work: menu requirements, religious needs, written questions for the resort, tasting logistics, and documentation, all inside its written planning scope. The resort's kitchen and any contracted destination team carry their own responsibilities under their own contracts. The family and officiant keep authority over religious food decisions.",
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
          Destination-wedding food planning · 7 min read
        </p>
        <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] md:text-5xl">{title}</h1>
        <p className="mb-6 text-lg leading-8 text-[#4d403a]">
          Food is where a destination Indian wedding most often goes wrong — not because resorts do not care, but
          because nobody translated the family&apos;s cultural requirements into the resort&apos;s kitchen
          documentation early enough.
        </p>
        <p className="mb-12 text-sm text-[#4d403a]">By <a href="/about/mini/" className="text-[#7a6841] underline underline-offset-4">Mini</a> · Updated September 13, 2026</p>

        <div className="space-y-7 text-[1.06rem] leading-8 text-[#4d403a]">
          <p>
            The direct answer first: most all-inclusive resorts in Cancún and the Riviera Maya require food served on
            their property to be prepared in their own kitchens. Outside chefs and caterers are only an option where a
            specific resort permits them — normally licensed, health-certified, approved in writing in advance, and
            subject to the resort&apos;s outside fees. In practice there are three workable paths, and the right one
            depends on the property, the family&apos;s requirements, and what is confirmed in writing before
            contracting.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">What resort food rules typically say</h2>
          <p>
            All-inclusive pricing is built on the resort&apos;s own kitchens. That is why outside food is usually
            restricted, why outside caterers need individual approval, and why items like an outside eggless cake can
            carry a cutting or service fee. These are contract terms, not personality — the correct response is to get
            the specific rules in writing early, per event, and to treat any verbal &quot;yes, that is fine&quot; as
            unconfirmed.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">Path 1 — Your menu, cooked in the resort kitchen</h2>
          <p>
            This is the most common approach for multi-day weddings. The work happens months ahead: sharing complete
            menus and authentic recipes with the resort&apos;s banquet team, confirming spice and ingredient sourcing,
            scheduling a documented tasting during a site visit, and — for pure-vegetarian families — requesting
            dedicated cookware and preparation areas so nothing touches meat-based surfaces or shared frying oil.
          </p>
          <p>
            Many upscale properties in the region have prepared Indian menus before. What they need is a planner who
            documents the requirement per event: a Jain-friendly Mehndi lunch without onion, garlic, or root
            vegetables; a satvik menu for ceremony day; prasad for the pooja; live chaat and dosa stations for the
            Sangeet; and late-night snacks after the reception.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">Path 2 — Approved external caterers or private chefs</h2>
          <p>
            Some resorts permit fully licensed external caterers or private chefs for private events. Where that is
            genuinely possible, the checklist is: current business and health certifications, the resort&apos;s written
            approval, kitchen or staging access, the outside-vendor or supervision fee, insurance, and a documented
            tasting. If any one of those is missing, the plan is not real yet. Ask for the approval in writing before
            any deposit depends on it.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">Path 3 — The hybrid approach for specialty items</h2>
          <p>
            For items a resort genuinely cannot execute well — fresh mithai, a traditional eggless wedding cake, or
            specific regional snacks — families often source from specialty South Asian bakeries and suppliers serving
            the Cancún region. The resort&apos;s outside-food rules, storage, and any cutting or service fees apply and
            should be confirmed in writing beforehand. This is also where the{" "}
            <Link href="/blog/hidden-resort-fees-4-day-indian-wedding-cancun/" className="font-semibold text-[#7a6841] underline">
              hidden-fee guide for four-day Indian weddings in Cancún
            </Link>{" "}
            and the catering conversation overlap: outside items carry real, knowable costs.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">The religious and dietary list to document per event</h2>
          <ul className="list-disc space-y-3 pl-6">
            <li>Pure vegetarian (no meat, fish, or eggs) with dedicated cookware and prep areas, if required.</li>
            <li>Jain preparation: no onion, garlic, or root vegetables, prepared separately.</li>
            <li>Satvik meals for ceremony day, per the family and officiant&apos;s direction.</li>
            <li>Prasad for the pooja, including ingredients and handling.</li>
            <li>Eggless baking requirements for cakes and desserts.</li>
            <li>Allergies and intolerances documented per event, not per wedding.</li>
            <li>Live-station power and safety requirements for chaat and dosa counters.</li>
          </ul>
          <p>
            The family and officiant remain the authority on what each ceremony requires. A planner&apos;s job is to
            make those requirements visible, written, and confirmed — never to reinterpret tradition on a
            family&apos;s behalf. That boundary is described in the{" "}
            <Link href="/how-it-works/" className="font-semibold text-[#7a6841] underline">complete planning process</Link>.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">How CeremonyVerse organizes this work</h2>
          <p>
            CeremonyVerse is the family-facing coordinator. Inside its written scope, that means organizing menu
            requirements, preparing the resort questions, tracking written confirmations, arranging tasting logistics,
            and keeping the family&apos;s approvals connected — with any contracted destination team and the
            resort&apos;s own kitchen carrying their responsibilities under their own contracts. If that division of
            work is new to you, the{" "}
            <Link href="/blog/how-to-plan-gujarati-hindu-destination-wedding-mexico/" className="font-semibold text-[#7a6841] underline">
              guide to planning a Gujarati or Hindu destination wedding in Mexico
            </Link>{" "}
            explains it in full.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">Our written approval workflow for an outside chef</h2>
<p>Within the agreed planning scope, CeremonyVerse first collects the family’s menu and preparation brief, then asks the resort’s wedding and culinary contacts which delivery model they will approve: their own kitchen, a collaborating specialty chef, or an external caterer. We request one response covering kitchen access, permitted ingredients, food storage, staffing, equipment, supervision, fees, insurance requirements, and who remains responsible for service.</p>
<p>If the resort declines a request, we ask whether an approved local supplier, an adjusted menu, or supervised collaboration can meet the requirement. We document any exception with the specific event, provider, date, cost, and authorizing resort contact. An introduction or verbal assurance does not grant permission. When the essential requirement cannot be met, we flag that before the family commits to the venue.</p>
<h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">A menu and live-station worksheet</h2>
<ul className="list-disc space-y-3 pl-6"><li>For each event: meal time, expected guests, dishes, ingredients, preparation requirements, and family approver.</li><li>For Jain or vegetarian service: the household’s precise restrictions, cooking surfaces, cookware, utensils, oil, labels, and the culinary contact confirming the arrangement.</li><li>For live chaat, dosa, or sweets: serving window, queue space, station staff, power, equipment, handwashing and safe service arrangements confirmed by the food provider.</li><li>For outside items: a written permitted/prohibited list covering ingredients, sweets, cake, prasad, cooking equipment, and alcohol. Border entry rules and resort permission are separate checks.</li><li>Before the tasting: agreed dishes and criteria. Afterward: signed menu revisions, final pricing, guest counts, and the banquet-event documentation.</li></ul>
<p>Compare the food decision with the <Link href="/blog/indian-destination-wedding-mexico-complete-guide/" className="underline">complete four-day wedding plan</Link> and <Link href="/pricing/" className="underline">planning package scope</Link>. No specific food exception or vendor waiver is promised before the property confirms it.</p>
<div className="mt-10 rounded-2xl border border-[#d7c7a4] bg-white p-7">
            <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">Questions that protect the food plan</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-6">
              <li>Which kitchen prepares each event&apos;s food, and who signs off on the menu?</li>
              <li>Are dedicated cookware and prep areas available for pure-vegetarian or Jain cooking?</li>
              <li>What outside food is permitted, and what fees apply to it?</li>
              <li>When is the tasting, and who from the family attends?</li>
              <li>Is every menu, fee, and accommodation confirmed in the current written proposal?</li>
            </ol>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1f1f1f] p-8 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold">Wondering which resort can genuinely execute your menu?</h2>
            <p className="mt-4 leading-7 text-[#e8dfd2]">
              Start with a free 30-minute consultation. If you want a written feasibility decision before full
              planning, the optional $300 Destination Wedding Feasibility &amp; Action Plan reviews resort fit,
              including food, line by line.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact/?service=mexico&from=catering-article" className="rounded-full bg-[#c5a059] px-7 py-3 font-semibold text-[#1f1f1f]">
                Schedule a Free 30-Minute Consultation
              </Link>
              <Link href="/destinations/cancun-indian-wedding/" className="rounded-full border border-[#c5a059] px-7 py-3 font-semibold text-white">
                Review the Cancún Guide
              </Link>
            </div>
          </div>

          <p className="border-t border-[#e6dfd5] pt-6 text-sm leading-6">
            <strong>Source note:</strong> Resort food, outside-catering, and vendor rules vary by property and change
            over time. This article describes planning patterns, not any single resort&apos;s current policy. Verify
            food, catering, and fee terms directly with each property and confirm them in its current written event
            contract before relying on them.
          </p>
        </div>
      <VisibleFaqs schema={faqSchema} />
      </article>
    </main>
  );
}
