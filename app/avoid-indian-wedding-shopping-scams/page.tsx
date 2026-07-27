import Link from "next/link"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

// import { SeoNav } from "@/components/seo-nav"

export const metadata = buildMetadata({
  path: "/avoid-indian-wedding-shopping-scams/",
  title: "Avoid Indian Wedding Shopping Scams \u2014 NRI Buyer Protection Guide",
  description: "How to avoid getting scammed when buying Indian wedding outfits from India \u2014 fake vendors, stolen images, bait-and-switch tactics, and how CeremonyVerse verifies every partner."
});

const serviceSchema = buildServiceSchema({
  name: "NRI Wedding Shopping Scam Prevention",
  description: "How CeremonyVerse prevents the most common Indian wedding shopping scams \u2014 vendor verification, live video approval, milestone payments, and order documentation.",
  url: "/avoid-indian-wedding-shopping-scams/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Avoid Scams", url: "/avoid-indian-wedding-shopping-scams/" },
]);

export default function AvoidScamsPage() {
  return (
    <div className="bg-[var(--cv-bg)] min-h-screen">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      {/* <SeoNav /> */}

      <article className="max-w-4xl mx-auto py-20 px-6">
        <header className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "var(--cv-accent)" }}>
            Expert Guide for NRI Brides
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            How to Avoid Scams When Buying Indian Wedding Outfits from India
          </h1>
          <p className="text-lg text-[var(--cv-muted)] max-w-2xl mx-auto">
            Don't let your dream wedding turn into a nightmare. Learn the essential steps to source authentic Indian bridal wear safely from abroad.
          </p>
        </header>

        <div className="prose prose-stone max-w-none space-y-12 text-[var(--cv-foreground)]">
          <section>
            <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
            <p className="text-lg leading-relaxed">
              Planning an Indian wedding from abroad is exciting, especially when sourcing authentic outfits directly from India. However, the dream can turn into a nightmare if you fall victim to scams. This guide equips you with the knowledge to ensure a safe, successful shopping experience.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[var(--cv-border)]">
            <h2 className="text-3xl font-semibold mb-6">Common Scams to Watch Out For</h2>
            <ul className="space-y-4">
              <li><strong>Misrepresentation of Quality:</strong> Editing photos or using high-quality samples to sell inferior products.</li>
              <li><strong>Delayed or Non-Delivery:</strong> Outfits not arriving on time, or not arriving at all, especially for custom orders.</li>
              <li><strong>Hidden Costs:</strong> Unexpected charges for shipping, customs, or alterations not disclosed upfront.</li>
              <li><strong>Fake Designer Wear:</strong> Selling counterfeit designer outfits as genuine pieces at inflated prices.</li>
              <li><strong>Payment Fraud:</strong> Requesting payments through unsecured methods or personal accounts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">7 Steps to a Scam-Free Experience</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-3">1. Research and Vet Vendors Thoroughly</h3>
                <p>Check platforms like <strong>r/DesiWeddings</strong> on Reddit, Google Reviews, and Trustpilot. Look for consistent complaints about quality or delivery.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">2. Prioritize Transparent Communication</h3>
                <p>A reputable vendor should be responsive, detail-oriented, and always open to <strong>live video calls</strong> to show fabrics and embroidery in real-time.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">3. Insist on Secure Payment Methods</h3>
                <p>Always use credit cards or PayPal (Goods & Services) which offer buyer protection. <strong>Avoid</strong> Western Union or direct transfers to personal accounts.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">4. Get Everything in Writing</h3>
                <p>Ensure your invoice includes a detailed order description, pricing breakdown, production timeline, and return/refund policy.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">5. Request Regular Updates</h3>
                <p>Ask for photos of fabric selection, work-in-progress shots of embroidery, and a final inspection video before shipping.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">6. Understand Shipping and Customs</h3>
                <p>A reliable vendor provides tracking numbers and clearly explains potential customs duties for your specific country.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">7. Consider a Concierge Service</h3>
                <p>For ultimate peace of mind, CeremonyVerse acts as your trusted partner on the ground in India, handling vetting, quality control, and logistics.</p>
              </div>
            </div>
          </section>

          <section className="bg-[var(--cv-accent)] bg-opacity-10 p-10 rounded-3xl text-center border border-[var(--cv-accent)] border-opacity-20">
            <h2 className="text-3xl font-semibold mb-6">Ready for a Stress-Free Shopping Experience?</h2>
            <p className="text-lg mb-8">
              Let CeremonyVerse handle the vetting and quality control for you. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="btn-primary">
                Book Free Consultation
              </Link>
              <a href="https://wa.me/12153419990" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold transition hover:opacity-90">
                WhatsApp Us Now
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
