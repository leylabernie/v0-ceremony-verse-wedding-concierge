"use client"

type PageType =
  | "home"
  | "services"
  | "journey"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"

interface BridalPageProps {
  onNavigate?: (page: PageType) => void
}

export function BridalPage({ onNavigate }: BridalPageProps) {
  return (
    <main>

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1f1f1f] mb-6">
          Bridal Outfits Sourced From India
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#5a4a42]">
          From bridal lehengas to reception looks, we help you find the right outfit
          without traveling, without confusion, and without risk.
        </p>

        <div className="mt-10">
          <button
            onClick={() => onNavigate?.("contact")}
            className="border border-[#1f1f1f] px-6 py-3 rounded-full hover:bg-[#1f1f1f] hover:text-white transition"
          >
            Start Your Bridal Sourcing
          </button>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 px-6 bg-[#f9f6f3]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Help You With
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Lehengas</h3>
            <p className="text-sm text-[#6a5c55]">
              Bridal lehengas in different styles, fabrics, and price ranges.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Reception Outfits</h3>
            <p className="text-sm text-[#6a5c55]">
              Modern or traditional reception looks tailored to your style.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Customization</h3>
            <p className="text-sm text-[#6a5c55]">
              Color changes, blouse designs, and adjustments based on your vision.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          How Bridal Sourcing Works
        </h2>

        <div className="max-w-3xl mx-auto text-[#6a5c55] space-y-4">
          <p>1. You share your vision, references, and budget</p>
          <p>2. We find options across trusted sources in India</p>
          <p>3. You review everything via live video</p>
          <p>4. We help you finalize and get it delivered</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1f1f1f] text-white text-center">
        <h2 className="text-3xl md:text-4xl mb-6">
          Ready to Start Your Bridal Sourcing?
        </h2>

        <button
          onClick={() => onNavigate?.("contact")}
          className="bg-white text-black px-6 py-3 rounded-full"
        >
          Message Us on WhatsApp
        </button>
      </section>

    </main>
  )
}
