import TaskCard from "./TaskCard";
import { cacheLife, cacheTag } from "next/cache";
import { Doc } from "@/convex/_generated/dataModel";

type TaskListProps = {
  tasks: Doc<"tasks">[];
};

export default async function TaskList({ tasks }: TaskListProps) {
  cacheLife("hours");
  cacheTag("tasks");

  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      {tasks.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
