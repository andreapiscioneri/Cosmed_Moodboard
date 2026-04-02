const profilo = [
  { etichetta: "Ruolo", valore: "Fisiatra / Fisioterapista / Scienziato dello Sport" },
  { etichetta: "Ambiente", valore: "Ospedale · Centro Riabilitativo · Istituto Sportivo" },
  { etichetta: "Competenza", valore: "Fisiologia dell'Esercizio · Medicina Cardiorespiratoria" },
  { etichetta: "Driver Decisionale", valore: "Dati Clinici e Ricerca Peer-Reviewed" },
  { etichetta: "Pain Point", valore: "Strumenti di misura non validati o imprecisi" },
  { etichetta: "Obiettivo", valore: "Profilazione metabolica per outcome ottimali" },
];

const esigenze = [
  { icona: "◈", etichetta: "Validazione Clinica", dettaglio: "Accuratezza certificata ISO e peer-reviewed" },
  { icona: "◉", etichetta: "Integrazione Dati", dettaglio: "Export EMR-compatibile e connettività API" },
  { icona: "◈", etichetta: "Flessibilità Protocollo", dettaglio: "Design test ramp, step e sul campo" },
  { icona: "◉", etichetta: "Analytics in Tempo Reale", dettaglio: "Insights metabolici respiro per respiro" },
];

export function TargetPersona() {
  return (
    <div className="px-10 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Immagine concettuale */}
        <div
          className="rounded-md overflow-hidden relative"
          style={{ border: "1px solid #1A2535", minHeight: "360px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1552550981-4527676e5f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwYnJlYXRoaW5nJTIwb3h5Z2VuJTIwbWFzayUyMGVmZm9ydCUyMHBlcmZvcm1hbmNlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzUxMjI4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="La Persona Target"
            className="w-full h-full object-cover"
            style={{ minHeight: "360px", filter: "brightness(0.7) saturate(0.85)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(11,111,255,0.08) 0%, rgba(4,8,15,0.85) 100%)",
            }}
          />
          <div className="absolute top-0 left-0 right-0" style={{ height: "3px", background: "#0B6FFF" }} />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "8px",
                color: "#0B6FFF",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Persona Target
            </p>
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "30px",
                fontWeight: "900",
                color: "#FFFFFF",
                lineHeight: "0.95",
                letterSpacing: "-0.03em",
                marginBottom: "4px",
              }}
            >
              Lo Specialista
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                color: "#4A7CAF",
              }}
            >
              Basato sull'evidenza. Orientato alla precisione. Focalizzato sui risultati.
            </p>
          </div>
        </div>

        {/* Profilo professionale */}
        <div
          className="rounded-md p-6"
          style={{ background: "#0A1520", border: "1px solid #1A2535" }}
        >
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "9px",
              color: "#0B6FFF",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Profilo Professionale
          </p>
          <div className="space-y-3">
            {profilo.map((item) => (
              <div
                key={item.etichetta}
                className="rounded p-3"
                style={{ background: "#0D1A2E", border: "1px solid #1A2535" }}
              >
                <p
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "8px",
                    color: "#1E3A5A",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "3px",
                  }}
                >
                  {item.etichetta}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: "#C8D8E8",
                    lineHeight: "1.4",
                  }}
                >
                  {item.valore}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Esigenze cliniche */}
        <div
          className="rounded-md p-6"
          style={{ background: "#0A1520", border: "1px solid #1A2535" }}
        >
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "9px",
              color: "#0B6FFF",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Requisiti Clinici
          </p>
          <div className="space-y-3 mb-6">
            {esigenze.map((e) => (
              <div
                key={e.etichetta}
                className="flex items-start gap-3 rounded p-3"
                style={{ background: "#0D1A2E", border: "1px solid #1A2535" }}
              >
                <span style={{ color: "#0B6FFF", fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>
                  {e.icona}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#FFFFFF",
                      marginBottom: "2px",
                    }}
                  >
                    {e.etichetta}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      color: "#2A4060",
                      lineHeight: "1.4",
                    }}
                  >
                    {e.dettaglio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Citazione */}
          <div
            className="rounded p-4"
            style={{
              background: "rgba(11,111,255,0.05)",
              border: "1px solid rgba(11,111,255,0.15)",
              borderLeft: "3px solid #0B6FFF",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                color: "#4A7CAF",
                lineHeight: "1.7",
                fontStyle: "italic",
              }}
            >
              "Ho bisogno di strumenti che forniscano dati clinicamente validati su cui posso
              fare affidamento per prendere decisioni basate sull'evidenza per i miei pazienti."
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "8px",
                color: "#1E3A5A",
                marginTop: "8px",
                letterSpacing: "0.1em",
              }}
            >
              — DOTT. PERSONA / FISIATRA DELLO SPORT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
