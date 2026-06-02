export const metadata = {
  title: 'FAQ | Ceremonyverse',
  description: 'Frequently asked questions about Indian wedding outfit sourcing for NRI families.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to the Ceremonyverse FAQ. Here you will find answers about our sourcing process, timelines, and pricing for NRI weddings.
        </p>
        <p className="text-gray-600 mt-8">
          Have more questions? <a href="/contact" className="text-blue-600 underline">Contact us here</a>.
        </p>
      </div>
    </main>
  )
}
