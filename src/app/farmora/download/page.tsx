import AppDownloadPage from "@/components/AppDownloadPage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "Download farmora — Magati.dev" };

export default function Page() {
  const app = getApp("farmora");
  if (!app) return null;
  return <AppDownloadPage app={app} />;
}
