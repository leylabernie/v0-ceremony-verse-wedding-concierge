import Link from "next/link"
import Image from "next/image"
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildBlogPosting, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/blog/how-i-sourced-my-sons-mexico-wedding-outfits-from-surat/",
  title: "How I Sourced My Son's Mexico Wedding Outfits from Surat — CeremonyVerse Story",
  description: "First-person story: how Bhamini sourced outfits for her son's 4-day Indian wedding in Mexico from Surat and Delhi — live video shopping, family inspection, direct pricing. Real photos included.",
  keywords: "Mexico Indian wedding outfits, Surat lehenga sourcing, NRI bride Mexico wedding, Indian wedding outfit sourcing story, Bhamini CeremonyVerse, son wedding Mexico outfits",
  publishedTime: "2026-07-14T10:00:00-05:00",
  authorName: "Bhamini, Founder of CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "How I Sourced My Son's Mexico Wedding Outfits from Surat",
  description: "First-person story: how Bhamini sourced outfits for her son's 4-day Indian wedding in Mexico from Surat and Delhi — live video shopping, family inspection, direct pricing.",
  url: "/blog/how-i-sourced-my-sons-mexico-wedding-outfits-from-surat/",
  image: "/images/sourcing/couple-portrait.webp",
  datePublished: "2026-07-14T10:00:00-05:00",
  authorName: "Bhamini, Founder of CeremonyVerse",
  keywords: ["Mexico Indian wedding", "Surat lehenga sourcing", "NRI bride", "Indian wedding outfits", "CeremonyVerse", "son wedding story"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "How I Sourced My Son's Mexico Wedding Outfits from Surat", url: "/blog/how-i-sourced-my-sons-mexico-wedding-outfits-from-surat/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Can you source outfits for a Mexico destination wedding from India?",
    answer: "Yes. I sourced outfits for my own son's 4-day wedding — originally planned for Mexico, later held in New Jersey after COVID — and for my other son's actual Mexico wedding at the Hard Rock Cafe. Both were 4-day events with full bridal party and family outfits. Live video shopping from Surat and Delhi, family inspection before shipping, and direct delivery to the bride's US address (or directly to Mexico if preferred).",
  },
  {
    question: "How does live video shopping work for Indian wedding outfits?",
    answer: "We schedule a video call with my family in Surat or Delhi. They lay out actual pieces in front of the camera — you see the fabric, embroidery, color in natural light, and weight. You pick what you want, that specific piece is reserved with your name, and my family inspects it before shipping. No bait-and-switch — the piece you saw on video is the piece that arrives.",
  },
  {
    question: "How much can I save sourcing from Surat vs. US boutiques?",
    answer: "Most brides save 40–60%. Sangeet and mehndi outfits run $150–$300 landed vs. $400–$700 at US boutiques. Premium bridal lehengas with heavy zardozi and real silk run $1,500–$3,000 landed vs. $2,500–$5,000 at boutiques. You often get heavier handwork or better fabric at the same price point, because you skip the boutique markup.",
  },
]);

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <SeoNav />

      {/* HERO */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "var(--cv-accent)" }}>
          CeremonyVerse Stories · 9 min read
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: 1.15 }}>
          How I Sourced My Son&apos;s Mexico Wedding Outfits from Surat
        </h1>
        <p className="text-lg text-[#4d403a] mb-6 leading-relaxed">
          A first-person story about coordinating outfits for two 4-day weddings — one pivoted to New Jersey after
          COVID, one at the Hard Rock Cafe in Mexico — and what I learned that I now use to help other NRI families.
        </p>
        <p className="text-sm text-[#6f6a63] mb-12">
          By <strong style={{ color: "#1f1f1f" }}>Bhamini, Founder of CeremonyVerse</strong> · Published July 14, 2026
        </p>

        {/* Featured image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/sourcing/couple-portrait.webp"
            alt="Indian wedding couple in red lehenga and cream sherwani — the coordinated look we source and deliver"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </div>

        {/* BODY */}
        <div className="prose prose-lg max-w-none text-[#4d403a] leading-relaxed space-y-6">
          <p>
            I&apos;m Bhamini. I run CeremonyVerse, and I help NRI families source Indian wedding outfits and
            coordinate Mexico weddings. But before I did this professionally, I did it for my own family —
            twice. My two sons each had 4-day weddings. One was originally planned for Mexico, pivoted to New
            Jersey after COVID, and ended up being a Hindu and Christian interfaith celebration. The other
            actually happened in Mexico at the Hard Rock Cafe. Both taught me everything I now use to help
            other families.
          </p>

          <p>
            People ask me all the time: <em>how do you actually source outfits from India for a Mexico wedding?</em>
            The answer is my family. My family has been in Surat&apos;s fabric trade for generations — raw fabrics
            and parts wholesale, the kind of business that connects you to every family who actually handworks
            lehengas in that region. When I needed outfits for my son&apos;s wedding, I didn&apos;t go to a US
            boutique and pay 2x markup. I went to my family.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The COVID Pivot — From Mexico to New Jersey in 4 Days
          </h2>

          <p>
            My son was originally going to get married in Mexico. He used ShaadiDestination to arrange that — booked
            the venue, made the deposits, sent the save-the-dates. Then COVID hit. Mexico closed. The wedding had
            to be canceled.
          </p>

          <p>
            He decided he still wanted to marry on the same dates. So we did it in New Jersey instead — and I
            coordinated the whole thing myself. We are Hindu, and his wife is South Indian Christian, so we
            pulled together a 4-day event that honored both traditions. I found the venue. I found the caterer.
            I found the decorators. I found the makeup, hair, and mehndi artists. I found the priest for the Hindu
            ceremony and the church for the Christian ceremony.
          </p>

          <p>
            It was the hardest thing I&apos;ve ever done. But it also taught me everything. When you&apos;re
            coordinating your own son&apos;s wedding, you don&apos;t get to make excuses. You find a way. And the
            way I found — the vendors I used, the timeline I built, the workarounds I created — is exactly what I
            now offer other families through CeremonyVerse.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The Outfits — How I Sourced Them Direct from Surat &amp; Delhi
          </h2>

          <p>
            For both my sons&apos; weddings, I sourced the outfits from India through my family&apos;s connections
            in Surat and Delhi. Here&apos;s how it actually works — and how it works for you if you book with
            CeremonyVerse.
          </p>

          <p>
            <strong>Step 1: Live video shopping.</strong> My family in Surat and Delhi lays out actual pieces in
            front of a camera. I join the call with the bride (or the family). We see the fabric draped, the
            embroidery up close, the color in natural light. The bride picks what she wants. That specific piece
            is reserved with her name and order number — no bait-and-switch later.
          </p>

          <p>
            <strong>Step 2: Family inspection before shipping.</strong> Once the piece is ready (or for ready pieces,
            once it&apos;s selected), my family inspects it. Embroidery integrity, color match to what was approved
            on video, stitching quality, measurements if custom. They send photos and video before anything leaves
            India. If something isn&apos;t right, it doesn&apos;t ship.
          </p>

          <p>
            <strong>Step 3: Direct shipping.</strong> DHL or FedEx from India to the bride&apos;s US address,
            fully insured. Or, for Mexico weddings, direct to the Mexico resort if the bride prefers. Customs
            paperwork handled. Tracking provided. The bride knows exactly when her outfits will arrive.
          </p>

          <p>
            <strong>Step 4: Local tailoring for final fit.</strong> The pieces arrive semi-stitched. The bride takes
            them to her local tailor for final fit. This is intentional — a US-based tailor can do a final fitting
            with the bride in person, which produces a better result than shipping a fully-stitched piece across
            the world and hoping it fits.
          </p>

          {/* In-line photo — service image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-8 not-prose">
            <Image
              src="/images/sourcing/bride-traditional.webp"
              alt="Bride in embroidered traditional outfit — the kind of piece we source direct from Surat"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            What It Cost — And What It Would Have Cost at a US Boutique
          </h2>

          <p>
            I want to be honest about the economics, because this is the part most people don&apos;t understand.
            A sangeet or mehndi outfit — light resham or machine work — runs about $150–$300 landed at your US
            door when sourced direct from Surat. The same outfit at a US Indian boutique runs $400–$700. That&apos;s
            not a typo. The boutique marks it up 2x because they have a storefront, inventory, and importer costs
            to cover.
          </p>

          <p>
            A premium bridal lehenga with heavy zardozi and real silk — the kind I sourced for my son&apos;s
            wedding — runs $1,500–$3,000 landed direct. The same quality at a US boutique runs $2,500–$5,000.
            And honestly, brides often tell me the piece they receive from us is even better than what they saw
            at a boutique, because at the same price point, you can afford heavier handwork or better fabric when
            you skip the markup.
          </p>

          <p>
            I don&apos;t source designer-label pieces (no Manish Malhotra, no Sabyasachi — if you want those, buy
            them direct from the designer&apos;s store). What I source is authentic Indian handwork — zardozi, aari,
            gota patti, resham — done by families who have been doing this for generations. The same handwork that
            ends up in US boutiques, without the boutique markup.
          </p>

          <p>
            The same thing applies to silk sarees. I go myself to Kanchipuram and Banaras — not someone I send, me
            personally. Pure silk, hallmark-certified, real zari. The weavers there told me their sarees take a year
            to reach Gujarat through the distribution chain. I bought a pure silk Kanchipuram direct from the weaver
            for 20,000 rupees; I then went to a posh shop in Vadodara and found the same saree — not even as nice —
            for 56,000 rupees. That&apos;s nearly 3x markup. For my son&apos;s wedding, I sourced all the silk sarees this
            way. It&apos;s the same principle as the lehengas: go to the source, skip the chain.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            What I&apos;d Do Differently — And What I Now Do For Every Bride
          </h2>

          <p>
            The New Jersey wedding was a scramble. The Mexico wedding at the Hard Rock Cafe was smoother, because
            I had learned. Here&apos;s what I do for every bride now, based on those two experiences:
          </p>

          <ul className="space-y-3 my-6">
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Start early.</strong> Top families who do this work book up. 6–12 months before your wedding is ideal. If you&apos;re closer than that, contact me and I&apos;ll tell you honestly what&apos;s achievable.</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Approve everything on live video.</strong> Never buy from a photo. Always see the actual piece on video before you commit. This is non-negotiable.</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Use milestone payments.</strong> 25% deposit, 35% after fabric approval, 30% after inspection, 10% on delivery. Never pay for the next stage until you approve the previous one.</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Get family inspection before shipping.</strong> My family inspects every piece before it leaves India. Photos and video before it ships. If something isn&apos;t right, it doesn&apos;t ship.</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Ship semi-stitched and tailor locally.</strong> Better fit than fully-stitched-and-shipped. Trust me on this one.</span></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Both Sons&apos; Weddings — Different Lessons, Same Conclusion
          </h2>

          <p>
            My first son&apos;s wedding (the COVID pivot to New Jersey) taught me how to coordinate an interfaith
            4-day event from scratch — venue, caterer, decorators, makeup, hair, mehndi, priest, church. My second
            son&apos;s wedding (Mexico at the Hard Rock Cafe) taught me how to do it in a destination setting where
            you can&apos;t just drive to the venue to check on things.
          </p>

          <p>
            Both weddings were the best weeks of my life. Both were also exhausting, stressful, and full of details
            I had to manage. That&apos;s why I started CeremonyVerse — so other families don&apos;t have to figure
            this out alone. The vendors I used, the sourcing connections I have, the timeline templates I built —
            all of it is now available to your family.
          </p>

          <p>
            If you&apos;re planning a Mexico wedding and need outfits sourced from India, or a full coordinator who&apos;s
            actually done this before (twice, for her own sons), I&apos;d love to talk. Book a free consultation and
            tell me your vision.
          </p>

          {/* Photo grid — service images, no personal photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8 not-prose">
            {[
              { src: "/images/sourcing/bride-traditional.webp", alt: "Bride in embroidered traditional outfit — sourced direct" },
              { src: "/images/sourcing/couple-portrait.webp", alt: "Couple in coordinated wedding outfits — red lehenga and cream sherwani" },
              { src: "/images/sourcing/bridesmaid-green.webp", alt: "Coordinated green bridesmaid outfit" },
              { src: "/images/sourcing/bridal-jewelry.webp", alt: "Bridal jewelry set — sourced direct" },
              { src: "/images/sourcing/kanchipuram-saree.webp", alt: "Pure silk Kanchipuram saree — direct from weavers" },
              { src: "/images/sourcing/real-lehenga-shop.webp", alt: "Real lehenga shop — direct sourcing in action" },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <p className="font-medium text-center mt-12" style={{ color: "#1f1f1f" }}>
            — Bhamini, Founder of CeremonyVerse
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#1f1f1f] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Planning a Mexico wedding? Need outfits sourced from India?
          </h2>
          <p className="text-[#d4c8b8] mb-6 leading-relaxed">
            Book a free 30-minute consultation. Tell me your vision, dates, and budget. I&apos;ll tell you honestly
            what I can do — outfit sourcing, Mexico coordination, or both.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Free Consultation
            </a>
            <Link
              href="/indian-wedding-coordination-mexico"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              See Mexico Coordination Details
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12 pt-8 border-t border-[#e6dfd5]">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "var(--cv-accent)" }}>
            Related Reading
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" className="block p-4 bg-white border border-[#e6dfd5] rounded-xl hover:shadow-md transition">
              <p className="font-semibold text-[#1f1f1f]">How Much Does a Bridal Lehenga Cost from India in 2026?</p>
              <p className="text-sm text-[#6f6a63] mt-1">Full pricing breakdown by tier, with US boutique comparisons.</p>
            </Link>
            <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" className="block p-4 bg-white border border-[#e6dfd5] rounded-xl hover:shadow-md transition">
              <p className="font-semibold text-[#1f1f1f]">When to Order Indian Wedding Outfits as an NRI Bride</p>
              <p className="text-sm text-[#6f6a63] mt-1">Timeline guidance — when to start, when to ship, when to tailor.</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
