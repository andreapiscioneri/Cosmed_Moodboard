import { IMGS, P } from "./images";
import wellLongevity3 from "../../../assets/WELLNESS - LONGEVITY 3.jpg";
import wellLongevity4 from "../../../assets/WELLNESS - LONGEVITY 4.jpg";
import wellMonitoraggio from "../../../assets/WELLNESS - MONITORAGGIO.jpg";

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

// Griglia 2x2: riga top → cibo | fiori/natura — riga bottom → persone | persone
const mosaicImages = [
  { url: IMGS.food,      label: "Nutrizione",   tag: "Alimentazione Sana",  sub: "Cibo sano e bilanciato" },
  { url: wellLongevity4, label: "Cura di Sé",   tag: "Stile di Vita",       sub: "Cura di sé e benessere" },
  { url: wellLongevity3, label: "Longevity",    tag: "Equilibrio Vitale",   sub: "Cura di sé e longevità" },
  { url: wellMonitoraggio, label: "Natura",       tag: "Ambiente Naturale",   sub: "Connessione con la natura" },
];

export function WellnessMoodboard() {
  return (
    <section id="well-being" className="relative w-full overflow-hidden" style={{ background: "#F4F7F5" }}>

      {/* Intro band */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-20 py-8"
        style={{ borderBottom: `1px solid ${P.border}` }}>
        <div className="flex items-center gap-3">
          <div style={{ width: "2px", height: "40px", background: `linear-gradient(180deg, ${P.wellTeal}, transparent)` }} />
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 02 / 02</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.1em", textTransform: "uppercase" }}>Sub-brand · Healthy Lifestyle</p>
          </div>
        </div>
        <span className="hidden md:block" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Cosmed Well-being · Moodboard Visivo
        </span>
      </div>

      {/* Hero block */}
      <div className="flex flex-col-reverse lg:flex-row" style={{ minHeight: "75vh" }}>

        {/* LEFT: Brand details */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 gap-7"
          style={{ background: "linear-gradient(135deg, #F4F7F5 0%, #EDE9E2 100%)" }}>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.12em", textTransform: "uppercase" }}>COSMED</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 700, fontStyle: "italic", color: "#0A1F1F", letterSpacing: "-0.02em", lineHeight: "0.92" }}>
              Well-being
            </h2>
            <div style={{ width: "56px", height: "2px", background: `linear-gradient(90deg, ${P.wellGold}, transparent)`, marginTop: "6px" }} />
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "12px", color: P.wellGold, letterSpacing: "0.1em", fontStyle: "italic", marginTop: "4px" }}>
              "The Metabolic Flow"
            </p>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#3E596A", lineHeight: "1.85", maxWidth: "420px" }}>
            Brand identity dedicata al professionista della nutrizione e del benessere. Un approccio legato alla cura di sé, al mantenersi in forma, al nutrirsi correttamente e a uno stile di vita sano. Il visual system comunica vitalità, equilibrio e longevità attraverso un'estetica luminosa e naturale.
          </p>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.1em", textTransform: "uppercase" }}>Palette Cromatica</span>
            <div className="flex flex-wrap items-center gap-2">
              {palette.map(pp => (
                <div key={pp.hex} className="flex flex-col items-center gap-1">
                  <div style={{ width: "32px", height: "32px", borderRadius: "7px", background: pp.hex, border: "1px solid rgba(0,0,0,0.08)" }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "6px", fontWeight: 600, color: "#5B7383", textAlign: "center", maxWidth: "40px", lineHeight: "1.3" }}>{pp.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl px-5 py-4" style={{ background: "#FFFFFF", border: `1px solid ${P.border}` }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "7px" }}>Tipografia</span>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 700, fontStyle: "italic", color: "#0A1F1F", lineHeight: "1" }}>Playfair Display Italic</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.08em", marginTop: "5px", textTransform: "uppercase" }}>Montserrat · Corpo & UI</p>
          </div>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.1em", textTransform: "uppercase" }}>Lessico Visivo</span>
            <div className="flex flex-wrap gap-2">
              {keywords.map(k => (
                <span key={k} style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: P.wellTeal,
                  border: `1px solid ${P.wellTeal}25`, background: `${P.wellTeal}08`,
                  borderRadius: "4px", padding: "4px 9px", letterSpacing: "0.03em",
                }}>{k}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.1em", textTransform: "uppercase" }}>Target Audience</span>
            <div className="flex flex-wrap gap-2">
              {target.map(t => (
                <span key={t} style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500,
                  color: "#526A7A", border: "1px solid rgba(110,135,152,0.38)",
                  background: "#FFFFFF", borderRadius: "4px", padding: "4px 9px",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Image mosaic */}
        <div className="relative lg:w-1/2 overflow-hidden" style={{ minHeight: "50vh" }}>

          <div className="grid h-full grid-cols-1 sm:grid-cols-2" style={{ gridTemplateRows: "repeat(2, minmax(220px, 1fr))" }}>
            {mosaicImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden" style={{ minHeight: "220px" }}>
                <img src={img.url} alt={img.label} className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.82) saturate(0.9)" }} />
                <div className="absolute inset-0" style={{ background: `rgba(14,107,107,${i % 2 === 0 ? 0.04 : 0.025})` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
