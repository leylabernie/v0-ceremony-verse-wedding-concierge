"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"

import { HomePage } from "@/components/pages/home-page"
import { ServicesPage } from "@/components/pages/services-page"
import { JourneyPage } from "@/components/pages/journey-page"
import { FAQPage } from "@/components/pages/faq-page"
import { ContactPage } from "@/components/pages/contact-page"
import { PrivacyPage } from "@/components/pages/privacy-page"
import { TermsPage } from "@/components/pages/terms-page"
import { BridalPage } from "@/components/pages/bridal-page"
import { GroomPage } from "@/components/pages/groom-page"
import { BlogPage } from "@/components/pages/blog-page"
import { BridesmaidsPage } from "@/components/pages/bridesmaids-page"
import { GroomsmenPage } from "@/components/pages/groomsmen-page"
import { FamilyPage } from "@/components/pages/family-page"
import { JewelryPage } from "@/components/pages/jewelry-page"
import { CeremonialPage } from "@/components/pages/ceremonial-page"
import { GiftsPage } from "@/components/pages/gifts-page"
import { WelcomeBagsPage } from "@/components/pages/welcomebags-page"
import { PetsPage } from "@/components/pages/pets-page"
import { GuideBuyLehengaSafely } from "@/components/pages/guide-buy-lehenga-safely"
import { GuideCustomsDuty } from "@/components/pages/guide-customs-duty"

export type PageType =
  | "home"
  | "services"
  | "journey"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"
  | "bridal"
  | "groom"
  | "blog"
  | "bridesmaids"
  | "groomsmen"
  | "family"
  | "jewelry"
  | "ceremonial"
  | "gifts"
  | "welcomebags"
  | "pets"
  | "guide-buy-lehenga-safely"
  | "guide-customs-duty"

export default function Page() {
  const [activePage, setActivePage] = useState<PageType>("home")

  const handleNavigate = (page: PageType) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <>
      {activePage === "home" && <HomePage onNavigate={handleNavigate} />}
      {activePage === "services" && <ServicesPage onNavigate={handleNavigate} />}
      {activePage === "journey" && <JourneyPage onNavigate={handleNavigate} />}
      {activePage === "faq" && <FAQPage onNavigate={handleNavigate} />}
      {activePage === "contact" && <ContactPage onNavigate={handleNavigate} />}
      {activePage === "privacy" && <PrivacyPage onNavigate={handleNavigate} />}
      {activePage === "terms" && <TermsPage onNavigate={handleNavigate} />}
      {activePage === "bridal" && <BridalPage onNavigate={handleNavigate} />}
      {activePage === "groom" && <GroomPage onNavigate={handleNavigate} />}
      {activePage === "blog" && <BlogPage onNavigate={handleNavigate} />}
      {activePage === "bridesmaids" && <BridesmaidsPage onNavigate={handleNavigate} />}
      {activePage === "groomsmen" && <GroomsmenPage onNavigate={handleNavigate} />}
      {activePage === "family" && <FamilyPage onNavigate={handleNavigate} />}
      {activePage === "jewelry" && <JewelryPage onNavigate={handleNavigate} />}
      {activePage === "ceremonial" && <CeremonialPage onNavigate={handleNavigate} />}
      {activePage === "gifts" && <GiftsPage onNavigate={handleNavigate} />}
      {activePage === "welcomebags" && <WelcomeBagsPage onNavigate={handleNavigate} />}
      {activePage === "pets" && <PetsPage onNavigate={handleNavigate} />}
      {activePage === "guide-buy-lehenga-safely" && <GuideBuyLehengaSafely onNavigate={handleNavigate} />}
      {activePage === "guide-customs-duty" && <GuideCustomsDuty onNavigate={handleNavigate} />}
      {/* ─── TIER 3: HOMEPAGE → BLOG AUTHORITY FLOW ─── */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-stone-800">
            Free Wedding Shopping Guides for NRI Families
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
            Real advice from a team that has sourced hundreds of outfits from India for NRI families across all 50 states.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 — Scams (highest traffic) */}
            <a href="/blog/indian-wedding-outfit-scams-nri-brides/" className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-800 group-hover:text-amber-700 mb-2">
                  How to Avoid the 10 Most Common Scams When Buying from India
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  Real scams that NRI brides have fallen for — and the exact steps to protect yourself and your money.
                </p>
                <span className="text-amber-700 font-medium text-sm group-hover:underline">Read Guide →</span>
              </div>
            </a>

            {/* Blog Post 2 — Outfit Checklist */}
            <a href="/blog/indian-wedding-outfit-checklist-every-ceremony/" className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-800 group-hover:text-amber-700 mb-2">
                  See the Complete Outfit Checklist for Your Family
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  42-51 outfits across all ceremonies — who needs what, and how much it all costs from India vs. US stores.
                </p>
                <span className="text-amber-700 font-medium text-sm group-hover:underline">Read Guide →</span>
              </div>
            </a>

            {/* Blog Post 3 — Lehenga Cost */}
            <a href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-800 group-hover:text-amber-700 mb-2">
                  Real 2026 Lehenga Prices from India (with Shipping to USA)
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  Budget breakdown from ₹45,000 to ₹5,00,000+ — including customs, shipping, and hidden costs.
                </p>
                <span className="text-amber-700 font-medium text-sm group-hover:underline">Read Guide →</span>
              </div>
            </a>

            {/* Blog Post 4 — Sherwani Guide */}
            <a href="/blog/how-to-buy-sherwani-from-india-usa/" className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-800 group-hover:text-amber-700 mb-2">
                  How to Buy a Sherwani from India: Prices, Sizing & Scams
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  The complete NRI groom guide — real prices, how to take measurements at home, and shipping tips.
                </p>
                <span className="text-amber-700 font-medium text-sm group-hover:underline">Read Guide →</span>
              </div>
            </a>

            {/* Blog Post 5 — Shipping */}
            <a href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/" className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-800 group-hover:text-amber-700 mb-2">
                  Shipping from India to USA: Customs, Duties & Timeline
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  How much customs duties really cost, how long delivery takes, and how to avoid border delays.
                </p>
                <span className="text-amber-700 font-medium text-sm group-hover:underline">Read Guide →</span>
              </div>
            </a>

            {/* Blog Post 6 — Timeline */}
            <a href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-800 group-hover:text-amber-700 mb-2">
                  When to Order So Nothing Arrives Late
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  Month-by-month timeline for NRI brides — minimum lead times and backup plans if you are behind schedule.
                </p>
                <span className="text-amber-700 font-medium text-sm group-hover:underline">Read Guide →</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <Footer onNavigate={handleNavigate} />
    </>
  )
}
