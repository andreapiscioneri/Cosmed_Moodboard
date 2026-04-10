import { P } from "./images";
import odooLogo from "../../../assets/logo odoo.svg";
import wellLongevity3 from "../../../assets/WELLNESS - LONGEVITY 3.jpg";
import wellCuraDiSe from "../../../assets/WELLNESS - CURA DI SE.jpg";
import wellNatura from "../../../assets/WELLNESS - NATURA.jpg";
import wellLongevity2 from "../../../assets/WELLNESS - LONGEVITY 2.jpg";

export function WellnessWebMockup() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#EDE9E2", paddingBottom: "80px" }}>

      {/* Slide header */}
      <div className="flex items-center justify-between px-6 md:px-20 py-8"
        style={{ borderBottom: `1px solid ${P.border}` }}>
        <div className="flex items-center gap-3">
          <div style={{ width: "2px", height: "40px", background: `linear-gradient(180deg, ${P.wellTeal}, transparent)` }} />
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 02 / 02</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.08em", textTransform: "uppercase" }}>Mockup Sito Web · Cosmed Wellness</p>
          </div>
        </div>
        <span className="hidden md:block" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Esempio Applicazione Visiva — Website
        </span>
      </div>

      {/* Container */}
      <div className="px-6 md:px-20 pt-12 pb-4">

        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <div style={{ width: "28px", height: "1px", background: P.wellTeal }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Mockup Homepage — Proposta Visiva
          </span>
        </div>

        {/* Mockup row: browser + phone */}
        <div className="flex flex-col xl:flex-row gap-10 items-start" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Browser frame */}
        <div className="flex-1 min-w-0 rounded-xl overflow-hidden" style={{ border: `1px solid ${P.border}`, boxShadow: "0 40px 80px rgba(14,107,107,0.14)" }}>

          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#E8E4DC", borderBottom: `1px solid ${P.border}` }}>
            <div className="flex gap-2">
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FEBC2E" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840" }} />
            </div>
            <div className="flex items-center gap-2 flex-1 max-w-md mx-auto rounded-md px-3 py-1.5" style={{ background: "#F4F7F5", border: `1px solid ${P.border}` }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6E8798" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "#6E8798", letterSpacing: "0.02em" }}>cosmed.com/wellness</span>
            </div>
          </div>

          {/* Website content */}
          <div>

            {/* Nav bar */}
            <div className="flex items-center justify-between px-8 py-4" style={{ borderBottom: `1px solid ${P.border}`, background: "rgba(255,255,255,0.92)", position: "relative", zIndex: 2 }}>
              <div className="flex items-center gap-2">
                <div style={{ width: "4px", height: "18px", background: P.wellTeal, borderRadius: "2px" }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: "#0A1F1F", letterSpacing: "0.04em" }}>COSMED</span>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "13px", fontStyle: "italic", color: P.wellTeal, marginLeft: "4px" }}>Wellness</span>
              </div>
              <div className="hidden md:flex items-center gap-7">
                {["Nutrizione", "Benessere", "Longevity", "Professionisti"].map(item => (
                  <span key={item} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, color: "#526A7A", letterSpacing: "0.04em" }}>{item}</span>
                ))}
              </div>
              <div className="rounded-full px-5 py-2 hidden md:block" style={{ background: P.wellTeal }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#fff", letterSpacing: "0.06em" }}>Contatti</span>
              </div>
            </div>

            {/* HERO — immagine full-width dominante, testo in overlay */}
            <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
              <img src={wellCuraDiSe} alt="Professionista Wellness" className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(0.78) saturate(0.8)" }} />
              {/* Soft warm overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(10,31,31,0.72) 0%, rgba(10,31,31,0.35) 55%, rgba(10,31,31,0.1) 100%)" }} />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: "linear-gradient(to top, #F4F7F5, transparent)" }} />
              {/* Gold accent bar top */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${P.wellGold}70, transparent)` }} />

              {/* Copy overlay */}
              <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-16 py-16" style={{ maxWidth: "600px" }}>
                <div className="flex items-center gap-2 mb-6">
                  <div style={{ width: "28px", height: "1px", background: P.wellGold }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellGold, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Metabolic Flow</span>
                </div>
                <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(30px, 5vw, 66px)", fontWeight: 700, fontStyle: "italic", color: "#FFFFFF", lineHeight: "1.05", marginBottom: "24px", textShadow: "0 2px 30px rgba(0,0,0,0.3)" }}>
                  Il tuo corpo<br />merita<br /><span style={{ color: `${P.wellGold}EE` }}>equilibrio.</span>
                </h1>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: "1.85", maxWidth: "380px", marginBottom: "32px" }}>
                  Nutrizione clinica, benessere attivo e longevità su misura per te. Ogni percorso inizia dalla conoscenza del tuo metabolismo.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <div className="rounded-full px-6 py-3" style={{ background: P.wellTeal, display: "inline-flex" }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.04em" }}>Inizia il tuo percorso →</span>
                  </div>
                  <div className="rounded-full px-6 py-3" style={{ border: "1px solid rgba(255,255,255,0.45)", display: "inline-flex" }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.04em" }}>Scopri i professionisti</span>
                  </div>
                </div>
                {/* Metrics */}
                <div className="flex gap-10 mt-10 flex-wrap">
                  {[["15k+", "Nutrizionisti"], ["6k+", "Dietologi"], ["8k+", "Centri Wellness"]].map(([v, l]) => (
                    <div key={l} className="flex flex-col">
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 700, fontStyle: "italic", color: P.wellGold }}>{v}</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image mosaic — 4 immagini grandi con copy overlay */}
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: `1px solid ${P.border}` }}>
              {[
                { img: wellNatura, tag: "AMBIENTE NATURALE", copy: "Connessione con la Natura" },
                { img: wellLongevity3, tag: "LONGEVITÀ ATTIVA", copy: "Invecchiare Bene, Vivere Pienamente" },
                { img: wellLongevity2, tag: "EQUILIBRIO VITALE", copy: "Benessere come Stile di Vita" },
                { img: wellCuraDiSe, tag: "CURA DI SÉ", copy: "Ogni Giorno una Scelta" },
              ].map(({ img, tag, copy }, i) => (
                <div key={i} className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img src={img} alt="" className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.7) saturate(0.75)", transform: "scale(1.06)" }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(10,31,31,0.85) 0%, rgba(10,31,31,0.15) 100%)` }} />
                  {/* Gold top line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `${P.wellGold}60` }} />
                  {/* Copy */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: P.wellGold, letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>{tag}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "11px", fontStyle: "italic", fontWeight: 600, color: "#FFFFFF", lineHeight: "1.3" }}>{copy}</span>
                  </div>
                  {i < 3 && <div className="absolute top-0 right-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />}
                </div>
              ))}
            </div>

            {/* Feature bar */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: `1px solid ${P.border}`, background: "#FFFFFF" }}>
              {[
                { title: "Nutrizione Clinica", sub: "Per ogni fisiologia", desc: "Piani nutrizionali basati sulla misurazione metabolica individuale." },
                { title: "Metabolic Flow", sub: "Il tuo ritmo vitale", desc: "Comprendi come il tuo metabolismo risponde al cibo e al movimento." },
                { title: "Longevità Attiva", sub: "Invecchiare bene", desc: "Protocolli integrati per una vita lunga, piena e in salute." },
              ].map((f, i) => (
                <div key={i} className="flex flex-col gap-2 px-7 py-6"
                  style={{ borderRight: i < 2 ? `1px solid ${P.border}` : "none" }}>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 800, color: "#0A1F1F" }}>{f.title}</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: P.wellGold, border: `1px solid ${P.wellGold}40`, borderRadius: "3px", padding: "2px 5px", letterSpacing: "0.04em" }}>{f.sub}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#526A7A", lineHeight: "1.7" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>{/* end mockup row */}

        {/* Caption */}
        <div className="flex items-center justify-between mt-4" style={{ maxWidth: "1100px", margin: "16px auto 0" }}>
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={P.wellTeal} strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: "#6E8798", letterSpacing: "0.08em" }}>
              Mockup illustrativo — Homepage Cosmed Wellness
            </span>
          </div>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: `${P.wellTeal}88`, letterSpacing: "0.06em" }}>
            Visual: professionisti del benessere in azione
          </span>
        </div>

        {/* Design specs panel */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8" style={{ maxWidth: "1100px", margin: "32px auto 0" }}>
          {[
            { label: "Tipografia Heading", value: "Playfair Display Italic", sub: "Peso 700 · Serif · Tracking −0.02em" },
            { label: "Tipografia Label", value: "Montserrat Bold", sub: "Peso 700 · All Caps · Tracking +0.12em" },
            { label: "Palette Primaria", value: "#0E6B6B Deep Teal", sub: "#B8922E Satin Gold · #F4F7F5 Oxygen White" },
            { label: "Strategia Visiva", value: "Immagine dominante", sub: "Hero full-width · Copy in overlay · Mosaico 4 visual con copy editoriale" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="flex flex-col gap-2 px-5 py-4 rounded-lg" style={{ background: "#FFFFFF", border: `1px solid ${P.border}` }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.15em", textTransform: "uppercase" }}>{label}</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.01em" }}>{value}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#526A7A", lineHeight: "1.5" }}>{sub}</span>
            </div>
          ))}
          {/* Framework card — Odoo */}
          <div className="flex flex-col gap-2 px-5 py-4 rounded-lg" style={{ background: "#FFFFFF", border: `1px solid ${P.border}` }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.15em", textTransform: "uppercase" }}>Framework</span>
            <div className="flex items-center gap-2">
              {/* Odoo logo inline */}
              <img src={odooLogo} alt="Odoo" style={{ height: "20px", width: "auto", objectFit: "contain", borderRadius: "3px" }} />
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#526A7A", lineHeight: "1.5" }}>CMS · CRM · Website · Full integration</span>
          </div>
        </div>

      </div>
    </section>
  );
}
