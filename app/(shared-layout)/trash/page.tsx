import TaskList from "@/components/sections/TaskList";
import { getArchivedTasks } from "@/lib/tasks";
import { Suspense } from "react";

export default function Trash() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold">Trash</h1>
        <p className="text-sm text-muted-foreground">
          Archived tasks will be permanently deleted after 30 days.
        </p>
      </div>
      <Suspense fallback={<p className="text-muted-foreground">Loading...</p>}>
        <TrashTasks />
      </Suspense>
    </>
  );
}

async function TrashTasks() {
  const tasks = await getArchivedTasks();
  return <TaskList tasks={tasks} />;
}
