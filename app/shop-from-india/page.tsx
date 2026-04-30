import Script from "next/script"
import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema, jsonLd } from "@/lib/schema"

export const metadata = {
  title: "Indian Wedding Shopping from India to USA | Outfits, Jewelry, Gifts & More | CeremonyVerse",
  description:
    "CeremonyVerse sources everything for your Indian wedding from India to the USA — bridal lehengas, sherwanis, jewelry, ceremonial items, gifts, welcome bags and more. Live video shopping, quality checks, US delivery. Serving NRI families nationwide.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/shop-from-india",
  },
  openGraph: {
    title: "Indian Wedding Shopping from India to USA | Outfits, Jewelry, Gifts & More | CeremonyVerse",
    description: "CeremonyVerse sources everything for your Indian wedding from India to the USA — bridal lehengas, sherwanis, jewelry, ceremonial items, gifts, welcome bags and more. Live video shopping, quality checks, US delivery. Serving NRI families nationwide.",
    type: "website",
    url: "https://www.ceremonyverse.com/shop-from-india",
  
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
};

export default function ShopFromIndiaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Shop from India", path: "/shop-from-india" },
  ])

  const faqSchema = buildFAQSchema([
    { question: "How does live video shopping from India work?", answer: "We connect you with trusted boutiques in India via live video call. You see the actual fabric, embroidery, and colors in real time — no edited images. The exact piece you approve is reserved and shipped to you." },
    { question: "What can I buy from India through CeremonyVerse?", answer: "We source bridal lehengas, sherwanis, bridesmaid outfits, family attire, jewelry, dupattas, ceremonial items, wedding gifts, welcome bags, and more — everything for your Indian wedding." },
    { question: "How do you ensure quality when shopping from India?", answer: "We work only with verified and reliable artisan workshops. Before anything ships, we check embroidery, stitching, and finishing. If something doesn't match what you approved on video, we fix it before shipping." },
    { question: "How much does it cost to shop from India with CeremonyVerse?", answer: "Our sourcing fee starts at $149 for a Style Guide and goes up to $1,499 for Full Bridal Concierge. Outfit costs, shipping, and customs are separate and quoted upfront before you commit." },
  ])

  const serviceSchema = buildServiceSchema({
    name: "Indian Wedding Shopping from India to USA",
    description: "CeremonyVerse sources everything for your Indian wedding from India to the USA — bridal lehengas, sherwanis, jewelry, ceremonial items, gifts, welcome bags and more. Live video shopping, quality checks, US delivery.",
    path: "/shop-from-india",
    priceFrom: "149",
  })

  return (
    <main className="min-h-screen bg-[var(--cv-bg)]">
      <SeoNav />

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
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
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

    <SeoFooter />
      <Script id="breadcrumb-schema-shop-from-india" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="faq-schema-shop-from-india" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Script id="service-schema-shop-from-india" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
    </main>
  );
}