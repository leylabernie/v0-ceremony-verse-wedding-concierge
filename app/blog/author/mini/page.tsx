import Link from "next/link"
import {
  AUTHOR_KNOWS_ABOUT,
  buildBreadcrumb,
  buildMetadata,
  buildPersonSchema,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/blog/author/mini/",
  title: "Articles by Mini — CeremonyVerse Founder",
  description:
    "All destination-wedding and India-sourcing guides written by Mini (Bhamini), founder of CeremonyVerse — firsthand family-wedding experience and documented remote-sourcing practice.",
  ogType: "profile",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "Authors", url: "/blog/author/" },
  { name: "Mini", url: "/blog/author/mini/" },
])

// Authoritative list of articles written by Mini. Keep in sync with the
// posts array on /blog/ — when a new post is published, add it here too.
// `path` is the full URL path (e.g. "/blog/how-to-buy-bridal-lehenga-from-india-usa/"
// or "/nri-gujarati-wedding-timeline-12-months/"). `slug` is kept as a
// unique key for the React list. `date` matches the article's publishedTime
// so the archive reads chronologically.
const articles: { slug: string; path: string; title: string; description: string; date: string }[] = [
  {
    slug: "nri-gujarati-wedding-timeline-12-months",
    path: "/nri-gujarati-wedding-timeline-12-months/",
    title: "NRI Gujarati Wedding Timeline — 12-Month Month-by-Month Checklist",
    description: "The month-by-month framework I use with every CeremonyVerse family — from setting the foundation at 12 months out to on-site handoff on wedding week.",
    date: "2026-09-16",
  },
  {
    slug: "nri-gujarati-wedding-rituals-explained",
    path: "/nri-gujarati-wedding-rituals-explained/",
    title: "Gujarati Wedding Rituals Explained for NRI Families",
    description: "A ceremony-by-ceremony walkthrough of every ritual in a Gujarati Hindu wedding — what happens, when, who participates, and what to confirm with your resort.",
    date: "2026-09-16",
  },
  {
    slug: "nri-gujarati-wedding-vendor-questions",
    path: "/nri-gujarati-wedding-vendor-questions/",
    title: "Questions to Ask Gujarati Wedding Vendors Before You Book",
    description: "A vendor-by-vendor checklist — decorator, DJ, mehndi artist, photographer, caterer, transfer, Maharaj — written from firsthand family-wedding experience.",
    date: "2026-09-16",
  },
  {
    slug: "nri-gujarati-wedding-legal-requirements-mexico",
    path: "/nri-gujarati-wedding-legal-requirements-mexico/",
    title: "Legal Requirements for a Gujarati Wedding in Mexico",
    description: "Civil vs religious ceremony in Mexico, document requirements, blood tests, witnesses, apostille, and how to ensure your destination wedding is legally recognized in the USA or Canada.",
    date: "2026-09-16",
  },
  {
    slug: "nri-gujarati-parents-guide-destination-wedding",
    path: "/nri-gujarati-parents-guide-destination-wedding/",
    title: "NRI Gujarati Parents Guide to Destination Wedding Planning",
    description: "A planning guide specifically for the parents of an NRI Gujarati bride or groom — responsibilities, financial clarity, family politics, and how to support your child without taking over.",
    date: "2026-09-16",
  },
  {
    slug: "nri-gujarati-wedding-guest-etiquette",
    path: "/nri-gujarati-wedding-guest-etiquette/",
    title: "Gujarati Wedding Guest Etiquette for Non-Gujarati Guests",
    description: "A practical guide for non-Gujarati and non-Indian guests — what to wear, what to expect at each ceremony, gift etiquette, and how to participate.",
    date: "2026-09-16",
  },
  {
    slug: "indian-destination-wedding-puerto-vallarta",
    path: "/blog/indian-destination-wedding-puerto-vallarta/",
    title: "Indian Destination Wedding in Puerto Vallarta: Resorts, Costs & Guest Planning",
    description: "Compare Puerto Vallarta and nearby Riviera Nayarit for a Gujarati or Hindu destination wedding.",
    date: "2026-09-13",
  },
  {
    slug: "indian-destination-wedding-mexico-complete-guide",
    path: "/blog/indian-destination-wedding-mexico-complete-guide/",
    title: "Indian Destination Wedding in Mexico: Costs, Resorts & a Four-Day Plan",
    description: "A complete guide to planning fees, private-event budgets, resort comparisons, and Hindu ceremony details.",
    date: "2026-09-13",
  },
  {
    slug: "hidden-resort-fees-4-day-indian-wedding-cancun",
    path: "/blog/hidden-resort-fees-4-day-indian-wedding-cancun/",
    title: "Hidden Resort Fees for a 4-Day Indian Wedding in Cancún",
    description: "Private-event minimums, outside-vendor fees, production charges, day passes, and taxes beyond the resort package.",
    date: "2026-09-13",
  },
  {
    slug: "indian-wedding-catering-mexico-all-inclusive-resorts",
    path: "/blog/indian-wedding-catering-mexico-all-inclusive-resorts/",
    title: "Indian Wedding Catering at Mexico All-Inclusive Resorts",
    description: "How resort kitchens handle Gujarati and Hindu wedding menus, and when outside caterers are permitted.",
    date: "2026-09-13",
  },
  {
    slug: "how-to-plan-gujarati-hindu-destination-wedding-mexico",
    path: "/blog/how-to-plan-gujarati-hindu-destination-wedding-mexico/",
    title: "How to Plan a Gujarati or Hindu Destination Wedding in Mexico",
    description: "Guest documents, resort proposals, cultural decisions, budgets, and on-site execution.",
    date: "2026-08-21",
  },
  {
    slug: "mexico-or-punta-cana-indian-destination-wedding",
    path: "/blog/mexico-or-punta-cana-indian-destination-wedding/",
    title: "Mexico or Punta Cana for an Indian Destination Wedding?",
    description: "Compare guest travel, resort fit, event spaces, food, vendor rules, and complete host costs.",
    date: "2026-08-21",
  },
  {
    slug: "ordering-indian-wedding-outfits-usa-canada",
    path: "/blog/ordering-indian-wedding-outfits-usa-canada/",
    title: "Ordering Indian Wedding Outfits from India to the USA or Canada",
    description: "Vendor evidence, measurements, written approvals, shipping, duties, taxes, and local alterations.",
    date: "2026-08-15",
  },
  {
    slug: "how-to-take-lehenga-measurements-at-home",
    path: "/blog/how-to-take-lehenga-measurements-at-home/",
    title: "How to Take Lehenga Measurements at Home: A Step-by-Step Guide for NRI Brides",
    description: "Documenting blouse, skirt, and dupatta measurements while preserving room for a local fitting.",
    date: "2026-07-22",
  },
  {
    slug: "how-to-choose-indian-wedding-jewelry-usa",
    path: "/blog/how-to-choose-indian-wedding-jewelry-usa/",
    title: "How to Choose Indian Wedding Jewelry in the USA: An NRI Bride's Comparison Guide",
    description: "Kundan vs. Polki vs. Temple vs. Meenakari — material, construction, hallmark, and seller verification.",
    date: "2026-07-10",
  },
  {
    slug: "how-to-buy-authentic-kanchipuram-silk-sarees-online-usa",
    path: "/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/",
    title: "How to Buy Authentic Kanchipuram Silk Sarees Online: An NRI Bride's Guide",
    description: "Requesting item-specific fiber, zari, origin, construction, and certification evidence.",
    date: "2026-06-28",
  },
  {
    slug: "custom-sherwani-sizing-guide-india-usa",
    path: "/blog/custom-sherwani-sizing-guide-india-usa/",
    title: "Sizing and Sourcing a Custom Men's Sherwani from India Without Leaving the US",
    description: "Five important sherwani measurements, fabric-selection guidance, and remote custom-fit risk reduction.",
    date: "2026-06-22",
  },
  {
    slug: "indian-wedding-return-gifts-bulk-usa",
    path: "/blog/indian-wedding-return-gifts-bulk-usa/",
    title: "How to Source and Ship Unique Indian Wedding Return Gifts to the USA in Bulk",
    description: "Favor options, quantities, packaging, shipping, and import costs before approving a bulk order.",
    date: "2026-06-18",
  },
  {
    slug: "how-much-does-bridal-lehenga-cost-india-2026",
    path: "/blog/how-much-does-bridal-lehenga-cost-india-2026/",
    title: "How Much Does a Bridal Lehenga from India Cost? A Complete Quote Guide",
    description: "Compare fabric, handwork, customization, service fees, shipping, and customs estimates.",
    date: "2026-06-12",
  },
  {
    slug: "indian-wedding-outfit-checklist-every-ceremony",
    path: "/blog/indian-wedding-outfit-checklist-every-ceremony/",
    title: "Indian Wedding Outfit Checklist for NRI Families: Who Needs What",
    description: "A ceremony-by-ceremony list for the couple, parents, wedding party, and family.",
    date: "2026-06-08",
  },
  {
    slug: "indian-wedding-outfit-scams-nri-brides",
    path: "/blog/indian-wedding-outfit-scams-nri-brides/",
    title: "How to Buy Lehengas from India Without Getting Scammed: 10 Red Flags for NRI Brides",
    description: "Seller, item, payment, approval, shipping, and remedy evidence to request before purchasing.",
    date: "2026-06-05",
  },
  {
    slug: "how-to-coordinate-bridesmaid-lehengas-india-usa",
    path: "/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/",
    title: "How to Order Matching Bridesmaid Lehengas from India for a US Wedding",
    description: "Written color references, size-specific measurements, approvals, and group-order logistics.",
    date: "2026-06-03",
  },
  {
    slug: "shipping-indian-wedding-outfits-usa-customs-duties",
    path: "/blog/shipping-indian-wedding-outfits-usa-customs-duties/",
    title: "Shipping Wedding Outfits from India to USA: Customs, Duties & Delivery Timeline",
    description: "Classification, declared value, duties, carrier charges, customs review, tracking, and delivery.",
    date: "2026-06-01",
  },
  {
    slug: "when-to-order-indian-wedding-outfits-nri-bride",
    path: "/blog/when-to-order-indian-wedding-outfits-nri-bride/",
    title: "When to Order Indian Wedding Outfits from India: NRI Planning Timeline",
    description: "Work backward from the first local fitting and event date with realistic buffers.",
    date: "2026-05-28",
  },
  {
    slug: "nri-bride-lehenga-sourcing-new-jersey-story",
    path: "/blog/nri-bride-lehenga-sourcing-new-jersey-story/",
    title: "Bridal Lehenga Sourcing Scenario for New Jersey Brides",
    description: "An illustrative planning scenario for comparing an India-sourced bridal lehenga with New Jersey options.",
    date: "2026-05-22",
  },
  {
    slug: "mexico-wedding-wardrobe-sourcing-from-india",
    path: "/blog/mexico-wedding-wardrobe-sourcing-from-india/",
    title: "Mexico Wedding Wardrobe Sourcing from India: What to Plan for Every Ceremony",
    description: "Bride, groom, wedding party, and family outfits timed to a Mexico destination wedding weekend.",
    date: "2026-05-15",
  },
  {
    slug: "how-to-buy-bridal-lehenga-from-india-usa",
    path: "/blog/how-to-buy-bridal-lehenga-from-india-usa/",
    title: "How to Buy a Bridal Lehenga from India to USA — Step-by-Step Guide",
    description: "Live video shopping, sizing, customs, timeline, and how to avoid getting scammed.",
    date: "2026-03-01",
  },
  {
    slug: "how-to-buy-sherwani-from-india-usa",
    path: "/blog/how-to-buy-sherwani-from-india-usa/",
    title: "How to Buy a Sherwani from India to the USA — Complete Sourcing Guide",
    description: "Fabric, fit, vendor verification, and customs for an NRI groom ordering from India.",
    date: "2026-03-01",
  },
  {
    slug: "nri-wedding-planning-timeline",
    path: "/blog/nri-wedding-planning-timeline/",
    title: "The NRI Wedding Planning Timeline: When to Order Everything from India",
    description: "A planning framework for recording item requirements, current vendor estimates, and approvals.",
    date: "2026-03-01",
  },
  {
    slug: "gujarati-wedding-outfit-guide",
    path: "/blog/gujarati-wedding-outfit-guide/",
    title: "Gujarati Wedding Outfit Guide: What to Wear for Every Ceremony",
    description: "A practical ceremony-by-ceremony wardrobe guide for Gujarati brides, grooms, and families.",
    date: "2026-03-01",
  },
  {
    slug: "south-indian-christian-wedding-outfit-guide",
    path: "/blog/south-indian-christian-wedding-outfit-guide/",
    title: "South Indian Christian Wedding Outfit Planning Guide",
    description: "A family- and church-approved framework for building ceremony outfits and vendor records.",
    date: "2026-08-15",
  },
  {
    slug: "us-tariffs-indian-wedding-outfits-2026",
    path: "/blog/us-tariffs-indian-wedding-outfits-2026/",
    title: "US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026",
    description: "The tariff landscape changed multiple times in 2025. What actually applies to your lehenga.",
    date: "2026-03-01",
  },
]

const sortedArticles = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1))

export default function AuthorMiniArchivePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#1f1f1f]">
      <JsonLd id="schema-person" data={buildPersonSchema()} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      <section className="bg-[#1f1f1f] px-6 py-20 text-[#f8f6f2] sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Author archive · {articles.length} articles
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Articles by Mini
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            I&rsquo;m <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">Mini (Bhamini)</Link>, the founder of CeremonyVerse and the author of every guide listed below. Each article is written from firsthand family-wedding experience or from my documented remote-sourcing practice — not generated from a prompt. If you have a question I haven&rsquo;t answered yet, <Link href="/contact/" className="text-[#c5a059] underline underline-offset-4">email me</Link> and I may turn it into the next post.
          </p>
        </div>
      </section>

      <section className="px-6 pt-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Mini writes about
          </p>
          <ul className="flex flex-wrap gap-2">
            {AUTHOR_KNOWS_ABOUT.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-[#d9cfbf] bg-white px-4 py-2 text-[13px] text-[#4d403a]"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <ol className="space-y-6">
            {sortedArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={article.path}
                  className="block rounded-2xl border border-[#e6dfd5] bg-white p-7 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7a6841]">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[#1f1f1f]">
                    {article.title}
                  </h2>
                  <p className="mt-3 leading-7 text-[#4d403a]">{article.description}</p>
                  <p className="mt-4 text-sm font-semibold text-[#7a6841]">Read article →</p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Have a question I haven&rsquo;t written about yet?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            The first 30-minute consultation is free. Tell me your destination, dates, and the question that&rsquo;s on your mind — I&rsquo;ll either answer it directly or point you to the right resource.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=author-mini"
              className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/about/mini/"
              className="inline-flex rounded-full border border-white px-7 py-3 text-sm font-semibold text-white"
            >
              Read Mini&rsquo;s full story
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
