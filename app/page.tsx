import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  title: 'Indian Wedding Shopping & Mexico Planning | CeremonyVerse',
  description:
    "Source Indian wedding outfits and essentials from India or plan an Indian destination wedding in Cancun and Riviera Maya with CeremonyVerse.",
  keywords: 'Indian wedding shopping concierge, Indian wedding outfit sourcing USA, bridal lehenga from India, Indian destination wedding Mexico, Cancun Indian wedding planner, Riviera Maya Indian wedding, NRI bridal concierge, live video shopping India',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

export default function Page() {
  return <HomePage />;
}
