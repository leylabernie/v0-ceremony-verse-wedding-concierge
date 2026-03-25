"use client"

type PageType =
  | "home"
  | "services"
  | "journey"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"
  | "bridal"

interface HomePageProps {
  onNavigate?: (page: PageType) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const blocks = [
    {
      title: "Bridal Outfits",
      desc: "Lehengas, sarees, reception looks, and custom bridal designs.",
      page: "bridal" as PageType, // ✅ FIXED
    },
    {
      title: "Groom Outfits",
      desc: "Sherwanis, bandhgalas, and coordinated ceremony outfits.",
      page: "services" as PageType,
    },
    {
      title: "Bridesmaid & Family Outfits",
      desc: "Coordinated looks for bridesmaids, siblings, and family members.",
      page: "services" as PageType,
    },
    {
      title: "Groomsmen Outfits",
      desc: "Matching or complementary styles for groomsmen.",
      page: "services" as PageType,
    },
    {
      title: "Jewelry & Accessories",
      desc: "Bridal jewelry, footwear, clutches, and finishing details.",
      page: "services" as PageType,
    },
    {
      title: "Ceremonial Items & Wedding Essentials",
      desc: "Dupattas, pagdis, kalire, welcome bags, and ceremony essentials.",
      page: "services" as PageType,
    },
  ]

  return (
    <main>
      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <p className="tracking-[0.15em] text-xs md:text-sm font-medium text-[#8a6f63] mb-6 uppercase">
          Your Personal Sourcing Team
        </p>

        <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl font-semibold leading-[0.95] tracking-[-0.02em] mb-6 text-[#1f1f1f]">
          Skip the Flights.
          <br />
          Skip the Scams.
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl font-medium leading-relaxed text-[#5a4a42]">
          We help you source authentic Indian wedding outfits directly from India without the confusion, risk, or overwhelm.
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed text-[#6a5c55]">
          From bridal to family outfits, we guide you through every step using trusted sourcing and live video shopping.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate?.("services")}
            className="inline-flex items-center justify-center border border-[#1f1f1f] text-[#1f1f1f] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1f1f1f] hover:text-white transition"
          >
            Explore Services
          </button>

          <button
            type="button"
            onClick={() => onNavigate?.("journey")}
            className="inline-flex items-center justify-center border border-[#1f1f1f] text-[#1f1f1f] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1f1f1f] hover:text-white transition"
          >
            How It Works
          </button>
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 px-6 bg-[#f9f6f3]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-6 text-center">
          Why CeremonyVerse Exists
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium text-[#5a4a42] mb-6">
            I didn’t start CeremonyVerse as a business. I started it because of my own family.
          </p>

          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            Between multiple family weddings and helping friends, I saw how difficult it is to coordinate outfits across people, budgets, and timelines.
          </p>

          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            Many families don’t know how to navigate Indian markets or trust online sellers.
          </p>

          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed">
            CeremonyVerse brings clarity, trust, and real guidance into that process.
          </p>
        </div>
      </section>

      {/* HOW */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          {["Message Us", "Share Inspiration", "Live Video Shopping", "Delivered to You"].map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#1f1f1f] mb-2">
                {i + 1}. {step}
              </p>
              <p className="text-sm text-[#6a5c55]">
                Simple, guided process from start to finish.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCKS */}
      <section className="py-20 px-6 bg-[#f9f6f3]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-12 text-center">
          What We Source For You
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blocks.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate?.(item.page)}
              className="text-left bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg mb-2 text-[#1f1f1f]">
                {item.title}
              </h3>

              <p className="text-sm text-[#6a5c55]">{item.desc}</p>

              <p className="mt-4 text-sm font-medium text-[#8a6f63]">
                Explore →
              </p>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
