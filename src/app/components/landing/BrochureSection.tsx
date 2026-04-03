import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { P } from "./images";

async function generateBrochurePDF() {
  const appRoot = document.querySelector("#root > div") as HTMLElement | null;
  if (!appRoot) {
    throw new Error("Contenuto brochure non trovato");
  }

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
    (el as HTMLElement).classList.add("visible");
  });

  // Apriamo subito la tab dal click utente per evitare blocchi popup.
  const previewWindow = window.open("about:blank", "_blank");

  const staging = document.createElement("div");
  staging.id = "__pdf-staging__";
  staging.style.position = "fixed";
  staging.style.left = "-10000px";
  staging.style.top = "0";
  staging.style.width = "1280px";
  staging.style.background = "#ffffff";
  staging.style.zIndex = "-1";
  staging.style.pointerEvents = "none";

  const cleanup = () => {
    staging.remove();
  };

  document.body.appendChild(staging);

  const blocks = Array.from(appRoot.children).filter((el) => {
    const htmlEl = el as HTMLElement;
    return htmlEl.tagName.toLowerCase() !== "header" && !htmlEl.querySelector('[data-pdf-exclude="true"]') && !htmlEl.matches('[data-pdf-exclude="true"]');
  }) as HTMLElement[];

  if (blocks.length === 0) {
    cleanup();
    throw new Error("Nessuna sezione disponibile per il PDF");
  }

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
    putOnlyUsedFonts: true,
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 8;
  const contentWidth = pageWidth - margin * 2;
  const contentHeight = pageHeight - margin * 2;

  try {
    for (let i = 0; i < blocks.length; i += 1) {
      const clone = blocks[i].cloneNode(true) as HTMLElement;

      clone.querySelectorAll('[data-pdf-exclude="true"]').forEach((excluded) => excluded.remove());
      clone.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
        const node = el as HTMLElement;
        node.classList.add("visible");
        node.style.opacity = "1";
        node.style.transform = "none";
        node.style.transition = "none";
      });

      clone.style.width = "1280px";
      clone.style.maxWidth = "1280px";
      clone.style.margin = "0";
      clone.style.background = "#ffffff";
      clone.style.breakInside = "avoid";

      staging.appendChild(clone);

      const canvas = await html2canvas(clone, {
        backgroundColor: "#ffffff",
        useCORS: true,
        allowTaint: false,
        scale: Math.min(window.devicePixelRatio || 1, 2),
        logging: false,
        windowWidth: 1280,
        windowHeight: clone.scrollHeight,
      });

      clone.remove();

      if (i > 0) {
        pdf.addPage();
      }

      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const ratio = Math.min(contentWidth / canvas.width, contentHeight / canvas.height);
      const renderWidth = canvas.width * ratio;
      const renderHeight = canvas.height * ratio;
      const x = (pageWidth - renderWidth) / 2;
      const y = (pageHeight - renderHeight) / 2;

      pdf.addImage(imgData, "JPEG", x, y, renderWidth, renderHeight, undefined, "FAST");
    }

    const blob = pdf.output("blob");
    const blobUrl = URL.createObjectURL(blob);
    if (previewWindow) {
      previewWindow.location.replace(blobUrl);
    } else {
      window.open(blobUrl, "_blank");
    }

    // Evita leak di memoria mantenendo il blob disponibile abbastanza a lungo.
    window.setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
  } finally {
    cleanup();
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export function BrochureSection() {
  const [isGenerating, setIsGenerating] = useState(false);

  const onGeneratePDF = async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    try {
      await generateBrochurePDF();
    } catch (error) {
      // Manteniamo il fallback semplice: log diagnostico in console.
      console.error("Errore durante la generazione PDF:", error);
    } finally {
      setIsGenerating(false);
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
              {["6 sezioni", "3 piani pricing", "Prospetti ROI", "Pronto per la stampa"].map((t) => (
                <span key={t} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, color: `${P.accentLight}F0`, border: `1px solid ${P.accentLight}50`, background: `${P.accentLight}14`, borderRadius: "5px", padding: "5px 10px", letterSpacing: "0.05em" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onGeneratePDF}
            disabled={isGenerating}
            className="flex items-center gap-3 rounded-2xl px-8 py-4 transition-all duration-200 hover:opacity-90 hover:scale-105 shrink-0"
            style={{ background: P.accent, border: `1px solid ${P.accentLight}40`, cursor: isGenerating ? "wait" : "pointer", transform: "scale(1)", opacity: isGenerating ? 0.82 : 1 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <div className="text-left">
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: "#FFFFFF", display: "block", lineHeight: "1.1" }}>
                {isGenerating ? "Generazione PDF..." : "Scarica PDF"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}