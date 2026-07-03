"use client";

import { ThemeToggle } from "../ThemeToggle";
import { SidebarTrigger } from "../ui/sidebar";
import { User } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { buttonVariants } from "../ui/button";
import { useAuth } from "@/providers/AuthProvider";

export default function Header() {
  const user = useAuth();

  return (
    <div className="flex justify-between">
      <SidebarTrigger />
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${buttonVariants({
            variant: "ghost",
          })} icon`}
        >
          <User />
          {user?.email}
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}
