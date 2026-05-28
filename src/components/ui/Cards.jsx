// ── SectionCard ────────────────────────────────────────────────────────────────
export function SectionCard({ title, subtitle, children, style = {}, headerRight }) {
  return (
    <div
      className="section-card"
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "20px 22px",
        boxShadow: "0 2px 14px rgba(99,102,241,0.07)",
        ...style,
      }}
    >
      {title && (
        <div
          className="section-card-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 14,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#1e1b4b" }}>{title}</div>
            {subtitle && (
              <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{subtitle}</div>
            )}
          </div>
          {headerRight && <div className="section-card-action">{headerRight}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

// ── StatCard ───────────────────────────────────────────────────────────────────
export function StatCard({ icon, value, label, change, positive, bg }) {
  return (
    <div
      className="stat-card"
      style={{
        background: bg,
        borderRadius: 16,
        padding: "16px 18px",
        flex: 1,
        minWidth: 110,
        display: "flex",
        flexDirection: "column",
        gap: 7,
      }}
    >
      <div style={{ fontSize: 26 }}>{icon}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#1e1b4b" }}>{value}</div>
      <div style={{ fontSize: 11, color: "#64748b", fontWeight: 500 }}>{label}</div>
      <div
        style={{
          fontSize: 10,
          color: positive ? "#22c55e" : "#ef4444",
          fontWeight: 600,
        }}
      >
        {change}
      </div>
    </div>
  );
}

// ── LegendRow ──────────────────────────────────────────────────────────────────
export function LegendRow({ items }) {
  return (
    <div
      className="legend-row"
      style={{
        display: "flex",
        gap: 14,
        justifyContent: "center",
        marginTop: 10,
        flexWrap: "wrap",
      }}
    >
      {items.map(({ color, label, shape = "dot" }) => (
        <div
          key={label}
          style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "#64748b" }}
        >
          <div
            style={{
              width: shape === "bar" ? 10 : 8,
              height: shape === "bar" ? 3 : 8,
              borderRadius: shape === "bar" ? 2 : "50%",
              background: color,
            }}
          />
          {label}
        </div>
      ))}
    </div>
  );
}
