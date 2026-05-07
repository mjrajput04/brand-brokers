"use client";
import AdminSidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="flex min-h-screen" style={{ background: "#0a0a0a" }}>
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
