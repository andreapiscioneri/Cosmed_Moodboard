const colors = [
  {
    name: "Tech Blue",
    hex: "#0B6FFF",
    rgb: "RGB 11 · 111 · 255",
    role: "Primario — Azione & Identità",
    swatch: "linear-gradient(135deg, #0B6FFF 0%, #2E8BFF 100%)",
  },
  {
    name: "Deep Navy",
    hex: "#0D1A2E",
    rgb: "RGB 13 · 26 · 46",
    role: "Primario — Sfondo & Profondità",
    swatch: "linear-gradient(135deg, #0D1A2E 0%, #0F2140 100%)",
  },
  {
    name: "Medical White",
    hex: "#F0F4FA",
    rgb: "RGB 240 · 244 · 250",
    role: "Secondario — Spazio Clinico",
    swatch: "linear-gradient(135deg, #E8EFF8 0%, #FFFFFF 100%)",
  },
  {
    name: "Antracite",
    hex: "#2D3A4A",
    rgb: "RGB 45 · 58 · 74",
    role: "Secondario — UI & Struttura",
    swatch: "linear-gradient(135deg, #2D3A4A 0%, #3A4A5E 100%)",
  },
  {
    name: "Signal Blue",
    hex: "#00D4FF",
    rgb: "RGB 0 · 212 · 255",
    role: "Accento — Dati & Alert",
    swatch: "linear-gradient(135deg, #00D4FF 0%, #00AADD 100%)",
  },
  {
    name: "Slate",
    hex: "#1A2535",
    rgb: "RGB 26 · 37 · 53",
    role: "Neutro — Superfici Card",
    swatch: "linear-gradient(135deg, #1A2535 0%, #202E40 100%)",
  },
];

export function ColorPalette() {
  return (
    <div
      className="p-10"
      style={{ borderRight: "1px solid #1A2535", background: "#0D1117" }}
    >
      <div className="mb-6">
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "9px",
            color: "#0B6FFF",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Sistema Colore
        </p>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "22px",
            fontWeight: "800",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
          }}
        >
          Palette di Brand
        </h2>
      </div>

      {/* Large primary swatch */}
      <div
        className="w-full rounded-md mb-4 flex items-end p-4"
        style={{
          height: "100px",
          background: "linear-gradient(135deg, #0B6FFF 0%, #0044CC 50%, #0D1A2E 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              fontWeight: "800",
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            Tech Blue → Deep Navy
          </p>
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "9px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.1em",
            }}
          >
            Gradiente Primario — Identità Cosmed Performance
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {colors.map((color) => (
          <div key={color.hex}>
            <div
              className="w-full mb-2 rounded"
              style={{
                height: "52px",
                background: color.swatch,
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: "600",
                color: "#C8D8E8",
                marginBottom: "1px",
              }}
            >
              {color.name}
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "10px",
                color: "#0B6FFF",
                marginBottom: "1px",
              }}
            >
              {color.hex}
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "7px",
                color: "#2A4060",
                letterSpacing: "0.04em",
              }}
            >
              {color.role}
            </p>
          </div>
        ))}
      </div>

      {/* Gradient bar */}
      <div className="mt-5 rounded-sm overflow-hidden" style={{ height: "6px" }}>
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, #0B6FFF 0%, #00D4FF 25%, #F0F4FA 50%, #2D3A4A 75%, #0D1A2E 100%)",
          }}
        />
      </div>
    </div>
  );
}
