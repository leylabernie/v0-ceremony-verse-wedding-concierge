import Script from "next/script"

export const metadata = {
  title: "Indian Wedding Jewelry, Gifts & Ceremonial Items from India | Delivered to USA | CeremonyVerse",
  description: "Source Indian wedding jewelry, ceremonial items, welcome bags, return gifts, sweets, and more directly from India. CeremonyVerse delivers everything for your Indian wedding to your US door. Kundan jewelry, puja items, potli bags, mithai and more.",
  keywords: "Indian wedding jewelry USA, kundan jewelry from India USA, Indian wedding ceremonial items USA, puja items Indian wedding USA, Indian wedding welcome bags, potli bags USA, Indian wedding return gifts, mithai USA, Indian wedding sweets delivered USA, CeremonyVerse accessories",
  alternates: {
    canonical: "https://www.ceremonyverse.com/wedding-accessories-and-ceremony-items-from-india",
    languages: {
      "en-US": "https://www.ceremonyverse.com/wedding-accessories-and-ceremony-items-from-india",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/wedding-accessories-and-ceremony-items-from-india",
    },
  },
  openGraph: {
    title: "Indian Wedding Jewelry, Gifts & Ceremonial Items from India | Delivered to USA | CeremonyVerse",
    description: "Source Indian wedding jewelry, ceremonial items, welcome bags, return gifts, sweets, and more directly from India. CeremonyVerse delivers everything for your Indian wedding to your US door. Kundan jewelry, puja items, potli bags, mithai and more.",
    type: "website",
  
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ceremonyverse",
    title: "Indian Wedding Jewelry, Gifts & Ceremonial Items from India | Delivered to USA | CeremonyVerse",
    description: "Source Indian wedding jewelry, ceremonial items, welcome bags, return gifts, sweets, and more directly from India. CeremonyVerse delivers everything for your Indian wedding to your US door. Kundan jewelry, puja items, potli bags, mithai and more.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
};


import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export default function AccessoriesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Wedding Accessories & Ceremony Items", path: "/wedding-accessories-and-ceremony-items-from-india" },
  ])

  const faqSchema = buildFAQSchema([
    { question: "What wedding accessories can I source from India?", answer: "We source bridal and bridesmaid jewelry, dupattas, pagdi, pooja essentials, ceremony items, wedding favors, welcome bags, potli bags, mithai, and more — all directly from India with quality verification." },
    { question: "Can you source authentic puja items and ceremonial supplies?", answer: "Yes. We source authentic pooja thalis, kalire, coconut decorations, and ceremony-specific items from trusted suppliers in India, ensuring they meet your cultural and ritual requirements." },
    { question: "How do you handle shipping fragile items like jewelry from India?", answer: "Every item is carefully packaged for international transit. We handle all customs documentation and insure the shipment so your jewelry and accessories arrive safely at your US door." },
    { question: "Can you put together welcome bags for wedding guests?", answer: "Yes — we curate and assemble custom welcome bags with Indian sweets, herbal teas, personalized items, and cultural touches, then ship them to your US address ready for distribution." },
  ])

  const serviceSchema = buildServiceSchema({
    name: "Wedding Accessories & Ceremony Items from India",
    description: "Source Indian wedding jewelry, ceremonial items, welcome bags, return gifts, sweets, and more directly from India. Delivered to your US door.",
    path: "/wedding-accessories-and-ceremony-items-from-india",
    priceFrom: "149",
    image: "/images/services-jewelry-real.jpg",
  })

  return (
    <div className="bg-[var(--cv-bg)]">
      <SeoNav />

      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-semibold mb-6">
            Wedding Accessories & Ceremony Items from India
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            Source jewelry, dupattas, pagdi, ceremony essentials, and wedding favors directly from India with guided support and reliable delivery.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            Complete Your Wedding Details
          </h2>

          <p className="text-[var(--cv-muted)]">
            Beyond outfits, wedding details play a major role in your celebration. Finding authentic, coordinated items locally can be difficult and expensive.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Jewelry</h3>
            <p className="text-[var(--cv-muted)]">
              Bridal, bridesmaid, and family jewelry sourced to match your outfits.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Dupattas & Accessories</h3>
            <p className="text-[var(--cv-muted)]">
              Complete your look with coordinated dupattas and finishing pieces.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Ceremony Items</h3>
            <p className="text-[var(--cv-muted)]">
              Pooja essentials and traditional items sourced with authenticity.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Wedding Favors & Welcome Bags</h3>
            <p className="text-[var(--cv-muted)]">
              Curated gifts and welcome kits for your guests.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Complete Your Wedding Setup
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            From outfits to details, everything sourced with consistency and guidance.
          </p>

          <button className="btn-primary">
            Book Consultation
          </button>

        </div>
      </section>

    <SeoFooter />
      <Script id="breadcrumb-schema-wedding-accessories" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-wedding-accessories" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-wedding-accessories" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
    </div>
  )
}