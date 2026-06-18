"use client";

import { useState } from "react";
import { X, ArrowRight, Target, Lightbulb, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { getIcon, safeColor } from "@/lib/icons";
import { useTheme } from "@/contexts/ThemeContext";

export default function CaseStudiesView({ items }: { items: any[] }) {
  // Default missing colors so a case created without one still renders styled.
  const cases = (items || []).map((cs: any) => {
    const color = safeColor(cs.color, "#a78bfa");
    return { ...cs, color, accentLight: safeColor(cs.accentLight, color) };
  });
  const [active, setActive] = useState<any | null>(null);
  const [current, setCurrent] = useState(0);
  const { isDark } = useTheme();

  const prev = () => setCurrent(c => (c - 1 + cases.length) % cases.length);
  const next = () => setCurrent(c => (c + 1) % cases.length);

  if (cases.length === 0) {
    return <section id="case-studies" className="section-wrap case-studies-section" />;
  }

  const safeCurrent = current % cases.length;
  const c = cases[safeCurrent];

  return (
    <>
      <section id="case-studies" className="section-wrap case-studies-section">
        <div className="section-inner">
          <div className="reveal text-center mb-10 md:mb-16">
            <span className="section-label" style={{ color: "var(--t-text)" }}>Proof of Work</span>
            <h2 className="section-heading" style={{ color: "var(--t-text)" }}>CASE STUDIES</h2>
            <p className="text-sm mt-4" style={{ color: "var(--t-text-faint)" }}>Click any card for the full breakdown</p>
          </div>

          {/* Slider */}
          <div className="relative">
            {/* Card */}
            <div
              key={safeCurrent}
              className="group relative rounded-3xl cursor-pointer overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${c.color}44`,
                boxShadow: `0 0 60px ${c.color}12`,
                animation: "slideInCard 0.35s cubic-bezier(0.16,1,0.3,1) forwards",
              }}
              onClick={() => setActive(c)}
            >
              {/* Left color bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl" style={{ background: `linear-gradient(to bottom, ${c.color}, transparent)` }} />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at 0% 50%, ${c.color}0f, transparent 60%)` }} />

              <div className="relative grid md:grid-cols-2 gap-6 items-start p-6 md:p-10">
                {/* LEFT */}
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-black text-5xl md:text-6xl select-none" style={{ color: `${c.color}22`, lineHeight: 1 }}>{String(safeCurrent + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: c.color }}>{c.category}</p>
                      <h3 className="font-black text-2xl md:text-3xl" style={{ color: "var(--t-text)" }}>{c.brand}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {[{ label: "OBJECTIVE", text: c.objective }, { label: "STRATEGY", text: c.strategy }].map(({ label, text }) => (
                      <div key={label}>
                        <h4 className="font-black text-xs tracking-widest uppercase mb-1.5" style={{ color: c.color }}>{label}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{text}</p>
                      </div>
                    ))}
                    <div>
                      <h4 className="font-black text-xs tracking-widest uppercase mb-2" style={{ color: c.color }}>EXECUTION</h4>
                      <ul className="flex flex-col gap-1.5">
                        {(c.execution || []).map((ex: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--t-text-muted)" }}>
                            <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: c.color }} />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <h4 className="font-black text-xs tracking-widest uppercase mb-4" style={{ color: c.color }}>KEY RESULTS</h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {(c.stats || []).map((s: any, j: number) => {
                      const SIcon = getIcon(s.icon);
                      return (
                      <div key={j} className="flex flex-col items-center p-4 rounded-2xl" style={{ background: `${c.color}0d`, border: `1px solid ${c.color}28` }}>
                        <SIcon className="w-5 h-5 mb-2" style={{ color: c.color }} strokeWidth={1.5} />
                        <span className="font-black text-2xl" style={{ color: "var(--t-text)" }}>{s.value}</span>
                        <span className="text-xs mt-0.5" style={{ color: "var(--t-text-faint)" }}>{s.label}</span>
                      </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between px-5 py-3.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ background: `${c.color}14`, border: `1px solid ${c.color}33` }}>
                    <span className="text-sm font-black" style={{ color: c.color }}>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" style={{ color: c.color }} />
                  </div>
                </div>
              </div>

              {/* Bottom nav bar — inside the card */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderTop: `1px solid ${c.color}22`, background: `${c.color}08` }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={prev}
                  className="flex items-center gap-2 text-sm font-bold transition-all duration-200 hover:opacity-100 min-h-[44px] px-2"
                  style={{ color: c.color, opacity: 0.8 }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {cases.map((cs: any, i: number) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      style={{
                        width: i === safeCurrent ? 20 : 5,
                        height: 5,
                        borderRadius: 99,
                        background: i === safeCurrent ? cs.color : "rgba(255,255,255,0.2)",
                        transitionProperty: "width, background",
                        transitionDuration: "0.3s",
                        transitionTimingFunction: "ease",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="flex items-center gap-2 text-sm font-bold transition-all duration-200 min-h-[44px] px-2"
                  style={{ color: c.color, opacity: 0.8 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ background: isDark ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.9)", backdropFilter: "blur(16px)" }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl"
            style={{
              background: "var(--bg-secondary)",
              border: `1px solid ${active.color}33`,
              boxShadow: isDark
                ? `0 0 0 1px ${active.color}18, 0 50px 120px rgba(0,0,0,0.9)`
                : `0 0 0 1px ${active.color}08, 0 50px 120px rgba(0,0,0,0.1)`
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${active.color}, ${active.accentLight}, ${active.color})` }} />
            <div className="absolute top-0 left-0 right-0 h-48 rounded-t-3xl pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${active.color}18, transparent 70%)` }} />
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
              style={{ background: "var(--t-icon-bg)", border: "1px solid var(--t-card-border)", color: "var(--t-text)" }}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative p-6 md:p-12">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-black text-5xl md:text-7xl select-none leading-none" style={{ color: `${active.color}22` }}>{String(cases.indexOf(active) + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase" style={{ color: active.color }}>{active.category}</p>
                    <h2 className="font-black text-2xl md:text-4xl" style={{ color: "var(--t-text)" }}>{active.brand}</h2>
                  </div>
                </div>
                <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--t-text-faint)" }}>{active.objective}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {(active.stats || []).map((s: any, j: number) => {
                  const SIcon = getIcon(s.icon);
                  return (
                  <div key={j} className="flex flex-col items-center py-4 px-3 rounded-2xl" style={{ background: `${active.color}0f`, border: `1px solid ${active.color}28` }}>
                    <SIcon className="w-5 h-5 mb-2" style={{ color: active.color }} strokeWidth={1.5} />
                    <span className="font-black text-xl" style={{ color: "var(--t-text)" }}>{s.value}</span>
                    <span className="text-xs mt-0.5" style={{ color: "var(--t-text-faint)" }}>{s.label}</span>
                  </div>
                  );
                })}
              </div>
              <div className="mb-6" style={{ borderBottom: "1px solid var(--t-card-border)" }} />
              {[
                { Icon: Target,   title: "BACKGROUND AND CHALLENGE", text: active.fullDetail?.background },
                { Icon: Lightbulb, title: "OUR APPROACH",             text: active.fullDetail?.approach },
                { Icon: Zap,      title: "RESULTS",                   text: active.fullDetail?.results },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-3 mb-6">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ background: `${active.color}18`, border: `1px solid ${active.color}33` }}>
                    <Icon className="w-4 h-4" style={{ color: active.color }} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs tracking-widest uppercase mb-2" style={{ color: active.color }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{text}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 mb-6">
                <h4 className="font-black text-xs tracking-widest uppercase" style={{ color: active.color }}>EXECUTION BREAKDOWN</h4>
                {(active.execution || []).map((ex: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs" style={{ background: active.color, color: "#000" }}>{i + 1}</div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{ex}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-5 mb-6" style={{ background: `${active.color}0a`, border: `1px solid ${active.color}22` }}>
                <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: active.color }}>KEY LEARNING</p>
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--t-text-muted)" }}>&ldquo;{active.fullDetail?.learnings}&rdquo;</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" onClick={() => setActive(null)} className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-sm hover:opacity-90 transition-opacity min-h-[48px]" style={{ background: active.color, color: "#000" }}>
                  Work With Us <ArrowRight className="w-4 h-4" />
                </a>
                <button onClick={() => setActive(null)} className="flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm transition-colors min-h-[48px]" style={{ background: "var(--t-card-bg2)", border: "1px solid var(--t-card-border)", color: "var(--t-text-muted)" }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
