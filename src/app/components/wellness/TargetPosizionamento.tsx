const segmenti = [
  {
    target: "Nutrizionista Clinico",
    sottotitolo: "Professionista Premium",
    descrizione:
      "Professionista della nutrizione clinica che opera in contesti ad alto valore: centri medici privati, club sportivi di élite, studi specializzati. Cerca strumenti che elevino la qualità del servizio e giustifichino tariffe premium.",
    bisogni: [
      "Misurazione REE per piani nutrizionali personalizzati",
      "Report professionali per l'educazione del paziente",
      "Integrazione con software nutrizionali esistenti",
      "Validazione scientifica per credibilità professionale",
    ],
    proposta:
      "Cosmed Wellness fornisce la misura metabolica gold standard che trasforma la nutrizione da intuizione a scienza precisa.",
    colore: "#0E6B6B",
    bgAccento: "#EDF5F4",
    borderAccento: "#B8D8D8",
    icona: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#0E6B6B" strokeWidth="1.2" fill="none" />
        <circle cx="20" cy="20" r="10" stroke="#0E6B6B" strokeWidth="0.8" fill="none" opacity="0.4" />
        <path d="M14 20 C14 14 26 14 26 20 S14 26 14 20" stroke="#0E6B6B" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="3" fill="#0E6B6B" opacity="0.6" />
      </svg>
    ),
  },
  {
    target: "Centro Wellness Premium",
    sottotitolo: "Luxury Destination",
    descrizione:
      "Centro benessere di lusso o day spa medica che integra protocolli scientifici nell'offerta. La differenziazione competitiva si basa sulla credibilità clinica unita all'esperienza di servizio esclusiva.",
    bisogni: [
      "Offerta di servizi metabolici come revenue stream differenziante",
      "Strumentazione dall'aspetto premium e professionale",
      "Pacchetti consulenza metabolica ad alto valore percepito",
      "Formazione e supporto per il personale del centro",
    ],
    proposta:
      "Un protocollo metabolico firmato Cosmed diventa l'ancora di valore per posizionare il centro ai massimi livelli di mercato.",
    colore: "#B8922E",
    bgAccento: "#FBF5E8",
    borderAccento: "#DDD0A0",
    icona: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="16" width="24" height="16" rx="2" stroke="#B8922E" strokeWidth="1.2" fill="none" />
        <path d="M14 16 V12 C14 9.8 17 8 20 8 C23 8 26 9.8 26 12 V16" stroke="#B8922E" strokeWidth="1.2" fill="none" />
        <circle cx="20" cy="24" r="3" stroke="#B8922E" strokeWidth="1.2" fill="none" />
        <line x1="20" y1="27" x2="20" y2="30" stroke="#B8922E" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    target: "Medico Specialista",
    sottotitolo: "Endocrinologo · Dietologo",
    descrizione:
      "Medico specializzato in endocrinologia, diabetologia o medicina dello stile di vita. Integra la valutazione metabolica strumentale nel percorso diagnostico per prescrivere terapie nutrizionali evidence-based.",
    bisogni: [
      "Dati metabolici affidabili per diagnosi e monitoraggio",
      "Report clinici compatibili con la cartella medica",
      "Conformità CE IVD per uso diagnostico",
      "Pubblicazioni e dati di validazione per la comunità medica",
    ],
    proposta:
      "La precisione Cosmed trasforma la misurazione metabolica in un atto medico rigoroso, elevando lo standard di cura del paziente.",
    colore: "#4A9090",
    bgAccento: "#EDF5F4",
    borderAccento: "#A8D0D0",
    icona: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="10" y="8" width="20" height="26" rx="3" stroke="#4A9090" strokeWidth="1.2" fill="none" />
        <line x1="15" y1="15" x2="25" y2="15" stroke="#4A9090" strokeWidth="1" />
        <line x1="15" y1="20" x2="25" y2="20" stroke="#4A9090" strokeWidth="1" />
        <line x1="15" y1="25" x2="21" y2="25" stroke="#4A9090" strokeWidth="1" />
        <circle cx="29" cy="30" r="6" fill="#FFFFFF" stroke="#4A9090" strokeWidth="1.2" />
        <line x1="29" y1="27" x2="29" y2="33" stroke="#4A9090" strokeWidth="1.5" />
        <line x1="26" y1="30" x2="32" y2="30" stroke="#4A9090" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const differenziatori = [
  { numero: "3.000+", etichetta: "Istituzioni nel Mondo", colore: "#0E6B6B", bg: "#EDF5F4" },
  { numero: "25+", etichetta: "Anni di Ricerca Metabolica", colore: "#B8922E", bg: "#FBF5E8" },
  { numero: "ISO", etichetta: "13485 Certificato", colore: "#4A9090", bg: "#EDF5F4" },
  { numero: "Gold", etichetta: "Standard Calorimetria Indiretta", colore: "#B8922E", bg: "#FBF5E8" },
];

export function TargetPosizionamento() {
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
          Target & Posizionamento — Premium Service
        </span>
      </div>

      {/* Positioning statement */}
      <div
        className="rounded-2xl p-8 mb-6"
        style={{
          background: "linear-gradient(135deg, #FFFFFF 0%, #EDF5F4 60%, #F8F4EC 100%)",
          border: "1px solid #D0E8E4",
          boxShadow: "0 2px 20px rgba(14,107,107,0.06)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "9px",
                color: "#B8922E",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "12px",
                opacity: 0.8,
              }}
            >
              Positioning Statement
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(17px, 2.3vw, 26px)",
                fontWeight: "300",
                color: "#0A1F1F",
                lineHeight: "1.5",
                letterSpacing: "-0.01em",
                marginBottom: "16px",
              }}
            >
              Cosmed Wellness è il{" "}
              <span style={{ color: "#0E6B6B", fontWeight: "700" }}>partner scientifico di fiducia</span>{" "}
              per chi trasforma la cura del benessere in un servizio di{" "}
              <span style={{ color: "#B8922E", fontWeight: "600" }}>eccellenza commerciale</span>.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#5A7A78",
                lineHeight: "1.8",
              }}
            >
              Non vendiamo strumenti. Offriamo la capacità di misurare ciò che altri non possono vedere:
              il metabolismo in azione. Questo diventa il vantaggio competitivo del professionista
              che sceglie Cosmed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {differenziatori.map((d) => (
              <div
                key={d.etichetta}
                className="rounded-xl p-4 flex flex-col items-start"
                style={{
                  background: d.bg,
                  border: `1px solid ${d.colore}25`,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(20px, 2.5vw, 32px)",
                    fontWeight: "900",
                    color: d.colore,
                    letterSpacing: "-0.04em",
                    lineHeight: "1",
                    marginBottom: "6px",
                  }}
                >
                  {d.numero}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    color: "#5A7A78",
                    lineHeight: "1.4",
                  }}
                >
                  {d.etichetta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Target segments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {segmenti.map((s) => (
          <div
            key={s.target}
            className="rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${s.borderAccento}`,
              boxShadow: "0 2px 12px rgba(14,107,107,0.05)",
            }}
          >
            <div
              className="p-6"
              style={{
                background: "#FFFFFF",
                borderBottom: `1px solid ${s.borderAccento}`,
                borderTop: `3px solid ${s.colore}`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                {s.icona}
                <span
                  className="px-2 py-1 rounded"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "7px",
                    color: s.colore,
                    border: `1px solid ${s.colore}30`,
                    background: s.bgAccento,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.sottotitolo}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "#0A1F1F",
                  letterSpacing: "-0.03em",
                  marginBottom: "8px",
                }}
              >
                {s.target}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  color: "#5A7A78",
                  lineHeight: "1.7",
                }}
              >
                {s.descrizione}
              </p>
            </div>

            <div className="p-5" style={{ background: s.bgAccento }}>
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "8px",
                  color: "#A0BABA",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Bisogni Chiave
              </p>
              <ul className="space-y-2 mb-5">
                {s.bisogni.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <div
                      className="rounded-full mt-1.5"
                      style={{ width: "5px", height: "5px", background: s.colore, flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        color: "#3A5A58",
                        lineHeight: "1.5",
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="rounded-lg p-3"
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${s.borderAccento}`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    color: s.colore,
                    lineHeight: "1.65",
                    fontStyle: "italic",
                  }}
                >
                  {s.proposta}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
