"use client";

const creators = [
  { handle: "@techwithalex", niche: "Tech & Gadgets", followers: "2.4M", emoji: "💻" },
  { handle: "@lifewithsara", niche: "Lifestyle & Beauty", followers: "1.8M", emoji: "✨" },
  { handle: "@gamingwithkai", niche: "Gaming & Esports", followers: "3.1M", emoji: "🎮" },
  { handle: "@fitnessbyjordan", niche: "Health & Fitness", followers: "980K", emoji: "💪" },
  { handle: "@foodiemaya", niche: "Food & Travel", followers: "1.2M", emoji: "🍜" },
  { handle: "@musicbyryan", niche: "Music & Entertainment", followers: "2.7M", emoji: "🎵" },
];

export default function Roster() {
  return (
    <section id="roster" className="section-wrap" style={{ background: "#0a0a0a" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-14">
          <span className="section-label text-purple-400">Creator Network</span>
          <h2 className="section-heading text-white">OUR ROSTER</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#aaa" }}>
            A curated network of high-impact creators across every major niche, ready to amplify your brand.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {creators.map((c) => (
            <div
              key={c.handle}
              className="reveal p-6 rounded-2xl border transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/5 cursor-default"
              style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: "rgba(168,85,247,0.15)" }}
                >
                  {c.emoji}
                </div>
                <div>
                  <p className="font-black text-white text-sm tracking-wide">{c.handle}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#888" }}>{c.niche}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#666" }}>Followers</span>
                <span className="font-black text-lg" style={{ color: "#a855f7" }}>{c.followers}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="font-medium tracking-wide" style={{ color: "#a855f7" }}>
            500+ CREATORS ACROSS 20+ NICHES — AND GROWING.
          </p>
        </div>
      </div>
    </section>
  );
}
