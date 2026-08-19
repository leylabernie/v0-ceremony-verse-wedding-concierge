import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  title: 'Gujarati & Hindu Destination Wedding Planner — Mexico & Punta Cana',
  description:
    "Plan a multi-day Gujarati or Hindu destination wedding in Mexico or Punta Cana with one family-facing coordinator and experienced local execution.",
  image: '/images/proof/family-destination-baarat.webp',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

export default function Page() {
  return <HomePage />;
}
