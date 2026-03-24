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

type PageType =
  | "home"
  | "services"
  | "journey"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"

export default function Page() {
  const [activePage, setActivePage] = useState<PageType>("home")

  const handleNavigate = (page: PageType) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const renderPage = () => {
    switch (activePage) {
      case "services":
        return <ServicesPage />
      case "journey":
        return <JourneyPage />
      case "faq":
        return <FAQPage />
      case "contact":
        return <ContactPage />
      case "privacy":
        return <PrivacyPage />
      case "terms":
        return <TermsPage />
      case "home":
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <>
      <Navigation onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </>
  )
}
