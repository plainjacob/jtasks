import TaskList from "@/components/sections/TaskList";
import { getTasks } from "@/lib/tasks";
import { Suspense } from "react";

export default function Completed() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Completed</h1>
      <Suspense fallback={<p className="text-muted-foreground">Loading...</p>}>
        <CompletedTasks />
      </Suspense>
    </>
  );
}

async function CompletedTasks() {
  const tasks = await getTasks(true);
  return <TaskList tasks={tasks} />;
}
