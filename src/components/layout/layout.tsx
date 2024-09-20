"use client";

import { cn } from "@/utils/utils";

import { Sidebar } from "./sidebar/sidebar";
import { Footer } from "./footer/footer";

import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  console.log(sidebar);

  if (!sidebar) return <div> sidebar error</div>;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_120px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 w-full",
          sidebar?.isOpen === false ? "lg:ml-[0px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300 w-full",
          sidebar?.isOpen === false ? "lg:ml-[0px]" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer>
    </>
  );
}
