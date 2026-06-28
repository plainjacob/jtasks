import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import TaskDialog from "../sections/TaskDialog";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
        <Link href="/inbox">Inbox</Link>
        <Link href="/completed">Completed</Link>
        <TaskDialog />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
