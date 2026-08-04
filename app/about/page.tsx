import Image from "next/image"
import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/about/",
  title: "About CeremonyVerse — Bhamini's Story",
  description: "From a Surat fabric family to two multi-day family weddings. Bhamini now helps US families source from India and work clearly with Mexico wedding partners.",
  keywords: "CeremonyVerse founder, Bhamini CeremonyVerse, Surat fabric trade family, Mexico wedding concierge, interfaith wedding experience, NRI wedding concierge, Indian wedding outfit sourcing",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "About", url: "/about/" },
]);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About CeremonyVerse",
  url: "https://www.ceremonyverse.com/about/",
  description:
    "CeremonyVerse was founded by Bhamini, whose family has been in Surat's fabric trade for generations. We source Indian wedding outfits from Surat and Delhi and help families work with independent wedding partners in Mexico.",
  mainEntity: {
    "@type": "Organization",
    name: "CeremonyVerse",
    founder: {
      "@type": "Person",
      name: "Bhamini",
      jobTitle: "Founder & Lead Sourcing Manager",
      description: "Bhamini is from Surat, India's textile capital. Her family has been in the fabric trade for generations. She coordinated two of her own sons' multi-day weddings—one interfaith celebration in New Jersey and one at a Hard Rock resort in Mexico.",
    },
    foundingDate: "2021",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "PA",
      addressLocality: "Philadelphia",
    },
    telephone: "+12153419990",
    email: "bhamini@ceremonyverse.com",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-about" data={organizationSchema} />
      <SeoNav />

      {/* HERO */}
      <section className="py-20 px-6 text-white" style={{ background: "#2f2f2f", color: "#f8f6f2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#7a6841" }}>
            About CeremonyVerse
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            My family is from Surat. I&apos;ve coordinated two of my own sons&apos; weddings.
            <br />
            <span style={{ color: "#7a6841" }}>Now I help your family do the same.</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#e8dfd2" }}>
            CeremonyVerse is the service I wished existed when I was planning my own sons&apos; weddings.
            Outfit sourcing from Surat and Delhi. A clear handoff to a Mexico-based planner, with optional
            family, guest, arrival, and India-sourcing support under a separate written scope.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--cv-accent)" }}>
            Meet the Founder
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Bhamini — Founder &amp; Lead Sourcing Manager
          </h2>

          <div className="prose prose-lg max-w-none text-[#4d403a] leading-relaxed space-y-5">
            <p>
              I&apos;m Bhamini. I was born in Surat — India&apos;s textile capital. My family has been in the fabric
              trade for generations, dealing in raw fabrics and fabric parts. Through the family business, I have
              connections with the families who actually handwork lehengas in Surat and across India. The same
              families whose work can move through longer wholesale, importing, and retail chains before reaching
              US shoppers.
            </p>
            <p>
              I started CeremonyVerse in 2021, but the real foundation was laid years before — when I coordinated
              my own two sons&apos; multi-day weddings. Those family experiences informed the planning and sourcing
              process I now use with clients.
            </p>
            <p>
              <strong>Son #1:</strong> Originally planned for Mexico. The venue was booked, deposits were made,
              and save-the-dates were sent. The pandemic disrupted the original plan, so the family held the
              wedding on the same dates in New Jersey instead. We are Hindu, and his
              wife is South Indian Christian, so it was a multi-day interfaith event. I found the venue. I found
              the caterer. I found the decorators. I found the makeup, hair, and mehndi artists. I found the priest
              for the Hindu ceremony and the church for the Christian ceremony. It was the hardest thing I&apos;ve
              ever done — and it taught me everything.
            </p>
            <p>
              <strong>Son #2:</strong> Got married at a Hard Rock resort in Mexico. About 150 guests attended.
              Immediate-family mehendi was held the day before; vidhi and garba followed the next day, then the
              wedding and reception on their own days. We worked with a Mexico planner, resort team, DJ,
              photographers, decor, entertainment, catering, and beauty providers. That family experience helps me
              prepare a stronger brief and hand couples to a Mexico planner with clearer questions and expectations.
            </p>
            <p>
              For both sons&apos; weddings, I sourced the outfits from India through my family&apos;s connections in
              Surat and Delhi. I also went myself to Kanchipuram and Banaras to source pure silk sarees —
              hallmark-certified, real zari, the authentic textile. The weavers there told me their sarees take a
              year to reach Gujarat through the distribution chain. I bought a pure silk Kanchipuram direct from
              the weaver for 20,000 rupees; the same saree (not even as nice) was 56,000 rupees in a posh Vadodara
              boutique. That&apos;s the markup I cut out — for lehengas, for sarees, for everything.
            </p>
            <p>
              I built CeremonyVerse to be the partner I wished I had — a US-based business with US accountability,
              family connections in Surat and Delhi, firsthand family experience with Mexico weddings, and a process
              that protects you at every step. Live video shopping so you see exactly what you&apos;re buying.
              Family inspection before anything ships. Milestone-based payments so you never pay for the next stage
              until you approve the previous one.
            </p>
            <p>
              CeremonyVerse packages the lessons from those family weddings into two clear services:
              India shopping and sourcing for US-based families, and a Mexico family concierge that prepares the
              brief, introduces an independent local planner, and can support guest and arrival details. Each paid
              project begins with a written scope, itemized outside costs, and documented approval steps.
            </p>
            <p>
              We&apos;re not the cheapest option in India — and we don&apos;t want to be. We&apos;re a safer,
              more transparent, accountable option for NRI families who want their dream Indian wedding
              with clearer documentation and accountability. Paid work follows the signed scope, applicable
              approval record, payment schedule, and itemized shipping terms.
            </p>
            <p className="font-medium" style={{ color: "#1f1f1f" }}>
              — Bhamini, Founder of CeremonyVerse
              <br />
              <a
                href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20learn%20more%20about%20CeremonyVerse."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal"
                style={{ color: "var(--cv-accent)", textDecoration: "underline" }}
              >
                Message me directly on WhatsApp →
              </a>
            </p>
          </div>
        </div>
      </section>

      <hr className="border-[#e6dfd5] max-w-4xl mx-auto" />

      {/* SERVICE IMAGES — no personal photos */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            What We Source &amp; Coordinate
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The full scope of what we handle
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            From outfits sourced through Surat and Delhi to a clear Mexico planner handoff —
            bridal lehengas, sherwanis, bridesmaid coordination, family outfits, jewelry, ceremonial items,
            gifts, welcome bags, guest information, transfers through independent providers, and arrival support.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/sourcing/bride-traditional.webp", alt: "Bride in embroidered traditional outfit with floral decor" },
              { src: "/images/sourcing/couple-portrait.webp", alt: "Couple in red lehenga and cream sherwani — coordinated wedding outfits" },
              { src: "/images/sourcing/kanchipuram-saree.webp", alt: "Pure silk Kanchipuram saree — sourced direct from weavers" },
              { src: "/images/sourcing/bridesmaid-green.webp", alt: "Coordinated green bridesmaid outfit" },
              { src: "/images/sourcing/groomsmen-lavender.webp", alt: "Groomsmen in matching lavender outfits with pink turbans" },
              { src: "/images/sourcing/bridal-jewelry.webp", alt: "Bridal jewelry set with pearls and gemstones" },
              { src: "/images/sourcing/real-lehenga-shop.webp", alt: "Real lehenga shop — red dresses on hangers, direct sourcing" },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCING & COORDINATION TEAM */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            How I Source &amp; Coordinate
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Family connections in Surat &amp; Delhi. A direct planner handoff in Mexico.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Surat &amp; Delhi — Outfit Sourcing</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                My family has been in Surat&apos;s fabric trade for generations. Through them, I source from the same
                places US Indian boutiques source from — without the boutique markup. Live video shopping. Family
                inspection before shipping. Semi-stitched ready pieces, or custom recreation through my local boutique
                at about 85% similarity to your reference image, for less than half the designer&apos;s cost.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Cancun &amp; Riviera Maya — Planner Handoff &amp; Family Support</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                CeremonyVerse prepares the family brief and introduces a Mexico-based planner who contracts and
                works directly with the couple. We can separately track family decisions, organize guest and arrival
                information, coordinate transfers through independent providers, and add India sourcing. No booking
                or deposit is made without the couple&apos;s written approval.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Kanchipuram &amp; Banaras Silk Sarees</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                I go myself to Kanchipuram and Banaras to source silk sarees — I don&apos;t send someone else, and I
                don&apos;t buy through middlemen. Pure silk, hallmark-certified, with real zari. I also source art silk
                and semi-silk gift sarees for return gifts and family. The weavers told me their sarees take a year to
                reach Gujarat through the distribution chain — by the time a pure silk Kanchipuram lands in a posh
                Vadodara shop, it&apos;s been marked up nearly 3x. I bought one direct from the weaver for 20,000 rupees;
                the same saree (not even as nice) was 56,000 rupees in a Vadodara boutique. That&apos;s the markup I cut
                out for you.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Original Custom Options</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Reference images help us understand your preferred silhouette, palette, and level of handwork.
                We do not sell unauthorized replicas or promise an exact copy of a designer&apos;s work. We research
                original options and custom briefs that fit the approved budget and vendor capabilities.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Ceremonial Items &amp; Gifts</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Vetted suppliers for puja thalis, kalash, mangalsutra, kaleeras, return gifts, sweets, and welcome
                bags — coordinated alongside your outfit order so everything ships together.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Welcome Bags &amp; Favors (Mexico)</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                For my son&apos;s wedding, I sourced custom canvas welcome bags from China and jhumka party favors for
                garba night. Similar items can be researched for a contracted Mexico scope, with costs itemized separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFICATION */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            How We Protect You
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Every step documented. Every payment milestone-based.
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "var(--cv-accent)" }}>✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Live video review on eligible tiers</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  You see the exact piece on live video before you commit. Fabric draped, embroidery up close, color
                  in natural light. That specific piece is reserved with your name and order number — no bait-and-switch.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "var(--cv-accent)" }}>✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Family inspection before shipping</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  Every finished piece is inspected in India — embroidery integrity, color match to your approved
                  sample, stitching quality, and measurements — before anything ships. We send you photos and video
                  before it leaves India.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "var(--cv-accent)" }}>✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Order documentation with reference photos</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  Every order is documented with reference photos and your written approval before production begins.
                  If a piece arrives with a quality issue, we work directly with the source — our established
                  relationships give us far more leverage than an individual buyer would have.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "var(--cv-accent)" }}>✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Milestone-based payment protection</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  Your signed proposal states the payment schedule and any approval milestones before paid work
                  begins. We maintain written project records and a US business contact throughout the scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 text-white" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "#7a6841" }}>
            Founder experience
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            What shaped the CeremonyVerse service
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>2</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#e8dfd2" }}>Multi-day family weddings</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>2</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#e8dfd2" }}>Distinct service paths</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>2</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#e8dfd2" }}>Mexico family weddings</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Written</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#e8dfd2" }}>Scope before paid work</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Let&apos;s talk about your wedding
          </h2>
          <p className="text-[#4d403a] mb-8 leading-relaxed">
            Book a free 30-minute consultation. Tell me your vision, timeline, and budget. I&apos;ll tell you
            honestly what I can do—India sourcing, a Mexico planner introduction, family concierge support, or a
            combination that keeps each provider&apos;s responsibility clear.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#1f1f1f", color: "#fff" }}
            >
              Book Free Consultation
            </Link>
            <Link
              href="/faq/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "var(--cv-accent)", color: "#1f1f1f" }}
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
