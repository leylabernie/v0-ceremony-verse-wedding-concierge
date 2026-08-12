import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/wedding-accessories-and-ceremony-items-from-india/",
  title: "Indian Wedding Ceremony Items, Favors & Welcome Gifts",
  description: "Coordinate family-approved Indian wedding ceremony items, favors, and welcome gifts with quantities, samples, written approvals, packing, shipping, and delivery responsibilities."
});

const serviceSchema = buildServiceSchema({
  name: "Wedding Accessories & Ceremony Item Sourcing",
  description: "Documented sourcing support for approved Indian wedding accessories, ceremony items, favors, and welcome gifts, subject to item, vendor, carrier, and destination availability.",
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
            For families coordinating many small but important items across ceremonies, guest gifts, welcome bags, and outfit accessories—without relying on scattered screenshots and verbal promises.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            Complete Your Wedding Details
          </h2>

          <p className="text-[var(--cv-muted)]">
            Start with the family&apos;s approved item list rather than assuming every Hindu or Gujarati ceremony uses the same objects. For each item, document the purpose, quantity, size, material, wording or personalization, sample evidence, deadline, packing method, and responsible person.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Jewelry</h3>
            <p className="text-[var(--cv-muted)]">
              Research costume or fashion jewelry for the bride, wedding party, and family when material descriptions, item evidence, and shipping terms can be documented.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Dupattas & Accessories</h3>
            <p className="text-[var(--cv-muted)]">
              Coordinate approved dupattas, pagdi or safa, footwear, bags, and other finishing pieces with the outfit record.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Ceremony Items</h3>
            <p className="text-[var(--cv-muted)]">
              Family-approved pooja essentials and ceremonial items researched with item-specific evidence where available.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Wedding Favors & Welcome Bags</h3>
            <p className="text-[var(--cv-muted)]">
              Compare favors, return gifts, packaging, tags, and bag components using the final quantity, personalization proof, assembly plan, and destination rules.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">From Item List to Delivery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["1. Confirm requirements", "The family or officiant confirms the item name, use, material, quantity, dimensions, color, wording, and event deadline."],
              ["2. Review a sample or proof", "Use current item media, a sample, a personalization proof, or an eligible live review before approving a larger quantity where feasible."],
              ["3. Approve the complete quote", "Record unit price, setup or personalization charges, minimum quantity, packing, shipping, estimated duty or tax, and the vendor's remedy terms."],
              ["4. Track production changes", "Return spelling, material, color, packaging, or quantity changes to the family for written approval when they affect the order."],
              ["5. Check counts and evidence", "When available, review quantity, personalization, visible condition, and packing evidence before shipment. This does not replace the vendor's responsibility."],
              ["6. Plan final assembly", "Identify who clears customs, receives cartons, handles damage claims, assembles welcome bags, and delivers items to the home, venue, resort, or planner."],
            ].map(([title, text]) => (
              <article key={title} className="border border-[var(--cv-border)] rounded-2xl p-6 bg-[var(--cv-bg)]">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-[var(--cv-muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <article className="bg-white border border-[var(--cv-border)] rounded-2xl p-7">
            <h2 className="text-2xl font-semibold mb-4">What CeremonyVerse Can Coordinate</h2>
            <ul className="space-y-3 text-[var(--cv-muted)]">
              <li>• The item brief, vendor comparison, sample or proof record, and approvals.</li>
              <li>• Quantity, personalization, cost, milestone, and packing documentation.</li>
              <li>• Eligible pre-shipping evidence and a written handoff for shipping and final assembly.</li>
              <li>• Coordination with the family&apos;s planner or venue contact when included in the written scope.</li>
            </ul>
          </article>
          <article className="bg-white border border-[var(--cv-border)] rounded-2xl p-7">
            <h2 className="text-2xl font-semibold mb-4">Items and Outcomes That Need Separate Review</h2>
            <ul className="space-y-3 text-[var(--cv-muted)]">
              <li>• Food, liquids, plants, powders, batteries, flammable materials, high-value precious jewelry, fragile items, and oversized goods may be restricted or unsuitable for the proposed shipment.</li>
              <li>• Product, personalization, packing, freight, insurance, customs, tax, assembly, storage, and venue-delivery costs are separate unless itemized.</li>
              <li>• Customs clearance, carrier dates, breakage, handmade variation, and vendor workmanship cannot be guaranteed.</li>
              <li>• Final eligibility depends on the item, material, origin, destination, carrier, resort, venue, and current third-party rules.</li>
            </ul>
          </article>
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
            Discuss the requested items, quantities, deadlines, approval process, and what each written quote must include.
          </p>

          <div className="flex flex-col items-center gap-3.5">
            <Link href="/contact/" className="inline-flex items-center bg-[var(--cv-accent)] text-white px-8 py-3.5 rounded-full text-[17px] font-semibold no-underline">
              Schedule a Free 30-Minute Consultation
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
