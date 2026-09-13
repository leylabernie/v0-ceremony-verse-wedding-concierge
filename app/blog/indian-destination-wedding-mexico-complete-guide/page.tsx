import { EditorialGuide } from "@/components/editorial-guide"
import { mexicoCompleteGuide } from "@/lib/mexico-complete-guide"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({path:mexicoCompleteGuide.path,title:mexicoCompleteGuide.title,description:mexicoCompleteGuide.description,publishedTime:mexicoCompleteGuide.published,modifiedTime:mexicoCompleteGuide.modified,ogType:"article"})
export default function MexicoCompleteGuidePage(){return <EditorialGuide data={mexicoCompleteGuide} />}
