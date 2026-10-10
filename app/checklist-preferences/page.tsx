import { ChecklistPreferences } from '@/components/checklist-preferences'
export const metadata={title:'Checklist email preferences',robots:{index:false,follow:false}}
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}) {
 const params=await searchParams
 return <main className="mx-auto max-w-2xl px-6 py-20"><h1 className="font-serif text-4xl mb-6">Checklist email preferences</h1><p className="mb-6">Confirm your request or stop the checklist planning series below.</p><ChecklistPreferences id={String(params.id || '')} token={String(params.token || '')} action={String(params.action || '')}/></main>
}
