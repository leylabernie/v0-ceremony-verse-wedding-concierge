export async function finalizeConsultationQuestionnaire({ requestId, stateStore, deliver, completionData = {} }) {
  const existing = await stateStore.getByRequest(requestId)

  if (existing?.status === "questionnaire_completed" || existing?.status === "consultation_completed") {
    return { alreadyCompleted: true, delivered: false, tracked: true }
  }

  const delivered = await deliver()
  if (!delivered) {
    return { alreadyCompleted: false, delivered: false, tracked: Boolean(existing) }
  }

  if (existing) {
    await stateStore.markQuestionnaireCompleted(requestId, completionData)
  }

  return { alreadyCompleted: false, delivered: true, tracked: Boolean(existing) }
}
