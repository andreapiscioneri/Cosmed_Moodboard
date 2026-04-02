import { SlideShell } from "./SlideShell";
import { T } from "./tokens";

const steps = [
  {
    num: "01", fase: "Analisi di Mercato", periodo: "M1–M2",
    s: 0, e: 2,
    attività: [
      "Audit brand Cosmed attuale (asset, messaggi, posizionamento)",
      "Benchmark competitivo (3–5 competitor diretti per area)",
      "Keyword research SEO/GEO — mappa semantica per Performance e Wellness",
      "Analisi canali social e presenze digitali esistenti",
      "Report di audit consegnato con raccomandazioni prioritarie",
    ],
    colore: T.gold,
  },
  {
    num: "02", fase: "Target Persona", periodo: "M1–M2",
    s: 0, e: 2,
    attività: [
      "Definizione di 3–4 buyer persona per ciascun sub-brand",
      "Mappatura dei pain points clinici e commerciali",
      "Customer journey map per ogni persona (da awareness a loyalty)",
      "Interviste qualitative (se disponibili referenti interni Cosmed)",
    ],
    colore: T.goldLight,
  },
  {
    num: "03", fase: "Brand Identity", periodo: "M2–M4",
    s: 1, e: 4,
    attività: [
      "Logotipo Cosmed Performance + Cosmed Wellness (varianti complete)",
      "Brand guidelines 40+ pagine: palette, tipografia, regole d'uso",
      "Tone of Voice documento — italiano e inglese",
      "Iconografia tecnica personalizzata per entrambi i sub-brand",
      "Template presentazioni, brochure, materiali di vendita",
    ],
    colore: T.slate,
  },
  {
    num: "04", fase: "Siti Web (max 7 pagine)", periodo: "M3–M5",
    s: 2, e: 5,
    attività: [
      "Struttura: Home · Chi siamo · Prodotti/Servizi · Blog · Contatti",
      "UI/UX design su Odoo Nativo — responsive mobile-first",
      "Integrazione CRM Odoo per form, lead capture, preventivi",
      "SEO on-page: meta, struttura URL, schema markup",
      "Testing performance (Core Web Vitals) + GDPR compliance",
    ],
    colore: T.slateLight,
  },
  {
    num: "05", fase: "SEO / GEO", periodo: "M4–M12",
    s: 3, e: 12,
    attività: [
      "Content plan editoriale mensile (articoli tecnico-scientifici)",
      "Ottimizzazione SEO on-page e off-page continuativa",
      "Geo-targeting: Italia (priorità), EU (fase 2), MENA (fase 3)",
      "Link building con portali di settore fisioterapia e nutrizione",
      "Monitoraggio ranking mensile con report KPI",
    ],
    colore: T.gold,
  },
  {
    num: "06", fase: "Social Media (1 post/video a settimana)", periodo: "M5–M12",
    s: 4, e: 12,
    attività: [
      "1 post/video settimanale su LinkedIn (B2B professional)",
      "1 contenuto settimanale su Instagram (@CosmedPerformance + @CosmedWellness)",
      "Gestione community: risposta commenti, DM professionali",
      "Campagne LinkedIn Ads + Meta Ads (incluse nei piani Plus e Gold)",
      "Reels e video-pillole scientifiche — formato short-form educational",
    ],
    colore: T.slate,
  },
  {
    num: "07", fase: "Sponsorizzazioni", periodo: "M6–M12",
    s: 5, e: 12,
    attività: [
      "Sponsorizzazione congressi fisiatria/fisioterapia (SIMFER, AIFI)",
      "Fiere settore wellness e nutrizione (Sana, Cosmoprof, NutriMI)",
      "Partnership con KOL scientifici (Key Opinion Leaders)",
      "Webinar certificati ECM — 2 eventi/semestre",
      "Materiali espositivi: roll-up, totem, cataloghi digitali QR",
    ],
    colore: T.goldDark,
  },
];

const MONTHS = 12;

export function Slide06StepOperativi() {
  return (
    <SlideShell slideNum={6} slideTitle="Step Operativi">
      <div className="flex flex-col h-full gap-3">
        {/* Heading */}
        <div className="flex items-center justify-between shrink-0">
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: T.text, letterSpacing: "-0.03em" }}>
            Roadmap Operativa — 12 Mesi
          </h2>
          {/* Month labels */}
          <div className="flex gap-0" style={{ marginRight: "8px" }}>
            {Array.from({ length: MONTHS }, (_, i) => (
              <div key={i} style={{ width: "36px", textAlign: "center" }}>
                <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.06em" }}>M{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline rows */}
        <div className="flex flex-col gap-2 flex-1 justify-center">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-4">
              {/* Label */}
              <div style={{ width: "220px", flexShrink: 0 }}>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontFamily: T.mono, fontSize: "9px", color: step.colore, letterSpacing: "0.15em", minWidth: "22px" }}>{step.num}</span>
                  <span style={{ fontFamily: T.sans, fontSize: "11px", fontWeight: 700, color: T.text, lineHeight: "1.2" }}>{step.fase}</span>
                </div>
                <span style={{ fontFamily: T.mono, fontSize: "8px", color: step.colore, letterSpacing: "0.1em", paddingLeft: "30px" }}>{step.periodo}</span>
              </div>

              {/* Gantt + activities */}
              <div className="flex flex-col gap-1 flex-1">
                {/* Bar */}
                <div className="relative h-7" style={{ background: T.surfaceWarm, borderRadius: "6px", border: `1px solid ${T.border}` }}>
                  <div
                    className="absolute top-1 bottom-1 rounded flex items-center px-2"
                    style={{
                      left: `${(step.s / MONTHS) * 100}%`,
                      width: `${((step.e - step.s) / MONTHS) * 100}%`,
                      background: `linear-gradient(90deg, ${step.colore}22, ${step.colore}10)`,
                      border: `1px solid ${step.colore}35`,
                    }}
                  >
                    <span style={{ fontFamily: T.mono, fontSize: "7px", color: step.colore, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
                      {step.periodo}
                    </span>
                  </div>
                  {/* Month grid lines */}
                  {Array.from({ length: MONTHS - 1 }, (_, i) => (
                    <div key={i} className="absolute top-0 bottom-0" style={{ left: `${((i + 1) / MONTHS) * 100}%`, width: "1px", background: T.border }} />
                  ))}
                </div>

                {/* Activities as inline tags */}
                <div className="flex flex-wrap gap-1">
                  {step.attività.map(a => (
                    <span key={a} className="px-2 py-0.5 rounded"
                      style={{ fontFamily: T.mono, fontSize: "7px", color: T.textSub, border: `1px solid ${T.border}`, background: T.surface, letterSpacing: "0.03em", lineHeight: "1.4" }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
