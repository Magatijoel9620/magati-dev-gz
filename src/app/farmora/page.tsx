import AppPage from "@/components/AppPage";
import { getApp } from "@/lib/apps";

export const metadata = { title: "farmora — Magati.dev" };

export default function Page() {
  const app = getApp("farmora");
  if (!app) return null;
  return <AppPage app={app} />;
}
