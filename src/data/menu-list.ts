import {
  Tag,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";

type SubmenuType = {
  href: string;
  label: string;
  active: boolean;
};

type MenuType = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: SubmenuType[];
};

type GroupType = {
  groupLabel: string;
  menus: MenuType[];
};

export { MenuType, GroupType };

export function getMenuList(pathname: string): GroupType[] {
  return [
    {
      // groupLabel: "Graphs & Jobs",
      groupLabel: "",
      menus: [
        {
          href: "/create-graph",
          label: "Create Graph",
          active: pathname.includes("/create-graph"),
          icon: SquarePen, // Using SquarePen for Create Graph, feel free to change
          submenus: [],
        },
        {
          href: "/run-jobs",
          label: "Run Jobs",
          active: pathname.includes("/run-jobs"),
          icon: Bookmark, // Using Bookmark for Run Jobs, feel free to change
          submenus: [],
        },
        {
          href: "/job-monitoring",
          label: "Job Monitoring",
          active: pathname.includes("/job-monitoring"),
          icon: Tag, // Using Tag for Job Monitoring, feel free to change
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      // groupLabel: "Settings",
      menus: [
        // {
        //   href: "/users",
        //   label: "Users",
        //   active: pathname.includes("/users"),
        //   icon: Users,
        //   submenus: [],
        // },
        {
          href: "/settings",
          label: "Settings",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}

// {
//   groupLabel: "Contents",
//   menus: [
//     {
//       href: "",
//       label: "Posts",
//       active: pathname.includes("/posts"),
//       icon: SquarePen,
//       submenus: [
//         {
//           href: "/posts",
//           label: "All Posts",
//           active: pathname === "/posts",
//         },
//         {
//           href: "/posts/new",
//           label: "New Post",
//           active: pathname === "/posts/new",
//         },
//       ],
//     },
//     {
//       href: "/categories",
//       label: "Categories",
//       active: pathname.includes("/categories"),
//       icon: Bookmark,
//       submenus: [],
//     },
//     {
//       href: "/tags",
//       label: "Tags",
//       active: pathname.includes("/tags"),
//       icon: Tag,
//       submenus: [],
//     },
//   ],
// },
