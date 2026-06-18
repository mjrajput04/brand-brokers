"use client";

import { useState } from "react";
import { X, ArrowRight, Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getIcon, safeColor } from "@/lib/icons";

export default function ServicesView({ items }: { items: any[] }) {
  const services = items || [];
  const [active, setActive] = useState<any | null>(null);
  const { isDark } = useTheme();

  if (services.length === 0) {
    return <section id="services" className="section-wrap services-section" />;
  }

  return (
    <>
      <section id="services" className="section-wrap services-section">
        <div className="section-inner">

          {/* Heading */}
          <div className="reveal text-center mb-10 md:mb-16">
            <span className="section-label" style={{ color: "var(--t-text)" }}>What We Do</span>
            <h2 className="section-heading" style={{ color: "var(--t-text)" }}>OUR SERVICES</h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => {
              // Use a valid hex (blank or garbage falls back to white), then adjust for light mode.
              const color = safeColor(s.color);
              const displayColor = (!isDark && color === "#ffffff") ? "#0a0a0a" : color;
              const cardNumber = String(i + 1).padStart(2, "0"); // auto-numbered by order
              const Icon = getIcon(s.icon);

              return (
                <div
                  key={s._id ?? s.title}
                  className="group relative rounded-3xl flex flex-col cursor-pointer overflow-hidden"
                  style={{
                    background: "var(--t-card-bg)",
                    border: "1px solid var(--t-card-border)",
                    transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                  }}
                  onClick={() => setActive(s)}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-8px)";
                    el.style.boxShadow = `0 30px 80px ${displayColor}22, 0 0 0 1px ${displayColor}44`;
                    el.style.borderColor = `${displayColor}44`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "var(--t-card-border)";
                  }}
                >
                  {/* Noise texture glow top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${displayColor}88, transparent)` }}
                  />
                  {/* Radial glow behind icon */}
                  <div
                    className="absolute top-0 left-0 right-0 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${displayColor}18 0%, transparent 70%)` }}
                  />

                  <div className="relative flex flex-col flex-1 p-6 md:p-8 gap-6">

                    {/* Number + Tag row */}
                    <div className="flex items-center justify-between">
                      <span
                        className="font-black text-5xl leading-none select-none"
                        style={{ color: isDark ? `${displayColor}18` : `${displayColor}15` }}
                      >
                        {cardNumber}
                      </span>
                      <span
                        className="text-xs font-black px-3 py-1.5 rounded-full tracking-wider"
                        style={{
                          background: isDark ? `${displayColor}18` : `${displayColor}08`,
                          color: displayColor,
                          border: `1px solid ${displayColor}22`
                        }}
                      >
                        {s.tag}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-2xl"
                      style={{
                        background: isDark ? `${displayColor}12` : `${displayColor}08`,
                        border: `1px solid ${displayColor}18`
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: displayColor }} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-black text-xl leading-tight tracking-tight whitespace-pre-line" style={{ color: "var(--t-text)" }}>
                        {s.title}
                      </h3>
                      <p className="text-xs mt-2 leading-relaxed" style={{ color: (displayColor === "#ffffff" || displayColor === "#0a0a0a") ? "var(--t-text-muted)" : `${displayColor}` }}>
                        {s.tagline}
                      </p>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: `linear-gradient(90deg, ${displayColor}33, transparent)` }} />

                    {/* Items */}
                    <ul className="flex flex-col gap-3 flex-1">
                      {s.items.map((item: string, j: number) => (
                        <li key={j} className="flex items-center gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: displayColor, opacity: 0.6 }}
                          />
                          <span className="text-sm" style={{ color: "var(--t-text-muted)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More CTA */}
                    <div
                      className="flex items-center justify-between pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      style={{ borderTop: `1px solid ${displayColor}18` }}
                    >
                      <span className="text-sm font-black" style={{ color: displayColor }}>
                        Learn More
                      </span>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: displayColor }}
                      >
                        <ArrowRight className="w-4 h-4" style={{ color: isDark ? "#000" : "#fff" }} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div
                    className="h-[3px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${displayColor}, transparent)` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {active && (() => {
        const activeColor = safeColor(active.color);
        const displayColor = (!isDark && activeColor === "#ffffff") ? "#0a0a0a" : activeColor;
        const ActiveIcon = getIcon(active.icon);
        const detail = active.detail || {};
        return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ background: isDark ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.9)", backdropFilter: "blur(16px)" }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl"
            style={{
              background: "var(--bg-secondary)",
              border: `1px solid ${displayColor}33`,
              boxShadow: isDark
                ? `0 0 0 1px ${displayColor}18, 0 50px 120px rgba(0,0,0,0.95)`
                : `0 0 0 1px ${displayColor}08, 0 50px 120px rgba(0,0,0,0.1)`,
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${displayColor}, transparent)` }} />
            <div className="absolute top-0 left-0 right-0 h-52 rounded-t-3xl pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${displayColor}1a, transparent 70%)` }} />

            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all hover:scale-110"
              style={{ background: "var(--t-icon-bg)", border: "1px solid var(--t-card-border)" }}
            >
              <X className="w-4 h-4" style={{ color: "var(--t-text)" }} />
            </button>

            <div className="relative p-6 md:p-12">
              {/* Modal header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl flex-shrink-0" style={{ background: `${displayColor}18`, border: `1px solid ${displayColor}33` }}>
                  <ActiveIcon className="w-7 h-7" style={{ color: displayColor }} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-black tracking-widest uppercase" style={{ color: displayColor }}>Our Service</span>
                  <h2 className="font-black text-xl md:text-3xl leading-tight whitespace-pre-line mt-1" style={{ color: "var(--t-text)" }}>{active.title}</h2>
                  <p className="text-sm mt-1" style={{ color: "var(--t-text-faint)" }}>{active.tagline}</p>
                </div>
              </div>

              <div className="mb-8" style={{ borderBottom: `1px solid var(--t-card-border)` }} />

              {/* What */}
              <div className="mb-8">
                <h4 className="font-black text-xs tracking-widest uppercase mb-3" style={{ color: displayColor }}>WHAT IS IT</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{detail.what}</p>
              </div>

              {/* Who */}
              <div className="mb-8">
                <h4 className="font-black text-xs tracking-widest uppercase mb-3" style={{ color: displayColor }}>WHO IS IT FOR</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{detail.who}</p>
              </div>

              {/* How */}
              <div className="mb-8">
                <h4 className="font-black text-xs tracking-widest uppercase mb-4" style={{ color: displayColor }}>HOW WE DO IT</h4>
                <div className="flex flex-col gap-3">
                  {(detail.how || []).map((step: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: displayColor }}>
                        <Check className="w-3.5 h-3.5" style={{ color: isDark ? "#000" : "#fff" }} strokeWidth={3} />
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfect For */}
              <div className="rounded-2xl p-6 mb-8" style={{ background: `${displayColor}08`, border: `1px solid ${displayColor}22` }}>
                <p className="text-xs font-black tracking-widest uppercase mb-3" style={{ color: displayColor }}>PERFECT FOR</p>
                <div className="flex flex-wrap gap-2">
                  {(detail.perfectFor || []).map((tag: string) => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: `${displayColor}14`, color: displayColor, border: `1px solid ${displayColor}33` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-sm hover:opacity-90 transition-opacity min-h-[48px]"
                  style={{ background: displayColor, color: isDark ? "#000" : "#fff" }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm transition-colors min-h-[48px]"
                  style={{ background: "var(--t-card-bg2)", border: "1px solid var(--t-card-border)", color: "var(--t-text-muted)" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )})()}
    </>
  );
}
