'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Calendar, MessageCircle, ArrowRight } from 'lucide-react'

const guideInfo: Record<string, { title: string; description: string }> = {
  'price-guide': {
    title: 'India Sourcing Price Guide',
    description: 'Real 2026 pricing for Indian wedding outfits with shipping and customs breakdown.'
  },
  'checklist': {
    title: 'Wedding Outfit Checklist',
    description: 'Complete outfit requirements for all ceremonies and family members.'
  },
  'timeline': {
    title: 'Wedding Sourcing Timeline',
    description: 'Month-by-month planning guide to ensure nothing arrives late.'
  },
  'vendor-flags': {
    title: 'Vendor Red Flags Guide',
    description: 'How to spot scams and verify vendors before sending money.'
  }
}

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const guide = searchParams.get('guide') || 'checklist'
  const email = searchParams.get('email') || ''

  const guideData = guideInfo[guide] || guideInfo['checklist']

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-emerald-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
            You're All Set!
          </h1>
          <p className="text-lg text-stone-600 mb-2">
            Your guide is ready to download.
          </p>
          <p className="text-stone-500">
            We've also sent a copy to <span className="font-semibold text-stone-700">{email || 'your email'}</span>
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-2 border-amber-200 rounded-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-stone-900 mb-3">
              {guideData.title}
            </h2>
            <p className="text-stone-600 mb-6">
              {guideData.description}
            </p>
            <a
              href={`/${guide === 'price-guide' ? 'india-sourcing-price-guide.pdf' : guide === 'checklist' ? 'wedding-outfit-checklist.pdf' : 'wedding-outfit-checklist.pdf'}`}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
            >
              Download PDF
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            What's Next?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1: Related Content */}
            <div className="bg-white rounded-lg p-8 border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-700 font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    Explore Related Guides
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Learn more about Indian wedding sourcing with our other free resources.
                  </p>
                  <Link
                    href="/free-guides"
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
                  >
                    View All Guides
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Step 2: Book Consultation */}
            <div className="bg-white rounded-lg p-8 border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-amber-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Talk directly with Bhamini about your wedding sourcing needs and get personalized recommendations.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Schedule Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Step 3: Blog */}
            <div className="bg-white rounded-lg p-8 border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-700 font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    Read Our Blog
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Deep dives into NRI wedding shopping, scams, sizing, customs duties, and real client stories.
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Read Articles
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Step 4: WhatsApp */}
            <div className="bg-white rounded-lg p-8 border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-amber-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    Quick Chat on WhatsApp
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Have a quick question? Message us on WhatsApp and we'll respond within a few hours.
                  </p>
                  <a
                    href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20just%20downloaded%20your%20guide%20and%20have%20a%20question."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Message Us
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            Why CeremonyVerse?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
              <p className="text-stone-600">Fit Guarantee with alteration coverage</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">30-50%</div>
              <p className="text-stone-600">Savings vs. US Indian boutiques</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">Live Video</div>
              <p className="text-stone-600">Shopping before you commit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Wedding Sourcing Journey?
          </h2>
          <p className="text-stone-300 mb-8">
            Get personalized recommendations from Bhamini in a free 30-minute consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
