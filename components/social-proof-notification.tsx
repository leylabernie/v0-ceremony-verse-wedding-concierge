"use client"

import { useEffect, useState, useCallback } from "react"

/* ────────────────────────────────────────────
   SOCIAL PROOF NOTIFICATIONS
   ──────────────────────────────────────────── */

interface ProofEvent {
  text: string
  location: string
  timeAgo: string
  icon: "shopping" | "checklist" | "consultation" | "quiz"
}

const proofEvents: ProofEvent[] = [
  {
    text: "booked a free consultation",
    location: "New Jersey",
    timeAgo: "2 minutes ago",
    icon: "consultation",
  },
  {
    text: "downloaded the wedding checklist",
    location: "California",
    timeAgo: "5 minutes ago",
    icon: "checklist",
  },
  {
    text: "took the style quiz",
    location: "Toronto, Canada",
    timeAgo: "8 minutes ago",
    icon: "quiz",
  },
  {
    text: "started sourcing a bridal lehenga",
    location: "London, UK",
    timeAgo: "12 minutes ago",
    icon: "shopping",
  },
  {
    text: "booked a free consultation",
    location: "Houston, Texas",
    timeAgo: "15 minutes ago",
    icon: "consultation",
  },
  {
    text: "ordered a custom sherwani",
    location: "New York",
    timeAgo: "18 minutes ago",
    icon: "shopping",
  },
  {
    text: "downloaded the wedding checklist",
    location: "Sydney, Australia",
    timeAgo: "22 minutes ago",
    icon: "checklist",
  },
  {
    text: "took the style quiz",
    location: "Chicago, Illinois",
    timeAgo: "25 minutes ago",
    icon: "quiz",
  },
  {
    text: "booked a free consultation",
    location: "Vancouver, Canada",
    timeAgo: "30 minutes ago",
    icon: "consultation",
  },
  {
    text: "started sourcing wedding outfits",
    location: "Dallas, Texas",
    timeAgo: "35 minutes ago",
    icon: "shopping",
  },
  {
    text: "downloaded the wedding checklist",
    location: "Birmingham, UK",
    timeAgo: "40 minutes ago",
    icon: "checklist",
  },
  {
    text: "took the style quiz",
    location: "Melbourne, Australia",
    timeAgo: "45 minutes ago",
    icon: "quiz",
  },
]

const iconMap: Record<ProofEvent["icon"], string> = {
  shopping: "🛍️",
  checklist: "📋",
  consultation: "📞",
  quiz: "✨",
}

export function SocialProofNotification() {
  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  // Don't show on quiz page (too many UI elements already)
  const isQuizPage = typeof window !== "undefined" && window.location.pathname === "/quiz"

  const showNext = useCallback(() => {
    if (dismissed || isQuizPage) return

    setVisible(true)

    // Auto-hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false)
    }, 4000)

    // Schedule next notification after hiding
    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % proofEvents.length)
      showNext()
    }, 45000 + Math.random() * 30000) // 45–75 seconds between notifications

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(nextTimer)
    }
  }, [dismissed, isQuizPage])

  useEffect(() => {
    // Check if user has dismissed social proof this session
    if (sessionStorage.getItem("cv_social_proof_dismissed")) {
      setDismissed(true)
      return
    }

    // First notification appears after 25 seconds (don't show too early)
    const initialDelay = setTimeout(() => {
      showNext()
    }, 25000)

    return () => clearTimeout(initialDelay)
  }, [showNext])

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem("cv_social_proof_dismissed", "true")
  }

  if (dismissed || !visible || isQuizPage) return null

  const event = proofEvents[currentIndex]

  return (
    <div
      className="fixed bottom-24 md:bottom-28 left-4 z-30 max-w-[320px]"
      style={{
        animation: "socialProofIn 0.4s ease-out forwards",
      }}
    >
      <div
        className="relative flex items-start gap-3 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-[#e6dfd5] p-4"
      >
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-[#b0a898] hover:text-[#6a5c55] transition-colors p-0.5"
          aria-label="Dismiss notification"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 1l10 10M11 1L1 11" />
          </svg>
        </button>

        {/* Icon */}
        <span className="text-xl flex-shrink-0 mt-0.5">{iconMap[event.icon]}</span>

        {/* Text */}
        <div className="min-w-0">
          <p className="text-sm text-[#1f1f1f] leading-snug">
            <span className="font-semibold">Someone</span> in {event.location}{" "}
            <span className="text-[#6a5c55]">{event.text}</span>
          </p>
          <p className="text-xs text-[#b0a898] mt-1">{event.timeAgo}</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes socialProofIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
