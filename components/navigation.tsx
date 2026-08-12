"use client"

import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Planning", href: "/services/" },
  { label: "Destinations", href: "/destinations/" },
  { label: "Experience", href: "/about/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Our Process", href: "/how-it-works/" },
  { label: "India Sourcing", href: "/buy-indian-wedding-outfits-from-india/" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const close = () => setMobileMenuOpen(false)
  const active = (href: string) => pathname === href || pathname === href.slice(0, -1)

  return (
    <header className="cv-site-header fixed left-0 right-0 z-50 border-b border-[#ded5c7] bg-[#fffdf9]/95 backdrop-blur-md">
      <nav className="mx-auto max-w-[1500px] px-5 sm:px-8" aria-label="Main navigation">
        <div className="cv-navigation-row flex items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 flex-col" onClick={close}>
            <span className="font-serif text-2xl font-semibold uppercase tracking-[0.18em] text-[#211d19] sm:text-3xl">CEREMONY<span className="font-light text-[#80683b]">VERSE</span></span>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.24em] text-[#6b5b4d]">Destination weddings · India sourcing</span>
          </Link>

          <div className="hidden items-center gap-1 min-[1280px]:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={cn("whitespace-nowrap px-3 py-2 text-[13px] font-medium tracking-wide transition", active(item.href) ? "text-[#80683b]" : "text-[#332d28] hover:text-[#80683b]")} aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link>
            ))}
          </div>

          <Link href="/contact/" className="hidden shrink-0 rounded-full border border-[#80683b] px-6 py-3 text-sm font-semibold text-[#80683b] transition hover:bg-[#80683b] hover:!text-white min-[1280px]:inline-flex">Free Consultation</Link>

          <button className="p-2 text-[#211d19] min-[1280px]:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label="Toggle navigation menu">{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>

        {mobileMenuOpen && (
          <div className="max-h-[calc(100vh-var(--cv-announcement-height)-var(--cv-navigation-height))] overflow-y-auto border-t border-[#ded5c7] py-5 min-[1280px]:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => <Link key={item.href} href={item.href} onClick={close} className="border-b border-[#eee7dc] px-2 py-3 text-base font-medium text-[#332d28]">{item.label}</Link>)}
              <Link href="/contact/" onClick={close} className="mt-5 rounded-full bg-[#80683b] px-6 py-3 text-center text-sm font-semibold !text-white">Schedule Free Consultation</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
