import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, buildHowToSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/how-it-works/",
  title: "How CeremonyVerse Works — India to USA",
  description: "Free consultation, live video shopping in India, custom stitching, quality inspection, and delivery to your US door."
});

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Sourcing Process",
  description: "Five-step process for sourcing Indian wedding outfits from India to the USA: free consultation, style discovery, live video shopping in India, custom stitching, quality inspection, and door-to-door US delivery.",
  url: "/how-it-works/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "How It Works", url: "/how-it-works/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How long does the whole process take?",
    answer: "From consultation to delivery, the typical timeline is 8–12 weeks. Rush orders (6 weeks) are sometimes possible depending on the complexity. We recommend starting 4–6 months before your first ceremony to keep things relaxed.",
  },
  {
    question: "Can I see the outfit before paying?",
    answer: "Yes. During your live video shopping session, you see the exact outfit — fabric, color, embroidery — in real time. You approve the specific piece before any payment is collected. After stitching, we do a final video inspection with you before shipping.",
  },
  {
    question: "What if something is wrong when it arrives?",
    answer: "We handle it. If an outfit doesn't match what you approved — in color, fit, or quality — we work with our team in India to fix or replace it. Our quality inspection before shipping is designed to catch issues early, but if anything slips through, we make it right.",
  },
  {
    question: "Do you ship to all US states?",
    answer: "Yes, CeremonyVerse delivers to all US states. We have worked with clients in New Jersey, New York, Pennsylvania, Illinois, Georgia, Texas, California, and many more. All items are quality-checked in India before being shipped to your US address.",
  },
]);

const howToSchema = buildHowToSchema({
  name: "How to Source Indian Wedding Outfits from India to the USA",
  description: "Six-step process for sourcing Indian wedding outfits from India to the USA through CeremonyVerse — from free consultation to door-to-door US delivery.",
  url: "/how-it-works/",
  totalTime: "PT2H",  // ISO 8601 duration
  steps: [
    { name: "Free Consultation", text: "Tell us about your wedding: ceremonies, party size, timeline, budget. We'll tell you honestly what's achievable and which service tier fits your needs. No sales pressure." },
    { name: "Style Discovery", text: "Share your inspiration — Pinterest boards, Instagram saves, photos from weddings you loved. We work with our outfit specialists and designers in India to find pieces that match your vision, your culture, and your budget." },
    { name: "Live Video Shopping in India", text: "Join a live video call where our team in India shows you actual outfits — fabric draped, embroidery up close, color in natural light. The exact piece you approve gets reserved with your name and order number. No catalog photos. No surprises." },
    { name: "Custom Stitching to Your Measurements", text: "We guide you through a detailed measurement process on a video call. Your blouse, your silhouette, your exact fit — stitched by our local tailor partner specifically for you. Not Indian standard sizing. Your measurements." },
    { name: "Quality Inspection Before Shipping", text: "Before anything leaves India, we do a final inspection. We check the embroidery, the fabric, the stitching, the color — against what you approved. If anything is off, we fix it before it ships." },
    { name: "Delivered to Your US Door", text: "Your outfits are carefully packaged and shipped directly to your address in the United States. We handle the customs documentation and keep you updated throughout." },
  ],
});

const steps = [
  {
    number: "01",
    title: "Free Consultation (Always Free)",
    description:
      "Tell us about your wedding: ceremonies, party size, timeline, budget. We'll tell you honestly what's achievable and which service tier fits your needs — no sales pressure, no inflated promises. For example, if you're planning a 3-day Gujarati wedding with 8 bridesmaids and need everything in 10 weeks, we'll tell you exactly what's realistic and what trade-offs to consider. Most consultations last 30 minutes, and many brides tell us this single call gives them more clarity than weeks of online research.",
  },
  {
    number: "02",
    title: "Style Discovery",
    description:
      "Share your inspiration — Pinterest boards, Instagram saves, photos from weddings you loved. We work with our outfit specialists and designers in India to find pieces that match your vision, your culture, and your budget. A Punjabi bride planning a sangeet in pastel gota patti gets a different curation than a South Indian Christian bride wanting a Kanchipuram silk for the church ceremony. We don't send you a generic catalog — we curate based on your specific traditions, your body type, and what photographs well in your venue's lighting.",
  },
  {
    number: "03",
    title: "Live Video Shopping in India",
    description:
      "This is what makes CeremonyVerse different. You join a live video call where our team in India shows you actual outfits — fabric draped, embroidery up close, color in natural light. The exact piece you approve gets reserved with your name and order number. No catalog photos, no surprises. One bride in New Jersey saw three lehengas on video, picked a deep maroon with zardozi work, and watched us drape it on a mannequin to check the fall. After stitching, we did a final video inspection with her before shipping — she approved the exact blouse fit and dupatta placement before anything left India.",
  },
  {
    number: "04",
    title: "Custom Stitching to Your Measurements",
    description:
      "We guide you through a detailed measurement process on a video call — not a generic sizing chart. Your blouse, your silhouette, your exact fit, stitched by our local tailor partner specifically for you. This matters because Indian standard sizing doesn't map to US bodies — a 'medium' blouse in India is cut for a different frame. We've had brides who were told they couldn't find fitted blouses at US boutiques get a perfect fit through our measurement process. For sherwanis, we measure shoulder width, chest, arm length — the details that make the difference between 'fits okay' and 'looks like it was made for you.'",
  },
  {
    number: "05",
    title: "Quality Inspection Before Shipping",
    description:
      "Before anything leaves India, we do a final inspection. We check the embroidery, the fabric, the stitching, the color — against what you approved on video. If anything is off, we fix it before it ships. My family in Surat inspects every piece personally. They've caught color mismatches, loose threads, and wrong blouse lining before the client ever saw them. This is the layer of quality control that you don't get when you order directly from an Indian website — and it's the reason our clients don't have to deal with returns.",
  },
  {
    number: "06",
    title: "Delivered to Your US Door",
    description:
      "Your outfits are carefully packaged and shipped via DHL or FedEx directly to your address in the United States. We handle the customs documentation and keep you updated with tracking throughout. From our experience, delivery takes 3-5 business days once shipped. We include care instructions and a garment bag with every order. One bride in Texas received her bridal lehenga 6 weeks before her wedding and had time for a local press — she said the piece was even more beautiful in person than on the video call.",
  },
]

const sourceItems = [
  { title: "Bridal Lehengas", desc: "Custom bridal lehengas sourced and stitched to your exact measurements — from classic reds to pastels and contemporary silhouettes." },
  { title: "Sherwanis & Groom Outfits", desc: "Sherwanis, Indo-Western suits, and coordinated groom looks for every ceremony." },
  { title: "Bridesmaid Outfits", desc: "Coordinated lehengas, sarees, or salwar sets for your entire bridal party — all measurements managed by us." },
  { title: "Groomsmen Outfits", desc: "Matching kurta sets, Nehru jackets, or sherwanis for the groom's party." },
  { title: "Family Outfits", desc: "Coordinated outfits for both families — parents, siblings, and extended family across every ceremony." },
  { title: "Jewelry & Accessories", desc: "Bridal jewelry sets, bridesmaid accessories, and ceremonial pieces sourced from trusted artisans." },
  { title: "Ceremonial Items", desc: "Pooja thalis, kalire, coconut decorations, and ceremony-specific items sourced authentically from India." },
  { title: "Wedding Gifts", desc: "Curated gift boxes, return gifts, and trousseau items for guests and family." },
  { title: "Welcome Bags", desc: "Custom welcome bags with Indian snacks, personalized items, and cultural touches for your guests." },
  { title: "Pet Outfits", desc: "Yes, really. Matching pet outfits so your furry family member is part of the celebration too." },
]

const pricingTiers = [
  {
    name: "Free Consultation",
    price: "Free",
    description: "A no-commitment conversation about your wedding, your needs, and what's possible. Always free.",
  },
  {
    name: "Style Guide & Vendor List",
    price: "$249",
    description: "For couples sourcing 1–2 key outfits. Includes style discovery, curated vendor contacts, and measurement guidance.",
  },
  {
    name: "Guided Sourcing",
    price: "$799",
    description: "For couples sourcing outfits across multiple ceremonies. Includes multiple live video sessions, bridesmaid/groomsmen coordination, and quality inspection.",
  },
  {
    name: "Full Bridal Concierge",
    price: "$2,499",
    description: "End-to-end sourcing for your entire wedding party — every ceremony, every outfit, every family member. Dedicated coordinator, unlimited sessions, and priority shipping.",
  },
]

const faqs = [
  {
    q: "How long does the whole process take?",
    a: "From consultation to delivery, the typical timeline is 8–12 weeks. Rush orders (6 weeks) are sometimes possible depending on the complexity. We recommend starting 4–6 months before your first ceremony to keep things relaxed.",
  },
  {
    q: "Can I see the outfit before paying?",
    a: "Yes. During your live video shopping session, you see the exact outfit — fabric, color, embroidery — in real time. You approve the specific piece before any payment is collected. After stitching, we do a final video inspection with you before shipping.",
  },
  {
    q: "What if something is wrong when it arrives?",
    a: "We handle it. If an outfit doesn't match what you approved — in color, fit, or quality — we work with our team in India to fix or replace it. Our quality inspection before shipping is designed to catch issues early, but if anything slips through, we make it right.",
  },
  {
    q: "Do you also coordinate weddings in Mexico?",
    a: "Yes. In addition to outfit sourcing from India, we coordinate Indian destination weddings in Cancun and Riviera Maya, Mexico. I coordinated my own son's 4-day Indian wedding there and now connect couples with the same vetted vendors — planner, DJ, photographers, decorator, and beauty. Many couples combine both services: outfits sourced from India plus on-site Mexico coordination. Learn more about our Mexico wedding coordination.",
  },
  {
    q: "What if I only need one or two outfits, not a full wedding party?",
    a: "That's what our Style Guide and Vendor List tier ($249) is designed for. If you just need a bridal lehenga and a sherwani, we'll curate options based on your style preferences and connect you with the right vendors in Surat and Delhi. No need to commit to full concierge service. We also have a free guide on how to buy a bridal lehenga from India to the USA that walks you through the process.",
  },
]

export default function HowItWorksPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh", color: "#2f2f2f" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />
    
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "17px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7a6841",
            marginBottom: "14px",
            fontWeight: 500,
          }}
        >
          Our Process
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 600,
            color: "#1f1f1f",
            lineHeight: 1.12,
            marginBottom: "22px",
          }}
        >
          How CeremonyVerse works — from your vision to your door.
        </h1>
        <p
          style={{
                        fontSize: "17px",
            lineHeight: 1.7,
            color: "#4d403a",
            marginBottom: "32px",
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}
        >
          Six clear steps. No guesswork. You see and approve everything before it ships — because your wedding outfits are too important for surprises.
        </p>
      </section>

      {/* VIDEO PROOF — Live Video Shopping */}
      <section style={{ padding: "32px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "17px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a6841",
              marginBottom: "14px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            See It In Action
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            What a live video shopping session looks like
          </h2>
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: "14px", overflow: "hidden", background: "#1f1f1f" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p style={{ textAlign: "center", fontSize: "14px", color: "#5e4a40", marginTop: "12px" }}>
            During your live video session, you see the exact outfit — fabric, embroidery, color — and approve before any payment beyond the deposit.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "24px 24px 64px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                padding: "32px 0",
                borderBottom: i < steps.length - 1 ? "1px solid #e6dfd5" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "2.4rem",
                  fontWeight: 300,
                  color: "#7a6841",
                  lineHeight: 1,
                  minWidth: "52px",
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#1f1f1f",
                    marginBottom: "10px",
                    lineHeight: 1.25,
                  }}
                >
                  {step.title}
                </h2>
                <p
                  style={{
                                        fontSize: "17px",
                    lineHeight: 1.7,
                    color: "#4d403a",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Outcomes */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "17px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a6841",
              marginBottom: "14px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Real Outcomes
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            What this process actually looks like
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 600, color: "#7a6841", lineHeight: 1 }}>
                40-60%
              </div>
              <p style={{ fontSize: "17px", color: "#4d403a", marginTop: "8px" }}>
                Typical savings vs. US Indian boutiques — even after our service fee, shipping, and customs
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 600, color: "#7a6841", lineHeight: 1 }}>
                8-12 wk
              </div>
              <p style={{ fontSize: "17px", color: "#4d403a", marginTop: "8px" }}>
                Consultation to your door — with rush orders possible in 6 weeks for simpler pieces
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 600, color: "#7a6841", lineHeight: 1 }}>
                100%
              </div>
              <p style={{ fontSize: "17px", color: "#4d403a", marginTop: "8px" }}>
                Of clients see and approve their outfit on live video before any payment beyond the deposit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "20px" }}>
            Not sure if this process is right for you? We've helped brides from New Jersey to California
            source their entire wedding party's outfits from India. Book a free 30-minute call and
            we'll walk you through what it would look like for your specific wedding.
          </p>
          <a
            href="/contact/"
            style={{
              display: "inline-block",
              background: "#7a6841",
              color: "#fff",
              padding: "13px 30px",
              borderRadius: "999px",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Book Your Free 30-Minute Call
          </a>
        </div>
      </section>

      {/* What We Source */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "17px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a6841",
              marginBottom: "14px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Everything You Need
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            What we source
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {sourceItems.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f9f6f3",
                  borderRadius: "14px",
                  padding: "24px",
                  border: "1px solid #e6dfd5",
                }}
              >
                <h3
                  style={{
                                        fontWeight: 600,
                    fontSize: "17px",
                    color: "#1f1f1f",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                                        fontSize: "17px",
                    lineHeight: 1.6,
                    color: "#4d403a",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "17px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a6841",
              marginBottom: "14px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Simple Pricing
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            Service tiers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px 24px",
                  border: "1px solid #e6dfd5",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                                        fontSize: "17px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#7a6841",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  {tier.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "#1f1f1f",
                    marginBottom: "12px",
                  }}
                >
                  {tier.price}
                </p>
                <p
                  style={{
                                        fontSize: "17px",
                    lineHeight: 1.6,
                    color: "#4d403a",
                    marginBottom: "16px",
                  }}
                >
                  {tier.description}
                </p>
                <a
                  href={tier.name === "Free Consultation" ? "/contact" : "/contact"}
                  style={{
                    display: "inline-block",
                    background: tier.name === "Free Consultation" ? "transparent" : "#7a6841",
                    color: tier.name === "Free Consultation" ? "#7a6841" : "#fff",
                    padding: "10px 24px",
                    borderRadius: "999px",
                    fontSize: "17px",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: tier.name === "Free Consultation" ? "1px solid #7a6841" : "1px solid #7a6841",
                  }}
                >
                  {tier.name === "Free Consultation" ? "Book Free Call" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Frequently asked questions
          </h2>
          {faqs.map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3
                style={{
                                    fontWeight: 600,
                  fontSize: "17px",
                  color: "#1f1f1f",
                  marginBottom: "8px",
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                                    fontSize: "17px",
                  lineHeight: 1.6,
                  color: "#4d403a",
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#f8f6f2",
              marginBottom: "14px",
            }}
          >
            Your wedding outfits are too important for online shopping roulette.
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#e8dfd2",
              marginBottom: "28px",
            }}
          >
            Book a free 30-minute consultation. We'll review your wedding vision, tell you honestly
            what's achievable in your timeline and budget, and recommend the right service tier.
            No commitment, no pressure — just clarity. Or message us directly on WhatsApp.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contact/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#7a6841",
                color: "#fff",
                padding: "13px 30px",
                borderRadius: "999px",
                fontSize: "17px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                color: "#f8f6f2",
                padding: "13px 30px",
                borderRadius: "999px",
                fontSize: "17px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid #7a6841",
              }}
            >
              WhatsApp +1 (215) 341-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
