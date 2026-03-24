"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomePage } from "@/components/pages/home-page"
import { ServicesPage } from "@/components/pages/services-page"
import { JourneyPage } from "@/components/pages/journey-page"
import { FAQPage } from "@/components/pages/faq-page"
import { ContactPage } from "@/components/pages/contact-page"
import { PrivacyPage } from "@/components/pages/privacy-page"
import { TermsPage } from "@/components/pages/terms-page"

export type PageType =
  | "home"
  | "services"
  | "journey"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"

export default function CeremonyVerse() {
  const [activePage, setActivePage] = useState<PageType>("home")

  const handleNavigate = (page: PageType) => {
    if (page === activePage) return
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  useEffect(() => {
    const titles: Record<PageType, string> = {
      home: "CeremonyVerse | Indian Wedding Outfit Sourcing",
      services: "Our Services | CeremonyVerse",
      journey: "The Sourcing Journey | CeremonyVerse",
      faq: "FAQ - The Trust Center | CeremonyVerse",
      contact: "Contact Us | CeremonyVerse",
      privacy: "Privacy Policy | CeremonyVerse",
      terms: "Terms of Service | CeremonyVerse",
    }
    document.title = titles[activePage]
  }, [activePage])

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage />
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />
      case "journey":
        return <JourneyPage onNavigate={handleNavigate} />
      case "faq":
        return <FAQPage onNavigate={handleNavigate} />
      case "contact":
        return <ContactPage />
      case "privacy":
        return <PrivacyPage onNavigate={handleNavigate} />
      case "terms":
        return <TermsPage onNavigate={handleNavigate} />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--cv-bg)]">
      <Navigation activePage={activePage} onNavigate={handleNavigate} />

      <main
        className="flex-1 pt-24"
        role="main"
        aria-label="Main content"
      >
        <div key={activePage} className="animate-fade-in">
          {renderPage()}
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}
