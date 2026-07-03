import { getTasks } from "@/app/actions";
import TaskList from "@/components/sections/TaskList";

export default async function Completed() {
  const tasks = await getTasks({ completed: true });

  return (
    <>
      <h1 className="text-2xl font-semibold">Completed</h1>
      <TaskList tasks={tasks} />
    </>
  );
}
