import { PlanningNextStep } from "@/components/planning-next-step"

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<PlanningNextStep /></>
}
