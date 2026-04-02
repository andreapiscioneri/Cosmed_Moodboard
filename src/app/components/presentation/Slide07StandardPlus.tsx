import { SlideShell } from "./SlideShell";
import { T } from "./tokens";

const standard = {
  nome: "Standard",
  focus: "Entry — Fondamenta Solide",
  unatantum: "€ 22.750",
  canone: "€ 2.354",
  totale12: "€ 51.0 0 8",
  tag: "1 sub-brand",
  sezioni: [
    {
      titolo: "Brand Identity",
      voci: [
        "Logotipo (1 sub-brand a scelta: Performance o Wellness)",
        "Brand guidelines essenziale (logo, palette, tipografia, tono)",
        "Template base: presentazione, carta intestata, firma email",
      ],
    },
    {
      titolo: "Sito Web (Odoo Nativo)",
      voci: [
        "Sito max 7 pagine per 1 sub-brand",
        "Design UI/UX responsive (mobile + desktop)",
        "Integrazione CRM Odoo — form lead capture",
        "SEO on-page base + GDPR compliance",
      ],
    },
    {
      titolo: "SEO Continuativa",
      voci: [
        "2 articoli/mese ottimizzati SEO (blog tecnico-scientifico)",
        "Monitoraggio ranking mensile con report KPI",
        "Ottimizzazione meta e contenuti esistenti",
      ],
    },
    {
      titolo: "Social Media",
      voci: [
        "1 post/video a settimana su LinkedIn",
        "1 post/video a settimana su Instagram",
        "Gestione community (risposte commenti, DM)",
        "Piano editoriale mensile condiviso",
      ],
    },
    {
      titolo: "Advertising",
      voci: [
        "LinkedIn Ads — campagna base lead generation (budget escluso)",
        "Report mensile performance campagne",
        "A/B test copy e creatività (2 varianti/mese)",
      ],
    },
    {
      titolo: "Reporting",
      voci: [
        "Dashboard mensile: SEO, Social, Lead",
        "Call di allineamento mensile (60 min)",
      ],
    },
  ],
};

const plus = {
  nome: "Plus",
  focus: "Growth — Accelerazione Commerciale",
  unatantum: "€ 34.000",
  canone: "€ 4.250",
  totale12: "€ 85.000",
  tag: "2 sub-brand",
  sezioni: [
    {
      titolo: "Brand Identity Completa",
      voci: [
        "Logotipo + brand guidelines completo (2 sub-brand)",
        "Visual system Performance + Wellness (40+ pagine ciascuno)",
        "Moodboard visivo, iconografia, template completi",
        "Tone of Voice ITA + ENG",
      ],
    },
    {
      titolo: "Sito Web (Odoo Nativo — 2 siti)",
      voci: [
        "2 siti max 7 pagine (1 per sub-brand)",
        "UI/UX avanzato + animazioni CSS",
        "CRM integrato con pipeline commerciale",
        "E-commerce base Odoo (catalogo, richieste preventivo)",
      ],
    },
    {
      titolo: "SEO / GEO Avanzato",
      voci: [
        "4 articoli/mese ottimizzati SEO (piano editoriale completo)",
        "Geo-targeting Italia + EU fase 1",
        "Link building mensile (3–5 backlink autorevolezza)",
        "Report ranking settimanale + analytics avanzate",
      ],
    },
    {
      titolo: "Social Media — 2+ contenuti/settimana",
      voci: [
        "2+ post/video settimanali per piattaforma (LinkedIn + IG)",
        "Reels e video-pillole scientifiche (4/mese)",
        "Stories e contenuti effimeri (3+/settimana)",
        "Gestione community avanzata",
      ],
    },
    {
      titolo: "Advertising — LinkedIn + Meta",
      voci: [
        "LinkedIn Ads + Meta Ads (budget escluso, gestione inclusa)",
        "Campagne lead generation + retargeting",
        "Ottimizzazione CPL mensile",
        "Landing page dedicate per campagna (max 4/anno)",
      ],
    },
    {
      titolo: "Extra Plus",
      voci: [
        "4 video case studies/anno (produzione completa)",
        "2 webinar aziendali/anno (setup + promozione)",
        "Report mensile avanzato + call strategica mensile (90 min)",
      ],
    },
  ],
};

function PricingCard({ pkg, accento }: { pkg: typeof standard; accento: string }) {
  return (
    <div className="flex-1 flex flex-col rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${T.border}`, borderTop: `3px solid ${accento}`, background: T.surface, boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
      {/* Header */}
      <div className="px-5 py-4" style={{ background: T.surfaceWarm, borderBottom: `1px solid ${T.border}` }}>
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span style={{ fontFamily: T.mono, fontSize: "7px", color: accento, border: `1px solid ${accento}30`, background: `${accento}08`, borderRadius: "3px", padding: "2px 6px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {pkg.tag}
              </span>
            </div>
            <h3 style={{ fontFamily: T.sans, fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, color: T.text, letterSpacing: "-0.03em", lineHeight: 1 }}>
              Pacchetto {pkg.nome}
            </h3>
            <p style={{ fontFamily: T.sansAlt, fontSize: "10px", color: T.textSub, marginTop: "2px" }}>{pkg.focus}</p>
          </div>
          <div className="text-right">
            <div style={{ marginBottom: "4px" }}>
              <span style={{ fontFamily: T.mono, fontSize: "7px", color: T.textMuted, letterSpacing: "0.15em", display: "block" }}>UNA TANTUM</span>
              <span style={{ fontFamily: T.sans, fontSize: "clamp(16px, 1.8vw, 22px)", fontWeight: 900, color: accento, letterSpacing: "-0.03em" }}>{pkg.unatantum}</span>
            </div>
            <div>
              <span style={{ fontFamily: T.mono, fontSize: "7px", color: T.textMuted, letterSpacing: "0.15em", display: "block" }}>CANONE / MESE</span>
              <span style={{ fontFamily: T.sans, fontSize: "clamp(14px, 1.6vw, 18px)", fontWeight: 700, color: T.text }}>{pkg.canone}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 pt-2" style={{ borderTop: `1px solid ${T.border}` }}>
          <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.textMuted, letterSpacing: "0.12em" }}>Totale 12 mesi:</span>
          <span style={{ fontFamily: T.mono, fontSize: "10px", color: accento, fontWeight: 600, letterSpacing: "-0.01em" }}>{pkg.totale12}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-5 py-3">
        <div className="grid grid-cols-2 gap-3">
          {pkg.sezioni.map(s => (
            <div key={s.titolo}>
              <p style={{ fontFamily: T.mono, fontSize: "7.5px", color: accento, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "5px" }}>{s.titolo}</p>
              <div className="flex flex-col gap-1">
                {s.voci.map(v => (
                  <div key={v} className="flex items-start gap-1.5">
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: accento, flexShrink: 0, marginTop: "5px", opacity: 0.6 }} />
                    <span style={{ fontFamily: T.sansAlt, fontSize: "9px", color: T.textSub, lineHeight: "1.45" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Slide07StandardPlus() {
  return (
    <SlideShell slideNum={7} slideTitle="Pacchetti Standard & Plus">
      <div className="flex flex-col h-full gap-3">
        <div className="flex items-baseline gap-4 shrink-0">
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: T.text, letterSpacing: "-0.03em" }}>
            Piani d'Investimento — Standard & Plus
          </h2>
        </div>
        <div className="flex gap-4 flex-1 min-h-0">
          <PricingCard pkg={standard} accento={T.gold} />
          <PricingCard pkg={plus} accento={T.slate} />
        </div>
      </div>
    </SlideShell>
  );
}
