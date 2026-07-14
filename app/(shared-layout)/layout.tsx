import { AppSidebar } from "@/components/layout/AppSidebar";
import Header from "@/components/layout/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getProjects } from "@/lib/projects";
import { ReactNode } from "react";

export default async function SharedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const projects = await getProjects();

  return (
    <SidebarProvider>
      <AppSidebar {...projects} />
      <main className="h-screen max-w-7xl mx-auto w-full p-4 flex flex-col gap-6">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
