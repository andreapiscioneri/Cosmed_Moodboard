import { SlideShell } from "./SlideShell";
import { T } from "./tokens";

const sezioni = [
  { num: "01", titolo: "Introduzione & Obiettivi", desc: "Comunicare valore, fiducia, top-of-mind, lead generation, riduzione intermediazione" },
  { num: "02", titolo: "Target & Mercato", desc: "Numeri di mercato per Cosmed Performance e Cosmed Wellness" },
  { num: "03", titolo: "Strategia Brand & Web", desc: "Brand identity duale, confronto Odoo Nativo vs WordPress" },
  { num: "04", titolo: "Step Operativi", desc: "Analisi, Brand Identity, Web, SEO/GEO, Social, Sponsorizzazioni — timeline 12 mesi" },
  { num: "05", titolo: "Pacchetto Standard", desc: "Una Tantum €22.750 + Canone Mensile €2.354 — dettaglio completo" },
  { num: "06", titolo: "Pacchetto Plus", desc: "Una Tantum €34.000 + Canone Mensile €4.250 — dettaglio completo" },
  { num: "07", titolo: "Pacchetto Gold — Leader", desc: "Una Tantum €36.000 + Canone Mensile €7.000 — dominio totale del mercato" },
  { num: "08", titolo: "Concept & Moodboard Visiva", desc: "Visual direction, linguaggio del brand, immagini concettuali" },
  { num: "09", titolo: "Conclusioni & Chiusura", desc: "Sintesi strategica, ROI, prossimi passi, call to action" },
  { num: "10", titolo: "Contatti & Partnership", desc: "DeNani per COSMED — riferimenti e next steps operativi" },
];

export function Slide02Sommario() {
  return (
    <SlideShell slideNum={2} slideTitle="Sommario">
      <div className="flex flex-col h-full">
        {/* Heading */}
        <div className="flex items-baseline gap-4 mb-5">
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, color: T.text, letterSpacing: "-0.03em", lineHeight: 1 }}>
            Indice della Proposta
          </h2>
          <span style={{ fontFamily: T.mono, fontSize: "10px", color: T.textMuted, letterSpacing: "0.2em" }}>10 SEZIONI</span>
        </div>

        {/* List */}
        <div className="flex flex-col gap-1.5 flex-1 justify-center">
          {sezioni.map((s, i) => (
            <div
              key={s.num}
              className="flex items-center gap-5 rounded-xl px-4 py-3"
              style={{
                background: i % 2 === 0 ? T.surface : T.surfaceWarm,
                border: `1px solid ${T.border}`,
                transition: "all 0.2s",
              }}
            >
              {/* Number */}
              <span style={{ fontFamily: T.mono, fontSize: "11px", color: T.gold, letterSpacing: "0.12em", minWidth: "26px", flexShrink: 0 }}>
                {s.num}
              </span>

              {/* Dot */}
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: T.goldLight, flexShrink: 0 }} />

              {/* Title */}
              <span style={{ fontFamily: T.sans, fontSize: "13px", fontWeight: 700, color: T.text, minWidth: "280px", letterSpacing: "-0.01em" }}>
                {s.titolo}
              </span>

              {/* Separator */}
              <div style={{ flex: 1, height: "1px", background: T.border, minWidth: "16px" }} />

              {/* Description */}
              <span style={{ fontFamily: T.sansAlt, fontSize: "10px", color: T.textSub, lineHeight: "1.4", textAlign: "right", maxWidth: "340px" }}>
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
