export const metadata = {
  title: "Indian Wedding Jewelry, Gifts & Ceremonial Items from India | Delivered to USA | CeremonyVerse",
  description: "Source Indian wedding jewelry, ceremonial items, welcome bags, return gifts, sweets, and more directly from India. CeremonyVerse delivers everything for your Indian wedding to your US door. Kundan jewelry, puja items, potli bags, mithai and more.",
  keywords: "Indian wedding jewelry USA, kundan jewelry from India USA, Indian wedding ceremonial items USA, puja items Indian wedding USA, Indian wedding welcome bags, potli bags USA, Indian wedding return gifts, mithai USA, Indian wedding sweets delivered USA, CeremonyVerse accessories",
  alternates: {
    canonical: "https://ceremonyverse.com/wedding-accessories-and-ceremony-items-from-india",
  },
  openGraph: {
    title: "Indian Wedding Jewelry, Gifts & Ceremonial Items from India | Delivered to USA | CeremonyVerse",
    description: "Source Indian wedding jewelry, ceremonial items, welcome bags, return gifts, sweets, and more directly from India. CeremonyVerse delivers everything for your Indian wedding to your US door. Kundan jewelry, puja items, potli bags, mithai and more.",
    type: "website",
  
    images: [
      {
        url: "https://ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
};


import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

export default function AccessoriesPage() {
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
    </div>
  )
}