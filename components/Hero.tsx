"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const bbRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [logoPulsed, setLogoPulsed] = useState(false);
  const [h1Hovered, setH1Hovered] = useState(false);

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

  // Logo pulse trigger
  useEffect(() => {
    const t = setTimeout(() => setLogoPulsed(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Mouse tracking + spotlight on h1
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      const overlay = overlayRef.current;
      const h1 = h1Ref.current;
      if (overlay && h1) {
        const rect = h1.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        overlay.style.setProperty("--mx", `${x}px`);
        overlay.style.setProperty("--my", `${y}px`);
      }
    };
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

  // Canvas particles with mouse repel
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; ox: number; oy: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 220; i++) {
      const x = Math.random() * W, y = Math.random() * H;
      particles.push({
        x, y, ox: x, oy: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 4 + 1.5,
        alpha: Math.random() * 0.6 + 0.15,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x, my = mouseRef.current.y;

      particles.forEach(p => {
        // repel from mouse
        const dx = p.x - mx, dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.vx += (dx / dist) * force * 0.8;
          p.vy += (dy / dist) * force * 0.8;
        }
        // drift back to origin
        p.vx += (p.ox - p.x) * 0.003;
        p.vy += (p.oy - p.y) * 0.003;
        p.vx *= 0.95; p.vy *= 0.95;
        p.x += p.vx; p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.alpha})`;
        ctx.fill();
      });

      // connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168,85,247,${0.1 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#f0ede8" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full animate-float"
          style={{ width: 400, height: 400, top: "-10%", left: "-8%", background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)", animationDuration: "7s" }} />
        <div className="absolute rounded-full animate-float"
          style={{ width: 300, height: 300, bottom: "5%", right: "-5%", background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", animationDuration: "9s", animationDelay: "1s" }} />
        <div className="absolute rounded-full animate-float"
          style={{ width: 200, height: 200, top: "40%", right: "10%", background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)", animationDuration: "6s", animationDelay: "2s" }} />
      </div>

      {/* BB watermark — magnetic */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <span
          ref={bbRef}
          className="font-black text-center leading-none"
          style={{ fontSize: "clamp(80px, 18vw, 280px)", color: "transparent", WebkitTextStroke: "1px rgba(0,0,0,0.04)", letterSpacing: "-0.02em", transition: "transform 0.1s ease", willChange: "transform" }}
        >
          BB
        </span>
      </div>

      <div className="section-wrap relative z-10 w-full flex flex-col items-center text-center">
        <div className="section-inner flex flex-col items-center">

          {/* Logo with pulse ring */}
          <div className="relative flex justify-center mb-8 animate-fade-in">
            {logoPulsed && (
              <>
                <span className="absolute inset-0 m-auto rounded-full" style={{ width: 80, height: 80, background: "rgba(168,85,247,0.2)", animation: "pulse-ring 1.5s ease-out forwards" }} />
                <span className="absolute inset-0 m-auto rounded-full" style={{ width: 80, height: 80, background: "rgba(168,85,247,0.1)", animation: "pulse-ring 1.5s ease-out 0.4s forwards" }} />
              </>
            )}
            <img src="/logo/logo-black.png" alt="Brand Brokers" className="w-20 h-20 object-contain relative z-10 animate-float" style={{ animationDuration: "5s" }} />
          </div>

          {/* Heading — spotlight purple reveal on hover */}
          <h1
            ref={h1Ref}
            className="font-black leading-none mb-6 animate-fade-up relative"
            style={{ fontSize: "clamp(42px, 10vw, 120px)", letterSpacing: "-0.03em" }}
            onMouseEnter={() => setH1Hovered(true)}
            onMouseLeave={() => setH1Hovered(false)}
          >
            {/* Base black text */}
            <span style={{ color: "#0a0a0a", display: "block" }}>BRAND</span>
            <span style={{ color: "#0a0a0a", display: "block" }}>BROKERS</span>

            {/* Purple overlay — masked to cursor radius */}
            <div
              ref={overlayRef}
              aria-hidden
              style={{
                position: "absolute", inset: 0,
                WebkitMaskImage: h1Hovered ? "radial-gradient(circle 120px at var(--mx, -9999px) var(--my, -9999px), black 0%, transparent 100%)" : "radial-gradient(circle 0px at -9999px -9999px, black 0%, transparent 100%)",
                maskImage: h1Hovered ? "radial-gradient(circle 120px at var(--mx, -9999px) var(--my, -9999px), black 0%, transparent 100%)" : "radial-gradient(circle 0px at -9999px -9999px, black 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            >
              <span style={{ color: "transparent", display: "block", background: "linear-gradient(135deg, #a855f7, #7c3aed)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>BRAND</span>
              <span style={{ color: "transparent", display: "block", background: "linear-gradient(135deg, #a855f7, #7c3aed)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>BROKERS</span>
            </div>
          </h1>

          {/* Typewriter tagline */}
          <p className="font-medium tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-up delay-200" style={{ color: "#555", minHeight: "1.5em" }}>
            {typed}<span className="inline-block w-0.5 h-4 ml-0.5 align-middle animate-pulse" style={{ background: "#a855f7" }} />
          </p>

          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 animate-fade-up delay-300" style={{ color: "#333", letterSpacing: "0.05em" }}>
            WHERE CREATORS MEET PERFORMANCE.<br />
            WHERE BRANDS MEET RESULTS.
          </p>

          {/* CTA buttons */}
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
              className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
              style={{ borderColor: "#0a0a0a", color: "#0a0a0a", background: "transparent" }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
        <span className="text-xs tracking-widest" style={{ color: "#888" }}>SCROLL</span>
        <div className="w-px h-12 relative overflow-hidden" style={{ background: "rgba(0,0,0,0.1)" }}>
          <div className="absolute top-0 left-0 w-full" style={{ height: "40%", background: "linear-gradient(to bottom, #a855f7, transparent)", animation: "fadeUp 1.5s ease infinite" }} />
        </div>
      </div>
    </section>
  );
}
