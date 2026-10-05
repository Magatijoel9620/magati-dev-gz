import AppDownloadPage from "@/components/AppDownloadPage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "Download invoice-easy — Magati.dev" };

export default function Page() {
  const app = getApp("invoice-easy");
  if (!app) return null;
  return <AppDownloadPage app={app} />;
}
