import { SlideShell } from "./SlideShell";
import { T, IMGS } from "./tokens";

const moduli = [
  {
    area: "Brand & Identity",
    colore: T.gold,
    voci: [
      "Full Brand System completo (2 sub-brand) — logotipi, brand book, visual identity",
      "Motion Design: animazioni logo, video intro, reel brand (tutti i formati)",
      "Tone of Voice documento ITA + ENG",
      "Template completi: pitch deck, catalogo prodotti, brochure scientifica",
      "Moodboard fotografia e iconografia su misura",
    ],
  },
  {
    area: "Web & Piattaforma",
    colore: T.goldDark,
    voci: [
      "2 siti Odoo Enterprise (Performance + Wellness) — max 7 pagine ciascuno",
      "Marketing Automation integrata: email sequenze, lead nurturing, scoring",
      "CRM Pipeline avanzato con automazioni commerciali",
      "E-commerce Odoo + modulo preventivi/ordini professionali",
      "Integrazione con sistemi terzi (ERP, fatturazione, analytics avanzate)",
    ],
  },
  {
    area: "SEO / GEO — Livello Globale",
    colore: T.slate,
    voci: [
      "6+ articoli/mese SEO ottimizzati per Performance e Wellness",
      "Geo-targeting: Italia (fase 1) + UE (fase 2) + MENA / International (fase 3)",
      "Link building premium (8–12 backlink/mese da siti autorevolezza DR 50+)",
      "PR scientifica: comunicati stampa su riviste di settore fisioterapia/nutrizione",
      "Report ranking settimanale + dashboard analytics in real-time",
    ],
  },
  {
    area: "Social Media — Full Stack",
    colore: T.goldLight,
    voci: [
      "3+ post/video settimanali per piattaforma (LinkedIn + Instagram + YouTube)",
      "Reels e video scientifici (8+/mese) — produzione e post-produzione incluse",
      "Partnership e collaborazioni con influencer KOL scientifici certificati",
      "Campagne LinkedIn Ads + Meta Ads + Google Ads (gestione, budget escluso)",
      "Community management avanzato (7 giorni su 7)",
    ],
  },
  {
    area: "Sponsorizzazioni & Relazioni",
    colore: T.slate,
    voci: [
      "Sponsorizzazione 4+ congressi ECM/anno (fisiatria, fisioterapia, nutrizione)",
      "Partecipazione fiere settore (Sana, Cosmoprof, NutriMI, AIFI, SIMFER)",
      "4 webinar certificati ECM/anno (organizzazione, promozione, relatori)",
      "Materiali espositivi premium: stand modulare, totem, cataloghi digitali QR",
    ],
  },
  {
    area: "Reporting & Strategia C-Level",
    colore: T.goldDark,
    voci: [
      "C-level dashboard live (aggiornamento real-time su KPI commerciali e marketing)",
      "Call strategica mensile con C-level Cosmed (90 min + documento decisionale)",
      "Report trimestrale di performance: ROI, CPL, MQL, SQL, conversioni",
      "Roadmap evolutiva semestrale — adattamento strategia a dati di mercato",
    ],
  },
];

const kpi = [
  { label: "Una Tantum", valore: "€ 36.000", desc: "Investimento iniziale per setup completo" },
  { label: "Canone Mensile", valore: "€ 7.000", desc: "Attività continuative per 12 mesi" },
  { label: "Totale 12 Mesi", valore: "€ 120.000", desc: "Investimento complessivo piano annuale" },
];

export function Slide08Gold() {
  return (
    <SlideShell slideNum={8} slideTitle="Pacchetto Gold — Leader" bg={T.bgDark} dark>
      <div className="relative flex flex-col h-full gap-4">
        {/* Subtle bg image */}
        <img src={IMGS.sand} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ filter: "brightness(0.06) saturate(0)", opacity: 0.5 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 60% at 60% 50%, ${T.gold}08 0%, transparent 65%)` }} />

        <div className="relative z-10 flex flex-col h-full gap-4">
          {/* Header */}
          <div className="flex items-start justify-between shrink-0">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div style={{ width: "28px", height: "1px", background: T.gold }} />
                <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.gold, letterSpacing: "0.3em", textTransform: "uppercase" }}>Pacchetto Premium</span>
              </div>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(26px, 3.5vw, 50px)", fontWeight: 900, color: T.textInverse, letterSpacing: "-0.04em", lineHeight: "0.95" }}>
                Gold — <span style={{ color: T.gold }}>Leader</span>
              </h2>
              <p style={{ fontFamily: T.sansAlt, fontSize: "13px", color: "rgba(242,239,233,0.55)", marginTop: "4px" }}>
                Dominio totale del mercato · Massima riduzione del CPL · Eccellenza commerciale completa
              </p>
            </div>

            {/* KPI cards */}
            <div className="flex gap-3 shrink-0">
              {kpi.map(k => (
                <div key={k.label} className="rounded-xl px-4 py-3 text-right"
                  style={{ background: `${T.gold}10`, border: `1px solid ${T.gold}25`, backdropFilter: "blur(8px)" }}>
                  <span style={{ fontFamily: T.mono, fontSize: "7px", color: `${T.gold}90`, letterSpacing: "0.18em", display: "block", marginBottom: "2px", textTransform: "uppercase" }}>{k.label}</span>
                  <span style={{ fontFamily: T.sans, fontSize: "clamp(15px, 1.8vw, 22px)", fontWeight: 900, color: T.gold, letterSpacing: "-0.03em", lineHeight: "1" }}>{k.valore}</span>
                  <span style={{ fontFamily: T.mono, fontSize: "7px", color: "rgba(242,239,233,0.3)", display: "block", marginTop: "2px", lineHeight: "1.3" }}>{k.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content grid */}
          <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
            {moduli.map(m => (
              <div key={m.area} className="rounded-xl p-4 flex flex-col"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${m.colore}20`, borderTop: `2px solid ${m.colore}`, backdropFilter: "blur(8px)" }}>
                <p style={{ fontFamily: T.mono, fontSize: "8px", color: m.colore, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "8px" }}>{m.area}</p>
                <div className="flex flex-col gap-1.5 flex-1">
                  {m.voci.map(v => (
                    <div key={v} className="flex items-start gap-1.5">
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: m.colore, flexShrink: 0, marginTop: "5px", opacity: 0.7 }} />
                      <span style={{ fontFamily: T.sansAlt, fontSize: "9px", color: "rgba(242,239,233,0.6)", lineHeight: "1.5" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom claim */}
          <div className="flex items-center justify-between shrink-0 rounded-xl px-5 py-3"
            style={{ background: `${T.gold}0C`, border: `1px solid ${T.gold}20` }}>
            <div className="flex items-center gap-3">
              <div style={{ width: "20px", height: "1px", background: T.gold }} />
              <p style={{ fontFamily: T.sans, fontSize: "11px", fontStyle: "italic", fontWeight: 300, color: "rgba(242,239,233,0.55)" }}>
                "Il pacchetto Gold non è un costo — è il costo di non avere concorrenza nel mercato della misurazione metabolica."
              </p>
            </div>
            <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.gold, letterSpacing: "0.2em", whiteSpace: "nowrap", marginLeft: "16px" }}>
              ROI atteso: 3x in 18 mesi
            </span>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
