import cosmedLogo from "../../../assets/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";
import { P } from "./images";

export function BridgeBefore() {
  return (
    <div className="relative overflow-hidden flex items-center justify-center py-16 md:py-20 px-8"
      style={{ background: `linear-gradient(180deg, ${P.dark} 0%, #1A2D3A 100%)` }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(${P.accent}05 1px, transparent 1px), linear-gradient(90deg, ${P.accent}05 1px, transparent 1px)`,
        backgroundSize: "56px 56px",
      }} />
      <div className="relative z-10 flex flex-col items-center gap-5 text-center max-w-2xl">
        <div style={{ width: "1px", height: "40px", background: `linear-gradient(180deg, transparent, ${P.accent}60)` }} />
        <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: `${P.accent}80`, letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Un solo brand · Due identità
        </span>
        <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.04em", lineHeight: "0.95" }}>
          I Due Concept Visivi
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: `${P.textInv}45`, lineHeight: "1.8" }}>
          Due sub-brand distinti, due estetiche precise, un unico sistema di brand coerente.<br />
          <strong style={{ color: `${P.textInv}70`, fontWeight: 600 }}>Performance</strong> utilizza un linguaggio tecnico e scientifico, rivolto al professionista clinico.<br />
          <strong style={{ color: `${P.textInv}70`, fontWeight: 600 }}>Wellness</strong> ha un approccio legato alla cura di sé, al mantenersi in forma, al nutrirsi correttamente e a uno stile di vita salutare.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <div className="flex items-center gap-2 rounded-lg px-4 py-2" style={{ border: `1px solid ${P.perfBlue}30`, background: `${P.perfBlue}08` }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: P.perfBlue }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: P.perfBlue, letterSpacing: "0.18em", textTransform: "uppercase" }}>Performance · Dark Tech</span>
          </div>
          <div style={{ width: "1px", height: "14px", background: `${P.textInv}15` }} className="hidden sm:block" />
          <div className="flex items-center gap-2 rounded-lg px-4 py-2" style={{ border: `1px solid ${P.wellTeal}30`, background: `${P.wellTeal}08` }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: P.wellTeal }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: P.wellTeal, letterSpacing: "0.18em", textTransform: "uppercase" }}>Wellness · Healthy Lifestyle</span>
          </div>
        </div>
        <div style={{ width: "1px", height: "40px", background: `linear-gradient(180deg, ${P.accent}60, transparent)` }} />
      </div>
    </div>
  );
}

export function BridgeAfter() {
  return (
    <div className="relative overflow-hidden flex items-center justify-center py-16 md:py-20 px-8"
      style={{ background: `linear-gradient(180deg, #EDF4F2 0%, ${P.bg} 100%)` }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(${P.accent}07 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }} />
      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        <div style={{ width: "1px", height: "40px", background: `linear-gradient(180deg, transparent, ${P.wellTeal}40)` }} />
        <div className="flex items-center gap-3">
          <img src={cosmedLogo} alt="Cosmed" style={{ height: "20px", objectFit: "contain", opacity: 0.3 }} />
          <div style={{ width: "40px", height: "1px", background: `linear-gradient(90deg, ${P.accent}, ${P.accentLight})` }} />
          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: P.textMuted, letterSpacing: "0.3em", textTransform: "uppercase" }}>The Metabolic Company</span>
        </div>
        <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: P.text, letterSpacing: "-0.03em" }}>
          Una Piattaforma. Una Strategia.
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textSub, lineHeight: "1.75", maxWidth: "480px" }}>
          Entrambi i sub-brand convergono in un ecosistema Odoo integrato, una roadmap operativa di 12 mesi e una strategia SEO e Social Media progettata per generare contatti qualificati e ridurre la dipendenza dai rivenditori.
        </p>
        <div style={{ width: "1px", height: "40px", background: `linear-gradient(180deg, ${P.accent}50, transparent)` }} />
      </div>
    </div>
  );
}
