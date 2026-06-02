export const metadata = {
  title: 'Our Services | Ceremonyverse',
  description: 'Explore our Indian wedding sourcing services for NRI families, including bridal lehengas, groom attire, and family outfits.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Sourcing Services</h1>
        <p className="text-gray-700 text-lg mb-4">
          We provide end-to-end concierge sourcing for NRI families. From bridal lehengas to groom sherwanis, we handle the vendors, quality checks, and shipping.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-4">
           <li>Bridal & Reception Outfits</li>
           <li>Groom & Family Attire</li>
           <li>Custom Embroidery & Jewelry</li>
        </ul>
      </div>
    </main>
  )
}
