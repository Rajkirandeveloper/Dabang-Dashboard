import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../constants/navItems";

const S = {
  aside: {
    width: 210,
    minWidth: 210,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "24px 0 20px",
    boxShadow: "2px 0 16px rgba(99,102,241,0.07)",
    position: "relative",
    zIndex: 10,
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "0 22px 30px",
  },
  logoIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 800,
    fontSize: 15,
    flexShrink: 0,
  },
  logoText: {
    fontWeight: 800,
    fontSize: 19,
    color: "#1e1b4b",
    letterSpacing: "-0.3px",
  },
  nav: { flex: 1 },
  navItem: (active) => ({
    display: "flex",
    alignItems: "center",
    gap: 11,
    padding: "11px 22px",
    cursor: "pointer",
    background: active ? "linear-gradient(90deg,#6366f1,#8b5cf6)" : "transparent",
    borderRadius: active ? "0 22px 22px 0" : 0,
    marginRight: 18,
    color: active ? "#fff" : "#64748b",
    fontWeight: active ? 700 : 500,
    fontSize: 13,
    transition: "all .18s",
    userSelect: "none",
    textDecoration: "none",
  }),
  navIcon: { fontSize: 16, lineHeight: 1 },
  proCard: {
    margin: "20px 14px 0",
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    borderRadius: 18,
    padding: "20px 16px",
    textAlign: "center",
    color: "#fff",
  },
  proEmoji: { fontSize: 22, marginBottom: 6 },
  proTitle: { fontWeight: 800, fontSize: 13, marginBottom: 4 },
  proDesc: { fontSize: 10, opacity: 0.82, lineHeight: 1.5 },
  proBtn: {
    marginTop: 14,
    background: "#fff",
    color: "#6366f1",
    border: "none",
    borderRadius: 22,
    padding: "8px 24px",
    fontWeight: 700,
    fontSize: 12,
    cursor: "pointer",
    transition: "opacity .15s",
  },
};

export default function Sidebar() {
  return (
    <aside className="sidebar" style={S.aside}>
      <div className="sidebar-logo" style={S.logoWrap}>
        <div style={S.logoIcon}>D</div>
        <span style={S.logoText}>Dabang</span>
      </div>

      <nav className="sidebar-nav" style={S.nav}>
        {NAV_ITEMS.map(({ icon, label, path }) => (
          <NavLink key={label} to={path} className="sidebar-link" style={({ isActive }) => S.navItem(isActive)}>
            <span style={S.navIcon}>{icon}</span>
            <span className="sidebar-label">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-pro" style={S.proCard}>
        <div style={S.proEmoji}>{"\u2728"}</div>
        <div style={S.proTitle}>Dabang Pro</div>
        <div style={S.proDesc}>Get access to all features on Dabango</div>
        <button style={S.proBtn}>Get Pro</button>
      </div>
    </aside>
  );
}
