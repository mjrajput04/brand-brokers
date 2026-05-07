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
    <section id="oem-&-ctv" className="section-wrap" style={{ background: "#0a0a0a" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-purple-400">Inventory</span>
          <h2 className="section-heading text-white">OEM & CTV ADS INVENTORY</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="reveal-left">
            <h3 className="font-black text-white text-xl mb-8 tracking-widest uppercase">Partners:</h3>
            <div className="grid grid-cols-3 gap-4">
              {partners.map((p, i) => (
                <div key={p} className="reveal card-hover p-4 rounded-2xl flex items-center justify-center font-black text-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", transitionDelay: `${i * 0.1}s` }}>
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-2xl" style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)" }}>
              <p className="text-purple-300 font-bold text-sm tracking-widest uppercase mb-2">Available Models:</p>
              <div className="flex gap-4">
                {["CPI", "CPC", "CPM"].map(m => (
                  <span key={m} className="px-4 py-2 rounded-full font-black text-sm" style={{ background: "#a855f7", color: "#fff" }}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-right flex items-center justify-center gap-4">
            {[0, 1, 2].map(i => (
              <div key={i} className="rounded-3xl overflow-hidden flex-shrink-0" style={{ width: i === 1 ? "100px" : "80px", height: i === 1 ? "200px" : "160px", background: "linear-gradient(160deg, #1a1a2e, #16213e)", border: "2px solid rgba(168,85,247,0.3)", animation: `float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.4}s`, boxShadow: i === 1 ? "0 20px 60px rgba(168,85,247,0.3)" : "none" }}>
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-2">
                  <div className="w-full h-3 rounded-full" style={{ background: "rgba(168,85,247,0.4)" }} />
                  <div className="w-3/4 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <div className="w-full rounded-xl flex items-center justify-center text-xs font-bold text-white" style={{ height: "50px", background: "linear-gradient(135deg,#a855f7,#7c3aed)" }}>YOUR APP</div>
                  <div className="w-full h-2 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
                  <div className="w-3/4 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal p-8 md:p-12 rounded-3xl" style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" }}>
          <h3 className="font-black text-white text-xl tracking-widest uppercase mb-8 text-center">CUMULATIVE REACH – WW & INDIA</h3>
          <div className="grid grid-cols-3 gap-6 stagger">
            {stats.map((s) => (
              <div key={s.label} className="reveal-scale text-center">
                <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2">{s.label}</p>
                <p className="font-black text-white" style={{ fontSize: "clamp(28px, 4vw, 56px)" }}>{s.value}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm" style={{ color: "#888" }}>Suitable for Consumer Tech Brands to reduce CAC through CPI Campaign</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal-left">
            <span className="section-label text-purple-400">More Offerings – OEM AD</span>
            <h3 className="font-black text-white text-2xl mt-2 mb-4">PRE INSTALLED APP INVENTORY (PAI)</h3>
            <p className="text-gray-300 leading-relaxed">A cloud managed distribution model where apps are pre installed at the factory or via cloud push before first device use, ensuring instant reach, zero CPI wastage, high visibility, and fraud free user acquisition.</p>
          </div>
          <div className="reveal-right flex justify-center">
            <div className="w-32 h-32 rounded-3xl flex items-center justify-center animate-float" style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", boxShadow: "0 20px 60px rgba(59,130,246,0.4)" }}>
              <Cloud className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
