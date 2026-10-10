import { escapeHtml } from "@/lib/consultation-email"

export const decisionQuestions = [
  "Is this the complete cost?",
  "Will the guest plan hold?",
  "Can each cultural event actually happen here?",
  "Who is responsible during wedding week?",
  "What must be written before we say yes?",
] as const

function resultLines(value: unknown, label = "", depth = 0): string[] {
  if (depth > 8) return [label + ": See the saved worksheet for additional detail."]
  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([key, entry]) => {
      const heading = key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]/g, " ")
      return resultLines(entry, label ? `${label} / ${heading}` : heading, depth + 1)
    })
  }
  return [`${label || "Result"}: ${value === null || value === undefined ? "Not entered" : String(value)}`]
}

export function buildCalculatorResultsEmail(lead: { name: string; calculatorType: string; results?: unknown }) {
  const name = lead.name.trim().split(/\s+/)[0] || "there"
  const tool = lead.calculatorType.replace(/[_-]/g, " ") || "planning worksheet"
  const lines = lead.results === undefined ? ["No results were entered."] : resultLines(lead.results)
  const guide = "https://www.ceremonyverse.com/before-signing-indian-wedding-resort-proposal/"
  const questions = decisionQuestions.map((question, i) => `${i + 1}. ${question}`).join("\n")
  return {
    subject: "Your CeremonyVerse results + the 5 Decision Questions",
    text: `Hi ${name},\n\nHere is your ${tool} snapshot:\n\n${lines.join("\n")}\n\nThese are planning estimates based on your entries, not resort quotes or confirmed prices.\n\nThe 5 Decision Questions\n${questions}\n\nRead the guide: ${guide}\n\nFor help with your next decision, reply to this email.\n\nMini\nCeremonyVerse\nbhamini@ceremonyverse.com`,
    html: `<div style="font-family:Arial,sans-serif;max-width:680px;color:#1f1f1f"><p>Hi ${escapeHtml(name)},</p><h1>Your ${escapeHtml(tool)} snapshot</h1><ul>${lines.map(line => `<li>${escapeHtml(line)}</li>`).join("")}</ul><p>These are planning estimates based on your entries, not resort quotes or confirmed prices.</p><h2>The 5 Decision Questions</h2><ol>${decisionQuestions.map(question => `<li>${escapeHtml(question)}</li>`).join("")}</ol><p><a href="${guide}">Read the complete decision guide</a></p><p>For help with your next decision, reply to this email.</p><p>Mini<br/>CeremonyVerse<br/>bhamini@ceremonyverse.com</p></div>`,
  }
}
