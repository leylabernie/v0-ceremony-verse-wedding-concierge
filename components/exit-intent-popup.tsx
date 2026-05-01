"use client"

import { useEffect, useState, FormEvent } from "react"
import { X } from "lucide-react"

const WHATSAPP_LINK =
  "https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20the%20free%20checklist."

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Don't show on mobile
    if (window.innerWidth < 768) return
    // Check if already shown this session
    if (sessionStorage.getItem("cv_exit_popup_shown")) return

    const delay = 15000 // 15 seconds minimum
    const startTime = Date.now()

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top
      if (e.clientY <= 0) {
        const elapsed = Date.now() - startTime
        if (elapsed >= delay) {
          setShowPopup(true)
          sessionStorage.setItem("cv_exit_popup_shown", "true")
          document.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [])

  const handleClose = () => {
    setShowPopup(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Track in Google Analytics
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      ;(window as any).gtag("event", "generate_lead", { method: "exit_popup" })
    }

    // In a real implementation, this would POST to an API
    setSubmitted(true)
  }

  if (!showPopup) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-heading"
    >
      <div
        className="relative w-full max-w-[480px] rounded-[16px] bg-white p-8 sm:p-10 shadow-2xl"
        style={{
          animation: "exitPopupIn 0.3s ease-out forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Free download label */}
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#c7b28a" }}
            >
              Free Download
            </p>

            {/* Heading */}
            <h2
              id="exit-popup-heading"
              className="font-garamond text-2xl sm:text-3xl font-semibold leading-tight mb-3"
              style={{ color: "#1f1f1f" }}
            >
              Don&apos;t Leave Without Your Free Indian Wedding Outfit Checklist
            </h2>

            {/* Subtext */}
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#5a5a5a" }}>
              Every outfit, every ceremony — nothing forgotten. Mehndi through Reception, with
              accessories, timeline, and ordering guide. 1,200+ NRI brides have downloaded this.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#c7b28a]/40"
                style={{
                  border: "1.5px solid #e6dfd5",
                  color: "#1f1f1f",
                  backgroundColor: "#f8f6f2",
                }}
                aria-label="Email address"
              />

              <button
                type="submit"
                className="w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:brightness-110"
                style={{ backgroundColor: "#c7b28a" }}
              >
                Get Free Checklist
              </button>
            </form>

            {/* Privacy note */}
            <p className="text-[11px] text-center mt-3" style={{ color: "#999" }}>
              No spam. Unsubscribe anytime.
            </p>

            {/* WhatsApp link */}
            <div className="mt-5 pt-5 border-t" style={{ borderColor: "#e6dfd5" }}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:underline"
                style={{ color: "#c7b28a" }}
              >
                Or chat directly on WhatsApp →
              </a>
            </div>
          </>
        ) : (
          /* Success state */
          <div className="text-center py-4">
            <div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: "#f8f6f2" }}
            >
              <svg
                className="h-7 w-7"
                style={{ color: "#c7b28a" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3
              className="font-garamond text-2xl font-semibold mb-2"
              style={{ color: "#1f1f1f" }}
            >
              Check your email!
            </h3>
            <p className="text-sm" style={{ color: "#5a5a5a" }}>
              Your checklist is on its way.
            </p>
          </div>
        )}
      </div>

      {/* Keyframe animation styles */}
      <style jsx>{`
        @keyframes exitPopupIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
