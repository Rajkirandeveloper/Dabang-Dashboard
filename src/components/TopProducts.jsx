import { SectionCard } from "./ui/Cards";
import { topProducts } from "../data/chartData";

const S = {
  th: (center) => ({
    textAlign: center ? "center" : "left",
    color: "#94a3b8",
    fontWeight: 600,
    fontSize: 10,
    paddingBottom: 10,
    borderBottom: "1px solid #f1f5f9",
    whiteSpace: "nowrap",
  }),
  rankCell: {
    textAlign: "center",
    padding: "10px 0",
    color: "#94a3b8",
    fontWeight: 600,
    fontSize: 11,
    width: 36,
  },
  nameCell: {
    color: "#1e1b4b",
    fontWeight: 500,
    fontSize: 12,
    paddingRight: 10,
  },
  barCell: { padding: "0 14px" },
  track: {
    height: 6,
    background: "#f1f5f9",
    borderRadius: 99,
    overflow: "hidden",
  },
  badge: {
    background: "#f0fdf4",
    color: "#16a34a",
    borderRadius: 20,
    padding: "3px 10px",
    fontWeight: 700,
    fontSize: 10,
  },
};

export default function TopProducts() {
  return (
    <SectionCard title="Top Products" style={{ flex: 1.4 }}>
      <div className="top-products-scroll">
        <table className="top-products-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr>
            <th style={S.th(true)}>#</th>
            <th style={S.th(false)}>Name</th>
            <th style={S.th(false)}>Popularity</th>
            <th style={S.th(true)}>Sales</th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((p) => (
            <tr key={p.rank}>
              <td style={S.rankCell}>{p.rank}</td>
              <td style={S.nameCell}>{p.name}</td>
              <td style={S.barCell}>
                <div style={S.track}>
                  <div
                    style={{
                      height: "100%",
                      width: `${p.popularity}%`,
                      background: p.color,
                      borderRadius: 99,
                      transition: "width .4s ease",
                    }}
                  />
                </div>
              </td>
              <td style={{ textAlign: "center" }}>
                <span style={S.badge}>{p.sales}</span>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </SectionCard>
  );
}
