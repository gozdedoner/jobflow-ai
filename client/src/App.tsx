import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { useThemeStore } from "./store/useThemeStore";
import { Bars3Icon } from "@heroicons/react/24/outline";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div
      className="
        min-h-screen flex transition-colors duration-300
        bg-gradient-to-br
        from-slate-100 via-white to-slate-200
        text-slate-900
        dark:from-[#0B0B12] dark:via-[#120B2E] dark:to-[#0B0B12]
        dark:text-slate-100
      "
    >
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-50 w-64">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="flex items-center gap-4 mb-6 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>

          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>

        {/* 👇 ROUTED CONTENT */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
