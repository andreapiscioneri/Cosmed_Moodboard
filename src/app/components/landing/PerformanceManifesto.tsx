import { P } from "./images";
import perfVO2 from "../../../assets/PERFORMANCE - VO2 Max Cosmed.jpg";

const manifestoLines = [
  { text: "Crediamo che ogni corpo abbia un linguaggio", highlight: false },
  { text: "preciso.", highlight: true },
  { text: "Che il metabolismo non menta,", highlight: false },
  { text: "se sai ascoltarlo davvero.", highlight: false },
  { text: "", highlight: false },
  { text: "Crediamo nella scienza come strumento di fiducia.", highlight: false },
  { text: "Nei dati come fondamento di ogni", highlight: false },
  { text: "protocollo clinico.", highlight: true },
  { text: "Nei professionisti che scelgono", highlight: false },
  { text: "la misura al posto dell'intuizione.", highlight: false },
  { text: "", highlight: false },
  { text: "COSMED Performance nasce per chi", highlight: false },
  { text: "non si accontenta di approssimare.", highlight: false },
  { text: "Per chi vuole sapere — davvero —", highlight: false },
  { text: "come risponde un corpo sotto sforzo.", highlight: false },
  { text: "Per chi trasforma una calorimetria in una diagnosi.", highlight: false },
  { text: "Un test VO₂ in un piano d'azione.", highlight: false },
  { text: "Un dato grezzo in una risposta clinica.", highlight: false },
  { text: "", highlight: false },
  { text: "Precisione non è una caratteristica.", highlight: false },
  { text: "È la nostra promessa.", highlight: true },
];

export function PerformanceManifesto() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#0B0F14", minHeight: "100vh" }}>

      {/* Background image — very dark */}
      <div className="absolute inset-0">
        <img src={perfVO2} alt="" className="w-full h-full object-cover"
          style={{ filter: "brightness(0.25) saturate(0.5) hue-rotate(200deg)", transform: "scale(1.04)" }} />
        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${P.perfBlue}04 1px, transparent 1px), linear-gradient(90deg, ${P.perfBlue}04 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }} />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(11,15,20,0.3) 0%, rgba(11,15,20,0.85) 100%)" }} />
      </div>

      {/* Slide header */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-20 py-8"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="flex items-center gap-3">
          <div style={{ width: "2px", height: "40px", background: `linear-gradient(180deg, ${P.perfBlue}, transparent)` }} />
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 01 / 02</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.08em", textTransform: "uppercase" }}>Brand Manifesto · Cosmed Performance</p>
          </div>
        </div>
        <span className="hidden md:block" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Promessa Creativa — The Precision Lab
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-20 py-20">

        {/* Top ornament */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="flex items-center gap-3">
            <div style={{ width: "60px", height: "1px", background: `linear-gradient(90deg, transparent, ${P.perfBlue})` }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: P.perfBlue }} />
            <div style={{ width: "60px", height: "1px", background: `linear-gradient(90deg, ${P.perfBlue}, transparent)` }} />
          </div>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            THE PRECISION LAB · BRAND MANIFESTO
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(28px, 4vw, 52px)",
          fontWeight: 900,
          color: "#EEF2FF",
          letterSpacing: "-0.04em",
          lineHeight: "0.9",
          textAlign: "center",
          marginBottom: "56px",
        }}>
          Una Promessa<br />
          <span style={{ color: P.perfBlue }}>di Precisione.</span>
        </h2>

        {/* Manifesto text */}
        <div style={{ maxWidth: "620px", width: "100%", textAlign: "center" }}>
          {manifestoLines.map((line, i) => (
            line.text === "" ? (
              <div key={i} style={{ height: "20px" }} />
            ) : (
              <p key={i} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px, 1.8vw, 18px)",
                fontWeight: line.highlight ? 700 : 400,
                color: line.highlight ? "#EEF2FF" : "rgba(238,242,255,0.65)",
                lineHeight: "1.6",
                letterSpacing: line.highlight ? "-0.01em" : "0.01em",
                display: "inline",
              }}>
                {line.highlight
                  ? <span style={{ color: "#EEF2FF", borderBottom: `1px solid ${P.perfBlue}60` }}>{line.text}</span>
                  : line.text
                }
                {" "}
              </p>
            )
          ))}
        </div>

        {/* Signature */}
        <div className="flex flex-col items-center gap-4 mt-16">
          <div style={{ width: "80px", height: "1px", background: `linear-gradient(90deg, transparent, ${P.perfBlue}, transparent)` }} />
          <div className="flex flex-col items-center gap-1">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 800, color: "#EEF2FF", letterSpacing: "0.1em" }}>
              COSMED Performance
            </span>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: P.perfBlue, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              The Precision Lab
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: P.perfBlue, opacity: 0.5 }} />
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: P.perfBlue }} />
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: P.perfBlue, opacity: 0.5 }} />
          </div>
        </div>

        {/* Bottom quote band */}
        <div className="mt-20 w-full max-w-2xl rounded-xl px-8 py-6" style={{
          background: `linear-gradient(135deg, ${P.perfBlue}20, ${P.perfBlue}10)`,
          border: `1px solid ${P.perfBlue}40`,
          backdropFilter: "blur(12px)",
          boxShadow: `0 20px 60px ${P.perfBlue}15`,
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(18px, 2.2vw, 28px)",
            fontWeight: 800,
            color: "#EEF2FF",
            letterSpacing: "0.04em",
            textAlign: "center",
            textTransform: "uppercase",
            lineHeight: "1.4",
            textShadow: "0 8px 24px rgba(0,0,0,0.5)",
          }}>
            "Non misurare per sapere. Misura per <span style={{ color: P.perfBlue, textShadow: `0 6px 16px ${P.perfBlue}44` }}>agire</span>."
          </p>
        </div>

      </div>
    </section>
  );
}
