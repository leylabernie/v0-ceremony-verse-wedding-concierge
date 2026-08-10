import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/shop-from-india/",
  title: "Shop Indian Wedding Outfits from India — USA & Canada",
  description: "Research and source Indian wedding outfits from India with documented options, eligible live video review, written approvals, and delivery coordination across the USA and Canada."
});

const serviceSchema = buildServiceSchema({
  name: "Live Video Shopping from India",
  description: "Indian wedding outfit sourcing with documented vendor options, eligible live video review, written approvals, and delivery coordination across the United States and Canada.",
  url: "/shop-from-india/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Shop from India", url: "/shop-from-india/" },
]);

export default function ShopFromIndiaPage() {
  return (
    <main className="min-h-screen bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-[var(--cv-foreground)]">
            Buy Your Wedding Outfits from India — Without Traveling
          </h1>

          <p className="mt-6 text-lg text-[var(--cv-muted)]">
            Families throughout the United States and Canada can use our U.S.-based concierge process to research bridal lehengas, sherwanis, and wedding outfits from India without requiring an international shopping trip.
          </p>

          <p className="mt-4 text-lg text-[var(--cv-muted)]">
            Eligible tiers may include live video or current item media, written references and approvals, pre-shipping review, and delivery coordination. Availability depends on the selected vendor and item.
          </p>

          <div className="mt-8">
            <a
              href="/contact/"
              className="bg-[var(--cv-accent)] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Book a Video Consultation
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO SHOPPING */}
      <section className="py-16 bg-[var(--cv-bg)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--cv-foreground)]">
            Live Video Shopping — See Before You Buy
          </h2>

          <p className="mt-6 text-lg text-[var(--cv-muted)] max-w-3xl mx-auto">
            Review more than a catalog image before approving an eligible item.
          </p>

          <p className="mt-4 text-lg text-[var(--cv-muted)] max-w-3xl mx-auto">
            When a vendor and item allow it, live video can help you review fabric, embroidery, stitching, and color before making a purchase decision. It reduces uncertainty but cannot eliminate remote-shopping risk.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">See Everything Clearly</h3>
              <p className="mt-2 text-[var(--cv-muted)]">
                Compare the current item media with the written order references before approval.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Document the Seller</h3>
              <p className="mt-2 text-[var(--cv-muted)]">
                Review the seller, item, available terms, capacity, and evidence within the selected scope.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Check Every Detail</h3>
              <p className="mt-2 text-[var(--cv-muted)]">
                Record the requested fabric, embroidery, stitching, measurements, and finish in writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center font-semibold text-[var(--cv-foreground)]">
            What We Source
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Bridal Lehengas</h3>
              <p className="text-[var(--cv-muted)]">
                Research bridal lehengas and compare the selected item, customization, vendor terms, and landed-cost estimate.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Sherwanis for Grooms</h3>
              <p className="text-[var(--cv-muted)]">
                Research sherwanis with documented measurements, available pre-shipping review, and alteration planning.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Bridesmaid & Family Outfits</h3>
              <p className="text-[var(--cv-muted)]">
                Coordinate style references, measurements, approvals, and order records for family and wedding-party outfits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Dupattas & Accessories</h3>
              <p className="text-[var(--cv-muted)]">
                Add approved accessories when the item, vendor, shipment, and available terms can be responsibly reviewed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[var(--cv-foreground)]">
            Start Your Sourcing Process
          </h2>

          <p className="mt-4 text-[var(--cv-muted)]">
            The fastest way to begin is a quick message. Share your wedding date,
            preferences, and budget—we’ll guide you step by step.
          </p>

          <div className="mt-6 space-y-2 text-[var(--cv-foreground)]">
            <p>
              📱 WhatsApp / Text:{" "}
              <a href="tel:+12153419990" className="underline">
                +1-215-341-9990
              </a>
            </p>

            <p>
              📧 Email:{" "}
              <a href="mailto:hello@ceremonyverse.com" className="underline">
                hello@ceremonyverse.com
              </a>
            </p>
          </div>

          <p className="mt-4 text-sm text-[var(--cv-muted)]">
            WhatsApp, text, email, and the consultation form are available contact options.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="bg-[var(--cv-accent)] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">
            Planning a wedding wardrobe?
          </h3>

          <p className="mt-3 text-white/90">
            Review the free planning guides, then request a consultation if you need a documented sourcing scope.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/free-guides/"
              className="bg-white text-[var(--cv-accent)] px-6 py-3 rounded-lg font-semibold"
            >
              View Free Guides
            </a>
            <a
              href="/contact/?service=india"
              className="border border-white px-6 py-3 rounded-lg font-semibold text-white"
            >
              Ask for a Personal Recommendation
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
