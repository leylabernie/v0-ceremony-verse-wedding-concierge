"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomePage } from "@/components/pages/home-page"
import { ServicesPage } from "@/components/pages/services-page"
import { JourneyPage } from "@/components/pages/journey-page"
import { FAQPage } from "@/components/pages/faq-page"
import { ContactPage } from "@/components/pages/contact-page"

type PageType = "home" | "services" | "journey" | "faq" | "contact"

export default function CeremonyVerse() {
  const [activePage, setActivePage] = useState<PageType>("home")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleNavigate = (page: PageType) => {
    if (page === activePage) return
    
    setIsTransitioning(true)
    
    // Small delay for fade-out effect
    setTimeout(() => {
      setActivePage(page)
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsTransitioning(false)
    }, 150)
  }

  // Update document title based on active page
  useEffect(() => {
    const titles: Record<PageType, string> = {
      home: "CeremonyVerse | Premium South Asian Wedding Sourcing Concierge",
      services: "Our Services | CeremonyVerse",
      journey: "The Sourcing Journey | CeremonyVerse",
      faq: "FAQ - The Trust Center | CeremonyVerse",
      contact: "Contact Us | CeremonyVerse",
    }
    document.title = titles[activePage]
  }, [activePage])

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />
      case "journey":
        return <JourneyPage onNavigate={handleNavigate} />
      case "faq":
        return <FAQPage onNavigate={handleNavigate} />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-champagne">
      <Navigation activePage={activePage} onNavigate={handleNavigate} />
      
      <main 
        className="flex-1 pt-20"
        role="main"
        aria-label="Main content"
      >
        <div
          key={activePage}
          className={`transition-opacity duration-300 ease-out ${
            isTransitioning ? "opacity-0" : "opacity-100 animate-fade-in"
          }`}
        >
          {renderPage()}
        </div>
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}
