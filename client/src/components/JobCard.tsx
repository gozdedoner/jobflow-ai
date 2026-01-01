import type { Job, JobStatus } from "../data/jobs";
import { useJobStore } from "../store/jobStore";

interface JobCardProps {
  job: Job;
}

const STATUSES: JobStatus[] = ["Applied", "Interview", "Offer", "Rejected"];

export default function JobCard({ job }: JobCardProps) {
  const updateJobStatus = useJobStore((state) => state.updateJobStatus);

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("jobId", job.id);
      }}
      className="
        group relative
        bg-[#141428]
        border border-white/10
        rounded-lg p-4
        transition
        hover:-translate-y-1
        hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)]
      "
    >
      {/* 🔥 Hover Status Dropdown */}
      <div
        className="
          absolute top-2 right-2
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        <select
          value={job.status}
          onChange={(e) => updateJobStatus(job.id, e.target.value as JobStatus)}
          className="
            text-xs
            bg-[#0f0f1a]
            border border-white/10
            rounded-md px-2 py-1
            text-white
            outline-none
            hover:border-purple-500
          "
        >
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Content */}
      <h4 className="font-medium text-white group-hover:text-purple-300 transition">
        {job.title}
      </h4>

      <p className="text-xs text-white/60 mt-1">{job.company}</p>

      <p className="text-xs text-white/40">{job.location}</p>
    </div>
  );
}
