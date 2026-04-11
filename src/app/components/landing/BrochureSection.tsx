import { useState } from "react";
import { P } from "./images";

const PDF_FILE_NAME = "Denani-Cosmed_proposta.pdf";
// Password PDF: denani123!
const STATIC_BROCHURE_URL = `/assets/${PDF_FILE_NAME}`;

function openStaticBrochure() {
  const popup = window.open(STATIC_BROCHURE_URL, "_blank", "noopener,noreferrer");
  if (!popup) {
    console.warn("Popup bloccato dal browser: impossibile aprire la brochure in una nuova scheda.");
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export function BrochureSection() {
  const [isOpening, setIsOpening] = useState(false);

  const onGeneratePDF = () => {
    if (isOpening) return;
    setIsOpening(true);
    try {
      openStaticBrochure();
    } catch (error) {
      console.error("Errore durante l'apertura del PDF:", error);
    } finally {
      window.setTimeout(() => setIsOpening(false), 500);
    }
  };

  return (
    <section data-pdf-exclude="true" className="w-full py-14 md:py-20 px-6 md:px-10 lg:px-20" style={{ background: P.dark }}>
      <div className="max-w-7xl mx-auto">
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 rounded-3xl px-8 md:px-12 py-10"
          style={{ background: `${P.accent}0C`, border: `1px solid ${P.accent}20` }}
        >
          <div className="flex flex-col gap-3">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              - Documento Completo
            </span>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.04em", lineHeight: "1" }}>
              Scarica la Brochure<br /><span style={{ color: P.accentLight }}>Riepilogativa</span>
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, color: `${P.textInv}72`, lineHeight: "1.72", maxWidth: "500px" }}>
              Un documento PDF completo con obiettivi, target, step operativi, piani d'investimento e prospetti ROI per la proposta DeNani per COSMED.
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Obiettivi", "Proposte", "Piano d'investimento", "Prospetto ROI"].map((t) => (
                <span key={t} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, color: `${P.accentLight}F0`, border: `1px solid ${P.accentLight}50`, background: `${P.accentLight}14`, borderRadius: "5px", padding: "5px 10px", letterSpacing: "0.05em" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onGeneratePDF}
            disabled={isOpening}
            className="flex items-center gap-3 rounded-2xl px-8 py-4 transition-all duration-200 hover:opacity-90 hover:scale-105 shrink-0"
            style={{ background: P.accent, border: `1px solid ${P.accentLight}40`, cursor: isOpening ? "wait" : "pointer", transform: "scale(1)", opacity: isOpening ? 0.82 : 1 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <div className="text-left">
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: "#FFFFFF", display: "block", lineHeight: "1.1" }}>
                {isOpening ? "Apertura PDF..." : "Scarica PDF"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}