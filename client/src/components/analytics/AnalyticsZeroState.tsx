export default function AnalyticsZeroState() {
  return (
    <div className="bg-[#0f0f1a] border border-purple-500/20 rounded-xl p-10 text-center shadow-[0_0_25px_rgba(168,85,247,0.25)]">
      <h2 className="text-xl font-semibold text-white mb-2">
        No applications yet
      </h2>
      <p className="text-white/60 mb-6">
        Start by adding your first job application to see analytics here.
      </p>

      <button
        className="px-5 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
        onClick={() => {
          // ileride: navigate("/add-job")
        }}
      >
        Add your first application
      </button>
    </div>
  );
}
