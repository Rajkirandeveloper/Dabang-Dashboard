import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import TodaySales from "./components/TodaySales";
import VisitorInsights from "./components/VisitorInsights";
import TotalRevenue from "./components/TotalRevenue";
import CustomerSatisfaction from "./components/CustomerSatisfaction";
import TargetVsReality from "./components/TargetVsReality";
import TopProducts from "./components/TopProducts";
import SalesMap from "./components/SalesMap";
import VolumeVsService from "./components/VolumeVsService";
import { NAV_ITEMS } from "./constants/navItems";

function Row({ children }) {
  return <div className="dashboard-row" style={{ display: "flex", gap: 20 }}>{children}</div>;
}

export default function Dashboard() {
  const { pathname } = useLocation();
  const activeNav = NAV_ITEMS.find((item) => item.path === pathname)?.label || "Dashboard";

  return (
    <div
      className="dashboard-layout"
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f4f8",
        fontFamily: "'DM Sans', 'Nunito', sans-serif",
      }}
    >
      <Sidebar />

      <div className="dashboard-content" style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Topbar pageTitle={activeNav} />

        <main
          className="dashboard-main"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export function DashboardHome() {
  return (
    <>
      <Row>
        <TodaySales />
        <VisitorInsights />
      </Row>

      <Row>
        <TotalRevenue />
        <CustomerSatisfaction />
        <TargetVsReality />
      </Row>

      <Row>
        <TopProducts />
        <SalesMap />
        <VolumeVsService />
      </Row>
    </>
  );
}

export function PlaceholderPage({ title }) {
  return (
    <section
      className="placeholder-page"
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 28,
        minHeight: 260,
        boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
      }}
    >
      <h2 style={{ margin: 0, color: "#1e1b4b", fontSize: 24 }}>{title}</h2>
      <p style={{ marginTop: 12, color: "#64748b", fontSize: 14 }}>
        {title} page content will appear here.
      </p>
    </section>
  );
}
