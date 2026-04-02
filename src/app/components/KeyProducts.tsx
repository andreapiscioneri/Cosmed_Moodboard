const prodotti = [
  {
    id: "Q-NRG",
    nome: "Q-NRG+",
    categoria: "Calorimetro Indiretto",
    tagline: "La misura del metabolismo a riposo",
    descrizione:
      "Calorimetro indiretto di precisione per la misurazione del Dispendio Energetico a Riposo (REE). Validazione clinica gold standard in ambienti di terapia intensiva, riabilitazione e performance sportiva.",
    specifiche: [
      { chiave: "Tecnologia", valore: "Calorimetria Indiretta" },
      { chiave: "Parametri", valore: "VO₂, VCO₂, REE, QR" },
      { chiave: "Flusso", valore: "0 – 60 L/min" },
      { chiave: "Accuratezza", valore: "±1% O₂ / ±1% CO₂" },
      { chiave: "Certificazione", valore: "ISO 13485 · Marchio CE" },
      { chiave: "Software", valore: "Metabolsoft 3.0" },
    ],
    badge: "FLAGSHIP",
    coloreAccento: "#0B6FFF",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="6" y="12" width="32" height="22" rx="3" stroke="#0B6FFF" strokeWidth="1.5" fill="none" />
        <path d="M12 26 L16 18 L20 23 L24 15 L28 21 L32 17" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="26" r="2" fill="#0B6FFF" />
        <circle cx="32" cy="17" r="2" fill="#00D4FF" />
        <rect x="18" y="34" width="8" height="2" rx="1" fill="#0B6FFF" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "CPET",
    nome: "Quark CPET",
    categoria: "Test da Sforzo Cardiopolmonare",
    tagline: "Analisi breath-by-breath di precisione",
    descrizione:
      "Sistema CPET completo per il test da sforzo cardiorespiratoro. Analisi dei gas respiro per respiro con integrazione ECG a 12 derivazioni per la profilazione cardiovascolare e metabolica completa.",
    specifiche: [
      { chiave: "Tecnologia", valore: "Respiro per Respiro" },
      { chiave: "Analisi Gas", valore: "Zirconia O₂ / IR CO₂" },
      { chiave: "Cardiaco", valore: "ECG 12 derivazioni" },
      { chiave: "Protocolli", valore: "Bruce, Ramp, Custom" },
      { chiave: "Software", valore: "OMNIA Analytics Suite" },
      { chiave: "Standard", valore: "Linee Guida ATS/ERS" },
    ],
    badge: "CLINICO",
    coloreAccento: "#00D4FF",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" stroke="#00D4FF" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
        <circle cx="22" cy="22" r="8" stroke="#00D4FF" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M9 22 L14 22 L16 16 L18 28 L20 18 L22 24 L24 20 L28 22 L35 22" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="22" r="2.5" fill="#00D4FF" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "ECG",
    nome: "Cosmed ECG Pro",
    categoria: "Sistema Elettrocardiografico",
    tagline: "Cardiologia clinica a 12 derivazioni",
    descrizione:
      "Sistema ECG professionale a 12 derivazioni con rilevamento avanzato delle aritmie e analisi HRV. Si integra perfettamente con i protocolli CPET e di test metabolico per una valutazione cardiovascolare completa.",
    specifiche: [
      { chiave: "Derivazioni", valore: "Standard 12 Deriv." },
      { chiave: "Campionamento", valore: "8000 Hz per canale" },
      { chiave: "Risoluzione", valore: "ADC 24-bit" },
      { chiave: "Analisi", valore: "HRV · ST · Aritmia" },
      { chiave: "Connettività", valore: "BT 5.0 / Wi-Fi 6" },
      { chiave: "Standard", valore: "IEC 60601 · FDA 510k" },
    ],
    badge: "INTEGRATO",
    coloreAccento: "#FF3366",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="8" y="14" width="28" height="18" rx="2" stroke="#FF3366" strokeWidth="1.5" fill="none" />
        <path d="M12 23 L16 23 L18 17 L20 29 L22 21 L24 25 L26 23 L32 23" stroke="#FF3366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="23" r="1.5" fill="#FF3366" />
        <circle cx="32" cy="23" r="1.5" fill="#FF3366" />
        <line x1="22" y1="32" x2="22" y2="36" stroke="#FF3366" strokeWidth="1" opacity="0.4" />
        <line x1="16" y1="36" x2="28" y2="36" stroke="#FF3366" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
];

export function KeyProducts() {
  return (
    <div className="px-10 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {prodotti.map((p) => (
          <div
            key={p.id}
            className="rounded-md overflow-hidden relative"
            style={{
              background: "#0A1520",
              border: `1px solid ${p.coloreAccento}20`,
            }}
          >
            {/* Top accent */}
            <div
              style={{
                height: "3px",
                background: `linear-gradient(90deg, ${p.coloreAccento}, transparent)`,
              }}
            />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>{p.icon}</div>
                <div
                  className="px-2 py-1 rounded"
                  style={{
                    background: `${p.coloreAccento}12`,
                    border: `1px solid ${p.coloreAccento}25`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "8px",
                      color: p.coloreAccento,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "8px",
                  color: p.coloreAccento,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                {p.categoria}
              </p>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "26px",
                  fontWeight: "900",
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  lineHeight: "1",
                  marginBottom: "4px",
                }}
              >
                {p.nome}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  color: "#4A7CAF",
                  marginBottom: "12px",
                }}
              >
                {p.tagline}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: "#2A4060",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                {p.descrizione}
              </p>

              {/* Specifiche */}
              <div
                className="rounded p-3"
                style={{ background: "#0D1A2E", border: "1px solid #1A2535" }}
              >
                <div className="space-y-2">
                  {p.specifiche.map((s) => (
                    <div
                      key={s.chiave}
                      className="flex items-center justify-between"
                      style={{ borderBottom: "1px solid #0D1520", paddingBottom: "5px" }}
                    >
                      <span
                        style={{
                          fontFamily: "'Roboto Mono', monospace",
                          fontSize: "8px",
                          color: "#1E3A5A",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {s.chiave}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Roboto Mono', monospace",
                          fontSize: "9px",
                          color: "#8AAFCC",
                        }}
                      >
                        {s.valore}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
