import cosmedLogo from "figma:asset/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";
import denaniLogo from "figma:asset/b711fde9faacb53317b265711a97126b5de19ae1.png";
import { T, IMGS } from "./tokens";

const sintesi = [
  {
    punto: "Brand Duale, Comunicazione Precisa",
    testo: "Cosmed Performance e Cosmed Wellness — due identità distinte, un sistema di brand coerente. Ogni professionista riceve il messaggio giusto nel canale giusto.",
    colore: T.gold,
  },
  {
    punto: "Piattaforma Unica: Odoo Nativo",
    testo: "Un ecosistema integrato — sito, CRM, pipeline commerciale, marketing automation — che riduce costi di gestione e aumenta l'efficienza del ciclo di vendita.",
    colore: T.slate,
  },
  {
    punto: "SEO, Social & Advertising Sinergici",
    testo: "Contenuti tecnico-scientifici, presenza social B2B professionale e campagne advertising mirate convergono in una macchina di lead generation misurabile e scalabile.",
    colore: T.gold,
  },
  {
    punto: "Riduzione Strutturale dell'Intermediazione",
    testo: "Più canali diretti significa meno dipendenza dai rivenditori, CPL più basso, margine più alto e relazione diretta con il cliente finale — valore che si accumula nel tempo.",
    colore: T.slate,
  },
];

const nextSteps = [
  { step: "Kick-off Meeting", det: "Allineamento strategico, presentazione team DeNani, revisione obiettivi Cosmed", periodo: "Settimana 1" },
  { step: "Audit & Discovery", det: "Analisi brand esistente, competitor, keyword research, interviste stakeholder", periodo: "Sett. 2–3" },
  { step: "Brand Strategy Doc", det: "Consegna documento di brand strategy completo (obiettivi, tono, visual direction)", periodo: "Sett. 4" },
  { step: "Inizio Produzione Brand", det: "Avvio brand identity Cosmed Performance + Cosmed Wellness", periodo: "Mese 2" },
  { step: "Go-live Siti Web", det: "Lancio siti Odoo nativi con CRM attivo e first-batch contenuti SEO", periodo: "Mese 5" },
  { step: "Full Regime", det: "SEO, Social, Ads, Community — tutte le attività a pieno regime", periodo: "Mese 6+" },
];

export function Slide10Conclusioni() {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden" style={{ background: T.bgDark }}>
      <img src={IMGS.sand} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ filter: "brightness(0.05) saturate(0)", transform: "scale(1.04)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 90% 70% at 30% 60%, ${T.gold}06 0%, transparent 65%)` }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${T.gold}, ${T.slate}, ${T.gold}, transparent)` }} />

      {/* Header bar */}
      <div className="relative z-20 flex items-center justify-between px-10 py-3 shrink-0"
        style={{ background: "rgba(28,31,38,0.9)", borderBottom: `1px solid ${T.borderDark}`, backdropFilter: "blur(12px)" }}>
        <div className="flex items-center gap-3">
          <img src={cosmedLogo} alt="Cosmed" style={{ height: "28px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
          <div style={{ width: "1px", height: "18px", background: T.borderDark }} />
          <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.gold, letterSpacing: "0.22em", textTransform: "uppercase" }}>The Metabolic Company</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: "9px", color: "rgba(242,239,233,0.25)", letterSpacing: "0.18em", textTransform: "uppercase" }}>10 — Conclusioni & Chiusura</span>
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: T.mono, fontSize: "8px", color: "rgba(242,239,233,0.3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Partner Brand</span>
          <div style={{ width: "1px", height: "18px", background: T.borderDark }} />
          <img src={denaniLogo} alt="DeNani" style={{ height: "28px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-10 py-5 gap-4 min-h-0">
        {/* Title */}
        <div className="flex items-baseline gap-4 shrink-0">
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 900, color: T.textInverse, letterSpacing: "-0.04em", lineHeight: 1 }}>
            Conclusioni & <span style={{ color: T.gold }}>Chiusura</span>
          </h2>
        </div>

        <div className="flex gap-5 flex-1 min-h-0">
          {/* LEFT: Synthesis */}
          <div className="flex flex-col gap-2.5" style={{ width: "48%" }}>
            <span style={{ fontFamily: T.mono, fontSize: "8px", color: `${T.gold}90`, letterSpacing: "0.25em", textTransform: "uppercase" }}>Sintesi Strategica</span>
            {sintesi.map((s, i) => (
              <div key={s.punto} className="rounded-xl px-4 py-3"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${s.colore}18`, borderLeft: `3px solid ${s.colore}` }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span style={{ fontFamily: T.mono, fontSize: "8px", color: s.colore, letterSpacing: "0.12em" }}>0{i + 1}</span>
                  <h4 style={{ fontFamily: T.sans, fontSize: "12px", fontWeight: 700, color: T.textInverse, letterSpacing: "-0.01em" }}>{s.punto}</h4>
                </div>
                <p style={{ fontFamily: T.sansAlt, fontSize: "10px", color: "rgba(242,239,233,0.5)", lineHeight: "1.6" }}>{s.testo}</p>
              </div>
            ))}

            {/* Claim box */}
            <div className="rounded-xl px-4 py-3 mt-1"
              style={{ background: `${T.gold}0C`, border: `1px solid ${T.gold}25` }}>
              <p style={{ fontFamily: T.sansAlt, fontSize: "11px", fontStyle: "italic", fontWeight: 300, color: "rgba(242,239,233,0.6)", lineHeight: "1.65" }}>
                "Investire in brand e marketing non è un costo discrezionale — è la leva che trasforma la superiorità tecnica di Cosmed in vantaggio commerciale misurabile e sostenibile nel tempo."
              </p>
              <div className="flex justify-end mt-1">
                <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.gold, letterSpacing: "0.15em" }}>— DeNani per COSMED</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Next steps + contact */}
          <div className="flex-1 flex flex-col gap-3">
            <span style={{ fontFamily: T.mono, fontSize: "8px", color: `${T.gold}90`, letterSpacing: "0.25em", textTransform: "uppercase" }}>Prossimi Passi</span>
            <div className="flex flex-col gap-2">
              {nextSteps.map((n, i) => (
                <div key={n.step} className="flex items-start gap-3 rounded-xl px-4 py-2.5"
                  style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(255,255,255,0.06)` }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${T.gold}15`, border: `1px solid ${T.gold}25` }}>
                    <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.gold }}>{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span style={{ fontFamily: T.sans, fontSize: "11px", fontWeight: 700, color: T.textInverse }}>{n.step}</span>
                      <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.gold, letterSpacing: "0.08em" }}>{n.periodo}</span>
                    </div>
                    <p style={{ fontFamily: T.sansAlt, fontSize: "9.5px", color: "rgba(242,239,233,0.45)", lineHeight: "1.45" }}>{n.det}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact box */}
            <div className="rounded-xl p-4 mt-auto"
              style={{ background: `${T.gold}0A`, border: `1px solid ${T.gold}20` }}>
              <p style={{ fontFamily: T.mono, fontSize: "8px", color: T.gold, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>Contatti</p>
              <div className="flex items-center gap-4">
                <img src={denaniLogo} alt="DeNani" style={{ height: "32px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.7 }} />
                <div style={{ width: "1px", height: "28px", background: `${T.gold}25` }} />
                <div className="flex flex-col gap-1">
                  <span style={{ fontFamily: T.sans, fontSize: "11px", fontWeight: 600, color: T.textInverse }}>DeNani — Artigiani del Digitale</span>
                  <span style={{ fontFamily: T.mono, fontSize: "9px", color: "rgba(242,239,233,0.4)", letterSpacing: "0.08em" }}>info@denani.it · www.denani.it · /company/denani</span>
                </div>
                <div style={{ flex: 1 }} />
                <div className="rounded-lg px-4 py-2 cursor-pointer"
                  style={{ background: T.gold, border: `1px solid ${T.gold}` }}>
                  <span style={{ fontFamily: T.sans, fontSize: "11px", fontWeight: 700, color: T.bgDark, letterSpacing: "-0.01em" }}>Iniziamo →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 flex items-center justify-between px-10 py-2 shrink-0"
        style={{ borderTop: `1px solid ${T.borderDark}`, background: "rgba(28,31,38,0.9)", backdropFilter: "blur(12px)" }}>
        <span style={{ fontFamily: T.mono, fontSize: "7px", color: "rgba(242,239,233,0.2)", letterSpacing: "0.2em" }}>PROPOSTA RISERVATA · APRILE 2026</span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "56px", height: "2px", borderRadius: "1px", background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: "100%", background: T.gold, borderRadius: "1px" }} />
          </div>
          <span style={{ fontFamily: T.mono, fontSize: "7px", color: "rgba(242,239,233,0.2)", letterSpacing: "0.2em" }}>10 / 10</span>
        </div>
      </div>
    </div>
  );
}
