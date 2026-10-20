import AppGuidePage from "@/components/AppGuidePage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "farmora User Guide — Magati.dev" };

export default function Page() {
  const app = getApp("farmora");
  if (!app) return null;
  return <AppGuidePage app={app} />;
}
