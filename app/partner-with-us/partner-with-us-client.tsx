"use client"

import { SeoNav } from "@/components/seo-nav"

export function PartnerWithUsPage() {
  return (
    <main className="min-h-screen bg-[var(--cv-bg)]">
      <SeoNav />

      {/* HERO SECTION */}
      <section className="py-24 px-6 bg-[#1f1f1f] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Grow Your Business with <br /><span className="text-[#7a6841]">CeremonyVerse</span></h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            CeremonyVerse is building a small, accountable network for NRI families who need India sourcing or qualified destination-wedding partners.
          </p>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Look for in a Partner</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--cv-accent)] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Clear Information</h3>
                    <p className="text-[var(--cv-muted)]">Current pricing, written inclusions, exclusions, cancellation terms, and a legal business identity that can be verified.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--cv-accent)] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Direct Client Contract</h3>
                    <p className="text-[var(--cv-muted)]">The provider explains, contracts, and bills for its own work. CeremonyVerse cannot make promises or accept money on the provider&apos;s behalf.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--cv-accent)] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Reliable Communication</h3>
                    <p className="text-[var(--cv-muted)]">Timely replies, references, documented approvals, and respectful coordination with couples and families.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f8f5f2] p-10 rounded-3xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-center">Introduce Your Business</h2>
              <p className="text-sm text-[var(--cv-muted)] text-center mb-6">
                Email your company name, service category, primary location, website or portfolio,
                legal business details, and two recent wedding references. We review every relationship
                individually and do not promise exclusivity or leads.
              </p>
              <a
                href="mailto:partners@ceremonyverse.com?subject=CeremonyVerse%20partner%20introduction&body=Company%20name%3A%0AService%20category%3A%0APrimary%20location%3A%0AWebsite%20or%20portfolio%3A%0ALegal%20business%20name%3A%0ATwo%20recent%20references%3A"
                className="w-full inline-flex justify-center bg-[var(--cv-accent)] text-white font-bold py-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
              >
                Email Partner Information
              </a>
              <p className="text-xs text-center text-gray-600 mt-4">
                No partnership is active until both businesses approve written terms.
              </p>
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
