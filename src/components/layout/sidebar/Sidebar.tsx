// import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "../../../utils/utils";
import { NavLink } from "./NavLink";

// interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Menu
          </h2>
          <div className="space-y-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
