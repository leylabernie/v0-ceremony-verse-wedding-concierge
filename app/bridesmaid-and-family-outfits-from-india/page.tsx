import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/bridesmaid-and-family-outfits-from-india/",
  title: "Indian Wedding Party Outfit Sourcing | USA & Canada",
  description: "Coordinate bridesmaid, groomsmen, and family outfits from India with group briefs, individual measurements, written approvals, change tracking, and USA or Canada delivery planning."
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
            For wedding parties and families who need coordinated looks across multiple people, sizes, events, addresses, and decision-makers.
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
            A group order is not one outfit multiplied by a headcount. Each participant may have different measurements, modesty preferences, alteration needs, delivery address, and approval timing.
          </p>

          <p className="text-[var(--cv-muted)]">
            CeremonyVerse keeps one group brief and an individual record for each person so the family can see what is approved, what is still missing, and which change affects cost or timing.
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
            The selected tier or custom written scope states which research, live review, measurement, order, pre-shipping, and delivery steps CeremonyVerse coordinates. Parties larger than eight require a written scope based on the actual number of people, events, items, and addresses.
          </p>

        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">How a Group Order Is Managed</h2>
          <p className="mx-auto max-w-3xl text-center text-[var(--cv-muted)] mb-10">
            One family representative can approve the shared direction, but each participant&apos;s measurements and item details remain separate.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Group brief", "Define events, roles, quantity, palette, style rules, budget range, deadline, and acceptable variation before vendor research begins."],
              ["Individual records", "Track each person's contact, item, measurements, reference photos, customization, approval status, and delivery plan."],
              ["Sample or evidence checkpoint", "When feasible, review a sample, current item media, fabric reference, or vendor evidence before the full group proceeds."],
              ["Written order approval", "Confirm the item list, sizes, customization, unit costs, outside costs, payment recipient, and stated vendor terms."],
              ["Change control", "Record late measurements, substitutions, quantity changes, and vendor changes; obtain a new approval when cost, appearance, or timing is affected."],
              ["Shipment and alteration plan", "Choose consolidated or individual shipping where available, identify customs and claim responsibilities, and preserve time for local alterations."],
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
            <h2 className="text-2xl font-semibold mb-4">Included in the Coordination Scope</h2>
            <ul className="space-y-3 text-[var(--cv-muted)]">
              <li>• Group requirements, individual records, and approval-status tracking.</li>
              <li>• Vendor option comparison and eligible live or recorded item review.</li>
              <li>• Measurement collection support and written order confirmation.</li>
              <li>• Milestone follow-up, available pre-shipping evidence, and delivery planning.</li>
            </ul>
          </article>
          <article className="bg-white border border-[var(--cv-border)] rounded-2xl p-7">
            <h2 className="text-2xl font-semibold mb-4">Separate Costs and Real Limits</h2>
            <ul className="space-y-3 text-[var(--cv-muted)]">
              <li>• Outfits, tailoring, shipping, insurance, customs, tax, and alterations are separate unless itemized otherwise.</li>
              <li>• Dye lots, handwork, screen colors, exact fit, vendor workmanship, and carrier or customs timing cannot be guaranteed.</li>
              <li>• A participant who misses the measurement or approval deadline may require a different item, separate shipment, or revised timeline.</li>
              <li>• Returns, remakes, refunds, and late changes follow the selected vendor&apos;s written terms.</li>
            </ul>
          </article>
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
              Schedule Free Consultation
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
