"use client";
import { useEffect } from "react";

export default function AnimationInit() {
  useEffect(() => {
    // Cursor
    const dot = document.createElement("div");
    dot.className = "custom-cursor";
    const ring = document.createElement("div");
    ring.className = "custom-cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = 0, my = 0, rx = 0, ry = 0;
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
      requestAnimationFrame(lerp);
    };
    document.addEventListener("mousemove", onMove);
    lerp();

    // Hover expand cursor
    const onEnter = () => { dot.style.transform = "scale(3)"; ring.style.transform = "scale(1.5)"; };
    const onLeave = () => { dot.style.transform = "scale(1)"; ring.style.transform = "scale(1)"; };
    document.querySelectorAll("a,button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach(el => {
      el.classList.add("animate");
      observer.observe(el);
    });

    // Counter animation
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

    return () => {
      document.removeEventListener("mousemove", onMove);
      dot.remove(); ring.remove();
    };
  }, []);

  return null;
}
