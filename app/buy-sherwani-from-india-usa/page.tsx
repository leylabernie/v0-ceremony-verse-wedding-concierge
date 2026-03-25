export const metadata = {
  title: "Buy Sherwani from India | Custom Indian Groom Outfit Delivered to USA | CeremonyVerse",
  description: "Source your perfect sherwani directly from India with CeremonyVerse. Live video shopping, custom stitching to your measurements, quality inspection, and delivery to your US address. Full-length sherwanis, bandhgalas, and kurta sets for Indian weddings in the USA.",
  keywords: "buy sherwani from India USA, custom sherwani NRI groom, sherwani delivered to USA, Indian groom outfit USA, sherwani online USA, bandhgala from India, kurta set wedding USA, NRI groom sherwani, Indian groom attire USA, CeremonyVerse sherwani",
  openGraph: {
    title: "Buy Sherwani from India | Custom Indian Groom Outfit Delivered to USA | CeremonyVerse",
    description: "Source your perfect sherwani directly from India with CeremonyVerse. Live video shopping, custom stitching to your measurements, quality inspection, and delivery to your US address. Full-length sherwanis, bandhgalas, and kurta sets for Indian weddings in the USA.",
    type: "website",
  },
};


import { SeoNav } from "@/components/seo-nav"

export default function SherwaniPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <SeoNav />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-semibold mb-6">
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
            Many US stores offer limited sherwani options, generic sizing, and high pricing due to retail markups.
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
            CeremonyVerse connects you directly with experienced designers and skilled makers. You explore styles through live video, select fabrics and fits, and finalize your outfit with confidence.
          </p>

          <p className="text-[var(--cv-muted)]">
            From classic sherwanis to modern Indo-western looks, everything is guided and streamlined.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Custom Fit</h3>
            <p className="text-[var(--cv-muted)]">
              Tailored measurements ensure a perfect fit without trial visits.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Live Video Selection</h3>
            <p className="text-[var(--cv-muted)]">
              Review fabrics, colors, and styles in real time before choosing.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">No Retail Markups</h3>
            <p className="text-[var(--cv-muted)]">
              Access the same sources without paying store premiums.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Delivered to USA</h3>
            <p className="text-[var(--cv-muted)]">
              Reliable shipping with tracking and support.
            </p>
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
            Get expert guidance and direct access to the right designs without stress.
          </p>

          <button className="btn-primary">
            Book Consultation
          </button>

        </div>
      </section>

    </div>
  )
}
