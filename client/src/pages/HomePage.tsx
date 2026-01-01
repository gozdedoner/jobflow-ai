// src/pages/HomePage.tsx
import { useState, useEffect } from "react";
import KanbanColumn from "../components/KanbanColumn";
import AddJobModal from "../components/AddJobModal";
import AnalyticsCards from "../components/analytics/AnalyticsCards";
import { useJobStore } from "../store/jobStore";

export default function HomePage() {
  const jobs = useJobStore((state) => state.jobs);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statuses = ["Applied", "Interview", "Offer", "Rejected"] as const;

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Dashboard</h2>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2 rounded-xl shadow-lg"
        >
          + Add Job
        </button>
      </div>

      <AnalyticsCards />

      {/* Kanban */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        {statuses.map((status) => (
          <KanbanColumn
            key={status}
            title={status}
            jobs={jobs.filter((job) => job.status === status)}
          />
        ))}
      </div>

      {isModalOpen && <AddJobModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
