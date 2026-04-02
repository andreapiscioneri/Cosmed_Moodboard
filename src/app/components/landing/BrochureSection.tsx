import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { P } from "./images";

function toDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Impossibile convertire blob in data URL"));
    reader.readAsDataURL(blob);
  });
}

async function prepareImagesForCapture(root: HTMLElement) {
  const images = Array.from(root.querySelectorAll("img"));

  await Promise.all(images.map(async (img) => {
    const src = img.getAttribute("src") ?? "";
    if (!src || src.startsWith("data:")) {
      return;
    }

    try {
      const absolute = new URL(src, window.location.href);
      if (absolute.origin !== window.location.origin) {
        const response = await fetch(absolute.toString(), { mode: "cors" });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const blob = await response.blob();
        const dataUrl = await toDataUrl(blob);
        img.src = dataUrl;
      }
    } catch {
      // Avoid hard failure if a remote image cannot be embedded.
      img.style.opacity = "0.92";
    }

    if (!img.complete) {
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    }
  }));
}

async function generateBrochurePDF() {
  const appRoot = document.querySelector("#root > div") as HTMLElement | null;
  if (!appRoot) {
    throw new Error("Root della landing non trovato.");
  }

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const host = document.createElement("div");
  host.style.position = "fixed";
  host.style.left = "-20000px";
  host.style.top = "0";
  host.style.pointerEvents = "none";
  host.style.background = "#FFFFFF";
  host.style.zIndex = "-1";
  host.style.width = `${appRoot.clientWidth}px`;

  const clone = appRoot.cloneNode(true) as HTMLElement;
  host.appendChild(clone);
  document.body.appendChild(host);

  try {
    // Force reveal blocks to visible state before capture.
    clone.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((node) => {
      const el = node as HTMLElement;
      el.classList.add("visible");
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.transition = "none";
    });

    // Remove sticky/fixed UI and interactive controls from PDF version.
    clone.querySelectorAll("header, [class*='fixed'], [class*='sticky']").forEach((node) => node.remove());
    clone.querySelectorAll("a, button").forEach((node) => {
      const source = node as HTMLElement;
      const replacement = document.createElement("div");
      replacement.innerHTML = source.innerHTML;
      replacement.className = source.className;
      const inlineStyle = source.getAttribute("style");
      if (inlineStyle) {
        replacement.setAttribute("style", inlineStyle);
      }
      source.replaceWith(replacement);
    });

    await prepareImagesForCapture(clone);

    const blocks = Array.from(clone.children).filter((node) => (node as HTMLElement).offsetHeight > 0) as HTMLElement[];
    const captureTargets = blocks.length > 0 ? blocks : [clone];

    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 8;
    const contentW = pageWidth - margin * 2;
    const contentH = pageHeight - margin * 2;

    let hasPage = false;

    for (const target of captureTargets) {
      let canvas: HTMLCanvasElement;
      try {
        canvas = await html2canvas(target, {
          scale: 2,
          useCORS: true,
          imageTimeout: 0,
          backgroundColor: "#FFFFFF",
          logging: false,
        });
      } catch {
        // Fallback for heavy sections or problematic images.
        canvas = await html2canvas(target, {
          scale: 1.4,
          useCORS: true,
          imageTimeout: 0,
          backgroundColor: "#FFFFFF",
          logging: false,
        });
      }

      if (!canvas.width || !canvas.height) {
        continue;
      }

      const pxPerMm = canvas.width / contentW;
      const pageSlicePx = Math.floor(contentH * pxPerMm);

      for (let offsetY = 0; offsetY < canvas.height; offsetY += pageSlicePx) {
        const sliceHeight = Math.min(pageSlicePx, canvas.height - offsetY);
        const slice = document.createElement("canvas");
        slice.width = canvas.width;
        slice.height = sliceHeight;

        const ctx = slice.getContext("2d");
        if (!ctx) {
          continue;
        }

        ctx.drawImage(canvas, 0, offsetY, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

        const renderedH = sliceHeight / pxPerMm;
        if (hasPage) {
          doc.addPage();
        }
        doc.addImage(slice, "JPEG", margin, margin, contentW, renderedH, undefined, "FAST");
        hasPage = true;
      }
    }

    if (!hasPage) {
      throw new Error("Nessun contenuto catturato per il PDF.");
    }

    doc.save("DeNani-per-COSMED-Brochure.pdf");
  } finally {
    host.remove();
  }
}

export function BrochureSection() {
  const [isGenerating, setIsGenerating] = useState(false);

  const onGeneratePDF = async () => {
    if (isGenerating) {
      return;
    }

    setIsGenerating(true);
    try {
      await generateBrochurePDF();
    } catch (error) {
      console.error("Errore durante la creazione del PDF", error);
      window.alert("Impossibile generare il PDF. Riprova tra qualche secondo.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="w-full py-14 md:py-20 px-6 md:px-10 lg:px-20" style={{ background: P.dark }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 rounded-3xl px-8 md:px-12 py-10"
          style={{ background: `${P.accent}0C`, border: `1px solid ${P.accent}20` }}>
          <div className="flex flex-col gap-3">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.14em", textTransform: "uppercase" }}>- Documento Completo</span>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: P.textInv, letterSpacing: "-0.04em", lineHeight: "1" }}>
              Scarica la Brochure<br /><span style={{ color: P.accentLight }}>Riepilogativa</span>
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, color: `${P.textInv}72`, lineHeight: "1.72", maxWidth: "500px" }}>
              Un documento PDF completo con obiettivi, target, step operativi, piani d'investimento e prospetti ROI per la proposta DeNani per COSMED.
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["6 sezioni", "3 piani pricing", "Prospetti ROI", "Pronto per la stampa"].map(t => (
                <span key={t} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, color: `${P.accentLight}F0`, border: `1px solid ${P.accentLight}50`, background: `${P.accentLight}14`, borderRadius: "5px", padding: "5px 10px", letterSpacing: "0.05em" }}>{t}</span>
              ))}
            </div>
          </div>

          <button
            onClick={onGeneratePDF}
            disabled={isGenerating}
            className="flex items-center gap-3 rounded-2xl px-8 py-4 transition-all duration-200 hover:opacity-90 hover:scale-105 shrink-0"
            style={{ background: P.accent, border: `1px solid ${P.accentLight}40`, cursor: isGenerating ? "wait" : "pointer", transform: "scale(1)", opacity: isGenerating ? 0.82 : 1 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <div className="text-left">
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: "#FFFFFF", display: "block", lineHeight: "1.1" }}>
                {isGenerating ? "Generazione..." : "Scarica PDF"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}