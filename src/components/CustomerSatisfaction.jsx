import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { SectionCard } from "./ui/Cards";
import { satisfactionData } from "../data/chartData";

const S = {
  footer: { display: "flex", justifyContent: "space-between", marginTop: 10 },
  footerLabel: { fontSize: 10, color: "#94a3b8" },
  footerValue: (accent) => ({
    fontSize: 14,
    fontWeight: 700,
    color: accent ? "#6366f1" : "#1e1b4b",
    marginTop: 2,
  }),
};

export default function CustomerSatisfaction() {
  return (
    <SectionCard title="Customer Satisfaction" style={{ flex: 1.2 }}>
      <ResponsiveContainer width="100%" height={148}>
        <LineChart data={satisfactionData} margin={{ top: 5, right: 0, left: -30, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 10, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,.08)" }} />
          <Line
            type="monotone"
            dataKey="last"
            stroke="#6ee7b7"
            strokeWidth={2.5}
            dot={{ r: 3, fill: "#6ee7b7", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#6366f1"
            strokeWidth={2.5}
            dot={{ r: 3, fill: "#6366f1", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div style={S.footer}>
        <div>
          <div style={S.footerLabel}>← Last Month</div>
          <div style={S.footerValue(false)}>$3,004</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={S.footerLabel}>This Month →</div>
          <div style={S.footerValue(true)}>$4,504</div>
        </div>
      </div>
    </SectionCard>
  );
}
