"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
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
      <Navigation activePage={activePage} onNavigate={handleNavigate} />

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
      {/* NEW SEO SECTION: Blog Links */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
            Latest Wedding Shopping Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <a href="/blog/how-to-plan-mehndi-outfit" className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 group-hover:text-amber-700 mb-2">
                  How to Plan Your Mehndi Outfit Shopping
                </h3>
                <p className="text-stone-600 mb-4">
                  A complete guide to sourcing the perfect mehndi outfit, from fabric selection to vendor coordination.
                </p>
                <span className="text-amber-700 font-medium group-hover:underline">Read Guide →</span>
              </div>
            </a>
            
            {/* Blog Post 2 */}
            <a href="/blog/intercultural-wedding-outfit-guide" className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 group-hover:text-amber-700 mb-2">
                  Intercultural Wedding Outfit Guide
                </h3>
                <p className="text-stone-600 mb-4">
                  Navigating outfit choices for intercultural ceremonies with style and respect for both traditions.
                </p>
                <span className="text-amber-700 font-medium group-hover:underline">Read Guide →</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <Footer onNavigate={handleNavigate} />
    </>
  )
}
