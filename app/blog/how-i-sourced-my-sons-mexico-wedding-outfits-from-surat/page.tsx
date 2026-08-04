import Link from "next/link"
import Image from "next/image"
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildBlogPosting, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/how-i-sourced-my-sons-mexico-wedding-outfits-from-surat/",
  title: "How I Sourced My Son's Mexico Wedding Outfits from Surat",
  description: "How Bhamini sourced outfits for her son's 4-day Mexico wedding from Surat and Delhi, and the documentation lessons behind CeremonyVerse.",
  keywords: "Mexico Indian wedding outfits, Surat lehenga sourcing, NRI bride Mexico wedding, Indian wedding outfit sourcing story, Bhamini CeremonyVerse, son wedding Mexico outfits",
  publishedTime: "2026-07-14T10:00:00-05:00",
  authorName: "Bhamini, Founder of CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "How I Sourced My Son's Mexico Wedding Outfits from Surat",
  description: "First-person family story about sourcing outfits for a 4-day Indian wedding in Mexico and the documentation lessons behind CeremonyVerse.",
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
    answer: "Yes. I sourced outfits for one son's multi-day wedding—originally planned for Mexico and later held in New Jersey after the pandemic disrupted the plan—and for my other son's multi-day wedding at a Hard Rock resort in Mexico. The work included bridal-party and family outfits, remote shopping in Surat and Delhi, inspection before shipping, and delivery planning for the United States.",
  },
  {
    question: "How does live video shopping work for Indian wedding outfits?",
    answer: "We schedule a video call with my family in Surat or Delhi. They lay out actual pieces in front of the camera — you see the fabric, embroidery, color in natural light, and weight. You pick what you want, that specific piece is reserved with your name, and my family inspects it before shipping. No bait-and-switch — the piece you saw on video is the piece that arrives.",
  },
  {
    question: "How much can I save sourcing from Surat vs. US boutiques?",
    answer: "There is no universal savings percentage. Compare the approved item price, CeremonyVerse service tier, shipping, customs estimate, alteration allowance, timeline, and return terms with written US boutique quotes.",
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
          A first-person story about coordinating outfits for two multi-day weddings—one moved to New Jersey after
          the pandemic disrupted the original plan and one held at a Hard Rock resort in Mexico.
        </p>
        <p className="text-sm text-[#4d403a] mb-12">
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
            twice. My two sons each had multi-day weddings. One was originally planned for Mexico, pivoted to New
            Jersey after COVID, and ended up being a Hindu and Christian interfaith celebration. The other
            took place at a Hard Rock resort in Mexico. Both informed the sourcing process I now use to help
            other families.
          </p>

          <p>
            People ask me all the time: <em>how do you actually source outfits from India for a Mexico wedding?</em>
            The answer is my family. My family has been in Surat&apos;s fabric trade for generations — raw fabrics
            and parts wholesale, the kind of business that connects you to every family who actually handworks
            lehengas in that region. When I needed outfits for my son&apos;s wedding, I used those family
            connections rather than relying only on US retail inventory.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The COVID Pivot — From Mexico to New Jersey in 4 Days
          </h2>

          <p>
            My son was originally going to get married in Mexico. The venue was booked, deposits were made, and
            save-the-dates were sent. The pandemic disrupted the original plan, and the Mexico wedding was canceled.
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
            sourcing and coordination lessons from that family experience shaped the more careful, documented
            process I now offer through CeremonyVerse.
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
            How I Would Compare the Costs Today
          </h2>

          <p>
            The useful comparison is not an India price beside a boutique sticker price. It is the complete landed
            scope: selected product, customization, service fee, shipping, customs estimate, alteration allowance,
            timeline, payment schedule, and remedy terms.
          </p>

          <p>
            My family wedding experience showed me that India sourcing can provide different design, handwork,
            and group-order options. It did not create a universal savings percentage that can honestly be promised
            to every bride or family.
          </p>

          <p>
            I don&apos;t source designer-label pieces (no Manish Malhotra, no Sabyasachi — if you want those, buy
            them direct from the designer&apos;s store). What I source is authentic Indian handwork — zardozi, aari,
            gota patti, and resham. Reference images guide the brief, but CeremonyVerse does not sell unauthorized
            replicas or claim that an unbranded item is equivalent to a designer product.
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
            The New Jersey wedding was a scramble. The later wedding at a Hard Rock resort in Mexico was smoother, because
            I had learned. Here&apos;s what I do for every bride now, based on those two experiences:
          </p>

          <ul className="space-y-3 my-6">
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Start early.</strong> Custom work, approvals, tailoring, inspection, and shipping all need contingency time. If your timeline is short, ask what can be confirmed before committing.</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Approve the actual item.</strong> Use live video, detailed photos, measurements, and written specifications to confirm the piece before payment milestones and shipping.</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Use written payment milestones.</strong> Tie later payments to documented approvals and keep the applicable schedule in the signed proposal or service agreement.</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Document the inspection.</strong> The applicable CeremonyVerse scope states which photos, video, measurements, and condition checks occur before shipping.</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--cv-accent)" }} className="font-bold">✓</span> <span><strong>Choose a fitting plan.</strong> Decide whether local alterations, semi-stitched work, or remote custom stitching best fits the garment, body, timeline, and available tailor.</span></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Both Sons&apos; Weddings — Different Lessons, Same Conclusion
          </h2>

          <p>
            My first son&apos;s wedding (the COVID pivot to New Jersey) taught me how to coordinate an interfaith
            4-day event from scratch — venue, caterer, decorators, makeup, hair, mehndi, priest, church. My second
            son&apos;s wedding at a Hard Rock resort in Mexico taught me how to do it in a destination setting where
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
          <p className="text-[#e8dfd2] mb-6 leading-relaxed">
            Book a free 30-minute consultation. Tell me your vision, dates, and budget. I&apos;ll tell you honestly
            what I can do — outfit sourcing, Mexico coordination, or both.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Free Consultation
            </a>
            <Link
              href="/indian-wedding-coordination-mexico/"
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
              <p className="text-sm text-[#4d403a] mt-1">Full pricing breakdown by tier, with US boutique comparisons.</p>
            </Link>
            <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" className="block p-4 bg-white border border-[#e6dfd5] rounded-xl hover:shadow-md transition">
              <p className="font-semibold text-[#1f1f1f]">When to Order Indian Wedding Outfits as an NRI Bride</p>
              <p className="text-sm text-[#4d403a] mt-1">Timeline guidance — when to start, when to ship, when to tailor.</p>
            </Link>
          </div>
        </div>
              <SourcingCallout />
      </article>
    </main>
  )
}
