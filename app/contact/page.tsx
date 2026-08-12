import { ContactPage } from "@/components/pages/contact-page"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/contact/",
  title: "Schedule a Free 30-Minute CeremonyVerse Consultation",
  description: "Schedule a free 30-minute conversation about Gujarati or Hindu destination planning across Mexico, Jamaica, or Punta Cana, or India wedding sourcing for the USA and Canada.",
})

const serviceSchema = buildServiceSchema({
  name: "Free 30-Minute CeremonyVerse Consultation",
  description: "A free introductory conversation about the wedding timeframe, destination, guests, ceremonies, budget scope, and the appropriate next step. No payment or contract is required for the call.",
  url: "/contact/",
  category: "Destination Wedding Planning and India Wedding Sourcing Consultation",
  areaServed: ["United States", "Canada", "Mexico", "Jamaica", "Punta Cana, Dominican Republic"],
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Free Consultation", url: "/contact/" }])

export default function ContactRoute() {
  return <><JsonLd id="schema-service" data={serviceSchema} /><JsonLd id="schema-breadcrumb" data={breadcrumbSchema} /><ContactPage /></>
}
