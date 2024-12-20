import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Accordion",
    url: "accordion",
  },
  {
    title: "Alert",
    url: "alert",
  },
  {
    title: "Alert Dialog",
    url: "alert-dialog",
  },
  {
    title: "Aspect Ratio",
    url: "aspect-ratio",
  },
  {
    title: "Avatar",
    url: "avatar",
  },
  {
    title: "Badge",
    url: "badge",
  },
  {
    title: "Breadcrumb",
    url: "breadcrumb",
  },
  {
    title: "Button",
    url: "button",
  },
  {
    title: "Calendar",
    url: "calendar",
  },
  {
    title: "Card",
    url: "card",
  },
  {
    title: "Carousel",
    url: "carousel",
  },
  {
    title: "Chart",
    url: "chart",
  },
  {
    title: "Checkbox",
    url: "checkbox",
  },
  {
    title: "Collapsible",
    url: "collapsible",
  },
  {
    title: "Combobox",
    url: "combobox",
  },
  {
    title: "Command",
    url: "command",
  },
  {
    title: "Context Menu",
    url: "context-menu",
  },
  {
    title: "Data Table",
    url: "data-table",
  },
  {
    title: "Date Picker",
    url: "date-picker",
  },
  {
    title: "Dialog",
    url: "dialog",
  },
  {
    title: "Drawer",
    url: "drawer",
  },
  {
    title: "Dropdown Menu",
    url: "dropdown-menu",
  },
  {
    title: "Form",
    url: "form",
  },
  {
    title: "Hover Card",
    url: "hover-card",
  },
  {
    title: "Input",
    url: "input",
  },
  {
    title: "Input OTP",
    url: "input-otp",
  },
  {
    title: "Label",
    url: "label",
  },
  {
    title: "Menubar",
    url: "menubar",
  },
  {
    title: "Navigation Menu",
    url: "navigation-menu",
  },
  {
    title: "Pagination",
    url: "pagination",
  },
  {
    title: "Popover",
    url: "popover",
  },
  {
    title: "Progress",
    url: "progress",
  },
  {
    title: "Radio Group",
    url: "radio-group",
  },
  {
    title: "Resizable",
    url: "resizable",
  },
  {
    title: "Scroll Area",
    url: "scroll-area",
  },
  {
    title: "Select",
    url: "select",
  },
  {
    title: "Separator",
    url: "separator",
  },
  {
    title: "Sheet",
    url: "sheet",
  },
  {
    title: "Sidebar",
    url: "sidebar",
  },
  {
    title: "Skeleton",
    url: "skeleton",
  },
  {
    title: "Slider",
    url: "slider",
  },
  {
    title: "Sonner",
    url: "sonner",
  },
  {
    title: "Switch",
    url: "switch",
  },
  {
    title: "Table",
    url: "table",
  },
  {
    title: "Tabs",
    url: "tabs",
  },
  {
    title: "Textarea",
    url: "textarea",
  },
  {
    title: "Toast",
    url: "toast",
  },
  {
    title: "Toggle",
    url: "toggle",
  },
  {
    title: "Toggle Group",
    url: "toggle-group",
  },
  {
    title: "Tooltip",
    url: "tooltip",
  },
];


export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="offcanvas" className="absolute">
      <SidebarHeader>
        <SidebarMenu>hello world!</SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>by default</SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
