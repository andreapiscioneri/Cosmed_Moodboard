import { P, IMGS } from "./images";

export function RigoreSection() {
  return (
    <section
      id="rigore"
      className="w-full relative overflow-hidden"
      style={{ background: P.dark, minHeight: "420px" }}
    >
      {/* Background image */}
      <img
        src={IMGS.dataflow}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.18) saturate(0.5)", transform: "scale(1.02)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${P.dark}F0 0%, ${P.darkMid}D0 100%)` }}
      />

      <div className="relative z-10 py-16 md:py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">

          {/* Header */}
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-3">
              <div style={{ width: "28px", height: "1px", background: P.accent }} />
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: P.accentLight,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Metodo & Dati
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(26px, 4vw, 52px)",
                fontWeight: 900,
                color: P.textInv,
                letterSpacing: "-0.04em",
                lineHeight: "0.95",
              }}
            >
              Visione Creativa,<br />
              <span style={{ color: P.accentLight }}>Rigore Scientifico</span>
            </h2>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-5 max-w-3xl">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px, 1.5vw, 17px)",
                color: `${P.textInv}80`,
                lineHeight: "1.85",
              }}
            >
              La creatività, per noi, è uno strumento per raggiungere obiettivi concreti. La nostra strategia si fonda su analisi di mercato rigorose, studio dei volumi di ricerca e monitoraggio costante dei KPI di conversione. Non ci muoviamo per intuizioni, ma per evidenze.
            </p>

            {/* Frase evidenziata */}
            <div
              className="rounded-xl px-6 py-5"
              style={{
                background: `${P.accent}14`,
                border: `1px solid ${P.accent}30`,
                borderLeft: `3px solid ${P.accentLight}`,
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  color: P.textInv,
                  lineHeight: "1.85",
                  fontWeight: 500,
                }}
              >
                Questo significa che ogni scelta estetica e comunicativa che sottoporremo alla vostra validazione ha l'obiettivo finale di{" "}
                <strong style={{ color: P.accentLight, fontWeight: 700 }}>
                  parlare ai vostri target con la massima efficacia.
                </strong>
              </p>
            </div>
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-3">
            {["Analisi di Mercato", "Volumi di Ricerca SEO", "KPI di Conversione", "Evidenze Oggettive"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  color: P.accentLight,
                  border: `1px solid ${P.accent}35`,
                  background: `${P.accent}10`,
                  borderRadius: "4px",
                  padding: "5px 12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
