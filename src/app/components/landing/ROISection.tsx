import { P } from "./images";

// Budget annuali rimodulati: Standard €10.000 · Plus €15.000 · Gold €20.000
const prospetti = [
  {
    nome: "Standard",
    budgetAnno: "€ 10.000 / anno",
    budgetMese: "€ 833 / mese",
    c: P.accent,
    bg: P.accentDim,
    border: `${P.accent}20`,
    righe: [
      { area: "Performance", canale: "LinkedIn", budget: "€ 540 / mese", leads: "7 – 12", cpl: "€ 45 – 77" },
      { area: "Wellness",    canale: "Meta (FB/IG)", budget: "€ 293 / mese", leads: "12 – 18", cpl: "€ 16 – 24" },
    ],
    totale: { budget: "€ 833 / mese", leads: "19 – 30", cpl: "~ € 28" },
  },
  {
    nome: "Plus",
    budgetAnno: "€ 15.000 / anno",
    budgetMese: "€ 1.250 / mese",
    c: P.accentLight,
    bg: `${P.accentLight}10`,
    border: `${P.accentLight}25`,
    highlight: true,
    righe: [
      { area: "Performance", canale: "LinkedIn", budget: "€ 834 / mese", leads: "18 – 28", cpl: "€ 30 – 46" },
      { area: "Wellness",    canale: "Meta (FB/IG)", budget: "€ 416 / mese", leads: "22 – 36", cpl: "€ 12 – 19" },
    ],
    totale: { budget: "€ 1.250 / mese", leads: "40 – 64", cpl: "~ € 20" },
  },
  {
    nome: "Gold",
    budgetAnno: "€ 20.000 / anno",
    budgetMese: "€ 1.667 / mese",
    c: "#0E6B6B",
    bg: "rgba(14,107,107,0.08)",
    border: "rgba(14,107,107,0.2)",
    righe: [
      { area: "Performance", canale: "LinkedIn", budget: "€ 1.212 / mese", leads: "40 – 65", cpl: "€ 19 – 30" },
      { area: "Wellness",    canale: "Meta (FB/IG)", budget: "€ 455 / mese", leads: "36 – 60", cpl: "€ 8 – 13" },
    ],
    totale: { budget: "€ 1.667 / mese", leads: "76 – 125", cpl: "~ € 13" },
  },
];

const cols = ["Area", "Canale", "Budget Mensile", "Stima Lead / Mese", "CPL Medio (Est.)"];

export function ROISection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-20" style={{ background: P.bg }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div style={{ width: "28px", height: "1px", background: P.accent }} />
          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: P.accent, letterSpacing: "0.28em", textTransform: "uppercase" }}>Proiezioni</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 4vw, 50px)", fontWeight: 900, color: P.text, letterSpacing: "-0.04em", lineHeight: "0.95" }}>
            Prospetti ROI<br />per Pacchetto
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.textSub, lineHeight: "1.75", maxWidth: "380px" }}>
            Stima dei lead generabili mensilmente e del Costo Per Lead (CPL) in base al budget pubblicitario annuo consigliato per ciascun pacchetto. Budget ads non incluso nei pacchetti.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {prospetti.map(pr => (
            <div key={pr.nome} className="rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${pr.border}`, boxShadow: pr.highlight ? "0 6px 32px rgba(30,122,138,0.09)" : "none" }}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-4"
                style={{ background: pr.bg, borderBottom: `1px solid ${pr.border}` }}>
                <div className="flex items-center gap-3">
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: pr.c, flexShrink: 0 }} />
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 800, color: P.text, letterSpacing: "-0.02em" }}>
                    Prospetto <span style={{ color: pr.c }}>«{pr.nome}»</span>
                  </h3>
                  {pr.highlight && (
                    <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "7px", color: pr.c, border: `1px solid ${pr.c}30`, background: `${pr.c}08`, borderRadius: "3px", padding: "2px 7px", letterSpacing: "0.15em", textTransform: "uppercase" }}>✦ Più Scelto</span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "7px", color: P.textMuted, letterSpacing: "0.2em", display: "block" }}>BUDGET ANNUO ADS</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 900, color: pr.c, letterSpacing: "-0.02em" }}>{pr.budgetAnno}</span>
                  </div>
                  <div style={{ width: "1px", height: "28px", background: P.border }} />
                  <div>
                    <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "7px", color: P.textMuted, letterSpacing: "0.2em", display: "block" }}>BUDGET MENSILE ADS</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 700, color: P.text, letterSpacing: "-0.02em" }}>{pr.budgetMese}</span>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full" style={{ borderCollapse: "collapse", background: P.surface }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${P.border}` }}>
                      {cols.map(c => (
                        <th key={c} className="text-left px-5 py-3"
                          style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: P.textMuted, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 400 }}>
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pr.righe.map((r, i) => (
                      <tr key={r.area} style={{ borderBottom: `1px solid ${P.border}`, background: i % 2 === 0 ? P.surface : P.surfaceAlt }}>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2">
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: r.area === "Performance" ? P.perfBlue : P.wellTeal, flexShrink: 0 }} />
                            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, color: P.text }}>{r.area}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5">
                          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "10px", color: P.textSub, letterSpacing: "0.04em" }}>{r.canale}</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600, color: P.text }}>{r.budget}</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: pr.c }}>{r.leads}</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: P.textMuted, marginLeft: "3px" }}>lead</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "11px", color: P.textSub }}>{r.cpl}</span>
                        </td>
                      </tr>
                    ))}
                    {/* Totale row */}
                    <tr style={{ background: pr.bg, borderTop: `2px solid ${pr.border}` }}>
                      <td className="px-5 py-3.5" colSpan={2}>
                        <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: pr.c, letterSpacing: "0.2em", textTransform: "uppercase" }}>TOTALE</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: pr.c }}>{pr.totale.budget}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 900, color: pr.c }}>{pr.totale.leads}</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: P.textSub, marginLeft: "3px" }}>lead/mese</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: pr.c }}>{pr.totale.cpl}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: P.textMuted, marginTop: "16px", lineHeight: "1.6" }}>
          * Le stime sono orientative e basate su benchmark di settore B2B (LinkedIn) e B2C/B2B2C (Meta). Il CPL effettivo dipende dalla qualità del contenuto, dall'ottimizzazione continua delle campagne e dalla stagionalità. Il budget ads è aggiuntivo rispetto al canone di gestione.
        </p>
      </div>
    </section>
  );
}
