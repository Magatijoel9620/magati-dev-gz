import Link from "next/link";
import type { AppDefinition } from "@/lib/apps";

const guideSteps: Record<string, { title: string; body: string }[]> = {
  farmora: [
    { title: "Set up your farm", body: "Complete the farm setup and keep the main farm information available to the rest of the workspace." },
    { title: "Add products and inventory", body: "Create products, categories and units, then keep stock activity organised as operations change." },
    { title: "Record livestock", body: "Keep livestock information together instead of relying on scattered notebooks or spreadsheets." },
    { title: "Record sales and expenses", body: "Capture customers, sales, payments, balances and farm expenses as part of the wider operation." },
    { title: "Review reports", body: "Use dashboard, analytics, reports, Excel, PDF and printing workflows when information needs to be reviewed or shared." },
  ],
  "invoice-easy": [
    { title: "Set up your business", body: "Add your business identity, contact information, logo and invoice details." },
    { title: "Add customers", body: "Create reusable customer records so the same information does not need to be entered repeatedly." },
    { title: "Add products or services", body: "Save frequently used products and services with their usual prices, descriptions and tax information." },
    { title: "Create and send an invoice", body: "Choose a customer, add line items, review the invoice and generate a document that can be shared, saved or printed." },
    { title: "Record payment", body: "Record full or partial payments, payment methods and references while keeping the outstanding balance accurate." },
    { title: "Review reports", body: "Use the dashboard, invoice history and reports to review sales, payments and outstanding balances." },
  ],
  "landlord-ledger": [
    { title: "Set up properties and units", body: "Create the property structure and organise the units that will be managed in the system." },
    { title: "Add tenants", body: "Keep tenant information connected to the correct property and unit." },
    { title: "Manage rent and payments", body: "Record rent, payments, outstanding balances and arrears while keeping the property record current." },
    { title: "Handle maintenance", body: "Track maintenance and inspection activity alongside the property and tenant records." },
    { title: "Review statements and reports", body: "Use digital receipts, statements, reports and analytics to review the portfolio and its financial activity." },
  ],
};

export default function AppGuidePage({ app }: { app: AppDefinition }) {
  const steps = guideSteps[app.slug] ?? [];
  return (
    <main className="grid-noise min-h-screen pt-28">
      <div className="container py-12 md:py-20">
        <Link href={`/${app.slug}`} className="mono text-[10px] uppercase tracking-[.2em] text-white/35 hover:text-white">← Back to {app.name}</Link>
        <header className="mt-10 max-w-4xl">
          <p className="eyebrow">User guide · {app.name}</p>
          <h1 className="display mt-4 text-6xl font-semibold leading-[.86] md:text-8xl">Start with the workflow.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">A compact guide to the workflow described in the original {app.name} product pages.</p>
        </header>

        <section className="mt-16 grid gap-3">
          {steps.map((step, index) => (
            <article key={step.title} className="grid gap-5 rounded-[1.5rem] border border-white/10 bg-[#101213] p-6 md:grid-cols-[100px_1fr] md:p-8">
              <div><span className="mono text-[10px] uppercase tracking-[.2em] text-[#d7ff65]/70">Step {String(index + 1).padStart(2, "0")}</span></div>
              <div><h2 className="text-xl font-medium md:text-2xl">{step.title}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-white/45">{step.body}</p></div>
            </article>
          ))}
        </section>

        <section className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
          <Link href={`/${app.slug}/download`} className="rounded-full bg-white px-5 py-3 text-sm text-black">Download {app.name} ↗</Link>
          <Link href={`/${app.slug}`} className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/70">Product page</Link>
        </section>
      </div>
    </main>
  );
}
