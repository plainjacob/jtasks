import { Sidebar } from "@/components/ui/sidebar";

import Link from "next/link";
import AddTaskDialog from "../sections/AddTaskDialog";
import { buttonVariants } from "../ui/button";

export function AppSidebar() {
  return (
    <Sidebar>
      <div className="flex flex-col gap-2 p-4">
        <AddTaskDialog />
        <div className="flex flex-col">
          <Link
            className={`${buttonVariants({ variant: "ghost" })} text-left`}
            href="/inbox"
          >
            Inbox
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href="/completed"
          >
            Completed
          </Link>
        </div>
      </div>
    </Sidebar>
  );
}
