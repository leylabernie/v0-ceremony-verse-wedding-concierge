import { HomePage } from '../components/pages/home-page';
import { buildMetadata, JsonLd, VISIBLE_TESTIMONIALS } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  // SEO Title Tag (max 60 chars target)
  title: 'Indian Wedding Outfits from India & Mexico Planning',
  // Meta Description (max 160 chars target)
  description:
    "Source Indian wedding outfits direct from Surat & Delhi — same handwork as US boutiques, half the price. Mexico wedding coordination in Cancun & Riviera Maya.",
  keywords: 'Indian wedding outfit sourcing, Surat lehenga direct, Delhi wedding outfits USA, Mexico Indian wedding coordination, Cancun Indian wedding, NRI bridal concierge, live video shopping India, skip boutique markup',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

/**
 * Page-specific Review schema — only on the homepage, where the
 * testimonials actually appear as visible HTML. Per Google's policy,
 * review schema must point to visible reviews on the SAME page.
 * Do not add this to layout.tsx or any other page that does not
 * display these reviews verbatim.
 */
const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CeremonyVerse Indian Wedding Sourcing & Coordination",
  url: "https://www.ceremonyverse.com/",
  review: VISIBLE_TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.couple },
    reviewBody: t.body,
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(VISIBLE_TESTIMONIALS.length),
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
