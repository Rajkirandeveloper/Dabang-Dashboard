import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { SectionCard, LegendRow } from "./ui/Cards";
import { visitorData } from "../data/chartData";

const GRADIENTS = [
  { id: "lgLoyal",  color: "#6366f1" },
  { id: "lgNew",    color: "#f43f5e" },
  { id: "lgUnique", color: "#a78bfa" },
];

const LEGEND = [
  { color: "#6366f1", label: "Loyal Customers" },
  { color: "#f43f5e", label: "New Customers"   },
  { color: "#a78bfa", label: "Unique Customers" },
];

export default function VisitorInsights() {
  return (
    <SectionCard title="Visitor Insights" style={{ flex: 1.4 }}>
      <ResponsiveContainer width="100%" height={130}>
        <AreaChart data={visitorData} margin={{ top: 5, right: 0, left: -30, bottom: 0 }}>
          <defs>
            {GRADIENTS.map(({ id, color }) => (
              <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0}   />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 10, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,.08)" }} />
          <Area type="monotone" dataKey="loyal"  stroke="#6366f1" fill="url(#lgLoyal)"  strokeWidth={2} dot={false} />
          <Area type="monotone" dataKey="new"    stroke="#f43f5e" fill="url(#lgNew)"    strokeWidth={2} dot={false} />
          <Area type="monotone" dataKey="unique" stroke="#a78bfa" fill="url(#lgUnique)" strokeWidth={2} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
      <LegendRow items={LEGEND} />
    </SectionCard>
  );
}
