import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/buy-sherwani-from-india-usa/",
  title: "Buy Sherwani from India \u2014 Groom Sherwani Delivered to USA",
  description: "Source a custom groom sherwani directly from India \u2014 fabric options, fit guidance, live video shopping, and delivery to your US door. Coordinated groomsmen outfits available."
});

const serviceSchema = buildServiceSchema({
  name: "Groom Sherwani Sourcing & Concierge",
  description: "Custom groom sherwani sourcing directly from India \u2014 fabric selection, fit guidance, live video shopping, coordinated groomsmen outfits, and US delivery.",
  url: "/buy-sherwani-from-india-usa/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Buy Sherwani from India", url: "/buy-sherwani-from-india-usa/" },
]);


export default function SherwaniPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Buy Sherwani from India (Delivered to USA)
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            Get groom outfits sourced directly from skilled designers in India — with guided video shopping, custom sizing, and secure delivery.
          </p>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            The Challenge with Groom Shopping
          </h2>

          <p className="text-[var(--cv-muted)]">
            Local boutiques and India-based vendors offer different inventory, sizing services, costs, return terms, and lead times. Compare equivalent written scopes.
          </p>

          <p className="text-[var(--cv-muted)]">
            Traveling to India for outfit shopping isn’t always practical — and without guidance, it can be overwhelming.
          </p>

        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            A Smarter Way to Shop Groom Outfits
          </h2>

          <p className="text-[var(--cv-muted)]">
            CeremonyVerse helps organize available vendor options, item evidence, measurements, approvals, complete cost inputs, and delivery responsibilities. Live review may be available when the vendor and item allow it.
          </p>

          <p className="text-[var(--cv-muted)]">
            The selected service scope states which research and coordination steps are included.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Custom Fit</h3>
            <p className="text-[var(--cv-muted)]">
              Guided measurements document the fit brief before production; local alteration may still be needed.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Live Video Selection</h3>
            <p className="text-[var(--cv-muted)]">
              Review fabrics, colors, and styles in real time before choosing.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Complete Cost Comparison</h3>
            <p className="text-[var(--cv-muted)]">
              Compare the exact garment, service fee, shipping, customs estimate, alteration allowance, timeline, and remedy terms.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Delivered to USA</h3>
            <p className="text-[var(--cv-muted)]">
              The written quote identifies the carrier, service level, tracking, estimates, responsibilities, and claim process.
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
            <Link href="/bridesmaid-and-family-outfits-from-india/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Bridesmaid Outfits</Link>
            <Link href="/baraat-outfits-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Baraat Outfits</Link>
            <Link href="/reception-outfits-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Reception Outfits</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Kanchipuram Sarees</Link>
            <Link href="/banarasi-silk-sarees-usa/" className="bg-white border border-[var(--cv-border)] rounded-full px-4 py-2 text-sm text-[var(--cv-body)] no-underline hover:border-[var(--cv-accent)]">Banarasi Sarees</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Start Your Groom Outfit Journey
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            Organize vendor options, measurements, approvals, complete cost inputs, and delivery responsibilities in one documented process.
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
