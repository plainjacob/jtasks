"use cache";

import { api } from "@/convex/_generated/api";
import TaskCard from "./TaskCard";
import { fetchQuery } from "convex/nextjs";
import { cacheLife, cacheTag } from "next/cache";

export default async function TaskList() {
  cacheLife("hours");
  cacheTag("tasks");

  const tasks = await fetchQuery(api.tasks.getTasks);

  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      {tasks?.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
