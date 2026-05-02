"use client";

const orbitingIcons = [
  { emoji: "📸", angle: 0 },
  { emoji: "▶️", angle: 72 },
  { emoji: "🎵", angle: 144 },
  { emoji: "🎮", angle: 216 },
  { emoji: "📱", angle: 288 },
];

const offerings = [
  { icon: "📺", title: "OEM & CTV Ads Expertise" },
  { icon: "🌐", title: "Dedicated Creator Network Across Multiple Niches" },
  { icon: "📊", title: "Measurable, Outcome Driven Approach" },
  { icon: "☁️", title: "Pre-Install & Cloud Install Capabilities" },
  { icon: "🤝", title: "Integrated Influencer + Performance Execution" },
];

export default function WhatWeBring() {
  return (
    <section id="what-we-bring" className="section-wrap" style={{ background: "#0a0a0a" }}>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="reveal">
              <span className="section-label text-purple-400">Our Ecosystem</span>
              <h2 className="section-heading text-white">WHAT WE BRING</h2>
              <p className="mt-4 text-lg" style={{ color: "#aaa" }}>
                Brand Brokers provides a clean, measurable, creator-first advertising ecosystem.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 stagger">
              {offerings.map((o) => (
                <div
                  key={o.title}
                  className="reveal flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/5 cursor-default"
                  style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "rgba(168,85,247,0.15)" }}>
                    {o.icon}
                  </div>
                  <span className="font-semibold text-white">{o.title}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 reveal font-medium tracking-wide" style={{ color: "#a855f7" }}>
              WE CONNECT CREATORS, BRANDS, AND AUDIENCES SEAMLESSLY.
            </p>
          </div>

          {/* Right – orbit */}
          <div className="reveal-right flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border" style={{ borderColor: "rgba(168,85,247,0.15)", animation: "spin-slow 20s linear infinite" }} />
              <div className="absolute inset-8 rounded-full border" style={{ borderColor: "rgba(168,85,247,0.1)", animation: "spin-slow 15s linear infinite reverse" }} />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center animate-float" style={{ background: "linear-gradient(135deg,#a855f7,#7c3aed)", boxShadow: "0 20px 60px rgba(168,85,247,0.5)" }}>
                  <svg viewBox="0 0 40 40" fill="none" className="w-12 h-12">
                    <rect x="2" y="2" width="16" height="16" rx="3" fill="white" />
                    <rect x="22" y="2" width="16" height="16" rx="3" fill="rgba(255,255,255,0.5)" />
                    <rect x="2" y="22" width="16" height="16" rx="3" fill="rgba(255,255,255,0.5)" />
                    <rect x="22" y="22" width="16" height="16" rx="3" fill="white" />
                  </svg>
                </div>
              </div>

              {orbitingIcons.map((item, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    top: "50%", left: "50%",
                    margin: "-24px 0 0 -24px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transform: `rotate(${item.angle}deg) translateX(130px) rotate(-${item.angle}deg)`,
                    animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  {item.emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
