/** Shared fields for the free, browser-based finance calculators. */
export function calculatorSchema(input: { name: string; url: string; description: string }) {
  return {
    '@context': 'https://schema.org', '@type': 'WebApplication', ...input,
    applicationCategory: 'FinanceApplication', operatingSystem: 'All', isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
}

// Extend the existing #business entity, not a second local business. The
// registrations are disclosed through the travel affiliate, not Mini personally.
export function agencyFields() {
  return {
    '@type': ['ProfessionalService', 'TravelAgency'], name: 'CeremonyVerse Destination Planning',
    description: 'Gujarati & Hindu destination wedding planning in Mexico, Jamaica and Punta Cana. Founder Bhamini “Mini” Patel draws on family weddings, not client projects: Hard Rock Hotel Cancún (2019), Generations Riviera Maya (February 2023) and Royalton (2024).',
    memberOf: { '@type': 'Organization', name: 'A.S.A.P. Cruises Inc. / OutsideAgents.com', description: 'CeremonyVerse Travel is an independent affiliate.', identifier: ['Florida Seller of Travel No. FST ST15578', 'California Seller of Travel No. 2090937-50', 'Washington UBID No. 603189022'] },
  }
}
