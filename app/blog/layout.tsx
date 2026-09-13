import { PlanningNextStep } from "@/components/planning-next-step"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<PlanningNextStep sourcing /></>
}
