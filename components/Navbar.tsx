"use client";
import { useEffect, useState, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const links = ["Problem", "Services", "Why Us", "Case Studies", "Our Products", "Roster", "Clients", "Team"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const isAtTop = currentY < 100;
      
      setScrolled(currentY > 50);
      setAtTop(isAtTop);
      
      // Show/hide floating button with fade effect
      if (!isAtTop) {
        setButtonVisible(true);
      } else {
        setButtonVisible(false);
        setMenuOpen(false);
      }
    };
    
    window.addEventListener("scroll", onScroll);
    // Check initial position
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(/\s+/g, "-"))?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setMobileOpen(false);
  };

  // Reusable light/dark switch — lives inside the menu/sidebar now.
  const themeSwitch = (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full transition-all duration-300 flex items-center p-1 flex-shrink-0"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
          : "linear-gradient(135deg, #ffd700 0%, #ff8c00 50%, #ff6b6b 100%)",
        boxShadow: isDark
          ? "inset 0 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(100,150,255,0.3)"
          : "inset 0 2px 4px rgba(0,0,0,0.1), 0 0 10px rgba(255,200,100,0.4)",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          transform: isDark ? "translateX(0)" : "translateX(28px)",
          background: isDark ? "linear-gradient(135deg, #e0e0e0, #ffffff)" : "linear-gradient(135deg, #fff8dc, #ffd700)",
          boxShadow: isDark ? "0 2px 4px rgba(0,0,0,0.3)" : "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        {isDark ? <Moon className="w-3 h-3" style={{ color: "#1a1a2e" }} /> : <Sun className="w-3 h-3" style={{ color: "#ff8c00" }} />}
      </div>
    </button>
  );


  return (
    <>
      {/* Main Navbar - only shows when at top */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${atTop ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
        style={{
          background: scrolled ? (isDark ? "rgba(10,10,10,0.95)" : "rgba(240,240,240,0.95)") : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}` : "none",
          padding: scrolled ? "12px var(--section-pad-x)" : "20px var(--section-pad-x)",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer min-w-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {isDark ? (
              <video key="dark" src="/logo/logo-anim.webm" autoPlay loop muted playsInline
                style={{ width: "clamp(50px,10vw,90px)", height: "clamp(50px,10vw,90px)", objectFit: "contain", flexShrink: 0, mixBlendMode: "screen" }} />
            ) : (
              <video key="light" src="/logo/logo-black.webm" autoPlay loop muted playsInline
                style={{ width: "clamp(50px,10vw,90px)", height: "clamp(50px,10vw,90px)", objectFit: "contain", flexShrink: 0 }} />
            )}
            <span className="font-black text-sm sm:text-xl tracking-tight truncate flex gap-1" style={{ letterSpacing: "-0.02em" }}>
              <span style={{ color: isDark ? "#ffffff" : "#0a0a0a" }}>BRAND</span>
              <span className="shimmer-text">BROKERS</span>
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Our Products — sits next to Let's Talk */}
            <button
              onClick={() => scrollTo("Our Products")}
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
              style={{
                color: isDark ? "#ffffff" : "#0a0a0a",
                background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.15)"}`,
              }}
            >
              Our Products
            </button>

            <div className="relative">
              <span className="absolute inset-0 rounded-full" style={{ animation: "navbar-pulse 2s ease-out infinite", background: "rgba(255,255,255,0.2)", zIndex: 0 }} />
              <span className="absolute inset-0 rounded-full" style={{ animation: "navbar-pulse 2s ease-out infinite", animationDelay: "0.6s", background: "rgba(255,255,255,0.1)", zIndex: 0 }} />
              <button onClick={() => scrollTo("Contact")}
                className="relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#ffffff,#d1d5db)", color: "#000", boxShadow: "0 4px 24px rgba(255,255,255,0.2)" }}>
                Let's Talk
              </button>
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2.5 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center"
              style={{
                background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
              }}
            >
              <Menu className="w-5 h-5" style={{ color: isDark ? "#ffffff" : "#0a0a0a" }} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 items-center justify-center"
            style={{ minWidth: 44, minHeight: 44 }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {[0,1,2].map(i => (
              <span key={i} className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: isDark ? "#ffffff" : "#0a0a0a",
                  transform: mobileOpen && i === 0 ? "rotate(45deg) translate(5px,5px)" : mobileOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden overflow-hidden transition-all duration-500" style={{ maxHeight: mobileOpen ? "600px" : "0" }}>
          <div className="flex flex-col gap-1 px-6 py-4" style={{ background: "rgba(10,10,10,0.98)" }}>
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className="text-white text-left text-lg font-medium hover:text-gray-400 transition-colors py-3"
                style={{ minHeight: 52 }}>
                {l}
              </button>
            ))}
            {/* Light / Dark toggle */}
            <div className="flex items-center justify-between py-3 mt-1 border-t border-white/10" style={{ minHeight: 52 }}>
              <span className="text-white text-base font-medium flex items-center gap-2">
                {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                {isDark ? "Dark Mode" : "Light Mode"}
              </span>
              {themeSwitch}
            </div>
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

      {/* Floating Action Bar - appears when scrolled */}
      <div
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3 transition-all duration-500 ${buttonVisible && !menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <button
          onClick={() => setMenuOpen(true)}
          className="p-3 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center"
          style={{
            background: isDark ? "rgba(30,30,30,0.9)" : "rgba(255,255,255,0.95)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
          }}
        >
          <Menu className="w-6 h-6" style={{ color: isDark ? "#ffffff" : "#000000" }} />
        </button>
      </div>

      {/* Floating Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-end p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Card */}
          <div
            className="relative bg-[#1a1a1a] rounded-2xl p-5 sm:p-6 w-full max-w-[320px] sm:min-w-[280px] max-h-[90vh] overflow-y-auto shadow-2xl"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
            }}
          >
            {/* Close button */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#ffffff] font-bold text-lg">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2.5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                style={{ minWidth: 44, minHeight: 44 }}
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#ffffff]" />
              </button>
            </div>

            {/* Light / Dark toggle */}
            <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/10">
              <span className="text-white/70 text-sm font-medium flex items-center gap-2">
                {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                {isDark ? "Dark Mode" : "Light Mode"}
              </span>
              {themeSwitch}
            </div>

            {/* Menu Links — Our Products now lives in the navbar */}
            <div className="flex flex-col gap-2">
              {links.filter((l) => l !== "Our Products").map((l, i) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="text-left text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200 text-sm font-medium"
                  style={{
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  {l}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <button
                  onClick={() => scrollTo("Contact")}
                  className="w-full py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#ffffff,#d1d5db)", color: "#000" }}
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
