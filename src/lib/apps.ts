export type AppDefinition = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  image: string;
  version?: string;
  platform: string;
  downloadUrl: string;
  webUrl?: string;
  projectSlug?: string;
  guideUrl: string;
  features: string[];
  accent: string;
};

export const apps: AppDefinition[] = [
  {
    slug: "farmora",
    name: "Farmora",
    kicker: "Farm management · Android",
    description:
      "A practical farm operations workspace for livestock, inventory, sales, expenses, reporting and everyday farm records.",
    image: "/farmora/cover_landscape.jpg",
    version: "0.9.3",
    platform: "Android APK + PWA",
    webUrl: "https://farmora.hempongroup.co.ke/",
    projectSlug: "farmora",
    downloadUrl: "/api/download/farmora",
    guideUrl: "/farmora/user-guide",
    features: [
      "Livestock management",
      "Inventory and stock tracking",
      "Sales and customers",
      "Expenses and farm records",
      "Dashboard, analytics and reports",
      "Excel, PDF and printing workflows",
    ],
    accent: "Farm operations",
  },
  {
    slug: "invoice-easy",
    name: "InvoiceEasy",
    kicker: "Invoicing · Android",
    description:
      "A focused invoicing workspace for businesses that need customers, products, payments, PDFs, receipts and reporting in one place.",
    image: "/invoice-easy/cover_landscape.jpg",
    platform: "Android APK",
    projectSlug: "flutter-invoice-app",
    downloadUrl: "/api/download/invoice-easy",
    guideUrl: "/invoice-easy/user-guide",
    features: [
      "Professional invoices",
      "Customer records",
      "Products and services",
      "Full and partial payment tracking",
      "PDF, print and sharing workflows",
      "Dashboard, invoice history and reports",
    ],
    accent: "Business invoicing",
  },
  {
    slug: "landlord-ledger",
    name: "Landlord Ledger",
    kicker: "Property management · Android + web",
    description:
      "A property management system for landlords and managers covering units, tenants, rent, payments, arrears, maintenance and reporting.",
    image: "/landlord-ledger/cover_landscape.jpg",
    version: "1.3.0 · Build 4",
    platform: "Android APK + PWA",
    webUrl: "https://ledger.hempongroup.co.ke/",
    projectSlug: "landlord-ledger",
    downloadUrl: "/api/download/landlord-ledger",
    guideUrl: "/landlord-ledger/user-guide",
    features: [
      "Property and unit management",
      "Tenant records",
      "Rent, payments and arrears",
      "Digital receipts and statements",
      "Maintenance and inspections",
      "Reports and analytics",
    ],
    accent: "Property operations",
  },
  {
  slug: "devpilot",
  name: "DevPilot",
  kicker: "Personal productivity · App management platform",
  description:
    "A modern personal productivity platform that helps developers and entrepreneurs organize projects, plan daily tasks, prioritize important work, track progress across multiple applications and manage their development workflow through a unified, cloud-backed workspace.",
  image: "/devpilot/cover_landscape.png",
  version: "1.0.0",
  platform: "Web · PWA",
  webUrl: "https://devpilot.hempongroup.co.ke/",
  projectSlug: "building-devpilot-personal-productivity-app",
  downloadUrl: "",
  guideUrl: "/devpilot/user-guide",
  features: [
    "Centralized management of projects and applications",
    "Daily task planning and priority management",
    "Project progress and task status tracking",
    "Workload monitoring and overload warnings",
    "Personalized workspace with a clean starting canvas",
    "Secure cloud authentication and persistent data storage",
    "Cross-session synchronization of projects and tasks",
    "Responsive interface for desktop and mobile devices",
  ],
  accent: "Plan smarter. Build consistently. Keep every project moving.",
},
  {
  slug: "finai",
  name: "FinAI",
  kicker: "AI-powered business finance · Web + PWA",
  description:
    "An intelligent business finance and inventory management platform that helps entrepreneurs track income, expenses, sales, stock, invoices, customer balances and business performance with AI-powered insights.",
  image: "/finai/finai_landscape.png",
  version: "1.0.0",
  platform: "Web + PWA",
  webUrl: "https://finai.hempongroup.co.ke/",
  projectSlug: "fintrack-ai",
  downloadUrl: "",
  guideUrl: "/finai/user-guide",
  features: [
    "Income and expense tracking",
    "Inventory and product management",
    "Sales, invoices and digital receipts",
    "Customer balances and supplier payables",
    "Profit, cash flow and financial reports",
    "AI-powered financial insights",
    "Business performance dashboard",
    "Mobile-friendly access and installation",
  ],
  accent: "Intelligent business finance",
},
  {
  slug: "civicforge",
  name: "CivicForge",
  kicker: "Political campaign web design · Website concept",
  description:
    "A polished, responsive website design concept for political candidates and campaigns to introduce their candidate, communicate their priorities and share campaign updates with the public.",
  image: "/election/election_landscape.png",
  platform: "Web design",
  webUrl: "",
  projectSlug: "civicforge",
  downloadUrl: "",
  guideUrl: "/civicforge/user-guide",
  features: [
    "Candidate profile and campaign identity",
    "Clear presentation of vision and priorities",
    "Campaign news and public announcements",
    "Contact and community engagement sections",
    "Social media links and campaign calls to action",
    "Responsive layouts for mobile and desktop",
  ],
  accent: "A clear digital presence for political campaigns.",
},
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export function getAppByProjectSlug(slug: string) {
  return apps.find((app) => app.projectSlug === slug || app.slug === slug);
}
