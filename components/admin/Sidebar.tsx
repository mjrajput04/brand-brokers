"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { LayoutDashboard, Briefcase, BookOpen, Users, Building2, Star, LogOut, Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => { setOpen(false); }, [pathname]);

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const brand = (
    <div className="flex items-center gap-1">
      <video
        src="/logo/logo-anim.webm"
        autoPlay loop muted playsInline
        style={{ width: 64, height: 64, objectFit: "contain", flexShrink: 0, mixBlendMode: "screen" }}
      />
      <div>
        <div className="font-black text-xs tracking-tight leading-tight" style={{ color: "#ffffff" }}>BRAND BROKERS</div>
        <div className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>Admin Panel</div>
      </div>
    </div>
  );

  const navLinks = (
    <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
      {nav.map(({ label, href, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href} href={href}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all"
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
  );

  const logoutBtn = (
    <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <button
        onClick={logout}
        className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium w-full transition-all hover:bg-red-500/10"
        style={{ color: "#9ca3af" }}
      >
        <LogOut className="w-4 h-4" /> Logout
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile top bar (visible below md) */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-16"
        style={{ background: "#111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2">
          <video
            src="/logo/logo-anim.webm"
            autoPlay loop muted playsInline
            style={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0, mixBlendMode: "screen" }}
          />
          <div className="font-black text-xs tracking-tight" style={{ color: "#ffffff" }}>BRAND BROKERS</div>
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex items-center justify-center w-11 h-11 -mr-2 rounded-xl hover:bg-white/10 transition-colors"
          style={{ color: "#d1d5db" }}
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.7)" }}
            onClick={() => setOpen(false)}
          />
          <aside
            className="absolute top-0 left-0 bottom-0 w-72 max-w-[85vw] flex flex-col"
            style={{ background: "#111", borderRight: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="px-4 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {brand}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center w-11 h-11 -mr-2 rounded-xl hover:bg-white/10 transition-colors"
                style={{ color: "#9ca3af" }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {navLinks}
            {logoutBtn}
          </aside>
        </div>
      )}

      {/* Desktop sidebar (md and up) */}
      <aside
        className="hidden md:flex w-64 min-h-screen flex-col fixed top-0 left-0 bottom-0 z-30"
        style={{ background: "#111", borderRight: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {brand}
        </div>
        {navLinks}
        {logoutBtn}
      </aside>
    </>
  );
}
