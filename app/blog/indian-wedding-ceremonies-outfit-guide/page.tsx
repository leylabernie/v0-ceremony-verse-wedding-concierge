"use client";

import { SeoNav } from "@/components/seo-nav";
import { SeoFooter } from "@/components/seo-footer";
import Link from "next/link";
import { buildBreadcrumbSchema, buildBlogPostingSchema, jsonLd } from "@/lib/schema";
import Script from "next/script";

export default function IndianWeddingCeremoniesOutfitGuideBlogPost() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Outfits for Every Indian Wedding Ceremony", path: "/blog/indian-wedding-ceremonies-outfit-guide" },
  ]);

  const blogSchema = buildBlogPostingSchema({
    title: "Outfits for Every Indian Wedding Ceremony: Mehndi, Sangeet, Haldi, Reception & More",
    description: "A complete outfit guide for every Indian wedding ceremony — Mehndi, Sangeet, Haldi, Baraat, Wedding, and Reception. Outfit suggestions for bride, groom, and family, color traditions by community, and budget tips for NRI families.",
    path: "/blog/indian-wedding-ceremonies-outfit-guide",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    image: "/images/hero-lehenga.jpg",
    keywords: ["Indian wedding ceremony outfits", "mehndi outfit ideas", "sangeet lehenga", "reception outfit NRI bride", "Hindu wedding ceremony dress"],
  });

  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <Script id="breadcrumb-schema-ceremonies-outfit-guide" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="blog-schema-ceremonies-outfit-guide" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogSchema) }} />
      <SeoNav />
      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#c7b28a", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · May 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            Outfits for Every Indian Wedding Ceremony: Mehndi, Sangeet, Haldi, Reception &amp; More
          </h1>
          <p style={{ color: "#c7b28a", fontSize: "0.95rem", lineHeight: 1.7 }}>
            A ceremony-by-ceremony breakdown of what to wear — for the bride, the groom, and the family — with color traditions, budget guidance, and practical tips for NRI families planning an Indian wedding in the US.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            An Indian wedding is not a single event — it is a multi-day celebration with distinct ceremonies, each with its own mood, energy, and dress code. For NRI brides and grooms planning a wedding in the US, navigating the outfit expectations for each ceremony can feel overwhelming. What do you wear to the mehndi? Is the sangeet outfit different from the reception outfit? Does the groom need a separate sherwani for every event? And what about the parents and siblings — how many outfits do they really need?
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            This guide breaks down every major ceremony in a typical Indian wedding — from the pre-wedding events to the reception — with specific outfit suggestions for the bride, groom, and key family members. We cover color traditions by community, realistic budget ranges, and practical advice for sourcing all of these outfits from India when you live in the US. If you are also wondering how many outfits you actually need, our <Link href="/blog/how-many-outfits-for-indian-wedding" style={{ color: "#c7b28a" }}>guide to Indian wedding outfit counts</Link> provides a helpful overview.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Mehndi — Color, Comfort, and Joy
          </h2>
          <p>
            The mehndi ceremony is the most relaxed and colorful pre-wedding event. It is an intimate gathering — usually women from both families — where the bride gets henna applied to her hands and feet while guests celebrate with music, dance, and snacks. The vibe is joyful, informal, and photogenic, which means your outfit should be vibrant, comfortable, and easy to manage while your hands are covered in wet henna.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Bride:</strong> The classic mehndi outfit is a bright, colorful lehenga or sharara set in green, yellow, or orange — colors that traditionally complement the henna and create stunning photographs. Many modern brides opt for a flared sharara with a cropped kurta, which is easier to sit in for hours than a full lehenga. Avoid heavy embroidery on the mehndi outfit — you will be sitting for 3 to 5 hours, and you need comfort, not weight. Light mirror work, gota-patti, or printed fabrics are ideal. Budget: $400 to $2,000.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Groom:</strong> The groom&rsquo;s mehndi outfit is typically a simple kurta-pajama or a lightweight pathani suit in a coordinating color. White, cream, or pastel kurtas work beautifully against the bride&rsquo;s colorful outfit in photographs. No heavy embellishments needed — a textured fabric or subtle embroidery is sufficient. Budget: $100 to $500.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Family:</strong> Mothers and sisters typically wear comfortable salwar kameez or anarkali suits in bright colors. The key is mobility — everyone will be dancing, and the outfits should allow free movement. Budget: $150 to $600 per outfit.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Haldi — The Sacred Yellow
          </h2>
          <p>
            The haldi ceremony involves applying a turmeric paste to the bride and groom&rsquo;s skin to bless them with a radiant glow before the wedding. It is a messy, joyful, deeply intimate ceremony — and your outfit will get stained. Plan accordingly.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Bride:</strong> Yellow is the traditional and nearly universal color for the haldi outfit, though some modern brides choose orange, mustard, or marigold shades. The outfit should be simple, inexpensive, and disposable-friendly — a plain cotton or silk lehenga, a yellow saree, or a kurta with a skirt. Do not wear anything you want to keep pristine, because turmeric stains are permanent on most fabrics. Many brides buy a simple, affordable outfit specifically for the haldi and do not plan to reuse it. Budget: $100 to $600.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Groom:</strong> A yellow or white kurta-pajama, simple and comfortable. Some grooms wear a dhoti for a more traditional look, especially in South Indian ceremonies. Budget: $50 to $300.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Family:</strong> Female family members often wear yellow sarees or salwar suits. Male family members wear white or yellow kurtas. Since everyone gets splashed with haldi, keep it simple and affordable. Budget: $50 to $300 per outfit.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Sangeet — Dance, Drama, and Glamour
          </h2>
          <p>
            The sangeet is the most glamorous pre-wedding event — an evening of choreographed dance performances, family skits, live music, and celebration. This is where you go all out on style, because the sangeet is the most photographed and Instagrammed event of the entire wedding. The outfit needs to be visually stunning and dance-ready, which means it must allow for full range of motion.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Bride:</strong> The sangeet lehenga is typically the bride&rsquo;s second most important outfit after the wedding lehenga. Popular choices include a lightweight, flared lehenga in a bold color — deep purple, emerald green, royal blue, or fuchsia — that moves beautifully during dance performances. Cape lehengas, Indo-western gowns, and pre-draped sarees are increasingly popular for sangeet because they stay in place during vigorous dancing. Avoid heavy dupattas that need constant pinning — you will be dancing, and a slipping dupatta is a disaster mid-performance. Budget: $600 to $4,000.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Groom:</strong> A bandhgala or Jodhpuri suit is the classic sangeet choice for the groom — structured, elegant, and easy to move in. Alternatively, a heavily embroidered kurta with a jacket (nehru jacket or bundi) creates a polished look. Dark colors — navy, black, deep maroon — photograph well under sangeet lighting. Budget: $200 to $1,200.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Family:</strong> This is the event where family members dress up the most during pre-wedding celebrations. Sarees, anarkali suits, and lehenga sets for women; sherwanis or kurta-jacket sets for men. Coordinated family outfits are a popular trend in 2026 — siblings wearing the same color in different styles, or parents in complementary shades. Budget: $200 to $800 per outfit.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Baraat — The Groom&rsquo;s Grand Entrance
          </h2>
          <p>
            The baraat is the groom&rsquo;s wedding procession — a celebratory parade with music, dancing, and often a decorated horse or vintage car. The groom&rsquo;s baraat outfit is his most important look of the entire wedding, and it should reflect the grandeur of the moment.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Groom:</strong> The baraat sherwani is the centerpiece. Traditional North Indian grooms wear a heavily embroidered sherwani in gold, cream, or ivory with a contrasting churidar and a decorative safa (turban). A layered pearl necklace, a brooch, and mojari shoes complete the look. South Indian grooms may wear a silk veshti (dhoti) with an angavastram for the baraat. The baraat outfit is typically the groom&rsquo;s most expensive garment. Budget: $500 to $4,000.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Baraat party (family and friends):</strong> The groom&rsquo;s family and friends should coordinate their outfits for the baraat procession — this creates a striking visual impact. Common approaches include everyone wearing the same color family (e.g., shades of ivory and gold) or the same style (e.g., all men in matching safas and kurtas). Budget: $150 to $600 per person.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Bride (during baraat):</strong> The bride typically does not appear during the baraat. She is usually inside preparing for the wedding ceremony. If you are having a first-look moment during the baraat, a simple, elegant outfit is appropriate — not your main wedding lehenga.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            The Wedding Ceremony — The Main Event
          </h2>
          <p>
            This is the moment. The wedding ceremony outfit is the most important, most photographed, and most emotionally significant outfit of the entire celebration. It is also the most governed by tradition — especially for the bride, whose wedding ceremony outfit is often expected to conform to community and family customs.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Bride:</strong> The wedding ceremony lehenga or saree is the bride&rsquo;s defining look. For North Indian Hindu brides, a red or maroon lehenga with heavy embroidery (zardozi, kundan, or gota-patti) remains the most traditional and widely expected choice. However, in 2026, many NRI brides are choosing non-traditional colors — deep pink, burgundy, coral, or even pastel — while still maintaining the grandeur and embroidery density that makes the outfit unmistakably bridal. South Indian brides wear a silk saree (typically Kanchipuram) in auspicious colors — deep red, mustard yellow, or green depending on the community. Gujarati brides often wear a panetar (white saree with red border) for the ceremony. Punjabi brides may wear a salwar kameez in a tradition called the churha ceremony. Budget: $1,500 to $10,000+.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Groom:</strong> The groom&rsquo;s ceremony outfit varies significantly by community. North Indian grooms typically wear the same sherwani from the baraat or change into a simpler outfit for the ceremony itself. Some grooms wear a dhoti-kurta for the actual puja rituals and a sherwani for the baraat. South Indian grooms wear a silk veshti and angavastram. Sikh grooms may wear a chola (traditional Sikh attire). The key is that the ceremony outfit should be respectful of religious and cultural traditions — this is not the time for experimental fashion. Budget: $300 to $3,000.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Family:</strong> Mothers of the bride and groom typically wear silk sarees in rich colors. Fathers wear formal kurtas or sherwanis. Siblings often coordinate with the bride or groom&rsquo;s color scheme. For many families, the wedding ceremony outfits are heirloom pieces — sarees passed down from mothers and grandmothers. Budget: $200 to $1,500 per person.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Reception — The Grand Celebration
          </h2>
          <p>
            The reception is the public celebration — the party where you greet hundreds of guests, cut the cake, and dance the night away. It is the most Western-influenced event in an Indian wedding, and the outfit reflects that. Reception outfits tend to be more contemporary, more glamorous, and more individual than ceremony outfits.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Bride:</strong> The reception outfit is where most NRI brides let their personal style shine. Popular choices include a heavy anarkali gown, an Indo-western lehenga with a contemporary blouse, a pre-draped saree gown, or even a fusion silhouette like a lehenga-pantsuit hybrid. The color palette is more flexible than the ceremony — pastels, jewel tones, metallics, and even black are all acceptable. The reception outfit should be comfortable enough for hours of greeting guests and dancing. Budget: $800 to $6,000.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Groom:</strong> A tuxedo or formal suit is perfectly acceptable for the reception, and many NRI grooms choose this route for its simplicity and elegance. If you want to stay in Indian attire, a bandhgala suit or a designer sherwani with minimal embroidery creates a sophisticated, modern look. Budget: $300 to $2,000.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>Family:</strong> The reception is typically the dressiest event for family members. Silk sarees, embroidered anarkali suits, and formal lehengas for women; sherwanis, suits, or tuxedos for men. This is where family members invest in their single best outfit of the wedding. Budget: $300 to $1,500 per person.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Color Traditions by Community
          </h2>
          <p>
            Color choices in Indian weddings are not just aesthetic — they carry deep cultural and religious significance. Understanding your community&rsquo;s color traditions helps you honor your heritage while still expressing your personal style.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Punjabi / Sikh:</strong> Red or maroon for the bride&rsquo;s ceremony outfit is traditional, though many Punjabi brides also wear pink or magenta. The churha (red and white bangles) is a non-negotiable tradition. Grooms wear cream or gold sherwanis with a pagri (turban).</li>
            <li><strong>Gujarati:</strong> The panetar — a white saree with a red border — is the traditional bridal saree for the ceremony. For the reception, Gujarati brides often change into a colorful lehenga or ghagra choli. Red and green are auspicious colors.</li>
            <li><strong>South Indian (Tamil, Telugu, Kannada, Malayali):</strong> Deep red, mustard yellow, and green are the auspicious colors for the bridal silk saree. Kanchipuram silk is the gold standard. White sarees with gold borders are worn for specific rituals. Grooms wear white or cream silk veshtis.</li>
            <li><strong>Marathi:</strong> The traditional bridal saree is a Paithani or Nauvari (nine-yard saree) in green or yellow with gold borders. The groom wears a dhoti-kurta with a pheta (turban).</li>
            <li><strong>Bengali:</strong> The bride wears a red Banarasi silk saree with gold zari — this is one of the most distinctive and non-negotiable bridal traditions in Indian weddings. White sarees with red borders are worn for specific rituals. The groom wears a dhoti-kurta, typically in white or cream.</li>
            <li><strong>Rajasthani:</strong> Bridal lehengas in red, maroon, or orange with heavy gota-patti or kundan work. The ghoomar dance requires a flared lehenga that creates a beautiful spinning silhouette. Grooms wear sherwanis with elaborate safas.</li>
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            If your wedding blends two different communities — as many NRI weddings do — you have the beautiful opportunity to honor both traditions. Many NRI brides wear one community&rsquo;s traditional outfit for the ceremony and the other&rsquo;s for the reception. This approach is not only culturally respectful but also gives you two stunning bridal looks.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Budget Tips — How to Afford Outfits for Every Ceremony
          </h2>
          <p>
            The most common sticker shock for NRI families planning an Indian wedding is the total outfit budget. When you add up outfits for 5 to 7 events — for the bride, groom, and immediate family — the numbers can be staggering. Here are the strategies that keep costs manageable without compromising on looking incredible.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Invest in the ceremony and reception outfits, save on pre-wedding events.</strong> The mehndi and haldi outfits are seen for a few hours and often get stained or damaged. Spend your budget on the ceremony lehenga, the reception gown, and the groom&rsquo;s baraat sherwani — the outfits that define your wedding in photographs for the rest of your life.</li>
            <li><strong>Rent for one-time events.</strong> Sangeet lehengas and reception gowns are prime candidates for rental. You wear them once, for a few hours, and they are not the culturally significant outfit of the wedding. Rental prices are typically 15 to 25% of the purchase price, which can save you $2,000 to $5,000.</li>
            <li><strong>Use the same outfit with different styling.</strong> A lehenga skirt can be paired with two different blouses and dupattas for two different events. A sherwani can be worn with a churidar for the baraat and with a dhoti for the ceremony. Smart restyling multiplies your outfit count without multiplying your budget.</li>
            <li><strong>Source directly from India.</strong> The markup on Indian wedding outfits at US boutiques is typically 100% to 300%. The same lehenga that costs $4,000 at a boutique in New Jersey can be sourced directly from the artisan in Jaipur for $1,500 to $2,000. <Link href="/buy-bridal-lehenga-from-india-usa" style={{ color: "#c7b28a" }}>Buying directly from India</Link> through a concierge service like CeremonyVerse gives you access to authentic craftsmanship at Indian market prices.</li>
            <li><strong>Bundle family outfits in a single order.</strong> When you order multiple outfits from India at the same time, you save on shipping and can negotiate better per-outfit pricing with the artisan. CeremonyVerse offers <Link href="/pricing" style={{ color: "#c7b28a" }}>bundled pricing</Link> for families ordering 5 or more outfits.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            How to Source All These Outfits from India
          </h2>
          <p>
            Sourcing outfits for 5 to 7 ceremonies — for the entire family — from another continent is a logistical challenge. Here is how NRI families do it successfully.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Start early. The wedding ceremony lehenga and the groom&rsquo;s baraat sherwani should be ordered 4 to 6 months before the wedding. Pre-wedding outfits (mehndi, haldi, sangeet) and family outfits can be ordered 2 to 3 months before the wedding. Our <Link href="/blog/indian-wedding-outfit-timeline-when-to-order" style={{ color: "#c7b28a" }}>detailed outfit timeline guide</Link> provides a month-by-month checklist.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Use live video shopping. Every outfit should be approved via live video before production begins and again before shipping. This is the only reliable way to verify quality, color accuracy, and fit when you cannot visit the shop in person. CeremonyVerse&rsquo;s <Link href="/how-it-works" style={{ color: "#c7b28a" }}>video shopping process</Link> makes this seamless — you see every outfit in real-time, ask questions, and approve with confidence.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Take our style quiz first. If you are unsure which outfits or colors to choose for each ceremony, our <Link href="/quiz" style={{ color: "#c7b28a" }}>wedding style quiz</Link> helps you define your preferences across all events — so when you start shopping, you have a clear vision for every outfit.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            The Bottom Line
          </h2>
          <p>
            An Indian wedding involves multiple ceremonies, each with its own outfit expectations. The bride typically needs 4 to 6 outfits, the groom needs 3 to 4, and each family member needs 2 to 4. That is a lot of clothing — but it does not have to be a lot of stress. Plan by ceremony, prioritize your investment on the most photographed events, rent where it makes sense, and source directly from India to access authentic craftsmanship at fair prices.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The most important thing is that you feel beautiful and confident at every ceremony. The mehndi outfit should make you want to dance. The ceremony outfit should make you feel like a bride. The reception outfit should make you feel like a star. Get those three right, and everything else falls into place.
          </p>

          {/* CTA Box */}
          <div style={{ background: "#2f2f2f", borderRadius: "8px", padding: "2rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "#f8f6f2", marginBottom: "0.75rem" }}>
              Need help choosing outfits for every ceremony?
            </p>
            <p style={{ color: "#c7b28a", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              CeremonyVerse helps NRI families plan and source outfits for every Indian wedding ceremony — from the mehndi to the reception, for the bride, groom, and the entire family. Live video shopping, artisan-direct pricing, and door-to-door delivery to the US. Tell us about your wedding, and we will help you look incredible at every event.
            </p>
            <Link
              href="/contact"
              style={{ display: "inline-block", background: "#c7b28a", color: "#2f2f2f", padding: "0.8rem 2rem", borderRadius: "4px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", letterSpacing: "0.03em" }}
            >
              Book Free Consultation
            </Link>
            <p style={{ color: "#6f6a63", fontSize: "0.85rem", marginTop: "1rem" }}>
              Or WhatsApp: <a href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20learn%20more%20about%20sourcing%20wedding%20outfits%20from%20India." style={{ color: "#c7b28a" }}>+1 (215) 341-9990</a>
            </p>
          </div>

          {/* Related Reading */}
          <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e6dfd5" }}>
            <p style={{ fontSize: "0.85rem", color: "#6f6a63", marginBottom: "0.5rem" }}>
              <strong>Continue reading:</strong>
            </p>
            <p style={{ fontSize: "0.85rem", color: "#6f6a63", lineHeight: 1.7 }}>
              <Link href="/blog/how-many-outfits-for-indian-wedding" style={{ color: "#c7b28a" }}>How Many Outfits Do You Need for an Indian Wedding?</Link> ·{" "}
              <Link href="/blog/bridal-lehenga-styles-trends-2026" style={{ color: "#c7b28a" }}>Bridal Lehenga Styles &amp; Trends for 2026</Link> ·{" "}
              <Link href="/blog/custom-vs-readymade-indian-wedding-outfits" style={{ color: "#c7b28a" }}>Custom vs Readymade Indian Wedding Outfits</Link> ·{" "}
              <Link href="/blog/gujarati-wedding-outfit-guide" style={{ color: "#c7b28a" }}>Gujarati Wedding Outfit Guide</Link> ·{" "}
              <Link href="/free-guides" style={{ color: "#c7b28a" }}>Free Wedding Planning Guides</Link>
            </p>
          </div>

        </div>

        {/* Back to blog */}
        <div style={{ marginTop: "3rem" }}>
          <Link href="/" style={{ color: "#c7b28a", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Back to CeremonyVerse
          </Link>
        </div>
      </article>
    <SeoFooter />
    </main>
  );
}
