import { PERFORMANCE_SHOWCASE, P } from "./images";

const manifestoLines = [
  { text: "\"Se vuoi vincere, devi avere gli strumenti giusti\".", highlight: true },
  { text: "", highlight: false },
  { text: "Crediamo che il talento sia solo l'inizio.", highlight: false },
  { text: "Che il sudore, da solo, non basti a fare la differenza tra un buon piazzamento e un record.", highlight: false },
  { text: "", highlight: false },
  { text: "Crediamo nella scienza come motore del risultato.", highlight: false },
  { text: "Nei dati come fondamenta di ogni strategia vincente.", highlight: false },
  { text: "Nei professionisti che rifiutano l'approssimazione per abbracciare la certezza.", highlight: false },
  { text: "", highlight: false },
  { text: "COSMED Performance nasce per chi vuole trasformare un dato di precisione nella chiave per sbloccare il potenziale di un atleta.", highlight: false },
  { text: "Perché allenarsi tanto è di tutti.", highlight: false },
  { text: "Allenarsi meglio è solo di chi sa esattamente cosa sta facendo.", highlight: false },
  { text: "", highlight: false },
  { text: "La performance non è un caso.", highlight: false },
  { text: "È la nostra promessa.", highlight: true },
];

const MANIFESTO_KEYWORDS = [
  "strumenti giusti",
  "talento",
  "scienza",
  "dati",
  "strategia vincente",
  "approssimazione",
  "certezza",
  "dato di precisione",
  "potenziale",
  "allenarsi meglio",
  "performance",
  "è la nostra",
  "promessa",
];

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightManifestoKeywords(text: string) {
  const sorted = [...MANIFESTO_KEYWORDS].sort((a, b) => b.length - a.length);
  const regex = new RegExp(`(${sorted.map(escapeRegex).join("|")})`, "gi");

  return text.split(regex).map((part, i) => {
    const isKeyword = MANIFESTO_KEYWORDS.some((keyword) => keyword.toLowerCase() === part.toLowerCase());
    if (!isKeyword) return <span key={`${part}-${i}`}>{part}</span>;

    return (
      <strong
        key={`${part}-${i}`}
        style={{
          color: P.perfBlue,
          fontWeight: 700,
          letterSpacing: "0.01em",
        }}
      >
        {part}
      </strong>
    );
  });
}

export function PerformanceManifesto() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#0B0F14", minHeight: "100vh" }}>

      {/* Background image — very dark */}
      <div className="absolute inset-0">
        <img src={PERFORMANCE_SHOWCASE.hero} alt="" className="w-full h-full object-cover"
          style={{ filter: "grayscale(1) contrast(1.15) brightness(0.42)", transform: "scale(1.04)" }} />
        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${P.perfBlue}04 1px, transparent 1px), linear-gradient(90deg, ${P.perfBlue}04 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }} />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(11,15,20,0.52) 0%, rgba(11,15,20,0.96) 100%)" }} />
      </div>

      {/* Slide header */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-20 py-8"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="flex items-center gap-3">
          <div style={{ width: "2px", height: "40px", background: `linear-gradient(180deg, ${P.perfBlue}, transparent)` }} />
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 01 / 02</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.08em", textTransform: "uppercase" }}>Se vuoi vincere, devi avere gli strumenti giusti</p>
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
          Se vuoi vincere,<br />
          <span style={{ color: P.perfBlue }}>devi avere gli strumenti giusti.</span>
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
                  ? <span style={{ color: "#EEF2FF", borderBottom: `1px solid ${P.perfBlue}60` }}>{highlightManifestoKeywords(line.text)}</span>
                  : highlightManifestoKeywords(line.text)
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
          background: "rgba(11,111,255,0.03)",
          border: `1px solid ${P.perfBlue}20`,
          boxShadow: `inset 0 0 0 1px ${P.perfBlue}08`,
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(14px, 1.8vw, 20px)",
            fontWeight: 700,
            color: "#EEF2FF",
            letterSpacing: "0.03em",
            textAlign: "center",
            textTransform: "uppercase",
            lineHeight: "1.45",
          }}>
            "Odiavo ogni minuto di allenamento, ma dicevo: <span style={{ color: P.perfBlue, textShadow: `0 6px 16px ${P.perfBlue}44` }}>non mollare. soffri ora e vivi il resto della tua vita come un campione</span>."
          </p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            color: P.perfBlue,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "10px",
          }}>
            Muhammad Ali
          </p>
        </div>

      </div>
    </section>
  );
}
