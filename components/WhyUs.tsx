"use client";

import { motion } from "framer-motion";

const reasons = [
  { num: "01", title: "ADVERTISING EXPERTISE", desc: "Strong OEM & CTV advertising across various platforms." },
  { num: "02", title: "ROI DRIVEN", desc: "Planning on every campaign, ensuring measurable outcomes." },
  { num: "03", title: "TRANSPARENCY", desc: "Clear pricing & real-time reporting for complete trust." },
  { num: "04", title: "1500+ CREATORS", desc: "Vast network of verified creators across diverse categories." },
  { num: "05", title: "GEN-Z INSIGHT", desc: "Young, agile team with strong community understanding." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-wrap" style={{ background: "#0f0f0f", overflowX: "hidden" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-white">Our Edge</span>
          <h2 className="section-heading text-white">WHY BRANDS CHOOSE US</h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:block relative">
          <svg className="absolute w-full pointer-events-none" style={{ height: "160px", top: "0" }} viewBox="0 0 1000 160" preserveAspectRatio="none">
            <path 
              id="curve-path"
              d="M 100,32 C 200,32 200,128 300,128 S 400,32 500,32 S 600,128 700,128 S 800,32 900,32" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="6 6"
              vectorEffect="non-scaling-stroke"
            />
            <motion.circle
              r="6"
              fill="#ffffff"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath: "path('M 100,32 C 200,32 200,128 300,128 S 400,32 500,32 S 600,128 700,128 S 800,32 900,32')",
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))"
              }}
            />
          </svg>
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {reasons.map((r, i) => (
              <div key={r.num} className={`reveal flex flex-col items-center text-center ${i % 2 === 0 ? "" : "mt-24"}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-black text-xl mb-4 relative z-10"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 50px rgba(255,255,255,0.4), 0 0 20px #fff",
                      "0 0 0px rgba(255,255,255,0)"
                    ],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 13.2,
                    delay: i * 3.75 - 0.9,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: i % 2 === 0 ? "linear-gradient(135deg,#ffffff,#9ca3af)" : "rgba(255,255,255,0.1)",
                    color: i % 2 === 0 ? "#000" : "#fff",
                    border: "2px solid #ffffff",
                  }}
                >
                  {r.num}
                </motion.div>
                <h4 className="font-black text-white text-xs tracking-widest mb-2">{r.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#888" }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-6 stagger">
          {reasons.map((r) => (
            <div key={r.num} className="reveal flex gap-5 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0" style={{ background: "linear-gradient(135deg,#ffffff,#9ca3af)", color: "#000" }}>
                {r.num}
              </div>
              <div>
                <h4 className="font-black text-white text-sm tracking-widest mb-1">{r.title}</h4>
                <p className="text-sm" style={{ color: "#888" }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
