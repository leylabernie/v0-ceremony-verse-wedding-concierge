"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Heart,
  Crown,
  Palette,
  Globe,
  DollarSign,
  Calendar,
  Send,
  MessageCircle,
} from "lucide-react"

/* ────────────────────────────────────────────
   TYPES
   ──────────────────────────────────────────── */

type StyleOption = "traditional" | "modern" | "fusion" | "unsure"
type TraditionOption =
  | "gujarati"
  | "punjabi"
  | "south_indian"
  | "bengali"
  | "muslim"
  | "christian"
  | "intercultural"
  | "other"
type BudgetOption = "under_1k" | "1k_3k" | "3k_5k" | "5k_plus"
type TimelineOption = "3_6_months" | "6_12_months" | "12_plus" | "just_starting"

interface QuizAnswers {
  style: StyleOption | null
  tradition: TraditionOption | null
  budget: BudgetOption | null
  timeline: TimelineOption | null
  firstName: string
  email: string
  phone: string
  wantsChecklist: boolean
}

/* ────────────────────────────────────────────
   QUIZ OPTION DATA
   ──────────────────────────────────────────── */

const styleOptions: {
  value: StyleOption
  label: string
  description: string
  icon: string
}[] = [
  {
    value: "traditional",
    label: "Traditional & Classic",
    description: "Rich reds, golds, heavy embroidery",
    icon: "🪷",
  },
  {
    value: "modern",
    label: "Modern & Minimalist",
    description: "Pastels, clean lines, subtle detail",
    icon: "✨",
  },
  {
    value: "fusion",
    label: "Fusion & Contemporary",
    description: "Indo-western, cape lehengas, unconventional colors",
    icon: "💫",
  },
  {
    value: "unsure",
    label: "I'm not sure yet",
    description: "Help me figure it out!",
    icon: "🔮",
  },
]

const traditionOptions: {
  value: TraditionOption
  label: string
}[] = [
  { value: "gujarati", label: "Gujarati / Hindu" },
  { value: "punjabi", label: "Punjabi / Sikh" },
  { value: "south_indian", label: "South Indian (Tamil, Telugu, Kannada, Malayalam)" },
  { value: "bengali", label: "Bengali" },
  { value: "muslim", label: "Muslim / Pakistani" },
  { value: "christian", label: "Christian (South Indian or Goan)" },
  { value: "intercultural", label: "Intercultural / Interfaith" },
  { value: "other", label: "Other / Not sure" },
]

const budgetOptions: {
  value: BudgetOption
  label: string
  description: string
}[] = [
  {
    value: "under_1k",
    label: "Under $1,000",
    description: "per outfit",
  },
  {
    value: "1k_3k",
    label: "$1,000 – $3,000",
    description: "per outfit",
  },
  {
    value: "3k_5k",
    label: "$3,000 – $5,000",
    description: "per outfit",
  },
  {
    value: "5k_plus",
    label: "$5,000+",
    description: "I want the best",
  },
]

const timelineOptions: {
  value: TimelineOption
  label: string
  description: string
}[] = [
  {
    value: "3_6_months",
    label: "3–6 months from now",
    description: "Coming up soon!",
  },
  {
    value: "6_12_months",
    label: "6–12 months from now",
    description: "Perfect planning window",
  },
  {
    value: "12_plus",
    label: "12+ months from now",
    description: "Plenty of time to plan",
  },
  {
    value: "just_starting",
    label: "I'm just starting to plan",
    description: "No date set yet",
  },
]

/* ────────────────────────────────────────────
   RECOMMENDATION ENGINE
   ──────────────────────────────────────────── */

interface Recommendation {
  category: string
  suggestion: string
  budget: string
}

function generateRecommendations(
  style: StyleOption,
  tradition: TraditionOption,
  budget: BudgetOption,
  timeline: TimelineOption
): { intro: string; recs: Recommendation[]; tip: string } {
  /* ── Bridal outfit by style + tradition ── */
  const bridalMap: Record<string, string> = {
    /* Traditional combos */
    "traditional-gujarati":
      "A rich red or maroon zardozi lehenga with mirror work from Gujarat — the quintessential panetar-inspired bridal look",
    "traditional-punjabi":
      "A deep red or magenta bridal lehenga with heavy phulkari-inspired embroidery and gold zari dupatta",
    "traditional-south_indian":
      "A stunning Kanchipuram silk saree in temple red with broad zari border and traditional temple jewelry",
    "traditional-bengali":
      "A classic Benarasi silk saree in red with intricate gold jhallar — the timeless Bengali bride",
    "traditional-muslim":
      "A regal red or burgundy bridal lehenga with heavy zardozi and kora dabka work, paired with a matching dupatta and jhoomar",
    "traditional-christian":
      "A traditional white or ivory silk saree with gold zari border, perfect for a South Indian Christian ceremony",
    "traditional-intercultural":
      "A rich red lehenga with gold zardozi work that honors Indian tradition while being universally stunning",
    "traditional-other":
      "A classic red or maroon bridal lehenga with heavy gold embroidery — the timeless Indian bride",

    /* Modern combos */
    "modern-gujarati":
      "A soft blush or mint lehenga with delicate thread work and clean mirror accents — a modern panetar twist",
    "modern-punjabi":
      "A pastel pink or ivory lehenga with subtle sequin work and a lightweight dupatta — minimalist Punjabi chic",
    "modern-south_indian":
      "A pastel Kanchipuram silk saree with a thin zari border and modern blouse design — heritage meets contemporary",
    "modern-bengali":
      "A contemporary ivory or gold Benarasi with minimalist jhallar — Bengali tradition, modern sensibility",
    "modern-muslim":
      "An elegant pastel or ivory lehenga with delicate nakshi work and a sheer organza dupatta",
    "modern-christian":
      "A modern white or champagne gown with subtle Indian embroidery — the best of both worlds",
    "modern-intercultural":
      "A soft pastel lehenga or indo-western gown with minimal embellishment — elegant and versatile for a multicultural celebration",
    "modern-other":
      "A clean pastel lehenga with subtle detailing — modern Indian bridal elegance",

    /* Fusion combos */
    "fusion-gujarati":
      "A cape lehenga in unconventional teal or coral with mirror work accents — a bold panetar reimagined",
    "fusion-punjabi":
      "An indo-western sharara set or dhoti-style lehenga in an offbeat color like lavender or burnt orange",
    "fusion-south_indian":
      "A half-saree inspired lehenga in a non-traditional palette like emerald or steel blue with contemporary draping",
    "fusion-bengali":
      "A modern drape-style lehenga or pre-stitched saree in ivory with bold red accents — the new Benarasi bride",
    "fusion-muslim":
      "A structured gharara or farshi gharara in jewel tones with contemporary kaamdani work",
    "fusion-christian":
      "An indo-western fusion gown with a saree drape detail — two traditions, one stunning look",
    "fusion-intercultural":
      "A versatile indo-western silhouette in a color that bridges both cultures — think dusty rose, sage, or champagne gold",
    "fusion-other":
      "A contemporary silhouette like a cape lehenga or dhoti-pants set in an unconventional color",

    /* Unsure combos — default to popular suggestions per tradition */
    "unsure-gujarati":
      "We'd suggest starting with a classic red zardozi lehenga with mirror work — timeless, stunning, and perfect for Gujarati ceremonies",
    "unsure-punjabi":
      "We'd suggest a vibrant magenta or red lehenga with gold embroidery — it's a foolproof choice for Punjabi celebrations",
    "unsure-south_indian":
      "We'd suggest starting with a traditional Kanchipuram silk — the rich silk and zari work never goes out of style",
    "unsure-bengali":
      "We'd suggest a classic red Benarasi — it's the heart of every Bengali wedding and always breathtaking",
    "unsure-muslim":
      "We'd suggest a rich jewel-toned lehenga with zardozi work — a versatile and regal choice",
    "unsure-christian":
      "We'd suggest a white or ivory silk saree with gold zari — traditional yet elegant for a Christian ceremony",
    "unsure-intercultural":
      "We'd love to help you find something that honors both traditions — let's chat about what feels right for you",
    "unsure-other":
      "No worries — we'll help you discover your perfect style! A classic red or pastel lehenga is always a great starting point",
  }

  /* ── Groom outfit by tradition ── */
  const groomMap: Record<string, string> = {
    gujarati:
      "An ivory or gold sherwani with matching mirror work details to complement your lehenga",
    punjabi:
      "A regal sherwani in deep navy or gold with subtle embroidery and a matching pagdi",
    south_indian:
      "A silk veshti and angavastram in coordinating gold or cream, paired with a kurta",
    bengali:
      "A cream or gold dhoti and kurta set with a matching topor and Chandan tilak",
    muslim:
      "An embroidered sherwani in ivory or gold with a matching turban and khussa",
    christian:
      "A tailored suit or ivory sherwani — depending on how traditional you'd like to go",
    intercultural:
      "A sherwani or bandhgala that blends elements from both traditions",
    other:
      "A classic sherwani or bandhgala in ivory or gold — versatile and always dashing",
  }

  /* ── Family outfits by tradition ── */
  const familyMap: Record<string, string> = {
    gujarati:
      "Coordinated bandhani sarees and kurtas in complementary warm tones — rich reds, oranges, and pinks",
    punjabi:
      "Matching phulkari dupattas with color-coordinated suits and kurtas in vibrant pinks and oranges",
    south_indian:
      "Coordinating Kanchipuram silk sarees and kurtas in complementary temple colors — reds, greens, and golds",
    bengali:
      "Paired Benarasi or cotton silk sarees and punjabis in traditional red and white with gold accents",
    muslim:
      "Coordinated sharara sets and kurtas in jewel tones — emerald, sapphire, and ruby",
    christian:
      "Coordinating silk sarees and suits in elegant pastels or classic white and gold",
    intercultural:
      "A curated palette that bridges both cultures — coordinated but not matchy, elegant and harmonious",
    other:
      "Coordinated sarees and kurtas in a complementary color palette that ties the whole wedding party together",
  }

  /* ── Budget range labels ── */
  const bridalBudgetMap: Record<BudgetOption, string> = {
    under_1k: "$600–$950",
    "1k_3k": "$1,500–$2,800",
    "3k_5k": "$3,200–$4,800",
    "5k_plus": "$5,500–$10,000+",
  }

  const groomBudgetMap: Record<BudgetOption, string> = {
    under_1k: "$300–$800",
    "1k_3k": "$800–$1,500",
    "3k_5k": "$1,500–$2,500",
    "5k_plus": "$2,500–$5,000+",
  }

  const familyBudgetMap: Record<BudgetOption, string> = {
    under_1k: "$150–$400 each",
    "1k_3k": "$300–$800 each",
    "3k_5k": "$600–$1,200 each",
    "5k_plus": "$1,000–$2,000+ each",
  }

  /* ── Intro text ── */
  const firstName = "" // filled in at render time
  const intro = `${firstName ? firstName + ", " : ""}based on your style, here are our top recommendations for you:`

  /* ── Pro tip by timeline + budget ── */
  const tipMap: Record<string, string> = {
    "3_6_months":
      "With your timeline, we recommend starting immediately — custom pieces take 6–12 weeks, and express options are limited. Book a consultation ASAP so we can find the best available options for you.",
    "6_12_months":
      "You're in the sweet spot! This gives us time for custom stitching, multiple video shopping sessions, and unhurried decisions. Most of our brides start here.",
    "12_plus":
      "Lucky you — with this timeline, we can explore custom design work, source rare fabrics, and even do multiple iterations. The world is your oyster!",
    just_starting:
      "Perfect time to start exploring! Even without a set date, understanding your style and budget helps us hit the ground running when you're ready. Let's start the conversation now.",
  }

  return {
    intro,
    recs: [
      {
        category: "Bridal Outfit",
        suggestion:
          bridalMap[`${style}-${tradition}`] ||
          bridalMap[`traditional-${tradition}`] ||
          bridalMap["traditional-other"],
        budget: bridalBudgetMap[budget],
      },
      {
        category: "Groom Outfit",
        suggestion: groomMap[tradition] || groomMap.other,
        budget: groomBudgetMap[budget],
      },
      {
        category: "Family Outfits",
        suggestion: familyMap[tradition] || familyMap.other,
        budget: familyBudgetMap[budget],
      },
    ],
    tip: tipMap[timeline] || tipMap["6_12_months"],
  }
}

/* ────────────────────────────────────────────
   STEP HEADERS
   ──────────────────────────────────────────── */

const stepHeaders: { title: string; subtitle: string; icon: React.ReactNode }[] = [
  {
    title: "Which best describes your wedding style?",
    subtitle: "Pick the vibe that speaks to you — there are no wrong answers!",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Which community or tradition is your wedding?",
    subtitle: "This helps us recommend the right silhouettes, fabrics, and details.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "What's your outfit budget range?",
    subtitle: "We work with all budgets — honest pricing, no surprises.",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    title: "When is your wedding?",
    subtitle: "This helps us plan the right sourcing timeline for you.",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    title: "Where should we send your personalized recommendations?",
    subtitle: "Your results are almost ready! Just a few details.",
    icon: <Send className="w-5 h-5" />,
  },
]

const TOTAL_STEPS = 5

const WHATSAPP_CONSULT =
  "https://wa.me/12153419990?text=Hi%2C%20I%20just%20took%20the%20CeremonyVerse%20style%20quiz%20and%20I%27d%20like%20a%20free%20consultation."

/* ────────────────────────────────────────────
   SELECTABLE CARD COMPONENT
   ──────────────────────────────────────────── */

function SelectableCard({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative w-full text-left rounded-xl border-2 p-4 sm:p-5
        transition-all duration-200 cursor-pointer group
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7b28a] focus-visible:ring-offset-2
        ${
          selected
            ? "border-[#c7b28a] bg-[#c7b28a]/8 shadow-[0_2px_16px_rgba(199,178,138,0.15)]"
            : "border-[#e6dfd5] bg-white hover:border-[#c7b28a]/50 hover:shadow-[0_1px_8px_rgba(199,178,138,0.1)]"
        }
        ${className}
      `}
      aria-pressed={selected}
    >
      {selected && (
        <span className="absolute top-3 right-3 text-[#c7b28a]">
          <CheckCircle2 className="w-5 h-5" />
        </span>
      )}
      {children}
    </button>
  )
}

/* ────────────────────────────────────────────
   PROGRESS BAR
   ──────────────────────────────────────────── */

function ProgressBar({ step }: { step: number }) {
  const pct = Math.round((step / TOTAL_STEPS) * 100)
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-[#8a6f63] tracking-wide uppercase">
          Step {step} of {TOTAL_STEPS}
        </span>
        <span className="text-xs font-medium text-[#c7b28a]">{pct}%</span>
      </div>
      <div className="w-full h-2 bg-[#e6dfd5] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#c7b28a] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────
   MAIN QUIZ PAGE
   ──────────────────────────────────────────── */

export default function QuizPage() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<QuizAnswers>({
    style: null,
    tradition: null,
    budget: null,
    timeline: null,
    firstName: "",
    email: "",
    phone: "",
    wantsChecklist: false,
  })
  const [showResults, setShowResults] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [direction, setDirection] = useState<"forward" | "back">("forward")

  /* Helpers */
  const set = useCallback(
    <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => {
      setAnswers((a) => ({ ...a, [key]: value }))
    },
    []
  )

  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return answers.style !== null
      case 2:
        return answers.tradition !== null
      case 3:
        return answers.budget !== null
      case 4:
        return answers.timeline !== null
      case 5:
        return answers.email.trim().length > 0 && answers.email.includes("@")
      default:
        return false
    }
  }

  const goNext = () => {
    if (!canProceed()) return
    if (step < TOTAL_STEPS) {
      setDirection("forward")
      setStep(step + 1)
    }
  }

  const goBack = () => {
    if (step > 1) {
      setDirection("back")
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    if (!canProceed()) return
    setSubmitting(true)

    // Fire GA event
    try {
      if (typeof window !== "undefined" && typeof (window as unknown as Record<string, unknown>).gtag === "function") {
        ;((window as unknown as Record<string, unknown>).gtag as (...args: unknown[]) => void)("event", "generate_lead", {
          method: "style_quiz",
        })
      }
    } catch {
      // gtag not available — silently ignore
    }

    // Submit to lead capture API
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: answers.email,
          firstName: answers.firstName,
          phone: answers.phone,
          source: "style_quiz",
          quizAnswers: {
            style: answers.style,
            tradition: answers.tradition,
            budget: answers.budget,
            timeline: answers.timeline,
            wantsChecklist: answers.wantsChecklist,
          },
        }),
      })
    } catch {
      // Silently fail — still show results to user
    }

    // Small delay for UX, then show results
    setTimeout(() => {
      setSubmitting(false)
      setShowResults(true)
    }, 800)
  }

  /* ── Results data ── */
  const recommendations =
    answers.style && answers.tradition && answers.budget
      ? generateRecommendations(answers.style, answers.tradition, answers.budget, answers.timeline!)
      : null

  /* ──────────────────────────────
     RENDER: Results Page
     ────────────────────────────── */
  if (showResults && recommendations) {
    const introText = answers.firstName
      ? `${answers.firstName}, based on your style, here are our top recommendations for you:`
      : "Based on your style, here are our top recommendations for you:"

    return (
      <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <SeoNav />

        <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-12 pb-20">
          {/* Success header */}
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c7b28a]/15 mb-5">
              <Sparkles className="w-7 h-7 text-[#c7b28a]" />
            </div>
            <h1
              className="font-garamond text-3xl sm:text-4xl font-semibold text-[#1f1f1f] mb-3"
              style={{ letterSpacing: "0.02em" }}
            >
              Your Personalized Style Guide
            </h1>
            <p className="text-base text-[#6a5c55] max-w-md mx-auto leading-relaxed">
              {introText}
            </p>
          </div>

          {/* Recommendation cards */}
          <div className="space-y-4 mb-10">
            {recommendations.recs.map((rec, i) => (
              <div
                key={rec.category}
                className="bg-white rounded-xl border border-[#e6dfd5] p-5 sm:p-6 animate-fade-in"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#c7b28a]/12 text-[#c7b28a]">
                    {i === 0 ? (
                      <Crown className="w-4 h-4" />
                    ) : i === 1 ? (
                      <Heart className="w-4 h-4" />
                    ) : (
                      <Palette className="w-4 h-4" />
                    )}
                  </span>
                  <h3 className="font-garamond text-lg font-semibold text-[#1f1f1f]">
                    {rec.category}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#6a5c55] leading-relaxed mb-2 pl-11">
                  {rec.suggestion}
                </p>
                <p className="text-sm font-medium text-[#c7b28a] pl-11">
                  Budget: {rec.budget}
                </p>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div className="bg-[#c7b28a]/8 rounded-xl border border-[#c7b28a]/20 p-5 sm:p-6 mb-10 animate-fade-in">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#c7b28a] mb-2">
              Pro Tip
            </p>
            <p className="text-sm text-[#6a5c55] leading-relaxed">
              {recommendations.tip}
            </p>
          </div>

          {/* CTA: WhatsApp consultation */}
          <div className="text-center mb-8 animate-fade-in">
            <a
              href={WHATSAPP_CONSULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-semibold text-base
                hover:opacity-90 transition-all duration-200 shadow-[0_4px_16px_rgba(37,211,102,0.25)]"
            >
              <MessageCircle className="w-5 h-5" />
              Book Your Free Consultation
            </a>
            <p className="text-xs text-[#8a6f63] mt-3">
              Chat with Bhamini on WhatsApp — no commitment, no pressure
            </p>
          </div>

          {/* Secondary links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#c7b28a] text-[#c7b28a] font-semibold text-sm
                hover:bg-[#c7b28a] hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#e6dfd5] text-[#6a5c55] font-semibold text-sm
                hover:border-[#c7b28a] hover:text-[#c7b28a] transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>

          {/* Retake quiz */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setShowResults(false)
                setStep(1)
                setAnswers({
                  style: null,
                  tradition: null,
                  budget: null,
                  timeline: null,
                  firstName: "",
                  email: "",
                  phone: "",
                  wantsChecklist: false,
                })
              }}
              className="text-sm text-[#8a6f63] hover:text-[#c7b28a] transition underline underline-offset-4"
            >
              Retake the quiz
            </button>
          </div>
        </main>

        <SeoFooter />
      </div>
    )
  }

  /* ──────────────────────────────
     RENDER: Quiz Steps
     ────────────────────────────── */
  const header = stepHeaders[step - 1]

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      <main className="max-w-xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        {/* Progress bar */}
        <div className="mb-8">
          <ProgressBar step={step} />
        </div>

        {/* Step card */}
        <div
          key={step}
          className="animate-fade-in"
          style={{
            animationDuration: "0.35s",
          }}
        >
          {/* Step header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c7b28a]/12 text-[#c7b28a] mb-4">
              {header.icon}
            </div>
            <h1
              className="font-garamond text-2xl sm:text-3xl font-semibold text-[#1f1f1f] mb-2"
              style={{ letterSpacing: "0.02em" }}
            >
              {header.title}
            </h1>
            <p className="text-sm sm:text-base text-[#8a6f63] max-w-sm mx-auto leading-relaxed">
              {header.subtitle}
            </p>
          </div>

          {/* Step 1: Style */}
          {step === 1 && (
            <div className="grid gap-3">
              {styleOptions.map((opt) => (
                <SelectableCard
                  key={opt.value}
                  selected={answers.style === opt.value}
                  onClick={() => set("style", opt.value)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl flex-shrink-0">{opt.icon}</span>
                    <div>
                      <p className="font-garamond font-semibold text-[#1f1f1f] text-base">
                        {opt.label}
                      </p>
                      <p className="text-sm text-[#8a6f63]">{opt.description}</p>
                    </div>
                  </div>
                </SelectableCard>
              ))}
            </div>
          )}

          {/* Step 2: Tradition */}
          {step === 2 && (
            <div className="grid gap-3">
              {traditionOptions.map((opt) => (
                <SelectableCard
                  key={opt.value}
                  selected={answers.tradition === opt.value}
                  onClick={() => set("tradition", opt.value)}
                >
                  <p className="font-garamond font-semibold text-[#1f1f1f] text-base">
                    {opt.label}
                  </p>
                </SelectableCard>
              ))}
            </div>
          )}

          {/* Step 3: Budget */}
          {step === 3 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {budgetOptions.map((opt) => (
                <SelectableCard
                  key={opt.value}
                  selected={answers.budget === opt.value}
                  onClick={() => set("budget", opt.value)}
                  className="sm:col-span-1"
                >
                  <p className="font-garamond font-semibold text-[#1f1f1f] text-base">
                    {opt.label}
                  </p>
                  <p className="text-sm text-[#8a6f63]">{opt.description}</p>
                </SelectableCard>
              ))}
            </div>
          )}

          {/* Step 4: Timeline */}
          {step === 4 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {timelineOptions.map((opt) => (
                <SelectableCard
                  key={opt.value}
                  selected={answers.timeline === opt.value}
                  onClick={() => set("timeline", opt.value)}
                  className="sm:col-span-1"
                >
                  <p className="font-garamond font-semibold text-[#1f1f1f] text-base">
                    {opt.label}
                  </p>
                  <p className="text-sm text-[#8a6f63]">{opt.description}</p>
                </SelectableCard>
              ))}
            </div>
          )}

          {/* Step 5: Contact */}
          {step === 5 && (
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#1f1f1f] mb-1.5"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={answers.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  placeholder="Your first name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e6dfd5] bg-white
                    text-[#1f1f1f] text-base placeholder:text-[#b0a898]
                    focus:border-[#c7b28a] focus:outline-none focus:ring-2 focus:ring-[#c7b28a]/25
                    transition-all duration-200"
                  autoComplete="given-name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1f1f1f] mb-1.5"
                >
                  Email <span className="text-[#c7b28a]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={answers.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e6dfd5] bg-white
                    text-[#1f1f1f] text-base placeholder:text-[#b0a898]
                    focus:border-[#c7b28a] focus:outline-none focus:ring-2 focus:ring-[#c7b28a]/25
                    transition-all duration-200"
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#1f1f1f] mb-1.5"
                >
                  Phone{" "}
                  <span className="text-[#8a6f63] font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={answers.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e6dfd5] bg-white
                    text-[#1f1f1f] text-base placeholder:text-[#b0a898]
                    focus:border-[#c7b28a] focus:outline-none focus:ring-2 focus:ring-[#c7b28a]/25
                    transition-all duration-200"
                  autoComplete="tel"
                />
              </div>

              {/* Checklist checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <span className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={answers.wantsChecklist}
                    onChange={(e) => set("wantsChecklist", e.target.checked)}
                    className="peer sr-only"
                  />
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-md border-2 border-[#e6dfd5] bg-white
                      peer-checked:bg-[#c7b28a] peer-checked:border-[#c7b28a] transition-all duration-200
                      group-hover:border-[#c7b28a]/50"
                  >
                    {answers.wantsChecklist && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                </span>
                <span className="text-sm text-[#6a5c55] leading-relaxed">
                  I'd also like the{" "}
                  <span className="font-semibold text-[#1f1f1f]">
                    free Indian Wedding Outfit Checklist
                  </span>{" "}
                  — every outfit, every ceremony, nothing forgotten.
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8 gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#e6dfd5]
                text-[#6a5c55] font-medium text-sm
                hover:border-[#c7b28a] hover:text-[#c7b28a] transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={goNext}
              disabled={!canProceed()}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm
                transition-all duration-200
                disabled:opacity-40 disabled:cursor-not-allowed
                bg-[#c7b28a] text-white hover:opacity-90"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed() || submitting}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm
                transition-all duration-200
                disabled:opacity-40 disabled:cursor-not-allowed
                bg-[#c7b28a] text-white hover:opacity-90"
            >
              {submitting ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Preparing your results...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Get My Recommendations
                </>
              )}
            </button>
          )}
        </div>

        {/* Trust note */}
        <p className="text-center text-xs text-[#b0a898] mt-10 leading-relaxed max-w-xs mx-auto">
          Your information is 100% private. We never share your details or spam
          you. Unsubscribe anytime.
        </p>
      </main>

      <SeoFooter />
    </div>
  )
}
