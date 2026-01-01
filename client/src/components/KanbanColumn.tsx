// src/components/dashboard/KanbanColumn.tsx
import { useState, useMemo } from "react";
import { useJobStore } from "../store/jobStore";
import type { JobStatus } from "../data/jobs";
import JobCard from "../components/JobCard";

type Props = {
  title: string;
  status: JobStatus;
};

export default function KanbanColumn({ title, status }: Props) {
  // ✅ SADECE RAW STATE
  const jobs = useJobStore((state) => state.jobs);
  const updateJobStatus = useJobStore((state) => state.updateJobStatus);

  // ✅ FİLTRELEME COMPONENT İÇİNDE
  const filteredJobs = useMemo(
    () => jobs.filter((job) => job.status === status),
    [jobs, status]
  );

  const [isOver, setIsOver] = useState(false);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsOver(true);
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(e) => {
        const jobId = e.dataTransfer.getData("jobId");
        if (jobId) updateJobStatus(jobId, status);
        setIsOver(false);
      }}
      className={`
        rounded-xl p-4 min-h-[320px] transition
        ${
          isOver
            ? "border border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.45)] bg-white/10"
            : "border border-white/10 bg-white/5"
        }
      `}
    >
      <h3 className="text-white font-semibold mb-4">{title}</h3>

      <div className="space-y-3">
        {filteredJobs.length === 0 ? (
          <p className="text-white/30 text-sm italic">Drag jobs here</p>
        ) : (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>
    </div>
  );
}
