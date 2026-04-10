import { P } from "./images";
import wellNatura from "../../../assets/WELLNESS - NATURA.jpg";

const manifestoLines = [
  { text: "Crediamo che la salute sia una scelta", highlight: false },
  { text: "quotidiana.", highlight: true },
  { text: "Che il benessere non si compri,", highlight: false },
  { text: "ma si costruisca — giorno per giorno.", highlight: false },
  { text: "", highlight: false },
  { text: "Crediamo nel cibo come medicina.", highlight: false },
  { text: "Nel movimento come linguaggio del corpo.", highlight: false },
  { text: "Nella longevità come arte di vivere bene.", highlight: true },
  { text: "", highlight: false },
  { text: "COSMED Wellness nasce per chi", highlight: false },
  { text: "accompagna le persone verso la migliore versione di sé.", highlight: false },
  { text: "Per il nutrizionista che vede la persona", highlight: false },
  { text: "oltre il piano alimentare.", highlight: false },
  { text: "Per il professionista del benessere che crede", highlight: false },
  { text: "nell'equilibrio come filosofia di vita.", highlight: false },
  { text: "Per chi sa che il vero cambiamento", highlight: false },
  { text: "inizia dall'interno.", highlight: true },
  { text: "", highlight: false },
  { text: "Vitalità non è energia. È armonia.", highlight: false },
  { text: "È il flusso naturale di un corpo", highlight: false },
  { text: "che si conosce.", highlight: true },
];

export function WellnessManifesto() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#F4F7F5", minHeight: "100vh" }}>

      {/* Background image — very light tint */}
      <div className="absolute inset-0">
        <img src={wellNatura} alt="" className="w-full h-full object-cover"
          style={{ filter: "brightness(0.78) saturate(0.75)", transform: "scale(1.04)" }} />
        {/* Cream overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(244,247,245,0.88)" }} />
        {/* Radial light */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(244,247,245,0.4) 0%, rgba(237,233,226,0.6) 100%)" }} />
      </div>

      {/* Slide header */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-20 py-8"
        style={{ borderBottom: `1px solid ${P.border}` }}>
        <div className="flex items-center gap-3">
          <div style={{ width: "2px", height: "40px", background: `linear-gradient(180deg, ${P.wellTeal}, transparent)` }} />
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 02 / 02</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.08em", textTransform: "uppercase" }}>Brand Manifesto · Cosmed Wellness</p>
          </div>
        </div>
        <span className="hidden md:block" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Promessa Creativa — The Metabolic Flow
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-20 py-20">

        {/* Top ornament */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="flex items-center gap-3">
            <div style={{ width: "60px", height: "1px", background: `linear-gradient(90deg, transparent, ${P.wellGold})` }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: P.wellGold }} />
            <div style={{ width: "60px", height: "1px", background: `linear-gradient(90deg, ${P.wellGold}, transparent)` }} />
          </div>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellGold, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            THE METABOLIC FLOW · BRAND MANIFESTO
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(28px, 4vw, 56px)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "#0A1F1F",
          lineHeight: "1.05",
          textAlign: "center",
          marginBottom: "56px",
        }}>
          Una Promessa<br />
          <span style={{ color: P.wellTeal }}>di Vitalità.</span>
        </h2>

        {/* Manifesto text */}
        <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>
          {manifestoLines.map((line, i) => (
            line.text === "" ? (
              <div key={i} style={{ height: "20px" }} />
            ) : (
              <span key={i} style={{
                fontFamily: line.highlight ? "'Playfair Display', Georgia, serif" : "'Inter', sans-serif",
                fontSize: "clamp(14px, 1.8vw, 18px)",
                fontWeight: line.highlight ? 600 : 400,
                fontStyle: line.highlight ? "italic" : "normal",
                color: line.highlight ? "#0A1F1F" : "#3E596A",
                lineHeight: "1.65",
                letterSpacing: line.highlight ? "0.01em" : "0.01em",
              }}>
                {line.highlight
                  ? <span style={{ borderBottom: `1px solid ${P.wellTeal}50` }}>{line.text}</span>
                  : line.text
                }
                {" "}
              </span>
            )
          ))}
        </div>

        {/* Signature */}
        <div className="flex flex-col items-center gap-4 mt-16">
          <div style={{ width: "80px", height: "1px", background: `linear-gradient(90deg, transparent, ${P.wellGold}, transparent)` }} />
          <div className="flex flex-col items-center gap-1">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "18px", fontStyle: "italic", fontWeight: 600, color: "#0A1F1F" }}>
              COSMED Wellness
            </span>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: P.wellGold, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              The Metabolic Flow
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: P.wellGold, opacity: 0.4 }} />
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: P.wellGold }} />
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: P.wellGold, opacity: 0.4 }} />
          </div>
        </div>

        {/* Bottom quote band */}
        <div className="mt-20 w-full max-w-2xl rounded-2xl px-8 py-6" style={{
          background: "rgba(255,255,255,0.85)",
          border: `1px solid ${P.wellTeal}40`,
          backdropFilter: "blur(12px)",
          boxShadow: `0 20px 60px ${P.wellTeal}20`,
        }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(20px, 2.4vw, 32px)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#0A1F1F",
            letterSpacing: "0.02em",
            textAlign: "center",
            lineHeight: "1.45",
            textShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}>
            "La salute più profonda nasce dal rispetto del proprio <span style={{ color: P.wellTeal, fontWeight: 800 }}>equilibrio</span>."
          </p>
        </div>

        {/* Decorative leaves */}
        <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block" style={{ fontSize: "120px", lineHeight: "1" }}>🌿</div>
        <div className="absolute top-32 right-10 opacity-8 hidden lg:block" style={{ fontSize: "80px", lineHeight: "1", transform: "rotate(20deg)" }}>🌿</div>

      </div>
    </section>
  );
}
