import AppPage from "@/components/AppPage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "invoice-easy — Hempon.dev" };

export default function Page() {
  const app = getApp("invoice-easy");
  if (!app) return null;
  return <AppPage app={app} />;
}
