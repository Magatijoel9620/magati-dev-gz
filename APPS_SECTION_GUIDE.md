# Apps section guide

This guide explains how the portfolio apps section is structured and how to update it safely when new apps or product changes are added.

## Source of truth

The main app registry lives in `src/lib/apps.ts`.

Every app entry is defined as an `AppDefinition` object with the following fields:

- `slug`: stable URL slug used in routes such as `/farmora` or `/finai`
- `name`: display name shown on the app pages
- `kicker`: short product label
- `description`: summary shown on cards and detail pages
- `image`: asset path or cover image
- `version`: release version when available
- `platform`: platform description, for example Android APK or Web + PWA
- `downloadUrl`: download route or direct asset URL
- `webUrl`: optional public web app URL
- `projectSlug`: optional project identifier used for project routing
- `guideUrl`: route to the app user guide page
- `features`: list of key product capabilities
- `accent`: marketing style label or positioning line

When you update an existing app, make the change in this registry first. The app cards, product pages, and guide links all read from this list.

## App route structure

The app section follows a repeated route pattern for each app:

- `/<slug>` → product landing page
- `/<slug>/download` → download page (if there is a downloadable app)
- `/<slug>/user-guide` → onboarding or product guide page

Examples:

- `/farmora` → `/farmora/download` → `/farmora/user-guide`
- `/invoice-easy` → `/invoice-easy/download` → `/invoice-easy/user-guide`
- `/landlord-ledger` → `/landlord-ledger/download` → `/landlord-ledger/user-guide`
- `/devpilot` → `/devpilot/user-guide`
- `/finai` → `/finai/user-guide`
- `/civicforge` → `/civicforge/user-guide`

Keep the route names consistent with the `slug` so links and navigation remain stable.

## Adding a new app

Use this flow when adding a new product to the apps section:

1. Add a new app object to the `apps` array in `src/lib/apps.ts`.
2. Use a unique `slug` that matches the route and public URL pattern.
3. Add the correct marketing metadata:
   - product name
   - one-line summary
   - feature set
   - platform and version
   - app image path
   - download or external web link
4. Add the app assets to the relevant public folder or static path.
5. Make sure `guideUrl` points to a real guide page route.
6. If the app is downloadable, ensure the `/download` page route exists and uses the correct file or access link.
7. Verify the app appears in `/apps` and the product page renders correctly.

## Updating an existing app

When releasing changes to an existing app:

- update the app description if the functionality changed
- refresh the `features` list to reflect real current capabilities
- bump the `version` when a release is published
- update the cover image if branding or presentation changed
- keep the `downloadUrl` and `webUrl` aligned with the live product
- maintain any user guide updates to reflect the new workflow

If the app is a new release but the user-facing route remains the same, keep the slug stable and update the release metadata rather than renaming the route.

## Guide and content updates

Each app has a user guide flow defined in `src/components/AppGuidePage.tsx`.

If you add a new app, you should also update the guide step map so the product has a useful onboarding flow. The guide should cover:

- initial setup
- recurring user workflow
- reporting or review steps
- final actions such as downloads, sharing, or installation

For a new app, the steps should be short, practical and product-specific rather than generic marketing copy.

## Future update checklist

Before publishing a new app or app update, confirm all of the following:

- the app is included in `src/lib/apps.ts`
- the route structure exists and matches the slug
- the app card renders correctly on `/apps`
- the detail page, guide page, and download page work as expected
- the image, branding, and product text are current
- version numbers and links are updated
- the app has a working onboarding guide for new users

## Recommendation

Treat `src/lib/apps.ts` as the source of truth for all app metadata. Keep the app route naming consistent, update feature text as the product evolves, and review the app guide whenever a new workflow or release adds meaningful changes.
