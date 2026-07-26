import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/wedding-accessories-and-ceremony-items-from-india/",
  title: "Indian Wedding Accessories & Ceremony Items \u2014 Sourced from India",
  description: "Source all Indian wedding ceremony items from India \u2014 puja thalis, kalash, mangalsutra, kaleeras, return gifts, sweets, and welcome bags \u2014 with US delivery."
});

const serviceSchema = buildServiceSchema({
  name: "Wedding Accessories & Ceremony Item Sourcing",
  description: "Complete sourcing of Indian wedding accessories and ceremony items \u2014 puja thalis, kalash, mangalsutra, kaleeras, return gifts, sweets, and welcome bags \u2014 delivered to the USA.",
  url: "/wedding-accessories-and-ceremony-items-from-india/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Accessories & Ceremony Items", url: "/wedding-accessories-and-ceremony-items-from-india/" },
]);


export default function AccessoriesPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
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

      {/* Related outfit pages */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--cv-accent)] font-semibold mb-4">
            Related outfit pages
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            <Link href="/buy-bridal-lehenga-from-india-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Bridal Lehengas</Link>
            <Link href="/buy-sherwani-from-india-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Groom Sherwanis</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Bridesmaid Outfits</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Kanchipuram Sarees</Link>
            <Link href="/banarasi-silk-sarees-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Banarasi Sarees</Link>
            <Link href="/how-it-works/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">How It Works</Link>
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

          <div className="flex flex-col items-center gap-3.5">
            <Link href="/contact" className="inline-flex items-center bg-[var(--cv-accent)] text-white px-8 py-3.5 rounded-full text-[17px] font-semibold no-underline">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/12153419990" className="text-[17px] text-[var(--cv-body)] no-underline">
              WhatsApp: +1 (215) 341-9990
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}
