import { SlideShell } from "./SlideShell";
import { T, IMGS } from "./tokens";

const keywords = [
  {
    titolo: "Validazione Scientifica",
    sub: "Cosmed Performance",
    desc: "Ogni claim si basa su dati clinici verificati. Il brand Performance comunica rigore, precisione e affidabilità verso un pubblico di professionisti esigenti.",
    visual: "Grafici metabolici, dati REE, report clinici strutturati, infografiche di protocollo",
    colore: T.gold,
    bg: "rgba(196,169,125,0.06)",
    border: "rgba(196,169,125,0.18)",
  },
  {
    titolo: "Precisione Metabolica",
    sub: "Cosmed Performance",
    desc: "La misurazione è il core product. Il linguaggio visivo deve evocare strumenti di alta precisione, laboratori puliti, dati impeccabili — nessuna ambiguità.",
    visual: "Strumenti di misura, microscopi, dati numerici, linee clean su fondo scuro",
    colore: T.slate,
    bg: "rgba(107,124,147,0.06)",
    border: "rgba(107,124,147,0.18)",
  },
  {
    titolo: "Equilibrio Vitale",
    sub: "Cosmed Wellness",
    desc: "Il brand Wellness comunica trasformazione, benessere duraturo e armonia tra scienza e qualità della vita. Lusso sobrio, non ostentato.",
    visual: "Seta in movimento, rifrazione della luce, acqua cristallina, texture organiche naturali",
    colore: T.gold,
    bg: "rgba(196,169,125,0.06)",
    border: "rgba(196,169,125,0.18)",
  },
  {
    titolo: "Eccellenza Commerciale",
    sub: "Cosmed Wellness",
    desc: "Il vantaggio competitivo concreto: Cosmed è l'unico partner che combina autorevolezza scientifica e differenziazione commerciale per il professionista del wellness.",
    visual: "Spazi premium, centri benessere di lusso, luce naturale, materiali nobili",
    colore: T.slate,
    bg: "rgba(107,124,147,0.06)",
    border: "rgba(107,124,147,0.18)",
  },
];

const immagini = [
  { url: IMGS.fluid, span: "col-span-2 row-span-2", label: "Flusso Organico", tag: "Metabolic Flow" },
  { url: IMGS.wellness, span: "col-span-1 row-span-1", label: "Spazio Premium", tag: "Wellness" },
  { url: IMGS.editorial, span: "col-span-1 row-span-1", label: "Estetica Editoriale", tag: "Brand" },
  { url: IMGS.cover, span: "col-span-2 row-span-1", label: "Flusso Molecolare", tag: "Performance" },
];

export function Slide09Moodboard() {
  return (
    <SlideShell slideNum={9} slideTitle="Concept & Moodboard Visiva">
      <div className="flex flex-col h-full gap-4">
        {/* Heading */}
        <div className="flex items-baseline gap-4 shrink-0">
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: T.text, letterSpacing: "-0.03em" }}>
            Concept Visivo & Direzione Artistica
          </h2>
          <span style={{ fontFamily: T.mono, fontSize: "9px", color: T.textMuted, letterSpacing: "0.2em" }}>VISUAL IDENTITY DIRECTION</span>
        </div>

        <div className="flex gap-5 flex-1 min-h-0">
          {/* LEFT: Keywords grid */}
          <div className="grid grid-cols-2 gap-3" style={{ width: "52%" }}>
            {keywords.map(k => (
              <div key={k.titolo} className="rounded-xl p-4 flex flex-col"
                style={{ background: k.bg, border: `1px solid ${k.border}`, borderLeft: `3px solid ${k.colore}` }}>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontFamily: T.mono, fontSize: "7px", color: k.colore, border: `1px solid ${k.colore}30`, background: `${k.colore}08`, borderRadius: "3px", padding: "2px 6px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {k.sub}
                  </span>
                </div>
                <h4 style={{ fontFamily: T.sans, fontSize: "14px", fontWeight: 800, color: T.text, letterSpacing: "-0.02em", marginBottom: "6px" }}>
                  {k.titolo}
                </h4>
                <p style={{ fontFamily: T.sansAlt, fontSize: "10px", color: T.textSub, lineHeight: "1.65", flex: 1 }}>
                  {k.desc}
                </p>
                <div className="mt-3 pt-2.5" style={{ borderTop: `1px solid ${k.border}` }}>
                  <span style={{ fontFamily: T.mono, fontSize: "7.5px", color: k.colore, letterSpacing: "0.1em", display: "block", marginBottom: "3px" }}>IMMAGINARIO</span>
                  <p style={{ fontFamily: T.sansAlt, fontSize: "9px", color: T.textMuted, lineHeight: "1.4", fontStyle: "italic" }}>
                    {k.visual}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Image mosaic */}
          <div className="flex-1 grid gap-2" style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr 1fr" }}>
            {/* Large fluid image */}
            <div className="relative rounded-xl overflow-hidden" style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}>
              <img src={IMGS.fluid} alt="Flusso Metabolico" className="w-full h-full object-cover"
                style={{ filter: "brightness(0.75) saturate(0.7)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(28,31,38,0.8) 100%)" }} />
              <div className="absolute bottom-3 left-3">
                <span style={{ fontFamily: T.mono, fontSize: "7px", color: T.gold, letterSpacing: "0.2em", display: "block" }}>METABOLIC FLOW</span>
                <span style={{ fontFamily: T.sans, fontSize: "11px", fontWeight: 700, color: "#FFFFFF" }}>Flusso Organico</span>
              </div>
            </div>

            {/* Wellness */}
            <div className="relative rounded-xl overflow-hidden" style={{ gridColumn: "3", gridRow: "1" }}>
              <img src={IMGS.wellness} alt="Wellness" className="w-full h-full object-cover"
                style={{ filter: "brightness(0.65) saturate(0.75)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(28,31,38,0.85) 100%)" }} />
              <div className="absolute bottom-2 left-2">
                <span style={{ fontFamily: T.mono, fontSize: "6px", color: T.goldLight, letterSpacing: "0.15em", display: "block" }}>WELLNESS</span>
                <span style={{ fontFamily: T.sans, fontSize: "9px", fontWeight: 700, color: "#FFFFFF", lineHeight: "1.2" }}>Spazio Premium</span>
              </div>
            </div>

            {/* Editorial */}
            <div className="relative rounded-xl overflow-hidden" style={{ gridColumn: "3", gridRow: "2" }}>
              <img src={IMGS.editorial} alt="Editorial" className="w-full h-full object-cover"
                style={{ filter: "brightness(0.65) saturate(0.6)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(28,31,38,0.85) 100%)" }} />
              <div className="absolute bottom-2 left-2">
                <span style={{ fontFamily: T.mono, fontSize: "6px", color: T.slateLight, letterSpacing: "0.15em", display: "block" }}>BRAND</span>
                <span style={{ fontFamily: T.sans, fontSize: "9px", fontWeight: 700, color: "#FFFFFF", lineHeight: "1.2" }}>Estetica</span>
              </div>
            </div>

            {/* Performance */}
            <div className="relative rounded-xl overflow-hidden" style={{ gridColumn: "1 / 4", gridRow: "3" }}>
              <img src={IMGS.cover} alt="Performance" className="w-full h-full object-cover"
                style={{ filter: "brightness(0.4) saturate(0.5)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(28,31,38,0.9) 0%, transparent 50%, rgba(28,31,38,0.9) 100%)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span style={{ fontFamily: T.sans, fontSize: "clamp(12px, 1.5vw, 18px)", fontWeight: 900, color: "rgba(242,239,233,0.15)", letterSpacing: "0.35em", textTransform: "uppercase" }}>
                  THE METABOLIC COMPANY
                </span>
              </div>
              <div className="absolute bottom-2 left-3">
                <span style={{ fontFamily: T.mono, fontSize: "6px", color: T.gold, letterSpacing: "0.2em" }}>PERFORMANCE · SCIENTIFICO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
