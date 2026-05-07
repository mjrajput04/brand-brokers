"use client";
import { useState } from "react";
import { Mail, Globe, ArrowRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-wrap relative overflow-hidden" style={{ background: "#0f0f0f" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }} />

      <div className="section-inner relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-label text-white">Get In Touch</span>
          <h2 className="section-heading text-white" style={{ lineHeight: 1 }}>
            LET'S BUILD YOUR<br />
            <span className="shimmer-text">GROWTH STORY</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">Ready to connect creators, brands, and audiences seamlessly? Let's talk.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 stagger max-w-2xl mx-auto">
          <div className="reveal card-hover group p-8 rounded-3xl cursor-pointer text-left" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }} onClick={() => copy("founders@brandbrokers.in")}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-white font-bold text-sm uppercase tracking-widest">Email</span>
            </div>
            <p className="text-white font-bold text-lg group-hover:text-gray-300 transition-colors">founders@brandbrokers.in</p>
            <p className="text-gray-500 text-sm mt-1">{copied ? "✅ Copied!" : "Click to copy"}</p>
          </div>

          <a href="https://brandbrokers.in" target="_blank" rel="noopener noreferrer" className="reveal card-hover group p-8 rounded-3xl text-left block" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                <Globe className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-white font-bold text-sm uppercase tracking-widest">Website</span>
            </div>
            <p className="text-white font-bold text-lg group-hover:text-gray-300 transition-colors">brandbrokers.in</p>
            <p className="text-gray-500 text-sm mt-1">Visit our website →</p>
          </a>
        </div>

        <div className="reveal mt-12 text-center">
          <a href="mailto:founders@brandbrokers.in" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ background: "linear-gradient(135deg, #ffffff, #d1d5db)", boxShadow: "0 8px 40px rgba(255,255,255,0.2)" }}>
            Start a Campaign <ArrowRight className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
              <rect x="2" y="2" width="16" height="16" rx="3" fill="#ffffff" />
              <rect x="22" y="2" width="16" height="16" rx="3" fill="rgba(255,255,255,0.5)" />
              <rect x="2" y="22" width="16" height="16" rx="3" fill="rgba(255,255,255,0.5)" />
              <rect x="22" y="22" width="16" height="16" rx="3" fill="#ffffff" />
            </svg>
            <span className="font-black text-white">BRAND BROKERS</span>
          </div>
          <p className="text-gray-600 text-sm">© 2026 Brand Brokers. For The Creators, By The Creators.</p>
        </div>
      </div>
    </section>
  );
}
