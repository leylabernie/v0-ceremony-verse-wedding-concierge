import { HomePage } from '../components/pages/home-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  title: 'Indian Destination Wedding Planning | CeremonyVerse',
  description:
    "Plan an Indian destination wedding in Mexico or Punta Cana with family coordination, local execution, guest logistics, calculators, and optional India sourcing.",
  image: '/images/sourcing/couple-mandap.webp',
  keywords: 'Indian wedding shopping concierge, Indian wedding outfit sourcing USA, bridal lehenga from India, Gujarati destination wedding planning, Hindu wedding Cancun, Riviera Maya Indian wedding concierge, Punta Cana Indian wedding planning, NRI bridal concierge, live video shopping India',
});

export type PageType = 'home' | 'services' | 'pricing' | 'how-it-works' | 'blog' | 'faq' | 'contact' | 'bridesmaids' | 'groom' | 'groomsmen' | 'family' | 'ceremonial' | 'jewelry' | 'pets' | 'gifts' | 'welcomebags' | 'journey';

export default function Page() {
  return <HomePage />;
}
