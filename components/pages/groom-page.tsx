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
  | "groom"

interface GroomPageProps {
  onNavigate?: (page: PageType) => void
}

export function GroomPage({ onNavigate }: GroomPageProps) {
  return (
    <main>

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1f1f1f] mb-6">
          Groom Outfits Sourced From India
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#5a4a42]">
          Sherwanis, bandhgalas, and complete groom looks sourced with clarity,
          guidance, and real-time verification.
        </p>

        <div className="mt-10">
          <button
            onClick={() => onNavigate?.("contact")}
            className="border border-[#1f1f1f] px-6 py-3 rounded-full hover:bg-[#1f1f1f] hover:text-white transition"
          >
            Start Groom Sourcing
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
            <h3 className="font-semibold mb-2">Sherwanis</h3>
            <p className="text-sm text-[#6a5c55]">
              Traditional and modern sherwanis across different styles and budgets.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Bandhgala & Indo-Western</h3>
            <p className="text-sm text-[#6a5c55]">
              Contemporary groom styles for reception and events.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Accessories</h3>
            <p className="text-sm text-[#6a5c55]">
              Safa, mojari, stoles, and finishing pieces to complete the look.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          How Groom Sourcing Works
        </h2>

        <div className="max-w-3xl mx-auto text-[#6a5c55] space-y-4">
          <p>1. Share your style and event requirements</p>
          <p>2. We find options from trusted sources</p>
          <p>3. Review everything via live video</p>
          <p>4. Finalize and get it delivered</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1f1f1f] text-white text-center">
        <h2 className="text-3xl md:text-4xl mb-6">
          Ready to Start Groom Sourcing?
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
