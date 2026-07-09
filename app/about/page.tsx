import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/about",
  title: "About CeremonyVerse — Founder Bhamini & Our India Sourcing Team",
  description:
    "Meet the CeremonyVerse team: founder Bhamini, our India-based designer, tailor, fabric specialist, and jewelry supplier. Learn how we vet partners and source authentic Indian wedding outfits for NRI families.",
  keywords: "CeremonyVerse founder, Bhamini CeremonyVerse, Indian wedding sourcing team, vetted India vendors, NRI wedding concierge",
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
    "CeremonyVerse is a US-based Indian wedding shopping concierge founded by Bhamini, helping NRI families source authentic bridal lehengas, sherwanis, jewelry, and wedding essentials directly from India.",
  mainEntity: {
    "@type": "Organization",
    name: "CeremonyVerse",
    founder: {
      "@type": "Person",
      name: "Bhamini",
      jobTitle: "Founder & Lead Sourcing Manager",
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
            We built the service we wished existed when we planned our own weddings
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#d4c8b8" }}>
            CeremonyVerse is a US-based Indian wedding shopping concierge. We help NRI families
            source authentic bridal lehengas, sherwanis, jewelry, ceremonial items, gifts, and
            welcome bags directly from India — with live video shopping, quality checks, and
            delivery to all 50 US states.
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
              I&apos;m Bhamini, the founder of CeremonyVerse. I started this company in 2021 after
              watching too many NRI friends and family struggle with the same problem: they wanted
              authentic, beautiful Indian wedding outfits — but they couldn&apos;t fly to India for
              3 weeks of shopping, didn&apos;t trust Instagram sellers, and couldn&apos;t find the
              selection they wanted at US Indian boutiques.
            </p>
            <p>
              The boutiques they visited had limited in-stock inventory and 200–300% markups. The
              Instagram sellers they messaged had gorgeous photos — but the outfits that arrived
              looked nothing like the pictures. And the few who did fly to India came back exhausted,
              overspent, and with outfits that still needed extensive alterations.
            </p>
            <p>
              I knew there was a better way. My family is from India, I travel there regularly, and
              I&apos;d built personal relationships with skilled artisan workshops, designers,
              tailors, fabric specialists, and jewelry suppliers across Surat, Kolkata, Delhi,
              Jaipur, Mumbai, and Kanchipuram. I knew which workshops did the best zardozi. Which
              weavers in Varanasi produced the finest Banarasi silk. Which designers in Delhi could
              recreate a Sabyasachi silhouette at a fraction of the price.
            </p>
            <p>
              So I built CeremonyVerse to be the partner I wished my friends had — a US-based
              business with US accountability, personal relationships with vetted India partners,
              live video shopping so you see exactly what you&apos;re buying, custom stitching to
              your measurements, and insured delivery to your door.
            </p>
            <p>
              Four years later, we&apos;ve dressed hundreds of NRI brides, grooms, bridesmaids,
              groomsmen, and families across the United States — including 14+14 bridesmaid and
              groomsmen coordination for a 4-day Gujarati and South Indian Christian wedding in
              Philadelphia, and a 4-day Gujarati destination wedding in Mexico with full bridal
              party coordination. We&apos;ve sourced Kanchipuram silk sarees directly from Tamil
              Nadu weavers, recreated designer lehengas from inspiration photos, and coordinated
              outfits for entire families across multiple states.
            </p>
            <p>
              We&apos;re not the cheapest option in India — and we don&apos;t want to be. We&apos;re
              the safest, most transparent, and most accountable option for NRI families who want
              their dream Indian wedding without scams, sizing disasters, or vendor chaos. Every
              order is documented. Every payment is milestone-based. Every shipment is insured. And
              every client has my personal phone number.
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

      {/* INDIA TEAM */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Our India Sourcing Team
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Vetted partners we know personally — not Instagram sellers
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Outfit specialist</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Sources ready-made and semi-custom outfits from Surat, Kolkata, and Mumbai.
                Specializes in zardozi, gota patti, resham, and sequin embroidery. We&apos;ve worked
                together for 4+ years.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Custom designer &amp; tailor</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                A boutique designer-tailor in Delhi who custom-stitches bridal lehengas to your exact
                measurements and inspiration references. Can recreate any designer silhouette
                including Sabyasachi, Manish Malhotra, and Anita Dongre.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Fabric specialist</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Sources raw fabrics and dyes them to your exact chosen color shade. Critical for
                matching bridesmaid lehengas to a specific color palette and for sourcing authentic
                Banarasi and Kanchipuram silks.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Bridal jewelry supplier</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                A dedicated bridal jewelry supplier in Mumbai for polki, kundan, and temple jewelry.
                Sources authentic, hallmark-certified pieces to match your bridal lehenga.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Kanchipuram weavers</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Direct relationships with weavers in Kanchipuram, Tamil Nadu for pure Kanjivaram silk
                sarees — hallmark-certified, real zari, the authentic textile. Bhamini travels to
                Kanchipuram personally to source these.
              </p>
            </div>
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3" style={{ color: "#1f1f1f" }}>Ceremonial items &amp; gifts</h3>
              <p className="text-sm text-[#4d403a] leading-relaxed">
                Vetted suppliers for puja thalis, kalash, mangalsutra, kaleeras, return gifts, sweets,
                and welcome bags — coordinated alongside your outfit order so everything ships
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFICATION */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            How We Vet Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Every partner is someone we know personally
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "var(--cv-accent)" }}>✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Personal relationships, not directories</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  Every artisan workshop, designer, tailor, fabric specialist, and supplier we work
                  with is someone we&apos;ve met in person, vetted over time, and built a relationship
                  with — not someone we found on Instagram or a B2B directory.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "var(--cv-accent)" }}>✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Live video verification on every order</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  You see the exact item on live video before you commit. Fabric draped, embroidery up
                  close, color in natural light. That specific piece is reserved with your name and
                  order number — no bait-and-switch.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "var(--cv-accent)" }}>✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Order documentation with reference photos</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  Every order is documented with reference photos and your written approval before
                  production begins. If a piece arrives with a quality issue, we work directly with
                  the source — our established vendor relationships give us far more leverage than an
                  individual buyer would have.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "var(--cv-accent)" }}>✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Pre-shipping quality inspection</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  Every finished piece is inspected in India — embroidery integrity, color match to
                  your approved sample, stitching quality, and measurements — before anything ships.
                  We send you photos and video before it leaves India.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: "var(--cv-accent)" }}>✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>Milestone-based payment protection</h3>
                <p className="text-[#4d403a] leading-relaxed">
                  You never pay for the next stage until you&apos;ve approved the previous one. 25%
                  deposit to reserve, 35% after fabric approval, 30% after final inspection, 10% on
                  delivery. We have US presence and accountability — not an anonymous Instagram
                  account.
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
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>50</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#d4c8b8" }}>US states served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: "#7a6841", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>0</div>
              <p className="text-xs uppercase tracking-wider" style={{ color: "#d4c8b8" }}>Unresolved shipping issues</p>
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
            Book a free 30-minute consultation. We&apos;ll review your vision, timeline, and budget —
            and tell you honestly whether sourcing from India makes sense for you.
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
