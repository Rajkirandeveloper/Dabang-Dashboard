# Task Dash - React Dashboard Implementation Notes

This project is a React dashboard application built with Create React App. It uses reusable UI components, chart components, shared data files, and React Router for sidebar page navigation.

## 1. Project Setup

1. Create or open the project folder:

   ```bash
   cd task-dash
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the app in the browser:

   ```text
   http://localhost:3000
   ```

5. Create a production build:

   ```bash
   npm run build
   ```

## 2. Main Dependencies

- `react`: Builds the component-based UI.
- `react-dom`: Renders React into the browser DOM.
- `react-router-dom`: Handles route navigation from the sidebar.
- `recharts`: Renders dashboard charts.
- `react-scripts`: Provides Create React App scripts for start, build, and test.

## 3. Folder Structure

```text
task-dash/
  src/
    App.js
    Dashboard.jsx
    components/
      Sidebar.jsx
      Topbar.jsx
      TodaySales.jsx
      VisitorInsights.jsx
      TotalRevenue.jsx
      CustomerSatisfaction.jsx
      TargetVsReality.jsx
      TopProducts.jsx
      SalesMap.jsx
      VolumeVsService.jsx
      ui/
        Cards.jsx
    constants/
      navItems.js
    data/
      chartData.js
```

## 4. Application Entry Flow

1. `src/index.js` renders the root React app.
2. `src/App.js` defines all application routes.
3. The default `/` path redirects to `/dashboard`.
4. `Dashboard.jsx` provides the shared dashboard layout.
5. `Sidebar.jsx` remains visible on every route.
6. `Topbar.jsx` displays the current page title.
7. The main content area changes based on the selected sidebar route.

## 5. Routing Implementation

Routing is implemented in `src/App.js` using `BrowserRouter`, `Routes`, `Route`, and `Navigate`.

Current routes:

```text
/              -> redirects to /dashboard
/dashboard     -> dashboard widgets and charts
/leaderboard   -> Leaderboard page placeholder
/order         -> Order page placeholder
/products      -> Products page placeholder
/sales-report  -> Sales Report page placeholder
/messages      -> Messages page placeholder
/settings      -> Settings page placeholder
/sign-out      -> Sign Out page placeholder
```

Unknown routes redirect back to `/dashboard`.

## 6. Sidebar Navigation

Sidebar navigation data is stored in `src/constants/navItems.js`.

Each item contains:

- `icon`: Sidebar icon.
- `label`: Text shown in the sidebar and topbar.
- `path`: Route path used by React Router.

Example:

```js
{ icon: "\uD83D\uDCCA", label: "Dashboard", path: "/dashboard" }
```

`Sidebar.jsx` maps over `NAV_ITEMS` and renders each item as a `NavLink`. `NavLink` automatically detects the active route, so the selected sidebar item is highlighted.

## 7. Dashboard Layout

`src/Dashboard.jsx` contains the shared page shell:

- Left sidebar.
- Top header.
- Scrollable main content area.
- `Outlet` for nested route content.

The active page title is calculated from the current URL path:

```js
const activeNav = NAV_ITEMS.find((item) => item.path === pathname)?.label || "Dashboard";
```

That value is passed into `Topbar`:

```jsx
<Topbar pageTitle={activeNav} />
```

## 8. Dashboard Home Page

The `/dashboard` route renders `DashboardHome`.

`DashboardHome` contains three main rows:

1. Sales summary and visitor insights.
2. Revenue, customer satisfaction, and target comparison.
3. Top products, sales map, and volume/service chart.

The layout uses the local `Row` helper component to keep dashboard sections aligned with consistent spacing.

## 9. Placeholder Pages

Non-dashboard routes currently render `PlaceholderPage`.

This keeps routing complete while allowing page content to be added later. For example, clicking `Leaderboard`, `Order`, `Products`, or `Settings` changes the URL and displays the matching page title.

To replace a placeholder with a real page:

1. Create a new component file inside `src/components` or `src/pages`.
2. Import that component in `App.js`.
3. Replace the matching `PlaceholderPage` route with the new component.

Example:

```jsx
<Route path="/order" element={<OrderPage />} />
```

## 10. Reusable UI Components

Reusable card components are stored in `src/components/ui/Cards.jsx`.

Available helpers:

- `SectionCard`: Used for dashboard sections with optional title, subtitle, and header action.
- `StatCard`: Used for metric cards such as sales, orders, products, and customers.
- `LegendRow`: Used to display chart legends consistently.

These components help keep the dashboard layout consistent and reduce repeated styling code.

## 11. Chart and Static Data

Chart data is stored in `src/data/chartData.js`.

Dashboard chart components import data from this file and pass it into Recharts components. Keeping chart data separate from UI components makes the project easier to maintain and update.

## 12. Adding a New Sidebar Page

To add a new sidebar page:

1. Open `src/constants/navItems.js`.
2. Add a new navigation object:

   ```js
   { icon: "\uD83D\uDCC4", label: "Reports", path: "/reports" }
   ```

3. Create the new page component.
4. Add the route in `src/App.js`:

   ```jsx
   <Route path="/reports" element={<ReportsPage />} />
   ```

5. Start the app and click the new sidebar item.

## 13. Testing the Implementation

Use these checks after making changes:

1. Run the app:

   ```bash
   npm start
   ```

2. Confirm `/` redirects to `/dashboard`.
3. Click every sidebar item.
4. Confirm the URL changes correctly.
5. Confirm the active sidebar item changes.
6. Confirm the topbar title matches the selected page.
7. Run the production build:

   ```bash
   npm run build
   ```

## 14. Current Implementation Status

- Dashboard page is implemented.
- Sidebar navigation is implemented with React Router.
- Default route redirects to Dashboard.
- Other sidebar pages route correctly and show placeholder content.
- Reusable card components are available.
- Chart components are organized into separate dashboard components.

## 15. Future Improvements

- Replace placeholder pages with full page components.
- Add responsive sidebar behavior for mobile screens.
- Move inline styles into CSS modules or shared style files.
- Add route-level tests.
- Add real API data instead of static chart data.
