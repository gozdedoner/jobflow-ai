import AnalyticsCards from "../components/analytics/AnalyticsCards";
import JobStatusBarChart from "../components/analytics/JobStatusBarChart";
import ConversionPieChart from "../components/analytics/ConversionPieChart";
import ApplicationsOverTimeChart from "../components/analytics/ApplicationsOverTimeChart";
import AnalyticsZeroState from "../components/analytics/AnalyticsZeroState";
import { useJobStatusStats } from "../hooks/useJobStatusStats";
import { useJobStore } from "../store/jobStore";

export default function AnalyticsPage() {
  const statusData = useJobStatusStats();
  const jobs = useJobStore((s) => s.jobs ?? []);

  return (
    <div className="p-10 space-y-10">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-white">Analytics</h1>

      {/* ZERO STATE */}
      {jobs.length === 0 ? (
        <AnalyticsZeroState />
      ) : (
        <>
          {/* KPI CARDS */}
          <AnalyticsCards />

          {/* BAR + PIE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#0f0f1a] p-6 rounded-xl">
              <JobStatusBarChart data={statusData} />
            </div>

            <div className="bg-[#0f0f1a] p-6 rounded-xl">
              <ConversionPieChart />
            </div>
          </div>

          {/* APPLICATIONS OVER TIME */}
          <div className="bg-[#0f0f1a] p-6 rounded-xl">
            <div className="h-[320px]">
              <ApplicationsOverTimeChart />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
