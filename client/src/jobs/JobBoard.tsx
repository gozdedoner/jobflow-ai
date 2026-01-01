const columns = ["Applied", "Interview", "Offer", "Rejected"];

export default function JobBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {columns.map((col) => (
        <div
          key={col}
          className="
            rounded-2xl p-4 min-h-[220px]
            bg-white/5 backdrop-blur
            border border-white/10
          "
        >
          <h3 className="mb-3 font-semibold text-white/80">{col}</h3>
          <div className="text-sm text-white/40">Drag jobs here</div>
        </div>
      ))}
    </div>
  );
}
