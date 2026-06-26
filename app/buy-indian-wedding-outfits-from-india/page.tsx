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
          <h1 className="text-5xl font-semibold mb-6">
            Buy Indian Wedding Outfits from India (Without Traveling)
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            Get direct access to designers and skilled makers in India through guided video shopping — without retail markups or travel stress.
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
            Many stores outside India source their collections from the same makers — but with higher pricing due to retail overheads, limited options, and lack of customization.
          </p>

          <p className="text-[var(--cv-muted)]">
            CeremonyVerse gives you direct access to those same sources while guiding you through the process remotely.
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
            You connect with us, share your preferences, and then review options live via video. We guide you through selection, coordinate everything, and ensure quality before delivery.
          </p>

          <p className="text-[var(--cv-muted)]">
            This allows you to experience Indian wedding shopping without traveling or taking risks with unknown vendors.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Start Your Shopping Process
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            Get guided access to trusted sources in India — without travel, confusion, or guesswork.
          </p>

          <button className="btn-primary">
            Book Consultation
          </button>
        </div>
      </section>

    </div>
  )
}
