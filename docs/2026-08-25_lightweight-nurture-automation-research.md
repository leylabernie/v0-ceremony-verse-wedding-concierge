# Lightweight Nurture Automation — Verified Delivery Constraints

## Meta Instagram Event Automation

Meta’s official documentation confirms that Instagram comment and messaging events can be delivered through webhooks, but the current CeremonyVerse publishing connection does not expose inbound-comment or inbound-DM actions. A full inbound automation would need a separate Meta application, secure webhook endpoint, account/page setup, and applicable permissions and app review. Meta documents `instagram_manage_comments` for comment events and `instagram_manage_messages` for messaging events; live delivery also requires the relevant app and business setup. [Instagram webhook setup](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-instagram/) · [Instagram Messaging webhooks](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks)

## Vercel Nurture Runner

Vercel’s official documentation supports cron jobs that invoke a production route with an HTTP `GET` request. Cron expressions use five fields and always run in UTC. A `CRON_SECRET` environment variable should be used to authenticate the `Authorization: Bearer <secret>` header automatically supplied to the endpoint. Vercel warns that cron delivery is best effort, may be duplicated, and does not retry failures; the runner must therefore use durable state and idempotency. Vercel also documents that Hobby cron jobs run no more than once per day and may execute at any point within the chosen hour. [Cron Jobs](https://vercel.com/docs/cron-jobs) · [Managing Cron Jobs](https://vercel.com/docs/cron-jobs/manage-cron-jobs)

## CeremonyVerse Application Baseline

The existing consultation flow already uses a persistent Upstash/Vercel-KV-compatible state store and a Resend-backed email helper. It emits a webhook event when a consultation request is received and another when a questionnaire is completed. Its current lifecycle does **not** record a scheduled or completed consultation, so post-call nurture must be triggered by a deliberate internal completion action rather than inferred from form or questionnaire activity. The current privacy notice states that consultation submission does not enroll a visitor in marketing; any multi-message nurture must require a separate, optional consent record.

## Local Visual Validation

The pre-call questionnaire was rendered locally after the implementation. The required consultation privacy checkbox remains visible with its original “does not subscribe me to marketing” language. A distinct, unchecked second checkbox now offers a short optional planning-follow-up series after the free consultation and states that it can be stopped at any time. The two controls are visibly separate, so a couple can submit the required consultation materials without joining the nurture sequence.
