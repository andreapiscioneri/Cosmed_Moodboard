import { useState, useEffect } from "react";
import cosmedLogo from "../../../assets/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";
import denaniLogo from "../../../assets/b711fde9faacb53317b265711a97126b5de19ae1.png";
import { P } from "./images";

const NAV = [
  { label: "La Proposta", href: "#proposta" },
  { label: "Performance", href: "#performance" },
  { label: "Wellness", href: "#wellness" },
  { label: "Strategia", href: "#strategia" },
  { label: "Pacchetti", href: "#pacchetti" },
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
  const [activeHref, setActiveHref] = useState(NAV[0].href);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
        : 0;
      setScrollProgress(progress);

      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentHref = NAV[0].href;
      NAV.forEach((item) => {
        const id = item.href.replace("#", "");
        const section = document.getElementById(id);
        if (section && marker >= section.offsetTop - 80) {
          currentHref = item.href;
        }
      });
      setActiveHref(currentHref);

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

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = scrolled
    ? darkSection ? `${P.dark}F5` : `${P.surface}F5`
    : "transparent";

  const textCol = darkSection ? "rgba(238,244,246,0.92)" : P.textSub;
  const borderCol = darkSection ? P.darkBorder : `${P.border}80`;
  const logoFilter = darkSection ? "brightness(0) invert(1)" : "none";

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-1"
        style={{ background: darkSection ? "rgba(255,255,255,0.2)" : "rgba(10,34,44,0.12)" }}
      >
        <div
          className="h-full"
          style={{
            width: `${scrollProgress * 100}%`,
            background: `linear-gradient(90deg, ${P.accent}, ${P.accentLight})`,
            boxShadow: `0 0 10px ${P.accent}80`,
            transition: "width 0.12s linear",
          }}
        />
      </div>

      <header
        className="fixed top-0 left-0 right-0 z-50 flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 sm:px-6 md:px-10 py-2.5 lg:py-3 gap-2 lg:gap-0"
        style={{
          background: bg,
          borderBottom: scrolled ? `1px solid ${borderCol}` : "none",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start lg:gap-4">
          {/* Logo pair */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img src={cosmedLogo} alt="Cosmed"
              style={{ height: "34px", width: "auto", objectFit: "contain", filter: logoFilter, transition: "filter 0.4s" }} />
            <div style={{ width: "1px", height: "20px", background: darkSection ? "rgba(255,255,255,0.15)" : P.border }} />
            <img src={denaniLogo} alt="DeNani"
              style={{ height: "34px", width: "auto", objectFit: "contain", filter: logoFilter, transition: "filter 0.4s" }} />
          </div>

          {/* CTA mobile */}
          <a href="mailto:support@denani.it"
            className="lg:hidden rounded-lg px-3 py-1.5"
            style={{
              background: P.accent,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px", fontWeight: 700,
              color: "#FFFFFF", letterSpacing: "0.02em",
              textDecoration: "none",
            }}>
            Contattaci
          </a>
        </div>

        {/* Nav mobile */}
        <nav className="lg:hidden w-full overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="flex items-center gap-4 min-w-max pr-2">
            {NAV.map(n => {
              const isActive = activeHref === n.href;
              const isPacchetti = n.href === "#pacchetti";
              return (
                <button key={`m-${n.href}`}
                  onClick={() => { scrollToSection(n.href); setActiveHref(n.href); }}
                  className="relative transition-all duration-200"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: textCol,
                    opacity: isActive && !isPacchetti ? 1 : 0.82,
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    padding: "4px 1px 6px",
                    borderBottom: isActive && !isPacchetti
                      ? `2px solid ${darkSection ? P.accentLight : P.accent}`
                      : "2px solid transparent",
                  }}>
                  {n.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-6">
        {NAV.map(n => {
          const isActive = activeHref === n.href;
          const isPacchetti = n.href === "#pacchetti";
          return (
          <button key={n.href}
            onClick={() => { scrollToSection(n.href); setActiveHref(n.href); }}
            aria-current={isActive ? "page" : undefined}
            className="relative group transition-all duration-200"
            style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: textCol,
              opacity: isActive && !isPacchetti ? 1 : 0.78,
              border: "none", background: "none", cursor: "pointer",
              padding: "4px 2px 6px",
              borderBottom: isActive && !isPacchetti
                ? `2px solid ${darkSection ? P.accentLight : P.accent}`
                : "2px solid transparent",
            }}>
            {n.label}
            <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
              style={{ background: P.accent }} />
          </button>
        );})}
        </nav>

        {/* CTA desktop */}
        <a href="mailto:support@denani.it"
          className="hidden lg:inline-flex rounded-lg px-5 py-2 transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{
            background: P.accent,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "11px", fontWeight: 700,
            color: "#FFFFFF", letterSpacing: "0.02em",
            textDecoration: "none",
            transform: "scale(1)",
          }}>
          Contattaci
        </a>
      </header>
    </>
  );
}
