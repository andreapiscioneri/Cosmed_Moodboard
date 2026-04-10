import { P } from "./images";
import perfData from "../../../assets/PERFORMANCE - Data Flow.jpg";
import perfFisio from "../../../assets/PERFORMANCE - Fisioterapia.jpg";
import linkedinIcon from "../../../assets/linkedin-icon-free-png.webp";

function PostCard({
  visual,
  visualFilter,
  eyebrow,
  headline,
  headlineAccent,
  subline,
  bodyText,
  hashtags,
  likes,
  comments,
  shares,
  timeAgo,
}: {
  visual: string;
  visualFilter: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subline: string;
  bodyText: React.ReactNode;
  hashtags: string;
  likes: string;
  comments: string;
  shares: string;
  timeAgo: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid #E0DACE", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
      {/* Post header */}
      <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #0B0F14 0%, #0B6FFF 100%)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #0A66C2" }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 900, color: "#fff" }}>CP</span>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 700, color: "#000" }}>COSMED Performance</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#666" }}>Medical Technology · 1st · 12.847 follower</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#999" }}>{timeAgo} ·</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#999"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 700, color: "#0A66C2", border: "1px solid #0A66C2", borderRadius: "20px", padding: "4px 12px", background: "transparent" }}>+ Segui</button>
          <span style={{ color: "#666", fontSize: "18px" }}>···</span>
        </div>
      </div>

      {/* Post body text */}
      <div className="px-4 pb-3">
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#000", lineHeight: "1.7" }}>{bodyText}</div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#0A66C2", lineHeight: "1.7", marginTop: "6px" }}>{hashtags}</p>
      </div>

      {/* Post image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <img src={visual} alt="" className="w-full h-full object-cover" style={{ filter: visualFilter }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${P.perfBlue}08 1px, transparent 1px), linear-gradient(90deg, ${P.perfBlue}08 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,15,20,0.65) 0%, rgba(11,15,20,0.22) 55%, rgba(11,15,20,0.5) 100%)" }} />

        {/* COPY */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-8 text-center">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "28px", height: "1px", background: P.perfBlue }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.2em", textTransform: "uppercase" }}>{eyebrow}</span>
            <div style={{ width: "28px", height: "1px", background: P.perfBlue }} />
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 3.5vw, 44px)", fontWeight: 900, color: "#EEF2FF", letterSpacing: "-0.04em", lineHeight: "0.88", textAlign: "center", marginBottom: "6px" }}>
            {headline}<br /><span style={{ color: P.perfBlue }}>{headlineAccent}</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,1vw,12px)", color: "rgba(238,242,255,0.72)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "12px" }}>{subline}</p>
          <div style={{ width: "48px", height: "2px", background: `linear-gradient(90deg, transparent, ${P.perfBlue}, transparent)`, marginTop: "16px" }} />
        </div>

        {/* Brand corner */}
        <div className="absolute bottom-3 right-4 flex items-center gap-2">
          <div style={{ width: "2px", height: "12px", background: P.perfBlue, borderRadius: "2px" }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 800, color: "rgba(238,242,255,0.75)", letterSpacing: "0.1em" }}>COSMED</span>
        </div>
      </div>

      {/* Reactions */}
      <div className="px-4 py-2" style={{ borderBottom: "1px solid #E0DACE" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-0.5">
              {["#0A66C2", "#E7A33E", "#D85252"].map((c, i) => (
                <div key={i} style={{ width: "16px", height: "16px", borderRadius: "50%", background: c, border: "1.5px solid #fff", zIndex: 3 - i, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "8px" }}>{["👍", "❤️", "💡"][i]}</span>
                </div>
              ))}
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#666" }}>{likes} · {comments} commenti</span>
          </div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#666" }}>{shares} condivisioni</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-around px-2 py-1">
        {[
          {
            label: "Consiglia",
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 11V5a2 2 0 0 1 2-2h1l1 6" />
                <path d="M11 9h6.5a1.5 1.5 0 0 1 1.45 1.1l1.05 4.2A2 2 0 0 1 18 17h-4.5" />
                <path d="M8 11H4v10h4" />
                <path d="M8 11v10" />
              </svg>
            ),
          },
          {
            label: "Commenta",
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a3 3 0 0 1-3 3H9l-4 4v-4H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
              </svg>
            ),
          },
          {
            label: "Diffondi il post",
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12a8 8 0 0 1 14-5" />
                <path d="M18 7v4h-4" />
                <path d="M20 12a8 8 0 0 1-14 5" />
                <path d="M6 17v-4h4" />
              </svg>
            ),
          },
          {
            label: "Invia",
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4 20-7z" />
              </svg>
            ),
          },
        ].map(({ icon, label }) => (
          <button key={label} className="flex flex-col items-center gap-1 px-3 py-2 rounded-md" style={{ background: "transparent", border: "none", cursor: "pointer", color: "#4B4B4B" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{icon}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, color: "#4B4B4B" }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const specs = [
  { label: "Formato", value: "1080 × 1440px", sub: "Ratio 3:4 — Vertical feed format" },
  { label: "Tipografia Heading", value: "Inter ExtraBold", sub: "Peso 900 · Tracking −0.04em · All Caps" },
  { label: "Tipografia Label", value: "Montserrat Bold", sub: "Peso 700 · All Caps · Tracking +0.2em" },
  { label: "Palette Visual", value: "#0B6FFF Tech Blue", sub: "#0B0F14 Anthracite · #EEF2FF Ice White" },
  { label: "Tono Comunicativo", value: "Autorevole, clinico", sub: "Dati reali · copy diretto · no rettorica" },
  { label: "Best Posting Time", value: "Mar–Gio · 8:00–10:00", sub: "Target: professionisti sanitari B2B" },
];

export function PerformanceLinkedInPost() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#0D1520", paddingBottom: "80px" }}>

      {/* Slide header */}
      <div className="flex items-center justify-between px-6 md:px-20 py-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-3">
          <div style={{ width: "2px", height: "40px", background: `linear-gradient(180deg, ${P.perfBlue}, transparent)` }} />
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 01 / 02</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.08em", textTransform: "uppercase" }}>Mockup Post LinkedIn · Cosmed Performance</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <img src={linkedinIcon} alt="LinkedIn" style={{ width: "18px", height: "18px", objectFit: "contain" }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Social B2B — 2 Esempi di Post
          </span>
        </div>
      </div>

      <div className="px-6 md:px-20 pt-12">

        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <div style={{ width: "28px", height: "1px", background: P.perfBlue }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            2 Esempi di Post LinkedIn — Proposta Visiva
          </span>
        </div>

        {/* Two-col layout: LinkedIn UI left + Specs right */}
        <div className="flex flex-col xl:flex-row gap-8 items-start">

          {/* LinkedIn UI */}
          <div className="flex-1 min-w-0">
            <div className="rounded-xl overflow-hidden" style={{ background: "#F3F2EF", border: "1px solid #D6D0C4", boxShadow: "0 20px 60px rgba(0,0,0,0.45)" }}>

              {/* LinkedIn top bar */}
              <div className="flex items-center justify-between px-4 py-3" style={{ background: "#FFFFFF", borderBottom: "1px solid #E0DACE" }}>
                <div className="flex items-center gap-6">
                  <img src={linkedinIcon} alt="LinkedIn" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
                  <div className="hidden sm:flex items-center gap-5">
                    {["Home", "Rete", "Lavoro", "Messaggi", "Notifiche"].map(n => (
                      <span key={n} style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#666" }}>{n}</span>
                    ))}
                  </div>
                </div>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 800, color: "#fff" }}>C</span>
                </div>
              </div>

              {/* Feed: 2 posts side by side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4" style={{ background: "#F3F2EF" }}>
                <PostCard
                  visual={perfData}
                  visualFilter="brightness(0.58) saturate(0.5) hue-rotate(200deg)"
                  eyebrow="COSMED Performance"
                  headline="OGNI DATO"
                  headlineAccent="CONTA."
                  subline="Calorimetria Indiretta · VO₂ Max · REE"
                  bodyText={
                    <>
                      Il metabolismo <strong>non mente</strong>. I dati sì, se non li misuri bene.<br /><br />
                      <strong>VO₂ Max, REE, Calorimetria Indiretta</strong>: non sono semplici parametri. Sono la differenza tra un protocollo efficace e uno generico.
                    </>
                  }
                  hashtags="#PrecisioneMetabolica #VO2Max #CalorimetriaIndiretta #COSMED"
                  likes="142"
                  comments="38"
                  shares="7"
                  timeAgo="Oggi"
                />
                <PostCard
                  visual={perfFisio}
                  visualFilter="brightness(0.58) saturate(0.55) hue-rotate(190deg)"
                  eyebrow="COSMED Performance"
                  headline="IL PROTOCOLLO"
                  headlineAccent="GIUSTO."
                  subline="Fisiatri · Medici dello Sport · Fisioterapisti"
                  bodyText={
                    <>
                      Non tutti i protocolli clinici sono uguali.<br /><br />
                      Chi lavora con <strong>fisiatri e medici dello sport</strong> sa che la precisione metabolica non è un'opzione — è lo standard. Ogni sessione è un dato.
                    </>
                  }
                  hashtags="#RigoreClinoco #MedicoSport #Fisioterapia #ValidazioneScientifica #COSMED"
                  likes="217"
                  comments="54"
                  shares="12"
                  timeAgo="2 giorni fa"
                />
              </div>
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img src={linkedinIcon} alt="LinkedIn" style={{ width: "12px", height: "12px", objectFit: "contain" }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
                  Mockup illustrativo — 2 Post LinkedIn Cosmed Performance
                </span>
              </div>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: "rgba(11,111,255,0.5)", letterSpacing: "0.06em" }}>
                Canale B2B · Specialisti Clinici
              </span>
            </div>
          </div>

          {/* Specs sidebar */}
          <div className="flex flex-col gap-3 xl:w-64 flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <div style={{ width: "20px", height: "1px", background: P.perfBlue }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.14em", textTransform: "uppercase" }}>Note Creative</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(238,242,255,0.6)", lineHeight: "1.8", marginBottom: "4px" }}>
              Il visual è l'elemento dominante del post. Il copy in Inter ExtraBold occupa il centro del'immagine su sfondo scuro, garantendo massima leggibilità nel feed LinkedIn.
            </p>
            {specs.map(({ label, value, sub }) => (
              <div key={label} className="flex flex-col gap-1 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: P.perfBlue }}>{value}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "rgba(238,242,255,0.45)", lineHeight: "1.5" }}>{sub}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
