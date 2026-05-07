import Link from "next/link";
import { Briefcase, BookOpen, Users, Building2, Star } from "lucide-react";

const modules = [
  { label: "Services", href: "/admin/dashboard/services", icon: Briefcase, desc: "Manage service offerings" },
  { label: "Case Studies", href: "/admin/dashboard/case-studies", icon: BookOpen, desc: "Manage case studies" },
  { label: "Team", href: "/admin/dashboard/team", icon: Users, desc: "Manage team members" },
  { label: "Clients", href: "/admin/dashboard/clients", icon: Building2, desc: "Manage client list" },
  { label: "Roster", href: "/admin/dashboard/roster", icon: Star, desc: "Manage creator roster" },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-white font-black text-3xl mb-2">Dashboard</h1>
      <p className="text-gray-500 text-sm mb-10">Welcome back, Brand Brokers Admin</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map(({ label, href, icon: Icon, desc }) => (
          <Link
            key={href} href={href}
            className="group p-6 rounded-2xl border transition-all hover:border-white/20"
            style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,255,255,0.06)" }}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="font-black text-white text-lg">{label}</div>
            <div className="text-gray-500 text-sm mt-1">{desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
