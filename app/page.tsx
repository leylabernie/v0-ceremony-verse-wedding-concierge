import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  title: 'Indian Wedding Shopping & Mexico Concierge | CeremonyVerse',
  description:
    "Source Indian wedding outfits from India or request private-proposal Mexico wedding planning with family, guest, arrival, and sourcing support from CeremonyVerse.",
  keywords: 'Indian wedding shopping concierge, Indian wedding outfit sourcing USA, bridal lehenga from India, Indian destination wedding Mexico, Cancun Indian wedding planning, Riviera Maya Indian wedding concierge, NRI bridal concierge, live video shopping India',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

export default function Page() {
  return <HomePage />;
}
