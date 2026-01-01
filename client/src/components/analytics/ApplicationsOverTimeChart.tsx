import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useApplicationsOverTime } from "../../hooks/useApplicationsOverTime";
import { exportToCSV } from "../../utils/exportToCSV";

export default function ApplicationsOverTimeChart() {
  const [range, setRange] = useState<7 | 30>(30);
  const data = useApplicationsOverTime(range);

  const handleExport = () => {
    exportToCSV(data, `applications-over-time-last-${range}-days.csv`);
  };

  return (
    <div className="bg-[#0f0f1a] border border-purple-500/20 rounded-xl p-6 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-lg font-semibold">
          Applications Over Time
        </h3>

        <div className="flex items-center gap-2">
          {/* FILTER */}
          {[7, 30].map((d) => (
            <button
              key={d}
              onClick={() => setRange(d as 7 | 30)}
              className={`px-3 py-1 rounded text-sm transition ${
                range === d
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              Last {d} days
            </button>
          ))}

          {/* EXPORT */}
          <button
            onClick={handleExport}
            disabled={data.length === 0}
            className="ml-2 px-3 py-1 rounded text-sm bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-40"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* CHART */}
      <div className="h-64">
        {data.length === 0 ? (
          <div className="h-full flex items-center justify-center text-white/40">
            No applications in this period
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis allowDecimals={false} stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f0f1a",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#a855f7"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
