import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSkeleton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
  } from "./sidebar"


// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader>
<SidebarMenu>

          hello world!
</SidebarMenu>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
          <SidebarMenu>

          <SidebarMenuItem>
  <SidebarMenuButton >fdsfds</SidebarMenuButton>
  <SidebarMenuSub>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton >fdsafdas</SidebarMenuSubButton>
    </SidebarMenuSubItem>
    <SidebarMenuSubItem>
    <SidebarMenuSubButton >fdsafdas</SidebarMenuSubButton>

    </SidebarMenuSubItem>
  </SidebarMenuSub>
</SidebarMenuItem>
</SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          by default
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />

    </Sidebar>
  )
}
