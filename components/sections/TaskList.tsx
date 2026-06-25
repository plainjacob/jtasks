"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const tasks = useQuery(api.tasks.getTasks);

  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      {tasks?.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
