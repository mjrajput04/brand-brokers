"use client";
import { useEffect, useRef, useState } from "react";

/* ── Per-letter interactive heading ── */
function MagneticHeading({ mouseRef }: { mouseRef: React.RefObject<{ x: number; y: number }> }) {
  const lines = ["BRAND", "BROKERS"];
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const allChars = lines.flatMap(l => Array.from(l));
  const [colors, setColors] = useState<string[]>(() => allChars.map(() => "#ffffff"));
  const rafRef = useRef<number>(0);
  
  // Updated palette with pink/violet/purple shades
  const palette = [
    "#ffffff", // White
    "#f1f5f9", // Ghost White
    "#e0e7ff", // Indigo 100
    "#c7d2fe", // Indigo 200
    "#a5b4fc", // Indigo 300
    "#c084fc", // Purple 400
    "#e879f9", // Fuchsia 400 (Pink/Violet)
    "#f472b6", // Pink 400
    "#818cf8", // Indigo 400
    "#6366f1", // Indigo 500
  ];

  useEffect(() => {
    const tick = (time: number) => {
      const mx = mouseRef.current!.x;
      const my = mouseRef.current!.y;
      
      const next = letterRefs.current.map((el, i) => {
        if (!el) return "#ffffff";
        
        // --- 1. Continuous RGB/Wave Effect (Complex Pattern) ---
        // time based movement + multiple sine waves for a "random" organic pattern
        const wave1 = Math.sin(i * 0.2 + time * 0.002);
        const wave2 = Math.sin(i * 0.3 - time * 0.001);
        const wave = (wave1 + wave2 + 2) / 4; // Normalized to 0-1
        
        // --- 2. Mouse Interaction ---
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2);
        
        let t;
        if (dist < 220) {
          const mouseT = 1 - dist / 220;
          // Combine wave and mouse: mouse makes it more intense
          t = Math.min(1, wave * 0.3 + mouseT * 0.8);
        } else {
          // Base continuous animation (RGB style)
          t = wave * 0.5; // Always show color
        }
        
        const paletteIdx = Math.floor(t * (palette.length - 1));
        return palette[paletteIdx];
      });
      
      setColors(next);
      rafRef.current = requestAnimationFrame(tick);
    };
    
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  let idx = 0;
  return (
    <h1 className="font-black leading-none animate-fade-up relative select-none"
      style={{ fontSize: "clamp(32px,9vw,120px)", letterSpacing: "-0.03em" }}>
      {lines.map((line, li) => (
        <div key={li} style={{ display: "block" }}>
          {Array.from(line).map((char) => {
            const i = idx++;
            return (
              <span key={i} ref={el => { letterRefs.current[i] = el; }}
                style={{ color: colors[i] ?? "#ffffff", display: "inline-block",
                  transitionProperty: "color", transitionDuration: "0.1s", transitionTimingFunction: "ease" }}>
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}

/* ── Per-letter interactive tagline ── */
function MagneticTagline({ mouseRef, text }: { mouseRef: React.RefObject<{ x: number; y: number }>; text: string }) {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [colors, setColors] = useState<string[]>(() => Array.from(text).map(() => "#888888"));
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      const mx = mouseRef.current!.x;
      const my = mouseRef.current!.y;
      const next = letterRefs.current.map((el) => {
        if (!el) return "#888888";
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2);
        if (dist > 140) return "#888888";
        const t = 1 - dist / 140;
        const v = Math.round(136 + t * (255 - 136));
        return `rgb(${v},${v},${v})`;
      });
      setColors(next);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <span>
      {Array.from(text).map((char, i) => (
        <span key={i} ref={el => { letterRefs.current[i] = el; }}
          style={{ color: colors[i] ?? "#888888", display: "inline-block", whiteSpace: "pre",
            transitionProperty: "color", transitionDuration: "0.1s", transitionTimingFunction: "ease" }}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const bbRef = useRef<HTMLSpanElement>(null);
  const [typed, setTyped] = useState("");
  const [logoPulsed, setLogoPulsed] = useState(false);
  const tagline = "FOR THE CREATORS, BY THE CREATORS";

  // Typewriter
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(tagline.slice(0, ++i));
      if (i >= tagline.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, []);

  // Logo pulse
  useEffect(() => {
    const t = setTimeout(() => setLogoPulsed(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Magnetic BB watermark
  useEffect(() => {
    let raf: number;
    const animate = () => {
      const el = bbRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (mouseRef.current.x - cx) * 0.04;
        const dy = (mouseRef.current.y - cy) * 0.04;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const particles: { x: number; y: number; ox: number; oy: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 220; i++) {
      const x = Math.random() * W, y = Math.random() * H;
      particles.push({ x, y, ox: x, oy: y, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: Math.random() * 4 + 1.5, alpha: Math.random() * 0.6 + 0.15 });
    }
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      particles.forEach(p => {
        const dx = p.x - mx, dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) { const f = (100 - dist) / 100; p.vx += (dx / dist) * f * 0.8; p.vy += (dy / dist) * f * 0.8; }
        p.vx += (p.ox - p.x) * 0.003; p.vy += (p.oy - p.y) * 0.003;
        p.vx *= 0.95; p.vy *= 0.95; p.x += p.vx; p.y += p.vy;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.1 * (1 - d / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full" style={{ background: "#0a0a0a", maxWidth: "100vw" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }} />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full animate-float" style={{ width: 400, height: 400, top: "-10%", left: "-8%", background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", animationDuration: "7s" }} />
        <div className="absolute rounded-full animate-float" style={{ width: 300, height: 300, bottom: "5%", right: "-5%", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)", animationDuration: "9s", animationDelay: "1s" }} />
        <div className="absolute rounded-full animate-float" style={{ width: 200, height: 200, top: "40%", right: "10%", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)", animationDuration: "6s", animationDelay: "2s" }} />
      </div>

      {/* BB watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden" style={{ maxWidth: "100vw" }}>
        <span ref={bbRef} className="font-black text-center leading-none"
          style={{ fontSize: "clamp(60px,18vw,280px)", color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.03)", letterSpacing: "-0.02em", willChange: "transform", maxWidth: "100vw" }}>
          BB
        </span>
      </div>

      <div className="section-wrap relative z-10 w-full flex flex-col items-center text-center">
        <div className="section-inner flex flex-col items-center">

          {/* Logo + Heading */}
          <div className="relative flex flex-col items-center animate-fade-in" style={{ marginBottom: "1.5rem" }}>
            {logoPulsed && (
              <>
                <span className="absolute rounded-full pointer-events-none" style={{ width: 220, height: 220, top: 0, left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,0.05)", animation: "pulse-ring 1.8s ease-out forwards" }} />
                <span className="absolute rounded-full pointer-events-none" style={{ width: 220, height: 220, top: 0, left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,0.03)", animation: "pulse-ring 1.8s ease-out 0.5s forwards" }} />
              </>
            )}
            <video src="/logo/logo-anim.webm" autoPlay loop muted playsInline
              className="relative z-10 animate-float"
              style={{ width: "clamp(140px, 18vw, 220px)", height: "clamp(140px, 18vw, 220px)", objectFit: "contain", mixBlendMode: "screen", animationDuration: "6s", marginBottom: "-24px" }} />
            <MagneticHeading mouseRef={mouseRef} />
          </div>

          {/* Tagline — typewriter then per-letter interactive */}
          <p className="font-medium tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-up delay-200" style={{ minHeight: "1.5em" }}>
            {typed.length < tagline.length ? (
              <span style={{ color: "#aaa" }}>
                {typed}
                <span className="inline-block w-0.5 h-4 ml-0.5 align-middle animate-pulse" style={{ background: "#ffffff" }} />
              </span>
            ) : (
              <MagneticTagline mouseRef={mouseRef} text={tagline} />
            )}
          </p>

          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 animate-fade-up delay-300" style={{ color: "#888", letterSpacing: "0.05em" }}>
            WHERE CREATORS MEET PERFORMANCE.<br />
            WHERE BRANDS MEET RESULTS.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400 w-full px-4 sm:px-0">
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[52px]"
              style={{ background: "linear-gradient(135deg,#ffffff,#d1d5db)", boxShadow: "0 8px 30px rgba(255,255,255,0.2)" }}>
              Let's Build Together →
            </button>
            <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black min-h-[52px]"
              style={{ borderColor: "#ffffff", color: "#ffffff", background: "transparent" }}>
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-800 cursor-pointer"
        onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ width: 26, height: 40, borderRadius: 13, border: "1.5px solid rgba(255,255,255,0.25)", position: "relative", display: "flex", justifyContent: "center", paddingTop: 7 }}>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#ffffff", animation: "scrollWheel 1.6s ease-in-out infinite" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={{ width: 10, height: 10, borderRight: "1.5px solid rgba(255,255,255,0.5)", borderBottom: "1.5px solid rgba(255,255,255,0.5)", transform: "rotate(45deg)", animation: "chevronFade 1.6s ease-in-out infinite" }} />
          <div style={{ width: 10, height: 10, borderRight: "1.5px solid rgba(255,255,255,0.25)", borderBottom: "1.5px solid rgba(255,255,255,0.25)", transform: "rotate(45deg)", animation: "chevronFade 1.6s ease-in-out 0.2s infinite" }} />
        </div>
      </div>
    </section>
  );
}
