"use client";

import { Rocket, BarChart, Handshake, Zap } from "lucide-react";

const team = [
  { name: "Rohit Chattopadhyay", role: "Co-Founder & CEO", Icon: Rocket, color: "#ffffff" },
  { name: "Arkajyoti Majumdar", role: "Co-Founder & CMO", Icon: BarChart, color: "#e5e7eb" },
  { name: "Sayak Daw", role: "Co-Founder & Head of Partnerships", Icon: Handshake, color: "#d1d5db" },
];

export default function Team() {
  return (
    <section id="team" className="section-wrap" style={{ background: "#141414" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-white">The People</span>
          <h2 className="section-heading text-white">OUR TEAM</h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">A young Gen-Z team building transparent & performance led campaigns.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger">
          {team.map((member, i) => (
            <div key={member.name} className="reveal card-hover group relative overflow-hidden rounded-3xl p-8 text-center cursor-default" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" style={{ background: `radial-gradient(circle at 50% 0%, ${member.color}11, transparent 70%)` }} />

              <div className="relative mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center animate-float" style={{ background: `linear-gradient(135deg, ${member.color}22, ${member.color}05)`, border: `2px solid ${member.color}33`, animationDelay: `${i * 0.5}s` }}>
                  <member.Icon className="w-12 h-12" style={{ color: member.color }} strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${member.color}44`, animation: "pulse-ring 3s ease-out infinite", animationDelay: `${i * 0.5}s` }} />
              </div>

              <h3 className="font-black text-white text-xl mb-1">{member.name}</h3>
              <p className="font-medium text-sm" style={{ color: "#aaa" }}>{member.role}</p>

              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl" style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Zap className="w-6 h-6 text-white" fill="currentColor" />
            <span className="font-bold text-white">Young · Agile · Transparent · Performance-Led</span>
          </div>
        </div>
      </div>
    </section>
  );
}
