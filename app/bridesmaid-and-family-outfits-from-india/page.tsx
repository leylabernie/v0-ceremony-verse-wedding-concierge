import Script from "next/script"

export const metadata = {
  title: "Indian Bridesmaid & Family Outfits from India | Coordinated Wedding Outfits USA | CeremonyVerse",
  description: "Coordinate bridesmaid lehengas, family sarees, and wedding party outfits sourced directly from India. CeremonyVerse manages all measurements, coordination, and delivery to the USA. Perfect for NRI families planning Indian weddings.",
  keywords: "Indian bridesmaid outfits USA, bridesmaid lehenga from India, family outfits Indian wedding USA, coordinate Indian wedding party USA, saree bridesmaid USA, Indian wedding family coordination, NRI family outfits wedding, CeremonyVerse bridesmaid outfits",
  alternates: {
    canonical: "https://www.ceremonyverse.com/bridesmaid-and-family-outfits-from-india",
  },
  openGraph: {
    title: "Indian Bridesmaid & Family Outfits from India | Coordinated Wedding Outfits USA | CeremonyVerse",
    description: "Coordinate bridesmaid lehengas, family sarees, and wedding party outfits sourced directly from India. CeremonyVerse manages all measurements, coordination, and delivery to the USA. Perfect for NRI families planning Indian weddings.",
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
};


import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export default function BridesmaidPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Bridesmaid & Family Outfits from India", path: "/bridesmaid-and-family-outfits-from-india" },
  ])

  const faqSchema = buildFAQSchema([
    { question: "Can you coordinate matching bridesmaid outfits from India?", answer: "Yes. We coordinate lehengas, sarees, or salwar sets for your entire bridal party — ensuring consistent colors, fabrics, and sizing. All measurements are collected and managed by us." },
    { question: "How do you handle sizing for multiple bridesmaids in different states?", answer: "We send measurement guides to each person and follow up to collect accurate numbers. Every outfit is custom-stitched to individual measurements and can be shipped to a single address or individually." },
    { question: "Can we choose different styles but the same color family?", answer: "Absolutely. We can source identical outfits or complementary styles in a coordinated color palette — whatever matches your wedding vision." },
    { question: "How far in advance should we order bridesmaid outfits?", answer: "We recommend ordering 5–8 months before the ceremony, especially when coordinating multiple people. Custom stitching takes time and we need measurements from everyone." },
  ])

  const serviceSchema = buildServiceSchema({
    name: "Bridesmaid & Family Outfits from India",
    description: "Coordinate bridesmaid lehengas, family sarees, and wedding party outfits sourced directly from India. CeremonyVerse manages all measurements, coordination, and delivery to the USA.",
    path: "/bridesmaid-and-family-outfits-from-india",
    priceFrom: "599",
    image: "/images/services-bridesmaids.jpg",
  })

  return (
    <div className="bg-[var(--cv-bg)]">
      <SeoNav />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-semibold mb-6">
            Bridesmaid & Family Outfits from India
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            Coordinate outfits for your entire wedding party — bridesmaids, groomsmen, and family — with guided sourcing, consistent colors, and proper sizing.
          </p>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            The Challenge with Group Outfits
          </h2>

          <p className="text-[var(--cv-muted)]">
            Finding matching outfits for multiple people is difficult — especially when dealing with different sizes, preferences, and timelines.
          </p>

          <p className="text-[var(--cv-muted)]">
            Local stores often don’t offer consistent designs or coordinated collections, making it harder to achieve a cohesive look.
          </p>

        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            Coordinated, Simplified, and Stress-Free
          </h2>

          <p className="text-[var(--cv-muted)]">
            CeremonyVerse helps you source coordinated outfits directly from India — ensuring consistent colors, fabrics, and designs across your entire group.
          </p>

          <p className="text-[var(--cv-muted)]">
            Whether you want identical outfits or complementary styles, everything is planned and managed for you.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Color Coordination</h3>
            <p className="text-[var(--cv-muted)]">
              Ensure all outfits match your wedding palette perfectly.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Group Sizing Support</h3>
            <p className="text-[var(--cv-muted)]">
              Handle measurements across multiple people with proper guidance.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Flexible Styles</h3>
            <p className="text-[var(--cv-muted)]">
              Choose matching outfits or coordinated variations for each person.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Bulk Order Management</h3>
            <p className="text-[var(--cv-muted)]">
              We manage timelines, production, and delivery for the entire group.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Plan Your Group Outfits
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            Coordinate your wedding party outfits with clarity, consistency, and expert guidance.
          </p>

          <button className="btn-primary">
            Book Consultation
          </button>

        </div>
      </section>

    <SeoFooter />
      <Script id="breadcrumb-schema-bridesmaid-outfits" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-bridesmaid-outfits" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-bridesmaid-outfits" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
    </div>
  )
}