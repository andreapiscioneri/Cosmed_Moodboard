import cosmedLogo from "../../assets/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";

export function MoodboardHeader() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #04080F 0%, #070F1C 40%, #050D1A 100%)",
        borderBottom: "1px solid #1A2A3E",
        minHeight: "280px",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,111,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,111,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute"
        style={{
          top: "-80px",
          right: "-80px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(11,111,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, transparent 0%, #0B6FFF 30%, #2E8BFF 50%, #0B6FFF 70%, transparent 100%)",
        }}
      />

      {/* Document ref - top right */}
      <div className="absolute top-5 right-8 flex items-center gap-4">
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "9px",
            color: "#1E3A5A",
            letterSpacing: "0.2em",
          }}
        >
          BRAND MOODBOARD · CPF-MB-001 · 04.2026
        </span>
      </div>

      <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-between px-10 pt-10 pb-10 gap-8">
        {/* LEFT: Logo + Brand identity */}
        <div className="flex flex-col gap-6">
          {/* Logo + Name group */}
          <div className="flex items-center gap-6">
            {/* Cosmed Logo */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "12px 16px",
                backdropFilter: "blur(10px)",
              }}
            >
              <img
                src={cosmedLogo}
                alt="Cosmed Logo"
                style={{ height: "72px", width: "auto", objectFit: "contain" }}
              />
            </div>

            {/* Vertical divider */}
            <div
              style={{
                width: "1px",
                height: "80px",
                background: "linear-gradient(180deg, transparent, #0B6FFF, transparent)",
                opacity: 0.4,
              }}
            />

            {/* Brand name */}
            <div className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "10px",
                  color: "#0B6FFF",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                }}
              >
                Sub-brand Identity
              </span>
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(36px, 5vw, 72px)",
                  fontWeight: "900",
                  color: "#FFFFFF",
                  lineHeight: "0.92",
                  letterSpacing: "-0.04em",
                }}
              >
                COSMED
              </h1>
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(36px, 5vw, 72px)",
                  fontWeight: "900",
                  color: "#0B6FFF",
                  lineHeight: "0.92",
                  letterSpacing: "-0.04em",
                }}
              >
                PERFORMANCE
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <div style={{ width: "24px", height: "1px", background: "#0B6FFF", opacity: 0.5 }} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    color: "#4A7CAF",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  The Metabolic Company
                </span>
              </div>
            </div>
          </div>

          {/* Concept tag */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded"
              style={{
                background: "rgba(11,111,255,0.08)",
                border: "1px solid rgba(11,111,255,0.2)",
              }}
            >
              <div
                className="rounded-full"
                style={{ width: "6px", height: "6px", background: "#0B6FFF" }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: "#5A8AB8",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Concept: The Precision Lab
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Brand descriptor */}
        <div className="flex flex-col gap-4 lg:max-w-xs xl:max-w-sm">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "#3A5A7A",
              lineHeight: "1.7",
              borderLeft: "2px solid #0B6FFF",
              paddingLeft: "16px",
            }}
          >
            Dove la scienza metabolica incontra le prestazioni di élite. Strumenti di misura
            clinicamente validati per fisiatri, fisioterapisti e scienziati dello sport.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Validazione Scientifica",
              "Precisione Metabolica",
              "Eccellenza Clinica",
              "Analytics ad Alta Performance",
            ].map((kw) => (
              <span
                key={kw}
                className="px-2 py-1 rounded"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "8px",
                  color: "#2A4060",
                  border: "1px solid #1A2535",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
