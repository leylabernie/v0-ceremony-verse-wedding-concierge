import { FreeGuidesPage } from "./free-guides-client";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/free-guides",
  title: "Free NRI Bride Guides — Price Guide, Checklist, Timeline, Red Flags",
  description:
    "Free downloadable guides for NRI brides and families — India sourcing price guide, complete wedding outfit checklist, NRI planning timeline, and vendor red flags guide.",
});

const serviceSchema = buildServiceSchema({
  name: "Free NRI Bride Resource Guides",
  description:
    "Free downloadable guides: India sourcing price guide, complete wedding outfit checklist, NRI planning timeline, and vendor red flags guide.",
  url: "/free-guides/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Free Guides", url: "/free-guides/" },
]);

export default function Page() {
  return (
    <>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <FreeGuidesPage />
    </>
  );
}
