import { SchedulePage } from "@/components/pages/schedule-page";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  path: "/schedule/",
  title: "Book a free 30-minute consultation",
  description:
    "Choose an available time to discuss your wedding plans with Mini. No payment or contract.",
});
export default function Schedule() {
  return <SchedulePage />;
}
