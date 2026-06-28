"use cache";

import TaskList from "@/components/sections/TaskList";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";

export default async function Inbox() {
  const tasks = await fetchQuery(api.tasks.getUncompletedTasks);

  return (
    <>
      <h1 className="text-2xl font-semibold">Inbox</h1>
      <TaskList tasks={tasks} />
    </>
  );
}
