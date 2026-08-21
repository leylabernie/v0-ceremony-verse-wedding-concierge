export async function finalizeConsultationRegistration({
  stateStore,
  dedupeHash,
  initialState,
  deliverLead,
  sendQuestionnaire,
}) {
  const claim = await stateStore.claim(dedupeHash, initialState)

  if (!claim.created) {
    const existing = claim.state
    let questionnaireSent = existing.status !== "created"

    if (existing.status === "created") {
      questionnaireSent = await sendQuestionnaire(existing)
      if (questionnaireSent) {
        await stateStore.markQuestionnaireSent(existing)
      }
    }

    return {
      success: true,
      deduplicated: true,
      questionnaireSent,
      questionnaireCompleted: existing.status === "questionnaire_completed",
      questionnaireUrl: existing.questionnaireUrl,
      requestId: existing.requestId,
    }
  }

  const state = claim.state
  const delivered = await deliverLead(state.requestId)
  if (!delivered) {
    await stateStore.forget(state)
    return { success: false, fallbackRequired: true }
  }

  const questionnaireSent = await sendQuestionnaire(state)
  if (questionnaireSent) {
    await stateStore.markQuestionnaireSent(state)
  }

  return {
    success: true,
    deduplicated: false,
    questionnaireSent,
    questionnaireCompleted: false,
    questionnaireUrl: state.questionnaireUrl,
    requestId: state.requestId,
  }
}
