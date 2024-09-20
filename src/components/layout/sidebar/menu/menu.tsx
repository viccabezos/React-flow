import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/utils/utils";
import { getMenuList } from "@/data/menu-list";
import { CollapseMenuButton } from "./collapse-menu-button";
import { useLocation, Link } from "react-router-dom";

import { MenuType } from "@/data/menu-list";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const location = useLocation();
  const pathname = location.pathname;
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map((group, groupIndex) => (
            <li
              className={cn("w-full", group.groupLabel ? "pt-5" : "")}
              key={groupIndex}
            >
              {renderGroupLabel(group.groupLabel, isOpen)}
              {group.menus.map((menu, menuIndex) =>
                renderMenuItem(menu, menuIndex, isOpen)
              )}
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  );
}

function renderGroupLabel(
  groupLabel: string | undefined,
  isOpen: boolean | undefined
) {
  if ((isOpen && groupLabel) || isOpen === undefined) {
    return (
      <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
        {groupLabel}
      </p>
    );
  } else if (!isOpen && isOpen !== undefined && groupLabel) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger className="w-full">
            <div className="w-full flex justify-center items-center">
              <Ellipsis className="h-5 w-5" />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{groupLabel}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  } else {
    return <p className="pb-2"></p>;
  }
}
function renderMenuItem(
  menu: MenuType,
  index: number,
  isOpen: boolean | undefined
) {
  const { href, label, icon: Icon, active, submenus } = menu;

  if (submenus.length === 0) {
    return (
      <div className="w-full" key={index}>
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button
                variant={active ? "secondary" : "ghost"}
                className="w-full justify-start h-10 mb-1"
                asChild
              >
                <Link to={href}>
                  <span className={cn(isOpen === false ? "" : "mr-4")}>
                    <Icon size={18} />
                  </span>
                  <p
                    className={cn(
                      "max-w-[200px] truncate",
                      isOpen === false
                        ? "-translate-x-96 opacity-0"
                        : "translate-x-0 opacity-100"
                    )}
                  >
                    {label}
                  </p>
                </Link>
              </Button>
            </TooltipTrigger>
            {isOpen === false && (
              <TooltipContent side="right">{label}</TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  } else {
    return (
      <div className="w-full" key={index}>
        <CollapseMenuButton
          icon={Icon}
          label={label}
          active={active}
          submenus={submenus}
          isOpen={isOpen}
        />
      </div>
    );
  }
}
