import { MetroPlanningPage } from '@/components/metro-planning-page'
import { metroPages } from '@/lib/metro-planning'
import { buildMetadata } from '@/lib/seo'
const data=metroPages[0]
export const metadata=buildMetadata({path:`/${data.slug}/`,title:data.title,description:data.description,authorName:'Mini'})
export default function Page() {return <MetroPlanningPage data={data}/>}
