import { PERFORMANCE_SHOWCASE, P } from "./images";
import odooLogo from "../../../assets/logo odoo.svg";

export function PerformanceWebMockup() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#0D1520", paddingBottom: "80px" }}>

      {/* Slide header */}
      <div className="flex items-center justify-between px-6 md:px-20 py-8"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-3">
          <div style={{ width: "2px", height: "40px", background: `linear-gradient(180deg, ${P.perfBlue}, transparent)` }} />
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 01 / 02</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.08em", textTransform: "uppercase" }}>Mockup Sito Web · Cosmed Performance</p>
          </div>
        </div>
        <span className="hidden md:block" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Esempio Applicazione Visiva — Website
        </span>
      </div>

      {/* Container */}
      <div className="px-6 md:px-20 pt-12 pb-4">

        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <div style={{ width: "28px", height: "1px", background: P.perfBlue }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Mockup Homepage — Proposta Visiva
          </span>
        </div>

        {/* Mockup row: browser + phone */}
        <div className="flex flex-col xl:flex-row gap-10 items-start" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Browser frame */}
        <div className="flex-1 min-w-0 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}>

          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#1C2535", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex gap-2">
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FEBC2E" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840" }} />
            </div>
            <div className="flex items-center gap-2 flex-1 max-w-md mx-auto rounded-md px-3 py-1.5" style={{ background: "#111A24", border: "1px solid rgba(255,255,255,0.06)" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}>cosmed.com/performance</span>
            </div>
          </div>

          {/* Website content */}
          <div style={{ background: "#0B0F14" }}>

            {/* Nav bar */}
            <div className="flex items-center justify-between px-8 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 2 }}>
              <div className="flex items-center gap-2">
                <div style={{ width: "4px", height: "18px", background: P.perfBlue, borderRadius: "2px" }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 900, color: "#EEF2FF", letterSpacing: "0.06em" }}>COSMED</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.12em", textTransform: "uppercase", marginLeft: "4px" }}>PERFORMANCE</span>
              </div>
              <div className="hidden md:flex items-center gap-7">
                {["Performance", "Clinica", "VO₂ Max", "Ricerca"].map(item => (
                  <span key={item} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, color: "rgba(238,242,255,0.6)", letterSpacing: "0.04em" }}>{item}</span>
                ))}
              </div>
              <div className="rounded px-4 py-2 hidden md:block" style={{ background: P.perfBlue }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#fff", letterSpacing: "0.06em" }}>Contatti</span>
              </div>
            </div>

            {/* HERO — immagine dominante full-width, testo in overlay */}
            <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
              <img src={PERFORMANCE_SHOWCASE.hero} alt="Atleta in preparazione" className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "grayscale(1) contrast(1.15) brightness(0.88)" }} />
              {/* Grid overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(${P.perfBlue}07 1px, transparent 1px), linear-gradient(90deg, ${P.perfBlue}07 1px, transparent 1px)`,
                backgroundSize: "44px 44px",
              }} />
              {/* Bottom-left fade so text is readable */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(11,15,20,0.68) 0%, rgba(11,15,20,0.22) 50%, rgba(11,15,20,0.05) 100%)" }} />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0B0F14, transparent)" }} />

              {/* Copy overlay — left aligned, large */}
              <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-16 py-16" style={{ maxWidth: "640px" }}>
                <div className="flex items-center gap-2 mb-6">
                  <div style={{ width: "28px", height: "1px", background: P.perfBlue }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Precision Lab</span>
                </div>
                <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 5.5vw, 72px)", fontWeight: 900, color: "#EEF2FF", letterSpacing: "-0.05em", lineHeight: "0.88", marginBottom: "24px" }}>
                  MISURA.<br />ANALIZZA.<br /><span style={{ color: P.perfBlue }}>OTTIMIZZA.</span>
                </h1>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(238,242,255,0.72)", lineHeight: "1.85", maxWidth: "400px", marginBottom: "32px" }}>
                  La piattaforma clinica per la misurazione metabolica avanzata. Strumenti validati scientificamente per fisiatri, medici dello sport e fisioterapisti.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <div className="rounded-lg px-6 py-3" style={{ background: P.perfBlue, display: "inline-flex" }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.04em" }}>Scopri la piattaforma →</span>
                  </div>
                  <div className="rounded-lg px-6 py-3" style={{ border: `1px solid rgba(11,111,255,0.4)`, display: "inline-flex" }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, color: "rgba(238,242,255,0.8)", letterSpacing: "0.04em" }}>Richiedi Demo</span>
                  </div>
                </div>
                {/* KPI */}
                <div className="flex gap-10 mt-10 flex-wrap">
                  {[["99%", "Accuratezza"], ["+40k", "Professionisti"], ["ISO", "Certificato"]].map(([v, l]) => (
                    <div key={l} className="flex flex-col">
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 900, color: P.perfBlue, letterSpacing: "-0.03em" }}>{v}</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, color: "rgba(238,242,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image mosaic — 3 immagini grandi con copy overlay */}
            <div className="grid grid-cols-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              {[
                { img: PERFORMANCE_SHOWCASE.tiles[0], label: "Atletica", copy: "Preparazione e carico di lavoro", tag: "REALISTICA · ATLETI" },
                { img: PERFORMANCE_SHOWCASE.tiles[1], label: "Preparatore", copy: "Allenamento guidato e performance", tag: "REALISTICA · TRAINER" },
                { img: PERFORMANCE_SHOWCASE.tiles[2], label: "Fisioterapia", copy: "Recupero e prevenzione in campo", tag: "REALISTICA · PHYSIO" },
              ].map(({ img, copy, tag }, i) => (
                <div key={i} className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img src={img} alt="" className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.62) saturate(0.6) hue-rotate(195deg)", transform: "scale(1.05)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,15,20,0.78) 0%, rgba(11,15,20,0.1) 100%)" }} />
                  {/* Copy */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>{tag}</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: "#EEF2FF", letterSpacing: "-0.01em", lineHeight: "1.2" }}>{copy}</span>
                  </div>
                  {/* Separator */}
                  {i < 2 && <div className="absolute top-0 right-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.04)" }} />}
                </div>
              ))}
            </div>

            {/* Feature bar */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0A0D12" }}>
              {[
                { title: "VO₂ Max Testing", sub: "Precisione al 99%", desc: "Protocolli certificati per la valutazione aerobica massimale." },
                { title: "Calorimetria Indiretta", sub: "REE Clinico", desc: "Standard gold per la misurazione del metabolismo basale." },
                { title: "Validazione Scientifica", sub: "Dati Reali", desc: "Report certificati integrabili nella documentazione medica." },
              ].map((f, i) => (
                <div key={i} className="flex flex-col gap-2 px-7 py-6"
                  style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 800, color: "#EEF2FF" }}>{f.title}</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: P.perfBlue, border: `1px solid ${P.perfBlue}30`, borderRadius: "3px", padding: "2px 5px", letterSpacing: "0.04em" }}>{f.sub}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "rgba(238,242,255,0.45)", lineHeight: "1.7" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>{/* end mockup row */}

        {/* Caption */}
        <div className="flex items-center justify-between mt-4" style={{ maxWidth: "1100px", margin: "16px auto 0" }}>
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={P.perfBlue} strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
              Mockup illustrativo — Homepage Cosmed Performance
            </span>
          </div>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: "rgba(11,111,255,0.5)", letterSpacing: "0.06em" }}>
            Spunti visivi da @cosmedigers
          </span>
        </div>

        {/* Design specs panel */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8" style={{ maxWidth: "1100px", margin: "32px auto 0" }}>
          {[
            { label: "Tipografia Heading", value: "Inter ExtraBold", sub: "Peso 900 · Tracking −0.05em" },
            { label: "Tipografia Label", value: "Montserrat Bold", sub: "Peso 700 · All Caps · Tracking +0.12em" },
            { label: "Palette Primaria", value: "#0B6FFF Tech Blue", sub: "#0B0F14 Anthracite · #EEF2FF Ice White" },
            { label: "Strategia Visiva", value: "Immagine dominante", sub: "Copy in overlay · KPI in evidenza · CTA primario in blu" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="flex flex-col gap-2 px-5 py-4 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{label}</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.01em" }}>{value}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "rgba(238,242,255,0.45)", lineHeight: "1.5" }}>{sub}</span>
            </div>
          ))}
          {/* Framework card — Odoo */}
          <div className="flex flex-col gap-2 px-5 py-4 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Framework</span>
            <div className="flex items-center gap-2">
              {/* Odoo logo inline */}
              <img src={odooLogo} alt="Odoo" style={{ height: "20px", width: "auto", objectFit: "contain", borderRadius: "3px" }} />
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "rgba(238,242,255,0.45)", lineHeight: "1.5" }}>CMS · CRM · Website · Full integration</span>
          </div>
        </div>

      </div>
    </section>
  );
}
