// src/pages/Dashboard.tsx
import { useState } from "react";
import AddJobModal from "../components/AddJobModal";
import KpiCard from "../components/dashboard/KpiCard";
import KanbanColumn from "../components/KanbanColumn";
import { useJobStore } from "../store/jobStore";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ SADECE STATE AL
  const jobs = useJobStore((state) => state.jobs);

  // ✅ KPI HESAPLARI COMPONENT İÇİNDE
  const total = jobs.length;
  const interviews = jobs.filter((j) => j.status === "Interview").length;
  const offers = jobs.filter((j) => j.status === "Offer").length;
  const conversion =
    total === 0 ? 0 : Math.round((offers / total) * 100);

  return (
    <div className="p-10 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-white/50 mt-1">
            Track your job applications visually
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-medium shadow-lg"
        >
          + Add Job
        </button>
      </div>

      {/* KPI Cards */}
      <section className="grid grid-cols-4 gap-6">
        <KpiCard title="Total Jobs" value={total} />
        <KpiCard title="Interviews" value={interviews} />
        <KpiCard title="Offers" value={offers} />
        <KpiCard title="Conversion" value={`${conversion}%`} />
      </section>

      {/* Kanban */}
      <section className="grid grid-cols-4 gap-6">
        <KanbanColumn title="Applied" status="Applied" />
        <KanbanColumn title="Interview" status="Interview" />
        <KanbanColumn title="Offer" status="Offer" />
        <KanbanColumn title="Rejected" status="Rejected" />
      </section>

      {/* Modal */}
      {isModalOpen && (
        <AddJobModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
