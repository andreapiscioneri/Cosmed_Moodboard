import { P } from "./images";
import perfData from "../../../assets/PERFORMANCE - Data Flow.jpg";
import strategiaHeroBg from "../../../assets/WhatsApp Image 2026-04-09 at 16.38.10.jpeg";
import analisiMercatoImg from "../../../assets/analisi di mercato.jpg";
import brandIdentityImg from "../../../assets/brand identity.jpg";
import sitiWebImg from "../../../assets/siti web.jpg";
import seoImg from "../../../assets/SEO.jpg";
import socialMediaImg from "../../../assets/social media.jpg";
import sponsorizzazioniImg from "../../../assets/sponsorizzazioni.png";

const TARGET_PERSONAS_IMG = "https://images.pexels.com/photos/15319035/pexels-photo-15319035.jpeg?auto=compress&cs=tinysrgb&w=1200";
const MEDILINE_PROJECT_URL = "https://www.instagram.com/mediline_torino/";

const STEP_DARK_BG = "#17313D";
const STEP_DARK_CARD = "rgba(23,49,61,0.9)";

function IconSearch({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></svg>;
}
function IconGlobe({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M2 12h20" /><path d="M12 2a14.5 14.5 0 0 1 0 20A14.5 14.5 0 0 1 12 2" /></svg>;
}
function IconBarChart({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3v18h18" /><rect x="6" y="9" width="4" height="9" rx="1" /><rect x="11" y="5" width="4" height="13" rx="1" /><rect x="16" y="3" width="4" height="15" rx="1" /></svg>;
}
function IconPalette({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r="1" /><circle cx="17.5" cy="10.5" r="1" /><circle cx="8.5" cy="7.5" r="1" /><circle cx="6.5" cy="12.5" r="1" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>;
}
function IconLayout({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>;
}
function IconSlide({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="M8 4v16" /><path d="M16 4v16" /></svg>;
}
function IconMapPin({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function IconInstagram({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>;
}
function IconLinkedIn({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
}
function IconTrendUp({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 17.5h18" /><path d="m6 14 4-4 3 3 5-6" /><path d="M18 7h2.5V9.5" /></svg>;
}
function IconSport({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="7.5" cy="7.5" r="2.5" /><path d="M10.5 10.5 13 13l2.5-2.5" /><path d="M13 13 9.5 18" /><path d="M13 13h4.5" /><path d="M9.5 18h5" /></svg>;
}
function IconNutrition({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-4.8-7-11a7 7 0 0 1 14 0c0 6.2-7 11-7 11z" /><path d="M12 8.5v5" /><path d="M9.8 10.8h4.4" /></svg>;
}
function IconCheck({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>;
}
function IconX({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
}
function IconUsers({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}
function IconMail({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2.5" /><polyline points="2,4 12,13 22,4" /></svg>;
}
function IconShield({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s7-3.8 7-9.5V5.4L12 3l-7 2.4v7.1C5 18.2 12 22 12 22z" /><polyline points="9,12 11,14 15,10" /></svg>;
}
function IconWebsite({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="18" rx="2.5" /><path d="M2 9h20" /><circle cx="7" cy="6" r="1" fill="currentColor" /><circle cx="11" cy="6" r="1" fill="currentColor" /></svg>;
}

function Chip({ label, dark = false }: { label: string; dark?: boolean }) {
  return <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: dark ? P.accentLight : P.accent, border: `1px solid ${dark ? P.accentLight : P.accent}35`, background: `${P.accent}10`, borderRadius: "4px", padding: "4px 10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>;
}

const EMPHASIS_TERMS = [
  "COSMED",
  "Performance",
  "Well-being",
  "Wellbeing",
  "SEO/GEO",
  "keyword",
  "target",
  "Brand Identity",
  "lead generation",
  "CRM",
  "GDPR",
  "KPI",
  "Odoo",
  "conversione",
  "ROI",
  "strategia",
  "VO2max",
  "Google",
  "IA",
  "annunci",
  "contenuti",
  "engagement",
  "awareness",
  "conversioni",
  "fiducia",
  "misurabile",
  "campione",
  "processo",
  "sogni",
  "lontano",
  "duro lavoro",
  "perseveranza",
  "infortuni",
  "scientifici",
  "efficaci",
  "corpo umano",
  "prevenzione",
  "Odiavo",
  "è 'Io'",
  "è 'Noi'",
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildWholeWordRegex(terms: string[]) {
  const pattern = terms
    .map((term) => `(?<![\\p{L}\\p{N}])${escapeRegExp(term)}(?![\\p{L}\\p{N}])`)
    .join("|");

  return new RegExp(`(${pattern})`, "giu");
}

const EMPHASIS_REGEX = buildWholeWordRegex(EMPHASIS_TERMS);

function highlightCopy(text: string, dark = false) {
  return text.split(EMPHASIS_REGEX).map((part, index) => {
    const isEmphasis = EMPHASIS_TERMS.some((term) => term.toLowerCase() === part.toLowerCase());
    if (!isEmphasis) return <span key={`${part}-${index}`}>{part}</span>;

    return (
      <strong
        key={`${part}-${index}`}
        style={{
          fontWeight: 800,
          color: dark ? P.accentLight : P.accent,
          letterSpacing: "0.01em",
        }}
      >
        {part}
      </strong>
    );
  });
}

function SideImageCard({ image, roundLeft = true, bannerText, projectLink }: { image: string; roundLeft?: boolean; bannerText?: string; projectLink?: { href: string; label: string } }) {
  return (
    <div className="overflow-hidden h-full self-stretch" style={{ background: "transparent", borderTopLeftRadius: roundLeft ? "16px" : "0", borderBottomLeftRadius: roundLeft ? "16px" : "0", borderTopRightRadius: !roundLeft ? "16px" : "0", borderBottomRightRadius: !roundLeft ? "16px" : "0" }}>
      <div className="relative h-full min-h-[600px]">
        <img src={image} alt="Strategia visual" loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.68) saturate(1.02)", objectPosition: "center 33%", borderTopLeftRadius: roundLeft ? "16px" : "0", borderBottomLeftRadius: roundLeft ? "16px" : "0", borderTopRightRadius: !roundLeft ? "16px" : "0", borderBottomRightRadius: !roundLeft ? "16px" : "0" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(12,28,36,0.16) 0%, ${STEP_DARK_BG}2C 46%, ${STEP_DARK_BG}E2 100%)` }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${STEP_DARK_BG}55 0%, rgba(30,122,138,0.13) 36%, rgba(74,159,175,0.16) 70%, ${STEP_DARK_BG}80 100%)` }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 78% 24%, rgba(74,159,175,0.18) 0%, rgba(74,159,175,0) 42%)` }} />
        {bannerText || projectLink ? (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg flex flex-col items-center" style={{ background: "rgba(12,26,34,0.45)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(2px)" }}>
            {bannerText ? (
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                {bannerText}
              </span>
            ) : null}
            {projectLink ? (
              <a
                href={projectLink.href}
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.96)", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "underline", textUnderlineOffset: "2px", marginTop: bannerText ? "4px" : "0", whiteSpace: "nowrap" }}
              >
                {projectLink.label}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SectionShell({ light = true, children }: { light?: boolean; children: React.ReactNode }) {
  return <section className="w-full py-14 md:py-20 overflow-hidden" style={{ background: light ? P.surface : STEP_DARK_BG }}><div className="px-6 md:px-10 lg:px-20">{children}</div></section>;
}

export function StrategiaSection() {
  return (
    <section id="strategia" className="w-full" style={{ background: P.bg }}>
      <div className="relative w-full overflow-hidden" style={{ minHeight: "420px" }}>
        <img src={strategiaHeroBg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.38) saturate(0.82)", transform: "scale(1.04)", objectPosition: "center center" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${P.dark}D0 0%, ${P.darkMid}B8 55%, ${P.dark}90 100%)` }} />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(${P.accent}06 1px, transparent 1px)`, backgroundSize: "44px 44px" }} />
        <div className="absolute top-0 left-0 right-0" style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${P.accent}, ${P.accentLight}, transparent)` }} />
        <div className="relative z-10 py-20 md:py-28 px-6 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-3"><div style={{ width: "36px", height: "1px", background: `linear-gradient(90deg, ${P.accentLight}, transparent)` }} /><span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.14em", textTransform: "uppercase" }}>La Strategia Operativa</span></div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 5vw, 64px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.05em", lineHeight: "0.92" }}>Dagli Obiettivi<br /><span style={{ color: P.accentLight }}>Alla Roadmap Strategica</span><br /></h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.5vw, 17px)", color: `${P.textInv}72`, lineHeight: "1.8", maxWidth: "56ch" }}>{highlightCopy("Un percorso strutturato per costruire l'ecosistema digitale di COSMED Performance & COSMED Well-being.", true)}</p>
            <div className="flex flex-wrap gap-2 mt-2">{["1. Analisi di Mercato", "2. Target Personas", "3. Brand Identity", "4. Siti Web", "5. SEO / GEO", "6. Social Media", "7. Sponsorizzazioni"].map((label) => <Chip key={label} label={label} dark />)}</div>
          </div>
        </div>
      </div>

      <SectionShell light>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4"><h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3.3vw, 38px)", fontWeight: 900, color: P.text, letterSpacing: "-0.035em", lineHeight: "0.98" }}>1. Analisi di Mercato</h3><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.textMuted, letterSpacing: "0.14em", textTransform: "uppercase" }}>Dettaglio Operativo</p><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textSub, lineHeight: "1.8" }}>{highlightCopy("Studio dell'attuale comunicazione COSMED, analisi dei competitor internazionali e ricerca delle keyword più rilevanti per il posizionamento SEO/GEO dei nuovi sub-brands.")}</p></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{[{ icon: IconSearch, c: P.accent, t: "Audit Interno", d: "Valutazione dello stato attuale dei canali digitali per definire i parametri di crescita." }, { icon: IconGlobe, c: P.accentLight, t: "Benchmark Competitivo", d: "Analisi del posizionamento e della comunicazione di player internazionali." }, { icon: IconBarChart, c: P.accent, t: "Keyword Research SEO/GEO", d: "Identificazione delle reali intenzioni di ricerca dei professionisti in Italia." }].map((item) => <div key={item.t} className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: P.surfaceAlt, border: `1px solid ${P.border}`, borderTop: `3px solid ${item.c}` }}><div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: `${item.c}14`, color: item.c }}><item.icon size={18} /></div><h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: P.text, letterSpacing: "-0.01em" }}>{item.t}</h4><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12.5px", color: P.textSub, lineHeight: "1.7" }}>{highlightCopy(item.d)}</p></div>)}</div>
            <div className="relative overflow-hidden rounded-[24px]" style={{ background: "rgba(255,255,255,0.96)", border: `1px solid ${P.border}` }}>
              <img
                src={perfData}
                alt="Data flow"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(1.05) saturate(0.28) hue-rotate(190deg)", opacity: 0.18, transform: "scale(1.04)" }}
              />
              <div className="relative z-10 p-6 md:p-7" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.92) 100%)" }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.accent, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "16px" }}>Focus Tecnico</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>COSMED Performance</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.textSub, lineHeight: "1.75" }}>{highlightCopy("Analisi semantica focalizzata su VO2max, soglia anaerobica e test da sforzo.")}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>COSMED Wellbeing</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.textSub, lineHeight: "1.75" }}>{highlightCopy("Focus su dispendio energetico (REE), substrati-macronutrienti e nutrizione clinica.")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:-mr-24 md:-mr-12 -mr-8 lg:-my-14 md:-my-14 lg:w-[calc(100%+6rem)] md:w-[calc(100%+3rem)] w-[calc(100%+2rem)]">
            <SideImageCard image={analisiMercatoImg} roundLeft />
          </div>
        </div>
      </SectionShell>

      <SectionShell light={false}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-col gap-6 lg:order-2 lg:min-h-[600px] lg:justify-start">
            <div className="flex flex-col gap-4"><h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3.3vw, 38px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.035em", lineHeight: "0.98" }}>2. Target Personas</h3><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: `${P.textInv}60`, letterSpacing: "0.14em", textTransform: "uppercase" }}>Dettaglio Operativo</p><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: `${P.textInv}72`, lineHeight: "1.8" }}>{highlightCopy("Definiamo dei profili fittizi che rappresentino in maniera realistica i nostri utenti target ideali.", true)}</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 md:mb-12">
              {[
                { name: "Dr. Roberto Grossi", role: "Preparatore atletico", accent: P.accent, area: "Area Performance", icon: IconSport, quote: "Mi serve il VO2max reale per personalizzare i carichi e prevenire infortuni." },
                { name: "Dott.ssa Elena Bianchi", role: "Biologa Nutrizionista", accent: P.accentLight, area: "Area Wellbeing", icon: IconNutrition, quote: "Ho bisogno di misurare i substrati per creare protocolli nutrizionali scientifici ed efficaci per i miei pazienti." },
              ].map((persona) => (
                <div key={persona.name} className="rounded-2xl p-5 flex flex-col gap-4" style={{ border: `1px solid ${P.darkBorder}`, background: "rgba(255,255,255,0.04)" }}>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center rounded-lg" style={{ width: "40px", height: "40px", background: `${persona.accent}14`, color: persona.accent, flexShrink: 0 }}>
                      <persona.icon size={18} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 800, color: P.textInv, letterSpacing: "-0.02em" }}>{persona.name}</h4>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: persona.accent, fontWeight: 600 }}>{persona.role}</p>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: `${P.textInv}60`, letterSpacing: "0.1em", textTransform: "uppercase" }}>{persona.area}</span>
                    </div>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${P.darkBorder}` }}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: persona.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Esigenza Chiave</p>
                    <blockquote style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: `${P.textInv}70`, fontStyle: "italic", lineHeight: "1.7", borderLeft: `1px solid ${persona.accent}66`, paddingLeft: "10px" }}>
                      "{highlightCopy(persona.quote, true)}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:order-1 lg:-ml-24 md:-ml-12 -ml-8 lg:-my-14 md:-my-14 lg:w-[calc(100%+6rem)] md:w-[calc(100%+3rem)] w-[calc(100%+2rem)]">
            <SideImageCard image={TARGET_PERSONAS_IMG} roundLeft={false} />
          </div>
        </div>
      </SectionShell>

      <SectionShell light>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-col gap-6 lg:min-h-[600px] lg:justify-start">
            <div className="flex flex-col gap-4"><h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3.3vw, 38px)", fontWeight: 900, color: P.text, letterSpacing: "-0.035em", lineHeight: "0.98" }}>3. Brand Identity</h3><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.textMuted, letterSpacing: "0.14em", textTransform: "uppercase" }}>Dettaglio Operativo</p><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textSub, lineHeight: "1.8" }}>{highlightCopy("La brand identity è l'insieme di tutte le caratteristiche visive che definiscono un brand rendendolo riconoscibile sul mercato.")}</p></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mb-8 md:mb-12">
              {[
                { icon: IconPalette, c: P.accentLight, t: "Logotipi Dedicati", d: "Sviluppo di varianti complete per COSMED Performance e COSMED Well-being." },
                { icon: IconLayout, c: P.accent, t: "Brand Guidelines", d: "Palette colori, tipografia e Tone of Voice tecnico ma accessibile." },
                { icon: IconSlide, c: P.accentLight, t: "Materiali Sales", d: "Template coordinati per brochure, schede tecniche e presentazioni." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl p-6 md:p-7 flex flex-col gap-4 min-h-[240px]" style={{ background: P.surfaceAlt, border: `1px solid ${P.border}`, borderTop: `2px solid ${item.c}` }}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: `${item.c}18`, color: item.c }}>
                    <item.icon size={20} />
                  </div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 800, color: P.text, lineHeight: "1.2" }}>{item.t}</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.textSub, lineHeight: "1.75" }}>{highlightCopy(item.d)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:-mr-24 md:-mr-12 -mr-8 lg:-my-14 md:-my-14 lg:w-[calc(100%+6rem)] md:w-[calc(100%+3rem)] w-[calc(100%+2rem)]">
            <SideImageCard image={brandIdentityImg} roundLeft bannerText="© COPYRIGHT DENANI S.R.L." />
          </div>
        </div>
      </SectionShell>

      <SectionShell light={false}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-col gap-6 lg:order-2">
            <div className="flex flex-col gap-4"><h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3.3vw, 38px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.035em", lineHeight: "0.98" }}>4. Siti Web</h3><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: `${P.textInv}60`, letterSpacing: "0.14em", textTransform: "uppercase" }}>Dettaglio Operativo</p><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: `${P.textInv}72`, lineHeight: "1.8" }}>{highlightCopy("Sviluppo di un'esperienza digitale integrata e coerente con la brand identity, ottimizzata per la lead generation e la gestione centralizzata dei contatti tramite CRM.", true)}</p></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: IconWebsite, c: P.accent, t: "Siti Web su Odoo", d: "Creazione ex-novo di due portali (Performance e Well-being) integrati nativamente con l'ERP Cosmed." },
                { icon: IconLayout, c: P.accentLight, t: "UI/UX Responsive", d: "Design fluido per ogni dispositivo, ottimizzato per la lead generation." },
                { icon: IconShield, c: P.accent, t: "CRM & GDPR", d: "Gestione centralizzata dei contatti e piena conformità alle normative sulla privacy." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${P.darkBorder}`, borderTop: `3px solid ${item.c}` }}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: `${item.c}14`, color: item.c }}>
                    <item.icon size={18} />
                  </div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: P.textInv }}>{item.t}</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12.5px", color: `${P.textInv}68`, lineHeight: "1.7" }}>{highlightCopy(item.d, true)}</p>
                </div>
              ))}
            </div>
              <div className="flex flex-col lg:flex-row gap-6 rounded-2xl p-6 md:p-8" style={{ background: STEP_DARK_BG }}>
              <div className="lg:w-2/5 flex flex-col gap-4"><span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>Piattaforma Consigliata</span><div className="flex items-center gap-3"><img src="/src/assets/390bef65bfd085818f4e1bb65eea8ad81d8eaef33f8c5cf45179c43543aa9ca8_200.webp" alt="Odoo" loading="lazy" style={{ width: "36px", height: "36px", borderRadius: "8px", objectFit: "contain", background: "#fff", padding: "4px", flexShrink: 0 }} /><h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.04em", lineHeight: "1.0" }}>Odoo <span style={{ color: P.accentLight }}>ERP</span></h4></div><div><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>Soluzione 1 — CONSIGLIATA</p>{["Creazione di n°2 siti web su piattaforma Odoo", "Acquisto licenza aggiuntiva per conto di Cosmed per consentire l'intervento e la manutenzione a DeNani sui siti installati nel gestionale ERP Odoo", "Valutazione impatto economico della gestione in Odoo dei due siti con subdomain relativo a ciascun settore", "Interfaccia DeNani con Partner Odoo Cosmed affinché i siti vengano realizzati sulla piattaforma e integrati", "Separazione clienti per sorgente effettuata dalla piattaforma Odoo (Performance vs Well-being)"].map((item) => <div key={item} className="flex items-start gap-2 mb-2"><span style={{ color: P.accentLight, flexShrink: 0, marginTop: "2px" }}><IconCheck size={13} /></span><span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: `${P.textInv}70`, lineHeight: "1.6" }}>{highlightCopy(item, true)}</span></div>)}</div></div>
                <div className="flex-1 flex flex-col gap-4"><div className="rounded-xl p-5" style={{ background: STEP_DARK_CARD, border: `1px solid ${P.darkBorder}` }}><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "#B05050", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>Soluzione 2 (WordPress + Connettore) — SCONSIGLIATA</p>{["N°2 siti in WordPress collegati con Odoo tramite un connettore", "Costo aggiuntivo del connettore", "Soluzione più instabile e meno integrata"].map((item) => <div key={item} className="flex items-start gap-2 mb-2"><span style={{ color: "#B05050", flexShrink: 0, marginTop: "2px" }}><IconX size={13} /></span><span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: `${P.textInv}65`, lineHeight: "1.6" }}>{highlightCopy(item, true)}</span></div>)}</div><div className="rounded-xl p-5" style={{ background: `${P.accent}12`, border: `1px solid ${P.accent}22` }}><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>Vantaggi chiave dell'integrazione Odoo</p>{[{ icon: IconUsers, t: "CRM integrato", d: "Separazione leads Performance vs Well-being automatica" }, { icon: IconMail, t: "Marketing Automation", d: "Email sequenze, lead nurturing, scoring" }, { icon: IconBarChart, t: "Analytics unificata", d: "Dashboard CRM + Web + Vendite in un'unica vista" }, { icon: IconShield, t: "GDPR by design", d: "Framework centralizzato e sicuro per la privacy" }].map((item) => <div key={item.t} className="flex items-start gap-3 mb-3"><div className="flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0" style={{ background: `${P.accentLight}18`, color: P.accentLight }}><item.icon size={14} /></div><div><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: P.textInv, letterSpacing: "-0.01em" }}>{item.t}</p><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10.5px", color: `${P.textInv}60`, lineHeight: "1.55" }}>{highlightCopy(item.d, true)}</p></div></div>)}</div></div>
            </div>
          </div>
          <div className="lg:order-1 lg:-ml-24 md:-ml-12 -ml-8 lg:-my-14 md:-my-14 lg:w-[calc(100%+6rem)] md:w-[calc(100%+3rem)] w-[calc(100%+2rem)]">
            <SideImageCard image={sitiWebImg} roundLeft={false} bannerText="© COPYRIGHT DENANI S.R.L." />
          </div>
        </div>
      </SectionShell>

      <SectionShell light>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4"><h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3.3vw, 38px)", fontWeight: 900, color: P.text, letterSpacing: "-0.035em", lineHeight: "0.98" }}>5. SEO / GEO</h3><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.textMuted, letterSpacing: "0.14em", textTransform: "uppercase" }}>Dettaglio Operativo</p><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textSub, lineHeight: "1.8" }}>{highlightCopy("La SEO serve a rendere il sito più visibile su Google quando un utente cerca servizi o informazioni specifiche. La GEO applica la stessa logica ai motori generativi e ai contenuti pensati per l'IA.")}</p></div>
            <div className="rounded-2xl p-5" style={{ background: P.surfaceAlt, border: `1px solid ${P.border}` }}><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>Cosa significa in pratica</p><div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{["Farti trovare da chi cerca già una soluzione simile alla tua.", "Spiegare meglio i servizi, così l'utente capisce subito se sei la scelta giusta.", "Generare contatti più qualificati, riducendo traffico poco utile."].map((item) => <div key={item} className="rounded-xl p-4" style={{ background: `${P.accent}10`, border: `1px solid ${P.accent}24` }}><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12.5px", color: P.textSub, lineHeight: "1.7" }}>{highlightCopy(item)}</p></div>)}</div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: `${P.accent}14`, border: `1px solid ${P.accent}28` }}><div className="flex items-center gap-3"><div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: `${P.accent}22`, color: P.accent }}><IconMapPin size={17} /></div><span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 800, color: P.accent }}>Target Performance</span></div><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.textSub, lineHeight: "1.75" }}>{highlightCopy("Indicizzazione per parole chiave legate a Strutture Sanitarie Riabilitative, Centri di Medicina dello Sport e Palestre d'élite.")}</p></div><div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: `${P.accentLight}12`, border: `1px solid ${P.accentLight}25` }}><div className="flex items-center gap-3"><div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: `${P.accentLight}20`, color: P.accentLight }}><IconMapPin size={17} /></div><span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 800, color: P.accentLight }}>Target Wellbeing</span></div><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.textSub, lineHeight: "1.75" }}>{highlightCopy("Indicizzazione per termini legati a Studi Nutrizionistici, Cliniche di Dimagrimento, SPA e Centri Benessere.")}</p></div></div>
          </div>
          <div className="lg:-mr-24 md:-mr-12 -mr-8 lg:-my-14 md:-my-14 lg:w-[calc(100%+6rem)] md:w-[calc(100%+3rem)] w-[calc(100%+2rem)]">
            <SideImageCard image={seoImg} roundLeft />
          </div>
        </div>
      </SectionShell>

      <SectionShell light={false}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-col gap-6 lg:order-2">
            <div className="flex flex-col gap-4"><h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3.3vw, 38px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.035em", lineHeight: "0.98" }}>6. Social Media</h3><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: `${P.textInv}60`, letterSpacing: "0.14em", textTransform: "uppercase" }}>Dettaglio Operativo</p><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: `${P.textInv}72`, lineHeight: "1.8" }}>{highlightCopy("Creazione ex-novo dei canali COSMED Performance & COSMED Well-being e gestione professionale dei profili Facebook, Instagram e LinkedIn.", true)}</p></div>
              <div className="rounded-2xl overflow-hidden" style={{ background: STEP_DARK_BG, border: `1px solid ${P.darkBorder}` }}>
              <div className="p-6 flex flex-col gap-5">
                <div className="rounded-xl p-4" style={{ background: `${P.accent}10`, border: `1px solid ${P.accent}24` }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Rotazione Contenuti (Proposta)</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { t: "Didattico", d: "Spiegazioni semplici su test, metriche e benefici concreti per creare autorevolezza." },
                      { t: "Prodotto", d: "Focus su strumenti, funzionalità e casi d'uso reali per chiarire il valore operativo." },
                      { t: "Fiducia", d: "Prove sociali, risultati, testimonianze e dietro le quinte per ridurre le barriere alla scelta." },
                    ].map((item) => (
                      <div key={item.t} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${P.darkBorder}` }}>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{item.t}</p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: `${P.textInv}70`, lineHeight: "1.65" }}>{highlightCopy(item.d, true)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { t: "1. Strategia e PED", d: "Definizione degli obiettivi e costruzione del PED: cosa pubblicare, per chi e con quale frequenza.", c: P.accent },
                    { t: "2. Produzione Media", d: "Sviluppo dei materiali creativi coerenti con l'identità visiva del brand.", c: P.accentLight },
                    { t: "3. Copywriting", d: "Scrittura di caption, headline e CTA chiari, utili e orientati all'azione.", c: P.accent },
                    { t: "4. Programmazione", d: "Pianificazione del calendario e pubblicazione nei giorni/orari migliori.", c: P.accentLight },
                    { t: "5. Analisi e Ottimizzazione", d: "Monitoraggio dei KPI principali per correggere il piano e migliorare i contenuti successivi.", c: P.accentLight },
                  ].map((item) => (
                    <div key={item.t} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${P.darkBorder}`, borderTop: `2px solid ${item.c}` }}>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: item.c, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>{item.t}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12.5px", color: `${P.textInv}68`, lineHeight: "1.7" }}>{highlightCopy(item.d, true)}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl p-4" style={{ background: `${P.accent}12`, border: `1px solid ${P.accent}28` }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>Obiettivo Finale</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12.5px", color: `${P.textInv}72`, lineHeight: "1.7" }}>{highlightCopy("Trasformare i social da semplice vetrina a canale che educa, crea fiducia e porta richieste concrete.", true)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:order-1 lg:-ml-24 md:-ml-12 -ml-8 lg:-my-14 md:-my-14 lg:w-[calc(100%+6rem)] md:w-[calc(100%+3rem)] w-[calc(100%+2rem)]">
            <SideImageCard image={socialMediaImg} roundLeft={false} bannerText="© COPYRIGHT DENANI S.R.L." />
          </div>
        </div>
      </SectionShell>

      <SectionShell light>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4"><h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3.3vw, 38px)", fontWeight: 900, color: P.text, letterSpacing: "-0.035em", lineHeight: "0.98" }}>7. Sponsorizzazioni</h3><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.textMuted, letterSpacing: "0.14em", textTransform: "uppercase" }}>Dettaglio Operativo</p><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textSub, lineHeight: "1.8" }}>{highlightCopy("Selezioniamo contenuti da promuovere in base alle nostre strategie e ai nostri obiettivi, allocando budget in modo efficiente per massimizzare il ritorno sull'investimento.")}</p></div>
            <div className="rounded-2xl p-5" style={{ background: `${P.accent}10`, border: `1px solid ${P.accent}24` }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>Come Funziona</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { t: "Obiettivo", d: "Decidiamo cosa vogliamo ottenere: visibilità, contatti o richieste dirette." },
                  { t: "Pubblico", d: "Mostriamo l'annuncio solo a chi può essere davvero interessato." },
                  { t: "Controllo", d: "Misuriamo i risultati e teniamo solo ciò che porta valore." },
                ].map((item) => (
                  <div key={item.t} className="rounded-lg p-3" style={{ background: P.surfaceAlt, border: `1px solid ${P.border}` }}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: P.textSub, lineHeight: "1.65" }}>{highlightCopy(item.d)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: P.surfaceAlt, border: `1px solid ${P.border}`, borderTop: `2px solid ${P.accent}` }}>
                <div className="flex items-center gap-3"><div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: `${P.accent}20`, color: P.accent }}><IconLinkedIn size={18} /></div><div><h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: P.text }}>LinkedIn</h4><span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", color: P.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>Area Performance</span></div></div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.textSub, lineHeight: "1.75" }}>{highlightCopy("Annunci rivolti a medici dello sport, fisioterapisti e preparatori.")}</p>
              </div>
              <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: P.surfaceAlt, border: `1px solid ${P.border}`, borderTop: `2px solid ${P.accentLight}` }}>
                <div className="flex items-center gap-3"><div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: `${P.accentLight}20`, color: P.accentLight }}><IconInstagram size={18} /></div><div><h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: P.text }}>Facebook e Instagram</h4><span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", color: P.accentLight, letterSpacing: "0.1em", textTransform: "uppercase" }}>Area Well-being</span></div></div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.textSub, lineHeight: "1.75" }}>{highlightCopy("Annunci rivolti a nutrizionisti, dietologi e centri benessere o SPA.")}</p>
              </div>
            </div>
            <div className="rounded-2xl px-6 py-5 flex items-start gap-4" style={{ background: `${P.accent}18`, border: `1px solid ${P.accent}35` }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0" style={{ background: `${P.accentLight}20`, color: P.accentLight }}><IconTrendUp size={19} /></div>
              <div><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "5px" }}>Conversione</p><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.textSub, lineHeight: "1.75" }}>{highlightCopy("Monitoriamo le performance degli annunci e ottimizziamo continuamente per migliorare il tasso di conversione.")}</p></div>
            </div>
          </div>
          <div className="lg:-mr-24 md:-mr-12 -mr-8 lg:-my-14 md:-my-14 lg:w-[calc(100%+6rem)] md:w-[calc(100%+3rem)] w-[calc(100%+2rem)]">
            <SideImageCard
              image={sponsorizzazioniImg}
              roundLeft
              bannerText="© COPYRIGHT DENANI S.R.L."
              projectLink={{ href: MEDILINE_PROJECT_URL, label: "Caso studio Mediline Torino" }}
            />
          </div>
        </div>
      </SectionShell>
    </section>
  );
}