import Link from "next/link"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

// import { SeoNav } from "@/components/seo-nav"

export const metadata = buildMetadata({
  path: "/avoid-indian-wedding-shopping-scams/",
  title: "Avoid Indian Wedding Shopping Scams \u2014 NRI Buyer Protection Guide",
  description: "How to reduce risk when buying Indian wedding outfits from India by checking seller identity, current item evidence, written terms, payments, shipping, and remedies."
});

const serviceSchema = buildServiceSchema({
  name: "NRI Wedding Shopping Scam Prevention",
  description: "How documented seller checks, item evidence, payment terms, approvals, shipping responsibilities, and remedies can reduce remote-shopping risk.",
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
            Remote-Shopping Risk Guide
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            How to Avoid Scams When Buying Indian Wedding Outfits from India
          </h1>
          <p className="text-lg text-[var(--cv-muted)] max-w-2xl mx-auto">
            Use a documented review process to reduce seller, product, payment, fit, shipping, and customs risk when shopping remotely.
          </p>
        </header>

        <div className="prose prose-stone max-w-none space-y-12 text-[var(--cv-foreground)]">
          <section>
            <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
            <p className="text-lg leading-relaxed">
              Remote shopping can involve seller, catalog-image, payment, product, fit, shipping, and customs risk. No checklist can guarantee a successful order, but the steps below can help you request better evidence and written terms before paying.
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
            <h2 className="text-3xl font-semibold mb-6">7 Steps That Can Reduce Remote-Shopping Risk</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-3">1. Research and Vet Vendors Thoroughly</h3>
                <p>Check platforms like <strong>r/DesiWeddings</strong> on Reddit, Google Reviews, and Trustpilot. Look for consistent complaints about quality or delivery.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">2. Prioritize Transparent Communication</h3>
                <p>Ask for responsive, specific answers and current item evidence. <strong>Live video</strong> may help when the vendor and item allow it, but refusal alone does not prove fraud and video does not authenticate every product claim.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">3. Insist on Secure Payment Methods</h3>
                <p>Consider a traceable payment method with protections that apply to the transaction, and verify the payee before sending funds. Protection, dispute deadlines, and coverage vary by issuer, platform, country, and transaction type.</p>
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
                <p>Ask for the carrier, service level, declared value, available insurance, documentation, tracking plan, import responsibility, and a shipment-specific estimate. Carrier scans, delivery timing, and customs assessments are not guaranteed.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">7. Consider a Concierge Service</h3>
                <p>CeremonyVerse can document the selected scope, available vendor evidence, item references, approvals, shipping plan, and remedy terms. The vendor, manufacturer, carrier, and customs authority remain responsible for their respective work.</p>
              </div>
            </div>
          </section>

          <section className="bg-[var(--cv-accent)] bg-opacity-10 p-10 rounded-3xl text-center border border-[var(--cv-accent)] border-opacity-20">
            <h2 className="text-3xl font-semibold mb-6">Want a More Documented Shopping Process?</h2>
            <p className="text-lg mb-8">
              CeremonyVerse can organize in-scope vendor evidence, item references, approvals, and shipping responsibilities. A concierge process reduces uncertainty; it does not eliminate vendor, product, fit, carrier, or customs risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="btn-primary">
                Schedule Free Consultation
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
