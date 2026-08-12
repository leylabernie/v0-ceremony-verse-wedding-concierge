import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/buy-indian-wedding-outfits-from-india/",
  title: "Indian Wedding Shopping Concierge for USA & Canada",
  description: "Coordinate Indian wedding outfits from India with vendor research, live or recorded item review, measurements, written approvals, inspection checkpoints, and USA or Canada delivery planning."
});

const serviceSchema = buildServiceSchema({
  name: "India-to-USA and Canada Wedding Shopping Concierge",
  description: "Documented Indian wedding outfit sourcing for couples and families in the United States and Canada, with vendor research, item evidence, measurements, approvals, inspection checkpoints, and delivery planning defined by the selected scope.",
  url: "/buy-indian-wedding-outfits-from-india/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Buy Indian Wedding Outfits", url: "/buy-indian-wedding-outfits-from-india/" },
]);


export default function BuyFromIndiaPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Indian Wedding Shopping from India, Coordinated for USA &amp; Canada
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            For couples and families who want access to India-based options without managing every vendor, measurement, approval, shipment, and deadline alone.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            The Problem This Service Solves
          </h2>

          <p className="text-[var(--cv-muted)]">
            Remote wedding shopping often scatters decisions across WhatsApp messages, screenshots, relatives, vendors, tailors, and carriers. Important details can be lost: which item was approved, whose measurements are current, what customization was promised, what remains unpaid, and who handles a problem.
          </p>

          <p className="text-[var(--cv-muted)]">
            CeremonyVerse creates one documented process. Local boutiques and India-based vendors still differ in inventory, customization, costs, fitting options, return terms, and lead times; the goal is to compare complete written options, not assume one source is always better.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Who It Is For and What Can Be Coordinated
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Bridal Lehengas</h3>
              <p className="text-[var(--cv-muted)]">
                Research ready-made or made-to-order options, record design and customization details, and keep approval evidence before an order is placed.
              </p>
            </div>

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Sherwanis & Groom Outfits</h3>
              <p className="text-[var(--cv-muted)]">
                Coordinate the groom&apos;s measurements, approved style, accessories, vendor responsibilities, and alteration buffer.
              </p>
            </div>

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Bridesmaids & Groomsmen</h3>
              <p className="text-[var(--cv-muted)]">
                Manage individual records for a coordinated group while documenting acceptable color, fabric, and handmade variation.
              </p>
            </div>

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Accessories & Jewelry</h3>
              <p className="text-[var(--cv-muted)]">
                Add approved finishing pieces when the item, vendor, shipping method, and destination rules can be responsibly reviewed.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">The Documented Sourcing Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["1. Build the brief", "Record each person, event, item, budget range, deadline, measurements, preferred colors, customization, and acceptable alternatives."],
              ["2. Compare available options", "Review vendor identity, current item media or an eligible live session, written price components, stated lead time, customization terms, and available remedy terms."],
              ["3. Approve before payment", "The client approves the item and documented specifications. The written scope identifies who receives payment, what is refundable, and which changes may create added cost or time."],
              ["4. Track production and changes", "Maintain dated measurement and approval records. Any vendor-proposed substitution, material change, or missed milestone is returned to the client for a decision."],
              ["5. Review before shipping", "When the selected tier, vendor, and item allow it, compare the completed item with the approved references through current photos, video, or a live review. This is an evidence checkpoint, not a guarantee of fit or workmanship."],
              ["6. Plan delivery and alterations", "Document the carrier, tracking, declared shipment details, estimated customs responsibility, insurance options, claim owner, delivery buffer, and a local alteration plan where appropriate."],
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
            <h2 className="text-2xl font-semibold mb-4">What CeremonyVerse Coordinates</h2>
            <ul className="space-y-3 text-[var(--cv-muted)]">
              <li>• The brief, vendor research, comparison record, and decision checklist.</li>
              <li>• Measurement records and written item approvals within the selected tier.</li>
              <li>• Eligible live or recorded item review and available pre-shipping evidence.</li>
              <li>• Status follow-up, shipment planning, tracking handoff, and problem documentation.</li>
            </ul>
          </article>
          <article className="bg-white border border-[var(--cv-border)] rounded-2xl p-7">
            <h2 className="text-2xl font-semibold mb-4">What Is Separate or Not Controlled</h2>
            <ul className="space-y-3 text-[var(--cv-muted)]">
              <li>• Product, tailoring, shipping, insurance, duty, tax, and local alteration costs unless a written quote states otherwise.</li>
              <li>• Vendor workmanship, handmade variation, exact screen-to-fabric color, carrier dates, customs decisions, and final fit.</li>
              <li>• Returns, refunds, remakes, or change requests beyond the selected vendor&apos;s written terms.</li>
              <li>• A fixed universal delivery promise. Timing is built backward from the event after the actual item and vendor are known.</li>
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
            <Link href="/baraat-outfits-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Baraat Outfits</Link>
            <Link href="/sangeet-outfits-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Sangeet Outfits</Link>
            <Link href="/mehndi-outfits-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Mehndi Outfits</Link>
            <Link href="/how-it-works/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">How It Works</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Start Your Shopping Process
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            Use a documented India-sourcing process without requiring an international shopping trip.
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
