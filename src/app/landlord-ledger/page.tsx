import AppPage from "@/components/AppPage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "Landlord Ledger | Hempon.dev" };

export default function Page() {
  const app = getApp("landlord-ledger");
  if (!app) return null;
  return <AppPage app={app} />;
}
