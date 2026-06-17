"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ChartBarIcon,  HistoryIcon, CrownIcon, Home, User, CommandIcon, LogOutIcon } from "lucide-react"

const data = {
  //  user: {
  //    name: "shadcn",
  //    email: "m@example.com",
  //    avatar: "/avatars/shadcn.jpg",
  //  },
  navMain: [
    {
      title: "Beranda",
      url: "/",
      icon: <Home />,
    },
    {
      title: "Leaderboard",
      url: "/leaderboard",
      icon: <CrownIcon />,
    },
    {
      title: "Riwayat",
      url: "/riwayat",
      icon: <HistoryIcon />,
    },
    {
      title: "Profil",
      url: "/profil",
      icon: <User />,
    },
    {
      title: "Log Out",
      url: "/analytics",
      icon: <LogOutIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="/" className="mt-5">
                <CommandIcon className="size-8!" />
                <span className="text-[30px] font-extrabold">GEMA</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-7">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}
