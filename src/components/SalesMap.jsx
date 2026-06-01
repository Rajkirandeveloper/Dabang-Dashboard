// import { useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
// } from "react-simple-maps";

// // Natural Earth 110m TopoJSON — lightweight, no install needed
// const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// // ISO-3166 numeric codes mapped to highlight config
// const COUNTRY_HIGHLIGHTS = {
//   "840": { name: "United States", value: "$21.7k", share: "18%", fill: "#F97316" }, // USA
//   "076": { name: "Brazil",        value: "$9.3k",  share: "8%",  fill: "#EF4444" }, // Brazil
//   "682": { name: "Saudi Arabia",  value: "$6.1k",  share: "5%",  fill: "#3B82F6" }, // Saudi Arabia
//   // "356": { name: "India",         value: "$19.5k", share: "16%", fill: "#14B8A6" }, // India
//   "156": { name: "China",         value: "$18.6k", share: "15%", fill: "#8B5CF6" }, // China
//   "360": { name: "Indonesia",     value: "$16.7k", share: "14%", fill: "#22C55E" }, // Indonesia
// };

// function Tooltip({ item, x, y, svgWidth }) {
//   if (!item) return null;
//   const tipW = 148;
//   const left = x + 14 + tipW > svgWidth ? x - tipW - 10 : x + 14;
//   const top  = Math.max(y - 10, 4);
//   return (
//     <div
//       style={{
//         position: "absolute",
//         left,
//         top,
//         background: "#fff",
//         border: `1.5px solid ${item.fill}`,
//         borderRadius: 10,
//         padding: "9px 14px",
//         pointerEvents: "none",
//         zIndex: 30,
//         minWidth: tipW,
//         boxShadow: "0 4px 18px rgba(0,0,0,0.13)",
//         fontFamily: "'Inter','Segoe UI',sans-serif",
//       }}
//     >
//       <div style={{
//         display: "flex", alignItems: "center", gap: 7,
//         fontWeight: 700, fontSize: 13, color: "#1a1a2e", marginBottom: 7,
//       }}>
//         <span style={{
//           width: 9, height: 9, borderRadius: "50%",
//           background: item.fill, flexShrink: 0, display: "inline-block",
//         }} />
//         {item.name}
//       </div>
//       {[["Sales", item.value], ["Share", item.share]].map(([label, val]) => (
//         <div key={label} style={{
//           display: "flex", justifyContent: "space-between",
//           fontSize: 12, color: "#6b7280", marginTop: 3,
//         }}>
//           <span>{label}</span>
//           <strong style={{ color: "#1a1a2e", fontWeight: 700 }}>{val}</strong>
//         </div>
//       ))}
//     </div>
//   );
// }

// function WorldMap() {
//   const [tooltip, setTooltip] = useState(null);
//   const [wrapRef, setWrapRef] = useState(null);

//   const getCountryInfo = (geo) => {
//     const id = String(geo.id).padStart(3, "0");
//     return (
//       COUNTRY_HIGHLIGHTS[id] || {
//         name: geo.properties?.name || "Country",
//         value: "No data",
//         share: "-",
//         fill: "#94A3B8",
//       }
//     );
//   };

//   const handleMove = (geo, e) => {
//     const rect = wrapRef?.getBoundingClientRect();
//     if (!rect) return;
//     setTooltip({ item: getCountryInfo(geo), x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   const handleLeave = () => setTooltip(null);

//   return (
//     <div ref={setWrapRef} style={{ position: "relative", width: "100%" }}>
//       <ComposableMap
//         projection="geoNaturalEarth1"
//         projectionConfig={{ scale: 140, center: [15, 10] }}
//         style={{ width: "100%", height: "auto" }}
//       >
//         {/* Ocean sphere background */}
//         <rect x={0} y={0} width="100%" height="100%" fill="#EEF2FF" />

//         <Geographies geography={GEO_URL}>
//           {({ geographies }) =>
//             geographies.map((geo) => {
//               const id = String(geo.id).padStart(3, "0");
//               const highlight = COUNTRY_HIGHLIGHTS[id];
//               return (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill={highlight ? highlight.fill : "#D1D5DB"}
//                   stroke="#ffffff"
//                   strokeWidth={highlight ? 0.8 : 0.5}
//                   style={{
//                     default: { outline: "none", opacity: highlight ? 0.95 : 1 },
//                     hover:   { outline: "none", opacity: highlight ? 0.8 : 1, cursor: "pointer" },
//                     pressed: { outline: "none" },
//                   }}
//                   onMouseMove={(e) => handleMove(geo, e)}
//                   onMouseLeave={handleLeave}
//                 />
//               );
//             })
//           }
//         </Geographies>
//       </ComposableMap>

//       {tooltip && (
//         <Tooltip
//           item={tooltip.item}
//           x={tooltip.x}
//           y={tooltip.y}
//           svgWidth={wrapRef?.offsetWidth || 400}
//         />
//       )}
//     </div>
//   );
// }

// export default function SalesMap() {
//   return (
//     <div
//       style={{
//         background: "#ffffff",
//         borderRadius: 20,
//         border: "1px solid #ebebf0",
//         padding: "20px 20px 10px",
//         boxShadow: "0 4px 24px rgba(99,102,241,0.08), 0 1px 4px rgba(0,0,0,0.05)",
//         fontFamily: "'Inter','Segoe UI',sans-serif",
//         width: "100%",
//         boxSizing: "border-box",
//       }}
//     >
//       <p
//         style={{
//           fontSize: 15,
//           fontWeight: 800,
//           color: "#1a1a6e",
//           margin: "0 0 4px",
//           letterSpacing: "-0.01em",
//         }}
//       >
//         Sales Mapping by Country
//       </p>
//       <WorldMap />
//     </div>
//   );
// }











import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const COUNTRY_HIGHLIGHTS = {
  "840": { name: "United States", value: "$21.7k", share: "18%", fill: "#F97316" },
  "076": { name: "Brazil",        value: "$9.3k",  share: "8%",  fill: "#EF4444" },
  "682": { name: "Saudi Arabia",  value: "$6.1k",  share: "5%",  fill: "#3B82F6" },
  "356": { name: "India",         value: "$19.5k", share: "16%", fill: "#14B8A6" },
  "156": { name: "China",         value: "$18.6k", share: "15%", fill: "#8B5CF6" },
  "360": { name: "Indonesia",     value: "$16.7k", share: "14%", fill: "#22C55E" },
};

/* ── Tooltip ─────────────────────────────────────────────────────── */
function Tooltip({ item, x, y, containerWidth }) {
  if (!item) return null;
  const tipW = 148;
  const left = x + 14 + tipW > containerWidth ? x - tipW - 10 : x + 14;
  const top  = Math.max(y - 10, 4);
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        background: "#fff",
        border: `1.5px solid ${item.fill}`,
        borderRadius: 10,
        padding: "8px 12px",
        pointerEvents: "none",
        zIndex: 30,
        minWidth: tipW,
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        fontFamily: "'DM Sans','Nunito','Inter',sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontWeight: 700,
          fontSize: 12,
          color: "#1a1a2e",
          marginBottom: 6,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: item.fill,
            flexShrink: 0,
          }}
        />
        {item.name}
      </div>
      {[
        ["Sales", item.value],
        ["Share", item.share],
      ].map(([label, val]) => (
        <div
          key={label}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            color: "#6b7280",
            marginTop: 2,
          }}
        >
          <span>{label}</span>
          <strong style={{ color: "#1a1a2e", fontWeight: 700 }}>{val}</strong>
        </div>
      ))}
    </div>
  );
}

/* ── Map ─────────────────────────────────────────────────────────── */
function WorldMap() {
  const [tooltip, setTooltip] = useState(null);
  const [wrapRef, setWrapRef] = useState(null);

  const handleMove = (geo, e) => {
    const id = String(geo.id).padStart(3, "0");
    const info = COUNTRY_HIGHLIGHTS[id];
    if (!info) return;
    const rect = wrapRef?.getBoundingClientRect();
    if (!rect) return;
    setTooltip({
      item: info,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLeave = (geo) => {
    const id = String(geo.id).padStart(3, "0");
    if (COUNTRY_HIGHLIGHTS[id]) setTooltip(null);
  };

  return (
    <div ref={setWrapRef} style={{ position: "relative", width: "100%" }}>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 130, center: [15, 8] }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = String(geo.id).padStart(3, "0");
              const highlight = COUNTRY_HIGHLIGHTS[id];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={highlight ? highlight.fill : "#D9DCE8"}
                  stroke="#ffffff"
                  strokeWidth={highlight ? 0.7 : 0.4}
                  style={{
                    default: {
                      outline: "none",
                      opacity: highlight ? 0.93 : 1,
                    },
                    hover: {
                      outline: "none",
                      opacity: highlight ? 0.75 : 1,
                      cursor: highlight ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                  onMouseMove={(e) => handleMove(geo, e)}
                  onMouseLeave={() => handleLeave(geo)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <Tooltip
          item={tooltip.item}
          x={tooltip.x}
          y={tooltip.y}
          containerWidth={wrapRef?.offsetWidth || 400}
        />
      )}
    </div>
  );
}

/* ── Card — matches your dashboard SectionCard style ─────────────── */
export default function SalesMap() {
  return (
    <div
      style={{
        /* flex sizing — same proportion as in screenshot */
        flex: "1.3 1 0",
        minWidth: 0,

        /* card shell matching TopProducts / VolumeVsService */
        background: "#ffffff",
        borderRadius: 16,
        border: "1px solid #f0f1f5",
        padding: "18px 18px 8px",
        boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
        fontFamily: "'DM Sans','Nunito','Inter',sans-serif",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title row — matches other cards */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#1e1b4b",
          margin: "0 0 8px",
          letterSpacing: "-0.01em",
          flexShrink: 0,
        }}
      >
        Sales Mapping by Country
      </p>

      {/* Map fills remaining space */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <WorldMap />
      </div>
    </div>
  );
}

