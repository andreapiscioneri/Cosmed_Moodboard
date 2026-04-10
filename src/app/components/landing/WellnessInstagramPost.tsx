import { P } from "./images";
import wellNatura from "../../../assets/WELLNESS - NATURA.jpg";
import wellCuraDiSe from "../../../assets/WELLNESS - CURA DI SE.jpg";
import instagramIcon from "../../../assets/instagram-logo-instagram-icon-transparent-free-png.webp";

function IGPost({
  image, imageFilter, label, quote, subline, caption, hashtags, likes, timeAgo,
}: {
  image: string; imageFilter: string; label: string; quote: string;
  subline: string; caption: string; hashtags: string; likes: string; timeAgo: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "#FAFAFA", border: "1px solid #D8D4CB", boxShadow: "0 20px 60px rgba(14,107,107,0.12)" }}>
      <div className="flex items-center justify-between px-3 py-3">
        <div className="flex items-center gap-2">
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: `linear-gradient(135deg, ${P.wellTeal}, ${P.wellGold})`, padding: "2px" }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#FAFAFA", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 800, color: P.wellTeal }}>CW</span>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 700, color: "#262626" }}>cosmedwellness</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#8E8E8E" }}>Milano, Italia</p>
          </div>
        </div>
        <span style={{ color: "#262626", fontSize: "16px", letterSpacing: "1px" }}>···</span>
      </div>

      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
        <img src={image} alt="" className="w-full h-full object-cover" style={{ filter: imageFilter }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,31,31,0.1) 0%, rgba(10,31,31,0.58) 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${P.wellGold}80, transparent)` }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-5 px-5">
          <div className="flex items-center gap-2 mb-2">
            <div style={{ width: "16px", height: "1px", background: P.wellGold }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: `${P.wellGold}CC`, letterSpacing: "0.18em", textTransform: "uppercase" }}>{label}</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(15px, 3.5vw, 20px)", fontWeight: 700, fontStyle: "italic", color: "#FFFFFF", lineHeight: "1.2", marginBottom: "6px", textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
            dangerouslySetInnerHTML={{ __html: quote }}
          />
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 600, color: "rgba(255,255,255,0.65)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{subline}</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
      </div>

      <div className="px-3 pb-3">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 700, color: "#262626", marginBottom: "3px" }}>{likes} mi piace</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#262626", lineHeight: "1.5" }}>
          <strong>cosmedwellness</strong> {caption}<br />
          <span style={{ color: P.wellTeal }}>{hashtags}</span>
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#8E8E8E", marginTop: "3px" }}>{timeAgo}</p>
      </div>
    </div>
  );
}

const specs = [
  { label: "Formato", value: "1080 × 1080px", sub: "Ratio 1:1 — Standard Instagram Feed" },
  { label: "Tipografia Heading", value: "Playfair Display Italic", sub: "Peso 700 · Serif · Tracking +0.01em" },
  { label: "Tipografia Label", value: "Montserrat Bold", sub: "Peso 700 · All Caps · Tracking +0.18em" },
  { label: "Palette Visual", value: "#0E6B6B Deep Teal", sub: "#B8922E Satin Gold · #FFFFFF overlay text" },
  { label: "Tono Comunicativo", value: "Ispirazionale, poetico", sub: "Citazione dominante · copy morbido · natura" },
  { label: "Best Posting Time", value: "Mer–Ven · 18:00–20:00", sub: "Target: nutrizionisti, wellness enthusiast B2C" },
];

export function WellnessInstagramPost() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#EDE9E2", paddingBottom: "80px" }}>

      {/* Slide header */}
      <div className="flex items-center justify-between px-6 md:px-20 py-8" style={{ borderBottom: `1px solid ${P.border}` }}>
        <div className="flex items-center gap-3">
          <div style={{ width: "2px", height: "40px", background: `linear-gradient(180deg, ${P.wellTeal}, transparent)` }} />
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Concept 02 / 02</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.08em", textTransform: "uppercase" }}>Mockup Post Instagram · Cosmed Wellness</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <img src={instagramIcon} alt="Instagram" style={{ width: "18px", height: "18px", objectFit: "contain" }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Social B2C — 2 Esempi di Post
          </span>
        </div>
      </div>

      <div className="px-6 md:px-20 pt-12">

        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <div style={{ width: "28px", height: "1px", background: P.wellTeal }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            2 Esempi di Post Instagram — Proposta Visiva
          </span>
        </div>

        {/* Two-col: phone frame left + specs right */}
        <div className="flex flex-col xl:flex-row gap-8 items-start">

          {/* Phone frame */}
          <div className="flex-1 min-w-0">
            <div className="rounded-3xl overflow-hidden" style={{ background: "#FAFAFA", border: "1px solid #D8D4CB", boxShadow: "0 30px 80px rgba(14,107,107,0.15)" }}>

              {/* Status bar */}
              <div className="flex items-center justify-between px-5 py-2" style={{ background: "#FAFAFA" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, color: "#333" }}>9:41</span>
                <div style={{ width: "14px", height: "8px", border: "1.5px solid #333", borderRadius: "2px", position: "relative" }}>
                  <div style={{ position: "absolute", top: "1px", left: "1px", bottom: "1px", background: "#333", borderRadius: "1px", width: "75%" }} />
                </div>
              </div>

              {/* IG top bar */}
              <div className="flex items-center justify-between px-4 py-2" style={{ background: "#FAFAFA", borderBottom: "1px solid #E8E4DC" }}>
                <div className="flex items-center gap-2">
                  <img src={instagramIcon} alt="Instagram" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                  <span style={{ fontFamily: "'Georgia', serif", fontSize: "18px", color: "#262626", fontStyle: "italic" }}>Instagram</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
              </div>

              {/* Stories */}
              <div className="flex items-center gap-3 px-4 py-3 overflow-x-auto" style={{ background: "#FAFAFA", borderBottom: "1px solid #E8E4DC" }}>
                {["Il tuo", "nutrizione", "benessere", "longevity", "lifestyle"].map((name, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: i === 0 ? "#F0F4F2" : `linear-gradient(45deg, ${P.wellGold}, ${P.wellTeal})`, padding: "2px" }}>
                      <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: i === 0 ? "#fff" : `${P.wellTeal}22`, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #FAFAFA" }}>
                        {i === 0 ? <span style={{ fontSize: "18px", color: "#aaa" }}>+</span> : <span style={{ fontSize: "14px" }}>🌿</span>}
                      </div>
                    </div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#262626", textAlign: "center", maxWidth: "48px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
                  </div>
                ))}
              </div>

              {/* 2 posts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4" style={{ background: "#F3F3F3" }}>
                <IGPost
                  image={wellNatura}
                  imageFilter="brightness(0.72) saturate(0.85)"
                  label="COSMED WELLNESS"
                  quote='"Ogni giorno è<br/>un&apos;occasione<br/>per fiorire."'
                  subline="Nutrizione · Equilibrio · Longevità"
                  caption="Il benessere non è un traguardo. È un modo di stare al mondo. 🌿"
                  hashtags="#MetabolicFlow #WellnessClinico #Longevity #COSMED"
                  likes="2.847"
                  timeAgo="3 ORE FA"
                />
                <IGPost
                  image={wellCuraDiSe}
                  imageFilter="brightness(0.68) saturate(0.8)"
                  label="COSMED WELLNESS"
                  quote='"Prendersi cura<br/>di sé è il primo<br/>atto di salute."'
                  subline="Cura di Sé · Benessere Attivo · Stile di Vita"
                  caption="La nutrizione più potente inizia dalla consapevolezza. Conosci il tuo metabolismo. 🌾"
                  hashtags="#NutrizioneClinica #CuraDiSé #HealthyLifestyle #COSMED"
                  likes="3.112"
                  timeAgo="1 GIORNO FA"
                />
              </div>
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img src={instagramIcon} alt="Instagram" style={{ width: "12px", height: "12px", objectFit: "contain" }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: "#6E8798", letterSpacing: "0.08em" }}>
                  Mockup illustrativo — 2 Post Instagram Cosmed Wellness
                </span>
              </div>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, color: `${P.wellTeal}88`, letterSpacing: "0.06em" }}>
                Canale B2C · Lifestyle & Benessere
              </span>
            </div>
          </div>

          {/* Specs sidebar */}
          <div className="flex flex-col gap-3 xl:w-64 flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <div style={{ width: "20px", height: "1px", background: P.wellTeal }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.14em", textTransform: "uppercase" }}>Note Creative</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#3E596A", lineHeight: "1.8", marginBottom: "4px" }}>
              Il copy visivo è l'elemento dominante del post. La citazione in Playfair Display Italic occupa l'intera metà inferiore del visual, con testo bianco su scuro che garantisce massima leggibilità nel feed.
            </p>
            {specs.map(({ label, value, sub }) => (
              <div key={label} className="flex flex-col gap-1 py-3" style={{ borderTop: `1px solid ${P.border}` }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: P.wellTeal }}>{value}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#526A7A", lineHeight: "1.5" }}>{sub}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile section */}
        <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${P.border}` }}>
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: "28px", height: "1px", background: P.wellTeal }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: P.wellTeal, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Visualizzazione Mobile — App Instagram
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 items-start">
            {[
              { image: wellNatura, filter: "brightness(0.72) saturate(0.85)", quote: "Ogni giorno è\nun'occasione\nper fiorire.", hashtags: "#MetabolicFlow #WellnessClinico #Longevity #COSMED", likes: "2.847", caption: "Il benessere non è un traguardo. È un modo di stare al mondo. 🌿" },
              { image: wellCuraDiSe, filter: "brightness(0.68) saturate(0.8)", quote: "Prendersi cura\ndi sé è il primo\natto di salute.", hashtags: "#NutrizioneClinica #CuraDiSé #COSMED", likes: "3.112", caption: "La nutrizione più potente inizia dalla consapevolezza. Conosci il tuo metabolismo. 🌾" },
            ].map(({ image, filter, quote, hashtags, likes, caption }, pi) => (
              <div key={pi} style={{ width: "224px", flexShrink: 0 }}>
                <div style={{ background: "#D8D4CB", borderRadius: "40px", border: `2px solid ${P.border}`, padding: "14px 10px 18px", boxShadow: "0 30px 60px rgba(14,107,107,0.2), inset 0 1px 0 rgba(255,255,255,0.5)" }}>
                  <div style={{ width: "76px", height: "24px", background: "#C8C3BA", borderRadius: "12px", margin: "0 auto 10px" }} />
                  <div style={{ borderRadius: "26px", overflow: "hidden", background: "#FAFAFA" }}>
                    {/* Status bar */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 14px 4px", background: "#FAFAFA" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, color: "#000" }}>9:41</span>
                      <svg width="15" height="9" viewBox="0 0 24 12"><rect x="0" y="1" width="21" height="10" rx="2.5" stroke="#000" strokeWidth="1.5" fill="none"/><rect x="2" y="3" width="16" height="6" rx="1" fill={P.wellTeal}/><rect x="22" y="4" width="2" height="4" rx="1" fill="rgba(0,0,0,0.3)"/></svg>
                    </div>
                    {/* IG App nav */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 14px", background: "#FAFAFA", borderBottom: "1px solid #E8E4DC" }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", fontStyle: "italic", fontWeight: 700, color: "#262626" }}>Instagram</span>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <span style={{ fontSize: "14px" }}>❤️</span>
                        <img src={instagramIcon} alt="" style={{ width: "18px", height: "18px", objectFit: "contain" }} />
                      </div>
                    </div>
                    {/* Stories row */}
                    <div style={{ display: "flex", gap: "8px", padding: "8px 10px", background: "#FAFAFA", borderBottom: "1px solid #E8E4DC", overflowX: "hidden" }}>
                      {[0,1,2,3].map(i => (
                        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", flexShrink: 0 }}>
                          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: i === 0 ? "#F0F4F2" : `linear-gradient(45deg, ${P.wellGold}, ${P.wellTeal})`, padding: "2px" }}>
                            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: i === 0 ? "#fff" : `${P.wellTeal}22`, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #FAFAFA" }}>
                              <span style={{ fontSize: i === 0 ? "12px" : "9px" }}>{i === 0 ? "+" : "🌿"}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Post */}
                    <div style={{ background: "#FAFAFA" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: `linear-gradient(135deg, ${P.wellTeal}, ${P.wellGold})`, padding: "1.5px" }}>
                            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#FAFAFA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 800, color: P.wellTeal }}>CW</span>
                            </div>
                          </div>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 700, color: "#262626" }}>cosmedwellness</span>
                        </div>
                        <span style={{ color: "#262626", fontSize: "12px" }}>···</span>
                      </div>
                      {/* Square image */}
                      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
                        <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter }} />
                        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(10,31,31,0.82) 0%, rgba(10,31,31,0.22) 45%, rgba(10,31,31,0.05) 100%)` }} />
                        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "12px" }}>
                          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "14px", fontWeight: 700, fontStyle: "italic", color: "#FFFFFF", lineHeight: "1.2", marginBottom: "4px", whiteSpace: "pre-line" }}>{quote}</p>
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "6px", fontWeight: 700, color: `${P.wellGold}CC`, letterSpacing: "0.12em", textTransform: "uppercase" }}>Nutrizione · Equilibrio · Longevità</span>
                        </div>
                      </div>
                      {/* Actions */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 10px 4px" }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <span style={{ fontSize: "14px" }}>🤍</span>
                          <span style={{ fontSize: "14px" }}>💬</span>
                          <span style={{ fontSize: "14px" }}>📤</span>
                        </div>
                        <span style={{ fontSize: "14px" }}>🔖</span>
                      </div>
                      <div style={{ padding: "2px 10px 4px" }}>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 700, color: "#262626", margin: 0 }}>{likes} mi piace</p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#262626", lineHeight: "1.5", margin: "2px 0 0" }}><span style={{ fontWeight: 700 }}>cosmedwellness</span> {caption}</p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#0E6B6B", margin: "2px 0 0" }}>{hashtags}</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "72px", height: "4px", background: "rgba(10,31,31,0.18)", borderRadius: "2px", margin: "12px auto 0" }} />
                </div>
                <div style={{ textAlign: "center", marginTop: "8px" }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 700, color: "#6E8798", letterSpacing: "0.12em", textTransform: "uppercase" }}>Post {pi + 1} · Mobile</span>
                </div>
              </div>
            ))}
            <div className="flex-1 flex flex-col gap-4 pt-2 xl:max-w-xs">
              <h5 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 800, color: "#0A1F1F", letterSpacing: "-0.01em" }}>Ottimizzato per Mobile</h5>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#526A7A", lineHeight: "1.8" }}>Su Instagram mobile il post 1:1 occupa l'intera larghezza dello schermo. La citazione in Playfair Italic sull'immagine è l'elemento dominante — visibile e riconoscibile nel feed anche in scorrimento veloce.</p>
              <div className="flex flex-col gap-2">
                {["Visual quadrato 1:1 — nessuna rifilatura nel feed", "Quote in Playfair Italic leggibile su overlay scuro", "Caption breve + hashtag — visibile senza espandere"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: P.wellTeal, flexShrink: 0, marginTop: "6px" }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#6E8798", lineHeight: "1.65" }}>{t}</span>
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
