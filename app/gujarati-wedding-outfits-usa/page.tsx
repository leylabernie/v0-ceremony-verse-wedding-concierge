import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Gujarati Wedding Outfits Sourced from India | NRI Families in USA | CeremonyVerse",
  description: "Planning a Gujarati wedding in the USA? CeremonyVerse sources authentic Gujarati bridal lehengas, chaniya cholis, sherwanis, and family outfits from India — live video shopping, custom stitching, delivered to your US door.",
  keywords: "gujarati wedding outfits usa, gujarati lehenga usa, chaniya choli from india usa, NRI gujarati wedding, gujarati bridal lehenga",
}

export default function GujaratiWeddingOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* HERO */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Gujarati Wedding Specialists
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Gujarati Wedding Outfits Sourced from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "12px", maxWidth: "600px", margin: "0 auto 12px" }}>
          A Gujarati wedding is a multi-day celebration — Garba, Mehndi, Mameru, Saptapadi — and every ceremony calls for its own outfit. We source authentic chaniya cholis, bridal lehengas, sherwanis, and coordinated family outfits directly from artisan partners in India, custom stitched to your measurements and delivered to your US door.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#8a6f63", marginBottom: "32px", maxWidth: "560px", margin: "0 auto 32px" }}>
          We have dressed Gujarati families for multi-day weddings including a destination wedding in Mexico and a trip to Kanchipuram to source pure silk sarees.
        </p>
        <a
          href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20Gujarati%20wedding%20outfits."
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
        >
          Book Free Consultation
        </a>
      </section>

      {/* CEREMONY BREAKDOWN */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Outfits for every Gujarati wedding ceremony
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", textAlign: "center", maxWidth: "620px", margin: "0 auto 32px" }}>
            Each event in a Gujarati wedding has its own outfit traditions. Here is what we source for each one.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "Garba Night",
                desc: "Garba is the heart of a Gujarati wedding — an evening of dance, color, and energy. The bride and her family traditionally wear chaniya cholis in vibrant colors with mirror work and embroidery. We source coordinated Garba outfits for the entire family so everyone matches on the dance floor.",
              },
              {
                title: "Mehndi Ceremony",
                desc: "The Mehndi is an intimate, joyful event. Brides typically wear a bright yellow, green, or floral lehenga or anarkali. We source comfortable, festive outfits perfect for sitting through henna application while looking beautiful for photos.",
              },
              {
                title: "Mameru Ceremony",
                desc: "In the Mameru, the maternal uncle gifts the bride her wedding outfit and jewelry — a deeply meaningful Gujarati tradition. We help families source the Mameru saree or outfit that the uncle will present, ensuring it is worthy of this significant ritual.",
              },
              {
                title: "Saptapadi (Wedding Day)",
                desc: "The Saptapadi — the seven steps around the sacred fire — is the main wedding ceremony. The bride wears a red or maroon bridal lehenga or saree, and the groom wears a sherwani or bandhgala. We source both with custom stitching, including matching dupattas and accessories.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANIYA CHOLI SOURCING */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Chaniya choli sourcing — the Gujarati bridal signature
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            The chaniya choli is the quintessential Gujarati outfit — a flared skirt (chaniya), fitted blouse (choli), and dupatta, typically in rich fabrics with mirror work, bandhani, or gota patti embroidery. For NRI families in the USA, finding an authentic chaniya choli that matches the quality and craftsmanship you would get in India can be difficult.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            CeremonyVerse sources chaniya cholis directly from outfit specialists in Gujarat, Rajasthan, and Mumbai. We connect you with our artisan partners via live video call so you can see fabrics, embroidery, and colors in real time before committing. Every piece is custom stitched to your exact measurements.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            Whether you need one chaniya choli for the bride or a coordinated set for ten bridesmaids, we handle the entire process — from selection to measurement collection, stitching, quality checks, and delivery to your US address.
          </p>
        </div>
      </section>

      {/* GARBA NIGHT COORDINATION */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Garba night — coordinating outfits for the entire family
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            Garba night is the event where outfit coordination matters most. The bride's side and groom's side often choose complementary color palettes — think jewel tones for one side and pastels for the other, or a shared accent color that ties the families together on the dance floor.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            We source coordinated chaniya cholis for bridesmaids, kurtas and kediyu sets for groomsmen, and age-appropriate outfits for children, parents, and grandparents. Every outfit is custom stitched and shipped together so nothing arrives mismatched or late.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            For our Gujarati clients — including families like Kaval & April, Karan & Sonal, Druma & Parin, and Swati — we have managed Garba night coordination end to end, handling dozens of outfits in a single order.
          </p>
        </div>
      </section>

      {/* MAMERU TRADITIONS */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Mameru ceremony — the outfit tradition that matters most
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            The Mameru (also called Mosalu in some families) is one of the most emotional moments in a Gujarati wedding. The bride's maternal uncle (mama) arrives with gifts — traditionally including the bride's wedding saree or outfit, jewelry, and sweets. It signifies the maternal family's blessing and support.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            For NRI families, sourcing the Mameru outfit from India adds authenticity and emotional weight to this tradition. We help the maternal uncle select and source a beautiful saree or outfit from India — often a Banarasi silk, a Patola, or a Kanchipuram silk — so the gift carries the craftsmanship and heritage of back home.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            We coordinate directly with the uncle's family to manage selection, sizing, and delivery timing so the Mameru outfit arrives before the ceremony date.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Pricing tiers
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", textAlign: "center", maxWidth: "600px", margin: "0 auto 32px" }}>
            Every outfit is sourced from India with custom stitching included. Pricing varies by fabric, embroidery complexity, and design.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "Chaniya Choli",
                range: "$250 – $1,200+",
                desc: "Depending on fabric (georgette, silk, velvet), mirror work, bandhani, or gota patti embroidery. Includes custom stitching to your measurements.",
              },
              {
                title: "Bridal Lehenga",
                range: "$800 – $3,500+",
                desc: "Full bridal lehenga with heavy embroidery, dupatta, and blouse. Custom stitched. Includes live video sessions with our artisan partners for design selection.",
              },
              {
                title: "Groom's Sherwani",
                range: "$350 – $1,500+",
                desc: "Sherwani or bandhgala with churidar or dhoti. Includes stole/dupatta and custom stitching. Can be coordinated to match the bridal outfit.",
              },
              {
                title: "Family & Bridesmaids",
                range: "$150 – $600 per outfit",
                desc: "Coordinated kurtas, sarees, chaniya cholis, or salwar sets for family members and bridal party. Volume pricing available for large groups.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "4px" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#c7b28a", marginBottom: "8px" }}>{item.range}</p>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Gujarati wedding outfit FAQ
          </h2>
          {[
            {
              q: "How far in advance should I start sourcing Gujarati wedding outfits?",
              a: "We recommend starting 6–8 months before your wedding date. This gives enough time for live video sessions, fabric selection, custom stitching, and international shipping. If you need outfits for multiple ceremonies and a large family, starting earlier is even better.",
            },
            {
              q: "Can you source outfits for all Gujarati wedding events — Garba, Mehndi, Mameru, and wedding day?",
              a: "Yes — this is exactly what we do. We manage your entire outfit calendar across all ceremonies, ensuring each outfit is appropriate for the event and coordinated with the rest of your wedding palette.",
            },
            {
              q: "Do you source Patola sarees?",
              a: "Yes. We source authentic Patola sarees from Patan, Gujarat — double ikat weaves that are among the most prized textiles in India. Patola sarees are meaningful for Gujarati families and make beautiful Mameru gifts.",
            },
            {
              q: "How does the live video shopping work?",
              a: "We connect you with our artisan partners in India via WhatsApp or Zoom video call. You see fabrics, embroidery, and colors in real time, ask questions, and make decisions together. It is the closest thing to shopping in India from your home in the USA.",
            },
            {
              q: "Can you coordinate outfits for both sides of the family?",
              a: "Absolutely. We regularly coordinate outfits for 20–40+ family members across both sides. We collect all measurements, manage color palettes, and ship everything together.",
            },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "56px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Planning a Gujarati wedding in the USA?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "28px" }}>
            Book a free consultation and tell us about your wedding ceremonies. We will walk you through exactly how we source outfits from India for every event — Garba to Saptapadi.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20planning%20a%20Gujarati%20wedding%20and%20interested%20in%20CeremonyVerse."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
            >
              WhatsApp +1 (215) 341-9990
            </a>
            <a
              href="https://ceremonyverse.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#6a5c55", textDecoration: "underline" }}
            >
              or book at ceremonyverse.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
