"use client"

import { useState } from "react"

export function NurturePreferencesPage({ requestId, token }: { requestId: string; token: string }) {
  const [status, setStatus] = useState<"ready" | "submitting" | "done" | "error">("ready")
  const [error, setError] = useState("")

  async function stopFollowUps() {
    setStatus("submitting")
    setError("")
    try {
      const response = await fetch("/api/nurture-preferences/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId, token }),
      })
      const payload = (await response.json()) as { success?: boolean; error?: string }
      if (!response.ok || !payload.success) {
        setError(payload.error || "We could not update your preference.")
        setStatus("error")
        return
      }
      setStatus("done")
    } catch {
      setError("We could not connect to update your preference. Please try again.")
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 py-24 text-[#1f1f1f] sm:py-32">
      <div className="mx-auto max-w-xl rounded-3xl border border-[#e6dfd5] bg-white p-7 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">CeremonyVerse preferences</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight">Stop planning follow-ups</h1>
        {status === "done" ? (
          <p className="mt-6 rounded-2xl border border-[#d7c7a4] bg-[#f4eee4] p-6 leading-7 text-[#4d403a]">Your optional CeremonyVerse planning follow-ups have been stopped. You can still use the free Decision Map whenever you wish.</p>
        ) : (
          <>
            <p className="mt-6 leading-8 text-[#4d403a]">This stops the optional post-consultation planning emails connected to this request. It does not change operational messages related to any active service you separately choose.</p>
            {error ? <p className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">{error}</p> : null}
            <button type="button" onClick={stopFollowUps} disabled={status === "submitting"} className="mt-8 w-full rounded-full border border-[#7a6841] px-6 py-4 text-sm font-semibold text-[#7a6841] transition disabled:cursor-not-allowed disabled:border-[#d9cfbf] disabled:text-[#9a948d]">
              {status === "submitting" ? "Updating preference…" : "Stop follow-ups"}
            </button>
          </>
        )}
      </div>
    </main>
  )
}
