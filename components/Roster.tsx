"use client";

import { useState } from "react";
import { Monitor, Sparkles, Gamepad2, Dumbbell, Utensils, Music, ChevronLeft, ChevronRight, Info, Share2, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const creators = [
  { 
    handle: "@techwithalex",    
    niche: "Tech & Gadgets",        
    followers: "2.4M", 
    Icon: Monitor,
    description: "Alex is a leading tech reviewer specializing in cutting-edge consumer electronics and smart home ecosystems. Known for detailed deep-dives and honest performance benchmarks.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com",
      snapchat: "https://snapchat.com"
    }
  },
  { 
    handle: "@lifewithsara",    
    niche: "Lifestyle & Beauty",    
    followers: "1.8M", 
    Icon: Sparkles,
    description: "Sara bridges the gap between high-end luxury and everyday accessibility. Her content focuses on mindful living, sustainable beauty, and aesthetic home organization.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      snapchat: "https://snapchat.com"
    }
  },
  { 
    handle: "@gamingwithkai",   
    niche: "Gaming & Esports",      
    followers: "3.1M", 
    Icon: Gamepad2,
    description: "Kai is a top-tier esports commentator and variety streamer. He commands a highly engaged community focused on competitive FPS titles and indie game discoveries.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com"
    }
  },
  { 
    handle: "@fitnessbyjordan", niche: "Health & Fitness",      
    followers: "980K", 
    Icon: Dumbbell,
    description: "Jordan specializes in functional strength training and nutritional science. He provides science-backed workout programs and realistic lifestyle transformations.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      snapchat: "https://snapchat.com"
    }
  },
  { 
    handle: "@foodiemaya",      
    niche: "Food & Travel",         
    followers: "1.2M", 
    Icon: Utensils,
    description: "Maya explores global cultures through their culinary heritage. From street food gems to Michelin-starred kitchens, she tells stories through every bite.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com"
    }
  },
  { 
    handle: "@musicbyryan",     
    niche: "Music & Entertainment", followers: "2.7M", 
    Icon: Music,
    description: "Ryan is a multi-instrumentalist and producer sharing the secrets of music creation. He blends technical tutorials with viral entertainment and performance art.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      snapchat: "https://snapchat.com"
    }
  },
];

// Sizes for left, center, right card
const sizes = [
  { scale: 0.82, opacity: 0.55, zIndex: 1 },   // left — smallest
  { scale: 1.00, opacity: 1.00, zIndex: 3 },   // center — largest
  { scale: 0.82, opacity: 0.55, zIndex: 1 },   // right — smallest
];

// Custom SVGs for social platforms
const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'instagram':
      return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
    case 'youtube':
      return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>;
    case 'facebook':
      return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;
    case 'snapchat':
      return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2c-.6 0-1.15.26-1.53.71-.48.56-.63 1.34-.39 2.05l.38 1.11c-1.34.25-2.58.74-3.61 1.42-2.15 1.43-3.41 3.51-3.41 5.65 0 1.15.35 2.21.99 3.06-.48.68-1.01 1.25-1.57 1.71-.47.38-.63.98-.41 1.53.22.55.77.91 1.36.91h.23c.31 0 .6-.09.85-.25.56-.37 1.11-.84 1.61-1.38.89.55 1.94.88 3.09.95.23 2.14 1.14 3.24 2.41 3.24 1.27 0 2.18-1.1 2.41-3.24 1.15-.07 2.2-.4 3.09-.95.5.54 1.05 1.01 1.61 1.38.25.16.54.25.85.25h.23c.59 0 1.14-.36 1.36-.91.22-.55.06-1.15-.41-1.53-.56-.46-1.09-1.03-1.57-1.71.64-.85.99-1.91.99-3.06 0-2.14-1.26-4.22-3.41-5.65-1.03-.68-2.27-1.17-3.61-1.42l.38-1.11c.24-.71.09-1.49-.39-2.05-.38-.45-.93-.71-1.53-.71z"/></svg>;
    default:
      return null;
  }
};

export default function Roster() {
  const [center, setCenter] = useState(1); // index of center card
  const [selectedCreator, setSelectedCreator] = useState<typeof creators[0] | null>(null);
  const [showHandles, setShowHandles] = useState<number | null>(null);
  const { isDark } = useTheme();

  const prev = () => setCenter(c => (c - 1 + creators.length) % creators.length);
  const next = () => setCenter(c => (c + 1) % creators.length);

  // Get 3 visible indices: left, center, right
  const indices = [
    (center - 1 + creators.length) % creators.length,
    center,
    (center + 1) % creators.length,
  ];

  return (
    <section id="roster" className="section-wrap roster-section">
      <div className="section-inner">
        <div className="reveal text-center mb-14">
          <span className="section-label" style={{ color: "var(--t-text)" }}>Creator Network</span>
          <h2 className="section-heading" style={{ color: "var(--t-text)" }}>OUR ROSTER</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
            A curated network of high impact creators across every major niche, ready to amplify your brand.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-0" style={{ minHeight: 280 }}>

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ 
              background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)", 
              border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}` 
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" style={{ color: "var(--t-text)" }} />
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
                      className="p-4 md:p-7 rounded-3xl relative group overflow-hidden"
                      style={{
                        background: isCenter ? "var(--t-card-bg2)" : "var(--t-card-bg)",
                        border: `1px solid ${isCenter ? "var(--t-card-border2)" : "var(--t-card-border)"}`,
                        boxShadow: isCenter 
                          ? (isDark ? "0 20px 60px rgba(0,0,0,0.5)" : "0 20px 60px rgba(0,0,0,0.1)") 
                          : "none",
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
                            background: isCenter ? "var(--t-icon-bg)" : "var(--t-card-bg)",
                            transitionProperty: "width, height, background",
                            transitionDuration: "0.4s",
                            transitionTimingFunction: "ease",
                          }}
                        >
                          <creator.Icon
                            style={{ 
                              width: isCenter ? "clamp(20px,4vw,30px)" : "clamp(16px,3vw,24px)", 
                              height: isCenter ? "clamp(20px,4vw,30px)" : "clamp(16px,3vw,24px)", 
                              color: isDark ? "#ffffff" : "#000000", 
                              strokeWidth: 1.5 
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-black truncate" style={{ fontSize: isCenter ? "clamp(11px,2.5vw,15px)" : "clamp(10px,2vw,13px)", color: "var(--t-text)" }}>{creator.handle}</p>
                          <p className="text-xs mt-0.5 truncate" style={{ color: "var(--t-text-faint)", fontSize: "clamp(9px,1.5vw,11px)" }}>{creator.niche}</p>
                        </div>
                      </div>

                      {/* Followers */}
                      <div className="flex items-end justify-between">
                        <span className="font-bold tracking-widest uppercase hidden sm:block" style={{ color: "var(--t-text-faint)", fontSize: "clamp(8px,1.2vw,10px)" }}>Followers</span>
                        <span className="font-black" style={{ fontSize: isCenter ? "clamp(18px,4vw,28px)" : "clamp(14px,3vw,22px)", color: "var(--t-text)" }}>{creator.followers}</span>
                      </div>

                      {isCenter && (
                        <div className="mt-3 pt-3 md:mt-4 md:pt-4" style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
                          <p className="text-center font-bold tracking-widest uppercase" style={{ color: "var(--t-text-faint)", fontSize: "clamp(8px,1.5vw,10px)" }}>
                            Available for brand deals
                          </p>
                        </div>
                      )}

                      {/* Hover Overlay - only for center card */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex flex-col items-center justify-center gap-3 p-6 z-10">
                          <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedCreator(creator); }}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95"
                            style={{ 
                              background: isDark ? "linear-gradient(135deg, #ffffff, #d1d5db)" : "linear-gradient(135deg, #000000, #333333)",
                              color: isDark ? "#000000" : "#ffffff"
                            }}
                          >
                            <Info className="w-4 h-4" /> Know More
                          </button>
                          <div className="relative w-full">
                            <button 
                              onClick={(e) => { e.stopPropagation(); setShowHandles(showHandles === ci ? null : ci); }}
                              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm border border-white/20 transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
                              style={{ background: "rgba(255,255,255,0.05)" }}
                            >
                              <Share2 className="w-4 h-4" /> Handles
                            </button>
                            
                            {/* Handles Dropdown */}
                            <AnimatePresence>
                              {showHandles === ci && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  className="absolute bottom-full left-0 right-0 mb-2 p-2 rounded-2xl shadow-2xl flex flex-wrap justify-center gap-2 z-20"
                                  style={{ 
                                    background: isDark ? "#1a1a1a" : "#ffffff", 
                                    border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}` 
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {Object.entries(creator.socials).map(([platform, url]) => (
                                    <a 
                                      key={platform}
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-3 rounded-xl transition-all hover:scale-110"
                                      style={{ 
                                        background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                                        color: "var(--t-text)"
                                      }}
                                      title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                                    >
                                      <SocialIcon platform={platform} />
                                    </a>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
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
            style={{ 
              background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)", 
              border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}` 
            }}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" style={{ color: "var(--t-text)" }} />
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
                background: i === center 
                  ? (isDark ? "#ffffff" : "#000000") 
                  : (isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"),
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
          <p className="font-medium tracking-wide" style={{ color: "var(--t-text)" }}>
            500+ CREATORS ACROSS 20+ NICHES AND GROWING.
          </p>
        </div>
      </div>

      {/* Know More Modal */}
      <AnimatePresence>
        {selectedCreator && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCreator(null)}
              className="absolute inset-0 backdrop-blur-md"
              style={{ background: isDark ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.8)" }}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
              style={{ 
                background: isDark ? "#0a0a0a" : "#ffffff", 
                border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}` 
              }}
            >
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, transparent, ${isDark ? "#ffffff" : "#000000"}, transparent)` }} />
              
              <button 
                onClick={() => setSelectedCreator(null)}
                className="absolute top-4 right-4 p-2 rounded-full transition-colors z-10"
                style={{ background: "var(--t-icon-bg)", border: "1px solid var(--t-card-border)" }}
              >
                <X className="w-5 h-5" style={{ color: "var(--t-text)" }} />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-5 mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" 
                    style={{ background: "var(--t-icon-bg)", border: "1px solid var(--t-card-border)" }}
                  >
                    <selectedCreator.Icon className="w-8 h-8" style={{ color: "var(--t-text)" }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black" style={{ color: "var(--t-text)" }}>{selectedCreator.handle}</h3>
                    <p className="font-medium" style={{ color: "var(--t-text-muted)" }}>{selectedCreator.niche}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--t-text-faint)" }}>About Creator</h4>
                    <p className="leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                      {selectedCreator.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--t-text-faint)" }}>Followers</p>
                      <p className="text-2xl font-black" style={{ color: "var(--t-text)" }}>{selectedCreator.followers}</p>
                    </div>
                    <div className="h-10 w-px" style={{ background: "var(--t-card-border)" }} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--t-text-faint)" }}>Status</p>
                      <p className="text-sm font-bold text-green-500">Available for deals</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t" style={{ borderColor: "var(--t-card-border)" }}>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--t-text-faint)" }}>Connect on Socials</h4>
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(selectedCreator.socials).map(([platform, url]) => (
                        <a 
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all hover:scale-105"
                          style={{ 
                            background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                            color: "var(--t-text)"
                          }}
                        >
                          <SocialIcon platform={platform} />
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button 
                      onClick={() => setSelectedCreator(null)}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                      style={{ 
                        background: isDark ? "#ffffff" : "#000000",
                        color: isDark ? "#000000" : "#ffffff"
                      }}
                    >
                      Close <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
