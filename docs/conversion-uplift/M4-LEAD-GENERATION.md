# M4 — Lead Generation

## Objective

Turn the portfolio's project, product and service evidence into a clear enquiry journey, while setting realistic expectations about how Hempon Group works.

## Delivered

### Enquiry experience

- Added a dedicated `/contact` page with business and founder contact paths.
- Added a structured project enquiry form for name, email, optional organisation, service area and project context.
- Added a server route that validates submissions and sends them through Resend.
- Added accessible pending, success and failure feedback. Delivery failure does not display a success state.
- Kept a direct `mailto:hempongroup@gmail.com` fallback visible.
- Routed the main navigation CTA, homepage contact section, service-page enquiry CTAs and footer CTA to `/contact`.

### Trust and decision support

- Added a homepage trust section covering evidence, scope and handover.
- Added FAQs explaining what happens after an enquiry, early-stage ideas, pricing/timelines, existing systems and post-launch support.
- Clarified that concepts, demos and starter work should not be mistaken for production client deployments, consistent with M3 project classifications.
- Avoided invented testimonials, awards, certifications, conversion metrics, response-time guarantees and client outcome claims.

## Email delivery configuration

The contact API uses the Resend HTTP API directly; no additional npm package is required.

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes for form delivery | Server-side Resend API key |
| `ENQUIRY_TO_EMAIL` | No | Enquiry recipient, defaults to `hempongroup@gmail.com` |
| `RESEND_FROM_EMAIL` | Recommended | Verified sender, defaults to `Hempon Group <noreply@hempongroup.co.ke>` |
| `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` | Legacy fallback | Accepted for compatibility when the preferred variables are absent |

Set variables in `.env.local` for local testing and in the deployment environment (preview and production separately). The sender domain must be verified in the Resend account associated with the API key. Restart/redeploy after changing environment variables. The API reads `ENQUIRY_TO_EMAIL` and `RESEND_FROM_EMAIL` first, then falls back to the older `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` names.

If `RESEND_API_KEY` is absent or the provider rejects delivery, the form returns an error and offers the direct business email address. It does not save submissions to a database or queue them for later delivery.

## Privacy and security notes

- Collects only information needed to respond to a project enquiry.
- Does not subscribe the visitor to marketing emails.
- Does not request passwords, payment information or sensitive personal information.
- Uses server-side validation, a request-size limit, a hidden honeypot and a same-origin check when the browser supplies origin/host headers.
- These are baseline safeguards. They do not replace a managed rate limiter, CAPTCHA/challenge or operational monitoring if abuse becomes significant.
- The server does not intentionally log submitted form contents.

## Content and trust principles

- No invented client testimonials, named client approvals or performance metrics.
- No claim that every listed portfolio item is a paid client deployment.
- No fixed price, guaranteed timeline or unlimited support promise.
- Discovery, scope, dependencies, acceptance points, handover and support are discussed and agreed per engagement.
- No WhatsApp or telephone contact is displayed without a verified business number.

## Acceptance checklist

- [ ] `/contact` loads and has correct title, description and canonical metadata.
- [ ] Navigation, homepage CTA and footer CTA open `/contact`.
- [ ] Form validation rejects missing/invalid name, email, service or short message.
- [ ] Valid test enquiry reaches `hempongroup@gmail.com` through Resend.
- [ ] Replying to the notification addresses the visitor's supplied email.
- [ ] Missing API key and provider errors display a clear failure state and email fallback.
- [ ] Honeypot submissions are not forwarded.
- [ ] Request-size and same-origin checks behave as expected on the deployed host/proxy.
- [ ] Mobile and desktop layouts are reviewed, including keyboard focus and screen-reader status feedback.
- [ ] FAQ answers accurately reflect actual delivery and support policies.
- [ ] `git diff --check`, lint, TypeScript and production build pass.
- [ ] Existing service, project, product, guide, download and update routes still work.

## Not included in M4

CRM integration, database lead storage, WhatsApp/telephone messaging, automated follow-up sequences, newsletter opt-in, analytics vendor integration and a public pricing calculator remain out of scope. These should be added only after the operational requirements and service ownership are confirmed.
