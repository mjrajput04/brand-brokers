"use client";

import { useState } from "react";
import { Monitor, Sparkles, Gamepad2, Dumbbell, Utensils, Music, ChevronLeft, ChevronRight } from "lucide-react";

const creators = [
  { handle: "@techwithalex",    niche: "Tech & Gadgets",        followers: "2.4M", Icon: Monitor  },
  { handle: "@lifewithsara",    niche: "Lifestyle & Beauty",    followers: "1.8M", Icon: Sparkles },
  { handle: "@gamingwithkai",   niche: "Gaming & Esports",      followers: "3.1M", Icon: Gamepad2 },
  { handle: "@fitnessbyjordan", niche: "Health & Fitness",      followers: "980K", Icon: Dumbbell },
  { handle: "@foodiemaya",      niche: "Food & Travel",         followers: "1.2M", Icon: Utensils },
  { handle: "@musicbyryan",     niche: "Music & Entertainment", followers: "2.7M", Icon: Music    },
];

// Sizes for left, center, right card
const sizes = [
  { scale: 0.82, opacity: 0.55, zIndex: 1 },   // left — smallest
  { scale: 1.00, opacity: 1.00, zIndex: 3 },   // center — largest
  { scale: 0.82, opacity: 0.55, zIndex: 1 },   // right — smallest
];

export default function Roster() {
  const [center, setCenter] = useState(1); // index of center card

  const prev = () => setCenter(c => (c - 1 + creators.length) % creators.length);
  const next = () => setCenter(c => (c + 1) % creators.length);

  // Get 3 visible indices: left, center, right
  const indices = [
    (center - 1 + creators.length) % creators.length,
    center,
    (center + 1) % creators.length,
  ];

  return (
    <section id="roster" className="section-wrap" style={{ background: "#0f0f0f", overflowX: "hidden" }}>
      <div className="section-inner">
        <div className="reveal text-center mb-14">
          <span className="section-label text-white">Creator Network</span>
          <h2 className="section-heading text-white">OUR ROSTER</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#aaa" }}>
            A curated network of high-impact creators across every major niche, ready to amplify your brand.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-0" style={{ minHeight: 280 }}>

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* 3 cards */}
          <div style={{ overflow: "hidden", width: "100%" }} className="px-12 md:px-16">
          <div className="flex items-center justify-center gap-2 md:gap-4 w-full">
            {indices.map((ci, pos) => {
              const creator = creators[ci];
              const { scale, opacity, zIndex } = sizes[pos];
              const isCenter = pos === 1;
              return (
                <div
                  key={ci}
                  onClick={() => !isCenter && (pos === 0 ? prev() : next())}
                  style={{
                    flex: isCenter ? "0 0 clamp(200px, 44vw, 340px)" : "0 0 clamp(120px, 28vw, 260px)",
                    transform: `scale(${scale})`,
                    opacity,
                    zIndex,
                    transitionProperty: "transform, opacity, flex",
                    transitionDuration: "0.4s",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    cursor: isCenter ? "default" : "pointer",
                  }}
                >
                  <div
                    className="p-4 md:p-7 rounded-3xl"
                    style={{
                      background: isCenter ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                      border: `1px solid ${isCenter ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.07)"}`,
                      boxShadow: isCenter ? "0 20px 60px rgba(0,0,0,0.5)" : "none",
                      transitionProperty: "background, border-color, box-shadow",
                      transitionDuration: "0.4s",
                      transitionTimingFunction: "ease",
                    }}
                  >
                    {/* Icon + handle */}
                    <div className="flex items-center gap-3 mb-4 md:gap-4 md:mb-6">
                      <div
                        className="rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          width: isCenter ? "clamp(44px,8vw,64px)" : "clamp(36px,6vw,52px)",
                          height: isCenter ? "clamp(44px,8vw,64px)" : "clamp(36px,6vw,52px)",
                          background: isCenter ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)",
                          transitionProperty: "width, height, background",
                          transitionDuration: "0.4s",
                          transitionTimingFunction: "ease",
                        }}
                      >
                        <creator.Icon
                          style={{ width: isCenter ? "clamp(20px,4vw,30px)" : "clamp(16px,3vw,24px)", height: isCenter ? "clamp(20px,4vw,30px)" : "clamp(16px,3vw,24px)", color: "#ffffff", strokeWidth: 1.5 }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-black text-white truncate" style={{ fontSize: isCenter ? "clamp(11px,2.5vw,15px)" : "clamp(10px,2vw,13px)" }}>{creator.handle}</p>
                        <p className="text-xs mt-0.5 truncate" style={{ color: "#666", fontSize: "clamp(9px,1.5vw,11px)" }}>{creator.niche}</p>
                      </div>
                    </div>

                    {/* Followers */}
                    <div className="flex items-end justify-between">
                      <span className="font-bold tracking-widest uppercase hidden sm:block" style={{ color: "#555", fontSize: "clamp(8px,1.2vw,10px)" }}>Followers</span>
                      <span className="font-black text-white" style={{ fontSize: isCenter ? "clamp(18px,4vw,28px)" : "clamp(14px,3vw,22px)" }}>{creator.followers}</span>
                    </div>

                    {isCenter && (
                      <div className="mt-3 pt-3 md:mt-4 md:pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                        <p className="text-center font-bold tracking-widest uppercase" style={{ color: "#555", fontSize: "clamp(8px,1.5vw,10px)" }}>
                          Available for brand deals
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {creators.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenter(i)}
              style={{
                width: i === center ? 24 : 6,
                height: 6,
                borderRadius: 99,
                background: i === center ? "#ffffff" : "rgba(255,255,255,0.2)",
                transitionProperty: "width, background",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <p className="font-medium tracking-wide text-white">
            500+ CREATORS ACROSS 20+ NICHES AND GROWING.
          </p>
        </div>
      </div>
    </section>
  );
}
