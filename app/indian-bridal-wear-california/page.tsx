import Link from "next/link";
import {
  buildMetadata,
  buildServiceSchema,
  buildBreadcrumb,
  buildFaqSchema,
  JsonLd,
} from "@/lib/seo";

/**
 * Phase 3 — Local Metropolitan Hub Strategy.
 * Target hub: California (Bay Area & Los Angeles).
 *
 * Target keywords:
 *   - indian bridal boutique bay area
 *   - lehenga shop sunnyvale
 *   - indian wedding dress los angeles
 */
export const metadata = buildMetadata({
  path: "/indian-bridal-wear-california/",
  title:
    "Indian Bridal Wear & Wedding Outfits — California",
  description:
    "Bay Area & LA brides: source bridal lehengas, sherwanis, and family outfits from India with live video shopping and California delivery.",
  keywords:
    "indian bridal boutique bay area, lehenga shop sunnyvale, indian wedding dress los angeles, indian bridal wear california, custom bridal lehenga bay area, sherwani los angeles",
});

const serviceSchema = buildServiceSchema({
  name: "Indian Bridal Wear Sourcing for California — Bay Area & LA Concierge",
  description:
    "CeremonyVerse sources custom bridal lehengas, sherwanis, bridesmaid outfits, and bulk return gifts directly from India for California couples in the Bay Area and Los Angeles. Includes live video shopping with India artisans, Masterji measurement calls, West Coast customs clearance, and door-to-door delivery across California.",
  url: "/indian-bridal-wear-california/",
  category: "Indian Bridal Wear Sourcing — California",
  areaServed: "California, United States",
  offers: [
    {
      name: "Style Guide & Vendor List",
      price: 149,
      description: "Curated bridal wear style guide for your California wedding.",
    },
    {
      name: "Guided Sourcing",
      price: 599,
      description:
        "Live video shopping sessions with India vendors for your bridal lehenga or sherwani.",
    },
    {
      name: "Full Bridal Concierge",
      price: 1499,
      description:
        "End-to-end bridal wear sourcing for the entire California wedding party.",
    },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  {
    name: "Indian Bridal Wear California",
    url: "/indian-bridal-wear-california/",
  },
]);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CeremonyVerse — California Bridal Wear Concierge",
  description:
    "Indian bridal wear sourcing concierge serving California couples in the Bay Area, Silicon Valley, Los Angeles, and across the state. Custom bridal lehengas, sherwanis, and bulk return gifts shipped directly from India to your CA door.",
  url: "https://www.ceremonyverse.com/indian-bridal-wear-california/",
  telephone: "+1-215-341-9990",
  email: "bhamini@ceremonyverse.com",
  areaServed: { "@type": "State", name: "California" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "CA",
  },
  priceRange: "$$",
};

const faqSchema = buildFaqSchema([
  {
    question:
      "How much can I save on a bridal lehenga sourcing from India vs. a Bay Area boutique in Sunnyvale or Fremont?",
    answer:
      "California couples typically save 30% to 50% by sourcing directly from India instead of buying at Bay Area or Los Angeles Indian boutiques. A custom bridal lehenga that costs $2,500-$8,000 at a US boutique costs $800-$3,500 sourced directly from India — even after live video shopping, custom stitching, insured air freight, West Coast customs clearance, and door-to-door delivery to your California address.",
  },
  {
    question:
      "Can you deliver bridal wear to my home in Sunnyvale, Fremont, San Jose, Los Angeles, or Artesia?",
    answer:
      "Yes. CeremonyVerse handles customs clearance at SFO, LAX, or Oakland and delivers securely to your doorstep anywhere in California — including Sunnyvale, Fremont, San Jose, Santa Clara, Milpitas, Los Angeles, Artesia, Cerritos, San Diego, Sacramento, and across the entire state.",
  },
  {
    question:
      "How do I find an Indian bridal boutique in the Bay Area if I want to see options in person?",
    answer:
      "Sunnyvale, Fremont, and Artesia have several Indian boutiques, but their in-stock selection is typically limited to 15-40 bridal lehengas per store at 200% markups. With CeremonyVerse, you skip the limited inventory and access 50+ artisan workshops across India via live video shopping — seeing 5-10x more options in a single session than you would driving across the Bay Area for a weekend.",
  },
]);

export default function IndianBridalWearCaliforniaPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-localbusiness" data={localBusinessSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* HERO */}
      <section
        className="py-20 text-center px-6"
        style={{ background: "#2f2f2f", color: "#f8f6f2" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-4"
            style={{ color: "#7a6841" }}
          >
            Indian Bridal Wear Concierge · Bay Area &amp; Los Angeles
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            Custom Indian Wedding Outfits &amp; Bridal Wear in California
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#e8dfd2" }}
          >
            From the Silicon Valley suburbs of San Jose and Sunnyvale to the
            cultural hubs of Los Angeles and Artesia, California is home to
            some of the most vibrant South Asian weddings in the country.
            Source your dream bridal wear directly from India&apos;s premier
            artisan hubs — without leaving the West Coast.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Your CeremonyVerse Consultation Now
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I'm%20a%20California%20bride%20looking%20for%20a%20bridal%20lehenga%20from%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              WhatsApp Bhamini
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE PLACEHOLDER */}
      {/*
        TODO: Drop an image at /public/images/custom-lehenga-shop-bay-area.jpg
        Alt text: "Indian bride in the Bay Area wearing a custom bridal lehenga sourced from India by CeremonyVerse"
        Recommended size: 1600x900
      */}

      {/* INTRO */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "#4d403a" }}
          >
            From the Silicon Valley suburbs of San Jose and Sunnyvale to the
            cultural hubs of Los Angeles and Artesia, California is home to
            some of the most vibrant South Asian weddings in the country.
            However, finding unique, heirloom-quality bridal wear locally
            often means spending weekends driving through traffic only to
            find repetitive designs and inflated price tags.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#4d403a" }}
          >
            With CeremonyVerse, California brides and grooms can shop the
            finest bridal markets of India right from the comfort of their
            homes. We act as your trusted personal shoppers on the ground,
            connecting you with authentic weavers and master tailors to curate
            a flawless wedding wardrobe.
          </p>
        </div>
      </section>

      {/* HOW WE SERVE WEST COAST WEDDINGS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-3 text-center"
            style={{ color: "var(--cv-accent)" }}
          >
            Built for California Lifestyles
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12 text-center"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            How We Serve West Coast Weddings
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-8"
              style={{ borderTop: "4px solid #7a6841" }}
            >
              <h3
                className="font-semibold text-xl mb-3"
                style={{ color: "var(--cv-accent)" }}
              >
                Live Virtual Shopping Sessions
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                We schedule real-time video consultations directly with premium
                Indian boutiques, timed perfectly to fit your busy California
                schedule. Evenings after work, weekend mornings, lunch breaks
                between Zoom calls — we work around Pacific Time, not against
                it.
              </p>
            </div>
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-8"
              style={{ borderTop: "4px solid #7a6841" }}
            >
              <h3
                className="font-semibold text-xl mb-3"
                style={{ color: "var(--cv-accent)" }}
              >
                Precision Sizing Audits
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                Our team hosts a 3-way video call with a Master Tailor
                (Masterji) to guide your measurements, ensuring a flawless
                custom fit for your lehenga or groom&apos;s sherwani. The
                Masterji watches you on camera, corrects your posture, and
                confirms each measurement before recording it.
              </p>
            </div>
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-8"
              style={{ borderTop: "4px solid #7a6841" }}
            >
              <h3
                className="font-semibold text-xl mb-3"
                style={{ color: "var(--cv-accent)" }}
              >
                Insured California Door Delivery
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                From custom-tailoring to strict physical quality inspections
                in India, we manage the entire logistics pipeline, delivering
                securely to your home anywhere in California — San Francisco,
                San Jose, Sunnyvale, Fremont, LA, San Diego, Sacramento, and
                everywhere in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section
        className="py-20 px-6"
        style={{ background: "#faf8f5" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-center"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            California Boutique Reality vs. India Direct
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-6"
              style={{ borderLeft: "4px solid #8a4a3a" }}
            >
              <h3
                className="font-semibold mb-3"
                style={{ color: "#8a4a3a" }}
              >
                California Boutique Reality
              </h3>
              <ul
                className="space-y-2 text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                <li>• Sunnyvale/Fremont: $2,500–$8,000+ for a bridal lehenga</li>
                <li>• Artesia: 1–2 day trip from LA traffic for limited stock</li>
                <li>• Heavy sales pressure to buy what&apos;s on the rack</li>
                <li>• 200%+ markups for Silicon Valley commercial rent</li>
                <li>• Limited weekend hours; impossible for tech schedules</li>
              </ul>
            </div>
            <div
              className="bg-white border border-[#e6dfd5] rounded-2xl p-6"
              style={{ borderLeft: "4px solid #7a6841" }}
            >
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--cv-accent)" }}
              >
                India Direct with CeremonyVerse
              </h3>
              <ul
                className="space-y-2 text-base leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                <li>• $800–$3,500 for a custom bridal lehenga — real 2026 prices</li>
                <li>• 50+ artisan workshops across Delhi, Mumbai, Jaipur, Surat</li>
                <li>• Live video shopping — scheduled around Pacific Time</li>
                <li>• Masterji 3-way measurement call eliminates sizing errors</li>
                <li>• Coordinate bride + bridesmaids + family + gifts in one order</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#2f2f2f", color: "#f8f6f2" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "#f8f6f2",
            }}
          >
            Ready to source your bridal wear from India — without leaving California?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "#e8dfd2" }}
          >
            Book a free 30-minute consultation with CeremonyVerse. We&apos;ll
            review your wedding timeline, budget, and design references — and
            show you how California couples are saving 30–50% by sourcing
            directly from India with live video shopping.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Your CeremonyVerse Consultation Now
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I'm%20a%20California%20bride%20looking%20to%20source%20a%20bridal%20lehenga%20from%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              WhatsApp Bhamini Directly
            </a>
          </div>

          {/* Related links */}
          <div className="mt-16 pt-10" style={{ borderTop: "1px solid #4a4a4a" }}>
            <p
              className="text-xs tracking-widest uppercase font-medium mb-4"
              style={{ color: "#7a6841" }}
            >
              More for California Couples
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {/* Related link to /indian-wedding-shopping-california/ removed — page deleted in Task 7. */}
              <Link
                href="/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                Kanchipuram Silk Sarees Guide
              </Link>
              <span style={{ color: "#6a6a6a" }}>·</span>
              <Link
                href="/blog/custom-sherwani-sizing-guide-india-usa/"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                Custom Sherwani Sizing Guide
              </Link>
              <span style={{ color: "#6a6a6a" }}>·</span>
              <Link
                href="/how-to-buy-bridal-lehenga-from-india-to-usa/"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                How to Buy a Bridal Lehenga from India
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
