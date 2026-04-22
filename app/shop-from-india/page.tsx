import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Indian Wedding Shopping from India to USA | Outfits, Jewelry, Gifts & More | CeremonyVerse",
  description:
    "CeremonyVerse sources everything for your Indian wedding from India to the USA — bridal lehengas, sherwanis, jewelry, ceremonial items, gifts, welcome bags and more. Live video shopping, quality checks, US delivery. Serving NRI families nationwide.",
  alternates: {
    canonical: "https://ceremonyverse.com/shop-from-india",
  },
  openGraph: {
    title: "Indian Wedding Shopping from India to USA | Outfits, Jewelry, Gifts & More | CeremonyVerse",
    description: "CeremonyVerse sources everything for your Indian wedding from India to the USA — bridal lehengas, sherwanis, jewelry, ceremonial items, gifts, welcome bags and more. Live video shopping, quality checks, US delivery. Serving NRI families nationwide.",
    type: "website",
    url: "https://ceremonyverse.com/shop-from-india",
  },
};

export default function ShopFromIndiaPage() {
  return (
    <main className="min-h-screen bg-[var(--cv-bg)]">
      <SeoNav />

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
              "Indian wedding outfit sourcing service with live video shopping from trusted artisan workshops in India.",
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            serviceType: [
              "Indian Wedding Outfit Sourcing",
              "Personal Wedding Shopper India",
              "Bridal Lehenga Sourcing",
              "Sherwani Sourcing",
            ],
            offers: {
              "@type": "Offer",
              availabilityStarts: "2026-08-01",
              description:
                "Now booking clients for August 2026 weddings.",
            },
          }),
        };
      />

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-[var(--cv-foreground)]">
            Buy Your Wedding Outfits from India — Without Traveling
          </h1>

          <p className="mt-6 text-lg text-[var(--cv-muted)]">
            Work with a personal wedding shopper in India to find bridal lehengas, sherwanis, and wedding outfits from trusted craftspeople—without the stress of traveling or dealing with unknown vendors.
          </p>

          <p className="mt-4 text-lg text-[var(--cv-muted)]">
            Use live video shopping to see real fabrics, embroidery, and colors before you buy, with quality checks and shipping handled for you.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
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
            No scams. No guesswork. No surprises.
          </p>

          <p className="mt-4 text-lg text-[var(--cv-muted)] max-w-3xl mx-auto">
            Join live video calls with trusted boutiques in India. You can see fabric weight, embroidery, stitching, and colors clearly before making any decision.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">See Everything Clearly</h3>
              <p className="mt-2 text-[var(--cv-muted)]">
                What you see on video is what you receive—no edited images.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Trusted Sellers Only</h3>
              <p className="mt-2 text-[var(--cv-muted)]">
                We work only with verified and reliable artisan workshops.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Check Every Detail</h3>
              <p className="mt-2 text-[var(--cv-muted)]">
                Review embroidery, stitching, and finishing before ordering.
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
                We help you find bridal lehengas from trusted Indian designers with quality checks and shipping to the US.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Sherwanis for Grooms</h3>
              <p className="text-[var(--cv-muted)]">
                Find well-fitted sherwanis from skilled craftspeople with full quality review before delivery.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Bridesmaid & Family Outfits</h3>
              <p className="text-[var(--cv-muted)]">
                Coordinate outfits for family and bridal party with consistent quality and sizing support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--cv-foreground)]">Dupattas & Accessories</h3>
              <p className="text-[var(--cv-muted)]">
                Complete your look with matching accessories sourced and verified before shipping.
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
              <a href="mailto:bhamini@ceremonyverse.com" className="underline">
                bhamini@ceremonyverse.com
              </a>
            </p>
          </div>

          <p className="mt-4 text-sm text-[var(--cv-muted)]">
            Preferred first contact: WhatsApp or text message for faster response.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="bg-[var(--cv-accent)] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">
            Planning for August 2026?
          </h3>

          <p className="mt-3 text-white/90">
            Download our curated bridal style guide with the latest Champagne & Gold styles.
          </p>

          <form className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-black w-full md:w-80"
            />
            <button
              type="submit"
              className="bg-white text-[var(--cv-accent)] px-6 py-3 rounded-lg font-semibold"
            >
              Get the Style Guide
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
