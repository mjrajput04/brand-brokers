"use client";

const clients = [
  "Rooter", "Gamerji", "Infinix", "IQ Option",
  "Mobile Legends", "Rooter", "WePlay", "Indus Battle Royale",
  "BigCash", "Samsung", "STAN", "MetaSpace",
  "Jackaroo King", "MS5",
];

const row2 = [...clients].reverse();

const statsBar = [
  { num: "1500+", label: "Creators" },
  { num: "50+", label: "Brand Campaigns" },
  { num: "3.6M+", label: "Views Generated" },
  { num: "100%", label: "Transparent Reporting" },
];

export default function Clients() {
  return (
    <section id="clients" className="section-wrap" style={{ background: "#111111" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-purple-400">Our Work</span>
          <h2 className="section-heading text-white">CLIENT PORTFOLIO</h2>
          <p className="mt-4 text-gray-400 text-lg">Trusted by India's top gaming & tech brands</p>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="flex-shrink-0 px-6 py-4 rounded-2xl font-bold text-white text-sm" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", minWidth: "160px", textAlign: "center" }}>
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 */}
      <div className="relative overflow-hidden mb-16">
        <div className="flex gap-6 whitespace-nowrap" style={{ animation: "marquee 20s linear infinite reverse" }}>
          {[...row2, ...row2].map((c, i) => (
            <div key={i} className="flex-shrink-0 px-6 py-4 rounded-2xl font-bold text-sm" style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)", color: "#a855f7", minWidth: "160px", textAlign: "center" }}>
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="section-inner">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 stagger">
          {statsBar.map((s) => (
            <div key={s.label} className="reveal-scale text-center p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,85,247,0.15)" }}>
              <p className="font-black text-white" style={{ fontSize: "clamp(24px, 3vw, 40px)" }}>{s.num}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
