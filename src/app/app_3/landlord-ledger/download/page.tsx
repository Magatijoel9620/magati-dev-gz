import AppDownloadPage from "@/components/AppDownloadPage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "Download landlord-ledger — Magati.dev" };

export default function Page() {
  const app = getApp("landlord-ledger");
  if (!app) return null;
  return <AppDownloadPage app={app} />;
}
