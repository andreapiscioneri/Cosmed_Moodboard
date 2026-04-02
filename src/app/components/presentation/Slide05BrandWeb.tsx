import { SlideShell } from "./SlideShell";
import { T } from "./tokens";

const odooVsWp = [
  { criterio: "Integrazione CRM", odoo: "Nativa & completa out-of-the-box", wp: "Plugin CRM terzi (HubSpot, Zoho)", odooOk: true },
  { criterio: "Gestione Lead & Pipeline Sales", odoo: "Modulo CRM integrato con scoring", wp: "Richiede plugin separati + config.", odooOk: true },
  { criterio: "E-commerce & Preventivi", odoo: "Nativo — ordini, offerte, fatturazione", wp: "WooCommerce separato", odooOk: true },
  { criterio: "Marketing Automation", odoo: "Email marketing + automazioni native", wp: "Mailchimp + plugin (costi aggiuntivi)", odooOk: true },
  { criterio: "SEO Performance", odoo: "Buona (in continuo miglioramento)", wp: "Ottima con Yoast/RankMath", odooOk: false },
  { criterio: "Sicurezza & GDPR", odoo: "Framework centralizzato by design", wp: "Dipende dai plugin installati", odooOk: true },
  { criterio: "Manutenzione", odoo: "Aggiornamenti monolitici (1 sistema)", wp: "Aggiornamenti multipli (plugin risk)", odooOk: true },
  { criterio: "Scalabilità", odoo: "Alta — moduli nativi espandibili", wp: "Limitata — plugin-based architecture", odooOk: true },
  { criterio: "Costo Totale Proprietà (TCO)", odoo: "Ottimizzato nel medio-lungo termine", wp: "Basso entry, alto nel lungo periodo", odooOk: true },
  { criterio: "Analytics & Reporting", odoo: "Dashboard unificata CRM+Web+Sales", wp: "GA4 + plugin separati", odooOk: true },
];

export function Slide05BrandWeb() {
  return (
    <SlideShell slideNum={5} slideTitle="Strategia Brand & Web">
      <div className="flex flex-col h-full gap-4">
        {/* Heading */}
        <div className="flex items-baseline gap-4 shrink-0">
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: T.text, letterSpacing: "-0.03em" }}>
            Strategia Brand & Piattaforma Web
          </h2>
        </div>

        <div className="flex gap-5 flex-1 min-h-0">
          {/* LEFT: Brand Identity */}
          <div className="flex flex-col gap-3" style={{ width: "32%" }}>
            <div className="rounded-xl p-4" style={{ background: T.surface, border: `1px solid ${T.border}`, borderTop: `3px solid ${T.gold}` }}>
              <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.gold, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Sub-brand 01</span>
              <h4 style={{ fontFamily: T.sans, fontSize: "14px", fontWeight: 800, color: T.text, letterSpacing: "-0.02em", marginBottom: "6px" }}>Cosmed Performance</h4>
              <p style={{ fontFamily: T.sansAlt, fontSize: "10px", color: T.textSub, lineHeight: "1.65", marginBottom: "10px" }}>
                Brand identity dedicata ispirata alla precisione tecnica e alla validazione clinica. Visual system "Dark Tech" con palette Anthracite + Tech Blue.
              </p>
              <div className="flex flex-col gap-1.5">
                {["Logotipo e varianti (bianco/nero/colore)", "Brand guidelines completo (40+ pagine)", "Palette cromatica + tipografia", "Iconografia tecnica personalizzata", "Template materiali scientifici", "Sito web Odoo nativo (max 7 pagine)"].map(i => (
                  <div key={i} className="flex items-start gap-2">
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: T.gold, flexShrink: 0, marginTop: "5px" }} />
                    <span style={{ fontFamily: T.sansAlt, fontSize: "9px", color: T.textSub, lineHeight: "1.4" }}>{i}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-4" style={{ background: T.surface, border: `1px solid ${T.border}`, borderTop: `3px solid ${T.slate}` }}>
              <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.slate, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Sub-brand 02</span>
              <h4 style={{ fontFamily: T.sans, fontSize: "14px", fontWeight: 800, color: T.text, letterSpacing: "-0.02em", marginBottom: "6px" }}>Cosmed Wellness</h4>
              <p style={{ fontFamily: T.sansAlt, fontSize: "10px", color: T.textSub, lineHeight: "1.65", marginBottom: "10px" }}>
                Brand identity premium con estetica "Light Luxury". Palette Teal + Satin Gold + Oxygen White per un posizionamento esclusivo nel wellness clinico.
              </p>
              <div className="flex flex-col gap-1.5">
                {["Logotipo e varianti premium", "Brand guidelines completo (40+ pagine)", "Palette Teal · Gold · Oxygen White", "Tipografia Playfair Display + Inter", "Moodboard visivo per tutti i canali", "Sito web Odoo nativo (max 7 pagine)"].map(i => (
                  <div key={i} className="flex items-start gap-2">
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: T.slate, flexShrink: 0, marginTop: "5px" }} />
                    <span style={{ fontFamily: T.sansAlt, fontSize: "9px", color: T.textSub, lineHeight: "1.4" }}>{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Comparison table */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Table header */}
            <div className="grid rounded-xl overflow-hidden mb-2"
              style={{ gridTemplateColumns: "1fr 1fr 1fr", border: `1px solid ${T.border}` }}>
              <div className="px-4 py-2.5" style={{ background: T.surfaceWarm }}>
                <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.2em", textTransform: "uppercase" }}>Criterio</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: T.gold + "18", borderLeft: `1px solid ${T.border}` }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: T.gold }} />
                <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.gold, letterSpacing: "0.2em", textTransform: "uppercase" }}>Odoo Nativo</span>
                <span style={{ fontFamily: T.mono, fontSize: "7px", color: T.gold, letterSpacing: "0.1em", background: T.gold + "18", border: `1px solid ${T.gold}40`, borderRadius: "3px", padding: "1px 5px" }}>✦ CONSIGLIATA</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: T.surfaceWarm, borderLeft: `1px solid ${T.border}` }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: T.textMuted }} />
                <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.2em", textTransform: "uppercase" }}>WordPress</span>
                <span style={{ fontFamily: T.mono, fontSize: "7px", color: "#B05050", letterSpacing: "0.1em", background: "#B0505010", border: "1px solid #B0505030", borderRadius: "3px", padding: "1px 5px" }}>SCONSIGLIATA</span>
              </div>
            </div>

            {/* Table rows */}
            <div className="flex flex-col gap-0.5 flex-1 overflow-auto">
              {odooVsWp.map((row, i) => (
                <div key={row.criterio} className="grid"
                  style={{ gridTemplateColumns: "1fr 1fr 1fr", background: i % 2 === 0 ? T.surface : T.surfaceWarm, borderRadius: "6px", border: `1px solid ${T.border}` }}>
                  <div className="px-3 py-2 flex items-center">
                    <span style={{ fontFamily: T.sansAlt, fontSize: "10px", fontWeight: 600, color: T.text }}>{row.criterio}</span>
                  </div>
                  <div className="px-3 py-2 flex items-start gap-1.5" style={{ borderLeft: `1px solid ${T.gold}25`, background: row.odooOk ? T.goldDim : "transparent" }}>
                    <span style={{ color: row.odooOk ? T.gold : T.textMuted, fontSize: "10px", flexShrink: 0, marginTop: "1px" }}>{row.odooOk ? "✓" : "○"}</span>
                    <span style={{ fontFamily: T.sansAlt, fontSize: "9px", color: row.odooOk ? T.textSub : T.textMuted, lineHeight: "1.4" }}>{row.odoo}</span>
                  </div>
                  <div className="px-3 py-2 flex items-start gap-1.5" style={{ borderLeft: `1px solid ${T.border}` }}>
                    <span style={{ color: row.odooOk ? "#B05050" : T.gold, fontSize: "10px", flexShrink: 0, marginTop: "1px" }}>{row.odooOk ? "✗" : "✓"}</span>
                    <span style={{ fontFamily: T.sansAlt, fontSize: "9px", color: T.textMuted, lineHeight: "1.4" }}>{row.wp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
