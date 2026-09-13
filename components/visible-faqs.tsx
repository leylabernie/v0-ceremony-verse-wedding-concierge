type FaqSchema = { mainEntity?: { name: string; acceptedAnswer: { text: string } }[] }
export function VisibleFaqs({ schema }: { schema: object }) {
 const items = (schema as FaqSchema).mainEntity ?? []
 if (!items.length) return null
 return <section className="mx-auto my-12 max-w-4xl px-6"><h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">Frequently asked questions</h2>{items.map(item => <div key={item.name} className="mt-6 rounded-xl border border-[#d9cfbf] bg-white p-6"><h3 className="font-serif text-2xl font-semibold text-[#1f1f1f]">{item.name}</h3><p className="mt-3 leading-7 text-[#4d403a]">{item.acceptedAnswer.text}</p></div>)}</section>
}
