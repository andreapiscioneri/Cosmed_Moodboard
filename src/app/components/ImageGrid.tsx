const images = [
  {
    url: "https://images.unsplash.com/photo-1589104666851-dffe3a15aace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uZXIlMjBzcHJpbnQlMjBwZXJmb3JtYW5jZSUyMHBvd2VyJTIwZHJhbWF0aWMlMjBsaWdodHxlbnwxfHx8fDE3NzUxMjI4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "La Forza del Limite",
    caption: "Prestazione umana al massimo",
    mood: "POTENZA",
    tint: "rgba(11,111,255,0.2)",
  },
  {
    url: "https://images.unsplash.com/photo-1640609718888-256829665521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjBtb2xlY3VsYXIlMjBzY2llbmNlJTIwdmlzdWFsaXphdGlvbiUyMGxpZ2h0fGVufDF8fHx8MTc3NTEyMjgxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Dati come Arte",
    caption: "Visualizzazione molecolare e metabolica",
    mood: "SCIENZA",
    tint: "rgba(0,212,255,0.15)",
  },
  {
    url: "https://images.unsplash.com/photo-1655661811220-6ccdb0d3229b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwc2lsaG91ZXR0ZSUyMG1vdGlvbiUyMGJsdXIlMjBlbmVyZ3klMjBhYnN0cmFjdCUyMHNwb3J0fGVufDF8fHx8MTc3NTEyMjgxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Energia in Movimento",
    caption: "L'emozione della performance",
    mood: "ENERGIA",
    tint: "rgba(11,111,255,0.18)",
  },
  {
    url: "https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFic3RyYWN0JTIwbmV0d29yayUyMG5ldXJhbCUyMGJsdWUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTEyMjgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Intelligenza dei Dati",
    caption: "Rete neurale di analytics biomedici",
    mood: "TECNOLOGIA",
    tint: "rgba(0,212,255,0.12)",
  },
  {
    url: "https://images.unsplash.com/photo-1552550981-4527676e5f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwYnJlYXRoaW5nJTIwb3h5Z2VuJTIwbWFzayUyMGVmZm9ydCUyMHBlcmZvcm1hbmNlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzUxMjI4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Il Respiro della Vittoria",
    caption: "Test cardiorespiratorio di élite",
    mood: "PRECISIONE",
    tint: "rgba(255,107,53,0.15)",
  },
  {
    url: "https://images.unsplash.com/photo-1531851454380-ab14ff755bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaXN0JTIwdHJpYXRobGV0ZSUyMGVsaXRlJTIwcGVyZm9ybWFuY2UlMjBkcmFtYXRpYyUyMGFjdGlvbnxlbnwxfHx8fDE3NzUxMjI4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Verso il Record",
    caption: "Performance ciclistica di élite",
    mood: "ECCELLENZA",
    tint: "rgba(11,111,255,0.2)",
  },
  {
    url: "https://images.unsplash.com/photo-1621947081720-86970823b77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydGJlYXQlMjBwdWxzZSUyMHdhdmUlMjBhYnN0cmFjdCUyMGJsdWUlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzUxMjI4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Il Segnale della Vita",
    caption: "Tracciato del battito — oltre i limiti",
    mood: "VITALITÀ",
    tint: "rgba(255,51,102,0.15)",
  },
  {
    url: "https://images.unsplash.com/photo-1599408278428-3127d9d88bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW50aWZpYyUyMG1pbmltYWwlMjBjbGVhbiUyMGVxdWlwbWVudCUyMGFic3RyYWN0fGVufDF8fHx8MTc3NTEyMjgxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "La Purezza della Misura",
    caption: "Strumentazione clinica di precisione",
    mood: "RIGORE",
    tint: "rgba(0,212,255,0.1)",
  },
];

export function ImageGrid() {
  return (
    <div className="px-10 py-6">
      {/* Intro label */}
      <div className="mb-4 flex items-center justify-between">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "#2A4060",
            letterSpacing: "0.05em",
          }}
        >
          Linguaggio visivo: emozionale · concettuale · scientifico
        </p>
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "9px",
            color: "#1A3050",
            letterSpacing: "0.2em",
          }}
        >
          {images.length} IMMAGINI GUIDA
        </span>
      </div>

      {/* Mosaic layout */}
      <div className="grid grid-cols-4 grid-rows-3 gap-3" style={{ height: "620px" }}>
        {/* Cell 1 - Large hero left top */}
        <MosaicCell image={images[0]} className="col-span-2 row-span-2" />
        {/* Cell 2 - top right medium */}
        <MosaicCell image={images[1]} className="col-span-1 row-span-1" />
        {/* Cell 3 - top right small */}
        <MosaicCell image={images[2]} className="col-span-1 row-span-1" />
        {/* Cell 4 - middle right */}
        <MosaicCell image={images[3]} className="col-span-2 row-span-1" />
        {/* Cell 5 - bottom left */}
        <MosaicCell image={images[4]} className="col-span-1 row-span-1" />
        {/* Cell 6 - bottom center */}
        <MosaicCell image={images[5]} className="col-span-1 row-span-1" />
        {/* Cell 7 - bottom wide */}
        <MosaicCell image={images[6]} className="col-span-2 row-span-1" />
        {/* Cell 8 - bottom right small */}
        <MosaicCell image={images[7]} className="col-span-2 row-span-1" />
      </div>
    </div>
  );
}

function MosaicCell({
  image,
  className,
}: {
  image: (typeof images)[0];
  className: string;
}) {
  return (
    <div
      className={`${className} relative overflow-hidden rounded-md group cursor-pointer`}
      style={{ border: "1px solid #111820" }}
    >
      <img
        src={image.url}
        alt={image.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        style={{ filter: "brightness(0.8) saturate(0.85) contrast(1.05)" }}
      />

      {/* Color mood tint overlay */}
      <div
        className="absolute inset-0"
        style={{ background: image.tint, mixBlendMode: "screen" }}
      />

      {/* Dark gradient bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 40%, rgba(4,8,15,0.9) 100%)",
        }}
      />

      {/* Hover glow border */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(11,111,255,0.4)",
          borderRadius: "inherit",
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {/* Mood tag */}
        <div className="flex items-center gap-2 mb-2">
          <div
            style={{ width: "16px", height: "1px", background: "#0B6FFF" }}
          />
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "7px",
              color: "#0B6FFF",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            {image.mood}
          </span>
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: "700",
            color: "#FFFFFF",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            marginBottom: "2px",
          }}
        >
          {image.label}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            color: "#5A8AB8",
            lineHeight: "1.4",
          }}
        >
          {image.caption}
        </p>
      </div>

      {/* Top right crosshair */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="7" y1="0" x2="7" y2="5" stroke="#0B6FFF" strokeWidth="1.5" />
          <line x1="7" y1="9" x2="7" y2="14" stroke="#0B6FFF" strokeWidth="1.5" />
          <line x1="0" y1="7" x2="5" y2="7" stroke="#0B6FFF" strokeWidth="1.5" />
          <line x1="9" y1="7" x2="14" y2="7" stroke="#0B6FFF" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
