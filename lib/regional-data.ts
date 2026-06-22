export interface RegionalPage {
  slug: string;
  region: string;
  title: string;
  description: string;
  keywords: string;
  heroHeadline: string;
  heroSubheadline: string;
  introText: string;
  painPointsTitle: string;
  painPoints: { title: string; desc: string }[];
  howWeServeTitle: string;
  howWeServeText: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
}

export const regionalPages: RegionalPage[] = [
  {
    slug: "indian-wedding-shopping-texas",
    region: "Texas NRI Families",
    title: "Indian Wedding Shopping from India | Texas NRI Families | CeremonyVerse",
    description: "NRI bride in Texas? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits directly from India — live video shopping, custom stitching, delivered to your TX door.",
    keywords: "Indian wedding shopping Texas, NRI bride Texas, buy lehenga from India Texas, Indian wedding concierge Houston Dallas",
    heroHeadline: "Indian Wedding Shopping from India — Serving Texas NRI Families",
    heroSubheadline: "Texas is one of the fastest-growing hubs for Indian families in the US, with vibrant communities in Houston, Dallas, Plano, Sugar Land, and Frisco.",
    introText: "CeremonyVerse connects NRI families in Texas directly with India's finest craftspeople for bridal lehengas, sherwanis, and coordinated wedding outfits — custom stitched and delivered to your door.",
    painPointsTitle: "Why Texas families struggle with Indian wedding shopping",
    painPoints: [
      { title: "Sparse Local Options", desc: "While Hillcroft in Houston and parts of Irving/Plano have Indian boutiques, the selection pales compared to what's available in India. Finding the exact lehenga style, color, and embroidery you envisioned often means settling." },
      { title: "Spread-Out Communities", desc: "Texas is vast. Your bridal party might be spread across Houston, Dallas, Austin, and San Antonio. Coordinating in-person shopping trips is impractical — but CeremonyVerse manages measurements and ordering remotely." },
      { title: "High Local Prices", desc: "Indian wedding boutiques in Texas carry significant overhead. The same bridal lehenga available in Chandni Chowk or Surat for a fraction of the price gets marked up substantially once it reaches a US showroom." },
      { title: "Last-Minute India Trips", desc: "Many Texas families resort to rushed trips to India for shopping, squeezing fabric selection, measurements, and fittings into a week. The result is often compromised choices under time pressure." },
    ],
    howWeServeTitle: "How CeremonyVerse serves Texas families",
    howWeServeText: "CeremonyVerse is your personal Indian wedding concierge. We work with artisan partners across Delhi, Jaipur, Lucknow, Surat, Kanchipuram, and Kolkata to source exactly what you need. Texas families often plan grand, multi-day celebrations. We understand the scale involved — coordinating outfits for Sangeet, Haldi, Mehndi, the main ceremony, and reception across the entire family. Our concierge approach means one point of contact managing it all.",
    faqTitle: "Frequently Asked Questions for Texas NRI Brides",
    faqs: [
      { q: "How much can I save by sourcing from India vs. Texas boutiques?", a: "Most Texas NRI brides save between 30% and 50% by using CeremonyVerse. Even after shipping and our concierge fee, the total cost for a designer-quality lehenga is significantly lower than local Houston or Dallas prices." },
      { q: "Do you serve brides in smaller Texas cities like Austin or San Antonio?", a: "Absolutely. While we focus on major hubs like Houston and Dallas, we provide door-to-door delivery and virtual shopping sessions for NRI families in Austin, San Antonio, El Paso, and across the entire state of Texas." },
      { q: "How do you ensure the quality of the outfits before they ship to Texas?", a: "We have an in-person quality control team in India that inspects every outfit for fabric quality, embroidery detail, and measurement accuracy. We send you high-resolution photos and videos for final approval before the shipment leaves for Texas." },
    ]
  }
];
