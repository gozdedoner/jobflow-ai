import { useSettingsStore } from "../store/settingsStore";
import { useJobStore } from "../store/jobStore";

export default function SettingsPage() {
  const {
    defaultDateRange,
    showAIInsights,
    autoExportCSV,
    setDateRange,
    toggleAIInsights,
    toggleAutoExport,
    resetSettings,
  } = useSettingsStore();

  const clearJobs = useJobStore((s) => s.clearJobs);

  return (
    <section className="space-y-10">
      {/* HEADER */}
      <header>
        <h2 className="text-3xl font-semibold text-white">Settings</h2>
        <p className="text-white/50 mt-1">
          Customize your analytics and application experience
        </p>
      </header>

      {/* ANALYTICS PREFERENCES */}
      <div className="bg-[#0f0f1a] rounded-2xl p-6 border border-purple-500/20 space-y-4">
        <h3 className="text-lg font-medium">Analytics Preferences</h3>

        {/* DATE RANGE */}
        <div className="flex items-center justify-between">
          <span className="text-white/70">Default date range</span>
          <div className="flex gap-2">
            {[7, 30].map((d) => (
              <button
                key={d}
                onClick={() => setDateRange(d as 7 | 30)}
                className={`px-3 py-1 rounded text-sm ${
                  defaultDateRange === d
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20"
                }`}
              >
                Last {d} days
              </button>
            ))}
          </div>
        </div>

        {/* AUTO EXPORT */}
        <div className="flex items-center justify-between">
          <span className="text-white/70">Auto export CSV</span>
          <input
            type="checkbox"
            checked={autoExportCSV}
            onChange={toggleAutoExport}
            className="accent-purple-500"
          />
        </div>
      </div>

      {/* UI PREFERENCES */}
      <div className="bg-[#0f0f1a] rounded-2xl p-6 border border-purple-500/20 space-y-4">
        <h3 className="text-lg font-medium">UI Preferences</h3>

        <div className="flex items-center justify-between">
          <span className="text-white/70">Show AI insights</span>
          <input
            type="checkbox"
            checked={showAIInsights}
            onChange={toggleAIInsights}
            className="accent-purple-500"
          />
        </div>
      </div>

      {/* DANGER ZONE */}
      <div className="bg-red-500/5 rounded-2xl p-6 border border-red-500/20 space-y-4">
        <h3 className="text-lg font-medium text-red-400">Danger Zone</h3>

        <div className="flex items-center justify-between">
          <span className="text-white/70">Clear all job applications</span>
          <button
            onClick={clearJobs}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Clear jobs
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white/70">Reset all settings</span>
          <button
            onClick={resetSettings}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Reset settings
          </button>
        </div>
      </div>
    </section>
  );
}
