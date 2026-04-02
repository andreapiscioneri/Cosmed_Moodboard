const parolePrimarie = [
  {
    testo: "Precisione Invisibile",
    descrizione: "La scienza che non si vede ma si misura con rigore assoluto",
    colore: "#0E6B6B",
    bg: "#EDF5F4",
    border: "#B8D8D8",
  },
  {
    testo: "Equilibrio Vitale",
    descrizione: "Il metabolismo in armonia con il corpo — misurabile, ottimizzabile",
    colore: "#B8922E",
    bg: "#FBF5E8",
    border: "#DDD0A0",
  },
  {
    testo: "Eccellenza Commerciale",
    descrizione: "Il vantaggio competitivo che trasforma la cura in un'offerta premium",
    colore: "#4A9090",
    bg: "#EDF5F4",
    border: "#A8D0D0",
  },
];

const terminiSecondari = [
  { testo: "Flusso Metabolico", tipo: "teal" },
  { testo: "Energia Cellulare", tipo: "gold" },
  { testo: "Trasformazione", tipo: "dark" },
  { testo: "Calorimetria", tipo: "teal-light" },
  { testo: "Longevità", tipo: "gold-light" },
  { testo: "Biomarcatori", tipo: "muted" },
  { testo: "Nutrizione Funzionale", tipo: "teal" },
  { testo: "Omeostasi", tipo: "muted" },
  { testo: "Vitalità Profonda", tipo: "gold-light" },
  { testo: "Bilanciamento", tipo: "teal-light" },
  { testo: "Misurazione REE", tipo: "muted" },
  { testo: "Gold Standard", tipo: "gold" },
  { testo: "Rigenerazione", tipo: "dark" },
  { testo: "Scienza Predittiva", tipo: "teal-light" },
  { testo: "Premium Wellness", tipo: "gold-light" },
];

const affermazioni = [
  { frase: "Misuriamo l'invisibile.", sotto: "Per trasformare il possibile.", colore: "#0E6B6B", bg: "#EDF5F4", border: "#B8D8D8" },
  { frase: "La salute ha un numero.", sotto: "E noi lo conosciamo con precisione.", colore: "#B8922E", bg: "#FBF5E8", border: "#DDD0A0" },
  { frase: "Il metabolismo è il tuo superpotere.", sotto: "Cosmed Wellness lo libera.", colore: "#0A1F1F", bg: "#F4F7F5", border: "#D8EAEA" },
  { frase: "Oltre il benessere.", sotto: "La scienza dell'essere al meglio.", colore: "#4A9090", bg: "#EDF5F4", border: "#A8D0D0" },
];

function getStileParola(tipo: string) {
  switch (tipo) {
    case "teal": return { colore: "#0E6B6B", peso: 700, opacita: 1 };
    case "gold": return { colore: "#B8922E", peso: 600, opacita: 1 };
    case "dark": return { colore: "#0A1F1F", peso: 500, opacita: 1 };
    case "teal-light": return { colore: "#0E6B6B", peso: 400, opacita: 0.45 };
    case "gold-light": return { colore: "#B8922E", peso: 300, opacita: 0.5 };
    case "muted": default: return { colore: "#A0BABA", peso: 300, opacita: 1 };
  }
}

export function LessicoVisivo() {
  return (
    <section className="px-12 py-8 pb-12">
      <div className="flex items-center gap-4 mb-8">
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
          Lessico Visivo — Il Linguaggio di Cosmed Wellness
        </span>
      </div>

      {/* Primary keywords */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {parolePrimarie.map((p) => (
          <div
            key={p.testo}
            className="rounded-2xl p-7 relative overflow-hidden"
            style={{
              background: p.bg,
              border: `1px solid ${p.border}`,
              borderTop: `3px solid ${p.colore}`,
              boxShadow: "0 2px 12px rgba(14,107,107,0.05)",
            }}
          >
            <div
              className="absolute right-5 bottom-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "110px",
                fontWeight: "900",
                color: p.colore,
                opacity: 0.05,
                lineHeight: "1",
                letterSpacing: "-0.05em",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              ◈
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(18px, 2.2vw, 28px)",
                fontWeight: "700",
                color: p.colore,
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                marginBottom: "10px",
              }}
            >
              {p.testo}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                color: "#5A7A78",
                lineHeight: "1.6",
                fontStyle: "italic",
              }}
            >
              {p.descrizione}
            </p>
          </div>
        ))}
      </div>

      {/* Word cloud */}
      <div
        className="rounded-2xl p-8 mb-6"
        style={{
          background: "#FFFFFF",
          border: "1px solid #D8EAEA",
          boxShadow: "0 2px 12px rgba(14,107,107,0.04)",
        }}
      >
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "8px",
            color: "#B0CACA",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Universo Semantico del Brand
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {terminiSecondari.map((t) => {
            const s = getStileParola(t.tipo);
            return (
              <span
                key={t.testo}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(11px, 1.6vw, 20px)",
                  fontWeight: s.peso,
                  color: s.colore,
                  opacity: s.opacita,
                  letterSpacing: "-0.01em",
                  lineHeight: "1.3",
                }}
              >
                {t.testo}
              </span>
            );
          })}
        </div>
      </div>

      {/* Brand affirmations */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {affermazioni.map((a) => (
          <div
            key={a.frase}
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: a.bg,
              border: `1px solid ${a.border}`,
              boxShadow: "0 1px 8px rgba(14,107,107,0.04)",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "2px",
                background: a.colore,
                marginBottom: "14px",
                opacity: 0.7,
              }}
            />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                fontWeight: "700",
                color: a.colore,
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                marginBottom: "6px",
              }}
            >
              {a.frase}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: "400",
                color: "#5A7A78",
                lineHeight: "1.55",
              }}
            >
              {a.sotto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
