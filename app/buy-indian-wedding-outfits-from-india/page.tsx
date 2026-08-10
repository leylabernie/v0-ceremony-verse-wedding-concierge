import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/buy-indian-wedding-outfits-from-india/",
  title: "Buy Indian Wedding Outfits from India \u2014 Full Wedding Party Sourcing",
  description: "Source the entire wedding party's outfits from India \u2014 bride, groom, bridesmaids, groomsmen, family \u2014 with live video shopping, custom stitching, and US delivery."
});

const serviceSchema = buildServiceSchema({
  name: "Full Wedding Party Outfit Sourcing",
  description: "End-to-end sourcing for the entire Indian wedding party \u2014 bride, groom, bridesmaids, groomsmen, and family outfits \u2014 directly from India with US delivery.",
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
            Buy Indian Wedding Outfits from India (Without Traveling)
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            Research vendor options in India through a documented remote process, with live review when the selected vendor and item allow it.
          </p>
        </div>
      </section>

      {/* WHY THIS PAGE EXISTS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            Why Not Just Buy Locally?
          </h2>

          <p className="text-[var(--cv-muted)]">
            Local boutiques and India-based vendors offer different inventory, services, costs, fitting options, return terms, and lead times. Compare equivalent written scopes.
          </p>

          <p className="text-[var(--cv-muted)]">
            CeremonyVerse helps organize available vendor options, item evidence, measurements, approvals, complete cost inputs, and delivery responsibilities.
          </p>

        </div>
      </section>

      {/* WHAT YOU CAN BUY */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            What You Can Source
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Bridal Lehengas</h3>
              <p className="text-[var(--cv-muted)]">
                Custom or ready-made bridal outfits sourced directly from India with full quality guidance.
              </p>
            </div>

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Sherwanis & Groom Outfits</h3>
              <p className="text-[var(--cv-muted)]">
                Groom attire tailored or selected with proper sizing and coordination.
              </p>
            </div>

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Bridesmaids & Groomsmen</h3>
              <p className="text-[var(--cv-muted)]">
                Coordinated wedding party outfits with consistent colors and styling.
              </p>
            </div>

            <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Accessories & Jewelry</h3>
              <p className="text-[var(--cv-muted)]">
                Complete your look with carefully sourced finishing pieces.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            How It Works
          </h2>

          <p className="text-[var(--cv-muted)]">
            Share your requirements, then review available options. Eligible tiers may include live video or current item media, written approvals, pre-shipping review, and delivery coordination when the selected vendor and item allow it.
          </p>

          <p className="text-[var(--cv-muted)]">
            This allows you to experience Indian wedding shopping without traveling or taking risks with unknown vendors.
          </p>

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
