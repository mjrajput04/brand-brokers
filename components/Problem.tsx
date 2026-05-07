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
    <section id="problem" className="section-wrap" style={{ background: "#111111" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-white">The Challenge</span>
          <h2 className="section-heading text-white">THE PROBLEM</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-center" style={{ color: "#888" }}>
            The modern digital landscape is growing rapidly, yet brands still struggle with:
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Left labels */}
          <div className="hidden md:flex flex-col justify-center gap-10 w-52 text-right" style={{ minHeight: "320px" }}>
            {problems.filter(p => p.side === "left").map((p, i) => (
              <div key={p.label} className="reveal-left flex items-center justify-end gap-3">
                <span className="font-semibold text-sm uppercase tracking-wide text-white">{p.label}</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#ffffff" }}>
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Center circle */}
          <div className="reveal-scale flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(#ffffff 0deg 180deg, #333 180deg 360deg)", animation: "spin-slow 20s linear infinite" }} />
              <div className="absolute inset-2 rounded-full" style={{ background: "conic-gradient(#ffffff 0deg 180deg, #0a0a0a 180deg 360deg)" }} />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative text-center" style={{ width: 120 }}>
                  {/* White text — visible on dark half */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ clipPath: "inset(0 50% 0 0)" }}>
                    <div className="font-black text-2xl text-white leading-tight">BRAND</div>
                    <div className="flex gap-3 text-xs font-bold mt-2">
                      <span className="text-white">WANT</span>
                      <span className="text-gray-400">GETS</span>
                    </div>
                  </div>
                  {/* Black text — visible on white half */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ clipPath: "inset(0 0 0 50%)" }}>
                    <div className="font-black text-2xl text-black leading-tight">BRAND</div>
                    <div className="flex gap-3 text-xs font-bold mt-2">
                      <span className="text-black">WANT</span>
                      <span className="text-gray-600">GETS</span>
                    </div>
                  </div>
                  {/* Invisible spacer for layout */}
                  <div className="invisible">
                    <div className="font-black text-2xl leading-tight">BRAND</div>
                    <div className="flex gap-3 text-xs font-bold mt-2">
                      <span>WANT</span><span>GETS</span>
                    </div>
                  </div>
                </div>
              </div>
              {[1, 2, 3].map(i => (
                <div key={i} className="absolute inset-0 rounded-full border border-gray-500" style={{ animation: "pulse-ring 3s ease-out infinite", animationDelay: `${i * 0.8}s` }} />
              ))}
            </div>
          </div>

          {/* Right labels */}
          <div className="hidden md:flex flex-col justify-center gap-10 w-52" style={{ minHeight: "320px" }}>
            {problems.filter(p => p.side === "right").map((p, i) => (
              <div key={p.label} className="reveal-right flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#ffffff" }}>
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide text-white">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="md:hidden mt-10 grid grid-cols-2 gap-4 stagger">
          {problems.map(p => (
            <div key={p.label} className="reveal p-4 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
              <p className="font-semibold text-sm text-white">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
