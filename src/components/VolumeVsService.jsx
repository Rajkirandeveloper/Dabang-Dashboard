import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { SectionCard } from "./ui/Cards";
import { volumeData } from "../data/chartData";

const SUMMARY = [
  { color: "#6366f1", label: "Volume",   value: "1,135", shape: "bar" },
  { color: "#86efac", label: "Services", value: "635",   shape: "bar" },
];

export default function VolumeVsService() {
  return (
    <SectionCard title="Volume vs Service Level" style={{ flex: 1 }}>
      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={volumeData} margin={{ top: 5, right: 0, left: -30, bottom: 0 }} barGap={3}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 10, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,.08)" }} />
          <Bar dataKey="volume"  fill="#6366f1" radius={[4,4,0,0]} barSize={12} />
          <Bar dataKey="service" fill="#86efac" radius={[4,4,0,0]} barSize={12} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: "flex", gap: 20, marginTop: 10, justifyContent: "center" }}>
        {SUMMARY.map(({ color, label, value }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, justifyContent: "center", fontSize: 10, color: "#64748b" }}>
              <div style={{ width: 10, height: 3, borderRadius: 2, background: color }} />
              {label}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1e1b4b", marginTop: 3 }}>{value}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
