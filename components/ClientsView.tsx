interface Client {
  name: string;
  logo: string;
  /** bg tint color for the card, defaults to transparent */
  bg?: string;
}

function LogoCard({ client }: { client: Client }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:brightness-110 w-[130px] h-[64px] px-4 md:w-[170px] md:h-[76px] md:px-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-[38px] max-w-[100px] md:max-h-[46px] md:max-w-[138px]"
        style={{ objectFit: "contain", display: "block" }}
      />
    </div>
  );
}

export default function ClientsView({ items }: { items: any[] }) {
  const data = items || [];

  // Row 1 — client logos flagged row 1
  const row1: Client[] = data.filter((d) => d.kind === "client" && d.row === 1);
  // Row 2 — client logos flagged row 2
  const row2: Client[] = data.filter((d) => d.kind === "client" && d.row === 2);
  // Stats bar
  const statsBar = data.filter((d) => d.kind === "stat");

  if (data.length === 0) {
    return <section id="clients" className="section-wrap clients-section" />;
  }

  return (
    <section id="clients" className="section-wrap clients-section">
      <div className="section-inner">
        <div className="reveal text-center mb-10 md:mb-16">
          <span className="section-label" style={{ color: "var(--t-text-muted)" }}>Our Work</span>
          <h2 className="section-heading" style={{ color: "var(--t-text)" }}>CLIENT PORTFOLIO</h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--t-text-muted)" }}>
            Trusted by India&apos;s top gaming &amp; tech brands
          </p>
        </div>
      </div>

      {/* ── Row 1: scrolls left ── */}
      <div className="relative mb-4 md:mb-5 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div
          className="flex gap-3 md:gap-5"
          style={{ width: "max-content", animation: "marquee 28s linear infinite" }}
        >
          {[...row1, ...row1, ...row1].map((c, i) => (
            <LogoCard key={i} client={c} />
          ))}
        </div>
      </div>

      {/* ── Row 2: scrolls right ── */}
      <div
        className="relative overflow-hidden mb-10 md:mb-16"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
      >
        <div
          className="flex gap-3 md:gap-5"
          style={{ width: "max-content", animation: "marquee 24s linear infinite reverse" }}
        >
          {[...row2, ...row2, ...row2].map((c, i) => (
            <LogoCard key={i} client={c} />
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="section-inner">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 stagger">
          {statsBar.map((s) => (
            <div
              key={s.label}
              className="reveal-scale text-center p-4 md:p-6 rounded-2xl"
              style={{
                background: "var(--t-card-bg)",
                border: "1px solid var(--t-card-border)",
              }}
            >
              <p className="font-black" style={{ fontSize: "clamp(24px,3vw,40px)", color: "var(--t-text)" }}>
                {s.num}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--t-text-muted)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
