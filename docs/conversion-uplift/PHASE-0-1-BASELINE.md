# Hempon.dev Conversion Uplift — Phase 0–1 Baseline

## Approved direction

- Positioning: hybrid Hempon Group + founder-led portfolio.
- Primary brand: Hempon Group / Hempon.dev.
- Founder: Magati Joel remains visible as founder and technical lead.
- Brand assets: use the supplied Hempon Group logo files in `public/logo/`.
- Visual direction: retain the existing dark/lime styling.
- Homepage: preserve the existing hero, section order and current section content. Do not rewrite or remove homepage sections in Phase 0–1.
- Scope: conversion and UI/UX uplift, not a rebuild.
- Enquiry identity: use `hempongroup@gmail.com` for business enquiries and `magatijoel@gmail.com` for direct founder correspondence where appropriate.
- Existing product routes, downloads, guides, update endpoints, project records and article content remain protected.

## Repository baseline

- Repository: `https://github.com/Magatijoel9620/magati-dev-gz`
- Expected local base branch: `main`
- Feature branch: `feature/hempon-portfolio-conversion-uplift`
- Framework: Next.js 16.3.8, React 19.2.8, TypeScript and Tailwind CSS 4.
- Existing visual components, project/article registries and product routes are retained.
- Production canonical base currently configured as `https://portfolio.hempongroup.co.ke`; confirm DNS/hosting and live deployment settings during release preparation.

## Phase 0 — Safe source baseline

1. Inspect local Git status before switching branches.
2. Preserve or commit existing user changes; do not discard them.
3. Fetch origin and fast-forward local `main` only when safe.
4. Create `feature/hempon-portfolio-conversion-uplift` from the verified `main`.
5. Compare the supplied source archive against the actual local repository before applying this file package.

## Phase 1 — Brand and shared shell

### Updated files

- `src/app/layout.tsx` — Hempon.dev metadata, canonical base and supplied logo icons.
- `src/components/SiteNav.tsx` — Hempon identity, supplied logo, existing route links and business project CTA.
- `src/components/SiteFooter.tsx` — corporate footer, navigation, social links and separate business/founder contact paths.
- Product page metadata files containing the former site suffix — update the brand suffix only; preserve product copy and behavior.
- `src/app/apps/page.tsx` — update the catalogue description to attribute products to Hempon Group.
- `src/app/posts/[slug]/page.tsx` — update generated article metadata suffix only.
- `README.md` — update project identity and preservation rules.

### Added files/assets

- `public/logo/logo.png`
- `public/logo/logo_round.png`
- `public/logo/logo.svg`
- `docs/conversion-uplift/PHASE-0-1-BASELINE.md`

### Explicitly not changed

- `src/app/page.tsx` and homepage section composition.
- `src/components/PortfolioHero.tsx` and the homepage hero.
- `src/components/ContentSections.tsx` homepage sections and existing copy.
- Project/article content records and founder author attribution.
- Product registry, download behavior, release JSON and guide content.
- Backend, API, authentication, external product applications or deployment configuration.

## Phase 1 acceptance checks

- Confirm the supplied logo is legible in the dark navigation/footer.
- Confirm navigation links still resolve to existing routes/anchors.
- Confirm business enquiry links use the company email and founder links remain distinct.
- Confirm all product/download/guide/update routes still resolve.
- Run `npm run lint` and `npm run build` after applying on the verified local branch.
- Review the Git diff to ensure the homepage and product behavior were not unintentionally altered.

## Notes and limitations

This file package is generated from the supplied `portfolio_hempon.zip` source and the separately supplied `logo.tar.gz`. It has not been applied to the user's local repository, pushed to GitHub or deployed. The live hosting configuration and local Git state have not been inspected from this environment.
