// src/components/analytics/AnalyticsCards.tsx
import { useAnalyticsData } from "../../hooks/useAnalyticsData";

export default function AnalyticsCards() {
  const { total, interviews, offers, conversionRate } = useAnalyticsData();

  const cards = [
    { label: "Total Jobs", value: total },
    { label: "Interviews", value: interviews },
    { label: "Offers", value: offers },
    { label: "Conversion", value: `${conversionRate}%` },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((c) => (
        <div
          key={c.label}
          className="
            relative rounded-2xl p-6
            bg-white/5 backdrop-blur
            border border-white/10
            shadow-[0_0_30px_rgba(168,85,247,0.25)]
          "
        >
          <p className="text-sm text-white/60">{c.label}</p>
          <p className="text-3xl font-semibold mt-2 text-purple-300">
            {c.value}
          </p>
        </div>
      ))}
    </div>
  );
}
