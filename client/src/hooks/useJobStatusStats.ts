import { useJobStore } from "../store/jobStore";
import type { JobStatus } from "../data/jobs";

type StatusStat = {
  status: JobStatus;
  count: number;
};

export function useJobStatusStats(): StatusStat[] {
  const jobs = useJobStore((state) => state.jobs);

  const statuses: JobStatus[] = ["Applied", "Interview", "Offer", "Rejected"];

  return statuses.map((status) => ({
    status,
    count: jobs.filter((job) => job.status === status).length,
  }));
}
