import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { P } from "./images";

// ─── Helpers ────────────────────────────────────────────────────────────────

function toDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Impossibile convertire blob in data URL"));
    reader.readAsDataURL(blob);
  });
}

/**
 * html2canvas v1.x cannot parse the `oklch()` colour function used by
 * Tailwind v4.  This function:
 *   1. Scans every accessible stylesheet for CSS custom-property declarations
 *      whose value contains "oklch".
 *   2. Resolves each one to rgb() by setting it as the `color` of a hidden
 *      probe element and reading back the browser-computed style.
 *   3. Injects a temporary `:root` override <style> so html2canvas only sees
 *      rgb values.
 *
 * Returns a cleanup callback that removes the injected <style>.
 */
async function patchOklchForCapture(): Promise<() => void> {
  const oklchVarNames = new Set<string>();

  const collectFromRules = (list: CSSRuleList) => {
    for (const rule of Array.from(list)) {
      // Recurse into @media, @supports, @layer, etc.
      if ("cssRules" in rule && (rule as CSSGroupingRule).cssRules) {
        collectFromRules((rule as CSSGroupingRule).cssRules);
      }
      if (rule instanceof CSSStyleRule) {
        // Match any `--custom-prop: oklch(...)` declarations in this rule.
        const matches = rule.cssText.matchAll(/(--[\w-]+)\s*:\s*oklch\([^)]+\)/g);
        for (const m of matches) {
          oklchVarNames.add(m[1]);
        }
      }
    }
  };

  for (const sheet of Array.from(document.styleSheets)) {
    try {
      collectFromRules(sheet.cssRules);
    } catch {
      // Cross-origin stylesheet — skip.
    }
  }

  if (oklchVarNames.size === 0) return () => {};

  // Use a hidden probe element to let the browser resolve oklch → rgb.
  const probe = document.createElement("div");
  probe.style.cssText = "position:absolute;left:-9999px;top:-9999px;visibility:hidden;";
  document.body.appendChild(probe);

  const overrides: string[] = [];
  for (const varName of oklchVarNames) {
    probe.style.color = `var(${varName})`;
    const resolved = getComputedStyle(probe).color; // always rgb()/rgba()
    if (resolved) {
      overrides.push(`${varName}: ${resolved}`);
    }
  }

  probe.remove();

  const style = document.createElement("style");
  style.id = "__pdf-oklch-fix__";
  style.textContent = `:root { ${overrides.join("; ")} }`;
  document.head.appendChild(style);

  return () => document.getElementById("__pdf-oklch-fix__")?.remove();
}

async function prepareImagesForCapture(root: HTMLElement) {
  const images = Array.from(root.querySelectorAll("img"));

  await Promise.all(images.map(async (img) => {
    const src = img.getAttribute("src") ?? "";
    if (!src || src.startsWith("data:")) return;

    try {
      const absolute = new URL(src, window.location.href);
      if (absolute.origin !== window.location.origin) {
        const response = await fetch(absolute.toString(), { mode: "cors" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const blob = await response.blob();
        img.src = await toDataUrl(blob);
      }
    } catch {
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

function isMobileLikeDevice() {
  return (
    window.matchMedia("(max-width: 900px)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

function getAdaptiveScale(target: HTMLElement, mobileLike: boolean) {
  const width  = Math.max(1, target.scrollWidth  || target.clientWidth  || 1);
  const height = Math.max(1, target.scrollHeight || target.clientHeight || 1);
  const area   = width * height;
  const preferred  = mobileLike ? 1.1 : 1.7;
  const maxPixels  = mobileLike ? 4_800_000 : 10_000_000;
  const safeScale  = Math.sqrt(maxPixels / area);
  return Math.max(0.75, Math.min(2, Math.min(preferred, safeScale)));
}

async function captureTarget(target: HTMLElement, mobileLike: boolean) {
  const baseScale = getAdaptiveScale(target, mobileLike);
  const attempts  = [baseScale, Math.max(0.9, baseScale * 0.82), 0.75];

  let lastError: unknown;
  for (const scale of attempts) {
    try {
      return await html2canvas(target, {
        scale,
        useCORS: true,
        imageTimeout: 0,
        backgroundColor: "#FFFFFF",
        logging: false,
      });
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError ?? new Error("Cattura canvas non riuscita");
}

// ─── Main PDF generator ─────────────────────────────────────────────────────

async function generateBrochurePDF() {
  const appRoot = document.querySelector("#root > div") as HTMLElement | null;
  if (!appRoot) throw new Error("Root della landing non trovato.");

  if (document.fonts?.ready) await document.fonts.ready;

  // Patch oklch colours before any html2canvas call.
  const removeOklchPatch = await patchOklchForCapture();

  const host = document.createElement("div");
  host.style.cssText = `
    position: fixed;
    left: -20000px;
    top: 0;
    pointer-events: none;
    background: #FFFFFF;
    z-index: -1;
    width: ${appRoot.clientWidth}px;
  `;

  const clone = appRoot.cloneNode(true) as HTMLElement;
  host.appendChild(clone);
  document.body.appendChild(host);
  const mobileLike = isMobileLikeDevice();

  try {
    // Make all reveal-animated blocks visible.
    clone.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((node) => {
      const el = node as HTMLElement;
      el.classList.add("visible");
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.transition = "none";
    });

    // Remove fixed chrome and excluded sections (brochure CTA, Contattaci button).
    clone.querySelectorAll("header, [class*='fixed'], [class*='sticky']").forEach((n) => n.remove());
    clone.querySelectorAll("[data-pdf-exclude]").forEach((n) => n.remove());

    // Strip animations and interactive elements.
    clone.querySelectorAll("*").forEach((node) => {
      const el = node as HTMLElement;
      el.style.animation  = "none";
      el.style.transition = "none";
      if (mobileLike) el.style.backdropFilter = "none";
    });
    clone.querySelectorAll("a, button").forEach((node) => {
      const source = node as HTMLElement;
      const div = document.createElement("div");
      div.innerHTML = source.innerHTML;
      div.className = source.className;
      const inlineStyle = source.getAttribute("style");
      if (inlineStyle) div.setAttribute("style", inlineStyle);
      source.replaceWith(div);
    });

    await prepareImagesForCapture(clone);

    const blocks = Array.from(clone.children).filter(
      (n) => (n as HTMLElement).offsetHeight > 0
    ) as HTMLElement[];
    const captureTargets = blocks.length > 0 ? blocks : [clone];

    const doc       = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight= doc.internal.pageSize.getHeight();
    const margin    = 8;
    const contentW  = pageWidth  - margin * 2;
    const contentH  = pageHeight - margin * 2;
    let hasPage     = false;

    for (const target of captureTargets) {
      const canvas = await captureTarget(target, mobileLike);
      if (!canvas.width || !canvas.height) continue;

      const pxPerMm    = canvas.width / contentW;
      const pageSlicePx = Math.floor(contentH * pxPerMm);

      for (let offsetY = 0; offsetY < canvas.height; offsetY += pageSlicePx) {
        const sliceH = Math.min(pageSlicePx, canvas.height - offsetY);
        const slice  = document.createElement("canvas");
        slice.width  = canvas.width;
        slice.height = sliceH;
        const ctx = slice.getContext("2d");
        if (!ctx) continue;
        ctx.drawImage(canvas, 0, offsetY, canvas.width, sliceH, 0, 0, canvas.width, sliceH);

        const renderedH = sliceH / pxPerMm;
        if (hasPage) doc.addPage();
        doc.addImage(slice, "JPEG", margin, margin, contentW, renderedH, undefined, "FAST");
        hasPage = true;
      }
    }

    if (!hasPage) throw new Error("Nessun contenuto catturato per il PDF.");

    const blobUrl = doc.output("bloburl");
    window.open(blobUrl, "_blank");
  } finally {
    host.remove();
    removeOklchPatch();
  }
}

// ─── Component ──────────────────────────────────────────────────────────────

export function BrochureSection() {
  const [isGenerating, setIsGenerating] = useState(false);

  const onGeneratePDF = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      await generateBrochurePDF();
    } catch (error) {
      console.error("Errore durante la creazione del PDF", error);
      if (isMobileLikeDevice()) {
        window.alert("Il PDF completo su mobile può fallire. Apro la stampa del browser come alternativa.");
        window.print();
      } else {
        window.alert("Impossibile generare il PDF. Riprova tra qualche secondo.");
      }
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
                {isGenerating ? "Generazione..." : "Scarica PDF"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
