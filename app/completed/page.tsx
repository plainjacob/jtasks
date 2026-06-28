"use cache";

import TaskList from "@/components/sections/TaskList";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";

export default async function Completed() {
  const tasks = await fetchQuery(api.tasks.getCompletedTasks);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Completed</h1>
      <TaskList tasks={tasks} />
    </>
  );
}
