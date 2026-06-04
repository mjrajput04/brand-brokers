"use client";
import { useEffect, useState } from "react";

const links = ["Problem", "Services", "Why Us", "Case Studies", "Roster", "Clients", "Team", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(/\s+/g, "-"))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        padding: scrolled ? "12px var(--section-pad-x)" : "20px var(--section-pad-x)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer min-w-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <video src="/logo/logo-anim.webm" autoPlay loop muted playsInline
            style={{ width: "clamp(50px,10vw,90px)", height: "clamp(50px,10vw,90px)", objectFit: "contain", flexShrink: 0, mixBlendMode: "screen" }} />
          <span className="font-black text-sm sm:text-xl tracking-tight text-white truncate" style={{ letterSpacing: "-0.02em" }}>
            BRAND BROKERS
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-sm font-medium tracking-wide text-white transition-all duration-200 relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <div className="ml-2 relative">
            <span className="absolute inset-0 rounded-full" style={{ animation: "navbar-pulse 2s ease-out infinite", background: "rgba(255,255,255,0.2)", zIndex: 0 }} />
            <span className="absolute inset-0 rounded-full" style={{ animation: "navbar-pulse 2s ease-out infinite", animationDelay: "0.6s", background: "rgba(255,255,255,0.1)", zIndex: 0 }} />
            <button onClick={() => scrollTo("Contact")}
              className="relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#ffffff,#d1d5db)", color: "#000", boxShadow: "0 4px 24px rgba(255,255,255,0.2)" }}>
              Let's Talk
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 items-center justify-center"
          style={{ minWidth: 44, minHeight: 44 }}
          onClick={() => setOpen(!open)}
        >
          {[0,1,2].map(i => (
            <span key={i} className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{
                transform: open && i === 0 ? "rotate(45deg) translate(5px,5px)" : open && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden overflow-hidden transition-all duration-500" style={{ maxHeight: open ? "600px" : "0" }}>
        <div className="flex flex-col gap-1 px-6 py-4" style={{ background: "rgba(10,10,10,0.98)" }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-white text-left text-lg font-medium hover:text-gray-400 transition-colors py-3"
              style={{ minHeight: 52 }}>
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="mt-3 w-full py-3.5 rounded-full text-sm font-bold"
            style={{ background: "linear-gradient(135deg,#ffffff,#d1d5db)", color: "#000", minHeight: 52 }}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
