import { P } from "./images";

const steps = [
  {
    n: "01", f: "Analisi di Mercato", p: "M1–2", c: P.accent,
    d: "Audit brand Cosmed attuale, benchmark competitivo (3–5 competitor per area), keyword research SEO/GEO per Performance e Wellness, mappatura canali digitali esistenti.",
  },
  {
    n: "02", f: "Target Persona", p: "M1–2", c: P.accentLight,
    d: "Definizione di 3–4 buyer persona per ciascun sub-brand, mappatura pain points clinici e commerciali, customer journey map per ogni persona (da awareness a loyalty).",
  },
  {
    n: "03", f: "Brand Identity", p: "M2–4", c: P.accent,
    d: "Logotipo Cosmed Performance + Cosmed Wellness (varianti complete), brand guidelines: palette, tipografia, regole d'uso, tone of voice (solo IT), template materiali di vendita.",
  },
  {
    n: "04", f: "Sito Web", p: "M3–5", c: P.accentLight,
    d: "Creazione di 2 siti web su piattaforma Odoo integrata nel gestionale ERP Cosmed. UI/UX responsive, integrazione CRM, form lead capture, SEO on-page, GDPR compliance.",
  },
  {
    n: "05", f: "SEO / GEO", p: "M4–12", c: P.accent,
    d: "Ottimizzazione locale per essere trovati dai professionisti nei motori di ricerca in Italia.",
  },
  {
    n: "06", f: "Social Media", p: "M5–12", c: P.accentLight,
    d: 'Setup professionale profili Facebook, Instagram, LinkedIn per entrambe le aree. Piano editoriale con alternanza "Didattica", "Prodotto", "Fiducia". Obiettivo: scaldare l\'audience e analizzare le interazioni per orientare gli investimenti futuri.',
  },
  {
    n: "07", f: "Sponsorizzazioni", p: "M6–12", c: P.accent,
    d: "Contenuti promossi sui canali social in base a budget e piattaforma / brand: LinkedIn per Performance, Meta (Facebook + Instagram) per Wellness.",
  },
];

export function StrategiaSection() {
  return (
    <section id="strategia" className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-20" style={{ background: P.bg }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "28px", height: "1px", background: P.accent }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>Roadmap 12 Mesi</span>
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 4vw, 50px)", fontWeight: 900, color: P.text, letterSpacing: "-0.04em", lineHeight: "0.95", marginBottom: "40px" }}>
            Step Operativi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col gap-3 p-5 rounded-2xl"
                style={{ background: P.surface, border: `1px solid ${P.border}`, borderTop: `3px solid ${s.c}` }}>
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: s.c, letterSpacing: "0.14em" }}>{s.n}</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", color: P.textMuted, letterSpacing: "0.12em", border: `1px solid ${P.border}`, borderRadius: "3px", padding: "2px 5px" }}>{s.p}</span>
                </div>
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 800, color: P.text, letterSpacing: "-0.01em", lineHeight: "1.2" }}>{s.f}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: P.textSub, lineHeight: "1.65" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Odoo section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start rounded-3xl p-8 md:p-10" style={{ background: P.dark }}>
          <div className="lg:w-2/5 flex flex-col gap-4">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>Piattaforma Consigliata</span>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.04em", lineHeight: "1.05" }}>
              Odoo<br /><span style={{ color: P.accentLight }}>Integrato</span>
            </h3>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>Soluzione 1 — CONSIGLIATA</p>
              {[
                "Creazione di n°2 siti web su piattaforma Odoo",
                "Acquisto licenza aggiuntiva per conto di Cosmed per consentire l'intervento e la manutenzione a DeNani sui siti installati nel gestionale ERP Odoo",
                "Valutazione impatto economico della gestione in Odoo dei due siti con subdomain relativo a ciascun settore",
                "Interfaccia DeNani con Partner Odoo Cosmed affinché i siti vengano realizzati sulla piattaforma e integrati",
                "Separazione clienti per sorgente effettuata dalla piattaforma Odoo (Performance vs Wellness)",
              ].map(v => (
                <div key={v} className="flex items-start gap-2 mb-2">
                  <span style={{ color: P.accentLight, fontSize: "11px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: `${P.textInv}78`, lineHeight: "1.55" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${P.darkBorder}` }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "#B05050", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>Soluzione 2 (WordPress + Connettore) — SCONSIGLIATA</p>
              {[
                "N°2 siti in WordPress collegati con Odoo tramite un connettore",
                "Costo aggiuntivo del connettore",
                "Soluzione più instabile e meno integrata",
              ].map(v => (
                <div key={v} className="flex items-start gap-2 mb-2">
                  <span style={{ color: "#B05050", fontSize: "11px", flexShrink: 0, marginTop: "1px" }}>✗</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: `${P.textInv}72`, lineHeight: "1.55" }}>{v}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-5" style={{ background: P.accentDim, border: `1px solid ${P.accent}20` }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>Vantaggi chiave dell'integrazione Odoo</p>
              {[
                "CRM integrato — separazione leads Performance vs Wellness automatica",
                "Marketing Automation: email sequenze, lead nurturing, scoring",
                "Dashboard analytics unificata CRM + Web + Vendite",
                "GDPR by design — framework centralizzato e sicuro",
              ].map(v => (
                <div key={v} className="flex items-start gap-2 mb-2">
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: P.accentLight, flexShrink: 0, marginTop: "6px" }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: `${P.textInv}76`, lineHeight: "1.55" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}