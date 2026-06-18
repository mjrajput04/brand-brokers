"use client";

import { useState } from "react";
import { Star, Smartphone, Boxes, Gamepad2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  accent: string;
  monogram?: string;
  logoIcon?: LucideIcon;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Brand Brokers turned a modest budget into 200K+ views at a ₹0.15 CPV. They don't just buy reach — they engineer it. Our installs came purely from creator CTAs.",
    name: "Aditya Menon",
    role: "Head of Growth",
    company: "WePlay",
    accent: "#a78bfa",
    monogram: "WP",
  },
  {
    quote:
      "Our GT30 Pro launch hit 3.6M views across four creators — effectively zero paid CPV through their barter model. The gameplay-first content drove real purchase intent.",
    name: "Rhea Kapoor",
    role: "Marketing Lead",
    company: "Infinix GT30 Pro",
    accent: "#4ade80",
    monogram: "GT",
    logoIcon: Smartphone,
  },
  {
    quote:
      "They repositioned us from 'just another gaming platform' to a Web3 esports authority. 1M+ views and a 10% conversion into long-form podcast listens — 5x the benchmark.",
    name: "Karan Shetty",
    role: "Founder",
    company: "MetaSpace",
    accent: "#22d3ee",
    monogram: "MS",
    logoIcon: Boxes,
  },
  {
    quote:
      "Transparent reporting on every single deliverable. We always knew exactly where the budget went and what it returned. Rare honesty in this industry.",
    name: "Sneha Iyer",
    role: "Brand Partnerships",
    company: "Rooter",
    accent: "#fbbf24",
    monogram: "RO",
    logoIcon: Gamepad2,
  },
  {
    quote:
      "Their creator shortlisting is surgically precise. Every collaboration landed with our exact target gamers, and engagement consistently beat our internal projections.",
    name: "Vikram Rao",
    role: "Growth Manager",
    company: "GamerJi",
    accent: "#a78bfa",
    monogram: "GJ",
  },
];

const ROTATE_MS = 5000;
// A different entrance animation per card slot (keyframes defined in globals.css).
const SLOT_EFFECTS = ["fadeIn", "slideRight", "scaleIn", "fadeUp", "slideLeft"];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Testimonials() {
  const { isDark } = useTheme();
  const [base, setBase] = useState(0);
  const [hovered, setHovered] = useState(false);

  const bg = isDark ? "#0f0f0f" : "#e8e8e8";
  const starColor = isDark ? "#fbbf24" : "#d97706";

  const advance = () => setBase((b) => (b + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-wrap" style={{ background: bg }}>
      <div className="section-inner">
        {/* Heading */}
        <div className="reveal text-center mb-10 md:mb-16">
          <span className="section-label" style={{ color: "var(--t-text)" }}>Testimonials</span>
          <h2 className="section-heading" style={{ color: "var(--t-text)" }}>FEEDBACK FROM OUR CLIENTS</h2>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
            Real words from the brands we have scaled.
          </p>

          {/* Countdown — fills over 5s, then advances the cards (pauses on hover) */}
          <div className="mt-6 mx-auto h-1 rounded-full overflow-hidden" style={{ width: 180, background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)" }}>
            <div
              key={base}
              onAnimationEnd={advance}
              style={{
                height: "100%",
                borderRadius: 99,
                background: "linear-gradient(90deg,#a78bfa,#22d3ee)",
                transformOrigin: "left",
                animation: `progressGrow ${ROTATE_MS / 1000}s linear forwards`,
                animationPlayState: hovered ? "paused" : "running",
              }}
            />
          </div>
        </div>

        {/* Same grid; each card swaps testimonial every 5s with its own transition effect */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {testimonials.map((_, slot) => {
            const idx = (base + slot) % testimonials.length;
            const t = testimonials[idx];
            const accent = t.accent;
            const featured = slot === 0;
            const LogoIcon = t.logoIcon;
            const chipText = t.monogram ?? initials(t.company);
            const effect = SLOT_EFFECTS[slot % SLOT_EFFECTS.length];
            const avatarGradient = isDark
              ? `linear-gradient(135deg, ${accent}, ${accent}99)`
              : `linear-gradient(135deg, ${accent}, ${accent}cc)`;

            return (
              <article
                key={slot}
                className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 flex flex-col ${featured ? "lg:col-span-2" : ""}`}
                style={{
                  background: isDark ? "var(--t-card-bg)" : "#ffffff",
                  border: "1px solid var(--t-card-border)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = `0 30px 80px ${accent}22, 0 0 0 1px ${accent}44`;
                  el.style.borderColor = `${accent}44`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "var(--t-card-border)";
                }}
              >
                {/* Accent top hairline (full width) */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }} />
                {/* Hover radial glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at 0% 0%, ${accent}14, transparent 60%)` }} />

                {/* key={idx} remounts on change so the per-slot entrance animation replays */}
                <div key={idx} className="relative flex flex-col flex-1" style={{ animation: `${effect} 0.6s cubic-bezier(0.16,1,0.3,1) both` }}>
                  {/* Big quotation mark */}
                  <span aria-hidden className="font-black select-none leading-none" style={{ fontSize: featured ? "clamp(72px,8vw,120px)" : "clamp(56px,7vw,88px)", color: `${accent}22`, marginTop: "-8px", marginBottom: "4px" }}>
                    &ldquo;
                  </span>

                  {/* Quote */}
                  <p className={`leading-relaxed font-medium flex-1 break-words ${featured ? "text-lg md:text-xl" : "text-base md:text-[17px]"}`} style={{ color: "var(--t-text)" }}>
                    {t.quote}
                  </p>

                  {/* Stars */}
                  <div className="mt-5 mb-6 flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="w-4 h-4" style={{ color: starColor }} fill={starColor} strokeWidth={0} />
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="mb-5" style={{ height: "1px", background: `linear-gradient(90deg, ${accent}33, transparent)` }} />

                  {/* Footer */}
                  <div className="flex items-center gap-4">
                    <div
                      className="rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform"
                      style={{ width: 52, height: 52, background: avatarGradient, border: `2px solid ${accent}55`, boxShadow: `0 0 0 4px ${accent}12` }}
                    >
                      {t.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <span className="font-black text-base" style={{ color: "#0a0a0a" }}>{initials(t.name)}</span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-black text-sm md:text-base truncate" style={{ color: "var(--t-text)" }}>{t.name}</p>
                      <p className="text-xs truncate" style={{ color: "var(--t-text-muted)" }}>
                        {t.role} · <span style={{ color: accent, fontWeight: 700 }}>{t.company}</span>
                      </p>
                    </div>

                    <div className="flex-shrink-0 rounded-xl flex items-center justify-center" style={{ width: 38, height: 38, background: `${accent}14`, border: `1px solid ${accent}33`, color: accent }}>
                      {LogoIcon ? <LogoIcon className="w-5 h-5" strokeWidth={2} /> : <span className="font-black text-sm">{chipText}</span>}
                    </div>
                  </div>
                </div>

                {/* Bottom progress bar */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
