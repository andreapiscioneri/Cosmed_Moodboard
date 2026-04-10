import { P } from "./images";
import wellNatura from "../../../assets/WELLNESS - NATURA.jpg";

const manifestoLines = [
  { text: "\"La bellezza della longevità non sta nel contare gli anni sulla carta, ma nel viverli con tutta l'energia possibile.\"", highlight: true },
  { text: "", highlight: false },
  { text: "Crediamo che la salute non sia una speranza, ma un progetto.", highlight: false },
  { text: "Che la longevità non sia un colpo di fortuna, ma il risultato di scelte quotidiane, lucide e consapevoli.", highlight: false },
  { text: "", highlight: false },
  { text: "Crediamo nella conoscenza come forma più alta di cura.", highlight: false },
  { text: "Nei dati metabolici come bussola per ritrovare l'equilibrio.", highlight: false },
  { text: "Nei professionisti che hanno il coraggio di rifiutare i consigli generalisti per scegliere protocolli cuciti sull'unicità di chi hanno di fronte.", highlight: false },
  { text: "", highlight: false },
  { text: "COSMED Well-being nasce per chi ha smesso di dare risposte standard e converte un dato clinico in uno stile di vita personalizzato, sostenibile e orientato al benessere.", highlight: false },
  { text: "", highlight: false },
  { text: "Stare bene non è un'aspirazione lontana.", highlight: false },
  { text: "È la conseguenza naturale di un percorso disegnato su misura per ogni singola persona.", highlight: false },
  ];

const WELLNESS_KEYWORDS = [
  "salute",
  "progetto",
  "longevità",
  "scelte quotidiane",
  "conoscenza",
  "cura",
  "dati metabolici",
  "equilibrio",
  "protocolli",
  "unicità",
  "dato clinico",
  "stile di vita personalizzato",
  "benessere",
  "stare bene",
  "percorso",
  "su misura",
  "energia",
];

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightWellnessKeywords(text: string) {
  const sorted = [...WELLNESS_KEYWORDS].sort((a, b) => b.length - a.length);
  const regex = new RegExp(`(${sorted.map(escapeRegex).join("|")})`, "gi");

  return text.split(regex).map((part, i) => {
    const isKeyword = WELLNESS_KEYWORDS.some((keyword) => keyword.toLowerCase() === part.toLowerCase());
    if (!isKeyword) return <span key={`${part}-${i}`}>{part}</span>;

    return (
      <strong
        key={`${part}-${i}`}
        style={{
          color: P.wellTeal,
          fontWeight: 600,
          fontStyle: "italic",
          textDecoration: "underline",
          textUnderlineOffset: "2px",
          letterSpacing: "0.01em",
        }}
      >
        {part}
      </strong>
    );
  });
}

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
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.08em", textTransform: "uppercase" }}>Brand Manifesto · Cosmed Well-being</p>
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
          La scienza<br />
          <span style={{ color: P.wellTeal }}>della vitalità.</span>
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
                  ? <span style={{ borderBottom: `1px solid ${P.wellTeal}50` }}>{highlightWellnessKeywords(line.text)}</span>
                  : highlightWellnessKeywords(line.text)
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
              COSMED Well-being
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
          background: "rgba(255,255,255,0.34)",
          border: `1px solid ${P.wellTeal}18`,
          boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.28)`,
        }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(12px, 1.3vw, 18px)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#0A1F1F",
            letterSpacing: "0.02em",
            textAlign: "center",
            lineHeight: "1.5",
            whiteSpace: "normal",
          }}>
            "Il medico del futuro non somministrerà medicine, ma istruirà i suoi pazienti sulla
            <span style={{ color: P.wellTeal, fontWeight: 700, fontStyle: "italic", textDecoration: "underline", textUnderlineOffset: "2px" }}> cura del corpo umano</span>, sulla
            <span style={{ color: P.wellTeal, fontWeight: 700, fontStyle: "italic", textDecoration: "underline", textUnderlineOffset: "2px" }}> dieta</span> e sulle cause e la
            <span style={{ color: P.wellTeal, fontWeight: 700, fontStyle: "italic", textDecoration: "underline", textUnderlineOffset: "2px" }}> prevenzione delle malattie</span>."
          </p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            color: P.wellTeal,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "10px",
          }}>
            Thomas Edison
          </p>
        </div>

        {/* Decorative leaves */}
        <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block" style={{ fontSize: "120px", lineHeight: "1" }}>🌿</div>
        <div className="absolute top-32 right-10 opacity-8 hidden lg:block" style={{ fontSize: "80px", lineHeight: "1", transform: "rotate(20deg)" }}>🌿</div>

      </div>
    </section>
  );
}
