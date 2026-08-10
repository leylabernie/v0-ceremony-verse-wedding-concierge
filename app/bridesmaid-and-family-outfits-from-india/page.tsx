import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/bridesmaid-and-family-outfits-from-india/",
  title: "Bridesmaid & Family Outfits from India \u2014 Coordinated for US Weddings",
  description: "Coordinate bridesmaid and family outfits from India with shared color references, individual measurement records, written approvals, and group delivery planning."
});

const serviceSchema = buildServiceSchema({
  name: "Bridesmaid & Family Outfit Coordination",
  description: "Coordinated sourcing of bridesmaid and family outfits from India with shared references, individual measurement records, written approvals, and delivery planning.",
  url: "/bridesmaid-and-family-outfits-from-india/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Bridesmaid & Family Outfits", url: "/bridesmaid-and-family-outfits-from-india/" },
]);


export default function BridesmaidPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Bridesmaid & Family Outfits from India
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            Coordinate bridesmaid, groomsmen, and family outfits with shared references, individual measurement records, and written approvals.
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
            Comparing local and India-sourced options can be difficult when the item, customization, outside costs, and remedy terms are not documented the same way.
          </p>

        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            Coordinated and Documented
          </h2>

          <p className="text-[var(--cv-muted)]">
            CeremonyVerse helps organize approved colors, fabrics, styles, measurements, quantities, and vendor options across the group. Handmade dye lots and screen colors cannot be guaranteed identical.
          </p>

          <p className="text-[var(--cv-muted)]">
            The selected tier or custom scope states which research, live review, measurement, order, pre-shipping, and delivery steps CeremonyVerse coordinates.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Color Coordination</h3>
            <p className="text-[var(--cv-muted)]">
              Record one approved palette and acceptable variation for the selected items.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Group Sizing Support</h3>
            <p className="text-[var(--cv-muted)]">
              Maintain separate measurement records and approvals for each participant.
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
              Define the approved timeline, vendor responsibilities, shipment plan, and alteration buffer for the group.
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
            <Link href="/mehndi-outfits-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Mehndi Outfits</Link>
            <Link href="/sangeet-outfits-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Sangeet Outfits</Link>
            <Link href="/reception-outfits-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Reception Outfits</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Kanchipuram Sarees</Link>
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
            Coordinate your wedding party outfits with a documented brief, measurements, approvals, and responsibilities.
          </p>

          <div className="flex flex-col items-center gap-3.5">
            <Link href="/contact/" className="inline-flex items-center bg-[var(--cv-accent)] text-white px-8 py-3.5 rounded-full text-[17px] font-semibold no-underline">
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
