"use client";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

type Work = {
  brand: string;
  category: string;
  stat: string;
  accent: string;
  // Drop an MP4 URL here to make the reel live. Works with a file in /public
  // (e.g. "/work/weplay.mp4") OR an external URL (Cloudinary / Bunny / etc).
  // Leave empty and the card shows a branded placeholder until you add it.
  video?: string;
  poster?: string; // optional thumbnail image shown before play
};

const work: Work[] = [
  { brand: "WEPLAY",          category: "Gaming App · Influencer Marketing", stat: "200K+ Views",      accent: "#a78bfa" },
  { brand: "INFINIX GT30 PRO", category: "Product Launch · Tech",            stat: "3.6M+ Views",      accent: "#4ade80" },
  { brand: "METASPACE",       category: "Web3 · Podcast · Esports",          stat: "1M+ Views",        accent: "#22d3ee" },
  { brand: "ROOTER",          category: "Game Streaming",                    stat: "Top Creators",     accent: "#fbbf24" },
  { brand: "GAMERJI",         category: "Esports Platform",                  stat: "High Engagement",  accent: "#f472b6" },
  { brand: "BIGCASH",         category: "Skill Gaming",                      stat: "Daily Tournaments", accent: "#60a5fa" },
];

const initials = (s: string) => s.split(" ").map((w) => w[0]).slice(0, 2).join("");

export default function WorkShowcase() {
  const { isDark } = useTheme();
  const [active, setActive] = useState<Work | null>(null);

  // Duplicated once so the marquee loops seamlessly (translateX(-50%)).
  const loop = [...work, ...work];

  return (
    <>
      <section id="our-work" className="section-wrap" style={{ background: isDark ? "#0a0a0a" : "#f0f0f0" }}>
        <div className="section-inner">
          {/* Header */}
          <div className="reveal text-center mb-8 md:mb-12">
            <span className="section-label" style={{ color: "var(--t-text)" }}>Our Work</span>
            <h2 className="section-heading" style={{ color: "var(--t-text)" }}>BRANDS WE&apos;VE WORKED WITH</h2>
            <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
              Real campaigns, real results — the UGC reels we produced for the brands we partner with.
            </p>
            <p className="mt-2 text-xs" style={{ color: "var(--t-text-faint)" }}>Hover a reel to pause &amp; play</p>
          </div>

          {/* Auto-scrolling single row — pauses on hover (see globals.css) */}
          <div
            className="reveal reel-marquee relative overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)",
              maskImage: "linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)",
            }}
          >
            <div className="reel-track flex gap-4 md:gap-6 py-2" style={{ width: "max-content" }}>
              {loop.map((w, i) => (
                <ReelCard key={`${w.brand}-${i}`} w={w} onOpen={() => w.video && setActive(w)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen reel modal */}
      {active && active.video && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: isDark ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.92)", backdropFilter: "blur(14px)" }}
          onClick={() => setActive(null)}
        >
          <div className="relative" style={{ width: "min(90vw, 420px)", maxHeight: "90vh" }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute -top-12 right-0 w-11 h-11 rounded-full flex items-center justify-center"
              style={{ background: "var(--t-icon-bg)", border: "1px solid var(--t-card-border)" }}
            >
              <X className="w-5 h-5" style={{ color: "var(--t-text)" }} />
            </button>
            <video
              src={active.video}
              poster={active.poster}
              controls
              autoPlay
              playsInline
              className="w-full rounded-2xl"
              style={{ aspectRatio: "9 / 16", maxHeight: "72vh", background: "#000", border: `1px solid ${active.accent}55` }}
            />
            <div className="mt-4 text-center">
              <h3 className="font-black text-lg" style={{ color: "var(--t-text)" }}>{active.brand}</h3>
              <p className="text-sm" style={{ color: "var(--t-text-muted)" }}>{active.category} · {active.stat}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ReelCard({ w, onOpen }: { w: Work; onOpen: () => void }) {
  const vref = useRef<HTMLVideoElement>(null);
  const hasVideo = !!w.video;

  return (
    <div
      className="group relative flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
      style={{ width: "clamp(200px, 60vw, 260px)", aspectRatio: "9 / 16" }}
      onClick={onOpen}
      onMouseEnter={() => { if (hasVideo) vref.current?.play().catch(() => {}); }}
      onMouseLeave={() => {
        if (hasVideo && vref.current) { vref.current.pause(); vref.current.currentTime = 0; }
      }}
    >
      {/* Video, or a vibrant branded poster while no MP4 is set */}
      {hasVideo ? (
        <video ref={vref} src={w.video} poster={w.poster} muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(165deg, ${w.accent}e6 0%, ${w.accent}59 38%, #0b0b0f 100%)` }}
        >
          {/* Big brand watermark */}
          <span
            className="absolute font-black select-none leading-none"
            style={{ top: "5%", left: "50%", transform: "translateX(-50%)", fontSize: 190, color: "rgba(255,255,255,0.10)" }}
          >
            {initials(w.brand)}
          </span>
        </div>
      )}

      {/* Readability gradient at the bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 42%, transparent 68%)" }}
      />

      {/* Centered play button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.7)", backdropFilter: "blur(6px)" }}
        >
          <Play className="w-7 h-7 text-white" style={{ marginLeft: 3 }} fill="white" />
        </div>
      </div>

      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${w.accent}, transparent)` }} />

      {/* Bottom info overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span
          className="inline-block text-[11px] font-black px-2.5 py-1 rounded-full mb-2.5 tracking-wide"
          style={{ background: w.accent, color: "#0a0a0a" }}
        >
          {w.stat}
        </span>
        <h3 className="font-black text-white text-lg leading-tight">{w.brand}</h3>
        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.72)" }}>{w.category}</p>
      </div>
    </div>
  );
}
