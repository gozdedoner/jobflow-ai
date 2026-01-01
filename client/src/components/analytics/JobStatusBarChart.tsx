import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: {
    status: string;
    count: number;
  }[];
};

export default function JobStatusBarChart({ data }: Props) {
  return (
    <div className="bg-[#0f0f1a] border border-purple-500/20 rounded-xl p-6 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
      <h3 className="text-white text-lg font-semibold mb-4">
        Job Status Overview
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="status" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f0f1a",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#fff",
            }}
          />
          <Bar dataKey="count" fill="#a855f7" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
