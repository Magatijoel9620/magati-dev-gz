import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import SiteNav from "@/components/SiteNav";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://magati.dev"),
  title: "Magati.dev — Digital systems, products & experiences",
  description: "Magati Joel builds useful digital systems: modern websites, business applications, mobile products, automation and AI-powered experiences.",
  openGraph: { title: "Magati.dev", description: "Useful digital systems, built with intention.", url: "https://magati.dev", siteName: "Magati.dev", type: "website" },
  twitter: { card: "summary_large_image", title: "Magati.dev", description: "Useful digital systems, built with intention." },
  icons: {
    icon: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { themeColor: "#08090a", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SmoothScroll /><CursorGlow /><SiteNav />{children}<Analytics /></body></html>;
}
