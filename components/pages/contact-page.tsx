"use client"

import { useState } from "react"

interface FormData {
  name: string
  eventDate: string
  bridesmaidsCount: string
  groomsmenCount: string
  vision: string
  contractAcknowledged: boolean
}

const initialFormData: FormData = {
  name: "",
  eventDate: "",
  bridesmaidsCount: "",
  groomsmenCount: "",
  vision: "",
  contractAcknowledged: false,
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canSubmit = () => {
    return formData.name && formData.eventDate && formData.contractAcknowledged
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="animate-fade-in min-h-screen flex items-center justify-center silk-grain bg-muted-rose py-28">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 border-2 border-brushed-gold rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="font-serif text-4xl text-brushed-gold">✓</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-midnight-navy mb-4 tracking-wide">
            Application Received
          </h1>
          <p className="text-midnight-navy/60 text-lg mb-10 font-sans leading-relaxed">
            Thank you for sharing your wedding vision with us. Our sourcing team will 
            review your application and reach out within 24-48 hours.
          </p>
          <div className="bg-champagne rounded-2xl border border-brushed-gold/30 p-8 text-left">
            <h3 className="font-serif text-xl font-semibold text-midnight-navy mb-6 tracking-wide">
              What happens next
            </h3>
            <ul className="space-y-4">
              {[
                "We review your wedding vision",
                "A specialist will reach out via email",
                "We schedule a video consultation",
                "You receive a customized sourcing proposal",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="font-serif text-lg text-brushed-gold/60">
                    0{index + 1}
                  </span>
                  <span className="text-midnight-navy/70 font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in silk-grain bg-muted-rose min-h-screen">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-6">
            Begin Your Journey
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-midnight-navy mb-6 tracking-wide">
            Book Your Consultation
          </h1>
          <p className="text-midnight-navy/60 text-lg font-sans leading-relaxed max-w-2xl mx-auto">
            Share your wedding vision with us. This helps us prepare a tailored 
            consultation and sourcing proposal for your special day.
          </p>
        </div>
      </section>

      {/* Form Section - Centered */}
      <section className="pb-32 sm:pb-40">
        <div className="max-w-xl mx-auto px-6 sm:px-8">
          <form onSubmit={handleSubmit}>
            <div className="bg-champagne rounded-2xl border border-brushed-gold/30 p-8 sm:p-12">
              <div className="space-y-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-midnight-navy mb-3">
                    Full Name <span className="text-brushed-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all font-sans"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-midnight-navy mb-3">
                    Event Date <span className="text-brushed-gold">*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    value={formData.eventDate}
                    onChange={(e) => updateFormData("eventDate", e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all font-sans"
                    required
                  />
                </div>

                {/* Guest Count */}
                <div>
                  <label className="block text-sm font-medium text-midnight-navy mb-3">
                    Wedding Party Size
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bridesmaids" className="block text-xs text-midnight-navy/50 mb-2">
                        Bridesmaids
                      </label>
                      <input
                        type="number"
                        id="bridesmaids"
                        min="0"
                        max="20"
                        value={formData.bridesmaidsCount}
                        onChange={(e) => updateFormData("bridesmaidsCount", e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all font-sans text-center"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label htmlFor="groomsmen" className="block text-xs text-midnight-navy/50 mb-2">
                        Groomsmen
                      </label>
                      <input
                        type="number"
                        id="groomsmen"
                        min="0"
                        max="20"
                        value={formData.groomsmenCount}
                        onChange={(e) => updateFormData("groomsmenCount", e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all font-sans text-center"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Vision */}
                <div>
                  <label htmlFor="vision" className="block text-sm font-medium text-midnight-navy mb-3">
                    Your Wedding Vision
                  </label>
                  <textarea
                    id="vision"
                    value={formData.vision}
                    onChange={(e) => updateFormData("vision", e.target.value)}
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all resize-none font-sans"
                    placeholder="Tell us about your dream wedding... color themes, cultural elements, specific items you're looking for..."
                  />
                </div>

                {/* Contract Acknowledgment Checkbox */}
                <div className="border-t border-brushed-gold/20 pt-8">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.contractAcknowledged}
                      onChange={(e) => updateFormData("contractAcknowledged", e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-brushed-gold/50 text-brushed-gold focus:ring-brushed-gold cursor-pointer"
                      required
                    />
                    <span className="text-sm text-midnight-navy/70 leading-relaxed font-sans">
                      <span className="text-brushed-gold">*</span> I understand that CeremonyVerse operates on a 
                      <strong className="text-midnight-navy"> 'Gate-Approval' contract system</strong>. Once a design 
                      is approved, changes are permitted only within 24 hours.
                    </span>
                  </label>
                </div>

                {/* Submit Button - Navy background with Gold text */}
                <button
                  type="submit"
                  disabled={!canSubmit()}
                  className={`w-full py-4 font-semibold rounded-full transition-all duration-300 mt-4 ${
                    canSubmit()
                      ? "bg-midnight-navy text-brushed-gold hover:shadow-[0_0_32px_rgba(197,160,89,0.25)]"
                      : "bg-midnight-navy/30 text-brushed-gold/50 cursor-not-allowed"
                  }`}
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>

          {/* Trust Note */}
          <p className="text-center text-midnight-navy/40 text-sm mt-8 font-sans">
            Your information is secure and will only be used to prepare your consultation.
          </p>
        </div>
      </section>
    </div>
  )
}
