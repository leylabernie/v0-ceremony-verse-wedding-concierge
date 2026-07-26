import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

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

export default HomePage;
