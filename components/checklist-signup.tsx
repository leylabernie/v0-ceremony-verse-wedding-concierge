'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CHECKLIST_CONSENT } from '@/lib/guest-checklist'
const storageKey='ceremonyverse-checklist-dismissed-until'
export function ChecklistSignup({onSuccess}:{onSuccess?:()=>void}) {
 const [email,setEmail]=useState(''),[consent,setConsent]=useState(false),[busy,setBusy]=useState(false),[message,setMessage]=useState(''),[download,setDownload]=useState('')
 async function submit(event:React.FormEvent<HTMLFormElement>) {
  event.preventDefault();setBusy(true);setMessage('')
  const data=new FormData(event.currentTarget)
  try {
   const response=await fetch('/api/guest-checklist/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,consent,website:String(data.get('website') || '')})})
   const result=await response.json()
   setMessage(result.message || result.error || 'Please try again later.')
   if (response.ok && result.success) {setDownload(result.download);onSuccess?.()}
  } catch {setMessage('We could not confirm delivery. Please try again later.')}
  finally {setBusy(false)}
 }
 if (download) return <div role="status"><p>{message}</p><a className="mt-4 inline-block font-semibold underline" href={download} download>Download the checklist</a></div>
 return <form onSubmit={submit} className="space-y-4"><div><label htmlFor="checklist-email" className="block text-sm font-semibold mb-2">Email address</label><input id="checklist-email" required type="email" maxLength={254} autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-lg border border-[#cfc5b6] bg-white px-3 py-3"/></div><div hidden aria-hidden="true"><label>Website<input name="website" autoComplete="off" tabIndex={-1}/></label></div><p className="text-xs leading-5">I’m requesting the checklist by email. CeremonyVerse uses my email to fulfil this request. <Link className="underline" href="/privacy/">Privacy notice</Link>.</p><label className="flex gap-3 text-sm leading-5"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1 shrink-0"/><span>{CHECKLIST_CONSENT} Optional; confirmation required.</span></label><button disabled={busy} className="w-full rounded-full bg-[#7a6841] px-5 py-3 font-semibold text-white disabled:opacity-60">{busy?'Sending…':'Email me the free checklist'}</button><p role="status" className="text-sm">{message}</p></form>
}
export function ChecklistPrompt() {
 const path=usePathname(),[open,setOpen]=useState(false)
 useEffect(()=>{
  if (path!=='/') return
  let eligible=false,disposed=false,requested=false
  try {if (Number(localStorage.getItem(storageKey))>Date.now()) return} catch {return}
  async function maybeShow() {
   if (!eligible || requested || window.scrollY < Math.max(250,(document.documentElement.scrollHeight-window.innerHeight)*0.35)) return
   if (document.activeElement?.matches('input,textarea,select,[contenteditable="true"]')) return
   requested=true
   try {const response=await fetch('/api/guest-checklist/');const data=await response.json();if (!disposed && data.ready) setOpen(true)} catch {/* Do not interrupt visitors when email delivery is unavailable. */}
  }
  const timer=window.setTimeout(()=>{eligible=true;void maybeShow()},45000)
  const onScroll=()=>{void maybeShow()}
  window.addEventListener('scroll',onScroll,{passive:true})
  return ()=>{disposed=true;clearTimeout(timer);window.removeEventListener('scroll',onScroll);setOpen(false)}
 },[path])
 function dismiss(days=30) {setOpen(false);try {localStorage.setItem(storageKey,String(Date.now()+days*86400000))} catch {/* Browsing continues normally. */}}
 if (!open || path!=='/') return null
 return <aside aria-label="Free guest logistics checklist" className="fixed bottom-28 right-4 z-40 max-h-[65vh] w-[calc(100%-2rem)] max-w-sm overflow-auto rounded-2xl border border-[#d8ccba] bg-[#faf8f5] p-6 text-[#302923] shadow-xl"><button onClick={()=>dismiss()} aria-label="Dismiss checklist offer" className="absolute right-3 top-2 p-2 text-xl">×</button><p className="text-xs uppercase tracking-widest text-[#7a6841]">A free family planning resource</p><h2 className="my-3 font-serif text-2xl">Keep guests, outfits & gifts on one plan.</h2><p className="mb-4 text-sm leading-6">Get the Complete Guest Logistics & Gift Coordination Checklist. Practical checkpoints, plus a reusable tracking sheet.</p><ChecklistSignup onSuccess={()=>{try {localStorage.setItem(storageKey,String(Date.now()+365*86400000))} catch {}}}/><button onClick={()=>dismiss()} className="mt-3 text-sm underline">Maybe later</button></aside>
}
