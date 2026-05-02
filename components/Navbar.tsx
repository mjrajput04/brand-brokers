"use client";
import { useEffect, useState } from "react";

const links = ["Problem", "Services", "Why Us", "Case Studies", "OEM & CTV", "UGC", "Clients", "Team", "Contact"];

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
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.2)" : "none",
        padding: scrolled ? "12px var(--section-pad-x)" : "20px var(--section-pad-x)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            src={scrolled ? "/logo/logo-white.png" : "/logo/logo-black.png"}
            alt="Brand Brokers Logo"
            className="w-10 h-10 object-contain transition-all duration-500"
          />
          <span
            className="font-black text-xl tracking-tight"
            style={{ color: scrolled ? "#fff" : "#0a0a0a" }}
          >
            BRAND BROKERS
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm font-medium tracking-wide transition-all duration-200 hover:text-purple-500 relative group"
              style={{ color: scrolled ? "#ccc" : "#0a0a0a" }}
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <div className="ml-4 relative">
            <span className="absolute inset-0 rounded-full" style={{ animation: "navbar-pulse 2s ease-out infinite", background: "rgba(168,85,247,0.4)", zIndex: 0 }} />
            <span className="absolute inset-0 rounded-full" style={{ animation: "navbar-pulse 2s ease-out infinite", animationDelay: "0.6s", background: "rgba(168,85,247,0.25)", zIndex: 0 }} />
            <button
              onClick={() => scrollTo("Contact")}
              className="relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(168,85,247,0.6)",
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
          {[0,1,2].map(i => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: scrolled ? "#fff" : "#0a0a0a",
                transform: open && i === 0 ? "rotate(45deg) translate(5px,5px)" : open && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? "500px" : "0" }}
      >
        <div className="flex flex-col gap-4 px-6 py-6" style={{ background: "rgba(10,10,10,0.98)" }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-white text-left text-lg font-medium hover:text-purple-400 transition-colors">
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
