import cosmedLogo from "../../../assets/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";

export function WellnessHeader() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #FFFFFF 0%, #F4F9F8 50%, #EDF5F4 100%)",
        borderBottom: "1px solid #D8EAEA",
        minHeight: "300px",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,107,107,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,107,107,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Teal glow top-left */}
      <div
        className="absolute"
        style={{
          top: "-100px",
          left: "-60px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(14,107,107,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      {/* Gold glow bottom-right */}
      <div
        className="absolute"
        style={{
          bottom: "-60px",
          right: "-40px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(184,146,46,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, transparent 0%, #0E6B6B 25%, #B8922E 50%, #0E6B6B 75%, transparent 100%)",
        }}
      />

      {/* Doc ref */}
      <div className="absolute top-5 right-10">
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "9px",
            color: "#B0CACA",
            letterSpacing: "0.2em",
          }}
        >
          BRAND MOODBOARD · CWL-MB-001 · 04
        </span>
      </div>

      <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-between px-12 pt-12 pb-12 gap-10">
        {/* LEFT */}
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-7">
            {/* Logo container — white bg to keep logo visible */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #D8EAEA",
                borderRadius: "14px",
                padding: "14px 20px",
                boxShadow: "0 2px 12px rgba(14,107,107,0.06)",
              }}
            >
              <img
                src={cosmedLogo}
                alt="Cosmed Logo"
                style={{ height: "64px", width: "auto", objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                width: "1px",
                height: "88px",
                background: "linear-gradient(180deg, transparent, #B8922E60, transparent)",
              }}
            />

            <div className="flex flex-col">
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "10px",
                  color: "#B8922E",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                  opacity: 0.8,
                }}
              >
                Sub-brand Identity
              </span>
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(38px, 5.5vw, 74px)",
                  fontWeight: "900",
                  color: "#0A1F1F",
                  lineHeight: "0.9",
                  letterSpacing: "-0.045em",
                }}
              >
                COSMED
              </h1>
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(38px, 5.5vw, 74px)",
                  fontWeight: "300",
                  color: "#0E6B6B",
                  lineHeight: "0.9",
                  letterSpacing: "-0.03em",
                }}
              >
                WELLNESS
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <div
                  style={{
                    width: "28px",
                    height: "1px",
                    background: "linear-gradient(90deg, #B8922E, transparent)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: "#B8922E",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  The Metabolic Company
                </span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {["Flusso Metabolico", "Energia Vitale", "Precisione Invisibile", "Equilibrio Cellulare"].map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(14,107,107,0.06)",
                  border: "1px solid rgba(14,107,107,0.14)",
                }}
              >
                <div
                  className="rounded-full"
                  style={{ width: "4px", height: "4px", background: "#0E6B6B" }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    color: "#0E6B6B",
                    letterSpacing: "0.06em",
                  }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — manifesto */}
        <div className="flex flex-col gap-5 lg:max-w-sm">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: "300",
              color: "#3A5A58",
              lineHeight: "1.85",
              borderLeft: "2px solid #B8922E60",
              paddingLeft: "18px",
              fontStyle: "italic",
            }}
          >
            Dove la scienza del metabolismo si fa benessere. Un santuario di precisione per chi cerca risultati trasformativi e duraturi.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Premium · Clinico", "Validato · Esclusivo", "Nutrizione · Longevità"].map((t) => (
              <span
                key={t}
                className="px-3 py-1"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "8px",
                  color: "#7A9A98",
                  border: "1px solid #D8EAEA",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderRadius: "3px",
                  background: "#FFFFFF",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
