import { SeoNav } from "@/components/seo-nav"
import { Metadata } from "next"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-destination-wedding-planner-mexico/",
  title: "Indian Destination Wedding Planner Mexico \u2014 Outfit Sourcing & Coordination",
  description: "Indian destination wedding outfit coordination for Mexico weddings \u2014 bride, groom, full bridal party, family, ceremonial items, and gifts, all coordinated and shipped."
});

const serviceSchema = buildServiceSchema({
  name: "Mexico Destination Indian Wedding Sourcing",
  description: "Indian destination wedding outfit sourcing for Mexico weddings \u2014 full bridal party coordination, family outfits, ceremonial items, and international shipping logistics.",
  url: "/indian-destination-wedding-planner-mexico/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Mexico Destination Weddings", url: "/indian-destination-wedding-planner-mexico/" },
]);

export default function MexicoDestinationPage() {
  return (
    <main className="min-h-screen bg-[var(--cv-bg)]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* HERO SECTION */}
      <section className="relative py-24 px-6 bg-[#f8f5f2]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-[var(--cv-foreground)] leading-tight">
            The Ultimate NRI Guide to <br />
            <span className="text-[var(--cv-accent)]">Indian Weddings in Mexico</span>
          </h1>
          <p className="mt-6 text-xl text-[var(--cv-muted)] max-w-3xl mx-auto">
            Mexico is the #1 destination for Indian weddings, but logistics can be a nightmare. From sourcing Mandaps to coordinating 50+ family outfits from India, we make it seamless.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a href="#wardrobe" className="bg-[var(--cv-accent)] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
              Book Group Wardrobe Sourcing
            </a>
            <a href="/contact" className="bg-white border-2 border-[var(--cv-accent)] text-[var(--cv-accent)] px-8 py-4 rounded-lg font-bold text-lg">
              Get Mexico Vendor List
            </a>
          </div>
        </div>
      </section>

      {/* DESTINATION HUB SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--cv-foreground)]">Insider Destination Hub: Master the Logistics</h2>
            <p className="mt-4 text-[var(--cv-muted)]">Everything you need to know about planning a South Asian wedding in Mexico.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌴</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Venue Logistics</h3>
              <p className="text-[var(--cv-muted)] leading-relaxed">
                Cancun vs. Los Cabos? We break down the best resorts for large Indian guest counts, beach-side Baraat permits, and late-night Sangeet restrictions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🕯️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Decor & Mandaps</h3>
              <p className="text-[var(--cv-muted)] leading-relaxed">
                Sourcing authentic Indian decor in Mexico is expensive. We guide you on which local florists understand South Asian aesthetics and where to rent Mandaps.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#f0e6dd] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">DJs & Entertainment</h3>
              <p className="text-[var(--cv-muted)] leading-relaxed">
                Don't settle for a "generic" resort DJ. Access our vetted list of North American and local DJs who specialized in Bollywood, Bhangra, and fusion sets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE BRIDGE: OUTFIT SOURCING FUNNEL */}
      <section id="wardrobe" className="py-20 bg-[#1f1f1f] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Your Secret Weapon: <br />
                <span className="text-[#7a6841]">Group Wardrobe Sourcing</span>
              </h2>
              <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                The biggest stress for Mexico destination weddings? Getting the outfits right. Most NRI families waste thousands on overpriced US boutiques or risk scams on Instagram.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="text-[#7a6841] font-bold">✓</span> Matching Bridesmaid & Groomsmen sets from India
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="text-[#7a6841] font-bold">✓</span> Full quality inspection & live video approval
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="text-[#7a6841] font-bold">✓</span> Direct door-to-door shipping to the USA or Mexico
                </li>
              </ul>
              <div className="mt-10">
                <a href="/shop-from-india" className="inline-block bg-[#7a6841] text-white px-8 py-4 rounded-lg font-bold transition-transform hover:scale-105">
                  Explore Sourcing Packages
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-800 rounded-3xl overflow-hidden relative border border-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 italic p-10 text-center">
                  [Interactive Wireframe: Image showing coordinated wedding party in Mexico with "Sourced by CeremonyVerse" overlay]
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-2xl shadow-2xl max-w-xs">
                <p className="font-bold text-sm">"We saved $4,200 on our Mexico wedding party outfits by sourcing through CeremonyVerse."</p>
                <p className="mt-2 text-xs text-gray-600">— Anjali S., NYC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--cv-foreground)]">Ready to simplify your Mexico wedding?</h2>
          <p className="mt-4 text-[var(--cv-muted)] text-lg">
            Whether you need a vendor list or a full wardrobe concierge, we are here to help you build your dream wedding without the stress.
          </p>
          <div className="mt-10">
            <a href="/contact" className="bg-[var(--cv-accent)] text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl">
              Start Your Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
