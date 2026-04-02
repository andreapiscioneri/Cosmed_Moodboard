import { IMGS, P } from "./images";

const palette = [
  { hex: "#0E6B6B", name: "Deep Teal" },
  { hex: "#4A9090", name: "Teal Light" },
  { hex: "#B8922E", name: "Satin Gold" },
  { hex: "#D9C9A8", name: "Champagne" },
  { hex: "#F4F7F5", name: "Oxygen White" },
  { hex: "#0A1F1F", name: "Deep Forest" },
];

const keywords = [
  "Equilibrio Vitale",
  "Healthy Lifestyle",
  "Nutrizione Clinica",
  "Attività Fisica",
  "Longevity",
  "Wellbeing",
  "Metabolic Flow",
  "Stile di Vita Sano",
];

const target = ["Nutrizionisti ~15.000", "Dietologi ~6.000", "Spa & Centri ~4.000", "Centri Estetici ~8.000", "Endocrinologi ~4.000"];

// Immagini healthy lifestyle
const mosaicImages = [
  { url: IMGS.food,     label: "Nutrizione",        tag: "Alimentazione Sana",     sub: "Cibo sano e bilanciato" },
  { url: IMGS.running,  label: "Attività Fisica",   tag: "Sport all'Aperto",       sub: "Running e fitness outdoor" },
  { url: IMGS.yoga,     label: "Mindfulness",       tag: "Meditazione & Yoga",     sub: "Equilibrio mente-corpo" },
  { url: IMGS.wellness, label: "Benessere",         tag: "Wellness Premium",       sub: "Cura di sé e longevità" },
];

export function WellnessMoodboard() {
  return (
    <section id="wellness" className="relative w-full overflow-hidden" style={{ background: "#F4F7F5" }}>

      {/* Intro band */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-20 py-8"
        style={{ borderBottom: `1px solid ${P.border}` }}>
        <div className="flex items-center gap-3">
          <div style={{ width: "2px", height: "40px", background: `linear-gradient(180deg, ${P.wellTeal}, transparent)` }} />
          <div>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: P.textMuted, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 02 / 02</p>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: P.wellTeal, letterSpacing: "0.22em", textTransform: "uppercase" }}>Sub-brand · Healthy Lifestyle</p>
          </div>
        </div>
        <span className="hidden md:block" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: P.textMuted, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Cosmed Wellness · Moodboard Visivo
        </span>
      </div>

      {/* Hero block */}
      <div className="flex flex-col-reverse lg:flex-row" style={{ minHeight: "75vh" }}>

        {/* LEFT: Brand details */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 gap-7"
          style={{ background: "linear-gradient(135deg, #F4F7F5 0%, #EDE9E2 100%)" }}>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "10px", color: P.textMuted, letterSpacing: "0.3em", textTransform: "uppercase" }}>COSMED</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 700, fontStyle: "italic", color: "#0A1F1F", letterSpacing: "-0.02em", lineHeight: "0.92" }}>
              Wellness
            </h2>
            <div style={{ width: "56px", height: "2px", background: `linear-gradient(90deg, ${P.wellGold}, transparent)`, marginTop: "6px" }} />
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "12px", color: P.wellGold, letterSpacing: "0.1em", fontStyle: "italic", marginTop: "4px" }}>
              "The Metabolic Flow"
            </p>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#4A6170", lineHeight: "1.85", maxWidth: "420px" }}>
            Brand identity dedicata al professionista della nutrizione e del benessere. Un approccio legato alla cura di sé, al mantenersi in forma, al nutrirsi correttamente e a uno stile di vita sano. Il visual system comunica vitalità, equilibrio e longevità attraverso un'estetica luminosa e naturale.
          </p>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: P.textMuted, letterSpacing: "0.25em", textTransform: "uppercase" }}>Palette Cromatica</span>
            <div className="flex flex-wrap items-center gap-2">
              {palette.map(pp => (
                <div key={pp.hex} className="flex flex-col items-center gap-1">
                  <div style={{ width: "32px", height: "32px", borderRadius: "7px", background: pp.hex, border: "1px solid rgba(0,0,0,0.08)" }} />
                  <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "6px", color: P.textMuted, textAlign: "center", maxWidth: "40px", lineHeight: "1.3" }}>{pp.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl px-5 py-4" style={{ background: "#FFFFFF", border: `1px solid ${P.border}` }}>
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: P.textMuted, letterSpacing: "0.25em", textTransform: "uppercase", display: "block", marginBottom: "7px" }}>Tipografia</span>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 700, fontStyle: "italic", color: "#0A1F1F", lineHeight: "1" }}>Playfair Display Italic</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, color: P.wellTeal, letterSpacing: "0.18em", marginTop: "5px", textTransform: "uppercase" }}>Montserrat · Corpo & UI</p>
          </div>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: P.textMuted, letterSpacing: "0.25em", textTransform: "uppercase" }}>Lessico Visivo</span>
            <div className="flex flex-wrap gap-2">
              {keywords.map(k => (
                <span key={k} style={{
                  fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: P.wellTeal,
                  border: `1px solid ${P.wellTeal}25`, background: `${P.wellTeal}06`,
                  borderRadius: "4px", padding: "4px 9px", letterSpacing: "0.05em",
                }}>{k}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "8px", color: P.textMuted, letterSpacing: "0.25em", textTransform: "uppercase" }}>Target Audience</span>
            <div className="flex flex-wrap gap-2">
              {target.map(t => (
                <span key={t} style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500,
                  color: P.textSub, border: `1px solid ${P.border}`,
                  background: "#FFFFFF", borderRadius: "4px", padding: "4px 9px",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Image mosaic */}
        <div className="relative lg:w-1/2 overflow-hidden" style={{ minHeight: "50vh" }}>
          <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block" style={{
            background: "linear-gradient(90deg, #F4F7F5 0%, transparent 15%)",
          }} />

          <div className="grid h-full" style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
            {mosaicImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden" style={{ minHeight: "220px" }}>
                <img src={img.url} alt={img.label} className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.72) saturate(0.8)" }} />
                <div className="absolute inset-0" style={{ background: `rgba(14,107,107,${i % 2 === 0 ? 0.06 : 0.04})` }} />
                <div className="absolute bottom-0 left-0 right-0 p-3 z-10"
                  style={{ background: "linear-gradient(180deg, transparent, rgba(10,31,31,0.75))" }}>
                  <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "7px", color: "#4A9090", letterSpacing: "0.15em", display: "block" }}>{img.tag}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "rgba(244,247,245,0.85)", fontWeight: 600 }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width feature band */}
      <div className="relative overflow-hidden" style={{ height: "300px" }}>
        <img src={IMGS.running} alt="" className="w-full h-full object-cover"
          style={{ filter: "brightness(0.55) saturate(0.7)", transform: "scale(1.04)", objectPosition: "center 35%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #F4F7F5 0%, transparent 20%, transparent 80%, #F4F7F5 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #F4F7F5 0%, transparent 18%, transparent 82%, #F4F7F5 100%)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(14,107,107,0.07)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(14px, 2.5vw, 32px)", fontWeight: 700, fontStyle: "italic", color: "rgba(10,31,31,0.07)", letterSpacing: "0.04em" }}>
            Equilibrio Vitale · Healthy Lifestyle · Longevity · Wellbeing
          </p>
        </div>
        <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {["Nutrizione Clinica", "Metabolismo Basale", "Composizione Corporea"].map(l => (
            <span key={l} style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: `${P.wellTeal}70`, letterSpacing: "0.18em" }}>{l}</span>
          ))}
        </div>
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-end gap-2">
          {["Nutrizionisti & Dietologi", "Centri Wellness", "Spa & Benessere"].map(l => (
            <span key={l} style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "9px", color: `${P.wellGold}80`, letterSpacing: "0.18em" }}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
