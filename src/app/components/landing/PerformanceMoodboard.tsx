import { IMGS, P } from "./images";
import perfVO2    from "../../../assets/PERFORMANCE - VO2 Max Cosmed.jpg";
import perfData   from "../../../assets/PERFORMANCE - Data Flow.jpg";
import perfFisio  from "../../../assets/PERFORMANCE - Fisioterapia.jpg";

const palette = [
  { hex: "#0B0F14", name: "Anthracite" },
  { hex: "#1A2438", name: "Dark Navy" },
  { hex: "#0B6FFF", name: "Tech Blue" },
  { hex: "#3D8BFF", name: "Blue Light" },
  { hex: "#8BA4C0", name: "Slate" },
  { hex: "#EEF2FF", name: "Ice White" },
];

const keywords = [
  "Validazione Scientifica",
  "Precisione Metabolica",
  "Rigore Clinico",
  "Dati Reali",
  "Test VO₂ Max",
  "Calorimetria Indiretta",
  "Metabolismo a Riposo (REE)",
  "Protocollo Clinico",
];

const target = ["Fisiatri ~5.000", "Fisioterapisti ~70.000", "Medici Sport ~5.000", "Palestre ~40.000", "Lab. Fisiologia ~1.500"];

// 3 immagini locali + 1 Unsplash mantenuta in basso a dx
const mosaicImages = [
  { url: perfVO2,        label: "Test VO₂ Max",        tag: "REALISTICA · Clinica",   sub: "Misurazione ossigeno in esercizio",    filter: "brightness(0.58) saturate(0.7) hue-rotate(185deg)" },
  { url: perfData,       label: "Flusso Dati",         tag: "ASTRATTA · Data Flow",   sub: "Visualizzazione parametri metabolici", filter: "brightness(0.55) saturate(0.25) hue-rotate(210deg)" },
  { url: perfFisio,      label: "Fisioterapia",        tag: "REALISTICA · Clinica",   sub: "Riabilitazione professionale",         filter: "brightness(0.58) saturate(0.7) hue-rotate(185deg)" },
  { url: IMGS.molecular, label: "Struttura Molecolare", tag: "ASTRATTA · Molecolare", sub: "Rappresentazione biochimica",          filter: "brightness(0.58) saturate(0.7) hue-rotate(185deg)" },
];

export function PerformanceMoodboard() {
  return (
    <section id="performance" className="relative w-full overflow-hidden" style={{ background: "#0B0F14", minHeight: "100vh" }}>

      {/* Intro band */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-20 py-8"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-3">
            <div style={{ width: "2px", height: "40px", background: "linear-gradient(180deg, rgb(11, 111, 255), transparent)" }} />
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.62)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 01 / 02</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "rgb(11, 111, 255)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Sub-brand · Dark Tech</p>
          </div>
        </div>
        <span className="hidden md:block" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Cosmed Performance · Moodboard Visivo
        </span>
      </div>

      {/* Hero block */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "75vh" }}>

        {/* LEFT: Image mosaic */}
        <div className="relative lg:w-1/2 overflow-hidden" style={{ minHeight: "50vh" }}>
          <div className="absolute inset-0 z-10 pointer-events-none" style={{
            backgroundImage: `linear-gradient(${P.perfBlue}04 1px, transparent 1px), linear-gradient(90deg, ${P.perfBlue}04 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }} />
          <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block" style={{
            background: "linear-gradient(90deg, transparent 55%, #0B0F14 100%)",
          }} />

          <div className="grid h-full grid-cols-1 sm:grid-cols-2" style={{ gridTemplateRows: "repeat(2, minmax(220px, 1fr))" }}>
            {mosaicImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden" style={{ minHeight: "220px" }}>
                <img src={img.url} alt={img.label} className="w-full h-full object-cover"
                  style={{ filter: img.filter }} />
                <div className="absolute inset-0" style={{ background: `rgba(11,111,255,${i % 2 === 0 ? 0.05 : 0.03})` }} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Brand details */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 gap-7"
          style={{ background: "linear-gradient(135deg, #0B0F14 0%, #0D1520 100%)" }}>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.62)", letterSpacing: "0.12em", textTransform: "uppercase" }}>COSMED</span>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, color: "#EEF2FF", letterSpacing: "-0.05em", lineHeight: "0.88" }}>
              PERFORMANCE
            </h2>
            <div style={{ width: "56px", height: "2px", background: `linear-gradient(90deg, ${P.perfBlue}, transparent)`, marginTop: "6px" }} />
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.08em", marginTop: "4px" }}>
              "The Precision Lab"
            </p>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(238,242,255,0.72)", lineHeight: "1.85", maxWidth: "420px" }}>
            Brand identity dedicata al professionista clinico: fisiatri, fisioterapisti, medici dello sport. Il visual system comunica rigore scientifico, validazione clinica e precisione nella misurazione metabolica. Ogni elemento è progettato per instaurare fiducia in un contesto B2B altamente specializzato.
          </p>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Palette Cromatica</span>
            <div className="flex flex-wrap items-center gap-2">
              {palette.map(p => (
                <div key={p.hex} className="flex flex-col items-center gap-1">
                  <div style={{ width: "32px", height: "32px", borderRadius: "7px", background: p.hex, border: "1px solid rgba(255,255,255,0.09)" }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "6px", fontWeight: 600, color: "rgba(255,255,255,0.56)", textAlign: "center", maxWidth: "38px", lineHeight: "1.3" }}>{p.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl px-5 py-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "7px" }}>Tipografia</span>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 900, color: "#EEF2FF", letterSpacing: "-0.03em", lineHeight: "1" }}>Inter ExtraBold</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, color: P.perfBlue, letterSpacing: "0.08em", marginTop: "4px" }}>Montserrat · Dati & Label</p>
          </div>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Lessico Visivo</span>
            <div className="flex flex-wrap gap-2">
              {keywords.map(k => (
                <span key={k} style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: P.perfBlue,
                  border: `1px solid ${P.perfBlue}28`, background: `${P.perfBlue}08`,
                  borderRadius: "4px", padding: "4px 9px", letterSpacing: "0.03em",
                }}>{k}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Target Audience</span>
            <div className="flex flex-wrap gap-2">
              {target.map(t => (
                <span key={t} style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500,
                  color: "rgba(238,242,255,0.74)", border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.06)", borderRadius: "4px", padding: "4px 9px",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
