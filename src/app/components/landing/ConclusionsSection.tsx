import cosmedLogo from "../../../assets/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";
import denaniLogo from "../../../assets/LOGO DENANI - bianco.png";
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

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div style={{ width: "28px", height: "1px", background: P.accent }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>Conclusioni</span>
              </div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 54px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.04em", lineHeight: "0.92" }}>
                Grazie per<br /><span style={{ color: P.accentLight }}>l'attenzione</span>
              </h2>
            </div>

            <div className="flex flex-col gap-8 items-start">
              <blockquote
                style={{
                  maxWidth: "620px",
                  borderLeft: `2px solid ${P.accentLight}`,
                  paddingLeft: "16px",
                }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(19px, 2.2vw, 30px)", fontWeight: 500, color: `${P.textInv}92`, lineHeight: "1.62", margin: 0 }}>
                  "Ogni azione è pensata per costruire autorevolezza, generare fiducia e produrre risultati misurabili."
                </p>
              </blockquote>
              <a
                href="mailto:support@denani.it"
                data-pdf-exclude="true"
                className="rounded-xl px-8 py-3.5 flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: P.accent, fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: "#FFFFFF", textDecoration: "none", letterSpacing: "0.02em", transform: "scale(1)" }}
              >
                Contattaci
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer bar ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-10 lg:px-20 py-5 text-center sm:text-left"
        style={{ background: "#10232C", borderTop: `1px solid rgba(74,159,175,0.26)` }}>
        <div className="flex items-center justify-center gap-3">
          <img src={cosmedLogo} alt="Cosmed" style={{ height: "44px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.72 }} />
          <span style={{ color: "rgba(238,244,246,0.72)", fontSize: "11px", fontWeight: 700 }}>×</span>
          <img src={denaniLogo} alt="DeNani" style={{ height: "62px", objectFit: "contain", opacity: 0.72 }} />
        </div>
        <span className="max-w-[26rem]" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "rgba(238,244,246,0.84)", letterSpacing: "0.08em", textAlign: "center" }}>
          PROPOSTA RISERVATA · DENANI PER COSMED
        </span>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.08em", textAlign: "center" }}>
          THE METABOLIC COMPANY
        </span>
      </div>
    </>
  );
}
