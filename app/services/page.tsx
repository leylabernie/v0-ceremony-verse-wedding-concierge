import Link from "next/link"

interface ServiceCardProps {
  href?: string
  image: string
  imageAlt: string
  badge?: string
  title: string
  description: string
}

function ServiceCard({ href, image, imageAlt, badge, title, description }: ServiceCardProps) {
  const content = (
    <>
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-64 object-cover block"
        loading="lazy"
      />
      <div className="p-6">
        {badge && (
          <div className="text-xs font-medium text-[#a69260] uppercase tracking-widest mb-2">{badge}</div>
        )}
        <h3 className="text-xl font-semibold mb-2 text-[#1f1f1f]">{title}</h3>
        <p className="text-[#5e4a40] text-sm leading-relaxed">{description}</p>
        {href && <p className="text-[#a69260] text-xs font-medium mt-3">Explore →</p>}
      </div>
    </>
  )

  const className = "text-left bg-white border border-[#e6dfd5] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full block"

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return <div className={className}>{content}</div>
}

export const metadata = {
  title: 'Our Services | CeremonyVerse',
  description: 'Complete wedding sourcing from India — bridal lehengas, groom sherwanis, bridesmaid outfits, jewelry, gifts, and ceremonial items. All handled for you with quality checks and reliable delivery.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">

      {/* HERO */}
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        <img
          src="/images/services-hero.png"
          alt="Indian wedding flat lay with lehenga, jewelry, marigolds and brass diya on marble"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/65" />
        <div className="relative py-20 px-6 z-10">
          <p className="text-xs font-medium tracking-widest uppercase mb-4 text-[#a69260]">Everything You Need</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">
            What We Source
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-white/85">
            Complete wedding sourcing from India — outfits, accessories, gifts, and ceremonial items — all handled for you with quality checks and reliable delivery.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <ServiceCard
            href="/services/bridal-lehengas/"
            image="/images/services-bridal-gold.jpg"
            imageAlt="Champagne gold bridal lehenga"
            title="Bridal Lehengas & Wedding Outfits"
            description="Sourced directly from India with authentic craftsmanship, full quality checks, and secure shipping to the US."
          />

          <ServiceCard
            href="/buy-sherwani-from-india-usa/"
            image="/images/services-groom.jpg"
            imageAlt="Full length ivory and gold sherwani"
            title="Groom Sherwanis & Attire"
            description="Custom sherwanis and groom outfits with verified craftsmanship, tailored fit, and inspection before delivery."
          />

          <ServiceCard
            href="/bridesmaid-and-family-outfits-from-india/"
            image="/images/services-bridesmaids.jpg"
            imageAlt="Pastel bridesmaid lehengas on rack"
            title="Bridesmaid Outfits"
            description="Coordinated lehengas in matching palettes — consistent colors, fabrics, and sizing for a cohesive wedding look."
          />

          <ServiceCard
            href="/bridesmaid-and-family-outfits-from-india/"
            image="/images/services-groomsmen.jpg"
            imageAlt="Ivory kurta sets on rack"
            badge="Popular Add-On"
            title="Groomsmen Attire"
            description="Matching kurtas and bandhgalas for the entire crew — sourced with accurate measurements alongside the groom's order."
          />

          <ServiceCard
            href="/bridesmaid-and-family-outfits-from-india/"
            image="/images/services-bridesmaids.png"
            imageAlt="Coordinated Indian family sarees"
            title="Family Wedding Outfits"
            description="Sarees, lehengas, and traditional outfits for parents, in-laws, and extended family — coordinated across colors and fabrics."
          />

          <ServiceCard
            href="/contact/"
            image="/images/services-pets.jpg"
            imageAlt="Two dogs dressed for a wedding — shih tzu in gold sherwani and maltese in teal lehenga"
            badge="Fan Favorite"
            title="Pet Outfits (Dogs & Cats)"
            description="Custom sherwanis, lehengas, and bandanas for your fur babies — matched to your wedding palette and made for comfort."
          />

          <ServiceCard
            href="/wedding-accessories-and-ceremony-items-from-india/"
            image="/images/services-jewelry-real.jpg"
            imageAlt="Authentic kundan polki bridal jewelry set with emerald green stones — sourced from India for NRI brides in USA by CeremonyVerse"
            title="Jewelry & Bridal Accessories"
            description="Bridal jewelry, accessories, and finishing pieces sourced with quality verification and attention to detail."
          />

          <ServiceCard
            href="/wedding-accessories-and-ceremony-items-from-india/"
            image="/images/services-ceremonial2.png"
            imageAlt="Mehndi ceremony with marigolds and brass diyas"
            title="Ceremonial Items & Ritual Essentials"
            description="Items needed for traditional ceremonies sourced accurately to match cultural requirements and rituals."
          />

          <ServiceCard
            href="/wedding-accessories-and-ceremony-items-from-india/"
            image="/images/services-gifts.jpg"
            imageAlt="Colourful silk potli bags in emerald, navy, burgundy and lavender in a gold ballroom"
            title="Wedding Gifts & Return Gifts"
            description="Thoughtful gift sourcing — sarees, dry fruit hampers, silver items, and curated return gifts for guests and family."
          />

          <ServiceCard
            href="/wedding-accessories-and-ceremony-items-from-india/"
            image="/images/services-welcomebags.jpg"
            imageAlt="Personalized monogram jute welcome bags"
            title="Welcome Bags & Event Details"
            description="Custom welcome bags filled with Indian sweets, herbal teas, mehndi kits, and keepsakes — a memorable first impression for out-of-town guests."
          />

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-[#1f1f1f]">
            Start Your Sourcing Process
          </h2>
          <p className="text-[#5e4a40] mb-8">
            From outfits to gifts to ceremonial details — we manage the entire sourcing process so you don't have to.
          </p>
          <Link
            href="/contact/"
            className="inline-block px-8 py-3 bg-[#a69260] text-white font-medium rounded-full
              hover:opacity-90 transition-opacity duration-300"
          >
            Book Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}
