"use client";

import { useEffect, useRef } from "react";
import { Camera, Play, Music, Gamepad2, Smartphone, Tv, Globe, BarChart3, Cloud, Handshake } from "lucide-react";
import { createRoot } from "react-dom/client";

const orbitingIcons = [
  { Icon: Camera },
  { Icon: Play },
  { Icon: Music },
  { Icon: Gamepad2 },
  { Icon: Smartphone },
];

const offerings = [
  { Icon: Tv,        title: "OEM & CTV Ads Expertise" },
  { Icon: Globe,     title: "Dedicated Creator Network Across Multiple Niches" },
  { Icon: BarChart3, title: "Measurable, Outcome Driven Approach" },
  { Icon: Cloud,     title: "Pre-Install & Cloud Install Capabilities" },
  { Icon: Handshake, title: "Integrated Influencer + Performance Execution" },
];

function OrbitVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  const SIZE = 340;
  const CENTER = SIZE / 2;
  const RADIUS = 130;
  const ICON_SIZE = 48;
  const N = orbitingIcons.length;

  useEffect(() => {
    const tick = () => {
      angleRef.current += 0.4;
      const a = angleRef.current;
      dotsRef.current.forEach((el, i) => {
        if (!el) return;
        const theta = ((a + (i * 360) / N) * Math.PI) / 180;
        const x = CENTER + Math.cos(theta) * RADIUS - ICON_SIZE / 2;
        const y = CENTER + Math.sin(theta) * RADIUS - ICON_SIZE / 2;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        // Subtle scale pulsing
        const pulse = 1 + 0.06 * Math.sin((a * Math.PI) / 180 + i * 1.2);
        el.style.transform = `scale(${pulse})`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div ref={containerRef} style={{ width: SIZE, height: SIZE, position: "relative", flexShrink: 0 }}>

      {/* Outer glow halo */}
      <div style={{
        position: "absolute",
        inset: -24,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Orbit track — dashed ring */}
      <div style={{
        position: "absolute",
        top: CENTER - RADIUS - ICON_SIZE / 2,
        left: CENTER - RADIUS - ICON_SIZE / 2,
        width: (RADIUS + ICON_SIZE / 2) * 2,
        height: (RADIUS + ICON_SIZE / 2) * 2,
        borderRadius: "50%",
        border: "1px dashed rgba(255,255,255,0.08)",
        pointerEvents: "none",
      }} />

      {/* Inner decorative ring */}
      <div style={{
        position: "absolute",
        top: CENTER - 72, left: CENTER - 72,
        width: 144, height: 144,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.05)",
        pointerEvents: "none",
      }} />

      {/* Center logo */}
      <div style={{
        position: "absolute",
        top: CENTER - 52, left: CENTER - 52,
        width: 104, height: 104,
        borderRadius: 28,
        background: "linear-gradient(135deg,#ffffff,#d1d5db)",
        boxShadow: "0 16px 50px rgba(255,255,255,0.18), 0 0 0 1px rgba(255,255,255,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "float 5s ease-in-out infinite",
      }}>
        <svg viewBox="0 0 40 40" fill="none" style={{ width: 52, height: 52 }}>
          <rect x="2"  y="2"  width="16" height="16" rx="3" fill="#0a0a0a" />
          <rect x="22" y="2"  width="16" height="16" rx="3" fill="rgba(0,0,0,0.4)" />
          <rect x="2"  y="22" width="16" height="16" rx="3" fill="rgba(0,0,0,0.4)" />
          <rect x="22" y="22" width="16" height="16" rx="3" fill="#0a0a0a" />
        </svg>
      </div>

      {/* Orbiting icon placeholders — positioned by rAF */}
      {orbitingIcons.map(({ Icon }, i) => (
        <div
          key={i}
          ref={el => { if (el) dotsRef.current[i] = el; }}
          style={{
            position: "absolute",
            width: ICON_SIZE,
            height: ICON_SIZE,
            borderRadius: 14,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            willChange: "left, top, transform",
          }}
        >
          <Icon style={{ width: 22, height: 22, color: "rgba(255,255,255,0.85)", strokeWidth: 1.5 }} />
        </div>
      ))}
    </div>
  );
}

export default function WhatWeBring() {
  return (
    <section id="what-we-bring" className="section-wrap" style={{ background: "#0a0a0a", overflowX: "hidden" }}>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="reveal">
              <span className="section-label text-white">Our Ecosystem</span>
              <h2 className="section-heading text-white">WHAT WE BRING</h2>
              <p className="mt-4 text-lg" style={{ color: "#aaa" }}>
                Brand Brokers provides a clean, measurable, creator-first advertising ecosystem.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 stagger">
              {offerings.map((o) => (
                <div
                  key={o.title}
                  className="reveal flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default"
                  style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <o.Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-white text-sm">{o.title}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 reveal font-black text-white text-sm tracking-widest">
              WE CONNECT CREATORS, BRANDS, AND AUDIENCES SEAMLESSLY.
            </p>
          </div>

          {/* Right — orbit */}
          <div className="hidden md:flex items-center justify-center">
            <OrbitVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
