"use client"

type PageType =
  | "home"
  | "services"
  | "journey"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"

interface HomePageProps {
  onNavigate?: (page: PageType) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
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

      {/* WHY SECTION */}
      <section className="py-16 px-6 bg-[#f9f6f3]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-6 text-center">
          Why CeremonyVerse Exists
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium text-[#5a4a42] mb-6">
            I didn’t start CeremonyVerse as a business. I started it because of my own family.
          </p>

          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            Between my two sons’ weddings, my niece’s wedding, and helping friends’ families, I experienced firsthand what it takes to coordinate outfits across large families, budgets, timelines, and multiple wedding events.
          </p>

          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            Many of the people I helped were not familiar with Indian markets. Even those who traveled to India still needed help navigating language barriers, trust issues, and the pressure of making the right choices.
          </p>

          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed">
            CeremonyVerse is built on that real experience — helping families source authentic Indian wedding outfits with more clarity, more confidence, and less stress.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#1f1f1f] mb-2">1. Message Us</p>
            <p className="text-sm text-[#6a5c55]">
              Start with WhatsApp and tell us what you need.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#1f1f1f] mb-2">2. Share Inspiration</p>
            <p className="text-sm text-[#6a5c55]">
              Send photos, colors, references, or event requirements.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#1f1f1f] mb-2">3. Live Video Shopping</p>
            <p className="text-sm text-[#6a5c55]">
              Review styles, fabrics, and details in real time before you decide.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#1f1f1f] mb-2">4. Delivered to You</p>
            <p className="text-sm text-[#6a5c55]">
              We help you move from selection to delivery with less chaos.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ RESTORED 6 BLOCKS */}
      <section className="py-20 px-6 bg-[#f9f6f3]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-12 text-center">
          What We Source For You
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-[#1f1f1f]">
              Bridal Outfits
            </h3>
            <p className="text-sm text-[#6a5c55]">
              Lehengas, sarees, reception looks, and custom bridal designs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-[#1f1f1f]">
              Groom Outfits
            </h3>
            <p className="text-sm text-[#6a5c55]">
              Sherwanis, bandhgalas, and coordinated ceremony outfits.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-[#1f1f1f]">
              Bridesmaid & Family Outfits
            </h3>
            <p className="text-sm text-[#6a5c55]">
              Coordinated looks for bridesmaids, siblings, and family members.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-[#1f1f1f]">
              Groomsmen Outfits
            </h3>
            <p className="text-sm text-[#6a5c55]">
              Matching or complementary styles for groomsmen.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-[#1f1f1f]">
              Jewelry & Accessories
            </h3>
            <p className="text-sm text-[#6a5c55]">
              Bridal jewelry, footwear, clutches, and finishing details.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-[#1f1f1f]">
              Ceremonial Items & Wedding Essentials
            </h3>
            <p className="text-sm text-[#6a5c55]">
              Dupattas, pagdis, kalire, welcome bags, and ceremony essentials.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}
