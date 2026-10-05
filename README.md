# Magati.dev — Interactive Playground Build

This build uses the original interactive playground architecture (Motion + Lenis + pointer interaction) as the presentation foundation, while preserving the portfolio's actual project data, identity, links, and supplied imagery.

## Run

npm install
npm run build
npm run dev

## Restored app delivery routes

The redesigned portfolio also restores the product-facing application flow:

- `/apps`
- `/farmora` → `/farmora/download` → `/farmora/user-guide`
- `/invoice-easy` → `/invoice-easy/download` → `/invoice-easy/user-guide`
- `/landlord-ledger` → `/landlord-ledger/download` → `/landlord-ledger/user-guide`
- `/farmora/update.json` remains available for the Farmora release metadata.
- `/clarity-solution` redirects to the preserved Clarity portfolio case study.

The download destinations retain the Google Drive release IDs from the supplied application pages.
