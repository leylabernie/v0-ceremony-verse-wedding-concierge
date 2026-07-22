import Link from "next/link"
import Image from "next/image"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/services/",
  title: "Outfit Sourcing from India & Mexico Wedding Coordination",
  description: "Two services: outfit sourcing from Surat & Delhi (live video shopping, no boutique markup) and Mexico wedding coordination in Cancun & Riviera Maya with vetted vendors.",
  keywords: "Indian wedding sourcing services, Surat lehenga sourcing, Delhi wedding outfits, Mexico Indian wedding coordination, Cancun Indian wedding, Riviera Maya Indian wedding, NRI bridal concierge",
});

const serviceSchema = buildServiceSchema({
  name: "Indian Wedding Sourcing & Mexico Coordination Services",
  description: "Two service lines: outfit sourcing from Surat and Delhi via live video shopping with family inspection, and Mexico wedding coordination in Cancun and Riviera Maya with vetted vendors.",
  url: "/services/",
  offers: [
    { name: "Style Guide & Vendor List", price: 249, description: "Curated starting point for self-directed brides." },
    { name: "Guided Sourcing", price: 799, description: "Live video shopping sessions with families in Surat and Delhi." },
    { name: "Full Bridal Concierge", price: 2499, description: "End-to-end outfit sourcing and coordination for bride, groom, and party up to 8." },
    { name: "Mexico Vendor Network Access", price: 499, description: "Vetted planner, DJ, photographers, decorator, and beauty contacts for Cancun and Riviera Maya." },
    { name: "Mexico 4-Day Full Coordination", price: 4500, description: "Full multi-day event coordination, like a 4-day Indian wedding in Cancun or Riviera Maya." },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Services", url: "/services/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "What services does CeremonyVerse offer?",
    answer: "Two service lines. First, Indian wedding outfit sourcing from Surat and Delhi — live video shopping, family inspection before shipping, and delivery to your US door at direct pricing. Second, Mexico wedding coordination in Cancun and Riviera Maya — vetted vendors from my own son's wedding, including planner, DJ, photographers, decorator, and beauty, with optional full multi-day on-site coordination.",
  },
  {
    question: "How do I know which service I need?",
    answer: "If you need outfits — bridal lehenga, sherwani, bridesmaid lehengas, family outfits, jewelry — you want our sourcing service. If you need someone to coordinate your Mexico wedding — venue, vendors, on-site logistics — you want our Mexico coordination service. Many brides want both: outfits sourced from India and a Mexico wedding coordinated by the same team. Book a free consultation and we'll help you decide.",
  },
  {
    question: "Can you handle both outfit sourcing and Mexico coordination together?",
    answer: "Yes. This is actually one of our most popular combinations — brides who want a destination wedding in Mexico with outfits sourced direct from India. We coordinate both sides: sourcing outfits from Surat and Delhi via live video, and coordinating your Mexico event with our vetted Cancun and Riviera Maya vendors. One team, one point of contact, full coverage.",
  },
]);

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
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        {badge && (
          <div className="text-xs font-medium text-[#7a6841] uppercase tracking-widest mb-2">{badge}</div>
        )}
        <h3 className="text-xl font-semibold mb-2 text-[#1f1f1f]">{title}</h3>
        <p className="text-[#5e4a40] text-sm leading-relaxed">{description}</p>
        {href && <p className="text-[#7a6841] text-xs font-medium mt-3">Explore →</p>}
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* HERO */}
      <section className="relative text-center overflow-hidden" style={{ minHeight: "380px" }}>
        <Image
          src="/images/services-hero.webp"
          alt="Indian wedding flat lay with lehenga, jewelry, marigolds and brass diya on marble"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/65" />
        <div className="relative py-20 px-6 z-10">
          <p className="text-xs font-medium tracking-widest uppercase mb-4 text-[#7a6841]">Two Services, One Team</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">
            Outfits Sourced Direct. Mexico Weddings Coordinated.
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-white/92">
            My family has been in Surat&apos;s fabric trade for generations. I source outfits from the same places
            US boutiques do — without the markup. I also coordinated my own son&apos;s 4-day Indian wedding in Mexico,
            and now connect you with the same vetted vendors.
          </p>
        </div>
      </section>

      {/* TWO SERVICES OVERVIEW */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1: Sourcing */}
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Service One</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Outfit Sourcing from Surat &amp; Delhi
              </h2>
              <p className="text-[#4d403a] mb-4 leading-relaxed">
                Live video shopping. Family inspection before shipping. Direct pricing — no boutique markup.
                Source bridal lehengas, sherwanis, bridesmaid outfits, family outfits, and jewelry from the
                same places US Indian boutiques source from, through my family&apos;s connections in Surat and Delhi.
              </p>
              <ul className="space-y-2 text-sm text-[#4d403a] mb-6">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Live video shopping — see and pick every piece</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Family inspection before shipping</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Semi-stitched ready pieces OR custom recreation</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Delivery to your US door, all 50 states</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/pricing#sourcing"
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium"
                  style={{ background: "var(--cv-accent)", color: "#fff" }}
                >
                  See Sourcing Pricing
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border"
                  style={{ borderColor: "var(--cv-accent)", color: "#1f1f1f" }}
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Service 2: Mexico Coordination */}
            <div className="bg-white border border-[#e6dfd5] rounded-2xl p-8">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Service Two</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Mexico Wedding Coordination — Cancun &amp; Riviera Maya
              </h2>
              <p className="text-[#4d403a] mb-4 leading-relaxed">
                Vetted vendors from my own son&apos;s 4-day Indian wedding in Mexico. Planner, DJ, two photographers,
                decorator, beauty — all tested at a real Indian destination wedding. Optional full multi-day
                on-site coordination, including interfaith ceremonies.
              </p>
              <ul className="space-y-2 text-sm text-[#4d403a] mb-6">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Vetted planner (boots on ground in Mexico)</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> DJ (professional, wedding-seasoned)</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Two photographers (main + budget for mehndi/haldi)</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Decorator + beauty (Indian parlor + American HD in Mexico)</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Full 4-day coordination option (like my son&apos;s wedding)</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/pricing#mexico"
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium"
                  style={{ background: "var(--cv-accent)", color: "#fff" }}
                >
                  See Mexico Pricing
                </Link>
                <Link
                  href="/indian-wedding-coordination-mexico"
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border"
                  style={{ borderColor: "var(--cv-accent)", color: "#1f1f1f" }}
                >
                  Read My Son&apos;s Wedding Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PATHS — SOURCING */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "var(--cv-accent)" }}>
            Two Ways to Source Your Outfits
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Pick the path that fits your vision &amp; budget
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            Every bride is different. Some see a ready piece they love. Some have a specific designer reference
            they want recreated. Both paths are available — and you can mix them across your events.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path 1: Live Video Shopping */}
            <div className="bg-[#faf8f5] border border-[#e6dfd5] rounded-2xl p-8">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Path One</p>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Live Video Shopping — Ready Pieces
              </h3>
              <p className="text-[#4d403a] mb-4 leading-relaxed">
                Shop via live video call with my family in Surat and Delhi. You see actual pieces — fabric, embroidery,
                color in natural light — and pick what you want. My family inspects before shipping. Semi-stitched;
                your local tailor handles final fit.
              </p>
              <p className="text-sm font-semibold mb-2" style={{ color: "#1f1f1f" }}>Best for:</p>
              <ul className="space-y-2 text-sm text-[#4d403a] mb-4">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Brides who see something they love and want it</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Sangeet, mehndi, haldi, engagement outfits</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Bridesmaids and family outfits</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Anyone who wants direct pricing on ready pieces</li>
              </ul>
              <p className="text-sm" style={{ color: "var(--cv-accent)" }}>
                <strong>Price range:</strong> $150–$3,000+ landed, depending on handwork &amp; fabric
              </p>
            </div>

            {/* Path 2: Custom Recreation */}
            <div className="bg-[#faf8f5] border border-[#e6dfd5] rounded-2xl p-8">
              <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>Path Two</p>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Custom Recreation — Designer-Inspired
              </h3>
              <p className="text-[#4d403a] mb-4 leading-relaxed">
                Bring me a reference image — designer or otherwise — and my local boutique will recreate it.
                Typically about 85% similar to the original, at less than 50% of the designer&apos;s cost. The boutique
                has helped many brides with bridesmaid lehengas in any color and style, within their budget.
              </p>
              <p className="text-sm font-semibold mb-2" style={{ color: "#1f1f1f" }}>Best for:</p>
              <ul className="space-y-2 text-sm text-[#4d403a] mb-4">
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Brides with a specific designer reference in mind</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Coordinated bridesmaid lehengas in custom colors</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Anyone who wants a designer look without the designer price</li>
                <li className="flex gap-2"><span style={{ color: "var(--cv-accent)" }}>✓</span> Brides willing to wait for custom production</li>
              </ul>
              <p className="text-sm" style={{ color: "var(--cv-accent)" }}>
                <strong>Price range:</strong> $1,500–$3,500 custom, ~85% similar to reference
              </p>
            </div>
          </div>

          <div className="mt-8 bg-[#1f1f1f] text-white rounded-2xl p-6 text-center">
            <p className="text-sm leading-relaxed">
              <strong>Note:</strong> We don&apos;t source designer-label pieces, and we don&apos;t sell replicas or knockoffs.
              Path Two is a custom piece made for you by a skilled local boutique, inspired by a reference image you provide.
              If you want a designer-label piece, we&apos;ll tell you to buy it direct from their store.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE SOURCE — GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-4 text-center" style={{ color: "var(--cv-accent)" }}>Everything We Source</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#1f1f1f", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            From ready pieces to fully custom — all sourced direct
          </h2>
          <p className="text-center text-[#4d403a] mb-12 max-w-2xl mx-auto">
            Bridal lehengas, groom sherwanis, bridesmaid coordination, family outfits, jewelry, ceremonial items,
            gifts, welcome bags, and even pet outfits — all handled with the same direct-from-source pricing.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              href="/services/bridal-lehengas"
              image="/images/services-bridal-gold.webp"
              imageAlt="Champagne gold bridal lehenga with handwork"
              title="Bridal Lehengas &amp; Wedding Outfits"
              description="Sourced direct from Surat and Delhi with authentic handwork — zardozi, aari, gota patti, resham. Live video shopping, family inspection, and secure shipping to the US."
            />

            <ServiceCard
              href="/buy-sherwani-from-india-usa"
              image="/images/services-groom.webp"
              imageAlt="Full length ivory and gold sherwani"
              title="Groom Sherwanis &amp; Attire"
              description="Custom sherwanis and groom outfits with verified handwork, tailored fit, and inspection before delivery."
            />

            <ServiceCard
              href="/bridesmaid-and-family-outfits-from-india"
              image="/images/services-bridesmaids.webp"
              imageAlt="Pastel bridesmaid lehengas on rack"
              title="Bridesmaid Outfits"
              description="Coordinated lehengas in matching palettes — or fully custom pieces in your chosen colors and styles, made by our local boutique within your budget."
            />

            <ServiceCard
              href="/bridesmaid-and-family-outfits-from-india"
              image="/images/services-groomsmen.webp"
              imageAlt="Ivory kurta sets on rack"
              badge="Popular Add-On"
              title="Groomsmen Attire"
              description="Matching kurtas and bandhgalas for the entire crew — sourced with accurate measurements alongside the groom's order."
            />

            <ServiceCard
              href="/bridesmaid-and-family-outfits-from-india"
              image="/images/services-bridesmaids.webp"
              imageAlt="Coordinated Indian family sarees"
              title="Family Wedding Outfits"
              description="Sarees, lehengas, and traditional outfits for parents, in-laws, and extended family — coordinated across colors and fabrics."
            />

            <ServiceCard
              href="/kanchipuram-silk-sarees-usa"
              image="/images/kanchipuram-red-silk.jpg"
              imageAlt="Pure silk Kanchipuram bridal saree in deep red with gold zari border — hallmark certified, sourced direct from weavers"
              badge="I Go Myself"
              title="Kanchipuram &amp; Banaras Silk Sarees"
              description="Pure silk, hallmark-certified, real zari — I go myself to Kanchipuram and Banaras to source direct from weavers. Also art silk and semi-silk gift sarees. A saree I bought for 20k rupees direct was 56k in a Vadodara boutique — that's the markup I cut out."
            />

            <ServiceCard
              href="/contact"
              image="/images/services-pets.webp"
              imageAlt="Two dogs dressed for a wedding — shih tzu in gold sherwani and maltese in teal lehenga"
              badge="Fan Favorite"
              title="Pet Outfits (Dogs &amp; Cats)"
              description="Custom sherwanis, lehengas, and bandanas for your fur babies — matched to your wedding palette and made for comfort."
            />

            <ServiceCard
              href="/wedding-accessories-and-ceremony-items-from-india"
              image="/images/services-jewelry-real.webp"
              imageAlt="Authentic kundan polki bridal jewelry set with emerald green stones"
              title="Jewelry &amp; Bridal Accessories"
              description="Bridal jewelry, accessories, and finishing pieces sourced with quality verification and attention to detail."
            />

            <ServiceCard
              href="/wedding-accessories-and-ceremony-items-from-india"
              image="/images/services-ceremonial2.webp"
              imageAlt="Mehndi ceremony with marigolds and brass diyas"
              title="Ceremonial Items &amp; Ritual Essentials"
              description="Items needed for traditional ceremonies sourced accurately to match cultural requirements and rituals."
            />

            <ServiceCard
              href="/wedding-accessories-and-ceremony-items-from-india"
              image="/images/services-gifts.webp"
              imageAlt="Colourful silk potli bags in emerald, navy, burgundy and lavender in a gold ballroom"
              title="Wedding Gifts &amp; Return Gifts"
              description="Thoughtful gift sourcing — sarees, dry fruit hampers, silver items, and curated return gifts for guests and family."
            />

            <ServiceCard
              href="/wedding-accessories-and-ceremony-items-from-india"
              image="/images/services-welcomebags.webp"
              imageAlt="Personalized monogram jute welcome bags"
              title="Welcome Bags &amp; Event Details"
              description="Custom welcome bags filled with Indian sweets, herbal teas, mehndi kits, and keepsakes — a memorable first impression for out-of-town guests."
            />
          </div>
        </div>
      </section>

      {/* MEXICO COORDINATION DETAIL */}
      <section className="py-20 px-6" style={{ background: "#1f1f1f", color: "#f8f6f2" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-3 text-center" style={{ color: "#7a6841" }}>
            Mexico Coordination — Vetted Vendor Network
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The vendors I used for my own son&apos;s wedding
          </h2>
          <p className="text-center text-[#e8dfd2] mb-12 max-w-2xl mx-auto">
            I coordinated my own son&apos;s 4-day Indian wedding in Mexico — venue, caterer, decorators, makeup, hair,
            mehndi, priest, and church. These are the vendors I now connect you with. No resort-package markup,
            no guessing.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Mexico Planner</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Professional, boots on the ground in Cancun and Riviera Maya. Coordinates venue, permits, vendors,
                and day-of logistics. Not a resort wedding-package salesperson.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>DJ</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Professional, wedding-seasoned. Killed it at my son&apos;s sangeet. Bollywood, bhangra, fusion, and
                Western sets — not the generic resort DJ.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Photographer #1 (Main)</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Professional, wedding-seasoned. Use for the main wedding day — ceremony, portraits, reception.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Photographer #2 (Budget)</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Newer, family/portrait-focused. Use for mehndi, haldi, sangeet — saves budget for the main day.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Decorator</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Newer, does birthdays/showers/engagements. Use for mehndi and haldi decor — saves budget for the
                main ceremony florals.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#c5a059" }}>Beauty (Indian + American HD)</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Indian parlor for traditional looks some brides prefer. American HD makeup artist in Mexico —
                best in Mexico, all brides want this for the main day.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/indian-wedding-coordination-mexico"
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium"
              style={{ background: "#7a6841", color: "#fff" }}
            >
              Read My Son&apos;s Wedding Story →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-[#1f1f1f]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Start with a free consultation
          </h2>
          <p className="text-[#5e4a40] mb-8">
            Tell us your wedding vision, timeline, and budget. We&apos;ll tell you honestly what we can do —
            sourcing, Mexico coordination, or both.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#7a6841] text-white font-medium rounded-full
              hover:opacity-90 transition-opacity duration-300"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}
