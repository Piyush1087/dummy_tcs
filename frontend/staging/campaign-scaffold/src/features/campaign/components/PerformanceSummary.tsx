import type { PerformanceSummaryView } from "../types";

export function PerformanceSummary({ performance, onReport }: { performance: PerformanceSummaryView; onReport: () => void }) {
  return <section className="performanceCard" aria-labelledby="performance-title"><div className="sectionHeading"><h2 id="performance-title">Performance</h2><button className="textAction" onClick={onReport} type="button">View report</button></div><div className="metricGrid">{performance.metrics.map((metric) => <div className={`metricChip ${metric.tone}`} key={metric.metricId}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}</div></section>;
}
