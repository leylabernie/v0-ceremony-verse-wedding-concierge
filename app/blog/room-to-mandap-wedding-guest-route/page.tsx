import Image from "next/image"
import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { buildBlogPosting, buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

const title = "From the Guest Room to the Mandap: A Resort Walkthrough for Families"
const description = "Plan the walk to your destination wedding ceremony with questions about room buildings, shade, seating, carts and a rain backup before you reserve the block."
const path = "/blog/room-to-mandap-wedding-guest-route/"
const published = "2026-11-09T12:00:00-05:00"
const image = "/images/editorial/riviera-maya-wedding-guest-walk.webp"

export const metadata = buildMetadata({
  title, description, path, image, ogType: "article", authorName: "Mini",
  publishedTime: published, modifiedTime: published,
})

export default function WeddingGuestRoute() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#302a25]">
      <SeoNav />
      <JsonLd id="guest-route-article" data={buildBlogPosting({
        headline: title, description, url: path, image, authorName: "Mini",
        datePublished: published, dateModified: published,
      })} />
      <JsonLd id="guest-route-breadcrumb" data={buildBreadcrumb([
        { name: "Blog", url: "/blog/" }, { name: title, url: path },
      ])} />
      <article className="mx-auto max-w-3xl px-6 py-14 leading-8 md:py-20 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-3xl [&_p]:my-5 [&_a]:underline">
        <Link href="/blog/">Wedding planning guides</Link>
        <h1 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">{title}</h1>
        <p>By <Link href="/about/mini/">Mini Patel</Link> · <time dateTime={published}>November 9, 2026</time></p>
        <p>At our family wedding at Generations Riviera Maya, our room block was split between two buildings. Some of my older aunts and uncles had a ten-minute walk to the lobby. Relatives with young children were on the third floor without elevator access to the pool. I had asked about the rate. I wish I had asked someone to walk me through the property.</p>
        <p>Before you reserve rooms for a Gujarati wedding, pick one guest and trace their day from breakfast to the mandap and back after garba. A room near the lobby may still be a long way from the ceremony. Here are the questions I would take to that conversation.</p>
        <figure className="my-8">
          <Image src={image} alt="An older woman and a younger woman walk together beneath a shaded arch toward a seaside mandap." width={720} height={1080} className="mx-auto max-h-[32rem] w-auto rounded-xl" />
          <figcaption className="mt-2 text-center text-sm">Illustration of a guest route at a coastal wedding.</figcaption>
        </figure>
        <h2>Ask for the walk from a room you can actually book</h2>
        <p>Give the group desk the room category in your proposal. Ask them to mark the possible buildings, the breakfast room, the ceremony entrance and the closest restroom on one map. Then request a short phone video of the route from the elevator to the ceremony seats. A property map can hide the last few metres of sand or a flight of steps.</p>
        <p>If a guest wants a step-free route, ask privately what would make the day comfortable. One person may want to join the baraat for the final stretch. Another may prefer to be seated before the music starts. Arrange the meeting place with them and ask whom they would like to accompany them.</p>
        <h2>Test the return trip after garba</h2>
        <p>If the resort offers carts, ask where they actually stop, whether one can be reserved, who dispatches it and how late it runs. Ask the coordinator to walk the rain route too. A covered ceremony space only solves half the problem if the path back to the guest rooms is exposed.</p>
        <blockquote className="my-8 border-l-4 border-[#a3815b] pl-5 italic">“For our ceremony and garba dates, could you mark the step-free route from the room categories in our block to both venues? Please show the cart stops, seating along the way, last pickup, and the route you would use if the event moves indoors. Which arrangements can you confirm now, and when will you confirm the rest?”</blockquote>
        <h2>Give guests a plan they can use on the day</h2>
        <p>Once the resort confirms the details, send each household a short note with the meeting point, departure time, a recognizable landmark and the on-site contact. Send the backup meeting point as well. Give the family member greeting guests the same note, and ask the resort to flag any room reassignment that changes the walk.</p>
        <p>If you are still comparing proposals, bring the maps and unresolved questions to a <Link href="/contact/">free 30-minute resort proposal review</Link>. For resort stays and wedding guest travel quotes, visit <a href="https://ceremonyversetravel.com/">CeremonyVerse Travel</a>, an affiliate of A.S.A.P. Cruises Inc. / OutsideAgents.com. The resort confirms room locations, transport arrangements and availability.</p>
        <h2>Sources</h2>
        <p><Link href="/real-weddings/">Mini’s account of the family wedding at Generations Riviera Maya</Link> documents the original room assignments. The sample request above is a template you can adapt for your resort.</p>
      </article>
    </main>
  )
}
