import Image from "next/image"
import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/about",
  title: "About CeremonyVerse — Bhamini's Story: Surat Family, Two Sons' Weddings",
  description: "Meet Bhamini, founder of CeremonyVerse. My family has been in Surat's fabric trade for generations. I coordinated my own sons' 4-day weddings (one interfaith in NJ, one at Hard Rock Mexico). Now I help your family do the same.",
  keywords: "CeremonyVerse founder, Bhamini CeremonyVerse, Surat fabric trade family, Mexico wedding coordinator, interfaith wedding planner, NRI wedding concierge, Indian wedding outfit sourcing",
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
    "CeremonyVerse was founded by Bhamini, whose family has been in Surat's fabric trade for generations. We source Indian wedding outfits direct from Surat and Delhi, and coordinate Mexico weddings in Cancun and Riviera Maya.",
  mainEntity: {
    "@type": "Organization",
    name: "CeremonyVerse",
    founder: {
      "@type": "Person",
      name: "Bhamini",
      jobTitle: "Founder & Lead Sourcing Manager",
      description: "Bhamini is from Surat, India's textile capital. Her family has been in the fabric trade for generations. She has coordinated two of her own sons' 4-day weddings — one interfaith in New Jersey, one at the Hard Rock Cafe in Mexico.",
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
      <section className="py-20 px-6" style={{ background: "#2f2f2f", color: "#f8f6f2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "#7a6841" }}>
            About CeremonyVerse
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            My family is from Surat. I&apos;ve coordinated two of my own sons&apos; weddings.
            <br />
            <span style={{ color: "#7a6841" }}>Now I help your family do the same.</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#d4c8b8" }}>
            CeremonyVerse is the service I wished existed when I was planning my own sons&apos; weddings.
            Outfit sourcing direct from Surat and Delhi. Mexico wedding coordination in Cancun and Riviera Maya.
            All based on real experience — not theory.
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
              families whose work ends up in US Indian boutiques, marked up 2x or more.
            </p>
            <p>
              I started CeremonyVerse in 2021, but the real foundation was laid years before — when I coordinated
              my own two sons&apos; weddings. Both were 4-day events. Both taught me everything I now use to help
              other families.
            </p>
            <p>
              <strong>Son #1:</strong> Originally planned for Mexico. He used ShaadiDestination to arrange it —
              booked the venue, made the deposits, sent the save-the-dates. Then COVID hit. Mexico closed. He
              decided he still wanted to marry on the same dates, so we did it in New Jersey instead. We are Hindu,
              and his wife is South Indian Christian, so it was a 4-day interfaith event. I found the venue. I found
              the caterer. I found the decorators. I found the makeup, hair, and mehndi artists. I found the priest
              for the Hindu ceremony and the church for the Christian ceremony. It was the hardest thing I&apos;ve
              ever done — and it taught me everything.
            </p>
            <p>
              <strong>Son #2:</strong> Got married in Mexico at the Hard Rock Cafe — also a 4-day event. By then I
              had learned from the New Jersey pivot, and the Mexico coordination was smoother for it. The vendors I
              used — the planner, the DJ, the photographers, the decorator, the beauty team — are the vendors I now
              connect you with.
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
              family connections in Surat and Delhi, real experience coordinating Mexico weddings, and a process
              that protects you at every step. Live video shopping so you see exactly what you&apos;re buying.
              Family inspection before anything ships. Milestone-based payments so you never pay for the next stage
              until you approve the previous one.
            </p>
            <p>
              Four years later, we&apos;ve dressed hundreds of NRI brides, grooms, bridesmaids, groomsmen, and
              families across the United States. We&apos;ve coordinated Mexico weddings with full vendor management.
              We&apos;ve sourced Kanchipuram silk sarees directly from Tamil Nadu weavers. We&apos;ve recreated
              designer-inspired pieces through a local boutique at about 85% similarity for less than half the
              designer&apos;s cost. We&apos;ve coordinated outfits for entire families across multiple states and
              multiple days.
            </p>
            <p>
              We&apos;re not the cheapest option in India — and we don&apos;t want to be. We&apos;re the safest,
              most transparent, and most accountable option for NRI families who want their dream Indian wedding
              without scams, sizing disasters, or vendor chaos. Every order is documented. Every payment is
              milestone-based. Every shipment is insured. And every client has my personal phone number.
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

      {/* SON'S WEDDING PHOTO GALLERY */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Real Photos — My Son&apos;s 4-Day Hindu &amp; Christian Wedding
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The wedding that started it all
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            Originally planned for Mexico, pivoted to New Jersey after COVID. Four days. Hindu and Christian
            ceremonies. Coordinated outfits for bride, groom, full bridal party, and family across all events.
            This is the experience I now bring to your wedding.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/son-weddings/son-wedding-nj-bride-groom.webp", alt: "Bride in red and gold lehenga with groom in white sherwani and turban — Hindu ceremony portrait" },
              { src: "/images/son-weddings/son-wedding-nj-family.webp", alt: "Family portrait — coordinated outfits across generations" },
              { src: "/images/son-weddings/son-wedding-mexico-baarat.webp", alt: "Son's Mexico wedding at Hard Rock Cafe — baarat procession with palm trees" },
              { src: "/images/son-weddings/son-wedding-01.webp", alt: "Full bridal party in coordinated Indian wedding attire at the New Jersey venue" },
              { src: "/images/son-weddings/son-wedding-02.webp", alt: "Hindu ceremony — bride in red lehenga with groom in sherwani" },
              { src: "/images/son-weddings/son-wedding-03.webp", alt: "Christian ceremony in church — bride in white gown" },
              { src: "/images/son-weddings/son-wedding-04.webp", alt: "Bride in white gown and groom in suit with bridal party — Christian ceremony" },
              { src: "/images/son-weddings/son-wedding-05.webp", alt: "Hindu wedding ceremony rituals" },
              { src: "/images/son-weddings/son-wedding-06.webp", alt: "Bridal party in coordinated Indian wedding attire" },
              { src: "/images/son-weddings/son-wedding-07.webp", alt: "Couple in traditional Hindu wedding attire outdoors" },
              { src: "/images/son-weddings/son-wedding-08.webp", alt: "Christian ceremony — bride in white gown" },
              { src: "/images/son-weddings/son-wedding-09.webp", alt: "Bridal party combining Hindu and Christian ceremony elements" },
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

          <div className="text-center mt-10">
            <Link
              href="/indian-wedding-coordination-mexico"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#1f1f1f", color: "#fff" }}
            >
              Read the Full Wedding Story →
            </Link>
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
            Family connections in Surat &amp; Delhi. Vetted vendors in Mexico.
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
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Cancun &amp; Riviera Maya — Mexico Coordination</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                The vendors I used for my own son&apos;s Mexico wedding — planner, DJ, photographers, decorator,
                beauty — are the vendors I now connect you with. Tested at a real 4-day Indian destination wedding.
                Optional full multi-day on-site coordination, including interfaith ceremonies. Outfit sourcing from
                India as an add-on.
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
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Local Boutique — Custom Recreation</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                A skilled local boutique who can recreate a designer-inspired piece from your reference image —
                typically about 85% similar to the original, at less than 50% of the designer&apos;s cost. The boutique
                has helped many brides with bridesmaid lehengas in any color and style, within their budget.
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
                garba night. Same for your Mexico wedding — sourced direct, no resort markup.
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
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Live video verification on every order</h3>
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
                  You never pay for the next stage until you&apos;ve approved the previous one. 25% deposit to reserve,
                  35% after fabric approval, 30% after final inspection, 10% on delivery. We have US presence and
                  accountability — not an anonymous Instagram account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "#7a6841" }}>
            By the Numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            What we&apos;ve built in 4+ years
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>4+</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#d4c8b8" }}>Years in business</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>27+</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#d4c8b8" }}>5-star client reviews</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>3</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#d4c8b8" }}>Family Mexico weddings coordinated</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>50</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#d4c8b8" }}>US states served</p>
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
            honestly what I can do — outfit sourcing, Mexico coordination, or both.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#1f1f1f", color: "#fff" }}
            >
              Book Free Consultation
            </Link>
            <Link
              href="/faq"
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
