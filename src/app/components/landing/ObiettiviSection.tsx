import { P } from "./images";

const obiettivi = [
  { n: "01", t: "Comunicare il valore del marchio nelle due aree specifiche", c: P.accent },
  { n: "02", t: "Instaurare fiducia", c: P.accentLight },
  { n: "03", t: 'Consolidare il posizionamento "top-of-mind"', c: P.accent },
  { n: "04", t: "Raccogliere contatti qualificati tramite form", c: P.accentLight },
  { n: "05", t: "Implementare strumenti di vendita diretti per ridurre l'intermediazione e il peso provvigionale dei rivenditori", c: P.accent },
];

export function ObiettiviSection() {
  return (
    <section id="proposta" className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-20" style={{ background: P.bg }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div style={{ width: "28px", height: "1px", background: P.accent }} />
          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: P.accent, letterSpacing: "0.28em", textTransform: "uppercase" }}>La Proposta</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 54px)", fontWeight: 900, color: P.text, letterSpacing: "-0.04em", lineHeight: "0.95" }}>
            Obiettivi<br />Strategici
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textSub, lineHeight: "1.75", maxWidth: "420px" }}>
            Cinque punti fondamentali che guidano l'architettura di comunicazione, posizionamento e crescita commerciale di Cosmed per il 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {obiettivi.map((o) => (
            <div key={o.n} className="flex flex-col gap-4 rounded-2xl p-6"
              style={{ background: P.surface, border: `1px solid ${P.border}`, borderTop: `3px solid ${o.c}` }}>
              <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "12px", color: o.c, letterSpacing: "0.14em" }}>{o.n}</span>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: P.text, letterSpacing: "-0.01em", lineHeight: "1.4" }}>
                {o.t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}