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

export default function Page() {
  const [activePage, setActivePage] = useState<PageType>("home")

  const handleNavigate = (page: PageType) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <>
      <Navigation onNavigate={handleNavigate} />

      {activePage === "home" && <HomePage onNavigate={handleNavigate} />}
      {activePage === "services" && <ServicesPage onNavigate={handleNavigate} />}
      {activePage === "journey" && <JourneyPage onNavigate={handleNavigate} />}
      {activePage === "faq" && <FAQPage onNavigate={handleNavigate} />}
      {activePage === "contact" && <ContactPage onNavigate={handleNavigate} />}
      {activePage === "privacy" && <PrivacyPage onNavigate={handleNavigate} />}
      {activePage === "terms" && <TermsPage onNavigate={handleNavigate} />}
      {activePage === "bridal" && <BridalPage onNavigate={handleNavigate} />}
      {activePage === "groom" && <GroomPage onNavigate={handleNavigate} />}

      <Footer onNavigate={handleNavigate} />
    </>
  )
}
