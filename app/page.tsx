"use client";

import Link from "next/link";

const APP_STORE_URL = "#";

function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(253, 250, 245, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(221, 216, 208, 0.5)",
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "22px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--ink)",
        }}
      >
        Passage
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <a
          href="#features"
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "14px",
            color: "var(--stone)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--ink)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--stone)")}
        >
          Features
        </a>
        <a
          href="#pricing"
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "14px",
            color: "var(--stone)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--ink)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--stone)")}
        >
          Pricing
        </a>
        <a
          href={APP_STORE_URL}
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--paper)",
            backgroundColor: "var(--ink)",
            padding: "9px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            transition: "all 0.2s",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2D2825"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--ink)"; }}
        >
          Download
        </a>
      </div>
    </nav>
  );
}

function PhoneMockup() {
  return (
    <div
      className="float"
      style={{
        width: "280px",
        height: "580px",
        backgroundColor: "#1C1814",
        borderRadius: "46px",
        padding: "12px",
        boxShadow: "0 60px 120px rgba(26, 22, 18, 0.32), 0 0 0 1px rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)",
        position: "relative",
        transform: "rotate(-2deg)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0F0D0B",
          borderRadius: "36px",
          overflow: "hidden",
        }}
      >
        {/* Status bar */}
        <div style={{ height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
          <span style={{ fontSize: "12px", color: "#E8E4DE", fontFamily: "system-ui", fontWeight: 600 }}>9:41</span>
          <div style={{ width: "88px", height: "28px", backgroundColor: "#1C1814", borderRadius: "14px" }} />
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="#E8E4DE">
              <rect x="0" y="3" width="3" height="7" rx="1" opacity="0.4"/>
              <rect x="4" y="2" width="3" height="8" rx="1" opacity="0.6"/>
              <rect x="8" y="1" width="3" height="9" rx="1" opacity="0.8"/>
              <rect x="12" y="0" width="3" height="10" rx="1"/>
            </svg>
          </div>
        </div>

        <div style={{ padding: "4px 18px 0" }}>
          <div style={{ fontSize: "26px", fontWeight: 700, color: "#FDFAF5", fontFamily: "system-ui", letterSpacing: "-0.03em", marginBottom: "18px" }}>
            Library
          </div>

          {/* Hero book card */}
          <div style={{ backgroundColor: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", borderRadius: "20px", padding: "14px", marginBottom: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "9px", color: "#9A9490", fontFamily: "system-ui", marginBottom: "10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Jump back in</div>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ width: "44px", height: "60px", borderRadius: "7px", background: "linear-gradient(135deg, #B8963E 0%, #6B4E1A 100%)", flexShrink: 0, boxShadow: "0 6px 16px rgba(0,0,0,0.5)" }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#FDFAF5", fontFamily: "system-ui", letterSpacing: "-0.01em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: "2px" }}>
                  Brothers Karamazov
                </div>
                <div style={{ fontSize: "11px", color: "#9A9490", fontFamily: "system-ui", marginBottom: "8px" }}>Fyodor Dostoevsky</div>
                <div style={{ height: "3px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden", marginBottom: "4px" }}>
                  <div style={{ width: "34%", height: "100%", backgroundColor: "#B8963E", borderRadius: "2px" }} />
                </div>
                <div style={{ fontSize: "10px", color: "#B8963E", fontFamily: "system-ui", fontWeight: 600 }}>Page 312 of 924</div>
              </div>
            </div>
          </div>

          {[
            { title: "Crime and Punishment", author: "Dostoevsky", color: "#5B7FA6", pct: "72%" },
            { title: "Anna Karenina", author: "Tolstoy", color: "#7C6B8A", pct: "18%" },
          ].map((b) => (
            <div key={b.title} style={{ backgroundColor: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "10px 12px", marginBottom: "8px", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "30px", height: "40px", borderRadius: "5px", background: `linear-gradient(135deg, ${b.color} 0%, rgba(0,0,0,0.4) 100%)`, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#FDFAF5", fontFamily: "system-ui", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.title}</div>
                <div style={{ fontSize: "10px", color: "#9A9490", fontFamily: "system-ui" }}>{b.author}</div>
              </div>
              <div style={{ fontSize: "10px", color: "#B8963E", fontFamily: "system-ui", fontWeight: 600, flexShrink: 0 }}>{b.pct}</div>
            </div>
          ))}

          {/* AI chat teaser */}
          <div style={{ marginTop: "8px", backgroundColor: "rgba(184,150,62,0.1)", border: "1px solid rgba(184,150,62,0.2)", borderRadius: "14px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "#B8963E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            </div>
            <div>
              <div style={{ fontSize: "11px", color: "#B8963E", fontFamily: "system-ui", fontWeight: 600 }}>Ask Passage</div>
              <div style={{ fontSize: "10px", color: "#9A9490", fontFamily: "system-ui" }}>What&apos;s happened so far?</div>
            </div>
          </div>
        </div>
      </div>
      {/* Physical buttons */}
      <div style={{ position: "absolute", right: "-3px", top: "130px", width: "3px", height: "38px", backgroundColor: "#2A2420", borderRadius: "0 2px 2px 0" }} />
      <div style={{ position: "absolute", left: "-3px", top: "110px", width: "3px", height: "30px", backgroundColor: "#2A2420", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: "-3px", top: "152px", width: "3px", height: "30px", backgroundColor: "#2A2420", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: "-3px", top: "196px", width: "3px", height: "56px", backgroundColor: "#2A2420", borderRadius: "2px 0 0 2px" }} />
    </div>
  );
}

function AppStoreBadge({ light = false }: { light?: boolean }) {
  return (
    <a
      href={APP_STORE_URL}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: light ? "var(--paper)" : "var(--ink)",
        color: light ? "var(--ink)" : "var(--paper)",
        padding: "14px 24px",
        borderRadius: "14px",
        textDecoration: "none",
        transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: light ? "none" : "0 2px 8px rgba(26, 22, 18, 0.1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = "0 12px 32px rgba(26, 22, 18, 0.18)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = light ? "none" : "0 2px 8px rgba(26, 22, 18, 0.1)";
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div>
        <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "11px", opacity: 0.65, lineHeight: 1 }}>Download on the</div>
        <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "16px", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.01em" }}>App Store</div>
      </div>
    </a>
  );
}

const features = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Ask about any book",
    body: "Chat with Passage about what you're reading. Ask what's happened so far, get character summaries, and explore themes — without spoilers. Every answer is scoped to your current page.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Character lookup",
    body: "Lost track of who's who? Type any name and get an instant profile — their role, relationships, and key moments — limited strictly to events you've actually read.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    title: "50 million titles",
    body: "Search Open Library's entire catalog. Every book comes with metadata, cover art, and page count — ready to add to your shelf in one tap. Import your own PDFs and EPUBs too.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Reading streaks",
    body: "Build a daily habit. Passage tracks how many days in a row you've read, marks books you touched today, and keeps a quiet record of your progress across your whole library.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    title: "AI recommendations",
    body: "Tell Passage what you love and it will suggest your next read — drawing on your library, reading pace, and genre preferences to surface books worth your time.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Local-first privacy",
    body: "Your library, progress, and reading history stay on your device. Passage never sells your data. AI features require a connection but never store your book content or reading history on our servers.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "80px",
            paddingLeft: "max(40px, calc((100vw - 1200px) / 2))",
            paddingRight: "max(40px, calc((100vw - 1200px) / 2))",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative radial */}
          <div style={{ position: "absolute", top: "5%", right: "0", width: "700px", height: "700px", background: "radial-gradient(circle at center, rgba(184,150,62,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-80px", left: "-60px", width: "500px", height: "500px", background: "radial-gradient(circle at center, rgba(184,150,62,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ display: "flex", alignItems: "center", gap: "80px", width: "100%", flexWrap: "wrap" }}>
            {/* Copy */}
            <div style={{ flex: "1 1 400px", maxWidth: "580px" }}>
              <div
                className="fade-up"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(184,150,62,0.1)", border: "1px solid rgba(184,150,62,0.22)", borderRadius: "20px", padding: "6px 14px", marginBottom: "32px" }}
              >
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#B8963E" }} />
                <span style={{ fontSize: "13px", color: "#9A7A2A", fontFamily: "system-ui", fontWeight: 500 }}>Now available on iOS</span>
              </div>

              <h1
                className="fade-up-1"
                style={{ fontSize: "clamp(56px, 7.5vw, 88px)", fontWeight: 600, color: "var(--ink)", lineHeight: 0.98, marginBottom: "28px", fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: "-0.03em" }}
              >
                Read with
                <br />
                <em style={{ fontStyle: "italic", color: "var(--brass)" }}>intention.</em>
              </h1>

              <p
                className="fade-up-2"
                style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--stone)", marginBottom: "44px", maxWidth: "460px", fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                The reading companion that tracks your library, builds daily habits, and lets you ask an AI anything about what you&apos;re reading — scoped to exactly the pages you&apos;ve read.
              </p>

              <div className="fade-up-3" style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <AppStoreBadge />
                <span style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "13px", color: "var(--stone)" }}>Free · iOS 18+</span>
              </div>

              <div
                className="fade-up-4"
                style={{ marginTop: "52px", paddingTop: "40px", borderTop: "1px solid var(--border)", display: "flex", gap: "44px", flexWrap: "wrap" }}
              >
                {[
                  { num: "50M+", label: "Books in catalog" },
                  { num: "Local-first", label: "Data stays on device" },
                  { num: "iOS 26", label: "Liquid Glass design" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "12px", color: "var(--stone)", marginTop: "4px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="fade-up-2" style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section
          id="features"
          style={{
            paddingTop: "120px",
            paddingBottom: "120px",
            paddingLeft: "max(40px, calc((100vw - 1200px) / 2))",
            paddingRight: "max(40px, calc((100vw - 1200px) / 2))",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "520px", marginBottom: "72px" }}>
            <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brass)", fontWeight: 600, marginBottom: "16px" }}>
              Features
            </div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.05, marginBottom: "20px" }}>
              Everything a serious<br />reader needs.
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--stone)", fontFamily: "'Libre Baskerville', Georgia, serif" }}>
              Built around one idea: your reading should feel meaningful, not managed.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1px", backgroundColor: "var(--border)", borderRadius: "20px", overflow: "hidden" }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                style={{ backgroundColor: i % 2 === 0 ? "var(--paper)" : "var(--card)", padding: "36px", transition: "background-color 0.2s", cursor: "default" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#EDE8E0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = i % 2 === 0 ? "var(--paper)" : "var(--card)")}
              >
                <div style={{ width: "44px", height: "44px", backgroundColor: "rgba(184,150,62,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--brass)", marginBottom: "20px" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 600, color: "var(--ink)", marginBottom: "10px", lineHeight: 1.2 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--stone)", fontFamily: "'Libre Baskerville', Georgia, serif", margin: 0 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pull quote ── */}
        <section style={{ paddingTop: "100px", paddingBottom: "100px", paddingLeft: "max(40px, calc((100vw - 1200px) / 2))", paddingRight: "max(40px, calc((100vw - 1200px) / 2))", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <blockquote style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 42px)", fontStyle: "italic", fontWeight: 400, color: "var(--ink)", lineHeight: 1.35, maxWidth: "820px", margin: "0 auto 20px", letterSpacing: "-0.01em" }}>
            &ldquo;A reader lives a thousand lives before he dies.<br />The man who never reads lives only one.&rdquo;
          </blockquote>
          <cite style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "14px", color: "var(--stone)", fontStyle: "normal" }}>
            — George R.R. Martin
          </cite>
        </section>

        {/* ── Pricing ── */}
        <section
          id="pricing"
          style={{
            paddingTop: "120px",
            paddingBottom: "120px",
            paddingLeft: "max(40px, calc((100vw - 1200px) / 2))",
            paddingRight: "max(40px, calc((100vw - 1200px) / 2))",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ fontFamily: "system-ui", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brass)", fontWeight: 600, marginBottom: "16px" }}>Pricing</div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.05, marginBottom: "16px" }}>Simple and honest.</h2>
            <p style={{ fontSize: "16px", color: "var(--stone)", fontFamily: "'Libre Baskerville', Georgia, serif", lineHeight: 1.75 }}>
              Free forever for the essentials. One dollar a month for the full AI experience.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
            {/* Free */}
            <div
              style={{ backgroundColor: "var(--card)", borderRadius: "24px", padding: "40px", border: "1px solid var(--border)", transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
            >
              <div style={{ fontFamily: "system-ui", fontSize: "12px", fontWeight: 600, color: "var(--stone)", marginBottom: "8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Free</div>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "52px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1 }}>$0</span>
                <span style={{ fontFamily: "system-ui", fontSize: "14px", color: "var(--stone)", marginLeft: "6px" }}>forever</span>
              </div>
              <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "14px", color: "var(--stone)", lineHeight: 1.65, marginBottom: "32px" }}>
                Everything you need to manage a reading life.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Unlimited library — any book, any format", "Open Library catalog search (50M+ titles)", "Import your own PDFs and EPUBs", "Reading progress tracking per book", "Daily reading streaks", "Offline reading, always"].map((feat) => (
                  <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: "system-ui", fontSize: "14px", color: "var(--ink)", lineHeight: 1.5 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"/></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href={APP_STORE_URL} style={{ display: "block", textAlign: "center", padding: "14px", borderRadius: "12px", fontFamily: "system-ui", fontSize: "15px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s", backgroundColor: "var(--ink)", color: "var(--paper)", letterSpacing: "-0.01em" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Download free
              </a>
            </div>

            {/* Premium */}
            <div
              style={{ backgroundColor: "var(--ink)", borderRadius: "24px", padding: "40px", position: "relative", transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
            >
              <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", backgroundColor: "var(--brass)", color: "white", fontFamily: "system-ui", fontSize: "11px", fontWeight: 700, padding: "5px 14px", borderRadius: "20px", letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                Most popular
              </div>
              <div style={{ fontFamily: "system-ui", fontSize: "12px", fontWeight: 600, color: "rgba(253,250,245,0.45)", marginBottom: "8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Premium</div>
              <div style={{ marginBottom: "4px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "52px", fontWeight: 600, color: "var(--paper)", letterSpacing: "-0.03em", lineHeight: 1 }}>$1</span>
                <span style={{ fontFamily: "system-ui", fontSize: "14px", color: "rgba(253,250,245,0.45)", marginLeft: "6px" }}>per month</span>
              </div>
              <div style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--brass-light)", marginBottom: "16px" }}>or $10/year — save 17%</div>
              <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "14px", color: "rgba(253,250,245,0.6)", lineHeight: 1.65, marginBottom: "32px" }}>
                The full reading companion, powered by AI.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Everything in Free", "Unlimited AI chat about any book", "Character lookup — no spoilers", "AI-powered book recommendations", "Chapter and section summaries", "Priority access to new features"].map((feat) => (
                  <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: "system-ui", fontSize: "14px", color: "rgba(253,250,245,0.82)", lineHeight: 1.5 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"/></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href={APP_STORE_URL} style={{ display: "block", textAlign: "center", padding: "14px", borderRadius: "12px", fontFamily: "system-ui", fontSize: "15px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s", backgroundColor: "var(--brass)", color: "white", letterSpacing: "-0.01em" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Start Premium
              </a>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section style={{ paddingTop: "120px", paddingBottom: "140px", paddingLeft: "max(40px, calc((100vw - 1200px) / 2))", paddingRight: "max(40px, calc((100vw - 1200px) / 2))", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(44px, 6.5vw, 72px)", fontWeight: 600, color: "var(--ink)", lineHeight: 0.98, marginBottom: "28px", letterSpacing: "-0.03em" }}>
            Your next great book
            <br />is waiting.
          </h2>
          <p style={{ fontSize: "17px", color: "var(--stone)", lineHeight: 1.8, marginBottom: "44px", fontFamily: "'Libre Baskerville', Georgia, serif", maxWidth: "440px", margin: "0 auto 44px" }}>
            Download Passage free. Search 50 million titles, track your progress, and upgrade to Premium when you&apos;re ready.
          </p>
          <AppStoreBadge />
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "36px max(40px, calc((100vw - 1200px) / 2))", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" }}>
          Passage
        </span>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--stone)", textDecoration: "none" }}>Privacy</Link>
          <Link href="/terms" style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--stone)", textDecoration: "none" }}>Terms</Link>
          <Link href="/eula" style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--stone)", textDecoration: "none" }}>EULA</Link>
          <Link href="/support" style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--stone)", textDecoration: "none" }}>Support</Link>
          <a href={APP_STORE_URL} style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--stone)", textDecoration: "none" }}>App Store</a>
          <span style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--stone)" }}>© {new Date().getFullYear()} Passage</span>
        </div>
      </footer>
    </>
  );
}
