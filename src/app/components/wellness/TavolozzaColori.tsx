const colori = [
  {
    nome: "Deep Teal",
    hex: "#0E6B6B",
    cmyk: "C87 M0 Y0 K58",
    umore: "Profondità, fiducia e autorità scientifica. Il teal evoca la chiarezza delle acque profonde — calma, intelligente, inesauribile.",
    uso: "Colore primario — identità, titoli, elementi strutturali",
    swatch: "linear-gradient(145deg, #0E6B6B 0%, #0A4848 100%)",
    testo: "#FFFFFF",
  },
  {
    nome: "Satin Gold",
    hex: "#B8922E",
    cmyk: "C0 M21 Y75 K28",
    umore: "Esclusività, valore e trasformazione. L'oro satinato suggerisce premiumness senza ostentazione — lusso sobrio e scientifico.",
    uso: "Accento — claim, callout, elementi premium",
    swatch: "linear-gradient(145deg, #C9A84C 0%, #A07828 100%)",
    testo: "#FFFFFF",
  },
  {
    nome: "Oxygen White",
    hex: "#F8FAF7",
    cmyk: "C1 M0 Y1 K2",
    umore: "Purezza, respiro e spazio clinico. Un bianco con un soffio di verde — evoca ossigeno, vitalità e la pulizia di un laboratorio d'eccellenza.",
    uso: "Sfondo principale, spazio bianco, superfici primarie",
    swatch: "linear-gradient(145deg, #FFFFFF 0%, #EEF5EE 100%)",
    testo: "#0A1F1F",
  },
  {
    nome: "Teal Mist",
    hex: "#EDF5F4",
    cmyk: "C7 M0 Y2 K4",
    umore: "Freschezza e leggerezza. La versione aerea del teal — per sfondi, sezioni alternate e spazi di respiro nel layout.",
    uso: "Sfondi sezione, superfici card alternate",
    swatch: "linear-gradient(145deg, #EDF5F4 0%, #D8ECEA 100%)",
    testo: "#0A1F1F",
  },
  {
    nome: "Aqua Mist",
    hex: "#4A9090",
    cmyk: "C48 M0 Y0 K44",
    umore: "La transizione tra scienza e benessere. Un teal luminoso che porta energia e chiarezza — il colore del cambiamento in atto.",
    uso: "Elementi secondari, hover states, grafici di supporto",
    swatch: "linear-gradient(145deg, #4A9090 0%, #2E7070 100%)",
    testo: "#FFFFFF",
  },
  {
    nome: "Slate Teal",
    hex: "#3A5A58",
    cmyk: "C35 M0 Y3 K65",
    umore: "Struttura e solidità. Il colore del testo secondario e degli elementi di supporto — presente senza dominare.",
    uso: "Testo corpo, didascalie, elementi UI secondari",
    swatch: "linear-gradient(145deg, #3A5A58 0%, #2A4040 100%)",
    testo: "#FFFFFF",
  },
];

export function TavolozzaColori() {
  return (
    <section className="px-12 py-8">
      <div className="flex items-center gap-4 mb-6">
        <div style={{ width: "28px", height: "1px", background: "linear-gradient(90deg, #B8922E, transparent)" }} />
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "9px",
            color: "#B8922E",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          Tavolozza Colori — Emozione & Identità
        </span>
      </div>

      {/* Spectrum bar */}
      <div
        className="w-full rounded-2xl mb-6 overflow-hidden relative"
        style={{
          height: "110px",
          border: "1px solid #D8EAEA",
          boxShadow: "0 2px 16px rgba(14,107,107,0.06)",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, #0A1F1F 0%, #0E4848 12%, #0E6B6B 28%, #4A9090 44%, #C9A84C 60%, #E8D4A0 76%, #F8FAF7 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-end justify-between px-6 pb-4">
          {["VOID", "DEEP TEAL", "AQUA MIST", "SATIN GOLD", "OXYGEN WHITE"].map((l) => (
            <span
              key={l}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "7px",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.15em",
              }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* Color swatches */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {colori.map((c) => (
          <div
            key={c.hex}
            className="rounded-xl overflow-hidden"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #E0EAEA" }}
          >
            <div style={{ height: "64px", background: c.swatch }} />
            <div className="p-3" style={{ background: "#FFFFFF" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#0A1F1F",
                  marginBottom: "2px",
                }}
              >
                {c.nome}
              </p>
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "10px",
                  color: "#B8922E",
                  marginBottom: "1px",
                }}
              >
                {c.hex}
              </p>
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "7px",
                  color: "#A0BABA",
                  letterSpacing: "0.04em",
                }}
              >
                {c.cmyk}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mood descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {colori.slice(0, 3).map((c) => (
          <div
            key={c.hex + "-mood"}
            className="rounded-xl p-5"
            style={{
              background: "#FFFFFF",
              border: "1px solid #D8EAEA",
              borderLeft: `3px solid ${c.hex}`,
              boxShadow: "0 1px 8px rgba(14,107,107,0.04)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="rounded-full"
                style={{ width: "12px", height: "12px", background: c.swatch, flexShrink: 0, backgroundSize: "cover" }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#0A1F1F",
                }}
              >
                {c.nome}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                color: "#5A7A78",
                lineHeight: "1.75",
                marginBottom: "8px",
                fontStyle: "italic",
              }}
            >
              {c.umore}
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "8px",
                color: "#B0CACA",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {c.uso}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
