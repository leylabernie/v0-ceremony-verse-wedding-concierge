import { HomePage } from "../components/pages/home-page"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/",
  title: "Indian Destination Wedding Planning | CeremonyVerse",
  description: "Plan a Gujarati or Hindu destination wedding across Mexico, Jamaica, or Punta Cana with a U.S.-based family contact, local execution, guest coordination, and optional India sourcing.",
  image: "/images/proof/family-destination-baarat.webp",
  keywords: "Indian destination wedding planning, Gujarati destination wedding planner, Hindu wedding Mexico, Indian wedding Jamaica, Punta Cana Indian wedding, India wedding sourcing USA Canada",
})

export type PageType = "home" | "services" | "pricing" | "how-it-works" | "blog" | "faq" | "contact" | "bridesmaids" | "groom" | "groomsmen" | "family" | "ceremonial" | "jewelry" | "pets" | "gifts" | "welcomebags" | "journey"

export default function Page() { return <HomePage /> }
