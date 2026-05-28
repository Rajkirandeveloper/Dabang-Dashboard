import { SectionCard, StatCard } from "./ui/Cards";

const exportBtnStyle = {
  border: "1px solid #e2e8f0",
  background: "#fff",
  borderRadius: 9,
  padding: "5px 14px",
  fontSize: 11,
  cursor: "pointer",
  color: "#475569",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: 5,
};

export default function TodaySales() {
  return (
    <SectionCard
      title="Today's Sales"
      subtitle="Sales Summary"
      style={{ flex: 2.2 }}
      headerRight={
        <button style={exportBtnStyle}>⬆ Export</button>
      }
    >
      <div className="today-sales-grid" style={{ display: "flex", gap: 12, marginTop: 4 }}>
        <StatCard
          icon="💰"
          value="$1k"
          label="Total Sales"
          change="+8% from yesterday"
          positive
          bg="#fef9ee"
        />
        <StatCard
          icon="🛒"
          value="300"
          label="Total Order"
          change="+0% from yesterday"
          positive
          bg="#f0fdf4"
        />
        <StatCard
          icon="📦"
          value="5"
          label="Product Sold"
          change="+2% from yesterday"
          positive
          bg="#eff6ff"
        />
        <StatCard
          icon="👤"
          value="8"
          label="New Customers"
          change="0.5% from yesterday"
          positive={false}
          bg="#f5f3ff"
        />
      </div>
    </SectionCard>
  );
}
