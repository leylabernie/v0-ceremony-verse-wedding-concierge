"use client"

import { SeoNav } from "@/components/seo-nav"

export function PartnerWithUsPage() {
  return (
    <main className="min-h-screen bg-[var(--cv-bg)]">
      <SeoNav />

      {/* HERO SECTION */}
      <section className="py-24 px-6 bg-[#1f1f1f] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Grow Your Business with <br /><span className="text-[#a69260]">CeremonyVerse</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are the premier destination for NRI families planning Indian weddings. We drive high-intent traffic and vetted leads to the best vendors in the industry.
          </p>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Join Our Exclusive Network?</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--cv-accent)] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">High-Intent Traffic</h3>
                    <p className="text-[var(--cv-muted)]">We rank for the most competitive "Indian destination wedding" keywords. When couples find us, they are ready to book.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--cv-accent)] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Pre-Vetted Leads</h3>
                    <p className="text-[var(--cv-muted)]">We handle the initial consultation and wardrobe sourcing, ensuring that by the time they reach you, their logistics are already in motion.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--cv-accent)] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Brand Authority</h3>
                    <p className="text-[var(--cv-muted)]">Being a "CeremonyVerse Vetted Partner" signals quality and reliability to middle-class NRI families who value transparency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f8f5f2] p-10 rounded-3xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-center">Apply to Join</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Company Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-300" placeholder="e.g. Mexico Magic Decor" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Vendor Category</label>
                  <select className="w-full p-3 rounded-lg border border-gray-300">
                    <option>Photography/Videography</option>
                    <option>DJ & Entertainment</option>
                    <option>Decor & Floral</option>
                    <option>Planning & Logistics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Website / Portfolio</label>
                  <input type="url" className="w-full p-3 rounded-lg border border-gray-300" placeholder="https://" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Primary Location</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-300" placeholder="e.g. Cancun, Mexico" />
                </div>
                <button type="submit" className="w-full bg-[var(--cv-accent)] text-white font-bold py-4 rounded-lg mt-4 shadow-lg hover:opacity-90 transition-opacity" onClick={(e) => e.preventDefault()}>
                  Submit Application
                </button>
                <p className="text-xs text-center text-gray-500 mt-4 italic">
                  Note: We only accept 3 vendors per category per region to maintain quality standards.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER PITCH */}
      <section className="py-20 bg-[#f0e6dd] text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's build the future of destination weddings together.</h2>
          <p className="text-lg text-[var(--cv-muted)] mb-8">
            Our goal is to create a seamless ecosystem for NRI couples. If you share our commitment to transparency and quality, we want to hear from you.
          </p>
          <a href="mailto:partners@ceremonyverse.com" className="text-[var(--cv-accent)] font-bold text-xl underline">
            partners@ceremonyverse.com
          </a>
        </div>
      </section>
    </main>
  )
}
