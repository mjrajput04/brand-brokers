"use client";

import { useState } from "react";
import { Users, BarChart3, Star, X, ArrowRight, Check, Zap } from "lucide-react";

const services = [
  {
    Icon: Users,
    number: "01",
    title: "INFLUENCER\nMARKETING",
    tagline: "End-to-end creator campaigns that convert",
    color: "#ffffff",
    tag: "Most Popular",
    items: [
      "End to end creator management",
      "Data driven shortlisting",
      "Strategic content planning",
      "Performance tracking & reporting",
    ],
    detail: {
      what: "Our influencer marketing service is a fully managed solution — we handle everything so your team doesn't have to. From identifying creators who genuinely resonate with your audience to scripting briefs, coordinating shoots, reviewing content, and reporting results.",
      who: "Gaming brands, tech launches, app installs, e-commerce, and any product category targeting Gen Z & millennials.",
      how: [
        "Deep audience analysis & creator shortlisting",
        "Brief creation, scripting & creative direction",
        "Contract negotiation & licensing",
        "Content review cycles & live tracking dashboard",
        "Post-campaign analytics with CPV, reach & engagement breakdown",
      ],
      perfectFor: ["Performance ads", "Product launches", "App installs", "Brand awareness at scale"],
    },
  },
  {
    Icon: BarChart3,
    number: "02",
    title: "PERFORMANCE\nMARKETING",
    tagline: "High-intent channels traditional agencies miss",
    color: "#a78bfa",
    tag: "High ROI",
    items: [
      "OEM Ads (device-level placements)",
      "Preload Installs",
      "CTV Advertising",
    ],
    detail: {
      what: "We run paid performance campaigns across non-traditional but ultra-high-intent channels — OEM phone ads that appear the moment a user first boots their device, preload installs that ship your app with the phone itself, and CTV spots on smart TVs reaching households during prime time.",
      who: "App developers, gaming studios, fintech, and brands wanting guaranteed eyeballs with measurable ROI.",
      how: [
        "OEM partner network setup & campaign configuration",
        "Preload deal negotiation with device manufacturers",
        "CTV creative production & inventory buying",
        "Real-time performance dashboard with ROAS tracking",
        "A/B testing creatives for cost-per-install optimization",
      ],
      perfectFor: ["App installs at scale", "New market entry", "Performance-first campaigns", "Guaranteed reach"],
    },
  },
  {
    Icon: Star,
    number: "03",
    title: "TALENT\nMANAGEMENT",
    tagline: "We grow creators into brands",
    color: "#fbbf24",
    tag: "Full Service",
    items: [
      "Talent growth & development strategy",
      "Brand collaboration management",
      "Dedicated support & deal flow",
    ],
    detail: {
      what: "We represent gaming and lifestyle creators end-to-end. Our team handles inbound brand enquiries, negotiates deals, manages deliverables, and coaches creators on content strategy — so they can focus on making great content.",
      who: "Creators with 10K–10M+ followers looking to monetize, and brands looking for authentic long-term creator partnerships.",
      how: [
        "Creator audit & growth gap analysis",
        "Monetization roadmap & brand pitch deck",
        "Inbound deal filtering & negotiation",
        "Contract management & deliverable tracking",
        "Quarterly performance reviews & strategy recalibration",
      ],
      perfectFor: ["Long-term brand ambassadors", "Whitelisted creator content", "Affiliate campaigns", "Creator-led launches"],
    },
  },
];

type Service = typeof services[number];

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="section-wrap services-section" style={{ overflowX: "hidden" }}>
        <div className="section-inner">

          {/* Heading */}
          <div className="reveal text-center mb-16">
            <span className="section-label" style={{ color: "var(--t-text)" }}>What We Do</span>
            <h2 className="section-heading" style={{ color: "var(--t-text)" }}>OUR SERVICES</h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-3xl flex flex-col cursor-pointer overflow-hidden"
                style={{
                  background: "var(--t-card-bg)",
                  border: "1px solid var(--t-card-border)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                }}
                onClick={() => setActive(s)}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = `0 30px 80px ${s.color}22, 0 0 0 1px ${s.color}44`;
                  el.style.borderColor = `${s.color}44`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "var(--t-card-border)";
                }}
              >
                {/* Noise texture glow top */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.color}88, transparent)` }}
                />
                {/* Radial glow behind icon */}
                <div
                  className="absolute top-0 left-0 right-0 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.color}18 0%, transparent 70%)` }}
                />

                <div className="relative flex flex-col flex-1 p-8 gap-6">

                  {/* Number + Tag row */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-black text-5xl leading-none select-none"
                      style={{ color: `${s.color}18` }}
                    >
                      {s.number}
                    </span>
                    <span
                      className="text-xs font-black px-3 py-1.5 rounded-full tracking-wider"
                      style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}33` }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-2xl"
                    style={{ background: `${s.color}12`, border: `1px solid ${s.color}28` }}
                  >
                    <s.Icon className="w-7 h-7" style={{ color: s.color }} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-black text-xl leading-tight tracking-tight whitespace-pre-line" style={{ color: "var(--t-text)" }}>
                      {s.title}
                    </h3>
                    <p className="text-xs mt-2 leading-relaxed" style={{ color: s.color === "#ffffff" ? "var(--t-text-muted)" : `${s.color}cc` }}>
                      {s.tagline}
                    </p>
                  </div>

                  {/* Divider */}
                  <div style={{ height: "1px", background: `linear-gradient(90deg, ${s.color}44, transparent)` }} />

                  {/* Items */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: s.color }}
                        />
                        <span className="text-gray-400 text-sm" style={{ color: "var(--t-text-muted)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More CTA */}
                  <div
                    className="flex items-center justify-between pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ borderTop: `1px solid ${s.color}22` }}
                  >
                    <span className="text-sm font-black" style={{ color: s.color }}>
                      Learn More
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: s.color }}
                    >
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div
                  className="h-[3px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(16px)" }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl"
            style={{
              background: "var(--t-card-bg)",
              border: `1px solid ${active.color}33`,
              boxShadow: `0 0 0 1px ${active.color}18, 0 50px 120px rgba(0,0,0,0.95)`,
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${active.color}, transparent)` }} />
            <div className="absolute top-0 left-0 right-0 h-52 rounded-t-3xl pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${active.color}1a, transparent 70%)` }} />

            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all hover:scale-110"
              style={{ background: "var(--t-icon-bg)", border: "1px solid var(--t-card-border)" }}
            >
              <X className="w-4 h-4" style={{ color: "var(--t-text)" }} />
            </button>

            <div className="relative p-6 md:p-12">
              {/* Modal header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl flex-shrink-0" style={{ background: `${active.color}18`, border: `1px solid ${active.color}33` }}>
                  <active.Icon className="w-7 h-7" style={{ color: active.color }} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-black tracking-widest uppercase" style={{ color: active.color }}>Our Service</span>
                  <h2 className="font-black text-xl md:text-3xl leading-tight whitespace-pre-line mt-1" style={{ color: "var(--t-text)" }}>{active.title}</h2>
                  <p className="text-gray-500 text-sm mt-1" style={{ color: "var(--t-text-faint)" }}>{active.tagline}</p>
                </div>
              </div>

              <div className="mb-8" style={{ borderBottom: `1px solid var(--t-card-border)` }} />

              {/* What */}
              <div className="mb-8">
                <h4 className="font-black text-xs tracking-widest uppercase mb-3" style={{ color: active.color }}>WHAT IS IT</h4>
                <p className="text-gray-300 text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{active.detail.what}</p>
              </div>

              {/* Who */}
              <div className="mb-8">
                <h4 className="font-black text-xs tracking-widest uppercase mb-3" style={{ color: active.color }}>WHO IS IT FOR</h4>
                <p className="text-gray-300 text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{active.detail.who}</p>
              </div>

              {/* How */}
              <div className="mb-8">
                <h4 className="font-black text-xs tracking-widest uppercase mb-4" style={{ color: active.color }}>HOW WE DO IT</h4>
                <div className="flex flex-col gap-3">
                  {active.detail.how.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)" }}>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: active.color }}>
                        <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfect For */}
              <div className="rounded-2xl p-6 mb-8" style={{ background: `${active.color}08`, border: `1px solid ${active.color}22` }}>
                <p className="text-xs font-black tracking-widest uppercase mb-3" style={{ color: active.color }}>PERFECT FOR</p>
                <div className="flex flex-wrap gap-2">
                  {active.detail.perfectFor.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: `${active.color}14`, color: active.color, border: `1px solid ${active.color}33` }}>
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
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-sm hover:opacity-90 transition-opacity min-h-[48px]"
                  style={{ background: active.color, color: "#000" }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm transition-colors min-h-[48px]"
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
