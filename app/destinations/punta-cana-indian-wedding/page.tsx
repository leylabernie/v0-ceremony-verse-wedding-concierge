import { DestinationLandingPage } from "@/components/destination-landing-page"
import { destinationPages } from "@/lib/destination-pages"
import { buildMetadata } from "@/lib/seo"

const data = destinationPages.puntaCana

export const metadata = buildMetadata({
  path: data.slug,
  title: "Indian Destination Wedding Punta Cana",
  description: data.description,
  image: "/images/sourcing/couple-mandap.webp",
})

export default function PuntaCanaIndianWeddingPage() {
  return <DestinationLandingPage data={data} />
}
