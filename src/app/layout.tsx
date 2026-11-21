import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import SiteNav from "@/components/SiteNav";

const siteUrl = "https://portfolio.hempongroup.co.ke";
const siteDescription =
  "Hempon Group designs and builds digital products, business systems, websites, mobile applications, automation and AI-powered experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hempon.dev — Digital solutions, software & experiences",
    template: "%s | Hempon.dev",
  },
  description: siteDescription,
  applicationName: "Hempon.dev",
  openGraph: {
    title: "Hempon.dev — Digital solutions, software & experiences",
    description: siteDescription,
    url: siteUrl,
    siteName: "Hempon.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hempon.dev — Digital solutions, software & experiences",
    description: siteDescription,
  },
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo_round.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <CursorGlow />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
