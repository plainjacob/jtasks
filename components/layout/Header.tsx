"use client";

import { ThemeToggle } from "../ThemeToggle";
import { SidebarTrigger } from "../ui/sidebar";
import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { buttonVariants } from "../ui/button";
import { useAuth } from "@/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

const supabase = createClient();

export default function Header() {
  const user = useAuth();

  return (
    <div className="flex justify-between">
      <SidebarTrigger />
      <ThemeToggle />
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`${buttonVariants({
              variant: "ghost",
            })} icon`}
          >
            <User />
            {user?.email}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    toast.error("Unable to sign out");
  } else {
    toast.success("Logged out succesfully");
  }
}
