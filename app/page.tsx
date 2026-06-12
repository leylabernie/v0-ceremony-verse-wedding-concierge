import Link from 'next/link';

// SEO Metadata
export const metadata = {
  title: 'CeremonyVerse | Bespoke Indian Bridal Shopping for NRI Brides',
  description: 'Your personal concierge for authentic Indian bridal wear. We source, verify via live video, and ship your dream lehenga directly to the USA. Stress-free, scam-free, perfectly fitted.',
  keywords: 'buy lehenga online USA, NRI bride shopping India, Indian bridal wear delivery to US, wedding concierge, live video lehenga shopping',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-stone-50 to-rose-50 text-stone-800 font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-gradient-to-br from-rose-100 via-rose-50 to-stone-100 py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <p className="text-rose-600 font-serif italic text-lg mb-4 tracking-wide">✨ Bespoke Bridal Shopping</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6 text-stone-900 leading-tight">
            Your Dream Indian Wedding Attire,<br />
            <span className="text-rose-600 italic">Delivered to the USA</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Stop worrying about scams, bad sizing, and shipping nightmares. 
            CeremonyVerse is your personal on-the-ground shopping concierge in India. 
            We source, verify via live video, and ship your dream outfit directly to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Your Free Discovery Call
            </Link>
            <Link 
              href="/guide"
              className="bg-white border-2 border-rose-300 text-rose-700 hover:bg-rose-50 font-semibold py-4 px-10 rounded-full text-lg transition-all"
            >
              Get the $149 Shopping Guide
            </Link>
          </div>
        </div>
      </header>

      {/* --- VALUE PROPOSITION SECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-stone-900 mb-4">
            Why NRI Brides Choose CeremonyVerse
          </h2>
          <p className="text-center text-stone-600 mb-16 max-w-2xl mx-auto italic font-light">
            Over big retailers and risky online shopping
          </p>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="text-center p-8 bg-gradient-to-b from-rose-50 to-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">📹</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Live Video Sourcing</h3>
              <p className="text-stone-600 leading-relaxed font-light">
                Don't rely on heavily edited photos. We get on a live WhatsApp video call with you from the markets in India. See the exact fabric, real color, and actual embroidery before you pay.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-8 bg-gradient-to-b from-rose-50 to-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Scam-Proof Authentication</h3>
              <p className="text-stone-600 leading-relaxed font-light">
                The Indian bridal market is full of counterfeits. We physically verify the authenticity of every piece, ensuring you get exactly what you paid for.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-8 bg-gradient-to-b from-rose-50 to-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">📏</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Perfect Fit, Guaranteed</h3>
              <p className="text-stone-600 leading-relaxed font-light">
                No more guessing sizes. We provide a foolproof measurement guide, and our tailors do a final quality check to ensure your outfit fits perfectly in the US.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING / SERVICES SECTION --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-stone-900 mb-4">
            Choose Your Shopping Experience
          </h2>
          <p className="text-center text-stone-600 mb-16 max-w-2xl mx-auto italic font-light">
            Transparent pricing. No hidden vendor markups. Just premium, stress-free service.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-rose-200 flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Style Guide</h3>
              <p className="text-4xl font-bold text-rose-600 mb-6">$149</p>
              <p className="text-stone-600 mb-6 flex-grow italic font-light">Perfect for the DIY bride who wants to shop independently but safely.</p>
              <ul className="space-y-3 mb-8 text-stone-700">
                <li className="flex items-start"><span className="text-rose-400 mr-3 text-lg">✓</span> Comprehensive digital shopping guide</li>
                <li className="flex items-start"><span className="text-rose-400 mr-3 text-lg">✓</span> Foolproof at-home measurement tutorial</li>
                <li className="flex items-start"><span className="text-rose-400 mr-3 text-lg">✓</span> Customs & shipping cheat sheet</li>
              </ul>
              <Link href="/guide" className="block text-center bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
                Get the Guide
              </Link>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-rose-400 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-rose-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">Most Popular</div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Sourcing Concierge</h3>
              <p className="text-4xl font-bold text-rose-600 mb-6">$599</p>
              <p className="text-stone-600 mb-6 flex-grow italic font-light">We do the heavy lifting. Tell us your vision, we find it.</p>
              <ul className="space-y-3 mb-8 text-stone-700">
                <li className="flex items-start"><span className="text-rose-500 mr-3 text-lg">✓</span> Everything in the Style Guide</li>
                <li className="flex items-start"><span className="text-rose-500 mr-3 text-lg">✓</span> We source 3-5 custom options for you</li>
                <li className="flex items-start"><span className="text-rose-500 mr-3 text-lg">✓</span> Live video verification calls</li>
                <li className="flex items-start"><span className="text-rose-500 mr-3 text-lg">✓</span> Vendor negotiation & quality checks</li>
                <li className="flex items-start"><span className="text-rose-500 mr-3 text-lg">✓</span> Direct international shipping to US</li>
              </ul>
              <Link href="/contact" className="block text-center bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
                Book Free Consultation
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-rose-200 flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">VIP NRI Experience</h3>
              <p className="text-4xl font-bold text-rose-600 mb-6">$1,499</p>
              <p className="text-stone-600 mb-6 flex-grow italic font-light">The ultimate white-glove service for the discerning bride.</p>
              <ul className="space-y-3 mb-8 text-stone-700">
                <li className="flex items-start"><span className="text-rose-400 mr-3 text-lg">✓</span> Everything in Sourcing Concierge</li>
                <li className="flex items-start"><span className="text-rose-400 mr-3 text-lg">✓</span> In-person tailor fittings in India (if visiting)</li>
                <li className="flex items-start"><span className="text-rose-400 mr-3 text-lg">✓</span> Custom alterations & premium packaging</li>
                <li className="flex items-start"><span className="text-rose-400 mr-3 text-lg">✓</span> Priority DHL Express shipping</li>
                <li className="flex items-start"><span className="text-rose-400 mr-3 text-lg">✓</span> Dedicated 24/7 WhatsApp support line</li>
              </ul>
              <Link href="/contact" className="block text-center bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-300 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold text-rose-100 mb-4">CeremonyVerse</h3>
          <p className="mb-6 font-light italic">Making NRI bridal shopping safe, seamless, and stress-free.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:hello@ceremonyverse.com" className="hover:text-rose-400 transition-colors font-light">hello@ceremonyverse.com</a>
            <span className="text-stone-600">|</span>
            <a href="https://wa.me/+1-215-341-9990" className="hover:text-rose-400 transition-colors font-light">WhatsApp Us</a>
          </div>
          <p className="text-sm text-stone-500">© {new Date().getFullYear()} CeremonyVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
