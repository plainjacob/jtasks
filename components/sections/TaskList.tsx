import { Tables } from "@/lib/supabase";
import TaskCard from "./TaskCard";

type TaskListProps = {
  tasks: Tables<"tasks">[];
};

export default async function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
}
