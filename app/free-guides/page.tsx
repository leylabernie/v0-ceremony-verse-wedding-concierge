// Design intent: retain CeremonyVerse's restrained editorial resource library while adding a practical decision-first entry point.
import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/free-guides/",
  title: "Free Indian Wedding Planning Guides & Tools",
  description:
    "Open free CeremonyVerse tools for Indian destination-wedding budgets, resort comparisons, family responsibilities, guest logistics, and India wedding shopping.",
  keywords:
    "free Indian wedding planning tools, NRI wedding checklist, destination wedding budget planner, Mexico resort comparison, Indian wedding guest tracker",
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Free Guides", url: "/free-guides/" }])

const destinationTools = [
  ["New York Destination-Wedding Families", "Compare guest travel cohorts, cultural-event requirements and who owns each task.", "/south-asian-destination-wedding-planning-new-york/"],
  ["Toronto & GTA Gujarati Families", "Coordinate currencies, family contributions and Toronto and India guest cohorts.", "/gujarati-destination-wedding-planning-toronto/"],
  ["Guest Logistics & Gift Coordination Checklist", "Coordinate households, room deadlines, arrivals, outfits, gift sarees and welcome bags. Email yourself a copy; the planning series is optional.", "/guest-logistics-gift-checklist/"],
  ["Ceremony Timeline & Downloadable Toolkit", "Build a live timeline, then request the free PDF with an original symbolic script and friend officiant guide. Planning emails are optional.", "/planning-tools/ceremony-timeline/"],
  ["Moon Palace Cancún Planning Guide", "Work through Lake Terrace and Meditation Garden layouts, production questions and ceremony handoffs.", "/guides/moon-palace-cancun-wedding-planning/"],
  ["Hard Rock Riviera Maya Planning Guide", "Review published vendor-access charges, outdoor timing and production questions before setting your schedule.", "/guides/hard-rock-riviera-maya-wedding-planning/"],
  ["Lopesan Costa Bávaro Planning Guide", "Match beach, garden and rooftop options to your guest count, package inclusions and cultural requirements.", "/guides/lopesan-costa-bavaro-wedding-planning/"],
  ["5 Questions Before You Choose", "Start with five essential questions about cost, guests, cultural events, wedding-week ownership, and written commitments before choosing a Mexico, Jamaica, or Punta Cana resort.", "/before-signing-indian-wedding-resort-proposal/"],
  ["Destination Decision Map", "Use three lenses to clarify guest reality, celebration needs, and the next destination-wedding question before you choose a path.", "/destination-decision-map/"],
  ["Destination Cost Guide", "Build the complete host budget across resort, events, production, planning, family travel, and contingency.", "/indian-destination-wedding-cost/"],
  ["2026 Hindu Wedding Costs & Logistics Guide", "Compare resort event minimums, room-block attrition rules, outside-vendor fees, and India outfit customs duties.", "/costs/"],
  ["Resort Strategy Matcher", "Answer five questions on guest count, elder mobility, ceremonies, and Jain/Satvik catering for a personalized resort brief.", "/planning-tools/strategy-matcher/"],
  ["Mexico Room Block Guide", "Understand inventory, pickup, attrition, cut-off dates, concessions, guest booking, and event-access terms.", "/indian-wedding-room-block-mexico/"],
  ["Budget Tracker", "Track estimated vs. actual wedding costs by category and see what’s left in your budget.", "/planning-tools/budget-tracker/"],
  ["Wedding Checklist", "Organize to-dos by timeline, track progress, and add your own tasks.", "/planning-tools/wedding-checklist/"],
  ["Family Responsibility Map", "Assign an owner, approver, due date, and status to each important decision.", "/planning-tools/family-responsibility-map/"],
  ["Guest List Manager", "Track guest names, RSVP status, party size, and notes in one simple place.", "/planning-tools/guest-list/"],
  ["Vendor Manager", "Organize pandits, mehndi artists, DJs/dhol, decor, catering, quotes, and booking status by event.", "/planning-tools/vendor-manager/"],
  ["Vision Boards", "Save inspiration for Garba, mandap, outfits, jewelry, and reception decor in one visual board.", "/planning-tools/vision-boards/"],
  ["Baraat & Event Logistics Planner", "Select the events you’re hosting and generate a checklist for venues, sound, power, and baraat logistics.", "/planning-tools/baraat-event-planner/"],
  ["Catering Deadline Tracker", "Enter your wedding date to track catering deadlines for chef requests, Jain/Satvik menus, and vendor meals.", "/planning-tools/catering-deadline-tracker/"],
  ["Post-Wedding Honeymoon Resort Guide", "Compare staying at your wedding resort versus switching properties for your honeymoon nights.", "/blog/honeymoon-after-destination-wedding-stay-or-switch-resorts/"],
  ["Gujarati Wedding Guest Etiquette Guide", "Shareable ceremony, wardrobe, and gift etiquette guide for non-Gujarati and non-Indian wedding guests.", "/nri-gujarati-wedding-guest-etiquette/"],
] as const

const shoppingGuides = [
  ["New Jersey Groomsmen Across the US & India", "One outfit brief, individual measurements and a delivery plan per address.", "/groomsmen-outfit-coordination-new-jersey/"],
  ["Wedding Outfit Checklist", "Plan outfits across ceremonies, the couple, family, and wedding party.", "/blog/indian-wedding-outfit-checklist-every-ceremony/"],
  ["NRI Shopping Timeline", "Understand when to research, measure, approve, produce, inspect, and ship.", "/blog/nri-wedding-planning-timeline/"],
  ["Vendor Red Flags", "Review evidence, payment, product, customization, and shipping risks before ordering.", "/avoid-indian-wedding-shopping-scams/"],
  ["Bridal Lehenga Cost Guide", "Separate product price from customization, shipping, duties, and alterations.", "/blog/how-much-does-bridal-lehenga-cost-india-2026/"],
  ["Mexico Destination Wardrobe Sourcing", "Plan breathable fabrics, ceremony-by-ceremony outfits, and shipping timelines for a Mexico wedding weekend.", "/blog/mexico-wedding-wardrobe-sourcing-from-india/"],
  ["Indian Wedding Jewelry Comparison Guide", "Compare Kundan, Polki, Temple, and Meenakari bridal jewelry sets, hallmarks, and US shipping.", "/blog/how-to-choose-indian-wedding-jewelry-usa/"],
  ["Authentic Kanchipuram Silk Saree Guide", "Verify pure mulberry silk, zari testing, Silk Mark documentation, and landed US delivery costs.", "/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/"],
  ["Custom Groom Sherwani Sizing Guide", "Five critical sherwani measurements, fabric choices, and remote custom-fit risk reduction.", "/blog/custom-sherwani-sizing-guide-india-usa/"],
  ["Bulk Indian Wedding Return Gifts Guide", "Compare favor options, quantities, packaging, shipping, and customs duties for US/Canada delivery.", "/blog/indian-wedding-return-gifts-bulk-usa/"],
  ["South Indian Christian Wedding Outfit Guide", "Coordinate bridal Manthrakodi sarees, groom suits, and family attire with church and family traditions.", "/blog/south-indian-christian-wedding-outfit-guide/"],
  ["Wedding Accessories & Ceremony Items Guide", "Review current sourcing scope for dupattas, pagris, juttis, kalire, and ceremony accessories.", "/wedding-accessories-and-ceremony-items-from-india/"],
] as const

function ResourceCards({ resources }: { resources: ReadonlyArray<readonly [string, string, string]> }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {resources.map(([title, description, href]) => (
        <article key={href} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-white p-7">
          <h3 className="font-serif text-2xl font-semibold text-[#1f1f1f]">{title}</h3>
          <p className="mt-3 flex-1 leading-7 text-[#4d403a]">{description}</p>
          <Link href={href} className="mt-6 inline-flex self-start font-semibold text-[#7a6841]">Open resource →</Link>
        </article>
      ))}
    </div>
  )
}

export default function FreeGuidesPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Free planning resources</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Free Indian Wedding Planning Resources</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#e8dfd2]">
            Explore the guides and planning tool previews freely. The ceremony toolkit download asks for your details; planning follow-up has a separate, optional opt-in.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Mexico, Jamaica, and Punta Cana</p>
          <h2 className="mb-9 font-serif text-4xl font-semibold">Destination-wedding planning tools</h2>
          <ResourceCards resources={destinationTools} />
        </div>
      </section>

      <section className="bg-[#f0ebe3] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">India sourcing</p>
          <h2 className="mb-9 font-serif text-4xl font-semibold">Wedding-shopping guides</h2>
          <ResourceCards resources={shoppingGuides} />
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <Link href="/contact/" className="inline-flex rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white">Request a Free 30-Minute Consultation</Link>
      </section>
    </main>
  )
}
