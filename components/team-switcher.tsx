"use client"

import * as React from "react"
import { ChevronDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: string
    plan: string
  }[]
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <div className="flex items-center justify-left gap-3 py-4 px-4">

        <div className="bg-black text-sidebar-primary-foreground flex aspect-square size-7 items-center justify-center rounded-full">
          <Image src={activeTeam.logo} alt={activeTeam.name} width={24} height={24} />
        </div>
      <span className="truncate font-medium">{activeTeam.name}</span>
    </div>
  );
}
