import Link from "next/link";
import { Briefcase, BookOpen, Users, Building2, Star } from "lucide-react";

const modules = [
  { label: "Services", href: "/admin/services", icon: Briefcase, desc: "Manage service offerings" },
  { label: "Case Studies", href: "/admin/case-studies", icon: BookOpen, desc: "Manage case studies" },
  { label: "Team", href: "/admin/team", icon: Users, desc: "Manage team members" },
  { label: "Clients", href: "/admin/clients", icon: Building2, desc: "Manage client list" },
  { label: "Roster", href: "/admin/roster", icon: Star, desc: "Manage creator roster" },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="font-black text-2xl md:text-3xl mb-2" style={{ color: "#ffffff" }}>Dashboard</h1>
      <p className="text-sm mb-6 md:mb-10" style={{ color: "#9ca3af" }}>Welcome back, Brand Brokers Admin</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {modules.map(({ label, href, icon: Icon, desc }) => (
          <Link
            key={href} href={href}
            className="group p-6 rounded-2xl transition-transform duration-200 hover:-translate-y-1"
            style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-white/10" style={{ background: "rgba(255,255,255,0.06)" }}>
              <Icon className="w-5 h-5" style={{ color: "#ffffff" }} />
            </div>
            <div className="font-black text-lg" style={{ color: "#ffffff" }}>{label}</div>
            <div className="text-sm mt-1" style={{ color: "#9ca3af" }}>{desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
