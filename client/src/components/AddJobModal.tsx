import { useState, useEffect } from "react";
import { useJobStore } from "../store/jobStore";
import type { JobStatus } from "../data/jobs";

interface AddJobModalProps {
  onClose: () => void;
}

export default function AddJobModal({ onClose }: AddJobModalProps) {
  const addJob = useJobStore((state) => state.addJob);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<JobStatus>("Applied");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const isDisabled = !title || !company || !location;

  // ESC ile kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const resetForm = () => {
    setTitle("");
    setCompany("");
    setLocation("");
    setStatus("Applied");
    setNotes("");
  };

  const handleSubmit = () => {
    if (isDisabled) return;

    addJob({
  id: crypto.randomUUID(),
  title,
  company,
  location,
  status,
  notes,
  createdAt: new Date().toISOString(),
});


    setIsSuccess(true);
    resetForm();

    // ✨ Mini success delay
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isDisabled) handleSubmit();
        }}
        tabIndex={0}
        className={`
          w-[420px] rounded-2xl p-6 text-white outline-none
          transition
          ${
            isSuccess
              ? "bg-[#0f0f1a] border border-green-400 shadow-[0_0_40px_rgba(74,222,128,0.6)]"
              : "bg-[#0f0f1a] border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.45)]"
          }
        `}
      >
        <h2 className="text-xl font-semibold mb-4 text-purple-300">
          Add New Job
        </h2>

        <div className="space-y-3">
          <input
            placeholder="Job title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#141428] border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:border-purple-500 outline-none"
          />

          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-[#141428] border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:border-purple-500 outline-none"
          />

          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-[#141428] border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:border-purple-500 outline-none"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as JobStatus)}
            className="w-full bg-[#141428] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          <textarea
            placeholder="Notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full bg-[#141428] border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:border-purple-500 outline-none"
          />

          {isDisabled && (
            <p className="text-xs text-purple-300">
              Please fill in all required fields
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="text-sm text-white/60 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={isDisabled}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition
              ${
                isDisabled
                  ? "bg-purple-600/40 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-500"
              }`}
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
}
