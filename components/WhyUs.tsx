"use client";

const reasons = [
  { num: "01", title: "ADVERTISING EXPERTISE", desc: "Strong OEM & CTV advertising across various platforms." },
  { num: "02", title: "ROI DRIVEN", desc: "Planning on every campaign, ensuring measurable outcomes." },
  { num: "03", title: "TRANSPARENCY", desc: "Clear pricing & real-time reporting for complete trust." },
  { num: "04", title: "1500+ CREATORS", desc: "Vast network of verified creators across diverse categories." },
  { num: "05", title: "GEN-Z INSIGHT", desc: "Young, agile team with strong community understanding." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-wrap" style={{ background: "#0a0a0a" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-purple-400">Our Edge</span>
          <h2 className="section-heading text-white">WHY BRANDS CHOOSE US</h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:block relative">
          <svg className="absolute w-full" style={{ height: "4px", top: "50%", transform: "translateY(-50%)" }} viewBox="0 0 1000 4" preserveAspectRatio="none">
            <path d="M0 2 Q500 2 1000 2" stroke="rgba(168,85,247,0.3)" strokeWidth="2" fill="none" strokeDasharray="8 4" />
          </svg>
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {reasons.map((r, i) => (
              <div key={r.num} className={`reveal flex flex-col items-center text-center ${i % 2 === 0 ? "" : "mt-24"}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-black text-xl mb-4 transition-all duration-300 hover:scale-110"
                  style={{
                    background: i % 2 === 0 ? "linear-gradient(135deg,#a855f7,#7c3aed)" : "rgba(168,85,247,0.15)",
                    color: "#fff",
                    border: "2px solid #a855f7",
                    boxShadow: i % 2 === 0 ? "0 0 30px rgba(168,85,247,0.5)" : "none",
                  }}
                >
                  {r.num}
                </div>
                <h4 className="font-black text-white text-xs tracking-widest mb-2">{r.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#888" }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-6 stagger">
          {reasons.map((r) => (
            <div key={r.num} className="reveal flex gap-5 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,85,247,0.2)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0" style={{ background: "linear-gradient(135deg,#a855f7,#7c3aed)", color: "#fff" }}>
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
