"use client";

import { Cloud } from "lucide-react";

const partners = ["Mi", "POCO", "realme", "OPPO", "Infinix", "TECNO"];
const stats = [
  { label: "OEM India", value: "350M+" },
  { label: "OEM Worldwide", value: "1340M+" },
  { label: "CTV India", value: "6M+" },
];

export default function OemCtv() {
  return (
    <section id="oem-&-ctv" className="section-wrap" style={{ background: "#141414", overflowX: "hidden" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-white">Inventory</span>
          <h2 className="section-heading text-white">OEM & CTV ADS INVENTORY</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="reveal-left">
            <h3 className="font-black text-white text-xl mb-8 tracking-widest uppercase">Partners:</h3>
            <div className="grid grid-cols-3 gap-4">
              {partners.map((p, i) => (
                <div key={p} className="reveal card-hover p-4 rounded-2xl flex items-center justify-center font-black text-lg min-h-[56px]" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", transitionDelay: `${i * 0.1}s` }}>
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">Available Models:</p>
              <div className="flex gap-4">
                {["CPI", "CPC", "CPM"].map(m => (
                  <span key={m} className="px-4 py-2 rounded-full font-black text-sm" style={{ background: "#ffffff", color: "#000" }}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Reach visualization */}
          <div className="reveal-right flex flex-col gap-4 w-full">
            {/* Big reach number */}
            <div
              className="p-6 rounded-3xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-xs font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Total Device Reach</p>
              <p className="font-black text-white" style={{ fontSize: "clamp(40px,5vw,64px)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                1.69<span style={{ color: "#9ca3af" }}>B+</span>
              </p>
              <p className="text-gray-500 text-xs mt-2">Devices globally across OEM network</p>
            </div>

            {/* Reach bars */}
            {[
              { label: "OEM India",     value: "350M+",   pct: 21,  color: "#ffffff" },
              { label: "OEM Worldwide", value: "1340M+",  pct: 79,  color: "#9ca3af" },
              { label: "CTV India",     value: "6M+",     pct: 4,   color: "#6b7280" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "16px 20px", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280" }}>{s.label}</span>
                  <span style={{ fontWeight: 900, fontSize: 18, color: "#ffffff" }}>{s.value}</span>
                </div>
                <div style={{ height: 5, borderRadius: 99, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
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

            {/* Models row */}
            <div style={{ display: "flex", gap: 8 }}>
              {["CPI", "CPC", "CPM"].map(m => (
                <div key={m} style={{
                  flex: 1, textAlign: "center", padding: "10px 0",
                  borderRadius: 12, fontWeight: 900, fontSize: 13,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                }}>
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal p-8 md:p-12 rounded-3xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h3 className="font-black text-white text-xl tracking-widest uppercase mb-8 text-center">CUMULATIVE REACH – WW & INDIA</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger">
            {stats.map((s) => (
              <div key={s.label} className="reveal-scale text-center">
                <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">{s.label}</p>
                <p className="font-black text-white" style={{ fontSize: "clamp(28px, 4vw, 56px)" }}>{s.value}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm" style={{ color: "#888" }}>Suitable for Consumer Tech Brands to reduce CAC through CPI Campaign</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal-left">
            <span className="section-label text-white">More Offerings – OEM AD</span>
            <h3 className="font-black text-white text-2xl mt-2 mb-4">PRE INSTALLED APP INVENTORY (PAI)</h3>
            <p className="text-gray-300 leading-relaxed">A cloud managed distribution model where apps are pre installed at the factory or via cloud push before first device use, ensuring instant reach, zero CPI wastage, high visibility, and fraud free user acquisition.</p>
          </div>
          <div className="reveal-right flex justify-center">
            <div className="w-32 h-32 rounded-3xl flex items-center justify-center animate-float" style={{ background: "linear-gradient(135deg,#ffffff,#9ca3af)", boxShadow: "0 20px 60px rgba(255,255,255,0.1)" }}>
              <Cloud className="w-16 h-16 text-black" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
