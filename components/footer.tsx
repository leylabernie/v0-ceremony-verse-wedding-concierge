"use client"

import type { PageType } from "@/app/page"
interface FooterProps {
  onNavigate: (page: PageType) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer>

      {/* LEAD MAGNET BAR */}
      <div className="bg-[#1f1f1f] py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="tracking-[0.15em] text-xs font-medium text-[#c7b28a] mb-3 uppercase">
            Free Download
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Indian Wedding Outfit Checklist
          </h2>
          <p className="text-white/60 mb-2 text-sm max-w-lg mx-auto">
            Every outfit, every ceremony — nothing forgotten. Mehndi through Reception, with accessories, timeline, and ordering guide.
          </p>
          <p className="text-[#c7b28a] text-xs mb-8">
            Top vendors book 6–12 months out. Download now and start planning.
          </p>
          <a
            href="/wedding-outfit-checklist.pdf"
            download="CeremonyVerse-Indian-Wedding-Outfit-Checklist.pdf"
            className="inline-flex items-center gap-3 bg-[#c7b28a] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Free Checklist (PDF)
          </a>
          <p className="text-white/40 text-xs mt-4">
            No email required — instant download
          </p>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#f9f6f3] border-t border-[#e6dfd5] py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <button onClick={() => onNavigate("home")} className="text-left mb-4">
              <span className="text-xl uppercase tracking-[0.2em] font-semibold text-[#1f1f1f]">
                CEREMONY<span className="font-light text-[#c7b28a]">VERSE</span>
              </span>
              <p className="text-[10px] tracking-widest text-[#8a6f63] mt-1 uppercase">
                Indian Wedding Shopping Made Easy
              </p>
            </button>
            <p className="text-sm text-[#6a5c55] leading-relaxed">
              Helping US-based South Asian families source authentic Indian wedding outfits — directly from India, with live video shopping and delivery to your door.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/ceremonyverse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CeremonyVerse on Instagram"
                className="w-9 h-9 rounded-full border border-[#e6dfd5] flex items-center justify-center text-[#6a5c55] hover:border-[#c7b28a] hover:text-[#c7b28a] transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.pinterest.com/ceremonyverse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CeremonyVerse on Pinterest"
                className="w-9 h-9 rounded-full border border-[#e6dfd5] flex items-center justify-center text-[#6a5c55] hover:border-[#c7b28a] hover:text-[#c7b28a] transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/12153419990?text=Hi%2C%20I'm%20interested%20in%20wedding%20sourcing%20services%20from%20CeremonyVerse."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CeremonyVerse on WhatsApp"
                className="w-9 h-9 rounded-full border border-[#e6dfd5] flex items-center justify-center text-[#6a5c55] hover:border-[#25D366] hover:text-[#25D366] transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@ceremonyverse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CeremonyVerse on TikTok"
                className="w-9 h-9 rounded-full border border-[#e6dfd5] flex items-center justify-center text-[#6a5c55] hover:border-[#c7b28a] hover:text-[#c7b28a] transition"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-widest text-[#8a6f63] uppercase font-medium mb-4">Services</p>
            <ul className="space-y-2">
              {[
                { label: "Bridal Outfits", page: "bridal" as PageType },
                { label: "Groom Attire", page: "groom" as PageType },
                { label: "Bridesmaid Outfits", page: "bridesmaids" as PageType },
                { label: "Family Outfits", page: "family" as PageType },
                { label: "Jewelry & Accessories", page: "jewelry" as PageType },
                { label: "Pet Outfits", page: "pets" as PageType },
                { label: "Ceremonial Items", page: "ceremonial" as PageType },
                { label: "Gifts & Welcome Bags", page: "gifts" as PageType },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-sm text-[#6a5c55] hover:text-[#c7b28a] transition text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs tracking-widest text-[#8a6f63] uppercase font-medium mb-4">Company</p>
            <ul className="space-y-2">
              {[
                { label: "How It Works", page: "journey" as PageType },
                { label: "FAQ / Trust Center", page: "faq" as PageType },
                { label: "Blog & Guides", page: "blog" as PageType },
                { label: "Book Consultation", page: "contact" as PageType },
                { label: "Privacy Policy", page: "privacy" as PageType },
                { label: "Terms of Service", page: "terms" as PageType },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-sm text-[#6a5c55] hover:text-[#c7b28a] transition text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest text-[#8a6f63] uppercase font-medium mb-4">Get in Touch</p>
            <div className="space-y-4">
              <a
                href="https://wa.me/12153419990?text=Hi%2C%20I'm%20interested%20in%20wedding%20sourcing%20services%20from%20CeremonyVerse."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#6a5c55] hover:text-[#25D366] transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="mailto:hello@ceremonyverse.com"
                className="flex items-center gap-2 text-sm text-[#6a5c55] hover:text-[#c7b28a] transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22,7-10,7L2,7"/>
                </svg>
                hello@ceremonyverse.com
              </a>
              <a
                href="https://www.trustpilot.com/review/ceremonyverse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-4 text-xs text-[#6a5c55] hover:text-[#c7b28a] transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#c7b28a">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Review us on Trustpilot
              </a>
              <p className="text-xs text-[#8a6f63] leading-relaxed mt-3">
                Serving US-based families nationwide.<br/>
                Based in the Philadelphia area.
              </p>
            </div>
          </div>
        </div>

        {/* SEO keyword footer */}
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#e6dfd5]">
          <p className="text-[10px] text-[#b0a898] leading-relaxed text-center">
            CeremonyVerse — Indian Wedding Shopping Concierge USA &nbsp;·&nbsp;
            Bridal Lehenga from India &nbsp;·&nbsp; Custom Sherwani USA &nbsp;·&nbsp;
            Bridesmaid Outfits from India &nbsp;·&nbsp; Indian Wedding Jewelry USA &nbsp;·&nbsp;
            Welcome Bags &amp; Gifts &nbsp;·&nbsp; Ceremonial Items &nbsp;·&nbsp;
            NRI Wedding Shopping &nbsp;·&nbsp; Live Video Shopping India &nbsp;·&nbsp;
            South Asian Wedding Concierge &nbsp;·&nbsp; Serving families across the United States
          </p>
        </div>

        {/* SEO ceremony pages */}
        <div className="max-w-6xl mx-auto mb-8 pt-6 border-t border-[#e6dfd5]">
          <p className="text-xs text-[#8a6f63] mb-3 font-medium uppercase tracking-widest">Ceremony Guides</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Mehndi & Haldi Outfits", href: "/mehndi-outfits-usa" },
              { label: "Sangeet Night Outfits", href: "/sangeet-outfits-usa" },
              { label: "Baraat Outfits", href: "/baraat-outfits-usa" },
              { label: "Bridal Lehenga Sourcing", href: "/services/bridal-lehengas" },
              { label: "Intercultural Weddings", href: "/services/intercultural-indian-weddings" },
              { label: "Shop from India", href: "/shop-from-india" },
              { label: "Buy Bridal Lehenga USA", href: "/buy-bridal-lehenga-from-india-usa" },
              { label: "Buy Sherwani USA", href: "/buy-sherwani-from-india-usa" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-[#8a6f63] hover:text-[#c7b28a] transition">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-[#e6dfd5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a6f63]">
          <p>© {new Date().getFullYear()} CeremonyVerse. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate("privacy")} className="hover:text-[#c7b28a] transition">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => onNavigate("terms")} className="hover:text-[#c7b28a] transition">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

    </footer>
  )
}
