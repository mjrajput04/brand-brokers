"use client";

import { useState } from "react";
import { Clapperboard, TrendingUp, FileText, Users, Film, Scissors, X, ArrowRight, Check } from "lucide-react";

const offerings = [
  {
    icon: FileText,
    title: "STRATEGIC SCRIPTING",
    desc: "Brand aligned messaging tailored to platform guidelines and audience preferences",
    color: "#ffffff",
    detail: {
      what: "We write scripts that don't feel like ads. Every brief is built around platform-native hooks, audience pain points, and brand messaging — then refined until it converts.",
      points: [
        "Platform-specific hook writing (YouTube, Reels, TikTok format)",
        "Brand voice alignment & tone guidelines",
        "A/B script variations for performance testing",
        "CTA placement strategy for maximum click-through",
        "Revision cycles until brand approves",
      ],
      perfectFor: ["Performance ads", "Product launches", "Influencer briefs", "Landing page videos"],
    },
  },
  {
    icon: Users,
    title: "CREATOR SOURCING",
    desc: "Talent matching aligned with your target demographic and brand identity",
    color: "#e5e7eb",
    detail: {
      what: "We don't just find creators — we match them. Our vetting process goes beyond follower count, analyzing audience demographics, engagement quality, past brand performance, and content authenticity.",
      points: [
        "Demographic & psychographic audience analysis",
        "Engagement rate & authenticity audit",
        "Brand safety screening",
        "Past brand performance review",
        "Contract & rate negotiation",
      ],
      perfectFor: ["Brand awareness campaigns", "App install campaigns", "Long-term ambassador programs", "Niche community targeting"],
    },
  },
  {
    icon: Film,
    title: "NATIVE PRODUCTION",
    desc: "Short form, performance optimized video built for Ads, Instagram, & more",
    color: "#d1d5db",
    detail: {
      what: "We produce content that looks like it belongs in the feed — not a TV commercial dropped into social. Our production team understands platform psychology and creates videos optimized for autoplay, sound-off, and scroll-stop.",
      points: [
        "Vertical & horizontal format production",
        "Sound-off optimized with subtitles & visual storytelling",
        "Hook-first editing — attention captured in 2 seconds",
        "Motion graphics & animated CTAs",
        "Multiple cut lengths: 6s, 15s, 30s, 60s",
      ],
      perfectFor: ["Meta & Google video ads", "Instagram Reels", "YouTube Shorts", "Connected TV pre-rolls"],
    },
  },
  {
    icon: Scissors,
    title: "PROFESSIONAL POST",
    desc: "Editing, motion graphics, subtitles, and strategic CTA integration",
    color: "#9ca3af",
    detail: {
      what: "Raw footage is only the start. Our post-production team adds the layer that turns good content into great performance — tight editing, branded motion graphics, dynamic subtitles, and strategically timed CTAs.",
      points: [
        "Color grading & audio mixing",
        "Animated lower thirds & branded graphics",
        "Auto-caption generation with style customization",
        "End card & CTA overlay design",
        "Deliverables in all required platform specs",
      ],
      perfectFor: ["Whitelisted creator content", "Paid media creatives", "Organic social content", "Ad creative libraries"],
    },
  },
];

const perfectFor = ["Performance ads", "Social media campaigns", "Website & landing pages", "Influencer whitelisting"];

type Offering = typeof offerings[number];

export default function UGC() {
  const [active, setActive] = useState<Offering | null>(null);

  return (
    <>
      <section id="ugc" className="section-wrap ugc-section" style={{ overflowX: "hidden" }}>
        <div className="section-inner">

          {/* Top split */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="reveal-left">
              <span className="section-label" style={{ color: "var(--t-text)" }}>Content Creation</span>
              <h2 className="section-heading" style={{ color: "var(--t-text)" }}>UGC VIDEO PRODUCTION</h2>
              <p className="font-bold mt-2 mb-4 tracking-wide" style={{ color: "var(--t-text-muted)" }}>BUILT NATIVE, OPTIMIZED FOR SCALE</p>
              <p className="leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                High performance, platform native video content designed to drive trust and conversions.
                End to end UGC creative production from strategic concept to final asset.
              </p>
            </div>
            <div className="reveal-right flex justify-center">
              <div
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-3xl flex items-center justify-center animate-float"
                style={{ background: "var(--t-card-bg2)", border: "1px solid var(--t-card-border)" }}
              >
                <Clapperboard className="w-14 h-14 sm:w-20 sm:h-20" style={{ color: "var(--t-text)" }} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conversion split */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="reveal-left order-2 md:order-1 flex justify-center">
              <div
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-3xl flex items-center justify-center animate-float"
                style={{ background: "linear-gradient(135deg,#ffffff,#9ca3af)", boxShadow: "0 30px 80px rgba(255,255,255,0.1)", animationDelay: "1s" }}
              >
                <TrendingUp className="w-14 h-14 sm:w-20 sm:h-20 text-black" strokeWidth={1.5} />
              </div>
            </div>
            <div className="reveal-right order-1 md:order-2">
              <h2 className="section-heading" style={{ color: "var(--t-text)" }}>FROM CONCEPT TO CONVERSION</h2>
              <p className="leading-relaxed mt-4" style={{ color: "var(--t-text-muted)" }}>
                We manage your complete UGC video production lifecycle, ensuring every frame feels organic while driving measurable performance.
              </p>
            </div>
          </div>

          {/* Section label */}
          <div className="reveal text-center mb-4">
            <h3 className="font-black text-2xl md:text-4xl tracking-tight" style={{ color: "var(--t-text)" }}>WHAT WE OFFER:</h3>
            <p className="text-sm mt-3" style={{ color: "var(--t-text-faint)" }}>Hover to explore · Click to open full detail</p>
          </div>

          {/* Offering cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-8 mt-10">
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="group relative rounded-2xl cursor-pointer overflow-hidden"
                  style={{
                    background: "var(--t-card-bg)",
                    border: "1px solid var(--t-card-border)",
                    transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  }}
                  onClick={() => setActive(o)}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${o.color}55`;
                    el.style.boxShadow = `0 0 30px ${o.color}15`;
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--t-card-border)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Hover glow bg */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 10% 50%, ${o.color}0c, transparent 65%)` }}
                  />

                  {/* Left accent line */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: o.color }}
                  />

                  <div className="relative flex items-start gap-5 p-6">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${o.color}14`, border: `1px solid ${o.color}28` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: o.color }} strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-sm tracking-widest uppercase mb-2" style={{ color: "var(--t-text)" }}>
                        {o.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{o.desc}</p>

                      {/* Learn more — reveals on hover */}
                      <div
                        className="flex items-center gap-1.5 mt-3 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                        style={{ color: o.color }}
                      >
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Perfect For bar */}
          <div className="reveal p-5 rounded-2xl text-center" style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}>
            <span className="font-bold text-sm" style={{ color: "var(--t-text-dim)" }}>
              <span className="font-black" style={{ color: "var(--t-text)" }}>Perfect For: </span>
              {perfectFor.join(" | ")}
            </span>
          </div>
        </div>
      </section>

      {/* ── Detail Modal ── */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(14px)" }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
            style={{
              background: "var(--t-card-bg)",
              border: `1px solid ${active.color}33`,
              boxShadow: `0 0 0 1px ${active.color}18, 0 40px 100px rgba(0,0,0,0.85)`,
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top gradient strip */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
              style={{ background: active.color }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-40 rounded-t-3xl pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 40% 0%, ${active.color}1a, transparent 70%)` }}
            />

            {/* Close button */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
              style={{ background: "var(--t-icon-bg)", border: "1px solid var(--t-card-border)" }}
            >
              <X className="w-4 h-4" style={{ color: "var(--t-text)" }} />
            </button>

            <div className="relative p-6 md:p-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: `${active.color}18`, border: `1px solid ${active.color}33` }}
                >
                  <active.icon className="w-6 h-6" style={{ color: active.color }} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs font-black tracking-widest uppercase mb-0.5"
                    style={{ color: active.color }}
                  >
                    UGC Production
                  </p>
                  <h2 className="font-black text-xl leading-tight" style={{ color: "var(--t-text)" }}>{active.title}</h2>
                </div>
              </div>

              <div className="mb-6" style={{ borderBottom: "1px solid var(--t-card-border)" }} />

              {/* What is it */}
              <div className="mb-7">
                <h4
                  className="font-black text-xs tracking-widest uppercase mb-3"
                  style={{ color: active.color }}
                >
                  WHAT IS IT
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{active.detail.what}</p>
              </div>

              {/* What's included */}
              <div className="mb-7">
                <h4
                  className="font-black text-xs tracking-widest uppercase mb-4"
                  style={{ color: active.color }}
                >
                  WHAT&apos;S INCLUDED
                </h4>
                <div className="flex flex-col gap-3">
                  {active.detail.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: active.color }}
                      >
                        <Check className="w-3 h-3 text-black" strokeWidth={3} />
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfect For */}
              <div
                className="rounded-2xl p-5 mb-8"
                style={{ background: `${active.color}08`, border: `1px solid ${active.color}22` }}
              >
                <p
                  className="text-xs font-black tracking-widest uppercase mb-3"
                  style={{ color: active.color }}
                >
                  PERFECT FOR
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.detail.perfectFor.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold"
                      style={{ background: `${active.color}14`, color: active.color, border: `1px solid ${active.color}33` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-black text-sm hover:opacity-90 transition-opacity min-h-[48px]"
                  style={{ background: active.color, color: "#000" }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm transition-colors min-h-[48px]"
                  style={{ background: "var(--t-card-bg2)", border: "1px solid var(--t-card-border)", color: "var(--t-text-muted)" }}
                >
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
