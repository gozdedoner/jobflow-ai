interface Props {
  title: string;
  value: string;
}

export default function KpiCard({ title, value }: Props) {
  return (
    <div className="
      bg-[#0f0f1a]
      border border-purple-500/20
      rounded-2xl
      p-6
      shadow-[0_0_30px_rgba(168,85,247,0.15)]
      hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
      transition
    ">
      <p className="text-sm text-white/50">{title}</p>
      <p className="text-3xl font-semibold text-purple-300 mt-3">
        {value}
      </p>
    </div>
  );
}
