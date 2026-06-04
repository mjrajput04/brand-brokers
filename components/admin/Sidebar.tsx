"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Briefcase, BookOpen, Users, Building2, Star, LogOut } from "lucide-react";

const nav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Services", href: "/admin/services", icon: Briefcase },
  { label: "Case Studies", href: "/admin/case-studies", icon: BookOpen },
  { label: "Team", href: "/admin/team", icon: Users },
  { label: "Clients", href: "/admin/clients", icon: Building2 },
  { label: "Roster", href: "/admin/roster", icon: Star },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <aside className="w-64 min-h-screen flex flex-col" style={{ background: "#111", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-1">
          <video
            src="/logo/logo-anim.webm"
            autoPlay loop muted playsInline
            style={{ width: 64, height: 64, objectFit: "contain", flexShrink: 0, mixBlendMode: "screen" }}
          />
          <div>
            <div className="font-black text-white text-xs tracking-tight leading-tight">BRAND BROKERS</div>
            <div className="text-gray-500 text-xs mt-0.5">Admin Panel</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {nav.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href} href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{
                background: active ? "rgba(255,255,255,0.08)" : "transparent",
                color: active ? "#fff" : "#888",
              }}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full transition-all hover:bg-red-500/10 text-gray-500 hover:text-red-400"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </aside>
  );
}
