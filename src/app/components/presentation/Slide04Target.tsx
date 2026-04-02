import { SlideShell } from "./SlideShell";
import { T } from "./tokens";

const performance = [
  { categoria: "Fisiatri", numero: "~5.000", dettaglio: "Medici specialisti in Medicina Fisica e Riabilitativa", priorità: "Alta", val: 5 },
  { categoria: "Fisioterapisti", numero: "~70.000", dettaglio: "Professionisti riabilitativi in strutture private e pubbliche", priorità: "Alta", val: 70 },
  { categoria: "Medici dello Sport", numero: "~5.000", dettaglio: "Specialisti in medicina sportiva e performance atletica", priorità: "Media", val: 5 },
  { categoria: "Palestre & Centri Fitness", numero: "~40.000", dettaglio: "Strutture fitness premium con servizi di valutazione corporea", priorità: "Media", val: 40 },
  { categoria: "Laboratori di Fisiologia", numero: "~1.500", dettaglio: "Laboratori universitari, ospedalieri e centri di ricerca applicata", priorità: "Alta", val: 1.5 },
];

const wellness = [
  { categoria: "Dietologi", numero: "~6.000", dettaglio: "Professionisti della nutrizione con abilitazione clinica", priorità: "Alta", val: 6 },
  { categoria: "Nutrizionisti", numero: "~15.000", dettaglio: "Biologi nutrizionisti in studi privati e centri specializzati", priorità: "Alta", val: 15 },
  { categoria: "Spa & Centri Benessere", numero: "~4.000", dettaglio: "Strutture wellness premium con protocolli di analisi corporea", priorità: "Alta", val: 4 },
  { categoria: "Centri Estetici Medici", numero: "~8.000", dettaglio: "Cliniche estetiche che integrano servizi metabolici e nutrizionali", priorità: "Media", val: 8 },
  { categoria: "Endocrinologi & Diabetologi", numero: "~4.000", dettaglio: "Specialisti che integrano la misurazione metabolica nei percorsi terapeutici", priorità: "Alta", val: 4 },
];

const maxVal = 70;

function TargetRow({ item, colore }: { item: typeof performance[0]; colore: string }) {
  const barW = Math.max(4, (item.val / maxVal) * 100);
  return (
    <div className="flex items-center gap-3 py-1.5" style={{ borderBottom: `1px solid ${T.border}` }}>
      <div style={{ width: "160px", flexShrink: 0 }}>
        <p style={{ fontFamily: T.sans, fontSize: "11px", fontWeight: 700, color: T.text, lineHeight: "1.2" }}>{item.categoria}</p>
        <p style={{ fontFamily: T.sansAlt, fontSize: "9px", color: T.textMuted, lineHeight: "1.3" }}>{item.dettaglio}</p>
      </div>
      <div className="flex-1 flex items-center gap-2">
        <div style={{ flex: 1, height: "6px", background: T.border, borderRadius: "3px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${barW}%`, background: `linear-gradient(90deg, ${colore}, ${colore}80)`, borderRadius: "3px", transition: "width 0.4s" }} />
        </div>
        <span style={{ fontFamily: T.mono, fontSize: "11px", color: colore, fontWeight: "600", minWidth: "60px", textAlign: "right", letterSpacing: "-0.01em" }}>
          {item.numero}
        </span>
      </div>
      <span style={{
        fontFamily: T.mono, fontSize: "7px", color: colore,
        border: `1px solid ${colore}30`, background: `${colore}08`,
        borderRadius: "3px", padding: "2px 5px", letterSpacing: "0.1em",
        textTransform: "uppercase", flexShrink: 0, minWidth: "40px", textAlign: "center",
      }}>{item.priorità}</span>
    </div>
  );
}

export function Slide04Target() {
  const totP = "~121.500";
  const totW = "~37.000";

  return (
    <SlideShell slideNum={4} slideTitle="Target & Mercato">
      <div className="flex flex-col h-full gap-4">
        {/* Heading */}
        <div className="flex items-baseline gap-4 shrink-0">
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: T.text, letterSpacing: "-0.03em" }}>
            Analisi del Mercato Target
          </h2>
          <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.textMuted, letterSpacing: "0.2em" }}>ITALIA · STIMA PROFESSIONISTI ATTIVI</span>
        </div>

        <div className="flex gap-5 flex-1">
          {/* LEFT: Performance */}
          <div className="flex-1 flex flex-col rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${T.border}`, borderTop: `3px solid ${T.gold}` }}>
            <div className="px-5 py-3" style={{ background: T.surface, borderBottom: `1px solid ${T.border}` }}>
              <div className="flex items-center justify-between">
                <div>
                  <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.2em", textTransform: "uppercase", display: "block" }}>Sub-brand</span>
                  <h3 style={{ fontFamily: T.sans, fontSize: "16px", fontWeight: 800, color: T.text, letterSpacing: "-0.02em" }}>
                    Cosmed <span style={{ color: T.gold }}>Performance</span>
                  </h3>
                </div>
                <div className="text-right">
                  <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.15em", display: "block" }}>TOTALE STIMATO</span>
                  <span style={{ fontFamily: T.sans, fontSize: "22px", fontWeight: 900, color: T.gold, letterSpacing: "-0.03em" }}>{totP}</span>
                </div>
              </div>
              <p style={{ fontFamily: T.sansAlt, fontSize: "10px", color: T.textSub, marginTop: "4px", lineHeight: "1.5" }}>
                Professionisti clinico-riabilitativi e della performance atletica. Priorità su fisiatri, fisioterapisti specializzati e medici dello sport.
              </p>
            </div>
            <div className="px-5 py-3 flex-1" style={{ background: T.surfaceWarm }}>
              <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Segmentazione</span>
              {performance.map(p => <TargetRow key={p.categoria} item={p} colore={T.gold} />)}
            </div>
          </div>

          {/* RIGHT: Wellness */}
          <div className="flex-1 flex flex-col rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${T.border}`, borderTop: `3px solid ${T.slate}` }}>
            <div className="px-5 py-3" style={{ background: T.surface, borderBottom: `1px solid ${T.border}` }}>
              <div className="flex items-center justify-between">
                <div>
                  <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.2em", textTransform: "uppercase", display: "block" }}>Sub-brand</span>
                  <h3 style={{ fontFamily: T.sans, fontSize: "16px", fontWeight: 800, color: T.text, letterSpacing: "-0.02em" }}>
                    Cosmed <span style={{ color: T.slate }}>Wellness</span>
                  </h3>
                </div>
                <div className="text-right">
                  <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.15em", display: "block" }}>TOTALE STIMATO</span>
                  <span style={{ fontFamily: T.sans, fontSize: "22px", fontWeight: 900, color: T.slate, letterSpacing: "-0.03em" }}>{totW}</span>
                </div>
              </div>
              <p style={{ fontFamily: T.sansAlt, fontSize: "10px", color: T.textSub, marginTop: "4px", lineHeight: "1.5" }}>
                Professionisti della nutrizione, centri benessere premium e strutture medico-estetiche. Focus su nutrizionisti, dietologi e spa mediche.
              </p>
            </div>
            <div className="px-5 py-3 flex-1" style={{ background: T.surfaceWarm }}>
              <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Segmentazione</span>
              {wellness.map(w => <TargetRow key={w.categoria} item={w} colore={T.slate} />)}
            </div>
          </div>
        </div>

        {/* Bottom totals */}
        <div className="flex items-center gap-4 shrink-0 rounded-xl px-5 py-3"
          style={{ background: T.surface, border: `1px solid ${T.border}` }}>
          <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.textMuted, letterSpacing: "0.2em", textTransform: "uppercase" }}>Mercato Totale Indirizzabile</span>
          <div style={{ flex: 1, height: "1px", background: T.border }} />
          <div className="flex items-center gap-2">
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: T.gold }} />
            <span style={{ fontFamily: T.sans, fontSize: "13px", fontWeight: 700, color: T.text }}>Performance:</span>
            <span style={{ fontFamily: T.mono, fontSize: "13px", color: T.gold, fontWeight: "600" }}>{totP}</span>
          </div>
          <span style={{ color: T.border, fontSize: "14px" }}>+</span>
          <div className="flex items-center gap-2">
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: T.slate }} />
            <span style={{ fontFamily: T.sans, fontSize: "13px", fontWeight: 700, color: T.text }}>Wellness:</span>
            <span style={{ fontFamily: T.mono, fontSize: "13px", color: T.slate, fontWeight: "600" }}>{totW}</span>
          </div>
          <span style={{ color: T.border, fontSize: "14px" }}>=</span>
          <span style={{ fontFamily: T.sans, fontSize: "15px", fontWeight: 900, color: T.text, letterSpacing: "-0.02em" }}>~158.500</span>
          <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.textMuted, letterSpacing: "0.1em" }}>professionisti in Italia</span>
        </div>
      </div>
    </SlideShell>
  );
}
