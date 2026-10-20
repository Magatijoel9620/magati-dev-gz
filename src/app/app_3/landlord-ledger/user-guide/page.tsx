import AppGuidePage from "@/components/AppGuidePage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "landlord-ledger User Guide — Magati.dev" };

export default function Page() {
  const app = getApp("landlord-ledger");
  if (!app) return null;
  return <AppGuidePage app={app} />;
}
