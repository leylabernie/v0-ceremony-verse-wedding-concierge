import { HomePage, HOMEPAGE_TESTIMONIALS } from '../components/pages/home-page';
import { buildMetadata, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  // SEO Title Tag (max 60 chars). Clear value prop + target keyword.
  title: 'Indian Wedding Outfits from India to USA | CeremonyVerse',
  // Meta Description. Mirrors the global description — wedding-party
  // outfitting, no Mexico coordination (Task 6).
  description:
    "We outfit entire wedding parties from India — every garment made to measure, every colour cut from a single dye lot, delivered to every door. Serving NRI families in all 50 states.",
  keywords: 'Indian wedding outfit sourcing, buy bridal lehenga from India USA, Surat lehenga direct, Delhi wedding outfits USA, wedding party outfitting, bridesmaid lehengas from India, NRI bridal concierge, live video shopping India',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

/**
 * Page-specific Review schema — only on the homepage, where the
 * testimonials actually appear as visible HTML. Per Google's policy,
 * review schema must point to visible reviews on the SAME page.
 * Do not add this to layout.tsx or any other page that does not
 * display these reviews verbatim.
 *
 * Sourced from HOMEPAGE_TESTIMONIALS — the array the homepage actually
 * renders. It previously read VISIBLE_TESTIMONIALS (lib/seo.tsx), which
 * holds four couples; after Task 12 trimmed the homepage to three, that
 * would have marked up reviews no longer visible here. Binding the
 * schema to the rendered array makes the two impossible to desync.
 */
const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CeremonyVerse Indian Wedding Sourcing & Coordination",
  url: "https://www.ceremonyverse.com/",
  review: HOMEPAGE_TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.names },
    reviewBody: t.quote,
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(HOMEPAGE_TESTIMONIALS.length),
    bestRating: "5",
    worstRating: "1",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd id="homepage-reviews-schema" data={reviewsSchema} />
      <HomePage />
    </>
  );
}
