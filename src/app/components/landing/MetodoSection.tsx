import { P } from "./images";
import imageUno from "../../../assets/1.png";
import imageDue from "../../../assets/2.jpg";

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconScissors({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function IconMicroscope({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18h8" /><path d="M3 21h18" />
      <path d="M14 21v-4a2 2 0 0 0-2-2H6" />
      <path d="M14 3v4" /><path d="M17 3H7" />
      <path d="M10 3v13" /><path d="M14 7h3" />
    </svg>
  );
}

function IconSearch({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconTarget({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconChart({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function IconShield({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconHandshake({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  );
}

const pillars = [
  { n: "01", t: "Ascolto Profondo", d: "Nessun template preconfezionato. Ogni progetto parte dall'identità unica del cliente.", c: P.accent },
  { n: "02", t: "Bozza di Alta Precisione", d: "Punto di partenza calibrato, non prodotto finito. Il primo filo di co-creazione.", c: P.accentLight },
  { n: "03", t: "Co-Creazione Continua", d: "Strategia verificata, validata e rimodulata insieme a voi in ogni fase.", c: P.accent },
  { n: "04", t: "Validazione sul Campo", d: "Nessuna sorpresa: ogni scelta viene sottoposta alla vostra approvazione.", c: P.accentLight },
];

const dataTools = [
  { label: "Analisi di Mercato",      desc: "Benchmark 3–5 competitor per area, gap analysis e opportunità di posizionamento.",   Icon: IconSearch,   c: P.accent },
  { label: "Volumi di Ricerca SEO",   desc: "Keyword research e search intent per intercettare la domanda dei vostri target.",     Icon: IconChart,    c: P.accentLight },
  { label: "KPI di Conversione",      desc: "Lead acquisiti, traffico organico, engagement rate e costo per acquisizione.",        Icon: IconTarget,   c: P.accent },
  { label: "Evidenze Oggettive",      desc: "Ogni raccomandazione strategica è supportata da dati reali, non da intuizioni.",      Icon: IconShield,   c: P.accentLight },
];

export function MetodoSection() {
  return (
    <section
      id="metodo"
      className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden"
      style={{ background: P.dark }}
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(${P.accent}05 1px, transparent 1px), linear-gradient(90deg, ${P.accent}05 1px, transparent 1px)`,
        backgroundSize: "56px 56px",
      }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${P.accent}40, transparent)` }} />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10">

        {/* ── Eyebrow ── */}
        <div className="flex items-center gap-3">
          <div style={{ width: "28px", height: "1px", background: P.accent }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Identità & Metodo
          </span>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-auto gap-4">

          {/* [A] Artigiani del Digitale — testo principale · col 1–7 */}
          <div
            className="lg:col-span-7 flex flex-col justify-between gap-8 rounded-2xl p-8 md:p-10"
            style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${P.accent}20` }}
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: `${P.accent}20`, color: P.accentLight }}>
                <IconScissors size={24} />
              </div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.04em", lineHeight: "0.93" }}>
                Artigiani<br /><span style={{ color: P.accentLight }}>del Digitale</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: `${P.textInv}8A`, lineHeight: "1.85", maxWidth: "520px" }}>
                In DeNani <strong style={{ color: P.textInv, fontWeight: 600 }}>non adottiamo soluzioni standardizzate</strong>. Ogni progetto viene modellato sulle specifiche esigenze, sui valori e sulla <strong style={{ color: P.textInv, fontWeight: 600 }}>visione unica del cliente</strong> — proprio come un abito su misura.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: `${P.textInv}74`, lineHeight: "1.85", maxWidth: "520px" }}>
                Il nostro metodo si fonda su un <strong style={{ color: `${P.textInv}95`, fontWeight: 600 }}>dialogo costante</strong> e uno scambio di valore reale. La strategia che vedrete in questa fase è il <strong style={{ color: `${P.textInv}95`, fontWeight: 600 }}>punto di partenza</strong> di un processo di co-creazione.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p) => (
                <div key={p.n} className="flex flex-col gap-2 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.12)`, borderTop: `2px solid ${p.c}` }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", color: p.c, letterSpacing: "0.12em", fontWeight: 700 }}>{p.n}</span>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 800, color: P.textInv, lineHeight: "1.25" }}>{p.t}</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: `${P.textInv}7E`, lineHeight: "1.6", fontWeight: 500 }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: stacked [B] image + [C] handshake */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* [B] Visual · Atleta con maschera = riferimento a precisione/performance */}
            <div className="relative rounded-2xl overflow-hidden flex-1" style={{ minHeight: "220px" }}>
              <img src={imageUno} alt="Test VO2 metabolico" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.62) saturate(0.8)" }} />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 45%, ${P.dark}A8 100%)` }} />
            </div>

            {/* [C] Co-creation CTA card */}
            <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: `${P.accent}18`, border: `1px solid ${P.accent}30` }}>
              <div style={{ color: P.accentLight }}><IconHandshake size={22} /></div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", color: `${P.textInv}E8`, lineHeight: "1.75", fontWeight: 500 }}>
                Quello che state visionando oggi è una <strong style={{ color: P.accentLight }}>bozza strategica di alta precisione</strong>. L'analisi di dettaglio — audit SEO, benchmark completo, customer journey — verrà condotta insieme a voi nella fase operativa.
              </p>
            </div>
          </div>

          {/* [D] Visual · Data flow = riferimento a rigore scientifico · col 1–5 */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden" style={{ minHeight: "280px" }}>
            <img src={imageDue} alt="Data visualization" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.52) saturate(0.72)" }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${P.dark}98 0%, transparent 62%, ${P.dark}5A 100%)` }} />
          </div>

          {/* [E] Testo + evidenziato · col 6–12 */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 rounded-2xl p-8 md:p-10" style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${P.accent}18` }}>
            <div className="flex flex-col gap-4">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: `${P.textInv}88`, lineHeight: "1.85" }}>
                La creatività, per noi, è uno strumento per raggiungere <strong style={{ color: P.textInv, fontWeight: 600 }}>obiettivi concreti</strong>. La nostra strategia si fonda su <strong style={{ color: P.textInv, fontWeight: 600 }}>analisi di mercato rigorose</strong>, studio dei <strong style={{ color: P.textInv, fontWeight: 600 }}>volumi di ricerca</strong> e monitoraggio costante dei <strong style={{ color: P.textInv, fontWeight: 600 }}>KPI di conversione</strong>.
              </p>
              {/* Highlighted statement */}
              <div className="rounded-xl px-5 py-4" style={{ background: `${P.accent}14`, borderLeft: `3px solid ${P.accentLight}` }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textInv, lineHeight: "1.85", fontWeight: 500 }}>
                  Ogni scelta estetica e comunicativa che sottoporremo alla vostra validazione ha l'obiettivo finale di{" "}
                  <strong style={{ color: P.accentLight, fontWeight: 700 }}>parlare ai vostri target con la massima efficacia.</strong>
                </p>
              </div>
            </div>

            {/* Data tools — icon cards */}
            <div className="grid grid-cols-2 gap-3">
              {dataTools.map(({ label, desc, Icon, c }) => (
                <div key={label} className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.12)` }}>
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: `${c}18`, color: c }}>
                    <Icon size={16} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 800, color: P.textInv, letterSpacing: "-0.01em" }}>{label}</h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10.5px", color: `${P.textInv}7E`, lineHeight: "1.55", fontWeight: 500 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
