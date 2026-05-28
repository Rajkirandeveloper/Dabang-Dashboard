import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { SectionCard, LegendRow } from "./ui/Cards";
import { revenueData } from "../data/chartData";

const LEGEND = [
  { color: "#6366f1", label: "Online Sales",  shape: "bar" },
  { color: "#c7d2fe", label: "Offline Sales", shape: "bar" },
];

export default function TotalRevenue() {
  return (
    <SectionCard title="Total Revenue" style={{ flex: 1.5 }}>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={revenueData} margin={{ top: 5, right: 0, left: -30, bottom: 0 }} barGap={3}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="day" tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 10, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,.08)" }} />
          <Bar dataKey="online"  fill="#6366f1" radius={[4,4,0,0]} barSize={10} />
          <Bar dataKey="offline" fill="#c7d2fe" radius={[4,4,0,0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
      <LegendRow items={LEGEND} />
    </SectionCard>
  );
}
