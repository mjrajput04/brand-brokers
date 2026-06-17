"use client";
import AdminSidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <AdminSidebar />
      {/* Offset for the fixed sidebar on md+, and for the fixed top bar on mobile. */}
      <main className="md:ml-64 pt-16 md:pt-0 p-4 sm:p-6 md:p-8 overflow-auto min-h-screen">
        {children}
      </main>
    </div>
  );
}
