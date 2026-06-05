"use client";

import { useState } from "react";
import { Rocket, BarChart, Handshake, Zap, Info, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  { 
    name: "Rohit Chattopadhyay", 
    role: "Co-Founder & CEO", 
    Icon: Rocket, 
    color: "#ffffff",
    linkedin: "https://www.linkedin.com/in/rohit-chattopadhyay/",
    description: "Leading the vision and strategy at Brand Brokers. Focused on building a performance-driven ecosystem for creators and brands. Rohit ensures that every campaign aligns with our core values of transparency and excellence."
  },
  { 
    name: "Arkajyoti Majumdar", 
    role: "Co-Founder & CMO", 
    Icon: BarChart, 
    color: "#e5e7eb",
    linkedin: "https://www.linkedin.com/in/arkajyoti-majumdar/",
    description: "The mastermind behind our growth marketing strategies. specialized in data-driven performance marketing and creator-led brand building for Gen-Z audiences. Arka turns insights into results."
  },
  { 
    name: "Sayak Daw", 
    role: "Co-Founder & Head of Partnerships", 
    Icon: Handshake, 
    color: "#d1d5db",
    linkedin: "https://www.linkedin.com/in/sayak-daw/",
    description: "Bridging the gap between global brands and top-tier creators. Sayak focuses on building long-term, sustainable partnerships that deliver value to all stakeholders in the creator economy."
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <section id="team" className="section-wrap team-section" style={{ overflowX: "hidden" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label" style={{ color: "var(--t-text)" }}>The People</span>
          <h2 className="section-heading" style={{ color: "var(--t-text)" }}>OUR TEAM</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "var(--t-text-muted)" }}>A young Gen-Z team building transparent & Performance Driven campaigns.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger">
          {team.map((member, i) => (
            <div 
              key={member.name} 
              className="reveal card-hover group relative overflow-hidden rounded-3xl p-8 text-center cursor-default transition-all duration-500 hover:-translate-y-2" 
              style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}
            >
              {/* Animated Background Highlight */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" style={{ background: `radial-gradient(circle at 50% 0%, ${member.color}11, transparent 70%)` }} />

              {/* Icon / Avatar Area */}
              <div className="relative mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center animate-float" style={{ background: `linear-gradient(135deg, ${member.color}22, ${member.color}05)`, border: `2px solid ${member.color}33`, animationDelay: `${i * 0.5}s` }}>
                  <member.Icon className="w-12 h-12" style={{ color: member.color }} strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${member.color}44`, animation: "pulse-ring 3s ease-out infinite", animationDelay: `${i * 0.5}s` }} />
              </div>

              <h3 className="font-black text-xl mb-1" style={{ color: "var(--t-text)" }}>{member.name}</h3>
              <p className="font-medium text-sm mb-8" style={{ color: "var(--t-text-muted)" }}>{member.role}</p>

              {/* Hover Buttons Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex-col gap-3 p-6">
                <button 
                  onClick={() => setSelectedMember(member)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-black text-sm transition-all hover:scale-105 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #ffffff, #d1d5db)" }}
                >
                  <Info className="w-4 h-4" /> Know More
                </button>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm border border-white/20 transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg> LinkedIn
                </a>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl" style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full" style={{ background: "var(--t-card-bg2)", border: "1px solid var(--t-card-border)" }}>
            <Zap className="w-5 h-5 flex-shrink-0" style={{ color: "var(--t-text)" }} fill="currentColor" />
            <span className="font-bold text-sm text-center" style={{ color: "var(--t-text)" }}>Young · Agile · Transparent · Performance Driven</span>
          </div>
        </div>
      </div>

      {/* Know More Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}
            >
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, transparent, ${selectedMember.color}, transparent)` }} />
              
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${selectedMember.color}11`, border: `1px solid ${selectedMember.color}22` }}>
                    <selectedMember.Icon className="w-8 h-8" style={{ color: selectedMember.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black" style={{ color: "var(--t-text)" }}>{selectedMember.name}</h3>
                    <p className="font-medium" style={{ color: "var(--t-text-muted)" }}>{selectedMember.role}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--t-text-faint)" }}>About & Expertise</h4>
                    <p className="leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                      {selectedMember.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                    <a 
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-bold text-sm hover:text-blue-400 transition-colors"
                      style={{ color: "var(--t-text)" }}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      View Full Profile
                    </a>
                    
                    <button 
                      onClick={() => setSelectedMember(null)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
                    >
                      Close <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
