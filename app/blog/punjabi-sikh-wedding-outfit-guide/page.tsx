import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer";
import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, buildBlogPostingSchema, jsonLd } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Punjabi & Sikh Wedding Outfit Guide: Every Ceremony Covered | CeremonyVerse",
  description: "Complete outfit guide for Punjabi and Sikh weddings — Roka to Reception. What to wear, what to source from India, and how NRI families coordinate it all.",
  keywords: "punjabi wedding outfit guide, sikh wedding what to wear, anand karaj bridal outfit, punjabi wedding ceremonies outfits, NRI punjabi wedding guide",
  alternates: {
    canonical: "https://www.ceremonyverse.com/blog/punjabi-sikh-wedding-outfit-guide",
  },
  openGraph: {
    title: "Punjabi & Sikh Wedding Outfit Guide: Every Ceremony Covered",
    description: "Complete outfit guide for Punjabi and Sikh weddings — Roka to Reception. What to wear, what to source from India, and how NRI families coordinate it all.",
    type: "article",
    url: "https://www.ceremonyverse.com/blog/punjabi-sikh-wedding-outfit-guide",
  
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
};

export default function PunjabiSikhWeddingOutfitGuide() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Punjabi & Sikh Wedding Outfit Guide: Every Ceremony Covered", path: "/blog/punjabi-sikh-wedding-outfit-guide" },
  ]);

  const blogSchema = buildBlogPostingSchema({
    title: "Punjabi & Sikh Wedding Outfit Guide: Every Ceremony Covered",
    description: "Complete outfit guide for Punjabi and Sikh weddings — Roka to Reception. What to wear, what to source from India, and how NRI families coordinate it all.",
    path: "/blog/punjabi-sikh-wedding-outfit-guide",
    datePublished: "2026-03-01",
    dateModified: "2026-04-23",
    image: "/images/hero-lehenga.jpg",
    keywords: ["punjabi wedding outfit guide", "sikh wedding what to wear", "anand karaj bridal outfit", "punjabi wedding ceremonies outfits"],
  });

  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <Script id="breadcrumb-schema-punjabi-sikh-wedding-outfit-guide" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <Script id="blog-schema-punjabi-sikh-wedding-outfit-guide" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogSchema) }} />
      <SeoNav />
      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#c7b28a", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · April 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            Punjabi & Sikh Wedding Outfit Guide: Every Ceremony Covered
          </h1>
          <p style={{ color: "#c7b28a", fontSize: "0.95rem", lineHeight: 1.7 }}>
            From the Roka to the Reception — what to wear at every function, how NRI families coordinate across continents, and where to source it all from India.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            A Punjabi wedding is not a single event — it is a week-long celebration of family, faith, food, and fashion that unfolds across multiple ceremonies, each with its own mood, meaning, and dress code. If you are an NRI family planning a Punjabi or Sikh wedding from the US, you already know the logistical weight of this: coordinating outfits for a bride, groom, both families, bridesmaids, and groomsmen — across different cities, different time zones, and different ceremonies — is a genuinely complex undertaking.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            And yet, when it comes together, a Punjabi wedding is one of the most visually spectacular celebrations in the world. The phulkari dupattas, the sherwani with a perfectly tied safa, the bride stepping out in her deep red anand karaj lehenga — these are images that last a lifetime.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            This guide walks you through every ceremony in a typical Punjabi or Sikh wedding, what each family member traditionally wears, and how to think about sourcing as an NRI family. Whether you are the bride, the mother of the groom, or the MOH trying to figure out what &ldquo;coordinate but don&rsquo;t match&rdquo; actually means for a Jaggo — this is for you.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Roka & Engagement
          </h2>
          <p>
            The Roka is the formal beginning — the ceremony where both families officially agree to the union and exchange gifts, sweets, and blessings. Depending on the family, it may be a small intimate gathering or a proper sit-down function with extended relatives. The engagement ceremony that follows is often more of a celebration, sometimes with a professional photographer and a full guest list.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The dress code at the Roka and engagement sits in that elegant middle space — elevated and festive, but not as heavy or elaborate as wedding-day attire. The bride typically chooses a bright salwar suit or a lighter lehenga in pink, burnt orange, coral, or red. Embellishment matters — this is not a casual function — but you are not pulling out your bridal jewelry yet. Think pearl and kundan sets, minimal stonework, an outfit that photographs beautifully but lets you move freely.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The groom traditionally wears a kurta-pajama or a bandhgala jacket with churidar — clean, refined, and coordinated in color with the bride without being too matchy. Navy, ivory, dusty rose, or cream all work well. Families on both sides typically wear salwar kameez or suits in complementary tones. There is no strict rule here, but a family that shows up coordinated always photographs better.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Chunni Ceremony
          </h2>
          <p>
            The Chunni ceremony — also called the Chunni Chadana — is one of the most meaningful pre-wedding rituals in a Punjabi wedding. The groom&rsquo;s family visits the bride&rsquo;s home and formally presents her with outfits, jewelry, accessories, and most importantly, the chunni (dupatta). This act of draping the chunni over the bride&rsquo;s head is deeply symbolic: it is the groom&rsquo;s family welcoming her into their home and their hearts.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The bride typically wears a green or pink outfit for this ceremony — these colors carry significance in Punjabi tradition, associated with prosperity, new beginnings, and celebration. The outfit is usually a salwar kameez or a lighter lehenga; the real star of the ceremony is the chunni being gifted, which the bride wears with great pride. Whatever the in-laws bring, she wears it — and that gesture of wearing the gifted outfit carries immense emotional weight for both families.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The groom&rsquo;s family dresses well for this ceremony — they are, after all, the guests of honor in a sense, presenting gifts. The bride&rsquo;s family may wear coordinated salwar kameez or suits, keeping the palette warm and festive. This ceremony is often photographed or filmed, so the attention to coordinated dressing matters more than many families initially realize.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Mehendi
          </h2>
          <p>
            The Mehendi function is the most colorful, relaxed, and joyful ceremony of the entire wedding week. This is the function where the dress code is bright, the music is loud, and the mood is celebratory. Yellows, greens, oranges, and fuchsias — this is the time for every color that might feel too bold anywhere else.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Brides typically choose a sharara set or a lighter lehenga for Mehendi — something that is gorgeous in photos but practical enough to sit in while the mehendi artist works on your hands and feet for several hours. Floral jewelry is enormously popular at Mehendi functions: fresh flower chokers, mogra-wrapped haaths, and rose petal crowns for the bride. Artificial floral jewelry in matching colors works equally well and travels more easily for NRI brides.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Bridesmaids typically coordinate in the same general palette — sunny yellows, terracotta, leafy green — without necessarily matching exactly. The mixed-bouquet effect, where each person wears a different color from the same warm family, photographs beautifully. Family members can wear anything festive and bright. This is the one function where there are truly no wrong answers, as long as you are not wearing black or showing up in something dull.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Jaggo
          </h2>
          <p>
            If you have ever been to a Punjabi wedding, you know the Jaggo. It is the night procession that happens the evening before the wedding — the groom&rsquo;s side (and sometimes the bride&rsquo;s side, separately) takes to the streets or moves through the wedding venue singing, dancing, and carrying decorated clay pots (the jaggo) balanced on their heads, lit up with little diyas. It is chaotic, loud, and absolutely electric.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Outfits for the Jaggo need to accomplish two things simultaneously: they need to be bold and eye-catching enough to belong in the procession, and they need to be comfortable enough that you can actually dance for two hours straight. Sequin kurtas, mirror-work dupattas, heavily embellished salwar suits, and statement phulkari pieces all work beautifully. Bold colors — royal blue, emerald green, deep magenta — photograph brilliantly at night events. Avoid anything with a heavy lehenga skirt that will make dancing difficult.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The bride herself sometimes participates in the Jaggo on her side, wearing a bright, sparkly outfit that is separate from her wedding lehenga. The mother of the bride carrying the jaggo on her head in a stunning embroidered suit is an image that belongs in every Punjabi wedding album.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Anand Karaj (The Wedding Ceremony)
          </h2>
          <p>
            The Anand Karaj is the heart of a Sikh wedding. Held at the Gurudwara, this ceremony involves the bride and groom circling the Guru Granth Sahib four times — the laavan — while the sacred hymns are recited. It is profoundly spiritual, deeply moving, and the moment everything else has been building toward.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The bridal outfit for the Anand Karaj is traditionally a deep red or maroon bridal lehenga — heavily embroidered, typically in zardozi, gota patti, or resham work. The dupatta is not optional here; it is ceremonially essential. During the laavan, the groom holds one end of the dupatta as they circle the Guru Granth Sahib together, so the dupatta must be a proper, substantial piece — long enough and weighted enough to carry through each pheraa with dignity. This is not the ceremony for a sheer, lightweight dupatta.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The groom wears a full-length sherwani — usually in a color that coordinates with the bride, whether that is cream with red embroidery, ivory with gold, or a deeper burgundy or navy. The safa (turban) is tied in the traditional Punjabi style and topped with a kalgi (brooch). The overall effect should be regal: this is the most formally dressed you will see a Punjabi groom.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            For the Gurudwara ceremony specifically, all guests must have their heads covered. Family members typically wear salwar kameez, suits, or sarees — with dupattas or scarves ready to cover their heads before entering the darbar. Colors should be respectful but still celebratory; bright and festive tones are perfectly appropriate. Avoid all-white, which carries associations with mourning in Punjabi tradition.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Color coordination between the bride and groom — and ideally between the immediate families — is something worth planning carefully. When the bride&rsquo;s mother and the groom&rsquo;s mother are in complementary tones, the family portraits from the Anand Karaj become truly timeless. This level of coordination requires ordering together, well in advance. See our <Link href="/blog/nri-wedding-planning-timeline" style={{ color: "#c7b28a" }}>NRI wedding planning timeline</Link> for exactly when to start.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Reception
          </h2>
          <p>
            The wedding reception is where the dress code opens up significantly. After the solemnity and tradition of the Anand Karaj, the reception is a full celebration — dinner, dancing, speeches, and a chance for the couple to dress in a way that reflects their personal style alongside their cultural identity.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Many brides choose to change into a second outfit for the reception. Popular choices include a gown-style lehenga in a deeper jewel tone (emerald, sapphire, plum), a heavily embellished saree with a contemporary blouse, or an Indo-Western outfit that nods to both aesthetics. The reception is the moment for the bride to be glamorous in a different register — less bridal-traditional, more personally expressive.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Grooms often switch into a bandhgala suit or an Indo-Western ensemble — a structured jacket with trousers, in navy or charcoal with subtle embellishment. This creates a nice visual contrast to the sherwani from earlier in the day while still feeling occasion-appropriate. Bridesmaids typically wear coordinated outfits in a single color — this is the function where a uniform look, like all six bridesmaids in the same dusty rose saree or matching sequin salwar suits, creates the most striking effect. Guests can wear anything from formal western attire to full Indian wear, and both are equally welcome at most Punjabi receptions.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Doli
          </h2>
          <p>
            The Doli is the emotional farewell — the moment the bride leaves her childhood home to begin life with her husband&rsquo;s family. For many families, it is the most tearful moment of the entire wedding. It is deeply beautiful and deeply bittersweet.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The bride traditionally wears either her wedding lehenga for the Doli or changes into a simpler, comfortable salwar suit — something she can travel in if the Doli happens after a long day. What remains consistent is the phulkari dupatta: the handwoven, geometric-embroidered dupattas that are iconic to Punjab and deeply associated with farewell ceremonies. The bride&rsquo;s family often gifts phulkari dupattas at this moment — sometimes one to the bride and one each to her sisters or the women of the household — as a lasting token of home.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            For NRI families doing a compressed wedding weekend rather than a full week of ceremonies, the Doli often happens on the same day as the Anand Karaj or the reception. Even if you are keeping it simple, make sure someone has organized the phulkari dupattas — they matter to the moment.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Coordinating the Full Wedding Party
          </h2>
          <p>
            One of the most underestimated challenges of an NRI Punjabi wedding is coordinating outfits for a large, geographically scattered family. The bride may be in New Jersey, her bridesmaids split between Toronto and California, the groom&rsquo;s mother in Texas, and all the aunties flying in from various corners of the US and Canada. Getting everyone into coordinated outfits — same dye lot, complementary fabrics, consistent embellishment level — is a real project.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            A few principles that experienced wedding planners and sourcing concierges use:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Order bridesmaids outfits together, from the same vendor, in a single batch.</strong> Color consistency across Indian fabrics — especially silks and georgettes — varies between dye lots. Two outfits ordered a month apart from the same shop can look noticeably different under event lighting.</li>
            <li><strong>Share fabric swatches before committing.</strong> If bridesmaids are purchasing their own outfits independently, insist on physical swatches being compared in person before any final orders are placed.</li>
            <li><strong>Coordinate the mothers separately from the broader family.</strong> The mothers of the bride and groom should be planned as a deliberate complementary pair — same embellishment level, contrasting but harmonious colors. If one is in a saree, the other can also wear a saree or a heavily worked suit; the key is that neither should accidentally outshine or underdress relative to the other.</li>
            <li><strong>Groomsmen in kurta-pajama are easy to coordinate.</strong> Ordering a single fabric or color from one vendor for all groomsmen is simpler than coordinating bridesmaids, since the construction is more standardized. Match the color to the groom&rsquo;s outfit family — if the groom is in ivory, groomsmen can be in soft cream or champagne.</li>
            <li><strong>Give family members a color story, not a rule.</strong> Extended family who are not part of the formal wedding party do best with a color palette directive — &ldquo;warm reds, pinks, and golds are welcome; please avoid white and black.&rdquo; Most Punjabi families already know the broad strokes; a gentle reminder is usually enough.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Where to Source Punjabi Wedding Outfits
          </h2>
          <p>
            For NRI families, sourcing is where the dream and the reality often diverge the most. Here is an honest overview of your options.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>India — the gold standard.</strong> The markets that produce the best Punjabi bridal and festive wear are in Delhi and Punjab itself. Chandni Chowk in Old Delhi is unmatched for variety and price range — you can find everything from heavily embroidered bridal lehengas to affordable sharara sets for bridesmaids, all within a few lanes of each other. Ludhiana, Phagwara, and Patiala are the heartland of phulkari work and Punjabi traditional wear — if authenticity of craft matters to you, these cities are where to go. For designer and couture pieces, South Delhi markets like Lajpat Nagar and the designer stores of Greater Kailash are the right territory.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>US boutiques — convenient but limited.</strong> Indian boutiques in Edison, NJ; Artesia (Los Angeles); and Surrey, BC have their place for last-minute additions and accessible try-ons. But the selection is a fraction of what you would find in India, the price markup is significant (outfits often run 40–70% higher than Indian market prices), and the ability to customize — different colors, altered embroidery placement, matching pieces for a full wedding party — is very limited. US boutiques are best used for urgency situations or accessories, not primary bridal and family outfits.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>A sourcing concierge — the NRI advantage.</strong> A shopping concierge gives you access to all of India&rsquo;s markets — the variety of Chandni Chowk, the authenticity of Phagwara phulkari, the embroidery specialists of Delhi — without requiring you to board a flight. Through live video shopping sessions, your concierge brings the actual garments to camera in real time, so you can see the fabric, assess the embroidery quality, compare options side by side, and make informed decisions from your couch in New Jersey. They handle negotiations, logistics, customs coordination, and the end-to-end process of getting the outfits to you in time. See our <Link href="/pricing" style={{ color: "#c7b28a" }}>pricing page</Link> for how this is structured, or browse our <Link href="/free-guides" style={{ color: "#c7b28a" }}>free guides</Link> for more planning resources.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            The right timeline for ordering from India is 4 to 6 months before the wedding for bridal pieces, and 3 to 4 months for family and bridesmaids outfits. Rushing this process is the single most common mistake NRI families make — and it is entirely avoidable with early planning. Our <Link href="/blog/nri-wedding-planning-timeline" style={{ color: "#c7b28a" }}>NRI wedding planning timeline</Link> goes deeper on exactly when to start each piece of the process.
          </p>

          {/* CTA Box */}
          <div style={{ background: "#2f2f2f", borderRadius: "8px", padding: "2rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "#f8f6f2", marginBottom: "0.75rem" }}>
              Planning a Punjabi wedding from the US?
            </p>
            <p style={{ color: "#c7b28a", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              CeremonyVerse is a US-based Indian wedding shopping concierge that specializes in sourcing bridal lehengas, family outfits, phulkari dupattas, and full wedding party wardrobes from India for NRI Punjabi and Sikh families. We do live video shopping across all of India&rsquo;s best markets, handle every logistics detail, and stay with you through every step — from the Roka outfit to the Doli dupatta.
            </p>
            <Link
              href="/punjabi-sikh-wedding-outfits-usa"
              style={{ display: "inline-block", background: "#c7b28a", color: "#2f2f2f", padding: "0.8rem 2rem", borderRadius: "4px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", letterSpacing: "0.03em" }}
            >
              See Punjabi Wedding Outfit Services
            </Link>
            <p style={{ color: "#6f6a63", fontSize: "0.85rem", marginTop: "1rem" }}>
              Or reach us on WhatsApp:{" "}
              <a
                href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20planning%20a%20Punjabi%20wedding%20and%20interested%20in%20CeremonyVerse%20services."
                style={{ color: "#c7b28a" }}
              >
                +1 (215) 341-9990
              </a>
            </p>
          </div>

          {/* Internal Links */}
          <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "#f0ebe3", borderRadius: "6px" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem", fontWeight: 600, color: "#2f2f2f", marginBottom: "0.75rem" }}>
              Related resources
            </p>
            <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.95rem" }}>
              <li><Link href="/punjabi-sikh-wedding-outfits-usa" style={{ color: "#c7b28a" }}>Punjabi & Sikh Wedding Outfit Sourcing — CeremonyVerse Services</Link></li>
              <li><Link href="/blog/nri-wedding-planning-timeline" style={{ color: "#c7b28a" }}>NRI Wedding Planning Timeline: When to Order What from India</Link></li>
              <li><Link href="/pricing" style={{ color: "#c7b28a" }}>CeremonyVerse Pricing</Link></li>
              <li><Link href="/free-guides" style={{ color: "#c7b28a" }}>Free Guides for NRI Wedding Planning</Link></li>
            </ul>
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