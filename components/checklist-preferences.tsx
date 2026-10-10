'use client'
import { useState } from 'react'
export function ChecklistPreferences({id,token,action}:{id:string;token:string;action:string}) {
 const [message,setMessage]=useState(''),[busy,setBusy]=useState(false)
 async function save() {
  setBusy(true)
  try {const response=await fetch('/api/checklist-preferences/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id,token,action})});const result=await response.json();setMessage(result.message || result.error)}
  catch {setMessage('We could not save your preference. Please try again.')}
  finally {setBusy(false)}
 }
 return <div><button disabled={busy} onClick={save} className="rounded-full bg-[#7a6841] px-6 py-3 text-white disabled:opacity-60">{busy?'Saving…':action==='unsubscribe'?'Unsubscribe from this series':'Confirm my three planning emails'}</button><p role="status" className="mt-5">{message}</p></div>
}
