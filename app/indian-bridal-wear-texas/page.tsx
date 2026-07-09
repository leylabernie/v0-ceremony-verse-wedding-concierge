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
 * Target hub: Texas (Houston & Dallas-Fort Worth).
 *
 * Target keywords:
 *   - indian bridal shops houston
 *   - lehenga boutique dallas
 *   - indian wedding dresses dfw
 */
export const metadata = buildMetadata({
  path: "/indian-bridal-wear-texas/",
  title:
    "Sourcing Indian Bridal Wear & Groomsmen Outfits in Texas | CeremonyVerse",
  description:
    "Houston and Dallas-Fort Worth couples: source custom bridal lehengas, groom sherwanis, coordinated bridesmaid sarees, and bulk wedding favors directly from India — with Texas door delivery and full customs handling.",
  keywords:
    "indian bridal shops houston, lehenga boutique dallas, indian wedding dresses dfw, indian bridal wear texas, custom bridal lehenga houston, sherwani dallas texas",
});

const serviceSchema = buildServiceSchema({
  name: "Indian Bridal Wear Sourcing for Texas — Houston & DFW Concierge",
  description:
    "CeremonyVerse sources custom bridal lehengas, sherwanis, coordinated bridesmaid sarees, and bulk wedding favors directly from India for Texas couples in Houston and Dallas-Fort Worth. Includes live video shopping with India artisans, Masterji measurement calls, Texas customs clearance, and door-to-door delivery across the state.",
  url: "/indian-bridal-wear-texas/",
  category: "Indian Bridal Wear Sourcing — Texas",
  areaServed: "Texas, United States",
  offers: [
    {
      name: "Style Guide & Vendor List",
      price: 149,
      description: "Curated bridal wear style guide for your Texas wedding.",
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
        "End-to-end bridal wear sourcing for the entire Texas wedding party.",
    },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  {
    name: "Indian Bridal Wear Texas",
    url: "/indian-bridal-wear-texas/",
  },
]);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CeremonyVerse — Texas Bridal Wear Concierge",
  description:
    "Indian bridal wear sourcing concierge serving Texas couples in Houston, Dallas-Fort Worth, Austin, San Antonio, and across the state. Custom bridal lehengas, sherwanis, coordinated bridesmaid sarees, and bulk wedding favors shipped directly from India to your TX door.",
  url: "https://www.ceremonyverse.com/indian-bridal-wear-texas/",
  telephone: "+1-215-341-9990",
  email: "bhamini@ceremonyverse.com",
  areaServed: { "@type": "State", name: "Texas" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "TX",
  },
  priceRange: "$$",
};

const faqSchema = buildFaqSchema([
  {
    question:
      "How much can I save on a bridal lehenga sourcing from India vs. a Houston or Dallas boutique?",
    answer:
      "Texas couples typically save 30% to 50% by sourcing directly from India instead of buying at Houston Hillcroft or Dallas/Plano Indian boutiques. A custom bridal lehenga that costs $2,500-$8,000 at a US boutique costs $800-$3,500 sourced directly from India — even after live video shopping, custom stitching, insured air freight, Texas customs clearance, and door-to-door delivery to your Houston or DFW address.",
  },
  {
    question:
      "Can you deliver bridal wear to my home in Houston, Dallas, Plano, Sugar Land, Frisco, or Austin?",
    answer:
      "Yes. CeremonyVerse handles customs clearance at IAH, DFW, or Austin-Bergstrom and delivers securely to your doorstep anywhere in Texas — including Houston, Sugar Land, Katy, Dallas, Plano, Frisco, Irving, Austin, San Antonio, and across the entire state.",
  },
  {
    question:
      "Can you coordinate bulk bridesmaid and groomsmen outfits for a large Texas wedding?",
    answer:
      "Absolutely. Texas weddings are famously grand — and bulk coordination is one of our specialties. We've coordinated 14+ bridesmaid lehengas, 14+ groomsmen sherwanis, full family outfits, jewelry, and ceremonial items — all color-matched, custom-stitched, and shipped together to your Texas address. See our 4-day Gujarati wedding case study for a real example.",
  },
]);

export default function IndianBridalWearTexasPage() {
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
            Indian Bridal Wear Concierge · Houston &amp; Dallas-Fort Worth
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            Sourcing Indian Bridal Wear &amp; Groomsmen Outfits in Texas
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#d4c8b8" }}
          >
            Whether you are planning a grand wedding in Houston or an elegant
            celebration in Dallas-Fort Worth, finding authentic, custom-tailored
            South Asian wedding wear in Texas shouldn&apos;t mean compromising
            on style or overpaying at local boutiques.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Your CeremonyVerse Consultation Now
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I'm%20a%20Texas%20bride%20looking%20for%20a%20bridal%20lehenga%20from%20India."
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
        TODO: Drop an image at /public/images/indian-wedding-dress-sourcing-houston.jpg
        Alt text: "Indian bride in Houston wearing a custom bridal lehenga sourced from India by CeremonyVerse"
        Recommended size: 1600x900
      */}

      {/* INTRO */}
      <section className="py-20 px-6" style={{ background: "#faf8f5" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "#4d403a" }}
          >
            Whether you are planning a grand wedding in Houston or an elegant
            celebration in Dallas-Fort Worth, finding authentic, custom-tailored
            South Asian wedding wear in Texas shouldn&apos;t mean compromising
            on style or overpaying at local boutiques.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#4d403a" }}
          >
            CeremonyVerse brings the sprawling fashion bazaars of India directly
            to Texas couples. We provide an elite, transparent concierge
            service that helps you source breathtaking bridal lehengas,
            coordinated bridesmaid sarees, custom groom sherwanis, and bulk
            wedding favors straight from the source.
          </p>
        </div>
      </section>

      {/* THE BENEFITS FOR TEXAS BRIDES AND GROOMS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-3 text-center"
            style={{ color: "var(--cv-accent)" }}
          >
            Built for Texas-Scale Weddings
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12 text-center"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            The Benefits for Texas Brides and Grooms
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
                Unrivaled Bulk Sourcing
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                Easily coordinate custom-tailored, matching outfits for your
                entire bridal party or groomsmen lineup without anyone needing
                to travel to India. We&apos;ve sourced 14+ bridesmaid lehengas
                and 14+ groomsmen sherwanis in a single production run — all
                color-matched from the same dye lot and shipped together to
                your Texas address.
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
                Wholesale Return Gifts
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                Source beautiful, lightweight handcrafted favors (like silk
                potli bags or Jaipur linen) directly from wholesale artisans at
                a fraction of local retail costs. We compact-pack 100–500+
                favors into minimal volumetric space, cutting your shipping
                cost by up to 60% and handling all US customs HS code
                classifications.
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
                Complete Customs &amp; Shipping Care
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                Skip the headache of tracking international freight. We manage
                all import documentation, clear customs at IAH, DFW, or
                Austin-Bergstrom, and ship your items safely straight to your
                Texas home — with itemized duty breakdowns upfront so there
                are no surprise charges when the parcel arrives.
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
            Texas Boutique Reality vs. India Direct
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
                Texas Boutique Reality
              </h3>
              <ul
                className="space-y-2 text-sm leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                <li>• Houston Hillcroft: $2,500–$8,000+ for a bridal lehenga</li>
                <li>• Dallas/Plano: limited selection, high overhead</li>
                <li>• Heavy sales pressure to buy what&apos;s on the rack</li>
                <li>• 200%+ markups for Texas commercial rent</li>
                <li>• Few options for coordinating large bridal parties</li>
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
                className="space-y-2 text-sm leading-relaxed"
                style={{ color: "#4d403a" }}
              >
                <li>• $800–$3,500 for a custom bridal lehenga — real 2026 prices</li>
                <li>• 50+ artisan workshops across Delhi, Mumbai, Jaipur, Surat</li>
                <li>• Live video shopping — no Texas-to-India flight required</li>
                <li>• Masterji 3-way measurement call eliminates sizing errors</li>
                <li>• Coordinate bride + bridesmaids + groomsmen + family + gifts</li>
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
            Ready to source your bridal wear from India — without leaving Texas?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "#d4c8b8" }}
          >
            Book a free 30-minute consultation with CeremonyVerse. We&apos;ll
            review your wedding timeline, budget, and design references — and
            show you how Texas couples are saving 30–50% by sourcing directly
            from India with live video shopping.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Your CeremonyVerse Consultation Now
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I'm%20a%20Texas%20bride%20looking%20to%20source%20a%20bridal%20lehenga%20from%20India."
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
              More for Texas Couples
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="/indian-wedding-shopping-texas"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                Texas Indian Wedding Shopping
              </Link>
              <span style={{ color: "#6a6a6a" }}>·</span>
              <Link
                href="/blog/indian-wedding-return-gifts-bulk-usa"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                Bulk Wedding Return Gifts Guide
              </Link>
              <span style={{ color: "#6a6a6a" }}>·</span>
              <Link
                href="/blog/how-to-coordinate-bridesmaid-lehengas-india-usa"
                className="text-[#f8f6f2] hover:text-[#7a6841] transition-colors"
              >
                Coordinating Bridesmaid Lehengas
              </Link>
              <span style={{ color: "#6a6a6a" }}>·</span>
              <Link
                href="/how-to-buy-bridal-lehenga-from-india-to-usa"
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
