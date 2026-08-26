"use client"

import { useState } from "react"

interface ConsultationCompletedPageProps {
  requestId: string
  token: string
}

export function ConsultationCompletedPage({ requestId, token }: ConsultationCompletedPageProps) {
  const [note, setNote] = useState("")
  const [status, setStatus] = useState<"ready" | "submitting" | "completed" | "error">("ready")
  const [error, setError] = useState("")

  async function markCompleted() {
    if (status === "submitting" || status === "completed") return

    setStatus("submitting")
    setError("")

    try {
      const response = await fetch("/api/consultation-completed/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId, token, nurtureNote: note }),
      })
      const payload = (await response.json()) as { success?: boolean; error?: string }
      if (!response.ok || !payload.success) {
        setError(payload.error || "The consultation could not be marked complete.")
        setStatus("error")
        return
      }

      setStatus("completed")
    } catch {
      setError("We could not connect to the secure completion action. Please try again.")
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 py-24 text-[#1f1f1f] sm:py-32">
      <div className="mx-auto max-w-2xl rounded-3xl border border-[#e6dfd5] bg-white p-7 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Internal CeremonyVerse action</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Mark the free consultation complete</h1>
        <p className="mt-6 leading-8 text-[#4d403a]">
          Use this only after the 30-minute consultation has actually taken place. This does not enroll anyone in planning follow-ups unless they selected the optional consent in their questionnaire.
        </p>

        {status === "completed" ? (
          <div className="mt-8 rounded-2xl border border-[#d7c7a4] bg-[#f4eee4] p-6 text-[#4d403a]">
            <p className="font-semibold text-[#1f1f1f]">Completion recorded.</p>
            <p className="mt-2 leading-7">If the couple opted in, the short follow-up sequence is now queued. Otherwise, no nurture email will be sent.</p>
          </div>
        ) : (
          <>
            <label htmlFor="nurtureNote" className="mt-8 block text-sm font-semibold text-[#1f1f1f]">
              Optional next-question note for the first follow-up
            </label>
            <textarea
              id="nurtureNote"
              rows={5}
              value={note}
              onChange={(event) => setNote(event.target.value)}
              maxLength={800}
              placeholder="For example: Ask both resorts to confirm room-block pickup and indoor sangeet backup in writing."
              className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 text-sm leading-6 text-[#1f1f1f] outline-none transition focus:border-[#7a6841] focus:ring-2 focus:ring-[#7a6841]/15"
            />
            <p className="mt-3 text-sm leading-6 text-[#6d625c]">Leave this blank if there is no single next question to carry into the automated recap.</p>

            {error ? <p className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">{error}</p> : null}

            <button
              type="button"
              onClick={markCompleted}
              disabled={status === "submitting"}
              className="mt-8 w-full rounded-full bg-[#7a6841] px-6 py-4 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-[#d9cfbf]"
            >
              {status === "submitting" ? "Recording completion…" : "Confirm consultation completed"}
            </button>
          </>
        )}
      </div>
    </main>
  )
}
