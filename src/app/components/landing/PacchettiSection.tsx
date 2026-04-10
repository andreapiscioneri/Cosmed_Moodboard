import { P } from "./images";

const piani = [
  {
    nome: "Standard",
    focus: "Entry",
    unatantum: "€ 22.750",
    canone: "€ 2.354",
    canoneRaw: "/ mese",
    totale: "€ 51.008",
    totaleMesi: "12 mesi",
    c: P.accent,
    highlight: false,
    golden: false,
    unatantumInclusi: [
      "Analisi di mercato",
      "Brand Identity",
      "Materiale Media – Sito Web",
      "Brochure *",
      "Sito Web 1 – Area Performance",
      "Sito Web 2 – Area Well-being",
      "SEO/GEO – Area Performance",
      "SEO/GEO – Area Well-being",
    ],
    canoneInclusi: [
      "Materiale Social Media",
      "Gestione profilo Social – Area Performance (2 pubbl./mese)",
      "Gestione profilo Social – Area Well-being (2 pubbl./mese)",
      "Sponsorizzazioni LinkedIn – Area Performance",
      "Sponsorizzazioni Meta – Area Well-being",
    ],
  },
  {
    nome: "Plus",
    focus: "Growth",
    unatantum: "€ 34.000",
    canone: "€ 4.250",
    canoneRaw: "/ mese",
    totale: "€ 85.000",
    totaleMesi: "12 mesi",
    c: P.accentLight,
    highlight: true,
    golden: false,
    unatantumInclusi: [
      "Analisi di mercato",
      "Brand Identity",
      "Materiale Media – Sito Web",
      "Brochure *",
      "Sito Web 1 – Area Performance",
      "Sito Web 2 – Area Well-being",
      "SEO/GEO – Area Performance",
      "SEO/GEO – Area Well-being",
    ],
    canoneInclusi: [
      "Materiale Social Media",
      "Gestione profilo Social – Area Performance (4 pubbl./mese)",
      "Gestione profilo Social – Area Well-being (4 pubbl./mese)",
      "Sponsorizzazioni LinkedIn – Area Performance",
      "Sponsorizzazioni Meta – Area Well-being",
    ],
  },
  {
    nome: "Gold",
    focus: "Leader",
    unatantum: "€ 36.000",
    canone: "€ 7.000",
    canoneRaw: "/ mese",
    totale: "€ 120.000",
    totaleMesi: "12 mesi",
    c: "#0E6B6B",
    highlight: false,
    golden: true,
    unatantumInclusi: [
      "Analisi di mercato",
      "Brand Identity",
      "Materiale Media – Sito Web",
      "Brochure *",
      "Sito Web 1 – Area Performance",
      "Sito Web 2 – Area Well-being",
      "SEO/GEO – Area Performance",
      "SEO/GEO – Area Well-being",
    ],
    canoneInclusi: [
      "Materiale Social Media",
      "Gestione profilo Social – Area Performance (8 pubbl./mese)",
      "Gestione profilo Social – Area Well-being (8 pubbl./mese)",
      "Sponsorizzazioni LinkedIn – Area Performance",
      "Sponsorizzazioni Meta – Area Well-being",
    ],
  },
];

const note = [
  "Analisi di mercato e Brand Identity hanno costi invariati indifferentemente dal pacchetto di acquisto.",
  "SEO/GEO hanno costi diversi in funzione della complessità del sito, ma non proporzionali con il volume del progetto.",
  "La Brochure dovrà essere completata con un pacchetto ore a parte al fine di ottenere una definizione pertinente con le aspettative del cliente.",
  "Le rimanenti voci risultano proporzionali con il volume orario associato al pacchetto acquistato.",
  "Il budget delle sponsorizzazioni non è incluso nei pacchetti ed è consigliato a parte.",
];

const noteLeft = note.slice(0, 3);
const noteRight = note.slice(3);

export function PacchettiSection() {
  return (
    <section id="pacchetti" className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-20" style={{ background: P.surface }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div style={{ width: "28px", height: "1px", background: P.accent }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>Investimento</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 4vw, 50px)", fontWeight: 900, color: P.text, letterSpacing: "-0.04em", lineHeight: "0.95" }}>
            Piani<br />d'Investimento
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textSub, lineHeight: "1.75", maxWidth: "420px" }}>
            3 pacchetti modulati per soddisfare al meglio le vostre esigenze.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {piani.map(pp => (
            <div key={pp.nome}
              className="flex flex-col rounded-3xl overflow-hidden"
              style={{
                border: `1px solid ${pp.golden ? `${pp.c}30` : P.border}`,
                borderTop: `4px solid ${pp.c}`,
                background: pp.golden ? P.dark : P.surface,
                boxShadow: pp.highlight ? "0 8px 40px rgba(30,122,138,0.12)" : "none",
                transform: "scale(1)",
              }}>

              {pp.highlight && (
                <div className="text-center py-1.5" style={{ background: `${pp.c}15`, borderBottom: `1px solid ${pp.c}20` }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", color: pp.c, letterSpacing: "0.2em", textTransform: "uppercase" }}>✦ Più Scelto</span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1 gap-5">
                {/* Header */}
                <div>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 700, color: pp.golden ? "#2BB6B3" : pp.c, border: `1px solid ${pp.golden ? "rgba(43,182,179,0.65)" : `${pp.c}45`}`, background: pp.golden ? "rgba(43,182,179,0.16)" : `${pp.c}14`, borderRadius: "3px", padding: "2px 7px", letterSpacing: "0.13em", textTransform: "uppercase" }}>{pp.focus}</span>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 900, color: pp.golden ? P.textInv : P.text, letterSpacing: "-0.04em", lineHeight: "1", marginTop: "6px" }}>
                    Pacchetto {pp.nome}
                  </h3>
                </div>

                {/* Una Tantum block */}
                <div className="rounded-2xl p-4" style={{ background: pp.golden ? "rgba(255,255,255,0.04)" : P.surfaceAlt, border: `1px solid ${pp.golden ? "rgba(255,255,255,0.06)" : P.border}` }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", color: pp.c, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>UNA TANTUM</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 900, color: pp.c, letterSpacing: "-0.04em", marginBottom: "10px" }}>{pp.unatantum}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", color: pp.golden ? `${P.textInv}58` : P.textMuted, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "6px" }}>Include</p>
                  <div className="flex flex-col gap-1.5">
                    {pp.unatantumInclusi.map(v => (
                      <div key={v} className="flex items-start gap-2">
                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: pp.c, flexShrink: 0, marginTop: "5px", opacity: 0.7 }} />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10.5px", color: pp.golden ? `${P.textInv}78` : P.textSub, lineHeight: "1.45" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Canone block */}
                <div className="rounded-2xl p-4" style={{ background: pp.golden ? "rgba(255,255,255,0.03)" : P.bg, border: `1px solid ${pp.golden ? "rgba(255,255,255,0.05)" : P.border}` }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", color: pp.c, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>CANONE MENSILE</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(18px, 2.2vw, 24px)", fontWeight: 700, color: pp.golden ? P.textInv : P.text, letterSpacing: "-0.03em" }}>{pp.canone}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: pp.golden ? `${P.textInv}70` : P.textMuted }}>{pp.canoneRaw}</span>
                  </div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", color: pp.golden ? `${P.textInv}58` : P.textMuted, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "6px" }}>Include</p>
                  <div className="flex flex-col gap-1.5">
                    {pp.canoneInclusi.map(v => (
                      <div key={v} className="flex items-start gap-2">
                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: pp.c, flexShrink: 0, marginTop: "5px", opacity: 0.65 }} />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10.5px", color: pp.golden ? `${P.textInv}76` : P.textSub, lineHeight: "1.45" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totale */}
                <div className="flex items-center justify-between mt-auto pt-1" style={{ borderTop: `1px solid ${pp.golden ? "rgba(255,255,255,0.06)" : P.border}` }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: pp.golden ? `${P.textInv}88` : "#5F7788", letterSpacing: "0.12em" }}>Totale {pp.totaleMesi}</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 900, color: pp.c, letterSpacing: "-0.02em" }}>{pp.totale}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="rounded-2xl p-6 md:p-8" style={{ background: P.bg, border: `1px solid ${P.border}` }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px" }}>Note</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-3">
              {noteLeft.map((n, i) => (
                <div key={`left-${i}`} className="flex items-start gap-3">
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#2D9BB3", letterSpacing: "0.08em", flexShrink: 0, marginTop: "1px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11.5px", color: "#4A6677", lineHeight: "1.68" }}>{n}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {noteRight.map((n, i) => (
                <div key={`right-${i}`} className="flex items-start gap-3">
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#2D9BB3", letterSpacing: "0.08em", flexShrink: 0, marginTop: "1px" }}>
                    {String(i + 4).padStart(2, "0")}
                  </span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11.5px", color: "#4A6677", lineHeight: "1.68" }}>{n}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
