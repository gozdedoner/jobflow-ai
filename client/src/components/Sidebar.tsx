import { NavLink } from "react-router-dom";
import {
  BriefcaseIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { label: "Applications", path: "/", icon: BriefcaseIcon },
  { label: "Analytics", path: "/analytics", icon: ChartBarIcon },
  { label: "Settings", path: "/settings", icon: Cog6ToothIcon },
];

function Sidebar() {
  return (
    <aside
      className="
        w-64 p-6 backdrop-blur-xl border-r
        bg-slate-50 border-slate-200 text-slate-900
        dark:bg-[#0f172a]/80 dark:border-white/10 dark:text-slate-100
      "
    >
      {/* Logo */}
      <h1
        className="
          text-2xl font-bold mb-10
          text-slate-900
          dark:bg-gradient-to-r dark:from-purple-400 dark:to-fuchsia-500
          dark:bg-clip-text dark:text-transparent
        "
      >
        JobFlow AI
      </h1>

      {/* Navigation */}
      <nav className="space-y-2 text-sm">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `
                group relative flex items-center gap-3 px-3 py-2 rounded-lg
                transition-all duration-200
                ${
                  isActive
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }
              `
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`
    w-5 h-5 transition
    ${
      isActive
        ? "text-purple-600 dark:text-purple-400"
        : "text-slate-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]"
    }
  `}
                  />

                  <span>{item.label}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 rounded-full bg-purple-600 dark:bg-purple-400" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
