import AppGuidePage from "@/components/AppGuidePage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "DevPilot User Guide — Magati.dev" };

export default function Page() {
  const app = getApp("devpilot");
  if (!app) return null;
  return <AppGuidePage app={app} />;
}
