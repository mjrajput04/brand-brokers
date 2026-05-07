"use client";

import { Clapperboard, TrendingUp } from "lucide-react";

const offerings = [
  { title: "STRATEGIC SCRIPTING", desc: "Brand aligned messaging tailored to platform guidelines and audience preferences" },
  { title: "CREATOR SOURCING", desc: "Talent matching aligned with your target demographic and brand identity" },
  { title: "NATIVE PRODUCTION", desc: "Short form, performance optimized video optimized for Ads, Instagram, & more." },
  { title: "PROFESSIONAL POST", desc: "Editing, motion graphics, subtitles, and strategic CTA integration" },
];

const perfectFor = ["Performance ads", "Social media campaigns", "Website & landing pages", "Influencer whitelisting"];

export default function UGC() {
  return (
    <section id="ugc" className="section-wrap" style={{ background: "#0a0a0a" }}>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal-left">
            <span className="section-label text-white">Content Creation</span>
            <h2 className="section-heading text-white">UGC VIDEO PRODUCTION</h2>
            <p className="font-bold text-gray-400 mt-2 mb-4 tracking-wide">BUILT NATIVE, OPTIMIZED FOR SCALE</p>
            <p className="text-gray-400 leading-relaxed">High performance, platform native video content designed to drive trust and conversions. We deliver end-to-end UGC creative production, from strategic concept to final asset.</p>
          </div>
          <div className="reveal-right flex justify-center">
            <div className="w-40 h-40 rounded-3xl flex items-center justify-center animate-float" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 80px rgba(255,255,255,0.05)" }}>
              <Clapperboard className="w-20 h-20 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal-left order-2 md:order-1 flex justify-center">
            <div className="w-40 h-40 rounded-3xl flex items-center justify-center animate-float" style={{ background: "linear-gradient(135deg,#ffffff,#9ca3af)", boxShadow: "0 30px 80px rgba(255,255,255,0.1)", animationDelay: "1s" }}>
              <TrendingUp className="w-20 h-20 text-black" strokeWidth={1.5} />
            </div>
          </div>
          <div className="reveal-right order-1 md:order-2">
            <h2 className="section-heading text-white">FROM CONCEPT TO CONVERSION</h2>
            <p className="text-gray-400 leading-relaxed mt-4">We manage your complete UGC video production lifecycle, ensuring every frame feels organic while driving measurable performance.</p>
          </div>
        </div>

        <div className="reveal text-center mb-10">
          <h3 className="font-black text-2xl md:text-4xl tracking-tight text-white">WHAT WE OFFER:</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 stagger mb-8">
          {offerings.map((o) => (
            <div key={o.title} className="reveal card-hover p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h4 className="font-black text-white text-sm tracking-widest uppercase mb-2">{o.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal p-5 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="font-bold text-sm" style={{ color: "#888" }}>
            <span className="text-white font-black">Perfect For: </span>
            {perfectFor.join(" | ")}
          </span>
        </div>
      </div>
    </section>
  );
}
