"use client";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function AnimationInit() {
  const { isDark } = useTheme();

  // ── Custom cursor — set up once ──
  useEffect(() => {
    const dot = document.createElement("div");
    dot.className = "custom-cursor";
    const ring = document.createElement("div");
    ring.className = "custom-cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx - 6 + "px";
      dot.style.top = my - 6 + "px";
    };
    const lerp = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx - 18 + "px";
      ring.style.top = ry - 18 + "px";
      raf = requestAnimationFrame(lerp);
    };
    document.addEventListener("mousemove", onMove);
    lerp();

    const onEnter = () => { dot.style.transform = "scale(3)"; ring.style.transform = "scale(1.5)"; };
    const onLeave = () => { dot.style.transform = "scale(1)"; ring.style.transform = "scale(1)"; };
    const hoverEls = Array.from(document.querySelectorAll("a,button"));
    hoverEls.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      hoverEls.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      dot.remove();
      ring.remove();
    };
  }, []);

  // ── Scroll reveal ──
  // Re-arm on mount AND whenever the theme changes, plus re-scan after layout
  // settles, so light & dark get the exact same staggered reveal regardless of
  // when each section finishes laying out.
  useEffect(() => {
    const selector = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target); // one-shot per element
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    // Hide + observe every element that hasn't already been revealed.
    const arm = () => {
      document.querySelectorAll(selector).forEach(el => {
        if (!el.classList.contains("visible")) {
          el.classList.add("animate");
          observer.observe(el);
        }
      });
    };

    arm();
    const raf = requestAnimationFrame(arm); // after first paint
    const timer = setTimeout(arm, 300);     // after fonts / streamed sections
    window.addEventListener("load", arm);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("load", arm);
    };
  }, [isDark]);

  // ── Counters — once ──
  useEffect(() => {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const target = parseInt(el.dataset.target || "0");
          const suffix = el.dataset.suffix || "";
          let current = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = Math.floor(current).toLocaleString() + suffix;
          }, 25);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll(".counter").forEach(el => countObserver.observe(el));
    return () => countObserver.disconnect();
  }, []);

  return null;
}
