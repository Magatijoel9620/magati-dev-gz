import AppGuidePage from "@/components/AppGuidePage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "CivicForge Website Design Guide — Magati.dev" };

export default function Page() {
  const app = getApp("civicforge");
  if (!app) return null;
  return <AppGuidePage app={app} />;
}
