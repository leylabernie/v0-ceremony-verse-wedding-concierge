"use client"

import type { PageType } from "@/app/page"
import { useState } from "react"

interface FooterProps {
  onNavigate: (page: PageType) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Captured email:", email)
    setEmail("")
    alert("Lookbook sent! (Connect this to your email tool later)")
  }

  return (
    <footer>

      {/* LEAD MAGNET BAR */}
      <div className="bg-white border-t border-[var(--cv-border)] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            Planning for August 2026?
          </h2>

          <p className="text-[var(--cv-muted)] mb-6">
            Download our curated Lookbook of the latest Champagne & Gold wedding styles.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[var(--cv-border)] rounded-full px-4 py-3 w-full outline-none"
            />

            <button
              type="submit"
              className="btn-primary"
            >
              Download
            </button>
          </form>

        </div>
      </div>

      {/* ACTUAL FOOTER */}
      <div className="py-10 text-center text-sm text-[var(--cv-muted)]">
        <p>© {new Date().getFullYear()} CeremonyVerse</p>
      </div>

    </footer>
  )
}
