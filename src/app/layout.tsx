import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import SiteNav from "@/components/SiteNav";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const siteUrl = "https://portfolio.hempongroup.co.ke";
const siteName = "HEMPON.DEV";
const siteDescription =
  "Hempon Group designs and builds digital products, business systems, websites, mobile applications, automation and AI-powered experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HEMPON.DEV — Digital solutions, software & experiences",
    template: "HEMPON.DEV | %s",
  },
  description: siteDescription,
  applicationName: siteName,
  openGraph: {
    title: "HEMPON.DEV — Digital solutions, software & experiences",
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HEMPON.DEV — Digital solutions, software & experiences",
    description: siteDescription,
  },
  icons: {
    icon: [{ url: "/favicon-v2.ico", type: "image/x-icon" }],
    shortcut: "/favicon-v2.ico",
    apple: "/favicon-v2.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hempon Group",
  alternateName: "HEMPON.DEV",
  url: siteUrl,
  email: "hempongroup@gmail.com",
  sameAs: [
    "https://www.instagram.com/hempongroup/",
    "https://www.linkedin.com/in/joel-magati/",
    "https://x.com/hempon_group",
    "https://www.tiktok.com/@hempon.digital.so",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Script
          id="hempon-organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GoogleAnalytics />
        <SmoothScroll />
        <CursorGlow />
        <SiteNav />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
      </body>
    </html>
  );
}
