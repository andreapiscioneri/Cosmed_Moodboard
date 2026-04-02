const immagini = [
  {
    url: "https://images.unsplash.com/photo-1735006268781-456f43ff6af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcmlkZXNjZW50JTIwd2F0ZXIlMjByaXBwbGUlMjBtYWNybyUyMGFic3RyYWN0JTIwbGlnaHQlMjByZWZyYWN0aW9ufGVufDF8fHx8MTc3NTEyMzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    titolo: "Dati come Increspature",
    descrizione: "I dati metabolici scorrono come onde — invisibili, precisi, infiniti",
    tag: "FLUSSO",
    coloreAccento: "#0E6B6B",
  },
  {
    url: "https://images.unsplash.com/photo-1758551015352-fa735f167422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93aW5nJTIwc2lsayUyMGZhYnJpYyUyMG1vdGlvbiUyMGx1eHVyeSUyMHNvZnQlMjBsaWdodCUyMGFic3RyYWN0fGVufDF8fHx8MTc3NTEyMzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    titolo: "Seta del Benessere",
    descrizione: "La fluidità del cambiamento metabolico — morbido, lussuoso, inevitabile",
    tag: "FLUIDITÀ",
    coloreAccento: "#B8922E",
  },
  {
    url: "https://images.unsplash.com/photo-1760549001211-5a24d3525cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMHJlZnJhY3Rpb24lMjBnbGFzcyUyMHByaXNtJTIwc3BlY3RydW0lMjBtaW5pbWFsJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzc1MTIzNDY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    titolo: "Lo Spettro della Vita",
    descrizione: "La luce rivela l'invisibile — come la misura metabolica svela il potenziale",
    tag: "RIVELAZIONE",
    coloreAccento: "#4A9090",
  },
  {
    url: "https://images.unsplash.com/photo-1583531172040-e6b2b2bdbb1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwbWluaW1hbGlzdCUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yJTIwZ29sZGVuJTIwbGlnaHQlMjBzYW5jdHVhcnl8ZW58MXx8fHwxNzc1MTIzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    titolo: "Il Santuario della Cura",
    descrizione: "Spazio, luce e intenzione — l'ambiente dove la scienza diventa benessere",
    tag: "SANCTUARIO",
    coloreAccento: "#B8922E",
  },
  {
    url: "https://images.unsplash.com/photo-1774005371978-e97298f854ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRyb3AlMjBwZXJmZWN0JTIwc3ltbWV0cnklMjBtYWNybyUyMHJlZmxlY3Rpb24lMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzUxMjM0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    titolo: "Simmetria Perfetta",
    descrizione: "Una goccia — il momento zero di ogni trasformazione",
    tag: "PRECISIONE",
    coloreAccento: "#0E6B6B",
  },
  {
    url: "https://images.unsplash.com/photo-1603338758319-71d1157208f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwbWljcm8lMjB0ZXh0dXJlJTIwbmF0dXJhbCUyMHBhdHRlcm4lMjBhYnN0cmFjdCUyMGNlbGx1bGFyfGVufDF8fHx8MTc3NTEyMzQ2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    titolo: "Vitalità Cellulare",
    descrizione: "La struttura organica del vivente — micro-pattern della biologia metabolica",
    tag: "BIOLOGIA",
    coloreAccento: "#0E6B6B",
  },
  {
    url: "https://images.unsplash.com/photo-1774232002054-5ede37fd80fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFsJTIwZ29sZCUyMGx1eHVyeSUyMHdlbGxuZXNzJTIwc3BhJTIwc2VyZW5lJTIwbGlnaHQlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzUxMjM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    titolo: "Luce Sanante",
    descrizione: "La qualità della luce come metafora della chiarezza diagnostica",
    tag: "CHIAREZZA",
    coloreAccento: "#B8922E",
  },
  {
    url: "https://images.unsplash.com/photo-1763929766222-dc7d46a4013c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyZWVuJTIwdGVhbCUyMGZsdWlkJTIwd2F2ZSUyMGVuZXJneSUyMGZsb3clMjBwcmVtaXVtfGVufDF8fHx8MTc3NTEyMzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    titolo: "Energia in Flusso",
    descrizione: "Il metabolismo come forza viva — in costante equilibrio dinamico",
    tag: "ENERGIA",
    coloreAccento: "#0E6B6B",
  },
];

export function VisioneEmozionale() {
  return (
    <section className="px-12 py-8">
      <div className="flex items-center gap-4 mb-6">
        <div style={{ width: "28px", height: "1px", background: "linear-gradient(90deg, #B8922E, transparent)" }} />
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "9px",
            color: "#B8922E",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          Visione Emozionale — Linguaggio Visivo del Brand
        </span>
      </div>

      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "290px 210px 270px",
        }}
      >
        <ImageCell img={immagini[0]} style={{ gridColumn: "1", gridRow: "1 / 3" }} />
        <ImageCell img={immagini[1]} style={{ gridColumn: "2", gridRow: "1" }} />
        <ImageCell img={immagini[2]} style={{ gridColumn: "3", gridRow: "1" }} />
        <ImageCell img={immagini[7]} style={{ gridColumn: "4", gridRow: "1 / 3" }} />
        <ImageCell img={immagini[4]} style={{ gridColumn: "2", gridRow: "2" }} />
        <ImageCell img={immagini[5]} style={{ gridColumn: "3", gridRow: "2" }} />
        <ImageCell img={immagini[3]} style={{ gridColumn: "1 / 3", gridRow: "3" }} />
        <ImageCell img={immagini[6]} style={{ gridColumn: "3 / 5", gridRow: "3" }} />
      </div>
    </section>
  );
}

function ImageCell({
  img,
  style,
}: {
  img: (typeof immagini)[0];
  style: React.CSSProperties;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-xl group cursor-pointer"
      style={{
        ...style,
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 2px 12px rgba(14,107,107,0.08)",
      }}
    >
      <img
        src={img.url}
        alt={img.titolo}
        className="w-full h-full object-cover"
        style={{
          filter: "brightness(0.88) saturate(0.95)",
          transform: "scale(1.02)",
          transition: "transform 0.7s ease, filter 0.4s ease",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.transform = "scale(1.1)";
          (e.target as HTMLElement).style.filter = "brightness(0.78) saturate(1.05)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.transform = "scale(1.02)";
          (e.target as HTMLElement).style.filter = "brightness(0.88) saturate(0.95)";
        }}
      />

      {/* Dark gradient bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 40%, rgba(10,31,31,0.82) 100%)",
        }}
      />

      {/* Hover glow border */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `inset 0 0 0 2px ${img.coloreAccento}50`,
          borderRadius: "inherit",
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <div style={{ width: "12px", height: "1px", background: img.coloreAccento === "#B8922E" ? "#D4B060" : img.coloreAccento }} />
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "7px",
              color: img.coloreAccento === "#B8922E" ? "#D4B060" : "#6ABCBC",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            {img.tag}
          </span>
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: "700",
            color: "#F8FAF7",
            lineHeight: "1.2",
            marginBottom: "3px",
            letterSpacing: "-0.01em",
          }}
        >
          {img.titolo}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            color: "rgba(248,250,247,0.55)",
            lineHeight: "1.5",
          }}
        >
          {img.descrizione}
        </p>
      </div>
    </div>
  );
}
