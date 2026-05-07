"use client";

import { Eye, IndianRupee, ThumbsUp, Download, Star, Mic2 } from "lucide-react";

const cases = [
  {
    num: "01", brand: "WEPLAY", color: "#ffffff",
    objective: "Build a dedicated gaming audience through high engagement Shorts promotions.",
    strategy: "Activated top performing gaming channels with relatable short-form content to spark curiosity & maximize reach.",
    execution: ["Multiple creator led short videos", "Audience specific hooks focusing on gameplay experience", "Momentum based posting to maintain buzz"],
    stats: [
      { value: "200K+", label: "Views", Icon: Eye },
      { value: "₹0.15", label: "CPV", Icon: IndianRupee },
      { value: "20K+", label: "Likes", Icon: ThumbsUp },
      { value: "2K+", label: "Installs", Icon: Download },
    ],
  },
  {
    num: "02", brand: "INFINIX GT30 PRO", color: "#e5e7eb",
    objective: "Create strong buzz for the launch of the Infinix GT30 Pro Gaming Edition.",
    strategy: "Partnered with high-engagement gaming creators to drive credibility & showcase real in-game performance.",
    execution: ["Product-focused short videos & gameplay sequences", "Authentic creator opinions", "Barter collaboration to maximize ROI"],
    stats: [
      { value: "3.6M+", label: "Views", Icon: Eye },
      { value: "200K+", label: "Likes", Icon: ThumbsUp },
      { value: "4", label: "Influencers", Icon: Star },
    ],
  },
  {
    num: "03", brand: "METASPACE", color: "#d1d5db",
    objective: "Shift perception from gaming to Web3 eSports & boost visibility for their new podcast.",
    strategy: "Used gaming creators to push Shorts, Reels, Stories, and community posts promoting the podcast.",
    execution: ["Community driven engagement", "Positioning the podcast as a 'must-watch' for gaming enthusiasts transitioning to Web3"],
    stats: [
      { value: "1M+", label: "Views", Icon: Eye },
      { value: "100K+", label: "Podcast Views", Icon: Mic2 },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-wrap" style={{ background: "#111111" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-white">Proof of Work</span>
          <h2 className="section-heading text-white">CASE STUDIES</h2>
        </div>

        <div className="flex flex-col gap-12">
          {cases.map((c) => (
            <div key={c.brand} className="reveal grid md:grid-cols-2 gap-10 items-start p-8 md:p-12 rounded-3xl" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(255,255,255,0.1)` }}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-black text-5xl" style={{ color: `rgba(255,255,255,0.1)`, lineHeight: 1 }}>{c.num}</span>
                  <div>
                    <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Case Study</p>
                    <h3 className="font-black text-white text-2xl md:text-3xl">{c.brand}</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  {[["OBJECTIVE", c.objective], ["STRATEGY", c.strategy]].map(([label, text]) => (
                    <div key={label}>
                      <h4 className="font-black text-xs tracking-widest uppercase mb-2" style={{ color: c.color }}>{label}:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                  <div>
                    <h4 className="font-black text-xs tracking-widest uppercase mb-2" style={{ color: c.color }}>EXECUTION:</h4>
                    <ul className="flex flex-col gap-2">
                      {c.execution.map((e, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span style={{ color: c.color }}>→</span> {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-black text-xs tracking-widest uppercase mb-4" style={{ color: c.color }}>KEY RESULTS:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {c.stats.map((s, j) => (
                    <div key={j} className="flex flex-col items-center p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <s.Icon className="w-6 h-6 mb-2" style={{ color: c.color }} strokeWidth={1.5} />
                      <span className="font-black text-white text-2xl">{s.value}</span>
                      <span className="text-xs mt-1" style={{ color: "#888" }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
