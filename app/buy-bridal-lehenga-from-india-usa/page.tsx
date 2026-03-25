"use client"

import { SeoNav } from "@/components/seo-nav"

export default function BridalLehengaPage() {
  return (
    <div className="bg-[var(--cv-bg)]">
      <SeoNav />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-semibold mb-6">
            Buy Bridal Lehenga from India (Delivered to USA)
          </h1>

          <p className="text-[var(--cv-muted)] text-lg">
            Get your bridal lehenga sourced directly from skilled designers in India — with guided video shopping, quality checks, and secure delivery.
          </p>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            Why Buying Locally Isn’t Always Ideal
          </h2>

          <p className="text-[var(--cv-muted)]">
            Many US-based stores carry limited collections and higher prices due to overhead costs. You may not find the exact design, color, or craftsmanship you’re looking for.
          </p>

          <p className="text-[var(--cv-muted)]">
            Traveling to India can be time-consuming, expensive, and overwhelming without trusted guidance.
          </p>

        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            A Better Way to Buy Your Bridal Lehenga
          </h2>

          <p className="text-[var(--cv-muted)]">
            CeremonyVerse connects you directly with experienced designers and skilled makers in India. You review options through live video, compare designs, and make confident decisions without leaving home.
          </p>

          <p className="text-[var(--cv-muted)]">
            Whether you want a custom lehenga or a ready-made piece, we guide you through every step — from selection to delivery.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Live Video Shopping</h3>
            <p className="text-[var(--cv-muted)]">
              See fabrics, embroidery, and colors in real time before making a decision.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Custom & Ready Options</h3>
            <p className="text-[var(--cv-muted)]">
              Choose from ready-made designs or create outfits based on your inspiration.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Quality Checks</h3>
            <p className="text-[var(--cv-muted)]">
              Every outfit is reviewed before shipping so you know what to expect.
            </p>
          </div>

          <div className="bg-white border border-[var(--cv-border)] rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Delivery to USA</h3>
            <p className="text-[var(--cv-muted)]">
              Secure international shipping handled for you with tracking and support.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Start Your Bridal Shopping
          </h2>

          <p className="text-[var(--cv-muted)] mb-8">
            Get expert guidance and direct access to the right sources — without travel or guesswork.
          </p>

          <button className="btn-primary">
            Book Consultation
          </button>

        </div>
      </section>

    </div>
  )
}
