"use client";

import { useState, useRef } from "react";
import { Eye, IndianRupee, ThumbsUp, Download, Star, Mic2, X, ArrowRight, Target, Lightbulb, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const cases = [
  {
    num: "01",
    brand: "WEPLAY",
    category: "Gaming App · Influencer Marketing",
    color: "#6C3CE1",
    accentLight: "#a78bfa",
    objective: "Build a dedicated gaming audience through high engagement Shorts promotions.",
    strategy: "Activated top performing gaming channels with relatable short form content to spark curiosity and maximize reach.",
    execution: [
      "Multiple creator led short videos across YouTube Shorts and Instagram Reels",
      "Audience specific hooks focusing on immersive gameplay experience",
      "Momentum based posting schedule to maintain ongoing buzz",
    ],
    stats: [
      { value: "200K+", label: "Views", Icon: Eye },
      { value: "₹0.15", label: "CPV", Icon: IndianRupee },
      { value: "20K+",  label: "Likes", Icon: ThumbsUp },
      { value: "2K+",   label: "Installs", Icon: Download },
    ],
    fullDetail: {
      background: "WePlay was an emerging gaming platform looking to carve a niche in India's saturated mobile gaming market. The challenge: build brand awareness and drive app installs without a massive ad budget.",
      approach: "We identified mid-tier gaming creators (100K–500K subscribers) whose audiences had the highest overlap with WePlay's target demographic — competitive mobile gamers aged 16–28. Rather than one big creator push, we activated a cluster of 8 creators simultaneously to create a trending perception.",
      results: "The campaign delivered 200K+ views at an industry-beating ₹0.15 CPV, proving that smart creator selection outperforms raw spend. The 2K+ organic installs came entirely from creator CTAs — zero paid UA spend.",
      learnings: "Short form content with gameplay hooks (first 3 seconds showing a dramatic play) consistently outperformed talking-head style reviews by 3x in watch time and 2x in click-through.",
    },
  },
  {
    num: "02",
    brand: "INFINIX GT30 PRO",
    category: "Consumer Electronics · Product Launch",
    color: "#00C853",
    accentLight: "#4ade80",
    objective: "Create strong buzz for the launch of the Infinix GT30 Pro Gaming Edition smartphone.",
    strategy: "Partnered with high engagement gaming creators to drive credibility and showcase real in game performance benchmarks.",
    execution: [
      "Product focused short videos featuring real gameplay on the device",
      "Authentic creator opinions and honest benchmark comparisons",
      "Barter collaboration model to maximize ROI without paid fees",
    ],
    stats: [
      { value: "3.6M+", label: "Views", Icon: Eye },
      { value: "200K+", label: "Likes", Icon: ThumbsUp },
      { value: "4",     label: "Influencers", Icon: Star },
    ],
    fullDetail: {
      background: "Infinix GT30 Pro needed a gaming  focused launch strategy to reach India's growing PC to mobile gaming converter audience. Traditional tech review channels weren't cutting through the brand needed creators who actually game.",
      approach: "We curated 4 macro gaming creators with combined reach of 8M+, structured a barter deal (device gifting and usage rights), and co-developed content briefs that felt native to each creator's style not scripted tech ads.",
      results: "3.6M views across 4 creators in 2 weeks. The cost efficiency was remarkable: all delivered through barter, making the effective CPV near zero. The 200K likes signal strong purchase intent among the gaming demographic.",
      learnings: "Barter deals work best when creators are genuinely enthusiastic about the product. We pre-screened all 4 creators to ensure they were already gaming phone users authenticity drove the engagement numbers.",
    },
  },
  {
    num: "03",
    brand: "METASPACE",
    category: "Web3 · Podcast · Esports",
    color: "#06B6D4",
    accentLight: "#22d3ee",
    objective: "Shift MetaSpace's perception from just another gaming platform to a Web3 esports authority, and boost visibility for their new podcast.",
    strategy: "Used gaming creators to push Shorts, Reels, Stories, and community posts positioning the podcast as a must watch for gaming enthusiasts transitioning to Web3.",
    execution: [
      "Community-driven engagement through creator Discord and Telegram shoutouts",
      "Positioned podcast as inside knowledge for Web3 gaming early adopters",
      "Cross-platform amplification: YouTube Shorts and Instagram Reels and Twitter threads",
    ],
    stats: [
      { value: "1M+",   label: "Total Views", Icon: Eye },
      { value: "100K+", label: "Podcast Views", Icon: Mic2 },
    ],
    fullDetail: {
      background: "MetaSpace sat at the intersection of gaming and Web3 — an exciting but niche space. Their podcast had strong content but lacked distribution. The challenge was converting gaming audiences (skeptical of crypto) into Web3-curious listeners.",
      approach: "We reframed the messaging away from Web3 (which triggers skepticism) toward the future of esports earnings — a message that resonated immediately with gaming creators and their audiences. Creator selection focused on channels where the audience was already discussing pro gaming careers.",
      results: "1M total views across platforms with 100K dedicated podcast views — a 10% conversion rate from content views to long-form podcast consumption, far above the industry average of 1–2%.",
      learnings: "Framing matters more than reach. A perfectly framed message through a mid-tier creator consistently outperforms a generic message through a mega creator. This campaign was proof.",
    },
  },
];

type Case = typeof cases[number];

export default function CaseStudies() {
  const [active, setActive] = useState<Case | null>(null);
  const [current, setCurrent] = useState(0);
  const { isDark } = useTheme();

  const prev = () => setCurrent(c => (c - 1 + cases.length) % cases.length);
  const next = () => setCurrent(c => (c + 1) % cases.length);

  const c = cases[current];

  return (
    <>
      <section id="case-studies" className="section-wrap case-studies-section">
        <div className="section-inner">
          <div className="reveal text-center mb-10 md:mb-16">
            <span className="section-label" style={{ color: "var(--t-text)" }}>Proof of Work</span>
            <h2 className="section-heading" style={{ color: "var(--t-text)" }}>CASE STUDIES</h2>
            <p className="text-sm mt-4" style={{ color: "var(--t-text-faint)" }}>Click any card for the full breakdown</p>
          </div>

          {/* Slider */}
          <div className="relative">
            {/* Card */}
            <div
              key={current}
              className="group relative rounded-3xl cursor-pointer overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${c.color}44`,
                boxShadow: `0 0 60px ${c.color}12`,
                animation: "slideInCard 0.35s cubic-bezier(0.16,1,0.3,1) forwards",
              }}
              onClick={() => setActive(c)}
            >
              {/* Left color bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl" style={{ background: `linear-gradient(to bottom, ${c.color}, transparent)` }} />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at 0% 50%, ${c.color}0f, transparent 60%)` }} />

              <div className="relative grid md:grid-cols-2 gap-6 items-start p-6 md:p-10">
                {/* LEFT */}
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-black text-5xl md:text-6xl select-none" style={{ color: `${c.color}22`, lineHeight: 1 }}>{c.num}</span>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: c.color }}>{c.category}</p>
                      <h3 className="font-black text-2xl md:text-3xl" style={{ color: "var(--t-text)" }}>{c.brand}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {[{ label: "OBJECTIVE", text: c.objective }, { label: "STRATEGY", text: c.strategy }].map(({ label, text }) => (
                      <div key={label}>
                        <h4 className="font-black text-xs tracking-widest uppercase mb-1.5" style={{ color: c.color }}>{label}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{text}</p>
                      </div>
                    ))}
                    <div>
                      <h4 className="font-black text-xs tracking-widest uppercase mb-2" style={{ color: c.color }}>EXECUTION</h4>
                      <ul className="flex flex-col gap-1.5">
                        {c.execution.map((ex, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--t-text-muted)" }}>
                            <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: c.color }} />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <h4 className="font-black text-xs tracking-widest uppercase mb-4" style={{ color: c.color }}>KEY RESULTS</h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {c.stats.map((s, j) => (
                      <div key={j} className="flex flex-col items-center p-4 rounded-2xl" style={{ background: `${c.color}0d`, border: `1px solid ${c.color}28` }}>
                        <s.Icon className="w-5 h-5 mb-2" style={{ color: c.color }} strokeWidth={1.5} />
                        <span className="font-black text-2xl" style={{ color: "var(--t-text)" }}>{s.value}</span>
                        <span className="text-xs mt-0.5" style={{ color: "var(--t-text-faint)" }}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between px-5 py-3.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ background: `${c.color}14`, border: `1px solid ${c.color}33` }}>
                    <span className="text-sm font-black" style={{ color: c.color }}>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" style={{ color: c.color }} />
                  </div>
                </div>
              </div>

              {/* Bottom nav bar — inside the card */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderTop: `1px solid ${c.color}22`, background: `${c.color}08` }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={prev}
                  className="flex items-center gap-2 text-sm font-bold transition-all duration-200 hover:opacity-100 min-h-[44px] px-2"
                  style={{ color: c.color, opacity: 0.8 }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {cases.map((cs, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      style={{
                        width: i === current ? 20 : 5,
                        height: 5,
                        borderRadius: 99,
                        background: i === current ? cs.color : "rgba(255,255,255,0.2)",
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

                <button
                  onClick={next}
                  className="flex items-center gap-2 text-sm font-bold transition-all duration-200 min-h-[44px] px-2"
                  style={{ color: c.color, opacity: 0.8 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {active && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" 
          style={{ background: isDark ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.9)", backdropFilter: "blur(16px)" }} 
          onClick={() => setActive(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl"
            style={{ 
              background: "var(--bg-secondary)", 
              border: `1px solid ${active.color}33`, 
              boxShadow: isDark 
                ? `0 0 0 1px ${active.color}18, 0 50px 120px rgba(0,0,0,0.9)`
                : `0 0 0 1px ${active.color}08, 0 50px 120px rgba(0,0,0,0.1)` 
            }} 
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${active.color}, ${active.accentLight}, ${active.color})` }} />
            <div className="absolute top-0 left-0 right-0 h-48 rounded-t-3xl pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${active.color}18, transparent 70%)` }} />
            <button 
              onClick={() => setActive(null)} 
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-colors" 
              style={{ background: "var(--t-icon-bg)", border: "1px solid var(--t-card-border)", color: "var(--t-text)" }}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative p-6 md:p-12">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-black text-5xl md:text-7xl select-none leading-none" style={{ color: `${active.color}22` }}>{active.num}</span>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase" style={{ color: active.color }}>{active.category}</p>
                    <h2 className="font-black text-2xl md:text-4xl" style={{ color: "var(--t-text)" }}>{active.brand}</h2>
                  </div>
                </div>
                <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--t-text-faint)" }}>{active.objective}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {active.stats.map((s, j) => (
                  <div key={j} className="flex flex-col items-center py-4 px-3 rounded-2xl" style={{ background: `${active.color}0f`, border: `1px solid ${active.color}28` }}>
                    <s.Icon className="w-5 h-5 mb-2" style={{ color: active.color }} strokeWidth={1.5} />
                    <span className="font-black text-xl" style={{ color: "var(--t-text)" }}>{s.value}</span>
                    <span className="text-xs mt-0.5" style={{ color: "var(--t-text-faint)" }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="mb-6" style={{ borderBottom: "1px solid var(--t-card-border)" }} />
              {[
                { Icon: Target,   title: "BACKGROUND AND CHALLENGE", text: active.fullDetail.background },
                { Icon: Lightbulb, title: "OUR APPROACH",             text: active.fullDetail.approach },
                { Icon: Zap,      title: "RESULTS",                   text: active.fullDetail.results },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-3 mb-6">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ background: `${active.color}18`, border: `1px solid ${active.color}33` }}>
                    <Icon className="w-4 h-4" style={{ color: active.color }} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs tracking-widest uppercase mb-2" style={{ color: active.color }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{text}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 mb-6">
                <h4 className="font-black text-xs tracking-widest uppercase" style={{ color: active.color }}>EXECUTION BREAKDOWN</h4>
                {active.execution.map((ex, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs" style={{ background: active.color, color: "#000" }}>{i + 1}</div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{ex}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-5 mb-6" style={{ background: `${active.color}0a`, border: `1px solid ${active.color}22` }}>
                <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: active.color }}>KEY LEARNING</p>
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--t-text-muted)" }}>&ldquo;{active.fullDetail.learnings}&rdquo;</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" onClick={() => setActive(null)} className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-sm hover:opacity-90 transition-opacity min-h-[48px]" style={{ background: active.color, color: "#000" }}>
                  Work With Us <ArrowRight className="w-4 h-4" />
                </a>
                <button onClick={() => setActive(null)} className="flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm transition-colors min-h-[48px]" style={{ background: "var(--t-card-bg2)", border: "1px solid var(--t-card-border)", color: "var(--t-text-muted)" }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
