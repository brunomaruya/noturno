import { NavLink } from "react-router";
import { navItems } from "./navItems";

export const SideNav = () => {
  return (
    <div className="flex flex-col gap-2 w-0 shrink-0 md:w-60">
      {navItems.map(({ to, label, icon: Icon, badge }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-[10px] border px-3 py-2.5 text-[15px] transition-colors ${
              isActive
                ? "border-neon/30 bg-neon/7 text-neon"
                : "border-transparent text-ink-dim hover:bg-surface hover:text-ink"
            }`
          }
        >
          <Icon size={20} strokeWidth={1.7} />
          {label}
          {badge && (
            <span className="ml-auto rounded-full bg-neon px-1.5 font-mono text-[11px] font-bold text-void">
              {badge}
            </span>
          )}
        </NavLink>
      ))}
    </div>
  );
};
