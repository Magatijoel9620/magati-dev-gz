import AppPage from "@/components/AppPage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "FinAI — Magati.dev" };

export default function Page() {
  const app = getApp("finai");
  if (!app) return null;
  return <AppPage app={app} />;
}
