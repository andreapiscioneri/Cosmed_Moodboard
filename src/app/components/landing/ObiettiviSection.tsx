import type { ReactElement } from "react";
import { P } from "./images";

function renderWithBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={`b-${index}`} style={{ color: P.text, fontWeight: 700 }}>{part}</strong>;
    }
    return <span key={`t-${index}`}>{part}</span>;
  });
}

type Objective = {
  n: string;
  t: string;
  intro: string;
  performance?: string;
  wellBeing?: string;
  icon: (props: { size?: number }) => ReactElement;
  visual: string;
  chips: string[];
  c: string;
  span?: string;
};

type ProductItem = {
  name: string;
  performanceDeclination: string;
  wellBeingDeclination: string;
  icon: (props: { size?: number }) => ReactElement;
  c: string;
  soft: string;
  shine: string;
};

function IconTarget({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function IconShield({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s7-3.8 7-9.5V5.4L12 3l-7 2.4v7.1C5 18.2 12 22 12 22z" />
      <path d="M9.2 12.1 11 13.9l3.8-4" />
    </svg>
  );
}

function IconStar({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 2.8 5.7 6.3.9-4.5 4.3 1.1 6.3L12 17.3 6.3 20.2l1.1-6.3L3 9.6l6.3-.9L12 3z" />
    </svg>
  );
}

function IconForm({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </svg>
  );
}

function IconSale({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 7h-4l-2-3h-4L8 7H4" />
      <path d="M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
      <path d="M9 12h6" />
    </svg>
  );
}

function IconGrowth({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17.5h18" />
      <path d="m6 14 4-4 3 3 5-6" />
      <path d="M18 7h2.5V9.5" />
    </svg>
  );
}

function IconMetabolic({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 20c4-2 8-2 12 0" />
      <path d="M8 4c1.5 2.2 1.5 4.6 0 6.8C6.5 13 6.5 15.2 8 17.4" />
      <path d="M16 4c-1.5 2.2-1.5 4.6 0 6.8 1.5 2.2 1.5 4.4 0 6.6" />
    </svg>
  );
}

const objectives: Objective[] = [
  {
    n: "01",
    t: "Comunicare il valore del marchio nelle due aree specifiche",
    intro: "La proposta parte da una **lettura distinta e rigorosa** delle due anime di Cosmed, così da costruire **messaggi, visual e contenuti** davvero pertinenti per performance e well-being.",
    performance: "Declinazione su **sport medicine**, **test da sforzo**, screening funzionale e **misurazioni oggettive** per atleti e professionisti della performance.",
    wellBeing: "Declinazione su **prevenzione**, **composizione corporea**, controllo metabolico e percorsi di benessere con un linguaggio educativo e rassicurante.",
    icon: IconTarget,
    visual: "Visual di riferimento: atleta in test, curva metabolica, dashboard dati e schede prodotto per aree distinte.",
    chips: ["Atleta in test", "Curva VO2 / RQ", "Dashboard di misurazione"],
    c: P.accent,
    span: "lg:col-span-2",
  },
  {
    n: "02",
    t: "Instaurare fiducia",
    intro: "Ogni contenuto deve dimostrare **autorevolezza**. La fiducia nasce dalla capacità di tradurre la complessità tecnica in **beneficio concreto**.",
    performance: "Per il sub-brand Performance la fiducia nasce da **test ripetibili**, **protocolli solidi** e lettura immediata dei parametri che migliorano la performance atletica in modo concreto e misurabile.",
    wellBeing: "Per il sub-brand Well-being la fiducia cresce offrendo **risultati chiari e immediatamente utilizzabili**: monitoraggio progressi nel tempo, **personalizzazione dei piani** e comunicazione più efficace con il cliente.",
    icon: IconShield,
    visual: "Visual di riferimento: segnale pulito, check di validazione, interfacce chiare e segnali di affidabilità diagnostica.",
    chips: ["Validazione", "Dati oggettivi", "Trasparenza diagnostica"],
    c: P.accentLight,
  },
  {
    n: "03",
    t: 'Consolidare il posizionamento "top-of-mind"',
    intro: "La presenza va resa **riconoscibile e costante**, così che Cosmed venga riconosciuta come leader quando il mercato richiede soluzioni di **misurazione metabolica**, test da sforzo, spirometria e body composition.",
    performance: "Nel mondo Performance la presenza deve essere continua su **medici dello sport**, centri di training, preparatori e strutture di valutazione atletica.",
    wellBeing: "Nel mondo Well-being la presenza deve essere costante su **cliniche, nutrizionisti, centri prevenzione** e professionisti che cercano strumenti di misurazione affidabili.",
    icon: IconStar,
    visual: "Visual di riferimento: pattern ricorrente, touchpoint multipli, badge di brand e ripetizione coerente dei device.",
    chips: ["Memorabilità", "Ripetizione coerente", "Presidio canali"],
    c: P.accent,
  },
  {
    n: "04",
    t: "Raccogliere contatti qualificati tramite form",
    intro: "Guidare l'utente verso una richiesta davvero utile, separando i contatti in base all'interesse e aumentando la qualità del **lead raccolto**.",
    performance: "Form dedicati per **demo**, preventivo e approfondimento tecnico su Q-NRG Max, Q-12 e sistemi per valutazione sportiva.",
    wellBeing: "Form dedicati per **informazione, valutazione e supporto** su spirometria, composizione corporea e percorsi di screening e prevenzione.",
    icon: IconForm,
    visual: "Visual di riferimento: form semplificati, CTA molto chiare, funnel lineare e schede di richiesta per area di interesse.",
    chips: ["Lead qualificato", "Form dedicati", "CTA verticale"],
    c: P.accentLight,
  },
  {
    n: "05",
    t: "Implementare strumenti di vendita diretti per ridurre l'intermediazione e il peso provvigionale dei rivenditori",
    intro: "La proposta deve abilitare **canali più diretti** (siti web, social media, form, advertising) capaci di far emergere il **valore dei prodotti** e di ridurre la dipendenza da passaggi commerciali meno efficienti.",
    icon: IconGrowth,
    visual: "Visual di riferimento: matrix comparativa, funnel di vendita, dashboard commerciale e schede prodotto orientate alla conversione.",
    chips: ["Vendita diretta", "Comparazione tecnica", "Riduzione intermediazione"],
    c: P.accent,
  },
];

const products: ProductItem[] = [
  {
    name: "Q-NRG Max",
    performanceDeclination: "Narrazione orientata a performance misurabile, test da sforzo e ottimizzazione del training, con linguaggio tecnico e orientato al risultato.",
    wellBeingDeclination: "Narrazione orientata a riequilibrio metabolico, personalizzazione dei percorsi e monitoraggio nel tempo, con linguaggio chiaro e rassicurante.",
    icon: IconMetabolic,
    c: P.accentLight,
    soft: "rgba(74,159,175,0.12)",
    shine: "linear-gradient(135deg, rgba(74,159,175,0.18) 0%, rgba(18,31,38,0.02) 65%)",
  },
  {
    name: "Q-12",
    performanceDeclination: "Comunicazione centrata su controllo sotto sforzo, affidabilita del dato e supporto decisionale per professionisti della performance.",
    wellBeingDeclination: "Comunicazione centrata su sicurezza, monitoraggio a riposo e percezione di affidabilita clinica nel percorso del cliente.",
    icon: IconShield,
    c: P.accent,
    soft: "rgba(30,122,138,0.14)",
    shine: "linear-gradient(135deg, rgba(30,122,138,0.18) 0%, rgba(18,31,38,0.02) 72%)",
  },
  {
    name: "Q",
    performanceDeclination: "Nel Performance viene raccontato come strumento agile per screening rapidi e continuita operativa nei contesti ad alta rotazione.",
    wellBeingDeclination: "Nel Well-being viene raccontato come soluzione accessibile e semplice da integrare nei percorsi quotidiani di valutazione.",
    icon: IconForm,
    c: P.accentLight,
    soft: "rgba(74,159,175,0.10)",
    shine: "linear-gradient(135deg, rgba(74,159,175,0.15) 0%, rgba(18,31,38,0.02) 68%)",
  },
  {
    name: "microQuark",
    performanceDeclination: "Comunicazione orientata a praticita e velocita di attivazione per team tecnici che richiedono operativita immediata.",
    wellBeingDeclination: "Comunicazione orientata a semplicita d'uso e adozione immediata in strutture che vogliono un percorso cliente piu fluido.",
    icon: IconTarget,
    c: P.accent,
    soft: "rgba(30,122,138,0.10)",
    shine: "linear-gradient(135deg, rgba(30,122,138,0.14) 0%, rgba(18,31,38,0.02) 70%)",
  },
  {
    name: "Gamma TANITA",
    performanceDeclination: "Nel Performance viene posizionata come base di lettura compositiva per obiettivi atletici e monitoraggio dei cambiamenti nel tempo.",
    wellBeingDeclination: "Nel Well-being viene posizionata come strumento di accompagnamento per prevenzione, motivazione e continuita del percorso.",
    icon: IconStar,
    c: P.accentLight,
    soft: "rgba(74,159,175,0.08)",
    shine: "linear-gradient(135deg, rgba(74,159,175,0.12) 0%, rgba(18,31,38,0.02) 70%)",
  },
];

function ObjectiveCard({ item }: { item: Objective }) {
  return (
    <article
      className={`rounded-2xl p-6 md:p-7 flex flex-col gap-5 ${item.span ?? ""}`}
      style={{ background: P.surface, border: `1px solid ${P.border}`, boxShadow: "0 12px 40px rgba(10, 24, 32, 0.06)" }}
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: item.c, letterSpacing: "0.16em", fontWeight: 700 }}>
            {item.n}
          </span>
          <div className="flex items-center justify-center w-11 h-11 rounded-xl" style={{ background: `${item.c}14`, color: item.c }}>
            <item.icon size={19} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(18px, 2vw, 28px)", fontWeight: 900, color: P.text, letterSpacing: "-0.03em", lineHeight: "1.05" }}>
          {item.t}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textSub, lineHeight: "1.8", maxWidth: "62ch" }}>
          {renderWithBold(item.intro)}
        </p>
      </div>

      {item.performance && item.wellBeing ? (
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl p-4" style={{ background: `${item.c}10`, border: `1px solid ${item.c}1E` }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: item.c, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Performance
            </span>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.text, lineHeight: "1.75", marginTop: "0.45rem" }}>
              {renderWithBold(item.performance)}
            </p>
          </div>

          <div className="rounded-xl p-4" style={{ background: "rgba(18,31,38,0.04)", border: `1px solid ${P.border}` }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.accentLight, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Well-being
            </span>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: P.text, lineHeight: "1.75", marginTop: "0.45rem" }}>
              {renderWithBold(item.wellBeing)}
            </p>
          </div>
        </div>
      ) : null}

    </article>
  );
}

function ProductCard({ item }: { item: ProductItem }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{ background: P.surface, border: `1px solid ${P.border}`, boxShadow: "0 12px 40px rgba(10, 24, 32, 0.06)" }}
    >
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${item.soft} 0%, rgba(255,255,255,0) 62%)` }} />
      <div className="absolute inset-0 opacity-70" style={{ background: item.shine }} />
      <div className="relative p-5 md:p-6 flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl" style={{ background: `${item.c}16`, color: item.c }}>
            <item.icon size={18} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", fontWeight: 900, color: P.text, letterSpacing: "-0.03em" }}>
            {item.name}
          </h4>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12.5px", color: P.text, lineHeight: "1.75" }}>
            <strong style={{ fontWeight: 700 }}>Performance:</strong> {item.performanceDeclination}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12.5px", color: P.textSub, lineHeight: "1.75" }}>
            <strong style={{ color: P.text, fontWeight: 700 }}>Well-being:</strong> {item.wellBeingDeclination}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ObiettiviSection() {
  return (
    <section id="proposta" className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-20" style={{ background: P.bg }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div style={{ width: "28px", height: "1px", background: P.accent }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Il focus della proposta
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(30px, 4.3vw, 60px)", fontWeight: 900, color: P.text, letterSpacing: "-0.05em", lineHeight: "0.92" }}>
              Obiettivi<br />
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: P.textSub, lineHeight: "1.85", maxWidth: "70ch" }}>
              {renderWithBold("Cinque punti fondamentali che guidano l'architettura di comunicazione, posizionamento e crescita commerciale di Cosmed, con un focus mirato su **Performance** e **Well-being**.")}
            </p>
          </div>

          <div className="lg:col-span-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {objectives.map((objective) => (
            <ObjectiveCard key={objective.n} item={objective} />
          ))}
        </div>

        <div className="rounded-2xl p-6 md:p-7" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "28px", height: "1px", background: P.accent }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: P.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Valorizzazione funzionalità di prodotto
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
            {products.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}