"use client";

import { Cloud } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const partners = ["Mi", "POCO", "realme", "OPPO", "Infinix", "TECNO", "OnePlus", "VIVO", "Samsung"];

export default function OemCtv() {
  const { isDark } = useTheme();

  return (
    <section id="oem-&-ctv" className="section-wrap oem-ctv-section">
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label" style={{ color: "var(--t-text)" }}>Inventory</span>
          <h2 className="section-heading" style={{ color: "var(--t-text)" }}>OEM & CTV ADS INVENTORY</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="reveal-left">
            <h3 className="font-black text-xl mb-8 tracking-widest uppercase" style={{ color: "var(--t-text)" }}>Partners:</h3>
            <div className="grid grid-cols-3 gap-5">
              {partners.map((p, i) => (
                <div key={p} className="reveal card-hover p-6 rounded-2xl flex items-center justify-center font-black text-lg min-h-[70px]" style={{ background: "var(--t-card-bg2)", border: "1px solid var(--t-card-border)", color: "var(--t-text)", transitionDelay: `${i * 0.1}s` }}>
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-2xl flex items-center justify-between gap-4" style={{ background: "var(--t-card-bg2)", border: "1px solid var(--t-card-border)" }}>
              <p className="font-bold text-sm tracking-widest uppercase" style={{ color: "var(--t-text-muted)" }}>Available Models:</p>
              <div className="flex gap-3">
                {["CPI", "CPC", "CPM"].map(m => (
                  <span key={m} className="px-4 py-2 rounded-full font-black text-sm" style={{ background: isDark ? "#ffffff" : "#000000", color: isDark ? "#000" : "#fff" }}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Reach visualization */}
          <div className="reveal-right flex flex-col gap-4 w-full">
            {/* Big reach number */}
            <div
              className="p-6 rounded-3xl"
              style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}
            >
              <p className="text-xs font-black tracking-[0.2em] uppercase mb-2" style={{ color: "var(--t-text-faint)" }}>Total Device Reach</p>
              <p className="font-black" style={{ fontSize: "clamp(40px,5vw,64px)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--t-text)" }}>
                1.69<span style={{ color: "var(--t-text-muted)" }}>B+</span>
              </p>
              <p className="text-xs mt-2" style={{ color: "var(--t-text-faint)" }}>Devices globally across OEM network</p>
            </div>

            {/* Reach bars */}
            {[
              { label: "OEM India",     value: "350M+",   pct: 21,  color: isDark ? "#ffffff" : "#000000" },
              { label: "OEM Worldwide", value: "1340M+",  pct: 79,  color: isDark ? "#9ca3af" : "#444444" },
              { label: "CTV India",     value: "6M+",     pct: 4,   color: isDark ? "#6b7280" : "#666666" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "16px 20px", borderRadius: 16, background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--t-text-faint)" }}>{s.label}</span>
                  <span style={{ fontWeight: 900, fontSize: 18, color: "var(--t-text)" }}>{s.value}</span>
                </div>
                <div style={{ height: 5, borderRadius: 99, background: "var(--t-bar-bg)", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${s.pct}%`,
                    borderRadius: 99,
                    background: `linear-gradient(90deg, ${s.color}, ${s.color}66)`,
                    animation: "expandBar 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
                    animationDelay: `${i * 0.15}s`,
                    transformOrigin: "left",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal p-8 md:p-12 rounded-3xl" style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Preferred by */}
            <div>
              <h3 className="font-black text-sm tracking-[0.2em] uppercase mb-6" style={{ color: "var(--t-text)" }}>
                Preferred by:
              </h3>
              <div className="flex flex-col gap-4">
                {["Consumer Tech", "Gaming & Entertainment", "Fintech & Apps"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--t-text-dim)" }} />
                    <span className="font-bold text-lg" style={{ color: "var(--t-text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Used for */}
            <div>
              <h3 className="font-black text-sm tracking-[0.2em] uppercase mb-6" style={{ color: "var(--t-text)" }}>
                Used for:
              </h3>
              <div className="flex flex-col gap-4">
                {["Reduce CAC", "High Volume UA"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--t-text-dim)" }} />
                    <span className="font-bold text-lg" style={{ color: "var(--t-text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal-left">
            <span className="section-label" style={{ color: "var(--t-text)" }}>More Offerings – OEM AD</span>
            <h3 className="font-black text-2xl mt-2 mb-4" style={{ color: "var(--t-text)" }}>PRE INSTALLED APP INVENTORY (PAI)</h3>
            <p className="leading-relaxed" style={{ color: "var(--t-text-muted)" }}>A cloud managed distribution model where apps are pre installed at the factory or via cloud push before first device use, ensuring instant reach, zero CPI wastage, high visibility, and fraud free user acquisition.</p>
          </div>
          <div className="reveal-right flex justify-center">
            <div className="w-32 h-32 rounded-3xl flex items-center justify-center animate-float" style={{ background: isDark ? "linear-gradient(135deg,#ffffff,#9ca3af)" : "linear-gradient(135deg,#1a1a1a,#444444)", boxShadow: isDark ? "0 20px 60px rgba(255,255,255,0.1)" : "0 20px 60px rgba(0,0,0,0.1)" }}>
              <Cloud className="w-16 h-16" style={{ color: isDark ? "#000" : "#fff" }} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
