"use client";

import { useState } from "react";
import { Zap, Info, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { getIcon, safeColor } from "@/lib/icons";

export default function TeamView({ items }: { items: any[] }) {
  const team = items || [];
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const { isDark } = useTheme();

  const getDisplayColor = (color: string) => {
    color = safeColor(color); // blank OR invalid (e.g. "test4") falls back to white
    if (isDark) return color;
    // Map light colors to darker versions for light theme visibility
    if (color === "#ffffff") return "#000000";
    if (color === "#e5e7eb") return "#1f2937";
    if (color === "#d1d5db") return "#374151";
    return color;
  };

  if (!team.length) {
    return <section id="team" className="section-wrap team-section" />;
  }

  return (
    <section id="team" className="section-wrap team-section">
      <div className="section-inner">
        <div className="reveal text-center mb-10 md:mb-16">
          <span className="section-label" style={{ color: "var(--t-text)" }}>The People</span>
          <h2 className="section-heading" style={{ color: "var(--t-text)" }}>OUR TEAM</h2>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--t-text-muted)" }}>A young Gen-Z team building transparent & Performance Driven campaigns.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 stagger">
          {team.map((member, i) => {
            const displayColor = getDisplayColor(member.color);
            const Icon = getIcon(member.icon);
            return (
              <div
                key={member.name}
                className="reveal card-hover group relative overflow-hidden rounded-3xl p-6 md:p-8 text-center cursor-default transition-all duration-500 hover:-translate-y-2"
                style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}
              >
                {/* Animated Background Highlight */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" style={{ background: `radial-gradient(circle at 50% 0%, ${displayColor}11, transparent 70%)` }} />

                {/* Icon / Avatar Area */}
                <div className="relative mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center animate-float" style={{ background: `linear-gradient(135deg, ${displayColor}22, ${displayColor}05)`, border: `2px solid ${displayColor}33`, animationDelay: `${i * 0.5}s` }}>
                    <Icon className="w-12 h-12" style={{ color: displayColor }} strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${displayColor}44`, animation: "pulse-ring 3s ease-out infinite", animationDelay: `${i * 0.5}s` }} />
                </div>

                <h3 className="font-black text-xl mb-1" style={{ color: "var(--t-text)" }}>{member.name}</h3>
                <p className="font-medium text-sm mb-8" style={{ color: "var(--t-text-muted)" }}>{member.role}</p>

                {/* Hover Buttons Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-100 translate-y-0 md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:translate-y-4 group-hover:translate-y-0 flex-col gap-3 p-6">
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

                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl" style={{ background: `linear-gradient(90deg, transparent, ${displayColor}, transparent)` }} />
              </div>
            );
          })}
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
              className="absolute inset-0 backdrop-blur-md"
              style={{ background: isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--t-card-border)" }}
            >
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, transparent, ${getDisplayColor(selectedMember.color)}, transparent)` }} />

              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full transition-colors z-10"
                style={{ background: "var(--t-card-bg2)", color: "var(--t-text)" }}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${getDisplayColor(selectedMember.color)}11`, border: `1px solid ${getDisplayColor(selectedMember.color)}22` }}>
                    {(() => { const MIcon = getIcon(selectedMember.icon); return <MIcon className="w-8 h-8" style={{ color: getDisplayColor(selectedMember.color) }} />; })()}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-black break-words pr-8" style={{ color: "var(--t-text)" }}>{selectedMember.name}</h3>
                    <p className="font-medium text-sm md:text-base" style={{ color: "var(--t-text-muted)" }}>{selectedMember.role}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--t-text-faint)" }}>About & Expertise</h4>
                    <p className="leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                      {selectedMember.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderColor: "var(--t-card-border)" }}>
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2 font-bold text-sm hover:text-blue-400 transition-colors min-h-[44px]"
                      style={{ color: "var(--t-text)" }}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      View Full Profile
                    </a>

                    <button
                      onClick={() => setSelectedMember(null)}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg"
                      style={{
                        background: isDark ? "linear-gradient(135deg, #ffffff, #d1d5db)" : "linear-gradient(135deg, #000000, #374151)",
                        color: isDark ? "#000000" : "#ffffff"
                      }}
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
