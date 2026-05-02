"use client";

const services = [
  {
    icon: "👥",
    title: "INFLUENCER MARKETING",
    items: ["End to end creator management", "Data driven shortlisting", "Strategic content planning", "Performance tracking"],
    color: "#a855f7",
  },
  {
    icon: "📈",
    title: "PERFORMANCE MARKETING",
    items: ["OEM Ads", "Preload Installs", "CTV Advertising"],
    color: "#7c3aed",
  },
  {
    icon: "🌟",
    title: "TALENT MANAGEMENT",
    items: ["Talent growth & development", "Brand collaboration management", "Dedicated support & deal flow"],
    color: "#6d28d9",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-wrap" style={{ background: "#f0ede8" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-16">
          <span className="section-label text-purple-500">What We Do</span>
          <h2 className="section-heading">OUR SERVICES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal group relative rounded-3xl cursor-default flex flex-col"
              style={{
                background: "#0a0a0a",
                border: `1px solid ${s.color}22`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${s.color}, 0 20px 50px ${s.color}44`; (e.currentTarget as HTMLElement).style.borderColor = s.color; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = `${s.color}22`; }}
            >
              {/* Top glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${s.color}18, transparent 65%)` }}
              />

              <div className="relative p-8 flex flex-col gap-6 flex-1">
                {/* Icon */}
                <div
                  className="w-16 h-16 flex items-center justify-center text-3xl rounded-2xl flex-shrink-0"
                  style={{ background: `${s.color}22`, border: `1px solid ${s.color}44` }}
                >
                  {s.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-black text-white text-lg tracking-wide pb-4"
                  style={{ borderBottom: `2px solid ${s.color}` }}
                >
                  {s.title}
                </h3>

                {/* Items */}
                <ul className="flex flex-col gap-4">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black"
                        style={{ background: s.color, color: "#fff" }}
                      >
                        {j + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-1 rounded-b-3xl group-hover:h-[3px] transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
