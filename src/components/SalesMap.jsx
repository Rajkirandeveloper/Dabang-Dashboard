import { useState } from "react";
import { SectionCard } from "./ui/Cards";

const REGIONS = [
  { name: "North America", value: "$38.4k", share: "32%", d: "M 120 95 L 160 85 L 175 100 L 165 130 L 140 135 L 115 120 Z", fill: "#6366f1" },
  { name: "South America", value: "$14.8k", share: "12%", d: "M 150 150 L 170 140 L 185 165 L 178 210 L 155 215 L 138 195 Z", fill: "#e0e7ff" },
  { name: "Europe", value: "$24.2k", share: "20%", d: "M 255 70 L 290 65 L 300 85 L 285 100 L 255 95 Z", fill: "#e0e7ff" },
  { name: "Africa", value: "$10.6k", share: "9%", d: "M 255 110 L 285 105 L 295 140 L 290 185 L 260 188 L 245 160 L 250 125 Z", fill: "#fbbf24" },
  { name: "Russia", value: "$8.9k", share: "7%", d: "M 300 55 L 420 50 L 425 90 L 300 88 Z", fill: "#e0e7ff" },
  { name: "India", value: "$19.5k", share: "16%", d: "M 340 105 L 365 100 L 370 140 L 355 155 L 335 140 Z", fill: "#6366f1" },
  { name: "East Asia", value: "$28.1k", share: "23%", d: "M 370 70 L 430 65 L 440 105 L 375 110 Z", fill: "#e0e7ff" },
  { name: "SE Asia", value: "$16.7k", share: "14%", d: "M 390 120 L 430 115 L 435 150 L 392 148 Z", fill: "#c4b5fd" },
  { name: "Australia", value: "$7.4k", share: "6%", d: "M 405 175 L 450 168 L 460 205 L 430 215 L 400 205 Z", fill: "#e0e7ff" },
];

const DOTS = [
  { name: "United States", value: "$21.7k", share: "18%", cx: 145, cy: 110, fill: "#6366f1" },
  { name: "Brazil", value: "$9.3k", share: "8%", cx: 160, cy: 172, fill: "#f59e0b" },
  { name: "United Kingdom", value: "$13.5k", share: "11%", cx: 270, cy: 80, fill: "#6366f1" },
  { name: "India", value: "$19.5k", share: "16%", cx: 352, cy: 125, fill: "#22c55e" },
  { name: "China", value: "$18.6k", share: "15%", cx: 415, cy: 80, fill: "#6366f1" },
];

function WorldMap() {
  const [tooltip, setTooltip] = useState(null);

  const showTooltip = (item, event) => {
    const bounds = event.currentTarget.ownerSVGElement.getBoundingClientRect();
    setTooltip({
      ...item,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  };

  const focusTooltip = (item, x, y) => {
    setTooltip({ ...item, x, y });
  };

  return (
    <div className="sales-map-wrap">
      <svg viewBox="0 0 500 240" width="100%" style={{ display: "block" }}>
        <rect width="500" height="240" fill="#f0f4ff" rx="12" />
        {REGIONS.map((r) => (
          <path
            key={r.name}
            className="sales-map-region"
            tabIndex={0}
            aria-label={`${r.name}: ${r.value}, ${r.share} of sales`}
            d={r.d}
            fill={r.fill}
            opacity={0.85}
            stroke="#fff"
            strokeWidth={1.2}
            onMouseMove={(event) => showTooltip(r, event)}
            onMouseLeave={() => setTooltip(null)}
            onFocus={() => focusTooltip(r, 255, 88)}
            onBlur={() => setTooltip(null)}
          />
        ))}
        {DOTS.map((dot) => (
          <circle
            key={dot.name}
            className="sales-map-dot"
            tabIndex={0}
            aria-label={`${dot.name}: ${dot.value}, ${dot.share} of sales`}
            cx={dot.cx}
            cy={dot.cy}
            r={5}
            fill={dot.fill}
            onMouseMove={(event) => showTooltip(dot, event)}
            onMouseLeave={() => setTooltip(null)}
            onFocus={() => focusTooltip(dot, dot.cx, dot.cy)}
            onBlur={() => setTooltip(null)}
          />
        ))}
      </svg>

      {tooltip && (
        <div
          className="sales-map-tooltip"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            borderColor: tooltip.fill,
          }}
        >
          <div className="sales-map-tooltip-title">
            <span style={{ background: tooltip.fill }} />
            {tooltip.name}
          </div>
          <div className="sales-map-tooltip-row">
            <span>Sales</span>
            <strong>{tooltip.value}</strong>
          </div>
          <div className="sales-map-tooltip-row">
            <span>Share</span>
            <strong>{tooltip.share}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SalesMap() {
  return (
    <SectionCard title="Sales Mapping by Country" style={{ flex: 1.3 }}>
      <WorldMap />
    </SectionCard>
  );
}
