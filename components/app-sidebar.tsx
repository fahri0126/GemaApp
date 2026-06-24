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
import {HistoryIcon, CrownIcon, Home, User2Icon, LucideBookOpen } from "lucide-react"

const data = {
  navMain: [
    {
      title: "Beranda",
      url: "/",
      icon: <Home />,
    },
    {
      title: "Leaderboard",
      url: "/leaderboard",
      icon: <CrownIcon className="fill-white"/>,
    },
    {
      title: "Riwayat",
      url: "/riwayat",
      icon: <HistoryIcon/>,
    },
    {
      title: "Profil",
      url: "/profil",
      icon: <User2Icon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <a href="/" className="mt-7 flex">
                <span className="text-[30px] ml-5 font-extrabold flex items-center">
                  <LucideBookOpen className="size-7 mr-2 font-extrabold" />
                  GEMA
                </span>
              </a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-7">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
