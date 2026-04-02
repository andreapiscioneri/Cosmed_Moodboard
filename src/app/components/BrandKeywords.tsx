const paroleChiave = [
  { parola: "Validazione Scientifica", tipo: "primario", dimensione: "grande" },
  { parola: "Precisione Metabolica", tipo: "accento", dimensione: "grande" },
  { parola: "Eccellenza Clinica", tipo: "primario", dimensione: "medio" },
  { parola: "Analytics ad Alta Performance", tipo: "fantasma", dimensione: "grande" },
  { parola: "Bio-medical Tech", tipo: "accento", dimensione: "medio" },
  { parola: "Accuratezza dei Dati", tipo: "fantasma", dimensione: "piccolo" },
  { parola: "Cardiorespiratoria", tipo: "primario", dimensione: "medio" },
  { parola: "Cinetica VO₂", tipo: "accento", dimensione: "piccolo" },
  { parola: "Basato sull'Evidenza", tipo: "fantasma", dimensione: "medio" },
  { parola: "Design Protocollo", tipo: "primario", dimensione: "piccolo" },
  { parola: "Calorimetria Indiretta", tipo: "fantasma", dimensione: "medio" },
  { parola: "Analisi RER", tipo: "accento", dimensione: "piccolo" },
  { parola: "Respiro per Respiro", tipo: "primario", dimensione: "piccolo" },
  { parola: "ISO 13485", tipo: "fantasma", dimensione: "piccolo" },
  { parola: "The Metabolic Company", tipo: "hero", dimensione: "hero" },
];

const pilastri = [
  {
    numero: "01",
    titolo: "Precisione",
    desc: "Accuratezza di misura validata da ricerche cliniche indipendenti e standard internazionali.",
    colore: "#0B6FFF",
  },
  {
    numero: "02",
    titolo: "Autorità",
    desc: "15+ anni di leadership nella scienza metabolica. Scelto da oltre 3.000 istituzioni nel mondo.",
    colore: "#00D4FF",
  },
  {
    numero: "03",
    titolo: "Innovazione",
    desc: "Investimento continuo in R&S per tecnologie metaboliche e cardiopolmonari di nuova generazione.",
    colore: "#FF6B35",
  },
  {
    numero: "04",
    titolo: "Integrazione",
    desc: "Connettività seamless con sistemi EMR, software clinici e piattaforme di analytics per la ricerca.",
    colore: "#2ECC71",
  },
];

function getStileParola(tipo: string) {
  switch (tipo) {
    case "hero": return { colore: "#FFFFFF", opacita: 1 };
    case "primario": return { colore: "#0B6FFF", opacita: 1 };
    case "accento": return { colore: "#00D4FF", opacita: 0.9 };
    case "fantasma": default: return { colore: "#2A4060", opacita: 1 };
  }
}

function getDimensioneTesto(dim: string) {
  switch (dim) {
    case "hero": return "clamp(30px, 4.5vw, 56px)";
    case "grande": return "clamp(16px, 2.5vw, 28px)";
    case "medio": return "clamp(13px, 1.8vw, 20px)";
    case "piccolo": default: return "clamp(11px, 1.4vw, 16px)";
  }
}

function getPesotesto(tipo: string) {
  switch (tipo) {
    case "hero": return "900";
    case "primario": return "700";
    case "accento": return "600";
    default: return "400";
  }
}

export function BrandKeywords() {
  return (
    <div className="px-10 py-6 pb-10">
      {/* Word cloud */}
      <div
        className="rounded-md p-8 mb-4 flex flex-wrap gap-x-6 gap-y-3 items-center"
        style={{ background: "#0A1520", border: "1px solid #1A2535", minHeight: "160px" }}
      >
        {paroleChiave.map((pk) => {
          const stile = getStileParola(pk.tipo);
          return (
            <span
              key={pk.parola}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: getDimensioneTesto(pk.dimensione),
                fontWeight: getPesotesto(pk.tipo),
                color: stile.colore,
                opacity: stile.opacita,
                letterSpacing: pk.tipo === "hero" ? "-0.03em" : "0.01em",
                lineHeight: "1.2",
              }}
            >
              {pk.parola}
            </span>
          );
        })}
      </div>

      {/* Pilastri del brand */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {pilastri.map((p) => (
          <div
            key={p.numero}
            className="rounded-md p-5"
            style={{
              background: "#0A1520",
              border: "1px solid #1A2535",
              borderTop: `3px solid ${p.colore}`,
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: `${p.colore}18`,
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                }}
              >
                {p.numero}
              </span>
              <div
                className="rounded-full"
                style={{ width: "8px", height: "8px", background: p.colore, marginTop: "4px" }}
              />
            </div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: "800",
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                marginBottom: "6px",
              }}
            >
              {p.titolo}
            </h4>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                color: "#2A4060",
                lineHeight: "1.6",
              }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
