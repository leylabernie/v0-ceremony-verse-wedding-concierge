export const metadata = {
  title: "Buy Bridal Lehenga from India USA | Luxury Indian Wedding Sourcing | CeremonyVerse",
  description:
    "Personal wedding shopper in India. Source bespoke bridal lehengas, sherwanis, and wedding outfits with live video shopping, trusted manufacturers, and US-based quality audit. August 2026 bookings open.",
};

export default function ShopFromIndiaPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "CeremonyVerse",
            url: "https://ceremonyverse.com/shop-from-india",
            description:
              "Luxury Indian wedding outfit sourcing service with live video shopping from trusted manufacturers in India.",
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            serviceType: [
              "Luxury Indian Wedding Sourcing",
              "Personal Wedding Shopper India",
              "Bespoke Bridal Lehengas",
              "Sherwani Sourcing",
            ],
            offers: {
              "@type": "Offer",
              availabilityStarts: "2026-08-01",
              description:
                "Now booking clients for August 2026 weddings.",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Buy Your Wedding Outfits from India — Without Traveling
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Work with a personal wedding shopper in India to source bespoke bridal lehengas, sherwanis, and wedding outfits directly from trusted manufacturers.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            See everything before you buy through live video shopping—plus US-based quality audit and secure shipping to your doorstep.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="bg-[#3f6d5b] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Book Your Video Consultation
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO SHOPPING */}
      <section className="py-16 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Live Video Shopping — See Before You Buy
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            No scams. No uncertainty. No surprises.
          </p>

          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Join live high-definition video calls directly with vetted boutiques in India. See fabric weight, embroidery detail, and true colors in real time before making any decision.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg">Real-Time Transparency</h3>
              <p className="mt-2 text-gray-600">
                What you see live is exactly what you receive.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg">Trusted Manufacturers</h3>
              <p className="mt-2 text-gray-600">
                Only pre-vetted, high-end boutiques and designers.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg">Inspect Every Detail</h3>
              <p className="mt-2 text-gray-600">
                Review stitching, embroidery, and finishing live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center font-semibold text-gray-900">
            What We Source
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg">Bespoke Bridal Lehengas</h3>
              <p className="text-gray-600">
                Authentic craftsmanship from India’s top designers. Every piece is quality-audited and shipped to the US.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Custom Sherwanis</h3>
              <p className="text-gray-600">
                Tailored sherwanis from trusted manufacturers with full quality audit and US shipping.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Bridesmaid Outfits</h3>
              <p className="text-gray-600">
                Coordinated group outfits with consistent quality control and shipping to the US.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Accessories & Dupattas</h3>
              <p className="text-gray-600">
                Handcrafted finishing pieces verified through quality audit before delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="bg-[#3f6d5b] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">
            Planning for August 2026?
          </h3>

          <p className="mt-3 text-white/90">
            Download our curated Bridal Lookbook featuring Champagne & Gold trends.
          </p>

          <form className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-black w-full md:w-80"
            />
            <button
              type="submit"
              className="bg-white text-[#3f6d5b] px-6 py-3 rounded-lg font-semibold"
            >
              Get the Lookbook
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
