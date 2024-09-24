import { cn } from "@/utils/utils";

import { Sidebar } from "./sidebar/sidebar";
import { Footer } from "./footer/footer";

import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return <div> sidebar error</div>;

  return (
    <div className="flex flex-col h-screen overflow-hidden gap-2">
      <Sidebar />

      <main
        className={cn(
          "flex-1 border bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 overflow-auto",
          sidebar?.isOpen === false ? "lg:ml-20" : "lg:ml-72"
        )}
      >
        {children}
      </main>

      <footer
        className={cn(
          "h-14 box-border transition-[margin-left] ease-in-out duration-300 border-t",
          sidebar?.isOpen === false ? "lg:ml-20" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer>
    </div>
  );
}
