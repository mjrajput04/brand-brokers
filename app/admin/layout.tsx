import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/Sidebar";
import LayoutContent from "./LayoutContent";

export const metadata: Metadata = { title: "Admin — Brand Brokers" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <LayoutContent>{children}</LayoutContent>;
}
