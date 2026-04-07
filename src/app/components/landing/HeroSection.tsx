import { IMGS, P } from "./images";

function scrollToProposal() {
  const section = document.getElementById("proposta");
  if (!section) return;

  const headerOffset = 72;
  const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden flex flex-col" style={{ minHeight: "100vh", background: P.dark }}>
      <img src={IMGS.molecular} alt="" className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.28) saturate(0.62)", transform: "scale(1.02)" }} />
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, ${P.dark}E8 0%, ${P.dark}B8 50%, ${P.darkMid}D8 100%)`,
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(${P.accent}05 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${P.accent}, ${P.accentLight}, transparent)` }} />

      <div className="relative z-10 flex flex-col justify-between h-full px-8 md:px-14 lg:px-20 pt-28 pb-16 flex-1" style={{ minHeight: "100vh" }}>
        <div />

        {/* Main block */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
          <div className="flex items-center gap-3">
            <div style={{ width: "36px", height: "1px", background: `linear-gradient(90deg, ${P.accent}, transparent)` }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "rgba(74,159,175,0.95)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Proposta Marketing & Brand Identity
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(44px, 7vw, 100px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.05em", lineHeight: "0.9" }}>
              DeNani
            </h1>
            <div className="flex items-center gap-4">
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(18px, 3vw, 44px)", fontWeight: 300, color: P.accentLight, letterSpacing: "0.02em" }}>per</span>
              <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(44px, 7vw, 100px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                COSMED
              </h1>
            </div>
          </div>

          <div style={{ width: "80px", height: "1px", background: `linear-gradient(90deg, ${P.accent}, ${P.accentLight})` }} />

          <div className="flex flex-col gap-2">
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 2.2vw, 24px)", fontWeight: 700, color: `${P.textInv}88`, letterSpacing: "0.16em", textTransform: "uppercase" }}>
              The Metabolic Company
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.4vw, 16px)", color: `${P.textInv}78`, lineHeight: "1.75", maxWidth: "520px" }}>
              Una proposta integrata di sviluppo brand, sito web e social media per i due sub-brand Cosmed Performance e Cosmed Wellness. Strategia, identità visiva, SEO e lead generation su un orizzonte di 12 mesi.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Brand Strategy", "Sito Web", "Social Media", "SEO / GEO", "Lead Generation", "Sponsorizzazioni"].map(t => (
              <span key={t} style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600,
                color: P.accentLight, border: `1px solid ${P.accent}30`,
                background: `${P.accent}08`, borderRadius: "4px",
                padding: "4px 10px", letterSpacing: "0.06em",
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Scroll cue only */}
        <div className="flex justify-center md:justify-end">
          <button
            type="button"
            onClick={scrollToProposal}
            className="flex flex-col items-center gap-2 cursor-pointer"
            aria-label="Vai agli obiettivi strategici"
            style={{ background: "transparent", border: "none", padding: 0 }}
          >
            <span style={{ fontFamily: "'Montserrat', sans-serif", marginBottom: "10px", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.72)", letterSpacing: "0.1em" }}>SCOPRI</span>
            <div className="flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] animate-bounce"
              style={{ backdropFilter: "blur(8px)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
