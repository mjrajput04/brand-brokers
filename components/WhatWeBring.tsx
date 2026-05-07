"use client";

import { Camera, Play, Music, Gamepad2, Smartphone, Tv, Globe, BarChart3, Cloud, Handshake } from "lucide-react";

const orbitingIcons = [
  { Icon: Camera, angle: 0 },
  { Icon: Play, angle: 72 },
  { Icon: Music, angle: 144 },
  { Icon: Gamepad2, angle: 216 },
  { Icon: Smartphone, angle: 288 },
];

const offerings = [
  { Icon: Tv, title: "OEM & CTV Ads Expertise" },
  { Icon: Globe, title: "Dedicated Creator Network Across Multiple Niches" },
  { Icon: BarChart3, title: "Measurable, Outcome Driven Approach" },
  { Icon: Cloud, title: "Pre-Install & Cloud Install Capabilities" },
  { Icon: Handshake, title: "Integrated Influencer + Performance Execution" },
];

export default function WhatWeBring() {
  return (
    <section id="what-we-bring" className="section-wrap overflow-hidden" style={{ background: "#0a0a0a" }}>
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(168,85,247,0.15)" }}>
                    <o.Icon className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-white">{o.title}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 reveal font-medium tracking-wide" style={{ color: "#a855f7" }}>
              WE CONNECT CREATORS, BRANDS, AND AUDIENCES SEAMLESSLY.
            </p>
          </div>

          {/* Right – orbit (no reveal class — reveal resets transform and breaks orbit positions) */}
          <div className="flex items-center justify-center">
            <div className="relative" style={{ width: 384, height: 384 }}>
              {/* Orbit rings */}
              <div className="absolute inset-0 rounded-full border" style={{ borderColor: "rgba(168,85,247,0.25)", animation: "spin-slow 20s linear infinite" }} />
              <div className="absolute inset-8 rounded-full border" style={{ borderColor: "rgba(168,85,247,0.15)", animation: "spin-slow 15s linear infinite reverse" }} />

              {/* Center icon */}
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

              {/* Orbiting icons — outer div positions, inner div floats */}
              {orbitingIcons.map((item, i) => {
                const rad = (item.angle * Math.PI) / 180;
                const radius = 160;
                const x = Math.round(Math.cos(rad) * radius * 1000) / 1000;
                const y = Math.round(Math.sin(rad) * radius * 1000) / 1000;
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      top: "50%", left: "50%",
                      marginTop: -24, marginLeft: -24,
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "rgba(168,85,247,0.25)",
                        border: "1px solid rgba(168,85,247,0.5)",
                        boxShadow: "0 4px 20px rgba(168,85,247,0.3)",
                        animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
                        animationDelay: `${Math.round(i * 0.3 * 10) / 10}s`,
                      }}
                    >
                      <item.Icon className="w-6 h-6 text-purple-300" strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
