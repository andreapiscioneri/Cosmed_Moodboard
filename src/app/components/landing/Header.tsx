import { useState, useEffect } from "react";
import cosmedLogo from "figma:asset/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";
import denaniLogo from "figma:asset/b711fde9faacb53317b265711a97126b5de19ae1.png";
import { P } from "./images";

const NAV = [
  { label: "La Proposta", href: "#proposta" },
  { label: "Performance", href: "#performance" },
  { label: "Wellness", href: "#wellness" },
  { label: "Strategia", href: "#strategia" },
  { label: "Pacchetti", href: "#pacchetti" },
  { label: "Contatti", href: "#contatti" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [darkSection, setDarkSection] = useState(true);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const perfEl = document.getElementById("performance");
      const heroEl = document.getElementById("hero");
      const y = window.scrollY + 40;
      if (heroEl && y < heroEl.offsetHeight) { setDarkSection(true); return; }
      if (perfEl) {
        const top = perfEl.offsetTop;
        const bot = top + perfEl.offsetHeight;
        if (y >= top && y < bot) { setDarkSection(true); return; }
      }
      const ctaEl = document.getElementById("contatti");
      if (ctaEl && y >= ctaEl.offsetTop) { setDarkSection(true); return; }
      setDarkSection(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = scrolled
    ? darkSection ? `${P.dark}F5` : `${P.surface}F5`
    : "transparent";

  const textCol = darkSection ? "rgba(238,244,246,0.65)" : P.textSub;
  const borderCol = darkSection ? P.darkBorder : `${P.border}80`;
  const logoFilter = darkSection ? "brightness(0) invert(1)" : "none";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-3"
      style={{
        background: bg,
        borderBottom: scrolled ? `1px solid ${borderCol}` : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo pair — più grandi */}
      <div className="flex items-center gap-3">
        <img src={cosmedLogo} alt="Cosmed"
          style={{ height: "36px", width: "auto", objectFit: "contain", filter: logoFilter, transition: "filter 0.4s" }} />
        <div style={{ width: "1px", height: "20px", background: darkSection ? "rgba(255,255,255,0.15)" : P.border }} />
        <img src={denaniLogo} alt="DeNani"
          style={{ height: "36px", width: "auto", objectFit: "contain", filter: logoFilter, transition: "filter 0.4s" }} />
      </div>

      {/* Nav desktop */}
      <nav className="hidden lg:flex items-center gap-6">
        {NAV.map(n => (
          <button key={n.href}
            onClick={() => { scrollToSection(n.href); setActiveHref(n.href); }}
            className="relative group transition-all duration-200"
            style={{
              fontFamily: "'Roboto Mono', monospace", fontSize: "9px", letterSpacing: "0.2em",
              textTransform: "uppercase", color: textCol,
              opacity: activeHref === n.href ? 1 : 0.75,
              border: "none", background: "none", cursor: "pointer",
              padding: "4px 2px",
            }}>
            {n.label}
            {/* Hover underline */}
            <span className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
              style={{ background: P.accent }} />
          </button>
        ))}
      </nav>

      {/* CTA */}
      <a href="mailto:support@denani.it"
        className="rounded-lg px-5 py-2 transition-all duration-200 hover:opacity-90 hover:scale-105"
        style={{
          background: P.accent,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px", fontWeight: 700,
          color: "#FFFFFF", letterSpacing: "0.02em",
          textDecoration: "none",
          transform: "scale(1)",
        }}>
        Richiedi Proposta →
      </a>
    </header>
  );
}
