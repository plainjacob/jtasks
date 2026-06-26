import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "JTasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <div className="absolute top-2 right-2">
              <ThemeToggle />
            </div>
            <main className="h-screen max-w-7xl mx-auto w-full p-4 md:p-6 lg:p-8">
              <ConvexClientProvider>
                <SidebarTrigger />
                {children}
              </ConvexClientProvider>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
