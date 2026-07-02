import { AppSidebar } from "@/components/layout/AppSidebar";
import Header from "@/components/layout/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function SharedLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-screen max-w-7xl mx-auto w-full p-4 flex flex-col gap-6">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
