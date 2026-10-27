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
  devpilot: [
    { title: "Open your workspace", body: "Sign in to DevPilot and get familiar with the workspace, where your projects and daily work stay together." },
    { title: "Create a project", body: "Add a project or application you want to move forward, and give it a clear name and context." },
    { title: "Plan your work", body: "Break each project into tasks, set priorities and choose what needs attention today." },
    { title: "Track progress and workload", body: "Update task statuses as work moves along. Review your active projects and workload warnings to keep plans manageable." },
    { title: "Use DevPilot on your devices", body: "Your workspace syncs across sessions. On a supported mobile browser, use Install app or Add to Home Screen to make DevPilot available as a PWA." },
  ],
  finai: [
    { title: "Set up your business", body: "Start with your business profile and review the accounts and settings you will use to track business activity." },
    { title: "Add products and stock", body: "Create product records and keep inventory quantities current as stock changes." },
    { title: "Record income and expenses", body: "Capture business transactions consistently so your records and financial summaries stay useful." },
    { title: "Manage sales and customer balances", body: "Record sales, invoices and receipts, then review what customers owe and what has been paid." },
    { title: "Review reports and AI insights", body: "Use the dashboard, financial reports and available AI insights to understand performance and spot trends." },
    { title: "Install the PWA if you want", body: "Open FinAI in a supported browser and choose Install app or Add to Home Screen to launch it from your device like an app." },
  ],
  civicforge: [
    { title: "Define the campaign identity", body: "Gather the candidate name, office, campaign identity and approved contact and social links before designing the site." },
    { title: "Organize the website", body: "Plan a simple page structure for the candidate introduction, campaign priorities, updates and contact information." },
    { title: "Prepare clear campaign content", body: "Write concise, factual copy for the candidate profile and priorities, and select campaign-approved photographs and visual assets." },
    { title: "Design for every screen", body: "Use a consistent visual style, readable typography and responsive layouts so visitors can understand the campaign on mobile or desktop." },
    { title: "Review before publishing", body: "Check links, contact details, spelling, accessibility and mobile layouts, then keep public information current as the campaign changes." },
  ],
};

export default function AppGuidePage({ app }: { app: AppDefinition }) {
  const steps = guideSteps[app.slug] ?? [];
  return (
    <main className="grid-noise min-h-screen pt-28">
      <div className="container py-12 md:py-20">
        <Link href={`/${app.slug}`} className="mono text-[10px] uppercase tracking-[.2em] text-white/35 hover:text-white">← Back to {app.name}</Link>
        <header className="mt-10 max-w-4xl">
          <p className="eyebrow">{app.slug === "civicforge" ? "Website design guide" : "User guide"} · {app.name}</p>
          <h1 className="display mt-4 text-6xl font-semibold leading-[.86] md:text-8xl">
            {app.slug === "civicforge" ? "Plan the campaign website." : "Start with the workflow."}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            {app.slug === "civicforge"
              ? "A practical checklist for planning and presenting a clear, responsive political campaign website."
              : `A practical walkthrough for getting started with ${app.name} and making its core workflow part of your routine.`}
          </p>
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
          {app.downloadUrl && <Link href={`/${app.slug}/download`} className="rounded-full bg-white px-5 py-3 text-sm text-black">Download {app.name} ↗</Link>}
          {app.webUrl && <a href={app.webUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm text-black">Open {app.name} ↗</a>}
          <Link href={`/${app.slug}`} className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/70">{app.slug === "civicforge" ? "Design concept" : "Product page"}</Link>
        </section>
      </div>
    </main>
  );
}
