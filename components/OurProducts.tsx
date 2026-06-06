"use client";
import { useTheme } from "@/contexts/ThemeContext";

const games = [
  { title: "WEPLAY", genre: "Casual Gaming", desc: "A fun-filled casual gaming platform with engaging titles for all age groups.", tag: "Mobile", emoji: "🎮" },
  { title: "INDUS BATTLE ROYALE", genre: "Battle Royale", desc: "India's first AAA battle royale game built on a futuristic Indian civilization theme.", tag: "PC & Mobile", emoji: "⚔️" },
  { title: "GAMERJI", genre: "eSports Platform", desc: "Competitive eSports tournament platform connecting millions of mobile gamers.", tag: "Platform", emoji: "🏆" },
  { title: "ROOTER", genre: "Game Streaming", desc: "India's largest gaming & live streaming community for creators and fans.", tag: "Streaming", emoji: "📡" },
  { title: "BIGCASH", genre: "Skill Gaming", desc: "Real money skill-based gaming platform with daily tournaments and rewards.", tag: "Mobile", emoji: "💰" },
  { title: "METASPACE", genre: "Web3 eSports", desc: "Next-gen Web3 eSports ecosystem bridging gaming and blockchain.", tag: "Web3", emoji: "🌐" },
];

export default function OurProducts() {
  const { isDark } = useTheme();

  const bg = isDark ? "#111111" : "#f0f0f0";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
  const cardBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";
  const iconBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const tagBg = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const tagColor = isDark ? "#aaa" : "#555";
  const textMuted = isDark ? "#aaa" : "#555";
  const textDim = isDark ? "#555" : "#999";
  const textDesc = isDark ? "#888" : "#666";
  const accentLine = isDark ? "linear-gradient(90deg,#fff,transparent)" : "linear-gradient(90deg,#000,transparent)";
  const textMain = isDark ? "text-white" : "text-black";

  return (
    <section id="our-products" className="section-wrap" style={{ background: bg }}>
      <div className="section-inner">
        <div className="reveal text-center mb-14">
          <span className={`section-label ${textMain}`}>Gaming Portfolio</span>
          <h2 className={`section-heading ${textMain}`}>OUR PRODUCTS</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: textMuted }}>
            Games and platforms we've partnered with — built for the next generation of players.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {games.map((g, i) => (
            <div
              key={g.title}
              className="reveal group p-6 rounded-2xl border cursor-default transition-all duration-300"
              style={{ borderColor: cardBorder, background: cardBg, transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style={{ background: iconBg }}>
                  {g.emoji}
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: tagBg, color: tagColor }}>
                  {g.tag}
                </span>
              </div>

              <h3 className={`font-black text-base tracking-wide mb-1 ${textMain}`}>{g.title}</h3>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: textDim }}>{g.genre}</p>
              <p className="text-sm leading-relaxed" style={{ color: textDesc }}>{g.desc}</p>

              <div
                className="mt-5 h-px w-full group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                style={{ background: accentLine }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
