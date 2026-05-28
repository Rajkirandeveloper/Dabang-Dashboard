import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard, { DashboardHome, PlaceholderPage } from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/leaderboard" element={<PlaceholderPage title="Leaderboard" />} />
            <Route path="/order" element={<PlaceholderPage title="Order" />} />
            <Route path="/products" element={<PlaceholderPage title="Products" />} />
            <Route path="/sales-report" element={<PlaceholderPage title="Sales Report" />} />
            <Route path="/messages" element={<PlaceholderPage title="Messages" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
            <Route path="/sign-out" element={<PlaceholderPage title="Sign Out" />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
