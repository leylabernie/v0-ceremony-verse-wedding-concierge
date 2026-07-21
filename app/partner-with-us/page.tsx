import { PartnerWithUsPage } from "./partner-with-us-client";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/partner-with-us",
  title: "Partner with CeremonyVerse — For India Vendors & Wedding Planners",
  description:
    "Become a verified CeremonyVerse sourcing partner. We work with skilled artisan workshops, designers, tailors, and fabric specialists across India, plus US-based wedding planners.",
});

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Partner Program",
  description:
    "Partnership opportunities for India-based artisan workshops, designers, tailors, fabric specialists, and US-based wedding planners.",
  url: "/partner-with-us/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Partner With Us", url: "/partner-with-us/" },
]);

export default function Page() {
  return (
    <>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <PartnerWithUsPage />
    </>
  );
}
