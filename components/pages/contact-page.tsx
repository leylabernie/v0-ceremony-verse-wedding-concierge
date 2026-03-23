"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, ArrowLeft, CheckCircle, User, Calendar, Heart, DollarSign, MessageSquare } from "lucide-react"

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
  { number: 1, title: "Your Details", icon: User },
  { number: 2, title: "Services", icon: Heart },
  { number: 3, title: "Budget", icon: DollarSign },
  { number: 4, title: "Message", icon: MessageSquare },
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
    // In a real app, this would submit to an API
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="animate-fade-in min-h-screen flex items-center justify-center bg-ivory py-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-gold" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
            Request Received!
          </h1>
          <p className="text-navy/70 text-lg mb-8">
            Thank you for your interest in CeremonyVerse. Our sourcing team will review your 
            requirements and reach out within 24-48 hours to schedule your complimentary consultation.
          </p>
          <div className="glass rounded-xl p-6 text-left">
            <h3 className="font-semibold text-navy mb-4">What happens next:</h3>
            <ul className="space-y-3">
              {[
                "We review your sourcing requirements",
                "A sourcing specialist will reach out via email",
                "We schedule a video consultation at your convenience",
                "You receive a customized sourcing proposal",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-gold">
                    {index + 1}
                  </span>
                  <span className="text-navy/80">{item}</span>
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
      {/* Hero Section */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
            Start Your Journey
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory mb-4 text-balance">
            Luxury Intake Questionnaire
          </h1>
          <p className="text-ivory/80 text-lg max-w-2xl mx-auto">
            Tell us about your wedding vision. This helps us prepare a tailored consultation 
            and sourcing proposal for you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200",
                        currentStep >= step.number
                          ? "bg-gold text-navy"
                          : "bg-muted text-navy/40"
                      )}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>
                    <span
                      className={cn(
                        "hidden sm:block mt-2 text-xs font-medium",
                        currentStep >= step.number ? "text-navy" : "text-navy/40"
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "h-0.5 w-12 sm:w-24 mx-2",
                        currentStep > step.number ? "bg-gold" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="glass rounded-2xl p-6 sm:p-10 shadow-xl">
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-gold" />
                  <h2 className="font-serif text-2xl font-bold text-navy">Tell Us About You</h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-navy mb-2">
                        Event Date <span className="text-gold">*</span>
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        value={formData.eventDate}
                        onChange={(e) => updateFormData("eventDate", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-navy mb-2">
                        Event Type <span className="text-gold">*</span>
                      </label>
                      <select
                        id="eventType"
                        value={formData.eventType}
                        onChange={(e) => updateFormData("eventType", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
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

            {/* Step 2: Services */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-gold" />
                  <h2 className="font-serif text-2xl font-bold text-navy">How Can We Help?</h2>
                </div>
                <p className="text-navy/70 mb-6">
                  Select all the services you're interested in. You can discuss details during your consultation.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all duration-200",
                        formData.services.includes(service.id)
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-border bg-white text-navy/70 hover:border-gold/50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                            formData.services.includes(service.id)
                              ? "border-gold bg-gold"
                              : "border-border"
                          )}
                        >
                          {formData.services.includes(service.id) && (
                            <CheckCircle className="w-3 h-3 text-navy" />
                          )}
                        </div>
                        <span className="font-medium">{service.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Budget */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-gold" />
                  <h2 className="font-serif text-2xl font-bold text-navy">Estimated Budget</h2>
                </div>
                <p className="text-navy/70 mb-6">
                  This helps us tailor recommendations to your investment level. All budgets are welcome.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => updateFormData("budget", range)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all duration-200",
                        formData.budget === range
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-border bg-white text-navy/70 hover:border-gold/50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                            formData.budget === range ? "border-gold bg-gold" : "border-border"
                          )}
                        >
                          {formData.budget === range && (
                            <div className="w-2 h-2 rounded-full bg-navy" />
                          )}
                        </div>
                        <span className="font-medium">{range}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Message */}
            {currentStep === 4 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-gold" />
                  <h2 className="font-serif text-2xl font-bold text-navy">Additional Notes</h2>
                </div>
                <p className="text-navy/70 mb-6">
                  Share any specific requirements, questions, or details about your wedding vision.
                </p>

                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                  placeholder="Tell us about your wedding vision, color preferences, specific items you're looking for, or any questions you have..."
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="px-6 py-3 text-navy font-medium rounded-lg hover:bg-muted transition-all duration-200 flex items-center gap-2"
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
                    "px-8 py-3 font-semibold rounded-lg transition-all duration-200 flex items-center gap-2",
                    canProceed()
                      ? "bg-gold text-navy hover:bg-gold-light"
                      : "bg-muted text-navy/40 cursor-not-allowed"
                  )}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 flex items-center gap-2"
                >
                  Request Sourcing Consult
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
