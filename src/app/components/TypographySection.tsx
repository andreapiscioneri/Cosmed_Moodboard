const typeScales = [
  { label: "Display / Hero", size: "48px", weight: "900", sample: "VO₂ Max 72.4", usage: "Metriche chiave, titoli hero" },
  { label: "Heading 1", size: "28px", weight: "800", sample: "Analisi Metabolica", usage: "Titoli di sezione" },
  { label: "Heading 2", size: "20px", weight: "700", sample: "Referto Clinico", usage: "Titoli card e pannelli" },
  { label: "Corpo Testo", size: "14px", weight: "400", sample: "Monitoraggio fisiologico in tempo reale con analisi di precisione.", usage: "Testo descrittivo" },
  { label: "Didascalia", size: "11px", weight: "500", sample: "FREQUENZA CARDIACA · 148 BPM", usage: "Etichette dati, annotazioni" },
];

const monoExamples = [
  { label: "Valore", text: "O2_UPTAKE: 48.2 mL/kg/min" },
  { label: "Riferimento", text: "RIF: ECG-HR-0042-A" },
  { label: "Protocollo", text: "PROTOCOLLO: BRUCE_RAMP_V2" },
];

export function TypographySection() {
  return (
    <div className="p-10" style={{ background: "#0D1117" }}>
      <div className="mb-6">
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "9px",
            color: "#0B6FFF",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Sistema Tipografico
        </p>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "22px",
            fontWeight: "800",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
          }}
        >
          Scala Tipografica
        </h2>
      </div>

      {/* Primary typeface */}
      <div
        className="rounded-md p-5 mb-4"
        style={{ background: "#111820", border: "1px solid #1A2535" }}
      >
        <div className="flex items-center justify-between mb-4">
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "9px",
              color: "#4A7CAF",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Font Primario
          </span>
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "9px",
              color: "#1E3A5A",
            }}
          >
            Inter — Google Fonts
          </span>
        </div>
        <div className="space-y-3">
          {typeScales.map((item) => (
            <div
              key={item.label}
              className="flex items-baseline gap-4"
              style={{ borderBottom: "1px solid #0D1520", paddingBottom: "10px" }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: item.size,
                  fontWeight: item.weight,
                  color: "#FFFFFF",
                  lineHeight: "1.1",
                  flex: "1",
                  minWidth: 0,
                }}
              >
                {item.sample}
              </span>
              <div className="flex flex-col items-end" style={{ flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "8px",
                    color: "#0B6FFF",
                    letterSpacing: "0.1em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.size} / W{item.weight}
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "7px",
                    color: "#1E3A5A",
                    whiteSpace: "nowrap",
                    marginTop: "1px",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monospace */}
      <div
        className="rounded-md p-4"
        style={{ background: "#0A1520", border: "1px solid #1A2535" }}
      >
        <div className="flex items-center justify-between mb-3">
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "9px",
              color: "#4A7CAF",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Font Secondario
          </span>
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "9px",
              color: "#1E3A5A",
            }}
          >
            Roboto Mono — Dati
          </span>
        </div>
        <div className="space-y-2">
          {monoExamples.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "9px",
                  color: "#1E3A5A",
                  minWidth: "64px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "12px",
                  color: "#00D4FF",
                  letterSpacing: "0.05em",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
