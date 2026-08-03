import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  // SEO Title Tag (max 60 chars). Clear value prop + target keyword.
  title: 'Indian Wedding Outfits from India to USA | CeremonyVerse',
  // Meta Description (max 160 chars). Combines the two service lines.
  description:
    "Source Indian wedding outfits direct from Surat & Delhi — live video shopping, delivered to your US door. Mexico wedding coordination in Cancun & Riviera Maya.",
  keywords: 'Indian wedding outfit sourcing, buy bridal lehenga from India USA, Surat lehenga direct, Delhi wedding outfits USA, Mexico Indian wedding coordination, Cancun Indian wedding, NRI bridal concierge, live video shopping India, skip boutique markup',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

export default function Page() {
  return <HomePage />;
}
