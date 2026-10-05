import AppGuidePage from "@/components/AppGuidePage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "invoice-easy User Guide — Magati.dev" };

export default function Page() {
  const app = getApp("invoice-easy");
  if (!app) return null;
  return <AppGuidePage app={app} />;
}
