import { useState } from "react";
import { NAV_ITEMS } from "../constants/navItems";

// ─── styles ────────────────────────────────────────────────────────────────────
const S = {
  nav: {
    width: "100%",
    background: "#fff",
    boxShadow: "0 2px 16px rgba(99,102,241,0.09)",
    fontFamily: "'DM Sans', 'Nunito', sans-serif",
  },

  // ── Top bar (logo + search + user controls) ────────────────────────────────
  topBar: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "12px 32px",
    borderBottom: "1px solid #f1f5f9",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    textDecoration: "none",
    marginRight: 8,
  },
  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 9,
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 800,
    fontSize: 14,
    flexShrink: 0,
  },
  logoText: {
    fontWeight: 800,
    fontSize: 18,
    color: "#1e1b4b",
    letterSpacing: "-0.3px",
  },
  searchBox: {
    flex: 1,
    maxWidth: 340,
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#f3f4f8",
    borderRadius: 26,
    padding: "8px 18px",
    fontSize: 12.5,
    color: "#94a3b8",
    cursor: "text",
    border: "1.5px solid transparent",
    transition: "border-color .18s",
  },
  spacer: { flex: 1 },
  langPill: {
    background: "#f3f4f8",
    borderRadius: 22,
    padding: "7px 14px",
    fontSize: 12,
    color: "#475569",
    display: "flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background .15s",
  },
  notifWrap: {
    position: "relative",
    cursor: "pointer",
    fontSize: 20,
    lineHeight: 1,
    padding: "4px",
  },
  notifBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "#6366f1",
    color: "#fff",
    borderRadius: "50%",
    width: 15,
    height: 15,
    fontSize: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    border: "2px solid #fff",
  },
  divider: {
    width: 1,
    height: 28,
    background: "#e2e8f0",
    margin: "0 4px",
  },
  userWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: 22,
    transition: "background .15s",
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 800,
    fontSize: 13,
    flexShrink: 0,
  },
  userName: { fontSize: 12.5, fontWeight: 700, color: "#1e1b4b", lineHeight: 1.3 },
  userRole: { fontSize: 10,   color: "#94a3b8",  lineHeight: 1.3 },
  chevron:  { color: "#94a3b8", fontSize: 11 },

  // ── Bottom nav links ───────────────────────────────────────────────────────
  linkBar: {
    display: "flex",
    alignItems: "center",
    padding: "0 32px",
    gap: 2,
    overflowX: "auto",
  },
  navLink: (active) => ({
    display: "flex",
    alignItems: "center",
    gap: 7,
    padding: "12px 16px",
    fontSize: 13,
    fontWeight: active ? 700 : 500,
    color: active ? "#6366f1" : "#64748b",
    cursor: "pointer",
    borderBottom: active ? "2.5px solid #6366f1" : "2.5px solid transparent",
    whiteSpace: "nowrap",
    transition: "all .18s",
    userSelect: "none",
    textDecoration: "none",
  }),
  navIcon: { fontSize: 15, lineHeight: 1 },
};

export default function Navbar({ activeNav, onNavChange }) {
  const [hovered, setHovered] = useState(null);

  return (
    <nav style={S.nav}>
      {/* ── Top row: logo · search · controls ── */}
      <div style={S.topBar}>
        {/* Logo */}
        <div style={S.logoWrap}>
          <div style={S.logoIcon}>D</div>
          <span style={S.logoText}>Dabang</span>
        </div>

        {/* Search */}
        <div style={S.searchBox}>
          🔍&nbsp; Search here...
        </div>

        <div style={S.spacer} />

        {/* Language */}
        <div style={S.langPill}>🇺🇸 Eng (US) ▾</div>

        {/* Notifications */}
        <div style={S.notifWrap}>
          🔔
          <span style={S.notifBadge}>3</span>
        </div>

        <div style={S.divider} />

        {/* User */}
        <div style={S.userWrap}>
          <div style={S.avatar}>
            <img src="https://thumbs.dreamstime.com/b/asian-businessman-isolated-white-background-58910478.jpg?w=576"/>
          </div>
          <div>
            <div style={S.userName}>Musfiq</div>
            <div style={S.userRole}>Admin</div>
          </div>
          <span style={S.chevron}>▾</span>
        </div>
      </div>

      {/* ── Bottom row: nav links ── */}
      <div style={S.linkBar}>
        {NAV_ITEMS.map(({ icon, label }) => {
          const active = activeNav === label;
          return (
            <div
              key={label}
              style={{
                ...S.navLink(active),
                color: hovered === label && !active ? "#6366f1" : S.navLink(active).color,
              }}
              onClick={() => onNavChange(label)}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={S.navIcon}>{icon}</span>
              {label}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
