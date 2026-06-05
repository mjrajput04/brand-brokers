"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const rows = [
  { want: "Real Performance",    get: "Vanity Metrics",   pct: 23 },
  { want: "Authentic Creators",  get: "Fake Influence",   pct: 31 },
  { want: "Measurable ROI",      get: "Black-Box Spend",  pct: 18 },
];

function Bar({ pct, active }: { pct: number; active: boolean }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        setTimeout(() => setW(pct), 150);
      }
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} style={{ height: 4, borderRadius: 99, background: "var(--t-bar-bg)", overflow: "hidden" }}>
      <div style={{
        height: "100%", width: `${w}%`, borderRadius: 99,
        background: active ? "linear-gradient(90deg,var(--t-text),var(--t-text-muted))" : "var(--t-card-bg2)",
        transitionProperty: "width", transitionDuration: "1.1s", transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
        position: "relative", overflow: "hidden",
      }}>
        {active && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)", animation: "shimmer 1.6s linear infinite" }} />}
      </div>
    </div>
  );
}

export default function Problem() {
  const [active, setActive] = useState<number | null>(null);
  const [scan, setScan] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setScan(s => (s + 1) % 100), 28);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="problem" className="section-wrap problem-section" style={{ position: "relative", overflow: "hidden", paddingTop: "clamp(3rem,6vw,5rem)", paddingBottom: "clamp(3rem,6vw,5rem)" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at 50% 50%,black 30%,transparent 75%)" }} />
      <div aria-hidden style={{ position: "absolute", left: 0, right: 0, top: `${scan}%`, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06) 40%,rgba(255,255,255,0.06) 60%,transparent)", pointerEvents: "none" }} />

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal text-center mb-10">
          <span className="section-label" style={{ color: "var(--t-text)" }}>The Challenge</span>
          <h2 className="section-heading" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "var(--t-text)" }}>THE PROBLEM</h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "var(--t-text-faint)" }}>
            Brands know what they need. The market keeps delivering something else.
          </p>
        </div>

        {/* Desktop header — hidden on mobile */}
        <div className="reveal hidden sm:grid gap-3 mb-3" style={{ gridTemplateColumns: "1fr 32px 1fr auto" }}>
          <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--t-text-dim)", textAlign: "center" }}>✓ want</div>
          <div />
          <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: "#ef4444", textAlign: "center" }}>✗ get</div>
          <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--t-text-dark)", textAlign: "center", minWidth: 60 }}>score</div>
        </div>

        <div className="reveal flex flex-col gap-2">
          {rows.map((r, i) => {
            const on = active === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onTouchStart={() => setActive(i)}
                onTouchEnd={() => setTimeout(() => setActive(null), 600)}
                style={{
                  borderRadius: 14,
                  border: `1px solid ${on ? "var(--t-card-border2)" : "var(--t-card-border)"}`,
                  background: on ? "var(--t-card-bg)" : "transparent",
                  overflow: "hidden", cursor: "default",
                  transitionProperty: "border-color, background",
                  transitionDuration: "0.25s", transitionTimingFunction: "ease",
                }}
              >
                <div style={{ height: 1, background: on ? "linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)" : "transparent", transitionProperty: "background", transitionDuration: "0.25s", transitionTimingFunction: "ease" }} />

                {/* Mobile layout */}
                <div className="sm:hidden" style={{ padding: "14px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ fontWeight: 900, fontSize: 13, color: on ? "var(--t-text)" : "var(--t-text-muted)" }}>{r.want}</div>
                    <div style={{ fontWeight: 900, fontSize: 16, color: on ? "var(--t-text)" : "var(--t-text-dark)" }}>{r.pct}%</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <ArrowRight style={{ width: 10, height: 10, color: on ? "#ef4444" : "#374151", flexShrink: 0 }} />
                    <div className={on ? "glitch" : ""} data-text={r.get} style={{ fontWeight: 900, fontSize: 12, color: on ? "#f87171" : "var(--t-text-faint)" }}>{r.get}</div>
                  </div>
                  <Bar pct={r.pct} active={on} />
                </div>

                {/* Desktop layout */}
                <div className="hidden sm:grid" style={{ gridTemplateColumns: "1fr 32px 1fr auto", alignItems: "center", gap: 0 }}>
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ fontWeight: 900, fontSize: 13, color: on ? "var(--t-text)" : "var(--t-text-muted)", letterSpacing: "-0.01em", transitionProperty: "color", transitionDuration: "0.25s", transitionTimingFunction: "ease" }}>{r.want}</div>
                    <Bar pct={100} active={false} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <ArrowRight style={{ width: 12, height: 12, color: on ? "#ef4444" : "#374151", transitionProperty: "color", transitionDuration: "0.25s", transitionTimingFunction: "ease" }} />
                  </div>
                  <div style={{ padding: "14px 18px" }}>
                    <div className={on ? "glitch" : ""} data-text={r.get} style={{ fontWeight: 900, fontSize: 13, color: on ? "#f87171" : "var(--t-text-faint)", letterSpacing: "-0.01em", transitionProperty: "color", transitionDuration: "0.25s", transitionTimingFunction: "ease" }}>{r.get}</div>
                    <Bar pct={r.pct} active={on} />
                  </div>
                  <div style={{ padding: "14px 18px", minWidth: 60, textAlign: "center" }}>
                    <div style={{ fontWeight: 900, fontSize: 20, color: on ? "var(--t-text)" : "var(--t-text-dark)", lineHeight: 1, transitionProperty: "color", transitionDuration: "0.25s", transitionTimingFunction: "ease" }}>{r.pct}%</div>
                    <div style={{ fontSize: 9, color: "var(--t-text-dark)", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.1em" }}>satisfied</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-5 rounded-2xl" style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}>
          <p style={{ fontWeight: 900, fontSize: 15, color: "var(--t-text)", margin: 0, textAlign: "center" }}>
            Brand Brokers closes every gap.
          </p>
          <a
            href="#services"
            onClick={e => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", borderRadius: 10, fontWeight: 900, fontSize: 12, color: "#000", background: "linear-gradient(135deg,#fff,#d1d5db)", textDecoration: "none", flexShrink: 0, minHeight: 44 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            See How <ArrowRight style={{ width: 14, height: 14 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
