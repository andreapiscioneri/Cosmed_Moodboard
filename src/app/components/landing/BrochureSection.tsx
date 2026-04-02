import { jsPDF } from "jspdf";
import { P } from "./images";

function generateBrochurePDF() {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  let y = 0;

  const addPage = () => { doc.addPage(); y = 20; };
  const checkPage = (needed: number) => { if (y + needed > pageH - 15) addPage(); };

  // ── COVER ──────────────────────────────────────────────────────────────
  doc.setFillColor(26, 45, 54); // P.dark
  doc.rect(0, 0, W, pageH, "F");

  // Accent line
  doc.setDrawColor(30, 122, 138);
  doc.setLineWidth(0.8);
  doc.line(0, 4, W, 4);

  doc.setTextColor(238, 244, 246);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("DeNani per COSMED", W / 2, 55, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(74, 159, 175);
  doc.text("The Metabolic Company", W / 2, 67, { align: "center" });

  doc.setFontSize(10);
  doc.setTextColor(120, 160, 176);
  doc.text("Proposta Marketing & Brand Identity", W / 2, 77, { align: "center" });

  doc.setFontSize(8);
  doc.setTextColor(74, 159, 175);
  doc.text("DOCUMENTO RISERVATO · APRILE", W / 2, pageH - 15, { align: "center" });

  // ── PAGE 2: OBIETTIVI ────────────────────────────────────────────────
  addPage();
  doc.setFillColor(240, 244, 242);
  doc.rect(0, 0, W, pageH, "F");
  y = 20;

  doc.setFillColor(30, 122, 138);
  doc.rect(14, y, 3, 8, "F");
  doc.setTextColor(28, 46, 58);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Obiettivi Strategici", 21, y + 6);
  y += 18;

  const obiettivi = [
    "01  Comunicare il valore del marchio nelle due aree specifiche",
    "02  Instaurare fiducia",
    "03  Consolidare il posizionamento \"top-of-mind\"",
    "04  Raccogliere contatti qualificati tramite form",
    "05  Implementare strumenti di vendita diretti per ridurre l'intermediazione e il peso provvigionale dei rivenditori",
  ];
  obiettivi.forEach(o => {
    checkPage(12);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(74, 97, 112);
    const lines = doc.splitTextToSize(o, W - 28);
    doc.text(lines, 14, y);
    y += lines.length * 6 + 4;
  });

  // ── PAGE 3: TARGET ────────────────────────────────────────────────────
  addPage();
  doc.setFillColor(240, 244, 242);
  doc.rect(0, 0, W, pageH, "F");
  y = 20;

  doc.setFillColor(30, 122, 138);
  doc.rect(14, y, 3, 8, "F");
  doc.setTextColor(28, 46, 58);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Target & Mercato", 21, y + 6);
  y += 20;

  [
    { t: "Cosmed PERFORMANCE", items: ["Fisiatri ~5.000", "Fisioterapisti ~70.000", "Medici dello Sport ~5.000", "Palestre & Centri Fitness ~40.000", "Laboratori di Fisiologia ~1.500"] },
    { t: "Cosmed WELLNESS", items: ["Nutrizionisti ~15.000", "Dietologi ~6.000", "Spa & Centri Benessere ~4.000", "Centri Estetici Medici ~8.000", "Endocrinologi & Diabetologi ~4.000"] },
  ].forEach(group => {
    checkPage(16);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(30, 122, 138);
    doc.text(group.t, 14, y);
    y += 8;
    group.items.forEach(item => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(74, 97, 112);
      doc.text("· " + item, 18, y);
      y += 6;
    });
    y += 6;
  });

  // ── PAGE 4: PACCHETTI ─────────────────────────────────────────────────
  addPage();
  doc.setFillColor(240, 244, 242);
  doc.rect(0, 0, W, pageH, "F");
  y = 20;

  doc.setFillColor(30, 122, 138);
  doc.rect(14, y, 3, 8, "F");
  doc.setTextColor(28, 46, 58);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Piani d'Investimento", 21, y + 6);
  y += 20;

  const piani = [
    { nome: "STANDARD", ut: "€ 22.750", cm: "€ 2.354 / mese", tot: "€ 51.008 (12 mesi)" },
    { nome: "PLUS",     ut: "€ 34.000", cm: "€ 4.250 / mese", tot: "€ 85.000 (12 mesi)" },
    { nome: "GOLD",     ut: "€ 36.000", cm: "€ 7.000 / mese", tot: "€ 120.000 (12 mesi)" },
  ];

  piani.forEach(p => {
    checkPage(28);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(14, y, W - 28, 24, 3, 3, "F");
    doc.setFillColor(30, 122, 138);
    doc.roundedRect(14, y, W - 28, 7, 3, 3, "F");
    doc.rect(14, y + 4, W - 28, 3, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Pacchetto " + p.nome, 18, y + 5.5);
    doc.setTextColor(74, 97, 112);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Una Tantum: " + p.ut + "   ·   Canone: " + p.cm + "   ·   Totale: " + p.tot, 18, y + 15);
    y += 30;
  });

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(30, 122, 138);
  doc.text("Note", 14, y);
  y += 7;
  const note = [
    "Analisi di mercato e Brand Identity hanno costi invariati indifferentemente dal pacchetto.",
    "SEO/GEO hanno costi diversi in funzione della complessità del sito.",
    "La Brochure richiede un pacchetto ore aggiuntivo.",
    "Le voci canone sono proporzionali al volume orario del pacchetto acquistato.",
    "Il budget delle sponsorizzazioni non è incluso ed è consigliato a parte.",
  ];
  note.forEach(n => {
    checkPage(8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(74, 97, 112);
    const lines = doc.splitTextToSize("· " + n, W - 28);
    doc.text(lines, 14, y);
    y += lines.length * 5.5 + 2;
  });

  // ── PAGE 5: ROI ───────────────────────────────────────────────────────
  addPage();
  doc.setFillColor(240, 244, 242);
  doc.rect(0, 0, W, pageH, "F");
  y = 20;

  doc.setFillColor(30, 122, 138);
  doc.rect(14, y, 3, 8, "F");
  doc.setTextColor(28, 46, 58);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Prospetti ROI per Pacchetto", 21, y + 6);
  y += 18;

  const roiData = [
    { nome: "Standard (€ 10.000/anno)", righe: [["Performance", "LinkedIn", "€ 540/mese", "7–12", "€ 45–77"], ["Wellness", "Meta (FB/IG)", "€ 293/mese", "12–18", "€ 16–24"], ["TOTALE", "", "€ 833/mese", "19–30", "~€ 28"]] },
    { nome: "Plus (€ 15.000/anno)",     righe: [["Performance", "LinkedIn", "€ 834/mese", "18–28", "€ 30–46"], ["Wellness", "Meta (FB/IG)", "€ 416/mese", "22–36", "€ 12–19"], ["TOTALE", "", "€ 1.250/mese", "40–64", "~€ 20"]] },
    { nome: "Gold (€ 20.000/anno)",     righe: [["Performance", "LinkedIn", "€ 1.212/mese", "40–65", "€ 19–30"], ["Wellness", "Meta (FB/IG)", "€ 455/mese", "36–60", "€ 8–13"],  ["TOTALE", "", "€ 1.667/mese", "76–125", "~€ 13"]] },
  ];

  const headers = ["Area", "Canale", "Budget Mensile", "Lead/Mese", "CPL Est."];
  const colWidths = [28, 30, 36, 26, 26];
  const tableW = colWidths.reduce((a, b) => a + b, 0);
  const startX = (W - tableW) / 2;

  roiData.forEach(roi => {
    checkPage(42);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(30, 122, 138);
    doc.text(roi.nome, 14, y);
    y += 6;

    // Header row
    let cx = startX;
    doc.setFillColor(30, 122, 138);
    doc.rect(startX, y - 4, tableW, 7, "F");
    headers.forEach((h, i) => {
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.text(h, cx + 2, y);
      cx += colWidths[i];
    });
    y += 5;

    roi.righe.forEach((row, ri) => {
      cx = startX;
      doc.setFillColor(ri === roi.righe.length - 1 ? 220 : (ri % 2 === 0 ? 245 : 255), ri === roi.righe.length - 1 ? 234 : (ri % 2 === 0 ? 249 : 255), ri === roi.righe.length - 1 ? 238 : (ri % 2 === 0 ? 247 : 255));
      doc.rect(startX, y - 4, tableW, 7, "F");
      row.forEach((cell, ci) => {
        doc.setTextColor(ri === roi.righe.length - 1 ? 30 : 74, ri === roi.righe.length - 1 ? 122 : 97, ri === roi.righe.length - 1 ? 138 : 112);
        doc.setFont("helvetica", ri === roi.righe.length - 1 ? "bold" : "normal");
        doc.setFontSize(8);
        doc.text(cell, cx + 2, y);
        cx += colWidths[ci];
      });
      y += 7;
    });
    y += 6;
  });

  // ── LAST PAGE: CONTATTI ───────────────────────────────────────────────
  addPage();
  doc.setFillColor(26, 45, 54);
  doc.rect(0, 0, W, pageH, "F");

  doc.setDrawColor(30, 122, 138);
  doc.setLineWidth(0.8);
  doc.line(0, 4, W, 4);

  doc.setTextColor(238, 244, 246);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Pronti a iniziare?", W / 2, 55, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(120, 160, 176);
  const cText = "Contattaci per avviare la collaborazione e trasformare la strategia in risultati misurabili.";
  const cLines = doc.splitTextToSize(cText, 140);
  doc.text(cLines, W / 2, 67, { align: "center" });

  doc.setFontSize(11);
  doc.setTextColor(74, 159, 175);
  doc.text("support@denani.it", W / 2, 87, { align: "center" });
  doc.text("www.denani.it", W / 2, 95, { align: "center" });

  doc.setFontSize(8);
  doc.setTextColor(74, 159, 175);
  doc.text("PROPOSTA RISERVATA · APRILE · DENANI PER COSMED", W / 2, pageH - 15, { align: "center" });

  doc.save("DeNani-per-COSMED-Proposta.pdf");
}

export function BrochureSection() {
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
            onClick={generateBrochurePDF}
            className="flex items-center gap-3 rounded-2xl px-8 py-4 transition-all duration-200 hover:opacity-90 hover:scale-105 shrink-0"
            style={{ background: P.accent, border: `1px solid ${P.accentLight}40`, cursor: "pointer", transform: "scale(1)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <div className="text-left">
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: "#FFFFFF", display: "block", lineHeight: "1.1" }}>Scarica PDF</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}