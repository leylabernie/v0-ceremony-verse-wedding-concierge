import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  title: 'Indian Wedding Shopping & Destination Planning | CeremonyVerse',
  description:
    "Source Indian wedding outfits from India or request destination-wedding planning support for Gujarati and Hindu celebrations across Mexico or in Punta Cana.",
  keywords: 'Indian wedding shopping concierge, Indian wedding outfit sourcing USA, bridal lehenga from India, Gujarati destination wedding planning, Hindu wedding Cancun, Riviera Maya Indian wedding concierge, Punta Cana Indian wedding planning, NRI bridal concierge, live video shopping India',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

export default function Page() {
  return <HomePage />;
}
