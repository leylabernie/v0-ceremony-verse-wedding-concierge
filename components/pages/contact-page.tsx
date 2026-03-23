"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, ArrowLeft } from "lucide-react"

const eventTypes = [
  "Hindu Wedding",
  "Sikh Wedding",
  "Muslim Wedding",
  "Christian Wedding",
  "Fusion Wedding",
  "Cultural Ceremony",
  "Engagement Party",
  "Other",
]

const serviceOptions = [
  { id: "groomsmen", label: "Groomsmen Outfits" },
  { id: "bridesmaids", label: "Bridesmaid Outfits" },
  { id: "bridal", label: "Bridal Trousseau" },
  { id: "silks", label: "Pure Silk Sarees" },
  { id: "jewelry", label: "Jewelry & Accessories" },
  { id: "ceremony", label: "Ceremony Items & Decor" },
]

const budgetRanges = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
]

interface FormData {
  name: string
  email: string
  phone: string
  eventDate: string
  eventType: string
  services: string[]
  budget: string
  message: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  eventType: "",
  services: [],
  budget: "",
  message: "",
}

const steps = [
  { number: 1, title: "Your Details" },
  { number: 2, title: "Services" },
  { number: 3, title: "Budget" },
  { number: 4, title: "Message" },
]

export function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.eventDate && formData.eventType
      case 2:
        return formData.services.length > 0
      case 3:
        return formData.budget
      case 4:
        return true
      default:
        return false
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="animate-fade-in min-h-screen flex items-center justify-center bg-muted-rose py-24">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 border-2 border-brushed-gold rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="font-garamond text-4xl text-brushed-gold">✓</span>
          </div>
          <h1 className="font-garamond text-3xl sm:text-4xl font-semibold text-midnight-navy mb-4 tracking-wide">
            Request Received
          </h1>
          <p className="text-midnight-navy/60 text-lg mb-10 font-light leading-relaxed">
            Thank you for your interest in CeremonyVerse. Our sourcing team will review your 
            requirements and reach out within 24-48 hours to schedule your consultation.
          </p>
          <div className="bento-card p-8 text-left">
            <h3 className="font-garamond text-xl font-semibold text-midnight-navy mb-6 tracking-wide">
              What happens next
            </h3>
            <ul className="space-y-4">
              {[
                "We review your sourcing requirements",
                "A specialist will reach out via email",
                "We schedule a video consultation",
                "You receive a customized proposal",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="font-garamond text-lg text-brushed-gold/60 font-light">
                    0{index + 1}
                  </span>
                  <span className="text-midnight-navy/70 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-midnight-navy py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-brushed-gold text-sm font-medium tracking-[0.2em] uppercase mb-6">
            Start Your Journey
          </p>
          <h1 className="font-garamond text-4xl sm:text-5xl font-semibold text-champagne mb-4 tracking-wide">
            Consultation Request
          </h1>
          <p className="text-champagne/60 text-lg font-light leading-relaxed">
            Tell us about your wedding vision. This helps us prepare a tailored consultation 
            and sourcing proposal for you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 bg-muted-rose">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border",
                        currentStep >= step.number
                          ? "border-brushed-gold bg-champagne text-midnight-navy"
                          : "border-brushed-gold/30 bg-transparent text-midnight-navy/40"
                      )}
                    >
                      <span className="font-garamond text-lg font-semibold">{step.number}</span>
                    </div>
                    <span
                      className={cn(
                        "hidden sm:block mt-2 text-xs font-medium tracking-wide",
                        currentStep >= step.number ? "text-midnight-navy" : "text-midnight-navy/40"
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "h-px w-12 sm:w-20 mx-2",
                        currentStep > step.number ? "bg-brushed-gold" : "bg-brushed-gold/30"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bento-card p-8 sm:p-12">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h2 className="font-garamond text-2xl font-semibold text-midnight-navy mb-8 tracking-wide">
                  Tell Us About You
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-midnight-navy mb-2">
                      Full Name <span className="text-brushed-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all font-light"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-midnight-navy mb-2">
                        Email Address <span className="text-brushed-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all font-light"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-midnight-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all font-light"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-midnight-navy mb-2">
                        Event Date <span className="text-brushed-gold">*</span>
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        value={formData.eventDate}
                        onChange={(e) => updateFormData("eventDate", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all font-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-midnight-navy mb-2">
                        Event Type <span className="text-brushed-gold">*</span>
                      </label>
                      <select
                        id="eventType"
                        value={formData.eventType}
                        onChange={(e) => updateFormData("eventType", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all font-light"
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h2 className="font-garamond text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                  How Can We Help?
                </h2>
                <p className="text-midnight-navy/60 mb-8 font-light">
                  Select all the services you're interested in.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all duration-200",
                        formData.services.includes(service.id)
                          ? "border-brushed-gold bg-brushed-gold/10 text-midnight-navy"
                          : "border-brushed-gold/30 bg-white text-midnight-navy/70 hover:border-brushed-gold/60"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0",
                            formData.services.includes(service.id)
                              ? "border-brushed-gold bg-brushed-gold"
                              : "border-brushed-gold/40"
                          )}
                        >
                          {formData.services.includes(service.id) && (
                            <span className="text-white text-xs">✓</span>
                          )}
                        </div>
                        <span className="font-medium">{service.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h2 className="font-garamond text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                  Estimated Budget
                </h2>
                <p className="text-midnight-navy/60 mb-8 font-light">
                  This helps us tailor recommendations. All budgets are welcome.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => updateFormData("budget", range)}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all duration-200",
                        formData.budget === range
                          ? "border-brushed-gold bg-brushed-gold/10 text-midnight-navy"
                          : "border-brushed-gold/30 bg-white text-midnight-navy/70 hover:border-brushed-gold/60"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0",
                            formData.budget === range ? "border-brushed-gold bg-brushed-gold" : "border-brushed-gold/40"
                          )}
                        >
                          {formData.budget === range && (
                            <span className="text-white text-xs">✓</span>
                          )}
                        </div>
                        <span className="font-medium">{range}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <div className="animate-fade-in">
                <h2 className="font-garamond text-2xl font-semibold text-midnight-navy mb-4 tracking-wide">
                  Additional Notes
                </h2>
                <p className="text-midnight-navy/60 mb-8 font-light">
                  Share any specific requirements or questions about your wedding vision.
                </p>

                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-brushed-gold/30 bg-white text-midnight-navy focus:outline-none focus:border-brushed-gold transition-all resize-none font-light"
                  placeholder="Tell us about your wedding vision, color preferences, specific items you're looking for..."
                />
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-brushed-gold/20">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="px-6 py-3 text-midnight-navy font-medium rounded-full hover:bg-brushed-gold/10 transition-all duration-200 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  disabled={!canProceed()}
                  className={cn(
                    "px-8 py-3 font-medium rounded-full transition-all duration-200 flex items-center gap-2 border",
                    canProceed()
                      ? "bg-champagne text-midnight-navy border-brushed-gold hover:bg-muted-rose"
                      : "bg-brushed-gold/10 text-midnight-navy/40 border-brushed-gold/20 cursor-not-allowed"
                  )}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-champagne text-midnight-navy border border-brushed-gold font-medium rounded-full hover:bg-muted-rose transition-all duration-200 flex items-center gap-2"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
