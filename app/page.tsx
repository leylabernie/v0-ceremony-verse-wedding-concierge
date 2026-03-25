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

      <Footer onNavigate={handleNavigate} />
    </>
  )
}
