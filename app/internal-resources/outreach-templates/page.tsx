import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  path: "/internal-resources/outreach-templates/",
  title: "Internal Outreach Templates",
  description: "Internal outreach templates for community engagement.",
  noIndex: true,
});

export default function Page() {
  notFound();
}
