// CONTENT-ONLY UPDATE: Preserve the existing CeremonyVerse visual design; this route updates metadata only.
import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  title: 'Gujarati & Hindu Mexico Destination Wedding Planning',
  description:
    "CeremonyVerse helps U.S. and Canadian families organize multi-day Gujarati and Hindu destination weddings in Mexico and Punta Cana through one family-centered planning process, clear local roles, and optional paid India wedding-outfit sourcing.",
  image: '/images/proof/family-destination-baarat.webp',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

export default function Page() {
  return <HomePage />;
}
