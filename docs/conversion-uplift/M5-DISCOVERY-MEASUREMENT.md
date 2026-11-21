# M5 — Discovery & Measurement (Phases 8–9)

## Included
- Site-wide title branding now begins with `HEMPON.DEV`.
- Favicon and shortcut icon use `/favicon-v2.ico`; keep the existing file in `public/` (it is intentionally not duplicated in this package).
- Canonical metadata base remains `https://portfolio.hempongroup.co.ke`; this package does not migrate domains.
- Search/social metadata and an Organization JSON-LD identity block.
- Dynamic `robots.txt` and `sitemap.xml` generated from the current service, project and article registries.
- Optional Google Analytics 4 integration. It is disabled unless `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured.
- SPA route changes send page-view events to GA4 when configured.

## Analytics configuration
Add the real GA4 web-stream measurement ID in the hosting environment:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Do not use the example value. If no real ID is configured, no Google Analytics script is loaded and no GA page-view events are sent. Configure the variable in the Vercel Production environment (and Preview only if desired), then redeploy.

Google Analytics may use cookies and process visitor data. Before enabling it for public traffic, publish/update the site's privacy notice and configure consent handling appropriate to the site's audience and applicable data-protection requirements. This package deliberately does not invent a privacy policy or silently add a consent banner.

## SEO verification after deployment
1. Open `/robots.txt`; confirm the sitemap URL and API/legacy-route exclusions.
2. Open `/sitemap.xml`; confirm it contains the homepage, services, projects, products and articles, and no duplicate `/app_3/` routes.
3. Inspect the rendered homepage and key service/project/article pages; confirm title, description, canonical and Open Graph metadata.
4. Confirm the page title branding begins with `HEMPON.DEV` and the browser tab uses `/favicon-v2.ico`.
5. In Google Search Console, add/verify the canonical property and submit `https://portfolio.hempongroup.co.ke/sitemap.xml`. Search indexing is not immediate and cannot be guaranteed by a code change.
6. If GA4 is enabled, use GA4 Realtime/DebugView to confirm page views on initial load and client-side navigation. Do not claim analytics is verified until this is checked against the real property.

## M4 completion checks
- Enquiry email successfully sent and received (user-confirmed).
- Confirm `reply_to` points to the visitor's submitted email.
- Confirm error/fallback behaviour by testing with a temporarily invalid/missing Resend key in a safe Preview environment; do not disrupt Production email delivery.

## Important
- Keep `.env.local` out of ZIPs and version control.
- Existing `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, and `RESEND_FROM_EMAIL` environment configuration is preserved.
- No analytics ID, Search Console verification token, business address, reviews, awards or performance metrics have been fabricated.
