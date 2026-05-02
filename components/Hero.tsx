"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5, alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168,85,247,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
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
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#f0ede8" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />

      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <span
          className="font-black text-center leading-none"
          style={{ fontSize: "clamp(80px, 18vw, 280px)", color: "transparent", WebkitTextStroke: "1px rgba(0,0,0,0.04)", letterSpacing: "-0.02em" }}
        >
          BB
        </span>
      </div>

      <div className="section-wrap relative z-10 w-full flex flex-col items-center text-center">
        <div className="section-inner flex flex-col items-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img src="/logo/logo-black.png" alt="Brand Brokers" className="w-20 h-20 object-contain" />
          </div>

          <h1 className="font-black leading-none mb-6 animate-fade-up" style={{ fontSize: "clamp(42px, 80vw, 120px)", letterSpacing: "-0.03em", color: "#0a0a0a" }}>
            BRAND<br />
            <span className="shimmer-text">BROKERS</span>
          </h1>

          <p className="font-medium tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-up delay-200" style={{ color: "#555" }}>
            FOR THE CREATORS, BY THE CREATORS
          </p>

          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 animate-fade-up delay-300" style={{ color: "#333", letterSpacing: "0.05em" }}>
            WHERE CREATORS MEET PERFORMANCE.<br />
            WHERE BRANDS MEET RESULTS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)", boxShadow: "0 8px 30px rgba(168,85,247,0.4)" }}
            >
              Let's Build Together →
            </button>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:scale-105"
              style={{ borderColor: "#0a0a0a", color: "#0a0a0a", background: "transparent" }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
        <span className="text-xs tracking-widest" style={{ color: "#888" }}>SCROLL</span>
        <div className="w-px h-12 relative overflow-hidden" style={{ background: "rgba(0,0,0,0.1)" }}>
          <div className="absolute top-0 left-0 w-full" style={{ height: "40%", background: "linear-gradient(to bottom, #a855f7, transparent)", animation: "fadeUp 1.5s ease infinite" }} />
        </div>
      </div>
    </section>
  );
}
