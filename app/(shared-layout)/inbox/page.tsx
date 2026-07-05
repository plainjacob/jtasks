import TaskList from "@/components/sections/TaskList";
import { getTasks } from "@/lib/tasks";
import { Suspense } from "react";

export default function Inbox() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Inbox</h1>
      <Suspense fallback={<p className="text-muted-foreground">Loading...</p>}>
        <InboxTasks />
      </Suspense>
    </>
  );
}

async function InboxTasks() {
  const tasks = await getTasks(false);
  return <TaskList tasks={tasks} />;
}
