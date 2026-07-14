import { Sidebar } from "@/components/ui/sidebar";

import Link from "next/link";
import AddTaskDialog from "../sections/AddTaskDialog";
import { buttonVariants } from "../ui/button";
import { CheckCheck, Inbox, Trash2 } from "lucide-react";
import CreateProjectDialog from "../sections/CreateProjectDialog";
import { Tables } from "@/lib/supabase";

export function AppSidebar(projects: Tables<"projects">[]) {
  return (
    <Sidebar>
      <div className="flex flex-col gap-2 p-4">
        <AddTaskDialog />
        <CreateProjectDialog />
        <div className="flex flex-col">
          <Link
            className={`${buttonVariants({ variant: "ghost" })} flex justify-start`}
            href="/inbox"
          >
            <Inbox />
            Inbox
          </Link>
          <Link
            className={`${buttonVariants({ variant: "ghost" })} flex justify-start`}
            href="/completed"
          >
            <CheckCheck />
            Completed
          </Link>
          <Link
            className={`${buttonVariants({ variant: "ghost" })} flex justify-start`}
            href="/trash"
          >
            <Trash2 />
            Trash
          </Link>
          {projects.length > 0 &&
            projects.map((project) => <p key={project.id}>{project.title}</p>)}
        </div>
      </div>
    </Sidebar>
  );
}
