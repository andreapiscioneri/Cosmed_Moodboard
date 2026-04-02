import { SlideShell } from "./SlideShell";
import { T } from "./tokens";

const obiettivi = [
  {
    num: "01",
    titolo: "Comunicare il Valore nelle Due Aree",
    testo: "Far comprendere ai professionisti del settore i vantaggi clinici, scientifici e commerciali dei dispositivi e dei servizi Cosmed, differenziando il messaggio tra l'area Performance (rigore tecnico, validazione clinica) e l'area Wellness (eccellenza commerciale, equilibrio vitale e risultati misurabili).",
    tag: "Comunicazione",
    accento: T.gold,
    bg: "rgba(196,169,125,0.05)",
    border: "rgba(196,169,125,0.2)",
  },
  {
    num: "02",
    titolo: "Instaurare Fiducia nel Brand",
    testo: "Costruire e consolidare l'autorevolezza scientifica di Cosmed attraverso la produzione di contenuti tecnici validati, case studies clinici, whitepapers, webinar certificati ECM e la presenza nei principali congressi di settore. La fiducia è il primo touchpoint per ogni decisione d'acquisto B2B.",
    tag: "Autorevolezza",
    accento: T.slate,
    bg: "rgba(107,124,147,0.05)",
    border: "rgba(107,124,147,0.2)",
  },
  {
    num: "03",
    titolo: "Posizionamento Top-of-Mind",
    testo: "Far sì che Cosmed sia la prima scelta evocata quando un professionista — fisioterapista, fisiatria, nutrizionista o responsabile di centro wellness — pensa alla misurazione e alla valutazione metabolica. Obiettivo: occupare stabilmente le prime posizioni SEO per le keyword di settore e diventare la referenza editoriale del mercato italiano.",
    tag: "Brand Positioning",
    accento: T.gold,
    bg: "rgba(196,169,125,0.05)",
    border: "rgba(196,169,125,0.2)",
  },
  {
    num: "04",
    titolo: "Raccolta di Lead Qualificati",
    testo: "Generare una pipeline di contatti ad alto potenziale commerciale attraverso un sistema integrato di acquisizione: SEO/GEO organico, campagne LinkedIn Ads e Meta Ads, landing page ottimizzate, form di contatto, webinar e download di materiali tecnici. Ogni lead viene tracciato nel CRM Odoo con scoring automatico per priorità di follow-up.",
    tag: "Lead Generation",
    accento: T.slate,
    bg: "rgba(107,124,147,0.05)",
    border: "rgba(107,124,147,0.2)",
  },
  {
    num: "05",
    titolo: "Riduzione Intermediazione & Oneri Rivenditori",
    testo: "Rafforzare la capacità di Cosmed di vendere direttamente al cliente finale — cliniche, studi professionali, centri wellness — riducendo la dipendenza dalla rete di rivenditori e distributori terzi. Un brand forte, un sito ad alta conversione e un CRM efficiente permettono di abbassare il Costo Per Lead (CPL) e aumentare il margine per ogni contratto acquisito.",
    tag: "Direct Sales",
    accento: T.gold,
    bg: "rgba(196,169,125,0.05)",
    border: "rgba(196,169,125,0.2)",
  },
];

export function Slide03Obiettivi() {
  return (
    <SlideShell slideNum={3} slideTitle="Introduzione & Obiettivi">
      <div className="flex flex-col h-full gap-4">
        {/* Heading */}
        <div className="flex items-baseline gap-4 shrink-0">
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: T.text, letterSpacing: "-0.03em", lineHeight: 1 }}>
            Obiettivi Strategici della Proposta
          </h2>
          <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.textMuted, letterSpacing: "0.2em" }}>5 OBIETTIVI CHIAVE</span>
        </div>

        {/* Objectives */}
        <div className="flex flex-col gap-2 flex-1 justify-center">
          {obiettivi.map((o) => (
            <div
              key={o.num}
              className="rounded-xl px-5 py-3.5 flex gap-4 items-start"
              style={{ background: o.bg, border: `1px solid ${o.border}`, borderLeft: `3px solid ${o.accento}` }}
            >
              {/* Number + tag */}
              <div className="flex flex-col items-start gap-1 shrink-0" style={{ minWidth: "80px" }}>
                <span style={{ fontFamily: T.mono, fontSize: "11px", color: o.accento, letterSpacing: "0.15em" }}>{o.num}</span>
                <span style={{
                  fontFamily: T.mono, fontSize: "7px", color: o.accento,
                  border: `1px solid ${o.accento}30`, background: `${o.accento}08`,
                  borderRadius: "3px", padding: "2px 6px", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap",
                }}>{o.tag}</span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 flex-1">
                <h4 style={{ fontFamily: T.sans, fontSize: "13px", fontWeight: 700, color: T.text, letterSpacing: "-0.01em", lineHeight: "1.2" }}>
                  {o.titolo}
                </h4>
                <p style={{ fontFamily: T.sansAlt, fontSize: "10.5px", color: T.textSub, lineHeight: "1.65" }}>
                  {o.testo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
