import Image from "next/image";
import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/real-weddings",
  title: "Real Weddings — NRI Brides & Grooms We've Dressed",
  description:
    "See real Indian weddings we've helped coordinate — from 4-day interfaith celebrations in New Jersey to destination weddings in Mexico. Outfits sourced direct from Surat and Delhi, coordinated by Bhamini.",
  keywords: [
    "real Indian wedding USA",
    "NRI wedding outfits real photos",
    "Indian destination wedding Mexico",
    "Gujarati wedding outfits USA",
    "South Indian Christian wedding",
    "Indian interfaith wedding",
    "Indian wedding concierge reviews",
    "NRI bride real wedding story",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Real Weddings", url: "/real-weddings/" },
]);

const weddings = [
  {
    couple: "Kaval & April",
    image: "/images/sourcing/couple-portrait.webp",
    imageAlt:
      "Couple in coordinated red lehenga and cream sherwani — real CeremonyVerse wedding",
    location: "New Jersey, USA",
    type: "4-Day Interfaith — Gujarati & South Indian Christian",
    year: "2021",
    description:
      "Originally planned for Mexico, this wedding pivoted to New Jersey when COVID closed borders. Kaval is Hindu and April is South Indian Christian, so Bhamini coordinated a 4-day event honoring both traditions — finding the venue, caterer, decorators, makeup and mehndi artists, Hindu priest, and Christian church. Every single outfit for the bride, groom, 14 bridesmaids, 14 groomsmen, and full family was sourced direct from Surat and Delhi, including a special trip to Kanchipuram for pure silk sarees.",
    highlights: [
      "Bride + groom + 14 bridesmaids + 14 groomsmen + full family outfits",
      "Pure silk Kanchipuram sarees sourced directly from weavers",
      "Ceremonial items, return gifts, sweets, welcome bags",
      "Even the family dog's outfit was coordinated",
      "Interfaith ceremonies — Hindu mandap + Christian church",
    ],
    testimonial:
      "We had no idea where to start with a 4-day Gujarati and South Indian Christian wedding. CeremonyVerse dressed everyone — including a special trip to Kanchipuram for pure silk sarees. Extraordinary service.",
    testimonialImage: "/images/testimonial-dhan-christina.webp",
    testimonialImageAlt: "5-star Google review from Kaval & April",
  },
  {
    couple: "Karan & Sonal",
    image: "/images/sourcing/couple-mandap.webp",
    imageAlt:
      "Wedding couple at mandap — real CeremonyVerse Mexico destination wedding",
    location: "Cancun, Mexico",
    type: "4-Day Gujarati Destination Wedding",
    year: "2024",
    description:
      "A 4-day Gujarati destination wedding in Mexico — the same vendors Bhamini used for her own son's Hard Rock Cafe wedding. Full vendor coordination including planner, DJ, photographers, decorator, and beauty team, plus complete outfit sourcing for the bride, groom, full bridal party, and entire family for each day of the celebration. Every outfit shipped direct from Surat and Delhi to the resort in Mexico.",
    highlights: [
      "Full 4-day outfit coordination for bride, groom & entire family",
      "Mexico vendor management — planner, DJ, photo, decor, beauty",
      "Bridesmaids and groomsmen coordinated across all 4 days",
      "Ceremonial items, return gifts, sweets, welcome bags",
      "Even the couple's two dogs had coordinated outfits",
    ],
    testimonial:
      "Planning a 4-day Gujarati destination wedding in Mexico with coordinated outfits for the bride, groom, full bridal party, and entire family for each day felt impossible. CeremonyVerse handled every single detail. Flawless from start to finish.",
    testimonialImage: "/images/testimonial-karan-sonal.webp",
    testimonialImageAlt: "5-star Google review from Karan & Sonal",
  },
  {
    couple: "Charly & Viola",
    image: "/images/sourcing/bride-traditional.webp",
    imageAlt:
      "Bride in embroidered traditional outfit — real CeremonyVerse wedding",
    location: "USA",
    type: "South Indian Christian Wedding",
    year: "2024",
    description:
      "Both South Indian Christians, Charly and Viola wanted outfits that truly reflected their heritage rather than generic Indian wedding wear. Bhamini sourced the bridesmaids' outfits and Charly's outfit with careful attention to South Indian Christian wedding traditions — every decision made with cultural precision. Their families were blown away by the authenticity and quality.",
    highlights: [
      "Heritage-accurate South Indian Christian wedding attire",
      "Coordinated bridesmaid outfits",
      "Groom's outfit sourced to match the couple's vision",
      "Every decision made with cultural care and precision",
    ],
    testimonial:
      "We are both South Indian Christians and wanted outfits that truly reflected our heritage. CeremonyVerse sourced the bridesmaids' outfits and Charly's outfit beautifully — every decision made with care. Our families were blown away.",
    testimonialImage: "/images/testimonial-charlie-viola.webp",
    testimonialImageAlt: "5-star Google review from Charly & Viola",
  },
  {
    couple: "Druma & Parin",
    image: "/images/sourcing/kanchipuram-saree.webp",
    imageAlt:
      "Pure silk Kanchipuram saree sourced direct from weavers for Druma & Parin's wedding",
    location: "USA",
    type: "Gujarati Wedding",
    year: "2025",
    description:
      "For their Gujarati wedding, Bhamini travelled to Kanchipuram specifically to source pure silk sarees — the real thing, not a compromise. She also arranged matching outfits custom-made by her local boutique to the couple's exact vision. From the bridal lehenga to the family sarees, every piece was sourced with the same standard Bhamini applies to her own family's outfits.",
    highlights: [
      "Personal trip to Kanchipuram for pure silk, hallmark-certified sarees",
      "Custom-made matching outfits via local boutique recreation",
      "Real zari, authentic textile — sourced direct from weavers",
      "Attention to detail described as 'extraordinary' by the couple",
    ],
    testimonial:
      "For our Gujarati wedding, Bhamini travelled to Kanchipuram specifically to source pure silk sarees — the real thing, not a compromise. She also had our matching outfits custom made by a local boutique to our exact vision. The attention to detail was extraordinary.",
    testimonialImage: "/images/testimonial-druma-parin.webp",
    testimonialImageAlt: "5-star Google review from Druma & Parin",
  },
];

export default function RealWeddingsPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <SeoNav />

      {/* HERO */}
      <section
        className="py-20 px-6"
        style={{ background: "#2f2f2f", color: "#f8f6f2" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-4"
            style={{ color: "#7a6841" }}
          >
            Real Ceremonies, Real Outfits, Real Reviews
          </p>
          <h1
            className="text-4xl md:text-6xl font-semibold mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            Real Weddings We&apos;ve Helped Bring to Life
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#e8dfd2" }}
          >
            From 4-day interfaith celebrations in New Jersey to destination
            weddings in Mexico — these are the real families we&apos;ve dressed
            and coordinated. Every story, every review, every outfit sourced
            direct from India.
          </p>
        </div>
      </section>

      {/* INTRO STATS BAR */}
      <section className="py-10 px-6" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div
              className="text-3xl md:text-4xl font-semibold mb-1"
              style={{
                color: "#1f1f1f",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              27+
            </div>
            <p className="text-xs uppercase tracking-wider text-[#4d403a]">
              5-Star Reviews
            </p>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl font-semibold mb-1"
              style={{
                color: "#1f1f1f",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              50
            </div>
            <p className="text-xs uppercase tracking-wider text-[#4d403a]">
              US States Served
            </p>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl font-semibold mb-1"
              style={{
                color: "#1f1f1f",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              40–60%
            </div>
            <p className="text-xs uppercase tracking-wider text-[#4d403a]">
              Savings vs. US Boutiques
            </p>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl font-semibold mb-1"
              style={{
                color: "#1f1f1f",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              4+
            </div>
            <p className="text-xs uppercase tracking-wider text-[#4d403a]">
              Years in Business
            </p>
          </div>
        </div>
      </section>

      {/* WEDDING STORIES */}
      {weddings.map((wedding, index) => (
        <section
          key={wedding.couple}
          className={`py-20 px-6 ${index % 2 === 1 ? "bg-white" : ""}`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Wedding header */}
            <div className="mb-10">
              <p
                className="text-xs tracking-widest uppercase font-medium mb-2"
                style={{ color: "var(--cv-accent)" }}
              >
                {wedding.location} &middot; {wedding.year}
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold mb-2"
                style={{
                  color: "#1f1f1f",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                {wedding.couple}
              </h2>
              <p className="text-[#4d403a] text-sm">{wedding.type}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Photo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={wedding.image}
                  alt={wedding.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Story */}
              <div>
                <div className="prose max-w-none text-[#4d403a] leading-relaxed space-y-5 mb-8">
                  <p>{wedding.description}</p>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  <p
                    className="text-xs tracking-widest uppercase font-medium"
                    style={{ color: "var(--cv-accent)" }}
                  >
                    What We Handled
                  </p>
                  <ul className="space-y-2">
                    {wedding.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-3 items-start text-sm text-[#4d403a]"
                      >
                        <span
                          className="font-bold mt-0.5"
                          style={{ color: "var(--cv-accent)" }}
                        >
                          ✓
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial card */}
            <div className="mt-10 bg-white border border-[#e6dfd5] rounded-2xl p-8 md:flex items-start gap-6">
              <div className="hidden md:block flex-shrink-0 w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src={wedding.testimonialImage}
                  alt={wedding.testimonialImageAlt}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <p
                  className="text-xs tracking-widest uppercase font-medium mb-3"
                  style={{ color: "var(--cv-accent)" }}
                >
                  Client Review
                </p>
                <p className="text-[#4d403a] leading-relaxed italic">
                  &ldquo;{wedding.testimonial}&rdquo;
                </p>
                <p
                  className="mt-3 font-semibold text-sm"
                  style={{ color: "#1f1f1f" }}
                >
                  — {wedding.couple}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PHOTO GALLERY */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-3 text-center"
            style={{ color: "var(--cv-accent)" }}
          >
            From Our Clients&apos; Weddings
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12 text-center"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Outfits We&apos;ve Sourced &amp; Coordinated
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              {
                src: "/images/sourcing/bride-traditional.webp",
                alt: "Bride in embroidered traditional outfit — sourced direct from Surat",
              },
              {
                src: "/images/sourcing/couple-portrait.webp",
                alt: "Couple in coordinated red lehenga and cream sherwani",
              },
              {
                src: "/images/sourcing/bridesmaid-green.webp",
                alt: "Coordinated green bridesmaid outfit",
              },
              {
                src: "/images/sourcing/groomsmen-lavender.webp",
                alt: "Groomsmen in matching lavender outfits with pink turbans",
              },
              {
                src: "/images/sourcing/bridal-jewelry.webp",
                alt: "Bridal jewelry set with pearls and gemstones",
              },
              {
                src: "/images/sourcing/kanchipuram-saree.webp",
                alt: "Pure silk Kanchipuram saree — sourced direct from weavers",
              },
              {
                src: "/images/sourcing/couple-mandap.webp",
                alt: "Wedding couple at mandap ceremony",
              },
              {
                src: "/images/sourcing/real-lehenga-shop.webp",
                alt: "Real lehenga shop — direct sourcing in Surat",
              },
            ].map((photo, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
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

      {/* HOW IT WORKS FOR YOUR WEDDING */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-3 text-center"
            style={{ color: "var(--cv-accent)" }}
          >
            Your Wedding Could Be Next
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12 text-center"
            style={{
              color: "#1f1f1f",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            How We Work With Every Couple
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Free 30-minute consultation",
                desc: "Tell us your wedding vision, dates, location, family size, and budget. We'll tell you honestly what we can do — outfit sourcing, Mexico coordination, or both.",
              },
              {
                step: "02",
                title: "Live video shopping from Surat & Delhi",
                desc: "My family lays out actual pieces on camera. You see fabric, embroidery, and color in natural light. The piece you pick is reserved with your name — no bait-and-switch.",
              },
              {
                step: "03",
                title: "Family inspection before shipping",
                desc: "Every finished piece is inspected in India — embroidery, color match, stitching, measurements. We send you photos and video before it ships. If something isn't right, it doesn't leave India.",
              },
              {
                step: "04",
                title: "Milestone-based payments",
                desc: "25% deposit, 35% after fabric approval, 30% after final inspection, 10% on delivery. You never pay for the next stage until you approve the previous one.",
              },
              {
                step: "05",
                title: "Direct shipping to your door — or your resort",
                desc: "DHL or FedEx, fully insured, customs paperwork handled. For Mexico weddings, we can ship directly to your resort.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 items-start bg-white border border-[#e6dfd5] rounded-2xl p-6"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white text-sm"
                  style={{ background: "#1f1f1f" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#1f1f1f" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4d403a] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "#1f1f1f", color: "#f8f6f2" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Let&apos;s talk about your wedding
          </h2>
          <p className="text-[#e8dfd2] mb-8 leading-relaxed">
            Book a free 30-minute consultation. Tell me your vision, timeline,
            and budget. I&apos;ll tell you honestly what I can do — outfit
            sourcing, Mexico coordination, or both.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Book Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#7a6841", color: "#f8f6f2" }}
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}