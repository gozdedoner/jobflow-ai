// src/data/jobs.ts
export type JobStatus = "Applied" | "Interview" | "Offer" | "Rejected";

export type Job = {
  id: string;
  title: string;
  company: string;
  location?: string;
  status: JobStatus;
  createdAt: string; // 👈 ISO date
};
