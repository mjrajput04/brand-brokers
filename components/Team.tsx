"use client";

import { Rocket, BarChart, Handshake, Zap } from "lucide-react";

const team = [
  { name: "Rohit Chattopadhyay", role: "Co-Founder & CEO", Icon: Rocket, color: "#a855f7" },
  { name: "Arkajyoti Majumdar", role: "Co-Founder & CMO", Icon: BarChart, color: "#7c3aed" },
  { name: "Sayak Daw", role: "Co-Founder & Head of Partnerships", Icon: Handshake, color: "#6d28d9" },
];

export default function Team() {
  return (
    <section id="team" className="section-wrap" style={{ background: "#f0ede8" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-purple-500">The People</span>
          <h2 className="section-heading">OUR TEAM</h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">A young Gen-Z team building transparent & performance led campaigns.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger">
          {team.map((member, i) => (
            <div key={member.name} className="reveal card-hover group relative overflow-hidden rounded-3xl p-8 text-center cursor-default" style={{ background: "#0a0a0a" }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" style={{ background: `radial-gradient(circle at 50% 0%, ${member.color}22, transparent 70%)` }} />

              <div className="relative mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center animate-float" style={{ background: `linear-gradient(135deg, ${member.color}33, ${member.color}11)`, border: `2px solid ${member.color}44`, animationDelay: `${i * 0.5}s` }}>
                  <member.Icon className="w-12 h-12" style={{ color: member.color }} strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${member.color}`, animation: "pulse-ring 3s ease-out infinite", animationDelay: `${i * 0.5}s` }} />
              </div>

              <h3 className="font-black text-white text-xl mb-1">{member.name}</h3>
              <p className="font-medium text-sm" style={{ color: member.color }}>{member.role}</p>

              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl" style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)" }}>
            <Zap className="w-6 h-6 text-purple-600" fill="currentColor" />
            <span className="font-bold text-purple-600">Young · Agile · Transparent · Performance-Led</span>
          </div>
        </div>
      </div>
    </section>
  );
}
