import cosmedLogo from "../../../assets/cffaa0cb0f7ab92966e997ad7cded19cf46e55a0.png";

const valori = [
  {
    simbolo: "◈",
    titolo: "Fiducia Scientifica",
    testo: "Ogni servizio è sostenuto da metodi di misurazione metabolica clinicamente validati, con precisione certificata ISO.",
    colore: "#0E6B6B",
    bg: "#EEF5F4",
    border: "#C0DEDE",
  },
  {
    simbolo: "◇",
    titolo: "Posizionamento Premium",
    testo: "Un'esperienza esclusiva progettata per professionisti e centri di eccellenza che non accettano compromessi.",
    colore: "#B8922E",
    bg: "#FBF5E8",
    border: "#E0D0A0",
  },
  {
    simbolo: "◈",
    titolo: "Vantaggio Competitivo",
    testo: "Differenziazione commerciale attraverso l'unica piattaforma metabolica end-to-end sul mercato del wellness.",
    colore: "#0E6B6B",
    bg: "#EEF5F4",
    border: "#C0DEDE",
  },
];

export function IdentitaCentrale() {
  return (
    <section className="px-12 py-8">
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid #D8EAEA", boxShadow: "0 2px 20px rgba(14,107,107,0.05)" }}
      >
        <div className="flex flex-col lg:flex-row items-stretch" style={{ minHeight: "280px" }}>
          {/* Left: Visual identity */}
          <div
            className="flex flex-col items-center justify-center p-10 lg:w-1/3 relative"
            style={{
              background: "linear-gradient(145deg, #EDF5F4 0%, #F4FAF9 100%)",
              borderRight: "1px solid #D8EAEA",
            }}
          >
            {/* Decorative rings */}
            <div
              className="absolute rounded-full"
              style={{
                width: "220px",
                height: "220px",
                border: "1px solid rgba(14,107,107,0.1)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "160px",
                height: "160px",
                border: "1px solid rgba(184,146,46,0.1)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            <div
              className="relative z-10 flex flex-col items-center gap-4"
              style={{
                background: "#FFFFFF",
                border: "1px solid #C8DEDE",
                borderRadius: "16px",
                padding: "24px 32px",
                boxShadow: "0 4px 20px rgba(14,107,107,0.08)",
              }}
            >
              <img
                src={cosmedLogo}
                alt="Cosmed"
                style={{ height: "76px", width: "auto", objectFit: "contain" }}
              />
              <div
                style={{
                  width: "60px",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #B8922E, transparent)",
                }}
              />
              <div className="flex flex-col items-center gap-1">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(20px, 2.8vw, 36px)",
                    fontWeight: "900",
                    color: "#0A1F1F",
                    letterSpacing: "-0.04em",
                    lineHeight: "0.9",
                  }}
                >
                  COSMED
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(20px, 2.8vw, 36px)",
                    fontWeight: "300",
                    color: "#0E6B6B",
                    letterSpacing: "-0.02em",
                    lineHeight: "0.9",
                  }}
                >
                  WELLNESS
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <div style={{ width: "14px", height: "1px", background: "#B8922E", opacity: 0.5 }} />
                  <span
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "7px",
                      color: "#B8922E",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    The Metabolic Company
                  </span>
                  <div style={{ width: "14px", height: "1px", background: "#B8922E", opacity: 0.5 }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Brand values */}
          <div className="flex-1 p-10" style={{ background: "#FFFFFF" }}>
            <div className="mb-6">
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "9px",
                  color: "#B8922E",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  opacity: 0.8,
                }}
              >
                Manifesto del Brand
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
              {valori.map((v) => (
                <div
                  key={v.titolo}
                  className="p-5 rounded-xl"
                  style={{
                    background: v.bg,
                    border: `1px solid ${v.border}`,
                    borderTop: `2px solid ${v.colore}`,
                  }}
                >
                  <span style={{ fontSize: "18px", color: v.colore, display: "block", marginBottom: "10px" }}>
                    {v.simbolo}
                  </span>
                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#0A1F1F",
                      marginBottom: "6px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {v.titolo}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      color: "#5A7A78",
                      lineHeight: "1.7",
                    }}
                  >
                    {v.testo}
                  </p>
                </div>
              ))}
            </div>

            {/* Claim */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "linear-gradient(135deg, #EDF5F4 0%, #FBF5E8 100%)",
                border: "1px solid #C8DEDE",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(15px, 2vw, 22px)",
                  fontWeight: "300",
                  color: "#0A1F1F",
                  lineHeight: "1.5",
                  letterSpacing: "-0.01em",
                }}
              >
                "La scienza del metabolismo{" "}
                <span style={{ color: "#0E6B6B", fontWeight: "600" }}>non si vede</span>. Ma si sente in ogni
                risultato,{" "}
                <span style={{ color: "#B8922E", fontWeight: "500" }}>in ogni trasformazione</span>,
                in ogni vita migliorata."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
