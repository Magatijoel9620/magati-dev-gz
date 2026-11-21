# M3 — Portfolio Credibility

## Goal

Make the portfolio easier to trust and evaluate by connecting each project to clear scope, relevant implementation details, available visual references and an honest project classification.

## Delivered

### Project archive

- Reframed `/projects` as a project and case-study archive.
- Added classification labels to distinguish products, client websites, company work, automation, concepts, demos and reusable starters.
- Added a direct project-enquiry path.
- Preserved all existing project slugs and supplied image references.

### Project detail pages

- Added project-specific metadata for search and social previews.
- Structured the detail page around the project overview, implementation areas, project details, evidence note, visual references and next step.
- Added contextual links to product pages where a project is associated with a registered product.
- Added an explicit disclosure that no performance figures or business outcomes are implied unless documented.
- Retained the existing screenshot gallery and existing listed live/demo links.

### Product and release accuracy

- Farmora registry version aligned to `0.9.4`, matching `public/farmora/update.json`.
- InvoiceEasy project name and summary aligned with the current Flutter + Supabase invoicing product. Registry shows `3.0.0 · Build 2`; update metadata records version `3.0.0` and build `2`.
- InvoiceEasy release metadata no longer carries the unrelated Farmora release-note text; it identifies the supplied 3.0.0 (Build 2) release without inventing a changelog.
- Landlord Ledger update metadata aligned to `1.3.0`, build `4`, matching the product registry. Both update JSON copies are synchronized and point to the GitHub latest-release APK URL already used by the portfolio download proxy.
- FinAI project summary aligned with the current business finance and inventory product. Historical development articles are not rewritten and retain their historical context.
- Product cards show available version/platform information and distinguish downloadable apps, web experiences and design demos.

## Evidence and honesty rules

- A listed external URL is presented as a reference link; this package does not claim the remote destination was live-checked.
- A design concept or demo must not be described as a production client deployment.
- Starter-kit shipment tracking is sample-data demonstration, not a live carrier integration.
- StayZen uses in-memory development data; it is not represented as a production booking service.
- No conversion uplift, revenue, performance or client outcome metrics are invented.

## Manual acceptance checklist

- [ ] `/projects` renders all project cards and classifications.
- [ ] Every project detail route opens and its hero/screenshot images load.
- [ ] CivicForge and Clarity are clearly marked as concepts, not client deployments.
- [ ] Logistics and StayZen are clearly described as demo/portfolio work.
- [ ] Farmora, InvoiceEasy, Landlord Ledger, DevPilot and FinAI project pages link to their matching product pages.
- [ ] `/apps` shows current versions where supplied and links to the right guides/project records.
- [ ] Farmora APK download proxy works against the latest release.
- [ ] InvoiceEasy APK download proxy works against the latest release.
- [ ] Landlord Ledger APK download proxy works against the latest release.
- [ ] Both Landlord Ledger update JSON copies return identical version/build/download metadata.
- [ ] InvoiceEasy update JSON no longer contains farm-management release notes.
- [ ] Product web links and CivicForge demo link are manually opened and verified.
- [ ] Desktop and mobile layouts are reviewed.
- [ ] `git diff --check`, lint, TypeScript and production build pass.
