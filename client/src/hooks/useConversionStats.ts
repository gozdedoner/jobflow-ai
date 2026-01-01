import { useJobStore } from "../store/jobStore";

type ConversionSlice = {
  name: string;
  value: number;
};

export function useConversionStats(): ConversionSlice[] {
  const jobs = useJobStore((s) => s.jobs);

  const offers = jobs.filter((j) => j.status === "Offer").length;
  const total = jobs.length;

  const rejected = Math.max(total - offers, 0);

  return [
    { name: "Offers", value: offers },
    { name: "Other", value: rejected },
  ];
}
