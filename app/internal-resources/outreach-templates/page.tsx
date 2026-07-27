import { buildMetadata } from "@/lib/seo";
import OutreachTemplatesClient from "./outreach-templates-client";

// Server component wrapper — exports metadata so Next.js can inject proper
// noindex + canonical tags. The client component (with the "use client"
// directive and navigator.clipboard) is rendered as a child.
//
// Title is passed as a plain string (no "| CeremonyVerse" suffix) because
// layout.tsx appends " | CeremonyVerse" via its title.template.
export const metadata = buildMetadata({
  path: "/internal-resources/outreach-templates/",
  title: "Internal Outreach Templates",
  description: "Internal outreach templates for community engagement.",
  noIndex: true,
});

export default function Page() {
  return <OutreachTemplatesClient />;
}
