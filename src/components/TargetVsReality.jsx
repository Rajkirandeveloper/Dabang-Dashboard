import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { SectionCard } from "./ui/Cards";
import { targetData } from "../data/chartData";

const STATS = [
  { color: "#fbbf24", label: "Reality Sales", value: "8,823"  },
  { color: "#6366f1", label: "Target Sales",  value: "12,122" },
];

export default function TargetVsReality() {
  return (
    <SectionCard title="Target vs Reality" style={{ flex: 1 }}>
      <ResponsiveContainer width="100%" height={148}>
        <BarChart data={targetData} margin={{ top: 5, right: 0, left: -30, bottom: 0 }} barGap={3}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 10, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,.08)" }} />
          <Bar dataKey="reality" fill="#fbbf24" radius={[4,4,0,0]} barSize={10} />
          <Bar dataKey="target"  fill="#6366f1" radius={[4,4,0,0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 10 }}>
        {STATS.map(({ color, label, value }) => (
          <div
            key={label}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
              <span style={{ color: "#64748b" }}>{label}</span>
            </div>
            <span style={{ fontWeight: 700, color: "#1e1b4b" }}>{value}</span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
