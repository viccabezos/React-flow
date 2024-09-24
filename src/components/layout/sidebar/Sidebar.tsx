import { PanelsTopLeft } from "lucide-react";
import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import { SidebarToggle } from "./sidebar-toggle";
import { Menu } from "./menu/menu";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { ModeToggle } from "../ModeToggle/ModeToggle";

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebarToggle(); // Directly using Zustand's state

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen transition-[width] ease-in-out duration-300",
        isOpen ? "w-72" : "w-[90px]"
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <a href="/" className="flex items-center gap-2 hover:no-underline ">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              Orchestrator UI
            </h1>
          </a>
        </Button>
        <Menu isOpen={isOpen} />
        <ModeToggle />
      </div>
    </aside>
  );
}
