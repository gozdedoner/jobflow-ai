import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useConversionStats } from "../../hooks/useConversionStats";

const COLORS = ["#22c55e", "#334155"]; // green / dark gray

export default function ConversionPieChart() {
  const data = useConversionStats();

  return (
    <div className="bg-[#0f0f1a] border border-purple-500/20 rounded-xl p-6 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
      <h3 className="text-white text-lg font-semibold mb-4">Conversion Rate</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
