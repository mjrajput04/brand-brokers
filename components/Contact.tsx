"use client";
import { useState } from "react";
import { Mail, Calendar, ArrowRight, X, Video, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("founders@brandbrokers.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="contact" className="section-wrap relative" style={{ background: "#0f0f0f", overflow: "hidden" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }} />

        <div className="section-inner relative z-10">
          <div className="reveal text-center mb-14">
            <span className="section-label text-white">Get In Touch</span>
            <h2 className="section-heading text-white" style={{ lineHeight: 1 }}>
              LET'S BUILD YOUR<br />
              <span className="shimmer-text">GROWTH STORY</span>
            </h2>
            <p className="mt-6 text-gray-400 text-base max-w-xl mx-auto">
              Ready to connect creators, brands, and audiences seamlessly? Book a call.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="reveal max-w-2xl mx-auto mb-6">
            <button
              onClick={() => setShowBooking(true)}
              className="w-full group relative overflow-hidden rounded-3xl p-6 md:p-8 text-left transition-all duration-300 hover:scale-[1.01]"
              style={{ background: "linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)", boxShadow: "0 20px 60px rgba(255,255,255,0.15)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,0,0,0.08)" }}>
                    <Calendar className="w-6 h-6 md:w-7 md:h-7 text-black" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-black text-black text-lg md:text-xl mb-1">Book a Strategy Call</p>
                    <p className="text-gray-600 text-sm leading-relaxed">30-min call with our team. We'll talk about your brand goals and build a custom plan.</p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500"><Clock className="w-3.5 h-3.5" /> 30 minutes</span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500"><Video className="w-3.5 h-3.5" /> Google Meet</span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500"><CheckCircle className="w-3.5 h-3.5" /> Free</span>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </div>
            </button>
          </div>

          {/* Secondary — Email */}
          <div className="reveal max-w-2xl mx-auto">
            <button
              onClick={copy}
              className="w-full group p-5 rounded-2xl text-left flex items-center gap-4 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.07)" }}>
                <Mail className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm truncate">founders@brandbrokers.in</p>
                <p className="text-gray-600 text-xs mt-0.5">Prefer email? We reply within 24 hours.</p>
              </div>
              <span className="text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)", color: copied ? "#4ade80" : "#9ca3af" }}>
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-2">
              <video src="/logo/logo-anim.webm" autoPlay loop muted playsInline
                style={{ width: 80, height: 80, objectFit: "contain", mixBlendMode: "screen", flexShrink: 0 }} />
              <span className="font-black text-white text-xl" style={{ letterSpacing: "-0.02em" }}>BRAND BROKERS</span>
            </div>
            <p className="text-gray-600 text-sm">© 2026 Brand Brokers. For The Creators, By The Creators.</p>
          </div>
        </div>
      </section>

      {/* Booking Modal — bottom sheet on mobile */}
      {showBooking && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(16px)" }}
          onClick={() => setShowBooking(false)}
        >
          <div
            className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden"
            style={{ background: "#111", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="h-1" style={{ background: "linear-gradient(90deg,#ffffff,#9ca3af,#ffffff)" }} />
            {/* Drag handle mobile */}
            <div className="flex justify-center pt-3 sm:hidden">
              <div className="w-10 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full z-10"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <Calendar className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-black text-white text-xl">Book a Strategy Call</h3>
                  <p className="text-gray-500 text-sm">30 min · Free · Google Meet</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { icon: CheckCircle, text: "Discuss your campaign goals and audience" },
                  { icon: CheckCircle, text: "Get a custom creator strategy with no fluff" },
                  { icon: CheckCircle, text: "Understand pricing and timelines upfront" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "#9ca3af" }} strokeWidth={2} />
                    <span className="text-gray-400 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://calendly.com/brandbrokers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-black text-sm hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg,#ffffff,#d1d5db)", minHeight: 52 }}
                >
                  Book on Google Meet <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={copy}
                  className="py-3 rounded-2xl font-bold text-gray-500 text-sm hover:text-gray-300 transition-colors"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", minHeight: 48 }}
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
