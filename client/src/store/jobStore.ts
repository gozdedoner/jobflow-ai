// src/store/jobStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Job } from "../data/jobs";

type JobState = {
  jobs: Job[];
  addJob: (job: Job) => void;
  updateJobStatus: (id: string, status: Job["status"]) => void;
};

const initialJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "VAPA GmbH",
    location: "Remote · EU",
    status: "Applied",
  },
  {
    id: "2",
    title: "React Developer",
    company: "Finom",
    location: "Remote",
    status: "Interview",
  },
];

export const useJobStore = create<JobState>()(
  persist(
    (set) => ({
      jobs: initialJobs,

      addJob: (job) =>
        set((state) => ({
          jobs: [...state.jobs, job],
        })),

      updateJobStatus: (id, status) =>
        set((state) => ({
          jobs: state.jobs.map((job) =>
            job.id === id ? { ...job, status } : job
          ),
        })),
    }),
    {
      name: "jobflow-storage",
    }
  )
);
