export type AppDefinition = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  image: string;
  version?: string;
  platform: string;
  downloadUrl: string;
  driveUrl: string;
  webUrl?: string;
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
    platform: "Android APK",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1Lz7FVccW3VzDvRDXT1bb-bYTL69iQEso",
    driveUrl:
      "https://drive.google.com/file/d/1Lz7FVccW3VzDvRDXT1bb-bYTL69iQEso/view?usp=sharing",
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
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1qQ35YejR8Ti9kVLyQEW3FAHVctK6dW39",
    driveUrl:
      "https://drive.google.com/file/d/1qQ35YejR8Ti9kVLyQEW3FAHVctK6dW39/view?usp=sharing",
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
    platform: "Android APK + web",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1TR5KPfD1F0EQzR7IABBiYRKKck68CdIV",
    driveUrl:
      "https://drive.google.com/file/d/1TR5KPfD1F0EQzR7IABBiYRKKck68CdIV/view?usp=drive_link",
    webUrl: "https://landlord-ledger-brown.vercel.app/",
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
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
