import cosmedLogo from "../../../assets/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";
import denaniLogo from "../../../assets/b711fde9faacb53317b265711a97126b5de19ae1.png";
import { T } from "./tokens";
import type { ReactNode } from "react";

interface SlideShellProps {
  slideNum: number;
  slideTitle: string;
  dark?: boolean;         // use charcoal bg + inverse text
  bg?: string;            // override bg colour
  children: ReactNode;
  noPadding?: boolean;
}

export function SlideShell({ slideNum, slideTitle, dark = false, bg, children, noPadding = false }: SlideShellProps) {
  const headerBg = dark ? "rgba(28,31,38,0.85)" : "rgba(242,239,233,0.9)";
  const headerBorder = dark ? T.borderDark : T.border;
  const textCol = dark ? T.textInverse : T.text;
  const subCol = dark ? "rgba(242,239,233,0.45)" : T.textMuted;
  const logoFilter = dark ? "brightness(0) invert(1)" : "none";
  const denaniFilter = dark ? "brightness(0) invert(1)" : "none";

  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden relative"
      style={{ background: bg ?? (dark ? T.bgDark : T.bg) }}
    >
      {/* ── TOP ACCENT LINE ── */}
      <div
        className="absolute top-0 left-0 right-0 z-20"
        style={{ height: "2px", background: `linear-gradient(90deg, ${T.gold}, ${T.slate}, ${T.gold})` }}
      />

      {/* ── HEADER BAR ── */}
      <div
        className="relative z-20 flex items-center justify-between px-10 py-3 shrink-0"
        style={{
          background: headerBg,
          borderBottom: `1px solid ${headerBorder}`,
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Left: Cosmed logo */}
        <div className="flex items-center gap-3">
          <img
            src={cosmedLogo}
            alt="Cosmed"
            style={{ height: "28px", width: "auto", objectFit: "contain", filter: logoFilter }}
          />
          <div style={{ width: "1px", height: "18px", background: dark ? "rgba(242,239,233,0.15)" : T.border }} />
          <div className="flex flex-col" style={{ gap: "1px" }}>
            <span style={{ fontFamily: T.mono, fontSize: "8px", color: T.gold, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              The Metabolic Company
            </span>
          </div>
        </div>

        {/* Center: slide title */}
        <span style={{ fontFamily: T.mono, fontSize: "9px", color: subCol, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          {String(slideNum).padStart(2, "0")} — {slideTitle}
        </span>

        {/* Right: DeNani logo */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end" style={{ gap: "1px" }}>
            <span style={{ fontFamily: T.mono, fontSize: "8px", color: subCol, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Partner Brand
            </span>
          </div>
          <div style={{ width: "1px", height: "18px", background: dark ? "rgba(242,239,233,0.15)" : T.border }} />
          <img
            src={denaniLogo}
            alt="DeNani"
            style={{ height: "28px", width: "auto", objectFit: "contain", filter: denaniFilter }}
          />
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className={`flex-1 overflow-hidden ${noPadding ? "" : "px-10 py-6"}`}>
        {children}
      </div>

      {/* ── FOOTER BAR ── */}
      <div
        className="relative z-20 flex items-center justify-between px-10 py-2 shrink-0"
        style={{ borderTop: `1px solid ${headerBorder}`, background: headerBg, backdropFilter: "blur(12px)" }}
      >
        <span style={{ fontFamily: T.mono, fontSize: "7px", color: subCol, letterSpacing: "0.2em" }}>
          PROPOSTA RISERVATA · APRILE 2026
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "56px", height: "2px", borderRadius: "1px", background: dark ? "rgba(242,239,233,0.1)" : T.border, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(slideNum / 10) * 100}%`, background: T.gold, borderRadius: "1px" }} />
          </div>
          <span style={{ fontFamily: T.mono, fontSize: "7px", color: subCol, letterSpacing: "0.2em" }}>
            {String(slideNum).padStart(2, "0")} / 10
          </span>
        </div>
      </div>
    </div>
  );
}
