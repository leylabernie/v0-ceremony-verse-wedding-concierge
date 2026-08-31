import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

// Design: Editorial Proof, Not Pageantry. Homepage metadata supports the same
// refined, trustworthy conversion path expressed by the page-level experience.

export const metadata = buildMetadata({
  path: '/',
  title: 'Gujarati & Hindu Destination Wedding Planner in Mexico',
  description:
    "Plan a multi-day Gujarati or Hindu destination wedding in Mexico with a clear family-facing planning path, practical decision support, and local execution defined in writing.",
  image: '/images/proof/family-destination-baarat.webp',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

export default function Page() {
  return <HomePage />;
}
