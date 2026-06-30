import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  // SEO Title Tag (max 60 chars target) — exact field per SEO brief
  title: 'Indian Wedding Shopping Concierge for NRI Brides | CeremonyVerse',
  // Meta Description (max 160 chars target) — exact field per SEO brief
  description:
    'Skip the boutique markups. Source custom bridal lehengas, sherwanis, and return gifts directly from India to the USA. Live video shopping & quality checks.',
  keywords: 'buy lehenga online USA, NRI bride shopping India, Indian bridal wear delivery to US, affordable wedding attire India, custom bridal lehenga India to USA, sherwani from India, return gifts from India, live video shopping India',
});

export default HomePage;

