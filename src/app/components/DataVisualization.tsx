import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const vo2Data = [
  { tempo: "0:00", vo2: 12, fc: 68, rer: 0.75 },
  { tempo: "1:00", vo2: 18, fc: 85, rer: 0.78 },
  { tempo: "2:00", vo2: 24, fc: 102, rer: 0.81 },
  { tempo: "3:00", vo2: 32, fc: 118, rer: 0.84 },
  { tempo: "4:00", vo2: 39, fc: 132, rer: 0.88 },
  { tempo: "5:00", vo2: 44, fc: 142, rer: 0.92 },
  { tempo: "6:00", vo2: 50, fc: 152, rer: 0.97 },
  { tempo: "7:00", vo2: 56, fc: 161, rer: 1.02 },
  { tempo: "8:00", vo2: 61, fc: 168, rer: 1.08 },
  { tempo: "9:00", vo2: 65, fc: 174, rer: 1.15 },
  { tempo: "10:00", vo2: 68, fc: 178, rer: 1.22 },
  { tempo: "11:00", vo2: 72, fc: 183, rer: 1.30 },
  { tempo: "12:00", vo2: 74, fc: 185, rer: 1.38 },
];

const metriche = [
  { label: "VO₂ Max", valore: "72.4", unita: "mL/kg/min", stato: "Élite", colore: "#0B6FFF" },
  { label: "VT1 (SA)", valore: "48.2", unita: "mL/kg/min", stato: "Soglia Aerobica", colore: "#00D4FF" },
  { label: "VT2 (SLA)", valore: "61.8", unita: "mL/kg/min", stato: "Soglia Lattacida", colore: "#FF6B35" },
  { label: "FC Massima", valore: "185", unita: "bpm", stato: "Picco", colore: "#FF3366" },
  { label: "RER Picco", valore: "1.38", unita: "ratio", stato: "Sforzo Max", colore: "#9B59B6" },
  { label: "Durata Test", valore: "12:47", unita: "mm:ss", stato: "Prot. Bruce", colore: "#2ECC71" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#0D1A2E",
          border: "1px solid #1A3A5A",
          borderRadius: "4px",
          padding: "8px 12px",
          fontFamily: "'Roboto Mono', monospace",
          fontSize: "10px",
          color: "#8AAFCC",
        }}
      >
        <p style={{ color: "#0B6FFF", marginBottom: "4px" }}>{label}</p>
        {payload.map((p: any) => (
          <p key={p.dataKey} style={{ color: p.color }}>
            {p.name}: {p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function DataVisualization() {
  return (
    <div className="px-10 py-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Grafico principale */}
        <div
          className="xl:col-span-2 rounded-md p-6"
          style={{ background: "#0A1520", border: "1px solid #1A2535" }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "9px",
                  color: "#0B6FFF",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Protocollo Live · Bruce Ramp
              </p>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: "800",
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                Cinetica VO₂ e Risposta Cardiaca
              </h3>
            </div>
            <div className="flex items-center gap-4">
              {[
                { colore: "#0B6FFF", etichetta: "VO₂ (mL/kg/min)" },
                { colore: "#FF3366", etichetta: "FC (bpm)" },
              ].map((item) => (
                <div key={item.etichetta} className="flex items-center gap-2">
                  <div
                    className="rounded-full"
                    style={{ width: "8px", height: "8px", background: item.colore }}
                  />
                  <span
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "8px",
                      color: "#3A5A7A",
                    }}
                  >
                    {item.etichetta}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={vo2Data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="vo2Gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0B6FFF" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#0B6FFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="fcGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF3366" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#FF3366" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1A2535" />
              <XAxis
                dataKey="tempo"
                tick={{ fill: "#2A4060", fontSize: 9, fontFamily: "Roboto Mono" }}
                axisLine={{ stroke: "#1A2535" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#2A4060", fontSize: 9, fontFamily: "Roboto Mono" }}
                axisLine={{ stroke: "#1A2535" }}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                x="6:00"
                stroke="#00D4FF"
                strokeDasharray="3 3"
                strokeOpacity={0.5}
                label={{ value: "SA", fill: "#00D4FF", fontSize: 9, fontFamily: "Roboto Mono" }}
              />
              <ReferenceLine
                x="9:00"
                stroke="#FF6B35"
                strokeDasharray="3 3"
                strokeOpacity={0.5}
                label={{ value: "SLA", fill: "#FF6B35", fontSize: 9, fontFamily: "Roboto Mono" }}
              />
              <Area
                type="monotone"
                dataKey="vo2"
                name="VO₂"
                stroke="#0B6FFF"
                strokeWidth={2}
                fill="url(#vo2Gradient)"
                dot={false}
                activeDot={{ r: 4, fill: "#0B6FFF" }}
              />
              <Area
                type="monotone"
                dataKey="fc"
                name="FC"
                stroke="#FF3366"
                strokeWidth={1.5}
                fill="url(#fcGradient)"
                dot={false}
                activeDot={{ r: 4, fill: "#FF3366" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pannello metriche */}
        <div
          className="rounded-md p-6"
          style={{ background: "#0A1520", border: "1px solid #1A2535" }}
        >
          <div className="mb-4">
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "9px",
                color: "#0B6FFF",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Marcatori Metabolici
            </p>
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: "800",
                color: "#FFFFFF",
              }}
            >
              Riepilogo del Test
            </h3>
          </div>

          <div className="space-y-3">
            {metriche.map((m) => (
              <div
                key={m.label}
                className="rounded p-3"
                style={{ background: "#0D1A2E", border: "1px solid #1A2535" }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p
                      style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "8px",
                        color: "#2A4060",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "3px",
                      }}
                    >
                      {m.label}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "22px",
                          fontWeight: "900",
                          color: m.colore,
                          lineHeight: "1",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {m.valore}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Roboto Mono', monospace",
                          fontSize: "9px",
                          color: "#1E3A5A",
                        }}
                      >
                        {m.unita}
                      </span>
                    </div>
                  </div>
                  <div
                    className="px-2 py-1 rounded"
                    style={{
                      background: `${m.colore}18`,
                      border: `1px solid ${m.colore}30`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "7px",
                        color: m.colore,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {m.stato}
                    </span>
                  </div>
                </div>
                <div className="mt-2 rounded-full overflow-hidden" style={{ height: "2px", background: "#1A2535" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.min(
                        (parseFloat(m.valore.replace(":", "")) /
                          (m.unita === "bpm" ? 220 : m.unita === "mL/kg/min" ? 85 : 15)) * 100,
                        100
                      )}%`,
                      background: m.colore,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
