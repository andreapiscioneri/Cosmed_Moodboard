import cosmedLogo from "../../../assets/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";
import denaniLogo from "../../../assets/b711fde9faacb53317b265711a97126b5de19ae1.png";
import { IMGS, P } from "./images";

export function ConclusionsSection() {
  return (
    <>
      {/* ── Sezione conclusione e ringraziamenti ── */}
      <section id="contatti" className="relative w-full py-20 md:py-28 px-6 md:px-10 lg:px-20 overflow-hidden" style={{ background: P.dark }}>
        <img src={IMGS.sand} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ filter: "brightness(0.05) saturate(0)", transform: "scale(1.04)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 70% 55% at 30% 60%, ${P.accent}06 0%, transparent 65%)` }} />
        <div className="absolute top-0 left-0 right-0" style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${P.accent}, ${P.accentLight}, transparent)` }} />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16">

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div style={{ width: "28px", height: "1px", background: P.accent }} />
              <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: P.accent, letterSpacing: "0.28em", textTransform: "uppercase" }}>Conclusioni</span>
            </div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 54px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.04em", lineHeight: "0.92" }}>
              Grazie per<br /><span style={{ color: P.accentLight }}>l'attenzione</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: message */}
            <div className="lg:w-1/2 flex flex-col gap-7">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: `${P.textInv}55`, lineHeight: "1.85", maxWidth: "500px" }}>
                Questa proposta rappresenta un percorso concreto per trasformare la superiorità tecnica di Cosmed in vantaggio commerciale misurabile. Brand, sito web, social media e lead generation non sono costi separati — sono un sistema integrato che lavora per voi ogni giorno.
              </p>

              {/* Quote */}
              <div className="rounded-2xl px-6 py-5" style={{ background: `${P.accent}08`, border: `1px solid ${P.accent}18`, borderLeft: `3px solid ${P.accent}` }}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "15px", fontStyle: "italic", fontWeight: 400, color: `${P.textInv}55`, lineHeight: "1.7" }}>
                  "Non proponiamo volume. Proponiamo valore. Ogni azione è pensata per costruire autorevolezza, generare fiducia e produrre risultati misurabili."
                </p>
                <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: P.accentLight, letterSpacing: "0.15em", marginTop: "10px" }}>— DeNani per COSMED</p>
              </div>

              {/* Logos */}
              <div className="flex items-center gap-5 rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${P.darkBorder}` }}>
                <img src={cosmedLogo} alt="Cosmed" style={{ height: "36px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
                <div style={{ flex: 1, height: "1px", background: `${P.accent}25` }} />
                <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: `${P.textInv}20`, letterSpacing: "0.2em" }}>×</span>
                <div style={{ flex: 1, height: "1px", background: `${P.accent}25` }} />
                <img src={denaniLogo} alt="DeNani" style={{ height: "36px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
              </div>
            </div>

            {/* Right: CTA + contact */}
            <div className="lg:w-1/2 flex flex-col gap-6 justify-center">
              {/* Key numbers */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: "~158k", l: "Professionisti\nindirizzabili" },
                  { v: "12 mesi", l: "Orizzonte\nprogetto" },
                  { v: "2 brand", l: "Sub-brand\ndedicati" },
                ].map(s => (
                  <div key={s.v} className="rounded-2xl p-4 flex flex-col items-center text-center"
                    style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${P.darkBorder}` }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, color: P.accentLight, letterSpacing: "-0.04em", lineHeight: "1" }}>{s.v}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: `${P.textInv}35`, lineHeight: "1.5", marginTop: "6px", whiteSpace: "pre-line" }}>{s.l}</span>
                  </div>
                ))}
              </div>

              {/* Contact card + CTA */}
              <div className="flex flex-col gap-4 rounded-2xl p-6"
                style={{ background: `${P.accent}08`, border: `1px solid ${P.accent}20` }}>
                <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: `${P.accentLight}80`, letterSpacing: "0.25em", textTransform: "uppercase" }}>Contatti DeNani</p>
                {[
                  { l: "Email", v: "support@denani.it" },
                  { l: "Website", v: "www.denani.it" },
                  { l: "LinkedIn", v: "/company/denani" },
                ].map(c => (
                  <div key={c.l} className="flex items-center justify-between py-2"
                    style={{ borderBottom: `1px solid ${P.darkBorder}` }}>
                    <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: `${P.textInv}30`, letterSpacing: "0.18em", textTransform: "uppercase" }}>{c.l}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, color: `${P.textInv}80` }}>{c.v}</span>
                  </div>
                ))}
                <a href="mailto:support@denani.it"
                  className="mt-1 rounded-xl py-3.5 flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ background: P.accent, fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: "#FFFFFF", textDecoration: "none", letterSpacing: "0.02em", transform: "scale(1)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Contattaci — support@denani.it
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer bar ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 md:px-10 lg:px-20 py-4"
        style={{ background: "#0D1A20", borderTop: `1px solid ${P.darkBorder}` }}>
        <div className="flex items-center gap-3">
          <img src={cosmedLogo} alt="Cosmed" style={{ height: "18px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.25 }} />
          <span style={{ color: `${P.textInv}15`, fontSize: "10px" }}>×</span>
          <img src={denaniLogo} alt="DeNani" style={{ height: "18px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.25 }} />
        </div>
        <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: `${P.textInv}18`, letterSpacing: "0.18em", textAlign: "center" }}>
          PROPOSTA RISERVATA · APRILE 2026 · DENANI PER COSMED
        </span>
        <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: `${P.textInv}18`, letterSpacing: "0.15em" }}>
          THE METABOLIC COMPANY
        </span>
      </div>
    </>
  );
}
