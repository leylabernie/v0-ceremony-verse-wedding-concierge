import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { buildBlogPosting, buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

const title = "After the wedding, should you stay at the same resort for your honeymoon?"
const description = "Compare two written quotes for the nights after your destination wedding, including the room move, transfer and time you get together before your flight."
const path = "/blog/honeymoon-after-destination-wedding-stay-or-switch-resorts/"
const published = "2026-11-10T09:00:00-05:00"

export const metadata = buildMetadata({
  title, description, path, ogType: "article", authorName: "Mini",
  publishedTime: published, modifiedTime: published,
})

export default function HoneymoonResortGuide() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#302a25]">
      <SeoNav />
      <JsonLd id="honeymoon-resort-article" data={buildBlogPosting({
        headline: title, description, url: path, authorName: "Mini",
        datePublished: published, dateModified: published,
      })} />
      <JsonLd id="honeymoon-resort-breadcrumb" data={buildBreadcrumb([
        { name: "Blog", url: "/blog/" }, { name: title, url: path },
      ])} />
      <article className="mx-auto max-w-3xl px-6 py-14 leading-8 md:py-20 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-3xl [&_p]:my-5 [&_a]:underline">
        <Link href="/blog/">Wedding planning guides</Link>
        <h1 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">{title}</h1>
        <p>By <Link href="/about/mini/">Mini Patel</Link> · <time dateTime={published}>November 10, 2026</time></p>
        <p>The morning after your last garba, who would you like to have breakfast with? If half the family is staying another night, you may want one more breakfast together. Or you may want a quiet table for two. I would settle that question before comparing room prices.</p>
        <p>At our family wedding at Generations Riviera Maya, relatives in the same block ended up in different buildings. When a couple tells me they want to stay put after the wedding, the first thing I would ask the resort is whether they can keep their actual room. An extra reservation for the same category still leaves that question open.</p>
        <h2>Ask the wedding resort what staying would look like</h2>
        <p>Give the group desk your last night in the block and your departure date. Ask for the total for the extra nights, the room category, and written confirmation of whether you can stay in that room. If they can only confirm the room assignment at check-in, ask where your bags can go on the changeover day. Check whether breakfast on the first morning and the return airport transfer are included in the quote.</p>
        <h2>Price the move door to door</h2>
        <p>For the second resort, start with the same dates, number of travelers and currency. Ask both properties for checkout and room-access times. Then ask the transfer provider for a pickup window, the total fare for two with bags, and where you will meet the driver. If the new resort can store luggage before the room is ready, ask which facilities you can use during that interval.</p>
        <p>Imagine checkout at 11 a.m., pickup at noon and access to the new room at 3 p.m. In that example, four hours pass between leaving one room and entering the next. Would lunch by the pool make that afternoon feel like a holiday? Or would you spend it waiting to unpack? Change those times to the ones in your own quotes.</p>
        <h2>Put the two quotes side by side</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Write down the total for both travelers, including mandatory charges, the transfer between resorts and the ride to the airport. Mark anything the supplier still needs to quote.</li>
          <li>Circle the first hour you could comfortably make a plan together. Compare that with your airport pickup on the last day.</li>
          <li>List the cancellation deadline and deposit for each reservation. Ask who handles changes if the wedding dates move.</li>
        </ul>
        <p>For a honeymoon quote, send Mini your travel dates, departure city, number of nights and budget through <a href="https://ceremonyversetravel.com/honeymoons/">CeremonyVerse Travel</a>. Mention the wedding resort if you already have one. CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc. / OutsideAgents.com. Suppliers confirm pricing, room assignments and availability.</p>
        <p>If your family is still choosing the wedding venue, bring the room-block proposal to a <Link href="/contact/">free 30-minute wedding planning consultation</Link>.</p>
        <h2>Source</h2>
        <p><Link href="/blog/room-to-mandap-wedding-guest-route/">My family’s Riviera Maya room-block experience</Link> explains why I ask about the actual building and room before planning a move.</p>
      </article>
    </main>
  )
}
