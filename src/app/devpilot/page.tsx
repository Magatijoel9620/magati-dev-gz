import AppPage from "@/components/AppPage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "DevPilot — Magati.dev" };

export default function Page() {
  const app = getApp("devpilot");
  if (!app) return null;
  return <AppPage app={app} />;
}
