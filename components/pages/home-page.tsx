"use client"

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <p className="tracking-[0.15em] text-xs md:text-sm font-medium text-[#8a6f63] mb-6 uppercase">
          YOUR PERSONAL SOURCING TEAM
        </p>

        <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl font-semibold leading-[0.95] tracking-[-0.02em] mb-6 text-[#1f1f1f]">
          Skip the Flights.<br />Skip the Scams.
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl font-medium leading-relaxed text-[#5a4a42]">
          We help you source authentic Indian wedding outfits directly from India — without the confusion, risk, or overwhelm.
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed text-[#6a5c55]">
          From bridal to family outfits, we guide you through every step using live video shopping and trusted sourcing.
        </p>
      </section>


      {/* FOUNDER / TRUST */}
      <section className="py-16 px-6 bg-[#f9f6f3]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-6 text-center">
          Why CeremonyVerse Exists
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium text-[#5a4a42] mb-6">
            I didn’t start CeremonyVerse as a business. I started it because of my own family.
          </p>

          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            Between my two sons’ weddings, my niece’s wedding, and helping friends’ families, I experienced everything firsthand — coordinating outfits across large families, managing budgets, handling different cultural traditions, and navigating the chaos of multi-day Indian weddings.
          </p>

          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed mb-4">
            Many of the people I helped were not familiar with Indian markets — especially South Indian and non-Gujarati families. Even those who traveled to India struggled with language barriers, trust issues with shops, and knowing where to go.
          </p>

          <p className="text-base md:text-lg text-[#6a5c55] leading-relaxed">
            I became the person they relied on — to guide, verify, negotiate, and make sure everything was right. CeremonyVerse is built on that experience — helping you get authentic outfits from India without the confusion, risk, or overwhelm.
          </p>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          <div>
            <p className="font-semibold text-[#1f1f1f] mb-2">1. Message Us</p>
            <p className="text-sm text-[#6a5c55]">Start with WhatsApp. Tell us what you need.</p>
          </div>

          <div>
            <p className="font-semibold text-[#1f1f1f] mb-2">2. Share Inspiration</p>
            <p className="text-sm text-[#6a5c55]">Send photos, ideas, or requirements.</p>
          </div>

          <div>
            <p className="font-semibold text-[#1f1f1f] mb-2">3. Live Video Shopping</p>
            <p className="text-sm text-[#6a5c55]">See outfits in real-time before you buy.</p>
          </div>

          <div>
            <p className="font-semibold text-[#1f1f1f] mb-2">4. Delivered to You</p>
            <p className="text-sm text-[#6a5c55]">Everything arrives safely at your doorstep.</p>
          </div>
        </div>
      </section>

    </main>
  )
}
