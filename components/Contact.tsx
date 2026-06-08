"use client";
import { useState } from "react";
import { Mail, Calendar, ArrowRight, X, Video, Clock, CheckCircle, MapPin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const { isDark } = useTheme();

  const copy = () => {
    navigator.clipboard.writeText("founders@brandbrokers.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="contact" className="section-wrap contact-section relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" 
          style={{ background: isDark ? "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" : "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)" }} 
        />

        <div className="section-inner relative z-10">
          <div className="reveal text-center mb-14">
            <span className="section-label" style={{ color: "var(--t-text)" }}>Get In Touch</span>
            <h2 className="section-heading" style={{ lineHeight: 1, color: "var(--t-text)" }}>
              LET'S BUILD YOUR<br />
              <span className="shimmer-text">GROWTH STORY</span>
            </h2>
            <p className="mt-6 text-base max-w-xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
              Ready to connect creators, brands, and audiences seamlessly? Book a call.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="reveal max-w-2xl mx-auto mb-6">
            <button
              onClick={() => setShowBooking(true)}
              className="w-full group relative overflow-hidden rounded-3xl p-6 md:p-8 text-left transition-all duration-300 hover:scale-[1.01]"
              style={{ 
                background: isDark ? "linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)" : "linear-gradient(135deg, #000000 0%, #374151 100%)", 
                boxShadow: isDark ? "0 20px 60px rgba(255,255,255,0.15)" : "0 20px 60px rgba(0,0,0,0.1)" 
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: isDark ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)" }}>
                    <Calendar className="w-6 h-6 md:w-7 md:h-7" style={{ color: isDark ? "#000000" : "#ffffff" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-black text-lg md:text-xl mb-1" style={{ color: isDark ? "#000000" : "#ffffff" }}>Book a Strategy Call</p>
                    <p className="text-sm leading-relaxed" style={{ color: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)" }}>30 min call with our team. We'll talk about your brand goals and build a custom plan.</p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color: isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)" }}><Clock className="w-3.5 h-3.5" /> 30 minutes</span>
                      <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color: isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)" }}><Video className="w-3.5 h-3.5" /> Google Meet</span>
                      <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color: isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)" }}><CheckCircle className="w-3.5 h-3.5" /> Free</span>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" style={{ background: isDark ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)" }}>
                  <ArrowRight className="w-5 h-5" style={{ color: isDark ? "#000000" : "#ffffff" }} />
                </div>
              </div>
            </button>
          </div>

          {/* Secondary — Email */}
          <div className="reveal max-w-2xl mx-auto">
            <button
              onClick={copy}
              className="w-full group p-5 rounded-2xl text-left flex items-center gap-4 transition-all duration-300"
              style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--t-card-border2)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--t-card-border)")}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--t-icon-bg)" }}>
                <Mail className="w-5 h-5" style={{ color: "var(--t-text)" }} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate" style={{ color: "var(--t-text)" }}>founders@brandbrokers.in</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--t-text-faint)" }}>Prefer email? We reply within 24 hours.</p>
              </div>
              <span className="text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0" style={{ background: "var(--t-icon-bg)", color: copied ? "#4ade80" : "var(--t-text-muted)" }}>
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 flex flex-col gap-8" style={{ borderTop: "1px solid var(--t-card-border)" }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <video src="/logo/logo-anim.webm" autoPlay loop muted playsInline
                  style={{ 
                    width: 80, 
                    height: 80, 
                    objectFit: "contain", 
                    mixBlendMode: isDark ? "screen" : "multiply", 
                    filter: isDark ? "none" : "invert(1)",
                    flexShrink: 0 
                  }} />
                <span className="font-black text-xl" style={{ letterSpacing: "-0.02em", color: "var(--t-text)" }}>BRAND BROKERS</span>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href="https://instagram.com/brandbrokers" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl transition-all" style={{ background: "var(--t-card-bg2)", color: "var(--t-text-muted)" }}>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://youtube.com/@brandbrokers" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl transition-all" style={{ background: "var(--t-card-bg2)", color: "var(--t-text-muted)" }}>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
                <a href="https://linkedin.com/company/brandbrokers" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl transition-all" style={{ background: "var(--t-card-bg2)", color: "var(--t-text-muted)" }}>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left pt-8" style={{ borderTop: "1px solid var(--t-card-border)" }}>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--t-text-faint)" }}>
                <MapPin className="w-4 h-4" />
                <span>123, Creator Hub, Digital Street, Mumbai, India - 400001</span>
              </div>
              <p className="text-sm" style={{ color: "var(--t-text-faint)" }}>© 2026 Brand Brokers. For The Creators, By The Creators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal — bottom sheet on mobile */}
      {showBooking && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{ background: isDark ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)" }}
          onClick={() => setShowBooking(false)}
        >
          <div
            className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--t-card-border)", boxShadow: isDark ? "0 40px 100px rgba(0,0,0,0.9)" : "0 40px 100px rgba(0,0,0,0.1)" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="h-1" style={{ background: isDark ? "linear-gradient(90deg,#ffffff,#9ca3af,#ffffff)" : "linear-gradient(90deg,#000000,#333333,#000000)" }} />
            {/* Drag handle mobile */}
            <div className="flex justify-center pt-3 sm:hidden">
              <div className="w-10 h-1 rounded-full" style={{ background: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)" }} />
            </div>
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full z-10 transition-colors"
              style={{ background: "var(--t-icon-bg)", border: "1px solid var(--t-card-border)", color: "var(--t-text)" }}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--t-icon-bg)" }}>
                  <Calendar className="w-6 h-6" style={{ color: "var(--t-text)" }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-black text-xl" style={{ color: "var(--t-text)" }}>Book a Strategy Call</h3>
                  <p className="text-sm" style={{ color: "var(--t-text-faint)" }}>30 min · Free · Google Meet</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { icon: CheckCircle, text: "Discuss your campaign goals and audience" },
                  { icon: CheckCircle, text: "Get a custom creator strategy with no fluff" },
                  { icon: CheckCircle, text: "Understand pricing and timelines upfront" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--t-text-muted)" }} strokeWidth={2} />
                    <span className="text-sm" style={{ color: "var(--t-text-muted)" }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://calendly.com/brandbrokers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ 
                    background: isDark ? "linear-gradient(135deg,#ffffff,#d1d5db)" : "linear-gradient(135deg,#000000,#374151)", 
                    color: isDark ? "#000000" : "#ffffff",
                    minHeight: 52 
                  }}
                >
                  Book on Google Meet <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={copy}
                  className="py-3 rounded-2xl font-bold text-sm transition-colors"
                  style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)", minHeight: 48, color: "var(--t-text-muted)" }}
                >
                  {copied ? "✓ Email copied" : "Or email us: founders@brandbrokers.in"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
