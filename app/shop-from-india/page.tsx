export const metadata = {
  title: "Luxury Indian Wedding Sourcing | Bespoke Bridal Lehengas August 2026 | CeremonyVerse",
  description:
    "Work with a personal wedding shopper in India. Source bespoke bridal lehengas, sherwanis, and wedding outfits with live video shopping, trusted manufacturers, and US-based quality audit. August 2026 bookings now open.",
};

export default function ShopFromIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
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
              "Trusted Sherwani Sourcing",
              "Live Video Shopping",
            ],
            offers: {
              "@type": "Offer",
              availabilityStarts: "2026-08-01",
              description: "Now booking clients for August 2026 weddings.",
            },
          }),
        }}
      />

      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Luxury Indian Wedding Sourcing
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Bespoke bridal lehengas, sherwanis, and occasionwear sourced from trusted Indian manufacturers.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            August 2026 bookings are now open for couples who want authentic design, better quality control, and a safer way to shop from India.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Live Video Sourcing — See Before You Buy
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            No guesswork. No uncertainty. No risk.
          </p>

          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Experience real-time transparency with live high-definition video shopping. See the fabric weight, embroidery detail, and true colors directly from vetted elite boutiques in India before making a decision.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900">Real-Time Transparency</h3>
              <p className="mt-2 text-gray-600">
                Watch pieces live instead of relying on edited photos.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900">Trusted Boutiques Only</h3>
              <p className="mt-2 text-gray-600">
                Work only with vetted manufacturers and elite boutiques.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900">See Every Detail</h3>
              <p className="mt-2 text-gray-600">
                Review embroidery, finish, color, and overall quality live on video.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center font-semibold text-gray-900">
            What We Source
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Bespoke Bridal Lehengas</h3>
              <p className="mt-2 text-gray-600">
                We source bespoke bridal lehengas with authentic craftsmanship from trusted Indian designers and ateliers. Each piece goes through a quality audit before shipping to the US.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">Custom Sherwanis</h3>
              <p className="mt-2 text-gray-600">
                We source groom sherwanis with authentic craftsmanship from vetted manufacturers. Every order is reviewed through a quality audit before shipping to the US.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">Bridesmaid Outfits</h3>
              <p className="mt-2 text-gray-600">
                We help coordinate bridesmaid looks with authentic craftsmanship and production consistency. Orders are checked through a quality audit before shipping to the US.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">Accessories and Dupattas</h3>
              <p className="mt-2 text-gray-600">
                We source finishing pieces with authentic craftsmanship to complete the full wedding look. Each item is reviewed through a quality audit before shipping to the US.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3f6d5b] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">
            Planning for August 2026?
          </h3>

          <p className="mt-3 text-white/90">
            Download our curated Lookbook of the latest Champagne and Gold silhouettes.
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
