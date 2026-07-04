import { Tables } from "@/lib/supabase";
import TaskCard from "./TaskCard";

type TaskListProps = {
  tasks: Tables<"tasks">[];
};

export default async function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} {...task} />)
      ) : (
        <p className="text-muted-foreground">No tasks found</p>
      )}
    </div>
  );
}
