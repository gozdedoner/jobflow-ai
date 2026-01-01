import { create } from "zustand";
import { persist } from "zustand/middleware";

type DateRange = 7 | 30;

interface SettingsState {
  defaultDateRange: DateRange;
  showAIInsights: boolean;
  autoExportCSV: boolean;

  setDateRange: (range: DateRange) => void;
  toggleAIInsights: () => void;
  toggleAutoExport: () => void;
  resetSettings: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      defaultDateRange: 30,
      showAIInsights: true,
      autoExportCSV: false,

      setDateRange: (range) => set({ defaultDateRange: range }),
      toggleAIInsights: () =>
        set((s) => ({ showAIInsights: !s.showAIInsights })),
      toggleAutoExport: () =>
        set((s) => ({ autoExportCSV: !s.autoExportCSV })),

      resetSettings: () =>
        set({
          defaultDateRange: 30,
          showAIInsights: true,
          autoExportCSV: false,
        }),
    }),
    {
      name: "jobflow-settings",
    }
  )
);
