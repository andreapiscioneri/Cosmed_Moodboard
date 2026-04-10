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
      <div className="relative overflow-hidden" style={{ aspectRatio: "1.91/1" }}>
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
        {[{ icon: "👍", label: "Mi piace" }, { icon: "💬", label: "Commenta" }, { icon: "🔁", label: "Condividi" }, { icon: "📤", label: "Invia" }].map(({ icon, label }) => (
          <button key={label} className="flex items-center gap-1.5 px-3 py-2 rounded-md" style={{ background: "transparent", border: "none", cursor: "pointer" }}>
            <span style={{ fontSize: "14px" }}>{icon}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, color: "#666" }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const specs = [
  { label: "Formato", value: "1200 × 628px", sub: "Ratio 1.91:1 — Standard LinkedIn" },
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

        {/* Mobile section */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: "28px", height: "1px", background: P.perfBlue }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.perfBlue, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Visualizzazione Mobile — App LinkedIn
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 items-start">
            {[
              { visual: perfData, filter: "brightness(0.58) saturate(0.5) hue-rotate(200deg)", headline: "OGNI DATO CONTA.", body: "Il metabolismo non mente. I dati sì, se non li misuri bene. VO₂ Max, REE, Calorimetria Indiretta." },
              { visual: perfFisio, filter: "brightness(0.58) saturate(0.55) hue-rotate(190deg)", headline: "IL PROTOCOLLO GIUSTO.", body: "Non tutti i protocolli clinici sono uguali. La precisione metabolica non è un'opzione." },
            ].map(({ visual, filter, headline, body }, pi) => (
              <div key={pi} style={{ width: "224px", flexShrink: 0 }}>
                <div style={{ background: "#1A2235", borderRadius: "40px", border: "2px solid rgba(255,255,255,0.14)", padding: "14px 10px 18px", boxShadow: "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)" }}>
                  <div style={{ width: "76px", height: "24px", background: "#0D1520", borderRadius: "12px", margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#1A2235" }} />
                  </div>
                  <div style={{ borderRadius: "26px", overflow: "hidden", background: "#FFFFFF" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 14px 4px", background: "#FFFFFF" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "#000" }}>9:41</span>
                      <svg width="15" height="9" viewBox="0 0 24 12"><rect x="0" y="1" width="21" height="10" rx="2.5" stroke="#000" strokeWidth="1.5" fill="none"/><rect x="2" y="3" width="15" height="6" rx="1" fill="#0A66C2"/><rect x="22" y="4" width="2" height="4" rx="1" fill="rgba(0,0,0,0.3)"/></svg>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 12px", background: "#FFFFFF", borderBottom: "1px solid #E0DACE" }}>
                      <img src={linkedinIcon} alt="LinkedIn" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                      <div style={{ display: "flex", gap: "14px" }}>
                        {["🏠","👥","💼","💬","🔔"].map((ic, i) => (
                          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <span style={{ fontSize: "11px" }}>{ic}</span>
                            {i === 0 && <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#0A66C2" }} />}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ background: "#F3F2EF", padding: "8px" }}>
                      <div style={{ background: "#FFFFFF", borderRadius: "8px", overflow: "hidden", border: "1px solid #E0DACE" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px" }}>
                          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #0B0F14 0%, #0B6FFF 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 900, color: "#fff" }}>CP</span>
                          </div>
                          <div>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, color: "#000", margin: 0 }}>COSMED Performance</p>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#666", margin: 0 }}>Medical Technology · 12.8k follower</p>
                          </div>
                        </div>
                        <div style={{ padding: "0 10px 8px" }}>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#000", lineHeight: "1.6", margin: 0 }}>{body}</p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#0A66C2", margin: "4px 0 0" }}>#PrecisioneMetabolica #VO2Max</p>
                        </div>
                        <div style={{ position: "relative", aspectRatio: "1.91/1", overflow: "hidden" }}>
                          <img src={visual} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter }} />
                          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(11,15,20,0.65) 0%, rgba(11,15,20,0.22) 55%, rgba(11,15,20,0.5) 100%)" }} />
                          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "8px" }}>
                            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 900, color: "#EEF2FF", letterSpacing: "-0.03em", textAlign: "center", lineHeight: "1.1" }}>{headline}</p>
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 10px 4px", borderTop: "1px solid #E0DACE" }}>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#666" }}>👍 ❤️ 💡 142</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#666" }}>38 commenti</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around", padding: "4px 0 8px", borderTop: "1px solid #E0DACE" }}>
                          {["👍 Mi piace","💬 Commenta","🔁 Condividi"].map(a => (
                            <span key={a} style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#666" }}>{a}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "72px", height: "4px", background: "rgba(255,255,255,0.22)", borderRadius: "2px", margin: "12px auto 0" }} />
                </div>
                <div style={{ textAlign: "center", marginTop: "8px" }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: "rgba(255,255,255,0.32)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Post {pi + 1} · Mobile</span>
                </div>
              </div>
            ))}
            <div className="flex-1 flex flex-col gap-4 pt-2 xl:max-w-xs">
              <h5 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: "rgba(238,242,255,0.9)", letterSpacing: "-0.01em" }}>Ottimizzato per Mobile</h5>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(238,242,255,0.55)", lineHeight: "1.8" }}>Su mobile LinkedIn il testo del post viene troncato dopo 3 righe. La headline sull'immagine rimane l'ancora visiva principale — leggibile e d'impatto anche a schermo ridotto.</p>
              <div className="flex flex-col gap-2">
                {["Headline visiva sempre visibile a schermo intero", "Immagine 1.91:1 senza bande laterali su mobile", "Copy testo troncato — il visual fa la differenza"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: P.perfBlue, flexShrink: 0, marginTop: "6px" }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(238,242,255,0.5)", lineHeight: "1.65" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
