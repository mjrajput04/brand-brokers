"use client";

const problems = [
  { label: "Real Performance", side: "left" },
  { label: "Authentic Trust", side: "left" },
  { label: "Measurable ROI", side: "left" },
  { label: "Lack of Trust", side: "right" },
  { label: "Underutilized Performance", side: "right" },
  { label: "Unoptimized Install Campaigns", side: "right" },
];

export default function Problem() {
  return (
    <section id="problem" className="section-wrap" style={{ background: "#f0ede8" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-purple-500">The Challenge</span>
          <h2 className="section-heading">THE PROBLEM</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-center" style={{ color: "#555" }}>
            The modern digital landscape is growing rapidly, yet brands still struggle with:
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Left labels */}
          <div className="hidden md:flex flex-col justify-center gap-10 w-52 text-right" style={{ minHeight: "320px" }}>
            {problems.filter(p => p.side === "left").map((p, i) => (
              <div key={p.label} className="reveal-left flex items-center justify-end gap-3">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: "#333" }}>{p.label}</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#a855f7" }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Center circle */}
          <div className="reveal-scale flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(#a855f7 0deg 180deg, #0a0a0a 180deg 360deg)", animation: "spin-slow 20s linear infinite" }} />
              <div className="absolute inset-2 rounded-full" style={{ background: "conic-gradient(#a855f7 0deg 180deg, #0a0a0a 180deg 360deg)" }} />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="font-black text-2xl text-white">BRAND</div>
                  <div className="flex justify-center text-xs font-bold mt-1 gap-2">
                    <span className="text-purple-300">WANT</span>
                    <span className="text-gray-300">GETS</span>
                  </div>
                </div>
              </div>
              {[1, 2, 3].map(i => (
                <div key={i} className="absolute inset-0 rounded-full border border-purple-400" style={{ animation: "pulse-ring 3s ease-out infinite", animationDelay: `${i * 0.8}s` }} />
              ))}
            </div>
          </div>

          {/* Right labels */}
          <div className="hidden md:flex flex-col justify-center gap-10 w-52" style={{ minHeight: "320px" }}>
            {problems.filter(p => p.side === "right").map((p, i) => (
              <div key={p.label} className="reveal-right flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#0a0a0a" }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: "#333" }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="md:hidden mt-10 grid grid-cols-2 gap-4 stagger">
          {problems.map(p => (
            <div key={p.label} className="reveal p-4 rounded-2xl border" style={{ borderColor: "rgba(0,0,0,0.1)", background: "rgba(255,255,255,0.5)" }}>
              <p className="font-semibold text-sm" style={{ color: "#333" }}>{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
