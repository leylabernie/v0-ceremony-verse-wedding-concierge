import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "South Indian Christian Wedding Outfits Sourced from India | NRI Families in USA | CeremonyVerse",
  description: "Planning a South Indian Christian wedding in the USA? CeremonyVerse sources authentic Kerala Christian, Tamil Christian wedding outfits, sarees, and bridal wear from India — delivered to your US door.",
  keywords: "south indian christian wedding outfits usa, kerala christian wedding saree usa, NRI south indian christian wedding, tamil christian bride outfit, south indian bridal saree usa",
}

export default function SouthIndianChristianWeddingOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* HERO */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          South Indian Christian Wedding Specialists
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          South Indian Christian Wedding Outfits Sourced from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "12px", maxWidth: "600px", margin: "0 auto 12px" }}>
          South Indian Christian weddings blend deep-rooted Indian traditions with Christian ceremony — and the outfits reflect that unique identity. We source authentic Kerala Christian and Tamil Christian wedding sarees, bridal wear, set mundus, and family outfits directly from artisan partners in India, delivered to your US door.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#8a6f63", marginBottom: "32px", maxWidth: "560px", margin: "0 auto 32px" }}>
          We have dressed South Indian Christian families in Philadelphia — Charly & Viola, Dhan & Christina, Shincy — understanding exactly what each ceremony calls for.
        </p>
        <a
          href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20South%20Indian%20Christian%20wedding%20outfits."
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
        >
          Book Free Consultation
        </a>
      </section>

      {/* WHAT MAKES THEM DISTINCT */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What makes South Indian Christian weddings distinct
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            South Indian Christian weddings are a beautiful blend of church ceremony and Indian celebration. The bride often wears a white or cream saree — sometimes a kasavu saree with a gold border — for the church ceremony, reflecting both Christian tradition and Kerala or Tamil heritage. The groom may wear a white set mundu (the traditional Kerala dhoti and shirt) or a formal suit.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            The reception is where color comes alive. Brides change into vibrant silk sarees — often Kanchipuram silk in rich reds, magentas, or golds — and families dress in coordinated Indian attire. It is this shift from the solemnity of the church to the joy of the reception that makes South Indian Christian weddings so visually striking.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            For NRI families, getting these outfits right — especially the kasavu saree, the set mundu, and Kanchipuram silks — requires sourcing from the right places in India. That is exactly what we do.
          </p>
        </div>
      </section>

      {/* CEREMONY OUTFITS */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            What we source for each ceremony
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", textAlign: "center", maxWidth: "620px", margin: "0 auto 32px" }}>
            South Indian Christian weddings typically have two main events — the church ceremony and the reception — each with distinct outfit requirements.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "Church Ceremony — Bride",
                desc: "A white or cream kasavu saree with gold border, or a white Christian bridal saree with subtle embroidery. Some brides opt for a white gown. We source traditional kasavu sarees from Kerala weavers for an authentic look.",
              },
              {
                title: "Church Ceremony — Groom",
                desc: "A crisp white set mundu (mundu and shirt) is the traditional choice for Kerala Christian grooms. We also source formal bandhgala or suit options for grooms who prefer a tailored look.",
              },
              {
                title: "Reception — Bride",
                desc: "This is where the bride transforms — a rich Kanchipuram silk saree in red, magenta, gold, or jewel tones. We source pure silk sarees directly from Kanchipuram, hand-selected for quality and authenticity.",
              },
              {
                title: "Reception — Groom",
                desc: "A formal suit, bandhgala, or a colored set mundu for the reception. We coordinate the groom's outfit with the bride's reception saree for a cohesive look.",
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

      {/* KERALA VS TAMIL CHRISTIAN */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Kerala Christian vs Tamil Christian traditions
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            While both communities share Christian faith and South Indian roots, there are subtle differences in wedding outfit traditions. Kerala Christian brides — including Syrian Christian, Latin Catholic, and Marthoma families — often wear the iconic kasavu saree (cream with gold border) for the church ceremony. The set mundu is central to the groom's attire.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            Tamil Christian brides may lean toward a white or pastel silk saree for the church, with Kanchipuram silk being a popular choice for the reception. Tamil Christian weddings often incorporate the thali (mangalsutra) tying ceremony within the church service, and the bride's reception saree is typically a showstopper — heavily embroidered or a classic Kanchipuram with rich zari work.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            We understand these nuances because we have worked with families from both traditions. Whether you need a kasavu saree from Thrissur or a Kanchipuram silk from Tamil Nadu, we source from the right region.
          </p>
        </div>
      </section>

      {/* BRIDESMAIDS COORDINATION */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Bridesmaids coordination — sarees, half-sarees, and churidars
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            Coordinating bridesmaid outfits is one of the most common requests we receive from South Indian Christian families. Bridesmaids may wear matching sarees, half-sarees (langa voni), or churidar sets — depending on the family's preference and the formality of the event.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            For the church ceremony, bridesmaids often wear coordinated pastel or white-and-gold sarees. For the reception, they shift to brighter, more celebratory colors — often complementing the bride's silk saree.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            We collect all measurements, source matching fabrics, arrange custom stitching for blouses or churidar tops, and ship everything together. No one in the bridal party has to worry about sourcing on their own.
          </p>
        </div>
      </section>

      {/* KANCHIPURAM FOR FAMILY */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Kanchipuram silk for family members
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            In South Indian Christian weddings, Kanchipuram silk sarees are not just for the bride — mothers, aunts, grandmothers, and sisters all wear silk sarees for the reception. It is a statement of family pride and celebration.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "18px" }}>
            We travel to Kanchipuram to hand-select pure silk sarees from verified weavers. Every saree is Silk Mark certified — the Government of India's guarantee of authentic silk. We source sarees in coordinated colors so the entire family looks unified without being identical.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            For Shilpa's family, we sourced a full collection of Kanchipuram silks for the reception — each saree selected to complement the bride's outfit while giving every family member her own distinct look.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Pricing tiers
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", textAlign: "center", maxWidth: "600px", margin: "0 auto 32px" }}>
            Every outfit is sourced from India with custom stitching included where applicable. Pricing varies by fabric, embroidery, and design complexity.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "Kasavu / Church Saree",
                range: "$120 – $450+",
                desc: "Traditional Kerala kasavu saree with gold border for the church ceremony. Includes blouse stitching to your measurements. Premium handloom options available.",
              },
              {
                title: "Kanchipuram Silk Saree",
                range: "$150 – $800+",
                desc: "Pure silk sarees sourced from Kanchipuram for the reception. Price depends on silk weight, zari work, and design. Blouse stitching included.",
              },
              {
                title: "Set Mundu (Groom)",
                range: "$80 – $300+",
                desc: "Traditional Kerala set mundu — white mundu with gold or colored border, matching shirt. Premium handloom options available for the groom.",
              },
              {
                title: "Bridesmaids & Family",
                range: "$100 – $500 per outfit",
                desc: "Coordinated sarees, half-sarees, or churidar sets for bridesmaids and family members. Volume pricing available for large groups. Custom stitching included.",
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
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            South Indian Christian wedding outfit FAQ
          </h2>
          {[
            {
              q: "Do I need different outfits for the church ceremony and reception?",
              a: "Yes — most South Indian Christian brides wear a white or cream saree (or gown) for the church ceremony and change into a colorful silk saree for the reception. We source outfits for both events.",
            },
            {
              q: "Can you source an authentic kasavu saree from Kerala?",
              a: "Absolutely. We source kasavu sarees from handloom weavers in Kerala — Thrissur and Kuthampully are known for the finest kasavu weaving. These are traditional cream-and-gold sarees that are perfect for the church ceremony.",
            },
            {
              q: "How far in advance should I order?",
              a: "We recommend starting 6–8 months before your wedding date. This allows time for live video sessions with our artisan partners, fabric selection, custom stitching, and international shipping.",
            },
            {
              q: "Can you coordinate outfits for both the bride's and groom's families?",
              a: "Yes — we regularly manage outfits for both sides of the family, including Kanchipuram silks for the reception and coordinated sets for bridesmaids. We collect all measurements and ship everything together.",
            },
            {
              q: "What if my wedding blends Kerala and Tamil Christian traditions?",
              a: "Many of our clients come from families that blend both traditions. We work with you to understand exactly what each ceremony calls for and source accordingly — whether that means a kasavu saree for the church and a Kanchipuram silk for the reception, or something entirely unique to your family.",
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
            Planning a South Indian Christian wedding in the USA?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "28px" }}>
            Book a free consultation and tell us about your wedding. We will walk you through exactly how we source outfits from India — from kasavu sarees for the church to Kanchipuram silks for the reception.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20planning%20a%20South%20Indian%20Christian%20wedding%20and%20interested%20in%20CeremonyVerse."
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
