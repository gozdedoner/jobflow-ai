import { useJobStore } from "../store/jobStore";

type Point = {
  date: string;
  count: number;
};

export function useApplicationsOverTime(days: 7 | 30 = 30): Point[] {
  const jobs = useJobStore((s) => s.jobs ?? []);

  if (jobs.length === 0) return [];

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);

  const grouped = jobs.reduce<Record<string, number>>((acc, job) => {
    if (!job.createdAt) return acc;

    const dateObj = new Date(job.createdAt);
    if (dateObj < cutoff) return acc;

    const day = job.createdAt.slice(0, 10);
    acc[day] = (acc[day] || 0) + 1;

    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));
}
