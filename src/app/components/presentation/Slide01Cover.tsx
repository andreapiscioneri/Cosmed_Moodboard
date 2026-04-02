import cosmedLogo from "../../../assets/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";
import denaniLogo from "../../../assets/b711fde9faacb53317b265711a97126b5de19ae1.png";
import { T, IMGS } from "./tokens";

export function Slide01Cover() {
  return (
    <div className="w-full h-full relative overflow-hidden flex" style={{ background: T.bgDark }}>
      {/* Background image */}
      <img src={IMGS.cover} alt="" className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.15) saturate(0.4)", transform: "scale(1.04)" }} />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(28,31,38,0.97) 0%, rgba(28,31,38,0.82) 50%, rgba(42,35,24,0.92) 100%)" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(196,169,125,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(196,169,125,0.04) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0" style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${T.gold}, ${T.slate}, ${T.gold}, transparent)` }} />

      {/* Content layout */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-14 py-10">

        {/* Top logos row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "10px 16px", backdropFilter: "blur(12px)" }}>
            <img src={cosmedLogo} alt="Cosmed" style={{ height: "36px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontFamily: T.mono, fontSize: "9px", color: "rgba(242,239,233,0.3)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
              in partnership con
            </span>
            <div className="flex items-center gap-3"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "10px 16px", backdropFilter: "blur(12px)" }}>
              <img src={denaniLogo} alt="DeNani" style={{ height: "36px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
            </div>
          </div>
        </div>

        {/* Main title block */}
        <div className="flex flex-col gap-7">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div style={{ width: "40px", height: "1px", background: `linear-gradient(90deg, ${T.gold}, transparent)` }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: T.gold, letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Proposta Commerciale Riservata
            </span>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 style={{ fontFamily: T.sans, fontSize: "clamp(36px, 5.5vw, 80px)", fontWeight: 900, color: T.textInverse, letterSpacing: "-0.045em", lineHeight: "0.92" }}>
              DeNani
            </h1>
            <div className="flex items-center gap-4">
              <span style={{ fontFamily: T.sans, fontSize: "clamp(18px, 2.6vw, 38px)", fontWeight: 300, color: T.gold, letterSpacing: "-0.01em" }}>per</span>
              <h1 style={{ fontFamily: T.sans, fontSize: "clamp(36px, 5.5vw, 80px)", fontWeight: 900, color: T.textInverse, letterSpacing: "-0.045em", lineHeight: "0.92" }}>
                COSMED
              </h1>
            </div>
          </div>

          {/* Claim */}
          <div className="flex flex-col gap-3">
            <div style={{ width: "80px", height: "1px", background: `linear-gradient(90deg, ${T.gold}, ${T.slate})` }} />
            <p style={{ fontFamily: T.sans, fontSize: "clamp(16px, 2.2vw, 28px)", fontWeight: 300, color: "rgba(242,239,233,0.55)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              The Metabolic Company
            </p>
          </div>

          {/* Subtitle + meta */}
          <div className="flex flex-col gap-3">
            <p style={{ fontFamily: T.sans, fontSize: "clamp(14px, 1.6vw, 20px)", fontWeight: 500, color: "rgba(242,239,233,0.75)", letterSpacing: "0.02em" }}>
              Proposta Marketing & Brand Identity
            </p>
            <div className="flex flex-wrap gap-2">
              {["Brand Strategy", "Web Development", "SEO/GEO", "Social Media", "Lead Generation", "Sponsorizzazioni"].map(t => (
                <span key={t} style={{
                  fontFamily: T.mono, fontSize: "8px", color: T.gold,
                  border: `1px solid rgba(196,169,125,0.2)`, background: "rgba(196,169,125,0.07)",
                  borderRadius: "4px", padding: "3px 8px", letterSpacing: "0.1em",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: date + confidential */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: T.mono, fontSize: "9px", color: "rgba(242,239,233,0.2)", letterSpacing: "0.2em" }}>DOCUMENTO RISERVATO</span>
          </div>
          <div style={{ width: "90px", height: "1px", background: `linear-gradient(90deg, transparent, ${T.gold}50)` }} />
        </div>
      </div>
    </div>
  );
}
