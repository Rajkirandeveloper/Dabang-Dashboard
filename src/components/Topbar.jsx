// ─── styles ────────────────────────────────────────────────────────────────────
const S = {
  header: {
    background: "#fff",
    padding: "14px 28px",
    display: "flex",
    alignItems: "center",
    gap: 16,
    boxShadow: "0 2px 10px rgba(99,102,241,0.07)",
    flexShrink: 0,
    zIndex: 9,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 800,
    color: "#1e1b4b",
    margin: 0,
    letterSpacing: "-0.4px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#f3f4f8",
    borderRadius: 26,
    padding: "8px 18px",
    fontSize: 12.5,
    color: "#94a3b8",
    cursor: "text",
    minWidth: 180,
  },
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
  },
  notifWrap: {
    position: "relative",
    cursor: "pointer",
    fontSize: 20,
    lineHeight: 1,
  },
  notifBadge: {
    position: "absolute",
    top: -4,
    right: -5,
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
  userWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },
  avatar: {
    width: 36,
    height: 36,
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
  userName: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1e1b4b",
    lineHeight: 1.3,
  },
  userRole: {
    fontSize: 10.5,
    color: "#94a3b8",
    lineHeight: 1.3,
  },
};

export default function Topbar({ pageTitle = "Dashboard" }) {
  return (
    <header className="topbar" style={S.header}>
      <h1 style={S.title}>{pageTitle}</h1>

      {/* Search */}
      <div className="topbar-search" style={S.searchBox}>
        🔍&nbsp; Search here...
      </div>

      {/* Language */}
      <div className="topbar-language" style={S.langPill}>
        🇺🇸 Eng (US) ▾
      </div>

      {/* Notification bell */}
      <div className="topbar-notification" style={S.notifWrap}>
        🔔
        <span style={S.notifBadge}>3</span>
      </div>

      {/* User info */}
      <div className="topbar-user" style={S.userWrap}>
         <img style={S.avatar} src="https://thumbs.dreamstime.com/b/asian-businessman-isolated-white-background-58910478.jpg?w=576" alt="Musfiq profile"/>
        {/* <div style={S.avatar}>M</div> */}
        <div className="topbar-user-text">
          <div style={S.userName}>Musfiq</div>
          <div style={S.userRole}>Admin</div>
        </div>
        <span style={{ color: "#94a3b8", fontSize: 12 }}>▾</span>
      </div>
    </header>
  );
}
