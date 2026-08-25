import { DestinationLandingPage } from "@/components/destination-landing-page"
import { lopesanCostaBavaro } from "@/lib/resort-pages"
import { buildMetadata } from "@/lib/seo"

const data = lopesanCostaBavaro

export const metadata = buildMetadata({
  path: data.slug,
  title: "Indian Wedding at Lopesan Costa Bávaro",
  description: data.description,
  image: "/images/sourcing/couple-mandap.webp",
})

export default function LopesanCostaBavaroIndianWeddingPage() {
  return <DestinationLandingPage data={data} />
}
