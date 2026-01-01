// src/hooks/useAnalyticsData.ts
import { useJobStore } from "../store/jobStore";
import type { Job } from "../data/jobs";

export type AnalyticsData = {
  total: number;
  interviews: number;
  offers: number;
  rejected: number;
  conversionRate: number;
};

export function useAnalyticsData(): AnalyticsData {
  const jobs = useJobStore((state) => state.jobs);

  const total = jobs.length;

  const interviews = jobs.filter((job) => job.status === "Interview").length;

  const offers = jobs.filter((job) => job.status === "Offer").length;

  const rejected = jobs.filter((job) => job.status === "Rejected").length;

  const conversionRate = total === 0 ? 0 : Math.round((offers / total) * 100);

  return {
    total,
    interviews,
    offers,
    rejected,
    conversionRate,
  };
}
